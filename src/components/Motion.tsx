"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide motion layer. Finds elements by class and gives each kind its own effect:
 *  - scroll reveals: headings wipe in, cards flip up in 3D, steps slide from alternating sides,
 *    tables unfold, callouts pop, stats count up, related cards fan out
 *  - pointer: 3D tilt with a moving light on cards, magnetic buttons, click ripples,
 *    parallax depth on hero mockups
 *  - a scroll progress bar
 * Everything is skipped when the visitor prefers reduced motion.
 */
const REVEAL: [selector: string, effect: string][] = [
  [".ip-h2, .hm-title", "wipe"],
  [".ip-cards > li, .hm-uc-item", "flip"],
  [".ip-steps > li", "slide"],
  [".ip-table", "unfold"],
  [".ip-callout", "pop"],
  [".ip-split > *", "drift"],
  [".ip-related li", "fan"],
  [".hm-stat", "rise"],
  [".hm-step", "swing"],
  [".ip-faq-box, .ip-form", "zoom"],
  [".prose-j > p, .prose-j > ul", "fade"],
];
const TILT = ".ip-card, .hm-step, .hm-stat, .hm-card-hover, .pricing-card, .ip-faq-box";
const MAGNET = ".btn-primary, .btn-ghost, .hm-btn, .hm-outline, .hdr-cta, .ip-cta-btn";
const PARALLAX = ".pm, .hm-hero [data-depth]";

function countUp(el: HTMLElement) {
  const raw = el.textContent ?? "";
  const m = /^(\D*)(\d[\d,]*)(.*)$/.exec(raw);
  if (!m || el.dataset.counted) return;
  el.dataset.counted = "1";
  const [, pre, num, post] = m;
  const target = Number(num.replace(/,/g, ""));
  const start = performance.now();
  const dur = 1100;
  const step = (t: number) => {
    const k = Math.min(1, (t - start) / dur);
    const eased = 1 - Math.pow(1 - k, 3);
    el.textContent = `${pre}${Math.round(target * eased).toLocaleString("en-IN")}${post}`;
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("mo-on");

    // Scroll reveals, with a stagger among siblings.
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        el.classList.add("mo-in");
        el.querySelectorAll<HTMLElement>(".hm-stat-num").forEach(countUp);
        io.unobserve(el);
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    const seen = new WeakSet<Element>();
    const scan = () => {
      for (const [sel, fx] of REVEAL) {
        document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
          if (seen.has(el) || el.closest(".m-sheet, .mega, footer")) return;
          seen.add(el);
          const idx = el.parentElement ? [...el.parentElement.children].indexOf(el) : 0;
          el.dataset.mo = fx;
          el.style.setProperty("--mo-i", String(Math.min(idx, 8)));
          if (fx === "slide") el.dataset.side = idx % 2 ? "r" : "l";
          // Already on screen at load: show without waiting.
          const r = el.getBoundingClientRect();
          if (r.top < innerHeight * 0.9 && r.bottom > 0) requestAnimationFrame(() => { el.classList.add("mo-in"); el.querySelectorAll<HTMLElement>(".hm-stat-num").forEach(countUp); });
          else io.observe(el);
        });
      }
    };
    scan();
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    // Pointer effects (fine pointers only, so touch scrolling stays smooth).
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let raf = 0;
    let last: PointerEvent | null = null;
    const onMove = (ev: PointerEvent) => {
      last = ev;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const e = last!;
        const t = e.target as Element | null;
        const card = t?.closest<HTMLElement>(TILT);
        document.querySelectorAll<HTMLElement>(".mo-tilting").forEach((c) => { if (c !== card) { c.classList.remove("mo-tilting"); c.style.removeProperty("--rx"); c.style.removeProperty("--ry"); } });
        if (card) {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
          card.classList.add("mo-tilting");
          card.style.setProperty("--rx", `${(0.5 - y) * 9}deg`);
          card.style.setProperty("--ry", `${(x - 0.5) * 11}deg`);
          card.style.setProperty("--mx", `${x * 100}%`);
          card.style.setProperty("--my", `${y * 100}%`);
        }
        const btn = t?.closest<HTMLElement>(MAGNET);
        document.querySelectorAll<HTMLElement>(".mo-magnet").forEach((b) => { if (b !== btn) { b.classList.remove("mo-magnet"); b.style.removeProperty("--bx"); b.style.removeProperty("--by"); } });
        if (btn) {
          const r = btn.getBoundingClientRect();
          btn.classList.add("mo-magnet");
          btn.style.setProperty("--bx", `${(e.clientX - r.left - r.width / 2) * 0.22}px`);
          btn.style.setProperty("--by", `${(e.clientY - r.top - r.height / 2) * 0.3}px`);
        }
        document.querySelectorAll<HTMLElement>(PARALLAX).forEach((p) => {
          const r = p.getBoundingClientRect();
          if (r.bottom < 0 || r.top > innerHeight) return;
          const dx = (e.clientX - (r.left + r.width / 2)) / innerWidth;
          const dy = (e.clientY - (r.top + r.height / 2)) / innerHeight;
          p.style.setProperty("--px", dx.toFixed(3));
          p.style.setProperty("--py", dy.toFixed(3));
        });
      });
    };
    const onLeave = () => document.querySelectorAll<HTMLElement>(".mo-tilting, .mo-magnet").forEach((c) => c.classList.remove("mo-tilting", "mo-magnet"));
    if (fine) {
      document.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
    }

    // Click ripple on buttons.
    const onDown = (e: PointerEvent) => {
      const b = (e.target as Element | null)?.closest<HTMLElement>(MAGNET);
      if (!b) return;
      const r = b.getBoundingClientRect();
      const s = document.createElement("span");
      s.className = "mo-ripple";
      s.style.left = `${e.clientX - r.left}px`;
      s.style.top = `${e.clientY - r.top}px`;
      b.appendChild(s);
      s.addEventListener("animationend", () => s.remove());
    };
    document.addEventListener("pointerdown", onDown);

    // Scroll progress bar.
    const bar = document.createElement("div");
    bar.className = "mo-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);
    const onScroll = () => {
      const max = root.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect(); mo.disconnect();
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerdown", onDown);
      removeEventListener("scroll", onScroll);
      bar.remove();
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
