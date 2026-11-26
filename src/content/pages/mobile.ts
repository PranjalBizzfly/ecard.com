import type { PageDef } from "../types";

export const pages: PageDef[] = [
  {
    slug: "mobile",
    category: "mobile",
    title: "Mobile Experience",
    seoTitle: "eCard On Mobile: Visiting-Card CRM In Your Browser",
    description: "eCard works in any phone browser with no app to install. Scan cards, share your digital card and follow up by WhatsApp or email from your phone.",
    h1: "Your Card CRM, In The Phone You Already Carry",
    eyebrow: "Mobile",
    intro: "eCard works in any phone browser, no app to install. Scan a card, share your own, and follow up before you leave the room.",
    variant: "feature",
    visual: "scan",
    icon: "smartphone",
    sections: [
      {
        type: "cards",
        heading: "What You Can Do From Your Phone",
        cards: [
          { title: "Scan Cards", body: "Photograph a card; the AI model you chose reads it and shows a confidence score per field.", icon: "scan" },
          { title: "Share Your Card", body: "Show your QR code or send a short link with Save-to-contacts.", icon: "qr" },
          { title: "WhatsApp Follow-up", body: "AI writes a message in English, Hindi or Marathi and opens WhatsApp in one tap.", icon: "message" },
          { title: "Intro Emails", body: "Preview the draft; it sends after 5 seconds from your own SMTP unless you edit or cancel.", icon: "mail" },
          { title: "Telegram Bot", body: "Send a photo to the bot and get Open and Send buttons back.", icon: "send" },
        ],
      },
      {
        type: "prose",
        heading: "Why Browser-first Works For Networking",
        paragraphs: [
          "The moment you collect a card is usually the moment you have the least time: a hallway, a booth, a site visit. Opening a browser tab you already use is faster than finding, installing and signing in to a new app.",
          "It also helps teams. Helpers at an event can start scanning from their own phones without an app-store install or device management.",
        ],
      },
      {
        type: "steps",
        heading: "Get Started On Your Phone",
        steps: [
          { title: "Open ecard.gg", body: "Sign up or sign in in your phone browser." },
          { title: "Add To Home Screen (Optional)", body: "Most mobile browsers let you add a shortcut for quick access." },
          { title: "Scan Your First Card", body: "Review the fields, then save." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "No Native App",
        body: "eCard’s site says it is browser-only. There is no app-store app to download.",
      },
      {
        "type": "table",
        "heading": "Which mobile route suits the moment?",
        "intro": "Two ways to capture a card from your phone, and when each fits.",
        "headers": [
          "Moment",
          "Phone browser",
          "Telegram bot"
        ],
        "rows": [
          [
            "Quiet desk or hotel room",
            "Best, review every field on a full screen",
            "Works, but you’ll review later anyway"
          ],
          [
            "Busy booth or hallway",
            "Fine if you can spare a minute",
            "Quickest. Send the photo and move on"
          ],
          [
            "Batch of cards at day’s end",
            "Good for scanning and reviewing together",
            "Good if you prefer chat"
          ],
          [
            "Sharing your own card",
            "Show QR or send short link",
            "Not the main use"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Sample: a day on the road",
        "paragraphs": [
          "Sample: Sana, a fictional medical-equipment rep, visits three hospitals in a day. At each stop she scans the purchase manager’s card in the phone browser while waiting at reception, and records a quick voice note in the car about what was discussed.",
          "Between visits, she taps to open an AI-written WhatsApp message in Hindi to one doctor who prefers it, and lets an intro email go out from her own mailbox to another after previewing it. By evening, every contact is saved with context, and she never opened a laptop."
        ]
      },
      {
        "type": "bullets",
        "heading": "Mobile pitfalls to avoid",
        "items": [
          "Low battery at the worst moment: scanning uses the camera and screen, so carry a power bank on event days.",
          "Rushing the review on a tiny screen; check low-confidence fields when you have a calm minute.",
          "Typing long emails on the phone: let the AI draft, then edit lightly.",
          "Forgetting to sign out on a borrowed or shared device."
        ]
      },
    ],
    faqs: [
      { q: "Is there an eCard app?", a: "No. eCard works in any phone browser, so there is nothing to install." },
      { q: "Can I try it free on mobile?", a: "Yes. The Free plan includes 50 scans a month, and new workspaces get a 14-day Professional trial with no card needed." },
      { q: "Can I use eCard on a tablet?", a: "eCard works in a browser, so a tablet browser is a reasonable option; the site specifically mentions phone browsers." },
      { q: "Does mobile use need a strong connection?", a: "Scanning sends a photo for the AI to read, so you need a connection. If the venue signal is weak, take photos and scan them when you’re back online." },
    ],
    related: ["mobile/scan-from-your-phone", "mobile/no-app-needed", "mobile/telegram-on-the-go", "platform/browser-based"],
    source: "verified",
  },
  {
    slug: "mobile/scan-from-your-phone",
    category: "mobile",
    title: "Scan From Your Phone",
    seoTitle: "Scan Visiting Cards From Your Phone Browser",
    description: "Scan visiting cards with your phone camera in the browser. eCard’s AI reads each field with a confidence score, and nothing saves until you review it.",
    h1: "Point, Shoot, Review, Save",
    eyebrow: "Mobile",
    intro: "Scanning in eCard starts with your phone camera and ends with a reviewed contact. Nothing is saved until you check it.",
    variant: "guide",
    visual: "extract",
    icon: "scan",
    sections: [
      {
        type: "steps",
        heading: "Scanning, Step By Step",
        steps: [
          { title: "Open eCard In Your Browser", body: "Sign in at ecard.gg on your phone." },
          { title: "Take A Photo Of The Card", body: "Fill the frame, avoid glare and keep the card flat." },
          { title: "Review The Fields", body: "Each field has a confidence score; check the low ones first." },
          { title: "Save And Follow Up", body: "Send an intro email or WhatsApp message straight away." },
        ],
      },
      {
        type: "bullets",
        heading: "Photo Tips For Better Results",
        intro: "General guidance that helps any card reader:",
        items: [
          "Use daylight or bright indoor light; avoid flash on glossy cards.",
          "Shoot straight on rather than at an angle.",
          "Place the card on a plain, contrasting surface.",
          "For two-sided cards, check whether the back holds extra details.",
        ],
      },
      {
        type: "split",
        heading: "What Happens Behind The Scenes",
        body: [
          "eCard reads the card with the AI model you choose (Claude, OpenAI, Gemini, DeepSeek or Grok) and you can bring your own key. A key pool with failover keeps scanning going if one key fails. Addresses are checked against Google Maps.",
        ],
        points: ["Your choice of AI model", "Confidence score per field", "Review before save", "Google Maps address check"],
      },
      {
        type: "table",
        heading: "Monthly Scans By Plan",
        headers: ["Plan", "Price / month", "Scans / month"],
        rows: [["Free", "₹0", "50"], ["Starter", "₹299", "1,000"], ["Professional", "₹999", "5,000"], ["Business", "₹2,999", "Unlimited"]],
      },
      {
        "type": "steps",
        "heading": "Sample: scanning a card at reception",
        "intro": "A fictional sales rep scanning a purchase manager’s card while waiting for a meeting.",
        "steps": [
          {
            "title": "Photograph the front",
            "body": "Flat surface, good light, card filling most of the frame."
          },
          {
            "title": "Check the fields",
            "body": "Name, title, company, phone, email, look at any with a low confidence score."
          },
          {
            "title": "Fix what’s wrong",
            "body": "Correct a misread digit or a merged name before saving."
          },
          {
            "title": "Add context",
            "body": "A quick note on where you met and what they need."
          },
          {
            "title": "Save",
            "body": "Nothing is stored until you confirm, so this step is yours."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Troubleshooting a poor scan",
        "headers": [
          "Problem",
          "Likely cause",
          "Fix"
        ],
        "rows": [
          [
            "Many low-confidence fields",
            "Blur or shadow",
            "Retake in brighter, even light"
          ],
          [
            "Wrong phone number",
            "Glare on glossy card",
            "Tilt the card slightly and retake"
          ],
          [
            "Address looks odd",
            "Unusual layout or abbreviations",
            "Check it, addresses are compared against Google Maps"
          ],
          [
            "Fields in the wrong place",
            "Decorative or vertical layout",
            "Correct manually during review"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Habits that keep data clean",
        "items": [
          "Scan the same day, memory fades faster than ink.",
          "Review every save; the AI is fast, but you know the person.",
          "Merge duplicates if a teammate scanned the same person."
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Scan where you sit down",
        "body": "If you collected cards standing up, wait until you’re seated with good light. A steadier hand gives sharper photos and fewer corrections."
      },
    ],
    faqs: [
      { q: "Do I need an app to scan?", a: "No. Scanning works in your phone browser." },
      { q: "What if the AI gets a field wrong?", a: "Nothing is saved until you review it, so you can correct any field first." },
      { q: "Can I scan by Telegram instead?", a: "Yes. Send a photo to the eCard Telegram bot after linking it from Settings → Telegram." },
      { q: "Which AI model reads my scan?", a: "The one you choose: Claude, OpenAI, Gemini, DeepSeek or Grok, with Azure and custom endpoints mentioned in eCard’s FAQ. You can bring your own key." },
      { q: "How many scans do I get each month?", a: "50 on Free, 1,000 on Starter, 5,000 on Professional, and unlimited on Business and Enterprise." },
    ],
    related: ["features/ai-card-scanning", "resources/guides/your-first-scan", "help/scanning", "mobile/telegram-on-the-go"],
    source: "mixed",
  },
  {
    slug: "mobile/share-your-card-on-mobile",
    category: "mobile",
    title: "Share Your Card On Mobile",
    seoTitle: "Share Your Digital Business Card From Your Phone",
    description: "Share your eCard digital business card from your phone by QR code or short link. Contacts tap Save-to-contacts, and you see clicks with bots filtered out.",
    h1: "Hand Over Your Card Without Paper",
    eyebrow: "Mobile",
    intro: "Your eCard digital card has a QR code, a Save-to-contacts button and a short link that counts clicks. All of it works from your phone.",
    variant: "guide",
    visual: "card",
    icon: "qr",
    sections: [
      {
        type: "cards",
        heading: "Three Ways To Share",
        cards: [
          { title: "QR Code", body: "Show it on your screen; the other person scans it with their camera.", icon: "qr" },
          { title: "Short Link", body: "Paste it into WhatsApp, email or a chat. Example path: /c/rahul.", icon: "link" },
          { title: "Save-to-contacts", body: "Recipients can add you to their phone contacts in a tap.", icon: "download" },
        ],
      },
      {
        type: "prose",
        heading: "No App On Either Side",
        paragraphs: [
          "Neither you nor the person you meet needs an app. They scan your QR code with their camera or tap your link, and your card opens in their browser.",
          "That matters when you meet people in a hurry, or on older phones where storage is tight.",
        ],
      },
      {
        type: "split",
        heading: "See Who Opened It",
        body: [
          "Short links count clicks with bots filtered out, and eCard’s link tracking shows opens of your card, PDFs and WhatsApp links. You get a sense of who is interested before you follow up.",
        ],
        points: ["Clicks counted", "Bots filtered out", "Card, PDF and WhatsApp link opens", "Premium templates"],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Keep A Paper Backup",
        body: "Some people still prefer paper. A small stack of printed cards with your QR code covers both.",
      },
      {
        "type": "table",
        "heading": "Choosing how to share in the moment",
        "headers": [
          "Situation",
          "Best way",
          "Why"
        ],
        "rows": [
          [
            "Face to face, both with phones",
            "Show your QR code",
            "They scan and save in seconds"
          ],
          [
            "After a call or video meeting",
            "Send your short link by WhatsApp or email",
            "They can open it any time"
          ],
          [
            "Group chat or community",
            "Post your short link",
            "Everyone gets the same current card"
          ],
          [
            "They prefer paper",
            "Hand a paper card with your QR printed on it",
            "Paper plus a digital route back to you"
          ]
        ]
      },
      {
        "type": "steps",
        "heading": "Sample: sharing at a meetup",
        "intro": "A fictional exchange between two founders.",
        "steps": [
          {
            "title": "Offer your QR",
            "body": "Sample: Vikram opens his card on his phone and turns the screen towards Aisha."
          },
          {
            "title": "She scans and saves",
            "body": "Her camera opens the card in the browser; she taps Save-to-contacts."
          },
          {
            "title": "Ask for hers",
            "body": "Aisha hands over a paper card; Vikram scans it into eCard."
          },
          {
            "title": "Both have context",
            "body": "Each now has the other’s details, no app installed on either phone."
          }
        ]
      },
      {
        "type": "bullets",
        "heading": "Make your mobile card work harder",
        "items": [
          "Keep the photo, title and phone number current; the link stays the same.",
          "Put the short link in your WhatsApp profile and email signature.",
          "Keep your QR easy to reach, a home-screen shortcut to your card saves fumbling.",
          "Check how the card looks on a small phone screen before an event."
        ]
      },
      {
        "type": "callout",
        "tone": "note",
        "title": "Nothing to install for them, either",
        "body": "The person receiving your card opens it in their own browser and can save it to their contacts. They don’t need eCard."
      },

    ],
    faqs: [
      { q: "Does the other person need eCard?", a: "No. Your card opens in any browser." },
      { q: "Is the digital card on the Free plan?", a: "Yes. The digital business card is part of the base feature set on every plan." },
      { q: "Can I see if someone opened my card after I shared it?", a: "Yes. eCard’s link tracking shows opens of your card, with bots filtered out of click counts." },
      { q: "Do templates look different on mobile?", a: "eCard offers premium templates for the digital card; preview yours on a phone to see how it renders." },

      { q: "Can I share my card without mobile data?", a: "The other person needs a connection to open your card link. If signal is poor, hand over a paper card with your QR so they can open it later." },
    ],
    related: ["features/digital-business-card", "resources/guides/creating-your-digital-card", "features/link-tracking", "mobile"],
    source: "verified",
  },
  {
    slug: "mobile/no-app-needed",
    category: "mobile",
    title: "No App Needed",
    seoTitle: "No App Needed: Why eCard Runs In The Browser",
    description: "eCard runs in any phone browser with no app to download. See why browser-based works for card scanning, sharing and team rollouts, plus its trade-offs.",
    h1: "Nothing To Install, Nothing To Update",
    eyebrow: "Mobile",
    intro: "eCard is browser-only by design. Open ecard.gg on any phone and you are ready to scan, share and follow up.",
    variant: "feature",
    visual: "none",
    icon: "globe",
    sections: [
      {
        type: "table",
        heading: "Browser Vs Native App, In General",
        intro: "General trade-offs, not a claim about any specific app.",
        headers: ["", "Browser-based", "Native app"],
        rows: [
          ["Install", "None", "App-store download"],
          ["Updates", "Automatic when you reload", "Depends on store updates"],
          ["Storage on phone", "Minimal", "Takes space"],
          ["Team rollout", "Share a link", "Each person installs"],
          ["Works on desktop too", "Yes, same site", "Separate app"],
        ],
      },
      {
        type: "bullets",
        heading: "Who Benefits Most",
        items: [
          "Event helpers using their own phones.",
          "Teams without mobile device management.",
          "People with older phones or limited storage.",
          "Anyone who switches between phone and laptop.",
        ],
      },
      {
        type: "prose",
        heading: "And The Card You Share",
        paragraphs: [
          "Your digital card is browser-based too. People you meet open it from a QR code or link and tap Save-to-contacts, no app on their side either.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Prefer A Chat App?",
        body: "You can also scan by sending a photo to the eCard Telegram bot, linked with a one-time code from Settings → Telegram.",
      },
      {
        "type": "steps",
        "heading": "Sample: rolling eCard out to a team in one afternoon",
        "intro": "A fictional ten-person sales team with mixed Android and iPhone handsets.",
        "steps": [
          {
            "title": "Send the link",
            "body": "The owner shares ecard.gg and invites members to the workspace."
          },
          {
            "title": "Sign in on phones",
            "body": "Each person opens it in their usual browser: no store, no approvals."
          },
          {
            "title": "Add a shortcut",
            "body": "Optionally add it to the home screen for one-tap access."
          },
          {
            "title": "Test scan",
            "body": "Everyone scans one colleague’s card to confirm it works."
          },
          {
            "title": "Set up security",
            "body": "Turn on 2FA with an authenticator app for each account."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Honest trade-offs of browser-only",
        "intro": "General considerations, not claims about eCard’s roadmap.",
        "headers": [
          "Consideration",
          "What it means for you"
        ],
        "rows": [
          [
            "No offline mode documented",
            "Plan for a connection when scanning; photos can wait in your camera roll"
          ],
          [
            "No app-store listing",
            "Share the web address instead of searching a store"
          ],
          [
            "Browser updates matter",
            "Keep your phone browser current for the best experience"
          ],
          [
            "Same experience on laptop",
            "Review and follow up on a bigger screen whenever you like"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Security on a browser-based tool",
        "intro": "Good general habits, plus eCard features from its site.",
        "items": [
          "Use 2FA with authenticator codes and keep your recovery codes somewhere safe.",
          "Only mark your own devices as trusted.",
          "Watch for login alerts and act on any you don’t recognise.",
          "Lock your phone with a PIN or biometrics, the browser session is only as safe as the device."
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Bookmark it properly",
        "body": "Add eCard to your home screen from your browser’s share or menu option. It gives you one-tap access that feels app-like, without installing anything."
      },
    ],
    faqs: [
      { q: "Will eCard release a mobile app?", a: "eCard’s site says it is browser-only and does not announce an app." },
      { q: "Which browsers work?", a: "eCard says it works in any phone browser. Keeping your browser updated is good practice." },
      { q: "Is a browser app less secure than a native app?", a: "Not inherently. Security depends on things like encryption and account protection; eCard lists 2FA, trusted devices, login alerts and AES-256-GCM encryption for API keys and SMTP passwords." },
      { q: "Can I use eCard on my laptop too?", a: "Yes. It’s the same website, so you can scan on your phone and follow up from a laptop browser." },
      { q: "Does browser-only mean fewer features on mobile?", a: "eCard’s site describes the same product on phone browsers: scanning, sharing your card and follow-up. Larger screens are simply more comfortable for long reviews." },
    ],
    related: ["platform/browser-based", "mobile", "mobile/share-your-card-on-mobile", "features/telegram-bot"],
    source: "mixed",
  },
  {
    slug: "mobile/telegram-on-the-go",
    category: "mobile",
    title: "Telegram On The Go",
    seoTitle: "Scan Cards On The Go With The eCard Telegram Bot",
    description: "Send a visiting-card photo to the eCard Telegram bot and the contact is saved, with Open and Send buttons in the chat. Link it via Settings → Telegram.",
    h1: "Snap A Card In Telegram And Keep Walking",
    eyebrow: "Mobile",
    intro: "If Telegram is already open on your phone, it can be the fastest way to scan. Send a card photo to the eCard bot and the contact is saved.",
    variant: "guide",
    visual: "telegram",
    icon: "send",
    sections: [
      {
        type: "steps",
        heading: "Link The Bot Once",
        steps: [
          { title: "Open Settings → Telegram", body: "In eCard, get a one-time code." },
          { title: "Message The Bot", body: "Send the code to link your account." },
          { title: "Send A Card Photo", body: "The contact is saved and the bot replies with Open and Send buttons." },
        ],
      },
      {
        type: "split",
        heading: "Why Telegram Is Handy On The Move",
        body: [
          "Chat apps are already open on most phones. Sending a photo takes a couple of seconds, which suits a busy expo floor or a walk between meetings.",
        ],
        points: ["Works from a chat you already use", "Open and Send buttons", "Part of every plan", "No extra app if you use Telegram"],
      },
      {
        type: "bullets",
        heading: "Tips For Event Days",
        items: [
          "Link Telegram before the event, not at the booth.",
          "Send photos one card at a time with good light.",
          "Tag the contacts with the event name later in eCard.",
          "Review saved contacts at the end of the day.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Need Help?",
        body: "If the bot does not respond, check that your account is linked under Settings → Telegram and see the Telegram help page.",
      },
      {
        "type": "steps",
        "heading": "Sample: linking the bot before a trip",
        "intro": "A fictional set-up the evening before travelling to a conference.",
        "steps": [
          {
            "title": "Open settings",
            "body": "In eCard, go to Settings → Telegram."
          },
          {
            "title": "Get the code",
            "body": "Copy the one-time code shown there."
          },
          {
            "title": "Message the bot",
            "body": "Open the eCard bot in Telegram and send the code to link your account."
          },
          {
            "title": "Test it",
            "body": "Send a photo of any card you have and check the contact is saved."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Telegram bot vs phone browser on the move",
        "headers": [
          "Need",
          "Telegram bot",
          "Phone browser"
        ],
        "rows": [
          [
            "Fastest capture",
            "Send a photo in a chat you already use",
            "Open the site and scan"
          ],
          [
            "Careful review",
            "Use Open to jump into the contact",
            "Review fields directly"
          ],
          [
            "Follow-up",
            "Use Send from the chat",
            "Email or WhatsApp from the contact"
          ],
          [
            "No Telegram account",
            "Not available",
            "Works on its own"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls",
        "items": [
          "Linking the bot to the wrong eCard account on a shared phone.",
          "Sending blurry photos in a hurry, a second spent framing saves a correction later.",
          "Forgetting to review contacts saved via the bot; check them the same evening."
        ]
      },
      {
        "type": "prose",
        "heading": "Sample: a train journey between meetings",
        "paragraphs": [
          "Sample: Imran, a fictional textile agent, collects four cards at a Surat market in the morning. On the train to his next appointment he sends each photo to the eCard bot; each contact is saved and the chat shows Open and Send buttons. He taps Open on one to add a note about the fabric sample he promised, and leaves the rest to review that evening."
        ]
      },
    ],
    faqs: [
      { q: "Is the Telegram bot on the Free plan?", a: "Yes. The Telegram bot is in the base feature set on every plan." },
      { q: "What does Send do?", a: "eCard’s site says the bot replies with Open and Send buttons in the chat. It does not describe each button in detail, so try them with a sample card." },
      { q: "Do I need the Telegram app installed?", a: "You need Telegram itself to chat with the bot. eCard doesn’t require any app of its own." },
      { q: "Can several team members use the bot?", a: "Each person links their own Telegram account with a one-time code from Settings → Telegram." },
      { q: "What does Open do in the chat?", a: "Open takes you to the saved contact in eCard, where you can review the fields and add context." },
    ],
    related: ["features/telegram-bot", "resources/guides/connecting-telegram", "help/telegram", "mobile/scan-from-your-phone"],
    source: "verified",
  },
];
