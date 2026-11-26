# Authoring Addendum — Corporate Architecture Pages (117 pages)

These pages come from the "Master Website & Subdomain Architecture - SaaS" brief. Everything in `content-authoring-guide.md` still applies. Read it first.

## The core rule: no invented corporate facts
eCard publishes **none** of the following. Never invent them:
- founders, leaders, team members, headcount, founding year, milestones
- office addresses, phone numbers, business hours
- awards, certifications, compliance attestations (SOC 2, ISO and so on), audits
- customers, logos, case studies, testimonials, results
- job openings, investors, funding, financials
- ESG or CSR programmes, governance bodies
- partner, reseller, vendor or affiliate programmes, commission rates, marketplace apps
- status-page data, changelog entries, API endpoints, SDKs, sandbox
- webinars, events, reports, whitepapers, blog posts
- discounts, deal prices, coupon codes, lifetime deals

The only verified contact is **sales@bizzfly.com** (published on ecard.gg for Enterprise).

## How to write a page when the information isn't published
Follow the pattern used by the reference site: be useful and honest.
1. Say plainly what the page is for, and that eCard hasn't published this information yet (wording like "eCard has not yet published…").
2. Give real value around it:
   - what visitors can expect the section to contain when it is published
   - what IS verified and relevant, with links to existing pages
   - how to ask: write to sales@bizzfly.com, or use the form on the page if it has one
   - general, non-claim guidance (for example, how to evaluate a vendor's security, what a DPA usually covers, how responsible disclosure normally works, what to prepare before a partnership conversation)
3. Add a "note" callout stating the publication status.
4. FAQs: 3–5, honest.

## Specific notes
- **About pages:** our-story and mission-vision may use the verified positioning, tagline and hero line. Don't invent history. Leadership, team, locations and awards must state that nothing is published.
- **Trust pages:** use only the verified security facts: 2FA with authenticator codes, recovery codes, trusted devices, login alerts, AES-256-GCM for API keys and SMTP passwords, audit log, roles, and the compliance checklist (consent, export, deletion). Certifications: state that none are published. Responsible disclosure: there's no published security contact, so say so. Point to sales@bizzfly.com for now and recommend that the reporter avoid sending exploit details until a dedicated channel is confirmed.
- **Speak-up pages:** eCard has no published anonymous or whistleblower channel. Say so clearly. Never claim anonymity, confidentiality guarantees or legal protections. Point people to their local authorities and regulators for serious matters, in general terms.
- **"Sites" pages** (`customer-sites/*` and similar): the brief describes them as subdomains, such as account.domain.com. They don't exist for eCard. Each page explains what that area would do, then says where it lives **today**:
  - account: sign-in, sign-up and forgot-password at ecard.gg
  - billing: plan choice at sign-up and in-app; payment by UPI, cards, net banking, wallets or EMI
  - support: /help
  - docs: /resources/guides and /help
  - integrations: /integrations
  - api: /integrations/api
  - onboarding: /resources/guides/getting-started
  - feedback: /feedback

  Anything with no equivalent (status, sandbox, labs, changelog, community, academy, marketplace, resellers, procurement, surveys) should say "not available / not published".
- **Deals pages:** no campaign offers are published. Each deals page explains the occasion as it relates to adopting a visiting-card CRM. Card-heavy seasons are fine to discuss, such as trade-show seasons, festive networking and new-year planning. Each page lists ONLY these verified ways to save:
  - the Free plan (₹0)
  - the 14-day Professional trial (no card needed)
  - yearly billing, which saves about two months

  Say "any campaign offer will be confirmed in writing by eCard" and invite enquiries to sales@bizzfly.com. The "lifetime-deal" page must say that no lifetime plan is published. The "secret-deal" page must say that no private offers are published. Make each deals page genuinely different: different audience, timing and use case.
- **Legal hub pages:** accessibility, notices, disclaimer and licenses each start with the draft-pending-review callout (as on the existing legal pages). The licenses page may state that the site is built with open-source software (Next.js, React, Tailwind CSS, Lucide) under their respective licenses.
- **Length:** at least 480 words per page, as measured by `npm run validate`. That counts intro, sections and FAQs.
- **Variant:**
  - "support" for help-style pages
  - "legal" for the legal hub pages
  - "reference" for hubs and sites pages
  - "feature" or "solution" for offerings and deals
  - "guide" where the page is instructional
- **Visual:** "none" unless a mock clearly fits.
- **source:** "educational" or "mixed".
