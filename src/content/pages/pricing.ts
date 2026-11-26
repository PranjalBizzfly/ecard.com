import type { FAQ, PageDef, Section } from "../types";

export const pages: PageDef[] = [
  {
    slug: "pricing",
    category: "pricing",
    title: "Pricing",
    seoTitle: "eCard Pricing: Free to ₹2,999/month",
    description: "eCard plans start free with 50 scans a month. Starter ₹299, Professional ₹999, Business ₹2,999 monthly, Enterprise custom. 14-day Pro trial, no card needed.",
    h1: "Simple pricing that grows with your network",
    eyebrow: "Pricing",
    intro: "Start free, then upgrade as your team and card volume grow. Every plan includes AI scanning, the digital card, email and WhatsApp outreach, and the Telegram bot.",
    variant: "reference",
    visual: "pricing",
    icon: "rupee",
    custom: true,
    sections: [
      {
        type: "prose",
        heading: "What every plan includes",
        paragraphs: [
          "All eCard plans share the same base set: AI card scanning; contacts, tags and events; bulk import and export; email outreach from your own mailbox; WhatsApp messages; a digital business card; and the Telegram scanning bot. Paid plans add more users, storage and scans, plus Google Contacts sync, Calendar & Meet booking, webhooks and white-label options as you move up.",
          "Prices are in INR per month. Local currency is shown at checkout for supported countries, and GST is applied where applicable.",
        ],
      },
    ],
    faqs: [
      { q: "Is there a free plan?", a: "Yes. Free costs ₹0 and includes 5 users, 1 GB storage and 50 scans a month." },
      { q: "Do I need a card for the trial?", a: "No. New workspaces get a 14-day Professional trial with no card needed." },
      { q: "Can I cancel any time?", a: "Yes. You keep access until the end of your billing period." },
      { q: "Is there yearly billing?", a: "Yearly billing saves about two months. Exact yearly totals are shown at checkout." },
    ],
    related: ["pricing/compare-plans", "pricing/free-trial", "pricing/faq", "pricing/billing-and-payments"],
    source: "verified",
  },
  {
    slug: "pricing/free",
    category: "pricing",
    title: "Free Plan",
    seoTitle: "eCard Free Plan: 50 Scans a Month, ₹0",
    description: "The eCard Free plan costs ₹0 and includes 5 users, 1 GB storage and 50 AI scans a month, plus the digital card, Telegram bot and email outreach.",
    h1: "The Free plan, in full",
    eyebrow: "₹0 / month",
    intro: "Free is built for getting started: enough scans to clear the cards on your desk and try every core feature, with no card required.",
    variant: "reference",
    visual: "pricing",
    icon: "check",
    sections: [
      {
        type: "table",
        heading: "Free plan limits",
        headers: ["Item", "Free"],
        rows: [["Price", "₹0"], ["Users", "5"], ["Storage", "1 GB"], ["Scans per month", "50"]],
      },
      {
        type: "bullets",
        heading: "Included on Free",
        items: [
          "AI card scanning",
          "Contacts, tags & events",
          "Bulk import & export",
          "Email outreach from your own mailbox",
          "WhatsApp messages",
          "Digital business card",
          "Telegram scanning bot",
        ],
      },
      {
        type: "split",
        heading: "Who Free suits",
        body: [
          "Free is a good fit for individuals and very small teams who meet a handful of new people each week. Fifty scans a month covers regular networking, and you can still send intros, share your digital card and follow up on WhatsApp.",
          "When you start attending expos or bringing in more colleagues, the scan and user limits are usually the first things you notice.",
        ],
        points: ["Up to 5 users", "50 scans each month", "No card required"],
      },
      {
        type: "table",
        heading: "What upgrading adds",
        headers: ["Plan", "Price", "Adds"],
        rows: [
          ["Starter", "₹299/month", "20 users, 25 GB, 1,000 scans, Google Contacts sync, Calendar & Meet booking"],
          ["Professional", "₹999/month", "100 users, 250 GB, 5,000 scans, + Webhooks"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Try Professional first",
        body: "New workspaces get a 14-day Professional trial with no card needed, so you can see the paid features before settling on a plan.",
      },
    ],
    faqs: [
      { q: "What happens when I use all 50 scans?", a: "eCard’s site does not describe the exact behaviour. Upgrading raises the monthly scan limit." },
      { q: "Is the Telegram bot on Free?", a: "Yes. It is part of the base feature set on every plan." },
      { q: "Does Free include Google Contacts sync?", a: "No. That starts on Starter." },
    ],
    related: ["pricing/starter", "pricing/free-trial", "features/ai-card-scanning/scan-limits-by-plan", "get-started"],
    source: "verified",
  },
  {
    slug: "pricing/starter",
    category: "pricing",
    title: "Starter Plan",
    seoTitle: "eCard Starter Plan: ₹299/month for Small Teams",
    description: "Starter costs ₹299 a month with 20 users, 25 GB storage, 1,000 scans, Google Contacts sync and Google Calendar & Meet booking on top of every core feature.",
    h1: "Starter: built for small teams",
    eyebrow: "₹299 / month",
    intro: "Starter lifts the limits that Free users hit first and adds two everyday integrations: Google Contacts sync and Google Calendar & Meet booking.",
    variant: "reference",
    visual: "pricing",
    icon: "users",
    sections: [
      {
        type: "cards",
        heading: "Starter at a glance",
        cards: [
          { title: "20 users", body: "Room for a small sales or founding team.", icon: "users" },
          { title: "25 GB storage", body: "Space for card images, PDFs and notes.", icon: "archive" },
          { title: "1,000 scans / month", body: "Enough for regular events and busy weeks.", icon: "scan" },
          { title: "Google Contacts sync", body: "Scanned contacts in your Google address book.", icon: "link" },
          { title: "Calendar & Meet booking", body: "Book meetings with Google Calendar and Meet.", icon: "calendar" },
        ],
      },
      {
        type: "prose",
        heading: "When to move from Free to Starter",
        paragraphs: [
          "The jump from 50 to 1,000 scans a month is the main reason people upgrade. If you attend even one trade show a month, or have several colleagues scanning, Free’s limit is easy to reach.",
          "Starter also suits anyone who lives in Google’s tools. Syncing contacts and booking meetings without switching apps removes a lot of small copy-paste steps.",
        ],
      },
      {
        type: "table",
        heading: "Starter vs neighbouring plans",
        headers: ["", "Free", "Starter", "Professional"],
        rows: [
          ["Price", "₹0", "₹299", "₹999"],
          ["Users", "5", "20", "100"],
          ["Storage", "1 GB", "25 GB", "250 GB"],
          ["Scans/month", "50", "1,000", "5,000"],
          ["Webhooks", "—", "—", "Included"],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Pricing notes",
        body: "Prices in INR. GST applied where applicable. Cancel any time and keep access until the end of your billing period.",
      },
    ],
    faqs: [
      { q: "Does Starter include webhooks?", a: "No. Webhooks start on Professional at ₹999 per month." },
      { q: "Can I trial Starter?", a: "New workspaces get a 14-day Professional trial with no card needed, which includes everything in Starter." },
    ],
    related: ["pricing/professional", "pricing/free", "integrations/google-contacts", "features/meeting-memory/calendar-and-meet-booking"],
    source: "verified",
  },
  {
    slug: "pricing/professional",
    category: "pricing",
    title: "Professional Plan",
    seoTitle: "eCard Professional: ₹999/month, Most Popular",
    description: "Professional costs ₹999 a month with 100 users, 250 GB, 5,000 scans, webhooks, Google Contacts sync and Calendar & Meet booking. Try it free for 14 days.",
    h1: "Professional: for growing businesses",
    eyebrow: "Most popular · ₹999 / month",
    intro: "Professional is eCard’s most popular plan. It adds webhooks and lifts limits to 100 users, 250 GB of storage and 5,000 scans a month.",
    variant: "reference",
    visual: "pricing",
    icon: "zap",
    sections: [
      {
        type: "split",
        heading: "What you get",
        body: [
          "Everything in Starter, plus webhooks that send a signed event for every new contact. That makes Professional the plan where eCard starts feeding your other systems automatically.",
          "It’s also the plan new workspaces trial for 14 days, with no card needed.",
        ],
        points: ["100 users", "250 GB storage", "5,000 scans per month", "Google Contacts sync", "Google Calendar & Meet booking", "Webhooks"],
      },
      {
        type: "steps",
        heading: "Making the most of the trial",
        steps: [
          { title: "Invite your team", body: "Add the colleagues who collect cards, with the right roles." },
          { title: "Connect a mailbox and AI model", body: "So scans turn into intros straight away." },
          { title: "Run a real event", body: "Scan an expo or meetup’s worth of cards and follow up with the room." },
          { title: "Test a webhook", body: "Point it at a test receiver to see new-contact events arrive." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Before the trial ends",
        body: "Check how many scans and users you actually used. If you stayed under 1,000 scans and 20 users and didn’t need webhooks, Starter may be enough.",
      },
      {
        type: "bullets",
        heading: "Billing basics",
        items: [
          "₹999 per month, prices in INR.",
          "GST applied where applicable.",
          "Yearly billing saves about two months; exact totals at checkout.",
          "Cancel any time and keep access until the period ends.",
        ],
      },
    ],
    faqs: [
      { q: "Why is Professional the most popular?", a: "eCard marks it as Popular on its pricing page. It is also the plan included in the 14-day trial." },
      { q: "Does Professional include white label?", a: "No. White label & custom domain start on Business." },
      { q: "What does the webhook send?", a: "Signed events for each new contact. Payload details are not publicly documented." },
    ],
    related: ["integrations/webhooks", "pricing/business", "pricing/free-trial", "pricing/compare-plans"],
    source: "verified",
  },
  {
    slug: "pricing/business",
    category: "pricing",
    title: "Business Plan",
    seoTitle: "eCard Business: Unlimited Use for ₹2,999/month",
    description: "Business costs ₹2,999 a month with unlimited users, storage and scans, plus white label and custom domain, webhooks and every Google integration.",
    h1: "Business: no limits, your brand",
    eyebrow: "₹2,999 / month",
    intro: "Business is for large organisations. Users, storage and scans are unlimited, and you can white-label eCard with your logo, colours and custom domain.",
    variant: "reference",
    visual: "pricing",
    icon: "building",
    sections: [
      {
        type: "table",
        heading: "Business plan details",
        headers: ["Item", "Business"],
        rows: [
          ["Price", "₹2,999 per month"],
          ["Users", "Unlimited"],
          ["Storage", "Unlimited"],
          ["Scans per month", "Unlimited"],
          ["Extras", "Google Contacts sync, Calendar & Meet booking, Webhooks, White label & custom domain"],
        ],
      },
      {
        type: "cards",
        heading: "Why organisations choose Business",
        cards: [
          { title: "Large field teams", body: "No per-user ceiling as you add sales reps or event staff.", icon: "users" },
          { title: "Heavy event calendars", body: "Unlimited scans remove the worry before a big expo.", icon: "calendar" },
          { title: "Brand consistency", body: "Your logo, colours and domain on the experience contacts see.", icon: "palette" },
        ],
      },
      {
        type: "prose",
        heading: "White label in practice",
        paragraphs: [
          "eCard’s white-label option covers logo, colours and a custom domain. For an agency or a company with a strong brand, that means the digital cards and links your team shares look like your own product.",
          "Pair that with the team controls every workspace has — roles, 2FA and audit logs — and Business is a good fit for organisations rolling eCard out widely.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Need a contract or custom terms?",
        body: "Enterprise has the same features as Business with custom pricing. Contact sales@bizzfly.com.",
      },
    ],
    faqs: [
      { q: "Are scans really unlimited?", a: "eCard lists scans as Unlimited on Business. Your own AI provider may still apply rate limits to your key." },
      { q: "What’s the difference between Business and Enterprise?", a: "Same listed features; Enterprise has custom pricing through sales." },
    ],
    related: ["pricing/enterprise", "features/team-security/white-label", "features/team-security/custom-domains", "pricing/compare-plans"],
    source: "verified",
  },
  {
    slug: "pricing/enterprise",
    category: "pricing",
    title: "Enterprise Plan",
    seoTitle: "eCard Enterprise: Custom Pricing via Sales",
    description: "Enterprise includes unlimited users, storage and scans, webhooks and white label with custom pricing. Contact sales@bizzfly.com to discuss your needs.",
    h1: "Enterprise: talk to us",
    eyebrow: "Custom pricing",
    intro: "Enterprise has the same listed features as Business — unlimited everything, webhooks, white label and custom domain — with pricing agreed with the eCard sales team.",
    variant: "reference",
    visual: "pricing",
    icon: "briefcase",
    sections: [
      {
        type: "bullets",
        heading: "Included in Enterprise",
        items: [
          "Unlimited users, storage and scans",
          "Google Contacts sync",
          "Google Calendar & Meet booking",
          "Webhooks",
          "White label & custom domain",
          "Every base feature: AI scanning, contacts, outreach, digital card, Telegram bot",
        ],
      },
      {
        type: "steps",
        heading: "Preparing for a sales conversation",
        steps: [
          { title: "Count your users", body: "Estimate who will scan, who will follow up and who only needs to view." },
          { title: "Estimate card volume", body: "Think about events per year and cards per event." },
          { title: "List security needs", body: "2FA, audit logs, encryption and your AI provider preferences." },
          { title: "Email sales", body: "Write to sales@bizzfly.com with what you’ve gathered." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "What we can’t promise here",
        body: "eCard’s site does not publish SLAs, contract terms or certifications for Enterprise. Ask sales directly about anything your procurement team needs.",
      },
      {
        type: "prose",
        heading: "Security that comes with every workspace",
        paragraphs: [
          "All workspaces get 2FA with authenticator codes, recovery codes, trusted devices and login alerts. API keys and SMTP passwords are encrypted with AES-256-GCM, and workspaces have an audit log. Five roles — owner, admin, manager, member and scan-only guest — let you limit what each person can do.",
        ],
      },
    ],
    faqs: [
      { q: "How do I contact sales?", a: "Email sales@bizzfly.com." },
      { q: "Is there an Enterprise trial?", a: "New workspaces get a 14-day Professional trial. Ask sales about anything beyond that." },
    ],
    related: ["contact-sales", "pricing/business", "features/team-security", "integrations/api"],
    source: "verified",
  },
  {
    slug: "pricing/compare-plans",
    category: "pricing",
    title: "Compare Plans",
    seoTitle: "Compare eCard Plans Side by Side",
    description: "Compare eCard’s Free, Starter, Professional, Business and Enterprise plans: monthly INR prices, users, storage, scans and which integrations each includes.",
    h1: "Every plan, side by side",
    eyebrow: "Plan comparison",
    intro: "One table with every limit and feature that differs between eCard plans. Everything not listed here is in the base set on all plans.",
    variant: "reference",
    visual: "pricing",
    icon: "layers",
    sections: [
      {
        type: "table",
        heading: "Limits and prices",
        headers: ["", "Free", "Starter", "Professional", "Business", "Enterprise"],
        rows: [
          ["Monthly price", "₹0", "₹299", "₹999", "₹2,999", "Custom"],
          ["Users", "5", "20", "100", "Unlimited", "Unlimited"],
          ["Storage", "1 GB", "25 GB", "250 GB", "Unlimited", "Unlimited"],
          ["Scans per month", "50", "1,000", "5,000", "Unlimited", "Unlimited"],
        ],
      },
      {
        type: "table",
        heading: "Features that vary",
        headers: ["Feature", "Free", "Starter", "Professional", "Business", "Enterprise"],
        rows: [
          ["Google Contacts sync", "—", "✓", "✓", "✓", "✓"],
          ["Google Calendar & Meet booking", "—", "✓", "✓", "✓", "✓"],
          ["Webhooks", "—", "—", "✓", "✓", "✓"],
          ["White label & custom domain", "—", "—", "—", "✓", "✓"],
        ],
      },
      {
        type: "bullets",
        heading: "In every plan",
        items: [
          "AI card scanning",
          "Contacts, tags & events",
          "Bulk import & export",
          "Email outreach from your own mailbox",
          "WhatsApp messages",
          "Digital business card",
          "Telegram scanning bot",
        ],
      },
      {
        type: "cards",
        heading: "Quick picks",
        cards: [
          { title: "Just you, occasional events", body: "Free covers 50 scans a month.", icon: "check" },
          { title: "Small team in Google Workspace", body: "Starter adds sync and booking for ₹299.", icon: "users" },
          { title: "Need data in other systems", body: "Professional adds webhooks for ₹999.", icon: "webhook" },
          { title: "Your brand, no limits", body: "Business at ₹2,999 or Enterprise via sales.", icon: "building" },
        ],
      },
    ],
    faqs: [
      { q: "Are these monthly prices?", a: "Yes, in INR per month. GST applied where applicable." },
      { q: "Are yearly prices listed?", a: "No. Yearly billing saves about two months; exact totals appear at checkout." },
    ],
    related: ["pricing", "product/feature-availability", "pricing/faq", "product/plan-picker"],
    source: "verified",
  },
  {
    slug: "pricing/billing-and-payments",
    category: "pricing",
    title: "Billing & Payments",
    seoTitle: "eCard Billing: UPI, Cards, GST and Currency",
    description: "How eCard billing works: INR pricing, local currency at checkout, GST, UPI, net banking, wallets, EMI and cards in India, and card payments abroad.",
    h1: "How paying for eCard works",
    eyebrow: "Billing",
    intro: "Here’s everything eCard states about currency, tax, payment methods and cancellation, in one place.",
    variant: "reference",
    visual: "pricing",
    icon: "card",
    sections: [
      {
        type: "table",
        heading: "Payment methods",
        headers: ["Where you are", "How you can pay"],
        rows: [
          ["India", "UPI, net banking, wallets, EMI or cards"],
          ["Outside India", "Card"],
        ],
      },
      {
        type: "bullets",
        heading: "Currency and tax",
        items: [
          "Prices are listed in INR.",
          "Local currency is shown at checkout for supported countries.",
          "GST is applied where applicable.",
        ],
      },
      {
        type: "prose",
        heading: "Monthly and yearly",
        paragraphs: [
          "The prices on eCard’s pricing page are monthly: Starter ₹299, Professional ₹999 and Business ₹2,999, with Enterprise priced through sales. Yearly billing is said to save about two months; the exact yearly total is shown at checkout rather than published.",
        ],
      },
      {
        type: "steps",
        heading: "Cancelling",
        steps: [
          { title: "Cancel any time", body: "There’s no lock-in on monthly plans." },
          { title: "Keep access", body: "You keep access until the end of your billing period." },
          { title: "Export your data", body: "Bulk export is in every plan, so take a CSV if you need one." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Billing questions",
        body: "For invoices or payment issues, see Billing Help or email sales@bizzfly.com.",
      },
    ],
    faqs: [
      { q: "Can I pay by UPI?", a: "Yes, in India. International customers pay by card." },
      { q: "Is GST included in the listed price?", a: "GST is applied where applicable. Check the total at checkout." },
      { q: "Is EMI available?", a: "EMI is listed as a payment option in India." },
    ],
    related: ["integrations/razorpay-upi", "integrations/stripe", "help/billing", "pricing/faq"],
    source: "verified",
  },
  {
    slug: "pricing/free-trial",
    category: "pricing",
    title: "14-Day Free Trial",
    seoTitle: "eCard 14-Day Professional Trial, No Card",
    description: "Every new eCard workspace gets a 14-day Professional trial with no card needed: 100 users, 5,000 scans, webhooks and Google integrations to try.",
    h1: "Try Professional free for 14 days",
    eyebrow: "Free trial",
    intro: "New workspaces start with a 14-day trial of the Professional plan. You don’t need to enter a card to begin.",
    variant: "reference",
    visual: "pricing",
    icon: "clock",
    sections: [
      {
        type: "split",
        heading: "What the trial includes",
        body: [
          "The trial gives you Professional — eCard’s most popular plan, normally ₹999 a month. That means room to invite colleagues, scan a real event’s worth of cards and test webhooks before you pay anything.",
        ],
        points: ["100 users", "250 GB storage", "5,000 scans per month", "Google Contacts sync", "Google Calendar & Meet booking", "Webhooks"],
      },
      {
        type: "steps",
        heading: "A two-week plan",
        intro: "General suggestions for getting a clear answer by day 14:",
        steps: [
          { title: "Days 1–2: set up", body: "Connect an AI model, a mailbox and the Telegram bot." },
          { title: "Days 3–7: daily use", body: "Scan every card you get and let intros send." },
          { title: "Days 8–12: team and data", body: "Invite colleagues, import a CSV and try a webhook." },
          { title: "Days 13–14: decide", body: "Compare your usage with plan limits and pick one." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "After the trial",
        body: "eCard’s site does not describe exactly what happens on day 15. Choose a plan before the trial ends, or check in-app messages.",
      },
      {
        type: "bullets",
        heading: "Trust line",
        items: ["50 free scans", "No card required", "14-day Pro trial"],
      },
    ],
    faqs: [
      { q: "Do I need a credit card?", a: "No. The trial needs no card." },
      { q: "Which plan does the trial use?", a: "Professional." },
    ],
    related: ["pricing/professional", "get-started", "product/sign-up-flow", "pricing/free"],
    source: "verified",
  },
  {
    slug: "pricing/faq",
    category: "pricing",
    title: "Pricing FAQ",
    seoTitle: "eCard Pricing FAQ: Plans, Limits, Billing",
    description: "Answers to common eCard pricing questions: plan limits, the free trial, GST, UPI and card payments, yearly billing, AI key costs and cancellation.",
    h1: "Pricing questions, answered",
    eyebrow: "FAQ",
    intro: "Quick answers about eCard plans and billing, based on what eCard’s pricing page states.",
    variant: "reference",
    visual: "pricing",
    icon: "help",
    sections: [
      {
        type: "cards",
        heading: "Plans in one line each",
        cards: [
          { title: "Free — ₹0", body: "5 users, 1 GB, 50 scans/month.", icon: "check" },
          { title: "Starter — ₹299", body: "20 users, 25 GB, 1,000 scans, Google sync & booking.", icon: "users" },
          { title: "Professional — ₹999", body: "100 users, 250 GB, 5,000 scans, + webhooks.", icon: "zap" },
          { title: "Business — ₹2,999", body: "Unlimited, + white label & custom domain.", icon: "building" },
          { title: "Enterprise — Custom", body: "Same as Business; contact sales.", icon: "briefcase" },
        ],
      },
      {
        type: "prose",
        heading: "About AI and email costs",
        paragraphs: [
          "eCard lets you bring your own AI key and send email from your own mailbox. When you do, your AI or email provider may charge you for their usage separately from your eCard plan. eCard plan limits on scans still apply.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Still unsure?",
        body: "Start with the 14-day Professional trial, then compare your real usage with plan limits.",
      },
      {
        type: "bullets",
        heading: "Not published",
        items: ["Yearly prices (shown at checkout only)", "Enterprise pricing (custom)", "Overage charges"],
      },
    ],
    faqs: [
      { q: "Which plan is most popular?", a: "Professional at ₹999 per month." },
      { q: "How much does yearly billing save?", a: "About two months. Exact yearly totals are shown at checkout." },
      { q: "What payment methods are accepted?", a: "In India: UPI, net banking, wallets, EMI or cards. Internationally: card." },
      { q: "Can I cancel?", a: "Yes, any time. You keep access until the end of your billing period." },
      { q: "Is GST charged?", a: "GST is applied where applicable." },
    ],
    related: ["pricing", "pricing/compare-plans", "help/billing", "help/faq"],
    source: "verified",
  },
];

/* Expanded, page-specific sections and FAQs merged into the pages above. */
type Extra = { sections: Section[]; faqs?: FAQ[] };

const extras: Record<string, Extra> = {
  "pricing/free": {
    sections: [
      {
        type: "prose",
        heading: "How far 50 scans a month goes",
        paragraphs: [
          "Fifty scans is roughly one or two cards per working day, or a single small networking event each month. For a consultant who meets a handful of new people a week, that can be enough indefinitely. For anyone attending trade shows, it is more of a test drive: one busy expo day can produce more than fifty cards.",
          "Storage matters too. Free includes 1 GB, shared across the workspace, for card images, PDFs and notes. Text contacts take little space, but photos and attachments add up over time.",
        ],
      },
      {
        type: "table",
        heading: "Sample: who might stay on Free",
        intro: "Sample scenarios, fictional, to illustrate fit against the published limits.",
        headers: ["Sample user", "Typical month", "Fit"],
        rows: [
          ["Sample: freelance designer", "10–20 new cards from client meetings", "Comfortably within 50 scans"],
          ["Sample: two-person consultancy", "One meetup plus referrals, about 40 cards", "Fits, with little headroom"],
          ["Sample: startup at an expo", "150+ cards in a weekend", "Outgrows Free; Starter allows 1,000 scans"],
        ],
      },
      {
        type: "bullets",
        heading: "Signals it is time to upgrade",
        items: [
          "You regularly run out of scans before the month ends.",
          "Your team grows past 5 users.",
          "You want scanned contacts to appear in Google Contacts, or to offer Calendar & Meet booking.",
          "Storage is filling up with card images and PDFs.",
        ],
      },
    ],
    faqs: [
      { q: "Does the Free plan expire?", a: "eCard lists Free at ₹0 per month with no end date mentioned. New workspaces also get a 14-day Professional trial." },
    ],
  },
  "pricing/starter": {
    sections: [
      {
        type: "prose",
        heading: "Who Starter is built for",
        paragraphs: [
          "Starter, at ₹299 a month, is labelled “For small teams”. It raises the ceilings that Free users hit first: users go from 5 to 20, storage from 1 GB to 25 GB and monthly scans from 50 to 1,000.",
          "It is also the first plan with Google Contacts sync and Google Calendar & Meet booking, which matter most to teams already working in Gmail and Google Workspace. Everything in the base set stays the same: AI scanning, the digital card, WhatsApp, intro emails and the Telegram bot.",
        ],
      },
      {
        type: "cards",
        heading: "Sample teams on Starter",
        intro: "Fictional scenarios to illustrate fit.",
        cards: [
          { title: "Sample: real-estate office", body: "Eight agents scan buyer and broker cards from site visits, roughly 300 a month, and sync them to their phones.", icon: "building" },
          { title: "Sample: boutique agency", body: "Twelve people attend a few industry events a quarter and book follow-up calls through Google Meet.", icon: "calendar" },
          { title: "Sample: family distributor", body: "Fifteen sales staff, a steady 500–800 cards a month, all on Google Workspace.", icon: "users" },
        ],
      },
      {
        type: "bullets",
        heading: "When Starter stops being enough",
        items: [
          "You need more than 20 users in the workspace.",
          "Monthly scans approach 1,000, for example during expo season.",
          "You want new contacts pushed to another system automatically; webhooks start on Professional.",
          "Card images and files approach the 25 GB storage limit.",
        ],
      },
    ],
    faqs: [
      { q: "Is ₹299 the price per user?", a: "eCard lists Starter at ₹299 a month with up to 20 users. The pricing page does not describe per-user charges; check the total at checkout." },
      { q: "Can I move from Starter to Professional later?", a: "Plans are listed as tiers you can upgrade through. Check billing settings in the app for how a mid-period change is handled." },
    ],
  },
  "pricing/professional": {
    sections: [
      {
        type: "prose",
        heading: "Why Professional is the popular middle",
        paragraphs: [
          "Professional, ₹999 a month, is labelled “For growing businesses” and carries eCard’s Popular badge. It lifts the limits to 100 users, 250 GB of storage and 5,000 scans a month, and it is the first plan with webhooks: signed events for each new contact.",
          "That webhook is often the deciding factor. Teams that need new contacts to appear in a CRM, a spreadsheet or an automation tool without manual exports usually land here.",
        ],
      },
      {
        type: "table",
        heading: "Sample: is Professional the right size?",
        intro: "Fictional scenarios measured against the published limits.",
        headers: ["Sample team", "Users", "Cards per month", "Verdict"],
        rows: [
          ["Sample: regional sales team", "35", "1,500 in event months", "Over Starter’s 1,000 scans; fits Professional"],
          ["Sample: SaaS startup", "18", "400", "Starter fits on volume, but webhooks to their CRM need Professional"],
          ["Sample: national distributor", "140", "6,000", "Over Professional’s 100 users and 5,000 scans; look at Business"],
        ],
      },
      {
        type: "bullets",
        heading: "Upgrade triggers from Professional",
        items: [
          "More than 100 people need access to the workspace.",
          "Scans regularly exceed 5,000 a month.",
          "You want your logo, colours and custom domain on what contacts see; white label starts on Business.",
        ],
      },
    ],
    faqs: [
      { q: "How do I know if I need webhooks?", a: "If someone on your team copies new contacts into another system by hand, a webhook can automate that. If contacts live only in eCard, you may not need it." },
    ],
  },
  "pricing/business": {
    sections: [
      {
        type: "prose",
        heading: "What “unlimited” changes",
        paragraphs: [
          "Business, ₹2,999 a month, is labelled “For large organizations” and removes the three ceilings that shape the lower plans: users, storage and scans are all listed as Unlimited. That turns planning from “will we run out during the expo?” into simply adding the people who need access.",
          "It is also the first plan with white label and custom domain, so contacts see your logo, colours and web address rather than eCard’s branding.",
        ],
      },
      {
        type: "cards",
        heading: "Sample organisations on Business",
        intro: "Fictional scenarios to illustrate fit.",
        cards: [
          { title: "Sample: exhibition organiser", body: "Staff scan thousands of exhibitor and visitor cards across several shows a year.", icon: "calendar" },
          { title: "Sample: multi-city brokerage", body: "Over 150 agents need access, beyond Professional’s 100-user limit.", icon: "building" },
          { title: "Sample: franchise network", body: "Wants every outlet’s digital card on the brand’s own domain.", icon: "globe" },
        ],
      },
      {
        type: "bullets",
        heading: "Before you choose Business",
        items: [
          "Check whether you truly exceed Professional’s 100 users, 250 GB or 5,000 scans, or only need white label.",
          "Plan the custom domain with whoever manages your DNS.",
          "Remember your AI provider still has its own rate limits; a key pool with failover helps on heavy days.",
          "If you need a contract or custom terms, Enterprise is handled through sales.",
        ],
      },
    ],
    faqs: [
      { q: "Does Business include webhooks and Google sync?", a: "Yes. Business includes Google Contacts sync, Calendar & Meet booking, webhooks and white label & custom domain." },
      { q: "Can I try white label during the trial?", a: "The 14-day trial is for Professional, which does not include white label. Ask eCard if you need to evaluate it first." },
    ],
  },
  "pricing/enterprise": {
    sections: [
      {
        type: "prose",
        heading: "How Enterprise differs from Business",
        paragraphs: [
          "On eCard’s pricing page, Enterprise lists the same capabilities as Business: unlimited users, storage and scans, Google Contacts sync, Calendar & Meet booking, webhooks, and white label with a custom domain. The difference is commercial rather than technical: pricing is custom, and you reach it by contacting sales.",
          "Organisations usually go this route when procurement needs a negotiated agreement, a specific invoicing arrangement or answers to a security questionnaire before signing.",
        ],
      },
      {
        type: "bullets",
        heading: "Questions worth raising with sales",
        intro: "General procurement topics; eCard has not published answers to these.",
        items: [
          "Contract length and invoicing terms that suit your finance team.",
          "How AI provider keys will be managed across departments.",
          "Rollout plan for teams, roles and the scan-only guest role at events.",
          "Data export and deletion processes, which eCard’s compliance checklist covers.",
          "Support expectations and a named contact.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Pilot first",
        body: "Many organisations start a small group on the 14-day Professional trial to test scanning, intros and webhooks with real cards, then bring that experience into the Enterprise conversation.",
      },
    ],
    faqs: [
      { q: "Is Enterprise more capable than Business?", a: "The pricing page lists the same features for both. Enterprise is for organisations that want custom pricing and terms." },
      { q: "Is there a published Enterprise price?", a: "No. Pricing is custom; email sales@bizzfly.com." },
    ],
  },
  "pricing/compare-plans": {
    sections: [
      {
        type: "steps",
        heading: "Choosing a plan in four questions",
        steps: [
          { title: "How many people need access?", body: "Up to 5 fits Free, 20 Starter, 100 Professional; beyond that, Business or Enterprise." },
          { title: "How many cards a month at your busiest?", body: "Plan for peak months, not average ones: 50, 1,000 and 5,000 scans are the Free, Starter and Professional limits." },
          { title: "Do contacts need to leave eCard automatically?", body: "Google Contacts sync starts on Starter; webhooks start on Professional." },
          { title: "Should contacts see your brand?", body: "White label and custom domain start on Business." },
        ],
      },
      {
        type: "prose",
        heading: "Look beyond the price tag",
        paragraphs: [
          "Comparing plans on price alone misses what actually limits a team. A five-person team that scans 2,000 cards at one expo is constrained by scans, not users; a 30-person team scanning 200 cards a month is constrained by users, not scans. Work out which limit you will hit first, then pick the plan that clears it.",
          "Also count costs outside eCard. When you bring your own AI key, usage is billed by that provider, and your email provider may have its own plan limits for sending intros. Include both in any budget alongside the eCard subscription.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not sure? Start with the trial",
        body: "The 14-day Professional trial needs no card. Use it during a real event, see how many scans and users you actually need, then choose the smallest plan that fits.",
      },
    ],
    faqs: [
      { q: "Can I change plans later?", a: "Yes, plans are tiers you can move between as your needs change. Check billing settings for how changes are applied mid-period." },
      { q: "Is every core feature on Free?", a: "The base set is on every plan: AI scanning, contacts, tags and events, bulk import and export, email outreach, WhatsApp, the digital card and the Telegram bot." },
    ],
  },
  "pricing/billing-and-payments": {
    sections: [
      {
        type: "prose",
        heading: "How the billing cycle works",
        paragraphs: [
          "eCard lists its prices per month in INR. When you subscribe, the checkout shows the final amount, including GST where applicable and a local-currency figure if you are in a supported country outside India.",
          "If you cancel, you are not cut off immediately: you keep access until the end of the billing period you have already paid for. That gives you time to export contacts or wind down follow-ups before the period ends.",
        ],
      },
      {
        type: "table",
        heading: "Monthly or yearly?",
        intro: "eCard states yearly billing saves about two months; exact yearly totals appear only at checkout.",
        headers: ["Consideration", "Monthly", "Yearly"],
        rows: [
          ["Commitment", "Month to month", "A year at a time"],
          ["Cost", "Listed monthly price", "Saves about two months, per eCard"],
          ["Best when", "Usage is uncertain or seasonal", "You are confident in the plan size"],
        ],
      },
      {
        type: "bullets",
        heading: "Billing tips for teams",
        items: [
          "Decide who in the workspace owns billing, usually the owner role.",
          "Keep GST details handy if your accounts team needs them.",
          "Budget AI provider costs separately when you bring your own key.",
          "Review usage against plan limits a week before renewal, and downgrade or upgrade before the next period starts.",
        ],
      },
    ],
    faqs: [
      { q: "What happens to my data if I cancel?", a: "You keep access until the end of the period. Bulk export is on every plan, so download what you need before then." },
    ],
  },
  "pricing/free-trial": {
    sections: [
      {
        type: "prose",
        heading: "Why the trial is on Professional",
        paragraphs: [
          "New workspaces get 14 days of Professional, the Popular plan, with no card needed. That means you can test the full middle tier: 100 users, 250 GB, 5,000 scans a month, Google Contacts sync, Calendar & Meet booking and webhooks.",
          "Trying the larger plan first shows you which extras you actually use. If you never touch webhooks or sync, a smaller plan may be all you need afterwards.",
        ],
      },
      {
        type: "bullets",
        heading: "What to measure during the trial",
        items: [
          "How many cards you scan in a typical week and in your busiest week.",
          "How many colleagues actually log in and use the workspace.",
          "Whether you used Google Contacts sync or Calendar & Meet booking.",
          "Whether a webhook replaced any manual copying into other tools.",
        ],
      },
      {
        type: "table",
        heading: "Sample: reading your trial results",
        intro: "Fictional outcomes mapped to the published plans.",
        headers: ["Sample result", "Suggested plan"],
        rows: [
          ["Solo user, 30 scans, no sync used", "Free"],
          ["10 users, 600 scans, sync used daily", "Starter"],
          ["40 users, webhooks feeding a CRM", "Professional"],
          ["Needs own branding and domain", "Business"],
        ],
      },
    ],
    faqs: [
      { q: "What happens on day 15 if I do nothing?", a: "eCard’s site does not describe the exact transition. Since no card is needed for the trial, you are not charged automatically without choosing a plan; check the app for details." },
      { q: "Can my whole team join the trial?", a: "The trial is Professional, which allows up to 100 users." },
    ],
  },
  "pricing/faq": {
    sections: [
      {
        type: "table",
        heading: "Which plan first adds each extra",
        headers: ["Extra", "First plan", "Monthly price"],
        rows: [
          ["Google Contacts sync", "Starter", "₹299"],
          ["Google Calendar & Meet booking", "Starter", "₹299"],
          ["Webhooks", "Professional", "₹999"],
          ["White label & custom domain", "Business", "₹2,999"],
          ["Custom pricing and terms", "Enterprise", "Contact sales"],
        ],
      },
      {
        type: "prose",
        heading: "Common misunderstandings",
        paragraphs: [
          "The trial is not a separate plan: it is 14 days of Professional for new workspaces, with no card required. Scan limits are stated per month, and eCard’s site does not say that unused scans carry over, so plan around your busiest month rather than your average.",
          "Unlimited scans on Business and Enterprise refer to eCard’s limits. If you bring your own AI key, that provider can still rate-limit requests, which is why eCard supports a key pool with failover. Likewise, your email provider’s sending limits apply to intros regardless of plan.",
        ],
      },
      {
        type: "bullets",
        heading: "Sample upgrade paths",
        intro: "Fictional journeys showing how teams typically move through the plans.",
        items: [
          "Sample: a solo founder starts on Free, moves to Starter when two hires need access.",
          "Sample: an events team hits 1,000 scans during expo season and moves to Professional.",
          "Sample: a 120-person sales org outgrows Professional’s 100 users and moves to Business.",
        ],
      },
    ],
  },
};

const more: Record<string, Section[]> = {
  "pricing/free": [
    {
      type: "callout",
      tone: "info",
      title: "Free is not a stripped-down demo",
      body: "Every feature in the base set is on Free: AI scanning, contacts, tags and events, bulk import and export, email outreach from your own mailbox, WhatsApp, the digital card and the Telegram bot. What changes on paid plans is capacity and the extras like sync and webhooks.",
    },
  ],
  "pricing/starter": [
    {
      type: "callout",
      tone: "tip",
      title: "Calendar & Meet booking for follow-ups",
      body: "Booking a meeting while the conversation is fresh is one of the most effective follow-ups. Starter is the first plan that adds Google Calendar & Meet booking.",
    },
  ],
  "pricing/professional": [
    {
      type: "callout",
      tone: "info",
      title: "Room to grow",
      body: "Moving from Starter to Professional multiplies users by five (20 to 100), storage by ten (25 GB to 250 GB) and monthly scans by five (1,000 to 5,000), so most growing teams can stay on it for a long time.",
    },
  ],
  "pricing/business": [
    {
      type: "callout",
      tone: "note",
      title: "White label is the main feature jump",
      body: "Apart from unlimited capacity, the only feature Business adds over Professional is white label and custom domain. If your team is under Professional’s limits and does not need its own branding, Professional may be the better value.",
    },
  ],
  "pricing/enterprise": [
    {
      type: "table",
      heading: "Business or Enterprise?",
      headers: ["Question", "Business", "Enterprise"],
      rows: [
        ["Price", "₹2,999 a month, listed", "Custom, via sales"],
        ["Users, storage, scans", "Unlimited", "Unlimited"],
        ["White label & custom domain", "Included", "Included"],
        ["How to start", "Choose the plan at sign-up", "Email sales@bizzfly.com"],
      ],
    },
  ],
  "pricing/compare-plans": [
    {
      type: "bullets",
      heading: "Common reasons teams pick the wrong plan",
      items: [
        "Sizing for an average month and then running out of scans during expo season.",
        "Paying for Business when only one or two limits were close, and Professional would have fit.",
        "Forgetting that Google Contacts sync is not on Free.",
        "Planning webhook integrations before checking that the plan is Professional or above.",
      ],
    },
  ],
  "pricing/billing-and-payments": [
    {
      type: "cards",
      heading: "Paying from India versus abroad",
      cards: [
        { title: "In India", body: "Pay by UPI, net banking, wallets, EMI or cards. Prices are listed in INR and GST is applied where applicable.", icon: "rupee" },
        { title: "Outside India", body: "Pay by card. Local currency is shown at checkout for supported countries.", icon: "globe" },
        { title: "Enterprise", body: "Custom pricing and terms are arranged through sales@bizzfly.com.", icon: "briefcase" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "What is not published",
      body: "eCard’s site does not publish yearly prices, refund terms or proration rules for plan changes. Check checkout and billing settings, or ask eCard directly, before relying on any of these. Your checkout receipt is the best record of what you actually paid.",
    },
  ],
  "pricing/free-trial": [
    {
      type: "bullets",
      heading: "Make the trial count",
      items: [
        "Start it close to an event, so you test scanning under real pressure.",
        "Invite the colleagues who will actually collect cards, not just managers.",
        "Connect your own mailbox early so intros go out during the trial.",
        "Export a sample at the end to check data comes out the way you expect.",
        "Note which plan limit you came closest to, since that usually decides the plan.",
      ],
    },
  ],
  "pricing/faq": [
    {
      type: "callout",
      tone: "tip",
      title: "Quick rule of thumb",
      body: "Start on the 14-day Professional trial, track your busiest week of scans and how many people log in, then pick the smallest plan whose users, storage and scan limits cover that peak. You can always upgrade when the team or event calendar grows.",
    },
  ],
};

more["pricing/faq"].push({
  type: "bullets",
  heading: "Costs that sit outside your eCard plan",
  intro: "General points to include in a budget; these are billed by other providers, not by eCard.",
  items: [
    "AI usage on your own key, billed by the provider you choose, such as Claude, OpenAI or Gemini.",
    "Any paid plan on your email-sending service, if you use one such as SendGrid, Brevo or Amazon SES.",
    "Your own domain registration, if you plan to use a custom domain on Business or Enterprise.",
    "Card or currency-conversion fees from your bank when paying from outside India.",
  ],
});
more["pricing/enterprise"].push({
  type: "callout",
  tone: "info",
  title: "Team roles at scale",
  body: "Large rollouts benefit from eCard’s roles: owner, admin, manager, member and scan-only guest. The guest role suits temporary event staff who only need to capture cards, while managers and admins look after follow-up and settings.",
});

const moreFaqs: Record<string, FAQ> = {
  "pricing/enterprise": { q: "Can Enterprise teams use their own AI provider?", a: "Every plan lets you choose an AI model and bring your own key, including Azure or a custom endpoint." },
  "pricing/billing-and-payments": { q: "Can I pay in my local currency?", a: "Local currency is shown at checkout for supported countries. International customers pay by card." },
  "pricing/free-trial": { q: "Can I use the trial and then stay on Free?", a: "Yes, Free is ₹0 and available to every workspace. Check that your usage fits 5 users, 1 GB and 50 scans a month." },
  "pricing/business": { q: "Is there a user limit on Business?", a: "No. Users, storage and scans are all listed as Unlimited." },
};

for (const p of pages) {
  if (more[p.slug]) p.sections = [...p.sections, ...more[p.slug]];
  const x = extras[p.slug];
  const extraFaqs = [...(x?.faqs ?? []), ...(moreFaqs[p.slug] ? [moreFaqs[p.slug]] : [])];
  if (x) p.sections = [...p.sections, ...x.sections];
  if (extraFaqs.length) p.faqs = [...(p.faqs ?? []), ...extraFaqs].slice(0, 5);
}
