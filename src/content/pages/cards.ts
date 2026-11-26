import type { FAQ, PageDef, Section } from "../types";

const B = "features/digital-business-card";

const base: PageDef[] = [
  {
    slug: B,
    category: "cards",
    title: "Digital Business Card",
    seoTitle: "Digital Business Card With QR And Tracking",
    description: "Share an eCard digital business card with premium templates, a QR code, Save-to-contacts and short links that count clicks with bots filtered out. No app.",
    h1: "A Business Card That Never Runs Out",
    eyebrow: "Digital Card",
    intro: "eCard gives you your own digital card with premium templates, a QR code, Save-to-contacts and short links that count clicks with bots filtered out. Anyone can open it, with no app to install.",
    variant: "feature",
    visual: "card",
    icon: "card",
    sections: [
      {
        type: "cards",
        heading: "What Your Card Includes",
        cards: [
          { title: "Premium Templates", body: "Start from a designed layout instead of a blank page.", icon: "palette" },
          { title: "QR Code", body: "Let people scan your card straight from your phone screen.", icon: "qr" },
          { title: "Save To Contacts", body: "One tap to add you to their address book.", icon: "users" },
          { title: "Short Links", body: "A clean link, such as the sample path /c/rahul.", icon: "link" },
          { title: "Bot-filtered Counts", body: "Click counts with bots filtered out.", icon: "eye" },
          { title: "No App", body: "Opens in any phone browser.", icon: "smartphone" },
        ],
      },
      {
        type: "prose",
        heading: "The Other Half Of The Exchange",
        paragraphs: [
          "eCard started with the cards you receive: scanning them into a CRM. The digital card is the cards you give. When you hand someone a QR code instead of paper, they get your details in a form they can save, and you can see whether they opened it.",
          "Link tracking covers your card, PDFs and WhatsApp links, so a brochure you share alongside the card is counted too.",
        ],
      },
      {
        type: "table",
        heading: "Included On Every Plan",
        intro: "The digital business card is part of eCard's base feature set.",
        headers: ["Plan", "Monthly price", "Digital card"],
        rows: [
          ["Free", "₹0", "Included"],
          ["Starter", "₹299", "Included"],
          ["Professional", "₹999", "Included"],
          ["Business", "₹2,999", "Included, plus white label & custom domain"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Keep Paper Too",
        body: "Many people still expect a paper card in some settings. A QR code printed on your paper card links the two.",
      },
    ],
    faqs: [
      { q: "Does the person I share with need an app?", a: "No. eCard says the card works without an app; it opens in a browser." },
      { q: "Is the digital card free?", a: "Yes. It is part of the base set on every plan, including Free at ₹0." },
      { q: "Can I see who opened my card?", a: "eCard's link tracking shows opens of your card, PDFs and WhatsApp links, with bots filtered out of click counts." },
    ],
    related: [`${B}/create`, `${B}/qr-code`, `${B}/tracked-links`, "features/link-tracking", "product/digital-card-example"],
    source: "verified",
  },
  {
    slug: `${B}/create`,
    category: "cards",
    title: "Create Your Card",
    seoTitle: "Create Your Digital Business Card",
    description: "Plan and create your eCard digital business card: pick a premium template, choose what to include, check it on a phone and share it by QR or short link.",
    h1: "Build Your Card In One Sitting",
    eyebrow: "Guide",
    intro: "A digital card is quick to create, but a little planning makes it far more useful. Here is a sensible order of work.",
    variant: "guide",
    visual: "card",
    icon: "sparkles",
    sections: [
      {
        type: "steps",
        heading: "From Blank To Shareable",
        steps: [
          { title: "Sign Up", body: "Start on the Free plan or the 14-day Professional trial, with no card needed." },
          { title: "Pick A Template", body: "Choose one of eCard's premium templates as your starting point." },
          { title: "Add Your Details", body: "Name, title, company and the contact methods you actually answer." },
          { title: "Check On A Phone", body: "Open your card in a mobile browser, since that is where most people will see it." },
          { title: "Share", body: "Use the QR code in person and the short link everywhere else." },
        ],
      },
      {
        type: "bullets",
        heading: "What To Include",
        items: [
          "A name and title people will recognise",
          "One phone number and one email you check daily",
          "Your company and city",
          "A brochure or PDF if prospects usually ask for one",
        ],
      },
      {
        type: "prose",
        heading: "Less Is More",
        paragraphs: [
          "Every extra link competes for attention. A card with three clear actions (save, call, email) usually performs better than one with ten. If you want to measure that, link tracking shows opens with bots filtered out.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Editor Details",
        body: "eCard's site does not document the card editor's fields or menus. Use the app for exact options.",
      },
    ],
    faqs: [
      { q: "Do I need a paid plan to create a card?", a: "No. The digital card is in the base set on every plan." },
      { q: "Can I try paid features first?", a: "New workspaces get a 14-day Professional trial with no card needed." },
    ],
    related: [`${B}/templates`, `${B}/card-design-tips`, "resources/guides/creating-your-digital-card", `${B}/personal-url`],
    source: "mixed",
  },
  {
    slug: `${B}/templates`,
    category: "cards",
    title: "Premium Templates",
    seoTitle: "Premium Templates For Your Digital Card",
    description: "eCard offers premium templates for your digital business card. Learn to pick one that fits your industry, keeps details clear and reads well on phones.",
    h1: "Start From A Design, Not A Blank Screen",
    eyebrow: "Digital Card",
    intro: "eCard includes premium templates for your digital card. A good template handles layout so you can focus on what to say.",
    variant: "feature",
    visual: "card",
    icon: "palette",
    sections: [
      {
        type: "split",
        heading: "Choosing A Template",
        body: [
          "Pick for readability first and style second. Your card will mostly be viewed on a phone, often in a hurry, so contact details must stand out.",
          "Then match the tone of your work: restrained for legal or finance, warmer for hospitality or design.",
        ],
        points: ["Legible on a small screen", "Clear call to save", "Matches your industry's tone"],
      },
      {
        type: "table",
        heading: "Sample Matches",
        intro: "General suggestions, not template names.",
        headers: ["Profession", "Look for"],
        rows: [
          ["Lawyer, CA", "Plain layout, strong typography"],
          ["Realtor", "Room for a brochure link"],
          ["Designer, architect", "Visual layout with whitespace"],
          ["Sales", "Prominent call and WhatsApp actions"],
        ],
      },
      {
        type: "prose",
        heading: "Brand Consistency",
        paragraphs: [
          "If you want your company's logo, colours and domain throughout, eCard's white-label option on Business (₹2,999/month) and Enterprise covers logo, colours and custom domain.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Template Catalogue",
        body: "eCard's site mentions premium templates but does not publish a catalogue or count. Browse them in the app.",
      },
    ],
    faqs: [
      { q: "How many templates are there?", a: "The site does not say. Check the app." },
      { q: "Can I use my brand colours?", a: "White label with logo, colours and custom domain is on Business and Enterprise plans." },
    ],
    related: [`${B}/card-design-tips`, `${B}/white-label-cards`, `${B}/create`, "features/team-security/white-label"],
    source: "mixed",
  },
  {
    slug: `${B}/qr-code`,
    category: "cards",
    title: "QR Code Sharing",
    seoTitle: "Share Your Card With A QR Code",
    description: "Every eCard digital card has a QR code. Show it on your phone or print it so people can open your card and save you to their contacts in seconds.",
    h1: "Point, Scan, Saved",
    eyebrow: "Digital Card",
    intro: "A QR code is the fastest way to hand over a digital card in person. The other person points their camera, opens your card and taps Save to contacts.",
    variant: "feature",
    visual: "card",
    icon: "qr",
    sections: [
      {
        type: "steps",
        heading: "The In-person Exchange",
        steps: [
          { title: "Open Your QR Code", body: "Have it ready on your phone before the conversation ends." },
          { title: "They Scan", body: "Most phone cameras recognise QR codes without a separate app." },
          { title: "Your Card Opens", body: "In their browser; no eCard app needed." },
          { title: "They Save You", body: "One tap on Save to contacts." },
        ],
      },
      {
        type: "bullets",
        heading: "Where To Place Your QR Code",
        items: [
          "On your phone's lock screen or a saved image for quick access",
          "Printed on the back of your paper card",
          "On booth signage and table stands",
          "On slides at the end of a talk",
        ],
      },
      {
        type: "prose",
        heading: "QR Codes And Tracking",
        paragraphs: [
          "Because the QR code opens your card, views count in your link tracking. eCard filters bots out of click counts, so the numbers better reflect real people.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Test The Print",
        body: "Before printing hundreds of cards, scan a proof with two or three different phones in normal indoor light.",
      },
    ],
    faqs: [
      { q: "Does the other person need eCard?", a: "No. The card opens in a phone browser." },
      { q: "Are QR scans tracked?", a: "eCard's link tracking shows card opens, with bots filtered out of click counts." },
    ],
    related: [`${B}/qr-at-events`, `${B}/save-to-contacts`, `${B}/paper-vs-digital`, "mobile/share-your-card-on-mobile"],
    source: "mixed",
  },
  {
    slug: `${B}/save-to-contacts`,
    category: "cards",
    title: "Save To Contacts",
    seoTitle: "Save-to-Contacts From Your Digital Card",
    description: "With eCard's Save-to-contacts, people add you to their phone's address book from your digital card in one tap, so you are easy to find when they need you.",
    h1: "Make Yourself Easy To Keep",
    eyebrow: "Digital Card",
    intro: "A card that is viewed but not saved is quickly forgotten. Save-to-contacts on your eCard digital card puts you in their address book in one step.",
    variant: "feature",
    visual: "card",
    icon: "download",
    sections: [
      {
        type: "prose",
        heading: "Why Saving Matters",
        paragraphs: [
          "When someone needs a supplier or advisor, they search their phone. If you are not in their contacts, you are not in the running. Paper cards rely on the recipient typing your details; most never do.",
          "Save-to-contacts removes that effort. It also means your name shows up when you call or WhatsApp them later, rather than an unknown number.",
        ],
      },
      {
        type: "split",
        heading: "Encourage The Tap",
        body: [
          "Say it out loud: \"Tap save so you have my number.\" People follow simple, specific prompts, and the moment of exchange is when they are most willing.",
        ],
        points: ["Ask while they are holding the phone", "Keep the card short so Save is visible", "Use a recognisable name and photo"],
      },
      {
        type: "cards",
        heading: "Works With",
        cards: [
          { title: "QR Code", body: "In person, at meetings and booths.", icon: "qr" },
          { title: "Short Link", body: "In emails, WhatsApp and signatures.", icon: "link" },
          { title: "No App", body: "Opens in any phone browser.", icon: "smartphone" },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Device Behaviour",
        body: "How the saved contact appears depends on the visitor's phone. eCard's site does not document the contact file format.",
      },
    ],
    faqs: [
      { q: "Does Save-to-contacts need an app?", a: "No. eCard's digital card works without an app." },
      { q: "Is it on the Free plan?", a: "Yes. The digital card, including Save-to-contacts, is in the base set." },
    ],
    related: [`${B}/qr-code`, `${B}/no-app-required`, `${B}/mobile-sharing`, B],
    source: "mixed",
  },
  {
    slug: `${B}/short-links`,
    category: "cards",
    title: "Short Links",
    seoTitle: "Short Links For Your Digital Card",
    description: "Your eCard digital card comes with short links, like the sample path /c/rahul, that are easy to share and count clicks with bots filtered out.",
    h1: "A Link Short Enough To Say Out Loud",
    eyebrow: "Digital Card",
    intro: "eCard gives your digital card a short link, following a pattern like the sample path /c/rahul. Short links are easy to type, paste and remember, and they count clicks with bots filtered out.",
    variant: "feature",
    visual: "analytics",
    icon: "link",
    sections: [
      {
        type: "split",
        heading: "Why Short Links Work",
        body: [
          "Long URLs get truncated in messages, look suspicious and are impossible to dictate. A short path keeps your link tidy wherever it appears.",
        ],
        points: ["Readable in WhatsApp and email", "Fits in a signature", "Easy to say on a call"],
      },
      {
        type: "table",
        heading: "Where To Use Your Short Link",
        headers: ["Channel", "Tip"],
        rows: [
          ["Email signature", "Place it under your name"],
          ["WhatsApp", "Send it after a call so they can save you"],
          ["Social profiles", "Use it as your contact link"],
          ["Presentations", "Show it next to your QR code"],
        ],
      },
      {
        type: "prose",
        heading: "Counting Real Clicks",
        paragraphs: [
          "Messaging apps and email security tools often open links automatically to preview them. Without filtering, those look like visits. eCard counts clicks with bots filtered out, so your numbers lean towards real people.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Choosing Your Path",
        body: "/c/rahul is eCard's example. The site does not document rules for choosing or changing your path; check the app.",
      },
    ],
    faqs: [
      { q: "What does a short link look like?", a: "eCard's example path is /c/rahul." },
      { q: "Are bot clicks counted?", a: "eCard says click counts have bots filtered out." },
    ],
    related: [`${B}/personal-url`, `${B}/tracked-links`, `${B}/bot-filtering`, "features/link-tracking/short-link-analytics"],
    source: "verified",
  },
  {
    slug: `${B}/tracked-links`,
    category: "cards",
    title: "Tracked Links",
    seoTitle: "Tracked Links For Cards, PDFs And WhatsApp",
    description: "eCard tracks opens of your digital card, PDFs and WhatsApp links, so you can see which contacts engaged and time your follow-up better.",
    h1: "Know When They Looked",
    eyebrow: "Digital Card",
    intro: "eCard's link tracking shows opens of your card, PDFs and WhatsApp links. That turns a silent send into a signal you can act on.",
    variant: "feature",
    visual: "analytics",
    icon: "eye",
    sections: [
      {
        type: "cards",
        heading: "What Is Tracked",
        cards: [
          { title: "Your Card", body: "Opens of your digital business card.", icon: "card" },
          { title: "PDFs", body: "Brochures and documents you share.", icon: "file" },
          { title: "WhatsApp Links", body: "Links sent in WhatsApp messages.", icon: "message" },
        ],
      },
      {
        type: "steps",
        heading: "Using The Signal",
        steps: [
          { title: "Share", body: "Send your card or a brochure after a meeting." },
          { title: "Watch For Opens", body: "An open shows interest without the person having to reply." },
          { title: "Follow Up Thoughtfully", body: "Reference the material, not the fact that you saw them open it." },
        ],
      },
      {
        type: "prose",
        heading: "Use Tracking Respectfully",
        paragraphs: [
          "Engagement data helps you decide when and whether to follow up. It should not make the other person feel watched. \"Did the brochure answer your questions?\" lands better than \"I saw you opened it twice.\"",
          "No opens is information too: perhaps the message went to the wrong channel, and WhatsApp would work better than email.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Bots Filtered",
        body: "eCard filters bots out of click counts, which reduces false opens from link previews and security scanners.",
      },
    ],
    faqs: [
      { q: "Can I track a brochure I send?", a: "Yes. eCard lists PDFs among the links whose opens it tracks." },
      { q: "Is tracking on every plan?", a: "The site lists the digital card with short links in the base set; check in-app for analytics detail by plan." },
    ],
    related: ["features/link-tracking", `${B}/share-pdfs-and-brochures`, "features/link-tracking/who-opened-your-card", `${B}/bot-filtering`],
    source: "mixed",
  },
  {
    slug: `${B}/bot-filtering`,
    category: "cards",
    title: "Bot-Filtered Click Counts",
    seoTitle: "Why Bot-Filtered Click Counts Matter",
    description: "Link previews and security scanners inflate click counts. eCard filters bots out of its short-link counts so engagement numbers better reflect real people.",
    h1: "Clicks From People, Not Machines",
    eyebrow: "Digital Card",
    intro: "eCard's short links count clicks with bots filtered out. Here is why that matters and what it means for reading your numbers.",
    variant: "feature",
    visual: "analytics",
    icon: "shield",
    sections: [
      {
        type: "prose",
        heading: "Where Fake Clicks Come From",
        paragraphs: [
          "When you paste a link into a chat app, the app often fetches the page to build a preview. Corporate email systems scan links for malware before the recipient sees the message. Search crawlers wander through public pages.",
          "Each of those looks like a visit to a naive counter. The result is inflated numbers and false hope that someone read your brochure.",
        ],
      },
      {
        type: "table",
        heading: "Common Sources Of Automated Clicks",
        headers: ["Source", "Why it happens"],
        rows: [
          ["Link previews", "Messaging apps fetch pages to show a card"],
          ["Email security", "Scanners check links before delivery"],
          ["Crawlers", "Search and monitoring bots index pages"],
        ],
      },
      {
        type: "split",
        heading: "Reading Filtered Numbers",
        body: [
          "Filtered counts will usually be lower than raw ones, and more meaningful. A single filtered open is a reasonable sign that a person looked.",
        ],
        points: ["Lower but truer counts", "Better follow-up timing", "Fewer false positives"],
      },
      {
        type: "callout",
        tone: "note",
        title: "Method Not Published",
        body: "eCard says bots are filtered out but does not publish its detection method. No filter is perfect, so treat counts as strong signals rather than exact facts.",
      },
    ],
    faqs: [
      { q: "Does eCard filter bots?", a: "Yes. eCard's short links count clicks with bots filtered out." },
      { q: "How are bots detected?", a: "The method is not published on eCard's site." },
    ],
    related: ["features/link-tracking/accurate-click-counts", `${B}/short-links`, `${B}/tracked-links`, "features/link-tracking/reading-your-analytics"],
    source: "mixed",
  },
  {
    slug: `${B}/no-app-required`,
    category: "cards",
    title: "No App Required",
    seoTitle: "Digital Card With No App To Install",
    description: "eCard's digital card opens in any phone browser, so the people you meet never need to download anything, and eCard itself works with no app to install.",
    h1: "Nobody Has To Download Anything",
    eyebrow: "Digital Card",
    intro: "Ask someone to install an app to see your card and most will not bother. eCard's digital card opens in the browser, and eCard itself works in any phone browser.",
    variant: "feature",
    visual: "card",
    icon: "smartphone",
    sections: [
      {
        type: "split",
        heading: "Friction Kills Exchanges",
        body: [
          "Every extra step loses people: finding the app, waiting for the download, creating an account. A link or QR code that opens straight in the browser removes all of that.",
        ],
        points: ["Works on any modern phone", "No account for the recipient", "No storage used on their device"],
      },
      {
        type: "cards",
        heading: "Browser-based On Both Sides",
        cards: [
          { title: "For The Recipient", body: "Your card, QR and Save-to-contacts open in their browser.", icon: "globe" },
          { title: "For You", body: "eCard works in any phone browser; there is no eCard app to install.", icon: "smartphone" },
          { title: "For Quick Capture", body: "You can also send card photos to the eCard Telegram bot.", icon: "send" },
        ],
      },
      {
        type: "prose",
        heading: "Add To Home Screen",
        paragraphs: [
          "Most phone browsers let you add a website to your home screen so it opens like an app. That is a general browser feature and a handy shortcut to your card or the eCard workspace.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "No Mobile App",
        body: "eCard is browser-only; there is no app store download. That is by design.",
      },
    ],
    faqs: [
      { q: "Is there an eCard mobile app?", a: "No. eCard works in any phone browser and the site says there is no app to install." },
      { q: "Does the person I share with need an account?", a: "No account is needed to view your card." },
    ],
    related: ["mobile/no-app-needed", "platform/browser-based", `${B}/mobile-sharing`, "features/telegram-bot"],
    source: "verified",
  },
  {
    slug: `${B}/mobile-sharing`,
    category: "cards",
    title: "Mobile Sharing",
    seoTitle: "Sharing Your Card From Your Phone",
    description: "Share your eCard digital card from your phone by QR code, short link, email or WhatsApp, and pick the right method for each situation you meet people in.",
    h1: "Four Ways To Share From Your Pocket",
    eyebrow: "Digital Card",
    intro: "Your phone is your card holder. Here is how to choose between QR, short link, email and WhatsApp depending on the moment.",
    variant: "guide",
    visual: "card",
    icon: "smartphone",
    sections: [
      {
        type: "table",
        heading: "Pick The Method",
        headers: ["Situation", "Best method", "Why"],
        rows: [
          ["Face to face", "QR code", "Instant and no typing"],
          ["After a phone call", "WhatsApp", "Lands where the conversation already is"],
          ["Formal follow-up", "Email", "Fits business correspondence"],
          ["Profiles and bios", "Short link", "Readable anywhere"],
        ],
      },
      {
        type: "steps",
        heading: "Before You Leave For A Meeting",
        steps: [
          { title: "Open Your Card Once", body: "Check it loads and details are current." },
          { title: "Have The QR Ready", body: "Save a screenshot for poor network spots." },
          { title: "Copy Your Short Link", body: "Keep it handy for messages." },
        ],
      },
      {
        type: "prose",
        heading: "Capture In Both Directions",
        paragraphs: [
          "When they hand you a paper card in return, scan it into eCard straight away, from the browser or by sending a photo to the Telegram bot. That way the exchange is complete on both sides.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Offline Backup",
        body: "A saved image of your QR code still works if your connection is weak; the other person's phone does the loading.",
      },
    ],
    faqs: [
      { q: "Can I share without internet?", a: "A saved QR image can be scanned offline; the other person needs a connection to open your card." },
      { q: "Is there a share button for WhatsApp?", a: "eCard lists WhatsApp sharing for messages; check the app for exact share options on your card." },
    ],
    related: [`${B}/share-by-whatsapp`, `${B}/share-by-email`, `${B}/qr-code`, "mobile/share-your-card-on-mobile"],
    source: "mixed",
  },
  {
    slug: `${B}/share-by-email`,
    category: "cards",
    title: "Share By Email",
    seoTitle: "Share Your Digital Card By Email",
    description: "Share your eCard digital card in emails and AI-drafted intros sent from your own SMTP mailbox, and see when the card is opened with link tracking.",
    h1: "Put Your Card In Every Intro Email",
    eyebrow: "Digital Card",
    intro: "Email is where most business relationships become formal. Including your digital card link gives the recipient everything they need to save you.",
    variant: "guide",
    visual: "email",
    icon: "mail",
    sections: [
      {
        type: "split",
        heading: "Pair It With eCard Intros",
        body: [
          "After scanning someone's card, eCard drafts an intro email you can preview. It sends after 5 seconds from your own SMTP mailbox unless you edit or cancel. Adding your card link to that message closes the loop.",
        ],
        points: ["Sent from your own address", "Preview, edit or cancel", "Card opens are tracked"],
      },
      {
        type: "bullets",
        heading: "Writing The Line",
        items: [
          "Keep it simple: \"Here is my card so you have my details\"",
          "Put the link on its own line",
          "Avoid link shorteners from other services that look suspicious",
          "Do not attach an image of your card; the link is better",
        ],
      },
      {
        type: "prose",
        heading: "Deliverability",
        paragraphs: [
          "Messages from your own domain with a clear sender and one or two links tend to be delivered better than heavy, link-filled emails. Your eCard short link is a single, clean link.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Supported Mailboxes",
        body: "eCard sends through SMTP, with providers such as Gmail, Outlook, Zoho, SendGrid, Brevo, Mailgun, Amazon SES, Resend or any SMTP host.",
      },
    ],
    faqs: [
      { q: "Does the intro email come from my address?", a: "Yes. eCard sends from your own SMTP." },
      { q: "Can I cancel an email?", a: "You preview the draft and can edit or cancel it before it sends after 5 seconds." },
    ],
    related: [`${B}/email-signature`, "features/outreach/send-from-your-own-address", "features/automated-email-outreach", `${B}/tracked-links`],
    source: "mixed",
  },
  {
    slug: `${B}/share-by-whatsapp`,
    category: "cards",
    title: "Share By WhatsApp",
    seoTitle: "Share Your Digital Card On WhatsApp",
    description: "Send your digital card over WhatsApp alongside AI-written messages in English, Hindi or Marathi, opened in one tap, with WhatsApp link opens tracked.",
    h1: "Your Card, Where The Conversation Already Is",
    eyebrow: "Digital Card",
    intro: "For many professionals in India, WhatsApp is where business actually happens. eCard writes WhatsApp messages in English, Hindi or Marathi and opens them in one tap.",
    variant: "guide",
    visual: "whatsapp",
    icon: "message",
    sections: [
      {
        type: "steps",
        heading: "Sharing After A Meeting",
        steps: [
          { title: "Scan Their Card", body: "Review the fields and save the contact." },
          { title: "Generate A Message", body: "eCard's AI writes a WhatsApp message in English, Hindi or Marathi." },
          { title: "Add Your Card Link", body: "Include your short link so they can save you." },
          { title: "Open In WhatsApp", body: "One tap opens the message, ready to send." },
        ],
      },
      {
        type: "cards",
        heading: "Sample Messages",
        intro: "Fictional examples.",
        cards: [
          { title: "English", body: "Sample: Great meeting you at the expo today. Here is my card so you have my details.", icon: "message" },
          { title: "Hindi", body: "Sample: आज मिलकर अच्छा लगा। मेरा कार्ड यह रहा।", icon: "message" },
          { title: "Marathi", body: "Sample: आज भेटून आनंद झाला. हे माझं कार्ड.", icon: "message" },
        ],
      },
      {
        type: "prose",
        heading: "Etiquette",
        paragraphs: [
          "WhatsApp feels personal, so keep messages short and send them at reasonable hours. Mention where you met in the first line so they recognise you.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Tracked",
        body: "eCard's link tracking includes WhatsApp links, so you can see when a shared link is opened.",
      },
    ],
    faqs: [
      { q: "Which languages are supported?", a: "English, Hindi and Marathi." },
      { q: "Does eCard send the WhatsApp message itself?", a: "eCard opens the message in WhatsApp in one tap; you send it." },
    ],
    related: ["features/whatsapp-follow-ups", "features/outreach/one-tap-whatsapp", "features/link-tracking/whatsapp-link-tracking", `${B}/mobile-sharing`],
    source: "mixed",
  },
  {
    slug: `${B}/personal-url`,
    category: "cards",
    title: "Your Personal Card URL",
    seoTitle: "Your Personal Digital Card URL",
    description: "Your eCard digital card lives at a short personal path, like the example /c/rahul. Here is how to use it consistently across email, social and print.",
    h1: "One Address For Your Professional Identity",
    eyebrow: "Digital Card",
    intro: "eCard's example of a card path is /c/rahul: short, personal and easy to share. Treat it as your permanent contact address.",
    variant: "feature",
    visual: "card",
    icon: "globe",
    sections: [
      {
        type: "prose",
        heading: "Why A Stable URL Matters",
        paragraphs: [
          "A paper card goes out of date the day you change numbers. A URL can stay the same while the details behind it change, so a link you printed last year still shows your current information.",
          "That only works if you keep using one address everywhere. Resist creating new links for each campaign.",
        ],
      },
      {
        type: "bullets",
        heading: "Use It Everywhere",
        items: [
          "Email signature",
          "Social and professional profiles",
          "Back of your paper card, as text and QR",
          "Proposals and invoices",
          "Event badges",
        ],
      },
      {
        type: "split",
        heading: "Your Own Domain",
        body: [
          "On Business and Enterprise plans, eCard's white label includes a custom domain, so card links can carry your company's domain instead of eCard's.",
        ],
        points: ["Logo", "Colours", "Custom domain"],
      },
      {
        type: "callout",
        tone: "note",
        title: "Path Rules",
        body: "The site gives /c/rahul as an example but does not explain how the path is chosen or changed. Check the app.",
      },
    ],
    faqs: [
      { q: "Can I use my company domain?", a: "White label with custom domain is on Business (₹2,999/month) and Enterprise." },
      { q: "Will my link change if I update my details?", a: "The site does not say; generally a card link points to your current card. Check the app before reprinting." },
    ],
    related: [`${B}/short-links`, `${B}/white-label-cards`, "features/team-security/custom-domains", `${B}/email-signature`],
    source: "mixed",
  },
  {
    slug: `${B}/personal-profile`,
    category: "cards",
    title: "Personal Profile",
    seoTitle: "Writing A Strong Digital Card Profile",
    description: "Write the profile on your digital business card: a clear title, a one-line description of what you do and the contact routes people should actually use.",
    h1: "Say Who You Are In One Glance",
    eyebrow: "Guide",
    intro: "People look at a digital card for a few seconds. In that time they should understand who you are, what you do and how to reach you.",
    variant: "guide",
    visual: "card",
    icon: "users",
    sections: [
      {
        type: "steps",
        heading: "Write Your Profile",
        steps: [
          { title: "Name As People Say It", body: "Use the name you introduce yourself with." },
          { title: "A Plain Title", body: "\"Commercial Property Advisor\" beats an internal job code." },
          { title: "One Line On What You Do", body: "Sample: \"Helping Pune families find their first home.\"" },
          { title: "Preferred Contact Routes", body: "List the channels you answer quickly, in order." },
        ],
      },
      {
        type: "table",
        heading: "Before And After",
        intro: "Fictional samples.",
        headers: ["Before", "After"],
        rows: [
          ["Sr. Exec, BD (West)", "Business Development, Western India"],
          ["Consultant", "Tax Consultant for Small Manufacturers"],
          ["Founder & CEO & CTO", "Founder, building clinic software"],
        ],
      },
      {
        type: "bullets",
        heading: "Avoid",
        items: [
          "Long biographies; link a PDF if needed",
          "Numbers you do not answer",
          "Jargon your clients would not use",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Available Fields",
        body: "eCard's site does not list the profile fields on the card. Check the card editor in the app.",
      },
    ],
    faqs: [
      { q: "Should I add a photo?", a: "A recognisable photo helps people remember you, where the template supports it." },
      { q: "How long should my description be?", a: "One line is usually enough; longer material belongs in a PDF." },
    ],
    related: [`${B}/create`, `${B}/card-design-tips`, `${B}/share-pdfs-and-brochures`, "resources/guides/visiting-card-etiquette"],
    source: "educational",
  },
  {
    slug: `${B}/share-pdfs-and-brochures`,
    category: "cards",
    title: "Share PDFs & Brochures",
    seoTitle: "Share PDFs And Brochures With Your Card",
    description: "Send brochures and PDFs with your eCard digital card and see who opened them. Ideal for property brochures, catalogues and proposals after a meeting.",
    h1: "Send The Brochure, See Who Opened It",
    eyebrow: "Digital Card",
    intro: "eCard's link tracking covers PDFs as well as your card. For real estate, eCard describes sending the brochure with your card and seeing who opened it.",
    variant: "feature",
    visual: "analytics",
    icon: "file",
    sections: [
      {
        type: "split",
        heading: "The Real Estate Example",
        body: [
          "eCard's real estate use case: scan buyer and broker cards, send the brochure with your card and see who opened it, then follow up in Marathi or Hindi on WhatsApp.",
          "The same pattern fits any business that sends a catalogue or proposal after a first meeting.",
        ],
        points: ["Scan the card", "Send card and brochure", "See opens", "Follow up on WhatsApp"],
      },
      {
        type: "bullets",
        heading: "Good Brochure PDFs",
        items: [
          "Readable on a phone: large text, single column",
          "Small file size so it opens quickly on mobile data",
          "Contact details on the last page",
          "A clear next step, such as booking a site visit",
        ],
      },
      {
        type: "prose",
        heading: "Using Opens To Prioritise",
        paragraphs: [
          "After an event you might send fifty brochures. Opens tell you who to call first. Those who did not open may prefer a different channel, or may simply not be interested yet.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "File Limits",
        body: "eCard's site does not state PDF size limits. Storage per plan is 1 GB on Free, 25 GB on Starter, 250 GB on Professional and unlimited on Business.",
      },
    ],
    faqs: [
      { q: "Can I track brochure opens?", a: "Yes. eCard's link tracking covers PDFs." },
      { q: "How much storage do I get?", a: "1 GB on Free, 25 GB on Starter, 250 GB on Professional, unlimited on Business and Enterprise." },
    ],
    related: ["features/link-tracking/brochure-tracking", "use-cases/real-estate", "features/link-tracking/pdf-engagement", `${B}/tracked-links`],
    source: "verified",
  },
  {
    slug: `${B}/paper-vs-digital`,
    category: "cards",
    title: "Paper Vs Digital Cards",
    seoTitle: "Paper Vs Digital Business Cards",
    description: "An honest comparison of paper and digital business cards: cost, updates, tracking, etiquette and why many professionals use both, linked by a QR code.",
    h1: "Paper Or Digital? Usually Both.",
    eyebrow: "Comparison",
    intro: "Paper cards are not going away, especially in cultures where the exchange itself is a ritual. Digital cards fix what paper cannot. Here is how they compare.",
    variant: "reference",
    visual: "card",
    icon: "layers",
    sections: [
      {
        type: "table",
        heading: "Side By Side",
        headers: ["Aspect", "Paper card", "eCard digital card"],
        rows: [
          ["Exchange", "Handed over", "QR code or short link"],
          ["Updating details", "Reprint", "Edit the card"],
          ["Saving to phone", "Recipient types it", "Save to contacts"],
          ["Knowing it was seen", "No", "Link tracking, bots filtered"],
          ["Running out", "Yes", "No"],
          ["Cost to start", "Printing", "Free plan at ₹0"],
        ],
      },
      {
        type: "prose",
        heading: "Where Paper Still Wins",
        paragraphs: [
          "Paper is tangible, works without a phone and carries formality. In many business settings, offering a card with both hands is part of making a good impression.",
          "The practical answer is to print a QR code on your paper card. You keep the ritual and gain everything digital offers.",
        ],
      },
      {
        type: "split",
        heading: "And The Cards You Receive",
        body: [
          "Paper cards you receive are where eCard began: scanning them into a CRM with the AI model you choose, reviewing each field before saving.",
        ],
        points: ["Give: digital card", "Receive: scan into contacts"],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Print Less",
        body: "With a digital card for most exchanges, you can print smaller batches of paper cards and update them less often.",
      },
    ],
    faqs: [
      { q: "Should I stop printing cards?", a: "Not necessarily. Many people keep a small stock with a QR code linking to their digital card." },
      { q: "Can eCard read paper cards I receive?", a: "Yes. AI scanning is eCard's core feature, on every plan." },
    ],
    related: ["platform/paper-to-digital", `${B}/qr-code`, "resources/guides/visiting-card-etiquette", "features/ai-card-scanning"],
    source: "mixed",
  },
  {
    slug: `${B}/qr-at-events`,
    category: "cards",
    title: "QR Codes At Events",
    seoTitle: "Using QR Codes At Events And Expos",
    description: "Practical ways to use your digital card QR code at trade shows, conferences and meetups, from booth signage to badges, plus how to capture cards in return.",
    h1: "Make Your Booth Scannable",
    eyebrow: "Events",
    intro: "Events are where cards change hands fastest. A visible QR code lets visitors take your details without waiting for you to finish another conversation.",
    variant: "guide",
    visual: "card",
    icon: "qr",
    sections: [
      {
        type: "cards",
        heading: "Where QR Codes Work At Events",
        cards: [
          { title: "Booth Signage", body: "Large enough to scan from a step away.", icon: "building" },
          { title: "Table Stands", body: "Next to brochures and samples.", icon: "qr" },
          { title: "Badges", body: "A small code on the lanyard.", icon: "users" },
          { title: "Final Slide", body: "When you speak on a panel.", icon: "eye" },
        ],
      },
      {
        type: "steps",
        heading: "Event-day Routine",
        steps: [
          { title: "Test The Codes", body: "Scan them under the venue's lighting before doors open." },
          { title: "Capture In Return", body: "Scan visitors' cards into eCard, or send photos to the Telegram bot." },
          { title: "Group By Event", body: "Keep every card from the show together for follow-up." },
          { title: "Follow Up With The Room", body: "eCard lets you follow up with everyone from an event at once." },
        ],
      },
      {
        type: "bullets",
        heading: "Signage Tips",
        items: [
          "High contrast, dark code on a light background",
          "A short prompt: \"Scan to save my details\"",
          "Print the short link under the code for people who prefer typing",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Bring Temporary Help",
        body: "Booth staff can be added as scan-only guests, so they can capture cards without full workspace access.",
      },
    ],
    faqs: [
      { q: "Can visitors scan without an app?", a: "Yes. Most phone cameras read QR codes, and the card opens in the browser." },
      { q: "Can temporary staff scan cards?", a: "eCard has a scan-only guest role." },
    ],
    related: ["features/events-expos/at-the-booth", "features/events-expos", `${B}/qr-code`, "features/telegram-bot/telegram-at-events"],
    source: "mixed",
  },
  {
    slug: `${B}/email-signature`,
    category: "cards",
    title: "Card In Your Email Signature",
    seoTitle: "Add Your Digital Card To Your Signature",
    description: "Put your digital card's short link in your email signature so every message offers a one-click way to save your details, with opens tracked.",
    h1: "Every Email, A Card Exchange",
    eyebrow: "Guide",
    intro: "You send dozens of emails a week. A card link in your signature turns each of them into a chance for the recipient to save your details.",
    variant: "guide",
    visual: "email",
    icon: "mail",
    sections: [
      {
        type: "steps",
        heading: "Add It In Three Steps",
        steps: [
          { title: "Copy Your Short Link", body: "Your card's short path, like the sample /c/rahul." },
          { title: "Edit Your Signature", body: "In your mail app's settings, add a line such as \"Save my contact\" linked to your card." },
          { title: "Send Yourself A Test", body: "Check the link on desktop and phone." },
        ],
      },
      {
        type: "split",
        heading: "Keep The Signature Light",
        body: [
          "Heavy signatures with many images and links can hurt deliverability and look cluttered. One card link can replace several lines of phone numbers and social icons.",
        ],
        points: ["Name and title", "One phone number", "Card link"],
      },
      {
        type: "prose",
        heading: "Signature For eCard Intros",
        paragraphs: [
          "eCard sends intro emails from your own SMTP mailbox. Whether your mail app's signature is added depends on how your provider handles SMTP-sent messages, so it is worth checking a test send and including the card link in the message body if needed.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Check Behaviour",
        body: "eCard's site does not document signature handling for its intro emails. Send yourself a test intro to confirm.",
      },
    ],
    faqs: [
      { q: "Will opens from my signature be tracked?", a: "Opens of your card are tracked by eCard's link tracking, with bots filtered out." },
      { q: "Should I use an image of my card?", a: "A text link is lighter and lets people save you directly." },
    ],
    related: [`${B}/share-by-email`, `${B}/short-links`, "features/outreach/email-deliverability", `${B}/personal-url`],
    source: "mixed",
  },
  {
    slug: `${B}/white-label-cards`,
    category: "cards",
    title: "White-Label Cards",
    seoTitle: "White-Label Digital Cards For Your Brand",
    description: "On Business (₹2,999/month) and Enterprise, eCard's white label adds your logo, colours and custom domain, so team cards carry your brand throughout.",
    h1: "Your Brand On Every Card",
    eyebrow: "Business Plan",
    intro: "For organisations equipping a whole team, eCard's white label covers logo, colours and a custom domain. It is included on Business and Enterprise plans.",
    variant: "feature",
    visual: "card",
    icon: "palette",
    sections: [
      {
        type: "table",
        heading: "Availability",
        headers: ["Plan", "Monthly price", "White label & custom domain"],
        rows: [
          ["Free", "₹0", "No"],
          ["Starter", "₹299", "No"],
          ["Professional", "₹999", "No"],
          ["Business", "₹2,999", "Yes"],
          ["Enterprise", "Custom", "Yes"],
        ],
      },
      {
        type: "cards",
        heading: "What White Label Covers",
        cards: [
          { title: "Logo", body: "Your company mark.", icon: "palette" },
          { title: "Colours", body: "Your brand palette.", icon: "palette" },
          { title: "Custom Domain", body: "Card links on your own domain.", icon: "globe" },
        ],
      },
      {
        type: "prose",
        heading: "Why Brand Consistency Matters For Teams",
        paragraphs: [
          "When fifty salespeople each design their own card, the result looks like fifty companies. A consistent, branded card reinforces that the buyer is dealing with one organisation, and a custom domain adds trust to every shared link.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Larger Rollouts",
        body: "For Enterprise pricing, contact sales@bizzfly.com.",
      },
    ],
    faqs: [
      { q: "Which plan includes white label?", a: "Business (₹2,999/month) and Enterprise." },
      { q: "Can I use my own domain?", a: "Yes, custom domain is part of white label on those plans." },
    ],
    related: ["features/team-security/white-label", "features/team-security/custom-domains", "pricing/business", "pricing/enterprise"],
    source: "verified",
  },
  {
    slug: `${B}/card-design-tips`,
    category: "cards",
    title: "Card Design Tips",
    seoTitle: "Design Tips For Paper And Digital Cards",
    description: "Design advice for business cards that work on paper and screens: hierarchy, contrast, typography, QR placement and what to leave off entirely.",
    h1: "Design For A Three-second Glance",
    eyebrow: "Guide",
    intro: "Whether paper or digital, a card is read in seconds. Good design means the right detail is found instantly.",
    variant: "guide",
    visual: "card",
    icon: "palette",
    sections: [
      {
        type: "bullets",
        heading: "Hierarchy",
        items: [
          "Name first and largest",
          "Title and company second",
          "Contact details grouped together",
          "Everything else smaller or removed",
        ],
      },
      {
        type: "split",
        heading: "Contrast And Type",
        body: [
          "Thin, light-grey text on white looks elegant in a design file and unreadable in a dim hall. Choose strong contrast and a font size that survives a phone screen.",
        ],
        points: ["Dark text on light background", "Two fonts at most", "Avoid all-caps paragraphs"],
      },
      {
        type: "table",
        heading: "Paper Vs Screen Considerations",
        headers: ["Element", "Paper", "Digital"],
        rows: [
          ["QR code", "At least thumb-sized", "Shown full-screen"],
          ["Text size", "Readable at arm's length", "Readable on a small phone"],
          ["Colours", "Check print proof", "Check dark mode"],
        ],
      },
      {
        type: "prose",
        heading: "Design For Scanning, Too",
        paragraphs: [
          "Your paper card will be scanned by someone else's tools, possibly an AI scanner like eCard's. Clear layout, standard ordering and enough contrast make that capture more accurate, so your details arrive correctly in their contacts.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start From A Template",
        body: "eCard's premium templates handle hierarchy and spacing for your digital card, so you only adjust the content.",
      },
    ],
    faqs: [
      { q: "How big should a printed QR code be?", a: "As a rule of thumb, large enough to scan easily from arm's length; test with several phones." },
      { q: "Do design choices affect scanning?", a: "Generally, clear layout and strong contrast make any card easier for OCR or AI scanners to read." },
    ],
    related: [`${B}/templates`, "features/ai-card-scanning/unusual-card-layouts", `${B}/paper-vs-digital`, `${B}/personal-profile`],
    source: "educational",
  },
];

type Extra = { sections: Section[]; faqs?: FAQ[] };
const X = (s: string) => (s ? `${B}/${s}` : B);

const extras: Record<string, Extra> = {
  [X("")]: {
    sections: [
      {
        type: "steps",
        heading: "Sample: One Card, A Full Week Of Use",
        intro: "A fictional week for Sample Rahul, a sales consultant.",
        steps: [
          { title: "Monday Client Meeting", body: "Rahul shows his QR code; the client taps Save to contacts before the meeting ends." },
          { title: "Tuesday Phone Call", body: "After a call with a new lead, he sends his short link on WhatsApp so the lead can save him." },
          { title: "Wednesday Proposal", body: "He shares a proposal PDF alongside his card and later sees it was opened." },
          { title: "Friday Networking Event", body: "He shows his QR to new contacts and scans the paper cards they hand him into eCard." },
        ],
      },
      {
        type: "table",
        heading: "Which Sharing Route Fits Which Moment",
        headers: ["Moment", "Route", "What the other person does"],
        rows: [
          ["Face to face", "QR code", "Points their camera and taps Save"],
          ["After a call", "Short link on WhatsApp", "Opens the link in their browser"],
          ["Formal email", "Card link in the message or signature", "Clicks once to view and save"],
          ["Printed material", "QR plus short link", "Scans or types the short path"],
        ],
      },
    ],
    faqs: [
      { q: "Can I share a brochure with my card?", a: "Yes. eCard's link tracking covers PDFs as well as your card, so a brochure you share is counted too." },
    ],
  },
  [X("create")]: {
    sections: [
      {
        type: "bullets",
        heading: "Pre-launch Checklist",
        intro: "Run through this before you share your card widely.",
        items: [
          "Your name is spelled the way you want people to save it",
          "The phone number works and reaches you, not a reception desk you never check",
          "Email goes to an inbox you read daily",
          "The card loads quickly on mobile data, not just office Wi-Fi",
          "Save to contacts works on both an Android phone and an iPhone you can borrow",
          "Any attached brochure is current, not last year's version",
        ],
      },
      {
        type: "cards",
        heading: "Common First-card Mistakes",
        cards: [
          { title: "Too Many Links", body: "Ten social icons bury the one action that matters: saving you.", icon: "link" },
          { title: "Out-of-date Title", body: "Copying an old paper card carries old details into the new one.", icon: "file" },
          { title: "Untested On Phones", body: "A layout that looks fine on a laptop may crowd a small screen.", icon: "smartphone" },
          { title: "Shared Before Ready", body: "First impressions stick; finish and check before the first share.", icon: "eye" },
        ],
      },
    ],
    faqs: [
      { q: "How long does it take to create a card?", a: "Allow a short sitting to choose a template, add details and test on a phone. Most of the time goes into deciding what to include." },
    ],
  },
  [X("templates")]: {
    sections: [
      {
        type: "steps",
        heading: "Evaluate A Template In Five Minutes",
        steps: [
          { title: "Fill It With Your Real Details", body: "Placeholder names hide problems; long titles and company names expose them." },
          { title: "Open It On A Phone", body: "Check that your name and the save action are visible without scrolling." },
          { title: "Try It Outdoors", body: "Bright sunlight washes out low-contrast designs." },
          { title: "Show A Colleague", body: "Ask what they notice first. It should be your name, not a decoration." },
          { title: "Compare With One Alternative", body: "Side by side, the clearer option is usually obvious." },
        ],
      },
      {
        type: "bullets",
        heading: "Template Pitfalls",
        items: [
          "Choosing for the preview image rather than your actual content",
          "Dark, busy backgrounds that compete with text",
          "Layouts that push contact actions far down the page",
          "Switching templates often, so repeat visitors do not recognise your card",
        ],
      },
    ],
    faqs: [
      { q: "Can my team all use the same template?", a: "The site does not describe template locking. For consistent branding across a team, white label on Business and Enterprise covers logo, colours and custom domain." },
    ],
  },
  [X("qr-code")]: {
    sections: [
      {
        type: "table",
        heading: "Troubleshooting A QR Code That Will Not Scan",
        headers: ["Problem", "Likely cause", "Fix"],
        rows: [
          ["Camera does not react", "Screen brightness too low", "Turn brightness up while showing the code"],
          ["Works close, fails at a distance", "Printed too small", "Print larger and retest"],
          ["Fails on some phones", "Low contrast or glossy glare", "Use a dark code on a light, matte background"],
          ["Scans but nothing loads", "No signal on their phone", "Offer your short link to open later"],
        ],
      },
      {
        type: "split",
        heading: "Sample Scenario: A Client Lunch",
        body: [
          "Sample: you meet a prospective client over lunch and they mention their phone is nearly out of battery. Instead of the QR, write your short link on a napkin or say it aloud; it is short enough to type later.",
          "If their phone is fine, show the QR and wait while they tap Save. Mentioning it while they still hold the phone makes it far more likely to happen.",
        ],
        points: ["QR when phones are ready", "Short link as fallback", "Wait for the save"],
      },
    ],
    faqs: [
      { q: "Can I print my QR code on my paper card?", a: "Yes. Printing it on the back of your paper card links the two; test the print with several phones first." },
    ],
  },
  [X("save-to-contacts")]: {
    sections: [
      {
        type: "table",
        heading: "What Happens With And Without A Save",
        headers: ["Later moment", "If they saved you", "If they did not"],
        rows: [
          ["You call them", "Your name shows on their screen", "An unknown number, often ignored"],
          ["They need your service", "They search their phone and find you", "They search the web and find others"],
          ["They want to refer you", "They share your contact in seconds", "They try to remember your company name"],
        ],
      },
      {
        type: "steps",
        heading: "Test The Save Yourself",
        steps: [
          { title: "Open Your Card On A Second Phone", body: "Borrow a colleague's phone so you see it as a stranger would." },
          { title: "Tap Save To Contacts", body: "Note how many steps the phone asks for." },
          { title: "Check The Saved Entry", body: "Is the name, company and number correct and in the right order?" },
          { title: "Fix At The Source", body: "If anything looks odd, correct your card details and test again." },
        ],
      },
    ],
    faqs: [
      { q: "Will my contact update on their phone if I change my number?", a: "Generally, a saved phone contact is a copy and does not update itself. Your card link, however, shows your current details." },
    ],
  },
  [X("short-links")]: {
    sections: [
      {
        type: "steps",
        heading: "Dictating Your Link On A Call",
        steps: [
          { title: "Say The Domain First", body: "Let them type the start before you give the path." },
          { title: "Spell The Path", body: "For the sample /c/rahul: \"slash C, slash R-A-H-U-L\"." },
          { title: "Confirm It Opened", body: "Ask them to read your name back from the page." },
          { title: "Follow With A Message", body: "Send the link on WhatsApp as well, so they have it in writing." },
        ],
      },
      {
        type: "bullets",
        heading: "Short-link Pitfalls",
        items: [
          "Wrapping your eCard link inside another shortener, which hides where it goes and can look suspicious",
          "Printing a link before confirming it opens the right card",
          "Using different links in different places, which splits your click counts",
          "Mixing up similar-looking characters when writing the link by hand",
        ],
      },
    ],
    faqs: [
      { q: "Should I use my short link or QR code?", a: "QR in person, short link everywhere text works: messages, signatures and profiles. Use both on printed material." },
    ],
  },
  [X("tracked-links")]: {
    sections: [
      {
        type: "table",
        heading: "Reading Engagement After A Meeting",
        intro: "General guidance on what the signals suggest.",
        headers: ["What you see", "What it may mean", "Sensible response"],
        rows: [
          ["Card opened soon after meeting", "They are saving or checking you", "Send the promised material"],
          ["Brochure opened more than once", "Active interest or sharing internally", "Offer a call to answer questions"],
          ["WhatsApp link opened, no reply", "Read but busy", "Wait a few days, then a short check-in"],
          ["Nothing opened", "Wrong channel or no interest yet", "Try another channel once"],
        ],
      },
      {
        type: "cards",
        heading: "Sample Prioritisation After A Show",
        intro: "Fictional example.",
        cards: [
          { title: "Call First", body: "Sample: 6 contacts opened your brochure within two days.", icon: "phone" },
          { title: "Message Next", body: "Sample: 14 opened your card but not the brochure.", icon: "message" },
          { title: "Retry Later", body: "Sample: 20 opened nothing; try WhatsApp next week.", icon: "clock" },
        ],
      },
    ],
    faqs: [
      { q: "Does an open mean the person read everything?", a: "No. An open shows a link was visited by a person rather than a bot, not how long they spent." },
    ],
  },
  [X("bot-filtering")]: {
    sections: [
      {
        type: "cards",
        heading: "Sample: Raw Versus Filtered After A Send",
        intro: "Fictional numbers to illustrate the effect.",
        cards: [
          { title: "Sample Send", body: "You email your brochure link to 30 contacts at companies with email security scanners.", icon: "mail" },
          { title: "Sample Raw View", body: "A naive counter might show close to 30 visits within minutes, before anyone has read the email.", icon: "chart" },
          { title: "Sample Filtered View", body: "A bot-filtered count might show a handful over the next two days, which is the number worth acting on.", icon: "eye" },
        ],
      },
      {
        type: "bullets",
        heading: "Mistakes When Reading Click Counts",
        items: [
          "Treating an instant open, seconds after sending, as human interest",
          "Comparing filtered counts with raw numbers from another tool",
          "Judging a campaign on a single day of data",
          "Assuming zero opens means zero interest; some people save details without clicking again",
        ],
      },
    ],
    faqs: [
      { q: "Why might my count be lower than I expected?", a: "Filtering removes automated visits such as link previews and security scans, so filtered counts are usually lower than raw ones." },
    ],
  },
  [X("no-app-required")]: {
    sections: [
      {
        type: "table",
        heading: "App-based Versus Browser-based Exchange",
        headers: ["Step", "If an app were required", "Browser-based"],
        rows: [
          ["Receive your card", "Install an app first", "Open a link or scan a QR"],
          ["Create an account", "Often required", "Not needed"],
          ["Save your details", "Inside the app", "Straight to their phone contacts"],
          ["Later updates", "Depend on app updates", "Visit the same link"],
        ],
      },
      {
        type: "steps",
        heading: "Set Up A Home-screen Shortcut",
        intro: "General browser guidance; exact wording varies by phone.",
        steps: [
          { title: "Open The Page In Your Browser", body: "Your own card, or the eCard workspace." },
          { title: "Open The Browser Menu", body: "Look for an option such as Add to Home screen." },
          { title: "Name The Shortcut", body: "Something short, like My card." },
          { title: "Use It When Sharing", body: "One tap brings up your card and QR at a meeting." },
        ],
      },
    ],
    faqs: [
      { q: "Does browser-based mean it only works online?", a: "Your card needs a connection to load. A saved image of your QR code can be shown offline; the other person's phone loads the card." },
    ],
  },
  [X("mobile-sharing")]: {
    sections: [
      {
        type: "split",
        heading: "Sample Scenario: A Crowded Meetup",
        body: [
          "Sample: at a busy meetup, you meet four people in fifteen minutes. Keep your QR on screen between conversations so each exchange takes seconds.",
          "When someone has no data signal, give them your short link to open later. When someone hands you a paper card, photograph it or send it to the Telegram bot right away, before it gets mixed up with others in your pocket.",
        ],
        points: ["QR ready on screen", "Short link as backup", "Capture their card immediately"],
      },
      {
        type: "bullets",
        heading: "Mobile Sharing Pitfalls",
        items: [
          "Low screen brightness making your QR hard to scan",
          "Sending your link into a group chat when it was meant for one person",
          "Notifications popping up over your QR code mid-scan",
          "Forgetting to capture their card in return",
        ],
      },
    ],
    faqs: [
      { q: "What is the quickest way to share from my phone?", a: "In person, show your QR code. In messages, paste your short link." },
    ],
  },
  [X("share-by-email")]: {
    sections: [
      {
        type: "cards",
        heading: "Sample Intro Email With A Card Link",
        intro: "Fictional wording you can adapt.",
        cards: [
          { title: "Sample Subject", body: "Great meeting you at the sample packaging expo", icon: "mail" },
          { title: "Sample Body", body: "Hi Sample Kiran, thanks for stopping by today. As promised, I will send the price sheet this week. Here is my card so you have my details:", icon: "message" },
          { title: "Sample Link Line", body: "Your card's short link on its own line, followed by your name.", icon: "link" },
        ],
      },
      {
        type: "bullets",
        heading: "Email Pitfalls",
        items: [
          "Burying the card link inside a long paragraph",
          "Sending from a no-reply address so replies vanish",
          "Adding several tracking links from different tools to one message",
          "Forgetting to mention where you met in the first line",
        ],
      },
    ],
    faqs: [
      { q: "Which mailboxes can eCard send from?", a: "Any SMTP mailbox, including Gmail, Outlook, Zoho, SendGrid, Brevo, Mailgun, Amazon SES and Resend." },
    ],
  },
  [X("share-by-whatsapp")]: {
    sections: [
      {
        type: "table",
        heading: "Choosing The Language",
        intro: "General guidance on picking from English, Hindi and Marathi.",
        headers: ["Signal", "Likely best choice"],
        rows: [
          ["You spoke in Marathi at the meeting", "Marathi"],
          ["Mixed Hindi and English conversation", "Hindi or English, matching how they wrote to you"],
          ["Formal corporate setting", "English"],
          ["Unsure", "The language they used in their last message"],
        ],
      },
      {
        type: "bullets",
        heading: "WhatsApp Pitfalls",
        items: [
          "Messaging late at night or very early in the morning",
          "Sending a long block of text instead of two short lines",
          "Adding someone to a broadcast group without asking",
          "Following up on WhatsApp and email at the same moment",
        ],
      },
    ],
    faqs: [
      { q: "Can I edit the AI-written message?", a: "The message opens in WhatsApp ready to send, so you can adjust it there before sending." },
    ],
  },
  [X("personal-url")]: {
    sections: [
      {
        type: "table",
        heading: "Sample: One URL Across Your Materials",
        intro: "Fictional placements for the sample path /c/rahul.",
        headers: ["Material", "How to show it"],
        rows: [
          ["Paper card", "QR on the back with the short path printed underneath"],
          ["Email signature", "A line reading Save my contact, linked to the card"],
          ["Proposal cover page", "Path in the footer"],
          ["Event badge", "Small QR beside your name"],
        ],
      },
      {
        type: "bullets",
        heading: "Pitfalls That Break A Stable URL",
        items: [
          "Creating a new card for every campaign instead of updating one",
          "Printing the URL before checking it opens your card",
          "Different teammates sharing different links for the same person",
          "Switching domains without checking what happens to older links",
        ],
      },
    ],
    faqs: [
      { q: "Should I print my URL as text as well as a QR?", a: "Yes, where space allows. Some people prefer typing, and text survives a damaged or poorly printed code." },
    ],
  },
  [X("personal-profile")]: {
    sections: [
      {
        type: "cards",
        heading: "Sample Profiles By Profession",
        intro: "Fictional examples of a title plus one line.",
        cards: [
          { title: "Sample: Neha Kulkarni, CA", body: "GST and audit support for small manufacturers in Nashik.", icon: "briefcase" },
          { title: "Sample: Arjun Nair, Architect", body: "Residential projects and interior planning in Kochi.", icon: "building" },
          { title: "Sample: Farah Shaikh, Recruiter", body: "Hiring sales teams for consumer brands across Western India.", icon: "users" },
        ],
      },
      {
        type: "steps",
        heading: "Test Your One-liner",
        steps: [
          { title: "Read It Aloud", body: "If it sounds odd spoken, it reads oddly too." },
          { title: "Ask A Stranger's Question", body: "Could someone outside your industry say what you do after reading it?" },
          { title: "Cut A Word", body: "Remove anything that does not change the meaning." },
          { title: "Check The Routes", body: "Make sure the first contact route listed is the one you answer fastest." },
        ],
      },
    ],
    faqs: [
      { q: "Should I list every service I offer?", a: "No. Lead with the one people most often hire you for; detail can go in a linked PDF." },
    ],
  },
  [X("share-pdfs-and-brochures")]: {
    sections: [
      {
        type: "steps",
        heading: "Sample: A Brochure Follow-up After A Property Expo",
        intro: "Fictional sequence for a sample realtor.",
        steps: [
          { title: "Evening Of The Expo", body: "Scan visitor cards, review fields and save." },
          { title: "Same Evening", body: "Send each buyer your card and the project brochure." },
          { title: "Two Days Later", body: "Check opens; buyers who opened get a call offering a site visit." },
          { title: "One Week Later", body: "Those who did not open get a short WhatsApp message in Marathi or Hindi." },
        ],
      },
      {
        type: "table",
        heading: "Brochure Or Card Alone?",
        headers: ["Situation", "Send"],
        rows: [
          ["They asked for details or pricing", "Card plus brochure"],
          ["First casual introduction", "Card only"],
          ["Formal proposal stage", "Card plus proposal PDF"],
          ["They already have your brochure", "Card only, with a question"],
        ],
      },
    ],
    faqs: [
      { q: "Should I send a brochure to everyone I meet?", a: "Only to people who showed interest. Unrequested attachments often go unread." },
    ],
  },
  [X("paper-vs-digital")]: {
    sections: [
      {
        type: "table",
        heading: "Which To Use When",
        headers: ["Setting", "Lead with", "Why"],
        rows: [
          ["Formal meeting with senior people", "Paper, with QR on it", "Respects the ritual"],
          ["Busy trade show", "QR code", "Fast, no running out"],
          ["Video call", "Short link in chat", "Paper is impossible"],
          ["Rural or low-signal area", "Paper", "Works without a connection"],
          ["Follow-up message", "Digital link", "Arrives where the conversation continues"],
        ],
      },
      {
        type: "bullets",
        heading: "Combining Both Well",
        items: [
          "Print a QR and short path on the back of your paper card",
          "Keep paper details minimal so they do not go out of date quickly",
          "Let the digital card carry anything that changes, such as a brochure",
          "Scan every paper card you receive so both directions end up digital",
        ],
      },
    ],
    faqs: [
      { q: "Is a digital card considered polite in formal settings?", a: "Etiquette varies. In formal settings, offering a paper card that carries a QR code is a safe middle ground." },
    ],
  },
  [X("qr-at-events")]: {
    sections: [
      {
        type: "bullets",
        heading: "Pre-event Checklist",
        items: [
          "Print signage QR codes large enough to scan from a step away",
          "Test every printed code under indoor lighting",
          "Agree a tag or event name for all cards collected",
          "Add temporary booth staff as scan-only guests",
          "Charge phones and bring a power bank",
          "Prepare your follow-up message before the show starts",
        ],
      },
      {
        type: "split",
        heading: "Sample Scenario: A Rush At The Booth",
        body: [
          "Sample: five visitors arrive at once while you are mid-conversation. A table stand with your QR and a short prompt lets them take your details without waiting. A teammate collects their paper cards and scans them as a scan-only guest.",
          "That evening, everything sits under one event, so you can follow up with the whole group at once.",
        ],
        points: ["Self-serve QR", "Teammate captures cards", "One event for follow-up"],
      },
    ],
    faqs: [
      { q: "Should each team member have their own QR?", a: "For one-to-one conversations, yes, so people save the person they spoke to. Booth signage can show a single team contact." },
    ],
  },
  [X("email-signature")]: {
    sections: [
      {
        type: "cards",
        heading: "Sample Signatures",
        intro: "Fictional examples.",
        cards: [
          { title: "Sample: Minimal", body: "Sample Priya Shah, Realtor. Phone number. Save my contact: card short link.", icon: "mail" },
          { title: "Sample: With Company", body: "Sample Arjun Rao, Business Development, Sample Health. Save my contact: card short link.", icon: "building" },
          { title: "Too Heavy", body: "Five phone numbers, six social icons, a banner image and a legal disclaimer longer than the email.", icon: "ban" },
        ],
      },
      {
        type: "bullets",
        heading: "Signature Pitfalls",
        items: [
          "Embedding the card as an image that does not click through",
          "Different signatures on desktop and phone",
          "Forgetting to update the signature after changing roles",
          "Linking a full URL that wraps across two lines",
        ],
      },
    ],
    faqs: [
      { q: "What text should link to my card?", a: "A short, clear prompt such as Save my contact or View my card works well." },
    ],
  },
  [X("white-label-cards")]: {
    sections: [
      {
        type: "steps",
        heading: "Rolling Out Branded Cards To A Team",
        steps: [
          { title: "Confirm The Plan", body: "White label is included on Business (₹2,999/month) and Enterprise." },
          { title: "Prepare Brand Assets", body: "Gather a clean logo file and your exact brand colours before you start." },
          { title: "Plan The Custom Domain", body: "Decide which domain or subdomain card links should use, and who in your organisation manages its DNS settings." },
          { title: "Pilot With A Few People", body: "Have a small group share their cards for a week and report issues." },
          { title: "Roll Out With A Short Guide", body: "Tell everyone how to share by QR and short link, and what to include in their profile." },
        ],
      },
      {
        type: "table",
        heading: "Without And With White Label",
        headers: ["Aspect", "Standard card", "White label"],
        rows: [
          ["Logo", "Template design", "Your company logo"],
          ["Colours", "Template colours", "Your brand palette"],
          ["Link domain", "eCard's domain", "Your custom domain"],
          ["Team consistency", "Depends on each person", "One brand across the team"],
        ],
      },
      {
        type: "bullets",
        heading: "Rollout Pitfalls",
        items: [
          "Launching before the custom domain is working, then reprinting links",
          "Low-resolution logos that look blurry on high-density phone screens",
          "Brand colours that fail contrast checks for text",
          "No owner for updating cards when people join or leave",
        ],
      },
    ],
    faqs: [
      { q: "Can I try white label before buying Business?", a: "The 14-day trial is of Professional, which does not include white label. Contact sales@bizzfly.com about evaluating Business or Enterprise." },
    ],
  },
  [X("card-design-tips")]: {
    sections: [
      {
        type: "bullets",
        heading: "What To Leave Off",
        items: [
          "Fax numbers, unless your clients genuinely use them",
          "Every social network you have ever joined",
          "Long taglines that repeat what your title says",
          "Personal and office numbers side by side with no indication which to use",
        ],
      },
    ],
    faqs: [
      { q: "Should my paper and digital cards look the same?", a: "They should feel related, with the same name, title and colours, but each can be laid out for its own medium." },
    ],
  },
};

const more: Record<string, Extra> = {
  [X("")]: {
    sections: [],
    faqs: [
      { q: "Can I use my company's branding on the card?", a: "White label with logo, colours and a custom domain is included on Business (₹2,999/month) and Enterprise." },
    ],
  },
  [X("create")]: {
    sections: [
      {
        type: "prose",
        heading: "Sample Scenario: A Freelancer's First Card",
        paragraphs: [
          "Sample: Meera, a sample freelance photographer, has a paper card with three phone numbers, an old studio address and four social handles. For her digital card she keeps one number, her work email, her city and a single portfolio PDF.",
          "She tests the card on her own phone and a friend's, fixes a title that wrapped awkwardly, then shares it with two regular clients to confirm Save to contacts works. Only then does she print a new batch of paper cards with the QR on the back.",
        ],
      },
    ],
  },
  [X("templates")]: {
    sections: [
      {
        type: "prose",
        heading: "Sample Scenario: Choosing For A Clinic",
        paragraphs: [
          "Sample: Dr. Sample Iyer runs a small physiotherapy clinic. Most people who open her card are patients checking a phone number or the clinic location, often older and often on small screens.",
          "She chooses a calm, plain template with large type and prominent call and save actions over a more decorative design. The test that settles it: a patient can find the phone number in under three seconds without zooming.",
        ],
      },
    ],
    faqs: [
      { q: "Can I change template later?", a: "The site does not document switching. Check the app; if you switch, keep the look similar so repeat visitors recognise you." },
    ],
  },
  [X("qr-code")]: {
    sections: [],
    faqs: [
      { q: "Do I need a separate QR app?", a: "Usually not. Most phone cameras recognise QR codes directly." },
      { q: "What if their camera cannot read my screen?", a: "Increase your brightness, hold the phone steady and avoid glare. If it still fails, share your short link instead." },
    ],
  },
  [X("save-to-contacts")]: {
    sections: [
      {
        type: "bullets",
        heading: "Pitfalls That Stop People Saving",
        items: [
          "A card so long that the save action sits far below the fold",
          "A name format the recipient will not recognise later, such as initials only",
          "No company or title, so the saved entry has no context",
          "Rushing off before they have a chance to tap",
        ],
      },
    ],
    faqs: [
      { q: "Does saving work on both Android and iPhone?", a: "Save-to-contacts opens in the phone's browser. How the saved contact appears depends on the device; test on both if you can." },
    ],
  },
  [X("short-links")]: {
    sections: [
      {
        type: "prose",
        heading: "Sample Scenario: A Podcast Appearance",
        paragraphs: [
          "Sample: you are a guest on a sample industry podcast and the host asks how listeners can reach you. A long URL is useless in audio; a short path is easy to say once and remember.",
          "Spell it out clearly, then ask the host to add it to the show notes. Because clicks are counted with bots filtered out, a rise in card opens over the following days gives you a rough idea of how many listeners followed up.",
        ],
      },
    ],
  },
  [X("tracked-links")]: {
    sections: [
      {
        type: "bullets",
        heading: "Tracking Pitfalls",
        items: [
          "Checking opens every hour and acting on each one",
          "Mentioning opens in your message, which can feel intrusive",
          "Sending one link through several channels, then losing track of which worked",
          "Ignoring the absence of opens as useful information",
        ],
      },
    ],
    faqs: [
      { q: "Should I tell people their opens are tracked?", a: "Being transparent about how you use data is good practice. Follow advice for your situation on notice and consent." },
    ],
  },
  [X("bot-filtering")]: {
    sections: [
      {
        type: "prose",
        heading: "Why It Matters For Follow-up Timing",
        paragraphs: [
          "Unfiltered counts push you to follow up too early. If a security scanner opens your link seconds after sending, a naive dashboard says the prospect is reading now, and you call someone who has not yet seen your email.",
          "Filtered counts give you a quieter but more honest signal. Waiting for a human-looking open before a follow-up call means you are more likely to reach someone who has actually looked at what you sent.",
        ],
      },
    ],
  },
  [X("no-app-required")]: {
    sections: [
      {
        type: "prose",
        heading: "Sample Scenario: A Cross-border Meeting",
        paragraphs: [
          "Sample: you meet a visiting buyer from overseas whose phone uses a different app store and a different language. Asking them to find and install a specific app would almost certainly fail.",
          "A QR code that opens in their phone's browser works regardless of country, app store or language settings. They tap Save to contacts, and you have handed over your details with no setup on their side.",
        ],
      },
    ],
  },
  [X("mobile-sharing")]: {
    sections: [
      {
        type: "prose",
        heading: "Sample Scenario: A Video Call",
        paragraphs: [
          "Sample: a first meeting happens over a video call rather than in person. Paper is impossible and showing a QR on camera is awkward, so paste your short link into the meeting chat near the end of the call.",
          "Follow up afterwards with the link again by email or WhatsApp, since meeting chats often disappear when the call ends. If they shared their details, add them to eCard the same day.",
        ],
      },
    ],
    faqs: [
      { q: "Can I share my card on a video call?", a: "Yes. Paste your short link into the meeting chat and send it again afterwards by email or WhatsApp." },
    ],
  },
  [X("share-by-email")]: {
    sections: [
      {
        type: "prose",
        heading: "Sample Scenario: An Email After A Referral",
        paragraphs: [
          "Sample: a colleague introduces you to Sample Varun by email. Reply promptly, thank the colleague, move them to BCC and address Varun directly with one sentence on why the introduction makes sense.",
          "End with your card link on its own line. Varun can save your details in one click instead of copying them from your signature, and if he opens your card you know the introduction landed.",
        ],
      },
    ],
    faqs: [
      { q: "Should I put the card link in the subject line?", a: "No. Keep the subject about the conversation and place the link in the body." },
    ],
  },
  [X("share-by-whatsapp")]: {
    sections: [
      {
        type: "prose",
        heading: "Sample Scenario: After A Site Visit",
        paragraphs: [
          "Sample: a sample contractor visits a client's site in Pune and they speak in Marathi throughout. Back in the car, the contractor scans the client's card and generates a WhatsApp message in Marathi that thanks them and confirms the next step.",
          "Adding the card link means the client can save the contractor's details properly instead of keeping an unnamed number in their chat list. One tap opens the message, the contractor checks it and sends.",
        ],
      },
    ],
    faqs: [
      { q: "Are WhatsApp link opens tracked?", a: "Yes. eCard's link tracking includes WhatsApp links." },
    ],
  },
  [X("personal-url")]: {
    sections: [
      {
        type: "prose",
        heading: "Sample Scenario: Changing Jobs",
        paragraphs: [
          "Sample: a sales manager moves to a new company. With paper, every card in circulation is now wrong. With a stable personal link, the people who saved the link can still reach the current card once it is updated.",
          "Before relying on that, check in the app how your link behaves when details change, and whether a company-owned custom domain on a white-label plan stays with the employer rather than with you.",
        ],
      },
    ],
    faqs: [
      { q: "Where should my URL appear first?", a: "Your email signature, because it reaches the most people with no extra effort." },
    ],
  },
  [X("personal-profile")]: {
    sections: [
      {
        type: "prose",
        heading: "Write For The Reader, Not Your Employer",
        paragraphs: [
          "Internal titles describe where you sit in an organisation chart. Clients care about what you can do for them. If your official title is unclear outside your company, add a plain description beside it rather than replacing it.",
          "Read your profile as a stranger would, a month after meeting you, with no memory of the conversation. Would they know why to call you? If not, the one line needs work.",
        ],
      },
    ],
    faqs: [
      { q: "Should I include my personal mobile number?", a: "Only if you are happy to answer business calls on it. List the routes you genuinely respond to." },
    ],
  },
  [X("share-pdfs-and-brochures")]: {
    sections: [
      {
        type: "bullets",
        heading: "Brochure Pitfalls",
        items: [
          "Huge, image-heavy files that stall on mobile data",
          "Outdated prices or availability still circulating",
          "Multi-column print layouts that need zooming on a phone",
          "No contact details or next step inside the PDF itself",
        ],
      },
    ],
    faqs: [
      { q: "What if my brochure goes out of date?", a: "Replace it before your next send and make sure teammates stop sharing the old version." },
    ],
  },
  [X("paper-vs-digital")]: {
    sections: [],
    faqs: [
      { q: "Is a digital card cheaper than paper?", a: "eCard's digital card is included on the Free plan at ₹0, while paper cards need printing and reprinting when details change." },
      { q: "What if someone does not have a smartphone?", a: "Hand them a paper card. That is one reason many professionals keep a small stock." },
    ],
  },
  [X("qr-at-events")]: {
    sections: [
      {
        type: "prose",
        heading: "After The Show",
        paragraphs: [
          "The QR code does its job on the day; the follow-up decides whether the event paid off. Within a day or two, review the cards you captured, tag intent and send follow-ups to the whole event group, starting with the most promising buyers.",
          "Then look at card opens from the event period. Visitors who scanned your booth QR but never handed over a card may still save you; when they get in touch, you already have context about where they found you.",
        ],
      },
    ],
  },
  [X("email-signature")]: {
    sections: [
      {
        type: "prose",
        heading: "Sample Scenario: A Team-wide Signature",
        paragraphs: [
          "Sample: a sample agency of twelve people wants consistent signatures. They agree a format of name, title, one phone number and a Save my contact link to each person's own card.",
          "Each person tests their signature on desktop and phone, and the office manager checks new joiners' signatures on their first day. Every email anyone sends now offers a one-click way to save the sender.",
        ],
      },
    ],
    faqs: [
      { q: "Can everyone in a team use the same card link?", a: "Better for each person to link their own card, so recipients save the right individual." },
    ],
  },
  [X("white-label-cards")]: {
    sections: [],
    faqs: [
      { q: "Is white label on Professional?", a: "No. White label and custom domain are listed on Business and Enterprise only." },
      { q: "Why does a custom domain matter?", a: "Links on your own domain look familiar to buyers and reinforce your brand every time someone shares or opens a card." },
    ],
  },
  [X("card-design-tips")]: {
    sections: [
      {
        type: "prose",
        heading: "Sample: Redesigning A Crowded Card",
        paragraphs: [
          "Sample: a sample trading company's paper card has a logo, a tagline, two addresses, four phone numbers, a fax number and five social icons, all in small grey type. Visitors struggle to find the right number, and scanners misread the cramped text.",
          "The redesign keeps the name large, title and company beneath it, one phone, one email and one city. A QR on the back links to the digital card, which carries everything else. The result reads in seconds and scans cleanly.",
        ],
      },
    ],
    faqs: [
      { q: "Should I use a photo on my card?", a: "On a digital card, a recognisable photo helps people remember you, where the template supports it. On paper it is a matter of local norms." },
      { q: "How many colours should I use?", a: "Two or three is usually enough: one for text, one accent and a background with strong contrast." },
    ],
  },
};

/** Extra paragraphs appended to the page's last prose (or split) section, plus extra FAQs. */
type Deep = { paras: string[]; faqs?: FAQ[] };

const deeper: Record<string, Deep> = {
  [X("templates")]: {
    paras: [
      "Once chosen, stick with it. Consistency helps people recognise your card when they open it a second time, and it saves you redesigning every few months. Change the content as your work changes; change the template only when it genuinely stops fitting.",
    ],
    faqs: [
      { q: "Do templates work on all phones?", a: "Your card opens in the phone's browser. Test your chosen template on a couple of different phones before sharing widely." },
    ],
  },
  [X("qr-code")]: {
    paras: [
      "Make the QR easy to reach. Saving it as an image in your photos, or adding your card as a home-screen shortcut, means you are not hunting through menus while someone waits. The few seconds you save make the exchange feel smooth and confident, and fumbling with a phone at the end of a good conversation is exactly the impression you want to avoid.",
    ],
  },
  [X("save-to-contacts")]: {
    paras: [
      "The saved entry also travels. When the person later forwards your contact to a colleague, the details they share come from what was saved, so clean, complete card details make every onward referral easier.",
    ],
    faqs: [
      { q: "Can people save me without scanning a QR?", a: "Yes. Your short link opens the same card, including Save to contacts, from email, WhatsApp or a signature." },
    ],
  },
  [X("short-links")]: {
    paras: [
      "The same applies to webinars, radio interviews and conference talks. Anywhere people hear rather than see your details, a short, spellable path is the difference between a follow-up and a forgotten name.",
    ],
    faqs: [
      { q: "Can I change my short link?", a: "The site does not document changing your path. Check the app before printing it widely." },
      { q: "Do short links work on any phone?", a: "Yes. They open your card in the phone's browser, with no app needed." },
    ],
  },
  [X("tracked-links")]: {
    paras: [
      "Over time, patterns emerge. You may find that buyers from one city open brochures quickly while another group responds better to WhatsApp. Adjusting your channel and timing to those patterns is where tracking pays off, far more than watching individual opens.",
    ],
    faqs: [
      { q: "Can I see opens for a specific contact?", a: "eCard's link tracking shows opens of your card, PDFs and WhatsApp links. Check the app for how activity is shown per contact." },
    ],
  },
  [X("bot-filtering")]: {
    paras: [
      "The same reasoning applies when comparing channels. If email links look busier than WhatsApp links, check whether email security scanning is inflating raw numbers before drawing conclusions about which channel people prefer.",
    ],
    faqs: [
      { q: "Are bots filtered from PDF and WhatsApp link counts too?", a: "eCard states bot filtering for its short-link click counts. Check the app for how each tracked link type is reported." },
      { q: "Can I see raw, unfiltered counts?", a: "The site does not say. Filtered counts are the ones eCard presents." },
    ],
  },
  [X("no-app-required")]: {
    paras: [
      "The same applies to older contacts, people on basic phones with little storage and anyone wary of installing unfamiliar apps. A browser link asks nothing of them beyond a tap.",
    ],
    faqs: [
      { q: "Which browsers work?", a: "eCard says it works in any phone browser. Keep your browser up to date for the best experience." },
      { q: "Can I use eCard on a laptop too?", a: "eCard is browser-based. The site emphasises phone browsers; check on your laptop's browser for your own workflow." },
    ],
  },
  [X("mobile-sharing")]: {
    paras: [
      "Whichever route you use, the goal is the same: the other person ends up with your details saved, and you end up with theirs captured. If either half is missing, the exchange is not finished.",
    ],
    faqs: [
      { q: "Can I share my card by SMS?", a: "Your short link is a normal web link, so it can be pasted into any message app, including SMS." },
    ],
  },
  [X("share-by-email")]: {
    paras: [
      "The same approach works for proposals, quotes and thank-you notes. Any email you expect someone to keep is a good place for a single card link, so your details travel with the message they will search for later.",
    ],
    faqs: [
      { q: "Is my card link tracked in emails?", a: "Yes. Opens of your card are tracked by eCard's link tracking, with bots filtered out of click counts." },
    ],
  },
  [X("share-by-whatsapp")]: {
    paras: [
      "Language choice matters more than many people expect. Replying in the language the person spoke builds warmth quickly, and it signals that you listened. If you are unsure, a short English message is a safe default, and you can switch once they reply.",
      "Keep the first message about them, not you: thank them, mention one detail from the conversation and add your card link at the end.",
    ],
    faqs: [
      { q: "Does the person need a WhatsApp Business account?", a: "No. The message opens in your WhatsApp and is sent like any other chat." },
    ],
  },
  [X("personal-url")]: {
    paras: [
      "Think of your URL as part of your professional identity, like your email address. Change it rarely, share it often and check it occasionally to make sure it still opens the card you expect, especially before reprinting anything.",
      "If you run a team, agree a consistent pattern for everyone's links so customers can recognise them.",
    ],
  },
  [X("personal-profile")]: {
    paras: [
      "Revisit your profile whenever your work shifts. A one-liner written two years ago may describe a service you no longer offer, and the card is often the first thing a new contact sees.",
      "A quick test: show your card to a friend outside your industry and ask them to explain what you do. If they cannot, simplify.",
    ],
    faqs: [
      { q: "Should my profile be in English or a regional language?", a: "Use the language most of your clients read. eCard's site does not document multilingual card profiles; check the editor." },
    ],
  },
  [X("share-pdfs-and-brochures")]: {
    paras: [
      "Treat opens as a ranking tool, not a verdict. Someone who opened your brochure three times may be comparing options; someone who never opened it may have printed a copy at the expo. Use the signal to decide the order of your calls, then let the conversation tell you the rest.",
      "Keep one current version of each brochure, with a clear file name, so teammates never send an outdated copy.",
    ],
    faqs: [
      { q: "Can I send a brochure on WhatsApp?", a: "Yes. eCard's link tracking covers WhatsApp links and PDFs, so a brochure shared there can be counted." },
    ],
  },
  [X("paper-vs-digital")]: {
    paras: [
      "A practical middle path is to treat paper as the introduction and digital as the relationship. The paper card marks the moment; the QR on it leads to details that stay current, a brochure that can be updated and Save to contacts that saves the other person typing.",
      "Over time, many professionals find they print far fewer cards, but the ones they do hand over work harder.",
    ],
  },
  [X("qr-at-events")]: {
    paras: [
      "Treat the booth QR as a backup, not a replacement for conversation. The best leads still come from people you actually spoke to, so make sure their cards are captured and tagged with a note while the conversation is fresh.",
    ],
    faqs: [
      { q: "What should my booth QR link to?", a: "Your digital card, so visitors can save your details in one tap. A brochure can be shared separately afterwards." },
      { q: "How do I follow up with everyone from the event?", a: "Group the event's cards together in eCard; it lists events and expos as a way to follow up with everyone at once." },
    ],
  },
  [X("email-signature")]: {
    paras: [
      "Review signatures once a year, or whenever titles change. Outdated signatures quietly undermine the point of a card link that always shows your current details.",
    ],
    faqs: [
      { q: "Do I need white label for signature links?", a: "No. Any eCard card link works in a signature. White label on Business and Enterprise adds your logo, colours and custom domain." },
    ],
  },
  [X("white-label-cards")]: {
    paras: [
      "White label also helps when cards are shared onwards. A buyer forwarding a salesperson's card to a colleague passes on your brand and your domain, not a third-party one, which keeps the impression consistent even when you are not in the room.",
      "For larger organisations, think about governance early: who approves brand changes, who adds new joiners and who removes cards for people who leave. Deciding this before launch avoids a slow drift away from the brand the rollout was meant to protect.",
    ],
  },
  [X("card-design-tips")]: {
    paras: [
      "Above all, test with real people. Hand a draft to three colleagues and ask them to find your phone number; time how long it takes. Whatever slows them down is the next thing to fix, whether it is font size, contrast or simply too much on the card.",
    ],
  },
};

const topUp: Record<string, string[]> = {
  [X("white-label-cards")]: [
    "Plan the custom domain with whoever manages your company website, since domain changes usually need their help. Settling the domain before the first card is shared means every printed QR and every saved link carries the final address, and nothing has to be reprinted.",
    "Finally, measure the rollout. Link tracking shows card opens with bots filtered out, so after a month you can see which teams are actually sharing their cards and where a short refresher might help.",
  ],
  [X("personal-url")]: [
    "A stable address also makes your click counts more meaningful. When every channel points to the same link, opens over time reflect your overall reach rather than being scattered across many links you have to add up.",
    "Use it consistently in offline places too: business proposals, letterheads, invoices and event name tags.",
  ],
  [X("card-design-tips")]: [
    "Remember that dark mode changes how a digital card looks for many viewers, so check your card in both light and dark settings before sharing it.",
  ],
  [X("paper-vs-digital")]: [
    "Whichever you lead with, make sure both carry the same name, title and number, so nobody ends up with conflicting details saved in their phone after meeting you.",
  ],
  [X("email-signature")]: [
    "Keep the link text identical across devices and teammates, so regular recipients learn to recognise it and click with confidence. A familiar prompt such as Save my contact works well.",
  ],
  [X("short-links")]: [
    "Before going on air, open the link yourself on a phone to confirm it still shows your current card.",
  ],
  [X("tracked-links")]: [
    "Review those patterns monthly rather than daily, so one-off spikes from a single busy day do not drive your decisions.",
  ],
  [X("share-by-whatsapp")]: [
    "If they do not reply, wait a few days before sending a single gentle reminder in the same language.",
  ],
  [X("qr-code")]: [
    "Keep a printed card in your wallet as a backup in case your battery dies.",
  ],
  [X("share-by-email")]: [
    "Check that the link still opens your current card before a big send.",
  ],
  [X("")]: [
    "Over a typical week, the same card does the work of dozens of paper cards, and it never goes out of date. When Rahul changes his title, every link he has already shared shows the new one, and he can see which shares were opened.",
  ],
  [X("share-pdfs-and-brochures")]: [
    "Name files clearly, such as a project name and month, so recipients can find them later too.",
  ],
  [X("create")]: [
    "Once your card is live, revisit it every few months. Check that the title, phone number and any attached PDF still reflect your current work, and remove anything that no longer earns its place. A card that stays accurate is worth more than one that was perfect on launch day and slowly drifted out of date.",
  ],
  [X("personal-profile")]: [
    "Shorter almost always reads better on a phone.",
  ],
};

export const pages: PageDef[] = base.map((p) => {
  const parts = [extras[p.slug], more[p.slug]].filter((e): e is Extra => Boolean(e));
  const t = topUp[p.slug];
  const d0 = deeper[p.slug];
  const d: Deep | undefined = d0 || t ? { paras: [...(d0?.paras ?? []), ...(t ?? [])], faqs: d0?.faqs } : undefined;
  if (!parts.length && !d) return p;
  const sections: Section[] = [...p.sections, ...parts.flatMap((e) => e.sections)];
  if (d) {
    const i = sections.map((s) => s.type).lastIndexOf("prose");
    const j = i >= 0 ? i : sections.map((s) => s.type).lastIndexOf("split");
    const s = sections[j];
    if (s?.type === "prose") sections[j] = { ...s, paragraphs: [...s.paragraphs, ...d.paras] };
    else if (s?.type === "split") sections[j] = { ...s, body: [...s.body, ...d.paras] };
  }
  return {
    ...p,
    sections,
    faqs: [...(p.faqs ?? []), ...parts.flatMap((e) => e.faqs ?? []), ...(d?.faqs ?? [])],
  };
});
