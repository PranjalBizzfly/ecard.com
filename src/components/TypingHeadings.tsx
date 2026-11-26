"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = "main h1, main h2, main h3";
const MAX_MS = 900; // whole heading finishes typing within this time
const STEP_MS = 32; // per-character delay for short headings

/** Typing animation for page headings. Text stays in the HTML (SEO, no-JS); only presentation changes. */
export function TypingHeadings() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const type = (h: HTMLElement) => {
      if (h.dataset.typed !== undefined) return;
      h.dataset.typed = "";
      const text = h.textContent ?? "";
      if (!text.trim()) return;
      h.setAttribute("aria-label", text.replace(/\s+/g, " ").trim());

      // Split each text node into per-character spans, keeping nested markup (links, gradient spans) intact.
      const walker = document.createTreeWalker(h, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = [];
      while (walker.nextNode()) nodes.push(walker.currentNode as Text);
      const step = Math.min(STEP_MS, MAX_MS / text.length);
      let i = 0;
      for (const node of nodes) {
        const frag = document.createDocumentFragment();
        for (const ch of node.data) {
          const s = document.createElement("span");
          s.className = "tw-ch";
          s.setAttribute("aria-hidden", "true");
          s.style.animationDelay = `${Math.round(i++ * step)}ms`;
          s.textContent = ch;
          frag.appendChild(s);
        }
        node.replaceWith(frag);
      }
      h.classList.add("tw-typing");
      window.setTimeout(() => h.classList.remove("tw-typing"), i * step + 700);
    };

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { io.unobserve(e.target); type(e.target as HTMLElement); }
    }, { threshold: 0, rootMargin: "0px 0px -5% 0px" });

    document.querySelectorAll<HTMLElement>(SELECTOR).forEach((h) => { if (h.dataset.typed === undefined) io.observe(h); });
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
