import type { FAQ, PageDef, Section } from "../types";

const G = "resources/guides";

export const pages: PageDef[] = [
  {
    slug: "resources",
    category: "resources",
    title: "Resources",
    seoTitle: "eCard Resources: Guides, Playbooks & Glossary",
    description: "Setup guides, networking playbooks and a plain-English glossary to help you turn visiting cards into follow-ups with eCard, the AI visiting-card CRM.",
    h1: "Resources For Turning Cards Into Relationships",
    eyebrow: "Resources",
    intro: "Everything here is written to help you get value from eCard quickly and to network better in general. Start with the setup guides, then use the playbooks before your next event.",
    variant: "guide",
    visual: "dashboard",
    icon: "book",
    sections: [
      {
        type: "cards",
        heading: "Where To Start",
        intro: "Pick the resource that matches what you are doing today.",
        cards: [
          { title: "Setup Guides", body: "Short walkthroughs for your first scan, connecting your own mailbox over SMTP, linking the Telegram bot and inviting your team.", icon: "settings" },
          { title: "Playbooks", body: "General guidance for trade shows and follow-ups: what to do before, during and after you collect a pile of cards.", icon: "briefcase" },
          { title: "Etiquette", body: "How to exchange visiting cards gracefully, in India and abroad, and what to write on the back of a card.", icon: "card" },
          { title: "Glossary", body: "Plain definitions of terms you will see around eCard, from SMTP and webhooks to confidence scores and 2FA.", icon: "book" },
        ],
      },
      {
        type: "prose",
        heading: "How These Resources Are Written",
        paragraphs: [
          "eCard is a browser-based AI visiting-card CRM: you scan a card, review what the AI extracted, and follow up by email or WhatsApp. The product guides on this site describe those steps only at the level eCard publicly documents. Where a detail is not documented, such as an exact menu name, we say so and point you to the prompts inside the app.",
          "The playbooks and etiquette pages are general, educational guidance. They are not eCard feature claims; they are habits that make any follow-up system work better.",
        ],
      },
      {
        type: "bullets",
        heading: "Facts Worth Knowing Before You Begin",
        items: [
          "You can start on the Free plan: ₹0, 50 scans a month, up to 5 users and 1 GB of storage.",
          "New workspaces get a 14-day Professional trial with no card needed.",
          "eCard works in any phone browser. There is no app to install.",
          "Card reading uses AI models you choose (Claude, OpenAI, Gemini, DeepSeek or Grok) and you can bring your own key.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Short On Time?",
        body: "Read Getting Started and Your First Scan. Together they take about ten minutes and cover the core loop: scan, review, save, follow up.",
      },
    ],
    faqs: [
      { q: "Is there official eCard documentation or an API reference?", a: "eCard's public site does not publish full documentation or an API reference. These guides cover what the site does document and point you to in-app prompts for the rest." },
      { q: "Do I need to install an app to follow the guides?", a: "No. eCard works in any phone browser, so every guide assumes a browser, plus the optional Telegram bot." },
      { q: "Are the playbooks specific to eCard?", a: "Mostly not. The trade-show, follow-up and etiquette pages are general networking guidance that you can apply with or without eCard." },
    ],
    related: ["resources/guides", "resources/guides/getting-started", "resources/glossary", "help", "how-it-works"],
    source: "mixed",
  },
  {
    slug: "resources/guides",
    category: "resources",
    title: "Guides",
    seoTitle: "eCard Guides: Setup Walkthroughs And Playbooks",
    description: "Step-by-step eCard guides for scanning, SMTP, Telegram, CSV import, digital cards, teams, 2FA and webhooks, plus trade-show and follow-up playbooks.",
    h1: "Guides",
    eyebrow: "Resources",
    intro: "Twelve guides, grouped by what you are trying to do. Setup guides describe eCard at the level its site documents; playbooks are general networking advice.",
    variant: "guide",
    visual: "none",
    icon: "book",
    sections: [
      {
        type: "table",
        heading: "Setup Guides",
        intro: "Do these roughly in order the first week.",
        headers: ["Guide", "What you will do", "Plan"],
        rows: [
          ["Getting Started", "Create a workspace and learn the core loop", "All plans"],
          ["Your First Scan", "Scan a card and review the extracted fields", "All plans"],
          ["Setting Up SMTP", "Send intro emails from your own mailbox", "All plans"],
          ["Connecting Telegram", "Link the bot with a one-time code", "All plans"],
          ["Importing Contacts from CSV", "Bring an existing list into eCard", "All plans"],
          ["Creating Your Digital Card", "Set up a shareable card with QR code", "All plans"],
          ["Inviting Your Team", "Add colleagues with the right role", "User limits vary by plan"],
          ["Enabling 2FA", "Protect your account with authenticator codes", "All plans"],
          ["Setting Up Webhooks", "Receive signed events for new contacts", "Professional and above"],
        ],
      },
      {
        type: "cards",
        heading: "Playbooks And Etiquette",
        cards: [
          { title: "Trade-Show Playbook", body: "Plan, capture and follow up on an expo without losing a single lead.", icon: "building" },
          { title: "Follow-Up Playbook", body: "Timing, channel and message structure for follow-ups that get replies.", icon: "send" },
          { title: "Visiting-Card Etiquette", body: "Giving, receiving and annotating cards with care.", icon: "card" },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "About Menu Names",
        body: "eCard's public site names one settings path: Settings → Telegram. For other steps, these guides describe what to do and ask you to follow the prompts in the app rather than guessing at button labels.",
      },
      {
        type: "prose",
        heading: "Suggested Order",
        paragraphs: [
          "If you are setting up alone, do Getting Started, Your First Scan and Setting Up SMTP on day one. Connect Telegram next if you will be scanning on the move. Import your old spreadsheet once you are comfortable reviewing scans.",
          "If you are setting up for a team, enable 2FA on the owner account before inviting anyone, then work through Inviting Your Team. Webhooks are worth configuring only once you know which system should receive new contacts.",
        ],
      },
    ],
    faqs: [
      { q: "Which guide should I read first?", a: "Getting Started. It explains the scan, review, save and follow-up loop that every other guide builds on." },
      { q: "Are webhooks available on the Free plan?", a: "No. eCard's pricing lists webhooks on the Professional plan (₹999/month) and above." },
    ],
    related: ["resources", `${G}/getting-started`, `${G}/your-first-scan`, `${G}/trade-show-playbook`, "resources/glossary"],
    source: "mixed",
  },
  {
    slug: `${G}/getting-started`,
    category: "resources",
    title: "Getting Started",
    seoTitle: "Getting Started With eCard: First-Day Setup",
    description: "Create your eCard workspace, understand the scan-review-follow-up loop and decide which settings matter on day one. A practical start for new users.",
    h1: "Getting Started With eCard",
    eyebrow: "Guide",
    intro: "eCard turns the visiting cards you collect into contacts you can search and follow up with. This guide covers signing up and the handful of decisions worth making on your first day.",
    variant: "guide",
    visual: "dashboard",
    icon: "zap",
    sections: [
      {
        type: "steps",
        heading: "Your First Day",
        steps: [
          { title: "Sign Up", body: "Go to the sign-up page at ecard.gg. The form asks for your name, an optional workspace name, your email, a password and a plan. You can choose Free; new workspaces also get a 14-day Professional trial with no card needed." },
          { title: "Open eCard On Your Phone", body: "eCard works in any phone browser, so there is nothing to install. Sign in on the phone you will carry to meetings and events." },
          { title: "Scan One Card", body: "Photograph a card you already have. The AI reads it, gives each field a confidence score, and saves nothing until you review it." },
          { title: "Connect Your Mailbox", body: "Intro emails go out from your own SMTP account. Set this up before you need it, so a follow-up is one tap away." },
          { title: "Decide On Extras", body: "Linking the Telegram bot, creating your digital card and inviting teammates are all optional. Add them as you need them." },
        ],
      },
      {
        type: "split",
        heading: "The Core Loop",
        body: [
          "Almost everything in eCard supports one loop: capture a card, check what the AI read, keep the context of the meeting, and follow up while you are still remembered.",
          "Meeting memory lets you note where you met, who introduced you and add voice notes. Later, natural-language search finds people by that context.",
        ],
        points: ["Scan", "Review fields", "Add meeting context", "Send an intro email or WhatsApp message", "Track opens of your card and links"],
      },
      {
        type: "table",
        heading: "Which Plan Fits At The Start",
        headers: ["Plan", "Price / month", "Users", "Scans / month"],
        rows: [
          ["Free", "₹0", "5", "50"],
          ["Starter", "₹299", "20", "1,000"],
          ["Professional", "₹999", "100", "5,000"],
          ["Business", "₹2,999", "Unlimited", "Unlimited"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start With A Real Card",
        body: "Use a card from someone you actually need to follow up with. Completing one real follow-up teaches the product faster than a test scan.",
      },
    ],
    faqs: [
      { q: "Do I need a credit card to start?", a: "No. The Free plan is ₹0, and the 14-day Professional trial does not need a card." },
      { q: "Is the workspace name required?", a: "The sign-up form marks the workspace name as optional." },
      { q: "Which AI model reads my cards?", a: "You choose: Claude, OpenAI, Gemini, DeepSeek or Grok, and eCard's FAQ also mentions Azure and custom endpoints. You can bring your own key." },
    ],
    related: [`${G}/your-first-scan`, `${G}/setting-up-smtp`, "pricing/free-trial", "how-it-works", "resources/guides"],
    source: "verified",
  },
  {
    slug: `${G}/your-first-scan`,
    category: "resources",
    title: "Your First Scan",
    seoTitle: "Your First eCard Scan: Capture And Review A Card",
    description: "How to scan your first visiting card with eCard, read the confidence scores, correct fields and save a clean contact. Includes photo tips for better results.",
    h1: "Scan And Review Your First Card",
    eyebrow: "Guide",
    intro: "A scan is only as good as the review that follows it. Here is how to take a good photo, check what the AI extracted and save a contact you can trust.",
    variant: "guide",
    visual: "scan",
    icon: "scan",
    sections: [
      {
        type: "bullets",
        heading: "Before You Press The Shutter",
        intro: "General photo habits that help any card-reading AI:",
        items: [
          "Lay the card flat on a plain, contrasting surface.",
          "Use even light and avoid glare on glossy or foil cards.",
          "Fill most of the frame with the card and keep it in focus.",
          "If the back of the card carries details, capture it too.",
        ],
      },
      {
        type: "steps",
        heading: "Scanning",
        intro: "Open eCard in your phone browser and start a scan from the app; follow the on-screen prompts to take or upload a photo.",
        steps: [
          { title: "Capture", body: "Take the photo. The AI model selected for your workspace reads the card." },
          { title: "Check Confidence", body: "Each extracted field comes with a confidence score. Look first at fields with lower scores." },
          { title: "Correct And Complete", body: "Fix any misread field. Addresses are checked against Google Maps, which helps you spot a garbled street or city." },
          { title: "Save", body: "Nothing is saved until you review it, so the contact only enters your list once you confirm." },
        ],
      },
      {
        type: "prose",
        heading: "Add Context While You Remember It",
        paragraphs: [
          "Right after saving is the best moment to record where you met and who introduced you, or to leave a short voice note. eCard's meeting memory keeps that context with the contact and produces a searchable AI summary.",
          "Later you can search in plain language (for example, \"Investors I met in Mumbai last month\") instead of remembering a name.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Sample",
        body: "Sample: Priya Shah, Realtor, card scanned at a property expo. Review shows a lower confidence on the phone number because of glare; you correct one digit, add \"Met at expo stall, interested in brochures\", and save.",
      },
    ],
    faqs: [
      { q: "Does eCard save a contact automatically after scanning?", a: "No. Each field gets a confidence score and nothing is saved until you review it." },
      { q: "How many scans can I do on Free?", a: "The Free plan includes 50 scans a month. Starter includes 1,000, Professional 5,000, and Business and Enterprise are unlimited." },
      { q: "Can I scan from Telegram instead?", a: "Yes. Send a photo of the card to the linked eCard bot and the contact is saved, with Open and Send buttons in the chat." },
    ],
    related: ["features/ai-card-scanning", "features/ai-card-scanning/confidence-scores", "features/ai-card-scanning/scan-quality-tips", `${G}/connecting-telegram`, "help/scanning"],
    source: "mixed",
  },
  {
    slug: `${G}/setting-up-smtp`,
    category: "resources",
    title: "Setting Up SMTP",
    seoTitle: "Set Up SMTP In eCard To Send From Your Own Mailbox",
    description: "Connect your own mailbox to eCard over SMTP so intro emails come from your address. Covers what SMTP details you need and how the 5-second send works.",
    h1: "Send Intro Emails From Your Own Mailbox",
    eyebrow: "Guide",
    intro: "eCard sends intro emails from your own SMTP account, not a shared address. That means replies land in your inbox and recipients see a name they recognise.",
    variant: "guide",
    visual: "email",
    icon: "mail",
    sections: [
      {
        type: "prose",
        heading: "What SMTP Is, Briefly",
        paragraphs: [
          "SMTP (Simple Mail Transfer Protocol) is the standard way one system hands an email to a mail server for delivery. To send on your behalf, an app needs your provider's SMTP host, a port, a username and a password or app password.",
          "Many providers ask you to create an app-specific password rather than using your normal login password, especially when 2FA is on. Check your provider's help pages for the exact values.",
        ],
      },
      {
        type: "cards",
        heading: "Providers eCard Names",
        intro: "eCard's site lists these mail options; any standard SMTP host is also supported.",
        cards: [
          { title: "Mailboxes", body: "Gmail, Outlook and Zoho Mail.", icon: "mail" },
          { title: "Sending Services", body: "SendGrid, Brevo, Mailgun, Amazon SES and Resend.", icon: "server" },
          { title: "Anything Else", body: "Any SMTP host, such as your company's own mail server.", icon: "globe" },
        ],
      },
      {
        type: "steps",
        heading: "Connecting",
        intro: "eCard's public site does not document the exact screen for mail settings, so follow the in-app prompts for adding your mailbox.",
        steps: [
          { title: "Gather Details", body: "From your provider: SMTP host, port, security setting, username and password or app password." },
          { title: "Enter Them In eCard", body: "Add the details where the app prompts you to connect your mailbox. eCard encrypts SMTP passwords with AES-256-GCM." },
          { title: "Send A Test", body: "Scan a card of your own, or a colleague's, and send yourself an intro to confirm delivery and formatting." },
        ],
      },
      {
        type: "split",
        heading: "How Sending Works",
        body: ["When you trigger an intro email, eCard shows you the AI-written draft first. It then sends after 5 seconds, giving you a window to edit or cancel."],
        points: ["Preview the AI draft", "Edit if needed", "Cancel within the 5-second window", "Email leaves from your own address"],
      },
    ],
    faqs: [
      { q: "Is email sending available on Free?", a: "Yes. Email outreach from your own mailbox is part of the base feature set on every plan." },
      { q: "How is my SMTP password stored?", a: "eCard states that SMTP passwords and API keys are encrypted with AES-256-GCM." },
      { q: "Can I stop an email after pressing send?", a: "Intro emails send after 5 seconds, and you can edit or cancel during that window." },
    ],
    related: ["features/outreach/smtp-setup", "integrations/smtp", "integrations/gmail", "help/email-sending", "features/automated-email-outreach"],
    source: "mixed",
  },
  {
    slug: `${G}/connecting-telegram`,
    category: "resources",
    title: "Connecting Telegram",
    seoTitle: "Connect The eCard Telegram Bot With A One-Time Code",
    description: "Link the eCard Telegram bot using the one-time code from Settings → Telegram, then save contacts by sending card photos. With tips for first use.",
    h1: "Link The Telegram Bot To Your Workspace",
    eyebrow: "Guide",
    intro: "With the bot linked, you can photograph a card in Telegram and the contact is saved to eCard, handy when you are walking between meetings.",
    variant: "guide",
    visual: "telegram",
    icon: "send",
    sections: [
      {
        type: "steps",
        heading: "Linking The Bot",
        steps: [
          { title: "Open Settings → Telegram", body: "Sign in to eCard and go to Settings → Telegram. This is where eCard issues your one-time code." },
          { title: "Copy The One-time Code", body: "The code links your Telegram account to your workspace. Treat it like a password and don't share it." },
          { title: "Send It To The Bot", body: "Open the eCard bot in Telegram and send the code, following the prompts in the chat and in the app." },
          { title: "Test With A Card", body: "Send a photo of a card. The contact is saved and the bot replies with Open and Send buttons." },
        ],
      },
      {
        type: "table",
        heading: "What The Buttons Do",
        headers: ["Button", "Purpose"],
        rows: [
          ["Open", "Opens the saved contact in eCard"],
          ["Send", "Starts a follow-up for that contact"],
        ],
      },
      {
        type: "prose",
        heading: "When Telegram Beats The Browser",
        paragraphs: [
          "The browser is best when you want to review each field carefully as you scan. Telegram is best for speed: one photo, and you are back in the conversation. You can always open the contact later to review and add meeting notes.",
          "The Telegram bot is included in the base feature set on every plan, including Free.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Code Didn't Work?",
        body: "One-time codes are meant to be used once. If linking fails, return to Settings → Telegram, get a fresh code and try again. See Telegram Help for more.",
      },
    ],
    faqs: [
      { q: "Where do I find the linking code?", a: "In eCard under Settings → Telegram. It is a one-time code." },
      { q: "Does the Telegram bot cost extra?", a: "No. eCard lists the Telegram bot in the feature set included on every plan." },
      { q: "Do I need the eCard app for Telegram?", a: "There is no eCard app. eCard runs in your browser, and the bot runs inside Telegram." },
    ],
    related: ["features/telegram-bot", "features/telegram-bot/connect-workspace", "help/telegram", "integrations/telegram", "mobile/telegram-on-the-go"],
    source: "verified",
  },
  {
    slug: `${G}/importing-contacts-csv`,
    category: "resources",
    title: "Importing Contacts From CSV",
    seoTitle: "Import Contacts Into eCard From A CSV File",
    description: "Move an existing spreadsheet of contacts into eCard with CSV import. Learn how to clean the file first, avoid duplicates and check the result after import.",
    h1: "Bring Your Existing Contacts In With CSV",
    eyebrow: "Guide",
    intro: "If your contacts live in a spreadsheet or another tool, export them as CSV and import them into eCard. A little cleaning beforehand saves a lot of fixing afterwards.",
    variant: "guide",
    visual: "dashboard",
    icon: "upload",
    sections: [
      {
        type: "bullets",
        heading: "Prepare The File",
        intro: "General CSV hygiene that applies to any import:",
        items: [
          "One person per row, with a single header row at the top.",
          "Keep names, company, email, phone and city in separate columns.",
          "Save as UTF-8 so names in Hindi, Marathi or other scripts survive.",
          "Remove blank rows and obvious test entries.",
          "Write phone numbers with country codes, e.g. +91.",
        ],
      },
      {
        type: "steps",
        heading: "Import",
        intro: "eCard supports CSV import and bulk import/export on every plan. The site does not document field-level mapping, so follow the in-app prompts and check how columns are matched.",
        steps: [
          { title: "Start A CSV Import", body: "Open the import option in eCard and choose your file." },
          { title: "Check The Columns", body: "Confirm that each column in your file lands in the right contact field before you finish." },
          { title: "Import A Small Batch First", body: "Try ten rows. If they look right, import the rest." },
        ],
      },
      {
        type: "split",
        heading: "After The Import",
        body: ["Imports often bring in people you have already scanned. eCard's clean-data tools include duplicate merge, blacklist and archive."],
        points: ["Merge duplicates", "Archive people you no longer work with", "Blacklist addresses you should never contact", "Tag imported contacts so you can find the batch"],
      },
      {
        type: "callout",
        tone: "info",
        title: "Sample",
        body: "Sample row: \"Rohan Mehta, Sample Exports Pvt Ltd, rohan@example.com, +91 90000 00000, Pune\".",
      },
    ],
    faqs: [
      { q: "Is CSV import on the Free plan?", a: "Yes. Bulk import and export are part of the base set on every plan." },
      { q: "Can I sync with Google Contacts instead?", a: "Google Contacts sync is listed on Starter (₹299/month) and above." },
      { q: "What happens to duplicates?", a: "eCard includes duplicate merge among its clean-data tools; review and merge after importing." },
    ],
    related: ["features/contact-management/csv-import", "features/contact-management/duplicate-merge", "features/contact-management/migrating-from-spreadsheets", "integrations/csv-import", "features/contact-management/google-contacts-sync"],
    source: "mixed",
  },
  {
    slug: `${G}/creating-your-digital-card`,
    category: "resources",
    title: "Creating Your Digital Card",
    seoTitle: "Create Your eCard Digital Business Card And QR Code",
    description: "Set up a digital business card in eCard with a template, QR code, Save-to-contacts and a short link that counts clicks with bots filtered out.",
    h1: "Create A Digital Card People Can Save In One Tap",
    eyebrow: "Guide",
    intro: "Your eCard digital card is a web page with your details, a QR code and a Save-to-contacts option. Recipients need no app to open it.",
    variant: "guide",
    visual: "card",
    icon: "card",
    sections: [
      {
        type: "cards",
        heading: "What Your Card Includes",
        cards: [
          { title: "Premium Templates", body: "Choose a template as the starting design.", icon: "palette" },
          { title: "QR Code", body: "Show it on your phone or print it so people can open your card.", icon: "qr" },
          { title: "Save To Contacts", body: "Visitors can add you to their phone contacts.", icon: "download" },
          { title: "Short Link", body: "A short URL, in the style of /c/rahul, that counts clicks with bots filtered out.", icon: "link" },
        ],
      },
      {
        type: "steps",
        heading: "Setting It Up",
        intro: "Follow the in-app prompts for the digital card; exact screens are not documented on eCard's site.",
        steps: [
          { title: "Pick A Template", body: "Choose one that matches the tone of your work." },
          { title: "Fill In Details", body: "Name, role, company and the contact methods you actually answer." },
          { title: "Check On A Phone", body: "Open your short link on a phone and try Save-to-contacts yourself." },
          { title: "Share", body: "Send the link by WhatsApp or email, or let people scan the QR code." },
        ],
      },
      {
        type: "prose",
        heading: "Writing A Card That Works",
        paragraphs: [
          "Keep it short: one role line, one company, and two or three ways to reach you. A digital card is opened on small screens, so long bios get skipped.",
          "Because eCard tracks opens of your card, PDFs and WhatsApp links, you can see when someone looked at your card, a useful nudge for timing a follow-up.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "White Label",
        body: "On Business (₹2,999/month) and Enterprise, white label adds your logo, colours and a custom domain.",
      },
    ],
    faqs: [
      { q: "Does the person I share with need an app?", a: "No. The digital card opens in a browser and needs no app." },
      { q: "Are bot clicks counted on my short link?", a: "eCard says its short links count clicks with bots filtered out." },
    ],
    related: ["features/digital-business-card", "features/digital-business-card/qr-code", "features/digital-business-card/short-links", "product/digital-card-example", "features/digital-business-card/card-design-tips"],
    source: "mixed",
  },
  {
    slug: `${G}/inviting-your-team`,
    category: "resources",
    title: "Inviting Your Team",
    seoTitle: "Invite Your Team To eCard And Choose The Right Roles",
    description: "Add colleagues to your eCard workspace with the right role (owner, admin, manager, member or scan-only guest) and stay within your plan's user limit.",
    h1: "Bring Your Team Into One Workspace",
    eyebrow: "Guide",
    intro: "A shared workspace means cards scanned by anyone on the team become contacts everyone can find. Choosing roles carefully keeps that useful and safe.",
    variant: "guide",
    visual: "team",
    icon: "users",
    sections: [
      {
        type: "table",
        heading: "Roles At A Glance",
        intro: "eCard names five roles. Its site does not publish a full permission matrix, so check in-app descriptions when assigning.",
        headers: ["Role", "Typical use"],
        rows: [
          ["Owner", "The person accountable for the workspace and billing"],
          ["Admin", "Trusted colleagues who help run the workspace"],
          ["Manager", "Team leads who oversee others' contacts and follow-ups"],
          ["Member", "Everyday users who scan and follow up"],
          ["Scan-only guest", "Temporary help, e.g. booth staff at an expo"],
        ],
      },
      {
        type: "table",
        heading: "User Limits By Plan",
        headers: ["Plan", "Users", "Price / month"],
        rows: [["Free", "5", "₹0"], ["Starter", "20", "₹299"], ["Professional", "100", "₹999"], ["Business", "Unlimited", "₹2,999"], ["Enterprise", "Unlimited", "Custom"]],
      },
      {
        type: "steps",
        heading: "A Sensible Rollout",
        steps: [
          { title: "Secure The Owner Account", body: "Turn on 2FA and store recovery codes before inviting others." },
          { title: "Invite A Pilot Group", body: "Start with two or three people. Follow the in-app prompts to invite them and pick each role." },
          { title: "Agree On Tags", body: "Decide how you will tag by event, city and intent so search works for everyone." },
          { title: "Invite The Rest", body: "Once the pilot is happy, add the wider team." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Audit Log",
        body: "eCard workspaces have an audit log, which helps when several people manage contacts.",
      },
    ],
    faqs: [
      { q: "How many people can use the Free plan?", a: "Up to 5 users." },
      { q: "What can a scan-only guest do?", a: "As the name suggests, the role is meant for scanning. eCard does not publish a detailed permission list, so confirm in the app." },
    ],
    related: ["features/team-security/roles-and-permissions", "features/team-security/scan-only-guests", "features/team-security/onboarding-your-team", `${G}/enabling-2fa`, "pricing/compare-plans"],
    source: "mixed",
  },
  {
    slug: `${G}/enabling-2fa`,
    category: "resources",
    title: "Enabling 2FA",
    seoTitle: "Enable Two-Factor Authentication On Your eCard Account",
    description: "Protect your eCard account with authenticator-code 2FA, recovery codes, trusted devices and login alerts. What each one does and how to set them up safely.",
    h1: "Turn On Two-factor Authentication",
    eyebrow: "Guide",
    intro: "Your eCard workspace holds people's names, numbers and notes. Two-factor authentication makes a stolen password far less useful to an attacker.",
    variant: "guide",
    visual: "security",
    icon: "shield",
    sections: [
      {
        type: "prose",
        heading: "What 2FA Does",
        paragraphs: [
          "Two-factor authentication asks for something you know (your password) and something you have (a code from an authenticator app on your phone). The code changes every few seconds, so a leaked password alone can't open your account.",
          "eCard supports 2FA with authenticator codes, plus recovery codes, trusted devices and login alerts.",
        ],
      },
      {
        type: "steps",
        heading: "Setting It Up",
        intro: "Follow the in-app prompts for two-factor authentication; eCard's site does not name the exact screen.",
        steps: [
          { title: "Install An Authenticator App", body: "Any standard TOTP authenticator app works for authenticator codes in general." },
          { title: "Add eCard To It", body: "Scan the setup code eCard shows with your authenticator app." },
          { title: "Confirm With A Code", body: "Enter the current code to finish enabling 2FA." },
          { title: "Save Recovery Codes", body: "Store them somewhere safe and offline. They let you in if you lose your phone." },
        ],
      },
      {
        type: "cards",
        heading: "The Supporting Protections",
        cards: [
          { title: "Recovery Codes", body: "A backup way in if your authenticator is unavailable.", icon: "key" },
          { title: "Trusted Devices", body: "Devices you mark as yours, reducing repeat prompts.", icon: "smartphone" },
          { title: "Login Alerts", body: "Notice of sign-ins, so you spot ones that weren't you.", icon: "bell" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Owners And Admins First",
        body: "Enable 2FA on owner and admin accounts before anyone else; they hold the most access.",
      },
    ],
    faqs: [
      { q: "Does eCard support SMS codes?", a: "eCard's site describes 2FA with authenticator codes. It does not mention SMS codes." },
      { q: "What if I lose my phone?", a: "Use one of your saved recovery codes to sign in, then set up 2FA again on your new phone." },
    ],
    related: ["features/team-security/two-factor-authentication", "features/team-security/recovery-codes", "features/team-security/login-alerts", "help/account-and-sign-in", "product/security-at-a-glance"],
    source: "mixed",
  },
  {
    slug: `${G}/setting-up-webhooks`,
    category: "resources",
    title: "Setting Up Webhooks",
    seoTitle: "Set Up eCard Webhooks For New-Contact Events",
    description: "Receive a signed event for every new eCard contact with webhooks on Professional and above. How webhooks work and how to plan and verify your endpoint.",
    h1: "Send New Contacts To Your Other Systems",
    eyebrow: "Guide",
    intro: "Webhooks let eCard notify another system each time a new contact is added. eCard sends signed events for each new contact on the Professional plan and above.",
    variant: "guide",
    visual: "integrations",
    icon: "webhook",
    sections: [
      {
        type: "prose",
        heading: "How Webhooks Work In General",
        paragraphs: [
          "A webhook is an HTTP request one service sends to a URL you control when something happens. Your endpoint receives it and acts: adding a lead to a CRM, posting to a chat channel, or updating a sheet.",
          "\"Signed\" means each request carries a signature your endpoint can check, so you know it really came from the sender and wasn't altered.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "What eCard Documents: And Doesn't",
        body: "eCard's site states webhooks send signed events for every new contact. It does not publish the payload format, signing method or retry behaviour. Check the in-app webhook settings for those details before building.",
      },
      {
        type: "steps",
        heading: "A Safe Setup",
        steps: [
          { title: "Confirm Your Plan", body: "Webhooks are listed on Professional (₹999/month), Business and Enterprise." },
          { title: "Prepare An HTTPS Endpoint", body: "Use a URL that only accepts HTTPS and logs incoming requests during testing." },
          { title: "Register It In eCard", body: "Add the endpoint where the app prompts you for webhook settings." },
          { title: "Verify Signatures", body: "Reject any request whose signature does not validate." },
          { title: "Test With A Scan", body: "Add a sample contact and confirm your endpoint receives the event." },
        ],
      },
      {
        type: "bullets",
        heading: "Endpoint Good Practice",
        items: ["Respond quickly and do heavy work afterwards.", "Handle the same event arriving twice without creating duplicates.", "Never log secrets in plain text.", "Alert yourself if the endpoint starts failing."],
      },
    ],
    faqs: [
      { q: "Which plans include webhooks?", a: "Professional (₹999/month), Business (₹2,999/month) and Enterprise." },
      { q: "What does the payload look like?", a: "eCard's public site does not document the payload format. Check the in-app webhook settings." },
    ],
    related: ["integrations/webhooks", "integrations/api", "pricing/professional", "resources/glossary", "features/team-security/secret-encryption"],
    source: "mixed",
  },
  {
    slug: `${G}/trade-show-playbook`,
    category: "resources",
    title: "Trade-Show Playbook",
    seoTitle: "Trade-Show Playbook: Capture And Convert Expo Leads",
    description: "A before, during and after playbook for trade shows and expos: set goals, capture cards with context, and follow up with every lead while they remember you.",
    h1: "The Trade-show Playbook",
    eyebrow: "Playbook",
    intro: "Most expo leads are lost in the week after the show, not at the booth. This playbook is general guidance for making every card count.",
    variant: "guide",
    visual: "scan",
    icon: "building",
    sections: [
      {
        type: "split",
        heading: "Before The Show",
        body: ["Decide what a good conversation looks like and who on your team captures cards. Prepare your follow-up messages in advance so the post-show work is mostly sending."],
        points: ["Set a target number of qualified conversations", "Agree on tags such as hot, warm, partner", "Draft follow-up emails and WhatsApp messages", "Print a QR code for your digital card"],
      },
      {
        type: "steps",
        heading: "At The Booth",
        steps: [
          { title: "Capture Immediately", body: "Scan the card while the person is still in front of you, or straight after." },
          { title: "Add One Line Of Context", body: "What they asked about and what you promised. A voice note works if you are busy." },
          { title: "Tag The Intent", body: "Use your agreed tags so you can prioritise later." },
          { title: "Promise A Specific Next Step", body: "\"I'll send the brochure tonight\" beats \"let's stay in touch\"." },
        ],
      },
      {
        type: "table",
        heading: "After The Show",
        headers: ["When", "Who", "What"],
        rows: [
          ["Same evening", "Hot leads", "Personal email or WhatsApp with what you promised"],
          ["Within 2 days", "Warm leads", "Short thank-you with one useful resource"],
          ["Within a week", "Everyone else", "Group follow-up referencing the event"],
          ["2-3 weeks later", "No reply", "One polite nudge, then stop"],
        ],
      },
      {
        type: "prose",
        heading: "Where eCard Fits",
        paragraphs: [
          "eCard lets you group the cards from a trade show into an event and follow up with everyone at once, and its link tracking shows opens of your card, PDFs and WhatsApp links, useful for deciding who to call first. A scan-only guest role suits temporary booth staff.",
        ],
      },
    ],
    faqs: [
      { q: "How soon should I follow up after an expo?", a: "As general guidance, contact hot leads the same day and everyone else within a week, while the conversation is fresh." },
      { q: "Can eCard follow up with a whole event at once?", a: "Yes. eCard's events feature groups cards from a trade show so you can follow up with everyone at once." },
    ],
    related: ["features/events-expos", "features/events-expos/trade-show-workflow", "features/events-expos/expo-checklist", `${G}/follow-up-playbook`, "use-cases/events-expos"],
    source: "mixed",
  },
  {
    slug: `${G}/follow-up-playbook`,
    category: "resources",
    title: "Follow-Up Playbook",
    seoTitle: "Follow-Up Playbook: Timing, Channel And Message",
    description: "How to follow up after meeting someone: when to write, whether to use email or WhatsApp, what to say, and how many nudges are too many. Practical guidance.",
    h1: "Follow-ups That Get Replies",
    eyebrow: "Playbook",
    intro: "A follow-up is a reminder of who you are and a reason to keep talking. This playbook is general advice on doing it well, with notes on where eCard helps.",
    variant: "guide",
    visual: "whatsapp",
    icon: "send",
    sections: [
      {
        type: "bullets",
        heading: "The Anatomy Of A Good Follow-up",
        items: [
          "A memory hook: where you met and one detail from the conversation.",
          "The thing you promised: a brochure, an introduction, a quote.",
          "One clear next step: a call, a visit or a reply.",
          "Short enough to read on a phone.",
        ],
      },
      {
        type: "table",
        heading: "Email Or WhatsApp?",
        headers: ["Situation", "Usually better"],
        rows: [
          ["Formal or corporate contact", "Email"],
          ["Attachments and detailed proposals", "Email"],
          ["Local, relationship-driven business", "WhatsApp"],
          ["Contact said \"message me\"", "WhatsApp"],
          ["Unsure", "Email first, WhatsApp later if appropriate"],
        ],
      },
      {
        type: "prose",
        heading: "Language Matters",
        paragraphs: [
          "Writing in someone's preferred language signals care. eCard's AI can write WhatsApp messages in English, Hindi or Marathi and open them in WhatsApp in one tap.",
          "For email, eCard writes an intro draft you can preview, then sends it from your own mailbox after 5 seconds unless you edit or cancel.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Sample",
        body: "Sample: \"Hi Anil, good to meet you at the Sample Build Expo stall yesterday. As promised, here is our brochure. Would Thursday suit a 15-minute call?\"",
      },
      {
        type: "steps",
        heading: "A Simple Cadence",
        steps: [
          { title: "Day 0-1", body: "First follow-up with your memory hook and promised item." },
          { title: "Day 5-7", body: "If you can see they opened your card or brochure but didn't reply, a short nudge." },
          { title: "Day 14-21", body: "A final, friendly message that leaves the door open." },
        ],
      },
    ],
    faqs: [
      { q: "How many follow-ups is too many?", a: "As a rule of thumb, two or three messages without a reply is enough. After that, wait for a genuine new reason to reach out." },
      { q: "Which languages can eCard's WhatsApp messages use?", a: "English, Hindi and Marathi." },
    ],
    related: ["features/outreach/follow-up-timing", "features/outreach/email-vs-whatsapp", "features/whatsapp-follow-ups", `${G}/trade-show-playbook`, "features/outreach/follow-up-etiquette"],
    source: "mixed",
  },
  {
    slug: `${G}/visiting-card-etiquette`,
    category: "resources",
    title: "Visiting-Card Etiquette",
    seoTitle: "Visiting-Card Etiquette: Giving And Receiving Cards",
    description: "How to give, receive and keep visiting cards respectfully in India and abroad, what to note on a card, and how to follow up without being pushy.",
    h1: "Visiting-card Etiquette",
    eyebrow: "Playbook",
    intro: "A visiting card is a small gesture of trust. How you exchange and handle it shapes the first impression, long before any follow-up.",
    variant: "guide",
    visual: "none",
    icon: "card",
    sections: [
      {
        type: "cards",
        heading: "Giving And Receiving",
        cards: [
          { title: "Offer It Facing Them", body: "Hand your card so the text reads the right way up for the other person.", icon: "card" },
          { title: "Take A Moment", body: "Read the card you receive before putting it away; mention their role or company.", icon: "eye" },
          { title: "Mind The Hand", body: "In many cultures, giving and receiving with the right hand or both hands is considered polite.", icon: "check" },
          { title: "Don't Write On It In Front Of Them", body: "Make notes later, or on your phone.", icon: "file" },
        ],
      },
      {
        type: "prose",
        heading: "Regional Notes",
        paragraphs: [
          "In India, cards are exchanged freely at business meetings and events; a bilingual card can be appreciated in regional markets. In Japan, the exchange is more formal, receiving with both hands and a brief study of the card is expected. In much of Europe and North America, exchange is casual and often happens at the end of a conversation.",
          "When unsure, follow the other person's lead and keep the exchange unhurried.",
        ],
      },
      {
        type: "bullets",
        heading: "What To Note After You Part",
        items: ["Where you met and the date", "Who introduced you", "What they need, and what you promised", "Any personal detail they shared willingly"],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Paper And Digital Together",
        body: "Carry paper cards for people who prefer them, and a QR code for your digital card for those who'd rather save you straight to their phone.",
      },
    ],
    faqs: [
      { q: "Is it rude to scan someone's card in front of them?", a: "Usually not, if you ask or explain briefly, many people appreciate that you are saving their details properly." },
      { q: "Should I still carry paper cards?", a: "Yes, as general advice. Many people still exchange paper cards; a digital card complements rather than replaces them." },
    ],
    related: ["features/digital-business-card/paper-vs-digital", `${G}/follow-up-playbook`, "features/meeting-memory/where-you-met", `${G}/your-first-scan`],
    source: "educational",
  },
  {
    slug: "resources/glossary",
    category: "resources",
    title: "Glossary",
    seoTitle: "eCard Glossary: CRM, SMTP, Webhook And More",
    description: "Plain-English definitions of terms used around eCard: confidence score, SMTP, webhook, 2FA, AES-256-GCM, bring your own key, white label and more.",
    h1: "Glossary",
    eyebrow: "Reference",
    intro: "Short definitions of terms you'll meet on this site and in eCard. General definitions are educational; eCard-specific notes reflect what eCard's site states.",
    variant: "reference",
    visual: "none",
    icon: "book",
    sections: [
      {
        type: "table",
        heading: "Scanning And Data",
        headers: ["Term", "Meaning"],
        rows: [
          ["Visiting-card CRM", "A contact system built around the cards you collect; eCard calls itself an AI visiting-card CRM."],
          ["Confidence score", "How sure the AI is about an extracted field. eCard shows one for each field."],
          ["Bring your own key (BYOK)", "Using your own API key for an AI provider such as Claude, OpenAI or Gemini."],
          ["Key pool / failover", "Several keys used together, so another takes over if one fails. eCard supports a key pool with failover."],
          ["Duplicate merge", "Combining two records for the same person into one."],
          ["Blacklist", "A list of contacts or addresses you never want to message."],
          ["CSV", "Comma-separated values; a plain spreadsheet format used for import and export."],
        ],
      },
      {
        type: "table",
        heading: "Outreach And Sharing",
        headers: ["Term", "Meaning"],
        rows: [
          ["SMTP", "The protocol for sending email via a mail server. eCard sends intro emails from your own SMTP account."],
          ["Deliverability", "How reliably your emails reach the inbox rather than spam."],
          ["Short link", "A compact URL. eCard's short links count clicks with bots filtered out."],
          ["QR code", "A scannable square code that opens a link, such as your digital card."],
          ["Natural-language search", "Searching with everyday phrases rather than exact fields."],
        ],
      },
      {
        type: "table",
        heading: "Security And Admin",
        headers: ["Term", "Meaning"],
        rows: [
          ["2FA", "Two-factor authentication: a password plus a second proof, such as an authenticator code."],
          ["Recovery codes", "One-time backup codes for signing in without your second factor."],
          ["AES-256-GCM", "A widely used encryption standard. eCard uses it for API keys and SMTP passwords."],
          ["Audit log", "A record of actions taken in a workspace."],
          ["Webhook", "An HTTP message sent to your URL when an event happens; eCard sends signed events for each new contact."],
          ["White label", "Showing your own logo, colours and domain instead of the vendor's."],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Missing A Term?",
        body: "If you come across a term not listed here, check the Help Center or contact support.",
      },
    ],
    related: ["resources", "resources/guides", "help/faq", "features/team-security/secret-encryption"],
    source: "mixed",
  },
];

/* ---------------------------------------------------------------------------
 * Content expansion: extra page-specific sections and FAQs, merged by slug.
 * ------------------------------------------------------------------------- */
const EXTRA: Record<string, { sections: Section[]; faqs?: FAQ[] }> = {
  resources: {
    sections: [
      {
        type: "table",
        heading: "Pick A Starting Point By Goal",
        intro: "Match what you are trying to do today with the resource that answers it fastest.",
        headers: ["If you want to…", "Start with", "Then read"],
        rows: [
          ["Try eCard with one real card", "Your First Scan", "Getting Started"],
          ["Send intros from your own address", "Setting Up SMTP", "Follow-Up Playbook"],
          ["Capture cards from your phone chat", "Connecting Telegram", "Trade-Show Playbook"],
          ["Bring in an existing contact list", "Importing Contacts from CSV", "Glossary (duplicate merge, archive)"],
          ["Roll eCard out to colleagues", "Inviting Your Team", "Enabling 2FA"],
          ["Push new contacts into another system", "Setting Up Webhooks", "Glossary (webhook, signed event)"],
        ],
      },
      {
        type: "bullets",
        heading: "Common Mistakes New Users Make",
        intro: "These are general patterns seen with any contact tool, and each has a guide that helps avoid it.",
        items: [
          "Importing a large, messy spreadsheet before trying a single scan, which makes it hard to judge what clean data looks like.",
          "Sending intro emails before the mailbox is connected and tested, so the first real follow-up fails or lands in spam.",
          "Giving every colleague a full role on day one instead of starting with the least access they need.",
          "Leaving 2FA for later, then forgetting to save recovery codes somewhere safe.",
          "Collecting cards at an event without tagging them, which makes the group follow-up much slower afterwards.",
        ],
      },
      {
        type: "prose",
        heading: "How To Use The Playbooks",
        paragraphs: [
          "The setup guides describe eCard itself, while the playbooks and the etiquette guide are general advice about networking and follow-up. You can read the playbooks before you sign up, and they apply whatever tool you use.",
          "When a guide touches something eCard has not documented, such as exact field mapping or payload formats, it says so plainly. In those cases, check the in-app settings for current behaviour rather than relying on assumptions.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need a paid plan to follow these guides?", a: "Most do not. Every plan includes AI scanning, contacts, the digital card, email outreach from your own mailbox, WhatsApp and the Telegram bot. Webhooks need Professional or above, and white label needs Business or Enterprise." },
    ],
  },
  "resources/guides": {
    sections: [
      {
        type: "table",
        heading: "Time And Plan Needed For Each Guide",
        intro: "Times are rough general estimates; the plan column reflects eCard's published pricing.",
        headers: ["Guide", "Typical time", "Plan needed"],
        rows: [
          ["Your First Scan", "A few minutes", "Any plan"],
          ["Setting Up SMTP", "10-20 minutes, depending on your provider", "Any plan"],
          ["Connecting Telegram", "A few minutes", "Any plan"],
          ["Importing Contacts from CSV", "Depends on how clean your file is", "Any plan"],
          ["Inviting Your Team", "Varies with team size", "Any plan (user limits differ)"],
          ["Setting Up Webhooks", "Depends on your receiving system", "Professional and above"],
        ],
      },
      {
        type: "bullets",
        heading: "Before You Start Any Guide",
        items: [
          "Have an eCard workspace ready. New workspaces get a 14-day Professional trial with no card needed.",
          "Use a laptop for setup tasks such as SMTP and webhooks; scanning and Telegram work well from a phone.",
          "Keep a password manager open so you can store new credentials, recovery codes and app passwords as you create them.",
          "If you work in a team, agree who the workspace owner is before inviting anyone else.",
        ],
      },
      {
        type: "prose",
        heading: "When A Guide Doesn't Match What You See",
        paragraphs: [
          "Screens change over time, and eCard has not published detailed documentation of every menu. The only menu path these guides quote is Settings → Telegram; elsewhere they describe what to look for rather than naming exact buttons.",
          "If a step doesn't match, look for the closest setting with the same purpose, and mention what you found when contacting support so the guide can be corrected.",
        ],
      },
    ],
    faqs: [
      { q: "Can I skip straight to the playbooks?", a: "Yes. The trade-show, follow-up and etiquette guides are general advice and do not depend on any setup step." },
    ],
  },
  "resources/guides/getting-started": {
    sections: [
      {
        type: "bullets",
        heading: "Before You Start",
        items: [
          "A phone with a working camera and a modern browser. eCard works in any phone browser, so there is nothing to install.",
          "Two or three real visiting cards collected recently, ideally with different layouts.",
          "Login details for the mailbox you want intros to come from, if you plan to send email on day one.",
          "A Telegram account, if you want to capture cards by sending photos to the bot.",
        ],
      },
      {
        type: "table",
        heading: "Sample: A First-week Plan",
        intro: "Sample schedule for one person trying eCard alongside normal work. Adjust it freely.",
        headers: ["Day", "Task", "Why"],
        rows: [
          ["Day 1", "Scan three cards and review every field", "See how confidence scores and review work"],
          ["Day 2", "Connect your mailbox over SMTP and send one intro to yourself", "Confirm delivery before writing to real contacts"],
          ["Day 3", "Link Telegram with the one-time code from Settings → Telegram", "Capture cards without opening the browser"],
          ["Day 4", "Set up your digital card and share it with a colleague", "Check the QR and Save-to-contacts on another phone"],
          ["Day 5", "Search your contacts in plain language", "Test that tags and notes make people easy to find"],
        ],
      },
      {
        type: "bullets",
        heading: "Common First-day Mistakes",
        items: [
          "Saving a scan without reading the low-confidence fields. Nothing is saved until you review it, so use that moment.",
          "Skipping notes on where you met. Meeting context is what makes a contact useful months later.",
          "Writing to a real contact before sending a test email to yourself.",
          "Importing an old spreadsheet on day one and mixing unreviewed data with fresh scans.",
        ],
      },
    ],
    faqs: [
      { q: "What happens when the 14-day trial ends?", a: "eCard states that new workspaces get a 14-day Professional trial with no card needed, and that the Free plan costs ₹0 with 50 scans a month. Check your billing settings in the app for exactly what happens to your workspace when the trial ends." },
    ],
  },
  "resources/guides/your-first-scan": {
    sections: [
      {
        type: "steps",
        heading: "Troubleshooting A Disappointing First Scan",
        intro: "Work down this list in order; most problems are solved by the first two steps.",
        steps: [
          { title: "Check The Photo", body: "Is the card in focus, flat, evenly lit and filling most of the frame? Glare on glossy cards is a common cause of missed fields." },
          { title: "Retake Rather Than Fix", body: "If several fields are wrong, a better photo is usually faster than correcting each one by hand." },
          { title: "Add The Back", body: "Many cards carry phone numbers, addresses or a second language on the reverse. Include it if the front looks incomplete." },
          { title: "Read The Confidence Scores", body: "Low scores point you to the fields that need attention; edit those before saving." },
          { title: "Try Another Model", body: "eCard lets you choose Claude, OpenAI, Gemini, DeepSeek or Grok, as well as Azure or a custom endpoint. A different model may handle an unusual layout better." },
        ],
      },
      {
        type: "split",
        heading: "Sample: Reviewing A Scanned Card",
        body: [
          "Sample card: Priya Shah, Realtor, with a phone number, email and office address on the front. The name, email and phone come back with high confidence. The address scores lower because part of it is printed in a tiny font.",
          "eCard checks addresses against Google Maps, which helps you spot a mistyped locality. You correct one word, add a note that you met at a sample property expo, and save.",
        ],
        points: ["Read every low-confidence field", "Fix the field, not the whole record", "Add where you met before saving", "Then plan the follow-up"],
      },
      {
        type: "bullets",
        heading: "Common Mistakes",
        items: [
          "Photographing a card on a patterned surface, which makes the card's edges harder to pick out.",
          "Holding the phone at a steep angle so the text is skewed.",
          "Saving a second record for someone already in your contacts instead of merging them.",
        ],
      },
    ],
    faqs: [
      { q: "Do retakes count against my scan allowance?", a: "eCard publishes monthly scan allowances per plan (50 on Free, 1,000 on Starter, 5,000 on Professional, unlimited on Business and Enterprise) but does not document how retakes are counted. Check your usage in the app." },
    ],
  },
  "resources/guides/setting-up-smtp": {
    sections: [
      {
        type: "bullets",
        heading: "Before You Start: Details To Collect",
        intro: "Most providers ask for the same handful of values. Gather them from your provider's own help pages first.",
        items: [
          "The SMTP host name for your provider.",
          "Port and encryption type (commonly 587 with STARTTLS or 465 with SSL/TLS; your provider's documentation is authoritative).",
          "Username, usually your full email address or an API username for transactional services.",
          "Password or app password. Providers that use 2FA often require an app-specific password rather than your normal one.",
          "The From address and display name you want recipients to see.",
        ],
      },
      {
        type: "steps",
        heading: "Troubleshooting A Failed Connection",
        intro: "General SMTP checks that apply whichever provider you use.",
        steps: [
          { title: "Authentication Failed", body: "Re-enter the password, and check whether your provider requires an app password or needs SMTP access switched on first." },
          { title: "Connection Timed Out", body: "Confirm the host and port. A wrong port or an encryption mismatch is the usual cause." },
          { title: "Sender Rejected", body: "The From address may not be verified with your provider. Transactional services typically require domain or sender verification." },
          { title: "Delivered To Spam", body: "Ask whoever manages your domain to check the SPF, DKIM and DMARC records for the service you send through." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Test On Yourself First",
        body: "Scan your own card or a colleague's, and let the first intro go to an address you control. You'll see exactly what recipients see, and you can use the 5-second window to practise editing or cancelling.",
      },
    ],
    faqs: [
      { q: "Is my SMTP password stored securely?", a: "eCard states that SMTP passwords and API keys are encrypted with AES-256-GCM." },
    ],
  },
  "resources/guides/connecting-telegram": {
    sections: [
      {
        type: "bullets",
        heading: "Before You Start",
        items: [
          "Install Telegram on the phone you carry to meetings and sign in.",
          "Sign in to your eCard workspace in a browser so you can open Settings → Telegram.",
          "If you belong to more than one workspace, be sure you are in the one you want cards to land in.",
          "Keep one real card nearby to test with as soon as the link works.",
        ],
      },
      {
        type: "steps",
        heading: "Troubleshooting The Link",
        steps: [
          { title: "The Bot Rejects The Code", body: "Generate a fresh one-time code in Settings → Telegram and send it promptly; one-time codes are meant to be used once." },
          { title: "Nothing Happens When I Send A Photo", body: "Check that you are chatting with the same bot you linked, and that your phone has a data connection." },
          { title: "The Contact Went To The Wrong Workspace", body: "Repeat the linking step from the workspace you actually want to use." },
          { title: "The Scan Looks Wrong", body: "Send a clearer photo: flat card, even light, no glare. The same photo tips apply as for browser scans." },
        ],
      },
      {
        type: "split",
        heading: "Sample: A Ten-minute Coffee Meeting",
        body: [
          "Sample: you meet Arjun Rao, a startup founder, for coffee. As he leaves you photograph his card and send it to the bot. The contact is saved and the chat shows Open and Send buttons.",
          "You tap Open on the walk back to add a note about what you discussed, then use Send once you're ready to introduce yourself.",
        ],
        points: ["Photo within a minute of parting", "Note while it is fresh", "Follow up the same day"],
      },
    ],
    faqs: [
      { q: "Do I need a paid plan for the Telegram bot?", a: "No. eCard lists the Telegram bot in the base set included on every plan." },
    ],
  },
  "resources/guides/importing-contacts-csv": {
    sections: [
      {
        type: "bullets",
        heading: "Clean-up Checklist Before Importing",
        items: [
          "One person per row, with no merged cells or blank rows in the middle.",
          "A single header row with clear column names such as Name, Company, Email and Phone.",
          "Phone numbers stored as text so your spreadsheet doesn't drop leading zeros or country codes.",
          "Obvious duplicates and test entries removed before the file reaches eCard.",
          "The file saved as UTF-8 CSV so names in Hindi, Marathi or with accents survive the import.",
        ],
      },
      {
        type: "steps",
        heading: "Troubleshooting A Messy Import",
        steps: [
          { title: "Garbled Characters", body: "Re-export the file as UTF-8 CSV from your spreadsheet program." },
          { title: "Values In The Wrong Columns", body: "Check your header names and look for stray commas inside unquoted values." },
          { title: "Lots Of Duplicates", body: "Use eCard's duplicate merge after the import, then spot-check the merged records." },
          { title: "Contacts You No Longer Want", body: "Archive or blacklist them rather than deleting history you might need later." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Field Mapping",
        body: "eCard's site names CSV import but does not document field-level mapping. Check the import screen in the app to see which columns it recognises.",
      },
    ],
  },
  "resources/guides/creating-your-digital-card": {
    sections: [
      {
        type: "bullets",
        heading: "Before You Start",
        items: [
          "A clear, recent headshot or your company logo.",
          "The exact job title and company name you want people to save.",
          "The one phone number and email you actually answer.",
          "Any brochure or PDF you want to share alongside the card.",
        ],
      },
      {
        type: "split",
        heading: "Sample: A Card That Gets Saved",
        body: [
          "Sample: Rahul Mehta, Sales Lead. His card has a photo, a one-line description of what he helps with, one phone number, one email, and a short link in the style of /c/rahul.",
          "At an event he shows the QR code; the other person scans it in their phone browser and taps Save-to-contacts. No app is needed on either side.",
        ],
        points: ["One line on what you do", "One number, one email", "QR ready on your phone", "Short link in your email signature"],
      },
      {
        type: "bullets",
        heading: "Common Mistakes",
        items: [
          "Listing every phone number you have, so people save the wrong one.",
          "Using a long job title that gets cut off on small screens.",
          "Forgetting to test the QR code on someone else's phone before an event.",
          "Reading click counts as a list of people. eCard filters bots out of short-link clicks, but a click still isn't proof someone read the card.",
        ],
      },
    ],
    faqs: [
      { q: "Can I use my own brand and domain?", a: "White label with your logo, colours and a custom domain is included on the Business and Enterprise plans." },
    ],
  },
  "resources/guides/inviting-your-team": {
    sections: [
      {
        type: "bullets",
        heading: "Before You Invite Anyone",
        items: [
          "Decide who owns the workspace and who will act as admin.",
          "Check your plan's user limit: 5 on Free, 20 on Starter, 100 on Professional, unlimited on Business and Enterprise.",
          "Turn on 2FA for owner and admin accounts first.",
          "Agree basic conventions, such as how you tag events and cities, so shared contacts stay consistent.",
        ],
      },
      {
        type: "table",
        heading: "Sample: Role Choices For A Small Team",
        intro: "Sample team of six. The role names are eCard's; the assignments are illustrative.",
        headers: ["Person (sample)", "Job", "Role"],
        rows: [
          ["Neha", "Founder", "Owner"],
          ["Vikram", "Operations", "Admin"],
          ["Sara", "Sales manager", "Manager"],
          ["Aman and Riya", "Sales reps", "Member"],
          ["Event helper", "Booth staff for two days", "Scan-only guest"],
        ],
      },
      {
        type: "bullets",
        heading: "Common Rollout Mistakes",
        items: [
          "Making everyone an admin to avoid permission questions.",
          "Inviting temporary event staff as full members instead of scan-only guests.",
          "Not removing people promptly when they leave.",
          "Skipping a short walkthrough, so each person invents their own tagging style.",
        ],
      },
    ],
    faqs: [
      { q: "What is a scan-only guest for?", a: "It is one of eCard's five roles. As the name suggests, it suits people such as temporary booth staff who only need to capture cards. Check the role settings in the app for its exact permissions." },
    ],
  },
  "resources/guides/enabling-2fa": {
    sections: [
      {
        type: "bullets",
        heading: "Before You Start",
        items: [
          "Install an authenticator app on your phone (any app that generates time-based codes).",
          "Make sure your phone's clock is set automatically; time-based codes fail if the clock drifts.",
          "Have a safe place ready for recovery codes, such as a password manager or a printed copy kept somewhere secure.",
        ],
      },
      {
        type: "steps",
        heading: "Troubleshooting",
        steps: [
          { title: "Codes Are Always Rejected", body: "Check that the phone's time is set automatically, then enter a fresh code rather than one about to expire." },
          { title: "Switching Phones", body: "Before wiping the old phone, move your authenticator entries or confirm you have your recovery codes." },
          { title: "Lost Phone", body: "Use a recovery code to sign in, then set up 2FA again on the new device." },
          { title: "Unexpected Login Alert", body: "Change your password and review your trusted devices straight away." },
        ],
      },
      {
        type: "bullets",
        heading: "Common Mistakes",
        items: [
          "Keeping recovery codes only on the same phone as the authenticator.",
          "Marking shared or public computers as trusted devices.",
          "Ignoring login alerts because they look routine.",
        ],
      },
    ],
    faqs: [
      { q: "Does eCard send 2FA codes by SMS?", a: "eCard describes 2FA with authenticator codes. Its site does not mention SMS codes." },
    ],
  },
  "resources/guides/setting-up-webhooks": {
    sections: [
      {
        type: "bullets",
        heading: "Before You Start",
        items: [
          "A Professional, Business or Enterprise plan. Webhooks are not included on Free or Starter.",
          "An HTTPS endpoint you control that can receive POST requests.",
          "Somewhere to log incoming requests while you test.",
          "A clear decision about what the receiving system should do with each new contact.",
        ],
      },
      {
        type: "steps",
        heading: "Troubleshooting A Webhook Receiver",
        intro: "General checks that apply to most webhook setups.",
        steps: [
          { title: "Nothing Arrives", body: "Confirm the URL is public, uses HTTPS, and isn't behind a firewall or a login page." },
          { title: "Requests Arrive But Fail", body: "Return a success status quickly and do slow work in the background; long-running handlers often time out." },
          { title: "Signature Check Fails", body: "Verify against the raw request body, not a reserialised copy, and make sure you are using the current secret." },
          { title: "Duplicates", body: "Make your handler idempotent so receiving the same event twice does no harm." },
        ],
      },
      {
        type: "split",
        heading: "Sample: Sending New Contacts To A Sheet",
        body: [
          "Sample: a team sends each new-contact event to a small internal service, which checks the signature and appends a row to a shared sheet the sales manager reviews.",
          "Because eCard's site does not document the payload format, the team logs a few real events first and builds the mapping from those.",
        ],
        points: ["Verify every signature", "Log before you transform", "Fail safely"],
      },
    ],
    faqs: [
      { q: "Which events are sent?", a: "eCard states that webhooks deliver signed events for each new contact. Other event types are not documented on the site." },
    ],
  },
  "resources/guides/trade-show-playbook": {
    sections: [
      {
        type: "bullets",
        heading: "Packing Checklist",
        items: [
          "Phones charged, plus a power bank for each person at the booth.",
          "Your digital card QR printed on a stand or badge as well as on your phone.",
          "A short list of qualifying questions everyone at the booth asks.",
          "An agreed tag for the event so every scan lands in the same group.",
          "A follow-up email and WhatsApp message drafted in advance.",
        ],
      },
      {
        type: "table",
        heading: "Sample: A Three-day Show Timeline",
        intro: "Sample timeline for a booth team of three.",
        headers: ["When", "What", "Owner (sample)"],
        rows: [
          ["Week before", "Create the event, agree tags, test scanning on every phone", "Team lead"],
          ["Each evening", "Review the day's scans and fix low-confidence fields", "Whoever scanned"],
          ["Day after", "Send the group follow-up to everyone met", "Team lead"],
          ["One week after", "Personal follow-up to the warmest leads", "Assigned rep"],
        ],
      },
      {
        type: "bullets",
        heading: "Common Mistakes",
        items: [
          "Waiting until you are back at the office to scan a stack of cards, by which point the conversations are forgotten.",
          "Sending one generic email to every lead, including people who asked for something specific.",
          "Not noting who visited the booth together, so useful introductions get lost.",
        ],
      },
    ],
    faqs: [
      { q: "Can temporary staff scan cards for us?", a: "eCard offers a scan-only guest role, which suits helpers who only need to capture cards." },
    ],
  },
  "resources/guides/follow-up-playbook": {
    sections: [
      {
        type: "bullets",
        heading: "Before You Hit Send: A Checklist",
        items: [
          "Does the first line remind them where you met?",
          "Is there one clear next step, not three?",
          "Is the message short enough to read on a phone?",
          "Have you spelled their name and company correctly?",
          "Is this the channel they offered, email or WhatsApp?",
        ],
      },
      {
        type: "bullets",
        heading: "Common Follow-up Mistakes",
        items: [
          "Attaching a large brochure to the first email instead of linking to it.",
          "Following up so often that it reads as pressure.",
          "Copying a template so closely that it ignores what the person actually said.",
          "Writing in a language the contact didn't use with you.",
        ],
      },
      {
        type: "prose",
        heading: "When There Is No Reply",
        paragraphs: [
          "Silence is normal. One polite nudge after a week or so is generally acceptable; after that, offer something useful (an article, an introduction, a relevant update) rather than simply asking again.",
          "Record what you sent and when against the contact, so you or a colleague can see the history before reaching out again.",
        ],
      },
    ],
    faqs: [
      { q: "Can I stop an intro email after sending it?", a: "eCard sends intros after a 5-second delay, and you can edit or cancel during that window. Once it has gone, it cannot be recalled." },
    ],
  },
  "resources/guides/visiting-card-etiquette": {
    sections: [
      {
        type: "bullets",
        heading: "Common Etiquette Mistakes",
        items: [
          "Pocketing a card without looking at it while the other person is still talking.",
          "Writing on someone's card in front of them where that is considered rude.",
          "Scanning a card with your phone mid-conversation without saying why.",
          "Running out of cards and having no digital fallback.",
        ],
      },
      {
        type: "split",
        heading: "Sample: An Exchange At A Business Lunch",
        body: [
          "Sample: Dr Anita Kulkarni hands you her card at a lunch. You receive it with both hands, read her name and title, and keep it on the table in front of you while you talk.",
          "Afterwards, out of view, you photograph it and add a note: met at a sample industry lunch, interested in clinic scheduling, prefers WhatsApp.",
        ],
        points: ["Receive with care", "Read it before putting it away", "Scan later, privately", "Note the preferred channel"],
      },
      {
        type: "prose",
        heading: "Offering A Digital Card Politely",
        paragraphs: [
          "If the other person prefers paper, give them paper. If you've run out, offering a QR code is fine: say what it is and that it opens in a browser, since some people hesitate to scan unfamiliar codes.",
        ],
      },
    ],
    faqs: [
      { q: "Is it rude to offer a digital card instead of paper?", a: "Generally not, as long as you accept whatever the other person offers graciously and let them choose the format." },
    ],
  },
  "resources/glossary": {
    sections: [
      {
        type: "bullets",
        heading: "Billing And Plan Terms",
        items: [
          "Base set: the features eCard includes on every plan: AI scanning; contacts, tags and events; bulk import/export; email outreach; WhatsApp; digital card; Telegram bot.",
          "Trial, new workspaces get a 14-day Professional trial with no card needed.",
          "GST: Indian goods and services tax, applied where applicable at checkout.",
          "Scan allowance, the number of scans a plan includes each month.",
        ],
      },
      {
        type: "bullets",
        heading: "Email Delivery Terms",
        intro: "General terms you'll meet when connecting a mailbox.",
        items: [
          "SPF, a DNS record listing which servers may send mail for your domain.",
          "DKIM, a cryptographic signature showing a message came from your domain and wasn't altered.",
          "DMARC, a policy telling receiving servers what to do with mail that fails SPF or DKIM checks.",
          "App password, a separate password some providers issue for apps that connect over SMTP.",
        ],
      },
    ],
    faqs: [
      { q: "What is the difference between archive and blacklist?", a: "In general terms, archiving moves a contact out of your active list, while a blacklist marks people you should not contact. Check the app for exactly how each behaves in eCard." },
      { q: "What is a key pool?", a: "A set of several AI provider keys. eCard rotates between them and fails over when one is rate-limited." },
      { q: "What does AES-256-GCM mean?", a: "It is a widely used encryption standard. eCard states it uses AES-256-GCM to encrypt API keys and SMTP passwords." },
    ],
  },
};

const MORE: Record<string, { sections: Section[]; faqs?: FAQ[] }> = {
  "resources/guides/importing-contacts-csv": {
    sections: [
      {
        type: "table",
        heading: "Sample: A Clean CSV",
        intro: "Sample rows showing a tidy layout. All names are fictional.",
        headers: ["Name", "Company", "Email", "Phone", "Tag"],
        rows: [
          ["Meera Joshi", "Sample Interiors", "meera@example.com", "+91 90000 00001", "Pune expo"],
          ["Karan Singh", "Sample Logistics", "karan@example.com", "+91 90000 00002", "Referral"],
        ],
      },
    ],
    faqs: [
      { q: "Should I import or scan old cards?", a: "If the details already sit in a clean spreadsheet, importing is faster. If they only exist on paper, scanning lets you review each field and add where you met." },
    ],
  },
  "resources/guides/inviting-your-team": {
    sections: [
      {
        type: "steps",
        heading: "When Someone Leaves",
        intro: "A short offboarding routine keeps shared contacts safe.",
        steps: [
          { title: "Remove Access The Same Day", body: "An owner or admin removes the person from the workspace." },
          { title: "Reassign Their Follow-ups", body: "Make sure warm contacts they were handling have a new owner on your side." },
          { title: "Review The Audit Log", body: "Check for unusual exports or deletions in their final weeks." },
          { title: "Rotate Shared Secrets", body: "If they knew any shared SMTP or AI key credentials, change them at the provider and update eCard." },
        ],
      },
    ],
    faqs: [
      { q: "What happens if we hit the user limit?", a: "Each plan has a published user limit, and the next plan up raises it. Business and Enterprise have unlimited users." },
    ],
  },
  "resources/guides/enabling-2fa": {
    sections: [
      {
        type: "split",
        heading: "Sample: A Phone Lost While Travelling",
        body: [
          "Sample: Farah, a workspace admin, loses her phone on a trip. Her authenticator app was on it, but her recovery codes are in her password manager on her laptop.",
          "She signs in with one recovery code, removes the lost phone from her trusted devices, sets up 2FA on a replacement phone and saves a fresh set of recovery codes.",
        ],
        points: ["Recovery codes stored off the phone", "Trusted devices reviewed", "2FA re-enrolled the same day"],
      },
    ],
    faqs: [
      { q: "Should everyone in the workspace use 2FA?", a: "It is good practice. Start with owners and admins, who can change the most, then ask every member to turn it on." },
    ],
  },
  "resources/guides/setting-up-webhooks": {
    sections: [
      {
        type: "callout",
        tone: "tip",
        title: "Keep The Secret Secret",
        body: "Treat the signing secret like a password: store it in your server's secret manager, never in source code or chat messages, and rotate it if it is ever exposed.",
      },
    ],
  },
  "resources/guides/follow-up-playbook": {
    sections: [
      {
        type: "split",
        heading: "Sample: Turning A Note Into A Follow-up",
        body: [
          "Sample note: \"Met Rohan Das, IT services, at a sample Bengaluru meetup. Asked about our Pune office. Prefers email.\"",
          "Sample follow-up: \"Hi Rohan, good to meet you at the meetup on Thursday. You asked about our Pune office: here is the address, and I'm there most Tuesdays if a coffee helps. Best, Neha.\"",
        ],
        points: ["Context in line one", "Answer what they asked", "One easy next step"],
      },
    ],
  },
  "resources/guides/visiting-card-etiquette": {
    sections: [
      {
        type: "bullets",
        heading: "A Pocket Checklist Before A Networking Event",
        items: [
          "Enough clean, uncreased cards in a holder, not loose in a wallet.",
          "Your digital card QR ready on your phone's lock screen or in a saved photo.",
          "A pen for your own notes, used away from the conversation.",
        ],
      },
    ],
  },
  "resources/guides/creating-your-digital-card": {
    sections: [
      {
        type: "callout",
        tone: "tip",
        title: "Check It On A Stranger's Phone",
        body: "Before you print the QR anywhere, ask a friend with a different phone to scan it and save you as a contact. It's the quickest way to spot a wrong number or a cut-off title.",
      },
    ],
  },
};

for (const map of [EXTRA, MORE]) {
  for (const p of pages) {
    const extra = map[p.slug];
    if (!extra) continue;
    p.sections.push(...extra.sections);
    if (extra.faqs) p.faqs = [...(p.faqs ?? []), ...extra.faqs];
  }
}
