import type { CategoryKey, PageDef } from "./types";
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

export const ALL_PAGES: PageDef[] = [
  ...company, ...platform, ...scanning, ...crm, ...cards, ...outreach, ...telegram, ...meetings,
  ...events, ...analytics, ...team, ...integrations, ...solutions, ...pricing, ...mobile,
  ...resources, ...support, ...legal, ...more,
  ...aboutus, ...offerings, ...customers, ...library, ...business, ...corporate, ...trust, ...engagement,
  ...helpdesk, ...contacts, ...legalhub, ...customerSites, ...businessSites, ...developerSites,
  ...corporateSites, ...reportingSites, ...deals,
];

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
