import type { FAQ, PageDef, Section } from "../types";

export const pages: PageDef[] = [
  {
    slug: "integrations",
    category: "integrations",
    title: "Integrations",
    seoTitle: "eCard Integrations: AI, Email, Messaging & Payments",
    description: "See every tool eCard names as an integration — AI models, SMTP mailboxes, Telegram, WhatsApp, Google Contacts, Maps, webhooks and payments — and what each one does.",
    h1: "The tools eCard plugs into",
    eyebrow: "Integrations",
    intro: "eCard connects to the tools you already use for scanning, sending and syncing. This page groups each named integration by the job it does, so you can see what fits your workflow.",
    variant: "integration",
    visual: "integrations",
    icon: "link",
    sections: [
      {
        type: "cards",
        heading: "Integrations by job",
        intro: "Each integration plays a specific role in the scan-to-follow-up flow.",
        cards: [
          { title: "AI models that read cards", body: "Claude, OpenAI, Gemini, DeepSeek and Grok, plus Azure or a custom endpoint. You can bring your own key.", icon: "brain" },
          { title: "Mailboxes for intro emails", body: "Gmail, Outlook, Zoho, SendGrid, Brevo, Mailgun, Amazon SES, Resend or any SMTP host — intros go out from your own address.", icon: "mail" },
          { title: "Messaging", body: "Telegram for snapping cards from chat, and WhatsApp for AI-written follow-ups opened in one tap.", icon: "message" },
          { title: "Contacts and places", body: "Google Contacts sync on Starter and above, and Google Maps checks on scanned addresses.", icon: "map" },
          { title: "Data in and out", body: "CSV import for existing lists, and signed webhooks for every new contact on Professional and above.", icon: "webhook" },
          { title: "Paying for eCard", body: "Razorpay with UPI in India and Stripe for card payments of your eCard subscription.", icon: "rupee" },
        ],
      },
      {
        type: "prose",
        heading: "What these pages cover — and what they don’t",
        paragraphs: [
          "eCard’s public site names its integrations but does not publish detailed setup documentation for each one. The pages in this section explain the verified role of every integration and add general, practical guidance about the underlying tool — for example how SMTP sending works or what a webhook is.",
          "Where a detail is not stated by eCard, we say so plainly. If you need to know about field-level mappings, sync direction or exact configuration screens, check the settings inside your workspace or ask the eCard team before relying on it.",
        ],
      },
      {
        type: "table",
        heading: "Plan availability at a glance",
        intro: "Most integrations are part of the base feature set. These are the ones tied to a plan.",
        headers: ["Integration", "Available from"],
        rows: [
          ["AI scanning, Telegram, WhatsApp, email outreach, CSV import", "Every plan, including Free"],
          ["Google Contacts sync", "Starter (₹299/month)"],
          ["Google Calendar & Meet booking", "Starter (₹299/month)"],
          ["Webhooks", "Professional (₹999/month)"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start with two",
        body: "Most people get value fastest by connecting one AI model and one mailbox. Those two make scanning and the 5-second intro email work end to end; everything else can wait.",
      },
    ],
    faqs: [
      { q: "Do I need to pay for every integration separately?", a: "No. Integrations are part of eCard plans. Some, like Google Contacts sync and webhooks, start on specific plans. Your own AI or email provider may bill you separately for their service." },
      { q: "Is there a native mobile app integration?", a: "eCard is browser-only — it works in any phone browser with no app to install. Telegram is the chat-based way to scan on the go." },
      { q: "Can I request a new integration?", a: "eCard’s site does not list a request process. Contact the team at sales@bizzfly.com if an integration matters to your buying decision." },
    ],
    related: ["integrations/webhooks", "integrations/smtp", "integrations/telegram", "platform/bring-your-own-ai", "pricing/compare-plans"],
    source: "mixed",
  },
  {
    slug: "integrations/telegram",
    category: "integrations",
    title: "Telegram",
    seoTitle: "Telegram Integration: Scan Cards from Chat",
    description: "Link the eCard Telegram bot with a one-time code from Settings → Telegram, send a card photo, and get the contact saved with Open and Send buttons.",
    h1: "Scan visiting cards straight from Telegram",
    eyebrow: "Messaging integration",
    intro: "eCard’s Telegram bot turns a chat photo into a saved contact. Send a picture of a card and the bot replies with Open and Send buttons, so you can check the record or fire the intro email without leaving the chat.",
    variant: "integration",
    visual: "telegram",
    icon: "send",
    sections: [
      {
        type: "steps",
        heading: "Connecting the bot",
        steps: [
          { title: "Open Settings → Telegram", body: "In your eCard workspace, go to Settings → Telegram to get a one-time linking code." },
          { title: "Send the code to the bot", body: "Paste the code into the eCard bot chat in Telegram. This ties your Telegram account to your workspace." },
          { title: "Send a card photo", body: "Take or forward a photo of a visiting card. The contact is saved to your workspace." },
          { title: "Use Open or Send", body: "Tap Open to review the contact, or Send to trigger the intro email from your own mailbox." },
        ],
      },
      {
        type: "split",
        heading: "Why a chat bot works well for cards",
        body: [
          "Telegram is already open on many phones, and sending a photo is a one-handed action. That makes it handy in a crowded hall, a taxi between meetings, or when a colleague forwards you a card they collected.",
          "Because eCard runs in the browser, the bot is the fastest route for capturing on the go, while the browser workspace is where you review, tag and search.",
        ],
        points: [
          "Available on every plan, including Free",
          "One-time code from Settings → Telegram",
          "Open and Send buttons in the chat",
          "Uses the same scan count as browser scans",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not documented by eCard",
        body: "eCard’s site does not state whether group chats, albums of multiple photos, or several Telegram accounts per workspace are supported. Check inside Settings → Telegram before planning around them.",
      },
      {
        type: "bullets",
        heading: "Good habits with the bot",
        items: [
          "Photograph cards flat, in good light, with the whole card in frame.",
          "Review the saved contact before sending if the photo was blurry.",
          "Keep your linking code private — it connects chats to your workspace.",
          "Tag contacts by event later in the browser to keep shows grouped.",
        ],
      },
    ],
    faqs: [
      { q: "Where do I find the linking code?", a: "In your eCard workspace under Settings → Telegram. It is a one-time code." },
      { q: "Does the bot send emails automatically?", a: "The bot shows a Send button. Intro emails go from your own SMTP mailbox, so a mailbox needs to be connected first." },
      { q: "Is Telegram included on Free?", a: "Yes. The Telegram scanning bot is part of the base feature set on every plan." },
    ],
    related: ["features/telegram-bot", "features/telegram-bot/connect-workspace", "resources/guides/connecting-telegram", "mobile/telegram-on-the-go"],
    source: "mixed",
  },
  {
    slug: "integrations/whatsapp",
    category: "integrations",
    title: "WhatsApp",
    seoTitle: "WhatsApp Integration: AI Follow-Ups in 3 Languages",
    description: "eCard writes a WhatsApp follow-up in English, Hindi or Marathi and opens it in WhatsApp with one tap, so you send it yourself from your own number.",
    h1: "WhatsApp follow-ups, written for you",
    eyebrow: "Messaging integration",
    intro: "For many contacts, WhatsApp gets a faster reply than email. eCard drafts a follow-up message with AI in English, Hindi or Marathi and opens it in WhatsApp in one tap, ready for you to send.",
    variant: "integration",
    visual: "whatsapp",
    icon: "message",
    sections: [
      {
        type: "prose",
        heading: "How it works",
        paragraphs: [
          "After a card is scanned, eCard can generate a short follow-up message for that contact. You choose the language — English, Hindi (हिंदी) or Marathi (मराठी) — and tap to open it in WhatsApp. The message lands in your own chat with that person, so you stay in control of what gets sent.",
          "Links you share this way can be tracked: eCard shows opens of your card, PDFs and WhatsApp links, which helps you see who engaged after a conversation.",
        ],
      },
      {
        type: "table",
        heading: "Choosing a language",
        headers: ["Language", "Often a good fit when"],
        rows: [
          ["English", "Corporate contacts, cross-region partners, formal first follow-ups"],
          ["Hindi (हिंदी)", "Contacts who chatted with you in Hindi or prefer it on WhatsApp"],
          ["Marathi (मराठी)", "Local buyers, brokers and partners in Maharashtra"],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "One tap, not a broadcast tool",
        body: "eCard opens messages in WhatsApp for you to send. Its site does not describe WhatsApp Business API sending, bulk broadcasts or reading replies back into eCard.",
      },
      {
        type: "bullets",
        heading: "Etiquette for WhatsApp follow-ups",
        items: [
          "Send within a day while the conversation is fresh.",
          "Mention where you met in the first line.",
          "Keep it to two or three short sentences.",
          "Avoid late-night messages; WhatsApp feels personal.",
        ],
      },
    ],
    faqs: [
      { q: "Which languages are supported?", a: "English, Hindi and Marathi." },
      { q: "Does eCard send WhatsApp messages without me?", a: "No. eCard writes the message and opens it in WhatsApp in one tap; you send it." },
    ],
    related: ["features/whatsapp-follow-ups", "features/outreach/one-tap-whatsapp", "features/outreach/whatsapp-marathi", "features/link-tracking/whatsapp-link-tracking"],
    source: "mixed",
  },
  {
    slug: "integrations/gmail",
    category: "integrations",
    title: "Gmail",
    seoTitle: "Send eCard Intro Emails from Gmail",
    description: "Use your Gmail address as the mailbox eCard sends intro emails from over SMTP. Preview the AI draft, then it goes out after 5 seconds unless you edit or cancel.",
    h1: "Intro emails from your Gmail address",
    eyebrow: "Email integration",
    intro: "Gmail is one of the mailboxes eCard can send from. Intros are delivered via SMTP from your own address, so replies come straight back to your inbox.",
    variant: "integration",
    visual: "email",
    icon: "mail",
    sections: [
      {
        type: "split",
        heading: "What Gmail does in eCard",
        body: [
          "When you scan a card, eCard drafts an intro email with AI. You preview it, and it sends after 5 seconds from your own SMTP mailbox — you can edit or cancel it in that window. Connecting Gmail means that mailbox is your Gmail account.",
          "Sending from your own address tends to feel more personal than a no-reply system and keeps the thread in the inbox you already check.",
        ],
        points: ["SMTP sending from your own address", "5-second send with edit or cancel", "Available on every plan", "SMTP passwords encrypted with AES-256-GCM"],
      },
      {
        type: "steps",
        heading: "General Gmail SMTP preparation",
        intro: "These are Google-side steps commonly needed for SMTP access; exact eCard screens may differ.",
        steps: [
          { title: "Turn on 2-Step Verification", body: "Google generally requires it before you can create an app password." },
          { title: "Create an app password", body: "Generate an app password in your Google account security settings for mail use." },
          { title: "Enter SMTP details in eCard", body: "Use Gmail’s SMTP host with the app password in eCard’s mailbox settings." },
          { title: "Send a test", body: "Scan your own card and let the intro send to yourself to confirm it arrives." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not stated by eCard",
        body: "eCard’s site does not say whether Gmail connects via OAuth sign-in or SMTP credentials only. Follow the prompts in your workspace.",
      },
      {
        type: "bullets",
        heading: "Keep Gmail sending healthy",
        items: [
          "Stay within Google’s daily sending limits for your account type.",
          "Use a Google Workspace address on your own domain for business intros.",
          "Write intros that sound like you — personal mail rarely lands in spam.",
        ],
      },
    ],
    faqs: [
      { q: "Will intros appear in my Gmail Sent folder?", a: "eCard’s site does not state this. Behaviour depends on how SMTP sending is handled; send yourself a test to check." },
      { q: "Can I stop an email before it sends?", a: "Yes. You preview the draft, and you can edit or cancel during the 5 seconds before it sends." },
    ],
    related: ["integrations/smtp", "integrations/outlook", "features/outreach/five-second-send", "resources/guides/setting-up-smtp"],
    source: "mixed",
  },
  {
    slug: "integrations/outlook",
    category: "integrations",
    title: "Outlook",
    seoTitle: "Outlook Mailbox for eCard Intro Emails",
    description: "Connect an Outlook or Microsoft 365 mailbox so eCard’s AI-drafted intro emails go out from your work address via SMTP, with a 5-second edit window.",
    h1: "Send intros from Outlook or Microsoft 365",
    eyebrow: "Email integration",
    intro: "If your work email lives in Outlook, eCard can send intro emails from it over SMTP. Contacts see your normal address and reply to the inbox your team already uses.",
    variant: "integration",
    visual: "email",
    icon: "mail",
    sections: [
      {
        type: "prose",
        heading: "Outlook’s role",
        paragraphs: [
          "Outlook is one of the named email providers for eCard’s intro emails. After a scan, eCard drafts an email with AI; you preview it, and it sends 5 seconds later from your own SMTP mailbox unless you edit or cancel.",
          "For companies on Microsoft 365, this keeps outreach under the same domain, signatures and compliance policies as the rest of your mail.",
        ],
      },
      {
        type: "bullets",
        heading: "Things to check with your IT admin",
        intro: "General Microsoft 365 considerations, not eCard-specific steps:",
        items: [
          "Whether authenticated SMTP submission is enabled for your mailbox.",
          "Whether your tenant requires modern authentication or app passwords.",
          "Any outbound limits or transport rules that might block automated sends.",
          "That SPF and DKIM are set for your domain.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not stated by eCard",
        body: "eCard’s site names Outlook but does not document the connection method. Check the mailbox settings in your workspace.",
      },
      {
        type: "cards",
        heading: "Who tends to choose Outlook",
        cards: [
          { title: "Corporate sales teams", body: "Keep intros on the company domain and inside existing mail policies.", icon: "briefcase" },
          { title: "Professional services", body: "Firms already standardised on Microsoft 365 avoid another mailbox.", icon: "building" },
          { title: "Mixed teams", body: "Each member can send from their own address while sharing a workspace.", icon: "users" },
        ],
      },
    ],
    faqs: [
      { q: "Can my whole team use Outlook?", a: "Intros send from your own SMTP mailbox. eCard’s site does not detail per-member mailbox setup, so check workspace settings." },
      { q: "Are my SMTP credentials stored safely?", a: "eCard states SMTP passwords are encrypted with AES-256-GCM." },
    ],
    related: ["integrations/gmail", "integrations/smtp", "features/outreach/email-providers", "features/team-security/secret-encryption"],
    source: "mixed",
  },
  {
    slug: "integrations/google-contacts",
    category: "integrations",
    title: "Google Contacts",
    seoTitle: "Google Contacts Sync for Scanned Cards",
    description: "On Starter and above, eCard syncs with Google Contacts so the people you scan can show up in the address book on your phone and Gmail.",
    h1: "Scanned cards, in your Google address book",
    eyebrow: "Contacts integration",
    intro: "Google Contacts sync is part of eCard’s Starter, Professional, Business and Enterprise plans. It helps the people you scan appear where you already look up numbers and emails.",
    variant: "integration",
    visual: "integrations",
    icon: "users",
    sections: [
      {
        type: "table",
        heading: "Which plans include it",
        headers: ["Plan", "Monthly price", "Google Contacts sync"],
        rows: [
          ["Free", "₹0", "Not included"],
          ["Starter", "₹299", "Included"],
          ["Professional", "₹999", "Included"],
          ["Business", "₹2,999", "Included"],
          ["Enterprise", "Custom", "Included"],
        ],
      },
      {
        type: "prose",
        heading: "Why sync matters",
        paragraphs: [
          "A scanned card is only useful if you can find the person when they call. Syncing to Google Contacts means caller ID, Gmail autocomplete and your Android contacts can draw on the same records you built in eCard.",
          "eCard remains the place for context — where you met, tags, events, voice notes and summaries — while Google Contacts handles everyday dialling and addressing.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Details not documented",
        body: "eCard’s site does not document field-level mapping, sync direction or sync frequency. Check in-app settings before relying on two-way edits.",
      },
      {
        type: "bullets",
        heading: "Tips before you turn it on",
        items: [
          "Merge duplicates in eCard first so you don’t copy them into Google.",
          "Archive or blacklist contacts you don’t want in your phone book.",
          "Use a dedicated Google account for work contacts if you keep personal ones separate.",
        ],
      },
    ],
    faqs: [
      { q: "Is Google Contacts sync on the Free plan?", a: "No. It starts on Starter at ₹299 per month." },
      { q: "Does sync go both ways?", a: "eCard’s site does not say. Check the sync settings in your workspace." },
    ],
    related: ["features/contact-management/google-contacts-sync", "features/contact-management/duplicate-merge", "pricing/starter", "integrations/csv-import"],
    source: "mixed",
  },
  {
    slug: "integrations/google-maps",
    category: "integrations",
    title: "Google Maps",
    seoTitle: "Google Maps Integration for eCard",
    description: "eCard checks addresses read from visiting cards against Google Maps, helping you catch misread street names and confirm locations before you save.",
    h1: "eCard and Google Maps",
    eyebrow: "Data quality integration",
    intro: "Addresses are the hardest part of a card to read correctly. eCard checks scanned addresses against Google Maps so you can spot errors while reviewing the contact.",
    variant: "integration",
    visual: "extract",
    icon: "map",
    sections: [
      {
        type: "split",
        heading: "Where the check fits",
        body: [
          "When an AI model reads a card, every field gets a confidence score and nothing is saved until you review it. The Google Maps check adds a second signal for the address field: does this place actually exist where the card says it does?",
          "That matters for site visits, deliveries and meetings, and for organising contacts by city.",
        ],
        points: ["Runs on scanned addresses", "Works alongside confidence scores", "You still review before saving"],
      },
      {
        type: "bullets",
        heading: "Common address problems on cards",
        items: [
          "Small or stylised fonts that confuse ‘8’ and ‘B’.",
          "Multiple offices printed on one card.",
          "Abbreviations like ‘Opp.’, ‘Nr.’ or ‘Bldg’.",
          "PIN codes split across lines.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not stated by eCard",
        body: "The site does not say whether eCard auto-corrects addresses or only flags them, or whether the check uses your own Google key. Review the address field yourself before saving.",
      },
      {
        type: "prose",
        heading: "Getting better address reads",
        paragraphs: [
          "Photograph the side of the card that carries the address, flat and in even light. If the card lists several branches, edit the record to keep the one that is relevant to your conversation, and note the rest in meeting memory.",
        ],
      },
    ],
    faqs: [
      { q: "Is the Maps check available on every plan?", a: "It is part of AI scanning, which is in the base feature set on every plan." },
      { q: "Will it change the address automatically?", a: "eCard’s site does not say. Treat it as a check and confirm the address during review." },
    ],
    related: ["features/ai-card-scanning/address-verification", "features/ai-card-scanning/confidence-scores", "features/ai-card-scanning/manual-review", "features/meeting-memory/meeting-locations"],
    source: "mixed",
  },
  {
    slug: "integrations/razorpay-upi",
    category: "integrations",
    title: "Razorpay & UPI",
    seoTitle: "Pay for eCard with Razorpay and UPI",
    description: "In India you can pay for an eCard subscription by UPI, net banking, wallets, EMI or cards. GST is applied where applicable. Monthly plans from ₹299.",
    h1: "Pay for eCard the Indian way",
    eyebrow: "Payments",
    intro: "Razorpay and UPI are how customers in India pay for eCard subscriptions. This is about paying eCard — not about collecting payments from your own contacts.",
    variant: "integration",
    visual: "pricing",
    icon: "rupee",
    sections: [
      {
        type: "cards",
        heading: "Payment options in India",
        cards: [
          { title: "UPI", body: "Pay from any UPI app linked to your bank account.", icon: "smartphone" },
          { title: "Net banking", body: "Pay directly from your bank’s online portal.", icon: "building" },
          { title: "Wallets", body: "Use a supported digital wallet balance.", icon: "card" },
          { title: "EMI", body: "Split the payment where your card or bank offers EMI.", icon: "calendar" },
          { title: "Cards", body: "Debit and credit cards.", icon: "card" },
        ],
      },
      {
        type: "table",
        heading: "What you’d pay monthly",
        headers: ["Plan", "Price per month (INR)"],
        rows: [["Free", "₹0"], ["Starter", "₹299"], ["Professional", "₹999"], ["Business", "₹2,999"], ["Enterprise", "Custom — contact sales"]],
      },
      {
        type: "bullets",
        heading: "Good to know",
        items: [
          "GST is applied where applicable.",
          "New workspaces get a 14-day Professional trial with no card needed.",
          "Cancel any time and keep access until the end of your billing period.",
          "Yearly billing is said to save about two months; exact totals appear at checkout.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Not a payments feature for your customers",
        body: "eCard’s site does not describe collecting payments from contacts. Razorpay and UPI appear as ways to pay for eCard itself.",
      },
    ],
    faqs: [
      { q: "Can I get a GST invoice?", a: "GST is applied where applicable. eCard’s site does not describe the invoice format; contact sales@bizzfly.com for billing questions." },
      { q: "Is EMI available?", a: "EMI is listed as a payment option in India, subject to what your bank or card supports." },
    ],
    related: ["pricing/billing-and-payments", "integrations/stripe", "pricing", "help/billing"],
    source: "verified",
  },
  {
    slug: "integrations/stripe",
    category: "integrations",
    title: "Stripe",
    seoTitle: "Stripe Card Payments for International Customers",
    description: "Outside India, eCard subscriptions are paid by card. Stripe is the named card processor, with local currency shown at checkout for supported countries.",
    h1: "Card payments for customers outside India",
    eyebrow: "Payments",
    intro: "International customers pay for eCard by card, and Stripe is one of the payment integrations eCard names. Local currency is shown at checkout for supported countries.",
    variant: "integration",
    visual: "pricing",
    icon: "card",
    sections: [
      {
        type: "prose",
        heading: "How international billing works",
        paragraphs: [
          "eCard lists prices in INR. At checkout, supported countries see their local currency, and international customers pay by card. Plans are monthly; yearly billing is said to save about two months, with exact totals shown at checkout.",
          "Stripe here relates to paying for your eCard subscription. eCard’s site does not describe using Stripe to bill your own customers.",
        ],
      },
      {
        type: "steps",
        heading: "From trial to paid",
        steps: [
          { title: "Start a workspace", body: "New workspaces get a 14-day Professional trial with no card needed." },
          { title: "Pick a plan", body: "Choose Starter, Professional or Business, or contact sales for Enterprise." },
          { title: "Pay by card", body: "Enter card details at checkout; local currency shows where supported." },
          { title: "Cancel any time", body: "You keep access until the end of the billing period." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Company cards",
        body: "If your finance team needs a specific billing address or tax ID on records, check the checkout form before paying, and email sales@bizzfly.com with questions.",
      },
      {
        type: "bullets",
        heading: "Checks before paying",
        items: [
          "Confirm your card allows international or online transactions.",
          "Note the currency shown at checkout before confirming.",
          "Keep the receipt for your accounts team.",
        ],
      },
    ],
    faqs: [
      { q: "Which currency will I be charged in?", a: "Prices are listed in INR; local currency is shown at checkout for supported countries." },
      { q: "Can international customers pay by UPI?", a: "International customers pay by card. UPI and other local methods are for India." },
    ],
    related: ["integrations/razorpay-upi", "pricing/billing-and-payments", "pricing/free-trial", "help/billing"],
    source: "verified",
  },
  {
    slug: "integrations/claude",
    category: "integrations",
    title: "Claude",
    seoTitle: "Read Visiting Cards with Claude in eCard",
    description: "Choose Anthropic’s Claude as the AI model that reads your visiting cards in eCard. Bring your own key, review confidence scores, then save the contact.",
    h1: "Use Claude to read your cards",
    eyebrow: "AI model",
    intro: "Claude is one of the AI models you can pick for card scanning in eCard. You can bring your own API key, and every extracted field comes with a confidence score for review.",
    variant: "integration",
    visual: "scan",
    icon: "brain",
    sections: [
      {
        type: "steps",
        heading: "Using Claude for scans",
        steps: [
          { title: "Get a key", body: "Create an API key in your Anthropic account." },
          { title: "Add it to eCard", body: "Enter the key in your workspace’s AI settings. eCard encrypts API keys with AES-256-GCM." },
          { title: "Pick Claude as the model", body: "Select Claude as the scanning model for your workspace." },
          { title: "Scan and review", body: "Scan a card, check the confidence on each field and save when it looks right." },
        ],
      },
      {
        type: "prose",
        heading: "Why choice of model matters",
        paragraphs: [
          "Different models handle different card styles in different ways — dense layouts, regional scripts, stylised logos. Because eCard lets you choose among Claude, OpenAI, Gemini, DeepSeek and Grok, you can try a few on your own stack of cards and keep the one that suits you.",
          "With your own key, model usage is billed to your provider account, and you can add more keys to a pool with failover.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Model versions",
        body: "eCard’s site does not list which Claude model versions are supported. Check the model options in your workspace.",
      },
      {
        type: "bullets",
        heading: "A quick test plan",
        items: [
          "Pick ten real cards with a mix of layouts.",
          "Scan each with Claude and note fields you had to correct.",
          "Repeat with another model and compare edits needed.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need my own Anthropic key?", a: "eCard lets you bring your own key. The site does not detail whether a built-in key is provided, so check your workspace." },
      { q: "Can I switch from Claude later?", a: "Yes — model choice is yours, and eCard supports several providers." },
    ],
    related: ["platform/bring-your-own-ai", "features/ai-card-scanning/choosing-a-model", "features/ai-card-scanning/bring-your-own-key", "integrations/openai"],
    source: "mixed",
  },
  {
    slug: "integrations/openai",
    category: "integrations",
    title: "OpenAI",
    seoTitle: "OpenAI as Your eCard Card-Scanning Model",
    description: "Pick OpenAI as the model that extracts names, titles and numbers from visiting cards in eCard. Use your own API key and add backups to a key pool.",
    h1: "Scan cards with OpenAI models",
    eyebrow: "AI model",
    intro: "OpenAI is one of eCard’s selectable AI models for reading visiting cards. Bring your own key, and pool several keys so scanning keeps going if one hits a limit.",
    variant: "integration",
    visual: "extract",
    icon: "brain",
    sections: [
      {
        type: "split",
        heading: "OpenAI in your scan flow",
        body: [
          "You photograph a card, OpenAI’s model reads it, and eCard shows each field with a confidence score. Nothing is saved until you review it.",
          "Your API key is encrypted with AES-256-GCM, and eCard supports a key pool with failover — useful at busy events when one key might hit a provider rate limit.",
        ],
        points: ["Bring your own key", "Field-level confidence scores", "Key pool with failover", "Review before save"],
      },
      {
        type: "table",
        heading: "Keys and limits: what to plan for",
        headers: ["Concern", "General guidance"],
        rows: [
          ["Rate limits", "New provider accounts often have low limits; add a second key to the pool before a big event."],
          ["Billing", "Usage on your own key is billed by your provider, separately from eCard."],
          ["Scan quota", "eCard plans still cap scans per month: 50 on Free, 1,000 on Starter, 5,000 on Professional."],
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not stated by eCard",
        body: "eCard’s site does not list which OpenAI models are available. Check the model picker in your workspace.",
      },
    ],
    faqs: [
      { q: "Does using my own OpenAI key bypass eCard’s scan limits?", a: "eCard’s site lists scans per month by plan and does not say a personal key changes that. Assume plan limits apply." },
      { q: "Is my key safe?", a: "eCard states API keys are encrypted with AES-256-GCM." },
      { q: "What happens if my key runs out of credit?", a: "If you have a key pool, eCard can fail over to another key. Otherwise, top up with your provider." },
    ],
    related: ["integrations/claude", "integrations/gemini", "features/ai-card-scanning/key-pool", "features/ai-card-scanning/handling-rate-limits"],
    source: "mixed",
  },
  {
    slug: "integrations/gemini",
    category: "integrations",
    title: "Gemini",
    seoTitle: "Google Gemini for Visiting-Card Scanning",
    description: "Use Google’s Gemini models to read visiting cards in eCard. Bring your own key, compare results with other models and review fields before saving.",
    h1: "Gemini as your card reader",
    eyebrow: "AI model",
    intro: "Gemini is among the AI models eCard lets you choose for scanning. If your team already uses Google’s AI tools, plugging in a Gemini key keeps things in one place.",
    variant: "integration",
    visual: "scan",
    icon: "sparkles",
    sections: [
      {
        type: "prose",
        heading: "Choosing Gemini",
        paragraphs: [
          "eCard doesn’t lock you to one AI vendor. You choose the model, and you can bring your own key. Gemini is a natural pick for teams that already manage Google Cloud billing and keys.",
          "Like every eCard model, Gemini’s output is shown field by field with confidence scores so you can correct anything before it is saved.",
        ],
      },
      {
        type: "cards",
        heading: "Things to compare when testing models",
        cards: [
          { title: "Names and titles", body: "Does it split first and last names correctly and keep designations intact?", icon: "users" },
          { title: "Phone numbers", body: "Are country codes and extensions captured cleanly?", icon: "phone" },
          { title: "Regional text", body: "How does it handle cards with Hindi or Marathi alongside English?", icon: "globe" },
          { title: "Busy layouts", body: "Does it pick the right email when several are printed?", icon: "layers" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Pool keys across providers",
        body: "eCard supports a key pool with failover. Check in your workspace whether keys from different providers can share a pool.",
      },
    ],
    faqs: [
      { q: "Is Gemini available on the Free plan?", a: "AI scanning is in the base set on every plan, and Gemini is one of the selectable models." },
      { q: "Which Gemini versions are supported?", a: "eCard’s site does not list versions. Check the model options in your workspace." },
    ],
    related: ["integrations/openai", "integrations/deepseek", "features/ai-card-scanning/ai-model-selection", "platform/bring-your-own-ai"],
    source: "mixed",
  },
  {
    slug: "integrations/deepseek",
    category: "integrations",
    title: "DeepSeek",
    seoTitle: "DeepSeek Model Support for Card Scanning",
    description: "DeepSeek is one of the AI providers eCard names for reading visiting cards. Add your own key, test it on your cards and keep the model that works best.",
    h1: "Read cards with DeepSeek",
    eyebrow: "AI model",
    intro: "eCard lists DeepSeek among the AI models you can use for scanning. It gives teams another option when weighing cost, speed and accuracy on their own cards.",
    variant: "integration",
    visual: "extract",
    icon: "brain",
    sections: [
      {
        type: "bullets",
        heading: "What eCard states about AI scanning",
        items: [
          "You choose the model: Claude, OpenAI, Gemini, DeepSeek or Grok, with Azure and custom endpoints also mentioned.",
          "You can bring your own key.",
          "Each field gets a confidence score.",
          "Nothing is saved until you review it.",
          "A key pool with failover is supported.",
        ],
      },
      {
        type: "prose",
        heading: "Why teams look at alternative models",
        paragraphs: [
          "Model pricing and performance shift often. Having several providers available means you can move if one becomes expensive, slow or restricted for your organisation, without changing how your team scans.",
          "Before switching, run the same batch of cards through your current model and DeepSeek and count how many fields you correct by hand. That number, not a benchmark, tells you what matters for your workflow.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Check your data policies",
        body: "Card images are sent to the AI provider you choose. Review DeepSeek’s data handling terms against your organisation’s policies before adopting it.",
      },
    ],
    faqs: [
      { q: "Is DeepSeek on every plan?", a: "AI scanning is included on every plan. Model choice is yours." },
      { q: "Does eCard document DeepSeek setup?", a: "The site names DeepSeek but does not publish setup steps. Follow the AI settings in your workspace." },
    ],
    related: ["integrations/grok", "integrations/claude", "features/ai-card-scanning/choosing-a-model", "features/ai-card-scanning/accuracy-and-review"],
    source: "mixed",
  },
  {
    slug: "integrations/grok",
    category: "integrations",
    title: "Grok",
    seoTitle: "Grok as an eCard Scanning Model",
    description: "Use xAI’s Grok as the model that reads visiting cards in eCard. Bring your own key and review every field’s confidence score before the contact is saved.",
    h1: "Grok for visiting-card extraction",
    eyebrow: "AI model",
    intro: "Grok is one of the five AI models highlighted on eCard’s homepage for card scanning. Like the others, you can connect it with your own key.",
    variant: "integration",
    visual: "scan",
    icon: "zap",
    sections: [
      {
        type: "table",
        heading: "The AI options eCard names",
        headers: ["Provider", "Where it’s mentioned"],
        rows: [
          ["Claude, OpenAI, Gemini, DeepSeek, Grok", "Homepage feature list"],
          ["Azure", "FAQ"],
          ["Custom endpoint", "FAQ"],
        ],
      },
      {
        type: "steps",
        heading: "Trying Grok safely",
        steps: [
          { title: "Create a key with xAI", body: "Set a spending cap on your provider account if available." },
          { title: "Add it to eCard", body: "Enter the key in AI settings; eCard encrypts keys with AES-256-GCM." },
          { title: "Scan a test batch", body: "Use a handful of your own cards, not a whole event’s worth." },
          { title: "Review and decide", body: "Compare confidence scores and corrections with your current model." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Your review is the safety net",
        body: "Whatever model you use, eCard saves nothing until you review it. That makes trying a new model low-risk.",
      },
    ],
    faqs: [
      { q: "Can I use Grok and another model together?", a: "eCard supports a key pool with failover. Whether a pool can mix providers isn’t stated; check your workspace." },
      { q: "Does Grok cost extra on eCard?", a: "eCard doesn’t list a model surcharge. Usage on your own key is billed by your provider." },
    ],
    related: ["integrations/deepseek", "integrations/azure", "features/ai-card-scanning/key-rotation-failover", "platform/bring-your-own-ai"],
    source: "mixed",
  },
  {
    slug: "integrations/azure",
    category: "integrations",
    title: "Azure",
    seoTitle: "Azure AI Endpoints for Card Scanning",
    description: "eCard’s FAQ names Azure as an AI provider option for scanning cards. Useful for organisations that must keep AI usage inside their Microsoft cloud account.",
    h1: "Scan cards through your Azure AI account",
    eyebrow: "AI provider",
    intro: "eCard’s FAQ lists Azure as an AI provider you can use, alongside a custom endpoint option. For many larger organisations, routing AI through their own cloud tenancy is a policy requirement.",
    variant: "integration",
    visual: "security",
    icon: "server",
    sections: [
      {
        type: "split",
        heading: "Why enterprises ask for Azure",
        body: [
          "Companies with Microsoft agreements often prefer AI calls billed and governed through their own Azure subscription. It can simplify procurement and keep data handling under contracts they have already reviewed.",
          "In eCard, Azure is one of the provider options for reading cards. Your keys are encrypted with AES-256-GCM.",
        ],
        points: ["Named in eCard’s FAQ", "Bring your own key", "Field confidence scores", "Review before save"],
      },
      {
        type: "bullets",
        heading: "Questions to settle internally",
        items: [
          "Which Azure region your AI deployment runs in.",
          "Whether your security team has approved the model deployment.",
          "Who owns the key and how it will be rotated.",
          "Spending alerts on the Azure subscription.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not documented by eCard",
        body: "eCard’s site does not describe which Azure services or deployment types are supported. Confirm in your workspace or with sales@bizzfly.com.",
      },
    ],
    faqs: [
      { q: "Is Azure the same as a custom endpoint?", a: "eCard lists them separately in its FAQ. The site does not explain the difference in setup." },
      { q: "Is Azure only for Enterprise?", a: "eCard does not tie AI providers to plans on its site; AI scanning is on every plan." },
    ],
    related: ["features/ai-card-scanning/custom-ai-endpoints", "features/team-security/secret-encryption", "integrations/openai", "pricing/enterprise"],
    source: "mixed",
  },
  {
    slug: "integrations/zoho-mail",
    category: "integrations",
    title: "Zoho Mail",
    seoTitle: "Zoho Mail as Your eCard Sending Mailbox",
    description: "Send eCard intro emails from your Zoho Mail address via SMTP. A popular choice for Indian small businesses running mail on their own domain.",
    h1: "Intro emails from Zoho Mail",
    eyebrow: "Email integration",
    intro: "Zoho Mail is one of the named providers for eCard’s intro emails. If your business mail is on Zoho, scanned contacts get a personal intro from your own domain.",
    variant: "integration",
    visual: "email",
    icon: "mail",
    sections: [
      {
        type: "prose",
        heading: "A common setup for growing businesses",
        paragraphs: [
          "Many small and mid-sized Indian businesses use Zoho Mail for domain email. Connecting it to eCard means the 5-second intro — AI-drafted, previewed by you, editable or cancellable — goes out from the same address your clients already know.",
          "Because eCard sends via your SMTP mailbox, the email is genuinely from you, not from a shared marketing server.",
        ],
      },
      {
        type: "steps",
        heading: "General Zoho SMTP checklist",
        intro: "Zoho-side steps that typically apply; eCard screens may differ.",
        steps: [
          { title: "Confirm your data centre", body: "Zoho uses different SMTP hosts by region (for example .in vs .com accounts)." },
          { title: "Create an app-specific password", body: "Needed if two-factor sign-in is on for your Zoho account." },
          { title: "Add details in eCard", body: "Enter host, port, username and password in mailbox settings." },
          { title: "Send a test intro", body: "Scan your own card to check delivery and formatting." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Match the signature",
        body: "Keep your eCard intro sign-off consistent with your Zoho signature so threads look tidy when contacts reply.",
      },
    ],
    faqs: [
      { q: "Is Zoho Mail free to use with eCard?", a: "Email outreach from your own mailbox is in the base set on every plan. Zoho’s own plan terms apply to your mailbox." },
      { q: "Does eCard support Zoho CRM?", a: "eCard names Zoho as an email provider. It does not list Zoho CRM as an integration." },
    ],
    related: ["integrations/smtp", "integrations/gmail", "features/outreach/send-from-your-own-address", "resources/guides/setting-up-smtp"],
    source: "mixed",
  },
  {
    slug: "integrations/sendgrid",
    category: "integrations",
    title: "SendGrid",
    seoTitle: "SendGrid SMTP Relay for eCard Emails",
    description: "Route eCard intro emails through SendGrid’s SMTP relay for higher volume sending from your verified domain. Good for teams scanning hundreds of cards at events.",
    h1: "Send eCard intros through SendGrid",
    eyebrow: "Email integration",
    intro: "SendGrid is a transactional email service eCard names as a supported provider. It suits teams sending more intros than a personal mailbox comfortably handles.",
    variant: "integration",
    visual: "email",
    icon: "send",
    sections: [
      {
        type: "split",
        heading: "When a relay makes sense",
        body: [
          "Personal mailboxes have daily caps. After a large expo, a team may scan hundreds of cards and want each person to receive an intro the same day. A relay like SendGrid is built for that kind of volume.",
          "eCard still drafts each intro with AI and holds it for 5 seconds so you can edit or cancel. Only the delivery path changes.",
        ],
        points: ["Higher sending capacity", "Domain authentication", "Delivery logs in SendGrid", "Still sent from your address"],
      },
      {
        type: "steps",
        heading: "General setup outline",
        steps: [
          { title: "Verify your sender domain", body: "Complete domain authentication (SPF/DKIM) in SendGrid." },
          { title: "Create an API key for SMTP", body: "SendGrid’s SMTP relay uses an API key as the password." },
          { title: "Enter it in eCard", body: "Add the SMTP host and credentials in your mailbox settings." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Replies",
        body: "Relays send, they don’t receive. Make sure your From or Reply-To address is a real inbox so replies reach you. eCard’s site doesn’t document Reply-To settings.",
      },
    ],
    faqs: [
      { q: "Will SendGrid tracking pixels be added?", a: "That depends on your SendGrid settings, not eCard. eCard has its own tracking for card, PDF and WhatsApp link opens." },
      { q: "Do I need a paid SendGrid plan?", a: "That’s set by SendGrid. Check their limits against your expected volume." },
    ],
    related: ["integrations/mailgun", "integrations/amazon-ses", "features/outreach/email-deliverability", "features/events-expos/after-the-show"],
    source: "mixed",
  },
  {
    slug: "integrations/brevo",
    category: "integrations",
    title: "Brevo",
    seoTitle: "Brevo SMTP for eCard Intro Emails",
    description: "eCard’s FAQ lists Brevo as an email provider for intros. Use Brevo’s SMTP relay to send AI-drafted follow-ups from your domain with a 5-second edit window.",
    h1: "Use Brevo to deliver your intros",
    eyebrow: "Email integration",
    intro: "Brevo, formerly Sendinblue, is named in eCard’s FAQ as an email provider. Teams that already use Brevo for newsletters can reuse its SMTP relay for one-to-one intros.",
    variant: "integration",
    visual: "email",
    icon: "mail",
    sections: [
      {
        type: "prose",
        heading: "Keep one-to-one mail separate from campaigns",
        paragraphs: [
          "Brevo is often used for marketing campaigns. eCard intros are different: personal, one-to-one emails to someone you just met. If you use Brevo for both, consider a separate sender address or subdomain so your intros aren’t judged by campaign engagement.",
          "Within eCard, the flow is the same as with any SMTP host: the AI drafts, you preview, it sends after 5 seconds unless you edit or cancel.",
        ],
      },
      {
        type: "bullets",
        heading: "Setup considerations",
        items: [
          "Generate SMTP credentials in Brevo’s settings.",
          "Authenticate your domain in Brevo before sending.",
          "Don’t add new contacts to marketing lists without their consent.",
          "Use eCard’s compliance checklist for consent, export and deletion.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Consent matters",
        body: "A visiting card is permission for a personal follow-up, not a newsletter subscription. eCard’s site does not describe syncing contacts into Brevo lists.",
      },
    ],
    faqs: [
      { q: "Does eCard add scanned contacts to Brevo lists?", a: "eCard’s site only names Brevo as an email-sending provider. It doesn’t describe list syncing." },
      { q: "Is Brevo on every plan?", a: "Email outreach from your own mailbox is in the base set on every plan." },
    ],
    related: ["integrations/sendgrid", "integrations/resend", "platform/compliance-tools", "features/outreach/follow-up-etiquette"],
    source: "mixed",
  },
  {
    slug: "integrations/mailgun",
    category: "integrations",
    title: "Mailgun",
    seoTitle: "Mailgun Delivery for eCard Outreach",
    description: "Send eCard’s AI-drafted intro emails through Mailgun’s SMTP service. A developer-friendly relay for teams that want detailed delivery logs.",
    h1: "Mailgun as your intro email relay",
    eyebrow: "Email integration",
    intro: "Mailgun appears in eCard’s FAQ as a supported email provider. It’s a common pick for technical teams that want granular logs on every message.",
    variant: "integration",
    visual: "email",
    icon: "server",
    sections: [
      {
        type: "cards",
        heading: "What Mailgun brings",
        cards: [
          { title: "Delivery logs", body: "See accepted, delivered and bounced events in Mailgun’s dashboard.", icon: "file" },
          { title: "Domain control", body: "Send from a verified domain or subdomain.", icon: "globe" },
          { title: "Regions", body: "Mailgun offers US and EU regions with different SMTP hosts.", icon: "map" },
        ],
      },
      {
        type: "steps",
        heading: "General setup",
        steps: [
          { title: "Add and verify a domain", body: "Publish the DNS records Mailgun gives you." },
          { title: "Create SMTP credentials", body: "Set up an SMTP user for the domain." },
          { title: "Connect in eCard", body: "Enter the region’s SMTP host and credentials in mailbox settings." },
          { title: "Send yourself an intro", body: "Check Mailgun logs to confirm delivery." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Bounces stay in Mailgun",
        body: "eCard’s site doesn’t say whether bounce information is reported back into contact records. Check Mailgun’s logs if an intro doesn’t arrive.",
      },
    ],
    faqs: [
      { q: "Which Mailgun region should I use?", a: "Use the region where your Mailgun domain was created; the SMTP host differs by region." },
      { q: "Can I edit an intro before Mailgun sends it?", a: "Yes. eCard gives you a preview and 5 seconds to edit or cancel before sending." },
    ],
    related: ["integrations/sendgrid", "integrations/smtp", "features/outreach/edit-and-cancel-emails", "features/outreach/email-deliverability"],
    source: "mixed",
  },
  {
    slug: "integrations/amazon-ses",
    category: "integrations",
    title: "Amazon SES",
    seoTitle: "Amazon SES SMTP for eCard Intro Emails",
    description: "Use Amazon SES as the SMTP service behind eCard’s intro emails. Low-cost, high-volume sending for teams already on AWS, from your own verified domain.",
    h1: "Deliver intros with Amazon SES",
    eyebrow: "Email integration",
    intro: "Amazon SES is named in eCard’s FAQ among supported email providers. If your company already runs on AWS, SES can carry your eCard intros at scale.",
    variant: "integration",
    visual: "email",
    icon: "server",
    sections: [
      {
        type: "prose",
        heading: "SES in brief",
        paragraphs: [
          "Amazon Simple Email Service is AWS’s sending platform. It exposes an SMTP interface, which is how a tool like eCard can use it: you generate SMTP credentials in AWS and enter them as your mailbox.",
          "New SES accounts usually start in a sandbox that only allows sending to verified addresses. You need production access before intros can reach new contacts.",
        ],
      },
      {
        type: "table",
        heading: "SES setup checklist",
        headers: ["Step", "Why"],
        rows: [
          ["Verify your domain", "Lets you send from any address on it"],
          ["Request production access", "Removes the sandbox recipient limit"],
          ["Create SMTP credentials", "These differ from your normal AWS keys"],
          ["Use the right regional endpoint", "SES SMTP hosts are per AWS region"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Test in sandbox first",
        body: "Verify your own address and scan your own card to confirm eCard connects, before production access is granted.",
      },
      {
        type: "bullets",
        heading: "Security notes",
        items: [
          "eCard encrypts SMTP passwords with AES-256-GCM.",
          "Use an IAM user limited to sending email.",
          "Rotate SMTP credentials when staff change.",
        ],
      },
    ],
    faqs: [
      { q: "Why aren’t my intros arriving from SES?", a: "Most often the SES account is still in sandbox mode, or the domain isn’t verified in that region." },
      { q: "Does eCard charge for SES sending?", a: "Email outreach is in every eCard plan. AWS bills SES usage to your account." },
    ],
    related: ["integrations/resend", "integrations/smtp", "features/team-security/secret-encryption", "help/email-sending"],
    source: "mixed",
  },
  {
    slug: "integrations/resend",
    category: "integrations",
    title: "Resend",
    seoTitle: "Resend as an eCard Email Provider",
    description: "eCard’s FAQ lists Resend among email providers. Connect Resend’s SMTP to send AI-drafted intros from your domain with a preview and 5-second send.",
    h1: "Send intros through Resend",
    eyebrow: "Email integration",
    intro: "Resend is a newer developer-focused email service, and eCard names it as a supported provider. If your product team already uses it, eCard can share the same domain setup.",
    variant: "integration",
    visual: "email",
    icon: "send",
    sections: [
      {
        type: "split",
        heading: "Fitting Resend into eCard",
        body: [
          "Resend offers an SMTP interface alongside its API. eCard sends intro emails via SMTP from your own mailbox, so you would use Resend’s SMTP credentials.",
          "Consider a dedicated subdomain for people-to-people intros, so product notifications and personal outreach keep separate reputations.",
        ],
        points: ["SMTP credentials from Resend", "Verified domain required", "AI draft with 5-second send", "Edit or cancel any time before send"],
      },
      {
        type: "bullets",
        heading: "Before you connect",
        items: [
          "Verify your domain and wait for DNS to propagate.",
          "Create an API key with sending permission for use as the SMTP password.",
          "Pick a From address that a person actually reads.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not stated by eCard",
        body: "eCard’s site does not say whether it uses Resend’s API directly or only SMTP. Follow the options in your workspace.",
      },
    ],
    faqs: [
      { q: "Is Resend better than Gmail for intros?", a: "Not necessarily. A personal mailbox suits low volume; a relay like Resend suits teams sending many intros." },
      { q: "Will replies go to Resend?", a: "Replies go to the From or Reply-To address, so use a real inbox." },
    ],
    related: ["integrations/amazon-ses", "integrations/brevo", "features/outreach/smtp-setup", "features/outreach/email-providers"],
    source: "mixed",
  },
  {
    slug: "integrations/smtp",
    category: "integrations",
    title: "Any SMTP Host",
    seoTitle: "Connect Any SMTP Host to eCard",
    description: "eCard sends intro emails from your own SMTP mailbox — Gmail, Outlook, Zoho, a relay or any SMTP host. Learn how SMTP works and what details you need.",
    h1: "Bring any SMTP mailbox",
    eyebrow: "Email integration",
    intro: "eCard doesn’t force you onto a shared sending server. Any SMTP host can be your mailbox, so intros come from your address and your domain.",
    variant: "integration",
    visual: "email",
    icon: "settings",
    sections: [
      {
        type: "prose",
        heading: "SMTP in plain words",
        paragraphs: [
          "SMTP is the standard protocol mail servers use to send email. When eCard sends an intro, it signs in to your SMTP server with your credentials and hands over the message, just like a desktop mail app would.",
          "That’s why eCard can work with so many providers: Gmail, Outlook, Zoho, SendGrid, Brevo, Mailgun, Amazon SES, Resend, or a host your IT team runs.",
        ],
      },
      {
        type: "table",
        heading: "The details you’ll usually need",
        headers: ["Field", "What it is", "Typical values"],
        rows: [
          ["Host", "Your provider’s SMTP server name", "smtp.example.com"],
          ["Port", "Connection port", "587 (STARTTLS) or 465 (SSL)"],
          ["Username", "Usually your full email address or a relay user", "you@yourcompany.com"],
          ["Password", "Mailbox or app password, or relay key", "Stored encrypted (AES-256-GCM)"],
        ],
      },
      {
        type: "steps",
        heading: "What happens after a scan",
        steps: [
          { title: "AI drafts the intro", body: "eCard writes an email based on the scanned contact." },
          { title: "You preview it", body: "Check the draft before it goes." },
          { title: "5-second send", body: "It sends after 5 seconds from your SMTP mailbox — edit or cancel in that window." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Deliverability basics",
        body: "Set SPF, DKIM and DMARC for your domain. They tell receiving servers your SMTP host is allowed to send for you.",
      },
    ],
    faqs: [
      { q: "Can I use a self-hosted mail server?", a: "eCard says any SMTP host works. Make sure it is reachable from the internet and uses TLS." },
      { q: "Is my SMTP password safe?", a: "eCard encrypts SMTP passwords with AES-256-GCM." },
      { q: "Is SMTP sending on Free?", a: "Yes. Email outreach from your own mailbox is in the base set on every plan." },
    ],
    related: ["resources/guides/setting-up-smtp", "features/outreach/smtp-setup", "features/outreach/email-deliverability", "integrations/gmail", "help/email-sending"],
    source: "mixed",
  },
  {
    slug: "integrations/webhooks",
    category: "integrations",
    title: "Webhooks",
    seoTitle: "eCard Webhooks: Signed Events for New Contacts",
    description: "On Professional and above, eCard sends a signed webhook event for every new contact, so your CRM, sheet or automation tool can react instantly.",
    h1: "Push every new contact to your systems",
    eyebrow: "Developer integration",
    intro: "Webhooks are eCard’s way of telling other systems that a new contact exists. Each event is signed, and the feature is included from the Professional plan (₹999/month) upward.",
    variant: "integration",
    visual: "integrations",
    icon: "webhook",
    sections: [
      {
        type: "prose",
        heading: "What a webhook is",
        paragraphs: [
          "A webhook is an HTTP request one system sends to a URL you control when something happens. Instead of your CRM asking eCard for new contacts every few minutes, eCard tells it the moment a contact is created.",
          "A signed webhook includes a signature so your receiver can verify the request really came from eCard and wasn’t tampered with.",
        ],
      },
      {
        type: "cards",
        heading: "Things teams build with webhooks",
        cards: [
          { title: "CRM hand-off", body: "Create a lead in your main CRM when a card is scanned.", icon: "users" },
          { title: "Team alerts", body: "Post a message in a team chat channel for every new contact.", icon: "bell" },
          { title: "Spreadsheet logging", body: "Append rows to a sheet via an automation tool.", icon: "file" },
        ],
      },
      {
        type: "bullets",
        heading: "Receiver best practices",
        items: [
          "Verify the signature before trusting the payload.",
          "Respond quickly and process heavy work in the background.",
          "Make your handler safe to run twice for the same event.",
          "Log failures so you can spot missed events.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not documented publicly",
        body: "eCard’s site does not publish the payload format, signature scheme, retry policy or other event types. Check your workspace settings for details.",
      },
    ],
    faqs: [
      { q: "Which plans include webhooks?", a: "Professional (₹999/month), Business (₹2,999/month) and Enterprise." },
      { q: "What events are sent?", a: "eCard states signed events for each new contact. Other event types are not documented." },
    ],
    related: ["resources/guides/setting-up-webhooks", "integrations/api", "pricing/professional", "pricing/compare-plans"],
    source: "mixed",
  },
  {
    slug: "integrations/api",
    category: "integrations",
    title: "API",
    seoTitle: "eCard API: What’s Known and What to Ask",
    description: "eCard lists webhooks and an API among its team and admin features. Here’s what is stated publicly, what isn’t, and how to plan an integration.",
    h1: "The eCard API",
    eyebrow: "Developer integration",
    intro: "eCard’s site mentions “Webhooks and API” as part of its team and admin features. A public API reference is not available yet, so this page sets out what is known.",
    variant: "integration",
    visual: "integrations",
    icon: "code",
    sections: [
      {
        type: "table",
        heading: "Known vs not yet documented",
        headers: ["Topic", "Status"],
        rows: [
          ["API exists", "Stated on eCard’s site alongside webhooks"],
          ["Signed events for new contacts", "Stated (via webhooks)"],
          ["Endpoints and payloads", "Not publicly documented"],
          ["Authentication method", "Not publicly documented"],
          ["Rate limits", "Not publicly documented"],
        ],
      },
      {
        type: "split",
        heading: "Planning an integration today",
        body: [
          "If you need eCard data in another system now, webhooks (Professional and above) are the documented path for new contacts, and CSV export covers bulk transfers.",
          "For deeper API access, contact sales@bizzfly.com and describe your use case. Enterprise conversations are the right place to confirm scope.",
        ],
        points: ["Webhooks for real-time new contacts", "CSV export for bulk data", "Ask sales for API details"],
      },
      {
        type: "callout",
        tone: "info",
        title: "Keys are encrypted",
        body: "eCard states API keys are encrypted with AES-256-GCM.",
      },
    ],
    faqs: [
      { q: "Where is the API documentation?", a: "eCard has not published an API reference. Contact sales@bizzfly.com." },
      { q: "Which plan includes the API?", a: "eCard’s pricing page does not list the API by plan. Webhooks start on Professional." },
    ],
    related: ["integrations/webhooks", "features/contact-management/csv-export", "pricing/enterprise", "contact-sales"],
    source: "verified",
  },
  {
    slug: "integrations/csv-import",
    category: "integrations",
    title: "CSV Import",
    seoTitle: "Import Existing Contacts into eCard via CSV",
    description: "Bring old spreadsheets and phone exports into eCard with CSV import, then merge duplicates, tag by event and start following up. Available on every plan.",
    h1: "Bring your old contacts with you",
    eyebrow: "Data integration",
    intro: "CSV import gets the contacts you already have — from spreadsheets, old CRMs or phone exports — into eCard alongside the cards you scan. Bulk import and export are part of every plan.",
    variant: "integration",
    visual: "dashboard",
    icon: "upload",
    sections: [
      {
        type: "steps",
        heading: "Preparing a clean file",
        steps: [
          { title: "One row per person", body: "Remove blank rows and merged cells." },
          { title: "Clear column headers", body: "Use plain names like Name, Company, Email, Phone, City." },
          { title: "Save as UTF-8 CSV", body: "Keeps Hindi, Marathi and other scripts intact." },
          { title: "Import, then clean", body: "Use duplicate merge and tags in eCard after the import." },
        ],
      },
      {
        type: "bullets",
        heading: "Sample rows (fictional)",
        intro: "Sample data only:",
        items: [
          "Sample: Priya Shah, Realtor, Pune, priya@example.com",
          "Sample: Arjun Mehta, Founder, Bengaluru, arjun@example.com",
          "Sample: Dr. Neha Rao, Clinic Owner, Mumbai, neha@example.com",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Column mapping",
        body: "eCard’s site does not document required columns or mapping rules. Check the import screen in your workspace.",
      },
      {
        type: "prose",
        heading: "After the import",
        paragraphs: [
          "Imported contacts can be searched, tagged and grouped like scanned ones. Run duplicate merge, blacklist anyone you shouldn’t contact, and archive stale records. Then use natural-language search — for example, “Investors I met in Mumbai last month” — to find who to follow up with first.",
        ],
      },
    ],
    faqs: [
      { q: "Is CSV import on the Free plan?", a: "Yes. Bulk import and export are in the base set on every plan." },
      { q: "Will imports count as scans?", a: "eCard’s site doesn’t say. Scan limits relate to AI scanning; check your usage in the workspace." },
    ],
    related: ["resources/guides/importing-contacts-csv", "features/contact-management/csv-import", "features/contact-management/migrating-from-spreadsheets", "integrations/google-contacts"],
    source: "mixed",
  },
];

/* Expanded, page-specific sections and FAQs merged into the pages above. */
type Extra = { sections: Section[]; faqs?: FAQ[] };

const extras: Record<string, Extra> = {
  "integrations/telegram": {
    sections: [
      {
        type: "prose",
        heading: "What Telegram is, and why a bot suits card capture",
        paragraphs: [
          "Telegram is a cloud-based messaging app that runs on phones, desktops and the web. Bots are automated accounts inside Telegram that receive messages and reply, which makes them a natural inbox for photos you want processed without opening another tool.",
          "For card capture, that means the app you already have open after a meeting becomes the scanner. eCard’s bot saves the contact from the photo and replies with Open and Send buttons, so you can check the record or start an intro from the same chat.",
        ],
      },
      {
        type: "bullets",
        heading: "Good habits when scanning through the bot",
        items: [
          "Photograph one card per message on a plain, well-lit surface so the AI has a clean image to read.",
          "Treat the one-time code from Settings → Telegram like a password: do not paste it into group chats.",
          "If you link a shared device, remember that anything forwarded to the bot lands in the linked workspace.",
          "Open the saved record within the day to add where you met while the context is fresh.",
        ],
      },
    ],
    faqs: [
      { q: "Can I use the bot from Telegram Desktop?", a: "Telegram bots work across Telegram’s apps. eCard’s site describes sending a photo to the bot; it does not list device restrictions, so check in-app if you hit one." },
    ],
  },
  "integrations/whatsapp": {
    sections: [
      {
        type: "prose",
        heading: "Where WhatsApp fits in a follow-up workflow",
        paragraphs: [
          "WhatsApp is often the channel people actually read, especially in India, where many professionals answer messages faster than email. A short, personal message within a day of meeting tends to land better than a long formal note a week later.",
          "eCard’s role is to draft that message for you. The AI writes it in English, Hindi or Marathi, and one tap opens it in WhatsApp, where you can still edit it before pressing send. The message goes from your own WhatsApp account, so replies come straight back to you.",
        ],
      },
      {
        type: "steps",
        heading: "A sample follow-up, end to end",
        intro: "Sample scenario, fictional data: Priya Shah, a realtor, meets a buyer at a site visit.",
        steps: [
          { title: "Scan the card", body: "Priya scans the buyer’s card and reviews the extracted fields before saving." },
          { title: "Pick a language", body: "She asks for a Marathi draft, because the buyer spoke Marathi during the visit." },
          { title: "Open in WhatsApp", body: "One tap opens the draft in WhatsApp. She adds the flat number they discussed and sends." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Messaging etiquette still applies",
        body: "Only message people who gave you their card or number, keep the first message short, and stop if they ask you to. eCard’s site does not describe WhatsApp Business API messaging or bulk broadcasts, so treat this as person-to-person follow-up.",
      },
    ],
    faqs: [
      { q: "Does eCard send WhatsApp messages automatically?", a: "No automatic send step is described. eCard drafts the message and opens it in WhatsApp in one tap; you send it yourself." },
      { q: "Which languages can the AI draft in?", a: "English, Hindi and Marathi, according to eCard’s site." },
    ],
  },
  "integrations/gmail": {
    sections: [
      {
        type: "prose",
        heading: "How sending through Gmail works in general",
        paragraphs: [
          "When an app sends mail “from your Gmail”, it usually connects to Google’s outgoing mail server over SMTP using your address and a credential Google allows for that purpose. Replies arrive in your normal inbox, which keeps the conversation where you already work.",
          "Google’s account security settings decide which credentials are accepted. Many accounts with two-step verification need an app password rather than the normal sign-in password. Google Workspace admins can also restrict third-party SMTP access, so check with your admin before connecting a work account.",
        ],
      },
      {
        type: "bullets",
        heading: "Before you connect a Gmail mailbox",
        items: [
          "Confirm whether your account needs an app password or another credential type for SMTP.",
          "Check Google’s current daily sending limits for your account type before planning large event follow-ups.",
          "Decide on a consistent sign-off so intros match the rest of your mail.",
          "Send one intro to yourself first and check how it renders on phone and desktop.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "What eCard states about security",
        body: "eCard’s site says SMTP passwords are encrypted with AES-256-GCM. It does not document a Google sign-in (OAuth) flow for sending, so follow the connection screen shown in the app.",
      },
    ],
    faqs: [
      { q: "Will intros appear in my Gmail Sent folder?", a: "Mail sent through Gmail’s SMTP normally appears in Sent, but eCard’s site does not state this explicitly, so verify with a test send." },
      { q: "Can I stop an intro after clicking send?", a: "Yes. eCard sends the intro after a 5-second delay, and you can edit or cancel it during that window." },
    ],
  },
  "integrations/outlook": {
    sections: [
      {
        type: "prose",
        heading: "Outlook and Microsoft 365 mailboxes",
        paragraphs: [
          "“Outlook” can mean a personal Outlook.com address or a work mailbox on Microsoft 365. Both can send through Microsoft’s SMTP service, but work tenants are managed by an IT admin who may have SMTP authentication switched off for security reasons.",
          "eCard lists Outlook among the mailboxes you can send intros from. Because the intro leaves from your own address, the recipient sees a normal message from you, and replies come back to your Outlook inbox rather than to a shared marketing address.",
        ],
      },
      {
        type: "table",
        heading: "Questions to settle with IT first",
        intro: "General checklist for work mailboxes; answers depend on your organisation, not on eCard.",
        headers: ["Question", "Why it matters"],
        rows: [
          ["Is SMTP authentication allowed for my mailbox?", "If disabled, an external app cannot send as you."],
          ["Is an app password or other credential required?", "Accounts with multi-factor sign-in often need one."],
          ["Are there outbound sending limits?", "Event follow-ups can send many intros in one sitting."],
          ["Does policy allow third-party apps to send mail?", "Some companies require approval before connecting tools."],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Test with a colleague",
        body: "Send your first intro to a colleague on a different mail provider and ask whether it arrived in the inbox or in junk. It is a quick way to catch signature or formatting issues before real contacts see them.",
      },
    ],
    faqs: [
      { q: "Can I use a shared mailbox?", a: "eCard’s site does not say. Whether a shared mailbox can send over SMTP depends on your Microsoft 365 configuration." },
      { q: "Is my Outlook password stored safely?", a: "eCard states that SMTP passwords are encrypted with AES-256-GCM." },
    ],
  },
  "integrations/google-contacts": {
    sections: [
      {
        type: "prose",
        heading: "Why sync cards into Google Contacts",
        paragraphs: [
          "Google Contacts is the address book behind Gmail and Android phones. When a scanned contact also appears there, their name can show up on incoming calls, autocomplete in Gmail and be available to other apps that read your Google address book.",
          "eCard offers Google Contacts sync on Starter and above. The Free plan does not include it, so if your team wants scanned people to appear in Google automatically, Starter at ₹299 a month is the entry point.",
        ],
      },
      {
        type: "cards",
        heading: "What to confirm in the app",
        intro: "eCard’s site names the sync but does not document its details. Check these in settings before relying on it.",
        cards: [
          { title: "Direction", body: "Whether sync is one-way into Google or two-way, and which side wins on conflicts.", icon: "merge" },
          { title: "Field mapping", body: "Which eCard fields map to Google fields such as company, job title and notes.", icon: "layers" },
          { title: "Account scope", body: "Whether each team member syncs to their own Google account or a shared one.", icon: "users" },
        ],
      },
      {
        type: "bullets",
        heading: "Keep your address book tidy",
        items: [
          "Merge duplicates in eCard first, so they do not multiply in Google.",
          "Use tags consistently so contacts from events stay findable.",
          "Archive people you no longer need rather than leaving stale records around.",
        ],
      },
    ],
    faqs: [
      { q: "Which plans include Google Contacts sync?", a: "Starter, Professional, Business and Enterprise. It is not on Free." },
      { q: "Is there field-level mapping control?", a: "eCard’s site does not document field mapping. Check the sync settings in the app." },
    ],
  },
  "integrations/google-maps": {
    sections: [
      {
        type: "prose",
        heading: "Why addresses on cards need checking",
        paragraphs: [
          "Card addresses are some of the hardest fields to read correctly. Fonts are small, layouts break lines in odd places, and abbreviations for floors, sectors and landmarks vary by city. A single misread digit in a PIN code can send a courier or a visitor to the wrong place.",
          "eCard checks scanned addresses against Google Maps. That gives you a second signal alongside the field’s confidence score, so you can spot an address that does not look like a real location before you save the contact.",
        ],
      },
      {
        type: "steps",
        heading: "Reviewing an address before saving",
        steps: [
          { title: "Look at the confidence", body: "Every extracted field has a confidence score. A low score on the address is your cue to look closely." },
          { title: "Compare with the card", body: "Check building names, floor numbers and PIN code against the original photo." },
          { title: "Fix and save", body: "Nothing is saved until you review it, so correct the address before confirming." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "What is not documented",
        body: "eCard’s site says addresses are checked against Google Maps but does not say whether a map pin, directions link or coordinates are stored. Check the contact view in the app for what is shown.",
      },
    ],
    faqs: [
      { q: "Do I need my own Google Maps key?", a: "eCard’s site does not mention one. The bring-your-own-key option it describes is for AI models." },
      { q: "Will it correct addresses automatically?", a: "The site describes a check, not an auto-correction. You review every field before saving." },
    ],
  },
  "integrations/razorpay-upi": {
    sections: [
      {
        type: "prose",
        heading: "What Razorpay and UPI are",
        paragraphs: [
          "Razorpay is an Indian payment gateway: it lets a business accept many payment methods through one checkout. UPI, the Unified Payments Interface, is India’s real-time bank-to-bank payment system, used through bank and payment apps.",
          "On eCard, this integration is about paying for your eCard subscription. It is not a feature for collecting money from your contacts. In India you can pay by UPI, cards, net banking, wallets or EMI.",
        ],
      },
      {
        type: "bullets",
        heading: "Before you pay",
        items: [
          "Decide which plan fits your users, storage and scan needs; Starter is ₹299, Professional ₹999 and Business ₹2,999 a month.",
          "Have GST details ready if your business needs them; GST is applied where applicable.",
          "If you plan to use EMI, check eligibility with your card issuer at checkout.",
          "Remember you can start with a 14-day Professional trial, no card needed, before paying at all.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Cancelling",
        body: "You can cancel any time and keep access until the end of the period you paid for. eCard’s site does not describe refunds, so contact eCard about specific billing questions.",
      },
    ],
    faqs: [
      { q: "Can my contacts pay me through eCard?", a: "eCard’s site lists Razorpay·UPI for paying for eCard plans. It does not describe collecting payments from contacts." },
      { q: "Is UPI autopay supported for renewals?", a: "eCard’s site does not say. Check the options shown at checkout." },
    ],
  },
  "integrations/stripe": {
    sections: [
      {
        type: "prose",
        heading: "Stripe for international customers",
        paragraphs: [
          "Stripe is a global payment processor that handles card payments in many countries and currencies. eCard lists Stripe among its integrations, and its pricing notes say international customers pay by card, with local currency shown at checkout for supported countries.",
          "This makes Stripe part of how teams outside India subscribe to eCard. Like Razorpay·UPI, it concerns paying for your plan, not taking payments from the people you meet.",
        ],
      },
      {
        type: "table",
        heading: "What you will see at checkout",
        headers: ["Item", "What eCard states"],
        rows: [
          ["Listed prices", "INR per month: Starter ₹299, Professional ₹999, Business ₹2,999"],
          ["Currency", "Local currency shown at checkout for supported countries"],
          ["Payment method", "Card, for international customers"],
          ["Tax", "GST applied where applicable"],
        ],
      },
      {
        type: "bullets",
        heading: "Tips for paying from abroad",
        items: [
          "Tell your bank to expect a foreign-currency charge if your card often blocks them.",
          "Check whether your card adds foreign-transaction fees on top of the converted price.",
          "Keep the receipt for expense claims; the exact amount depends on the conversion shown at checkout.",
        ],
      },
    ],
    faqs: [
      { q: "Can I pay by bank transfer from outside India?", a: "eCard’s site says international customers pay by card. For other arrangements, Enterprise teams can contact sales@bizzfly.com." },
      { q: "Is yearly billing available?", a: "Yearly billing is said to save about two months, with exact totals shown at checkout. No yearly price is published." },
    ],
  },
  "integrations/claude": {
    sections: [
      {
        type: "prose",
        heading: "About Claude",
        paragraphs: [
          "Claude is a family of large language models made by Anthropic. Current versions can read images as well as text, which is what makes them useful for turning a photo of a visiting card into structured fields like name, title, company, phone and email.",
          "In eCard, Claude is one of the AI models you can choose to read cards. You can bring your own key, and every extracted field comes back with a confidence score for you to review before anything is saved.",
        ],
      },
      {
        type: "bullets",
        heading: "What to check with Anthropic",
        items: [
          "API usage pricing and any monthly spend limits on your account.",
          "Rate limits for your usage tier, which matter if you scan a stack of cards after an event.",
          "Anthropic’s data-use and retention terms for API traffic, so you can explain them to your team.",
          "Which current model versions accept images.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Use a key pool for busy days",
        body: "eCard supports a key pool with failover: add more than one key and it rotates and fails over when one is rate-limited. That can help after trade shows, when many cards arrive at once.",
      },
    ],
    faqs: [
      { q: "Which Claude model does eCard use?", a: "eCard’s site does not name a specific model version. Check the AI settings in the app." },
      { q: "Who bills me for AI usage?", a: "When you bring your own key, usage is billed by the provider under your account. eCard’s site does not describe reselling AI usage." },
    ],
  },
  "integrations/openai": {
    sections: [
      {
        type: "prose",
        heading: "About OpenAI models",
        paragraphs: [
          "OpenAI builds the GPT family of models. Several of its models accept images, so they can look at a card photo and return the text arranged into fields. Teams often already have an OpenAI account for other work, which makes it a convenient first choice.",
          "eCard lets you choose OpenAI to read cards and bring your own key. Whichever provider you pick, the workflow stays the same: each field gets a confidence score and you review before saving.",
        ],
      },
      {
        type: "steps",
        heading: "Setting up a key responsibly",
        steps: [
          { title: "Create a dedicated key", body: "Make a separate API key just for eCard, so you can rotate or revoke it without affecting other tools." },
          { title: "Set a budget", body: "Use the spend controls in your OpenAI account to cap monthly usage." },
          { title: "Add it in eCard", body: "eCard encrypts stored API keys with AES-256-GCM." },
          { title: "Test on a few cards", body: "Scan cards with different layouts and compare confidence scores before rolling it out to the team." },
        ],
      },
    ],
    faqs: [
      { q: "Can I mix OpenAI with another provider?", a: "eCard supports a key pool with failover and lets you choose among several providers. The site does not document per-field routing between providers." },
    ],
  },
  "integrations/gemini": {
    sections: [
      {
        type: "prose",
        heading: "About Gemini",
        paragraphs: [
          "Gemini is Google’s family of multimodal AI models. They can read images and text together, so they can interpret a card photo and pull out names, numbers and addresses. Teams already on Google Cloud may find keys and billing easiest to manage there.",
          "In eCard, Gemini is one of the models you can choose for scanning, using your own key. Address fields are separately checked against Google Maps, and every field shows a confidence score before you save.",
        ],
      },
      {
        type: "cards",
        heading: "Points to weigh when choosing Gemini",
        cards: [
          { title: "Account setup", body: "Decide whether to create the key in Google AI Studio or a Google Cloud project, based on how your company handles billing.", icon: "key" },
          { title: "Quotas", body: "Check per-minute request limits for your tier; scanning a whole event can create bursts.", icon: "clock" },
          { title: "Data terms", body: "Read Google’s terms for API data use, which can differ between free and paid tiers.", icon: "shield" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Compare on your own cards",
        body: "Accuracy depends on your cards’ languages, fonts and layouts. Scan the same small sample with two providers and compare confidence scores and corrections before settling on one.",
      },
    ],
    faqs: [
      { q: "Is Gemini better for Indian-language cards?", a: "eCard makes no comparative accuracy claims. Test on a sample of your own cards." },
      { q: "Do I need Google Cloud billing?", a: "That depends on how Google issues your key and your usage tier. Check Google’s current terms." },
    ],
  },
  "integrations/deepseek": {
    sections: [
      {
        type: "prose",
        heading: "About DeepSeek",
        paragraphs: [
          "DeepSeek is an AI company whose models are often chosen for cost efficiency. eCard’s FAQ names DeepSeek among the AI providers you can use to read cards, with your own key.",
          "Before choosing it, confirm that the DeepSeek model you plan to use accepts image input, because reading a card requires looking at the photo. Provider line-ups change, so check current documentation rather than older articles.",
        ],
      },
      {
        type: "bullets",
        heading: "What to check with the provider",
        items: [
          "Image support for the model you intend to use.",
          "Where API data is processed and stored, and whether that fits your company’s data policies.",
          "Pricing per request and any rate limits on your account.",
          "Service availability in your region.",
        ],
      },
      {
        type: "split",
        heading: "Using DeepSeek in a key pool",
        body: [
          "eCard supports a key pool with failover, so you are not tied to one provider’s availability. If one key is rate-limited, eCard rotates to another.",
        ],
        points: [
          "Pair a lower-cost provider with a second provider as backup.",
          "Keep each key dedicated to eCard so it can be rotated cleanly.",
          "Review confidence scores closely when trying a new provider.",
        ],
      },
    ],
    faqs: [
      { q: "Is DeepSeek cheaper to run in eCard?", a: "eCard’s site does not compare provider costs. Costs depend on DeepSeek’s pricing for your key." },
      { q: "Can I switch away from DeepSeek later?", a: "eCard lets you choose among several providers; check AI settings in the app to change your selection." },
    ],
  },
  "integrations/grok": {
    sections: [
      {
        type: "prose",
        heading: "About Grok",
        paragraphs: [
          "Grok is the AI model family from xAI. eCard names Grok among the providers you can choose to read cards, bringing your own key.",
          "As with any provider, the important question for card scanning is whether the model you select accepts images. Check xAI’s current model list and choose one that does.",
        ],
      },
      {
        type: "steps",
        heading: "Trying Grok on a small batch",
        intro: "A sensible general approach for any new AI provider.",
        steps: [
          { title: "Pick ten varied cards", body: "Include vertical layouts, two-sided cards, logos with text and at least one non-English card." },
          { title: "Scan and review", body: "Note which fields had low confidence scores and which you had to correct." },
          { title: "Compare", body: "Repeat with your current provider and compare corrections, not just speed." },
          { title: "Decide on a pool", body: "Keep Grok as primary, backup or neither, based on what you saw." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not documented on eCard’s site",
        body: "eCard does not publish which Grok model versions it supports or any benchmark results. Check the AI settings in the app and xAI’s documentation.",
      },
    ],
    faqs: [
      { q: "Is my Grok key encrypted?", a: "eCard states that API keys are encrypted with AES-256-GCM." },
      { q: "Does eCard fall back if Grok is unavailable?", a: "eCard supports a key pool that rotates and fails over when a key is rate-limited. Add keys from more than one provider if you want a backup." },
    ],
  },
  "integrations/azure": {
    sections: [
      {
        type: "prose",
        heading: "Why companies choose Azure for AI",
        paragraphs: [
          "Azure is Microsoft’s cloud. Organisations that already run on Microsoft often prefer to use AI models through Azure because billing, access control and data-handling agreements sit inside an existing enterprise contract.",
          "eCard’s FAQ names Azure among the AI options for reading cards, alongside custom endpoints. That can make eCard easier to approve in companies where IT requires AI traffic to go through an approved cloud account.",
        ],
      },
      {
        type: "table",
        heading: "Details to gather from your Azure admin",
        intro: "General checklist; eCard’s site does not document its Azure configuration fields.",
        headers: ["Item", "Why it matters"],
        rows: [
          ["Resource endpoint", "Identifies where requests are sent."],
          ["Deployed model and its image support", "Card reading needs a model that accepts images."],
          ["Key or credential", "Needed to authenticate; eCard encrypts stored API keys."],
          ["Region and quotas", "Affects data residency and how many cards you can process at once."],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Involve IT early",
        body: "If your company restricts AI providers, share eCard’s security points with IT up front: API keys encrypted with AES-256-GCM, two-factor sign-in, roles and a workspace audit log.",
      },
    ],
    faqs: [
      { q: "Can I use a custom endpoint instead of Azure?", a: "eCard’s FAQ mentions custom endpoints. The site does not document the exact format required." },
      { q: "Does Azure keep my data in a specific region?", a: "That depends on your Azure resource configuration, not on eCard. Check with your Azure admin." },
    ],
  },
  "integrations/zoho-mail": {
    sections: [
      {
        type: "prose",
        heading: "About Zoho Mail",
        paragraphs: [
          "Zoho Mail is a business email service popular with small and mid-sized companies, particularly in India, often used alongside other Zoho apps. It supports sending through SMTP, which is how external tools send mail as you.",
          "eCard lists Zoho among the mailboxes you can send intros from. Intros leave from your own Zoho address, after a 5-second preview window in which you can edit or cancel.",
        ],
      },
      {
        type: "bullets",
        heading: "Setup considerations",
        items: [
          "Zoho uses different server hostnames for different data centres; use the one that matches your account’s region.",
          "If two-factor authentication is on, Zoho typically requires an application-specific password for SMTP.",
          "Your Zoho admin may need to allow SMTP access for your mailbox.",
          "Check your plan’s sending limits before following up with a large event list.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Zoho CRM is a separate product",
        body: "This page is about sending email through Zoho Mail. eCard’s site does not list a Zoho CRM integration; bulk import and export are the documented ways to move contact data.",
      },
    ],
    faqs: [
      { q: "Can I sync eCard contacts into Zoho CRM?", a: "Not as a named integration. You can export contacts in bulk and import them, or use webhooks on Professional and above." },
      { q: "Is my Zoho password stored securely?", a: "eCard states that SMTP passwords are encrypted with AES-256-GCM." },
    ],
  },
  "integrations/sendgrid": {
    sections: [
      {
        type: "prose",
        heading: "What SendGrid is",
        paragraphs: [
          "SendGrid, owned by Twilio, is an email delivery service built for applications. Instead of sending through a personal mailbox, mail goes through SendGrid’s infrastructure, which handles high volumes and provides delivery reporting in its own dashboard.",
          "eCard lists SendGrid as a way to send intro emails. It suits teams that already use SendGrid for transactional mail and want intros to go out from a verified company domain.",
        ],
      },
      {
        type: "steps",
        heading: "Typical preparation in SendGrid",
        intro: "General steps on the SendGrid side; follow eCard’s connection screen for what to enter in the app.",
        steps: [
          { title: "Authenticate your domain", body: "Add the DNS records SendGrid provides so mail from your domain passes SPF and DKIM checks." },
          { title: "Verify the sender", body: "Make sure the From address you plan to use is verified." },
          { title: "Create a restricted credential", body: "Use a key limited to sending mail, dedicated to eCard." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Replies need a real inbox",
        body: "SendGrid sends mail but does not host an inbox. Make sure the reply-to address on your intros goes to a mailbox someone actually reads.",
      },
    ],
    faqs: [
      { q: "Will I see opens in eCard or SendGrid?", a: "eCard’s link tracking covers opens of your card, PDFs and WhatsApp links. Any SendGrid email analytics appear in SendGrid’s own dashboard." },
      { q: "Is SendGrid needed for intros?", a: "No. You can also use Gmail, Outlook, Zoho or any SMTP host." },
    ],
  },
  "integrations/brevo": {
    sections: [
      {
        type: "prose",
        heading: "What Brevo is",
        paragraphs: [
          "Brevo, formerly Sendinblue, is a marketing and transactional email platform. Its SMTP relay lets other apps send mail through Brevo using credentials you generate in your Brevo account.",
          "eCard’s FAQ names Brevo among the email options for intros. Because intros are one-to-one messages sent after you review an AI draft, think of Brevo here as the delivery route, not as a newsletter tool.",
        ],
      },
      {
        type: "bullets",
        heading: "Setup considerations",
        items: [
          "Authenticate your sending domain in Brevo so intros are less likely to land in spam.",
          "Generate SMTP credentials specifically for eCard so you can revoke them independently.",
          "Check your Brevo plan’s daily sending allowance against your busiest event days.",
          "Confirm the sender address is one where replies are monitored.",
        ],
      },
      {
        type: "split",
        heading: "Intros versus campaigns",
        body: [
          "A personal intro after a meeting and a marketing campaign are different kinds of mail with different expectations. Keep intros personal and short, and only add people to marketing lists with their consent.",
        ],
        points: [
          "Intro: one person, sent after you met them",
          "Campaign: many people, needs opt-in",
          "eCard’s compliance checklist covers consent, export and deletion",
        ],
      },
    ],
    faqs: [
      { q: "Does eCard add contacts to Brevo lists?", a: "eCard’s site does not describe list sync with Brevo. It names Brevo as an email-sending option." },
      { q: "Can I cancel an intro sent via Brevo?", a: "Yes, during the 5-second window before eCard sends it." },
    ],
  },
  "integrations/mailgun": {
    sections: [
      {
        type: "prose",
        heading: "What Mailgun is",
        paragraphs: [
          "Mailgun is an email delivery service for developers. It offers SMTP and API sending, domain verification, and logs that show what happened to each message, which technical teams value when diagnosing delivery problems.",
          "eCard’s FAQ lists Mailgun as one of the services you can send intros through. If your engineering team already runs Mailgun for product email, reusing a verified domain can be simpler than setting up a new one.",
        ],
      },
      {
        type: "table",
        heading: "Things to confirm in Mailgun",
        headers: ["Check", "Why"],
        rows: [
          ["Sending domain is verified", "Unverified domains deliver poorly or are blocked."],
          ["Account region", "Mailgun uses different SMTP hosts per region."],
          ["Dedicated SMTP credential", "Lets you rotate or revoke access for eCard alone."],
          ["Reply handling", "Mailgun is not an inbox; replies must route to a real mailbox."],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Use a subdomain if unsure",
        body: "Many teams send application mail from a subdomain to protect the main domain’s reputation. Decide with whoever manages your DNS before connecting.",
      },
    ],
    faqs: [
      { q: "Do Mailgun logs show eCard intros?", a: "Mail sent through Mailgun generally appears in its logs. eCard’s site does not describe Mailgun-specific reporting inside eCard." },
      { q: "Is Mailgun better than Gmail for intros?", a: "Neither is presented as better. A personal mailbox keeps intros alongside your other mail; Mailgun suits teams already using it for domain-based sending." },
    ],
  },
  "integrations/amazon-ses": {
    sections: [
      {
        type: "prose",
        heading: "About Amazon SES",
        paragraphs: [
          "Amazon Simple Email Service (SES) is AWS’s email sending service. It is widely used for low-cost, high-volume sending and works through SMTP credentials generated in the AWS console.",
          "eCard’s FAQ names Amazon SES among the services you can use for intro emails. It suits teams that already run on AWS and manage email sending there.",
        ],
      },
      {
        type: "steps",
        heading: "Typical AWS-side preparation",
        intro: "General SES steps; exact screens are AWS’s, not eCard’s.",
        steps: [
          { title: "Verify your identity", body: "Verify the domain or address you will send from in the SES region you use." },
          { title: "Leave the sandbox", body: "New SES accounts start in a sandbox that only sends to verified addresses; request production access first." },
          { title: "Create SMTP credentials", body: "Generate SES SMTP credentials, which are different from your normal AWS access keys." },
          { title: "Note the regional endpoint", body: "Each SES region has its own SMTP host." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Watch bounces",
        body: "AWS monitors bounce and complaint rates on SES accounts. Scanned cards occasionally carry outdated emails, so review addresses with low confidence scores before sending intros.",
      },
    ],
    faqs: [
      { q: "Why are my SES intros not arriving?", a: "A common cause is the SES sandbox, which only delivers to verified addresses. Check your account status in AWS." },
      { q: "Are SES credentials encrypted in eCard?", a: "eCard states SMTP passwords are encrypted with AES-256-GCM." },
    ],
  },
  "integrations/resend": {
    sections: [
      {
        type: "prose",
        heading: "About Resend",
        paragraphs: [
          "Resend is a newer email-sending service aimed at developers, known for a simple setup and modern tooling. It supports SMTP as well as its own API, with domain verification to protect deliverability.",
          "eCard’s FAQ names Resend among the options for sending intros. It can be a good fit for startups whose product email already runs through Resend.",
        ],
      },
      {
        type: "bullets",
        heading: "Setup considerations",
        items: [
          "Verify your sending domain in Resend and add the DNS records it provides.",
          "Create a credential dedicated to eCard so you can revoke it without affecting product email.",
          "Check your Resend plan’s monthly and daily limits.",
          "Set a reply-to address that reaches a monitored inbox.",
        ],
      },
      {
        type: "cards",
        heading: "Sample fit",
        intro: "Sample scenario, fictional: a five-person startup on the Free plan.",
        cards: [
          { title: "Already on Resend", body: "Their app’s mail uses Resend, so the domain is verified.", icon: "check" },
          { title: "Founder-led sales", body: "The founder scans cards at meetups and sends intros from a company address.", icon: "send" },
          { title: "Replies to a shared inbox", body: "Reply-to points to a team mailbox so nothing is missed.", icon: "mail" },
        ],
      },
    ],
    faqs: [
      { q: "Does eCard use Resend’s API or SMTP?", a: "eCard’s site lists Resend as an option but does not document the connection method. Follow the connection screen in the app." },
      { q: "Can the Free plan send intros via Resend?", a: "Email outreach from your own mailbox is in the base set on every plan, including Free." },
    ],
  },
  "integrations/smtp": {
    sections: [
      {
        type: "prose",
        heading: "SMTP in plain terms",
        paragraphs: [
          "SMTP, the Simple Mail Transfer Protocol, is the standard way email is handed from a sender to a mail server for delivery. Almost every email provider offers an SMTP server, which is why “any SMTP host” covers far more services than the ones eCard names.",
          "To send through SMTP, an app typically needs a server hostname, a port, an encryption mode and a username and password. eCard encrypts SMTP passwords with AES-256-GCM.",
        ],
      },
      {
        type: "table",
        heading: "Common SMTP settings explained",
        intro: "General reference; use the values your provider gives you.",
        headers: ["Setting", "What it means"],
        rows: [
          ["Port 587", "Usually used with STARTTLS, which upgrades the connection to encrypted."],
          ["Port 465", "Usually used with implicit TLS, encrypted from the start."],
          ["Port 25", "Often blocked for apps; generally not recommended for authenticated sending."],
          ["Username", "Often your full email address, sometimes a provider-specific ID."],
        ],
      },
    ],
    faqs: [
      { q: "My intros go to spam. What should I check?", a: "Check that your domain has SPF and DKIM records for the host you send through, and that the From address matches the authenticated domain." },
    ],
  },
  "integrations/webhooks": {
    sections: [
      {
        type: "prose",
        heading: "What a webhook is",
        paragraphs: [
          "A webhook is an HTTP request one system sends to another when something happens. Instead of your tools repeatedly asking eCard for changes, eCard pushes a notification to a URL you control when a new contact is created.",
          "eCard offers signed webhook events for each new contact on Professional and above. Signing lets your receiving system confirm the request really came from eCard and was not altered in transit.",
        ],
      },
      {
        type: "bullets",
        heading: "Building a reliable receiver",
        intro: "General best practice; eCard’s payload format and signing scheme are not published on its site.",
        items: [
          "Verify the signature on every request before trusting its contents.",
          "Respond quickly and do heavy work in the background, so the sender does not time out.",
          "Make processing idempotent, so receiving the same event twice does not create duplicates.",
          "Log failures and alert someone when your endpoint starts rejecting events.",
          "Use HTTPS for your endpoint URL.",
        ],
      },
      {
        type: "cards",
        heading: "Sample destinations",
        intro: "Ideas for where new-contact events could go; none are named eCard integrations.",
        cards: [
          { title: "Your CRM", body: "Create a lead record when a card is scanned.", icon: "users" },
          { title: "Team chat", body: "Post a message when someone on the team adds a contact.", icon: "message" },
          { title: "Automation tools", body: "Trigger a workflow in a no-code tool that accepts incoming webhooks.", icon: "zap" },
        ],
      },
    ],
    faqs: [
      { q: "Which plans include webhooks?", a: "Professional, Business and Enterprise. Free and Starter do not include them." },
      { q: "Are events sent for updates or deletions?", a: "eCard’s site describes signed events for each new contact. It does not document other event types." },
    ],
  },
  "integrations/api": {
    sections: [
      {
        type: "prose",
        heading: "What an API offers compared with webhooks",
        paragraphs: [
          "An API lets your systems ask a service for data or ask it to do something, on your schedule. Webhooks work the other way round: the service tells your system when something happens. Many integrations use both, with webhooks for real-time alerts and an API for lookups.",
          "eCard’s site mentions Webhooks and API as part of its team and admin features. It does not publish an API reference, so endpoints, authentication and rate limits are not documented publicly.",
        ],
      },
      {
        type: "bullets",
        heading: "Questions to ask eCard before building",
        items: [
          "Which plans include API access.",
          "How requests are authenticated and how credentials are rotated.",
          "Which resources are available, such as contacts, tags or events.",
          "Rate limits and pagination behaviour for large workspaces.",
          "How API activity appears in the workspace audit log.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start with export",
        body: "If you just need a one-off data move, bulk export is available on every plan and may be simpler than writing an integration. For larger projects, Enterprise contact is sales@bizzfly.com.",
      },
    ],
    faqs: [
      { q: "Is there public API documentation?", a: "Not on eCard’s site. Contact eCard for details." },
      { q: "Can I use the API to send intros?", a: "eCard’s site does not document what the API can do. Intros are described as sent from the app after a preview." },
    ],
  },
  "integrations/csv-import": {
    sections: [
      {
        type: "prose",
        heading: "Why CSV is still the universal format",
        paragraphs: [
          "CSV, comma-separated values, is a plain-text table that almost every contact tool, spreadsheet and CRM can export. That makes it the easiest way to bring an old address book, a spreadsheet of leads or an export from another app into eCard.",
          "Bulk import and export sit in the base set on every plan, and eCard’s clean-data tools include duplicate merge, blacklist and archive for tidying anything that overlaps with cards you have already scanned.",
        ],
      },
      {
        type: "steps",
        heading: "Preparing a clean file",
        steps: [
          { title: "One person per row", body: "Split rows that contain two people, and remove blank or summary rows." },
          { title: "Clear headers", body: "Use simple column names like Name, Company, Email and Phone." },
          { title: "Consistent phone numbers", body: "Include country codes, so WhatsApp follow-ups open correctly." },
          { title: "Save as UTF-8", body: "This keeps names in Hindi, Marathi or accented Latin script from turning into garbled characters." },
          { title: "Test with a few rows", body: "Import a small sample first and check how fields landed." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not documented",
        body: "eCard’s site does not publish a CSV template, column mapping rules or a row limit. Check the import screen in the app, and keep plan storage in mind, from 1 GB on Free.",
      },
    ],
    faqs: [
      { q: "Will importing create duplicates?", a: "It can if records overlap with existing contacts. eCard includes duplicate merge to clean them up afterwards." },
      { q: "Can I export everything again later?", a: "Yes. Bulk export is in the base set on every plan, and export is part of eCard’s compliance checklist." },
    ],
  },
};

const more: Record<string, Section[]> = {
  integrations: [
    {
      type: "steps",
      heading: "Which connections to set up first",
      intro: "A general order that suits most new workspaces; adjust it to how your team actually meets people.",
      steps: [
        { title: "Choose an AI model", body: "Scanning is the heart of eCard, so pick a provider such as Claude, OpenAI or Gemini and add your key, or several keys for failover." },
        { title: "Connect a mailbox", body: "Link Gmail, Outlook, Zoho or another SMTP host so intro emails leave from your own address." },
        { title: "Link Telegram", body: "Generate a one-time code in Settings → Telegram if you would rather forward photos than open the browser." },
        { title: "Add the rest as you grow", body: "Google Contacts sync arrives on Starter, webhooks on Professional, and CSV import is there whenever you need to bring in an old list." },
      ],
    },
  ],
  "integrations/whatsapp": [
    {
      type: "callout",
      tone: "tip",
      title: "Save numbers with country codes",
      body: "WhatsApp links rely on a full international number. When reviewing a scanned card, check that the mobile number includes the country code, such as +91 for India, so the one-tap open reaches the right person.",
    },
  ],
  "integrations/gmail": [
    {
      type: "callout",
      tone: "tip",
      title: "Personal Gmail versus Workspace",
      body: "A free @gmail.com address and a company address on Google Workspace both use Google’s mail servers, but the company address usually looks more credible in a business intro and is governed by your admin’s settings.",
    },
  ],
  "integrations/outlook": [
    {
      type: "callout",
      tone: "info",
      title: "Replies stay in Outlook",
      body: "Because intros go out from your own mailbox, any reply lands in your Outlook inbox alongside the rest of your mail, where you can file it, flag it or forward it to a colleague as usual.",
    },
  ],
  "integrations/google-contacts": [
    {
      type: "prose",
      heading: "Sample: how a small team might use sync",
      paragraphs: [
        "Sample scenario, fictional: a six-person architecture studio on Starter. Each partner scans cards from client meetings in eCard. With sync on, those clients can also appear in the partners’ Google address books, so a returning client’s name shows when they call. The studio keeps tags and meeting notes in eCard, where the team can search them, and treats Google Contacts as the phone-side address book rather than the place for notes.",
      ],
    },
  ],
  "integrations/google-maps": [
    {
      type: "bullets",
      heading: "Address quirks worth knowing",
      intro: "General patterns that trip up any card reader, human or AI.",
      items: [
        "Landmark-based addresses (“near the temple, opp. bus stand”) may not map to an exact point.",
        "New buildings and recently renamed roads may be missing or listed under older names.",
        "Cards listing several branch offices need you to decide which address belongs on the contact.",
        "Floor and unit numbers rarely show up on maps, so verify them against the card itself.",
      ],
    },
  ],
  "integrations/razorpay-upi": [
    {
      type: "table",
      heading: "Indian payment methods at a glance",
      intro: "General descriptions of the methods eCard accepts in India.",
      headers: ["Method", "How it works"],
      rows: [
        ["UPI", "Pay from your bank account through a UPI app using a UPI ID or QR."],
        ["Cards", "Debit or credit card payment at checkout."],
        ["Net banking", "Pay by signing in to your bank’s online banking."],
        ["Wallets", "Pay from a stored-value digital wallet balance."],
        ["EMI", "Spread a card payment over instalments, subject to your issuer."],
      ],
    },
  ],
  "integrations/stripe": [
    {
      type: "callout",
      tone: "note",
      title: "Prices are listed in INR",
      body: "eCard publishes its prices in Indian rupees. The amount you see in your own currency at checkout is a conversion, so it can differ slightly over time as exchange rates move. Use the checkout figure, not a calculation from the INR list price, for budgeting.",
    },
  ],
  "integrations/claude": [
    {
      type: "callout",
      tone: "info",
      title: "You stay in control of saves",
      body: "Whatever Claude reads, nothing is saved until you review it, so a misread digit is caught on screen rather than discovered later.",
    },
  ],
  "integrations/openai": [
    {
      type: "prose",
      heading: "Keeping costs predictable",
      paragraphs: [
        "With your own key, AI usage is charged by OpenAI rather than bundled into your eCard plan. Costs generally scale with the number of images processed and the model you choose, so a busy expo week will cost more than a quiet month.",
        "Two simple habits help: retake blurry photos instead of scanning them repeatedly, and review OpenAI’s usage dashboard after your first big event to set a sensible monthly limit. eCard’s own plans separately cap scans per month, from 50 on Free to 5,000 on Professional and unlimited on Business.",
      ],
    },
  ],
  "integrations/gemini": [
    {
      type: "prose",
      heading: "Sample: a mixed-language stack of cards",
      paragraphs: [
        "Sample scenario, fictional: after a regional trade fair, Arjun Rao has forty cards, some bilingual in English and Kannada. He scans them with Gemini as the primary model, then sorts by confidence score and reviews the low-scoring fields first. Any card where several fields are uncertain he rescans with a cleaner photo before saving.",
      ],
    },
  ],
  "integrations/deepseek": [
    {
      type: "prose",
      heading: "Explaining a provider choice to your team",
      paragraphs: [
        "When you add a lower-profile provider, colleagues and IT may ask why. Keep a short note covering what you tested, which fields needed correction, where the provider processes data and which backup key sits in the pool. That record makes it easier to revisit the decision later, and it fits naturally alongside eCard’s workspace audit log and roles for keeping track of who changes settings.",
      ],
    },
  ],
  "integrations/grok": [
    {
      type: "prose",
      heading: "Why offer so many AI providers?",
      paragraphs: [
        "Different teams have different constraints. Some already pay for one provider; some have IT rules about where data goes; some care most about cost, others about accuracy on a particular language. By supporting Claude, OpenAI, Gemini, DeepSeek, Grok, Azure and custom endpoints, eCard leaves that choice with you.",
        "Grok is simply one more option in that list. If your organisation already has an xAI account, it may be the least effort to set up; if not, there is no requirement to use it.",
      ],
    },
  ],
  "integrations/azure": [
    {
      type: "split",
      heading: "Azure or a direct provider key?",
      body: [
        "Both routes let eCard read cards with your own credentials. The difference is mostly organisational: who signs the contract, who controls access and where usage is billed.",
        "Individuals and small teams usually find a direct key quicker. Larger organisations with Microsoft agreements often prefer Azure because it reuses approvals they already have.",
      ],
      points: [
        "Direct key: fastest to start",
        "Azure: fits existing Microsoft governance",
        "Either way: keys encrypted with AES-256-GCM",
        "Either way: fields reviewed before saving",
      ],
    },
  ],
  "integrations/zoho-mail": [
    {
      type: "prose",
      heading: "Sample: a Zoho-based sales desk",
      paragraphs: [
        "Sample scenario, fictional: a distributor in Pune runs company email on Zoho Mail. Each salesperson connects their own Zoho mailbox in eCard, so intros come from their personal work address and replies go back to the right person instead of a general inbox.",
      ],
    },
  ],
  "integrations/sendgrid": [
    {
      type: "prose",
      heading: "When a delivery service makes sense",
      paragraphs: [
        "A personal mailbox is the simplest route for most people: intros come from you and live in your Sent folder. A delivery service such as SendGrid makes more sense when a company wants consistent domain authentication across many senders, or when IT prefers not to hand SMTP access to individual mailboxes.",
        "The trade-off is that you need someone comfortable with DNS records and sender verification, and you must plan where replies go. For a solo user, connecting Gmail or Outlook is usually less work.",
      ],
    },
  ],
  "integrations/brevo": [
    {
      type: "prose",
      heading: "Deliverability basics for Brevo senders",
      paragraphs: [
        "Inbox placement depends heavily on your domain’s reputation. Authenticating the domain with SPF and DKIM, and ideally publishing a DMARC policy, tells receiving servers that Brevo is allowed to send on your behalf.",
        "Keep intro content plain and personal: a short note, a link to your digital card and a clear sign-off. Heavy images, many links or sales language can make a one-to-one intro look like bulk mail to spam filters.",
      ],
    },
  ],
  "integrations/mailgun": [
    {
      type: "steps",
      heading: "Connecting Mailgun, in general terms",
      intro: "Mailgun-side steps; enter the resulting details on eCard’s connection screen.",
      steps: [
        { title: "Add the domain", body: "Add your sending domain or subdomain in Mailgun." },
        { title: "Publish DNS records", body: "Add the SPF, DKIM and tracking records Mailgun lists, then wait for verification." },
        { title: "Create SMTP credentials", body: "Create a credential for eCard and note the SMTP host for your region." },
        { title: "Send a test intro", body: "Send to an address you control and check headers for passing authentication." },
      ],
    },
  ],
  "integrations/amazon-ses": [
    {
      type: "callout",
      tone: "info",
      title: "Replies and SES",
      body: "SES sends mail but does not give you a mailbox. Use a From or reply-to address hosted with a mail provider your team reads, so replies to intros are not lost.",
    },
  ],
  "integrations/resend": [
    {
      type: "prose",
      heading: "Domain reputation and shared senders",
      paragraphs: [
        "If your product already sends password resets and receipts through Resend, adding personal intros to the same domain means both share a reputation. Some teams prefer a separate subdomain for human-to-human mail so a spike in complaints on one stream does not affect the other.",
        "Whatever you choose, keep intros genuinely personal. eCard drafts them with AI and shows you a preview for 5 seconds before sending, so take that moment to add a detail from the conversation.",
      ],
    },
  ],
  "integrations/smtp": [
    {
      type: "bullets",
      heading: "Troubleshooting a failed connection",
      intro: "General checks that solve most SMTP setup problems.",
      items: [
        "Authentication failed: confirm you are using an app password if your provider requires one.",
        "Connection timed out: check the hostname and try the other common port with its matching encryption mode.",
        "Sender rejected: the From address must usually match the account you authenticate with.",
        "Messages accepted but not delivered: check your provider’s sent log and spam folder at the destination.",
      ],
    },
  ],
  "integrations/webhooks": [
    {
      type: "callout",
      tone: "note",
      title: "Plan for your endpoint being down",
      body: "eCard’s site does not document retry behaviour. Design your receiver so a missed event can be recovered, for example by reconciling against a periodic export.",
    },
  ],
  "integrations/api": [
    {
      type: "table",
      heading: "Choosing between export, webhooks and an API",
      intro: "General comparison of integration approaches, with what eCard states about each.",
      headers: ["Approach", "Best for", "What eCard states"],
      rows: [
        ["Bulk export", "One-off moves and backups", "Included on every plan"],
        ["Webhooks", "Reacting to each new contact as it arrives", "Signed events, Professional and above"],
        ["API", "Two-way or on-demand integrations", "Mentioned; no public reference"],
        ["Google Contacts sync", "Getting contacts onto phones and Gmail", "Starter and above"],
      ],
    },
    {
      type: "prose",
      heading: "Security considerations for any API integration",
      paragraphs: [
        "Whatever credentials an API uses, treat them like passwords: store them in a secrets manager, give each integration its own credential, and rotate them when someone with access leaves. Limit what the integration can do to what it actually needs, and review the workspace audit log after go-live.",
      ],
    },
  ],
  "integrations/csv-import": [
    {
      type: "callout",
      tone: "tip",
      title: "Exporting from a phone or another app",
      body: "Most address books export to CSV or vCard. If yours only offers vCard, open it in a spreadsheet tool or converter to produce a CSV first, then check the columns before importing.",
    },
  ],
};

more["integrations/mailgun"].push({
  type: "callout",
  tone: "tip",
  title: "Keep credentials scoped",
  body: "Give eCard its own Mailgun SMTP user rather than reusing one shared with your product’s backend. If a teammate leaves or a key is exposed, you can rotate the eCard credential without touching production mail.",
});
more["integrations/amazon-ses"].push({
  type: "bullets",
  heading: "Choosing an SES region",
  items: [
    "Use the region where your domain is already verified, if you have one.",
    "Consider data-residency rules your company follows for email content.",
    "Remember that sending quotas and sandbox status are tracked separately per region.",
  ],
});
more["integrations/grok"].push({
  type: "callout",
  tone: "info",
  title: "Same review step, any model",
  body: "Switching to Grok does not change how contacts are saved: each field still shows a confidence score, addresses are still checked against Google Maps, and nothing is stored until you confirm it.",
});

const moreFaqs: Record<string, FAQ> = {
  "integrations/mailgun": { q: "Can I use Mailgun’s EU region?", a: "Mailgun offers regional SMTP hosts. eCard’s site does not restrict which host you use; enter the one that matches your Mailgun account." },
  "integrations/amazon-ses": { q: "Do I need an AWS account to send intros?", a: "Only if you choose Amazon SES. eCard also supports Gmail, Outlook, Zoho, SendGrid, Brevo, Mailgun, Resend or any SMTP host." },
  "integrations/grok": { q: "Do I need an xAI account?", a: "Yes, if you want to use Grok with your own key. The key comes from xAI and usage is billed by xAI under your account." },
  "integrations/gemini": { q: "Can Gemini and Claude both sit in my key pool?", a: "eCard supports several providers and a key pool with failover. Check the AI settings in the app for how mixed-provider pools are configured." },
  "integrations/razorpay-upi": { q: "Is GST added to the listed price?", a: "eCard’s pricing notes say GST is applied where applicable. The final amount, including any tax, is shown at checkout." },
  "integrations/api": { q: "Who should I contact about API access for a large rollout?", a: "eCard lists sales@bizzfly.com as the Enterprise contact, which is a sensible starting point for integration questions at scale." },
  "integrations/zoho-mail": { q: "Can I preview the intro before it leaves Zoho?", a: "Yes. eCard shows you the AI draft and sends it after 5 seconds, during which you can edit or cancel." },
  "integrations/stripe": { q: "Can I cancel a card-paid subscription?", a: "Yes. eCard says you can cancel any time and keep access until the end of your billing period." },
  "integrations/csv-import": { q: "Should I import before or after scanning my cards?", a: "Either works. Importing your existing list first makes it easier to spot duplicates as new cards come in, and duplicate merge can tidy overlaps afterwards." },
  "integrations/webhooks": { q: "Can I test webhooks during the trial?", a: "New workspaces get a 14-day Professional trial, and webhooks are a Professional feature, so the trial is a natural time to try them." },
  "integrations/azure": { q: "Is Azure required for enterprise use?", a: "No. Azure is one option. eCard also supports Claude, OpenAI, Gemini, DeepSeek, Grok and custom endpoints." },
  "integrations/brevo": { q: "Do I need a paid Brevo plan?", a: "That depends on Brevo’s current plans and your sending volume. Check Brevo’s limits against your busiest follow-up days." },
  "integrations/deepseek": { q: "Will DeepSeek read non-English cards?", a: "eCard makes no language claims per provider. Test a sample of your own cards and review the confidence scores." },
  "integrations/resend": { q: "Can several team members send through one Resend domain?", a: "Domain sending is configured in Resend. eCard’s site does not describe per-user sender settings, so check the connection screen in the app." },
  "integrations/smtp": { q: "Which port should I use?", a: "Use whatever your provider documents. Port 587 with STARTTLS and port 465 with implicit TLS are the most common choices." },
  "integrations/google-contacts": { q: "Can I try Google Contacts sync before paying?", a: "The 14-day Professional trial includes the Professional feature set, which covers Google Contacts sync." },
};

for (const p of pages) {
  if (more[p.slug]) p.sections = [...p.sections, ...more[p.slug]];
  const x = extras[p.slug];
  const extraFaqs = [...(x?.faqs ?? []), ...(moreFaqs[p.slug] ? [moreFaqs[p.slug]] : [])];
  if (x) p.sections = [...p.sections, ...x.sections];
  if (extraFaqs.length) p.faqs = [...(p.faqs ?? []), ...extraFaqs].slice(0, 5);
}
