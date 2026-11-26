"use client";

import { useId, useState } from "react";
import type { FAQ } from "@/content/types";

/** Single-open accordion: opening one question closes the one that was open. */
export function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();
  return (
    <div className="ip-faq-box">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        const btn = `${base}-q${i}`;
        const panel = `${base}-a${i}`;
        return (
          <div key={f.q} className="ip-faq-item" data-open={isOpen ? "" : undefined}>
            <h3 className="ip-faq-q">
              <button id={btn} type="button" aria-expanded={isOpen} aria-controls={panel} onClick={() => setOpen(isOpen ? null : i)}>
                <span>{f.q}</span>
                <span aria-hidden className="ip-faq-plus">+</span>
              </button>
            </h3>
            <div id={panel} role="region" aria-labelledby={btn} hidden={!isOpen}>
              <p>{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
