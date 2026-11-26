import { Check, Info, Lightbulb, StickyNote } from "lucide-react";
import type { Section } from "@/content/types";
import { Icon } from "./Icon";

export const sectionId = (h: string) => h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const H2 = ({ children }: { children: string }) => (
  <h2 id={sectionId(children)} className="scroll-mt-28 text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">{children}</h2>
);
const Lead = ({ t }: { t?: string }) => (t ? <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink-500">{t}</p> : null);

export function SectionBlock({ s, index }: { s: Section; index: number }) {
  switch (s.type) {
    case "prose":
      return (
        <section>
          <H2>{s.heading}</H2>
          <div className="mt-4 max-w-3xl space-y-4 text-[17px] leading-relaxed text-ink-700">{s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
        </section>
      );
    case "bullets":
      return (
        <section>
          <H2>{s.heading}</H2><Lead t={s.intro} />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {s.items.map((it) => <li key={it} className="flex gap-3 rounded-xl border border-ink-100 bg-white p-4 text-ink-700"><Check className="mt-0.5 size-5 shrink-0 text-mint-600" aria-hidden />{it}</li>)}
          </ul>
        </section>
      );
    case "steps":
      return (
        <section>
          <H2>{s.heading}</H2><Lead t={s.intro} />
          <ol className="relative mt-8 space-y-6 border-l-2 border-brand-100 pl-8">
            {s.steps.map((st, i) => (
              <li key={st.title} className="relative">
                <span className="absolute -left-[2.85rem] grid size-9 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white ring-4 ring-white">{i + 1}</span>
                <h3 className="text-lg font-semibold text-ink-950">{st.title}</h3>
                <p className="mt-1 leading-relaxed text-ink-700">{st.body}</p>
              </li>
            ))}
          </ol>
        </section>
      );
    case "cards":
      return (
        <section>
          <H2>{s.heading}</H2><Lead t={s.intro} />
          <div className={`mt-8 grid gap-4 sm:grid-cols-2 ${s.cards.length % 3 === 0 ? "lg:grid-cols-3" : ""}`}>
            {s.cards.map((c) => (
              <div key={c.title} className="card-surface p-6">
                <span className="mb-4 grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-700"><Icon name={c.icon} /></span>
                <h3 className="font-semibold text-ink-950">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.body}</p>
              </div>
            ))}
          </div>
        </section>
      );
    case "table":
      return (
        <section>
          <H2>{s.heading}</H2><Lead t={s.intro} />
          <div className="mt-6 overflow-x-auto rounded-2xl border border-ink-100">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead className="bg-ink-50 text-ink-700"><tr>{s.headers.map((h) => <th key={h} scope="col" className="px-4 py-3 font-semibold">{h}</th>)}</tr></thead>
              <tbody>{s.rows.map((r, i) => <tr key={i} className="border-t border-ink-100">{r.map((c, j) => j === 0 ? <th key={j} scope="row" className="px-4 py-3 font-medium text-ink-950">{c}</th> : <td key={j} className="px-4 py-3 text-ink-700">{c}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </section>
      );
    case "callout": {
      const tone = { info: ["bg-brand-50 border-brand-100 text-brand-800", Info], tip: ["bg-mint-100/60 border-mint-100 text-mint-600", Lightbulb], note: ["bg-amber-100/60 border-amber-100 text-ink-900", StickyNote] } as const;
      const [cls, I] = tone[s.tone];
      return (
        <aside className={`flex gap-4 rounded-2xl border p-5 ${cls}`}>
          <I className="mt-0.5 size-5 shrink-0" aria-hidden />
          <div><p className="font-semibold">{s.title}</p><p className="mt-1 leading-relaxed text-ink-700">{s.body}</p></div>
        </aside>
      );
    }
    case "split":
      return (
        <section className={`grid items-start gap-8 rounded-3xl p-6 sm:p-10 lg:grid-cols-2 ${index % 2 ? "bg-ink-50" : "bg-brand-50/60"}`}>
          <div><H2>{s.heading}</H2><div className="mt-4 space-y-4 leading-relaxed text-ink-700">{s.body.map((p, i) => <p key={i}>{p}</p>)}</div></div>
          <ul className="space-y-3">{s.points.map((p) => <li key={p} className="flex gap-3 rounded-xl bg-white p-4 text-sm text-ink-700 shadow-sm"><Check className="size-5 shrink-0 text-brand-600" aria-hidden />{p}</li>)}</ul>
        </section>
      );
  }
}
