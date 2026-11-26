# Implementation Report

## Delivered
- **300 pages** in 19 categories, matching the brief's allocation exactly.
  - Hand-built: home and `/pricing`.
  - Registry-rendered: the other 298, through 7 layout variants and 7 section types, each with a product mock where relevant.
- **Content:** about 151,000 words, with a minimum of 480 words per page.
  - Every page has a unique title, description and H1.
  - Most pages have 3–5 FAQs, rendered as FAQPage schema.
  - Every page lists 3–5 related links.
- **Accuracy:**
  - Product facts are centralised in `src/content/site.ts`: plans, providers, roles and FAQs.
  - Where the reference site doesn't document something, the page says so rather than guessing.
  - Each page is tagged verified, mixed or educational (see `page-inventory.md`).
- **Interactive pieces:**
  - Mega-menu with Escape and outside-click handling, plus a mobile menu.
  - Monthly/yearly pricing toggle. The yearly view shows "save ~2 months", because yearly prices aren't published.
  - Sample-scan demo with 3 personas, clearly labelled as making no AI call.
  - Time-saved calculator.
  - Validated contact forms that open the visitor's email app.
  - Native `<details>` FAQ accordions.
- **SEO:**
  - Metadata API with canonical, Open Graph and Twitter tags.
  - JSON-LD (Organization, WebSite, WebPage, BreadcrumbList, FAQPage).
  - `sitemap.xml` and `robots.txt`, a real-status 404, breadcrumbs and a site index.
- **Brand:** the official logo, and colours taken from its gradient (#BA6AFB → #7F19F7 → #3202B8).

## Decisions and deviations
| Topic | Decision |
|---|---|
| Pages beyond what the reference site covers | 300 routes were requested, but ecard.gg only has a homepage, pricing and auth pages. Topics without source material (industries, guides, explainers) are general educational guidance mapped onto verified features. They don't claim customers or capabilities. |
| Legal pages | Structured drafts, each opening with a "draft pending review" notice. Not binding policy. |
| Use cases other than real estate | ecard.gg gives labels only for these, so the pages describe industry workflows rather than case studies. |
| Contact forms | No backend exists, so the forms validate input and then open a `mailto:` to the verified sales@bizzfly.com. |
| Visuals | The site publishes no screenshots, so product views are coded mocks, each captioned "sample data". |
| App routes | Sign-in, sign-up and sample cards stay on the live app (https://ecard.gg). The CTAs link there. |

## Content files
Some category files keep their original page entries in a `base` array, and slug-keyed maps (`extras`/`more`) merge extra sections in. This happened because the expansion pass was additive. The exported shape is the same `PageDef[]`. When editing a page, search its slug in both places.

## Open items (need eCard input)
See `project-roadmap.md`: legal text, yearly prices, real screenshots, API docs, role matrix, support channel. The remaining step is visual and responsive browser testing (see `testing-report.md`).
