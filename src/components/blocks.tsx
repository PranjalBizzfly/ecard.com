import Link from "next/link";
import { ArrowRight, ChevronRight, Plus } from "lucide-react";
import type { FAQ, PageDef } from "@/content/types";
import { SITE } from "@/content/site";
import { Icon } from "./Icon";

export function Breadcrumbs({ items }: { items: { title: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="size-3.5" aria-hidden />}
            {i === items.length - 1 ? <span aria-current="page" className="text-ink-700">{c.title}</span> : <Link href={c.href} className="hover:text-brand-700">{c.title}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Accessible accordion using native <details>: works without JavaScript. */
export function FaqList({ faqs, heading = "Frequently asked questions" }: { faqs: FAQ[]; heading?: string }) {
  if (!faqs.length) return null;
  const hid = `faq-${heading.toLowerCase().replace(/[^a-z]+/g, "-")}`;
  return (
    <section aria-labelledby={hid} className="mx-auto max-w-3xl">
      <h2 id={hid} className="mb-6 text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">{heading}</h2>
      <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
        {faqs.map((f) => (
          <details key={f.q} className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-ink-950">
              {f.q}
              <Plus className="size-5 shrink-0 text-brand-600 transition group-open:rotate-45" aria-hidden />
            </summary>
            <p className="mt-3 leading-relaxed text-ink-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaBand({ title = "Turn your next stack of cards into relationships.", body = "50 free scans · No card required · 14-day Pro trial" }: { title?: string; body?: string }) {
  return (
    <section className="container-x">
      <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-14 text-center sm:px-12">
        <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />
        <h2 className="relative mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="relative mt-4 text-ink-300">{body}</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <a href={SITE.signUp} className="btn-primary">Start free <ArrowRight className="size-4" aria-hidden /></a>
          <Link href="/pricing" className="btn border border-ink-700 text-white hover:border-ink-500">View pricing</Link>
        </div>
      </div>
    </section>
  );
}

export function RelatedPages({ pages, heading = "Keep exploring" }: { pages: PageDef[]; heading?: string }) {
  if (!pages.length) return null;
  return (
    <section className="container-x">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-ink-950">{heading}</h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pages.map((p) => (
          <li key={p.slug}>
            <Link href={`/${p.slug}`} className="card-surface group flex h-full flex-col p-5 transition hover:-translate-y-0.5 hover:border-brand-400">
              <span className="mb-3 grid size-9 place-items-center rounded-lg bg-brand-50 text-brand-700"><Icon name={p.icon} className="size-4" /></span>
              <span className="font-semibold text-ink-950">{p.title}</span>
              <span className="mt-1 line-clamp-3 text-sm text-ink-500">{p.description}</span>
              <span className="mt-auto pt-4 text-sm font-semibold text-brand-700">Read more <ArrowRight className="inline size-3.5 transition group-hover:translate-x-0.5" aria-hidden /></span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
