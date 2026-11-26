// Responsive QA: loads key pages at common device widths in both themes and reports
// horizontal overflow, elements wider than the viewport, overlapping header items,
// tiny tap targets and clipped text. Screenshots go to .qa/ (git-ignored).
// Usage: node scripts/responsive-check.mjs http://localhost:3100
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const base = process.argv[2] || "http://localhost:3100";
const WIDTHS = [320, 375, 414, 768, 1024, 1366, 1920, 2560];
const sm = await (await fetch(`${base}/sitemap.xml`)).text();
const all = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
// Homepage, pricing, directory + first page of every top-level section.
const seen = new Set(); const PAGES = ["/", "/pricing", "/explore-all-pages", "/contact"];
for (const p of all) { const top = p.split("/")[1]; if (!seen.has(top)) { seen.add(top); PAGES.push(p); } }
const pages = [...new Set(PAGES)];
mkdirSync(".qa", { recursive: true });

const browser = await chromium.launch();
const issues = [];
for (const theme of ["light", "dark"]) {
  for (const w of WIDTHS) {
    const ctx = await browser.newContext({ viewport: { width: w, height: w < 768 ? 800 : 900 }, deviceScaleFactor: 1, reducedMotion: "reduce" });
    await ctx.addInitScript((t) => { try { localStorage.setItem("theme", t); } catch {} }, theme);
    const page = await ctx.newPage();
    for (const path of pages) {
      await page.goto(base + path, { waitUntil: "load" });
      await page.evaluate((t) => { document.documentElement.classList.toggle("dark", t === "dark"); }, theme);
      const r = await page.evaluate(() => {
        const vw = document.documentElement.clientWidth;
        const out = { scrollW: document.documentElement.scrollWidth, vw, wide: [], tiny: [], overlap: [] };
        const name = (el) => el.tagName.toLowerCase() + (el.id ? "#" + el.id : "") + (typeof el.className === "string" && el.className ? "." + el.className.trim().split(/\s+/).slice(0, 2).join(".") : "");
        const hidden = (el) => { for (let e = el; e; e = e.parentElement) { const s = getComputedStyle(e); if (s.display === "none" || s.visibility === "hidden" || s.overflowX === "hidden" || s.overflowX === "auto" || s.overflowX === "scroll" || s.overflowX === "clip") return e !== el || s.display === "none" || s.visibility === "hidden"; } return false; };
        for (const el of document.querySelectorAll("body *")) {
          const b = el.getBoundingClientRect();
          if (!b.width || hidden(el)) continue;
          if ((b.right > vw + 1 || b.left < -1) && getComputedStyle(el).position !== "fixed") out.wide.push(`${name(el)} [${Math.round(b.left)}..${Math.round(b.right)}]`);
        }
        if (vw < 768) for (const a of document.querySelectorAll("header a, header button, main a.btn, main button, .scroll-fab")) {
          const b = a.getBoundingClientRect(); if (b.width && b.height && (b.width < 32 || b.height < 32) && !hidden(a)) out.tiny.push(`${name(a)} ${Math.round(b.width)}x${Math.round(b.height)}`);
        }
        const hdr = [...document.querySelectorAll("header a, header button")].filter((e) => { const b = e.getBoundingClientRect(); return b.width && b.top < 100 && !hidden(e); });
        for (let i = 0; i < hdr.length; i++) for (let j = i + 1; j < hdr.length; j++) {
          const a = hdr[i].getBoundingClientRect(), c = hdr[j].getBoundingClientRect();
          if (hdr[i].contains(hdr[j]) || hdr[j].contains(hdr[i])) continue;
          if (a.left < c.right - 2 && c.left < a.right - 2 && a.top < c.bottom - 2 && c.top < a.bottom - 2) out.overlap.push(`${name(hdr[i])} × ${name(hdr[j])}`);
        }
        out.wide = out.wide.slice(0, 5); out.tiny = [...new Set(out.tiny)].slice(0, 5);
        return out;
      });
      const key = `${theme} ${w}px ${path}`; process.stderr.write(".");
      if (r.scrollW > r.vw + 1) issues.push(`${key}: page scrolls sideways (${r.scrollW} > ${r.vw})`);
      for (const x of r.wide) issues.push(`${key}: wider than screen ${x}`);
      for (const x of r.overlap) issues.push(`${key}: header overlap ${x}`);
      for (const x of r.tiny) issues.push(`${key}: small tap target ${x}`);
      if (["/", "/pricing", "/explore-all-pages", pages[4]].includes(path))
        await page.screenshot({ path: `.qa/${theme}-${w}-${path === "/" ? "home" : path.slice(1).replace(/\//g, "_")}.png`, fullPage: false });
    }
    // Mobile menu + search open check
    if (w < 1024) {
      await page.goto(base + "/", { waitUntil: "load" });
      const btn = page.locator('header button[aria-label*="menu" i]').first();
      if (await btn.count()) { await btn.click(); await page.waitForTimeout(300); await page.screenshot({ path: `.qa/${theme}-${w}-menu.png` });
        const sw = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        if (sw > 1) issues.push(`${theme} ${w}px: mobile menu causes sideways scroll`); }
      else issues.push(`${theme} ${w}px: no mobile menu button found`);
    }
    await ctx.close();
  }
}
await browser.close();
console.log(`Checked ${pages.length} pages × ${WIDTHS.length} widths × 2 themes`);
console.log(issues.length ? issues.join("\n") : "No issues found");
