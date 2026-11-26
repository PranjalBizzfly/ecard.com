import type { IconName } from "@/content/types";

export interface NavItem { label: string; href: string; icon?: IconName; desc?: string }
export interface NavGroup { label: string; items: NavItem[]; footer?: NavItem }

export const NAV: NavGroup[] = [
  {
    label: "Product",
    items: [
      { label: "AI Card Scanning", href: "/features/ai-card-scanning", icon: "scan", desc: "Your choice of AI model, reviewed before saving" },
      { label: "Contact CRM", href: "/features/contact-management", icon: "users", desc: "Tags, search, merge, CSV, Google Contacts" },
      { label: "Digital Business Card", href: "/features/digital-business-card", icon: "card", desc: "QR, Save-to-contacts, tracked links" },
      { label: "Email & WhatsApp", href: "/features/outreach", icon: "send", desc: "Intros that send themselves" },
      { label: "Telegram Bot", href: "/features/telegram-bot", icon: "message", desc: "Snap a card, saved and emailed" },
      { label: "Meeting Memory", href: "/features/meeting-memory", icon: "mic", desc: "Where you met, voice notes, AI summary" },
      { label: "Events & Expos", href: "/features/events-expos", icon: "calendar", desc: "Follow up with the whole room" },
      { label: "Link Tracking", href: "/features/link-tracking", icon: "chart", desc: "Card, PDF and WhatsApp link opens" },
      { label: "Team & Security", href: "/features/team-security", icon: "shield", desc: "Roles, 2FA, audit log, white-label" },
    ],
    footer: { label: "See The Whole Platform", href: "/platform" },
  },
  {
    label: "Solutions",
    items: [
      { label: "Real Estate", href: "/use-cases/real-estate", icon: "building" },
      { label: "Events & Expos", href: "/use-cases/events-expos", icon: "calendar" },
      { label: "Sales Teams", href: "/use-cases/sales-teams", icon: "briefcase" },
      { label: "Agencies", href: "/use-cases/agencies", icon: "palette" },
      { label: "Startup Founders", href: "/use-cases/startup-founders", icon: "zap" },
      { label: "Recruiters", href: "/use-cases/recruiters", icon: "users" },
    ],
    footer: { label: "All Use Cases", href: "/use-cases" },
  },
  {
    label: "Integrations",
    items: [
      { label: "Telegram", href: "/integrations/telegram", icon: "message" },
      { label: "WhatsApp", href: "/integrations/whatsapp", icon: "phone" },
      { label: "Gmail", href: "/integrations/gmail", icon: "mail" },
      { label: "Google Contacts", href: "/integrations/google-contacts", icon: "users" },
      { label: "Webhooks", href: "/integrations/webhooks", icon: "webhook" },
      { label: "AI Models", href: "/features/ai-card-scanning/ai-model-selection", icon: "brain" },
    ],
    footer: { label: "All Integrations", href: "/integrations" },
  },
  {
    label: "Resources",
    items: [
      { label: "Guides", href: "/resources/guides", icon: "book" },
      { label: "Getting Started", href: "/resources/guides/getting-started", icon: "zap" },
      { label: "Help Center", href: "/help", icon: "help" },
      { label: "FAQ", href: "/help/faq", icon: "help" },
      { label: "Glossary", href: "/resources/glossary", icon: "file" },
      { label: "Mobile", href: "/mobile", icon: "smartphone" },
    ],
    footer: { label: "All Resources", href: "/resources" },
  },
];
