import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { FAQ, PageDef } from "@/content/types";
import { CATEGORIES, SITE } from "@/content/site";
import { toTitleCase } from "@/lib/text";
import { FaqAccordion } from "./FaqAccordion";

export function Breadcrumbs({ items, centred = false }: { items: { title: string; href: string }[]; centred?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`ip-crumbs ${centred ? "is-centred" : ""}`}>
      <ol>
        {items.map((c, i) => (
          <li key={c.href}>
            {i === items.length - 1 ? (
              <span aria-current="page">{c.title}</span>
            ) : (
              <>
                <Link href={c.href}>{c.title}</Link>
                <ChevronRight className="size-3.5" aria-hidden />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Centred FAQ block with a single-open, keyboard-accessible accordion. */
export function FaqList({ faqs, heading = "Frequently Asked Questions", id, bare = false }: { faqs: FAQ[]; heading?: string; id?: string; bare?: boolean }) {
  if (!faqs.length) return null;
  const hid = `faq-${heading.toLowerCase().replace(/[^a-z]+/g, "-")}`;
  return (
    <section id={id} aria-labelledby={hid} className={`ip ip-faq ${bare ? "is-bare" : ""}`}>
      <h2 id={hid} className="ip-h2">{toTitleCase(heading)}</h2>
      <FaqAccordion faqs={faqs} />
    </section>
  );
}

export function CtaBand({ title = "Turn Your Next Stack Of Cards Into Relationships.", body = "50 free scans · No card required · 14-day Pro trial" }: { title?: string; body?: string }) {
  return (
    <section className="ip ip-cta container-x">
      <div className="ip-cta-box">
        <div aria-hidden className="ip-cta-glow a" />
        <div aria-hidden className="ip-cta-glow b" />
        <h2 className="relative text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{toTitleCase(title)}</h2>
        <p className="relative mx-auto mt-3 max-w-xl text-white/75">{body}</p>
        <div className="relative mt-7 flex flex-wrap justify-center gap-3">
          <a href={SITE.signUp} className="ip-cta-btn">Start Free <ArrowRight className="size-4" aria-hidden /></a>
          <Link href="/pricing" className="ip-cta-btn is-ghost">Pricing</Link>
        </div>
      </div>
    </section>
  );
}

export function RelatedPages({ pages, heading = "Keep Exploring" }: { pages: PageDef[]; heading?: string }) {
  if (!pages.length) return null;
  return (
    <section className="ip ip-related" aria-labelledby="related-h">
      <h2 id="related-h" className="ip-h2 mb-5">{toTitleCase(heading)}</h2>
      <ul>
        {pages.map((p) => (
          <li key={p.slug}>
            <Link href={`/${p.slug}`} className="ip-card flex h-full flex-col">
              <span className="ip-kicker">{CATEGORIES[p.category].label}</span>
              <h3 className="mt-2 text-lg font-extrabold leading-snug text-ink-950">{toTitleCase(p.title)}</h3>
              <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-700">{p.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-600">Read More <ArrowRight className="ip-arrow size-3.5" aria-hidden /></span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
