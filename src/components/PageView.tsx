import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PageDef } from "@/content/types";
import { CATEGORIES, SITE, VERIFIED_FAQS } from "@/content/site";
import { getPage, trail } from "@/content/registry";
import { Breadcrumbs, CtaBand, FaqList, RelatedPages } from "./blocks";
import { SectionBlock, sectionId } from "./Sections";
import { Visual } from "./Visuals";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { getExtra } from "./extras";

function Hero({ page }: { page: PageDef }) {
  const crumbs = <Breadcrumbs items={trail(page.slug)} />;
  const eyebrow = page.eyebrow ?? CATEGORIES[page.category].label;
  const ctas = (
    <div className="mt-8 flex flex-wrap gap-3">
      <a href={SITE.signUp} className="btn-primary">Start free <ArrowRight className="size-4" aria-hidden /></a>
      <Link href="/sample-scan" className="btn-ghost">Try a sample scan</Link>
    </div>
  );

  // Text-first layouts for docs-like pages
  if (page.variant === "legal" || page.variant === "support" || page.variant === "guide") {
    return (
      <header className="border-b border-ink-100 bg-ink-50/60">
        <div className="container-x py-12 sm:py-16">
          {crumbs}
          <p className="eyebrow mt-6">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">{page.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">{page.intro}</p>
        </div>
      </header>
    );
  }

  if (page.variant === "integration") {
    return (
      <header className="container-x py-12 sm:py-16">
        {crumbs}
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
          <span className="grid size-20 shrink-0 place-items-center rounded-2xl border border-ink-100 bg-white text-brand-700 shadow-sm"><Icon name={page.icon} className="size-9" /></span>
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">{page.h1}</h1>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-500">{page.intro}</p>
        {ctas}
      </header>
    );
  }

  if (page.variant === "solution") {
    return (
      <header className="relative overflow-hidden bg-ink-950 text-white">
        <div aria-hidden className="absolute -right-40 -top-40 size-[32rem] rounded-full bg-brand-600/25 blur-3xl" />
        <div className="container-x relative grid gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div className="[&_a]:text-ink-300 [&_nav]:text-ink-300 [&_span]:text-ink-100">
            {crumbs}
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-brand-400">{eyebrow}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{page.h1}</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-300">{page.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.signUp} className="btn-primary !text-white">Start free</a>
              <Link href="/pricing" className="btn border border-ink-700 !text-white">View pricing</Link>
            </div>
          </div>
          {page.visual !== "none" && <Visual kind={page.visual} />}
        </div>
      </header>
    );
  }

  // feature / reference: split hero with product visual
  return (
    <header className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-gradient-to-b from-brand-50 to-white" />
      <div className="container-x grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          {crumbs}
          <p className="eyebrow mt-6">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">{page.h1}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-500">{page.intro}</p>
          {ctas}
        </div>
        {page.visual !== "none" && <div className="reveal"><Visual kind={page.visual} /></div>}
      </div>
    </header>
  );
}

export function PageView({ page }: { page: PageDef }) {
  const related = page.related.map(getPage).filter((p): p is PageDef => !!p && p.slug !== page.slug).slice(0, 4);
  const headings = page.sections.flatMap((s) => ("heading" in s ? [s.heading] : []));
  const withToc = (page.variant === "guide" || page.variant === "legal" || page.variant === "support") && headings.length > 2;
  const crumbs = trail(page.slug);
  const extra = getExtra(page.slug, page.title);

  return (
    <>
      <JsonLd page={page} crumbs={crumbs} />
      <Hero page={page} />
      {extra && <div className="container-x pt-14">{extra}</div>}
      <div className={`container-x py-14 sm:py-20 ${withToc ? "grid gap-12 lg:grid-cols-[14rem_1fr]" : ""}`}>
        {withToc && (
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-32 text-sm">
              <p className="mb-3 font-semibold text-ink-950">On this page</p>
              <ul className="space-y-2 border-l border-ink-100">
                {headings.map((h) => <li key={h}><a href={`#${sectionId(h)}`} className="-ml-px block border-l border-transparent pl-4 text-ink-500 hover:border-brand-600 hover:text-brand-700">{h}</a></li>)}
              </ul>
            </nav>
          </aside>
        )}
        <article className="min-w-0 space-y-16 sm:space-y-20">
          {page.sections.map((s, i) => <SectionBlock key={i} s={s} index={i} />)}
        </article>
      </div>
      {page.slug === "help/faq" && <div className="container-x pb-20"><FaqList faqs={VERIFIED_FAQS} heading="The questions people ask most" /></div>}
      {page.faqs && page.faqs.length > 0 && <div className="container-x pb-20"><FaqList faqs={page.faqs} heading={page.slug === "help/faq" ? "More questions" : undefined} /></div>}
      <div className="space-y-20 pb-20">
        <RelatedPages pages={related} />
        {page.variant !== "legal" && <CtaBand />}
      </div>
    </>
  );
}
