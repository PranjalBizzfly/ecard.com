"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { COUNTRIES, countryByIso, flagOf, type Country } from "@/content/countries";

function matches(c: Country, q: string) {
  const s = q.trim().toLowerCase();
  if (!s) return true;
  const digits = s.replace(/^\+/, "");
  if (/^\d+$/.test(digits)) return c.dial.slice(1).startsWith(digits);
  return c.name.toLowerCase().includes(s) || c.iso.toLowerCase() === s;
}

/** Searchable country code picker: type a name or a code ("ind", "+91", "91"). */
export function CountrySelect({ value, onChange, id, describedBy }: {
  value: string; onChange: (iso: string) => void; id: string; describedBy?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);
  const search = useRef<HTMLInputElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const listId = useId();
  const current = countryByIso(value) ?? COUNTRIES[0];
  const results = useMemo(() => COUNTRIES.filter((c) => matches(c, query)), [query]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => { if (!wrap.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    search.current?.focus();
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("touchstart", onDown); };
  }, [open]);

  useEffect(() => {
    list.current?.querySelector<HTMLElement>(`[data-i="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  const openList = () => {
    setQuery("");
    setActive(Math.max(0, COUNTRIES.findIndex((c) => c.iso === current.iso)));
    setOpen(true);
  };
  const choose = (c: Country) => {
    onChange(c.iso);
    setOpen(false);
    document.getElementById(id)?.focus();
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(results.length - 1, a + 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(0, a - 1)); }
    else if (e.key === "Home") { e.preventDefault(); setActive(0); }
    else if (e.key === "End") { e.preventDefault(); setActive(results.length - 1); }
    else if (e.key === "Enter") { e.preventDefault(); if (results[active]) choose(results[active]); }
    else if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); setOpen(false); document.getElementById(id)?.focus(); }
    else if (e.key === "Tab") setOpen(false);
  };

  return (
    <div ref={wrap} className="cc-wrap">
      <button
        id={id}
        type="button"
        className="ip-control cc-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Country code: ${current.name} ${current.dial}`}
        aria-describedby={describedBy}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={(e) => { if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); openList(); } }}
      >
        <span aria-hidden>{flagOf(current.iso)}</span>
        <span>{current.dial}</span>
        <ChevronDown className="size-4 opacity-60" aria-hidden />
      </button>
      {open && (
        <div className="cc-pop">
          <input
            ref={search}
            type="text"
            className="ip-control cc-search"
            placeholder="Search country or code"
            aria-label="Search country or code"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={results[active] ? `${listId}-${results[active].iso}` : undefined}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActive(0); }}
            onKeyDown={onKey}
          />
          <ul ref={list} id={listId} role="listbox" aria-label="Countries" className="cc-list">
            {results.length === 0 && <li className="cc-empty">No matching country</li>}
            {results.map((c, i) => (
              <li
                key={c.iso}
                id={`${listId}-${c.iso}`}
                data-i={i}
                role="option"
                aria-selected={c.iso === current.iso}
                className={`cc-opt${i === active ? " is-active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => choose(c)}
              >
                <span aria-hidden>{flagOf(c.iso)}</span>
                <span className="cc-name">{c.name}</span>
                <span className="cc-dial">{c.dial}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
