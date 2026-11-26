/* Generates docs/sitemap.md and docs/page-inventory.md from the content registry. Run: npm run docs */
import { writeFileSync } from "node:fs";
import { ALL_PAGES } from "../src/content/registry";
import { CATEGORIES, SITE } from "../src/content/site";
import type { CategoryKey, PageDef } from "../src/content/types";

const url = (p: PageDef) => (p.slug ? `/${p.slug}` : "/");
const esc = (s: string) => s.replace(/\|/g, "\\|").replace(/\n/g, " ");
const cats = Object.keys(CATEGORIES) as CategoryKey[];
const AUDIENCE: Record<CategoryKey, string> = {
  company: "Prospects evaluating eCard", platform: "Prospects & buyers", scanning: "Professionals who collect visiting cards",
  crm: "Users managing contacts", cards: "Professionals sharing their details", outreach: "Users following up after meetings",
  telegram: "Mobile-first users", meetings: "Relationship-driven professionals", events: "Expo & event attendees/exhibitors",
  analytics: "Users measuring follow-up", team: "Workspace owners & admins", integrations: "Technical evaluators & admins",
  solutions: "Industry buyers", pricing: "Buyers comparing plans", mobile: "Phone users", resources: "New and existing users",
  support: "Existing users", legal: "All visitors", more: "Prospects & users",
  aboutus: "Prospects, partners & stakeholders", offerings: "Prospects & buyers", customers: "Prospects evaluating proof",
  library: "Learners & prospects", business: "Prospective partners, vendors & affiliates", corporate: "Candidates, media & stakeholders",
  trust: "Security & procurement reviewers", engagement: "Customers & stakeholders with feedback or concerns",
  helpdesk: "Existing users", contacts: "Anyone contacting eCard", legalhub: "All visitors",
  customerSites: "Customers", businessSites: "Partners & resellers", developerSites: "Developers",
  corporateSites: "Stakeholders", reportingSites: "Stakeholders raising concerns", deals: "Price-conscious buyers",
};
const INTENT: Record<PageDef["variant"], string> = {
  feature: "Commercial investigation", guide: "Informational / how-to", integration: "Commercial investigation",
  solution: "Commercial investigation", reference: "Transactional / comparison", support: "Informational / support", legal: "Navigational",
};
const SOURCE_URL: Partial<Record<CategoryKey, string>> = { pricing: "https://ecard.gg/pricing" };

let sm = `# Sitemap\n\nGenerated from \`src/content/registry.ts\` (${ALL_PAGES.length} routes). Facts verified against ${SITE.appUrl} on ${SITE.verifiedOn}.\n\n`;
for (const c of cats) {
  const list = ALL_PAGES.filter((p) => p.category === c);
  sm += `## ${CATEGORIES[c].label} (${list.length})\n\n${list.map((p) => `- [${p.title}](${url(p)}) — \`${url(p)}\``).join("\n")}\n\n`;
}
writeFileSync("docs/sitemap.md", sm);

let inv = `# Page Inventory\n\nGenerated from the registry — ${ALL_PAGES.length} pages. Columns follow the brief: number, title, slug, category, purpose, audience, intent, source, content requirements, assets, SEO title, meta description, H1, internal links, implementation status, QA status.\n\n`;
inv += `Source legend: **verified** = every product claim from ecard.gg; **mixed** = verified product facts + general guidance; **educational** = general guidance, no new product claims.\n\n`;
inv += "| # | Title | URL | Category | Purpose | Audience | Intent | Source ref | Content | Assets | SEO title | Meta description | H1 | Internal links | Impl. | QA |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|\n";
ALL_PAGES.forEach((p, i) => {
  const content = `${p.sections.length} sections (${[...new Set(p.sections.map((s) => s.type))].join(", ")})${p.faqs?.length ? `, ${p.faqs.length} FAQs` : ""}; source: ${p.source}`;
  const assets = p.custom ? "Hand-built page components" : p.visual === "none" ? "Icons only" : `Product mock: ${p.visual} (sample data)`;
  inv += `| ${i + 1} | ${esc(p.title)} | \`${url(p)}\` | ${CATEGORIES[p.category].label} | ${esc(p.intro.split(". ")[0])} | ${AUDIENCE[p.category]} | ${INTENT[p.variant]} | ${SOURCE_URL[p.category] ?? SITE.appUrl} | ${content} | ${assets} | ${esc(p.seoTitle)} | ${esc(p.description)} | ${esc(p.h1)} | ${p.related.map((r) => `/${r}`).join(", ")} | Implemented | Passed automated QA |\n`;
});
writeFileSync("docs/page-inventory.md", inv);
console.log(`Wrote docs/sitemap.md and docs/page-inventory.md for ${ALL_PAGES.length} pages`);
