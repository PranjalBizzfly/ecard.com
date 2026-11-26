import type { CategoryKey, PageDef } from "./types";
import { remapSlugs } from "./remap";
import { pages as company } from "./pages/company";
import { pages as platform } from "./pages/platform";
import { pages as scanning } from "./pages/scanning";
import { pages as crm } from "./pages/crm";
import { pages as cards } from "./pages/cards";
import { pages as outreach } from "./pages/outreach";
import { pages as telegram } from "./pages/telegram";
import { pages as meetings } from "./pages/meetings";
import { pages as events } from "./pages/events";
import { pages as analytics } from "./pages/analytics";
import { pages as team } from "./pages/team";
import { pages as integrations } from "./pages/integrations";
import { pages as solutions } from "./pages/solutions";
import { pages as pricing } from "./pages/pricing";
import { pages as mobile } from "./pages/mobile";
import { pages as resources } from "./pages/resources";
import { pages as support } from "./pages/support";
import { pages as legal } from "./pages/legal";
import { pages as more } from "./pages/more";
import { pages as deals } from "./pages/deals";
import { pages as reportingSites } from "./pages/reportingSites";
import { pages as corporateSites } from "./pages/corporateSites";
import { pages as developerSites } from "./pages/developerSites";
import { pages as businessSites } from "./pages/businessSites";
import { pages as customerSites } from "./pages/customerSites";
import { pages as legalhub } from "./pages/legalhub";
import { pages as contacts } from "./pages/contacts";
import { pages as helpdesk } from "./pages/helpdesk";
import { pages as engagement } from "./pages/engagement";
import { pages as trust } from "./pages/trust";
import { pages as corporate } from "./pages/corporate";
import { pages as business } from "./pages/business";
import { pages as library } from "./pages/library";
import { pages as customers } from "./pages/customers";
import { pages as offerings } from "./pages/offerings";
import { pages as aboutus } from "./pages/aboutus";

const SOURCE_PAGES: PageDef[] = [
  ...company, ...platform, ...scanning, ...crm, ...cards, ...outreach, ...telegram, ...meetings,
  ...events, ...analytics, ...team, ...integrations, ...solutions, ...pricing, ...mobile,
  ...resources, ...support, ...legal, ...more,
  ...aboutus, ...offerings, ...customers, ...library, ...business, ...corporate, ...trust, ...engagement,
  ...helpdesk, ...contacts, ...legalhub, ...customerSites, ...businessSites, ...developerSites,
  ...corporateSites, ...reportingSites, ...deals,
];

/** URLs are derived from page titles (see remap.ts). OLD_TO_NEW keeps legacy paths redirecting. */
const REMAPPED = remapSlugs(SOURCE_PAGES);
export const ALL_PAGES: PageDef[] = REMAPPED.pages;
export const OLD_TO_NEW = REMAPPED.oldToNew;

const bySlug = new Map(ALL_PAGES.map((p) => [p.slug, p]));

export const getPage = (slug: string) => bySlug.get(slug);
export const pagesIn = (c: CategoryKey) => ALL_PAGES.filter((p) => p.category === c);
export const href = (slug: string) => (slug ? `/${slug}` : "/");

/** Breadcrumb trail from slug path segments that exist as pages. */
export function trail(slug: string) {
  const parts = slug.split("/");
  const out: { title: string; href: string }[] = [{ title: "Home", href: "/" }];
  for (let i = 1; i <= parts.length; i++) {
    const s = parts.slice(0, i).join("/");
    const p = bySlug.get(s);
    if (p) out.push({ title: p.title, href: href(s) });
  }
  return out;
}

const byOldSlug = new Map(SOURCE_PAGES.map((p, i) => [p.slug, ALL_PAGES[i]]));
/** Map a legacy [slug, label] plan entry to the page's current [slug, title]. */
export function resolveItem([s, t]: [string, string]): [string, string] {
  const p = byOldSlug.get(s) ?? bySlug.get(s);
  return p ? [p.slug, p.title] : [s, t];
}
/** Current URL path for a legacy route key (e.g. the free plan's old key maps to its title-based path). */
export const pathFor = (oldSlug: string) => href(resolveItem([oldSlug, ""])[0]);
/** Current page title for a legacy route key. */
export const titleFor = (oldSlug: string) => resolveItem([oldSlug, oldSlug])[1];
