"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

export type FooterGroup = { title: string; key: string; items: [string, string][]; all?: boolean };

const MAX = 8;
const COLS = 6; // 0 = brand column, 1–4 = middle columns, 5 = CTA column
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function GroupList({ g }: { g: FooterGroup }) {
  const shown = g.all || g.items.length <= MAX + 1 ? g.items : g.items.slice(0, MAX);
  return (
    <nav className="foot-col" aria-label={g.title} data-fgroup>
      <h2>{g.title}</h2>
      <ul>{shown.map(([slug, title]) => <li key={slug}><Link href={`/${slug}`}>{title}</Link></li>)}</ul>
      {shown.length < g.items.length && <Link href={`/explore-all-pages#${g.key}`} className="foot-more">All {g.items.length} pages</Link>}
    </nav>
  );
}

/**
 * Split groups (kept in order) into COLS contiguous runs so the tallest column is as
 * short as possible. Brand and CTA columns start with their fixed blocks' heights.
 */
function partition(heights: number[], base: number[]): number[] {
  const n = heights.length;
  const prefix = [0];
  for (const h of heights) prefix.push(prefix[prefix.length - 1] + h);
  const sum = (i: number, j: number) => prefix[j] - prefix[i];
  // best[c][i]: minimal max height placing first i groups into columns 0..c
  const best = Array.from({ length: COLS }, () => new Array(n + 1).fill(Infinity));
  const cut = Array.from({ length: COLS }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= n; i++) best[0][i] = base[0] + sum(0, i);
  for (let c = 1; c < COLS; c++) {
    for (let i = 0; i <= n; i++) {
      for (let k = 0; k <= i; k++) {
        const v = Math.max(best[c - 1][k], base[c] + sum(k, i));
        if (v < best[c][i]) { best[c][i] = v; cut[c][i] = k; }
      }
    }
  }
  const assign = new Array(n).fill(0);
  let i = n;
  for (let c = COLS - 1; c > 0; c--) {
    const k = cut[c][i];
    for (let x = k; x < i; x++) assign[x] = c;
    i = k;
  }
  return assign;
}

export function FooterColumns({ brandTop, ctaTop, brand, flow, cta }: {
  brandTop: ReactNode; ctaTop: ReactNode; brand: FooterGroup[]; flow: FooterGroup[]; cta: FooterGroup[];
}) {
  const all = [...brand, ...flow, ...cta];
  const [assign, setAssign] = useState<number[] | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const measured = useRef<{ heights: number[]; base: number[] } | null>(null);

  const measure = useCallback(() => {
    const el = root.current;
    if (!el) return;
    if (!window.matchMedia("(min-width: 1280px)").matches) { setAssign(null); measured.current = null; return; }
    // Measure in the current render, then compute the balanced placement.
    const groups = [...el.querySelectorAll<HTMLElement>("[data-fgroup]")];
    const gap = 36; // matches .foot-col margin-bottom in the flow
    const heights = groups.map((g) => g.getBoundingClientRect().height + gap);
    const brandTopH = el.querySelector<HTMLElement>("[data-brand-top]")?.getBoundingClientRect().height ?? 0;
    const ctaTopH = el.querySelector<HTMLElement>("[data-cta-top]")?.getBoundingClientRect().height ?? 0;
    const base = [brandTopH, 0, 0, 0, 0, ctaTopH];
    measured.current = { heights, base };
    setAssign(partition(heights, base));
  }, []);

  // `tick` forces a fresh measurement after the default layout has re-rendered.
  const [tick, setTick] = useState(0);
  useIsoLayoutEffect(() => { measure(); }, [tick, measure]);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const reset = () => { setAssign(null); setTick((n) => n + 1); };
    const onResize = () => { clearTimeout(t); t = setTimeout(reset, 150); };
    window.addEventListener("resize", onResize);
    document.fonts?.ready.then(reset).catch(() => {});
    return () => { window.removeEventListener("resize", onResize); clearTimeout(t); };
  }, []);

  // Default (server / small screens): reference placement with CSS columns in the middle.
  if (!assign) {
    return (
      <div className="foot-main" ref={root}>
        <aside className="foot-brand" aria-label="About eCard">
          <div data-brand-top>{brandTop}</div>
          {brand.map((g) => <GroupList key={g.title} g={g} />)}
        </aside>
        <div className="foot-flow">{flow.map((g) => <GroupList key={g.title} g={g} />)}</div>
        <div className="foot-cta">
          <div data-cta-top>{ctaTop}</div>
          {cta.map((g) => <GroupList key={g.title} g={g} />)}
        </div>
      </div>
    );
  }

  const col = (c: number) => all.filter((_, i) => assign[i] === c).map((g) => <GroupList key={g.title} g={g} />);
  return (
    <div className="foot-main" ref={root}>
      <aside className="foot-brand" aria-label="About eCard">
        <div data-brand-top>{brandTop}</div>
        {col(0)}
      </aside>
      <div className="foot-flow balanced">
        {[1, 2, 3, 4].map((c) => <div key={c} className="foot-flow-col">{col(c)}</div>)}
      </div>
      <div className="foot-cta">
        <div data-cta-top>{ctaTop}</div>
        {col(5)}
      </div>
    </div>
  );
}
