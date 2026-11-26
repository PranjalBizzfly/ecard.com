import type { PageDef } from "../types";

export const pages: PageDef[] = [
  {
    slug: "features/link-tracking",
    category: "analytics",
    title: "Link Tracking & Analytics",
    seoTitle: "Link Tracking: See Who Opens Your Card And PDFs",
    description: "eCard link tracking shows opens of your digital card, PDFs and WhatsApp links, with short links that count clicks and filter out bots.",
    h1: "Know When Your Card, Brochure Or Message Gets Opened",
    eyebrow: "Analytics & Tracking",
    intro: "Sending a card or brochure shouldn’t be a shot in the dark. eCard shows you opens of your digital card, PDFs and WhatsApp links, so you can follow up at the right moment.",
    variant: "feature",
    visual: "analytics",
    icon: "chart",
    sections: [
      {
        type: "cards",
        heading: "What eCard Tracks",
        cards: [
          { title: "Card Opens", body: "See when your digital card is opened.", icon: "card" },
          { title: "PDF Opens", body: "Know when a brochure or catalogue you shared is opened.", icon: "file" },
          { title: "WhatsApp Links", body: "Track opens of links you send over WhatsApp.", icon: "message" },
          { title: "Short-link Clicks", body: "Short links count clicks with bots filtered out.", icon: "link" },
        ],
      },
      {
        type: "prose",
        heading: "Why It Matters",
        paragraphs: [
          "Follow-up is guesswork when you don’t know whether anything you sent was seen. An open tells you the person engaged, which is a good cue to call, reply or send the next piece of information.",
          "Because eCard filters bots from click counts, a click is more likely to be a real person than a link-preview crawler or security scanner.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "What Isn’t Published",
        body: "eCard’s site does not document report layouts, data retention for analytics or export formats for tracking data. Check the app for current details.",
      },
      {
        type: "bullets",
        heading: "Common Uses",
        items: [
          "Prioritising call-backs after an expo",
          "Seeing whether a real-estate brochure was opened after a site visit",
          "Checking that a WhatsApp follow-up landed",
        ],
      },
      {
        "type": "table",
        "heading": "Which link to share, and what you learn",
        "intro": "A practical map of the three tracked link types.",
        "headers": [
          "You share",
          "Typical moment",
          "An open suggests"
        ],
        "rows": [
          [
            "Your digital card",
            "Right after meeting someone, or in an email signature",
            "They looked you up again, a good time to be easy to reach"
          ],
          [
            "A PDF (brochure, price list, profile)",
            "After a request for details",
            "They are reading what you sent, possibly comparing options"
          ],
          [
            "A WhatsApp link",
            "When a chat is the natural next step",
            "They clicked through to start or continue the conversation"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Sample: one contact, three signals",
        "paragraphs": [
          "Sample: Rohan Mehta, a fictional procurement head, received an intro email with a card link and a brochure link after a trade show. Over four days the card was opened once and the brochure twice; the WhatsApp link was never clicked.",
          "Read together, that pattern suggests interest in the offer but no urgency to chat. A useful next step would be a short email answering the question the brochure most likely raises, pricing or delivery, rather than a WhatsApp nudge."
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls when you first turn tracking on",
        "items": [
          "Checking numbers hourly. Engagement in B2B usually unfolds over days, not minutes.",
          "Treating zero opens as zero interest: people forward links, read on another device or simply reply.",
          "Sending more links just to get more data. Each message should still earn its place.",
          "Forgetting to tell recipients what a link is. A clear label (“our 2-page price list”) gets more opens than a bare URL."
        ]
      },
      {
        "type": "callout",
        "tone": "note",
        "title": "What isn’t documented",
        "body": "The site describes opens and bot-filtered click counts. It does not describe reading time, scroll depth or location data, so don’t plan around those."
      },
    ],
    faqs: [
      { q: "Is link tracking included on the Free plan?", a: "The digital business card, including short links that count clicks, is in the base feature set on every plan. Check the app for any plan-specific analytics limits." },
      { q: "Are bot clicks counted?", a: "No. eCard says its short links count clicks with bots filtered out." },
      { q: "Do recipients need eCard to open a tracked link?", a: "No. Your digital card and shared links open in an ordinary browser; nothing needs to be installed." },
      { q: "Can I track links I share on WhatsApp?", a: "Yes. Opens of WhatsApp links are one of the three things eCard’s link tracking covers, alongside your card and PDFs." },
    ],
    related: ["features/link-tracking/card-views", "features/link-tracking/pdf-engagement", "features/link-tracking/whatsapp-link-tracking", "features/digital-business-card"],
    source: "verified",
  },
  {
    slug: "features/link-tracking/card-views",
    category: "analytics",
    title: "Card Views",
    seoTitle: "Card Views: See When Your Digital Card Is Opened",
    description: "Track views of your eCard digital business card, shared by QR code or short link, and use them as a cue for well-timed follow-ups.",
    h1: "See When People Actually Look At Your Card",
    eyebrow: "Analytics & Tracking",
    intro: "Your digital card is often the first thing a new contact opens after meeting you. eCard shows you those opens.",
    variant: "feature",
    visual: "card",
    icon: "eye",
    sections: [
      {
        type: "split",
        heading: "How Your Card Is Shared",
        body: [
          "eCard’s digital card comes with premium templates, a QR code, Save-to-contacts and a short link, for example a path like /c/rahul. No app is needed for the person opening it.",
          "Each of those routes leads back to your card, and opens are visible in eCard’s link tracking.",
        ],
        points: ["QR code at a booth or on paper", "Short link in an email signature", "Link in a WhatsApp message"],
      },
      {
        type: "steps",
        heading: "Putting Views To Work",
        steps: [
          { title: "Share", body: "Send your card after meeting someone." },
          { title: "Watch For An Open", body: "A view means they took a look." },
          { title: "Follow Up", body: "Reply with something useful while you’re on their mind." },
        ],
      },
      {
        type: "prose",
        heading: "Reading Views Sensibly",
        paragraphs: [
          "A view tells you the card was opened, not why. Someone might be saving your number, checking your company or simply curious. Treat views as a gentle prompt, and combine them with what you know from the conversation.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Detail Level",
        body: "eCard’s site doesn’t state which details are recorded per view. See the app for exactly what is shown.",
      },
      {
        "type": "table",
        "heading": "What a burst of card views might mean",
        "intro": "Interpretations to test, not conclusions.",
        "headers": [
          "Pattern",
          "Possible reason",
          "Sensible response"
        ],
        "rows": [
          [
            "Several views the day after an event",
            "Attendees saving or revisiting contacts",
            "Send your planned follow-ups"
          ],
          [
            "A view weeks after a meeting",
            "Someone looking you up before a decision or referral",
            "A light, useful check-in"
          ],
          [
            "Views right after a LinkedIn or email mention",
            "Your signature or post is working",
            "Keep the link prominent"
          ],
          [
            "No views after sharing",
            "They saved the contact directly or haven’t needed it yet",
            "Nothing. Don’t chase a view"
          ]
        ]
      },
      {
        "type": "steps",
        "heading": "Sample: getting more value from your card link",
        "intro": "A fictional sequence for someone who networks every week.",
        "steps": [
          {
            "title": "Use one link everywhere",
            "body": "Sample: /c/priya in your email signature, QR and WhatsApp bio, so all views add up in one place."
          },
          {
            "title": "Keep the card current",
            "body": "Update title, phone and photo whenever they change; the link stays the same."
          },
          {
            "title": "Mention it with purpose",
            "body": "“Here’s my card with the address and booking link” gives people a reason to open it."
          },
          {
            "title": "Review weekly",
            "body": "Look at views alongside recent meetings rather than in isolation."
          }
        ]
      },
      {
        "type": "bullets",
        "heading": "Common mistakes",
        "items": [
          "Printing an old URL on paper cards and then changing the card path.",
          "Sharing a screenshot of the card instead of the link, screenshots can’t be tracked or saved to contacts.",
          "Assuming each view is a different person; one person can open your card several times."
        ]
      },

    ],
    faqs: [
      { q: "Does the viewer need an app?", a: "No. The digital card opens in a browser, with no app needed." },
      { q: "Can I share my card by QR?", a: "Yes. Every digital card has a QR code and a Save-to-contacts option." },
      { q: "Will someone know I can see card views?", a: "eCard’s site doesn’t describe a visible notice to viewers. As good practice, treat views as aggregate signals and don’t quote them back to people." },
      { q: "Does saving my card to contacts count as a view?", a: "eCard’s public site doesn’t document this detail, so check inside the app for the current behaviour." },
      { q: "Do I need a paid plan for card views?", a: "The digital card is in the base set on every plan, including Free." },
    ],
    related: ["features/link-tracking/who-opened-your-card", "features/digital-business-card", "features/digital-business-card/qr-code", "features/link-tracking"],
    source: "verified",
  },
  {
    slug: "features/link-tracking/link-clicks",
    category: "analytics",
    title: "Link Clicks",
    seoTitle: "Link Clicks Counted With Bots Filtered Out",
    description: "eCard short links count clicks with bots filtered out, so the numbers you see reflect people rather than crawlers or link-preview robots.",
    h1: "Clicks You Can Believe",
    eyebrow: "Analytics & Tracking",
    intro: "Raw click counts are noisy. eCard’s short links count clicks with bots filtered out, giving you a cleaner signal of human interest.",
    variant: "feature",
    visual: "analytics",
    icon: "link",
    sections: [
      {
        type: "prose",
        heading: "Where False Clicks Come From",
        paragraphs: [
          "In general, many link clicks aren’t people. Messaging apps fetch a preview when a link is pasted, email security tools open links to scan them, and search engines crawl anything public.",
          "Without filtering, a link shared once can look like it was clicked several times. eCard filters bots from its short-link click counts to reduce that noise.",
        ],
      },
      {
        type: "table",
        heading: "Typical Sources Of Automated Traffic",
        intro: "General background, not an eCard specification:",
        headers: ["Source", "Why it clicks"],
        rows: [
          ["Link previews", "Messaging apps fetch a page to show a thumbnail"],
          ["Email security", "Scanners open links to check for threats"],
          ["Crawlers", "Search and monitoring bots index public URLs"],
        ],
      },
      {
        type: "bullets",
        heading: "What To Do With Click Data",
        items: [
          "Compare clicks across channels, email vs WhatsApp vs QR",
          "Follow up first with contacts who clicked",
          "Retire links or materials that nobody opens",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Filtering Method",
        body: "eCard doesn’t publish how bots are identified. No filter is perfect, so treat counts as a strong indication rather than an exact audit.",
      },
      {
        "type": "prose",
        "heading": "Why filtering bots changes decisions",
        "paragraphs": [
          "When you paste a link into email or chat, it is often fetched by software before any human sees it: link previewers, security scanners and crawlers. If those fetches counted as clicks, every link you sent would look ‘opened’ within seconds, and you would call people who never looked.",
          "eCard’s short links count clicks with bots filtered out. That makes the count closer to human interest, which is the only thing worth acting on."
        ]
      },
      {
        "type": "table",
        "heading": "Sample: raw vs filtered clicks",
        "intro": "Fictional numbers for one brochure link sent to 20 people, to show the shape of the difference.",
        "headers": [
          "Measure",
          "Sample value",
          "What it means"
        ],
        "rows": [
          [
            "Raw requests",
            "41",
            "Every fetch, including previews and scanners"
          ],
          [
            "Filtered clicks",
            "9",
            "Requests that look like people"
          ],
          [
            "Contacts who replied",
            "3",
            "The outcome you actually care about"
          ]
        ]
      },
      {
        "type": "steps",
        "heading": "Using click counts in a weekly routine",
        "steps": [
          {
            "title": "List links sent this week",
            "body": "Card, brochure, WhatsApp, note who received each."
          },
          {
            "title": "Check filtered clicks",
            "body": "Focus on links clicked more than once or long after sending."
          },
          {
            "title": "Match to contacts",
            "body": "Use what you remember and what meeting memory holds."
          },
          {
            "title": "Decide one action each",
            "body": "Call, send a useful follow-up, or wait."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Label every link",
        "body": "Tell people what they’re clicking, “2-page price list” or “my card with directions”. Clear labels earn more genuine clicks."
      },
      {
        "type": "bullets",
        "heading": "Good reasons to send a tracked link",
        "items": [
          "They asked for details you can share as a PDF.",
          "You want them to save your contact easily, share your card.",
          "A WhatsApp conversation is the natural next step."
        ]
      },
    ],
    faqs: [
      { q: "Will a WhatsApp preview count as a click?", a: "eCard says bots are filtered out of click counts; the exact rules aren’t published." },
      { q: "Where do I get short links?", a: "Short links come with your eCard digital card." },
      { q: "Are the sample numbers on this page real?", a: "No. They are fictional and only illustrate how raw requests and filtered clicks can differ." },
      { q: "Does eCard publish how its bot filtering works?", a: "No. The site states that bots are filtered out but doesn’t describe the method." },

      { q: "Is a click the same as a card view?", a: "Close, but not identical in meaning: a click is someone following a short link, while a view is your card being opened. Both are bot-filtered signals of interest." },
    ],
    related: ["features/link-tracking/accurate-click-counts", "features/link-tracking/short-link-analytics", "features/link-tracking", "features/link-tracking/engagement-signals"],
    source: "mixed",
  },
  {
    slug: "features/link-tracking/pdf-engagement",
    category: "analytics",
    title: "PDF Engagement",
    seoTitle: "PDF Engagement: Know When Your Brochure Is Opened",
    description: "Share brochures, catalogues and price lists as PDFs with eCard and see when they’re opened, so your follow-up lands when interest is high.",
    h1: "Find Out Whether Your PDF Was Opened",
    eyebrow: "Analytics & Tracking",
    intro: "Brochures and catalogues are often the most important thing you send after a meeting. eCard’s link tracking shows you opens of PDFs, not just your card.",
    variant: "feature",
    visual: "analytics",
    icon: "file",
    sections: [
      {
        type: "cards",
        heading: "PDFs Worth Tracking",
        cards: [
          { title: "Brochures", body: "Project or product overviews after a site visit or expo.", icon: "book" },
          { title: "Catalogues", body: "Product ranges for distributors and buyers.", icon: "layers" },
          { title: "Proposals", body: "Know when a proposal has been opened before you chase.", icon: "briefcase" },
        ],
      },
      {
        type: "prose",
        heading: "From The Real-estate Playbook",
        paragraphs: [
          "eCard’s real-estate use case describes sending the brochure with your card and seeing who opened it, then following up on WhatsApp in Marathi or Hindi. The same idea works for any business that sends documents after a first meeting.",
        ],
      },
      {
        type: "steps",
        heading: "A Simple Routine",
        steps: [
          { title: "Send The PDF With Your Card", body: "Share right after the meeting." },
          { title: "Check Opens", body: "Look at link tracking later that day." },
          { title: "Follow Up On Opens", body: "Ask a specific question about what they read." },
          { title: "Nudge Non-openers", body: "Resend with a short summary in the message itself." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Not Stated Publicly",
        body: "eCard’s site says it tracks PDF opens. It doesn’t say whether page-level reading time is measured, so don’t rely on that.",
      },
      {
        "type": "steps",
        "heading": "Sample: sending a price list after a call",
        "intro": "A fictional workflow for a B2B supplier.",
        "steps": [
          {
            "title": "Prepare the PDF",
            "body": "Two pages, current prices, a clear contact line on the last page."
          },
          {
            "title": "Send it with context",
            "body": "“As promised, here are prices for the 50 kg packs we discussed.”"
          },
          {
            "title": "Wait a couple of days",
            "body": "Give the recipient time to read and share internally."
          },
          {
            "title": "Check opens",
            "body": "Several opens may mean it is being passed around; none may mean it hasn’t been seen."
          },
          {
            "title": "Follow up accordingly",
            "body": "Offer a call to the engaged; resend with a one-line summary to the silent."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Choosing which PDF to send",
        "headers": [
          "Stage of conversation",
          "Best PDF",
          "Why"
        ],
        "rows": [
          [
            "First contact after an event",
            "Short company profile",
            "Low effort to read, sets context"
          ],
          [
            "They asked about a product",
            "Product sheet or brochure",
            "Answers the specific question"
          ],
          [
            "They asked about cost",
            "Price list or quote",
            "Moves the decision forward"
          ],
          [
            "Before a meeting",
            "Agenda or case summary you wrote",
            "Makes the meeting more useful"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "PDF mistakes that hurt engagement",
        "items": [
          "Huge files that are slow to open on a phone.",
          "Out-of-date prices, tracking an old document tells you nothing useful.",
          "No contact details inside the PDF, so a forwarded copy leads nowhere.",
          "Sending three PDFs at once; people open none."
        ]
      },
      {
        "type": "callout",
        "tone": "note",
        "title": "Opens, not reading time",
        "body": "eCard tracks opens of your PDFs. The public site doesn’t describe page-by-page or time-spent data, so treat an open as a prompt, not proof of a full read."
      },

    ],
    faqs: [
      { q: "Does eCard show how long someone read my PDF?", a: "The site only states that PDF opens are tracked; reading time isn’t mentioned." },
      { q: "Does the PDF count toward storage?", a: "Storage varies by plan: 1 GB Free, 25 GB Starter, 250 GB Professional, unlimited on Business and Enterprise. How PDFs count isn’t detailed." },
      { q: "Should I send the PDF as an attachment or a link?", a: "A tracked link lets you see opens and keeps emails light; an attachment can’t tell you whether it was read. Many people send the link with a one-line summary." },

      { q: "Can I replace a PDF after sending it?", a: "eCard’s public site doesn’t document replacing shared files, so check the app before relying on it." },
    ],
    related: ["features/link-tracking/brochure-tracking", "use-cases/real-estate", "features/link-tracking", "features/events-expos/site-visits"],
    source: "verified",
  },
  {
    slug: "features/link-tracking/whatsapp-link-tracking",
    category: "analytics",
    title: "WhatsApp Link Tracking",
    seoTitle: "WhatsApp Link Tracking For Follow-Up Messages",
    description: "Track opens of links you send in WhatsApp messages from eCard, alongside AI-written messages in English, Hindi or Marathi opened in one tap.",
    h1: "See Which WhatsApp Follow-ups Get Opened",
    eyebrow: "Analytics & Tracking",
    intro: "WhatsApp is where many conversations actually happen. eCard writes the message, opens it in WhatsApp in one tap, and tracks opens of the links inside.",
    variant: "feature",
    visual: "whatsapp",
    icon: "message",
    sections: [
      {
        type: "steps",
        heading: "How It Fits Together",
        steps: [
          { title: "AI Drafts The Message", body: "In English, Hindi or Marathi." },
          { title: "Open In WhatsApp", body: "One tap opens the message ready to send." },
          { title: "Track The Link", body: "Opens of links in the message appear in link tracking." },
        ],
      },
      {
        type: "prose",
        heading: "Why Track WhatsApp Separately",
        paragraphs: [
          "Read receipts tell you a message was seen, but not whether anyone acted on it, and many people turn receipts off. A link open is a clearer sign of interest in what you shared.",
        ],
      },
      {
        type: "bullets",
        heading: "Good WhatsApp Follow-up Habits",
        intro: "General etiquette:",
        items: [
          "Keep it short and personal, in the contact’s preferred language",
          "Include one link, not five",
          "Message during business hours",
          "Respect anyone who asks not to be contacted",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Message Delivery",
        body: "eCard opens the message in WhatsApp for you to send. Delivery and read status within WhatsApp itself aren’t part of eCard’s documented tracking.",
      },
      {
        "type": "steps",
        "heading": "Sample: a WhatsApp follow-up in Hindi",
        "intro": "A fictional flow for a distributor met at an expo.",
        "steps": [
          {
            "title": "Pick the language",
            "body": "The AI writes the message in English, Hindi or Marathi; choose the one you spoke in."
          },
          {
            "title": "Review the draft",
            "body": "Make sure it mentions the product discussed and sounds like you."
          },
          {
            "title": "Open in WhatsApp",
            "body": "One tap opens the message in WhatsApp; you send it yourself."
          },
          {
            "title": "Watch the link",
            "body": "If the message includes a tracked link, check whether it was opened over the next day or two."
          }
        ]
      },
      {
        "type": "table",
        "heading": "WhatsApp or email?",
        "intro": "General guidance, the right channel depends on the relationship.",
        "headers": [
          "Situation",
          "Usually better",
          "Why"
        ],
        "rows": [
          [
            "Conversation happened in Hindi or Marathi",
            "WhatsApp in that language",
            "Feels natural and personal"
          ],
          [
            "Formal proposal or attachment",
            "Email from your own mailbox",
            "Easier to file and forward"
          ],
          [
            "Quick check-in after no reply",
            "WhatsApp",
            "Short and easy to answer"
          ],
          [
            "First contact with a senior executive",
            "Email",
            "Less intrusive"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls",
        "items": [
          "Messaging people who didn’t share a mobile number for that purpose.",
          "Sending long paragraphs; WhatsApp rewards short messages.",
          "Following up on WhatsApp and email at the same moment, pick one."
        ]
      },
      {
        "type": "prose",
        "heading": "Sample: a Marathi follow-up after a site visit",
        "paragraphs": [
          "Sample: a fictional builder’s sales executive met a family at a Pune project on Sunday. On Monday the AI drafts a short message in Marathi thanking them for visiting and including the brochure link. She reads it, adjusts one phrase, and sends it from WhatsApp.",
          "On Wednesday she sees the brochure link was opened, and replies to the family’s question about parking that same afternoon. The language made the first message feel personal; the tracked link told her when to be ready."
        ]
      },

    ],
    faqs: [
      { q: "Does eCard send WhatsApp messages automatically?", a: "eCard’s site says the AI writes the message and opens it in WhatsApp in one tap, you send it." },
      { q: "Which languages are supported?", a: "English, Hindi (हिंदी) and Marathi (मराठी)." },
      { q: "Can I edit the AI-written WhatsApp message?", a: "The message opens in WhatsApp before you send it, so you can change anything there." },
      { q: "Do I need WhatsApp Business?", a: "eCard’s site says the message opens in WhatsApp in one tap; it doesn’t specify which WhatsApp app is required." },
      { q: "Does eCard read my WhatsApp chats?", a: "eCard’s site describes writing a message and opening it in WhatsApp, plus tracking link opens. It doesn’t describe reading chats." },
    ],
    related: ["integrations/whatsapp", "features/link-tracking", "platform/multi-language", "features/link-tracking/short-link-analytics"],
    source: "verified",
  },
  {
    slug: "features/link-tracking/who-opened-your-card",
    category: "analytics",
    title: "Who Opened Your Card",
    seoTitle: "Who Opened Your Card? Use Opens To Prioritise",
    description: "Use eCard’s card-open tracking to see engagement after you share your digital card, and decide who to follow up with first.",
    h1: "Who Opened Your Card: And What To Do Next",
    eyebrow: "Analytics & Tracking",
    intro: "After an event you might share your card with dozens of people. Knowing which of them opened it helps you decide where to start.",
    variant: "guide",
    visual: "analytics",
    icon: "eye",
    sections: [
      {
        type: "table",
        heading: "A Sample Prioritisation",
        intro: "Sample contacts, invented for illustration:",
        headers: ["Contact (sample)", "Card opened", "Suggested action"],
        rows: [
          ["Sample: Priya Shah, Realtor", "Yes, twice", "Call today"],
          ["Sample: Dr. Kabir Rao", "Yes", "Send the promised brochure"],
          ["Sample: Neha Iyer, Founder", "Not yet", "Gentle WhatsApp nudge in two days"],
        ],
      },
      {
        type: "prose",
        heading: "Matching Opens To People",
        paragraphs: [
          "Opens are most useful when you share links one-to-one, so each open belongs to a known conversation. eCard’s site doesn’t document how anonymous opens (say, from a QR code on a poster) are attributed, so expect those to be counted rather than named.",
        ],
      },
      {
        type: "bullets",
        heading: "Be A Good Recipient Of The Data",
        items: [
          "Don’t mention that you saw them open your card",
          "Lead with value, not with tracking",
          "Treat repeated opens as interest, not commitment",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Pair With Meeting Memory",
        body: "Before following up, check the contact’s meeting memory, where you met and what was said, so your message picks up the conversation.",
      },
      {
        "type": "steps",
        "heading": "Sample: deciding who to call this morning",
        "intro": "A fictional Monday review for a consultant.",
        "steps": [
          {
            "title": "Gather recent opens",
            "body": "Card opened by a link sent to three people last week; brochure opened by one of them."
          },
          {
            "title": "Add your memory",
            "body": "Meeting memory shows one of them asked about timelines; another was just being polite."
          },
          {
            "title": "Pick one call",
            "body": "Call the person who asked about timelines and opened the brochure."
          },
          {
            "title": "Plan a lighter touch",
            "body": "Send the others a useful article or update later in the month."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Signal strength, roughly",
        "intro": "A rough way to weigh what you see.",
        "headers": [
          "What you see",
          "Weight",
          "Typical action"
        ],
        "rows": [
          [
            "One card open soon after meeting",
            "Low",
            "Normal follow-up"
          ],
          [
            "Card plus brochure opens",
            "Medium",
            "Offer a call"
          ],
          [
            "Repeated opens over several days",
            "Medium to high",
            "Reach out with a specific answer"
          ],
          [
            "Opens plus a reply",
            "High",
            "Respond promptly, the reply matters most"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls",
        "items": [
          "Calling within minutes of an open. It feels like surveillance.",
          "Assuming the person you sent it to is the one who opened it; links get forwarded.",
          "Ignoring people who replied without opening anything."
        ]
      },
      {
        "type": "callout",
        "tone": "note",
        "title": "Respect over speed",
        "body": "Engagement data is a privilege. Use it to time a helpful message, never to pressure someone or to mention that you saw them open your card."
      },

      {
        "type": "callout",
        "tone": "tip",
        "title": "Send individually",
        "body": "Personal links in one-to-one messages make opens far easier to interpret than one link in a group mail."
      },
    ],
    faqs: [
      { q: "Does eCard identify every person who opens my card?", a: "The site says it shows opens of your card; it doesn’t claim to identify every viewer. Check the app for what is shown." },
      { q: "Is tracking visible to the viewer?", a: "eCard doesn’t document this. As good practice, mention tracking in your privacy notice." },
      { q: "What if the same link was sent to several people?", a: "Then an open can’t be pinned to one person. Sending links individually, in personal messages, makes signals easier to read." },
      { q: "Can I see opens of my card from a QR scan?", a: "Your QR code points to your digital card, so opens of the card are tracked whether the link was tapped or scanned. Channel breakdowns aren’t documented on the site." },
      { q: "Should I mention that I saw them open my card?", a: "No. Refer to the conversation you had instead; mentioning tracking tends to make people uncomfortable." },

    ],
    related: ["features/link-tracking/card-views", "features/link-tracking/contact-activity", "features/meeting-memory", "features/link-tracking/reading-your-analytics"],
    source: "mixed",
  },
  {
    slug: "features/link-tracking/short-link-analytics",
    category: "analytics",
    title: "Short-Link Analytics",
    seoTitle: "Short-Link Analytics For Your Digital Card",
    description: "eCard digital cards use short links such as /c/rahul that count clicks with bots filtered out. Learn how to use short-link analytics well.",
    h1: "Short Links That Are Easy To Share And Measure",
    eyebrow: "Analytics & Tracking",
    intro: "A short, readable link is easy to say aloud, type and print. eCard’s card short links also count clicks with bots filtered out.",
    variant: "feature",
    visual: "card",
    icon: "link",
    sections: [
      {
        type: "split",
        heading: "What A Short Link Looks Like",
        body: [
          "eCard’s example path is /c/rahul, short enough to fit on a slide or say during a call.",
          "Every click on the link is counted, with bot traffic filtered out.",
        ],
        points: ["Readable path", "Works with no app", "Click counts without bots"],
      },
      {
        type: "bullets",
        heading: "Where To Place Your Short Link",
        items: [
          "Email signature",
          "Social profiles and bios",
          "Presentation end slides",
          "Printed visiting cards alongside your QR code",
          "WhatsApp status or messages",
        ],
      },
      {
        type: "prose",
        heading: "Comparing Channels",
        paragraphs: [
          "If you place the same card link in many places, totals tell you overall interest. To compare channels, general practice is to vary your placement over time and watch how counts change. ECard’s site doesn’t document per-channel link variants.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Custom Domains",
        body: "Business and Enterprise plans include white label and custom domain, which lets your card links carry your own brand.",
      },
      {
        "type": "prose",
        "heading": "Sample: one short link, many places",
        "paragraphs": [
          "Sample: Rahul, a fictional architect, uses /c/rahul on his paper card’s QR code, his email signature and his WhatsApp profile. Because every channel points to the same short link, all views of his card add up in one place, and he can update the card itself without reprinting anything.",
          "If he wants to compare channels, the simplest approach is to look at when clicks happen: a spike after a site visit points to the QR code; a steady trickle points to his signature."
        ]
      },
      {
        "type": "bullets",
        "heading": "Short link checklist",
        "intro": "Before you print or publish a short link, check:",
        "items": [
          "It opens correctly on a phone in a normal browser.",
          "The card behind it has current details and a working Save-to-contacts button.",
          "It is readable aloud, short paths are easier to dictate on a call.",
          "The QR code version scans from arm’s length.",
          "You won’t need to change the path later; changing it breaks printed copies."
        ]
      },
      {
        "type": "table",
        "heading": "Plan fit for short links and domains",
        "intro": "From eCard’s pricing page.",
        "headers": [
          "Plan",
          "Price per month",
          "Custom domain"
        ],
        "rows": [
          [
            "Free",
            "₹0",
            "No"
          ],
          [
            "Starter",
            "₹299",
            "No"
          ],
          [
            "Professional",
            "₹999",
            "No"
          ],
          [
            "Business",
            "₹2,999",
            "Yes (white label)"
          ],
          [
            "Enterprise",
            "Custom",
            "Yes"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Why one stable link is worth protecting",
        "paragraphs": [
          "Every place your short link appears (a printed card, a stand banner, an email signature, a profile bio) is effectively permanent. Changing the path means those copies quietly stop working, and the analytics split across old and new links.",
          "Choose a short, memorable path once, keep the card behind it updated, and let the link accumulate history over time."
        ]
      },

      {
        "type": "callout",
        "tone": "tip",
        "title": "Test before printing",
        "body": "Scan the printed QR and type the short link on a phone before ordering a full print run."
      },
    ],
    faqs: [
      { q: "Can I choose my short link path?", a: "eCard shows /c/rahul as an example path. Whether you can edit it isn’t stated publicly; check the app." },
      { q: "Can short links use my own domain?", a: "Custom domain is listed on the Business (₹2,999/month) and Enterprise plans." },
      { q: "Do short links count bot clicks?", a: "No. eCard’s short links count clicks with bots filtered out." },
      { q: "What does a short link look like?", a: "eCard’s site gives /c/rahul as an example path for a digital card." },
      { q: "Can I put the short link on a paper card?", a: "Yes, print the link or its QR code. Just pick a path you won’t need to change." },

    ],
    related: ["features/link-tracking/link-clicks", "features/link-tracking/accurate-click-counts", "features/team-security/custom-domains", "features/digital-business-card"],
    source: "mixed",
  },
  {
    slug: "features/link-tracking/dashboard",
    category: "analytics",
    title: "Analytics Dashboard",
    seoTitle: "The eCard Analytics Dashboard, Explained",
    description: "An overview of eCard analytics: what the site confirms is tracked (card, PDF and WhatsApp link opens and bot-filtered clicks) and how to review it.",
    h1: "Your Engagement At A Glance",
    eyebrow: "Analytics & Tracking",
    intro: "eCard brings together opens of your card, PDFs and WhatsApp links. Here’s what is confirmed, and a routine for reviewing it.",
    variant: "reference",
    visual: "analytics",
    icon: "chart",
    sections: [
      {
        type: "table",
        heading: "Confirmed Tracking",
        headers: ["Item", "What’s tracked", "Source"],
        rows: [
          ["Digital card", "Opens", "eCard homepage"],
          ["PDFs", "Opens", "eCard homepage"],
          ["WhatsApp links", "Opens", "eCard homepage"],
          ["Short links", "Clicks, bots filtered out", "eCard homepage"],
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Layout Varies",
        body: "eCard’s public site has no screenshots or documentation of the analytics screen. Charts and filters shown in the app may differ from any description here.",
      },
      {
        type: "steps",
        heading: "A Weekly Review Routine",
        steps: [
          { title: "Scan The Totals", body: "Are opens up or down versus last week?" },
          { title: "Find The Warm Contacts", body: "Who opened something but hasn’t heard back?" },
          { title: "Check Materials", body: "Which PDFs get opened, which don’t?" },
          { title: "Act", body: "Book follow-ups before closing the screen." },
        ],
      },
      {
        type: "prose",
        heading: "Keep It Practical",
        paragraphs: [
          "Analytics is only useful if it changes what you do. Ten minutes a week, ending with a short list of people to contact, beats an hour of staring at charts.",
        ],
      },
      {
        "type": "steps",
        "heading": "Sample: a 15-minute Friday review",
        "intro": "A fictional routine for a small sales team.",
        "steps": [
          {
            "title": "Look at the week",
            "body": "Which cards, PDFs and WhatsApp links were opened this week."
          },
          {
            "title": "Spot the outliers",
            "body": "Anything opened repeatedly, or opened long after it was sent."
          },
          {
            "title": "Cross-check contacts",
            "body": "Open the contact to see tags, event and meeting notes."
          },
          {
            "title": "Assign next steps",
            "body": "One owner and one action per engaged contact."
          },
          {
            "title": "Note what worked",
            "body": "Which PDF or message drew the most engagement, reuse it next week."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Questions the dashboard can and can’t answer",
        "headers": [
          "Question",
          "Answerable from tracking?",
          "Where else to look"
        ],
        "rows": [
          [
            "Did anyone open the brochure I sent?",
            "Yes, PDF opens",
            "No"
          ],
          [
            "Is this buyer serious?",
            "Partly",
            "Meeting memory, tags, your judgement"
          ],
          [
            "How long did they read?",
            "Not documented",
            "Ask them"
          ],
          [
            "Which event produced the most interest?",
            "Partly",
            "Event groups and tags"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls",
        "items": [
          "Reviewing daily and over-reacting to small numbers.",
          "Looking only at totals and never at individual contacts.",
          "Forgetting to act, a review that ends without assigned actions is just reading."
        ]
      },
      {
        "type": "bullets",
        "heading": "Make the review stick",
        "intro": "Small habits that turn a dashboard into decisions.",
        "items": [
          "Put the review in your calendar at the same time each week.",
          "Keep a running list of actions decided in the review and tick them off.",
          "Compare this week with last week, not with an imagined ideal.",
          "Stop after 15 minutes: the follow-up is the work, not the review."
        ]
      },

      {
        "type": "callout",
        "tone": "note",
        "title": "A planning tool, not a live feed",
        "body": "eCard’s site doesn’t specify how quickly opens appear. Use the dashboard to plan the week’s follow-ups rather than to watch activity minute by minute."
      },
    ],
    faqs: [
      { q: "Can I export analytics data?", a: "Export of analytics isn’t documented on eCard’s site. Contacts can be bulk-exported." },
      { q: "Is the dashboard the same as the workspace dashboard?", a: "eCard has a workspace dashboard page; how analytics appears there isn’t detailed publicly." },
      { q: "Who should look at the dashboard on a team?", a: "Usually whoever owns follow-up decisions, such as a manager, in a short weekly review with the team." },
      { q: "Can I see opens per event?", a: "Combine event groups and tags with link-open signals for each contact. Whether the dashboard filters by event directly isn’t documented, so check the app." },
      { q: "Is the dashboard useful for a solo user?", a: "Yes. A short weekly look helps you decide who to contact next, even without a team." },

    ],
    related: ["features/link-tracking/reading-your-analytics", "platform/dashboard", "features/link-tracking", "features/link-tracking/analytics-for-teams"],
    source: "mixed",
  },
  {
    slug: "features/link-tracking/contact-activity",
    category: "analytics",
    title: "Contact Activity",
    seoTitle: "Contact Activity: Engagement Next To Each Person",
    description: "Combine eCard link tracking with meeting memory and contact history to see each relationship’s activity before you reach out again.",
    h1: "Every Relationship, With Its Recent Activity",
    eyebrow: "Analytics & Tracking",
    intro: "Before you message someone, it helps to see the whole picture: where you met, what you sent and whether they opened it.",
    variant: "feature",
    visual: "meeting",
    icon: "clock",
    sections: [
      {
        type: "cards",
        heading: "Pieces Of The Picture",
        cards: [
          { title: "Meeting Memory", body: "Where you met, who introduced you, voice notes and a searchable AI summary.", icon: "brain" },
          { title: "Outreach", body: "Intro emails from your mailbox and WhatsApp messages.", icon: "mail" },
          { title: "Opens", body: "Opens of your card, PDFs and WhatsApp links.", icon: "eye" },
        ],
      },
      {
        type: "prose",
        heading: "Why Per-contact Context Matters",
        paragraphs: [
          "Aggregate numbers tell you how a campaign did. Per-contact context tells you what to say next to one person. A message that references the event, the conversation and the brochure they opened reads as attentive, not automated.",
          "eCard’s site does not detail exactly how activity is shown on a contact record, so check the app for the current view.",
        ],
      },
      {
        type: "bullets",
        heading: "Before You Reach Out, Check",
        items: [
          "When you last contacted them",
          "What they opened since",
          "Any notes from the meeting",
          "Tags such as hot or distributor",
        ],
      },
      {
        "type": "steps",
        "heading": "Sample: preparing for a call in two minutes",
        "intro": "A fictional check before phoning Ananya Iyer, a sample hospital administrator.",
        "steps": [
          {
            "title": "Where you met",
            "body": "Healthcare expo in Chennai, introduced by a mutual supplier."
          },
          {
            "title": "What was said",
            "body": "Voice note: evaluating vendors for next quarter; wants references."
          },
          {
            "title": "What happened since",
            "body": "Intro email sent; brochure opened twice; no reply yet."
          },
          {
            "title": "Your opener",
            "body": "“You mentioned references, I can share two this week. Would Thursday suit for a call?”"
          }
        ]
      },
      {
        "type": "table",
        "heading": "Activity vs memory",
        "intro": "Two kinds of context, both useful.",
        "headers": [
          "Type",
          "Examples",
          "Tells you"
        ],
        "rows": [
          [
            "Activity",
            "Card, PDF and WhatsApp link opens",
            "What they’ve done since"
          ],
          [
            "Memory",
            "Where you met, who introduced you, voice notes, AI summary",
            "What was said and why it matters"
          ],
          [
            "Organisation",
            "Event, tags",
            "Where they fit in your work"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls",
        "items": [
          "Reading activity without memory. You know they opened something but not why it matters to them.",
          "Not adding a note after each call, so the next person on the team starts from scratch.",
          "Mentioning opens on the call; refer to the conversation instead."
        ]
      },
      {
        "type": "prose",
        "heading": "Keeping the record useful for the next person",
        "paragraphs": [
          "Contact history is most valuable when someone else picks it up: a colleague covering leave, or a manager taking over a key account. A short note after every meaningful touch (what was discussed, what was promised, what happens next) saves them from asking the contact to repeat themselves.",
          "Natural-language search helps here too: a question like “Investors I met in Mumbai last month” is only as good as the notes and tags behind it."
        ]
      },

    ],
    faqs: [
      { q: "Can I search by what someone said?", a: "Meeting memory includes a searchable AI summary, and eCard supports natural-language search." },
      { q: "Does activity sync to other tools?", a: "On Professional and above, webhooks send signed events for every new contact. Other activity events aren’t documented." },
      { q: "Can I add notes after a call?", a: "Meeting memory holds where you met, who introduced you, voice notes and a searchable AI summary. Exact note-editing options are best checked in the app." },
      { q: "Does activity show who on my team contacted someone?", a: "eCard’s site doesn’t describe per-member activity views in detail. Workspaces have an audit log; check the app for contact-level history." },
      { q: "Can I search contacts by activity?", a: "Natural-language search works over your contacts and meeting memory; whether it filters by link opens isn’t documented on the site." },
    ],
    related: ["features/contact-management/contact-history", "features/meeting-memory", "features/link-tracking/who-opened-your-card", "features/link-tracking/engagement-signals"],
    source: "mixed",
  },
  {
    slug: "features/link-tracking/accurate-click-counts",
    category: "analytics",
    title: "Accurate Click Counts",
    seoTitle: "Accurate Click Counts Without Bot Inflation",
    description: "Why bot clicks inflate link statistics and how eCard filters them from short-link counts, so your engagement numbers reflect real people.",
    h1: "Why Accurate Click Counts Matter",
    eyebrow: "Analytics & Tracking",
    intro: "Inflated numbers lead to bad decisions. eCard filters bots out of short-link click counts so you can trust what you see.",
    variant: "guide",
    visual: "analytics",
    icon: "check",
    sections: [
      {
        type: "prose",
        heading: "The Inflation Problem",
        paragraphs: [
          "If every link preview and security scanner were counted, you’d see clicks within seconds of sending, before any human could have read the message. That leads people to follow up with contacts who never actually looked.",
          "eCard’s short links count clicks with bots filtered out, reducing those false positives.",
        ],
      },
      {
        type: "split",
        heading: "Signs A Click Might Still Be Automated",
        body: [
          "No filter is perfect. As general guidance, be sceptical of clicks that arrive the instant a message is sent, or bursts of clicks at odd hours.",
        ],
        points: ["Instant clicks after sending", "Many clicks in one second", "Clicks from a contact who says they never saw it"],
      },
      {
        type: "steps",
        heading: "Use Counts Wisely",
        steps: [
          { title: "Look At Trends", body: "Week-on-week changes are more reliable than single clicks." },
          { title: "Combine Signals", body: "A click plus a reply beats a click alone." },
          { title: "Ask", body: "When in doubt, a friendly check-in is cheap." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Method Not Published",
        body: "eCard doesn’t publish its bot-detection rules, so precise accuracy figures aren’t available.",
      },
      {
        "type": "steps",
        "heading": "How to sanity-check your own numbers",
        "intro": "A simple test anyone can run.",
        "steps": [
          {
            "title": "Create a test",
            "body": "Send a tracked link to a colleague in an email and in a chat."
          },
          {
            "title": "Don’t click yet",
            "body": "Wait a few minutes and note whether any click appears from previews alone."
          },
          {
            "title": "Click once",
            "body": "Have your colleague open it once on their phone."
          },
          {
            "title": "Compare",
            "body": "You should see a count that matches the real human action, not the previews."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Sample: why accuracy matters for decisions",
        "intro": "Fictional comparison for a list of 30 expo contacts.",
        "headers": [
          "If counts included bots",
          "With bots filtered"
        ],
        "rows": [
          [
            "Almost everyone looks engaged within minutes",
            "A smaller group shows genuine interest"
          ],
          [
            "You call 25 people, most uninterested",
            "You call 6 people who opened and revisited"
          ],
          [
            "Hours wasted, contacts annoyed",
            "Time spent where interest is real"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Remaining limits to keep in mind",
        "items": [
          "No filtering is perfect; occasional automated hits can still slip through.",
          "Forwarded links mean one contact’s link may be opened by colleagues.",
          "Some people read on a device or app that behaves unusually."
        ]
      },
      {
        "type": "prose",
        "heading": "Why inflated numbers are worse than no numbers",
        "paragraphs": [
          "A count that includes previews and scanners doesn’t just add noise, it actively misleads. It makes every send look successful, hides which messages actually work and pushes you to chase people who never saw anything.",
          "With bots filtered out, a lower but more honest number lets you compare messages, brochures and events fairly, and spend your follow-up time where it is most likely to matter."
        ]
      },

      {
        "type": "callout",
        "tone": "tip",
        "title": "Compare like with like",
        "body": "When judging a message, compare its filtered clicks with similar sends (same audience, similar timing) rather than with a different campaign."
      },
    ],
    faqs: [
      { q: "Does eCard publish an accuracy percentage?", a: "No. The site says bots are filtered out but gives no accuracy figure." },
      { q: "Are card opens also bot-filtered?", a: "The site states bot filtering for short-link click counts; it doesn’t specify for other open types." },
      { q: "Should I compare eCard’s counts with another tool?", a: "Different tools filter differently, so numbers rarely match exactly. Compare trends rather than exact counts." },
      { q: "Why might my count be lower than I expected?", a: "Because automated fetches are excluded. A lower, filtered count is usually closer to what real people did." },
      { q: "Do previews in WhatsApp or email count?", a: "eCard filters bot clicks, which is designed to exclude automated fetches such as link previews." },

    ],
    related: ["features/link-tracking/link-clicks", "features/link-tracking/short-link-analytics", "features/link-tracking/reading-your-analytics", "features/link-tracking"],
    source: "mixed",
  },
  {
    slug: "features/link-tracking/engagement-signals",
    category: "analytics",
    title: "Engagement Signals",
    seoTitle: "Engagement Signals That Tell You When To Follow Up",
    description: "Turn card opens, PDF opens and WhatsApp link clicks from eCard into simple engagement signals that help you choose who to contact and when.",
    h1: "Signals That Tell You When To Reach Out",
    eyebrow: "Analytics & Tracking",
    intro: "Not every contact is ready to talk at the same time. Engagement signals help you spot the ones who are.",
    variant: "guide",
    visual: "analytics",
    icon: "bell",
    sections: [
      {
        type: "table",
        heading: "Reading Common Signals",
        intro: "General interpretation guidance:",
        headers: ["Signal", "Likely meaning", "Suggested response"],
        rows: [
          ["Opened your card", "Checking who you are", "Short, friendly follow-up"],
          ["Opened a PDF", "Evaluating your offer", "Offer a call to answer questions"],
          ["Repeated opens", "Sharing internally or comparing", "Ask who else should be involved"],
          ["No opens after a week", "Busy or not interested", "One gentle nudge, then pause"],
        ],
      },
      {
        type: "prose",
        heading: "Signals, Not Scores",
        paragraphs: [
          "eCard shows opens of your card, PDFs and WhatsApp links. The site doesn’t describe an automatic lead score, so you combine these signals yourself, which also keeps you thinking about the person rather than a number.",
        ],
      },
      {
        type: "bullets",
        heading: "Combine With What You Know",
        items: [
          "Tags from the event review",
          "Meeting memory notes",
          "Their role and company",
          "Replies already received",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Speed Beats Polish",
        body: "When a strong signal appears, a quick, relevant message usually does better than a perfect one sent days later.",
      },
      {
        "type": "table",
        "heading": "Sample: weighing signals for five contacts",
        "intro": "Fictional contacts after a trade show, to show how signals combine.",
        "headers": [
          "Contact",
          "Signals",
          "Reading",
          "Next step"
        ],
        "rows": [
          [
            "Sample A",
            "Hot tag, brochure opened twice",
            "Strong interest",
            "Call this week"
          ],
          [
            "Sample B",
            "Warm tag, card opened once",
            "Polite interest",
            "Useful follow-up later"
          ],
          [
            "Sample C",
            "Hot tag, no opens",
            "Busy or saved details directly",
            "Short WhatsApp check-in"
          ],
          [
            "Sample D",
            "Info tag, many opens",
            "Possibly forwarded internally",
            "Ask who else should be involved"
          ],
          [
            "Sample E",
            "Replied, no opens",
            "Engaged, reply beats opens",
            "Respond promptly"
          ]
        ]
      },
      {
        "type": "steps",
        "heading": "Turning signals into a routine",
        "steps": [
          {
            "title": "Collect",
            "body": "Opens, tags, event and meeting notes in one review."
          },
          {
            "title": "Rank",
            "body": "Replies first, then repeated opens on hot contacts, then the rest."
          },
          {
            "title": "Act",
            "body": "One action per contact, with an owner."
          },
          {
            "title": "Record",
            "body": "Update tags so next week’s review starts from the new state."
          }
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls",
        "items": [
          "Building elaborate private scoring formulas that nobody maintains.",
          "Over-weighting a single open.",
          "Ignoring what the person actually said at the event."
        ]
      },
      {
        "type": "prose",
        "heading": "Sample: when signals disagree",
        "paragraphs": [
          "Sample: a fictional contact tagged hot at an expo shows no opens at all, while an info-only contact has opened your brochure five times. It is tempting to swap priorities, but the hot contact may simply have saved your details directly or be travelling.",
          "A sensible response is to do both: a brief check-in with the hot contact, and a friendly question to the info contact about whether someone else in their company should be involved. Signals widen your view; they shouldn’t overrule what you heard in person."
        ]
      },

      {
        "type": "callout",
        "tone": "tip",
        "title": "Write down your reading",
        "body": "Note in one line why you acted on a signal. Over time you’ll see which signals really predicted replies."
      },
    ],
    faqs: [
      { q: "Does eCard notify me when someone opens my card?", a: "Notifications for opens aren’t described on eCard’s site; check the app." },
      { q: "Is there a lead score?", a: "Not according to the public site. Use opens, tags and notes together." },
      { q: "Which signal matters most?", a: "A reply. Opens are useful hints, but a direct response is always the strongest sign of interest." },
      { q: "Do engagement signals work for every plan?", a: "Link tracking is part of eCard’s digital card and link features; check the pricing page and the app for what your plan includes." },
      { q: "Can engagement signals trigger an automatic message?", a: "eCard’s site doesn’t describe automatic triggers based on opens. Decide follow-ups yourself." },

    ],
    related: ["features/link-tracking/measuring-follow-up", "features/events-expos/lead-tracking", "features/link-tracking/contact-activity", "platform/follow-up-engine"],
    source: "mixed",
  },
  {
    slug: "features/link-tracking/measuring-follow-up",
    category: "analytics",
    title: "Measuring Follow-Up",
    seoTitle: "Measuring Follow-Up: Simple Metrics That Matter",
    description: "Simple ways to measure your follow-up after events and meetings using eCard opens and your own reply tracking, without building complex reports.",
    h1: "Measure Follow-up Without A Spreadsheet Marathon",
    eyebrow: "Analytics & Tracking",
    intro: "You can’t improve follow-up you don’t measure. A handful of simple numbers, reviewed regularly, is enough.",
    variant: "guide",
    visual: "dashboard",
    icon: "chart",
    sections: [
      {
        type: "table",
        heading: "Four Useful Numbers",
        intro: "General metrics you can track per event or per month:",
        headers: ["Metric", "How to get it"],
        rows: [
          ["Cards captured", "Contacts in the event group"],
          ["Followed up within 48h", "Count contacts you messaged in time"],
          ["Opened something", "Card, PDF or WhatsApp link opens in eCard"],
          ["Replied or booked", "Mark with a tag, such as replied"],
        ],
      },
      {
        type: "steps",
        heading: "Set Up In A Few Minutes",
        steps: [
          { title: "Use Events", body: "Group each show or meetup." },
          { title: "Agree Two Tags", body: "For example replied and meeting-booked." },
          { title: "Review Monthly", body: "Note the four numbers per event." },
        ],
      },
      {
        type: "prose",
        heading: "What Good Looks Like",
        paragraphs: [
          "Benchmarks vary widely by industry, so compare yourself with your own last event rather than a universal number. If more people opened your material but fewer replied, the content may need work; if few opened anything, look at timing or channel.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Time Saved",
        body: "eCard’s time-saved calculator is labelled “Estimates, not promises”, a good attitude for any follow-up metric.",
      },
      {
        "type": "table",
        "heading": "Sample: one month of follow-up",
        "intro": "Fictional figures for a solo consultant, showing a simple scorecard you could keep yourself.",
        "headers": [
          "Measure",
          "Sample value",
          "Note"
        ],
        "rows": [
          [
            "Cards scanned",
            "62",
            "From two events and day-to-day meetings"
          ],
          [
            "Followed up within 3 days",
            "48",
            "The rest were info-only"
          ],
          [
            "Contacts who opened a link",
            "21",
            "Card, PDF or WhatsApp link"
          ],
          [
            "Replies",
            "11",
            "Counted manually"
          ],
          [
            "Meetings booked",
            "4",
            "The outcome that matters"
          ]
        ]
      },
      {
        "type": "steps",
        "heading": "Improving the numbers month to month",
        "steps": [
          {
            "title": "Speed",
            "body": "Shorten the time from scan to first follow-up."
          },
          {
            "title": "Relevance",
            "body": "Reference the conversation; use the contact’s language on WhatsApp."
          },
          {
            "title": "Content",
            "body": "Test a shorter PDF or a clearer subject line."
          },
          {
            "title": "Persistence",
            "body": "Plan a second, useful touch for people who opened but didn’t reply."
          }
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls",
        "items": [
          "Measuring only scans, volume isn’t outcome.",
          "Changing several things at once, so you can’t tell what helped.",
          "Comparing an expo month to a quiet month without noting the difference."
        ]
      },
      {
        "type": "prose",
        "heading": "Why a personal baseline beats industry benchmarks",
        "paragraphs": [
          "Published “average reply rates” mix industries, regions and audiences that have little to do with your own. A number from your last three months is far more useful: it reflects your market, your message and the people you actually meet.",
          "Record the same handful of measures each month, note anything unusual (a big expo, a holiday week) and judge changes against your own past rather than someone else’s."
        ]
      },

      {
        "type": "callout",
        "tone": "note",
        "title": "Estimates are not results",
        "body": "eCard’s time-saved calculator is labelled “Estimates, not promises”. Judge results with your own follow-up numbers instead."
      },
    ],
    faqs: [
      { q: "Does eCard calculate reply rates?", a: "Reply-rate reporting isn’t described on the public site. Tags are a simple way to track replies." },
      { q: "Can I compare events?", a: "Grouping contacts by event makes comparison easier; dedicated comparison reports aren’t documented." },
      { q: "Where do I track replies and meetings?", a: "eCard’s site doesn’t describe reply or meeting counting, so many people use tags such as replied and meeting, or a simple spreadsheet alongside." },
      { q: "How often should I review these measures?", a: "Monthly is enough for most individuals; teams that attend many events may prefer a short weekly check plus a monthly summary." },
      { q: "What’s the single most useful measure?", a: "For most people, the share of contacts followed up within a few days. It is fully under your control and strongly linked to outcomes." },

    ],
    related: ["features/link-tracking/engagement-signals", "features/outreach/outreach-tracking", "platform/time-saved", "resources/guides/follow-up-playbook"],
    source: "mixed",
  },
  {
    slug: "features/link-tracking/reading-your-analytics",
    category: "analytics",
    title: "Reading Your Analytics",
    seoTitle: "How To Read Card And Link Analytics Sensibly",
    description: "A practical guide to interpreting eCard opens and click counts: what they tell you, what they don’t, and common mistakes to avoid.",
    h1: "Reading Your Analytics Without Over-reading Them",
    eyebrow: "Analytics & Tracking",
    intro: "Opens and clicks are useful, but easy to misread. Here’s how to interpret them sensibly.",
    variant: "guide",
    visual: "analytics",
    icon: "search",
    sections: [
      {
        type: "bullets",
        heading: "What Opens Tell You",
        items: [
          "Someone looked at what you sent",
          "Roughly when interest happened",
          "Which materials attract attention",
        ],
      },
      {
        type: "bullets",
        heading: "What They Don’t Tell You",
        items: [
          "Whether the person liked what they saw",
          "Whether they’re the decision-maker",
          "Why they didn’t open, busy and uninterested look the same",
        ],
      },
      {
        type: "cards",
        heading: "Common Mistakes",
        cards: [
          { title: "Chasing Every Open", body: "Calling the moment a card is opened can feel intrusive.", icon: "bell" },
          { title: "Ignoring Non-openers", body: "Many people read on another device or save for later.", icon: "eye" },
          { title: "Small Samples", body: "Five shares aren’t enough to judge a brochure.", icon: "chart" },
        ],
      },
      {
        type: "prose",
        heading: "A Healthier Mindset",
        paragraphs: [
          "Treat analytics as a way to order your to-do list, not a verdict on a relationship. eCard filters bots from short-link clicks, which helps, but the conversation is still the real measure.",
        ],
      },
      {
        "type": "table",
        "heading": "Sample readings, right and wrong",
        "intro": "Fictional situations showing over-reading and sensible reading side by side.",
        "headers": [
          "What you see",
          "Over-reading",
          "Sensible reading"
        ],
        "rows": [
          [
            "Brochure opened 4 times",
            "“They’re ready to buy”",
            "Interested, maybe sharing internally, offer help"
          ],
          [
            "No opens after a week",
            "“They’re not interested”",
            "Unknown. They may have saved details or been busy"
          ],
          [
            "Card opened at 11 pm",
            "“They’re obsessed”",
            "They had time in the evening, nothing more"
          ],
          [
            "Card opened months later",
            "“Random”",
            "Possibly a referral or a new need, a timely check-in may help"
          ]
        ]
      },
      {
        "type": "steps",
        "heading": "A five-question check before acting",
        "intro": "Ask these before you reach out based on an open.",
        "steps": [
          {
            "title": "What did they say when we met?",
            "body": "Context comes first."
          },
          {
            "title": "Did they already reply?",
            "body": "If so, answer that and ignore the opens."
          },
          {
            "title": "Was the link shared with several people?",
            "body": "Then the open may not be theirs."
          },
          {
            "title": "Is there a useful next step?",
            "body": "Only reach out if you have something helpful."
          },
          {
            "title": "Would this feel welcome?",
            "body": "Timing and tone matter more than speed."
          }
        ]
      },
      {
        "type": "bullets",
        "heading": "Habits of people who read analytics well",
        "items": [
          "They look weekly, not hourly.",
          "They compare like with like. This show versus last show.",
          "They never mention tracking to the contact.",
          "They write down what they decided, so the next review builds on it."
        ]
      },
      {
        "type": "callout",
        "tone": "note",
        "title": "Numbers are prompts",
        "body": "Use analytics to choose who to think about, then use your judgement and what you know about the person to decide what to do."
      },

      {
        "type": "prose",
        "heading": "Sample: one week, read calmly",
        "paragraphs": [
          "Sample: a fictional freelancer sends eight proposals in a week. Three PDFs are opened, one of them repeatedly; two people reply, including one who never opened the PDF at all. The calm reading: answer both replies first, then send the repeat-opener a short note offering to walk through the proposal, and leave the rest for a check-in next week."
        ]
      },
    ],
    faqs: [
      { q: "Why does a contact show no opens but replied?", a: "They may have read your message without clicking a tracked link. Opens only capture tracked items." },
      { q: "Are numbers real-time?", a: "eCard doesn’t state update frequency publicly." },
      { q: "Should I follow up immediately after an open?", a: "Usually not. Waiting a little and sending something genuinely useful feels more natural than an instant message." },
      { q: "Why do some links get opened by colleagues?", a: "People often forward useful links internally. Several opens from one contact’s link can mean a team is discussing your offer." },
      { q: "Can analytics tell me why someone didn’t reply?", a: "No. Analytics show what happened with links, not why. Only the person can tell you that: a polite, specific question often does." },
    ],
    related: ["features/link-tracking/dashboard", "features/link-tracking/accurate-click-counts", "features/link-tracking/who-opened-your-card", "features/link-tracking/engagement-signals"],
    source: "educational",
  },
  {
    slug: "features/link-tracking/brochure-tracking",
    category: "analytics",
    title: "Brochure Tracking",
    seoTitle: "Brochure Tracking: Send With Your Card, See Opens",
    description: "Send your brochure together with your eCard digital card and see who opened it, the workflow eCard describes for real-estate site visits.",
    h1: "Know Which Brochures Get Read",
    eyebrow: "Analytics & Tracking",
    intro: "eCard’s real-estate use case puts it plainly: send the brochure with your card and see who opened it. The same idea works anywhere you share a brochure.",
    variant: "solution",
    visual: "analytics",
    icon: "book",
    sections: [
      {
        type: "steps",
        heading: "The Workflow",
        steps: [
          { title: "Scan The Visitor’s Card", body: "On site, in the phone browser or via Telegram." },
          { title: "Send Brochure + Card", body: "Share both together." },
          { title: "See Who Opened It", body: "Check PDF and card opens." },
          { title: "Follow Up On WhatsApp", body: "In Marathi, Hindi or English, written by AI and opened in one tap." },
        ],
      },
      {
        type: "split",
        heading: "Beyond Real Estate",
        body: [
          "Manufacturers send catalogues, consultants send capability decks and training providers send course outlines. In each case, knowing whether the document was opened shapes the next call.",
          "eCard doesn’t imply customers in these industries; these are illustrations of the workflow.",
        ],
        points: ["Product catalogues", "Capability decks", "Course outlines", "Price lists"],
      },
      {
        type: "bullets",
        heading: "Brochure Tips",
        intro: "General guidance:",
        items: [
          "Keep the file small enough to open on mobile data",
          "Put the key offer on page one",
          "Use a clear file name",
          "Update versions instead of sending several",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Scope Of Tracking",
        body: "eCard tracks PDF opens. Page-by-page reading isn’t mentioned on the site.",
      },
      {
        "type": "steps",
        "heading": "Sample: a brochure follow-up for a showroom",
        "intro": "A fictional furniture showroom after a weekend of walk-ins.",
        "steps": [
          {
            "title": "Scan visitor cards",
            "body": "Note which collection each visitor liked in a voice note."
          },
          {
            "title": "Send the right brochure",
            "body": "Living-room catalogue to some, office range to others, with your card."
          },
          {
            "title": "Check opens after two days",
            "body": "Note who opened and who revisited."
          },
          {
            "title": "Invite back",
            "body": "Offer engaged visitors a second appointment; send others a seasonal update later."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Brochure formats compared",
        "intro": "General guidance for sharing on phones.",
        "headers": [
          "Format",
          "Pros",
          "Cons"
        ],
        "rows": [
          [
            "Short PDF (2-6 pages)",
            "Quick to open, easy to forward",
            "Limited detail"
          ],
          [
            "Full catalogue PDF",
            "Complete",
            "Heavy on mobile; fewer people finish it"
          ],
          [
            "Digital card link",
            "Always current, saves to contacts",
            "Not a substitute for product detail"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls",
        "items": [
          "One brochure for every audience, buyers and brokers want different things.",
          "No date or version on the brochure, so old copies circulate.",
          "Calling everyone who opened it on the same afternoon."
        ]
      },
      {
        "type": "prose",
        "heading": "Sample: real-estate follow-up in practice",
        "paragraphs": [
          "Sample: after a fictional weekend site visit, a realtor sends the project brochure and her card to twelve buyers, writing to most in English and to three families on WhatsApp in Marathi. By Tuesday, five have opened the brochure; two opened it several times.",
          "She calls those two first, offers the other three openers a second visit, and plans a gentle update for the rest when the next tower launches. This mirrors the pattern eCard describes for real estate: send the brochure with your card, see who opened it, and follow up in Marathi or Hindi on WhatsApp."
        ]
      },
    ],
    faqs: [
      { q: "Can I track more than one brochure?", a: "The site describes tracking PDF opens generally; limits per brochure aren’t stated. Storage depends on plan." },
      { q: "Is this only for realtors?", a: "No. Real estate is the documented example, but the workflow suits anyone who shares brochures." },
      { q: "How do I keep brochure versions straight?", a: "Put a version or month on the cover and in the file name, and replace the shared file when prices change." },
      { q: "Can I send the brochure by WhatsApp?", a: "Yes. You can share links over WhatsApp, and eCard tracks opens of PDFs and WhatsApp links." },
    ],
    related: ["features/link-tracking/pdf-engagement", "use-cases/real-estate", "features/events-expos/site-visits", "integrations/whatsapp"],
    source: "mixed",
  },
  {
    slug: "features/link-tracking/analytics-for-teams",
    category: "analytics",
    title: "Analytics For Teams",
    seoTitle: "Analytics For Teams: Shared Engagement Insights",
    description: "How sales and event teams can use eCard tracking together in one workspace, with roles, shared contacts and a simple weekly engagement review.",
    h1: "Team Analytics That Drive Action, Not Arguments",
    eyebrow: "Analytics & Tracking",
    intro: "When several people share cards and brochures, engagement data helps the team agree on who follows up with whom.",
    variant: "solution",
    visual: "team",
    icon: "users",
    sections: [
      {
        type: "prose",
        heading: "One Workspace, One View",
        paragraphs: [
          "eCard workspaces support roles (owner, admin, manager, member and scan-only guest) and an audit log. Sharing contacts in one workspace means opens are visible against the same relationship, not scattered across personal phones.",
          "eCard’s site doesn’t document per-user analytics breakdowns or team leaderboards, so check the app for what managers can see.",
        ],
      },
      {
        type: "steps",
        heading: "A Weekly Team Review",
        steps: [
          { title: "List Warm Contacts", body: "Anyone who opened a card or PDF without a reply." },
          { title: "Assign Owners", body: "One person per contact to avoid double follow-ups." },
          { title: "Share What Worked", body: "Which brochure or message got opens." },
        ],
      },
      {
        type: "table",
        heading: "Seats By Plan",
        headers: ["Plan", "Users", "Monthly price"],
        rows: [
          ["Free", "5", "₹0"],
          ["Starter", "20", "₹299"],
          ["Professional", "100", "₹999"],
          ["Business", "Unlimited", "₹2,999"],
          ["Enterprise", "Unlimited", "Custom"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coach, Don’t Police",
        body: "Use engagement data to share good practice. Teams adopt tools faster when analytics feels helpful rather than surveillant.",
      },
      {
        "type": "table",
        "heading": "Sample: who looks at what",
        "intro": "A fictional split of analytics duties in a team of eight.",
        "headers": [
          "Role",
          "Looks at",
          "Decides"
        ],
        "rows": [
          [
            "Owner",
            "Overall engagement by event",
            "Which shows to attend again"
          ],
          [
            "Manager",
            "Engaged contacts per member",
            "Who follows up with whom"
          ],
          [
            "Member",
            "Their own contacts’ opens",
            "Next action per contact"
          ],
          [
            "Scan-only guest",
            "Nothing beyond scanning",
            "No"
          ]
        ]
      },
      {
        "type": "steps",
        "heading": "Running a 20-minute team review",
        "steps": [
          {
            "title": "Start with outcomes",
            "body": "Replies and meetings booked since last week."
          },
          {
            "title": "Look at engagement",
            "body": "Contacts with repeated opens but no reply."
          },
          {
            "title": "Resolve ownership",
            "body": "Assign each engaged contact to one person."
          },
          {
            "title": "Share what worked",
            "body": "A subject line, a PDF, a WhatsApp phrasing in Hindi or Marathi."
          },
          {
            "title": "Close with actions",
            "body": "Each member leaves with three or four named follow-ups."
          }
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls",
        "items": [
          "Using opens to rank people: it rewards sending links, not building relationships.",
          "Two members following up on the same engaged contact.",
          "Letting the review drift into a status meeting with no actions."
        ]
      },
      {
        "type": "callout",
        "tone": "note",
        "title": "Permissions",
        "body": "eCard’s roles are owner, admin, manager, member and scan-only guest. Exactly which analytics each role can see isn’t documented on the site, so check in the app."
      },
      {
        "type": "prose",
        "heading": "Sample: a team learning from its own data",
        "paragraphs": [
          "Sample: a fictional six-person distribution team notices over two months that contacts who receive a two-page price list engage more than those who receive the full 30-page catalogue. They switch the default follow-up to the short version and keep the catalogue for people who ask.",
          "Nothing about this required complex analytics, just a consistent weekly review and a willingness to change one thing at a time."
        ]
      },

      {
        "type": "callout",
        "tone": "tip",
        "title": "Share wins, not rankings",
        "body": "End each team review by sharing one message or document that worked well, so everyone’s follow-up improves together."
      },
    ],
    faqs: [
      { q: "Can managers see each member’s link opens?", a: "Per-user analytics isn’t described on the public site; check the app and roles." },
      { q: "Is there an audit log?", a: "Yes. eCard workspaces have an audit log." },
      { q: "Does every member need to review analytics?", a: "Not necessarily. Many teams have one manager review weekly and share actions, which keeps everyone focused on follow-up." },
      { q: "Is there an audit log for team activity?", a: "Yes. eCard’s site lists an audit log for workspaces as part of its security features." },
      { q: "How many users can share analytics in one workspace?", a: "Free allows 5 users, Starter 20, Professional 100, and Business and Enterprise are unlimited." },

    ],
    related: ["platform/for-teams", "features/team-security/roles-and-permissions", "features/events-expos/team-at-expos", "features/link-tracking/dashboard"],
    source: "mixed",
  },
];
