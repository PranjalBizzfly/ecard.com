import type { PageDef, Section, FAQ } from "../types";

const base: PageDef[] = [
  {
    slug: "product/whats-new-telegram",
    category: "more",
    title: "New: Telegram Bot",
    seoTitle: "New in eCard: Scan Cards with the Telegram Bot",
    description: "eCard's Telegram bot saves a contact from a card photo, with Open and Send buttons in the chat. Link it with a one-time code from Settings → Telegram.",
    h1: "Snap a card in Telegram — it's saved",
    eyebrow: "What's new",
    intro: "The eCard Telegram bot lets you capture cards from a chat app you already use. Send a photo and the contact is saved, with Open and Send buttons right in the chat.",
    variant: "feature",
    visual: "telegram",
    icon: "send",
    sections: [
      {
        type: "steps",
        heading: "Set it up",
        steps: [
          { title: "Open settings", body: "In eCard, go to Settings → Telegram." },
          { title: "Get a code", body: "Copy the one-time code shown there." },
          { title: "Link the bot", body: "Send the code to the eCard bot in Telegram." },
          { title: "Send a card", body: "Photograph a visiting card and send it to the bot." },
        ],
      },
      {
        type: "cards",
        heading: "In the chat",
        cards: [
          { title: "Open", body: "Jump to the saved contact in eCard.", icon: "eye" },
          { title: "Send", body: "Start the follow-up from the chat.", icon: "send" },
        ],
      },
      {
        type: "prose",
        heading: "Why Telegram",
        paragraphs: ["At a busy event, opening a chat and sending a photo is often the quickest thing you can do between conversations. The bot is included on every plan as part of the base feature set."],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not documented",
        body: "eCard's site does not document batch uploads through the bot; check in-app behaviour.",
      },
    ],
    faqs: [
      { q: "Which plans include the Telegram bot?", a: "Every plan, including Free." },
      { q: "Where do I find the linking code?", a: "Settings → Telegram." },
    ],
    related: ["features/telegram-bot", "resources/guides/connecting-telegram", "features/telegram-bot/snap-a-card", "help/telegram"],
    source: "verified",
  },
  {
    slug: "product/sign-up-flow",
    category: "more",
    title: "Sign-Up Flow",
    seoTitle: "How eCard Sign-Up Works",
    description: "What to expect when you sign up for eCard: create an account, start on Free or a 14-day Professional trial with no card needed, then scan your first card.",
    h1: "Signing up for eCard, step by step",
    eyebrow: "Sign-up",
    intro: "Signing up takes a few minutes and needs no payment card. Here is what to expect.",
    variant: "guide",
    visual: "card",
    icon: "check",
    sections: [
      {
        type: "steps",
        heading: "The flow",
        steps: [
          { title: "Go to sign-up", body: "Visit ecard.gg/sign-up." },
          { title: "Create your account", body: "Enter your details to create your login." },
          { title: "Pick a plan", body: "Start free, or choose a paid plan. New workspaces get a 14-day Professional trial." },
          { title: "Start scanning", body: "Scan your first card in your phone browser." },
        ],
      },
      {
        type: "bullets",
        heading: "Trust line",
        items: ["50 free scans", "No card required", "14-day Pro trial"],
      },
      {
        type: "prose",
        heading: "Already have an account?",
        paragraphs: ["Sign in at ecard.gg/sign-in. If you have forgotten your password, use ecard.gg/forgot-password."],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Secure it on day one",
        body: "After signing up, turn on 2FA with an authenticator app and store your recovery codes somewhere safe.",
      },
    ],
    faqs: [
      { q: "Do I need a card to sign up?", a: "No card is required for Free or the 14-day Professional trial." },
      { q: "Where do I sign in?", a: "ecard.gg/sign-in." },
    ],
    related: ["get-started", "product/plan-picker", "product/workspace-setup", "help/account-and-sign-in"],
    source: "verified",
  },
  {
    slug: "product/plan-picker",
    category: "more",
    title: "Choosing a Plan at Sign-Up",
    seoTitle: "Which eCard Plan Should You Pick?",
    description: "Pick the right eCard plan at sign-up: compare Free, Starter, Professional, Business and Enterprise by users, storage, monthly scans and extra features.",
    h1: "Pick the plan that fits how you network",
    eyebrow: "Plans",
    intro: "Every plan includes the core features. The differences are users, storage, scans and a few extras.",
    variant: "reference",
    visual: "pricing",
    icon: "rupee",
    sections: [
      {
        type: "table",
        heading: "Plans at a glance (monthly, INR)",
        headers: ["Plan", "Price", "Users", "Scans / month", "Adds"],
        rows: [
          ["Free", "₹0", "5", "50", "—"],
          ["Starter", "₹299", "20", "1,000", "Google Contacts sync, Calendar & Meet booking"],
          ["Professional", "₹999", "100", "5,000", "+ Webhooks"],
          ["Business", "₹2,999", "Unlimited", "Unlimited", "+ White label & custom domain"],
          ["Enterprise", "Custom", "Unlimited", "Unlimited", "Contact sales"],
        ],
      },
      {
        type: "split",
        heading: "Quick guide",
        body: ["Choose by the number of cards you scan and the tools you need to connect."],
        points: [
          "Trying it alone: Free",
          "Small team syncing Google Contacts: Starter",
          "Sending contacts to other systems: Professional",
          "Your own branding and domain: Business",
        ],
      },
      {
        type: "bullets",
        heading: "Billing notes",
        items: [
          "Prices in INR; local currency shown at checkout for supported countries; GST where applicable",
          "Yearly billing saves ~2 months; exact totals at checkout",
          "India: UPI, net banking, wallets, EMI or cards; international: card",
          "Cancel any time and keep access until the end of the period",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Not sure?",
        body: "The 14-day Professional trial needs no card, so you can decide after using it.",
      },
    ],
    faqs: [
      { q: "Which plan is most popular?", a: "Professional is marked as popular on the pricing page." },
      { q: "Is there a yearly price?", a: "Yearly billing saves about two months; exact yearly totals are shown at checkout." },
    ],
    related: ["pricing", "pricing/compare-plans", "pricing/free-trial", "product/feature-availability"],
    source: "verified",
  },
  {
    slug: "product/workspace-setup",
    category: "more",
    title: "Workspace Setup",
    seoTitle: "Set Up Your eCard Workspace",
    description: "Set up a new eCard workspace: connect your SMTP mailbox, add your AI key, link Telegram, secure accounts with 2FA and invite your team with roles.",
    h1: "Set up your workspace the right way",
    eyebrow: "Setup",
    intro: "A few settings early on make every later scan and follow-up smoother. Work through them in this order.",
    variant: "guide",
    visual: "team",
    icon: "settings",
    sections: [
      {
        type: "steps",
        heading: "Recommended order",
        steps: [
          { title: "Secure your account", body: "Turn on 2FA and save recovery codes." },
          { title: "Choose an AI model", body: "Pick Claude, OpenAI, Gemini, DeepSeek or Grok and add your own key if you want." },
          { title: "Connect email", body: "Add SMTP details for your mailbox so intros send from your address." },
          { title: "Link Telegram", body: "Use the one-time code from Settings → Telegram." },
          { title: "Create your digital card", body: "Pick a template and personalise it." },
          { title: "Invite people", body: "Assign each person a role: admin, manager, member or scan-only guest." },
        ],
      },
      {
        type: "cards",
        heading: "Optional, by plan",
        cards: [
          { title: "Google Contacts sync", body: "Starter and above.", icon: "users" },
          { title: "Webhooks", body: "Professional and above.", icon: "webhook" },
          { title: "White label", body: "Business and Enterprise.", icon: "palette" },
        ],
      },
      {
        type: "prose",
        heading: "SMTP tips",
        paragraphs: ["As general guidance, many mailbox providers require an app password rather than your normal password for SMTP when 2FA is on. Check your provider's help pages for the server, port and authentication details."],
      },
      {
        type: "callout",
        tone: "note",
        title: "Secrets are encrypted",
        body: "API keys and SMTP passwords are encrypted with AES-256-GCM.",
      },
    ],
    faqs: [
      { q: "Do I have to add my own AI key?", a: "eCard supports bringing your own key; check in-app settings for the options on your plan." },
    ],
    related: ["platform/workspace", "resources/guides/setting-up-smtp", "resources/guides/inviting-your-team", "resources/guides/enabling-2fa"],
    source: "mixed",
  },
  {
    slug: "product/account-recovery",
    category: "more",
    title: "Account Recovery",
    seoTitle: "Recover Your eCard Account",
    description: "Locked out of eCard? Reset your password at the forgot-password page, use recovery codes if you lose your 2FA device, and keep trusted devices up to date.",
    h1: "Getting back into your account",
    eyebrow: "Recovery",
    intro: "Most lock-outs come down to a forgotten password or a lost 2FA device. Here is how to handle each.",
    variant: "support",
    visual: "security",
    icon: "key",
    sections: [
      {
        type: "steps",
        heading: "Forgot your password",
        steps: [
          { title: "Open the reset page", body: "Go to ecard.gg/forgot-password." },
          { title: "Enter your email", body: "Use the address you signed up with." },
          { title: "Follow the email", body: "Check your inbox, including spam, for the reset message." },
        ],
      },
      {
        type: "prose",
        heading: "Lost your 2FA device",
        paragraphs: [
          "eCard supports recovery codes for two-factor authentication. If you lose your phone, sign in with one of your saved recovery codes, then set up 2FA again on your new device.",
          "As general guidance, store recovery codes in a password manager or printed in a safe place — not on the same phone as your authenticator app.",
        ],
      },
      {
        type: "bullets",
        heading: "Prevent future lock-outs",
        items: ["Save recovery codes when you enable 2FA", "Review trusted devices", "Pay attention to login alerts", "Keep your sign-up email accessible"],
      },
      {
        type: "callout",
        tone: "info",
        title: "Still stuck?",
        body: "See the contact support page in the help centre.",
      },
    ],
    faqs: [
      { q: "Where do I reset my password?", a: "ecard.gg/forgot-password." },
      { q: "What if I lose my authenticator?", a: "Use one of your recovery codes to sign in." },
    ],
    related: ["help/password-reset", "features/team-security/recovery-codes", "help/account-and-sign-in", "help/contact-support"],
    source: "mixed",
  },
  {
    slug: "product/digital-card-example",
    category: "more",
    title: "Digital Card Example",
    seoTitle: "Example eCard Digital Business Card",
    description: "See a sample eCard digital business card with template, QR code, Save-to-contacts button and a tracked short link such as /c/rahul. No app needed.",
    h1: "What a digital business card looks like",
    eyebrow: "Example",
    intro: "This example uses sample data to show the parts of an eCard digital business card.",
    variant: "feature",
    visual: "card",
    icon: "card",
    sections: [
      {
        type: "table",
        heading: "Anatomy of a sample card",
        intro: "Sample: Rahul Mehta, Sales Lead — fictional.",
        headers: ["Element", "Sample", "Purpose"],
        rows: [
          ["Template", "Premium template", "Look professional"],
          ["Short link", "/c/rahul", "Easy to share; clicks counted with bots filtered out"],
          ["QR code", "Printed on a badge", "Scan to open the card"],
          ["Save-to-contacts", "Button", "Recipient saves your details"],
        ],
      },
      {
        type: "cards",
        heading: "Ways to share",
        cards: [
          { title: "QR", body: "On a badge, booth or slide.", icon: "qr" },
          { title: "WhatsApp", body: "Send the short link in chat.", icon: "message" },
          { title: "Email", body: "Include it in a signature or intro.", icon: "mail" },
        ],
      },
      {
        type: "prose",
        heading: "No app for anyone",
        paragraphs: ["Neither you nor the recipient needs an app. The card opens in a browser, and link tracking shows when it was opened."],
      },
      {
        type: "callout",
        tone: "info",
        title: "Your own branding",
        body: "Business and Enterprise plans add white label with your logo, colours and custom domain.",
      },
    ],
    faqs: [
      { q: "Is the digital card on the Free plan?", a: "Yes, the digital business card is in the base set on every plan." },
    ],
    related: ["features/digital-business-card", "features/digital-business-card/templates", "features/digital-business-card/short-links", "resources/guides/creating-your-digital-card"],
    source: "verified",
  },
  {
    slug: "product/sample-personas",
    category: "more",
    title: "Sample Scan Personas",
    seoTitle: "eCard Sample Scan Personas Explained",
    description: "Meet the three fictional personas in eCard's sample scan demo — Realtor, Doctor and Startup founder — and what each demonstrates about card extraction.",
    h1: "Three sample cards, three kinds of layout",
    eyebrow: "Sample personas",
    intro: "The sample scan demo uses three fictional personas. Each represents a common style of visiting card.",
    variant: "reference",
    visual: "extract",
    icon: "users",
    sections: [
      {
        type: "cards",
        heading: "The personas",
        cards: [
          { title: "Realtor (sample)", body: "Typical of property cards: name, agency, mobile, office address — useful for site-visit follow-ups.", icon: "building" },
          { title: "Doctor (sample)", body: "Qualifications after the name, clinic address and timings — more fields to check.", icon: "briefcase" },
          { title: "Startup founder (sample)", body: "Minimal design, website and social handles — less text, more links.", icon: "sparkles" },
        ],
      },
      {
        type: "bullets",
        heading: "What to watch in each",
        items: [
          "Confidence scores on phone numbers and email addresses",
          "Addresses checked against Google Maps",
          "Titles and qualifications landing in the right field",
        ],
      },
      {
        type: "prose",
        heading: "Using the demo well",
        paragraphs: ["The personas are fictional and exist only to show the review step. Once you have seen how review works, try a handful of your own cards on the Free plan to judge accuracy on the layouts you actually collect."],
      },
      {
        type: "callout",
        tone: "note",
        title: "Sample data",
        body: "No persona represents a real person or customer.",
      },
    ],
    faqs: [
      { q: "Can I add my own sample persona?", a: "eCard's site does not document custom demo personas. Use the Free plan's 50 scans to try your own cards." },
    ],
    related: ["sample-scan", "features/ai-card-scanning/sample-scan-demo", "use-cases/real-estate", "use-cases/doctors"],
    source: "mixed",
  },
  {
    slug: "product/at-a-glance",
    category: "more",
    title: "eCard at a Glance",
    seoTitle: "eCard at a Glance: Key Facts",
    description: "Key eCard facts on one page: 7 AI models, 3 WhatsApp languages, 5-second intro emails, 14-day trial, 256-bit key encryption and ₹0 to start.",
    h1: "eCard in six numbers",
    eyebrow: "At a glance",
    intro: "A one-page summary for anyone who needs the essentials quickly.",
    variant: "reference",
    visual: "dashboard",
    icon: "eye",
    sections: [
      {
        type: "table",
        heading: "Key facts",
        headers: ["Fact", "Detail"],
        rows: [
          ["7 AI models", "Claude, OpenAI, Gemini, DeepSeek, Grok, plus Azure and custom endpoints"],
          ["3 WhatsApp languages", "English, Hindi, Marathi"],
          ["5 seconds", "Preview window before an intro email auto-sends"],
          ["14-day trial", "Professional, no card needed"],
          ["256-bit key encryption", "AES-256-GCM for API keys and SMTP passwords"],
          ["₹0 to start", "Free plan with 50 scans a month"],
        ],
      },
      {
        type: "bullets",
        heading: "In one sentence each",
        items: [
          "Scan: AI reads cards; you review before save",
          "Remember: meeting memory with voice notes",
          "Follow up: email from your SMTP, WhatsApp in one tap",
          "Share: digital card with QR and tracked links",
          "Govern: roles, 2FA, audit log",
        ],
      },
      {
        type: "prose",
        heading: "Where it runs",
        paragraphs: ["Any phone browser, with no app to install, plus a Telegram bot for scanning."],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Next step",
        body: "Read How It Works, or compare plans on the pricing page.",
      },
    ],
    faqs: [
      { q: "What does ₹0 to start include?", a: "The Free plan: 5 users, 1 GB storage, 50 scans a month and the base feature set." },
    ],
    related: ["how-it-works", "platform/all-features", "pricing", "why-ecard"],
    source: "verified",
  },
  {
    slug: "product/feature-availability",
    category: "more",
    title: "Feature Availability by Plan",
    seoTitle: "eCard Feature Availability by Plan",
    description: "Which eCard features are on which plan: base features on all plans, Google sync and booking from Starter, webhooks from Professional, white label on Business.",
    h1: "Which features come with which plan",
    eyebrow: "Availability",
    intro: "Most of eCard is on every plan. This table shows where the extras begin.",
    variant: "reference",
    visual: "pricing",
    icon: "layers",
    sections: [
      {
        type: "table",
        heading: "Feature matrix",
        headers: ["Feature", "Free", "Starter", "Professional", "Business", "Enterprise"],
        rows: [
          ["Base feature set", "Yes", "Yes", "Yes", "Yes", "Yes"],
          ["Google Contacts sync", "—", "Yes", "Yes", "Yes", "Yes"],
          ["Google Calendar & Meet booking", "—", "Yes", "Yes", "Yes", "Yes"],
          ["Webhooks", "—", "—", "Yes", "Yes", "Yes"],
          ["White label & custom domain", "—", "—", "—", "Yes", "Yes"],
          ["Users", "5", "20", "100", "Unlimited", "Unlimited"],
          ["Scans / month", "50", "1,000", "5,000", "Unlimited", "Unlimited"],
        ],
      },
      {
        type: "bullets",
        heading: "The base feature set",
        items: ["AI card scanning", "Contacts, tags & events", "Bulk import & export", "Email outreach from your own mailbox", "WhatsApp messages", "Digital business card", "Telegram scanning bot"],
      },
      {
        type: "callout",
        tone: "note",
        title: "Features not listed by plan",
        body: "The pricing page does not break down every feature, such as roles or audit logs, by plan. Check in-app or contact sales for specifics.",
      },
      {
        type: "prose",
        heading: "Try the top features first",
        paragraphs: ["The 14-day Professional trial unlocks webhooks and Google integrations so you can test them before deciding."],
      },
    ],
    faqs: [
      { q: "Is Telegram on the Free plan?", a: "Yes, the Telegram bot is in the base set on every plan." },
      { q: "Where do webhooks start?", a: "Professional." },
    ],
    related: ["pricing/compare-plans", "product/plan-picker", "platform/all-features", "pricing/faq"],
    source: "verified",
  },
  {
    slug: "product/security-at-a-glance",
    category: "more",
    title: "Security at a Glance",
    seoTitle: "eCard Security at a Glance",
    description: "eCard security summary: 2FA with authenticator and recovery codes, trusted devices, login alerts, AES-256-GCM encrypted secrets, audit logs and five roles.",
    h1: "How eCard protects your workspace",
    eyebrow: "Security",
    intro: "A summary of the security controls eCard's site describes, for anyone reviewing it for their team.",
    variant: "reference",
    visual: "security",
    icon: "shield",
    sections: [
      {
        type: "cards",
        heading: "Controls",
        cards: [
          { title: "Two-factor authentication", body: "Authenticator codes, recovery codes and trusted devices.", icon: "key" },
          { title: "Login alerts", body: "Be notified of sign-ins.", icon: "bell" },
          { title: "Encrypted secrets", body: "API keys and SMTP passwords encrypted with AES-256-GCM.", icon: "lock" },
          { title: "Audit log", body: "Workspace activity history.", icon: "file" },
          { title: "Roles", body: "Owner, admin, manager, member, scan-only guest.", icon: "users" },
          { title: "Signed webhooks", body: "Signed events for each new contact.", icon: "webhook" },
        ],
      },
      {
        type: "prose",
        heading: "What AES-256-GCM means",
        paragraphs: ["In general terms, AES-256-GCM is a widely used symmetric encryption mode that both encrypts data and detects tampering. It is the \"256-bit key encryption\" mentioned on eCard's homepage."],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not stated on the site",
        body: "eCard's site does not state certifications, uptime figures or hosting locations.",
      },
      {
        type: "bullets",
        heading: "Your side of security",
        items: ["Require 2FA for everyone", "Use the least-privileged role", "Remove members who leave", "Rotate AI keys and SMTP passwords periodically"],
      },
    ],
    faqs: [
      { q: "Does eCard support 2FA?", a: "Yes, with authenticator codes, recovery codes and trusted devices." },
      { q: "Are webhooks signed?", a: "Yes, webhooks send signed events for each new contact." },
    ],
    related: ["features/team-security", "features/team-security/security-best-practices", "platform/compliance-tools", "features/team-security/audit-logs"],
    source: "mixed",
  },
];

const extra: Record<string, { sections: Section[]; faqs?: FAQ[] }> = {
  "product/whats-new-telegram": {
    sections: [
      {
        type: "table",
        heading: "Telegram bot or phone browser?",
        intro: "Both capture cards into the same workspace. Pick whichever fits the moment.",
        headers: ["Situation", "Better fit", "Why"],
        rows: [
          ["Between conversations at a busy booth", "Telegram bot", "Sending a photo in a chat you already have open takes seconds"],
          ["Quiet desk time after an event", "Phone browser", "Easier to review every field and add meeting memory in one go"],
          ["You want to send an intro straight away", "Either", "The bot shows a Send button; the browser shows the email preview"],
          ["Someone else on the team is scanning", "Either", "Each person links their own Telegram with their own one-time code"],
        ],
      },
      {
        type: "split",
        heading: "Sample: a five-minute gap at an expo",
        body: [
          "Sample scenario, fictional: Anil collects a card from a distributor at a trade fair, opens Telegram, photographs the card and sends it to the bot. The contact is saved and the chat shows Open and Send buttons. He taps Send to start the follow-up, then goes back to the booth. That evening he opens eCard in the browser to add where they met and a voice note.",
        ],
        points: ["Photo sent from the aisle", "Contact saved in the chat", "Follow-up started with Send", "Context added later in the browser"],
      },
      {
        type: "bullets",
        heading: "Common pitfalls",
        items: [
          "Sharing your one-time code with a colleague — each person should link their own account",
          "Blurry photos taken at an angle under harsh booth lighting; hold the card flat and fill the frame",
          "Forgetting to add meeting context later, which makes the eventual follow-up generic",
          "Assuming the bot replaces review — check the saved fields when you are back at a screen",
        ],
      },
    ],
    faqs: [
      { q: "Does the Telegram bot count toward my scan limit?", a: "eCard's site does not say the bot is counted differently, so plan as if each card scanned through the bot uses a scan from your plan's monthly allowance." },
      { q: "Can my whole team use the bot?", a: "The bot is part of every plan. Each person links it from their own Settings → Telegram with their own one-time code." },
    ],
  },
  "product/sign-up-flow": {
    sections: [
      {
        type: "bullets",
        heading: "Have these ready before you start",
        intro: "Sign-up itself is quick. These make the first session productive:",
        items: [
          "A handful of real visiting cards to test with",
          "The SMTP details or app password for the mailbox you want intros to come from",
          "An authenticator app on your phone for 2FA",
          "An idea of who else needs access, and what role each person should have",
          "If you plan to bring your own AI key, access to your provider account",
        ],
      },
      {
        type: "table",
        heading: "Free plan or trial on day one?",
        headers: ["If you…", "Start with", "Reason"],
        rows: [
          ["Want to try a few cards alone", "Free", "50 scans a month and 5 users at ₹0"],
          ["Want to test webhooks or Google Contacts sync", "14-day Professional trial", "Those extras are not on Free"],
          ["Already know you need white label", "Business", "White label & custom domain start on Business"],
          ["Need procurement approval", "Contact sales", "Enterprise pricing is custom"],
        ],
      },
      {
        type: "steps",
        heading: "Your first 15 minutes after sign-up",
        steps: [
          { title: "Scan three cards", body: "Pick different layouts so you see how confidence scores vary." },
          { title: "Review carefully", body: "Correct any low-confidence fields; nothing is saved until you do." },
          { title: "Send one intro", body: "Preview the AI draft and let it send, or cancel to see how the 5-second window works." },
        ],
      },
    ],
    faqs: [
      { q: "What happens when the 14-day trial ends?", a: "eCard's site does not describe the exact post-trial behaviour. Choose a plan before the trial ends if you want to keep paid features." },
      { q: "Can I sign up from my phone?", a: "Yes. eCard works in any phone browser, so you can sign up and scan without installing anything." },
    ],
  },
  "product/plan-picker": {
    sections: [
      {
        type: "steps",
        heading: "Three questions that decide your plan",
        steps: [
          { title: "How many cards a month?", body: "Under 50: Free can work. Up to 1,000: Starter. Up to 5,000: Professional. More than that, or unpredictable spikes: Business." },
          { title: "How many people scan or follow up?", body: "Free allows 5 users, Starter 20, Professional 100, Business and Enterprise unlimited." },
          { title: "What must eCard connect to?", body: "Google Contacts or Calendar & Meet booking need Starter. Webhooks need Professional. Your own branding and domain need Business." },
        ],
      },
      {
        type: "split",
        heading: "Sample: sizing a small agency",
        body: [
          "Sample, fictional: an eight-person agency attends two expos a quarter and collects roughly 600 cards at each. That is up to 1,200 cards in a busy month, which is above Starter's 1,000 scans, and they want new contacts pushed to another system by webhook. Professional at ₹999 a month covers both needs.",
        ],
        points: ["8 users: fits Starter or above", "1,200 scans in peak months: Professional", "Webhooks needed: Professional", "No custom domain needed: Business not required"],
      },
      {
        type: "bullets",
        heading: "Mistakes to avoid",
        items: [
          "Sizing for an average month when your volume peaks around events",
          "Forgetting temporary booth staff when counting users",
          "Paying for white label before you have a custom domain ready",
          "Comparing yearly costs without checking the exact totals at checkout",
        ],
      },
    ],
    faqs: [
      { q: "Can I change plans later?", a: "eCard's site does not detail plan changes mid-cycle. You can cancel any time and keep access until the end of the period; check checkout and in-app billing for upgrade options." },
      { q: "Do all plans include WhatsApp and email outreach?", a: "Yes. Email outreach from your own mailbox and WhatsApp messages are in the base set on every plan." },
    ],
  },
  "product/workspace-setup": {
    sections: [
      {
        type: "table",
        heading: "Who should do each setup task",
        headers: ["Task", "Suggested role", "Note"],
        rows: [
          ["Billing and plan", "Owner", "The account holder"],
          ["AI model and keys", "Owner or admin", "Keys are encrypted with AES-256-GCM"],
          ["Team invitations and roles", "Admin", "Use the least access each person needs"],
          ["Personal SMTP and Telegram", "Each member", "Intros send from your own mailbox"],
          ["Event setup before a show", "Manager", "Create the event so cards are grouped from the first scan"],
        ],
      },
      {
        type: "bullets",
        heading: "Setup checklist",
        items: [
          "2FA on for every owner and admin",
          "Recovery codes stored outside the phone",
          "AI provider chosen and tested on five real cards",
          "Test intro email received in an outside inbox",
          "Telegram linked for anyone who scans at events",
          "Digital card created and opened on another phone",
          "Roles reviewed after the first invitations",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Sample naming convention",
        body: "Sample: name events like \"2026-03 Pune Realty Expo\" so contacts sort by date and stay easy to find in search later.",
      },
    ],
    faqs: [
      { q: "Can each team member send from their own email address?", a: "Intro emails send from your own SMTP. eCard's site does not detail per-member SMTP configuration, so check in-app settings." },
      { q: "Which plan do I need for Google Contacts sync?", a: "Starter or above." },
    ],
  },
  "product/account-recovery": {
    sections: [
      {
        type: "table",
        heading: "Which recovery path fits your problem",
        headers: ["Problem", "What to try"],
        rows: [
          ["Forgot password", "Reset at ecard.gg/forgot-password"],
          ["Reset email not arriving", "Check spam and confirm you used your sign-up address"],
          ["Lost or replaced phone with authenticator", "Sign in with a saved recovery code, then set up 2FA again"],
          ["No recovery codes left", "Contact support via the help centre"],
          ["Unexpected login alert", "Change your password and review trusted devices"],
        ],
      },
      {
        type: "steps",
        heading: "After you get back in",
        steps: [
          { title: "Re-enrol 2FA", body: "Set up the authenticator again on your current phone." },
          { title: "Save fresh recovery codes", body: "Treat used codes as gone and store the new set safely." },
          { title: "Review trusted devices", body: "Remove anything you no longer use or do not recognise." },
          { title: "Rotate secrets if worried", body: "If you suspect misuse, consider changing your SMTP password and AI keys at the provider, then update them in eCard." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "For team owners",
        body: "As general guidance, make sure more than one trusted person holds an admin role so a single lost phone does not block workspace administration.",
      },
    ],
    faqs: [
      { q: "Will I lose my contacts if I am locked out?", a: "Being locked out is an access problem; recover access through the password reset or your recovery codes." },
      { q: "What do login alerts tell me?", a: "eCard sends login alerts so you can spot sign-ins you did not make and act quickly." },
    ],
  },
  "product/digital-card-example": {
    sections: [
      {
        type: "steps",
        heading: "What the recipient experiences",
        intro: "Sample walk-through from the other side of the handshake.",
        steps: [
          { title: "Scan or tap", body: "They scan your QR code or tap a short link such as /c/rahul." },
          { title: "View", body: "Your card opens in their phone browser — no app needed." },
          { title: "Save", body: "Save-to-contacts adds your details to their phone." },
          { title: "You see the open", body: "Link tracking shows the card was opened, with bots filtered out of click counts." },
        ],
      },
      {
        type: "bullets",
        heading: "Sample: what to put on the card",
        intro: "Sample content for a fictional sales lead:",
        items: [
          "Name and title: Rahul Mehta, Sales Lead (sample)",
          "One mobile number you actually answer",
          "Work email that matches the mailbox you send intros from",
          "Company website",
          "A one-line description of what you help clients with",
        ],
      },
      {
        type: "table",
        heading: "Paper card vs digital card",
        headers: ["", "Paper card", "Digital card"],
        rows: [
          ["Update details", "Reprint", "Edit once"],
          ["Know it was viewed", "No", "Open tracking"],
          ["Recipient saves you", "Types it in", "Save-to-contacts"],
          ["Share remotely", "Photo of a card", "Short link or QR"],
        ],
      },
    ],
    faqs: [
      { q: "Can I share PDFs alongside my card?", a: "eCard tracks opens of PDFs you share, as well as your card and WhatsApp links." },
      { q: "Can I use my own domain for the card link?", a: "Custom domain is part of white label on Business and Enterprise." },
    ],
  },
  "product/sample-personas": {
    sections: [
      {
        type: "table",
        heading: "Fields to check per persona",
        intro: "After running a persona in the demo above, compare what you see with these sample checks.",
        headers: ["Persona (sample)", "Tricky fields", "What to confirm"],
        rows: [
          ["Realtor", "Agency vs personal name, multiple phones", "The mobile you would WhatsApp is the primary number"],
          ["Doctor", "Qualifications, clinic timings", "Degrees sit with the name or title, not the address"],
          ["Startup founder", "Website, handles, short titles", "Links are complete and the company name is separate from the product"],
        ],
      },
      {
        type: "split",
        heading: "Match a persona to your own cards",
        body: [
          "Most real-world cards resemble one of the three. If you mostly collect property or field-sales cards, focus on the Realtor result. If your contacts are professionals with credentials, the Doctor persona is closest. If you meet founders and tech teams, watch the Startup founder result.",
        ],
        points: ["Dense, many-number cards: Realtor", "Credential-heavy cards: Doctor", "Minimal, link-heavy cards: Startup founder"],
      },
      {
        type: "steps",
        heading: "From demo to your own test",
        steps: [
          { title: "Pick five real cards", body: "Choose ones that resemble the persona closest to your work, plus one awkward layout." },
          { title: "Scan on the Free plan", body: "50 scans a month is plenty for a fair test." },
          { title: "Note corrections", body: "Count how many fields you had to fix and which ones." },
          { title: "Try another model if needed", body: "eCard lets you choose between several AI providers, so compare if one struggles with your layouts." },
        ],
      },
    ],
    faqs: [
      { q: "Why are there only three personas?", a: "The demo uses three fictional personas — Realtor, Doctor and Startup founder — to show common card styles. Your own cards are the best test." },
      { q: "Does the demo use my AI key?", a: "eCard's site does not describe how the demo is processed. Your own key applies to scans in your workspace." },
    ],
  },
  "product/at-a-glance": {
    sections: [
      {
        type: "cards",
        heading: "Who should read what next",
        cards: [
          { title: "Solo professional", body: "Start with the Free plan and the Telegram bot for scanning on the move.", icon: "smartphone" },
          { title: "Team lead", body: "Look at roles, scan-only guests and the plan comparison for user limits.", icon: "users" },
          { title: "IT or security reviewer", body: "Read Security at a Glance for 2FA, encryption and the audit log.", icon: "shield" },
          { title: "Systems owner", body: "Check webhooks and API, with signed events for each new contact; webhooks start on Professional.", icon: "webhook" },
        ],
      },
      {
        type: "table",
        heading: "What eCard is — and isn't",
        headers: ["eCard is", "eCard is not"],
        rows: [
          ["A visiting-card CRM for scanning, memory and follow-up", "A native mobile app"],
          ["Bring-your-own AI key and mailbox", "A shared bulk-email sender"],
          ["Priced in INR, monthly, from ₹0", "Published with yearly prices on the site"],
          ["Review-before-save by design", "Fully automatic without your check"],
        ],
      },
      {
        type: "bullets",
        heading: "Sample one-line pitch for a colleague",
        items: [
          "Sample: \"It reads the cards we collect, remembers where we met, and drafts the follow-up from our own email — and it's free to try.\"",
          "Sample: \"It's like a card scanner, but the follow-up actually gets sent.\"",
        ],
      },
    ],
    faqs: [
      { q: "Which AI models are included in the seven?", a: "Claude, OpenAI, Gemini, DeepSeek and Grok are named on the homepage, and the FAQ adds Azure and custom endpoints." },
      { q: "Is there a trial of paid features?", a: "Yes, a 14-day Professional trial with no card needed." },
    ],
  },
  "product/feature-availability": {
    sections: [
      {
        type: "split",
        heading: "When a feature triggers an upgrade",
        body: [
          "Most teams upgrade for one of three reasons: they outgrow the scan or user limit, they need a Google integration, or they need to connect eCard to other systems. White label is usually a later, brand-driven decision.",
        ],
        points: ["Limit reached: next plan up", "Google Contacts or Calendar & Meet: Starter", "Webhooks: Professional", "Logo, colours, custom domain: Business"],
      },
      {
        type: "table",
        heading: "Sample: matching needs to the lowest plan",
        intro: "Sample requirements, fictional.",
        headers: ["Sample need", "Lowest plan that covers it"],
        rows: [
          ["3 people, 30 cards a month, email and WhatsApp", "Free"],
          ["12 people syncing to Google Contacts", "Starter"],
          ["60 people sending new contacts to an internal system", "Professional"],
          ["Branded card links on our own domain", "Business"],
          ["Custom terms through procurement", "Enterprise"],
        ],
      },
      {
        type: "bullets",
        heading: "Before you assume a feature is missing",
        items: [
          "Check whether it is in the base set — most core features are",
          "Check the pricing page's extras for your plan",
          "Remember storage limits too: 1 GB, 25 GB, 250 GB or unlimited",
          "Ask sales@bizzfly.com for anything the pricing page does not cover",
        ],
      },
    ],
    faqs: [
      { q: "Does Free include the digital business card?", a: "Yes. The digital business card is in the base set on every plan." },
      { q: "Is the API on every plan?", a: "The pricing page lists webhooks from Professional; it does not break down API access by plan, so check with sales." },
    ],
  },
  "product/security-at-a-glance": {
    sections: [
      {
        type: "table",
        heading: "Risks and the control that helps",
        intro: "General mapping of common risks to eCard's controls.",
        headers: ["Risk", "Relevant control"],
        rows: [
          ["Stolen password", "2FA with authenticator codes"],
          ["Lost phone", "Recovery codes and trusted-device review"],
          ["Sign-in you didn't make", "Login alerts"],
          ["Too much access for temporary staff", "Scan-only guest role"],
          ["Exposure of stored secrets", "AES-256-GCM encryption of API keys and SMTP passwords"],
          ["Forged webhook calls", "Signed webhook events — verify the signature on your side"],
        ],
      },
      {
        type: "steps",
        heading: "Security review checklist for admins",
        steps: [
          { title: "Enforce 2FA", body: "Ask every member to enrol and save recovery codes." },
          { title: "Audit roles", body: "Confirm owners and admins are a small, known group." },
          { title: "Check the audit log", body: "Look over recent workspace activity regularly." },
          { title: "Offboard promptly", body: "Remove members who leave and rotate any shared secrets." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Questions from your security team",
        body: "For details the site does not cover, such as hosting, certifications or contractual terms, contact sales@bizzfly.com.",
      },
    ],
    faqs: [
      { q: "How are SMTP passwords protected?", a: "API keys and SMTP passwords are encrypted with AES-256-GCM." },
      { q: "Can I limit what event staff can see?", a: "Use the scan-only guest role for people who only need to scan cards." },
    ],
  },
};

const closing: Record<string, { sections: Section[]; faqs?: FAQ[] }> = {
  "product/whats-new-telegram": {
    sections: [
      {
        type: "callout",
        tone: "tip",
        title: "Make it a reflex",
        body: "Pin the eCard bot chat to the top of Telegram before an event. When the chat is one tap away, sending a card photo becomes as automatic as pocketing the card used to be.",
      },
    ],
  },
  "product/sign-up-flow": {
    sections: [
      {
        type: "prose",
        heading: "What sign-up does not ask for",
        paragraphs: [
          "You do not need a payment card to create an account, start on Free or begin the 14-day Professional trial. You do not need to install an app, because eCard runs in any phone browser. You also do not need to configure an AI provider before your first scan if you just want to see the product work; bringing your own key is an option you can set up when you are ready.",
          "What sign-up cannot do for you is decide how your team will use eCard. As general guidance, agree a few habits early — scan on the day you receive a card, tag by event, follow up within a day or two — and the tool will reflect them.",
        ],
      },
    ],
    faqs: [
      { q: "Is there a different sign-up for teams?", a: "eCard's site describes a single sign-up at ecard.gg/sign-up. Teams start the same way and the owner then invites members with roles." },
    ],
  },
  "product/plan-picker": {
    sections: [
      {
        type: "callout",
        tone: "note",
        title: "Paying from outside India",
        body: "Prices are set in INR, with local currency shown at checkout for supported countries. International customers pay by card, while customers in India can also use UPI, net banking, wallets or EMI.",
      },
    ],
    faqs: [
      { q: "Is GST included in the listed prices?", a: "Prices are listed in INR and GST is applied where applicable, so the amount at checkout may differ from the headline monthly price." },
    ],
  },
  "product/workspace-setup": {
    sections: [
      {
        type: "prose",
        heading: "Setup pitfalls we see in general",
        paragraphs: [
          "The most common early problem with any tool that sends email from your own mailbox is authentication: providers such as Gmail or Outlook may reject your normal password for SMTP and expect an app password instead. Test with an intro to an address you control before scanning real contacts.",
          "The second is roles. It is tempting to make everyone an admin so nobody gets stuck. Resist that; start people as members or scan-only guests and promote them when there is a clear reason. The audit log is far easier to read when only a few people can change settings.",
        ],
      },
    ],
    faqs: [
      { q: "Should temporary staff get full accounts?", a: "For people who only need to capture cards, the scan-only guest role is designed for exactly that. Remove them from the workspace once the event is over." },
    ],
  },
  "product/account-recovery": {
    sections: [
      {
        type: "bullets",
        heading: "Sample: a recovery kit to keep offline",
        intro: "Sample checklist, adapt it to your own setup:",
        items: [
          "The email address your eCard account uses",
          "Your printed or password-manager-stored recovery codes",
          "Which authenticator app holds your eCard entry",
          "The names of the other admins in your workspace",
          "Where your SMTP app password and AI keys can be regenerated at each provider",
        ],
      },
      {
        type: "prose",
        heading: "Why recovery codes matter",
        paragraphs: [
          "Two-factor authentication protects you because a password alone is not enough to sign in. The flip side is that losing your second factor can lock you out too. Recovery codes are the planned way around that, so store them the moment you enable 2FA.",
        ],
      },
    ],
    faqs: [
      { q: "Can I mark my laptop as trusted so I am not asked for codes every time?", a: "eCard supports trusted devices as part of 2FA. Only trust devices you control, and review the list whenever you replace a phone or laptop." },
    ],
  },
  "product/digital-card-example": {
    sections: [
      {
        type: "prose",
        heading: "Getting the most from a digital card",
        paragraphs: [
          "A digital card works best when it is everywhere you already introduce yourself. Put the QR code on your event badge and on the last slide of a presentation. Paste the short link into your email signature and WhatsApp intro. Because the card is one link, you can update a phone number or title once and every place that points to it stays current.",
          "As general guidance, keep the card focused. One phone number, one email and a clear line about what you do are easier to act on than a crowded list of every channel you have.",
        ],
      },
      {
        type: "bullets",
        heading: "Sample uses of the same card",
        items: [
          "Sample: QR on a trade-show badge for walk-up visitors",
          "Sample: short link in a WhatsApp follow-up after a site visit",
          "Sample: link in an email signature so every reply carries your details",
          "Sample: QR on the last slide of a webinar deck so attendees can save you",
        ],
      },
    ],
    faqs: [
      { q: "Do I need a paid plan for the digital card?", a: "No. The digital business card is part of the base set on every plan, including Free, with premium templates, QR code and tracked short links." },
    ],
  },
  "product/sample-personas": {
    sections: [
      {
        type: "prose",
        heading: "What the personas cannot show",
        paragraphs: [
          "A demo card is clean and well lit. Real cards arrive creased, glossy, double-sided or photographed in a dim hall. The personas show how review and confidence scores work, but only your own cards show how accurate scanning is for the layouts, languages and print quality you actually deal with. Treat the demo as an orientation, then test with real cards.",
        ],
      },
    ],
    faqs: [
      { q: "Do the personas reflect real customers?", a: "No. They are fictional samples and do not represent any real person or customer." },
    ],
  },
  "product/at-a-glance": {
    sections: [
      {
        type: "steps",
        heading: "A typical day with eCard",
        intro: "Sample day, fictional.",
        steps: [
          { title: "Morning meeting", body: "Sample: you receive two cards and send both to the Telegram bot on the way out." },
          { title: "Between calls", body: "You review the saved fields and add where you met and who introduced you." },
          { title: "Afternoon", body: "You preview the AI intro emails and let them send from your own mailbox." },
          { title: "Evening", body: "Link tracking shows one contact opened your card; you send a short WhatsApp note in Hindi." },
          { title: "A week later", body: "You search \"people I met at Tuesday's breakfast\" in plain language and pick up the conversation with full context." },
        ],
      },
    ],
    faqs: [
      { q: "Where can I see every feature in detail?", a: "The All Features page lists everything, and Feature Availability by Plan shows which plan includes what." },
      { q: "How fast does an intro email go out?", a: "After you preview the AI draft, it sends 5 seconds later from your own SMTP. You can edit or cancel it during that window, which is the \"5s to auto-send an intro\" figure on the homepage." },
    ],
  },
  "product/feature-availability": {
    sections: [
      {
        type: "prose",
        heading: "Reading limits correctly",
        paragraphs: [
          "Scan limits are monthly: 50 on Free, 1,000 on Starter, 5,000 on Professional and unlimited on Business and Enterprise. User limits apply to the whole workspace, so count everyone who needs to sign in, including occasional booth helpers.",
          "Users and scans tend to be the first limits growing teams hit. Before an expo season, compare the number of cards you expect with your plan's monthly allowance; it is easier to move up a plan before the show than to ration scans at the booth.",
          "Storage — 1 GB, 25 GB, 250 GB or unlimited — matters more as you attach voice notes and share PDFs. If your team records meeting memory heavily, factor that in rather than looking at scans alone.",
        ],
      },
    ],
    faqs: [
      { q: "Can I try Professional features before paying?", a: "Yes. New workspaces get a 14-day Professional trial with no card needed, which includes webhooks, Google Contacts sync and Google Calendar & Meet booking, so you can check they fit before choosing." },
    ],
  },
  "product/security-at-a-glance": {
    sections: [
      {
        type: "prose",
        heading: "Shared responsibility",
        paragraphs: [
          "eCard provides the controls; how well they protect you depends on how they are used. A workspace where every member has 2FA, roles are kept tight and leavers are removed quickly is far safer than one with the same features left at defaults.",
          "Your own providers matter too. Because eCard sends email through your SMTP and reads cards with your AI key, the security of those accounts — their passwords, 2FA and key management — is part of your overall picture. As general guidance, give eCard dedicated keys or app passwords so you can revoke them without affecting other tools.",
        ],
      },
      {
        type: "bullets",
        heading: "Sample: questions a reviewer might ask",
        items: [
          "Sample: Can we require 2FA for all admins? — Enable it and verify enrolment for each admin.",
          "Sample: How do we know who changed a setting? — Check the workspace audit log.",
          "Sample: How do we verify webhook calls are genuine? — Check the signature on each signed event before trusting it.",
          "Sample: Where are hosting and certification details? — Not stated on the site; ask sales.",
        ],
      },
    ],
    faqs: [
      { q: "Does eCard hold a security certification?", a: "eCard's site does not state any certifications, uptime figures or hosting locations. Ask sales@bizzfly.com if your review requires them." },
    ],
  },
};

const merge = (p: PageDef, add?: { sections: Section[]; faqs?: FAQ[] }): PageDef => ({
  ...p,
  sections: [...p.sections, ...(add?.sections ?? [])],
  faqs: [...(p.faqs ?? []), ...(add?.faqs ?? [])],
});

export const pages: PageDef[] = base.map((p) => merge(merge(p, extra[p.slug]), closing[p.slug]));
