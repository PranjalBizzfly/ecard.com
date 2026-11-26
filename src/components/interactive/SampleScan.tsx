"use client";

import { toTitleCase } from "@/lib/text";
import { useState } from "react";
import { Loader2, ScanLine } from "lucide-react";
import { SITE } from "@/content/site";

const PERSONAS = {
  Realtor: { name: "Priya Shah", title: "Sales Manager", company: "Sample Realty", phone: "+91 98xxx xxx10", email: "priya@example.com", address: "Andheri East, Mumbai" },
  Doctor: { name: "Dr. Neha Iyer", title: "Consultant Physician", company: "Sample Clinic", phone: "+91 97xxx xxx22", email: "neha@example.com", address: "Koregaon Park, Pune" },
  "Startup founder": { name: "Rohan Kulkarni", title: "Founder & CEO", company: "Sample Labs", phone: "+91 99xxx xxx31", email: "rohan@example.com", address: "HSR Layout, Bengaluru" },
} as const;
type Key = keyof typeof PERSONAS;

/**
 * Front-end demonstration only. It does not upload images or call an AI model;
 * it replays a pre-written sample result so visitors can see the review step.
 */
export function SampleScan() {
  const [pick, setPick] = useState<Key>("Realtor");
  const [state, setState] = useState<"idle" | "scanning" | "done">("idle");
  const p = PERSONAS[pick];

  const run = () => { setState("scanning"); setTimeout(() => setState("done"), 1400); };

  return (
    <div className="card-surface rounded-3xl p-6 sm:p-8">
      <fieldset>
        <legend className="text-sm font-semibold">Pick A Card</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {(Object.keys(PERSONAS) as Key[]).map((k) => (
            <button key={k} type="button" aria-pressed={pick === k} onClick={() => { setPick(k); setState("idle"); }}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${pick === k ? "border-brand-600 bg-brand-50 text-brand-700" : "border-ink-100 hover:border-ink-300"}`}>{toTitleCase(k)}</button>
          ))}
        </div>
      </fieldset>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-xl border border-ink-100 bg-gradient-to-br from-surface to-ink-50 p-6 shadow">
          <p className="text-lg font-semibold">{p.name}</p><p className="text-sm text-ink-500">{p.title} · {p.company}</p>
          <div className="mt-4 space-y-1 text-sm text-ink-700"><p>{p.phone}</p><p>{p.email}</p><p>{p.address}</p></div>
          {state === "scanning" && <span className="absolute inset-x-0 top-1/2 h-0.5 animate-pulse bg-brand-600" aria-hidden />}
        </div>
        <div aria-live="polite">
          {state === "idle" && <button type="button" onClick={run} className="btn-primary w-full"><ScanLine className="size-4" aria-hidden />Scan With AI</button>}
          {state === "scanning" && <p className="flex items-center gap-2 text-sm text-ink-500"><Loader2 className="size-4 animate-spin" aria-hidden />Reading the card…</p>}
          {state === "done" && (
            <div>
              <p className="mb-3 text-sm font-semibold">Review before saving</p>
              <ul className="space-y-2 text-sm">
                {(["name", "title", "company", "phone", "email", "address"] as const).map((f) => (
                  <li key={f} className="flex justify-between gap-2 rounded-lg border border-ink-100 px-3 py-2"><span className="capitalize text-ink-500">{f}</span><span className="text-right font-medium">{p[f]}</span></li>
                ))}
              </ul>
              <a href={SITE.signUp} className="btn-primary mt-4 w-full">Scan Your Own Cards Free</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
