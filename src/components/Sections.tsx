import { AlertTriangle, Info, Lightbulb } from "lucide-react";
import type { Section } from "@/content/types";
import { Icon } from "./Icon";
import { toTitleCase } from "@/lib/text";

export const sectionId = (h: string) => h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const H2 = ({ children }: { children: string }) => <h2 className="ip-h2">{toTitleCase(children)}</h2>;
const Lead = ({ t }: { t?: string }) => (t ? <p className="ip-lead">{t}</p> : null);

/** One body section of the inner-page article (ref spec §5.3–5.7): unboxed, separated by hairlines. */
export function SectionBlock({ s }: { s: Section; index?: number }) {
  const id = "heading" in s ? sectionId(s.heading) : undefined;
  switch (s.type) {
    case "prose":
      return (
        <section id={id} className="ip-sec">
          <H2>{s.heading}</H2>
          <div className="prose-j">{s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
        </section>
      );
    case "bullets":
      return (
        <section id={id} className="ip-sec">
          <H2>{s.heading}</H2>
          <div className="prose-j">
            {s.intro && <p>{s.intro}</p>}
            <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
          </div>
        </section>
      );
    case "steps":
      return (
        <section id={id} className="ip-sec">
          <H2>{s.heading}</H2><Lead t={s.intro} />
          <ol className="ip-steps">
            {s.steps.map((st, i) => (
              <li key={st.title} className="ip-card">
                <span className="ip-num" aria-hidden>{i + 1}</span>
                <div><h3 className="font-bold text-ink-950">{toTitleCase(st.title)}</h3><p className="mt-1 text-[0.95rem] leading-relaxed text-ink-700">{st.body}</p></div>
              </li>
            ))}
          </ol>
        </section>
      );
    case "cards":
      return (
        <section id={id} className="ip-sec">
          <H2>{s.heading}</H2><Lead t={s.intro} />
          <ul className={`ip-cards ${s.cards.length % 2 ? "is-3" : ""}`}>
            {s.cards.map((c) => (
              <li key={c.title} className="ip-card">
                {c.icon && <span className="ip-ic mb-4"><Icon name={c.icon} className="size-5" /></span>}
                <h3 className="font-bold leading-snug text-ink-950">{toTitleCase(c.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{c.body}</p>
              </li>
            ))}
          </ul>
        </section>
      );
    case "table":
      return (
        <section id={id} className="ip-sec">
          <H2>{s.heading}</H2><Lead t={s.intro} />
          <div className="ip-table">
            <table>
              <thead><tr>{s.headers.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
              <tbody>{s.rows.map((r, i) => <tr key={i}>{r.map((c, j) => j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </section>
      );
    case "callout": {
      const tone = { info: ["is-info", Info], tip: ["is-info", Lightbulb], note: ["is-note", AlertTriangle] } as const;
      const [cls, I] = tone[s.tone];
      return (
        <aside className={`ip-callout ${cls}`}>
          <I className="mt-0.5 size-5 shrink-0 text-ink-950" aria-hidden />
          <div><p>{toTitleCase(s.title)}</p><p>{s.body}</p></div>
        </aside>
      );
    }
    case "split":
      return (
        <section id={id} className="ip-sec">
          <H2>{s.heading}</H2>
          <div className="ip-split">
            <div className="prose-j">{s.body.map((p, i) => <p key={i}>{p}</p>)}</div>
            <div className="prose-j"><ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul></div>
          </div>
        </section>
      );
  }
}
