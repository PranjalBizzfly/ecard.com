"use client";

import { useId, useState } from "react";
import { SITE } from "@/content/site";

function Field({ label, value, onChange, min, max, suffix }: { label: string; value: number; onChange: (n: number) => void; min: number; max: number; suffix?: string }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="flex justify-between text-sm font-medium"><span>{label}</span><span className="text-brand-700">{value}{suffix}</span></label>
      <input id={id} type="range" min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-2 w-full accent-brand-600" />
    </div>
  );
}

export function TimeSaved() {
  const [cards, setCards] = useState(120);
  const [mins, setMins] = useState(3);
  const [pct, setPct] = useState(80);
  const hours = ((cards * mins) / 60).toFixed(1);
  const emails = Math.round((cards * pct) / 100);
  return (
    <div className="card-surface grid gap-8 rounded-3xl p-6 sm:p-8 md:grid-cols-2">
      <div className="space-y-6">
        <Field label="Cards per month" value={cards} onChange={setCards} min={10} max={1000} />
        <Field label="Minutes to type one card by hand" value={mins} onChange={setMins} min={1} max={10} />
        <Field label="Cards with an email" value={pct} onChange={setPct} min={0} max={100} suffix="%" />
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-night p-6 text-white" aria-live="polite">
        <p className="text-4xl font-bold">{hours} hours</p><p className="text-ink-300">of typing saved</p>
        <p className="mt-4 text-4xl font-bold">{emails}</p><p className="text-ink-300">intro emails sent for you</p>
        <p className="mt-4 text-xs text-ink-500">Estimates, not promises.</p>
        <a href={SITE.signUp} className="btn-primary mt-6">Get those hours back</a>
      </div>
    </div>
  );
}
