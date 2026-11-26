export type IconName =
  | "scan" | "users" | "card" | "qr" | "mail" | "message" | "send" | "brain" | "mic"
  | "calendar" | "chart" | "link" | "shield" | "key" | "lock" | "globe" | "webhook"
  | "code" | "upload" | "download" | "search" | "tag" | "merge" | "archive" | "ban"
  | "map" | "zap" | "building" | "briefcase" | "phone" | "layers" | "settings"
  | "check" | "file" | "clock" | "sparkles" | "eye" | "bell" | "smartphone" | "book"
  | "help" | "rupee" | "palette" | "server";

/** Visual mock rendered next to a page hero. All mocks display sample data only. */
export type VisualKey =
  | "scan" | "extract" | "card" | "dashboard" | "telegram" | "whatsapp" | "email"
  | "meeting" | "analytics" | "team" | "security" | "integrations" | "pricing" | "none";

/** Layout variant controls hero/section arrangement so categories do not look identical. */
export type Variant = "feature" | "guide" | "integration" | "solution" | "reference" | "support" | "legal";

export type Section =
  | { type: "prose"; heading: string; paragraphs: string[] }
  | { type: "bullets"; heading: string; intro?: string; items: string[] }
  | { type: "steps"; heading: string; intro?: string; steps: { title: string; body: string }[] }
  | { type: "cards"; heading: string; intro?: string; cards: { title: string; body: string; icon?: IconName }[] }
  | { type: "table"; heading: string; intro?: string; headers: string[]; rows: string[][] }
  | { type: "callout"; tone: "info" | "tip" | "note"; title: string; body: string }
  | { type: "split"; heading: string; body: string[]; points: string[] };

export interface FAQ { q: string; a: string }

export interface PageDef {
  /** Path without leading slash, e.g. "features/ai-card-scanning". Empty string = homepage. */
  slug: string;
  category: CategoryKey;
  /** Short title used in nav, cards, breadcrumbs. */
  title: string;
  /** <title> tag — unique, ≤ 60 chars, without the " | eCard" suffix. */
  seoTitle: string;
  /** Meta description — unique, 120-160 chars. */
  description: string;
  h1: string;
  eyebrow?: string;
  /** 1-3 sentence lead paragraph under the H1. */
  intro: string;
  variant: Variant;
  visual: VisualKey;
  icon?: IconName;
  sections: Section[];
  faqs?: FAQ[];
  /** Slugs of related pages (must exist in registry). */
  related: string[];
  /** Page is a dedicated route file (homepage, pricing); catch-all skips it. */
  custom?: boolean;
  /** Source note for docs/page-inventory: "verified" = ecard.gg facts; "educational" = general guidance. */
  source: "verified" | "educational" | "mixed";
}

export type CategoryKey =
  | "company" | "platform" | "scanning" | "crm" | "cards" | "outreach" | "telegram"
  | "meetings" | "events" | "analytics" | "team" | "integrations" | "solutions"
  | "pricing" | "mobile" | "resources" | "support" | "legal" | "more"
  // Corporate architecture (Master Website & Subdomain Architecture)
  | "aboutus" | "offerings" | "customers" | "library" | "business" | "corporate" | "trust"
  | "engagement" | "helpdesk" | "contacts" | "legalhub" | "customerSites" | "businessSites"
  | "developerSites" | "corporateSites" | "reportingSites" | "deals";
