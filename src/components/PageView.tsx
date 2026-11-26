import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import type { PageDef } from "@/content/types";
import { CATEGORIES, SITE, VERIFIED_FAQS } from "@/content/site";
import { getPage, trail } from "@/content/registry";
import { Breadcrumbs, CtaBand, FaqList, RelatedPages } from "./blocks";
import { SectionBlock, sectionId } from "./Sections";
import { Visual } from "./Visuals";
import { JsonLd } from "./JsonLd";
import { getExtra, isFormExtra } from "./extras";

/** Map our content variants/categories onto the reference spec's page types (§5.13). */
function layoutOf(page: PageDef) {
  const centred = page.category === "aboutus" || page.category === "company" || page.category === "corporate" || page.slug === "help/faq";
  const tocType = page.variant === "guide" || page.variant === "support" || page.variant === "legal";
  return { centred, tocType, isDeal: page.slug.startsWith("deals/") };
}

function readMinutes(page: PageDef) {
  const words = [page.intro, ...page.sections.flatMap((s) => {
    switch (s.type) {
      case "prose": return s.paragraphs;
      case "bullets": return [s.intro ?? "", ...s.items];
      case "steps": return [s.intro ?? "", ...s.steps.flatMap((x) => [x.title, x.body])];
      case "cards": return [s.intro ?? "", ...s.cards.flatMap((x) => [x.title, x.body])];
      case "table": return [s.intro ?? "", ...s.rows.flat()];
      case "callout": return [s.title, s.body];
      case "split": return [...s.body, ...s.points];
    }
  }), ...(page.faqs ?? []).flatMap((f) => [f.q, f.a])].join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

function HeroButtons({ page, isDeal }: { page: PageDef; isDeal: boolean }) {
  if (isDeal) {
    return <div className="ip-actions"><a href="#form" className="btn-primary">Ask about this offer <ArrowRight className="size-4" aria-hidden /></a></div>;
  }
  const secondary =
    page.variant === "feature" || page.variant === "guide" || page.variant === "reference"
      ? { href: "/sample-scan", label: "Try a sample scan" }
      : page.variant === "support"
        ? { href: "/help/contact-support", label: "Contact support" }
        : { href: "/contact", label: "Contact us" };
  return (
    <div className="ip-actions">
      <a href={SITE.signUp} className="btn-primary">Start free <ArrowRight className="size-4" aria-hidden /></a>
      <Link href={secondary.href} className="btn-ghost">{secondary.label}</Link>
    </div>
  );
}

function Hero({ page, centred, isDeal }: { page: PageDef; centred: boolean; isDeal: boolean }) {
  const eyebrow = page.eyebrow ?? CATEGORIES[page.category].label;
  const showVisual = !centred && page.visual !== "none";
  return (
    <header className="ip ip-hero">
      <div className="container-x ip-hero-inner">
        <Breadcrumbs items={trail(page.slug)} centred={centred} />
        <div className={`ip-hero-grid ${showVisual ? "has-visual" : ""} ${centred ? "is-centred" : ""}`}>
          <div className={`min-w-0 ${centred ? "mx-auto max-w-3xl" : ""}`}>
            <span className="ip-eyebrow">{eyebrow}</span>
            <h1 className="ip-h1">{page.h1}</h1>
            <p className="ip-intro">{page.intro}</p>
            <p className="ip-meta">{readMinutes(page)} min read</p>
            <HeroButtons page={page} isDeal={isDeal} />
          </div>
          {showVisual && (
            <div className="pm pm-tilt-r">
              <div aria-hidden className="pm-glow" />
              <Visual kind={page.visual} />
              <div aria-hidden className="pm-float pm-tr">
                <span className="pm-float-ic"><Sparkles className="size-3.5" /></span>
                <span><b>{eyebrow}</b><small>eCard</small></span>
              </div>
              <div aria-hidden className="pm-float pm-bl">
                <span className="pm-float-ic"><ShieldCheck className="size-3.5" /></span>
                <span><b>Sample data</b><small>Illustration only</small></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export function PageView({ page }: { page: PageDef }) {
  const { centred, tocType, isDeal } = layoutOf(page);
  const related = page.related.map(getPage).filter((p): p is PageDef => !!p && p.slug !== page.slug).slice(0, 6);
  const headings = page.sections.flatMap((s) => ("heading" in s ? [s.heading] : []));
  const withToc = !centred && headings.length > 2 && (tocType || headings.length > 3);
  const crumbs = trail(page.slug);
  const extra = getExtra(page.slug, page.title);
  const formExtra = extra && isFormExtra(page.slug);

  return (
    <>
      <JsonLd page={page} crumbs={crumbs} />
      <Hero page={page} centred={centred} isDeal={isDeal} />
      <div className="ip container-x ip-body">
        {extra && !formExtra && <div className="mb-12">{extra}</div>}
        <div className={`ip-layout ${withToc ? "has-toc" : ""} ${centred || !withToc ? "is-narrow" : ""}`}>
          <article className="ip-article min-w-0">
            {page.sections.map((s, i) => <SectionBlock key={i} s={s} index={i} />)}
            {formExtra && (
              <section id="form" className="ip-sec" aria-labelledby="form-h">
                <h2 id="form-h" className="ip-h2">{isDeal ? "Ask about this offer" : "Send us a message"}</h2>
                <div className="mt-6">{extra}</div>
              </section>
            )}
            {page.slug === "help/faq" && <FaqList faqs={VERIFIED_FAQS} heading="The questions people ask most" />}
            {page.faqs && page.faqs.length > 0 && <FaqList id="faqs" faqs={page.faqs} heading={page.slug === "help/faq" ? "More questions" : "Questions"} />}
          </article>
          {withToc && (
            <aside className="hidden lg:block">
              <nav aria-label="On this page" className="ip-toc">
                <h2>On this page</h2>
                <ul>{headings.map((h) => <li key={h}><a href={`#${sectionId(h)}`}>{h}</a></li>)}</ul>
              </nav>
            </aside>
          )}
        </div>
        <RelatedPages pages={related} />
      </div>
      {page.variant !== "legal" && <CtaBand />}
    </>
  );
}
