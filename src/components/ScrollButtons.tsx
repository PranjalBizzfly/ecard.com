"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

/** Floating round button (reference): ↓ jumps to the bottom near the top of the page, ↑ returns to the top once scrolled. */
export function ScrollButtons() {
  const [down, setDown] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShow(max > 400);
      setDown(window.scrollY < max / 2);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  if (!show) return null;
  const go = () => window.scrollTo({ top: down ? document.documentElement.scrollHeight : 0, behavior: "smooth" });

  return (
    <button type="button" className="scroll-fab" onClick={go} aria-label={down ? "Scroll to bottom" : "Scroll to top"} title={down ? "Scroll to bottom" : "Back to top"}>
      {down ? <ArrowDown aria-hidden /> : <ArrowUp aria-hidden />}
    </button>
  );
}
