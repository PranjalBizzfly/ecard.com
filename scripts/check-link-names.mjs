// Checks every internal link on every page: the URL must be a current page URL (no redirects),
// and plain-text links (header, footer, breadcrumbs, lists) must use the exact page name.
// Usage: node scripts/check-link-names.mjs http://localhost:3100
const base = process.argv[2] || "http://localhost:3100";
const sm = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const titles = new Map();
const pages = new Map();
const dec = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ").trim();
for (let i = 0; i < urls.length; i += 16) {
  await Promise.all(urls.slice(i, i + 16).map(async (u) => {
    const html = await (await fetch(base + u)).text();
    pages.set(u, html);
    const crumb = html.match(/aria-current="page"[^>]*>([^<]+)</);
    if (crumb) titles.set(u, dec(crumb[1]));
  }));
}
const known = new Set(urls);
const badUrl = new Map(), badName = new Map();
for (const [from, html] of pages) {
  for (const m of html.matchAll(/<a [^>]*href="(\/[^"#?]*)[^"]*"[^>]*>([^<]*)<\/a>/g)) {
    const path = m[1].replace(/\/$/, "") || "/";
    if (path.startsWith("/_next") || path.startsWith("/api") || /\.\w+$/.test(path)) continue;
    if (!known.has(path)) { badUrl.set(path, from); continue; }
    const text = dec(m[2]);
    const t = titles.get(path);
    if (text && t && path !== "/" && text.toLowerCase() !== t.toLowerCase()) badName.set(`${path} | "${text}" ≠ "${t}"`, from);
  }
}
console.log(`Pages: ${urls.length}`);
console.log(`Links to non-current URLs: ${badUrl.size}`); for (const [p, f] of badUrl) console.log("  URL ", p, "(on", f + ")");
console.log(`Link text ≠ page name: ${badName.size}`); for (const [p, f] of badName) console.log("  NAME", p, "(on", f + ")");
