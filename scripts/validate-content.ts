/* Content QA: run with `npm run validate`. Exits non-zero on errors. */
import { ALL_PAGES } from "../src/content/registry";
import { PLAN } from "../src/content/plan";
import type { PageDef, Section } from "../src/content/types";

const errors: string[] = [];
const warns: string[] = [];
const planned = Object.entries(PLAN).flatMap(([cat, list]) => list.map(([slug]) => ({ slug, cat })));
const plannedSet = new Set(planned.map((p) => p.slug));


if (ALL_PAGES.length !== planned.length) errors.push(`Registry has ${ALL_PAGES.length} pages, plan has ${planned.length}`);

const seen = new Map<string, string>();
const dup = (kind: string, v: string, slug: string) => {
  const k = `${kind}:${v.trim().toLowerCase()}`;
  if (seen.has(k)) errors.push(`Duplicate ${kind} on /${slug} and /${seen.get(k)}: "${v}"`);
  else seen.set(k, slug);
};

const words = (s: Section): string => {
  switch (s.type) {
    case "prose": return s.paragraphs.join(" ");
    case "bullets": return [s.intro ?? "", ...s.items].join(" ");
    case "steps": return [s.intro ?? "", ...s.steps.flatMap((x) => [x.title, x.body])].join(" ");
    case "cards": return [s.intro ?? "", ...s.cards.flatMap((x) => [x.title, x.body])].join(" ");
    case "table": return [s.intro ?? "", ...s.rows.flat()].join(" ");
    case "callout": return s.body;
    case "split": return [...s.body, ...s.points].join(" ");
  }
};
const count = (p: PageDef) => [p.intro, ...p.sections.map(words), ...(p.faqs ?? []).flatMap((f) => [f.q, f.a])].join(" ").split(/\s+/).filter(Boolean).length;

const wc: number[] = [];
for (const p of ALL_PAGES) {
  if (!plannedSet.has(p.slug)) errors.push(`Page /${p.slug} is not in plan.ts`);
  const planCat = planned.find((x) => x.slug === p.slug)?.cat;
  if (planCat && planCat !== p.category) errors.push(`/${p.slug} category ${p.category} ≠ plan ${planCat}`);
  dup("slug", p.slug || "(home)", p.slug);
  dup("seoTitle", p.seoTitle, p.slug);
  dup("description", p.description, p.slug);
  dup("h1", p.h1, p.slug);
  if (p.seoTitle.length > 60) warns.push(`seoTitle >60 (${p.seoTitle.length}) /${p.slug}`);
  if (p.description.length < 110 || p.description.length > 165) warns.push(`description length ${p.description.length} /${p.slug}`);
  for (const r of p.related) if (!plannedSet.has(r)) errors.push(`/${p.slug} related → missing /${r}`);
  if (!p.custom) {
    if (p.sections.length < 3) errors.push(`/${p.slug} has only ${p.sections.length} sections`);
    const n = count(p); wc.push(n);
    if (n < 450) warns.push(`thin content (${n} words) /${p.slug}`);
  }
}
for (const s of plannedSet) if (!ALL_PAGES.some((p) => p.slug === s)) errors.push(`Planned route /${s} has no content`);

wc.sort((a, b) => a - b);
console.log(`Pages: ${ALL_PAGES.length}. Words/page min ${wc[0]}, median ${wc[Math.floor(wc.length / 2)]}, max ${wc[wc.length - 1]}, total ${wc.reduce((a, b) => a + b, 0)}`);
warns.forEach((w) => console.log("WARN ", w));
errors.forEach((e) => console.log("ERROR", e));
console.log(`${errors.length} errors, ${warns.length} warnings`);
process.exit(errors.length ? 1 : 0);
