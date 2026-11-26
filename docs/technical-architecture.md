# Technical Architecture

- **Framework:** Next.js 16.4 with the App Router and React 19.3. `cacheComponents` is enabled (scaffold default).
- **Styling:** Tailwind CSS v4 with tokens in `@theme`. No CSS-in-JS.
- **Icons:** lucide-react, tree-shaken through `components/Icon.tsx`.
- **Rendering:** every page is statically generated at build time. The catch-all route sets `dynamicParams = false`, so any unknown path returns the custom 404.
- **Data:** content is typed TypeScript modules, with no CMS or database. Updating facts in `site.ts` updates every page that uses them, including the pricing table, the plan pages and the FAQs.
- **Client JS:** limited to the Header, PricingTable, SampleScan, TimeSaved and ContactForm. Everything else is a Server Component.
- **Forms:** no backend. Input is validated on the client, then a pre-filled `mailto:` is opened. To add a backend later, create a Route Handler (`app/api/contact/route.ts`) with server-side validation and rate limiting, and keep its secrets in server-only environment variables.
- **Secrets:** none are used. `NEXT_PUBLIC_SITE_URL` (optional) sets the canonical origin and defaults to https://ecard.gg.
- **Security headers:** set at the host or in `next.config.ts` when deploying (see `deployment-guide.md`).
- **Breaking-change notes (Next 16):** `params` is a Promise and must be awaited. `next lint` has been removed, so use `npx eslint`. Route types come from `next typegen`.
