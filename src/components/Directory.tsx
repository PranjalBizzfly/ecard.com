"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronUp, Search } from "lucide-react";

export type DirGroup = { key: string; label: string; pages: { t: string; h: string }[] };

const norm = (s: string) => s.toLowerCase();

/** "Explore All Pages" directory (reference /site-map): search, section filter chips, collapsible sections. */
export function Directory({ groups }: { groups: DirGroup[] }) {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const [closed, setClosed] = useState<Set<string>>(new Set());

  const total = groups.reduce((n, g) => n + g.pages.length, 0);
  const visible = useMemo(() => {
    const term = norm(q.trim());
    return groups
      .filter((g) => filter === "all" || g.key === filter)
      .map((g) => ({ ...g, pages: term ? g.pages.filter((p) => norm(p.t).includes(term) || p.h.includes(term)) : g.pages }))
      .filter((g) => g.pages.length);
  }, [groups, q, filter]);
  const shown = visible.reduce((n, g) => n + g.pages.length, 0);
  const allClosed = visible.length > 0 && visible.every((g) => closed.has(g.key));

  const toggle = (k: string) => setClosed((s) => { const n = new Set(s); if (n.has(k)) n.delete(k); else n.add(k); return n; });
  const toggleAll = () => setClosed(allClosed ? new Set() : new Set(visible.map((g) => g.key)));

  return (
    <>
      <div className="dir-panel">
        <div className="dir-top">
          <label className="dir-search">
            <Search aria-hidden />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search pages..." aria-label="Search pages" />
          </label>
          <span className="dir-count" aria-live="polite">{shown} Pages</span>
          <button type="button" className="dir-collapse" onClick={toggleAll}>{allClosed ? "Expand All" : "Collapse All"}</button>
        </div>
        <div className="dir-chips" role="group" aria-label="Filter by section">
          <button type="button" className={`dir-chip${filter === "all" ? " is-on" : ""}`} aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
            All <small>{total}</small>
          </button>
          {groups.map((g) => (
            <button key={g.key} type="button" className={`dir-chip${filter === g.key ? " is-on" : ""}`} aria-pressed={filter === g.key} onClick={() => setFilter(g.key)}>
              {g.label} <small>{g.pages.length}</small>
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 && <p className="dir-empty">No pages match &ldquo;{q}&rdquo;.</p>}

      {visible.map((g) => {
        const isOpen = !closed.has(g.key);
        return (
          <section key={g.key} id={g.key} className="dir-sec">
            <div className="dir-head">
              <h2>{g.label}</h2>
              <button type="button" className="dir-toggle" aria-expanded={isOpen} aria-controls={`dir-${g.key}`} onClick={() => toggle(g.key)}>
                {g.pages.length} Pages <ChevronUp className={isOpen ? "" : "rotate-180"} aria-hidden />
              </button>
            </div>
            {isOpen && (
              <ul id={`dir-${g.key}`} className="dir-grid">
                {g.pages.map((p) => <li key={p.h}><Link href={p.h}>{p.t}</Link></li>)}
              </ul>
            )}
          </section>
        );
      })}
    </>
  );
}
