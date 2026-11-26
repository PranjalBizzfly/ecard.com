# Deployment Guide

## Requirements
Node.js 20.9 or later (developed on Node 24) and npm.

## Commands
```bash
npm ci
npm run validate     # content QA (300 pages, uniqueness, links)
npm run typecheck    # next typegen + tsc
npx eslint .
npm run build        # static generation of all pages
npm start            # serve production build on :3000
```

## Environment
| Variable | Required | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No | https://ecard.gg |

Set it to the production origin. It is used for canonical URLs, the sitemap and JSON-LD.

## Hosting
- Any Node host or Vercel works. All pages are static and can be served from a CDN.
- If the marketing site and the app share the `ecard.gg` domain, route `/sign-in`, `/sign-up`, `/forgot-password` and `/c/*` to the app. The CTAs currently point to the absolute `https://ecard.gg/...` app URLs.
- Recommended response headers:
  - `Strict-Transport-Security`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - a Content-Security-Policy that allows inline JSON-LD

## Updating prices
1. Edit `PLANS` and `PRICING_NOTES` in `src/content/site.ts`.
2. Set `SITE.verifiedOn` to the date you checked the live site.
3. Rebuild.
