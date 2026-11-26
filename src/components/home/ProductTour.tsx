"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface TourItem { title: string; body: string; caption: string; href: string; icon: ReactNode; panel: ReactNode }

const DUR = 7000;

/** Tabbed product tour (reference §4.3). Auto-advances unless the user prefers reduced motion, hovers or focuses it. */
export function ProductTour({ items }: { items: TourItem[] }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(false);
  const [paused, setPaused] = useState(false);
  const base = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAuto(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const select = (i: number, focus = false) => {
    setActive(i);
    setAuto(false); // a manual choice stops the carousel
    if (focus) tabs.current[i]?.focus();
  };

  const onKey = (e: KeyboardEvent) => {
    const n = items.length;
    const map: Record<string, number> = { ArrowDown: active + 1, ArrowRight: active + 1, ArrowUp: active - 1, ArrowLeft: active - 1, Home: 0, End: n - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    select((map[e.key] + n) % n, true);
  };

  const cur = items[active];
  return (
    <div className={`hm-tabs mt-14${paused ? " paused" : ""}`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div role="tablist" aria-label="Product tour" aria-orientation="vertical" className="grid gap-2" onKeyDown={onKey}>
        {items.map((it, i) => {
          const sel = i === active;
          return (
            <button key={it.title} ref={(el) => { tabs.current[i] = el; }} type="button" role="tab" id={`${base}-t${i}`} aria-controls={`${base}-p`}
              aria-selected={sel} tabIndex={sel ? 0 : -1} className="hm-tab" onClick={() => select(i)}>
              <span className="hm-tab-ic" aria-hidden>{it.icon}</span>
              <span className="min-w-0"><span className="block font-bold text-ink-950">{it.title}</span><span className="hm-tab-text">{it.body}</span></span>
              {sel && (
                <span className="hm-tab-progress" aria-hidden>
                  <i key={`${active}-${auto}`} className={auto ? "run" : "full"} style={{ ["--dur" as string]: `${DUR}ms` }}
                    onAnimationEnd={() => auto && setActive((a) => (a + 1) % items.length)} />
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" id={`${base}-p`} aria-labelledby={`${base}-t${active}`} className="min-w-0">
        <div className="hm-mk-stage">
          <span className="hm-orb" aria-hidden /><span className="hm-orb b" aria-hidden />
          <div key={active} className="hm-swap hm-mk-card text-left">{cur.panel}</div>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xl font-bold text-ink-950">{cur.caption}</p>
          <Link href={cur.href} className="inline-flex items-center gap-1 font-bold text-brand-600">Learn more <span className="sr-only">about {cur.title}</span><ArrowRight className="size-4" aria-hidden /></Link>
        </div>
      </div>
    </div>
  );
}
