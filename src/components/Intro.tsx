"use client";

import { useEffect, useRef, useState } from "react";

/**
 * First-visit intro: scan corners close in on the eCard icon, a beam reads it,
 * the wordmark rises with a 0→100 counter, then the screen splits open.
 * Plays once per browser session; skipped for reduced motion; click / Esc / any key skips.
 * `introInitScript` (in <head>) decides before first paint, so returning visitors never see a flash.
 */
export const introInitScript = `(function(){try{var d=document.documentElement;var r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;var s=sessionStorage.getItem("ecard-intro");if(r||s){d.dataset.intro="skip";}else{d.dataset.intro="play";sessionStorage.setItem("ecard-intro","1");}}catch(e){document.documentElement.dataset.intro="skip";}})();`;

const DURATION = 2400; // ms until the curtain opens
const EXIT = 800; // curtain animation length

export function Intro() {
  const [count, setCount] = useState(0);
  const [gone, setGone] = useState(false);
  const done = useRef(false);

  useEffect(() => {
    const html = document.documentElement;
    if (html.dataset.intro !== "play") return; // CSS already hides the overlay

    const finish = () => {
      if (done.current) return;
      done.current = true;
      html.dataset.intro = "exit";
      window.setTimeout(() => { html.dataset.intro = "done"; setGone(true); }, EXIT);
    };

    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (DURATION - 300));
      setCount(Math.round(100 * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const timer = window.setTimeout(finish, DURATION);
    const skip = () => finish();
    window.addEventListener("keydown", skip);
    return () => { cancelAnimationFrame(raf); window.clearTimeout(timer); window.removeEventListener("keydown", skip); };
  }, []);

  if (gone) return null;

  return (
    <div className="intro" aria-hidden onClick={() => { if (!done.current) { done.current = true; document.documentElement.dataset.intro = "exit"; window.setTimeout(() => { document.documentElement.dataset.intro = "done"; setGone(true); }, EXIT); } }}>
      <div className="intro-panel top" />
      <div className="intro-panel bottom" />
      <div className="intro-core">
        <div className="intro-scan">
          <span className="ic tl" /><span className="ic tr" /><span className="ic bl" /><span className="ic br" />
          <svg viewBox="0 0 128 128" className="intro-icon" fill="none">
            <defs>
              <linearGradient id="intro-g" x1="12" y1="6" x2="116" y2="116" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7F19F7" /><stop offset="1" stopColor="#3202B8" />
              </linearGradient>
            </defs>
            <rect x="6" y="6" width="116" height="116" rx="32" fill="url(#intro-g)" />
            <rect className="intro-card" x="30" y="38" width="68" height="52" rx="10" fill="#FEFEFE" />
            <circle className="intro-bit b1" cx="49" cy="58" r="7" fill="#7F19F7" />
            <path className="intro-bit b2" d="M38 78c0-7 5-11 11-11s11 4 11 11z" fill="#7F19F7" />
            <g className="intro-bit b3" stroke="#7F19F7" strokeWidth="4.5" strokeLinecap="round">
              <path d="M68 54h20" /><path d="M68 64h20" /><path d="M68 74h13" />
            </g>
          </svg>
          <span className="intro-beam" />
        </div>
        <div className="intro-word"><span>eCard</span></div>
        <p className="intro-tag">Every card, scanned into a relationship.</p>
      </div>
      <div className="intro-foot">
        <span>Scanning</span>
        <span className="intro-count">{String(count).padStart(3, "0")}%</span>
      </div>
      <div className="intro-progress"><i style={{ transform: `scaleX(${count / 100})` }} /></div>
    </div>
  );
}
