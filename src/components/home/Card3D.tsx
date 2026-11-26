"use client";

import { useRef, useState, type PointerEvent as RPointerEvent } from "react";
import { Mail, MapPin, Phone, QrCode, RotateCcw } from "lucide-react";

/**
 * Interactive 3D digital business card (sample data). Follows the pointer in 3D,
 * flips on click, Enter or Space, and settles back when the pointer leaves.
 */
export function Card3D() {
  const ref = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  const move = (e: RPointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--cx", `${y * -22}deg`);
    el.style.setProperty("--cy", `${x * 28}deg`);
    el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  };
  const leave = () => {
    ref.current?.style.setProperty("--cx", "0deg");
    ref.current?.style.setProperty("--cy", "0deg");
  };

  return (
    <div className="c3-stage" onPointerMove={move} onPointerLeave={leave}>
      <div
        ref={ref}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={flipped ? "Sample digital card, back. Press to flip to the front." : "Sample digital card, front. Press to flip to the back."}
        className={`c3-card${flipped ? " is-flipped" : ""}`}
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFlipped((f) => !f); } }}
      >
        <div className="c3-face c3-front">
          <span className="c3-glare" aria-hidden />
          <div className="c3-layer" style={{ ["--z" as string]: "40px" }}>
            <span className="c3-logo">eC</span>
          </div>
          <div className="c3-layer mt-auto" style={{ ["--z" as string]: "60px" }}>
            <p className="c3-name">Priya Shah</p>
            <p className="c3-role">Sales Director · Sample Realty</p>
          </div>
          <ul className="c3-layer c3-info" style={{ ["--z" as string]: "30px" }}>
            <li><Phone aria-hidden />+91 98xxx xxx10</li>
            <li><Mail aria-hidden />priya@example.com</li>
            <li><MapPin aria-hidden />Pune, India</li>
          </ul>
        </div>
        <div className="c3-face c3-back">
          <span className="c3-glare" aria-hidden />
          <div className="c3-layer c3-qr" style={{ ["--z" as string]: "50px" }}><QrCode aria-hidden /><span className="c3-pulse" aria-hidden /></div>
          <p className="c3-layer c3-link" style={{ ["--z" as string]: "30px" }}>ecard.gg/c/sample</p>
          <p className="c3-layer c3-hint" style={{ ["--z" as string]: "20px" }}>Scan to save the contact</p>
        </div>
      </div>
      <p className="c3-help"><RotateCcw aria-hidden />Move your pointer to tilt. Click or tap to flip.</p>
    </div>
  );
}
