import type { PageDef, Section, FAQ } from "../types";

const base: PageDef[] = [
  {
    slug: "",
    category: "company",
    title: "Home",
    seoTitle: "eCard | AI Visiting Card CRM",
    description: "eCard is the AI visiting-card CRM. Scan, remember and follow up with every person you meet. 50 free scans, no card required, 14-day Pro trial.",
    h1: "Every Card You Collect, Scanned Into A Relationship.",
    eyebrow: "AI Visiting-card CRM",
    intro: "The AI visiting-card CRM. Scan, remember and follow up with every person you meet.",
    variant: "feature",
    visual: "scan",
    icon: "scan",
    custom: true,
    sections: [
      {
        type: "prose",
        heading: "What eCard Does",
        paragraphs: [
          "eCard reads visiting cards with the AI model you choose, lets you review every field before it is saved, and helps you follow up by email from your own mailbox or by WhatsApp in English, Hindi or Marathi. It works in any phone browser, no app to install.",
        ],
      },
    ],
    related: ["how-it-works", "pricing", "features/ai-card-scanning", "sample-scan"],
    source: "verified",
  },
  {
    slug: "about",
    category: "company",
    title: "About eCard",
    seoTitle: "About eCard: The AI Visiting-Card CRM",
    description: "Learn what eCard is, who it is built for and why it treats every visiting card as the start of a relationship rather than a slip of paper in a drawer.",
    h1: "Built For People Who Collect Cards For A Living",
    eyebrow: "About",
    intro: "eCard turns the visiting cards you collect into searchable contacts, remembered meetings and timely follow-ups. It runs in any phone browser, starts at ₹0 and grows with your team.",
    variant: "feature",
    visual: "dashboard",
    icon: "building",
    sections: [
      {
        type: "prose",
        heading: "Why eCard Exists",
        paragraphs: [
          "Most visiting cards end up in a pocket, a drawer or a rubber-banded stack on a desk. The conversation that came with the card fades within days, and the follow-up that would have turned a handshake into a deal never gets sent.",
          "eCard is designed around a simple idea: every card you collect should become a relationship you can act on. You scan the card, the AI reads it, you check the fields, and eCard helps you remember where you met and send the first message while the meeting is still fresh.",
        ],
      },
      {
        type: "cards",
        heading: "What We Focus On",
        cards: [
          { title: "Scan", body: "AI reads cards with the model you choose (Claude, OpenAI, Gemini, DeepSeek or Grok) and shows a confidence score for each field.", icon: "scan" },
          { title: "Remember", body: "Meeting memory keeps where you met, who introduced you, voice notes and a searchable AI summary.", icon: "brain" },
          { title: "Follow Up", body: "Intro emails send from your own SMTP after a 5-second preview, and WhatsApp messages open in one tap.", icon: "send" },
          { title: "Share", body: "A digital business card with premium templates, QR code, Save-to-contacts and tracked short links.", icon: "card" },
        ],
      },
      {
        type: "split",
        heading: "Principles Behind The Product",
        body: [
          "eCard lets you bring your own AI key, sends email from your own mailbox and keeps nothing until you have reviewed it. Those choices keep you in control of your data, your sender reputation and your costs.",
        ],
        points: [
          "Nothing is saved until you review it",
          "Bring your own AI key, encrypted with AES-256-GCM",
          "Works in any phone browser, no app to install",
          "Start free with 50 scans a month",
        ],
      },
      {
        type: "bullets",
        heading: "Who It Is For",
        intro: "eCard suits anyone whose pipeline starts with a handshake. Typical examples include:",
        items: [
          "Real-estate professionals turning site-visit cards into booked visits",
          "Teams working trade shows, expos and conferences",
          "Sales teams who meet prospects face to face",
          "Agencies, consultants and founders who network constantly",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Get In Touch",
        body: "For Enterprise plans, custom pricing or partnership questions, write to sales@bizzfly.com.",
      },
    ],
    faqs: [
      { q: "Is eCard an app?", a: "No download is needed. eCard works in any phone browser, and you can also scan cards through the Telegram bot." },
      { q: "Can I try eCard for free?", a: "Yes. The Free plan costs ₹0 and includes 50 scans a month, and new workspaces get a 14-day Professional trial with no card needed." },
      { q: "How do I contact the eCard team?", a: "For sales and Enterprise questions, email sales@bizzfly.com." },
    ],
    related: ["why-ecard", "how-it-works", "contact", "platform"],
    source: "verified",
  },
  {
    slug: "contact",
    category: "company",
    title: "Contact",
    seoTitle: "Contact eCard",
    description: "How to reach the eCard team: sales and Enterprise enquiries by email, account help through sign-in and password reset, and answers in the help centre.",
    h1: "Talk To The eCard Team",
    eyebrow: "Contact",
    intro: "Whether you are comparing plans, stuck signing in or planning a rollout for a large team, here is the quickest way to get an answer.",
    variant: "support",
    visual: "none",
    icon: "mail",
    sections: [
      {
        type: "cards",
        heading: "Choose The Right Channel",
        cards: [
          { title: "Sales & Enterprise", body: "Email sales@bizzfly.com for custom pricing, Enterprise plans or volume questions.", icon: "briefcase" },
          { title: "Sign-in Problems", body: "Use the forgot-password page at ecard.gg/forgot-password to reset your password.", icon: "key" },
          { title: "Common Questions", body: "The help centre and FAQ cover scanning, email sending, Telegram, billing and privacy.", icon: "help" },
        ],
      },
      {
        type: "steps",
        heading: "Before You Write To Us",
        intro: "A little context helps us reply faster. Include:",
        steps: [
          { title: "Your Workspace", body: "The email address you signed up with and the workspace name, if you have one." },
          { title: "Your Plan", body: "Free, Starter, Professional, Business or Enterprise, or whether you are on the 14-day trial." },
          { title: "What Happened", body: "What you expected, what you saw instead and roughly when it happened." },
          { title: "What You Need", body: "A quote, a fix, a feature question or help planning a team rollout." },
        ],
      },
      {
        type: "prose",
        heading: "Sales Enquiries",
        paragraphs: [
          "If your organisation needs unlimited users, unlimited storage and scans, white label and a custom domain with commercial terms that fit, the Enterprise plan is priced on request. Tell us roughly how many people will scan cards, how you plan to send email and which features matter most.",
          "For teams that simply want to start, the Free, Starter, Professional and Business plans can be chosen at sign-up without talking to anyone.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Fastest Answer",
        body: "Many questions about scanning, SMTP setup and the Telegram bot are already answered in the help centre, check there first.",
      },
    ],
    faqs: [
      { q: "What is the sales email address?", a: "sales@bizzfly.com." },
      { q: "I forgot my password. What should I do?", a: "Go to ecard.gg/forgot-password to reset it." },
    ],
    related: ["contact-sales", "help", "help/contact-support", "help/password-reset"],
    source: "verified",
  },
  {
    slug: "contact-sales",
    category: "company",
    title: "Contact Sales",
    seoTitle: "Contact eCard Sales For Enterprise Pricing",
    description: "Planning eCard for a large team? Contact sales for Enterprise pricing with unlimited users, storage and scans plus white label and a custom domain.",
    h1: "Plan An eCard Rollout With Our Sales Team",
    eyebrow: "Enterprise",
    intro: "Enterprise is eCard's custom-priced plan for large organisations. Email sales@bizzfly.com and we will work out the right fit.",
    variant: "reference",
    visual: "pricing",
    icon: "briefcase",
    sections: [
      {
        type: "table",
        heading: "Business Vs Enterprise",
        intro: "Both top plans share the same feature set; Enterprise adds custom commercial terms.",
        headers: ["", "Business", "Enterprise"],
        rows: [
          ["Price", "₹2,999 / month", "Custom, contact sales"],
          ["Users", "Unlimited", "Unlimited"],
          ["Storage", "Unlimited", "Unlimited"],
          ["Scans per month", "Unlimited", "Unlimited"],
          ["Webhooks", "Yes", "Yes"],
          ["White label & custom domain", "Yes", "Yes"],
        ],
      },
      {
        type: "bullets",
        heading: "Good Reasons To Talk To Sales",
        items: [
          "You are rolling eCard out across several branches or departments",
          "You need pricing approved through procurement",
          "You want to plan white-label branding and a custom domain",
          "You want to discuss how roles, 2FA and audit logs fit your policies",
        ],
      },
      {
        type: "steps",
        heading: "How The Conversation Usually Goes",
        steps: [
          { title: "Email Us", body: "Write to sales@bizzfly.com with your team size and goals." },
          { title: "Try It", body: "Start a 14-day Professional trial, no card needed, so your team can test real cards." },
          { title: "Agree Terms", body: "We discuss pricing and the plan that fits." },
          { title: "Roll Out", body: "Invite your team with the right roles: owner, admin, manager, member or scan-only guest." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "What To Include",
        body: "Expected number of users, typical monthly scan volume and the email provider you plan to send from help us respond with something useful.",
      },
    ],
    faqs: [
      { q: "How is Enterprise priced?", a: "Enterprise pricing is custom. Contact sales@bizzfly.com." },
      { q: "Can we trial before buying?", a: "Yes. New workspaces get a 14-day Professional trial with no card required." },
      { q: "Is white label included?", a: "White label and custom domain are included on Business and Enterprise." },
    ],
    related: ["pricing/enterprise", "pricing/business", "pricing/compare-plans", "features/team-security"],
    source: "verified",
  },
  {
    slug: "why-ecard",
    category: "company",
    title: "Why eCard",
    seoTitle: "Why Choose eCard For Visiting Cards",
    description: "Why teams pick eCard: AI scanning with your own key, review before save, 5-second intro emails from your mailbox and WhatsApp in three languages.",
    h1: "Why People Switch To eCard",
    eyebrow: "Why eCard",
    intro: "Plenty of tools can read text off a card. eCard is built for what happens next: remembering the meeting and following up before the moment passes.",
    variant: "feature",
    visual: "extract",
    icon: "sparkles",
    sections: [
      {
        type: "cards",
        heading: "What Sets It Apart",
        cards: [
          { title: "Your AI, Your Key", body: "Choose Claude, OpenAI, Gemini, DeepSeek or Grok, bring your own key and add a key pool with failover.", icon: "brain" },
          { title: "Review Before Save", body: "Each field gets a confidence score and nothing is saved until you review it.", icon: "eye" },
          { title: "Your Own Mailbox", body: "Intro emails send from your own SMTP after a 5-second preview you can edit or cancel.", icon: "mail" },
          { title: "WhatsApp, Locally", body: "AI writes messages in English, Hindi or Marathi and opens them in WhatsApp in one tap.", icon: "message" },
          { title: "Memory, Not Just Contacts", body: "Where you met, who introduced you, voice notes and a searchable AI summary.", icon: "clock" },
          { title: "No App To Install", body: "Works in any phone browser, plus a Telegram bot for snapping cards.", icon: "smartphone" },
        ],
      },
      {
        type: "table",
        heading: "eCard Compared With A Card Pile Or A Spreadsheet",
        headers: ["Task", "Paper or spreadsheet", "eCard"],
        rows: [
          ["Capture details", "Type by hand", "AI reads the card, you review"],
          ["Remember context", "Notes on the back, if any", "Meeting memory with voice notes"],
          ["Find someone later", "Scroll and hope", "Natural-language search"],
          ["Follow up", "Write each email manually", "AI draft, sent from your SMTP"],
        ],
      },
      {
        type: "prose",
        heading: "Honest About The Numbers",
        paragraphs: [
          "eCard includes a time-saved calculator, and it is labelled for what it is: estimates, not promises. How much time you save depends on how many cards you collect and how quickly you follow up today.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "See It For Yourself",
        body: "Start with 50 free scans a month, or try the sample scan with one of three personas: a Realtor, a Doctor or a Startup founder.",
      },
    ],
    faqs: [
      { q: "Do I need to pay for an AI subscription?", a: "eCard lets you bring your own key for supported AI providers. Check the pricing page for what each plan includes." },
      { q: "Will emails come from eCard's address?", a: "No. Intro emails send from your own SMTP, such as Gmail, Outlook or Zoho." },
    ],
    related: ["how-it-works", "platform/bring-your-own-ai", "platform/time-saved", "sample-scan"],
    source: "verified",
  },
  {
    slug: "how-it-works",
    category: "company",
    title: "How It Works",
    seoTitle: "How eCard Works: Scan, Review, Follow Up",
    description: "See how eCard works step by step: snap a visiting card, let AI read it, review the fields, then send an intro email or WhatsApp message in seconds.",
    h1: "From Visiting Card To Follow-up In Four Steps",
    eyebrow: "How It Works",
    intro: "eCard follows the natural rhythm of a meeting: you get a card, you capture it, you remember the context and you follow up.",
    variant: "guide",
    visual: "scan",
    icon: "zap",
    sections: [
      {
        type: "steps",
        heading: "The Four Steps",
        steps: [
          { title: "Snap The Card", body: "Use any phone browser, or send a photo to the eCard Telegram bot." },
          { title: "AI Reads It", body: "Your chosen model extracts the fields and gives each one a confidence score. Addresses are checked against Google Maps." },
          { title: "You Review", body: "Nothing is saved until you check the fields. Add where you met, who introduced you or a voice note." },
          { title: "Follow Up", body: "Preview the AI intro email, it sends after 5 seconds from your own SMTP, or open a WhatsApp message in English, Hindi or Marathi." },
        ],
      },
      {
        type: "split",
        heading: "After The Meeting",
        body: [
          "Contacts stay organised with tags and events, duplicate merge, blacklist and archive. You can search in plain language, for example \"Investors I met in Mumbai last month\".",
        ],
        points: ["Group cards from a trade show into an event", "See opens of your card, PDFs and WhatsApp links", "Sync to Google Contacts on Starter and above"],
      },
      {
        type: "prose",
        heading: "Why Speed Matters",
        paragraphs: [
          "As general guidance, a follow-up sent the same day is easier to connect with the conversation than one sent a week later. eCard is designed to shorten the gap between meeting someone and sending the first message.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Linking Telegram",
        body: "Link the bot with a one-time code from Settings → Telegram. After that, a photo sent to the bot saves the contact, with Open and Send buttons in the chat.",
      },
    ],
    faqs: [
      { q: "Can I edit an intro email before it goes?", a: "Yes. You preview the draft, and you can edit or cancel it before it sends after 5 seconds." },
      { q: "Does scanning save contacts automatically?", a: "Nothing is saved until you review it." },
      { q: "Which languages are supported for WhatsApp?", a: "English, Hindi and Marathi." },
    ],
    related: ["features/ai-card-scanning", "features/outreach", "features/telegram-bot", "product-tour"],
    source: "verified",
  },
  {
    slug: "product-tour",
    category: "company",
    title: "Product Tour",
    seoTitle: "eCard Product Tour",
    description: "Take a guided tour of eCard: AI scanning, contacts and tags, meeting memory, digital business card, link tracking, events, Telegram and team admin.",
    h1: "A Tour Of Everything Inside eCard",
    eyebrow: "Product Tour",
    intro: "This tour walks through the main areas of eCard in the order most people use them, from the first scan to team administration.",
    variant: "feature",
    visual: "dashboard",
    icon: "eye",
    sections: [
      {
        type: "cards",
        heading: "Stop 1-4: Capture And Organise",
        cards: [
          { title: "AI Scanning", body: "Pick your model, bring your own key, review each field with its confidence score.", icon: "scan" },
          { title: "Contacts", body: "Tags, events, bulk import and export, duplicate merge, blacklist and archive.", icon: "users" },
          { title: "Search", body: "Ask in plain language, like \"Investors I met in Mumbai last month\".", icon: "search" },
          { title: "Meeting Memory", body: "Where you met, who introduced you, voice notes and an AI summary.", icon: "mic" },
        ],
      },
      {
        type: "cards",
        heading: "Stop 5-8: Reach Out And Measure",
        cards: [
          { title: "Intro Emails", body: "Preview the AI draft; it sends after 5 seconds from your own SMTP.", icon: "mail" },
          { title: "WhatsApp", body: "Messages in English, Hindi or Marathi, opened in one tap.", icon: "message" },
          { title: "Digital Card", body: "Premium templates, QR code, Save-to-contacts and short links like /c/rahul.", icon: "qr" },
          { title: "Link Tracking", body: "Opens of your card, PDFs and WhatsApp links, with bots filtered out of click counts.", icon: "chart" },
        ],
      },
      {
        type: "bullets",
        heading: "Stop 9: Team And Admin",
        items: [
          "Roles: owner, admin, manager, member and scan-only guest",
          "2FA with authenticator codes, recovery codes, trusted devices and login alerts",
          "Workspace audit log",
          "White label with logo, colours and custom domain (Business and Enterprise)",
          "Webhooks and API with signed events for each new contact (Professional and above for webhooks)",
          "Compliance checklist covering consent, export and deletion",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Screens Shown On This Site",
        body: "Visuals on this site are illustrations with sample data, not screenshots of real accounts.",
      },
    ],
    faqs: [
      { q: "Is every feature on every plan?", a: "The base set (scanning, contacts, import/export, email, WhatsApp, digital card and Telegram) is on every plan. Some extras, like webhooks and white label, depend on the plan." },
    ],
    related: ["platform/all-features", "how-it-works", "product/feature-availability", "pricing"],
    source: "verified",
  },
  {
    slug: "sample-scan",
    category: "company",
    title: "Try A Sample Scan",
    seoTitle: "Try A Sample Visiting-Card Scan",
    description: "See what eCard's AI extracts from a visiting card using sample personas (a Realtor, a Doctor and a Startup founder) before you scan your own cards.",
    h1: "See A Scan Before You Sign Up",
    eyebrow: "Sample Scan",
    intro: "eCard's sample scan demo uses three fictional personas so you can see how a card turns into a reviewed contact.",
    variant: "guide",
    visual: "extract",
    icon: "scan",
    sections: [
      {
        type: "cards",
        heading: "The Three Sample Personas",
        cards: [
          { title: "Realtor", body: "Sample: a property agent's card, the kind collected at site visits.", icon: "building" },
          { title: "Doctor", body: "Sample: a clinic card with qualifications and clinic address.", icon: "briefcase" },
          { title: "Startup Founder", body: "Sample: a founder's card with company name, title and links.", icon: "sparkles" },
        ],
      },
      {
        type: "table",
        heading: "What A Reviewed Result Can Look Like",
        intro: "Sample data only, fictional person.",
        headers: ["Field", "Sample value", "What you do"],
        rows: [
          ["Name", "Priya Shah", "Confirm spelling"],
          ["Title", "Realtor", "Confirm"],
          ["Phone", "+91 90000 00000", "Check low-confidence digits"],
          ["Address", "Sample address, Pune", "Checked against Google Maps"],
        ],
      },
      {
        type: "prose",
        heading: "Why Review Matters",
        paragraphs: [
          "Every field gets a confidence score so you know where to look. Nothing is saved until you review it, which keeps your contact list clean from the start.",
          "As a general tip, glossy finishes, embossed text and unusual fonts are where any card reader is most likely to need a human check.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ready For Real Cards?",
        body: "The Free plan includes 50 scans a month with no card required.",
      },
    ],
    faqs: [
      { q: "Are the sample personas real people?", a: "No. They are fictional samples used for the demo." },
      { q: "How many free scans do I get?", a: "The Free plan includes 50 scans a month." },
    ],
    related: ["product/sample-personas", "features/ai-card-scanning/sample-scan-demo", "features/ai-card-scanning/confidence-scores", "get-started"],
    source: "mixed",
  },
  {
    slug: "get-started",
    category: "company",
    title: "Get Started",
    seoTitle: "Get Started With eCard In Minutes",
    description: "Start using eCard: sign up free, scan your first card, set up your own SMTP for intro emails, link Telegram and create your digital business card.",
    h1: "Your First Day With eCard",
    eyebrow: "Get Started",
    intro: "You can be scanning cards within minutes. This checklist gets the essentials set up so follow-ups go out from your own address.",
    variant: "guide",
    visual: "card",
    icon: "check",
    sections: [
      {
        type: "steps",
        heading: "Setup Checklist",
        steps: [
          { title: "Sign Up", body: "Create an account at ecard.gg/sign-up. New workspaces get a 14-day Professional trial, no card needed." },
          { title: "Scan Your First Card", body: "Use your phone browser, review the fields and save." },
          { title: "Connect Your Mailbox", body: "Add SMTP details for Gmail, Outlook, Zoho or another provider so intros send from your own address." },
          { title: "Link Telegram", body: "Get a one-time code from Settings → Telegram and send it to the bot." },
          { title: "Create Your Digital Card", body: "Choose a template and share it by QR code or short link." },
          { title: "Turn On 2FA", body: "Protect your account with authenticator codes and save your recovery codes." },
        ],
      },
      {
        type: "bullets",
        heading: "What The Free Plan Includes",
        items: ["5 users", "1 GB storage", "50 scans a month", "AI scanning, contacts, import/export, email, WhatsApp, digital card and Telegram bot"],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Invite Your Team Later",
        body: "Get comfortable on your own first, then invite colleagues with roles that match what they need.",
      },
      {
        type: "prose",
        heading: "When To Upgrade",
        paragraphs: [
          "Starter (₹299/month) adds Google Contacts sync and Calendar & Meet booking. Professional (₹999/month) adds webhooks. Business (₹2,999/month) adds white label and a custom domain.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need a credit card to start?", a: "No. The Free plan and the 14-day Professional trial need no card." },
      { q: "Do I need to install an app?", a: "No. eCard works in any phone browser." },
    ],
    related: ["resources/guides/getting-started", "resources/guides/setting-up-smtp", "resources/guides/connecting-telegram", "pricing"],
    source: "verified",
  },
  {
    slug: "site-index",
    category: "company",
    title: "Site Index",
    seoTitle: "eCard Site Index",
    description: "Browse every section of the eCard website: platform, features, integrations, use cases, pricing, mobile, guides, help centre and legal pages.",
    h1: "Everything On This Site, In One Place",
    eyebrow: "Site Index",
    intro: "Use this index to jump to any part of the eCard website. Pages are grouped by topic, from product features and use cases to pricing, help and legal.",
    variant: "reference",
    visual: "none",
    icon: "layers",
    sections: [
      {
        type: "table",
        heading: "Main Sections",
        headers: ["Section", "What you'll find"],
        rows: [
          ["Platform", "How the visiting-card CRM fits together"],
          ["Features", "Scanning, contacts, digital cards, outreach, Telegram, meeting memory, events, analytics, team & security"],
          ["Integrations", "Tools eCard names as working with it"],
          ["Use cases", "How different roles can use eCard"],
          ["Pricing", "Plans in INR, trial, billing and FAQ"],
          ["Mobile", "Using eCard from your phone browser"],
          ["Resources", "Guides, playbooks and a glossary"],
          ["Help", "FAQ, account, billing, scanning and privacy answers"],
          ["Legal", "Draft policies and terms"],
        ],
      },
      {
        type: "bullets",
        heading: "Popular Starting Points",
        items: ["How it works", "AI card scanning", "Pricing and plan comparison", "Getting-started guide", "Help centre FAQ"],
      },
      {
        type: "prose",
        heading: "Can't Find Something?",
        paragraphs: ["Check the help centre, or email sales@bizzfly.com for sales questions."],
      },
      {
        type: "callout",
        tone: "info",
        title: "Navigation Tip",
        body: "Every page ends with related links, so you can move between connected topics without coming back here.",
      },
    ],
    related: ["platform", "pricing", "resources", "help"],
    source: "verified",
  },
];

const extra: Record<string, { sections: Section[]; faqs?: FAQ[] }> = {
  about: {
    sections: [
      {
        type: "table",
        heading: "eCard By The Numbers",
        intro: "The figures eCard's homepage highlights, and what each one refers to.",
        headers: ["Figure", "What it means"],
        rows: [
          ["7 AI models", "The choice of model that reads your cards"],
          ["3 WhatsApp languages", "English, Hindi and Marathi for AI-written messages"],
          ["5 seconds", "The preview window before an intro email sends from your SMTP"],
          ["14 days", "The Professional trial for new workspaces, with no card needed"],
          ["256-bit", "AES-256-GCM encryption for API keys and SMTP passwords"],
          ["₹0", "The cost of the Free plan"],
        ],
      },
      {
        type: "bullets",
        heading: "What eCard Deliberately Leaves To You",
        intro: "Several choices stay with you rather than with the platform:",
        items: [
          "Which AI provider reads your cards, and whose key pays for it",
          "Which mailbox your intro emails come from",
          "Whether a drafted email goes out, gets edited or gets cancelled",
          "Which contacts are archived, blacklisted or merged",
        ],
      },
    ],
    faqs: [
      { q: "Which AI models can read my cards?", a: "Claude, OpenAI, Gemini, DeepSeek and Grok, and the FAQ adds Azure and custom endpoints." },
    ],
  },
  contact: {
    sections: [
      {
        type: "table",
        heading: "Which Question Goes Where",
        intro: "Use this to pick a route before you write.",
        headers: ["Your question", "Best route"],
        rows: [
          ["Price for a large team", "sales@bizzfly.com"],
          ["Can't remember my password", "ecard.gg/forgot-password"],
          ["Lost my 2FA phone", "Sign in with a saved recovery code"],
          ["Telegram bot not linked", "Get a new one-time code from Settings → Telegram"],
          ["Which plan has webhooks", "Pricing pages: Professional and above"],
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Sample Message",
        body: "Sample: \"Hi, I'm Priya Shah from a fictional agency. Our workspace is on the 14-day trial and we'd like to understand Enterprise pricing for about 40 people who attend trade shows. Could you share next steps?\"",
      },
      {
        type: "bullets",
        heading: "Common Mistakes That Slow Replies",
        items: [
          "Writing from an address different from the one you signed up with",
          "Leaving out which plan you are on",
          "Sending passwords, API keys or SMTP passwords by email, never share these",
          "Describing a problem without saying what you expected to happen",
        ],
      },
    ],
    faqs: [
      { q: "Should I include my API key when asking for help?", a: "No. Never send API keys or passwords by email. eCard encrypts them inside your workspace." },
    ],
  },
  "contact-sales": {
    sections: [
      {
        type: "bullets",
        heading: "Questions To Answer Internally First",
        intro: "Sales conversations go faster when your team has agreed on these:",
        items: [
          "Roughly how many people will scan cards each month, and how many only scan",
          "Which mailbox provider intro emails should send from",
          "Which AI provider your organisation is allowed to use, and whose key pays",
          "Whether you need your own logo, colours and custom domain",
          "Which systems should receive new contacts through webhooks",
        ],
      },
      {
        type: "table",
        heading: "Sample Sizing Worksheet",
        intro: "Sample figures for a fictional company, replace with your own.",
        headers: ["Item", "Sample answer"],
        rows: [
          ["Sales reps", "60"],
          ["Booth staff at expos (scan-only guests)", "25"],
          ["Shows per year", "8"],
          ["Cards per show", "400"],
          ["Mailbox provider", "Outlook"],
        ],
      },
      {
        type: "prose",
        heading: "When Business Is Enough",
        paragraphs: [
          "If the ₹2,999 monthly Business plan already covers your needs, you can choose it at sign-up without a sales call. Enterprise has the same listed features; the conversation is about commercial terms rather than extra functionality.",
        ],
      },
    ],
    faqs: [
      { q: "Does Enterprise have features Business doesn't?", a: "The pricing page lists the same features for both. Enterprise is custom-priced through sales." },
    ],
  },
  "why-ecard": {
    sections: [
      {
        type: "split",
        heading: "When eCard May Not Be The Right Fit",
        body: [
          "Being honest about fit saves everyone time. eCard focuses on people you meet in person and the follow-up that comes after.",
        ],
        points: [
          "You rarely receive visiting cards",
          "You need a native mobile app, eCard is browser-only",
          "You need published API reference docs today, the site doesn't publish them",
        ],
      },
      {
        type: "steps",
        heading: "A Fair Way To Evaluate eCard",
        steps: [
          { title: "Collect Ten Real Cards", body: "Include a few difficult ones: glossy, bilingual or crowded layouts." },
          { title: "Scan And Review", body: "Note how many fields needed correcting and which confidence scores were low." },
          { title: "Send Real Follow-ups", body: "Connect your SMTP and send intros to contacts you genuinely want to reach." },
          { title: "Check A Week Later", body: "Use search and tracking to see whether you could find people and see opens." },
        ],
      },
    ],
    faqs: [
      { q: "Is there a native mobile app?", a: "No. eCard works in any phone browser, and you can also scan via the Telegram bot." },
      { q: "Can I try it before paying?", a: "Yes. The Free plan includes 50 scans a month, and new workspaces get a 14-day Professional trial." },
    ],
  },
  "how-it-works": {
    sections: [
      {
        type: "table",
        heading: "Sample: One Card, Start To Finish",
        intro: "Sample walkthrough with a fictional contact.",
        headers: ["Moment", "What happens"],
        rows: [
          ["10:05", "You receive a card from Sample: Arjun Rao, Founder, at a meetup"],
          ["10:06", "You photograph it in your phone browser"],
          ["10:06", "AI fills the fields; the phone number shows a low confidence score"],
          ["10:07", "You fix one digit, add \"met at meetup, interested in pilot\" and save"],
          ["10:08", "You preview the intro email; it sends after 5 seconds from your mailbox"],
        ],
      },
      {
        type: "bullets",
        heading: "Pitfalls To Avoid",
        items: [
          "Saving without checking low-confidence fields",
          "Skipping meeting context. It is what makes the AI draft relevant",
          "Sending from a mailbox you haven't tested",
          "Leaving cards from an event untagged, which makes event follow-ups harder",
        ],
      },
    ],
    faqs: [
      { q: "Can I scan through Telegram instead of the browser?", a: "Yes. After linking with a one-time code from Settings → Telegram, sending a photo to the bot saves the contact." },
    ],
  },
  "product-tour": {
    sections: [
      {
        type: "table",
        heading: "Pick Your Route Through The Tour",
        headers: ["If you are…", "Start with", "Then look at"],
        rows: [
          ["A solo professional", "AI scanning", "Intro emails and digital card"],
          ["Running a booth at a show", "Events & expos", "Scan-only guest role and Telegram bot"],
          ["A team lead", "Roles and audit log", "Shared contacts and webhooks"],
          ["Selling in regional markets", "WhatsApp messages", "Link tracking"],
        ],
      },
      {
        type: "prose",
        heading: "Where Data Flows Next",
        paragraphs: [
          "Contacts can leave eCard in several ways: CSV export on every plan, Google Contacts sync from Starter, and signed webhook events for each new contact from Professional. Choose the route that matches where your team already works.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Tour With Your Own Data",
        body: "The 14-day Professional trial gives you webhooks and Google integrations, so you can walk through every stop with real cards.",
      },
    ],
    faqs: [
      { q: "Can contacts be sent to another system?", a: "Webhooks send signed events for each new contact on Professional and above, and CSV export is on every plan." },
      { q: "Do visuals on this site show real customers?", a: "No. Illustrations use sample data only." },
    ],
  },
  "sample-scan": {
    sections: [
      {
        type: "steps",
        heading: "How To Read The Demo Above",
        steps: [
          { title: "Pick A Persona", body: "Choose the Realtor, Doctor or Startup founder card." },
          { title: "Watch The Fields", body: "Look at which fields come back with lower confidence." },
          { title: "Think About Review", body: "Ask yourself which fields you would always double-check before saving." },
        ],
      },
      {
        type: "bullets",
        heading: "Checklist For Your First Real Scan",
        items: [
          "Lay the card flat on a plain, contrasting surface",
          "Use even light and avoid glare on glossy finishes",
          "Fill the frame with the card",
          "Scan the back too if it carries extra details",
          "Check every low-confidence field before saving",
        ],
      },
      {
        type: "prose",
        heading: "From Demo To Your Own Cards",
        paragraphs: [
          "The demo shows the review step, but your own cards are the real test. Cards with two languages, logos overlapping text or very small print are worth trying early so you know where review takes longer.",
        ],
      },
    ],
    faqs: [
      { q: "Is anything saved during the demo?", a: "The demo uses fictional personas. In your own workspace, nothing is saved until you review it." },
    ],
  },
  "get-started": {
    sections: [
      {
        type: "table",
        heading: "Sample First Week",
        intro: "Sample plan, adjust to your schedule.",
        headers: ["Day", "Goal"],
        rows: [
          ["Day 1", "Sign up, enable 2FA, scan five cards"],
          ["Day 2", "Connect SMTP and send one test intro to yourself"],
          ["Day 3", "Link Telegram and try scanning from a chat"],
          ["Day 4", "Create your digital card and share the QR"],
          ["Day 5", "Import an existing CSV and merge duplicates"],
        ],
      },
      {
        type: "bullets",
        heading: "Common Setup Mistakes",
        items: [
          "Using your normal password where the provider expects an app password for SMTP",
          "Not saving 2FA recovery codes",
          "Inviting the whole team before deciding on roles",
          "Importing a messy CSV without checking columns first",
        ],
      },
    ],
    faqs: [
      { q: "Which email providers work?", a: "Gmail, Outlook, Zoho, SendGrid, Brevo, Mailgun, Amazon SES, Resend or any SMTP host." },
      { q: "What happens when the trial ends?", a: "eCard's site does not detail post-trial behaviour; check in-app. You can cancel any time and keep access until the end of a paid period." },
    ],
  },
  "site-index": {
    sections: [
      {
        type: "table",
        heading: "Find Pages By Task",
        headers: ["I want to…", "Go to"],
        rows: [
          ["Scan my first card", "Get Started, then AI Card Scanning"],
          ["Send intros from my own email", "Email & WhatsApp, then the SMTP setup guide"],
          ["Scan from Telegram", "Telegram Bot and the connecting-Telegram guide"],
          ["Compare plans", "Pricing and Compare Plans"],
          ["Secure my team", "Team & Security and the 2FA guide"],
          ["Connect other tools", "Integrations and Webhooks"],
          ["Prepare for a trade show", "Events & Expos and the trade-show playbook"],
          ["Fix a sign-in problem", "Help: Account & Sign-In and Password Reset"],
        ],
      },
      {
        type: "cards",
        heading: "Feature Areas",
        intro: "Each feature area has an overview page plus detailed sub-pages.",
        cards: [
          { title: "Capture", body: "AI Card Scanning and the Telegram Bot.", icon: "scan" },
          { title: "Organise", body: "Contact CRM, Meeting Memory and Events & Expos.", icon: "users" },
          { title: "Engage", body: "Email & WhatsApp, Digital Business Cards and Analytics & Tracking.", icon: "send" },
          { title: "Administer", body: "Team & Security, plus Pricing and Help.", icon: "settings" },
        ],
      },
      {
        type: "bullets",
        heading: "Reference Pages",
        items: ["Glossary of networking and CRM terms", "Feature availability by plan", "Security at a glance", "eCard at a glance"],
      },
    ],
    faqs: [
      { q: "Where are the legal pages?", a: "Under Legal. They are drafts pending review by eCard." },
      { q: "Is there API documentation?", a: "The site does not publish API reference documentation." },
      { q: "How do I reach sales?", a: "Email sales@bizzfly.com." },
    ],
  },
};

const closing: Record<string, Section[]> = {
  contact: [
    {
      type: "prose",
      heading: "What Happens After You Write",
      paragraphs: [
        "A clear first message usually means fewer back-and-forth emails. If your question is about a specific contact, scan or email that misbehaved, describe it in words rather than forwarding personal details of the person on the card. That keeps their data where it belongs.",
        "If you are evaluating eCard for a team, it often helps to start the 14-day Professional trial before writing, so your questions come from real use rather than guesses.",
      ],
    },
  ],
  "contact-sales": [
    {
      type: "steps",
      heading: "Running A Pilot During The Trial",
      steps: [
        { title: "Choose A Small Group", body: "Pick a handful of people who meet prospects often, plus one admin." },
        { title: "Set Roles", body: "Make the admin an admin, reps members, and temporary helpers scan-only guests." },
        { title: "Connect Email And AI", body: "Use the mailbox provider and AI key your organisation would use in production." },
        { title: "Run One Real Event", body: "Group cards from one meeting or show into an event and follow up with everyone." },
        { title: "Bring Results To Sales", body: "Share what worked and what you still need when you email sales@bizzfly.com." },
      ],
    },
  ],
  "why-ecard": [
    {
      type: "callout",
      tone: "info",
      title: "Clean Data From Day One",
      body: "Duplicate merge, blacklist, archive, CSV import and Google Contacts sync (Starter and above) help keep your list usable as it grows, instead of turning into another cluttered spreadsheet.",
    },
  ],
  "how-it-works": [
    {
      type: "prose",
      heading: "What Happens Behind The Scenes",
      paragraphs: [
        "When you scan, the photo goes to the AI provider you selected, using your key if you brought one. If you added several keys to a key pool, eCard can fail over to another key. The address field is checked against Google Maps, and the result comes back to you for review, nothing is saved until you confirm it.",
      ],
    },
  ],
  "product-tour": [
    {
      type: "steps",
      heading: "A 15-minute Self-guided Tour",
      intro: "Sample agenda for exploring eCard on your own.",
      steps: [
        { title: "Minutes 0-3", body: "Scan two cards and compare their confidence scores." },
        { title: "Minutes 3-6", body: "Add a voice note and where-you-met to one contact." },
        { title: "Minutes 6-9", body: "Try a natural-language search for that contact." },
        { title: "Minutes 9-12", body: "Preview an intro email and cancel it within 5 seconds." },
        { title: "Minutes 12-15", body: "Open your digital card on another phone and check tracking." },
      ],
    },
  ],
  "sample-scan": [
    {
      type: "table",
      heading: "What To Look For In Each Sample Card",
      intro: "Sample personas only, fictional data.",
      headers: ["Persona", "Tricky part", "Why it matters"],
      rows: [
        ["Realtor", "Several phone numbers and an office address", "You want the right mobile for WhatsApp follow-ups"],
        ["Doctor", "Qualifications after the name and clinic timings", "Name and title should stay separate from credentials"],
        ["Startup founder", "Sparse text, website and handles", "Links matter more than a postal address"],
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Confidence Is A Guide, Not A Verdict",
      body: "A high score usually means the field was read clearly, but it is still worth a glance. A low score tells you exactly where to look first, which is what keeps review fast.",
    },
  ],
  "get-started": [
    {
      type: "split",
      heading: "Choosing Your AI Model On Day One",
      body: [
        "eCard lets you choose Claude, OpenAI, Gemini, DeepSeek or Grok, and the FAQ adds Azure and custom endpoints. If your organisation already uses one provider, starting with that one keeps approvals simple. You can bring your own key, and keys are encrypted with AES-256-GCM.",
      ],
      points: [
        "Try a few of your own cards with your first choice",
        "Note fields you correct often",
        "Add a second key to the pool for failover if you scan a lot",
      ],
    },
  ],
  "site-index": [
    {
      type: "prose",
      heading: "How This Site Is Organised",
      paragraphs: [
        "Platform pages explain how eCard fits together. Feature pages go deep on one capability each, such as scanning, contacts, the digital card or the Telegram bot. Integration pages describe the role each named tool plays, and say plainly where eCard's site gives no further detail.",
        "Use-case pages show how different roles might use eCard; they describe possibilities, not existing customers. Resources hold practical guides and playbooks, the help centre answers common questions, and legal pages are drafts pending review.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "New To eCard?",
      body: "Read How It Works first, then the getting-started guide. Together they cover signing up, your first scan, connecting your mailbox and linking Telegram.",
    },
  ],
};

const tips: Record<string, Section> = {
  "contact-sales": { type: "callout", tone: "tip", title: "Billing Details", body: "Prices are in INR with GST where applicable, and local currency is shown at checkout for supported countries." },
  "product-tour": { type: "callout", tone: "info", title: "Booking Meetings", body: "Google Calendar & Meet booking is available from Starter, so a follow-up can turn straight into a scheduled call." },
  "sample-scan": { type: "callout", tone: "tip", title: "Addresses Get A Second Check", body: "Scanned addresses are checked against Google Maps, which helps catch misread street names or pin codes before you save the contact." },
  "site-index": { type: "callout", tone: "info", title: "Key Links", body: "Sign up at ecard.gg/sign-up, sign in at ecard.gg/sign-in, and reset a forgotten password at ecard.gg/forgot-password. Sales questions go to sales@bizzfly.com, and Enterprise pricing is arranged there too." },
};

const moreFaqs: Record<string, FAQ[]> = {
  contact: [
    { q: "Can I try eCard before contacting anyone?", a: "Yes. Sign up at ecard.gg/sign-up; the Free plan and the 14-day Professional trial need no card." },
  ],
  "contact-sales": [
    { q: "Which payment methods are accepted?", a: "In India: UPI, cards, net banking, wallets or EMI. International customers pay by card." },
  ],
  "why-ecard": [
    { q: "Does eCard promise a specific time saving?", a: "No. The time-saved calculator is labelled \"Estimates, not promises\"; results depend on your volume and habits." },
  ],
  "how-it-works": [
    { q: "What if my AI key hits a limit mid-event?", a: "eCard supports a key pool with failover, so adding more than one key gives scanning a fallback." },
  ],
  "product-tour": [
    { q: "Which roles can I give teammates?", a: "Owner, admin, manager, member and scan-only guest. Choose the narrowest role that lets each person do their job, and review roles when someone changes teams or leaves." },
  ],
  "sample-scan": [
    { q: "Why does one field show lower confidence than others?", a: "Each field gets its own confidence score. As general guidance, small print, glare, decorative fonts and text over logos are common reasons a field reads less clearly." },
    { q: "Can I scan the back of a card?", a: "As a general tip, many cards carry extra details on the back, such as a second address or language; scan it too and review those fields as well." },
  ],
  "get-started": [
    { q: "How do I link the Telegram bot?", a: "Open Settings → Telegram, copy the one-time code and send it to the eCard bot. After that, sending a card photo saves the contact with Open and Send buttons in the chat." },
    { q: "Should I enable 2FA straight away?", a: "It is good practice. eCard supports authenticator codes, recovery codes, trusted devices and login alerts; save your recovery codes somewhere safe." },
  ],
  "site-index": [
    { q: "Do use-case pages mean eCard has customers in those industries?", a: "No. Use-case pages describe how a role might use eCard; they do not claim existing customers." },
    { q: "Where do I start if I'm brand new?", a: "Read How It Works, then the getting-started guide, then scan your first card on the Free plan." },
  ],
};

export const pages: PageDef[] = base.map((p) => ({
  ...p,
  sections: [...p.sections, ...(extra[p.slug]?.sections ?? []), ...(closing[p.slug] ?? []), ...(tips[p.slug] ? [tips[p.slug]] : [])],
  faqs: p.faqs || extra[p.slug]?.faqs ? [...(p.faqs ?? []), ...(extra[p.slug]?.faqs ?? []), ...(moreFaqs[p.slug] ?? [])] : undefined,
}));
