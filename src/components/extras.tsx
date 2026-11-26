import Link from "next/link";
import type { ReactNode } from "react";
import type { CategoryKey } from "@/content/types";
import { CATEGORIES } from "@/content/site";
import { pagesIn } from "@/content/registry";
import { SampleScan } from "./interactive/SampleScan";
import { TimeSaved } from "./interactive/TimeSaved";
import { ContactForm } from "./interactive/ContactForm";
import { PricingTable } from "./interactive/PricingTable";

function SiteIndex() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {(Object.keys(CATEGORIES) as CategoryKey[]).map((c) => (
        <section key={c} id={c} className="scroll-mt-28">
          <h2 className="mb-3 text-lg font-semibold">{CATEGORIES[c].label}</h2>
          <ul className="space-y-1.5 text-sm">
            {pagesIn(c).map((p) => <li key={p.slug}><Link href={p.slug ? `/${p.slug}` : "/"} className="text-ink-700 hover:text-brand-700">{p.title}</Link></li>)}
          </ul>
        </section>
      ))}
    </div>
  );
}

/** Pages that collect an enquiry: a validated form that opens the visitor's email app. */
const FORM_PAGES: Record<string, string> = {
  "contact/sales": "eCard sales enquiry",
  "contact/media": "eCard media enquiry",
  "contact/partners": "eCard partnership enquiry",
  "partners/become-a-partner": "eCard partner application",
  "vendors/become-a-vendor": "eCard vendor registration",
  "affiliates/join": "eCard affiliate application",
  feedback: "eCard feedback",
  "feedback/complaints": "eCard complaint",
  "support/contact": "eCard support request",
  "speak-up": "eCard speak-up report",
  "speak-up/ethics": "eCard ethics concern",
  "speak-up/workplace": "eCard workplace concern",
  "speak-up/whistleblower": "eCard whistleblower report",
};

export function getExtra(slug: string, title: string): ReactNode | null {
  if (EXTRAS[slug]) return EXTRAS[slug]();
  if (FORM_PAGES[slug]) return <ContactForm subject={FORM_PAGES[slug]} />;
  if (slug.startsWith("deals/")) return <ContactForm subject={`eCard ${title} enquiry`} />;
  return null;
}

/** Interactive or index widgets shown above the article body on specific pages. */
export const EXTRAS: Record<string, () => ReactNode> = {
  "sample-scan": () => <SampleScan />,
  "features/ai-card-scanning/sample-scan-demo": () => <SampleScan />,
  "product/sample-personas": () => <SampleScan />,
  "platform/time-saved": () => <TimeSaved />,
  contact: () => <ContactForm />,
  "contact-sales": () => <ContactForm subject="eCard Enterprise" />,
  "help/contact-support": () => <ContactForm subject="eCard support request" />,
  "pricing/compare-plans": () => <PricingTable />,
  "site-index": () => <SiteIndex />,
};
