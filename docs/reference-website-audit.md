# Reference Website Audit — ecard.gg

Audit date: 2026-11-25. Method: fetched the live pages.

## Pages that exist
| URL | Status | Notes |
|---|---|---|
| / | 200 | Single long marketing page. Sections are anchors: #features, #usecases, #faq, #try |
| /pricing | 200 | 5 plans, Monthly/Yearly toggle |
| /sign-in | 200 | Email + password |
| /sign-up | 200 | Name, workspace (optional), email, password, plan picker |
| /forgot-password | 200 | Sends a reset link by email. The link expires after 30 minutes |

**There are no separate feature, integration, use-case, FAQ, docs, blog or legal pages.**

## Infrastructure
- `/sitemap.xml` and `/robots.txt` both return the sign-in page HTML (an SPA fallback). Neither file exists.
- Meta descriptions, colours and fonts could not be extracted. The only asset found is `/brand/ecard-icon.svg`.
- No Terms or Privacy links appear anywhere on the site.

## Navigation
Header: Features (/#features), Pricing, Use cases (/#usecases), FAQ (/#faq), Sign in, Start free (/sign-up).
Footer groups: Product, Use cases (Real estate, Events & expos, Sales teams, Agencies), Account. Footer text: "© 2026 eCard".

## Inconsistencies on the reference site
- The plan feature lists on the homepage and on /pricing don't match. The homepage leaves out storage limits, the digital card, Telegram and email items. **/pricing is treated as authoritative.**
- The homepage says "Most popular"; /pricing says "Popular".
- The trial is called "14-day Pro trial" in one place and "14-day Professional trial" in another.
- The site doesn't show yearly prices. It only says "save ~2 months".
- Only Real estate has use-case body copy. Events & expos, Sales teams and Agencies are labels only.

See `source-content-inventory.md` for the verified content itself.
