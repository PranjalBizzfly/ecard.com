// Crawl QA against a running server: node scripts/crawl.mjs [base]
const base = process.argv[2] ?? "http://localhost:3000";
const sm = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sm.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const errors = []; const titles = new Map(); const links = new Set(); const imgs = new Set();

for (const path of urls) {
  const r = await fetch(base + path);
  if (r.status !== 200) { errors.push(`${r.status} ${path}`); continue; }
  const html = await r.text();
  const t = html.match(/<title>(.*?)<\/title>/)?.[1];
  if (!t) errors.push(`no title ${path}`); else if (titles.has(t)) errors.push(`dup title "${t}" ${path} & ${titles.get(t)}`); else titles.set(t, path);
  if (!/<meta name="description" content="[^"]{50,}/.test(html)) errors.push(`no description ${path}`);
  if (!/<link rel="canonical"/.test(html)) errors.push(`no canonical ${path}`);
  if (/noindex/.test(html)) errors.push(`noindex ${path}`);
  if ((html.match(/<h1[\s>]/g) ?? []).length !== 1) errors.push(`h1 count ≠ 1 ${path}`);
  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) links.add(m[1]);
  for (const m of html.matchAll(/<img[^>]+src="([^"]+)"/g)) imgs.add(m[1].replace(/&amp;/g, "&"));
}
for (const l of links) {
  if (l.startsWith("/_next")) continue;
  const r = await fetch(base + l, { redirect: "manual" });
  if (r.status !== 200) errors.push(`broken link ${r.status} ${l}`);
}
for (const i of imgs) { const r = await fetch(new URL(i, base)); if (r.status !== 200) errors.push(`broken image ${r.status} ${i}`); }
const nf = await fetch(`${base}/this-does-not-exist`);
if (nf.status !== 404) errors.push(`unknown path returned ${nf.status}`);
const rb = await (await fetch(`${base}/robots.txt`)).text();
if (!rb.includes("Sitemap:")) errors.push("robots.txt missing sitemap");
console.log(`Crawled ${urls.length} sitemap URLs, ${links.size} unique internal links, ${imgs.size} images.`);
errors.forEach((e) => console.log("ERROR", e));
console.log(`${errors.length} errors`);
process.exit(errors.length ? 1 : 0);
