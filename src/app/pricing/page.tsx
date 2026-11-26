import Link from "next/link";
import { notFound } from "next/navigation";
import { getPage, trail } from "@/content/registry";
import { pageMetadata } from "@/lib/seo";
import { BASE_FEATURES, PLANS } from "@/content/site";
import { PricingTable } from "@/components/interactive/PricingTable";
import { Breadcrumbs, CtaBand, FaqList } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { Check, Minus } from "lucide-react";

export function generateMetadata() {
  const p = getPage("pricing");
  return p ? pageMetadata(p) : {};
}

const ROWS: [string, (id: string) => string | boolean][] = [
  ["Users", (id) => PLANS.find((p) => p.id === id)!.users],
  ["Storage", (id) => PLANS.find((p) => p.id === id)!.storage],
  ["Scans per month", (id) => PLANS.find((p) => p.id === id)!.scans],
  ...BASE_FEATURES.map((f) => [f, () => true] as [string, () => boolean]),
  ["Google Contacts sync", (id) => id !== "free"],
  ["Google Calendar & Meet booking", (id) => id !== "free"],
  ["Webhooks", (id) => ["professional", "business", "enterprise"].includes(id)],
  ["White label & custom domain", (id) => ["business", "enterprise"].includes(id)],
];

export default function PricingPage() {
  const page = getPage("pricing");
  if (!page) notFound();
  return (
    <>
      <JsonLd page={page} crumbs={trail("pricing")} />
      <header className="ip ip-hero">
        <div className="container-x ip-hero-inner">
          <Breadcrumbs items={trail("pricing")} centred />
          <div className="ip-hero-grid is-centred">
            <div className="mx-auto min-w-0 max-w-3xl">
              <span className="ip-eyebrow">{page.eyebrow ?? "Pricing"}</span>
              <h1 className="ip-h1">{page.h1}</h1>
              <p className="ip-intro">{page.intro}</p>
            </div>
          </div>
        </div>
      </header>
      <div className="ip container-x ip-body">
        <PricingTable />

        <section className="ip-sec mt-16" aria-labelledby="compare-h">
          <h2 id="compare-h" className="ip-h2">Compare plans</h2>
          <div className="ip-table">
            <table className="!min-w-[44rem]">
              <thead><tr><th scope="col">Feature</th>{PLANS.map((p) => <th key={p.id} scope="col" className="text-center">{p.name}</th>)}</tr></thead>
              <tbody>
                {ROWS.map(([label, fn]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    {PLANS.map((p) => { const v = fn(p.id); return <td key={p.id} className="text-center">{typeof v === "string" ? v : v ? <Check className="mx-auto size-4 text-brand-600" aria-label="Included" /> : <Minus className="mx-auto size-4 text-ink-500" aria-label="Not included" />}</td>; })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink-500">Plan details verified from ecard.gg/pricing. See <Link href="/pricing/billing-and-payments" className="font-bold text-brand-600 hover:underline">billing & payments</Link> and the <Link href="/pricing/free-trial" className="font-bold text-brand-600 hover:underline">14-day trial</Link>.</p>
        </section>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PLANS.map((p) => <li key={p.id}><Link href={`/pricing/${p.id}`} className="ip-card flex h-full flex-col"><span className="ip-kicker">Plan</span><span className="mt-2 text-lg font-extrabold text-ink-950">{p.name} plan</span><span className="mt-3 text-sm font-bold text-brand-600">Full details →</span></Link></li>)}
        </ul>

        {page.faqs && <div className="mt-12"><FaqList id="faqs" faqs={page.faqs} heading="Pricing questions" /></div>}
      </div>
      <CtaBand />
    </>
  );
}
