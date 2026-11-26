"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { NAV } from "./nav";
import { SITE } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  // Close menus on navigation (state adjusted during render, per React docs), outside click and Escape.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) { setLastPath(pathname); setOpen(null); setMobile(false); }
  useEffect(() => {
    const onDown = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(null); setMobile(false); } };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, []);
  useEffect(() => { document.body.style.overflow = mobile ? "hidden" : ""; }, [mobile]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/80 bg-white/90 backdrop-blur" ref={ref}>
      <Link href="/product/whats-new-telegram" className="block bg-ink-950 py-2 text-center text-xs text-ink-100 hover:text-white">
        <span className="mr-2 rounded-full bg-brand-600 px-2 py-0.5 font-semibold text-white">New</span>
        Telegram bot: snap a card, it&apos;s saved and emailed <ArrowRight className="inline size-3" aria-hidden />
      </Link>
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((g) => (
            <div key={g.label} className="relative">
              <button
                type="button"
                aria-expanded={open === g.label}
                aria-haspopup="true"
                onClick={() => setOpen(open === g.label ? null : g.label)}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50 hover:text-ink-950"
              >
                {g.label}
                <ChevronDown className={`size-4 transition ${open === g.label ? "rotate-180" : ""}`} aria-hidden />
              </button>
              {open === g.label && (
                <div className="card-surface reveal absolute left-0 top-full mt-2 w-[34rem] p-3">
                  <ul className="grid grid-cols-2 gap-1">
                    {g.items.map((it) => (
                      <li key={it.href}>
                        <Link href={it.href} className="flex gap-3 rounded-xl p-3 hover:bg-brand-50">
                          <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-brand-100 text-brand-700">
                            <Icon name={it.icon} className="size-4" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-ink-950">{it.label}</span>
                            {it.desc && <span className="block text-xs text-ink-500">{it.desc}</span>}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {g.footer && (
                    <Link href={g.footer.href} className="mt-2 flex items-center justify-between rounded-xl bg-ink-50 px-4 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50">
                      {g.footer.label} <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
          <Link href="/pricing" className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50 hover:text-ink-950">Pricing</Link>
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href={SITE.signIn} className="px-3 py-2 text-sm font-medium text-ink-700 hover:text-ink-950">Sign in</a>
          <a href={SITE.signUp} className="btn-primary !py-2.5">Start free</a>
        </div>
        <button type="button" className="rounded-lg p-2 text-ink-900 lg:hidden" aria-label={mobile ? "Close menu" : "Open menu"} aria-expanded={mobile} onClick={() => setMobile(!mobile)}>
          {mobile ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {mobile && (
        <div className="fixed inset-x-0 bottom-0 top-[6.5rem] overflow-y-auto border-t border-ink-100 bg-white lg:hidden">
          <nav aria-label="Mobile" className="container-x space-y-2 py-4">
            {NAV.map((g) => (
              <details key={g.label} className="rounded-xl border border-ink-100">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-semibold">
                  {g.label} <ChevronDown className="size-4" aria-hidden />
                </summary>
                <ul className="px-2 pb-2">
                  {[...g.items, ...(g.footer ? [g.footer] : [])].map((it) => (
                    <li key={it.href}><Link href={it.href} className="block rounded-lg px-3 py-2.5 text-sm text-ink-700 hover:bg-ink-50">{it.label}</Link></li>
                  ))}
                </ul>
              </details>
            ))}
            <Link href="/pricing" className="block rounded-xl border border-ink-100 px-4 py-3 font-semibold">Pricing</Link>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a href={SITE.signIn} className="btn-ghost">Sign in</a>
              <a href={SITE.signUp} className="btn-primary">Start free</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
