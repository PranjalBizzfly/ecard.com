# SEO Strategy

## On-page
- **Titles:** a unique `seoTitle` of 60 characters or fewer, plus the template suffix " | eCard". The homepage uses an absolute title.
- **Descriptions:** unique, 120–160 characters. `npm run validate` fails the build check on any duplicate.
- **Headings:** one H1 per page, and section headings are H2 with H3 inside cards and steps.
- **Canonical URLs:** set on every page through `alternates.canonical`, resolved against `metadataBase`.
- **Social tags:** Open Graph (`en_IN`) and a Twitter `summary_large_image` card.
- **Structured data:**
  - Sitewide: Organization and WebSite.
  - Per page: WebPage and BreadcrumbList, plus FAQPage when the page has FAQs. The homepage also has a FAQPage.
- **Images:** decorative icons are `aria-hidden`. The logo sits inside a link that has an accessible label.

## Technical
- `/sitemap.xml` lists all 300 URLs, with priorities by depth.
- `/robots.txt` allows everything and points to the sitemap.
- Unknown paths return a real 404, and the 404 page is `noindex`.
- There are no `noindex` tags on content pages.

## Keyword themes (natural use only)
- visiting card scanner
- business card scanner app India
- AI business card reader
- digital business card with QR
- WhatsApp follow-up in Hindi/Marathi
- trade show lead capture
- card scanning CRM for real estate

## Redirects
The reference site serves its pages as `#anchors`, so there are no legacy paths to redirect. If anchors are linked externally, `/#features`, `/#usecases`, `/#faq` and `/#try` still work on the new homepage.

## Next steps
- Add per-page Open Graph images (`opengraph-image.tsx`) once brand photography exists.
- Submit the sitemap in Google Search Console.
