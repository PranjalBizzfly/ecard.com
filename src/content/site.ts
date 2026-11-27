import type { CategoryKey } from "./types";

export const SITE = {
  name: "eCard",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecard.gg",
  appUrl: "https://ecard.gg",
  tagline: "The AI visiting-card CRM. Scan, remember and follow up with every person you meet.",
  heroTitle: "Every card you collect, scanned into a relationship.",
  salesEmail: "sales@bizzfly.com",
  signUp: "https://ecard.gg/sign-up",
  signIn: "https://ecard.gg/sign-in",
  forgotPassword: "https://ecard.gg/forgot-password",
  verifiedOn: "2026-11-25",
};

/**
 * Social profiles shown in the footer. eCard has not published official accounts yet,
 * so these point to the platform homepages (as on the reference footer).
 * TODO: replace each href with eCard's real profile URL.
 */
export const SOCIAL = [
  { name: "Facebook", href: "https://www.facebook.com/" },
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
  { name: "X", href: "https://x.com/" },
  { name: "YouTube", href: "https://www.youtube.com/" },
] as const;

/** Footer credit, as on the reference footer. */
export const CREDIT = { label: "mengo.Si", href: "https://mengo.si" };

export const salesMailto = `mailto:${SITE.salesEmail}?subject=eCard%20Enterprise`;

export const CATEGORIES: Record<CategoryKey, { label: string; base: string; blurb: string }> = {
  company: { label: "Company", base: "", blurb: "About eCard and how to reach us." },
  platform: { label: "Platform", base: "platform", blurb: "How the eCard visiting-card CRM fits together." },
  scanning: { label: "AI Card Scanning", base: "features/ai-card-scanning", blurb: "Read visiting cards with the AI model you choose." },
  crm: { label: "Contact CRM", base: "features/contact-management", blurb: "Clean, searchable contacts from every card." },
  cards: { label: "Digital Business Cards", base: "features/digital-business-card", blurb: "Your own card with QR, Save-to-contacts and tracked links." },
  outreach: { label: "Email & WhatsApp", base: "features/outreach", blurb: "Intros and follow-ups that send themselves." },
  telegram: { label: "Telegram Bot", base: "features/telegram-bot", blurb: "Snap a card in Telegram. It is saved and emailed." },
  meetings: { label: "Meeting Memory", base: "features/meeting-memory", blurb: "Remember where you met and what was said." },
  events: { label: "Events & Expos", base: "features/events-expos", blurb: "Group every card from a show and follow up with the room." },
  analytics: { label: "Analytics & Tracking", base: "features/link-tracking", blurb: "See who opened your card, PDFs and WhatsApp links." },
  team: { label: "Team & Security", base: "features/team-security", blurb: "Roles, 2FA, audit logs and white-label." },
  integrations: { label: "Integrations", base: "integrations", blurb: "Plugs into the tools you already use." },
  solutions: { label: "Use Cases", base: "use-cases", blurb: "Made for whoever collects cards for a living." },
  pricing: { label: "Pricing", base: "pricing", blurb: "Start free, upgrade as your network grows." },
  mobile: { label: "Mobile", base: "mobile", blurb: "Works in any phone browser, no app to install." },
  resources: { label: "Guides & Resources", base: "resources", blurb: "Practical guides for networking and follow-up." },
  support: { label: "Help & FAQ", base: "help", blurb: "Answers to common questions." },
  legal: { label: "Legal", base: "legal", blurb: "Policies and terms." },
  more: { label: "More Product", base: "product", blurb: "Additional product details." },
  aboutus: { label: "About", base: "about", blurb: "Who we are and what guides eCard." },
  offerings: { label: "Products & Solutions", base: "products", blurb: "What eCard offers." },
  customers: { label: "Customers", base: "customers", blurb: "Customer stories and references." },
  library: { label: "Resources", base: "blog", blurb: "Articles, guides, reports and events." },
  business: { label: "Partners, Vendors & Affiliates", base: "partners", blurb: "Work with eCard." },
  corporate: { label: "Corporate", base: "careers", blurb: "Careers, news, media and governance." },
  trust: { label: "Trust & Security", base: "trust", blurb: "Security, privacy and compliance." },
  engagement: { label: "Feedback & Reporting", base: "feedback", blurb: "Feedback, complaints and speak-up channels." },
  helpdesk: { label: "Support", base: "support", blurb: "Get help with eCard." },
  contacts: { label: "Contact", base: "contact", blurb: "Reach the right team." },
  legalhub: { label: "Legal Centre", base: "legal", blurb: "Legal documents and notices." },
  customerSites: { label: "Customer Sites", base: "customer-sites", blurb: "Customer-facing areas of eCard." },
  businessSites: { label: "Business Sites", base: "business-sites", blurb: "Partner and commercial areas." },
  developerSites: { label: "Developer Sites", base: "developer-sites", blurb: "Developer and technical areas." },
  corporateSites: { label: "Corporate Sites", base: "corporate-sites", blurb: "Corporate information areas." },
  reportingSites: { label: "Reporting Sites", base: "reporting-sites", blurb: "Reporting and survey areas." },
  deals: { label: "Deals", base: "deals", blurb: "Seasonal and campaign offers." },
};

export const AI_MODELS = ["Claude", "OpenAI", "Gemini", "DeepSeek", "Grok"];
export const AI_PROVIDERS_FAQ = ["Claude", "OpenAI", "Gemini", "DeepSeek", "Grok", "Azure", "custom endpoint"];
export const EMAIL_PROVIDERS = ["Gmail", "Outlook", "Zoho", "SendGrid", "Brevo", "Mailgun", "Amazon SES", "Resend", "any SMTP host"];
export const WA_LANGUAGES = ["English", "Hindi (हिंदी)", "Marathi (मराठी)"];
export const ROLES = ["Owner", "Admin", "Manager", "Member", "Scan-only guest"];

export const BASE_FEATURES = [
  "AI card scanning",
  "Contacts, tags & events",
  "Bulk import & export",
  "Email outreach from your own mailbox",
  "WhatsApp messages",
  "Digital business card",
  "Telegram scanning bot",
];

export interface Plan {
  id: "free" | "starter" | "professional" | "business" | "enterprise";
  name: string;
  price: number | null;
  audience: string;
  users: string;
  storage: string;
  scans: string;
  extras: string[];
  cta: { label: string; href: string };
  popular?: boolean;
}

/** Verified from https://ecard.gg/pricing on SITE.verifiedOn. Prices in INR per month. */
export const PLANS: Plan[] = [
  { id: "free", name: "Free", price: 0, audience: "For getting started", users: "5", storage: "1 GB", scans: "50", extras: [], cta: { label: "Start Free", href: SITE.signUp } },
  { id: "starter", name: "Starter", price: 299, audience: "For small teams", users: "20", storage: "25 GB", scans: "1,000", extras: ["Google Contacts sync", "Google Calendar & Meet booking"], cta: { label: "Start 14-day Trial", href: SITE.signUp } },
  { id: "professional", name: "Professional", price: 999, audience: "For growing businesses", users: "100", storage: "250 GB", scans: "5,000", extras: ["Google Contacts sync", "Google Calendar & Meet booking", "Webhooks"], cta: { label: "Start 14-day Trial", href: SITE.signUp }, popular: true },
  { id: "business", name: "Business", price: 2999, audience: "For large organizations", users: "Unlimited", storage: "Unlimited", scans: "Unlimited", extras: ["Google Contacts sync", "Google Calendar & Meet booking", "Webhooks", "White label & custom domain"], cta: { label: "Choose Plan", href: `${SITE.signUp}?plan=business&cycle=monthly` } },
  { id: "enterprise", name: "Enterprise", price: null, audience: "Custom pricing, contact sales", users: "Unlimited", storage: "Unlimited", scans: "Unlimited", extras: ["Google Contacts sync", "Google Calendar & Meet booking", "Webhooks", "White label & custom domain"], cta: { label: "Contact Sales", href: salesMailto } },
];

/** The six FAQs published on the ecard.gg homepage (answers lightly edited for clarity). */
export const VERIFIED_FAQS = [
  { q: "Which AI reads my cards?", a: "You choose: Claude, OpenAI, Gemini, DeepSeek, Grok, Azure or a custom endpoint. Add several keys and eCard rotates and fails over when one is rate-limited." },
  { q: "Do the people I meet need the app?", a: "No. They get an email or WhatsApp message and can open your digital card in any browser, scan the QR or save the contact." },
  { q: "Can I send from my own email address?", a: "Yes: connect Gmail, Outlook, Zoho, SendGrid, Brevo, Mailgun, Amazon SES, Resend or any SMTP host." },
  { q: "How does the Telegram bot know my workspace?", a: "Generate a one-time code in Settings → Telegram and send it to the bot. After that, every card you forward lands in your workspace." },
  { q: "How do I pay?", a: "In India by UPI, net banking, wallets, EMI or cards. International customers pay by card. Cancel any time and keep access until the end of the period." },
  { q: "Is my data safe?", a: "Secrets are encrypted at rest, accounts support two-factor sign-in, and workspaces have roles, an audit log and export/delete tools for compliance." },
];

export const PRICING_NOTES = {
  currency: "Prices in INR. Local currency shown at checkout for supported countries. GST applied where applicable.",
  yearly: "Yearly billing saves ~2 months. Exact yearly totals are shown at checkout.",
  payment: "In India pay by UPI, net banking, wallets, EMI or cards. International customers pay by card.",
  trial: "New workspaces get a 14-day Professional trial, no card needed.",
  cancel: "Cancel any time and keep access until the end of your billing period.",
};
