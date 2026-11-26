"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { NAV } from "./nav";
import { ThemeToggle } from "./ThemeToggle";
import { SITE } from "@/content/site";

const isCurrent = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`);

/** Site header — reference spec §2: sticky blurred bar, centred inline nav with mega panels (≥1280px), pill actions, side-sheet mobile menu. */
export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);

  // Close menus on navigation (state adjusted during render, per React docs), outside click and Escape.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) { setLastPath(pathname); setOpen(null); setMobile(false); }
  useEffect(() => {
    const onDown = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null); };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(null); setMobile(false);
      if (ref.current?.contains(document.activeElement)) (document.activeElement as HTMLElement).blur();
    };
    const onScroll = () => document.documentElement.toggleAttribute("data-scrolled", window.scrollY > 8);
    onScroll();
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  useEffect(() => { document.body.style.overflow = mobile ? "hidden" : ""; }, [mobile]);

  // After choosing a mega-menu link, drop focus so :focus-within doesn't keep the panel open.
  const closeMega = () => { setOpen(null); (document.activeElement as HTMLElement | null)?.blur(); };

  return (
    <header className="site-header" ref={ref}>
      <Link href="/product/whats-new-telegram" className="hdr-announce">
        <span className="mr-2 rounded-full bg-brand-600 px-2 py-0.5 font-semibold text-white">New</span>
        Telegram bot: snap a card, it&apos;s saved and emailed <ArrowRight className="inline size-3" aria-hidden />
      </Link>
      <div className="nav-wrap">
        <Logo />
        <nav aria-label="Primary" className="contents">
          <ul className="nav">
            {NAV.map((g) => {
              const active = g.items.some((it) => isCurrent(pathname, it.href)) || (g.footer ? isCurrent(pathname, g.footer.href) : false);
              return (
                <li key={g.label} className="mega-host" data-open={open === g.label ? "" : undefined}>
                  <button
                    type="button"
                    className={`nav-link${active ? " current" : ""}`}
                    aria-expanded={open === g.label}
                    aria-haspopup="true"
                    onClick={() => setOpen(open === g.label ? null : g.label)}
                  >
                    {g.label} <ChevronDown aria-hidden />
                  </button>
                  <div className="mega" style={{ width: "min(960px, 100vw - 32px)" }}>
                    <ul className="mega-cols" style={{ "--cols": 3 } as CSSProperties}>
                      {g.items.map((it) => (
                        <li key={it.href} className="mg">
                          <Link href={it.href} onClick={closeMega} className="!flex items-start gap-3 rounded-xl !px-2 !py-2.5 hover:bg-[var(--brand-soft)]">
                            {it.icon && <span className="mg-ic"><Icon name={it.icon} /></span>}
                            <span className="min-w-0">
                              <span className="block font-semibold text-ink-950">{it.label}</span>
                              {it.desc && <span className="mg-desc">{it.desc}</span>}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {g.footer && (
                      <div className="mega-foot">
                        <span>{g.label}</span>
                        <Link href={g.footer.href} onClick={closeMega}>{g.footer.label} <ArrowRight className="size-4" aria-hidden /></Link>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
            <li>
              <Link href="/pricing" className={`nav-link${isCurrent(pathname, "/pricing") ? " current" : ""}`}>Pricing</Link>
            </li>
          </ul>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a href={SITE.signIn} className="hdr-login hidden 2xl:inline-flex">Sign in</a>
          <a href={SITE.signUp} className="hdr-cta hidden sm:inline-flex">
            Start free <span className="hdr-cta-ic"><ArrowRight aria-hidden /></span>
          </a>
          <button type="button" className="icon-btn xl:hidden" aria-label="Open menu" aria-expanded={mobile} onClick={() => setMobile(true)}>
            <Menu aria-hidden />
          </button>
        </div>
      </div>

      {mobile && createPortal(
        <>
          <div className="m-backdrop xl:hidden" onClick={() => setMobile(false)} aria-hidden />
          <div className="m-sheet xl:hidden" role="dialog" aria-modal="true" aria-label="Menu">
            <div className="m-sheet-head">
              <Logo />
              <button type="button" className="icon-btn" aria-label="Close menu" onClick={() => setMobile(false)}>
                <X aria-hidden />
              </button>
            </div>
            <nav aria-label="Mobile" className="space-y-2 p-4">
              {NAV.map((g) => (
                <details key={g.label} className="m-group">
                  <summary>{g.label} <ChevronDown aria-hidden /></summary>
                  <ul className="px-2 pb-2">
                    {g.items.map((it) => (
                      <li key={it.href}>
                        <Link href={it.href}>
                          {it.icon && <span className="mg-ic"><Icon name={it.icon} /></span>}
                          {it.label}
                        </Link>
                      </li>
                    ))}
                    {g.footer && (
                      <li><Link href={g.footer.href} className="mg-all">{g.footer.label} <ArrowRight className="size-4" aria-hidden /></Link></li>
                    )}
                  </ul>
                </details>
              ))}
              <Link href="/pricing" className="m-group block px-4 py-3.5 font-bold text-ink-950">Pricing</Link>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a href={SITE.signIn} className="btn-ghost">Sign in</a>
                <a href={SITE.signUp} className="btn-primary">Start free</a>
              </div>
            </nav>
          </div>
        </>,
        document.body,
      )}
    </header>
  );
}
