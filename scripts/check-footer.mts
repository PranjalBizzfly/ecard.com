/* Verifies the rendered footer links every corporate-architecture page. Run against a live server:
   npx tsx scripts/check-footer.ts http://localhost:3100 */
import { PLAN } from "../src/content/plan";

const NEW_GROUPS = ["aboutus", "offerings", "customers", "library", "business", "corporate", "trust", "engagement", "helpdesk",
  "contacts", "legalhub", "customerSites", "businessSites", "developerSites", "corporateSites", "reportingSites", "deals"] as const;

const base = process.argv[2] ?? "http://localhost:3000";
const html = await (await fetch(base + "/")).text();
const footer = html.slice(html.lastIndexOf("<footer"));
const hrefs = new Set([...footer.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]));

const expected = NEW_GROUPS.flatMap((k) => PLAN[k].map(([s]) => `/${s}`));
const missing = expected.filter((p) => !hrefs.has(p));
console.log(`New architecture pages: ${expected.length}. Linked in footer: ${expected.length - missing.length}. Total footer links: ${hrefs.size}.`);
missing.forEach((m) => console.log("MISSING", m));
process.exit(missing.length ? 1 : 0);
