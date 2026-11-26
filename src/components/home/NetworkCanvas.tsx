"use client";

import { useEffect, useRef } from "react";

type Dot = { x: number; y: number; vx: number; vy: number; r: number; life?: number };

/**
 * 2D background for the hero: contact dots drift and link up when close, and they link
 * to the pointer too. Clicking adds a small burst of new contacts. Pauses off screen
 * and draws a still frame for visitors who prefer reduced motion.
 */
export function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, visible = true;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const mouse = { x: -9999, y: -9999 };
    let dots: Dot[] = [];

    const color = () => (document.documentElement.classList.contains("dark") ? "196,160,255" : "127,25,247");
    const resize = () => {
      const r = host.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(70, (w * h) / 16000));
      dots = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, r: 1.2 + Math.random() * 1.8 }));
    };

    const draw = () => {
      const c = color();
      ctx.clearRect(0, 0, w, h);
      const link = 120;
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        if (!still) {
          a.x += a.vx; a.y += a.vy;
          if (a.x < 0 || a.x > w) a.vx *= -1;
          if (a.y < 0 || a.y > h) a.vy *= -1;
          const mdx = mouse.x - a.x, mdy = mouse.y - a.y, md = Math.hypot(mdx, mdy);
          if (md < 160 && md > 1) { a.x += (mdx / md) * 0.35; a.y += (mdy / md) * 0.35; }
          if (a.life !== undefined && --a.life <= 0) { dots.splice(i--, 1); continue; }
        }
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < link) { ctx.strokeStyle = `rgba(${c},${(1 - d / link) * 0.28})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        const md = Math.hypot(mouse.x - a.x, mouse.y - a.y);
        if (md < 170) { ctx.strokeStyle = `rgba(${c},${(1 - md / 170) * 0.55})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
        ctx.fillStyle = `rgba(${c},${a.life !== undefined ? Math.min(0.9, a.life / 120) : 0.55})`;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
      if (!still && visible) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const onOut = () => { mouse.x = mouse.y = -9999; };
    const onClick = (e: PointerEvent) => {
      if ((e.target as Element).closest("a, button")) return;
      const r = canvas.getBoundingClientRect();
      for (let k = 0; k < 8; k++) {
        const ang = (k / 8) * Math.PI * 2;
        dots.push({ x: e.clientX - r.left, y: e.clientY - r.top, vx: Math.cos(ang) * 1.6, vy: Math.sin(ang) * 1.6, r: 2.2, life: 240 });
      }
    };
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; cancelAnimationFrame(raf); if (visible && !still) raf = requestAnimationFrame(draw); });

    resize();
    draw();
    io.observe(canvas);
    const ro = new ResizeObserver(() => { resize(); if (still) draw(); });
    ro.observe(host);
    if (!still) {
      host.addEventListener("pointermove", onMove, { passive: true });
      host.addEventListener("pointerleave", onOut);
      host.addEventListener("pointerdown", onClick);
    }
    return () => {
      cancelAnimationFrame(raf); io.disconnect(); ro.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onOut);
      host.removeEventListener("pointerdown", onClick);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}
