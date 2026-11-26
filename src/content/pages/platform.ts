import type { PageDef, Section, FAQ } from "../types";

const base: PageDef[] = [
  {
    slug: "platform",
    category: "platform",
    title: "Platform Overview",
    seoTitle: "eCard Platform Overview",
    description: "An overview of the eCard platform: AI card scanning, contact CRM, meeting memory, outreach, digital cards, analytics and team security in one workspace.",
    h1: "One workspace for every card you collect",
    eyebrow: "Platform",
    intro: "eCard connects capture, memory and follow-up. Each part feeds the next, so a card scanned at a meeting becomes a contact you can find and message later.",
    variant: "feature",
    visual: "dashboard",
    icon: "layers",
    sections: [
      {
        type: "cards",
        heading: "The building blocks",
        cards: [
          { title: "Capture", body: "AI scanning with your chosen model, plus the Telegram bot.", icon: "scan" },
          { title: "Organise", body: "Contacts with tags, events, duplicate merge, blacklist, archive and CSV import.", icon: "users" },
          { title: "Remember", body: "Meeting memory with voice notes and a searchable AI summary.", icon: "brain" },
          { title: "Engage", body: "Intro emails from your own SMTP and WhatsApp in three languages.", icon: "send" },
          { title: "Share", body: "Digital business card with QR and tracked short links.", icon: "card" },
          { title: "Govern", body: "Roles, 2FA, audit logs, encryption and a compliance checklist.", icon: "shield" },
        ],
      },
      {
        type: "prose",
        heading: "How the pieces connect",
        paragraphs: [
          "A scan creates a reviewed contact. Meeting memory attaches context to that contact. Outreach uses that context to draft a relevant message. Link tracking shows whether your card, PDFs or WhatsApp links were opened. Search ties it together so you can find people by what you remember about them.",
        ],
      },
      {
        type: "bullets",
        heading: "Platform facts",
        items: ["7 AI models", "3 WhatsApp languages", "5 seconds to auto-send an intro", "14-day trial", "256-bit key encryption", "₹0 to start"],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Explore further",
        body: "The All Features page lists every capability, and Feature Availability by Plan shows which plan includes what.",
      },
    ],
    faqs: [
      { q: "Is eCard a full CRM?", a: "eCard is a visiting-card CRM focused on capturing, remembering and following up with people you meet. Webhooks and API let you pass new contacts to other systems." },
      { q: "Does it work offline as an app?", a: "eCard is browser-based. The site says it works in any phone browser with no app to install." },
    ],
    related: ["platform/all-features", "platform/ai-visiting-card-crm", "how-it-works", "product/feature-availability"],
    source: "verified",
  },
  {
    slug: "platform/ai-visiting-card-crm",
    category: "platform",
    title: "AI Visiting-Card CRM",
    seoTitle: "What Is an AI Visiting-Card CRM?",
    description: "What an AI visiting-card CRM is, how it differs from a generic CRM or card scanner app, and how eCard applies the idea to scanning and follow-up.",
    h1: "The CRM that starts with a visiting card",
    eyebrow: "Category",
    intro: "A generic CRM assumes contacts arrive through forms and inboxes. A visiting-card CRM starts where many business relationships actually begin: a handshake and a card.",
    variant: "feature",
    visual: "extract",
    icon: "brain",
    sections: [
      {
        type: "split",
        heading: "Defining the category",
        body: [
          "An AI visiting-card CRM combines three jobs: reading cards accurately, keeping the context of each meeting, and making the follow-up easy. A plain scanner app does only the first. A traditional CRM does the second and third, but expects someone to type the card in.",
        ],
        points: ["Reads cards with AI", "Stores meeting context", "Drafts and sends follow-ups", "Keeps data clean over time"],
      },
      {
        type: "table",
        heading: "How the approaches compare",
        headers: ["", "Scanner app", "Generic CRM", "eCard"],
        rows: [
          ["Reads cards", "Yes", "Usually add-on", "Yes, model of your choice"],
          ["Meeting memory", "Rarely", "Notes field", "Where met, introductions, voice notes, AI summary"],
          ["Follow-up", "Export only", "Yes", "Intro email and WhatsApp"],
          ["Setup", "App install", "Configuration project", "Phone browser"],
        ],
      },
      {
        type: "prose",
        heading: "Where AI helps — and where you stay in charge",
        paragraphs: [
          "AI reads the card and drafts messages, but eCard keeps you in the loop: each field has a confidence score, nothing is saved until you review it, and intro emails can be edited or cancelled during the 5-second preview.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Choose your model",
        body: "eCard supports Claude, OpenAI, Gemini, DeepSeek and Grok, and the FAQ adds Azure and custom endpoints.",
      },
    ],
    faqs: [
      { q: "Can eCard replace my existing CRM?", a: "It depends on your needs. eCard focuses on card capture, memory and follow-up; webhooks (Professional and above) and the API can send new contacts onward." },
      { q: "Does the AI save contacts without my approval?", a: "No. Nothing is saved until you review it." },
    ],
    related: ["platform", "features/contact-management/crm-vs-spreadsheet", "platform/paper-to-digital", "features/ai-card-scanning"],
    source: "mixed",
  },
  {
    slug: "platform/paper-to-digital",
    category: "platform",
    title: "Paper to Digital",
    seoTitle: "Turn Paper Visiting Cards into Digital Contacts",
    description: "Move from stacks of paper visiting cards to a searchable digital contact list with eCard: scan backlogs, review fields, tag by event and follow up.",
    h1: "From a drawer of cards to a searchable network",
    eyebrow: "Paper to digital",
    intro: "Most professionals have a backlog of cards they meant to follow up on. eCard helps you clear it and stop it building up again.",
    variant: "guide",
    visual: "scan",
    icon: "upload",
    sections: [
      {
        type: "steps",
        heading: "Clearing a card backlog",
        steps: [
          { title: "Sort by event", body: "Group the physical cards by where you got them — a show, a city, a client visit." },
          { title: "Create events", body: "Set up an event in eCard for each group so contacts are tagged together." },
          { title: "Scan in batches", body: "Scan a batch, review the fields, and move on. Check low-confidence fields carefully." },
          { title: "Merge duplicates", body: "Use duplicate merge for people whose cards you collected twice." },
          { title: "Reconnect", body: "For recent contacts, send a short note; for old ones, decide whether a follow-up still makes sense." },
        ],
      },
      {
        type: "bullets",
        heading: "Already have a spreadsheet?",
        items: ["Use CSV import to bring existing contacts in", "Use Google Contacts sync on Starter and above", "Export to CSV whenever you need a copy"],
      },
      {
        type: "prose",
        heading: "Keeping it digital going forward",
        paragraphs: [
          "The habit that matters is scanning on the day you receive a card. With the Telegram bot, a photo is enough; with the browser, it takes a moment. Once that becomes routine, the drawer stays empty.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Mind your scan limit",
        body: "Free includes 50 scans a month, Starter 1,000, Professional 5,000 and Business unlimited. Large backlogs may suit a paid plan or the 14-day trial.",
      },
    ],
    faqs: [
      { q: "Can I scan old, worn cards?", a: "Usually yes, but faded or damaged cards may give lower confidence scores, so review those fields carefully." },
      { q: "Can I import contacts I already have?", a: "Yes, through CSV import, and Google Contacts sync is available on Starter and above." },
    ],
    related: ["features/contact-management/migrating-from-spreadsheets", "features/ai-card-scanning/scanning-at-volume", "features/contact-management/csv-import", "platform/time-saved"],
    source: "mixed",
  },
  {
    slug: "platform/workspace",
    category: "platform",
    title: "Workspaces",
    seoTitle: "eCard Workspaces for Individuals and Teams",
    description: "How eCard workspaces hold your contacts, team members, roles, settings and audit log, and how plan limits on users, storage and scans apply to them.",
    h1: "Workspaces: where your team and contacts live",
    eyebrow: "Workspaces",
    intro: "Everything in eCard belongs to a workspace — contacts, team members, settings and the audit log. Your plan's limits apply at the workspace level.",
    variant: "reference",
    visual: "team",
    icon: "building",
    sections: [
      {
        type: "table",
        heading: "Workspace limits by plan",
        headers: ["Plan", "Users", "Storage", "Scans / month"],
        rows: [
          ["Free", "5", "1 GB", "50"],
          ["Starter", "20", "25 GB", "1,000"],
          ["Professional", "100", "250 GB", "5,000"],
          ["Business", "Unlimited", "Unlimited", "Unlimited"],
          ["Enterprise", "Unlimited", "Unlimited", "Unlimited"],
        ],
      },
      {
        type: "cards",
        heading: "What a workspace holds",
        cards: [
          { title: "Members & roles", body: "Owner, admin, manager, member and scan-only guest.", icon: "users" },
          { title: "Audit log", body: "Workspaces keep an audit log of activity.", icon: "file" },
          { title: "Secrets", body: "AI keys and SMTP passwords encrypted with AES-256-GCM.", icon: "lock" },
          { title: "Branding", body: "White-label logo, colours and custom domain on Business and Enterprise.", icon: "palette" },
        ],
      },
      {
        type: "prose",
        heading: "Trial workspaces",
        paragraphs: ["New workspaces get a 14-day Professional trial with no card needed, so you can test team features before choosing a plan."],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not documented on the site",
        body: "eCard's site does not document whether one account can own several workspaces; check in-app settings.",
      },
    ],
    faqs: [
      { q: "How many people can join a Free workspace?", a: "Up to 5 users." },
      { q: "Is there an activity history?", a: "Yes, workspaces have an audit log." },
    ],
    related: ["product/workspace-setup", "features/team-security/shared-workspaces", "features/team-security/roles-and-permissions", "pricing/compare-plans"],
    source: "verified",
  },
  {
    slug: "platform/dashboard",
    category: "platform",
    title: "Dashboard",
    seoTitle: "The eCard Dashboard at a Glance",
    description: "What you can expect to see in eCard's dashboard area: recent contacts, link tracking for your card, PDFs and WhatsApp links, and follow-up activity.",
    h1: "See your network and engagement in one view",
    eyebrow: "Dashboard",
    intro: "eCard's link tracking shows opens of your card, PDFs and WhatsApp links. This page explains how to read engagement signals alongside your contacts.",
    variant: "feature",
    visual: "analytics",
    icon: "chart",
    sections: [
      {
        type: "bullets",
        heading: "Signals eCard tracks",
        items: ["Opens of your digital business card", "Opens of PDFs you share", "Opens of WhatsApp links", "Short-link clicks, with bots filtered out"],
      },
      {
        type: "prose",
        heading: "Reading engagement sensibly",
        paragraphs: [
          "An open tells you someone looked, not that they are ready to buy. As general guidance, treat opens as a prompt to follow up at a good time rather than as a score. Combine them with what you remember from the meeting.",
          "Filtering bots out of click counts matters because link previews and security scanners can otherwise inflate numbers.",
        ],
      },
      {
        type: "split",
        heading: "Pair it with search",
        body: ["Natural-language search lets you jump from a signal to a person, for example \"Investors I met in Mumbai last month\"."],
        points: ["Find the person", "Check meeting memory", "Send a relevant follow-up"],
      },
      {
        type: "callout",
        tone: "note",
        title: "Layout varies",
        body: "eCard's site does not publish dashboard screenshots; illustrations here use sample data.",
      },
    ],
    faqs: [
      { q: "Are bot clicks counted?", a: "Short links count clicks with bots filtered out." },
      { q: "Can I see who opened a PDF?", a: "eCard's link tracking shows opens of your card, PDFs and WhatsApp links." },
    ],
    related: ["features/link-tracking", "features/link-tracking/dashboard", "features/link-tracking/engagement-signals", "platform/follow-up-engine"],
    source: "mixed",
  },
  {
    slug: "platform/all-features",
    category: "platform",
    title: "All Features",
    seoTitle: "All eCard Features in One List",
    description: "The complete list of eCard features: AI scanning, contacts, search, meeting memory, email and WhatsApp outreach, digital card, tracking, events and security.",
    h1: "Every eCard feature, listed",
    eyebrow: "All features",
    intro: "Here is everything eCard's site describes, grouped by what it helps you do.",
    variant: "reference",
    visual: "integrations",
    icon: "check",
    sections: [
      {
        type: "table",
        heading: "Feature list",
        headers: ["Area", "Features"],
        rows: [
          ["AI scanning", "Claude, OpenAI, Gemini, DeepSeek, Grok, Azure, custom endpoint; bring your own key; confidence scores; review before save; key pool with failover; Google Maps address check"],
          ["Telegram", "Photo to bot saves contact; Open and Send buttons; one-time code from Settings → Telegram"],
          ["WhatsApp", "AI messages in English, Hindi or Marathi; one tap to open"],
          ["Digital card", "Premium templates, QR, Save-to-contacts, short links with bot-filtered click counts"],
          ["Intro emails", "AI draft preview; sends after 5 seconds from your own SMTP; edit or cancel"],
          ["Meeting memory", "Where met, who introduced you, voice notes, searchable AI summary"],
          ["Link tracking", "Opens of card, PDFs and WhatsApp links"],
          ["Search", "Natural-language search"],
          ["Events & expos", "Group cards from a show; follow up with everyone at once"],
          ["Clean data", "Duplicate merge, blacklist, archive, CSV import, Google Contacts sync"],
          ["Team & admin", "Roles, 2FA, recovery codes, trusted devices, login alerts, AES-256-GCM encryption, audit log, white label, webhooks and API, compliance checklist"],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Plan differences",
        body: "Google Contacts sync and Calendar & Meet booking start on Starter, webhooks on Professional, and white label & custom domain on Business.",
      },
      {
        type: "bullets",
        heading: "Included on every plan",
        items: ["AI card scanning", "Contacts, tags & events", "Bulk import & export", "Email outreach from your own mailbox", "WhatsApp messages", "Digital business card", "Telegram scanning bot"],
      },
      {
        type: "prose",
        heading: "What is not offered",
        paragraphs: ["eCard is browser-only; the site says there is no app to install. Public API reference documentation is not published on the site."],
      },
    ],
    faqs: [
      { q: "Is there a mobile app?", a: "No. eCard works in any phone browser." },
      { q: "Which plan has webhooks?", a: "Professional, Business and Enterprise." },
    ],
    related: ["product/feature-availability", "pricing/compare-plans", "product-tour", "platform"],
    source: "verified",
  },
  {
    slug: "platform/bring-your-own-ai",
    category: "platform",
    title: "Bring Your Own AI",
    seoTitle: "Bring Your Own AI Model and Key to eCard",
    description: "Use your own AI provider and key with eCard — Claude, OpenAI, Gemini, DeepSeek, Grok, Azure or a custom endpoint — with encrypted keys and failover.",
    h1: "Your AI provider, your key, your choice",
    eyebrow: "Bring your own AI",
    intro: "eCard does not lock you into one AI model. Choose the provider you trust, use your own key, and add more keys for failover.",
    variant: "feature",
    visual: "extract",
    icon: "key",
    sections: [
      {
        type: "bullets",
        heading: "Supported providers",
        items: ["Claude", "OpenAI", "Gemini", "DeepSeek", "Grok", "Azure", "A custom endpoint"],
      },
      {
        type: "cards",
        heading: "Why it matters",
        cards: [
          { title: "Choice", body: "Pick the model that reads your cards best, or the one your organisation already approves.", icon: "brain" },
          { title: "Resilience", body: "A key pool with failover keeps scanning going if one key hits a problem.", icon: "zap" },
          { title: "Security", body: "API keys are encrypted with AES-256-GCM.", icon: "lock" },
        ],
      },
      {
        type: "prose",
        heading: "Choosing a model",
        paragraphs: [
          "As general guidance, compare models on a sample of your own real cards, especially ones with mixed languages, logos or unusual layouts. Look at which fields need correcting most often during review.",
          "Your provider bills you for usage under your key according to their own pricing. eCard's site does not document per-model costs.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not documented",
        body: "eCard's site does not document how keys are rotated across the pool in detail; check in-app settings.",
      },
    ],
    faqs: [
      { q: "Can I use Azure-hosted models?", a: "The FAQ names Azure and custom endpoints as options." },
      { q: "How are my keys stored?", a: "API keys are encrypted with AES-256-GCM." },
    ],
    related: ["features/ai-card-scanning/bring-your-own-key", "features/ai-card-scanning/key-pool", "features/ai-card-scanning/choosing-a-model", "integrations/claude"],
    source: "mixed",
  },
  {
    slug: "platform/browser-based",
    category: "platform",
    title: "Browser-Based by Design",
    seoTitle: "eCard Is Browser-Based: No App to Install",
    description: "eCard runs in any phone browser with no app to install. Learn what that means for setup, team rollouts, updates and scanning on the go via Telegram.",
    h1: "No app store, no install, no waiting",
    eyebrow: "Browser-based",
    intro: "eCard works in any phone browser. That design choice keeps setup quick for you and for everyone you invite.",
    variant: "feature",
    visual: "card",
    icon: "globe",
    sections: [
      {
        type: "split",
        heading: "What browser-based means for you",
        body: ["You open eCard, sign in and scan. There is nothing to download, which matters when you are at an event with patchy data or a phone short on storage."],
        points: ["No app download", "Same experience on any phone", "Easy to invite guests", "Digital card opens without an app for recipients too"],
      },
      {
        type: "prose",
        heading: "Good for team rollouts",
        paragraphs: [
          "Rolling out a mobile app to a team often means device policies and version checks. With a browser-based tool, you send an invitation and assign a role, such as scan-only guest for temporary booth staff.",
        ],
      },
      {
        type: "cards",
        heading: "Two ways to capture on the go",
        cards: [
          { title: "Phone browser", body: "Open eCard and scan directly.", icon: "smartphone" },
          { title: "Telegram bot", body: "Send a card photo to the bot; the contact is saved with Open and Send buttons.", icon: "send" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Add to home screen",
        body: "Most phone browsers let you add a site shortcut to your home screen for quick access — a general browser feature, not an eCard install.",
      },
    ],
    faqs: [
      { q: "Is there an Android or iOS app?", a: "No. eCard's site says it is browser-only." },
      { q: "Do people receiving my digital card need an app?", a: "No app is needed to view your digital card." },
    ],
    related: ["mobile/no-app-needed", "mobile", "features/telegram-bot", "features/digital-business-card/no-app-required"],
    source: "mixed",
  },
  {
    slug: "platform/data-ownership",
    category: "platform",
    title: "Your Data, Your Control",
    seoTitle: "Data Ownership and Control in eCard",
    description: "How eCard keeps you in control of your data: review before save, CSV export, your own AI key and mailbox, encrypted secrets and a compliance checklist.",
    h1: "Your contacts stay yours",
    eyebrow: "Data ownership",
    intro: "eCard's design choices — your own AI key, your own mailbox, export any time — keep control of your contact data with you.",
    variant: "feature",
    visual: "security",
    icon: "lock",
    sections: [
      {
        type: "cards",
        heading: "Controls you have",
        cards: [
          { title: "Review before save", body: "Nothing is saved until you check it.", icon: "eye" },
          { title: "Export", body: "Bulk export and CSV export on every plan.", icon: "download" },
          { title: "Your own SMTP", body: "Emails go out from your mailbox, not a shared sender.", icon: "mail" },
          { title: "Your own AI key", body: "Use your provider account and key.", icon: "key" },
          { title: "Encryption", body: "API keys and SMTP passwords encrypted with AES-256-GCM.", icon: "lock" },
          { title: "Compliance checklist", body: "Covers consent, export and deletion.", icon: "check" },
        ],
      },
      {
        type: "prose",
        heading: "Why it matters",
        paragraphs: [
          "Contact data is personal data. As general guidance, it is good practice to know where contact details are stored, who can access them and how you would delete them if asked. eCard's roles, audit log and compliance checklist support that.",
        ],
      },
      {
        type: "bullets",
        heading: "Housekeeping tools",
        items: ["Blacklist contacts who should not be messaged", "Archive contacts you no longer need day to day", "Merge duplicates to keep one clean record"],
      },
      {
        type: "callout",
        tone: "note",
        title: "Policies",
        body: "eCard's legal pages on this site are drafts pending review. eCard's site does not state specific retention periods.",
      },
    ],
    faqs: [
      { q: "Can I export all my contacts?", a: "Yes. Bulk import and export, including CSV, is part of every plan." },
      { q: "Does eCard send email from its own servers?", a: "Intro emails send from your own SMTP." },
    ],
    related: ["features/contact-management/data-export-and-deletion", "platform/compliance-tools", "help/data-and-privacy", "features/team-security/secret-encryption"],
    source: "mixed",
  },
  {
    slug: "platform/time-saved",
    category: "platform",
    title: "Time Saved",
    seoTitle: "How Much Time Can eCard Save You?",
    description: "Estimate time saved with eCard by comparing manual card entry and follow-ups with AI scanning and drafts. Estimates, not promises — your results vary.",
    h1: "Estimate the hours you get back",
    eyebrow: "Time saved",
    intro: "eCard's time-saved calculator is labelled \"Estimates, not promises\". This page explains how to think about the estimate honestly.",
    variant: "guide",
    visual: "analytics",
    icon: "clock",
    sections: [
      {
        type: "callout",
        tone: "note",
        title: "Estimates, not promises",
        body: "Any figures below are illustrative samples. Your actual time depends on your volume, cards and habits.",
      },
      {
        type: "steps",
        heading: "Work out your own estimate",
        steps: [
          { title: "Count cards", body: "How many cards do you collect in a typical month?" },
          { title: "Time manual entry", body: "Time how long it takes you to type one card into your phone or spreadsheet." },
          { title: "Time follow-ups", body: "Time how long it takes to write a personalised first email." },
          { title: "Compare", body: "With eCard, you review fields and edit a draft instead. Time a few and compare." },
        ],
      },
      {
        type: "table",
        heading: "Sample calculation",
        intro: "Sample figures only, for illustration.",
        headers: ["Step", "Sample manual minutes", "Sample with review"],
        rows: [
          ["Enter one card", "3", "1"],
          ["Write first email", "5", "1"],
          ["40 cards a month (sample)", "320", "80"],
        ],
      },
      {
        type: "prose",
        heading: "The bigger win is often consistency",
        paragraphs: ["Time saved matters, but as general guidance the larger impact usually comes from following up at all. Many cards never get a follow-up simply because it felt like a chore."],
      },
    ],
    faqs: [
      { q: "Does eCard guarantee time savings?", a: "No. The calculator is labelled \"Estimates, not promises\"." },
    ],
    related: ["why-ecard", "platform/follow-up-engine", "platform/paper-to-digital", "features/outreach/five-second-send"],
    source: "mixed",
  },
  {
    slug: "platform/follow-up-engine",
    category: "platform",
    title: "Follow-Up Engine",
    seoTitle: "eCard's Follow-Up Engine: Email and WhatsApp",
    description: "How eCard helps you follow up: AI intro emails sent from your SMTP after a 5-second preview, WhatsApp messages in three languages and event follow-ups.",
    h1: "Follow-ups that actually get sent",
    eyebrow: "Follow-up",
    intro: "eCard puts the first message within reach right after you scan. You stay in control; the busywork goes away.",
    variant: "feature",
    visual: "email",
    icon: "send",
    sections: [
      {
        type: "steps",
        heading: "The intro email flow",
        steps: [
          { title: "Draft", body: "AI writes an intro using the card and your meeting context." },
          { title: "Preview", body: "You see the draft and can edit it." },
          { title: "Send or cancel", body: "It sends after 5 seconds from your own SMTP unless you cancel." },
        ],
      },
      {
        type: "split",
        heading: "WhatsApp when email is too formal",
        body: ["In many markets, WhatsApp is where business conversations continue. eCard's AI writes a message in English, Hindi or Marathi and opens it in WhatsApp in one tap."],
        points: ["English", "Hindi (हिंदी)", "Marathi (मराठी)"],
      },
      {
        type: "cards",
        heading: "Follow up at scale",
        cards: [
          { title: "Events", body: "Group cards from a trade show and follow up with everyone at once.", icon: "calendar" },
          { title: "Tracking", body: "See opens of your card, PDFs and WhatsApp links.", icon: "chart" },
          { title: "Booking", body: "Google Calendar & Meet booking on Starter and above.", icon: "clock" },
        ],
      },
      {
        type: "prose",
        heading: "Follow-up etiquette",
        paragraphs: ["As general guidance, reference something specific from the conversation, keep the first message short and make the next step easy. A clear, single ask tends to work better than a long pitch."],
      },
    ],
    faqs: [
      { q: "Which email providers can I send from?", a: "Gmail, Outlook, Zoho, SendGrid, Brevo, Mailgun, Amazon SES, Resend or any SMTP host." },
      { q: "Can I stop an email after clicking send?", a: "You can edit or cancel during the 5-second window before it sends." },
    ],
    related: ["features/outreach", "features/outreach/five-second-send", "features/outreach/follow-up-timing", "platform/multi-language"],
    source: "mixed",
  },
  {
    slug: "platform/relationship-memory",
    category: "platform",
    title: "Relationship Memory",
    seoTitle: "Relationship Memory: Remember Every Meeting",
    description: "eCard remembers the context around each card — where you met, who introduced you, voice notes and an AI summary — and makes it searchable in plain language.",
    h1: "Remember the conversation, not just the card",
    eyebrow: "Memory",
    intro: "A name and phone number are not a relationship. eCard's meeting memory keeps the context that makes your next conversation easier.",
    variant: "feature",
    visual: "meeting",
    icon: "brain",
    sections: [
      {
        type: "cards",
        heading: "What eCard remembers",
        cards: [
          { title: "Where you met", body: "The place or event behind each contact.", icon: "map" },
          { title: "Who introduced you", body: "The connection that brought you together.", icon: "link" },
          { title: "Voice notes", body: "Speak a quick note right after the meeting.", icon: "mic" },
          { title: "AI summary", body: "A searchable summary of the context.", icon: "sparkles" },
        ],
      },
      {
        type: "split",
        heading: "Search the way you remember",
        body: ["You rarely remember the exact name. You remember the city, the event or the role. eCard's natural-language search works with that."],
        points: ["\"Investors I met in Mumbai last month\"", "Sample: \"Architects from the Pune expo\"", "Sample: \"People Rahul introduced me to\""],
      },
      {
        type: "prose",
        heading: "A habit worth building",
        paragraphs: ["As general guidance, record a 20-second voice note right after each meaningful conversation: what they need, what you promised and when to follow up. It is far easier than reconstructing details a week later."],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Teams",
        body: "Shared contacts in a workspace mean colleagues can see context before they reach out, depending on their role.",
      },
    ],
    faqs: [
      { q: "Can I search my meeting notes?", a: "Yes. The AI summary is searchable, and natural-language search is supported." },
    ],
    related: ["features/meeting-memory", "features/meeting-memory/voice-notes", "features/contact-management/natural-language-search", "platform/follow-up-engine"],
    source: "mixed",
  },
  {
    slug: "platform/compliance-tools",
    category: "platform",
    title: "Compliance Tools",
    seoTitle: "eCard Compliance Tools: Consent, Export, Deletion",
    description: "eCard's compliance tools include a checklist for consent, export and deletion, plus blacklist, audit logs, roles, 2FA and encrypted secrets for teams.",
    h1: "Tools that support responsible contact handling",
    eyebrow: "Compliance",
    intro: "eCard includes a compliance checklist covering consent, export and deletion, alongside security controls that help teams handle contact data with care.",
    variant: "feature",
    visual: "security",
    icon: "shield",
    sections: [
      {
        type: "callout",
        tone: "note",
        title: "Not legal advice",
        body: "eCard provides tools; whether your use meets a particular law depends on your situation. eCard's site does not claim any certification.",
      },
      {
        type: "table",
        heading: "Tools and what they help with",
        headers: ["Tool", "Helps with"],
        rows: [
          ["Compliance checklist", "Consent, export and deletion"],
          ["Blacklist", "Not messaging people who opted out"],
          ["Audit log", "Seeing activity in the workspace"],
          ["Roles", "Limiting who can do what"],
          ["2FA, trusted devices, login alerts", "Protecting accounts"],
          ["AES-256-GCM encryption", "Protecting API keys and SMTP passwords"],
        ],
      },
      {
        type: "bullets",
        heading: "Good general practice",
        items: [
          "Tell people how you will use their details when you take a card",
          "Honour requests to stop contact promptly",
          "Export or delete data on request",
          "Review who has access to the workspace regularly",
        ],
      },
      {
        type: "prose",
        heading: "Where to start",
        paragraphs: ["Work through the compliance checklist with whoever owns data protection in your organisation, then set roles so access matches responsibilities."],
      },
    ],
    faqs: [
      { q: "Is eCard certified for any standard?", a: "eCard's site does not state any certifications." },
      { q: "Can I stop messaging someone permanently?", a: "You can add them to the blacklist." },
    ],
    related: ["features/team-security/compliance-checklist", "features/team-security/consent-management", "platform/data-ownership", "product/security-at-a-glance"],
    source: "mixed",
  },
  {
    slug: "platform/multi-language",
    category: "platform",
    title: "Multi-Language Messaging",
    seoTitle: "WhatsApp Messages in English, Hindi, Marathi",
    description: "eCard's AI writes WhatsApp follow-ups in English, Hindi or Marathi and opens them in one tap — useful when your contacts prefer their own language.",
    h1: "Follow up in the language your contact prefers",
    eyebrow: "Languages",
    intro: "eCard's AI can write WhatsApp messages in English, Hindi (हिंदी) or Marathi (मराठी) and open them in WhatsApp in one tap.",
    variant: "feature",
    visual: "whatsapp",
    icon: "globe",
    sections: [
      {
        type: "cards",
        heading: "Three languages",
        cards: [
          { title: "English", body: "For most business contacts and mixed-language teams.", icon: "message" },
          { title: "Hindi (हिंदी)", body: "For contacts more comfortable in Hindi.", icon: "message" },
          { title: "Marathi (मराठी)", body: "Helpful for contacts in Maharashtra, such as site-visit buyers.", icon: "message" },
        ],
      },
      {
        type: "prose",
        heading: "Why language matters",
        paragraphs: [
          "As general guidance, a message in someone's preferred language feels more personal and is easier to reply to. In real estate, for example, eCard's site mentions following up in Marathi or Hindi on WhatsApp.",
          "Always read the draft before sending; you know the relationship and tone better than any model.",
        ],
      },
      {
        type: "table",
        heading: "Sample openers",
        intro: "Sample messages only.",
        headers: ["Language", "Sample"],
        rows: [
          ["English", "Hi Priya, great meeting you at the site visit today."],
          ["Hindi", "नमस्ते प्रिया जी, आज साइट विज़िट पर मिलकर अच्छा लगा।"],
          ["Marathi", "नमस्कार प्रिया, आज साइट व्हिजिटला भेटून आनंद झाला."],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Email language",
        body: "eCard's site states the three languages for WhatsApp messages; it does not document language options for intro emails.",
      },
    ],
    faqs: [
      { q: "Which languages are supported?", a: "English, Hindi and Marathi for WhatsApp messages." },
    ],
    related: ["features/outreach/multilingual-outreach", "features/outreach/whatsapp-hindi", "features/outreach/whatsapp-marathi", "use-cases/real-estate"],
    source: "mixed",
  },
  {
    slug: "platform/for-teams",
    category: "platform",
    title: "eCard for Teams",
    seoTitle: "eCard for Teams: Roles, Shared Contacts, Security",
    description: "Use eCard as a team: shared workspace contacts, five roles including scan-only guests, 2FA, audit logs, webhooks and white label on higher plans.",
    h1: "Built for teams that meet people",
    eyebrow: "Teams",
    intro: "When several people collect cards, eCard keeps everything in one workspace with roles that match each person's job.",
    variant: "solution",
    visual: "team",
    icon: "users",
    sections: [
      {
        type: "table",
        heading: "Roles",
        headers: ["Role", "Typical use"],
        rows: [
          ["Owner", "Account holder and billing"],
          ["Admin", "Manages settings and members"],
          ["Manager", "Oversees a team's contacts and follow-ups"],
          ["Member", "Scans and follows up day to day"],
          ["Scan-only guest", "Temporary staff, e.g. at an expo booth"],
        ],
      },
      {
        type: "bullets",
        heading: "Security for teams",
        items: ["2FA with authenticator codes", "Recovery codes and trusted devices", "Login alerts", "Workspace audit log", "Encrypted API keys and SMTP passwords"],
      },
      {
        type: "split",
        heading: "Choosing a team plan",
        body: ["Starter supports 20 users at ₹299/month, Professional 100 users at ₹999/month, and Business unlimited users at ₹2,999/month."],
        points: ["Webhooks from Professional", "White label & custom domain from Business", "Enterprise: custom pricing"],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Trade shows",
        body: "Give booth helpers the scan-only guest role so they can capture cards without broader access.",
      },
    ],
    faqs: [
      { q: "How many users can I add?", a: "5 on Free, 20 on Starter, 100 on Professional, unlimited on Business and Enterprise." },
      { q: "What is a scan-only guest?", a: "One of eCard's five roles, intended for people who only need to scan cards." },
    ],
    related: ["features/team-security", "features/team-security/roles-and-permissions", "use-cases/sales-teams", "resources/guides/inviting-your-team"],
    source: "verified",
  },
];

const extra: Record<string, { sections: Section[]; faqs?: FAQ[] }> = {
  platform: {
    sections: [
      {
        type: "steps",
        heading: "A typical week on the platform",
        intro: "Sample workflow for one fictional user, Sample: Arjun Rao, consultant.",
        steps: [
          { title: "Monday: an industry meetup", body: "Arjun collects eight cards and sends each photo to the Telegram bot between conversations, so nothing waits in his pocket." },
          { title: "Monday evening: review", body: "He opens eCard in his phone browser, checks the low-confidence fields and adds where he met each person and who made the introduction." },
          { title: "Tuesday: first messages", body: "He previews AI intro emails, edits two of them, and lets the rest send from his own mailbox after the 5-second window." },
          { title: "Thursday: signals", body: "Link tracking shows three people opened his digital card, so he sends those three a WhatsApp follow-up." },
          { title: "Friday: find someone", body: "A client asks for an introduction. A plain-language search surfaces the right contact from the meetup in seconds." },
        ],
      },
      {
        type: "table",
        heading: "Which part of the platform answers which question",
        headers: ["Question you have", "Where to look"],
        rows: [
          ["Who is this person?", "Contact record created from the scan"],
          ["How do I know them?", "Meeting memory: place, introducer, voice notes, AI summary"],
          ["Did they look at what I sent?", "Link tracking for card, PDFs and WhatsApp links"],
          ["Who did I meet at that show?", "Events & expos grouping"],
          ["Who on my team can see this?", "Roles and the workspace audit log"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start small",
        body: "You do not need every module on day one. Most people begin with scanning and intro emails, then add events, tracking and team roles as their volume grows.",
      },
    ],
    faqs: [
      { q: "Can I connect eCard to other tools?", a: "Webhooks with signed events for each new contact are available on Professional and above, and Google Contacts sync starts on Starter." },
      { q: "What does it cost to begin?", a: "₹0. The Free plan includes 5 users, 1 GB storage and 50 scans a month." },
    ],
  },
  "platform/ai-visiting-card-crm": {
    sections: [
      {
        type: "bullets",
        heading: "Signs you need a visiting-card CRM",
        intro: "As general guidance, these patterns suggest card capture is your bottleneck rather than pipeline management:",
        items: [
          "You return from events with cards you never enter anywhere",
          "Your CRM has contacts but no record of where or how you met them",
          "Follow-ups go out days late because writing them feels like a chore",
          "Colleagues ask who knows someone and nobody can check quickly",
          "Your contact list is full of duplicates from repeated meetings",
        ],
      },
      {
        type: "split",
        heading: "Sample: one card, end to end",
        body: [
          "Sample: Neha Kulkarni, Procurement Head (fictional). Her card is scanned at a supplier meet. The AI reads her name, title, company, phone and email; the address is checked against Google Maps. You note she was introduced by a mutual contact and record a short voice note about her current vendor review.",
          "The next morning, the intro email draft mentions the vendor review. You trim one line and let it send from your own mailbox.",
        ],
        points: ["Scan and review", "Context attached", "Relevant intro sent", "Searchable later by what you remember"],
      },
      {
        type: "table",
        heading: "Common pitfalls when adopting one",
        headers: ["Pitfall", "Better approach"],
        rows: [
          ["Scanning but skipping review", "Check low-confidence fields every time; nothing saves until you do"],
          ["Leaving context blank", "Add where you met and a quick voice note while it is fresh"],
          ["Treating AI drafts as final", "Read and adjust tone before the 5-second send"],
          ["Running two lists in parallel", "Import your spreadsheet by CSV and keep one source"],
        ],
      },
    ],
    faqs: [
      { q: "Which AI models can read my cards?", a: "Claude, OpenAI, Gemini, DeepSeek and Grok, with Azure and custom endpoints named in the FAQ." },
      { q: "Do I need technical skills to use it?", a: "No setup project is needed; eCard runs in any phone browser. Connecting your own SMTP mailbox requires your provider's server details." },
    ],
  },
  "platform/paper-to-digital": {
    sections: [
      {
        type: "table",
        heading: "Triage your backlog before you scan",
        intro: "As general guidance, not every old card deserves the same effort.",
        headers: ["Card age", "Suggested action"],
        rows: [
          ["Under a month", "Scan, add context and send a follow-up now"],
          ["One to six months", "Scan, tag by event, and send a brief reconnect note if relevant"],
          ["Older than six months", "Scan for the record; reach out only with a clear reason"],
          ["No longer relevant", "Skip it, or scan and archive"],
        ],
      },
      {
        type: "bullets",
        heading: "Pitfalls when digitising in bulk",
        items: [
          "Scanning everything in one sitting and rushing review — do batches you can check properly",
          "Losing the event context — create the event before scanning its cards",
          "Mass-mailing old contacts with a generic message — personalise or skip",
          "Throwing away the physical cards before the digital records are checked",
        ],
      },
      {
        type: "split",
        heading: "Sample: a two-evening clean-up",
        body: ["Sample: a fictional sales lead with 180 cards in a drawer. Evening one: sort into six piles by event and scan the two most recent piles. Evening two: scan the remaining piles, merge duplicates and archive cards from roles that no longer matter."],
        points: ["Six events created", "Duplicates merged", "Recent contacts followed up", "Drawer empty"],
      },
    ],
    faqs: [
      { q: "Should I keep the paper cards afterwards?", a: "That is your choice. As general guidance, keep them until you have reviewed and checked the digital records." },
    ],
  },
  "platform/workspace": {
    sections: [
      {
        type: "steps",
        heading: "Setting up a workspace for a small team",
        steps: [
          { title: "Owner signs up", body: "The person responsible for billing creates the workspace and becomes owner." },
          { title: "Secure it", body: "Turn on 2FA with an authenticator app and save the recovery codes." },
          { title: "Configure secrets", body: "Add AI keys and SMTP passwords; both are encrypted with AES-256-GCM." },
          { title: "Invite members", body: "Give each person the narrowest role that lets them do their job." },
          { title: "Check the audit log", body: "After the first week, review activity to confirm access looks right." },
        ],
      },
      {
        type: "table",
        heading: "Which plan fits your workspace size",
        headers: ["Team situation", "Plan to consider"],
        rows: [
          ["Up to 5 people, light scanning", "Free"],
          ["Up to 20 people, Google Contacts sync wanted", "Starter, ₹299/month"],
          ["Up to 100 people or webhooks needed", "Professional, ₹999/month"],
          ["Unlimited users or own branding", "Business, ₹2,999/month"],
          ["Custom terms", "Enterprise, contact sales"],
        ],
      },
      {
        type: "bullets",
        heading: "Workspace hygiene checklist",
        items: [
          "Remove members who leave the organisation",
          "Use scan-only guest for temporary helpers",
          "Watch storage and monthly scans against your plan",
          "Keep one owner contact current for billing",
        ],
      },
    ],
    faqs: [
      { q: "What limits apply during the trial?", a: "New workspaces get a 14-day Professional trial. eCard's site does not separately document trial limits; check in-app." },
      { q: "Can white-label branding apply to my workspace?", a: "White label with logo, colours and custom domain is on Business and Enterprise." },
    ],
  },
  "platform/dashboard": {
    sections: [
      {
        type: "table",
        heading: "Turning a signal into an action",
        intro: "General guidance for interpreting engagement.",
        headers: ["Signal", "What it may mean", "Reasonable next step"],
        rows: [
          ["Card opened soon after meeting", "They saved or checked your details", "Send your intro if you have not already"],
          ["Brochure PDF opened more than once", "Active interest or shared internally", "Offer a short call"],
          ["WhatsApp link opened, no reply", "Seen but busy", "Wait, then a brief nudge"],
          ["No opens after a week", "Message missed or not a priority", "Try another channel once"],
        ],
      },
      {
        type: "bullets",
        heading: "Pitfalls with engagement data",
        items: [
          "Reading an open as a buying signal on its own",
          "Following up the instant something is opened, which can feel intrusive",
          "Comparing raw click counts without bot filtering — eCard filters bots on short links",
          "Ignoring people who never open but reply by phone",
        ],
      },
      {
        type: "split",
        heading: "Sample: a five-minute morning check",
        body: ["Sample routine for a fictional account manager: scan yesterday's opens, pick the two people with the most recent activity, check their meeting memory, and send one personalised message each."],
        points: ["Review opens", "Pick two people", "Check context", "Send personal follow-ups"],
      },
    ],
    faqs: [
      { q: "Are the visuals on this page my real data?", a: "No. Illustrations on this site use sample data." },
    ],
  },
  "platform/all-features": {
    sections: [
      {
        type: "table",
        heading: "Features by job to be done",
        headers: ["If you need to…", "Use"],
        rows: [
          ["Capture cards fast at an event", "Telegram bot or phone browser scanning"],
          ["Trust the data", "Confidence scores and review before save"],
          ["Avoid AI downtime", "Key pool with failover"],
          ["Reach someone the same day", "Intro email or one-tap WhatsApp"],
          ["Share your own details", "Digital card with QR and Save-to-contacts"],
          ["Pass contacts to another system", "Webhooks (Professional and above) or CSV export"],
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "What this list does not cover",
        body: "eCard's site does not publish API reference documentation, field-level mapping for integrations or webhook payload formats. Check in-app settings or contact sales for details.",
      },
    ],
    faqs: [
      { q: "Is natural-language search on every plan?", a: "The pricing page does not list search by plan; it is described as a core feature on the homepage. Check in-app for your plan." },
      { q: "Can I try paid features before paying?", a: "The 14-day Professional trial includes Professional features, such as webhooks, with no card needed." },
    ],
  },
  "platform/bring-your-own-ai": {
    sections: [
      {
        type: "steps",
        heading: "Evaluating models on your own cards",
        intro: "A general method, not an eCard benchmark.",
        steps: [
          { title: "Pick a test set", body: "Choose about 20 real cards that represent what you collect: plain, glossy, bilingual and minimalist." },
          { title: "Scan with model A", body: "Note how many fields you correct during review." },
          { title: "Repeat with model B", body: "Use the same cards so the comparison is fair." },
          { title: "Compare corrections and cost", body: "Weigh accuracy against your provider's pricing for your volume." },
        ],
      },
      {
        type: "table",
        heading: "Choosing between options",
        headers: ["Priority", "Consider"],
        rows: [
          ["Use an approved provider only", "The provider your organisation already contracts with"],
          ["Enterprise cloud requirements", "Azure, named in the FAQ"],
          ["Self-hosted or niche model", "A custom endpoint, named in the FAQ"],
          ["Keep scanning during outages", "Multiple keys in the key pool"],
        ],
      },
      {
        type: "bullets",
        heading: "Key handling pitfalls",
        items: [
          "Sharing one personal key across a whole team without spending limits on the provider side",
          "Forgetting to rotate a key after a team member leaves",
          "Relying on a single key with no failover during a busy event",
        ],
      },
    ],
    faqs: [
      { q: "Who pays for AI usage with my own key?", a: "Usage under your own key is billed by your AI provider under their pricing." },
      { q: "Can I add more than one key?", a: "Yes. eCard supports a key pool with failover." },
    ],
  },
  "platform/browser-based": {
    sections: [
      {
        type: "table",
        heading: "Browser-based vs installed app",
        intro: "General trade-offs to consider.",
        headers: ["Consideration", "Browser-based (eCard)", "Typical installed app"],
        rows: [
          ["Getting started", "Open a link and sign in", "Find, download and install"],
          ["Updates", "Arrive when you reload", "Depend on app-store updates"],
          ["Inviting temporary staff", "Send an invitation", "Each person installs the app"],
          ["Phone storage", "Minimal", "App plus cached data"],
        ],
      },
      {
        type: "steps",
        heading: "Sample: equipping a booth team in ten minutes",
        intro: "Sample scenario with fictional staff.",
        steps: [
          { title: "Invite", body: "The admin invites three helpers as scan-only guests." },
          { title: "Sign in", body: "Each helper opens eCard on their own phone browser and signs in." },
          { title: "Link Telegram (optional)", body: "Helpers who prefer chat link the bot with a one-time code from Settings → Telegram." },
          { title: "Scan", body: "Cards flow into the shared workspace through the day." },
        ],
      },
      {
        type: "bullets",
        heading: "Tips for reliable browser use at events",
        items: ["Sign in before the event starts", "Keep your phone charged; scanning uses the camera", "Use good light for photos", "Review cards during quiet moments, not at the end of a long day"],
      },
    ],
    faqs: [
      { q: "Which browsers work?", a: "eCard's site says it works in any phone browser; it does not publish a specific browser list." },
    ],
  },
  "platform/data-ownership": {
    sections: [
      {
        type: "table",
        heading: "Where each kind of data comes from",
        headers: ["Data", "Source", "Your control"],
        rows: [
          ["Card details", "Your scan, read by your chosen AI model", "Review before save, edit, archive"],
          ["Meeting context", "Your notes and voice notes", "Edit or remove"],
          ["Outgoing email", "Your own SMTP mailbox", "Preview, edit or cancel"],
          ["Contact list", "Scans, CSV import, Google Contacts sync", "Export to CSV any time"],
        ],
      },
      {
        type: "steps",
        heading: "Handling a deletion request",
        intro: "General workflow; adapt to your own obligations.",
        steps: [
          { title: "Confirm identity", body: "Make sure the request comes from the person concerned." },
          { title: "Find the record", body: "Use search to locate every record, including duplicates." },
          { title: "Delete or blacklist", body: "Delete the data, and blacklist if they also asked never to be contacted." },
          { title: "Note it", body: "Record that you completed the request." },
        ],
      },
      {
        type: "bullets",
        heading: "Pitfalls",
        items: ["Exporting CSVs and leaving copies on shared drives", "Giving everyone admin rights", "Forgetting data synced to Google Contacts when deleting in eCard"],
      },
    ],
    faqs: [
      { q: "Are my AI keys visible to other members?", a: "Keys are encrypted with AES-256-GCM. eCard's site does not document per-role visibility of secrets; check in-app settings." },
    ],
  },
  "platform/time-saved": {
    sections: [
      {
        type: "bullets",
        heading: "Inputs worth measuring before you use the calculator",
        intro: "The calculator above works best with your own numbers rather than guesses.",
        items: [
          "Cards collected in a normal month, plus peaks around events",
          "Minutes to type one card by hand, timed on a few real cards",
          "Minutes to write a personalised first email",
          "Share of cards that currently get no follow-up at all",
        ],
      },
      {
        type: "table",
        heading: "What eCard changes, and what it doesn't",
        headers: ["Task", "Changes with eCard", "Still on you"],
        rows: [
          ["Data entry", "AI reads the card", "Reviewing flagged fields"],
          ["Context", "Voice notes and AI summary", "Recording them promptly"],
          ["First message", "AI draft, 5-second send", "Checking tone and accuracy"],
          ["Finding people", "Natural-language search", "Remembering something to search for"],
        ],
      },
      {
        type: "split",
        heading: "Pitfalls when estimating",
        body: ["Estimates go wrong when they assume every card is scanned perfectly or that every saved minute becomes productive time. Leave room for review and corrections."],
        points: ["Include review time", "Use typical months, not best months", "Re-check after a few weeks of real use"],
      },
    ],
    faqs: [
      { q: "Is the calculator result a guarantee?", a: "No. eCard labels it \"Estimates, not promises\"." },
      { q: "What should I compare the estimate against?", a: "Time a few real cards and emails before and after you start using eCard, and compare." },
    ],
  },
  "platform/follow-up-engine": {
    sections: [
      {
        type: "table",
        heading: "Email or WhatsApp?",
        intro: "General guidance; your contacts' preferences come first.",
        headers: ["Situation", "Better fit"],
        rows: [
          ["Formal first contact", "Intro email from your mailbox"],
          ["Contact shared a mobile and prefers chat", "WhatsApp"],
          ["Contact more comfortable in Hindi or Marathi", "WhatsApp in that language"],
          ["Group follow-up after a trade show", "Event follow-up to everyone at once"],
        ],
      },
      {
        type: "split",
        heading: "Sample intro email",
        body: ["Sample: \"Hi Kavya, good to meet you at the packaging expo today. You mentioned your team is reviewing suppliers next month — happy to send our catalogue. Would a short call on Thursday work?\" (fictional)"],
        points: ["Names the place", "References the conversation", "Offers one clear next step"],
      },
      {
        type: "bullets",
        heading: "Pitfalls",
        items: ["Sending identical messages to an entire event without any personal line", "Letting the 5-second send go without reading the draft", "Following up through both channels on the same day"],
      },
    ],
    faqs: [
      { q: "Can people book a meeting from my follow-up?", a: "Google Calendar & Meet booking is available on Starter and above." },
    ],
  },
  "platform/relationship-memory": {
    sections: [
      {
        type: "table",
        heading: "Sample: what a memory entry can hold",
        intro: "Fictional example.",
        headers: ["Field", "Sample"],
        rows: [
          ["Where you met", "Startup networking evening, Bengaluru"],
          ["Introduced by", "Sample: Meera Iyer"],
          ["Voice note", "Raising a seed round; wants intros to logistics advisers"],
          ["AI summary", "Founder, seed stage, asked for logistics contacts"],
        ],
      },
      {
        type: "steps",
        heading: "Using memory before a meeting",
        steps: [
          { title: "Search", body: "Find the person by name or by what you remember." },
          { title: "Read the summary", body: "Recall what they needed and what you promised." },
          { title: "Check engagement", body: "See whether they opened your card or materials." },
          { title: "Open with context", body: "Start the conversation from where you left off." },
        ],
      },
      {
        type: "bullets",
        heading: "Pitfalls",
        items: ["Recording notes hours later when details have blurred", "Writing private opinions you would not want colleagues to see", "Never revisiting memory before a second meeting"],
      },
    ],
    faqs: [
      { q: "Can I record who introduced me?", a: "Yes. Meeting memory includes who introduced you." },
      { q: "Are voice notes supported?", a: "Yes, voice notes are part of meeting memory." },
    ],
  },
  "platform/compliance-tools": {
    sections: [
      {
        type: "steps",
        heading: "A quarterly review routine",
        intro: "General practice you can run with eCard's tools.",
        steps: [
          { title: "Walk the checklist", body: "Go through eCard's compliance checklist for consent, export and deletion." },
          { title: "Review members", body: "Remove leavers and downgrade roles that are broader than needed." },
          { title: "Read the audit log", body: "Look for unusual activity." },
          { title: "Check the blacklist", body: "Make sure opt-out requests were added." },
          { title: "Rotate secrets", body: "Update AI keys and SMTP passwords where policy requires." },
        ],
      },
      {
        type: "table",
        heading: "Sample: consent note on a contact",
        intro: "Fictional example of recording context.",
        headers: ["Item", "Sample"],
        rows: [
          ["Contact", "Sample: Rohan Desai"],
          ["How details were shared", "Handed card at trade show booth"],
          ["Agreed follow-up", "Product brochure by email"],
          ["Opt-out", "None requested"],
        ],
      },
    ],
    faqs: [
      { q: "Does eCard keep an activity record?", a: "Yes, each workspace has an audit log." },
    ],
  },
  "platform/multi-language": {
    sections: [
      {
        type: "steps",
        heading: "Choosing the language for a follow-up",
        steps: [
          { title: "Notice the cue", body: "What language did the conversation happen in?" },
          { title: "Check the card", body: "Bilingual cards can hint at preference." },
          { title: "Pick the language", body: "Choose English, Hindi or Marathi for the WhatsApp draft." },
          { title: "Read before sending", body: "Make sure names, places and tone are right." },
        ],
      },
      {
        type: "bullets",
        heading: "Pitfalls with multilingual messages",
        items: [
          "Switching language mid-relationship without reason",
          "Overly formal phrasing for a casual contact, or the reverse",
          "Transliterated names that do not match how the person writes them",
          "Sending a message you cannot read well enough to check",
        ],
      },
      {
        type: "split",
        heading: "Sample: a site-visit follow-up",
        body: ["Sample: a fictional agent meets a family at a site visit near Nashik. The conversation was in Marathi, so the WhatsApp follow-up goes in Marathi with the brochure link, and link tracking shows when the brochure is opened."],
        points: ["Language matches the meeting", "Brochure link tracked", "One tap to open in WhatsApp"],
      },
    ],
    faqs: [
      { q: "Does one tap send the message automatically?", a: "eCard opens the message in WhatsApp in one tap; you send it from WhatsApp." },
      { q: "Can I change the wording before sending?", a: "The message opens in WhatsApp, where you can adjust the text before sending." },
    ],
  },
  "platform/for-teams": {
    sections: [
      {
        type: "steps",
        heading: "Rolling eCard out to a team",
        steps: [
          { title: "Pilot", body: "Start with two or three heavy card collectors on the 14-day Professional trial." },
          { title: "Agree conventions", body: "Decide how events are named and what context everyone records." },
          { title: "Set roles", body: "Admins for settings, managers for oversight, members for daily use, guests for scanning only." },
          { title: "Require 2FA", body: "Ask everyone to enable authenticator codes and store recovery codes." },
          { title: "Review after a month", body: "Check the audit log and adjust roles." },
        ],
      },
      {
        type: "bullets",
        heading: "Pitfalls in team adoption",
        items: [
          "Everyone sending from one shared mailbox instead of their own",
          "Inconsistent event names that split one show into several groups",
          "Two colleagues following up with the same contact — check memory first",
          "Leaving guest access active after an event ends",
        ],
      },
      {
        type: "split",
        heading: "Sample: a five-person field sales team",
        body: ["Sample scenario: five fictional reps share a Starter workspace at ₹299/month. Events are named by city and month, and the manager reviews new contacts weekly."],
        points: ["Fits within 20 users", "Google Contacts sync available", "Upgrade to Professional when webhooks are needed"],
      },
    ],
    faqs: [
      { q: "Can each team member send from their own email?", a: "Intro emails send from your own SMTP; eCard's site does not detail per-member mailbox setup, so check in-app settings." },
    ],
  },
};

const more: Record<string, { sections: Section[]; faqs?: FAQ[] }> = {
  "platform/paper-to-digital": {
    sections: [
      {
        type: "prose",
        heading: "Making the habit stick",
        paragraphs: [
          "As general guidance, the backlog only stays cleared if capture happens close to the moment you receive a card. Decide on one trigger — leaving the meeting room, getting back to the car, the end of each event session — and scan then. A short delay is fine; a week is where context disappears.",
          "If you collect cards for a team, agree who scans shared cards so nobody assumes someone else did it.",
        ],
      },
    ],
    faqs: [{ q: "How long does a backlog clean-up take?", a: "It depends on the number of cards and how carefully you review them. Working in event-sized batches keeps each session manageable." }],
  },
  "platform/workspace": {
    sections: [
      {
        type: "prose",
        heading: "Thinking about workspace boundaries",
        paragraphs: [
          "A workspace is the line around shared contacts, members and settings. As general guidance, put people in the same workspace when they genuinely share contacts and follow-up responsibility — a sales team, a branch office, an agency's account group. Keep separate groups apart when contact data should not be visible across them.",
          "Because roles, the audit log and encrypted secrets all live at workspace level, a clear boundary also makes it easier to answer the question \"who can see this contact?\" when a client or colleague asks.",
        ],
      },
    ],
    faqs: [{ q: "Who should be the workspace owner?", a: "As general guidance, the person accountable for billing and access decisions, with an admin as backup for day-to-day settings." }],
  },
  "platform/dashboard": {
    sections: [
      {
        type: "prose",
        heading: "What engagement data cannot tell you",
        paragraphs: [
          "Tracking counts opens of your card, PDFs and WhatsApp links. It does not tell you why someone opened them, whether they read everything, or whether a forwarded link was opened by a colleague. As general guidance, use engagement as a timing hint and keep your judgement about the relationship in charge.",
          "It also helps to look at trends over a few weeks rather than reacting to every single open. A contact who opens your brochure three times across a fortnight is telling you more than a single open on the day you met.",
        ],
      },
    ],
    faqs: [{ q: "Is engagement tracked for emails sent from my mailbox?", a: "eCard's site describes tracking for opens of your card, PDFs and WhatsApp links; it does not document email open tracking." }],
  },
  "platform/all-features": {
    sections: [
      {
        type: "prose",
        heading: "How to read this list",
        paragraphs: [
          "The features above are taken from what eCard's site describes. Where a capability depends on your plan, that is stated; where the site gives no detail, this page says so rather than guessing. If you are evaluating eCard for a team, start with the base set on Free and use the trial to test the paid extras on real cards from your own events.",
        ],
      },
    ],
    faqs: [{ q: "Is there a desktop version?", a: "eCard is browser-based. The site emphasises phone browsers and does not describe a separate desktop app." }],
  },
  "platform/bring-your-own-ai": {
    sections: [
      {
        type: "prose",
        heading: "Why model choice is worth a few minutes",
        paragraphs: [
          "Visiting cards vary widely: dense text, scripts other than Latin, logos that overlap fields, vertical layouts. Different models handle these differently, and providers change their models over time. Being able to switch means you are not stuck if your current model starts struggling with the cards you collect.",
          "As general guidance, re-run a small comparison when your provider releases a new model or when you notice more corrections than usual during review.",
        ],
      },
    ],
    faqs: [{ q: "Is a custom endpoint supported?", a: "Yes, the FAQ names custom endpoints alongside Azure. eCard's site does not document the configuration format; check in-app settings." }],
  },
  "platform/browser-based": {
    sections: [
      {
        type: "prose",
        heading: "What browser-based does not change",
        paragraphs: [
          "Running in the browser does not remove the need for a decent photo or a connection to reach your AI provider. As general guidance, if signal is weak at a venue, capture photos first and review once you are back on a stable connection. The Telegram bot is also handy here, since chat apps usually queue messages until they can send.",
        ],
      },
    ],
    faqs: [
      { q: "Can I use eCard on a laptop?", a: "eCard is a website, so it opens in a browser. The site focuses on phone browsers." },
      { q: "Is the Telegram bot required?", a: "No. It is an optional way to capture cards alongside the browser." },
    ],
  },
  "platform/data-ownership": {
    sections: [
      {
        type: "prose",
        heading: "Ownership is also about habits",
        paragraphs: [
          "Tools give you control, but habits decide whether you use it. As general guidance: export on a regular schedule if your organisation needs an offline copy, store that copy somewhere access-controlled, and delete stale exports. Review who holds admin rights at least as often as you review who has keys to the office.",
        ],
      },
    ],
    faqs: [{ q: "Does eCard train AI on my contacts?", a: "eCard's site does not address this. Card images are read by the AI provider you choose, so review that provider's terms for your key." }],
  },
  "platform/time-saved": {
    sections: [
      {
        type: "prose",
        heading: "Reading the calculator's result",
        paragraphs: [
          "Treat the figure as a range, not a point. If your inputs are rough guesses, the output is too. The most useful check is to time a handful of real cards in your first week and plug those numbers back into the calculator — you will get a far more honest estimate than any default.",
        ],
      },
    ],
    faqs: [{ q: "Does time saved include follow-ups?", a: "That depends on the inputs you give the calculator. Including first-message time usually gives a more realistic picture." }],
  },
  "platform/follow-up-engine": {
    sections: [
      {
        type: "prose",
        heading: "Why the 5-second window exists",
        paragraphs: [
          "Automatic sending is fast, but fast mistakes are still mistakes. The short preview window gives you a last look at the AI draft — a misread name, the wrong company, a tone that does not fit — before it leaves your own mailbox. As general guidance, take that moment seriously, especially for senior contacts or sensitive conversations.",
          "Because messages go from your own SMTP, replies land in your normal inbox and the thread continues where you already work.",
        ],
      },
    ],
    faqs: [{ q: "Where do replies go?", a: "Because emails send from your own mailbox via SMTP, replies arrive in that mailbox." }],
  },
  "platform/relationship-memory": {
    sections: [
      {
        type: "prose",
        heading: "Why context outlasts contact details",
        paragraphs: [
          "Phone numbers and job titles change; the story of how you met does not. As general guidance, the details that make a later conversation warm are small ones — the event, the shared acquaintance, the problem they mentioned. Capturing those with a voice note takes seconds and pays off months later when you need to reconnect.",
          "Introductions deserve special care. Recording who introduced you lets you thank them, keep them informed and avoid awkward duplication when the same person is introduced twice.",
        ],
      },
    ],
    faqs: [{ q: "Can I find people by where we met?", a: "Yes. Natural-language search supports queries like \"Investors I met in Mumbai last month\"." }],
  },
  "platform/compliance-tools": {
    sections: [
      {
        type: "bullets",
        heading: "Pitfalls to avoid",
        items: [
          "Treating the checklist as a one-off task instead of a regular review",
          "Leaving former staff in the workspace after they leave",
          "Ignoring opt-out requests received by phone or in person — add them to the blacklist too",
          "Keeping exported CSVs on personal devices",
          "Assuming a tool's features make you compliant on their own",
        ],
      },
      {
        type: "prose",
        heading: "Working with your data protection lead",
        paragraphs: [
          "As general guidance, share this page and the security summary with whoever handles data protection in your organisation. They can map eCard's controls — consent, export, deletion, roles, audit log and encryption — to your own policies and decide what additional procedures you need.",
        ],
      },
    ],
    faqs: [{ q: "Can contacts ask to be deleted?", a: "eCard's compliance checklist covers deletion. How you receive and verify requests is up to your own process." }],
  },
  "platform/multi-language": {
    sections: [
      {
        type: "prose",
        heading: "Reading drafts in a language you know less well",
        paragraphs: [
          "If you are less fluent in the chosen language, as general guidance keep the message short, avoid idioms and ask a colleague to check your most important messages. A short, correct message is better than a long one with errors you cannot spot. For contacts who switch between languages, English with a local greeting can be a comfortable middle ground.",
        ],
      },
    ],
    faqs: [{ q: "Are more languages planned?", a: "eCard's site lists English, Hindi and Marathi for WhatsApp and does not announce others." }],
  },
  "platform/for-teams": {
    sections: [
      {
        type: "prose",
        heading: "Keeping a shared contact base healthy",
        paragraphs: [
          "As general guidance, shared contacts stay useful when everyone records context the same way and checks before reaching out. Agree that a quick search comes before any follow-up, so two colleagues do not message the same person. Use duplicate merge regularly, and give managers responsibility for tidying their team's events after each show.",
        ],
      },
    ],
    faqs: [{ q: "Can I limit what temporary staff can do?", a: "Yes, the scan-only guest role is intended for people who only need to scan cards." }],
  },
};

const last: Record<string, { sections: Section[]; faqs?: FAQ[] }> = {
  platform: {
    sections: [],
    faqs: [{ q: "Where should a new user start?", a: "As general guidance, scan a few cards from a recent meeting, connect your own mailbox for intro emails, and add meeting context as you go. Add events, tracking and team roles once the basic habit is in place." }],
  },
  "platform/ai-visiting-card-crm": {
    sections: [],
    faqs: [{ q: "How is this different from a business card scanner app?", a: "A scanner app mainly reads the card. eCard also keeps meeting memory, drafts intro emails and WhatsApp messages, tracks link opens and helps keep data clean with duplicate merge, blacklist and archive." }],
  },
  "platform/paper-to-digital": {
    sections: [
      { type: "callout", tone: "tip", title: "Use events as folders", body: "Creating an event for each pile before you scan means every contact lands already grouped, so a later follow-up to everyone from that show takes one step instead of a manual sort." },
    ],
  },
  "platform/dashboard": {
    sections: [],
    faqs: [{ q: "Can I filter out bots from my numbers?", a: "Short links count clicks with bots filtered out, which helps keep counts closer to real human interest." }],
  },
  "platform/all-features": {
    sections: [
      { type: "callout", tone: "tip", title: "Compare plans next", body: "Once you know which features matter to you, the plan comparison shows the lowest plan that includes them, along with users, storage and monthly scans." },
    ],
  },
  "platform/workspace": {
    sections: [
      { type: "callout", tone: "tip", title: "Plan for growth", body: "If you expect your team to pass 20 users or need webhooks soon, the 14-day Professional trial is a low-risk way to try the larger plan's features with real colleagues before committing. You can cancel any time and keep access until the end of your billing period." },
    ],
  },
  "platform/bring-your-own-ai": {
    sections: [
      { type: "callout", tone: "tip", title: "Review stays the safety net", body: "Whichever model you choose, each field still gets a confidence score and nothing is saved until you review it. Model choice improves accuracy; review keeps mistakes out of your contacts. Spend your attention on the fields flagged with low confidence." },
    ],
  },
  "platform/browser-based": {
    sections: [
      { type: "callout", tone: "info", title: "Recipients benefit too", body: "Your digital business card opens in the recipient's browser as well, so the people you meet can view your details and use Save-to-contacts without installing anything either. Share it by QR code at the meeting or send the short link over WhatsApp or email afterwards." },
    ],
  },
  "platform/data-ownership": {
    sections: [
      { type: "callout", tone: "tip", title: "Start with export", body: "A good first check of any contact tool is whether you can get everything back out. In eCard, bulk and CSV export are part of every plan, including Free." },
    ],
    faqs: [{ q: "Can I sync my contacts elsewhere?", a: "Google Contacts sync is available on Starter and above, and webhooks send signed events for each new contact on Professional and above." }],
  },
  "platform/time-saved": {
    sections: [
      { type: "callout", tone: "tip", title: "Count follow-ups that never happened", body: "The biggest gain is often cards that previously got no follow-up at all. Note how many of last month's cards you never contacted; that number is often more telling than minutes saved. A relationship that never got a first message is the most expensive outcome of all, and the calculator cannot measure it." },
    ],
    faqs: [{ q: "Does reviewing scans take time too?", a: "Yes. Nothing is saved until you review it, so include a little review time per card in your estimate." }],
  },
  "platform/follow-up-engine": {
    sections: [
      { type: "callout", tone: "tip", title: "Connect your mailbox first", body: "Intro emails need your SMTP details. Setting this up before your next event means the first follow-ups can go out the same day, from the address your contacts already expect." },
    ],
    faqs: [{ q: "Does eCard write the WhatsApp message for me?", a: "Yes. AI writes the message in English, Hindi or Marathi and opens it in WhatsApp in one tap." }],
  },
  "platform/relationship-memory": {
    sections: [
      { type: "callout", tone: "tip", title: "A simple voice-note formula", body: "As general guidance: who they are, what they need, what you promised, and when to follow up. Four short points recorded while walking away from the conversation are usually enough. Sample: \"Priya, Pune developer, needs brochure printing quotes, promised samples by Friday, call next Tuesday.\" (fictional) That one sentence becomes a searchable summary you can rely on later." },
    ],
    faqs: [{ q: "Does the AI summary replace my notes?", a: "It summarises the context you capture and makes it searchable. The quality of the summary depends on what you record." }],
  },
  "platform/compliance-tools": {
    sections: [
      { type: "callout", tone: "info", title: "Security controls in one place", body: "For a fuller list of eCard's security features — 2FA, recovery codes, trusted devices, login alerts, encrypted secrets, audit log and signed webhooks — see Security at a Glance. Reviewing that list alongside the compliance checklist gives a complete picture of the controls available in your workspace, and makes it easier to explain to a client or auditor how contact data is protected and who can reach it. eCard's site does not claim any formal certification, so rely on your own assessment." },
    ],
    faqs: [{ q: "Are passwords for my mailbox protected?", a: "SMTP passwords, like API keys, are encrypted with AES-256-GCM." }],
  },
  "platform/multi-language": {
    sections: [
      { type: "callout", tone: "tip", title: "Note the preference once", body: "When someone tells you which language they prefer, add it to their meeting context. Next time, you or a colleague will pick the right language without having to guess, even months after the first meeting, and the relationship keeps its familiar tone." },
    ],
    faqs: [{ q: "Can intro emails be written in Hindi or Marathi?", a: "eCard's site states the three languages for WhatsApp messages. It does not document language options for intro emails; check in-app." }],
  },
  "platform/for-teams": {
    sections: [
      { type: "callout", tone: "tip", title: "Write down your conventions", body: "A one-page note covering event naming, required context fields and who follows up with whom saves hours of clean-up later. Share it with every new member when you invite them, and revisit it after each major event, when gaps in the conventions tend to show up in duplicate or poorly tagged contacts. Keep it short enough that people actually read it." },
    ],
    faqs: [{ q: "Is there an activity log for teams?", a: "Yes, workspaces have an audit log that admins can review." }],
  },
};

export const pages: PageDef[] = base.map((p) => ({
  ...p,
  sections: [...p.sections, ...(extra[p.slug]?.sections ?? []), ...(more[p.slug]?.sections ?? []), ...(last[p.slug]?.sections ?? [])],
  faqs: [...(p.faqs ?? []), ...(extra[p.slug]?.faqs ?? []), ...(more[p.slug]?.faqs ?? []), ...(last[p.slug]?.faqs ?? [])],
}));
