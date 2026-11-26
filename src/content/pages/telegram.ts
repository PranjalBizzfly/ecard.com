import type { PageDef, Section, FAQ } from "../types";

const B = "features/telegram-bot";

export const pages: PageDef[] = [
  {
    slug: B,
    category: "telegram",
    title: "Telegram Bot",
    seoTitle: "eCard Telegram Bot For Visiting Cards",
    description: "Send a visiting card photo to the eCard Telegram bot and the contact is saved, with Open and Send buttons right in the chat. Included on every plan.",
    h1: "Snap A Card In Telegram. The Contact Is Saved.",
    eyebrow: "Telegram Bot",
    intro: "The eCard Telegram bot turns a chat you already use into a card scanner. Send a photo of a visiting card and the contact is saved, with Open and Send buttons in the chat.",
    variant: "feature",
    visual: "telegram",
    icon: "send",
    sections: [
      {
        type: "steps",
        heading: "How It Works",
        steps: [
          { title: "Link The Bot", body: "Get a one-time code from Settings → Telegram in eCard and send it to the bot." },
          { title: "Send A Card Photo", body: "Snap the card and send it in the chat like any other picture." },
          { title: "The Contact Is Saved", body: "eCard reads the card with your chosen AI model and saves the contact." },
          { title: "Open Or Send", body: "Use the buttons in the chat to open the contact or send the intro." },
        ],
      },
      {
        type: "split",
        heading: "Why Telegram?",
        body: [
          "At an event, switching between apps costs time and attention. Telegram is often already open on your phone, and sending a photo there takes a couple of taps.",
          "eCard itself works in any phone browser with no app to install; the bot is simply another, faster route in.",
        ],
        points: ["No extra app to install", "Works where you already chat", "Included in every plan"],
      },
      {
        type: "cards",
        heading: "What You Get In The Chat",
        cards: [
          { title: "Saved Contact", body: "The card becomes a contact in your workspace.", icon: "users" },
          { title: "Open Button", body: "Jump to the contact in eCard.", icon: "eye" },
          { title: "Send Button", body: "Send the follow-up from the chat.", icon: "send" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Available On Every Plan",
        body: "The Telegram scanning bot is part of eCard’s base feature set, from Free (₹0, 50 scans a month) upwards.",
      },
    ],
    faqs: [
      { q: "How do I connect the bot?", a: "Generate a one-time code from Settings → Telegram in eCard and send it to the bot." },
      { q: "Is the Telegram bot a paid add-on?", a: "No. It is included on every eCard plan." },
      { q: "Do I need the eCard app?", a: "eCard has no app to install: it works in any phone browser, and the bot runs inside Telegram." },
    ],
    related: [`${B}/connect-workspace`, `${B}/snap-a-card`, `${B}/open-and-send-buttons`, "integrations/telegram", "product/whats-new-telegram"],
    source: "verified",
  },
  {
    slug: `${B}/connect-workspace`,
    category: "telegram",
    title: "Connect Your Workspace",
    seoTitle: "Link Telegram To eCard With A One-Time Code",
    description: "Connect the eCard Telegram bot to your workspace using a one-time code from Settings → Telegram. Steps, safety tips and what to do if linking fails.",
    h1: "Link Telegram To Your eCard Workspace",
    eyebrow: "Telegram Bot",
    intro: "Linking takes one code. In eCard, open Settings → Telegram to get a one-time code, then send it to the bot. From then on, card photos you send are saved to your workspace.",
    variant: "guide",
    visual: "telegram",
    icon: "link",
    sections: [
      {
        type: "steps",
        heading: "Step By Step",
        steps: [
          { title: "Sign In To eCard", body: "Open eCard in your browser and sign in." },
          { title: "Go To Settings → Telegram", body: "This is where eCard provides your one-time code." },
          { title: "Open The eCard Bot In Telegram", body: "Start a chat with the bot." },
          { title: "Send The Code", body: "Paste the one-time code into the chat." },
          { title: "Send A Test Card", body: "Photograph any card to confirm the link works." },
        ],
      },
      {
        type: "prose",
        heading: "Why A One-time Code",
        paragraphs: [
          "As a general security pattern, one-time codes prove that the person in the Telegram chat is also signed in to the eCard account, without sharing a password through chat. Once used, the code is no longer valid.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Keep The Code To Yourself",
        body: "Treat the one-time code like a password while it is valid. Don’t paste it in group chats or share screenshots of it.",
      },
      {
        type: "bullets",
        heading: "If Linking Doesn’t Work",
        intro: "General checks:",
        items: [
          "Make sure you are sending the code to the eCard bot, not another chat",
          "Generate a fresh code if you waited a long time",
          "Check you are signed in to the right workspace",
          "See Telegram Troubleshooting for more",
        ],
      },
    ],
    faqs: [
      { q: "Where do I find the code?", a: "In eCard under Settings → Telegram." },
      { q: "How long is the code valid?", a: "eCard’s site does not state an expiry time. If a code fails, generate a new one." },
      { q: "Can I unlink later?", a: "The site does not document unlinking. Check Settings → Telegram in the app." },
    ],
    related: [B, `${B}/troubleshooting`, "resources/guides/connecting-telegram", "help/telegram"],
    source: "verified",
  },
  {
    slug: `${B}/snap-a-card`,
    category: "telegram",
    title: "Snap A Card",
    seoTitle: "Scan A Visiting Card By Sending A Telegram Photo",
    description: "Photograph a visiting card and send it to the eCard Telegram bot. Your chosen AI model reads it and the contact is saved. Photo tips included.",
    h1: "One Photo In The Chat, One New Contact",
    eyebrow: "Telegram Bot",
    intro: "Scanning through Telegram is as simple as sending a photo. The eCard bot passes it to your chosen AI model and the contact is saved to your workspace.",
    variant: "feature",
    visual: "telegram",
    icon: "scan",
    sections: [
      {
        type: "split",
        heading: "What Happens After You Hit Send",
        body: [
          "eCard reads the card with the AI model you selected (Claude, OpenAI, Gemini, DeepSeek or Grok) and saves the contact. Open and Send buttons then appear in the chat.",
        ],
        points: ["Same AI models as browser scanning", "Addresses checked against Google Maps", "Counts toward your plan’s scans"],
      },
      {
        type: "bullets",
        heading: "Photo Tips For Chat Cameras",
        intro: "General guidance:",
        items: [
          "Use Telegram’s camera or your phone camera, whichever focuses better",
          "Shoot from directly above with the card filling the frame",
          "Avoid glare on glossy cards by tilting slightly",
          "Send one card per photo",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Review Still Matters",
        body: "Use the Open button to check the saved contact, especially fields the model may have misread. eCard shows a confidence score for each field.",
      },
      {
        type: "prose",
        heading: "When Telegram Beats The Browser",
        paragraphs: [
          "In a crowded hall, opening a chat and sending a photo can be faster than loading a web page. Many people also find it easier to scan quickly between conversations and tidy up later.",
        ],
      },
    ],
    faqs: [
      { q: "Can I send several cards in one photo?", a: "eCard’s site does not document this. As a general rule, send one card per photo." },
      { q: "Which AI model reads Telegram photos?", a: "eCard describes model choice as a scanning feature; the site does not say Telegram uses a different model." },
    ],
    related: [`${B}/open-and-send-buttons`, "features/ai-card-scanning/photo-best-practices", "features/ai-card-scanning/confidence-scores", "mobile/telegram-on-the-go"],
    source: "mixed",
  },
  {
    slug: `${B}/open-and-send-buttons`,
    category: "telegram",
    title: "Open & Send Buttons",
    seoTitle: "Open And Send Buttons In The eCard Telegram Bot",
    description: "After the eCard bot saves a scanned card, Open and Send buttons appear in the Telegram chat. Open the contact or send your follow-up in one tap.",
    h1: "Two Buttons That Finish The Job",
    eyebrow: "Telegram Bot",
    intro: "Once the bot saves a contact, the chat shows Open and Send buttons. One lets you check the record; the other moves you straight to follow-up.",
    variant: "feature",
    visual: "telegram",
    icon: "zap",
    sections: [
      {
        type: "cards",
        heading: "What Each Button Is For",
        cards: [
          { title: "Open", body: "Go to the saved contact in eCard to review fields, add notes or tag it to an event.", icon: "eye" },
          { title: "Send", body: "Move on to sending the follow-up for that contact.", icon: "send" },
        ],
      },
      {
        type: "steps",
        heading: "A Good Rhythm At Events",
        steps: [
          { title: "Snap", body: "Send the card photo right after the conversation." },
          { title: "Open", body: "Glance at the record and fix anything wrong." },
          { title: "Send", body: "Send the intro while you are still fresh in their mind." },
        ],
      },
      {
        type: "prose",
        heading: "How Intro Emails Behave",
        paragraphs: [
          "eCard’s intro emails are AI-drafted, you can preview them, and they send after 5 seconds from your own SMTP, with time to edit or cancel. eCard’s site does not detail how the Send button maps onto that flow inside Telegram, so check what the button does in your workspace before relying on it at a big event.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Set Up SMTP First",
        body: "Emails come from your own mailbox, so connect Gmail, Outlook, Zoho or another SMTP host before your first event.",
      },
    ],
    faqs: [
      { q: "Does Send email the contact immediately?", a: "eCard intros send after 5 seconds from your SMTP and can be edited or cancelled. The site doesn’t detail the Telegram-specific flow." },
      { q: "Can I add notes from Telegram?", a: "Not documented. Use Open to add notes or voice notes in eCard." },
    ],
    related: [`${B}/auto-email`, "features/outreach/five-second-send", "features/outreach/smtp-setup", `${B}/snap-a-card`],
    source: "mixed",
  },
  {
    slug: `${B}/auto-email`,
    category: "telegram",
    title: "Auto Email From Telegram",
    seoTitle: "Auto Intro Emails After A Telegram Scan",
    description: "Snap a card in Telegram and follow up by email from your own mailbox. eCard AI drafts the intro, sends after 5 seconds, and lets you edit or cancel.",
    h1: "From Telegram Photo To Intro Email",
    eyebrow: "Telegram Bot",
    intro: "eCard describes the Telegram flow as: snap a card, it’s saved and emailed. Intro emails are AI-drafted and sent from your own SMTP after a 5-second window to edit or cancel.",
    variant: "feature",
    visual: "email",
    icon: "mail",
    sections: [
      {
        type: "prose",
        heading: "What eCard States",
        paragraphs: [
          "Across its site, eCard says the Telegram bot saves the contact and shows Open and Send buttons, and that intro emails are drafted by AI, previewable, and sent after 5 seconds from your own SMTP with the option to edit or cancel.",
          "The site does not publish a detailed specification of the Telegram-to-email flow. Test it with a colleague’s card before an event.",
        ],
      },
      {
        type: "table",
        heading: "Before You Rely On It",
        headers: ["Check", "Why"],
        rows: [
          ["SMTP connected", "Emails come from your own mailbox"],
          ["Test send to a teammate", "See exactly what the recipient gets"],
          ["Card details correct", "A misread email address means a bounce"],
          ["Brochure or card link ready", "Make the intro useful"],
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Sample Intro",
        body: "Sample: “Hi Rahul, good to meet you at the sample Bengaluru SaaS meetup. Here is my card, let’s pick up our conversation next week.”",
      },
      {
        type: "bullets",
        heading: "Etiquette For Automatic Intros",
        intro: "General guidance:",
        items: [
          "Mention where you met, one specific detail beats a generic line",
          "Keep it short; the goal is a reply, not a pitch",
          "Only email people who gave you a card and would expect to hear from you",
          "Use the 5-second window to cancel if something looks off",
        ],
      },
    ],
    faqs: [
      { q: "Which address do the emails come from?", a: "Your own, using your SMTP settings." },
      { q: "Can I stop an email?", a: "Yes. eCard says intro emails send after 5 seconds and can be edited or cancelled." },
    ],
    related: ["features/automated-email-outreach", "features/outreach/ai-email-drafts", "features/outreach/follow-up-etiquette", `${B}/open-and-send-buttons`],
    source: "mixed",
  },
  {
    slug: `${B}/forwarding-cards`,
    category: "telegram",
    title: "Forwarding Cards",
    seoTitle: "Forwarding Card Photos To The eCard Bot",
    description: "Got a visiting card photo from a colleague or chat? Guidance on sending existing card images to the eCard Telegram bot and keeping records tidy.",
    h1: "Cards That Arrive As Photos, Not Paper",
    eyebrow: "Telegram Bot",
    intro: "Not every card reaches you in person. Colleagues share photos of cards, and clients send them in chat. This page covers getting those images into eCard.",
    variant: "guide",
    visual: "telegram",
    icon: "send",
    sections: [
      {
        type: "callout",
        tone: "note",
        title: "What eCard Documents",
        body: "eCard states that sending a photo to the bot saves the contact. Its site does not specifically describe forwarded messages, so test forwarding in your workspace.",
      },
      {
        type: "steps",
        heading: "A Dependable Approach",
        steps: [
          { title: "Save Or Forward The Image", body: "Forward the photo to the eCard bot, or save it and send it as a new photo." },
          { title: "Use Open To Review", body: "Check the extracted fields, shared photos are often compressed." },
          { title: "Add Context", body: "Note who shared the card; eCard’s meeting memory records who introduced you." },
        ],
      },
      {
        type: "split",
        heading: "Introductions Deserve Context",
        body: [
          "A forwarded card is usually an introduction. Recording who passed it on makes your eventual follow-up warmer, “Anita suggested I get in touch” works far better than a cold message.",
        ],
        points: ["Record the introducer", "Mention them in the intro", "Thank them afterwards"],
      },
      {
        type: "bullets",
        heading: "Image Quality Pitfalls",
        items: [
          "Chat apps compress images. Ask for the original if text is blurry",
          "Screenshots of photos lose detail",
          "Cropped images may cut off email domains",
        ],
      },
    ],
    faqs: [
      { q: "Can I forward from WhatsApp to the bot?", a: "eCard does not document this. Saving the image and sending it to the bot as a photo is the safe route." },
      { q: "Will a compressed image scan well?", a: "Often, but check confidence scores and fields carefully." },
    ],
    related: ["features/meeting-memory/introductions", `${B}/snap-a-card`, "features/ai-card-scanning/scan-quality-tips", `${B}/troubleshooting`],
    source: "educational",
  },
  {
    slug: `${B}/telegram-vs-browser`,
    category: "telegram",
    title: "Telegram Vs Browser",
    seoTitle: "Telegram Bot Or Browser: Which To Use For Scans",
    description: "eCard scans cards in any phone browser or via the Telegram bot. Compare the two routes and choose the right one for events, desks and teams.",
    h1: "Two Ways In. Pick The One That Fits The Moment.",
    eyebrow: "Telegram Bot",
    intro: "eCard works in any phone browser with no app to install, and it also offers a Telegram bot. Both lead to the same workspace; they suit different situations.",
    variant: "reference",
    visual: "telegram",
    icon: "smartphone",
    sections: [
      {
        type: "table",
        heading: "Side By Side",
        headers: ["", "Phone browser", "Telegram bot"],
        rows: [
          ["Setup", "Sign in", "Link once with a code from Settings → Telegram"],
          ["Capture", "Scan in eCard", "Send a photo in the chat"],
          ["Review", "Field-by-field with confidence scores", "Use the Open button to check"],
          ["Follow-up", "Email and WhatsApp from eCard", "Send button in the chat"],
          ["Plans", "All plans", "All plans"],
        ],
      },
      {
        type: "cards",
        heading: "When Each Shines",
        intro: "General suggestions:",
        cards: [
          { title: "Telegram At The Booth", body: "Fast capture between conversations.", icon: "send" },
          { title: "Browser At Your Desk", body: "Careful review, tagging and notes.", icon: "globe" },
          { title: "Both After An Event", body: "Snap in Telegram, tidy up in the browser.", icon: "layers" },
        ],
      },
      {
        type: "prose",
        heading: "Same Data, Same Rules",
        paragraphs: [
          "Whichever route you use, contacts land in the same workspace, read by your chosen AI model, with addresses checked against Google Maps. Your team’s roles, audit log and security settings still apply.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "No App Either Way",
        body: "Neither route needs an eCard app. That makes onboarding temporary event staff much easier.",
      },
    ],
    faqs: [
      { q: "Is one route more accurate?", a: "eCard doesn’t say so. Accuracy depends on the AI model and the photo." },
      { q: "Do I need both?", a: "No. Use whichever suits you; both are included on every plan." },
    ],
    related: ["mobile/no-app-needed", "mobile/scan-from-your-phone", B, "mobile/telegram-on-the-go"],
    source: "mixed",
  },
  {
    slug: `${B}/team-telegram`,
    category: "telegram",
    title: "Telegram For Teams",
    seoTitle: "Using The eCard Telegram Bot Across A Team",
    description: "Roll out the eCard Telegram bot to your sales or events team: linking accounts, roles, scan-only guests and keeping contacts in one workspace.",
    h1: "Give The Whole Team A Scanner In Their Chat App",
    eyebrow: "Telegram Bot",
    intro: "When everyone on the team can snap cards in Telegram, contacts flow into the shared workspace instead of personal phones. Here is how to roll it out.",
    variant: "solution",
    visual: "team",
    icon: "users",
    sections: [
      {
        type: "steps",
        heading: "Rollout Plan",
        intro: "General guidance; eCard’s site documents linking via a one-time code from Settings → Telegram.",
        steps: [
          { title: "Invite People To The Workspace", body: "Assign roles: owner, admin, manager, member or scan-only guest." },
          { title: "Have Each Person Link Telegram", body: "Each uses the one-time code from Settings → Telegram." },
          { title: "Run A Test Card", body: "Everyone sends one sample card to confirm their link." },
          { title: "Agree On Conventions", body: "Which event tag, who follows up, and by when." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Per-user Details",
        body: "eCard’s site does not document how Telegram links map to individual users or roles. Confirm behaviour in your workspace before a large rollout.",
      },
      {
        type: "cards",
        heading: "Why It Helps Teams",
        cards: [
          { title: "No Lost Cards", body: "Cards go into the workspace, not a pocket.", icon: "archive" },
          { title: "Fast Onboarding", body: "No app to install; Telegram is often already there.", icon: "zap" },
          { title: "Shared Follow-up", body: "Group contacts by event and follow up with the room.", icon: "send" },
        ],
      },
      {
        type: "bullets",
        heading: "Security Habits",
        items: [
          "Require 2FA on eCard accounts",
          "Remove guests after the event",
          "Review the workspace audit log",
          "Never share one-time codes in group chats",
        ],
      },
    ],
    faqs: [
      { q: "How many people can use the bot?", a: "eCard’s site doesn’t set a bot-specific limit; plan user counts are 5, 20, 100 or unlimited." },
      { q: "Can scan-only guests use Telegram?", a: "Not documented. Check in your workspace." },
    ],
    related: ["features/team-security/scan-only-guests", "features/team-security/onboarding-your-team", "features/ai-card-scanning/scanning-for-teams", "features/events-expos/team-at-expos"],
    source: "mixed",
  },
  {
    slug: `${B}/telegram-at-events`,
    category: "telegram",
    title: "Telegram At Events",
    seoTitle: "Using The eCard Telegram Bot At Trade Shows",
    description: "A trade-show playbook for the eCard Telegram bot: prepare before the doors open, snap cards at the booth, and follow up with the room afterwards.",
    h1: "Your Booth Scanner Is Already In Your Pocket",
    eyebrow: "Telegram Bot",
    intro: "Events are where the Telegram bot earns its keep. Snap each card between conversations and leave the hall with contacts already saved.",
    variant: "solution",
    visual: "telegram",
    icon: "calendar",
    sections: [
      {
        type: "table",
        heading: "Before, During And After",
        headers: ["When", "What to do"],
        rows: [
          ["Week before", "Link Telegram, connect SMTP, create the event in eCard"],
          ["Morning of", "Send a test card; charge phones"],
          ["At the booth", "Snap each card right after the conversation"],
          ["Lunch break", "Use Open to review the morning’s contacts"],
          ["Evening", "Follow up with the room"],
        ],
      },
      {
        type: "prose",
        heading: "Capture Context While It’s Fresh",
        paragraphs: [
          "The card tells you who; it doesn’t tell you why. As general guidance, jot down one line about each conversation as soon as you can. eCard’s meeting memory keeps where you met, who introduced you and voice notes, with a searchable AI summary.",
        ],
      },
      {
        type: "bullets",
        heading: "Booth-tested Habits",
        intro: "General tips:",
        items: [
          "Keep a power bank, scanning and chat drain batteries",
          "Venue Wi-Fi is unreliable; check mobile data coverage",
          "Put cards you’ve sent in a separate pocket",
          "Prioritise hot leads for same-day intros",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Watch Your Scan Allowance",
        body: "Big shows can exceed the Free plan’s 50 scans. Starter includes 1,000 a month and Professional 5,000; the 14-day Professional trial needs no card.",
      },
    ],
    faqs: [
      { q: "What if the connection drops?", a: "eCard’s site doesn’t describe offline behaviour. Keep the physical card and resend the photo when you’re back online." },
      { q: "Can I group Telegram scans by event?", a: "eCard supports grouping cards by event. The site doesn’t detail tagging from Telegram; use Open to add the event." },
    ],
    related: ["features/events-expos/at-the-booth", "features/events-expos/follow-up-the-room", "resources/guides/trade-show-playbook", "features/events-expos/expo-checklist"],
    source: "mixed",
  },
  {
    slug: `${B}/troubleshooting`,
    category: "telegram",
    title: "Telegram Troubleshooting",
    seoTitle: "eCard Telegram Bot Troubleshooting",
    description: "Fixes for common eCard Telegram bot issues: one-time code not accepted, photos not saving, blurry scans, missing buttons and email not sending.",
    h1: "When The Bot Doesn’t Do What You Expect",
    eyebrow: "Telegram Bot",
    intro: "Most Telegram issues come down to linking, photo quality or email setup. Work through the checks below; if you are still stuck, contact eCard support.",
    variant: "support",
    visual: "none",
    icon: "help",
    sections: [
      {
        type: "table",
        heading: "Symptoms And Checks",
        headers: ["Symptom", "Likely cause", "Try"],
        rows: [
          ["Code not accepted", "Wrong chat or old code", "Generate a new code in Settings → Telegram"],
          ["Photo sent, no contact", "Bot not linked, or scan limit reached", "Re-link; check plan usage"],
          ["Wrong details saved", "Blur, glare or unusual layout", "Use Open to correct; reshoot"],
          ["Intro email not received", "SMTP not set up or misconfigured", "Check SMTP settings and send a test"],
          ["Scans fail at busy times", "AI provider rate limits", "Add keys to your key pool"],
        ],
      },
      {
        type: "steps",
        heading: "Relinking From Scratch",
        steps: [
          { title: "Sign In To eCard", body: "Make sure you’re in the right workspace." },
          { title: "Open Settings → Telegram", body: "Get a fresh one-time code." },
          { title: "Send It To The Bot", body: "Then send a test card photo." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Limits Of This Page",
        body: "eCard’s site does not publish bot error messages or offline behaviour. These are general troubleshooting steps.",
      },
      {
        type: "bullets",
        heading: "Before Contacting Support, Note",
        items: [
          "Roughly when the problem happened",
          "What you sent and what the bot replied",
          "Your workspace plan",
          "Whether browser scanning works",
        ],
      },
    ],
    faqs: [
      { q: "Does the bot work on the Free plan?", a: "Yes. The Telegram scanning bot is included on every plan." },
      { q: "Why does my scan look wrong?", a: "Usually the photo. See scan quality tips, and correct fields using Open." },
    ],
    related: ["help/telegram", `${B}/connect-workspace`, "features/ai-card-scanning/scan-quality-tips", "help/contact-support", "help/email-sending"],
    source: "mixed",
  },
];

type Extra = { sections: Section[]; faqs?: FAQ[] };

const EXTRA: Record<string, Extra> = {
  [B]: {
    sections: [
      {
        type: "table",
        heading: "Which Route Fits The Moment",
        intro: "General guidance for choosing between the bot and the browser on a given day.",
        headers: ["Situation", "Better route", "Why"],
        rows: [
          ["Standing in a crowded expo aisle", "Telegram bot", "Sending a photo in a chat you already have open takes a couple of taps."],
          ["Sitting at a desk with a stack of cards", "Browser", "A larger screen makes reviewing fields and adding notes easier."],
          ["A card handed over during a quick hallway chat", "Telegram bot", "Capture it before the card goes into a pocket and is forgotten."],
          ["You want to record where you met and who introduced you", "Browser (via Open)", "Meeting memory, voice notes and notes live on the contact in eCard."],
        ],
      },
      {
        type: "bullets",
        heading: "Getting The Most From The Bot In Week One",
        items: [
          "Link the bot before your next event, not on the morning of it, so any linking issue is sorted in a calm moment.",
          "Pin the eCard bot chat near the top of Telegram so it is one tap away.",
          "Set up your SMTP mailbox in eCard first, so the Send button has somewhere to send from.",
          "Send three or four practice cards (your own, a colleague’s) and check how the saved contacts look.",
          "Make a habit of tapping Open on anything important to add context while you still remember the conversation.",
        ],
      },
      {
        type: "prose",
        heading: "Sample: A Day With The Bot",
        paragraphs: [
          "Sample: Neha, a fictional sales manager, meets eight people at a half-day industry meetup. After each conversation she photographs the card in her eCard bot chat and drops the card back into her bag. On the train home she taps Open on the two most promising contacts to add a line about what they discussed, and uses Send for the rest.",
          "Nothing in that routine required a separate app, a laptop or a pile of cards on the desk the next morning, which is exactly the gap the bot is meant to close.",
        ],
      },
    ],
    faqs: [
      { q: "Does the bot replace the eCard web app?", a: "No. The bot is an extra way in for capturing cards. Reviewing, editing, notes and settings still happen in eCard in your browser." },
    ],
  },
  [`${B}/connect-workspace`]: {
    sections: [
      {
        type: "bullets",
        heading: "Pre-flight Checklist",
        intro: "Two minutes of preparation avoids most linking hiccups.",
        items: [
          "Telegram is installed and you are signed in on the phone you will use at events.",
          "You can sign in to eCard in your phone browser, and have your 2FA authenticator handy if you use it.",
          "You know which workspace you want cards to land in, if you belong to more than one.",
          "You have a sample visiting card nearby for the test scan.",
        ],
      },
      {
        type: "table",
        heading: "Common Linking Mistakes And Fixes",
        headers: ["Mistake", "What happens", "Fix"],
        rows: [
          ["Sending the code to the wrong chat", "Nothing links", "Open the eCard bot chat itself and paste the code there."],
          ["Adding spaces or missing characters when copying", "The code is not accepted", "Copy the code again in full, or retype it carefully."],
          ["Using an old code from an earlier attempt", "The code may be rejected", "Generate a fresh code from Settings → Telegram."],
          ["Linking from a shared or borrowed phone", "Cards may come from the wrong Telegram account", "Link only from your own Telegram account."],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Do The Test Scan Straight Away",
        body: "Linking is only confirmed when a real card photo turns into a saved contact. Send a test card immediately after linking, while Settings → Telegram is still open, so you can retry quickly if anything is off.",
      },
    ],
    faqs: [
      { q: "Do I need to link again on a new phone?", a: "eCard’s site does not say. Telegram accounts usually carry across devices; if card photos stop saving, generate a new code from Settings → Telegram and link again." },
    ],
  },
  [`${B}/snap-a-card`]: {
    sections: [
      {
        type: "steps",
        heading: "A Two-minute Post-conversation Routine",
        steps: [
          { title: "Thank Them And Keep The Card In Hand", body: "Don’t pocket it yet, the card is your source of truth until it is saved." },
          { title: "Open The Bot Chat And Photograph The Card", body: "Use Telegram’s in-chat camera so the image goes straight into the conversation." },
          { title: "Glance At The Result", body: "When the contact is saved and the buttons appear, check the name at least." },
          { title: "Decide: Open Now Or Later", body: "If the conversation had a promise in it (a quote, a demo, an intro) tap Open and note it." },
        ],
      },
      {
        type: "table",
        heading: "Sample: What A Good And A Poor Photo Look Like",
        headers: ["", "Good photo", "Poor photo"],
        rows: [
          ["Framing", "Card fills most of the frame", "Card is small in the middle of a busy table"],
          ["Light", "Even daylight or venue lighting", "Strong glare across the phone number"],
          ["Angle", "Shot from directly above", "Steep angle that stretches the text"],
          ["Likely result", "Fields read cleanly", "Fields need fixing in eCard"],
        ],
      },
      {
        type: "bullets",
        heading: "Pitfalls To Avoid",
        items: [
          "Sending a photo of several cards fanned out, capture one card per photo.",
          "Sending a screenshot of a blurred preview instead of a fresh photo.",
          "Assuming every field is right without opening the contacts that matter.",
          "Leaving a batch of photos until the evening, when you no longer remember who was who.",
        ],
      },
    ],
    faqs: [
      { q: "Should I keep the physical card after scanning?", a: "Keeping it until you have checked the contact in eCard is a sensible habit, especially for important leads." },
    ],
  },
  [`${B}/open-and-send-buttons`]: {
    sections: [
      {
        type: "table",
        heading: "Open Or Send? A Quick Decision Guide",
        headers: ["After the conversation…", "Tap", "Reason"],
        rows: [
          ["You promised to share something specific", "Open first", "Add a note so the follow-up reflects the promise."],
          ["It was a friendly, standard exchange", "Send", "A prompt intro keeps you top of mind."],
          ["The card looked hard to read", "Open first", "Check the email address before anything is sent."],
          ["You’re unsure whether to follow up at all", "Neither yet", "The contact is saved; decide later in eCard."],
        ],
      },
      {
        type: "prose",
        heading: "Sample: Using Both Buttons Well",
        paragraphs: [
          "Sample: Arjun, a fictional agency founder, meets Kavya Rao, a sample marketing head, at a breakfast meetup. Kavya asks for a case study. Arjun photographs her card in the bot chat, taps Open, notes “wants retail case study, follow up Thursday”, and holds the intro until he has the right attachment ready.",
          "Ten minutes later he meets a sample supplier with no specific ask. That one gets Send right away. Different conversations, different buttons, the point is to choose deliberately rather than tapping Send by reflex.",
        ],
      },
      {
        type: "bullets",
        heading: "Mistakes Worth Avoiding",
        items: [
          "Tapping Send before checking an email address that looked uncertain on the card.",
          "Sending an identical intro to everyone at a small event where people compare notes.",
          "Forgetting that the intro goes from your own mailbox: replies land in your inbox, so watch it.",
        ],
      },
    ],
    faqs: [
      { q: "Can I use Open later instead of right away?", a: "Yes. The contact is saved either way, so you can find it in eCard whenever you are ready." },
    ],
  },
  [`${B}/auto-email`]: {
    sections: [
      {
        type: "steps",
        heading: "Making The 5-second Window Work For You",
        steps: [
          { title: "Read The Preview, Not Just The Subject", body: "Check the greeting uses the right name and the body mentions where you met." },
          { title: "Check The Recipient Address", body: "One wrong character in an email address sends your intro nowhere." },
          { title: "Edit Or Cancel If Anything Is Off", body: "eCard lets you edit or cancel the intro before it sends." },
          { title: "Watch Your Inbox Afterwards", body: "Replies come to your own mailbox, so answer promptly while the meeting is fresh." },
        ],
      },
      {
        type: "table",
        heading: "When To Let It Send: And When To Stop It",
        headers: ["Situation", "Let it send?", "Note"],
        rows: [
          ["Routine networking contact", "Yes", "A short, polite intro is welcome."],
          ["Senior person who asked you to call instead", "Cancel", "Respect the channel they asked for."],
          ["Card had a generic info@ address", "Usually cancel", "Find a personal address or use another route."],
          ["You promised specific materials", "Edit", "Mention what you will send and when."],
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Deliverability Is Your Mailbox’s Job",
        body: "Because intros go out through your own SMTP, inbox placement depends on your email provider and domain setup. As general guidance, a properly configured business domain tends to fare better than a brand-new address.",
      },
    ],
    faqs: [
      { q: "Can I write the intro myself instead of using the AI draft?", a: "eCard says you can edit the AI draft before it sends, so you can rewrite it as much as you like." },
    ],
  },
  [`${B}/forwarding-cards`]: {
    sections: [
      {
        type: "steps",
        heading: "Sample Workflow: A Colleague Sends You A Card",
        steps: [
          { title: "Receive The Image", body: "Sample: your colleague Rohan sends you a photo of a card from a client lunch." },
          { title: "Ask For Context", body: "Before scanning, ask Rohan one line: who is this, and what do they need?" },
          { title: "Send The Image To Your Bot Chat", body: "Use the clearest version of the image you have." },
          { title: "Open And Annotate", body: "Add who introduced you and why, so the contact makes sense months later." },
          { title: "Follow Up With The Referral In Mind", body: "Mention the mutual contact in your intro rather than sending a cold pitch." },
        ],
      },
      {
        type: "table",
        heading: "Source Image Checklist",
        headers: ["Source", "Typical quality", "Advice"],
        rows: [
          ["Original photo from the camera", "Best", "Use this whenever you can."],
          ["Image passed through a messaging app", "Often compressed", "Ask the sender to share it as a file if text looks soft."],
          ["Screenshot of an image", "Lower", "Crop tightly and check every field."],
          ["Scanned PDF page", "Varies", "Export the card area as an image first."],
        ],
      },
      {
        type: "bullets",
        heading: "Respecting The Person On The Card",
        items: [
          "A card shared by someone else was given to them, not to you, mention the introduction when you reach out.",
          "Do not add forwarded contacts to bulk follow-ups without a reason to contact them.",
          "If someone asks how you got their details, be ready to say who passed them on.",
        ],
      },
    ],
    faqs: [
      { q: "Should I scan cards from a group photo?", a: "Not as a rule. Crop to a single card per image, and only scan contacts you have a genuine reason to follow up with." },
    ],
  },
  [`${B}/telegram-vs-browser`]: {
    sections: [
      {
        type: "steps",
        heading: "Sample: A Combined Workflow",
        intro: "Many people end up using both routes for different parts of the job.",
        steps: [
          { title: "During The Event: Telegram", body: "Photograph each card in the bot chat as conversations end." },
          { title: "On The Way Back: Quick Triage", body: "Tap Send for routine contacts; leave important ones for a closer look." },
          { title: "At A Desk: Browser", body: "Open eCard, review the important contacts, add notes and voice notes, and group them under the event." },
          { title: "Next Day: Follow-up", body: "Use eCard’s outreach tools from the browser for anyone still waiting." },
        ],
      },
      {
        type: "table",
        heading: "Pick By Task, Not By Habit",
        headers: ["Task", "Telegram", "Browser"],
        rows: [
          ["Capture a card in seconds", "Strong fit", "Works"],
          ["Review and correct fields", "Via Open", "Strong fit"],
          ["Add meeting notes and voice notes", "Via Open", "Strong fit"],
          ["Change settings, keys or mailboxes", "No", "Browser"],
        ],
      },
      {
        type: "bullets",
        heading: "Signs You’re Using The Wrong Route",
        items: [
          "You have a backlog of Telegram contacts with no notes. Set aside desk time in the browser.",
          "You are fumbling with a browser tab in a noisy aisle, switch to the bot.",
          "You are scanning the same card both ways. Pick one route per card to avoid duplicates.",
        ],
      },
    ],
    faqs: [
      { q: "What if I accidentally scan a card both ways?", a: "eCard includes duplicate merge in its clean-data tools, so you can combine the two records." },
    ],
  },
  [`${B}/team-telegram`]: {
    sections: [
      {
        type: "table",
        heading: "Sample Rollout Timeline For A Ten-person Team",
        headers: ["When", "Action", "Owner"],
        rows: [
          ["One week before the event", "Everyone links their own Telegram account via Settings → Telegram", "Each team member"],
          ["Five days before", "Each person sends a test card and confirms it saved", "Each team member"],
          ["Three days before", "Agree event grouping, tags and who follows up whom", "Team manager"],
          ["Day after the event", "Review contacts, merge duplicates, assign follow-ups", "Manager and members"],
        ],
      },
      {
        type: "bullets",
        heading: "Team Pitfalls",
        items: [
          "Two people scanning the same visitor’s card: agree who owns each conversation, and merge duplicates afterwards.",
          "Everyone hitting Send to the same contact, decide one owner for the intro.",
          "A departing team member whose Telegram is still linked, include Telegram in your offboarding checklist.",
          "New hires joining mid-event without linking. Keep a one-page linking guide in your team chat.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Use Roles Deliberately",
        body: "eCard names owner, admin, manager, member and scan-only guest roles. Giving each person the narrowest role that lets them do their job is sound general practice, especially for temporary event staff.",
      },
    ],
    faqs: [
      { q: "Can a team share one Telegram account?", a: "It is better practice for each person to link their own account, so scans are attributable and access can be removed individually." },
    ],
  },
  [`${B}/telegram-at-events`]: {
    sections: [
      {
        type: "table",
        heading: "Sample Booth Plan For A Two-day Expo",
        headers: ["Time", "Focus", "Telegram habit"],
        rows: [
          ["Day 1 morning", "High footfall", "Snap and pocket; no notes unless a promise was made."],
          ["Day 1 lunch break", "Catch-up", "Open the morning’s key contacts and add notes."],
          ["Day 1 evening", "Triage", "Send intros to routine contacts; flag hot leads."],
          ["Day 2", "Repeat", "Same rhythm; watch for repeat visitors to avoid duplicates."],
          ["Day after", "Follow-up", "Group the event’s cards and follow up from the browser."],
        ],
      },
      {
        type: "bullets",
        heading: "Kit List",
        items: [
          "Phone charged, plus a power bank, photographing cards all day drains batteries.",
          "Mobile data that works inside the venue; exhibition halls often have poor signal.",
          "A small pouch for scanned cards, kept separate from unscanned ones.",
          "Your own cards or a digital card QR for people who prefer to scan you.",
        ],
      },
      {
        type: "prose",
        heading: "After The Event: Close The Loop",
        paragraphs: [
          "As general guidance, follow-ups sent within a day or two of an event are more likely to be remembered than ones sent a week later. eCard’s events feature lets you group cards from a trade show and follow up with everyone at once, useful once the Telegram captures are reviewed.",
          "Before a bulk follow-up, remove anyone you already emailed with the Send button, so nobody gets two intros.",
        ],
      },
    ],
    faqs: [
      { q: "Should I send intros during the event or after?", a: "Both work. Sending during quiet moments keeps things moving; just avoid double-sending when you do the bulk event follow-up later." },
    ],
  },
  [`${B}/troubleshooting`]: {
    sections: [
      {
        type: "table",
        heading: "Quick Diagnosis",
        headers: ["Symptom", "Likely cause", "First thing to try"],
        rows: [
          ["Bot does not respond at all", "Network or Telegram connection", "Check mobile data; send a plain text message to test."],
          ["Code not accepted", "Old or mistyped code", "Generate a fresh code from Settings → Telegram."],
          ["Contact saved but fields wrong", "Photo quality", "Reshoot with even light, then correct the contact via Open."],
          ["Send does nothing useful", "Mailbox not set up", "Check your SMTP settings in eCard."],
          ["Contacts appear in an unexpected workspace", "Linked from a different account", "Re-link from the workspace you intend to use."],
        ],
      },
      {
        type: "steps",
        heading: "Isolate The Problem In Three Tests",
        steps: [
          { title: "Test The Network", body: "Send a normal photo to a friend. If that fails, the problem is connectivity, not eCard." },
          { title: "Test The Browser Route", body: "Scan the same card in eCard in your phone browser. If that works, focus on the Telegram link." },
          { title: "Test With A Clean Card", body: "Use a simple, well-printed card. If that works, the issue is the original card or photo." },
        ],
      },
    ],
    faqs: [
      { q: "Could I be out of scans?", a: "Possibly. Each plan has a monthly scan allowance (Free includes 50). Check your usage in your workspace if scans stop saving." },
    ],
  },
};

const MORE_FAQS: Record<string, FAQ[]> = {
  [`${B}/connect-workspace`]: [
    { q: "Is it safe to share a screenshot of the linking screen with IT?", a: "Avoid it. The code is what ties a Telegram account to your workspace, so anyone who sees a valid code could try to use it. Describe the problem in words, or generate a new code after sharing." },
  ],
  [`${B}/snap-a-card`]: [
    { q: "What if the bot saves a contact with a misspelt name?", a: "Tap Open and correct it in eCard. Fixing names early matters, because later searches, intros and WhatsApp messages all reuse the saved spelling, and a wrong name in a first email undermines an otherwise good impression. Check designations and company names too, since they shape how your intro reads." },
  ],
  [`${B}/open-and-send-buttons`]: [
    { q: "Do the buttons work for older contacts further up the chat?", a: "eCard’s site does not say whether buttons stay active on older messages. If a button doesn’t respond, find the contact in eCard in your browser and work from there instead." },
    { q: "Does Send work if I haven’t set up a mailbox?", a: "Intros go out from your own SMTP mailbox, such as Gmail or Outlook, so set one up in eCard before relying on Send." },
  ],
  [`${B}/auto-email`]: [
    { q: "Will the AI draft mention where we met?", a: "eCard describes an AI-written draft you preview, but does not document exactly which details it includes. Read the preview and add the event or context yourself if it is missing: that one line usually makes an intro feel personal rather than automated, and it helps the recipient place you." },
  ],
  [`${B}/forwarding-cards`]: [
    { q: "Who appears as the owner of a forwarded card?", a: "The contact is saved through your linked Telegram account, so treat it as your contact. Note in eCard who passed it on, because meeting memory records who introduced you and that context is easy to lose." },
  ],
  [`${B}/telegram-vs-browser`]: [
    { q: "Which route should a new user start with?", a: "Try the browser first for a handful of cards so you see the full review screen and confidence scores. Once you know what a clean result looks like, add the Telegram bot for speed at events and meetings, and keep the browser for reviewing, editing and adding notes." },
    { q: "Is my data different depending on the route?", a: "No. Both routes save contacts into the same eCard workspace, so search, tags, events and follow-ups treat them the same way regardless of how the card came in. Pick whichever route is fastest at the moment you receive the card, then do the careful review work wherever you are most comfortable." },
  ],
  [`${B}/team-telegram`]: [
    { q: "How do we stop two people emailing the same lead?", a: "Agree an owner per conversation before the event, and use tags or event grouping so the team can see who has been contacted. Merge duplicate contacts afterwards using eCard’s duplicate merge, so reports and follow-ups count each person only once." },
    { q: "What should we do when someone leaves the team?", a: "Remove or change their workspace access, and treat their linked Telegram account as part of offboarding. eCard’s workspace audit log can help you review recent activity, and reassigning their open follow-ups keeps leads from going quiet." },
  ],
  [`${B}/telegram-at-events`]: [
    { q: "How many cards can I scan at one event?", a: "Your monthly plan allowance applies: Free includes 50 scans, Starter 1,000, Professional 5,000, and Business unlimited. Before a large expo, check how much of this month’s allowance remains." },
    { q: "Can teammates at the same booth all use the bot?", a: "Yes, as long as each person links their own Telegram account to the workspace with a code from Settings → Telegram." },
  ],
  [`${B}/troubleshooting`]: [
    { q: "The bot worked yesterday and stopped today. What changed?", a: "Common causes are a new phone, a different Telegram account, an exhausted monthly scan allowance or a connectivity problem at the venue. Work through the three isolation tests above before relinking." },
    { q: "Who do I contact if nothing works?", a: "Contact eCard support with the details listed above, including what you tried, when, and which route failed." },
  ],
};

const MORE_SECTIONS: Record<string, Section[]> = {
  [`${B}/troubleshooting`]: [
    {
      type: "callout",
      tone: "tip",
      title: "Keep A Fallback Ready",
      body: "If Telegram misbehaves in the middle of an event, don’t lose the moment troubleshooting. Switch to eCard in your phone browser, which works without any app, keep collecting cards, and sort out the bot link later when things are calm.",
    },
  ],
};

for (const p of pages) {
  const x = EXTRA[p.slug];
  if (!x) continue;
  p.sections.push(...x.sections, ...(MORE_SECTIONS[p.slug] ?? []));
  p.faqs = [...(p.faqs ?? []), ...(x.faqs ?? []), ...(MORE_FAQS[p.slug] ?? [])];
}
