# Component Architecture

```
src/
  app/
    layout.tsx            Root layout: fonts, skip link, Org/WebSite JSON-LD, Header, Footer
    page.tsx              Homepage (hand-built)
    pricing/page.tsx      Pricing (hand-built, comparison table)
    [...slug]/page.tsx    Catch-all: renders the other 298 pages from the registry (SSG, dynamicParams=false)
    sitemap.ts robots.ts not-found.tsx
  components/
    Header.tsx            Client: mega-menus, mobile menu, Escape/outside-click handling
    nav.ts                Navigation data
    Footer.tsx Logo.tsx Icon.tsx
    blocks.tsx            Breadcrumbs, FaqList (<details>), CtaBand, RelatedPages
    Sections.tsx          SectionBlock renderer for the 7 section types
    PageView.tsx          Page template: hero by variant, TOC, extras, FAQ, related, CTA
    Visuals.tsx           Product mocks (scan, extract, card, dashboard, telegram, whatsapp, email, meeting, analytics, team, security, integrations, pricing)
    JsonLd.tsx            WebPage + BreadcrumbList + FAQPage
    extras.tsx            Widgets attached to specific slugs (sample scan, forms, calculator, pricing, site index)
    interactive/          Client components: PricingTable, SampleScan, TimeSaved, ContactForm
  content/
    types.ts              PageDef / Section schema
    site.ts               Verified facts: plans, providers, FAQs, URLs
    plan.ts               The 300-route plan
    pages/<category>.ts   Page content (19 files)
    registry.ts           Aggregates pages; getPage, trail, pagesIn
  lib/seo.ts              Metadata builder
scripts/
  validate-content.ts     QA: count, uniqueness, links, thin-content check
  gen-docs.ts             Generates sitemap.md and page-inventory.md
```

## Adding a page
1. Add `[slug, title]` to `plan.ts`.
2. Add a `PageDef` to the matching `pages/<category>.ts`.
3. Run `npm run validate && npm run docs`.

The new page is built statically and added to the sitemap automatically.
