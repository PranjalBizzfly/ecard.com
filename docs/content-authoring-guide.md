# Content Authoring Guide (for all 300 pages)

Each category's pages live in `src/content/pages/<category>.ts` as:

```ts
import type { PageDef } from "../types";
export const pages: PageDef[] = [ /* one entry per slug in src/content/plan.ts for this category, same order */ ];
```

## Hard accuracy rules
1. eCard product claims may ONLY come from `docs/source-content-inventory.md` / `src/content/site.ts`. Never invent features, UI menu paths (the only known path is "Settings → Telegram"), numbers, limits, customers, testimonials, logos, certifications, uptime, payload formats, API endpoints, or yearly prices.
2. For integrations: the site only names them. Describe the verified role (e.g. Gmail = one of the mailboxes you can send intros from via SMTP; Razorpay·UPI / Stripe = payment of eCard subscriptions; Google Maps = address check on scanned cards; Google Contacts = sync on Starter+; Webhooks = signed events for every new contact, Professional+; Claude/OpenAI/Gemini/DeepSeek/Grok/Azure = AI models that read cards, bring your own key). Say clearly what is NOT stated (e.g. "eCard's site does not document field-level mapping; check in-app settings").
3. General, non-product educational content is allowed and encouraged (networking etiquette, how SMTP works, follow-up timing, trade-show prep, what 2FA is, industry workflows). Phrase it as guidance, not as eCard claims. Industry pages must not imply existing customers in that industry.
4. Example data must be visibly fictional and labelled "sample" (e.g. "Sample: Priya Shah, Realtor").
5. Legal pages: write a well-structured draft and the FIRST section must be a callout (tone "note") saying this is a draft pending review by eCard and is not yet the binding policy. No specific retention periods, jurisdictions or company registration details.
6. Use INR (₹) and exact plan data from `PLANS`. Monthly prices only.

## Quality rules
- Each page: 4–7 sections, mixing section types (prose, bullets, steps, cards, table, callout, split). Vary the order and mix between pages — don't reuse one skeleton.
- Body copy: ~400–800 words per page, distinct from sibling pages. No filler, no keyword stuffing.
- `seoTitle` ≤ 60 chars, unique; `description` 120–160 chars, unique; `h1` distinct from seoTitle wording where natural.
- 2–5 `faqs` on most pages (optional on legal). FAQ answers must follow the accuracy rules.
- `related`: 3–5 slugs that exist in `plan.ts` (any category). Never link to a slug not in plan.ts.
- `icon`: one of `IconName`; `visual`: pick the most relevant `VisualKey` ("none" for legal/support text pages).
- `variant`: feature pages "feature"; how-to "guide"; integrations "integration"; use-cases "solution"; pricing/reference tables "reference"; help "support"; legal "legal".
- `source`: "verified" if every claim is from the inventory, "educational" for general guidance, "mixed" otherwise.
- Plain strings only (no JSX, no markdown links). Use typographic apostrophes freely; escape nothing beyond normal TS string rules (prefer double quotes; use \" if needed).
