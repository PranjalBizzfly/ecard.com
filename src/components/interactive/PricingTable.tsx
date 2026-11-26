"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { BASE_FEATURES, PLANS, PRICING_NOTES } from "@/content/site";

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function PricingTable() {
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly");
  return (
    <div>
      <div className="flex flex-col items-center gap-3">
        <div role="radiogroup" aria-label="Billing cycle" className="inline-flex rounded-full border border-ink-100 bg-white p-1 shadow-sm">
          {(["monthly", "yearly"] as const).map((c) => (
            <button key={c} type="button" role="radio" aria-checked={cycle === c} onClick={() => setCycle(c)}
              className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${cycle === c ? "bg-ink-950 text-white" : "text-ink-500 hover:text-ink-950"}`}>
              {c}{c === "yearly" && <span className="ml-2 rounded-full bg-mint-100 px-2 py-0.5 text-[11px] text-mint-600">save ~2 months</span>}
            </button>
          ))}
        </div>
        <p className="min-h-5 text-center text-sm text-ink-500" aria-live="polite">
          {cycle === "yearly" ? PRICING_NOTES.yearly : "Monthly prices shown. Cancel any time."}
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {PLANS.map((p) => (
          <div key={p.id} className={`relative flex flex-col rounded-2xl border p-6 ${p.popular ? "border-brand-600 bg-white shadow-xl shadow-brand-600/10 ring-1 ring-brand-600" : "border-ink-100 bg-white"}`}>
            {p.popular && <span className="absolute -top-3 left-6 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">Popular</span>}
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-sm text-ink-500">{p.audience}</p>
            <p className="mt-5">
              {p.price === null ? <span className="text-3xl font-bold">Custom</span> : <><span className="text-4xl font-bold tracking-tight">{inr(p.price)}</span><span className="text-sm text-ink-500">/mo</span></>}
            </p>
            {cycle === "yearly" && p.price ? <p className="mt-1 text-xs text-ink-500">Monthly equivalent shown · yearly total at checkout</p> : null}
            <dl className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-ink-50 p-3 text-center text-xs">
              <div><dt className="text-ink-500">Users</dt><dd className="font-semibold">{p.users}</dd></div>
              <div><dt className="text-ink-500">Storage</dt><dd className="font-semibold">{p.storage}</dd></div>
              <div><dt className="text-ink-500">Scans/mo</dt><dd className="font-semibold">{p.scans}</dd></div>
            </dl>
            <ul className="mt-5 flex-1 space-y-2 text-sm">
              {[...p.extras, ...BASE_FEATURES].map((f) => <li key={f} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-mint-600" aria-hidden />{f}</li>)}
            </ul>
            <a href={p.id === "business" ? p.cta.href.replace("monthly", cycle) : p.cta.href} className={`mt-6 ${p.popular ? "btn-primary" : "btn-ghost"}`}>{p.cta.label}</a>
          </div>
        ))}
      </div>
      <ul className="mt-8 space-y-1 text-center text-sm text-ink-500">
        <li>{PRICING_NOTES.trial}</li><li>{PRICING_NOTES.payment}</li><li>{PRICING_NOTES.currency}</li>
      </ul>
    </div>
  );
}
