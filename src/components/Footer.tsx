import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, ScanLine, ShieldCheck, LifeBuoy, IndianRupee, MessageSquare, Smartphone } from "lucide-react";
import { Logo } from "./Logo";
import { CREDIT, SITE, SOCIAL } from "@/content/site";
import { PAYMENT_MARKS, SocialIcon } from "./FooterIcons";
import { FooterColumns } from "./FooterColumns";
import { PLAN } from "@/content/plan";
import type { CategoryKey } from "@/content/types";

type Group = { title: string; key: CategoryKey; items: [string, string][]; all?: boolean };

/**
 * Sitemap footer. Layout and styling mirror the reference footer (tab, brand column,
 * flowing link columns, CTA column, black bottom bar); colours and content are eCard's.
 * Groups marked `all` list every page; others show MAX links plus "All N pages".
 */
const G = {
  platform: { title: "Platform", key: "platform", items: PLAN.platform },
  scanning: { title: "AI Card Scanning", key: "scanning", items: PLAN.scanning },
  crm: { title: "Contact CRM", key: "crm", items: PLAN.crm },
  cards: { title: "Digital Cards", key: "cards", items: PLAN.cards },
  outreach: { title: "Email & WhatsApp", key: "outreach", items: PLAN.outreach },
  telegram: { title: "Telegram Bot", key: "telegram", items: PLAN.telegram },
  meetings: { title: "Meeting Memory", key: "meetings", items: PLAN.meetings },
  events: { title: "Events & Expos", key: "events", items: PLAN.events },
  analytics: { title: "Analytics", key: "analytics", items: PLAN.analytics },
  team: { title: "Team & Security", key: "team", items: PLAN.team },
  integrations: { title: "Integrations", key: "integrations", items: PLAN.integrations },
  solutions: { title: "Use Cases", key: "solutions", items: PLAN.solutions },
  pricing: { title: "Pricing", key: "pricing", items: PLAN.pricing },
  mobile: { title: "Mobile", key: "mobile", items: PLAN.mobile },
  guides: { title: "Guides", key: "resources", items: PLAN.resources },
  help: { title: "Help Center", key: "support", items: PLAN.support },
  product: { title: "Product", key: "more", items: PLAN.more },
  company: { title: "Company", key: "company", items: PLAN.company.filter(([s]) => s !== "") },
  about: { title: "About", key: "aboutus", items: [["about", "About eCard"], ...PLAN.aboutus], all: true },
  offerings: { title: "Products & Solutions", key: "offerings", items: PLAN.offerings, all: true },
  customers: { title: "Customers", key: "customers", items: PLAN.customers, all: true },
  library: { title: "Resources", key: "library", items: [["resources", "Resources"], ...PLAN.library], all: true },
  partners: { title: "Partners", key: "business", items: PLAN.business.filter(([s]) => s.startsWith("partners")), all: true },
  vendors: { title: "Vendors", key: "business", items: PLAN.business.filter(([s]) => s.startsWith("vendors")), all: true },
  affiliates: { title: "Affiliates", key: "business", items: PLAN.business.filter(([s]) => s.startsWith("affiliates")), all: true },
  corporate: { title: "Corporate", key: "corporate", items: PLAN.corporate, all: true },
  trust: { title: "Trust & Security", key: "trust", items: PLAN.trust, all: true },
  legal: { title: "Legal", key: "legalhub", items: [...PLAN.legalhub, ...PLAN.legal], all: true },
  support: { title: "Support", key: "helpdesk", items: PLAN.helpdesk, all: true },
  contact: { title: "Contact", key: "contacts", items: [["contact", "Contact"], ["contact-sales", "Contact Sales"], ...PLAN.contacts], all: true },
  engagement: { title: "Feedback & Reporting", key: "engagement", items: PLAN.engagement, all: true },
  customerSites: { title: "Customer Sites", key: "customerSites", items: PLAN.customerSites, all: true },
  businessSites: { title: "Business Sites", key: "businessSites", items: PLAN.businessSites, all: true },
  developerSites: { title: "Developer Sites", key: "developerSites", items: PLAN.developerSites, all: true },
  corporateSites: { title: "Corporate Sites", key: "corporateSites", items: PLAN.corporateSites, all: true },
  reportingSites: { title: "Reporting Sites", key: "reportingSites", items: PLAN.reportingSites, all: true },
  deals: { title: "Deals", key: "deals", items: PLAN.deals, all: true },
} satisfies Record<string, Group>;

// Column placement follows the reference: short reference groups under the brand,
// the long sitemap in the flowing middle, partner/resources groups in the CTA column.
// The brand column holds the short reference groups; every other group flows through
// one balanced multi-column area, so no column is left with empty space.
// Placement mirrors the reference footer group-for-group.
const BRAND_COL: Group[] = [G.guides, G.trust, G.legal, G.support];
const FLOW: Group[] = [
  G.platform, G.scanning, G.crm, G.cards, G.outreach, G.telegram, G.meetings, G.events, G.analytics, G.team,
  G.integrations, G.solutions, G.pricing, G.mobile, G.help, G.product, G.company,
  G.about, G.corporate, G.customers, G.offerings, G.affiliates, G.vendors, G.contact, G.engagement,
  G.customerSites, G.businessSites, G.developerSites, G.reportingSites, G.deals,
];
const CTA_COL: Group[] = [G.library, G.partners, G.corporateSites];

/** "Why eCard" points — verified product facts only. */
const WHY = [
  "Every visiting card scanned by the AI you choose",
  "Follow-ups by email and WhatsApp in three languages",
  "Remember where you met and who introduced you",
  "Works in any phone browser, no app to install",
];

const FEATURED = [
  { icon: ScanLine, label: "AI Card Scanning", body: "Your model, reviewed before saving", href: "/features/ai-card-scanning", tag: "Scan" },
  { icon: ShieldCheck, label: "Trust Centre", body: "2FA, audit log, encrypted keys", href: "/trust", tag: "Secure" },
  { icon: LifeBuoy, label: "Help Centre", body: "Guides and answers", href: "/support/help-centre", tag: "Support" },
  { icon: IndianRupee, label: "Pricing", body: "Free plan · 14-day trial", href: "/pricing", tag: "Plans" },
];

const TOTAL = Object.values(PLAN).reduce((n, l) => n + l.length, 0);

export function Footer() {
  const brandTop = (
    <>
          <Logo invert />
          <p className="foot-about">{SITE.tagline}</p>
          <p className="foot-label">Follow Us</p>
          <ul className="foot-social" aria-label="Follow eCard">
            {SOCIAL.map((s) => (
              <li key={s.name}><a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`eCard on ${s.name}`}><SocialIcon name={s.name} /></a></li>
            ))}
          </ul>
          <ul className="foot-feats">
            {FEATURED.map((f) => (
              <li key={f.href}>
                <Link href={f.href} className="fcard">
                  <span className="fi"><f.icon aria-hidden /></span>
                  <span className="min-w-0 flex-1">
                    <b className="block text-[.88rem] font-semibold leading-snug text-white">{f.label}</b>
                    <small className="block text-[.76rem] leading-snug text-[#9ba3b4]">{f.body}</small>
                  </span>
                  <span className="ftag">{f.tag}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="foot-contact">
            <a href={`mailto:${SITE.salesEmail}`}><Mail aria-hidden />{SITE.salesEmail}</a>
            <Link href="/contact"><MessageSquare aria-hidden />All contact options</Link>
            <p><Smartphone aria-hidden />Works in any phone browser, no app to install.</p>
          </div>
    </>
  );

  const ctaTop = (
    <div className="foot-col">
      <h2>Why eCard</h2>
      <ul className="foot-points">
        {WHY.map((w) => <li key={w}><CheckCircle2 aria-hidden />{w}</li>)}
      </ul>
      <Link href="/contact-sales" className="foot-pill2">Talk To Sales <ArrowRight className="size-4" aria-hidden /></Link>
      <a href={SITE.signIn} className="foot-pill"><span className="foot-dot" aria-hidden />Sign In</a>
    </div>
  );

  return (
    <footer className="site-footer">
      <div className="foot-tab"><span>Works in any phone browser, no app to install</span></div>

      {/* Three columns as on the reference; groups are height-balanced on wide screens. */}
      <FooterColumns brandTop={brandTop} ctaTop={ctaTop} brand={BRAND_COL} flow={FLOW} cta={CTA_COL} />

      {/* Bottom bar */}
      <div className="foot-bottom">
        <div className="inner">
          <div className="fb-links">
            <Link href="/legal/privacy-policy">Privacy</Link>
            <Link href="/legal/terms-of-service">Terms</Link>
            <Link href="/legal/cookie-policy">Cookies</Link>
            <Link href="/site-index">Explore all {TOTAL} pages</Link>
            <a href={SITE.signIn}>Sign in</a>
          </div>
          <div className="foot-pay-wrap">
            <p className="foot-label">We Accept</p>
            <ul className="foot-pay" aria-label="Payment methods">
              {PAYMENT_MARKS.map((p) => <li key={p.label}>{p.svg}</li>)}
            </ul>
          </div>
        </div>
        <div className="inner fb-legal">
          <span>© 2026 eCard. All rights reserved. Prices in INR. GST applied where applicable.</span>
          <span className="foot-credit">Made With <a href={CREDIT.href} target="_blank" rel="noopener noreferrer">{CREDIT.label}</a></span>
        </div>
      </div>
    </footer>
  );
}
