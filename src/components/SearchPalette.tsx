"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, LayoutGrid, Search } from "lucide-react";

export type SearchEntry = { t: string; h: string; c: string };

/** Pages shown before the visitor types anything (reference: "Start here"). */
const START_HERE = [
  "/features/ai-card-scanning", "/features/digital-business-card", "/features/outreach",
  "/features/meeting-memory", "/pricing", "/contact-sales",
];

const norm = (s: string) => s.toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N} ]/gu, " ");

function rank(entries: SearchEntry[], q: string) {
  const terms = norm(q).split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  const scored: { e: SearchEntry; s: number }[] = [];
  for (const e of entries) {
    const t = norm(e.t), c = norm(e.c), h = e.h.toLowerCase();
    let s = 0;
    for (const term of terms) {
      if (t.startsWith(term)) s += 6;
      else if (t.includes(` ${term}`)) s += 4;
      else if (t.includes(term)) s += 3;
      else if (c.includes(term) || h.includes(term)) s += 1;
      else { s = -1; break; }
    }
    if (s > 0) scored.push({ e, s });
  }
  return scored.sort((a, b) => b.s - a.s || a.e.t.length - b.e.t.length).slice(0, 8).map((x) => x.e);
}

export function SearchPalette({ index, open, onClose }: { index: SearchEntry[]; open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const start = useMemo(() => START_HERE.map((h) => index.find((e) => e.h === h)).filter((e): e is SearchEntry => !!e), [index]);
  const results = q.trim() ? rank(index, q) : start;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => input.current?.focus());
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;

  const close = () => { setQ(""); setActive(0); onClose(); };
  const go = (h: string) => { close(); router.push(h); };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") { e.preventDefault(); close(); }
    else if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter" && results[active]) { e.preventDefault(); go(results[active].h); }
  };

  return createPortal(
    <div className="srch-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="srch-panel" role="dialog" aria-modal="true" aria-label="Search the site" onKeyDown={onKey}>
        <div className="srch-input">
          <Search aria-hidden />
          <input
            ref={input}
            value={q}
            onChange={(e) => { setQ(e.target.value); setActive(0); }}
            placeholder="Search features, solutions, guides..."
            aria-label="Search the site"
            role="combobox"
            aria-expanded="true"
            aria-controls="srch-list"
            aria-activedescendant={results[active] ? `srch-${active}` : undefined}
          />
          <button type="button" className="srch-esc" onClick={close} aria-label="Close search">Esc</button>
        </div>
        <div className="srch-body">
          <p className="srch-label">{q.trim() ? (results.length ? "Results" : "No results") : "Start here"}</p>
          <ul id="srch-list" role="listbox" className="srch-list">
            {results.map((r, i) => (
              <li key={r.h} id={`srch-${i}`} role="option" aria-selected={i === active}>
                <Link href={r.h} onClick={close} onMouseEnter={() => setActive(i)} className={i === active ? "is-active" : ""}>
                  <span className="min-w-0">
                    <span className="srch-title">{r.t}</span>
                    {q.trim() && <span className="srch-cat">{r.c}</span>}
                  </span>
                  <ArrowRight aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          {!results.length && <p className="srch-hint">Nothing matches &ldquo;{q}&rdquo;. Try a feature, integration or industry name.</p>}
          <p className="srch-hint">Type to search every page on the site. Use ↑ ↓ to move, Enter to open.</p>
        </div>
        <Link href="/site-index" onClick={close} className="srch-foot">
          <span className="flex items-center gap-2"><LayoutGrid aria-hidden />Explore All Pages</span>
          <span className="srch-count">{index.length} Pages <ArrowRight aria-hidden /></span>
        </Link>
      </div>
    </div>,
    document.body,
  );
}
