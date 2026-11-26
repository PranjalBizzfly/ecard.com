"use client";

import { useEffect, useState } from "react";

/**
 * Home-page intro: logo fades up and away, then two lines rise in letter by letter
 * with a light sweep across them, settle, and the screen lifts away (~6.5s).
 * Plays on the home page only, once per session, never on reload or for reduced motion.
 * `introInitScript` runs in <head> before paint so other visits never see a flash.
 * Click or any key skips.
 */
export const introInitScript = `(function(){var d=document.documentElement;try{var p=location.pathname.replace(/\\/+$/,"");var n=performance.getEntriesByType("navigation")[0];var skip=p!==""||(n&&n.type==="reload")||sessionStorage.getItem("ecard-intro")||matchMedia("(prefers-reduced-motion: reduce)").matches;if(skip){d.dataset.intro="skip";}else{d.dataset.intro="play";sessionStorage.setItem("ecard-intro","1");}}catch(e){d.dataset.intro="skip";}})();`;

const TOTAL = 6500; // ms, intro fully gone
const LINES = ["Every card you collect,", "scanned into a relationship."];

function Line({ text, start }: { text: string; start: number }) {
  let i = start;
  return (
    <span className="intro-line">
      {text.split(" ").map((word, w) => (
        <span key={w} className="intro-word">
          {[...word].map((ch) => {
            const idx = i++;
            return (
              <span key={idx} className="intro-char" style={{ ["--i" as string]: idx - start }}>{ch}</span>
            );
          })}
          {" "}
        </span>
      ))}
    </span>
  );
}

export function Intro() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (html.dataset.intro !== "play") return; // CSS keeps the overlay hidden
    const end = () => { html.dataset.intro = "done"; setGone(true); };
    const skip = () => { html.dataset.intro = "exit"; window.setTimeout(end, 700); };
    const timer = window.setTimeout(end, TOTAL);
    window.addEventListener("keydown", skip, { once: true });
    return () => { window.clearTimeout(timer); window.removeEventListener("keydown", skip); };
  }, []);

  if (gone) return null;

  return (
    <div
      className="intro"
      aria-hidden
      onClick={() => { const h = document.documentElement; h.dataset.intro = "exit"; window.setTimeout(() => { h.dataset.intro = "done"; setGone(true); }, 700); }}
    >
      <div className="intro-stage">
        <div className="intro-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/ecard-icon.svg" alt="" width={88} height={88} />
          <span>eCard</span>
        </div>
        <p className="intro-text">
          <Line text={LINES[0]} start={0} />
          <Line text={LINES[1]} start={LINES[0].length} />
        </p>
      </div>
    </div>
  );
}
