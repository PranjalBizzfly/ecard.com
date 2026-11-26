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
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container-x py-14 text-center sm:py-20">
          <div className="flex justify-center"><Breadcrumbs items={trail("pricing")} /></div>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">{page.h1}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-500">{page.intro}</p>
        </div>
      </section>
      <section className="container-x pb-20"><PricingTable /></section>

      <section className="container-x pb-20">
        <h2 className="mb-6 text-3xl font-bold tracking-tight">Compare plans</h2>
        <div className="overflow-x-auto rounded-2xl border border-ink-100">
          <table className="w-full min-w-[44rem] text-left text-sm">
            <thead className="sticky top-0 bg-ink-50"><tr><th scope="col" className="px-4 py-3">Feature</th>{PLANS.map((p) => <th key={p.id} scope="col" className="px-4 py-3 text-center">{p.name}</th>)}</tr></thead>
            <tbody>
              {ROWS.map(([label, fn]) => (
                <tr key={label} className="border-t border-ink-100">
                  <th scope="row" className="px-4 py-3 font-medium">{label}</th>
                  {PLANS.map((p) => { const v = fn(p.id); return <td key={p.id} className="px-4 py-3 text-center">{typeof v === "string" ? v : v ? <Check className="mx-auto size-4 text-mint-600" aria-label="Included" /> : <Minus className="mx-auto size-4 text-ink-300" aria-label="Not included" />}</td>; })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-500">Plan details verified from ecard.gg/pricing. See <Link href="/pricing/billing-and-payments" className="text-brand-700 underline">billing & payments</Link> and the <Link href="/pricing/free-trial" className="text-brand-700 underline">14-day trial</Link>.</p>
      </section>

      <section className="container-x pb-20">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PLANS.map((p) => <li key={p.id}><Link href={`/pricing/${p.id}`} className="card-surface block p-5 hover:border-brand-400"><span className="font-semibold">{p.name} plan</span><span className="block text-sm text-ink-500">Full details →</span></Link></li>)}
        </ul>
      </section>

      {page.faqs && <div className="container-x pb-20"><FaqList faqs={page.faqs} heading="Pricing questions" /></div>}
      <div className="pb-20"><CtaBand /></div>
    </>
  );
}
