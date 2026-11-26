# Information Architecture

## URL hierarchy
```
/                                   Home
/about /contact /contact-sales /why-ecard /how-it-works /product-tour /sample-scan /get-started /site-index
/platform/*                         Platform overview (15)
/features/ai-card-scanning/*        Scanning hub + 24
/features/contact-management/*      CRM hub + 24
/features/digital-business-card/*   Cards hub + 19
/features/outreach/*                Outreach hub + 22, plus /features/automated-email-outreach and /features/whatsapp-follow-ups
/features/telegram-bot/*            Telegram hub + 9
/features/meeting-memory/*          Meetings hub + 14
/features/events-expos/*            Events hub + 14
/features/link-tracking/*           Analytics hub + 14
/features/team-security/*           Team hub + 19
/integrations/*                     Hub + 24
/use-cases/*                        Hub + 24
/pricing/*                          Overview + 9
/mobile/*                           Hub + 4
/resources, /resources/guides/*, /resources/glossary
/help/*                             Hub + 9
/legal/*                            5
/product/*                          10 additional product pages
```

## Navigation
- **Header:** Product, Solutions, Integrations and Resources mega-menus, plus Pricing, Sign in and Start free. Each menu has a "see all" link to its hub. On mobile the same groups are shown as accordions.
- **Footer:** five link columns (Product, Use cases, Teams, Resources, Company) and the legal links.
- **Breadcrumbs:** on every page except home. They're built from the slug segments that exist as pages.
- **Related pages:** 3–5 hand-picked links per page.
- **Site index:** `/site-index` lists all 300 pages by category, so every page is reachable within two clicks of the footer.

## Labels
Category labels live in `CATEGORIES` in `src/content/site.ts`, and every view uses them.
