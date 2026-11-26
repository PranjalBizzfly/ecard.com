import type { FAQ, PageDef, Section } from "../types";

export const pages: PageDef[] = [
  {
    slug: "help",
    category: "support",
    title: "Help Center",
    seoTitle: "eCard Help Center",
    description: "Find answers about eCard accounts, sign-in, billing, scanning, email sending, Telegram and data privacy, or learn how to get in touch with the eCard team.",
    h1: "How Can We Help?",
    eyebrow: "Help",
    intro: "Choose a topic below. Each help page sticks to what eCard publicly documents and tells you when to rely on prompts inside the app.",
    variant: "support",
    visual: "none",
    icon: "help",
    sections: [
      {
        type: "cards",
        heading: "Help Topics",
        cards: [
          { title: "FAQ", body: "Quick answers to the most common questions.", icon: "help" },
          { title: "Account & Sign-in", body: "Signing up, signing in and keeping your account secure.", icon: "lock" },
          { title: "Password Reset", body: "Getting a reset link by email.", icon: "key" },
          { title: "Billing", body: "Plans, payment methods, GST, trial and cancellation.", icon: "rupee" },
          { title: "Scanning", body: "Better scans, confidence scores and scan limits.", icon: "scan" },
          { title: "Email Sending", body: "SMTP setup and the 5-second send window.", icon: "mail" },
          { title: "Telegram", body: "Linking the bot and saving cards from chat.", icon: "send" },
          { title: "Data & Privacy", body: "Encryption, export, deletion and consent.", icon: "shield" },
        ],
      },
      {
        type: "bullets",
        heading: "Quick Facts",
        items: [
          "eCard runs in any phone browser. There is no app to install.",
          "The Free plan is ₹0 with 50 scans a month.",
          "New workspaces get a 14-day Professional trial; no card needed.",
          "The Telegram bot is linked from Settings → Telegram.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Still Stuck?",
        body: "See Contact Support for the ways to reach the eCard team.",
      },
      {
        type: "prose",
        heading: "About These Pages",
        paragraphs: [
          "eCard's public site does not include full product documentation, so these help pages focus on verified facts and well-established general advice. Where a screen or button name isn't documented, we describe the task and ask you to follow the in-app prompts.",
        ],
      },
    ],
    faqs: [
      { q: "Is there an eCard mobile app?", a: "No. eCard works in any phone browser, with no app to install." },
      { q: "How do I start for free?", a: "Sign up at ecard.gg and choose the Free plan: ₹0, 50 scans a month, up to 5 users." },
    ],
    related: ["help/faq", "help/contact-support", "resources/guides", "resources/guides/getting-started"],
    source: "verified",
  },
  {
    slug: "help/faq",
    category: "support",
    title: "FAQ",
    seoTitle: "eCard FAQ: Common Questions Answered",
    description: "Answers to common eCard questions: which AI models and email providers work, the free plan, the 14-day trial, payment options and cancelling any time.",
    h1: "Frequently Asked Questions",
    eyebrow: "Help",
    intro: "The questions people ask most about eCard, answered from what eCard publishes on its own site.",
    variant: "support",
    visual: "none",
    icon: "help",
    sections: [
      {
        type: "prose",
        heading: "eCard In One Paragraph",
        paragraphs: [
          "eCard is an AI visiting-card CRM: scan, remember and follow up with every person you meet. You photograph a card, review the fields the AI extracts, keep the context of the meeting, and follow up by email from your own mailbox or by WhatsApp in English, Hindi or Marathi.",
        ],
      },
      {
        type: "table",
        heading: "Plans At A Glance",
        headers: ["Plan", "Monthly price", "Users", "Scans / month"],
        rows: [
          ["Free", "₹0", "5", "50"],
          ["Starter", "₹299", "20", "1,000"],
          ["Professional", "₹999", "100", "5,000"],
          ["Business", "₹2,999", "Unlimited", "Unlimited"],
          ["Enterprise", "Custom", "Unlimited", "Unlimited"],
        ],
      },
      {
        type: "bullets",
        heading: "Included On Every Plan",
        items: ["AI card scanning", "Contacts, tags & events", "Bulk import & export", "Email outreach from your own mailbox", "WhatsApp messages", "Digital business card", "Telegram scanning bot"],
      },
      {
        type: "callout",
        tone: "note",
        title: "Yearly Billing",
        body: "eCard says yearly billing saves about two months, but its site does not list yearly prices. Exact totals are shown at checkout.",
      },
    ],
    faqs: [
      { q: "Which AI models can read my cards?", a: "Claude, OpenAI, Gemini, DeepSeek or Grok, as well as Azure or a custom endpoint. You can bring your own key." },
      { q: "Which email providers can I send from?", a: "Your own mailbox over SMTP: Gmail, Outlook, Zoho, SendGrid, Brevo, Mailgun, Amazon SES, Resend, or any SMTP host." },
      { q: "Is there a free plan?", a: "Yes. The Free plan is ₹0 a month with 50 scans, 5 users and 1 GB of storage. No card is required." },
      { q: "How does the free trial work?", a: "New workspaces get a 14-day Professional trial with no card needed." },
      { q: "How can I pay?", a: "In India by UPI, cards, net banking, wallets or EMI. International customers pay by card. GST applies where applicable, and local currency is shown at checkout." },
      { q: "Can I cancel any time?", a: "Yes. You can cancel any time and keep access until the end of your billing period." },
    ],
    related: ["help", "pricing/faq", "pricing/compare-plans", "platform/bring-your-own-ai", "integrations/smtp"],
    source: "verified",
  },
  {
    slug: "help/account-and-sign-in",
    category: "support",
    title: "Account & Sign-In",
    seoTitle: "eCard Account And Sign-In Help",
    description: "Help with creating an eCard account, signing in with email and password, protecting your account with 2FA and what to do if you can't get in.",
    h1: "Account And Sign-in Help",
    eyebrow: "Help",
    intro: "eCard accounts use your email and a password. Here is what to expect at sign-up and sign-in, and how to keep your account safe.",
    variant: "support",
    visual: "none",
    icon: "lock",
    sections: [
      {
        type: "steps",
        heading: "Creating An Account",
        steps: [
          { title: "Open The Sign-up Page", body: "Go to ecard.gg/sign-up." },
          { title: "Fill In The Form", body: "Your name, an optional workspace name, your email and a password." },
          { title: "Pick A Plan", body: "The form includes a plan picker. Free costs ₹0; new workspaces also get a 14-day Professional trial." },
        ],
      },
      {
        type: "prose",
        heading: "Signing In",
        paragraphs: [
          "Sign in at ecard.gg/sign-in with your email and password. Because eCard runs in the browser, you can sign in on any phone or computer.",
          "If you have enabled 2FA, you'll also enter a code from your authenticator app. Trusted devices can reduce repeat prompts on devices you use often.",
        ],
      },
      {
        type: "bullets",
        heading: "Can't Sign In? Check These First",
        items: [
          "Is the email address spelled exactly as you registered it?",
          "Is Caps Lock on, or is your keyboard set to another language?",
          "Is your phone's clock correct? Authenticator codes depend on accurate time.",
          "Forgotten password? Use the reset link, see Password Reset.",
          "Lost your 2FA device? Use one of your recovery codes.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Watch Your Login Alerts",
        body: "eCard supports login alerts. If you get one for a sign-in that wasn't you, change your password and review your 2FA settings straight away.",
      },
    ],
    faqs: [
      { q: "Is the workspace name required at sign-up?", a: "No, the sign-up form marks it as optional." },
      { q: "Can I use eCard on more than one device?", a: "Yes. eCard runs in the browser, so you can sign in wherever you have one." },
      { q: "Does eCard support 2FA?", a: "Yes, with authenticator codes, recovery codes, trusted devices and login alerts." },
    ],
    related: ["help/password-reset", "resources/guides/enabling-2fa", "product/sign-up-flow", "product/account-recovery"],
    source: "verified",
  },
  {
    slug: "help/password-reset",
    category: "support",
    title: "Password Reset",
    seoTitle: "Reset Your eCard Password",
    description: "Forgot your eCard password? Request a reset link by email from the forgot-password page. The link expires after 30 minutes, so use it promptly.",
    h1: "Reset Your Password",
    eyebrow: "Help",
    intro: "If you've forgotten your password, eCard can email you a reset link. The link expires after 30 minutes.",
    variant: "support",
    visual: "none",
    icon: "key",
    sections: [
      {
        type: "steps",
        heading: "How To Reset",
        steps: [
          { title: "Open The Forgot-password Page", body: "Go to ecard.gg/forgot-password." },
          { title: "Enter Your Email", body: "Use the address you signed up with." },
          { title: "Open The Email", body: "eCard sends a reset link to that address." },
          { title: "Set A New Password Within 30 Minutes", body: "The link expires after 30 minutes. If it has expired, request a new one." },
        ],
      },
      {
        type: "bullets",
        heading: "Email Didn't Arrive?",
        items: ["Wait a couple of minutes and check spam or promotions folders.", "Make sure you entered the address you registered with.", "Ask your IT team whether company filters block automated mail.", "Request a fresh link rather than reusing an old one."],
      },
      {
        type: "split",
        heading: "Choosing A Strong Password",
        body: ["General guidance: a long passphrase is both easier to remember and harder to guess than a short, complex password. Use a password manager if you can."],
        points: ["At least 12 characters", "Not reused from another site", "Avoid names and dates", "Turn on 2FA as well"],
      },
      {
        type: "callout",
        tone: "note",
        title: "Resetting Doesn't Turn Off 2FA",
        body: "If 2FA is enabled, you'll still need your authenticator code or a recovery code to sign in after resetting.",
      },
    ],
    faqs: [
      { q: "How long is the reset link valid?", a: "30 minutes." },
      { q: "I no longer have access to my email. What now?", a: "eCard's site does not document a recovery path for that case. Contact the eCard team via the options on the Contact Support page." },
    ],
    related: ["help/account-and-sign-in", "product/account-recovery", "resources/guides/enabling-2fa", "help/contact-support"],
    source: "verified",
  },
  {
    slug: "help/billing",
    category: "support",
    title: "Billing Help",
    seoTitle: "eCard Billing Help: Plans, Payment And GST",
    description: "Billing help for eCard: monthly INR prices, UPI and card payments, GST, the 14-day trial, yearly billing and how cancellation works.",
    h1: "Billing And Payments",
    eyebrow: "Help",
    intro: "eCard prices are in Indian rupees, billed monthly or yearly. Here's how payment, trials and cancellation work.",
    variant: "support",
    visual: "pricing",
    icon: "rupee",
    sections: [
      {
        type: "table",
        heading: "Monthly Prices",
        headers: ["Plan", "Price / month", "Storage"],
        rows: [["Free", "₹0", "1 GB"], ["Starter", "₹299", "25 GB"], ["Professional", "₹999", "250 GB"], ["Business", "₹2,999", "Unlimited"], ["Enterprise", "Custom, contact sales", "Unlimited"]],
      },
      {
        type: "cards",
        heading: "Paying",
        cards: [
          { title: "In India", body: "UPI, cards, net banking, wallets or EMI.", icon: "rupee" },
          { title: "International", body: "Pay by card. Local currency is shown at checkout for supported countries.", icon: "globe" },
          { title: "Tax", body: "GST is applied where applicable.", icon: "file" },
        ],
      },
      {
        type: "bullets",
        heading: "Trial, Yearly Billing And Cancellation",
        items: [
          "New workspaces get a 14-day Professional trial with no card needed.",
          "Yearly billing saves about two months; exact yearly totals appear at checkout.",
          "You can cancel any time and keep access until the end of your billing period.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Enterprise Pricing",
        body: "Enterprise is custom-priced. Email sales@bizzfly.com to discuss it.",
      },
    ],
    faqs: [
      { q: "Are prices shown with GST?", a: "eCard states GST is applied where applicable; check the total at checkout." },
      { q: "What happens when I cancel?", a: "You keep access until the end of the period you've paid for." },
      { q: "Is EMI available?", a: "Yes, for payments in India, alongside UPI, cards, net banking and wallets." },
    ],
    related: ["pricing", "pricing/billing-and-payments", "pricing/free-trial", "integrations/razorpay-upi", "integrations/stripe"],
    source: "verified",
  },
  {
    slug: "help/scanning",
    category: "support",
    title: "Scanning Help",
    seoTitle: "eCard Scanning Help: Fix Misreads And Limits",
    description: "Troubleshoot eCard card scans: improve photo quality, use confidence scores, correct fields before saving, and understand monthly scan limits by plan.",
    h1: "Scanning Help",
    eyebrow: "Help",
    intro: "Most scan problems come down to the photo or a field that needs a quick correction. Here's how to fix both.",
    variant: "support",
    visual: "none",
    icon: "scan",
    sections: [
      {
        type: "table",
        heading: "Common Issues",
        headers: ["Symptom", "Try this"],
        rows: [
          ["Fields are blank or wrong", "Retake in even light with the card filling the frame"],
          ["Glossy card shows glare", "Tilt the card slightly or move away from overhead lights"],
          ["Address looks odd", "Check it against the Google Maps verification and correct it"],
          ["Details are on the back", "Capture the back of the card too"],
          ["Scans stopped working", "Check whether you've reached your plan's monthly scan limit"],
        ],
      },
      {
        type: "prose",
        heading: "Use The Confidence Scores",
        paragraphs: [
          "eCard gives each extracted field a confidence score, and nothing is saved until you review it. Look at lower-confidence fields first; they're the ones most likely to need a fix.",
          "If you bring your own AI key, a key pool with failover helps keep scanning working when one key fails or hits a provider limit.",
        ],
      },
      {
        type: "table",
        heading: "Scan Limits",
        headers: ["Plan", "Scans / month"],
        rows: [["Free", "50"], ["Starter", "1,000"], ["Professional", "5,000"], ["Business", "Unlimited"], ["Enterprise", "Unlimited"]],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Trying A Different Model",
        body: "You can choose Claude, OpenAI, Gemini, DeepSeek or Grok (plus Azure or a custom endpoint). If a particular card style reads poorly, comparing models can help.",
      },
    ],
    faqs: [
      { q: "Why wasn't my scan saved?", a: "eCard saves nothing until you review the extracted fields. Finish the review to save the contact." },
      { q: "Can I scan from Telegram?", a: "Yes. Link the bot from Settings → Telegram, then send a card photo." },
    ],
    related: ["resources/guides/your-first-scan", "features/ai-card-scanning/scan-quality-tips", "features/ai-card-scanning/confidence-scores", "features/ai-card-scanning/scan-limits-by-plan"],
    source: "mixed",
  },
  {
    slug: "help/email-sending",
    category: "support",
    title: "Email Sending Help",
    seoTitle: "eCard Email Sending Help: SMTP And Delivery",
    description: "Fix eCard intro emails that won't send or land in spam. Check SMTP details, app passwords and deliverability, and use the 5-second edit-or-cancel window.",
    h1: "Email Sending Help",
    eyebrow: "Help",
    intro: "eCard sends intro emails from your own SMTP account. When something goes wrong, the cause is usually the connection details or your mail provider's rules.",
    variant: "support",
    visual: "none",
    icon: "mail",
    sections: [
      {
        type: "steps",
        heading: "If Emails Won't Send",
        steps: [
          { title: "Recheck SMTP Details", body: "Host, port, security setting and username must match your provider's instructions exactly." },
          { title: "Use An App Password", body: "Many providers, such as Gmail and Outlook, require an app-specific password when 2FA is on." },
          { title: "Check Provider Limits", body: "Mail providers often cap how many messages you can send per day." },
          { title: "Send Yourself A Test", body: "Confirm a single email arrives before sending to contacts." },
        ],
      },
      {
        type: "bullets",
        heading: "If Emails Land In Spam",
        intro: "General deliverability guidance:",
        items: ["Send from a real, established mailbox rather than a brand-new address.", "If you use your own domain, ask your IT team to set up SPF, DKIM and DMARC.", "Keep messages personal and short; avoid all-caps subjects.", "Don't email people who didn't share their details with you."],
      },
      {
        type: "split",
        heading: "The 5-second Window",
        body: ["eCard shows you the AI draft and sends it after 5 seconds. During that time you can edit or cancel."],
        points: ["Preview first", "Edit or cancel within 5 seconds", "Sent from your own address"],
      },
      {
        type: "callout",
        tone: "note",
        title: "Supported Providers",
        body: "Gmail, Outlook, Zoho, SendGrid, Brevo, Mailgun, Amazon SES, Resend, or any SMTP host.",
      },
    ],
    faqs: [
      { q: "Does eCard send from its own servers?", a: "Intro emails go out from your own SMTP account, so they come from your address." },
      { q: "Is my SMTP password safe?", a: "eCard encrypts SMTP passwords with AES-256-GCM." },
    ],
    related: ["resources/guides/setting-up-smtp", "features/outreach/email-deliverability", "features/outreach/edit-and-cancel-emails", "integrations/smtp"],
    source: "mixed",
  },
  {
    slug: "help/telegram",
    category: "support",
    title: "Telegram Help",
    seoTitle: "eCard Telegram Bot Help And Troubleshooting",
    description: "Troubleshoot the eCard Telegram bot: linking with a one-time code from Settings → Telegram, sending card photos, and using the Open and Send buttons.",
    h1: "Telegram Help",
    eyebrow: "Help",
    intro: "The eCard Telegram bot saves a contact when you send it a photo of a card. Here's how to fix the most common problems.",
    variant: "support",
    visual: "none",
    icon: "send",
    sections: [
      {
        type: "table",
        heading: "Troubleshooting",
        headers: ["Problem", "What to try"],
        rows: [
          ["Bot doesn't recognise me", "Link it: get a one-time code from Settings → Telegram and send it to the bot"],
          ["Code rejected", "Codes are one-time; generate a new one in Settings → Telegram"],
          ["Photo sent but no contact", "Retake with better light and the card filling the frame"],
          ["Contact in the wrong workspace", "Check which workspace you were in when you generated the code"],
        ],
      },
      {
        type: "prose",
        heading: "How It Should Behave",
        paragraphs: [
          "Once linked, sending a card photo saves the contact and the bot replies with Open and Send buttons. Open takes you to the contact in eCard; Send starts a follow-up.",
          "You can open the contact in the browser afterwards to review fields and add meeting notes.",
        ],
      },
      {
        type: "bullets",
        heading: "Good Habits",
        items: ["Keep your one-time code private.", "Send one card per photo.", "Review Telegram-saved contacts later in the day."],
      },
      {
        type: "callout",
        tone: "info",
        title: "Included On Every Plan",
        body: "The Telegram bot is part of eCard's base feature set, including the Free plan.",
      },
    ],
    faqs: [
      { q: "Where is the linking code?", a: "Settings → Telegram, in eCard." },
      { q: "Do Telegram scans count toward my scan limit?", a: "eCard's site doesn't say separately. Assume they do, and check usage in the app." },
    ],
    related: ["resources/guides/connecting-telegram", "features/telegram-bot/troubleshooting", "features/telegram-bot", "integrations/telegram"],
    source: "mixed",
  },
  {
    slug: "help/data-and-privacy",
    category: "support",
    title: "Data & Privacy",
    seoTitle: "eCard Data And Privacy Help",
    description: "How eCard protects data: AES-256-GCM encryption for keys and SMTP passwords, audit logs, 2FA, and a compliance checklist for consent, export, deletion.",
    h1: "Your Data And Privacy",
    eyebrow: "Help",
    intro: "Your workspace holds other people's personal details. Here's what eCard states about protecting them, and how you can handle that data responsibly.",
    variant: "support",
    visual: "none",
    icon: "shield",
    sections: [
      {
        type: "cards",
        heading: "What eCard States",
        cards: [
          { title: "Encrypted Secrets", body: "API keys and SMTP passwords are encrypted with AES-256-GCM.", icon: "lock" },
          { title: "Account Security", body: "2FA with authenticator codes, recovery codes, trusted devices and login alerts.", icon: "shield" },
          { title: "Audit Log", body: "Workspaces keep a log of actions.", icon: "file" },
          { title: "Compliance Checklist", body: "Covers consent, export and deletion.", icon: "check" },
        ],
      },
      {
        type: "bullets",
        heading: "Handling Contacts Responsibly",
        intro: "General good practice:",
        items: ["Only save details people chose to share with you.", "Use the blacklist for anyone who asks not to be contacted.", "Archive contacts you no longer need.", "Export data only to systems you trust."],
      },
      {
        type: "prose",
        heading: "Your Own AI Keys",
        paragraphs: [
          "If you bring your own key for Claude, OpenAI, Gemini or another provider, card images are processed by that provider under your own account with them. Review your provider's data policies alongside eCard's.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Policies",
        body: "eCard's legal pages on this site are drafts pending review and are not yet binding. They do not set out retention periods.",
      },
    ],
    faqs: [
      { q: "Can I export my contacts?", a: "Yes. Bulk export is included on every plan." },
      { q: "How long does eCard keep data?", a: "eCard has not published retention periods. Contact the eCard team if you need this for compliance." },
    ],
    related: ["features/team-security/compliance-checklist", "features/contact-management/data-export-and-deletion", "legal/privacy-policy", "product/security-at-a-glance"],
    source: "mixed",
  },
  {
    slug: "help/contact-support",
    category: "support",
    title: "Contact Support",
    seoTitle: "Contact eCard Support",
    description: "How to get help with eCard: check the help pages first, gather the right details, and reach the eCard team. Enterprise enquiries go to sales@bizzfly.com.",
    h1: "Contact Support",
    eyebrow: "Help",
    intro: "Most questions are answered in the Help Center. If yours isn't, here's how to reach the eCard team and what to include.",
    variant: "support",
    visual: "none",
    icon: "message",
    sections: [
      {
        type: "steps",
        heading: "Before You Write",
        steps: [
          { title: "Search The Help Pages", body: "Check the FAQ and the topic page for your issue." },
          { title: "Note The Details", body: "Your workspace name, the plan you're on, what you did and what happened." },
          { title: "Capture Evidence", body: "A screenshot of any error message speeds things up. Never send passwords or API keys." },
        ],
      },
      {
        type: "cards",
        heading: "Who To Contact",
        cards: [
          { title: "Sales And Enterprise", body: "Email sales@bizzfly.com for Enterprise pricing and larger rollouts.", icon: "briefcase" },
          { title: "Product Questions", body: "Use the contact page on this site, or any help option shown inside the app when signed in.", icon: "help" },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Response Times",
        body: "eCard hasn't published support hours or response-time commitments.",
      },
      {
        type: "bullets",
        heading: "Never Share",
        items: ["Your password", "2FA or recovery codes", "AI provider API keys", "SMTP passwords"],
      },
    ],
    faqs: [
      { q: "Is there a phone support line?", a: "eCard's site does not list a support phone number." },
      { q: "How do I ask about Enterprise?", a: "Email sales@bizzfly.com." },
    ],
    related: ["help", "help/faq", "contact", "contact-sales"],
    source: "verified",
  },
];

/* ---------------------------------------------------------------------------
 * Content expansion: extra page-specific sections and FAQs, merged by slug.
 * `replaceFaqs` swaps the FAQ list instead of appending to it.
 * ------------------------------------------------------------------------- */
const EXTRA: Record<string, { sections: Section[]; faqs?: FAQ[]; replaceFaqs?: boolean }> = {
  help: {
    sections: [
      {
        type: "table",
        heading: "Find The Right Page By Symptom",
        intro: "Start from what you are seeing, not from the feature name.",
        headers: ["What you're seeing", "Go to"],
        rows: [
          ["Can't sign in, or 2FA codes are rejected", "Account & Sign-In"],
          ["Forgot your password or the reset email is missing", "Password Reset"],
          ["A scan has wrong or missing fields", "Scanning Help"],
          ["Intro emails fail or land in spam", "Email Sending Help"],
          ["Photos sent to the bot don't create contacts", "Telegram Help"],
          ["Questions about prices, GST or cancelling", "Billing Help"],
          ["Exporting or deleting contact data", "Data & Privacy"],
        ],
      },
      {
        type: "steps",
        heading: "A Quick Self-check Before Anything Else",
        intro: "These general checks clear up a surprising share of problems in any web app.",
        steps: [
          { title: "Reload The Page", body: "A stale tab can show out-of-date information, especially after changing settings in another tab." },
          { title: "Confirm The Workspace", body: "If you belong to more than one workspace, check you are in the one you expect." },
          { title: "Check Your Role", body: "Some settings are only available to owners or admins. Ask one of them if an option seems missing." },
          { title: "Try Another Browser", body: "eCard runs in the browser, so an outdated browser or an aggressive extension can get in the way." },
        ],
      },
      {
        type: "bullets",
        heading: "What These Help Pages Won't Do",
        items: [
          "Quote menu paths or button names eCard hasn't published. The one path we name is Settings → Telegram.",
          "Promise response times or support hours, since eCard hasn't published any.",
          "Ask for your password, codes or API keys, no legitimate help process needs them.",
        ],
      },
    ],
    faqs: [
      { q: "Is there a mobile app I should update?", a: "No. eCard is browser-based and works in any phone browser, so there is no app to install or update. Keeping your browser up to date is enough." },
    ],
  },
  "help/faq": {
    sections: [
      {
        type: "bullets",
        heading: "Questions About Plan Limits",
        items: [
          "Users: 5 on Free, 20 on Starter, 100 on Professional, unlimited on Business and Enterprise.",
          "Storage: 1 GB on Free, 25 GB on Starter, 250 GB on Professional, unlimited on Business and Enterprise.",
          "Scans per month: 50 on Free, 1,000 on Starter, 5,000 on Professional, unlimited on Business and Enterprise.",
          "Google Contacts sync and Google Calendar & Meet booking start on Starter; webhooks start on Professional; white label and custom domain start on Business.",
        ],
      },
      {
        type: "table",
        heading: "Sample: Which Plan Fits?",
        intro: "Sample situations matched against eCard's published limits. Your own needs may differ.",
        headers: ["Sample situation", "Plan that fits the limits"],
        rows: [
          ["A freelancer scanning about 30 cards a month", "Free"],
          ["A 12-person agency that wants Google Contacts sync", "Starter"],
          ["A sales team of 40 pushing new contacts to another system", "Professional (webhooks)"],
          ["A company that wants cards on its own domain", "Business or Enterprise"],
        ],
      },
      {
        type: "prose",
        heading: "What These Answers Don't Cover",
        paragraphs: [
          "eCard hasn't published an API reference, payload formats, yearly prices or support response times, so this FAQ doesn't give them either. Where something isn't documented, the honest answer is to check the app or ask the eCard team.",
        ],
      },
    ],
    replaceFaqs: true,
    faqs: [
      { q: "Is there a free plan?", a: "Yes. The Free plan is ₹0 a month with 50 scans, 5 users and 1 GB of storage. No card is required." },
      { q: "How does the free trial work?", a: "New workspaces get a 14-day Professional trial with no card needed." },
      { q: "Can I cancel any time?", a: "Yes. You can cancel any time and keep access until the end of your billing period." },
      { q: "Do I need to install anything?", a: "No. eCard works in any phone browser, so there is no app to install. The Telegram bot is optional." },
      { q: "Is yearly billing cheaper?", a: "eCard says yearly billing saves about two months. Exact yearly totals are shown at checkout rather than published on the site." },
    ],
  },
  "help/account-and-sign-in": {
    sections: [
      {
        type: "steps",
        heading: "Troubleshooting Tree: \"I Can't Get In\"",
        steps: [
          { title: "Is The Password Being Rejected?", body: "Check caps lock and keyboard language, then use the password reset flow rather than guessing repeatedly." },
          { title: "Is The Password Accepted But The 2FA Code Refused?", body: "Make sure your phone's clock is set automatically and enter a fresh code from your authenticator app." },
          { title: "No Access To The Authenticator At All?", body: "Sign in with one of your saved recovery codes, then set up 2FA again." },
          { title: "Signed In But The Workspace Looks Empty?", body: "You may be in a different workspace, or your role may limit what you see. Ask an owner or admin." },
        ],
      },
      {
        type: "bullets",
        heading: "Sign-in Hygiene Checklist",
        items: [
          "Use a unique password stored in a password manager.",
          "Turn on 2FA and keep recovery codes somewhere other than your phone.",
          "Only mark your own devices as trusted.",
          "Sign out of shared computers when you're done.",
          "Read login alerts rather than dismissing them.",
        ],
      },
    ],
    faqs: [
      { q: "Someone left the company. How do I stop them signing in?", a: "An owner or admin should remove them from the workspace. The workspace audit log helps you review what happened before they left." },
    ],
  },
  "help/password-reset": {
    sections: [
      {
        type: "bullets",
        heading: "Before You Request A Reset",
        items: [
          "Check your password manager, the saved entry may be under an older address or a different site name.",
          "Make sure you're using the email address you signed up with.",
          "Have access to that mailbox on the device in front of you.",
        ],
      },
      {
        type: "steps",
        heading: "If The Reset Link Doesn't Work",
        steps: [
          { title: "Link Says It Has Expired", body: "Reset links are usually time-limited. Request a new one and use it promptly." },
          { title: "Several Emails Arrived", body: "Use the newest one; older links are often invalidated by a newer request." },
          { title: "Link Opens In The Wrong Browser", body: "Copy it into the browser where you normally use eCard." },
          { title: "Work Email Filters Links", body: "Some company email security tools pre-click links. Ask your IT team to allow the message, or try again from a different network." },
        ],
      },
      {
        type: "bullets",
        heading: "After A Reset",
        items: [
          "Update the entry in your password manager immediately.",
          "Review trusted devices and remove any you don't recognise.",
          "If you reset because you suspected someone else had access, tell your workspace admin so they can check the audit log.",
        ],
      },
    ],
    faqs: [
      { q: "Will resetting my password sign me out elsewhere?", a: "eCard hasn't documented this. To be safe, review your trusted devices after a reset and remove any you no longer use." },
      { q: "Can support reset my password for me?", a: "Use the reset flow yourself. eCard's help pages never ask you to send a password to anyone." },
    ],
  },
  "help/billing": {
    sections: [
      {
        type: "table",
        heading: "What Each Plan Adds",
        intro: "Monthly prices in INR, from eCard's pricing page. Every plan includes the base set of features.",
        headers: ["Plan", "Price", "Adds"],
        rows: [
          ["Free", "₹0", "Base set: 5 users, 1 GB, 50 scans a month"],
          ["Starter", "₹299", "Google Contacts sync, Calendar & Meet booking; 20 users, 25 GB, 1,000 scans"],
          ["Professional", "₹999", "Webhooks; 100 users, 250 GB, 5,000 scans"],
          ["Business", "₹2,999", "White label and custom domain; unlimited users, storage and scans"],
          ["Enterprise", "Custom", "Same as Business; contact sales@bizzfly.com"],
        ],
      },
      {
        type: "steps",
        heading: "Troubleshooting A Failed Payment",
        intro: "General checks for online payments in India and abroad.",
        steps: [
          { title: "UPI Request Timed Out", body: "Approve the request in your UPI app promptly, and check your daily UPI limit with your bank." },
          { title: "Card Declined", body: "Some cards block online or international transactions by default. Enable them in your bank app, or try another card." },
          { title: "Charged But Plan Not Updated", body: "Wait a few minutes and reload. If it still hasn't changed, contact eCard with the payment reference, never your full card number." },
          { title: "Paying From Outside India", body: "International customers pay by card. Local currency is shown at checkout for supported countries." },
        ],
      },
      {
        type: "bullets",
        heading: "Before You Upgrade, Check",
        items: [
          "How many people need access, the user limit is often what forces an upgrade.",
          "Your monthly scan volume, including busy event months.",
          "Whether you need webhooks (Professional) or white label (Business).",
          "Who in your company needs the GST invoice details.",
        ],
      },
    ],
    faqs: [
      { q: "Can I get a GST invoice?", a: "eCard states that GST is applied where applicable. Check the billing area in the app for invoice details, or ask the eCard team." },
    ],
  },
  "help/scanning": {
    sections: [
      {
        type: "table",
        heading: "Symptom, Likely Cause, Fix",
        headers: ["Symptom", "Likely cause", "Try"],
        rows: [
          ["Name and title swapped", "Unusual layout or decorative fonts", "Fix the fields in review; try another model for similar cards"],
          ["Phone number missing", "Printed on the back", "Scan the back as well as the front"],
          ["Garbled characters", "Glare, blur or very small print", "Retake in even light with the card flat"],
          ["Address looks wrong", "Abbreviations or partial address", "Check it against the Google Maps result and correct it"],
          ["Scans stopped working", "Monthly scan allowance reached, or an AI key rate-limited", "Check usage; add another key to your key pool"],
        ],
      },
      {
        type: "split",
        heading: "Sample: A Bilingual Card",
        body: [
          "Sample: a card for Sunil Patil, Distributor, with English on the front and Marathi on the back. The first scan of the front alone picks up the English name and phone number but misses the office address, which only appears on the back.",
          "Scanning both sides fills in the address. You check the low-confidence fields, keep the English spelling of the name as the main version, and save.",
        ],
        points: ["Scan both sides", "Pick one spelling as the main name", "Check the address"],
      },
      {
        type: "bullets",
        heading: "Common Mistakes",
        items: [
          "Using one AI key for a whole team at an event, so it gets rate-limited at the busiest moment. A key pool with several keys fails over instead.",
          "Saving without review when tired at the end of a long day.",
          "Assuming a high confidence score means a field can never be wrong.",
        ],
      },
    ],
    faqs: [
      { q: "Can I use my own AI provider key?", a: "Yes. You can bring your own key, and eCard states it encrypts API keys with AES-256-GCM." },
      { q: "Does anything save automatically?", a: "No. eCard states nothing is saved until you review it." },
    ],
  },
  "help/email-sending": {
    sections: [
      {
        type: "bullets",
        heading: "Before You Send To Real Contacts",
        items: [
          "Send a test intro to an address you own and check how it looks on a phone.",
          "Check the From name: it should be your name, not a mailbox ID.",
          "Confirm your domain has SPF and DKIM records for the service you send through.",
          "Read the AI draft. You can edit it, and the preview is your chance to catch a wrong name or company.",
        ],
      },
      {
        type: "split",
        heading: "Sample: Catching A Mistake In The 5-second Window",
        body: [
          "Sample: you scan a card for Kavya Iyer, Consultant, and preview the intro. Just after you confirm, you notice the draft refers to the wrong event.",
          "Because eCard waits 5 seconds before sending, you cancel, fix the line, and send again. The recipient only ever sees the corrected version.",
        ],
        points: ["Read the first line twice", "Cancel rather than send an apology", "Fix the note so future drafts improve"],
      },
      {
        type: "bullets",
        heading: "Common Mistakes",
        items: [
          "Using your normal password where your provider requires an app password.",
          "Sending lots of intros at once from a brand-new mailbox, which can look suspicious to spam filters.",
          "Using a From address on a domain your provider hasn't verified.",
          "Changing your mailbox password and forgetting to update it in eCard.",
        ],
      },
    ],
    faqs: [
      { q: "Does eCard send email through its own servers?", a: "Intros are sent from your own SMTP, so they come from your mailbox or sending service." },
    ],
  },
  "help/telegram": {
    sections: [
      {
        type: "bullets",
        heading: "Before You Report A Problem",
        items: [
          "Confirm you linked the bot from the right workspace using the one-time code in Settings → Telegram.",
          "Check that your phone has a data connection and that the photo actually sent.",
          "Try the same card through the browser scanner to see whether the problem is the photo or the connection.",
          "Note the time you sent the photo; it helps anyone looking into the issue.",
        ],
      },
      {
        type: "table",
        heading: "Telegram Or Browser?",
        intro: "Both create the same contacts; choose by situation.",
        headers: ["Situation", "Better choice", "Why"],
        rows: [
          ["Walking out of a meeting", "Telegram", "Send a photo in seconds from a chat you already use"],
          ["Card someone forwarded to you", "Telegram", "Forward the image straight to the bot"],
          ["Reviewing many fields carefully", "Browser", "More room to read and edit each field"],
          ["Setting up your account", "Browser", "Linking and settings live in the web app"],
        ],
      },
      {
        type: "bullets",
        heading: "Common Mistakes",
        items: [
          "Sharing a linking code with a colleague. Each person should link their own Telegram account.",
          "Sending a screenshot of a whole chat instead of the card itself.",
          "Pressing Send before checking the contact with Open.",
        ],
      },
    ],
    faqs: [
      { q: "Can I forward a card photo someone sent me?", a: "Yes. Forward the image to the bot and, once your workspace is linked, the contact lands there like any other scan." },
    ],
  },
  "help/data-and-privacy": {
    sections: [
      {
        type: "bullets",
        heading: "A Privacy Checklist For Your Workspace",
        intro: "General good practice, using the tools eCard says it provides.",
        items: [
          "Give each person the least-privileged role they need: owner, admin, manager, member or scan-only guest.",
          "Turn on 2FA for everyone, starting with owners and admins.",
          "Record consent where your local rules require it, using eCard's compliance checklist as a prompt.",
          "Blacklist people who ask not to be contacted, so they aren't emailed again by mistake.",
          "Review the audit log periodically, and especially after someone leaves.",
        ],
      },
      {
        type: "steps",
        heading: "Handling A Request From Someone In Your Contacts",
        intro: "Sample flow for when a contact asks what you hold about them, or asks to be removed. This is general guidance, not legal advice.",
        steps: [
          { title: "Confirm Who Is Asking", body: "Make sure the request comes from the person themselves." },
          { title: "Find The Record", body: "Search for them, including merged duplicates and archived contacts." },
          { title: "Export Or Delete", body: "Use eCard's export or deletion tools as appropriate." },
          { title: "Stop Future Contact", body: "If they asked not to be contacted, blacklist them so they aren't readded from an old card." },
          { title: "Keep A Note", body: "Record when and how you handled the request, in line with your own policies." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Your AI Provider's Terms Apply Too",
        body: "When you bring your own key, card images are read by the AI provider you choose. Review that provider's data terms to see how they handle what you send.",
      },
    ],
    faqs: [
      { q: "Where is my data stored?", a: "eCard's site does not state hosting locations or retention periods. Ask the eCard team if you need these details for a compliance review." },
    ],
  },
  "help/contact-support": {
    sections: [
      {
        type: "split",
        heading: "Sample: A Support Message That Gets Solved Quickly",
        body: [
          "Sample: \"Workspace: Sample Realty. Plan: Starter. Since this morning, intro emails fail after I confirm them. I'm sending through Zoho Mail over SMTP. I changed my Zoho password yesterday. Screenshot of the error attached.\"",
          "It names the workspace and plan, says when the problem started, describes what was being done, mentions a recent change and includes evidence, without sharing any password.",
        ],
        points: ["Workspace and plan", "When it started", "What you did", "What changed recently", "A screenshot, no secrets"],
      },
      {
        type: "table",
        heading: "Extra Details By Problem Type",
        headers: ["Problem", "Also include"],
        rows: [
          ["Scanning", "The AI provider you use and whether the card is unusual (bilingual, vertical, very glossy)"],
          ["Email sending", "Your email provider and the exact error text"],
          ["Telegram", "Roughly when you sent the photo and whether you relinked recently"],
          ["Billing", "The payment method and a payment reference, never a full card number"],
          ["Sign-in", "Whether the password or the 2FA step fails"],
        ],
      },
      {
        type: "bullets",
        heading: "Common Mistakes When Asking For Help",
        items: [
          "Sending one vague line such as \"it's not working\".",
          "Pasting an API key or SMTP password to prove a setting is right.",
          "Opening several separate requests about the same issue.",
          "Writing from a personal address no one in your workspace recognises.",
        ],
      },
    ],
    faqs: [
      { q: "Is there a support email address?", a: "eCard's site only publishes sales@bizzfly.com, for Enterprise and sales enquiries. For product questions use the contact page on this site or any help option inside the app." },
      { q: "What if I think my account has been compromised?", a: "Reset your password, review trusted devices, and ask your workspace admin to check the audit log before contacting the eCard team." },
    ],
  },
};

const MORE: Record<string, { sections: Section[]; faqs?: FAQ[] }> = {
  help: {
    sections: [
      {
        type: "callout",
        tone: "tip",
        title: "Bookmark This Page",
        body: "Save the Help Center in your phone browser so it's one tap away at events, when you're most likely to need a quick answer.",
      },
    ],
  },
  "help/faq": {
    sections: [
      {
        type: "bullets",
        heading: "Questions To Ask Yourself Before Choosing A Plan",
        items: [
          "How many cards do I scan in my busiest month, not my average one?",
          "Will colleagues need their own access in the next few months?",
          "Do new contacts need to reach another system automatically?",
          "Do clients need to see our own brand and domain on shared cards?",
          "Who will own billing and keep the GST details up to date?",
          "Would a 14-day Professional trial answer these questions before I commit?",
        ],
      },
    ],
  },
  "help/account-and-sign-in": {
    sections: [
      {
        type: "split",
        heading: "Sample: An Unexpected Login Alert",
        body: [
          "Sample: Imran, a member of a sample agency workspace, gets a login alert for a sign-in he doesn't recognise late at night.",
          "He changes his password, removes unfamiliar trusted devices, turns on 2FA, and tells his workspace admin, who reviews the audit log for anything unusual.",
        ],
        points: ["Act on the alert immediately", "Change the password first", "Turn on 2FA", "Tell an admin so they can check the audit log"],
      },
    ],
  },
  "help/password-reset": {
    sections: [
      {
        type: "split",
        heading: "Sample: A Reset Email That Never Arrived",
        body: [
          "Sample: Leena requests a reset but sees nothing. She checks spam and promotions, finds nothing, then realises she signed up with her old work address.",
          "She requests the reset again for that address, uses the newest link straight away, and updates her password manager entry with the right email.",
        ],
        points: ["Check spam and promotions", "Check which address you used", "Use only the newest link"],
      },
    ],
  },
  "help/billing": {
    sections: [
      {
        type: "split",
        heading: "Sample: Upgrading Mid-month For An Event",
        body: [
          "Sample: a five-person team on Free expects about 400 cards from a two-day expo, well beyond the 50-scan monthly allowance.",
          "Starter at ₹299 a month covers 1,000 scans and 20 users. After the expo they can review whether to stay on Starter; eCard lets you cancel any time and keep access until the end of the period.",
        ],
        points: ["Estimate scans before the event", "Upgrade before you arrive", "Review usage afterwards"],
      },
    ],
    faqs: [
      { q: "Can I pay by EMI?", a: "Yes, in India. eCard lists UPI, cards, net banking, wallets and EMI as payment options." },
    ],
  },
  "help/scanning": {
    sections: [
      {
        type: "callout",
        tone: "tip",
        title: "Review In Batches",
        body: "After an event, review scans in one sitting while the day is fresh, rather than one at a time over a week.",
      },
    ],
  },
  "help/email-sending": {
    sections: [
      {
        type: "steps",
        heading: "Troubleshooting Tree For A Single Bounced Email",
        steps: [
          { title: "Check The Address", body: "A misread character in the scanned email field is the most common cause. Compare it with the card." },
          { title: "Read The Bounce Message", body: "\"User unknown\" means the address is wrong; \"mailbox full\" or a temporary error means try again later." },
          { title: "Try The Other Channel", body: "If email keeps failing, a WhatsApp message may reach them. Then correct the email field so future intros go to the right address." },
        ],
      },
    ],
  },
  "help/telegram": {
    sections: [
      {
        type: "split",
        heading: "Sample: Relinking After Switching Phones",
        body: [
          "Sample: Deepak moves to a new phone and signs in to Telegram again. His photos to the bot still arrive, but he wants to confirm they reach the right workspace.",
          "He sends a test photo of his own card, checks that it appears in his workspace in the browser, and deletes the test contact. If it had not appeared, he would generate a new code in Settings → Telegram and link again.",
        ],
        points: ["Test with your own card", "Check in the browser", "Relink only if needed"],
      },
    ],
    faqs: [
      { q: "Can several team members use the bot?", a: "Each person links their own Telegram account to the workspace with a one-time code from Settings → Telegram." },
    ],
  },
  "help/data-and-privacy": {
    sections: [
      {
        type: "bullets",
        heading: "Common Mistakes",
        items: [
          "Exporting the whole contact list to a personal laptop and forgetting about it.",
          "Keeping former colleagues in the workspace long after they leave.",
          "Rescanning a card from someone who asked to be removed, without checking the blacklist.",
          "Sharing one AI key or SMTP password over chat.",
          "Adding notes about people that you wouldn't be comfortable with them reading.",
        ],
      },
    ],
    faqs: [
      { q: "Can I export all my contacts?", a: "Yes. Bulk import and export are part of the base set on every plan, and the compliance tools include export and deletion." },
    ],
  },
  "help/contact-support": {
    sections: [
      {
        type: "steps",
        heading: "Try These Before You Write",
        intro: "Quick checks that often solve the problem outright.",
        steps: [
          { title: "Reload And Sign In Again", body: "Clears stale sessions and out-of-date screens." },
          { title: "Check Your Role", body: "If a setting is missing, an owner or admin may need to make the change." },
          { title: "Ask Your Workspace Admin", body: "They can often answer questions about plan limits, roles and shared settings straight away." },
          { title: "Check The Related Help Page", body: "Scanning, email sending, Telegram, billing and sign-in each have their own troubleshooting steps in the Help Center." },
        ],
      },
    ],
    faqs: [
      { q: "Should I contact support or my workspace admin?", a: "Start with your admin for questions about roles, plan limits or shared settings in your workspace. Contact the eCard team when something looks broken or the help pages don't cover it." },
    ],
  },
};

for (const map of [EXTRA, MORE] as Record<string, { sections: Section[]; faqs?: FAQ[]; replaceFaqs?: boolean }>[]) {
  for (const p of pages) {
    const extra = map[p.slug];
    if (!extra) continue;
    p.sections.push(...extra.sections);
    if (extra.faqs) p.faqs = extra.replaceFaqs ? extra.faqs : [...(p.faqs ?? []), ...extra.faqs];
  }
}
