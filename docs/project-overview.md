# Project Overview

A new marketing website for **eCard**, an AI-powered visiting-card CRM. The live product is at https://ecard.gg. This site replaces its single-page marketing presence with a 300-page site built in Next.js.

**What eCard is (verified):** eCard reads visiting cards with AI and files them as clean contacts. It remembers where you met, and it sends the follow-up by email, by WhatsApp, or through your own digital business card.

## Scope
- 300 statically generated pages across 19 categories (see `sitemap.md`).
- A hand-built homepage and pricing page. The other 298 pages are rendered from typed content through 7 layout variants.
- Interactive pieces: mega-menu and mobile navigation, a monthly/yearly pricing toggle, a sample-scan demo, a time-saved calculator, contact forms with validation, and FAQ accordions.
- SEO: unique metadata, canonical URLs, Open Graph and Twitter tags, JSON-LD (Organization, WebSite, WebPage, BreadcrumbList, FAQPage), `sitemap.xml` and `robots.txt`.

## Content principle
All eCard product claims come from `source-content-inventory.md`. Pages that cover topics the reference site doesn't (industry workflows, networking guides, email deliverability, legal drafts) contain general guidance. They don't add product claims, and they say plainly when a detail isn't published. Each page records whether it is verified, mixed or educational (see `page-inventory.md`).

## Where the work stands
- The app and CTAs link to the live product at https://ecard.gg (`/sign-up`, `/sign-in`).
- The marketing site has no backend. The contact forms open the visitor's email app, addressed to the verified sales address.
