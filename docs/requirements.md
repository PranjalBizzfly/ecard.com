# Requirements

Based on the client brief "eCard.gg — Complete 300-Page Website Development".

## Functional
| ID | Requirement | Status |
|---|---|---|
| F1 | 300 unique, indexable routes in the specified categories | Done: `npm run validate` checks this |
| F2 | Homepage with hero, Start Free and Try a Sample Scan CTAs, product showcase, use cases, integrations, pricing, FAQ, final CTA | Done |
| F3 | Pricing overview, a page per plan, comparison, billing, trial and FAQ | Done. Yearly prices aren't published, so the yearly view states "save ~2 months" |
| F4 | Working navigation, dropdowns, mobile menu, tabs/toggles, accordions, forms with validation | Done |
| F5 | Sample-scan demo clearly separated from the live backend | Done. Labelled as a demo that calls no AI |
| F6 | No fake API responses and no non-functional buttons | Done. Every CTA is a link, mailto or working client action |

## Content
- Verified facts only for product claims. No invented testimonials, customers, statistics, certifications or yearly prices.
- Illustrative product visuals are labelled as sample data.

## Non-functional
- Next.js (App Router, v16), TypeScript, Tailwind CSS v4, lucide-react. No other runtime dependencies.
- Server Components by default. Client Components only for the header, pricing toggle, sample scan, calculator and forms.
- Responsive from 320px to 1920px, accessible (skip link, labelled controls, focus states, `aria-live` for results, native `<details>` accordions), and fully static (SSG).

## Gaps (cannot be met from the reference)
- Yearly prices, legal text, API/webhook payload documentation, product screenshots and the exact role permission matrix aren't published on ecard.gg. Pages say so instead of guessing.
