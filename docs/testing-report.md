# Testing Report

## Update 2026-11-26: corporate architecture pages (+117 pages, 417 total)
- `npm run validate`: 417 pages, 0 errors, 0 warnings. About 210,000 words; median 498 words per page, minimum 451.
- `tsc` and ESLint: clean. `npm run build`: 423 routes generated.
- Live crawl (`node scripts/crawl.mjs http://localhost:3100`): 417/417 pages return 200, all 421 unique internal links (including the full sitemap footer) return 200, titles are unique, every page has exactly one H1, and none is set to noindex.
- Redirects return 308: `/legal/terms` → `/legal/terms-of-service`, `/legal/privacy` → `/legal/privacy-policy`, `/legal/cookies` → `/legal/cookie-policy`, `/legal/dpa` → `/legal/data-processing`. `www.ecard.gg` → `ecard.gg` (host redirect in `next.config.ts`).
- Unknown paths under the new sections (e.g. `/deals/nope`) return 404.

The sections below describe the original 300-page run.

Run date: 2026-11-25. Next.js 16.4.6 production build.

| Check | Command | Result |
|---|---|---|
| Content QA: 300 routes, plan match, unique slugs, titles, descriptions and H1s, related links resolve, at least 450 words | `npm run validate` | **Pass**: 300 pages, 0 errors, 0 warnings. Words/page: min 480, median 497, max 700, total about 151k |
| TypeScript | `npx next typegen && npx tsc --noEmit` | **Pass**: 0 errors |
| ESLint | `npx eslint src scripts` | **Pass**: 0 errors, 0 warnings |
| Production build | `npm run build` | **Pass**: 306 routes generated (300 pages, 404, robots, sitemap) |
| Live crawl: all sitemap URLs return 200, unique `<title>`, meta description, canonical, no `noindex`, exactly one H1 | `npm start` then `npm run crawl` | **Pass**: 300/300 |
| Broken internal links | crawl | **Pass**: 304 unique internal links, all 200 |
| Broken images | crawl | **Pass** |
| 404 handling | crawl and curl | **Pass**: unknown paths at any depth return HTTP 404 with the branded page |
| robots.txt / sitemap.xml | crawl | **Pass**: sitemap lists 300 URLs; robots references the sitemap |
| Character encoding (₹, Hindi, Marathi) | grep for mojibake | **Pass** |

## Issues found and fixed during QA
1. **Duplicate titles and H1s:** 3 duplicates between pages in the same category. Renamed.
2. **Thin content:** the first draft had a median of 210 words. An expansion pass took every page to at least 480 words.
3. **Tailwind v4 build error:** `@apply` of custom classes. Converted to `@utility`.
4. **Next 16 build error:** `dynamicParams` is incompatible with `cacheComponents`. Removed.
5. **Soft 404:** unknown nested paths returned 200 while streaming. Fixed in `src/proxy.ts`, which returns a true 404.
6. **React lint error:** the header called setState inside an effect. Replaced with a state adjustment during render.
7. **help/faq:** didn't include the six verified FAQs. They now render from the shared `VERIFIED_FAQS`.

## Not yet tested (needs a real browser)
- **Visual and responsive checks at 320–1920px, cross-browser rendering, browser console errors, Lighthouse and Core Web Vitals.** The layouts use mobile-first Tailwind, wide tables have their own horizontal scroll inside a wrapper, and there are no fixed widths larger than the viewport (except the desktop-only mega menu). This has not been confirmed in a browser. Installing Playwright's browsers would download them outside the project folder, which this environment doesn't allow. Run the recommended Playwright suite in CI (see `project-roadmap.md`).
- **Contact forms:** validation logic was checked by code review. Opening the `mailto:` link depends on the visitor's email client.
