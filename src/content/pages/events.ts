import type { PageDef } from "../types";

export const pages: PageDef[] = [
  {
    slug: "features/events-expos",
    category: "events",
    title: "Events & Expos",
    seoTitle: "Events & Expos: Group Every Card From a Show",
    description: "Group every visiting card you collect at a trade show or expo in eCard, then follow up with the whole room at once instead of one card at a time.",
    h1: "Turn a stack of expo cards into one follow-up",
    eyebrow: "Events & Expos",
    intro: "Trade shows hand you dozens of cards in a few hours. eCard lets you group the cards from a show together and follow up with everyone at once, so the conversations you started at the booth don’t go cold.",
    variant: "feature",
    visual: "dashboard",
    icon: "calendar",
    sections: [
      {
        type: "prose",
        heading: "Why events need their own grouping",
        paragraphs: [
          "A visiting card collected at an expo carries context that a card handed over in a one-to-one meeting does not: everyone in the batch met you at the same place, during the same few days, usually hearing the same pitch. Treating them as one group makes the follow-up faster and more consistent.",
          "eCard’s homepage describes this directly: group the cards from a trade show and follow up with everyone at once. Contacts, tags and events are part of the base feature set on every plan, including Free.",
        ],
      },
      {
        type: "cards",
        heading: "What eCard brings to an event",
        cards: [
          { title: "AI scanning", body: "Each card is read by the AI model you choose, with a confidence score per field. Nothing is saved until you review it.", icon: "scan" },
          { title: "Event grouping", body: "Cards from one show sit together, so you can find and act on the whole batch.", icon: "layers" },
          { title: "Telegram on the floor", body: "Send a card photo to the eCard Telegram bot and the contact is saved, with Open and Send buttons in the chat.", icon: "send" },
          { title: "Follow-up channels", body: "Intro emails from your own SMTP mailbox and AI-written WhatsApp messages in English, Hindi or Marathi.", icon: "mail" },
        ],
      },
      {
        type: "steps",
        heading: "A typical flow",
        steps: [
          { title: "Scan as you go", body: "Capture cards in the phone browser or through Telegram between booth conversations." },
          { title: "Review and group", body: "Confirm the extracted fields and keep the batch grouped under the event." },
          { title: "Follow up with the room", body: "Reach the whole group while the show is still fresh in their minds." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "What the site doesn’t specify",
        body: "eCard’s public site does not document exactly how event screens are laid out or whether bulk messages are personalised per contact. Check inside the app for the current behaviour.",
      },
      {
        "type": "table",
        "heading": "Is event grouping worth it for your show?",
        "intro": "A quick way to decide how much structure a particular event deserves.",
        "headers": [
          "Situation",
          "Suggested approach",
          "Why"
        ],
        "rows": [
          [
            "Large trade show, 50+ cards",
            "Create an event, scan as you go, follow up with the group",
            "Volume makes sorting from memory unreliable"
          ],
          [
            "Two-day conference, 10–30 cards",
            "Create an event plus a few topic tags",
            "Fewer cards, but richer conversations worth labelling"
          ],
          [
            "Evening meetup, under 10 cards",
            "Optional event; tags may be enough",
            "Small batches are easy to handle one by one"
          ],
          [
            "Recurring monthly event",
            "One event per edition",
            "Lets you tell March attendees from April ones"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls to avoid",
        "intro": "Most event follow-ups fail for ordinary reasons, not technical ones.",
        "items": [
          "Leaving cards in a pocket until the flight home — scan the same day while you still remember the conversation.",
          "Saving extracted fields without reviewing them — the confidence score per field shows where to look twice.",
          "Sending one identical note to buyers, suppliers and job-seekers — split the group by intent before you write.",
          "Forgetting your own card — share your digital card or QR so visitors can reach you, too."
        ]
      },
    ],
    faqs: [
      { q: "Is event grouping available on the Free plan?", a: "Yes. Contacts, tags and events are listed in the base feature set that every plan includes." },
      { q: "Do I need to install an app at the expo?", a: "No. eCard works in any phone browser, and you can also scan through the Telegram bot." },
      { q: "How many cards can I scan for one show?", a: "Scans are limited per month by plan: 50 on Free, 1,000 on Starter, 5,000 on Professional and unlimited on Business and Enterprise." },
      { q: "Can I use eCard at events that aren’t trade shows?", a: "Yes. The same grouping works for conferences, meetups, workshops or site visits — anywhere you collect a batch of cards in one place." },
    ],
    related: ["features/events-expos/trade-show-workflow", "features/events-expos/follow-up-the-room", "use-cases/events-expos", "resources/guides/trade-show-playbook"],
    source: "mixed",
  },
  {
    slug: "features/events-expos/create-event",
    category: "events",
    title: "Create an Event",
    seoTitle: "Create an Event to Hold Your Show Contacts",
    description: "Set up an event in eCard before you arrive at an expo so every card you scan lands in the right group, ready for one follow-up afterwards.",
    h1: "Set up the event before the first handshake",
    eyebrow: "Events & Expos",
    intro: "The easiest time to organise expo contacts is before you collect them. Setting up an event in eCard first gives every scanned card an obvious home.",
    variant: "guide",
    visual: "dashboard",
    icon: "calendar",
    sections: [
      {
        type: "split",
        heading: "Why create the event first",
        body: [
          "If you wait until after the show, you end up sorting a mixed pile of contacts from memory. Creating the event up front means each scan is grouped while the context is still obvious.",
          "Events are part of eCard’s base feature set, alongside contacts and tags, so this works on every plan.",
        ],
        points: ["Less sorting after the show", "Cleaner follow-up lists", "Easy to tell show contacts from everyday ones"],
      },
      {
        type: "bullets",
        heading: "Details worth noting for each event",
        intro: "General good practice — record what will help you remember the conversations later:",
        items: [
          "The show name and edition, e.g. a sample “Sample: Build India Expo 2026”",
          "City and venue, which also helps natural-language search later",
          "Dates you attended",
          "Which colleagues were on the stand",
          "Your goal for the show: leads, partners, suppliers or hiring",
        ],
      },
      {
        type: "steps",
        heading: "Getting ready",
        steps: [
          { title: "Sign in on your phone", body: "eCard runs in any phone browser, so there is nothing to install before the trip." },
          { title: "Create the event", body: "Add it in the app with a clear, dated name. The public site doesn’t document the exact screen, so follow the in-app labels." },
          { title: "Brief your team", body: "Tell colleagues which event to use so their scans group together too." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Name events consistently",
        body: "Pick one format, such as “Show name – City – Year”, and stick to it. Consistent names make searching past events far easier.",
      },
      {
        "type": "steps",
        "heading": "Sample: setting up an event for a three-day expo",
        "intro": "A fictional walk-through showing the kind of decisions worth making up front.",
        "steps": [
          {
            "title": "Name it clearly",
            "body": "Sample: “Pune Packaging Expo — Mar 2027”. Include the city and month so it stays unambiguous next year."
          },
          {
            "title": "Decide your tags",
            "body": "Sample tags: buyer, distributor, supplier, press. Agree them with anyone scanning alongside you."
          },
          {
            "title": "Prepare a draft message",
            "body": "Write a short thank-you note now, so the first follow-up isn’t written at midnight after day three."
          },
          {
            "title": "Check your scan allowance",
            "body": "Estimate the cards you expect and compare it with your plan’s monthly scans."
          }
        ]
      },
      {
        "type": "bullets",
        "heading": "Naming conventions that age well",
        "items": [
          "Put the event name first and the date second, so similar shows sort together.",
          "Use one event per edition of a recurring show rather than reusing last year’s.",
          "Avoid internal jargon — a colleague reading the name in six months should know what it was.",
          "Keep booth numbers or hall names in a note, not the event name, so the name stays short."
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Create it from your phone",
        "body": "eCard runs in the phone browser, so you can set up the event in the taxi to the venue if you forgot to do it at your desk."
      },
    ],
    faqs: [
      { q: "Can I add contacts to an event later?", a: "eCard’s site says you can group cards from a show; it does not detail how regrouping works after the fact, so check the app." },
      { q: "Does creating events cost extra?", a: "No. Contacts, tags and events are in the base set on every plan." },
      { q: "Should I make separate events for each day of a show?", a: "Usually not. One event per show keeps follow-up simple; use tags if you need to tell days or halls apart." },
    ],
    related: ["features/events-expos", "features/events-expos/before-the-show", "features/events-expos/event-tagging", "features/events-expos/expo-checklist"],
    source: "mixed",
  },
  {
    slug: "features/events-expos/group-contacts",
    category: "events",
    title: "Group Contacts by Event",
    seoTitle: "Group Contacts by Event in Your Card CRM",
    description: "Keep every contact from a trade show, conference or meetup together in eCard so you can review, search and follow up with the group as a whole.",
    h1: "One event, one tidy group of contacts",
    eyebrow: "Events & Expos",
    intro: "Grouping contacts by the event where you met them turns a long contact list into meaningful batches you can actually act on.",
    variant: "feature",
    visual: "dashboard",
    icon: "users",
    sections: [
      {
        type: "prose",
        heading: "Context is the point",
        paragraphs: [
          "“Where did I meet this person?” is the first question most people ask when they look at an old visiting card. Grouping by event answers it permanently.",
          "eCard groups the cards from a trade show so you can follow up with everyone at once. Combined with meeting memory — where you met, who introduced you, voice notes and a searchable AI summary — each contact keeps its story.",
        ],
      },
      {
        type: "table",
        heading: "Grouping options at a glance",
        intro: "Events work best alongside the other organising tools eCard lists:",
        headers: ["Tool", "Best for", "Example (sample)"],
        rows: [
          ["Event", "Everyone met at one show", "Sample: Pune Auto Expo"],
          ["Tag", "Cross-cutting labels", "Sample: hot-lead, supplier"],
          ["Meeting memory", "Per-person context", "Sample: introduced by Anil"],
          ["Natural-language search", "Ad-hoc questions", "“Investors I met in Mumbai last month”"],
        ],
      },
      {
        type: "bullets",
        heading: "What grouping helps with",
        items: [
          "Sending one follow-up to the whole room",
          "Reviewing how many people you met at each show",
          "Handing a show’s contacts to a colleague",
          "Exporting a batch through bulk export",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not documented publicly",
        body: "Whether a contact can belong to several events at once isn’t stated on eCard’s site. Use tags for overlapping labels if you’re unsure.",
      },
      {
        "type": "prose",
        "heading": "Sample scenario: one week, three events",
        "paragraphs": [
          "Sample: Arjun, a fictional packaging supplier, attends a trade fair on Monday, a chamber-of-commerce breakfast on Wednesday and a customer site visit on Friday. Without grouping, by Saturday he has about forty new contacts in one long list and can’t remember who asked for a quote.",
          "With each batch grouped under its own event, he can open the trade-fair group first because it holds the most buyers, send the breakfast group a lighter note, and handle the single site-visit contact personally. The contacts are the same; the order and tone of follow-up are now obvious."
        ]
      },
      {
        "type": "table",
        "heading": "Events vs tags vs search",
        "intro": "Three ways to slice the same contacts — each answers a different question.",
        "headers": [
          "Tool",
          "Best answers",
          "Example question"
        ],
        "rows": [
          [
            "Event",
            "Where and when did I meet them?",
            "Everyone from the Mumbai expo"
          ],
          [
            "Tag",
            "What kind of contact is this?",
            "All distributors, across every show"
          ],
          [
            "Natural-language search",
            "Ad-hoc questions mixing both",
            "“Investors I met in Mumbai last month”"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Common grouping mistakes",
        "items": [
          "Creating a new event for every hall or day, which splits one show into fragments.",
          "Using events to mean contact type — that is what tags are for.",
          "Leaving everyday contacts in an event group, which muddies the show’s follow-up list."
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Group first, then clean",
        "body": "Once a batch is grouped, run duplicate merge on it before sending anything — teammates often scan the same visitor."
      },
    ],
    faqs: [
      { q: "Can I search within an event?", a: "eCard offers natural-language search such as “Investors I met in Mumbai last month”. How search combines with event filters isn’t detailed publicly." },
      { q: "Can I export an event’s contacts?", a: "Bulk import and export are in the base feature set. Check the app for event-level export options." },
      { q: "Can a contact belong to more than one context?", a: "A contact keeps its event context, and you can add as many tags as you like to describe it further. Check the app for how multiple events per contact are handled." },

    ],
    related: ["features/events-expos/event-tagging", "features/contact-management/tags", "features/contact-management/natural-language-search", "features/events-expos/follow-up-the-room"],
    source: "mixed",
  },
  {
    slug: "features/events-expos/follow-up-the-room",
    category: "events",
    title: "Follow Up with the Room",
    seoTitle: "Follow Up With Everyone You Met at a Show",
    description: "After an expo, reach every contact from the event at once with eCard, using intro emails from your own mailbox or AI-written WhatsApp messages.",
    h1: "Follow up with everyone you met — at once",
    eyebrow: "Events & Expos",
    intro: "Most expo leads are lost in the week after the show. eCard is built to let you follow up with everyone from an event at once, while they still remember your stand.",
    variant: "feature",
    visual: "email",
    icon: "send",
    sections: [
      {
        type: "cards",
        heading: "Channels you can use",
        cards: [
          { title: "Intro email", body: "Preview the AI draft; it sends after 5 seconds from your own SMTP mailbox, and you can edit or cancel it.", icon: "mail" },
          { title: "WhatsApp", body: "AI writes a message in English, Hindi or Marathi and opens it in WhatsApp in one tap.", icon: "message" },
          { title: "Your digital card", body: "Share your card with QR, Save-to-contacts and short links that count clicks.", icon: "card" },
        ],
      },
      {
        type: "prose",
        heading: "Timing matters",
        paragraphs: [
          "General guidance from sales teams: a first touch within 24–48 hours of meeting gets noticeably more replies than one sent a week later. At a multi-day expo, sending a short note the same evening is even better.",
          "Because eCard keeps the show’s contacts together, the follow-up is one task rather than fifty.",
        ],
      },
      {
        type: "bullets",
        heading: "What a good room-wide message includes",
        items: [
          "The show name, so they place you instantly",
          "One line on what you discussed or demonstrated",
          "A single clear next step: a call, a brochure, a quote",
          "Your digital card link so they can save your details",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Check personalisation in the app",
        body: "eCard’s site says you can follow up with everyone at once. It doesn’t specify how each message is personalised in bulk, so preview before you send.",
      },
      {
        "type": "steps",
        "heading": "Sample: splitting one room into three messages",
        "intro": "A fictional expo batch of 60 contacts, divided by intent before anyone is messaged.",
        "steps": [
          {
            "title": "Hot buyers (8)",
            "body": "A personal email referencing the product they asked about, plus an offer to call this week."
          },
          {
            "title": "Interested browsers (35)",
            "body": "A short thank-you with your digital card and brochure link, so they can come back when ready."
          },
          {
            "title": "Suppliers and others (17)",
            "body": "A brief, friendly note — or none at all if there was no real conversation."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "Writing a group message that doesn’t feel like a broadcast",
        "paragraphs": [
          "Name the event in the first line. People met dozens of exhibitors; “Great to meet you at the Bengaluru Food Expo on Thursday” instantly places you.",
          "Make one clear ask. A brochure, a call slot or a reply with their requirement — not all three. Shorter notes get read on a phone between sessions.",
          "Use the context you captured. If meeting memory holds a voice note about a contact’s project, mention it — that one line is what separates a follow-up from spam."
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls",
        "items": [
          "Sending before you’ve merged duplicates collected by teammates, so one person gets two emails.",
          "Waiting a fortnight — the room has moved on by then.",
          "Following up only by email when the conversation happened in Hindi or Marathi; WhatsApp in their language may land better."
        ]
      },
    ],
    faqs: [
      { q: "Which mailbox do emails come from?", a: "Your own, via SMTP — for example Gmail, Outlook, Zoho, SendGrid, Brevo, Mailgun, Amazon SES, Resend or any SMTP host." },
      { q: "Can I stop an email after it’s queued?", a: "Yes. The intro email sends after 5 seconds and you can edit or cancel it before then." },
      { q: "Which WhatsApp languages are supported?", a: "English, Hindi and Marathi." },
      { q: "Should everyone from the show get the same message?", a: "Rarely. Splitting the group by intent with tags, then writing two or three versions, usually works better than one generic note." },
    ],
    related: ["features/events-expos/after-the-show", "features/outreach", "platform/follow-up-engine", "resources/guides/follow-up-playbook"],
    source: "mixed",
  },
  {
    slug: "features/events-expos/trade-show-workflow",
    category: "events",
    title: "Trade-Show Workflow",
    seoTitle: "A Trade-Show Workflow From Booth to Follow-Up",
    description: "A practical trade-show workflow with eCard: prepare the event, scan cards at the booth, review the data and follow up with the room after the show.",
    h1: "The trade-show workflow, end to end",
    eyebrow: "Events & Expos",
    intro: "A show is three jobs — preparing, capturing and following up. Here’s how they fit together when eCard holds the contacts.",
    variant: "guide",
    visual: "scan",
    icon: "briefcase",
    sections: [
      {
        type: "steps",
        heading: "Five stages",
        steps: [
          { title: "Plan", body: "Set goals, create the event in eCard and agree on tags with your team." },
          { title: "Capture", body: "Scan cards in the phone browser or send photos to the Telegram bot between conversations." },
          { title: "Annotate", body: "Add meeting memory — a voice note or a line on what was discussed — while it’s fresh." },
          { title: "Review", body: "Check AI-extracted fields and confidence scores; nothing is saved until you review." },
          { title: "Follow up", body: "Reach the whole event group by email or WhatsApp." },
        ],
      },
      {
        type: "table",
        heading: "Who does what",
        intro: "A sample split for a small stand team, using eCard’s listed roles:",
        headers: ["Person (sample)", "Role", "Job at the show"],
        rows: [
          ["Sample: Meera", "Manager", "Owns the event and the follow-up"],
          ["Sample: Arjun", "Member", "Scans and annotates"],
          ["Sample: temp staff", "Scan-only guest", "Captures cards only"],
        ],
      },
      {
        type: "prose",
        heading: "Keep the capture step light",
        paragraphs: [
          "At a busy booth, every second you spend typing is a visitor you aren’t talking to. Snapping a photo and moving on, then reviewing later in quieter moments, keeps the stand productive.",
          "eCard checks addresses against Google Maps and attaches a confidence score to each field, which makes the later review quicker.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Review the same day",
        body: "Spend fifteen minutes each evening reviewing the day’s scans. Small fixes are easy when you still remember the faces.",
      },
      {
        "type": "table",
        "heading": "Sample timeline for a two-day show",
        "intro": "A fictional schedule you can adapt — the exact days matter less than having one.",
        "headers": [
          "When",
          "Task",
          "Owner"
        ],
        "rows": [
          [
            "Day −7",
            "Create the event, agree tags, invite scan-only guests",
            "Owner or admin"
          ],
          [
            "Day −1",
            "Test a scan in the phone browser and link the Telegram bot",
            "Everyone scanning"
          ],
          [
            "Show days",
            "Scan every card between conversations; add a voice note for key ones",
            "Booth staff"
          ],
          [
            "Evening of each day",
            "Review low-confidence fields, add intent tags",
            "Lead or manager"
          ],
          [
            "Day +1 to +3",
            "Send intro emails and WhatsApp messages by segment",
            "Assigned members"
          ],
          [
            "Day +7",
            "Check opens, call engaged contacts, archive dead ends",
            "Manager"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Where workflows usually break",
        "items": [
          "Capture: staff collect cards in a bowl to scan “later”, and later never comes. Make scanning part of each conversation’s close.",
          "Review: nobody owns the evening review, so wrong phone numbers slip through. Name one person.",
          "Hand-off: leads aren’t assigned, so two people email the same buyer or nobody does.",
          "Measurement: no one checks link opens, so warm contacts get the same treatment as cold ones."
        ]
      },
      {
        "type": "callout",
        "tone": "note",
        "title": "Adapt to your team size",
        "body": "A solo exhibitor can collapse the whole workflow into one person; a ten-person stand benefits from splitting capture, review and follow-up across roles."
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Write the workflow on one page",
        "body": "Share a single page with your stand team listing each stage and its owner. People follow a process they can see."
      },

    ],
    faqs: [
      { q: "Can temporary staff scan without seeing all contacts?", a: "eCard lists a scan-only guest role. The exact permissions aren’t detailed publicly, so verify in the app." },
      { q: "Does scanning need a strong connection?", a: "eCard is browser-based. The site doesn’t describe offline behaviour, so plan for a mobile data connection." },
      { q: "How soon after the show should follow-up start?", a: "As general guidance, within one to three working days, while visitors still remember your stand." },

      { q: "Does a solo exhibitor need all five stages?", a: "Yes, but one person can do them all — the stages are about order, not headcount." },
    ],
    related: ["features/events-expos/before-the-show", "features/events-expos/at-the-booth", "features/events-expos/after-the-show", "resources/guides/trade-show-playbook"],
    source: "mixed",
  },
  {
    slug: "features/events-expos/before-the-show",
    category: "events",
    title: "Before the Show",
    seoTitle: "Before the Show: Expo Prep for Card Capture",
    description: "Prepare for an expo before you travel: set goals, create the event in eCard, test scanning on your phone and agree on tags with the stand team.",
    h1: "Prepare well and the follow-up writes itself",
    eyebrow: "Events & Expos",
    intro: "Most of a show’s results are decided before the doors open. A little preparation in eCard and with your team pays off for weeks afterwards.",
    variant: "guide",
    visual: "dashboard",
    icon: "clock",
    sections: [
      {
        type: "bullets",
        heading: "Two weeks out",
        items: [
          "Decide the goal: number of qualified conversations, partners or suppliers",
          "Book meetings with known prospects in advance",
          "Refresh your digital card so the QR code on your stand points to current details",
          "Check your plan’s monthly scan allowance against the crowd you expect",
        ],
      },
      {
        type: "steps",
        heading: "The day before",
        steps: [
          { title: "Create the event", body: "Give it a clear name so every scan has a home." },
          { title: "Test a scan", body: "Scan one card on the phone you’ll use, in the phone browser, to confirm sign-in and camera access." },
          { title: "Link Telegram", body: "If you prefer the bot, link it with the one-time code from Settings → Telegram." },
          { title: "Agree on tags", body: "Settle on a short tag list, such as hot, warm and supplier." },
        ],
      },
      {
        type: "split",
        heading: "Prepare your follow-up now",
        body: [
          "Draft the gist of your post-show message before you leave. You’ll be tired afterwards, and a ready outline means you send it on time.",
          "eCard’s AI drafts intro emails and WhatsApp messages, but deciding the offer and the next step is your job.",
        ],
        points: ["One clear call to action", "A link to your digital card", "A brochure or catalogue ready to share"],
      },
      {
        type: "callout",
        tone: "info",
        title: "Scan limits",
        body: "Monthly scans: Free 50, Starter 1,000, Professional 5,000, Business and Enterprise unlimited. New workspaces get a 14-day Professional trial with no card needed.",
      },
      {
        "type": "bullets",
        "heading": "Assets to prepare and link",
        "intro": "Things a visitor might ask for — have them ready to share as links before you travel.",
        "items": [
          "Your digital card with an up-to-date photo, title and phone number.",
          "A printed QR code on the stand or table tent pointing to the card.",
          "A current product brochure or price sheet as a PDF you can share and track.",
          "A one-line description of what you’re offering at this show specifically."
        ]
      },
      {
        "type": "prose",
        "heading": "Sample: a pre-show message to existing contacts",
        "paragraphs": [
          "Sample: “Hi Meera, we’ll be at stand B-14 at the Chennai Textile Expo next Thursday and Friday, showing our new dye range. If you’re visiting, drop by — here’s my card in case you need directions.” Short, specific and useful.",
          "Send it to a filtered list — perhaps contacts tagged with the region or industry — rather than your whole address book."
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Do a dry-run scan",
        "body": "Scan a colleague’s card in the venue city the day before. It confirms your login, phone camera and AI key all work before the crowd arrives."
      },
      {
        "type": "callout",
        "tone": "note",
        "title": "Check your scan allowance early",
        "body": "If you expect more cards than your plan’s monthly scans, the 14-day Professional trial with no card needed can cover a single show; plan the dates so it overlaps."
      },
    ],
    faqs: [
      { q: "Can I try eCard before a show without paying?", a: "Yes. The Free plan costs ₹0, and new workspaces get a 14-day Professional trial with no card needed." },
      { q: "Do my teammates need accounts?", a: "Users per workspace depend on plan: 5 on Free, 20 on Starter, 100 on Professional, unlimited on Business and Enterprise." },
      { q: "What should I check on my phone before the show?", a: "That you can sign in to eCard in the phone browser, the camera works for a test scan, and the Telegram bot is linked if you plan to use it." },

    ],
    related: ["features/events-expos/create-event", "features/events-expos/expo-checklist", "features/events-expos/at-the-booth", "features/digital-business-card/qr-code"],
    source: "mixed",
  },
  {
    slug: "features/events-expos/at-the-booth",
    category: "events",
    title: "At the Booth",
    seoTitle: "At the Booth: Capture Cards Without Slowing Down",
    description: "Capture visiting cards at your expo booth quickly with eCard’s phone-browser scanning or Telegram bot, and note context before the next visitor arrives.",
    h1: "Capture every card without leaving the conversation",
    eyebrow: "Events & Expos",
    intro: "At the booth, speed wins. The aim is to capture the card and one line of context in seconds, then get back to the next visitor.",
    variant: "guide",
    visual: "telegram",
    icon: "scan",
    sections: [
      {
        type: "cards",
        heading: "Two quick ways to capture",
        cards: [
          { title: "Phone browser", body: "Open eCard in your phone browser and scan. No app to install.", icon: "smartphone" },
          { title: "Telegram bot", body: "Send a photo to the bot; the contact is saved with Open and Send buttons in the chat.", icon: "send" },
          { title: "Your QR code", body: "Let visitors scan your digital card’s QR code to save your details.", icon: "qr" },
        ],
      },
      {
        type: "bullets",
        heading: "Booth habits that work",
        intro: "General advice from experienced exhibitors:",
        items: [
          "Photograph the card while the visitor is still with you — it signals you’ll follow up",
          "Say a one-line voice note on what they need",
          "Mark obvious hot leads immediately",
          "Hand back the card if they only brought one",
          "Keep a power bank on the stand",
        ],
      },
      {
        type: "prose",
        heading: "Use meeting memory",
        paragraphs: [
          "eCard’s meeting memory records where you met, who introduced you and voice notes, and produces a searchable AI summary. At a booth, a ten-second voice note is often the only context you’ll have later.",
          "Fields are scored for confidence and nothing is saved until you review it, so you can capture fast and check later.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Quiet moments are review time",
        body: "Use lulls in foot traffic to review a few scans at a time rather than leaving a hundred for the hotel room.",
      },
      {
        "type": "steps",
        "heading": "A 30-second capture routine",
        "intro": "Sample sequence for the end of each booth conversation.",
        "steps": [
          {
            "title": "Ask for the card",
            "body": "Offer your QR in return so the exchange feels mutual."
          },
          {
            "title": "Photograph it",
            "body": "In the phone browser or by sending the photo to the Telegram bot."
          },
          {
            "title": "Add one line of context",
            "body": "A quick voice note: what they want and what you promised."
          },
          {
            "title": "Tag the intent",
            "body": "Hot, warm or info-only — you can refine it in the evening review."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Busy booth vs quiet booth",
        "headers": [
          "Moment",
          "What to do"
        ],
        "rows": [
          [
            "Queue at the stand",
            "Photograph cards quickly via Telegram; leave review for later"
          ],
          [
            "Quiet afternoon",
            "Review the morning’s low-confidence fields and fix them"
          ],
          [
            "A visitor without a card",
            "Show your QR code so they can save your contact; note their details in a voice memo"
          ],
          [
            "Weak venue signal",
            "Keep photos in your camera roll and scan them when you’re back on Wi-Fi"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls on the floor",
        "items": [
          "Scanning glossy cards under spotlights — tilt the card to avoid glare.",
          "Promising a quote and not noting it — the voice note is your memory.",
          "Letting the phone battery die by noon — carry a power bank."
        ]
      },
      {
        "type": "callout",
        "tone": "note",
        "title": "Review fields later, not mid-conversation",
        "body": "Eye contact matters more than perfect data at the stand. Capture now; nothing is saved until you review it, so check fields in a quiet moment."
      },
    ],
    faqs: [
      { q: "Can I scan both sides of a card?", a: "eCard has a front-and-back scanning page; check that guide and the app for how two-sided cards are handled." },
      { q: "Is the Telegram bot faster than the browser?", a: "It depends on preference. The bot is convenient if Telegram is already open; both save contacts to eCard." },
      { q: "What if a visitor doesn’t have a card?", a: "Let them scan your QR code to open your digital card, and record their details in a quick note so you can add them later." },

    ],
    related: ["features/events-expos/before-the-show", "features/events-expos/after-the-show", "features/telegram-bot", "features/meeting-memory"],
    source: "mixed",
  },
  {
    slug: "features/events-expos/after-the-show",
    category: "events",
    title: "After the Show",
    seoTitle: "After the Show: Review, Sort and Follow Up",
    description: "What to do after an expo: review scanned cards in eCard, sort leads by priority and follow up with the whole event group by email or WhatsApp.",
    h1: "The 72 hours after the show",
    eyebrow: "Events & Expos",
    intro: "The show ends; the real work starts. A short, disciplined post-show routine turns captured cards into conversations.",
    variant: "guide",
    visual: "email",
    icon: "check",
    sections: [
      {
        type: "steps",
        heading: "Day by day",
        steps: [
          { title: "Day 0 evening", body: "Finish reviewing scans. Fix low-confidence fields and merge duplicates." },
          { title: "Day 1", body: "Follow up with the whole event group with a short thank-you and next step." },
          { title: "Day 2", body: "Personal messages to hot leads — on WhatsApp in English, Hindi or Marathi if that’s how they prefer to talk." },
          { title: "Day 3", body: "Check who opened your card, PDFs and WhatsApp links, and prioritise accordingly." },
        ],
      },
      {
        type: "table",
        heading: "Sort leads by intent",
        intro: "A simple, general triage model:",
        headers: ["Bucket", "Signal", "Next action"],
        rows: [
          ["Hot", "Asked for a quote or demo", "Personal message within 24 hours"],
          ["Warm", "Took a brochure, showed interest", "Group follow-up, then check engagement"],
          ["Cold", "Card swap only", "Group follow-up, revisit later"],
          ["Not a lead", "Vendors, other exhibitors", "Tag or archive"],
        ],
      },
      {
        type: "prose",
        heading: "Keep the data clean",
        paragraphs: [
          "After a show you’ll often find the same person scanned twice by two teammates. eCard’s duplicate merge, blacklist and archive tools help keep the list honest before you send anything.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Engagement isn’t intent",
        body: "An opened link is a useful signal, not a promise to buy. Use it to prioritise, not to pressure.",
      },
      {
        "type": "steps",
        "heading": "Sample: a five-day post-show plan",
        "intro": "A fictional plan for a solo exhibitor with about 70 cards.",
        "steps": [
          {
            "title": "Day 1",
            "body": "Review every scan, fix low-confidence fields, merge duplicates and tag intent."
          },
          {
            "title": "Day 2",
            "body": "Send personal emails to hot leads from your own mailbox; preview and edit each AI draft."
          },
          {
            "title": "Day 3",
            "body": "Send the warm group a thank-you with your card and brochure link."
          },
          {
            "title": "Day 4",
            "body": "Check which links were opened; message engaged contacts on WhatsApp in their language."
          },
          {
            "title": "Day 5",
            "body": "Call the most engaged contacts and archive cards with no real conversation behind them."
          }
        ]
      },
      {
        "type": "bullets",
        "heading": "Post-show pitfalls",
        "items": [
          "Messaging before cleaning the data, so a wrong email bounces or a duplicate gets two notes.",
          "Treating a brochure open as a buying signal on its own — pair it with what they said at the stand.",
          "Forgetting the contacts who said “not now”; a tag with a month helps you return to them.",
          "Keeping clearly irrelevant contacts — archive them so they don’t clutter future searches."
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Write down what you learned",
        "body": "Before the show fades, add a short note on what visitors asked about most. It will shape next year’s stand and pre-show message."
      },
      {
        "type": "prose",
        "heading": "Sample: reviving a quiet lead",
        "paragraphs": [
          "Sample: a fictional buyer from a Hyderabad expo hasn’t replied to the first email after a week, but the price list shows two opens. Rather than resending the same note, a short WhatsApp message in their language asking one question — “Would a call on Thursday help?” — gives them an easy way to reply."
        ]
      },
    ],
    faqs: [
      { q: "How do I know who looked at my brochure?", a: "eCard’s link tracking shows opens of your card, PDFs and WhatsApp links." },
      { q: "What about duplicates from teammates?", a: "eCard lists duplicate merge among its clean-data tools." },
      { q: "What should I do with contacts who aren’t a fit?", a: "Archive them, or use the blacklist for anyone who should never be contacted, so your active lists stay focused." },
      { q: "How long should I keep following up after a show?", a: "As general guidance, two or three thoughtful touches over a few weeks, then park the contact with a revisit tag rather than chasing indefinitely." },
    ],
    related: ["features/events-expos/follow-up-the-room", "features/events-expos/lead-tracking", "features/link-tracking", "features/contact-management/duplicate-merge"],
    source: "mixed",
  },
  {
    slug: "features/events-expos/lead-tracking",
    category: "events",
    title: "Lead Tracking",
    seoTitle: "Track Expo Leads From Card to Conversation",
    description: "Track expo leads in eCard using event groups, tags and link-open signals, so you know which visitors to call first after the show.",
    h1: "Know which expo leads are moving",
    eyebrow: "Events & Expos",
    intro: "A card in your CRM isn’t a lead until you know what happens next. eCard combines event grouping, tags and link tracking to show you where to spend time.",
    variant: "feature",
    visual: "analytics",
    icon: "chart",
    sections: [
      {
        type: "cards",
        heading: "Signals available in eCard",
        cards: [
          { title: "Event", body: "Which show the contact came from.", icon: "calendar" },
          { title: "Tags", body: "Your own labels, such as hot, distributor or follow up in March.", icon: "tag" },
          { title: "Link opens", body: "Opens of your card, PDFs and WhatsApp links.", icon: "eye" },
          { title: "Meeting memory", body: "Voice notes and a searchable AI summary of what was said.", icon: "mic" },
        ],
      },
      {
        type: "prose",
        heading: "A lightweight pipeline",
        paragraphs: [
          "You don’t need a heavy sales CRM to work a show’s leads. Many small teams track three stages with tags — contacted, replied, meeting booked — and review them weekly.",
          "eCard’s site doesn’t describe deal stages or pipelines, so treat tags as your stage markers.",
        ],
      },
      {
        type: "bullets",
        heading: "Weekly lead review",
        items: [
          "Who opened your brochure but hasn’t replied?",
          "Which hot leads have no follow-up yet?",
          "Which tags are growing or shrinking?",
          "Who should be archived?",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Need data elsewhere?",
        body: "On Professional and above, webhooks send signed events for every new contact, which you can route into another system.",
      },
      {
        "type": "table",
        "heading": "Sample tag-based stages",
        "intro": "eCard’s site doesn’t describe a pipeline, so this is one way to use your own tags as stages.",
        "headers": [
          "Tag",
          "Means",
          "Next action"
        ],
        "rows": [
          [
            "new",
            "Scanned and reviewed, not yet contacted",
            "Send first follow-up"
          ],
          [
            "contacted",
            "First email or WhatsApp sent",
            "Watch for opens and replies"
          ],
          [
            "engaged",
            "Opened links or replied",
            "Call or propose a meeting"
          ],
          [
            "meeting",
            "Call or visit booked",
            "Prepare using meeting memory"
          ],
          [
            "parked",
            "Not now, revisit later",
            "Add a month tag, e.g. revisit-jun"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Sample: reading one lead’s trail",
        "paragraphs": [
          "Sample: Kavita Rao, a fictional distributor, was scanned at a Delhi expo and tagged hot. Two days later she opened the price-list PDF twice and the card once, but hasn’t replied. Her voice note says she’s comparing three suppliers before month-end.",
          "That combination suggests a short, direct call before month-end, not another generic email. Lead tracking is about stitching these clues together rather than reading any single number."
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls",
        "items": [
          "Too many stages — five is plenty for most small teams.",
          "Stage tags that nobody updates; make updating part of the weekly review.",
          "Chasing opens from contacts who were clearly not buyers at the stand."
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Review on a fixed day",
        "body": "Pick one day a week for the lead review — the same day each week — and move every show lead to a new stage or explicitly leave it. Leads that sit untouched for three reviews probably belong in parked."
      },
    ],
    faqs: [
      { q: "Does eCard have deal stages?", a: "The public site doesn’t mention deal stages. Tags are a practical way to mark progress." },
      { q: "Which plans include webhooks?", a: "Professional (₹999/month), Business (₹2,999/month) and Enterprise." },
      { q: "Can I see all engaged leads from one show at once?", a: "Combine the event with your stage tag — or ask natural-language search — to pull that list. Exact filtering options are best checked in the app." },
      { q: "Can I send expo leads to another system?", a: "On Professional and above, webhooks send signed events for every new contact, which you can route elsewhere. eCard’s site does not document field-level mapping, so check in-app settings." },
      { q: "Does eCard score leads automatically?", a: "The public site doesn’t describe lead scoring. Use link opens, tags and your notes together to judge priority." },
    ],
    related: ["features/events-expos/event-tagging", "features/link-tracking/engagement-signals", "features/contact-management/tags", "integrations/webhooks"],
    source: "mixed",
  },
  {
    slug: "features/events-expos/event-tagging",
    category: "events",
    title: "Event Tagging",
    seoTitle: "Event Tagging: Label Show Contacts Clearly",
    description: "Use tags with events in eCard to label expo contacts by interest, city or intent, so you can slice one show’s list into targeted follow-ups.",
    h1: "Tags turn one event into many useful lists",
    eyebrow: "Events & Expos",
    intro: "An event tells you where you met someone. Tags tell you what to do about it. Used together, they turn a big show list into targeted follow-ups.",
    variant: "guide",
    visual: "dashboard",
    icon: "tag",
    sections: [
      {
        type: "table",
        heading: "A sample tag scheme",
        headers: ["Tag type", "Sample tags", "Used for"],
        rows: [
          ["Intent", "hot, warm, info-only", "Prioritising follow-up"],
          ["Relationship", "buyer, distributor, supplier, press", "Choosing the message"],
          ["City", "mumbai, pune, delhi", "Planning visits"],
          ["Product", "product-a, product-b", "Sending the right brochure"],
        ],
      },
      {
        type: "bullets",
        heading: "Rules that keep tags useful",
        items: [
          "Keep the list short — ten tags beat fifty",
          "Use lower case and one spelling",
          "Agree on tags before the show, not during it",
          "Retire tags that nobody uses",
        ],
      },
      {
        type: "prose",
        heading: "Search does the rest",
        paragraphs: [
          "eCard supports natural-language search, for example “Investors I met in Mumbai last month”. Clean tags and well-named events give that search more to work with.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Tag at the review stage",
        body: "Tagging at the booth slows you down. Add tags when you review scans in the evening.",
      },
      {
        "type": "steps",
        "heading": "Sample: tagging a batch in one evening",
        "intro": "A fictional review of 40 cards after day one of a show.",
        "steps": [
          {
            "title": "Pass 1 — intent",
            "body": "Go through quickly and tag each contact hot, warm or info."
          },
          {
            "title": "Pass 2 — type",
            "body": "Add buyer, distributor, supplier, partner or press."
          },
          {
            "title": "Pass 3 — promises",
            "body": "Tag anyone you promised something: send-quote, send-sample, call-back."
          },
          {
            "title": "Pass 4 — exceptions",
            "body": "Archive obvious non-leads and note anything unusual."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Tags vs event vs notes",
        "intro": "Where each piece of information belongs.",
        "headers": [
          "Information",
          "Best home",
          "Why"
        ],
        "rows": [
          [
            "Which show",
            "Event",
            "Applies to the whole batch"
          ],
          [
            "Buyer or supplier",
            "Tag",
            "Reusable across many shows"
          ],
          [
            "Wants 500 units by June",
            "Voice note or meeting memory",
            "Too specific for a tag"
          ],
          [
            "Follow up in March",
            "Tag such as revisit-mar",
            "Easy to pull up as a list later"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls",
        "items": [
          "Near-duplicate tags such as Distributor, distributors and dist — pick one spelling and share it.",
          "Encoding the show name in tags when the event already holds it.",
          "Tagging so finely that every tag has one contact in it.",
          "Letting temporary booth staff invent their own tags mid-show."
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Write the scheme down",
        "body": "Put your agreed tag list in a shared message before the show, so everyone scanning uses the same words."
      },
      {
        "type": "prose",
        "heading": "Sample: a tag scheme for a B2B food exhibitor",
        "paragraphs": [
          "Sample: a fictional spice exporter uses three groups of tags. Intent — hot, warm, info. Type — importer, retailer, restaurant, supplier. Promise — send-samples, send-pricing, call-back. Every contact gets one intent and one type; promise tags are removed once the promise is kept.",
          "After the show, “importer + hot + send-samples” becomes a short, precise list for the first morning, and the same tags work unchanged at the next exhibition."
        ]
      },

    ],
    faqs: [
      { q: "Are tags available on every plan?", a: "Yes. Contacts, tags and events are in the base feature set." },
      { q: "Can tags be added in bulk?", a: "eCard’s site doesn’t document bulk tagging; check the app." },
      { q: "How many tags should one contact have?", a: "As a rule of thumb, two or three — intent, type and any promise you made. More than that usually means some belong in notes instead." },
      { q: "Should I delete promise tags after following up?", a: "That’s a useful habit. Removing a promise tag once it’s kept turns the tag into a live to-do list rather than a history." },
      { q: "Can I rename a tag after the show?", a: "Tag management details aren’t documented on eCard’s public site, so check the app. Agreeing names before the show avoids most renaming." },
    ],
    related: ["features/contact-management/tag-by-event-city-intent", "features/events-expos/group-contacts", "features/contact-management/tags", "features/events-expos/lead-tracking"],
    source: "mixed",
  },
  {
    slug: "features/events-expos/conferences",
    category: "events",
    title: "Conferences",
    seoTitle: "Using eCard at Conferences and Summits",
    description: "Capture speaker, panel and hallway contacts at conferences with eCard, keep the context in meeting memory and follow up while the event is fresh.",
    h1: "Conferences: fewer cards, deeper conversations",
    eyebrow: "Events & Expos",
    intro: "Conferences differ from trade shows. You meet fewer people, but the conversations go deeper — so context matters more than volume.",
    variant: "solution",
    visual: "meeting",
    icon: "users",
    sections: [
      {
        type: "split",
        heading: "What makes conferences different",
        body: [
          "At a conference you’re a visitor, not an exhibitor. Contacts come from panels, coffee breaks and dinners, often with a mutual introduction.",
          "eCard’s meeting memory captures who introduced you, where you met and voice notes — exactly the detail that makes a conference follow-up feel personal.",
        ],
        points: ["Record who introduced you", "Note the session you discussed", "Save a voice note after each chat"],
      },
      {
        type: "steps",
        heading: "A conference routine",
        steps: [
          { title: "Create the event", body: "Name it with city and year." },
          { title: "Scan after each conversation", body: "Step aside, scan, add a note." },
          { title: "Share your card", body: "Show your digital card QR when someone has no card to swap." },
          { title: "Follow up personally", body: "Smaller groups deserve individual messages, not just a group note." },
        ],
      },
      {
        type: "bullets",
        heading: "Follow-up ideas",
        intro: "General etiquette that works well after talks and panels:",
        items: [
          "Reference the session or question you discussed",
          "Share a resource you promised",
          "Suggest a short call rather than a long meeting",
          "Connect them to someone useful in your network",
        ],
      },
      {
        "type": "steps",
        "heading": "Sample: working a two-day conference",
        "intro": "A fictional routine for someone attending rather than exhibiting.",
        "steps": [
          {
            "title": "Before",
            "body": "Note the sessions and speakers you care about and set up an event for the conference."
          },
          {
            "title": "In the hallway",
            "body": "Scan cards right after each conversation and record what topic you discussed."
          },
          {
            "title": "After each session",
            "body": "Add a voice note on any speaker or panellist you want to approach later."
          },
          {
            "title": "Each evening",
            "body": "Review the scans and tag by topic, such as ai-in-retail or logistics."
          },
          {
            "title": "The week after",
            "body": "Follow up with a reference to the session or talk you shared."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Conference contacts by type",
        "headers": [
          "Who",
          "Good follow-up",
          "Timing"
        ],
        "rows": [
          [
            "Speaker",
            "A specific comment on their talk and one question",
            "Within a few days"
          ],
          [
            "Fellow attendee",
            "A shared takeaway and your digital card",
            "Within a week"
          ],
          [
            "Sponsor or exhibitor",
            "Only if there was a genuine need on either side",
            "When relevant"
          ],
          [
            "Organiser",
            "Thanks, plus interest in future editions",
            "After the event wraps"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls",
        "items": [
          "Collecting cards from everyone at the networking lunch without a single real conversation.",
          "Following up with a sales pitch to people who met you as a peer.",
          "Forgetting which session you met someone in — a one-line note fixes it."
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Lead with the session",
        "body": "Conference follow-ups land best when the first sentence names the talk or panel you both attended. It proves you were paying attention and gives them a reason to reply."
      },
    ],
    faqs: [
      { q: "What if a speaker has no card?", a: "Let them scan your digital card’s QR code, which offers Save-to-contacts, and note their details yourself." },
      { q: "Can I find conference contacts later by topic?", a: "Meeting memory includes a searchable AI summary, and natural-language search helps find people by description." },
      { q: "Is it worth creating an event for a one-day conference?", a: "If you expect more than a handful of contacts, yes — it keeps the batch together and makes a follow-up note referencing the conference easy." },
      { q: "Can I search later for people from a particular talk?", a: "If you noted the session in a voice note or tag, natural-language search and tags make it easy to find them again." },
    ],
    related: ["features/events-expos/networking-meetups", "features/meeting-memory", "features/digital-business-card", "resources/guides/visiting-card-etiquette"],
    source: "mixed",
  },
  {
    slug: "features/events-expos/networking-meetups",
    category: "events",
    title: "Networking Meetups",
    seoTitle: "Networking Meetups: Remember Everyone You Meet",
    description: "Small meetups produce valuable contacts. Use eCard to scan cards, share your QR card and remember context so every meetup leads to a real conversation.",
    h1: "Make every meetup count",
    eyebrow: "Events & Expos",
    intro: "Chamber evenings, founder breakfasts and alumni meetups are where long-term relationships start. eCard helps you remember who you met and why it mattered.",
    variant: "solution",
    visual: "card",
    icon: "users",
    sections: [
      {
        type: "prose",
        heading: "Small events, long tails",
        paragraphs: [
          "A meetup might give you only six or eight new contacts, but they tend to be local, relevant and willing to talk again. The risk isn’t volume — it’s forgetting.",
          "Grouping each meetup as an event and adding a quick note per person keeps those relationships easy to revisit months later.",
        ],
      },
      {
        type: "cards",
        heading: "Useful eCard features at meetups",
        cards: [
          { title: "QR digital card", body: "People scan your QR and save your details with one tap.", icon: "qr" },
          { title: "Telegram scanning", body: "Snap their card in Telegram without opening another tab.", icon: "send" },
          { title: "Meeting memory", body: "Who introduced you and what you talked about.", icon: "brain" },
        ],
      },
      {
        type: "bullets",
        heading: "Meetup etiquette",
        items: [
          "Ask before photographing someone’s card",
          "Follow up within two days",
          "Offer value first — an intro or a resource",
          "Don’t add people to bulk mailings without consent",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Recurring meetups",
        body: "Create one event per session (e.g. “Founders Breakfast – March”) so you can see who you met when.",
      },
      {
        "type": "prose",
        "heading": "Sample: from meetup to coffee meeting",
        "paragraphs": [
          "Sample: at a fictional founders’ meetup in Pune, Neha meets six people and gets three cards; two others scan her QR code instead. On the way home she scans the three cards and records a ten-second voice note for each.",
          "The next morning she sends two WhatsApp messages and one email, each mentioning something specific from the conversation. One leads to a coffee meeting the following week. Nothing about this needs a big system — just capturing context while it’s fresh."
        ]
      },
      {
        "type": "table",
        "heading": "Meetup follow-up by relationship",
        "headers": [
          "Relationship",
          "Channel",
          "Tone"
        ],
        "rows": [
          [
            "Possible client",
            "Email from your own mailbox",
            "Helpful, one clear next step"
          ],
          [
            "Peer or fellow founder",
            "WhatsApp in a shared language",
            "Casual, mention the conversation"
          ],
          [
            "Someone you could help",
            "Email or WhatsApp",
            "Offer the intro or resource you promised"
          ],
          [
            "Brief hello, no real talk",
            "Often none",
            "Don’t force a follow-up"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls",
        "items": [
          "Treating a casual meetup like a trade show and pitching everyone.",
          "Not following up because “it was only a meetup” — small events often produce the best relationships.",
          "Promising an introduction and forgetting it; note every promise."
        ]
      },
      {
        "type": "bullets",
        "heading": "A two-minute after-meetup habit",
        "items": [
          "Scan the cards on the way home rather than the next morning.",
          "Record one sentence per person: what you talked about and anything you offered.",
          "Tag the meetup as an event if it recurs, so you can compare editions.",
          "Send follow-ups within a day or two while the evening is still remembered."
        ]
      },
    ],
    faqs: [
      { q: "Is eCard worth it for a handful of contacts?", a: "The Free plan includes 50 scans a month at ₹0, which is plenty for occasional meetups." },
      { q: "Can I follow up on WhatsApp?", a: "Yes. AI writes a message in English, Hindi or Marathi and opens it in WhatsApp in one tap." },
      { q: "How do I remember who introduced me to someone?", a: "Meeting memory lets you record where you met and who introduced you, along with voice notes and a searchable summary." },
      { q: "What if people only scanned my QR code?", a: "Then they have your details but you may not have theirs. Ask for a card or number during the conversation so you can follow up too." },
    ],
    related: ["features/events-expos/conferences", "features/digital-business-card/qr-code", "integrations/whatsapp", "resources/guides/follow-up-playbook"],
    source: "mixed",
  },
  {
    slug: "features/events-expos/team-at-expos",
    category: "events",
    title: "Your Team at Expos",
    seoTitle: "Run Your Expo Team From One eCard Workspace",
    description: "Put your whole stand team in one eCard workspace with roles like manager, member and scan-only guest so every card lands in the same event group.",
    h1: "One stand, one workspace, every card in one place",
    eyebrow: "Events & Expos",
    intro: "When several people staff a stand, cards end up in pockets, bags and personal phones. A shared workspace puts them all in one event group.",
    variant: "solution",
    visual: "team",
    icon: "building",
    sections: [
      {
        type: "table",
        heading: "eCard roles for a stand team",
        intro: "eCard lists five roles. Exact permissions aren’t published, so confirm in the app.",
        headers: ["Role", "Typical expo use (suggested)"],
        rows: [
          ["Owner", "Workspace owner, usually not on the stand"],
          ["Admin", "Sets up users and settings"],
          ["Manager", "Runs the event and its follow-up"],
          ["Member", "Sales staff who scan and follow up"],
          ["Scan-only guest", "Temporary staff who only capture cards"],
        ],
      },
      {
        type: "steps",
        heading: "Setting up the team",
        steps: [
          { title: "Check seats", body: "Free allows 5 users, Starter 20, Professional 100, Business and Enterprise unlimited." },
          { title: "Invite people", body: "Add teammates before the show, not at the venue." },
          { title: "Protect accounts", body: "Encourage 2FA with authenticator codes; eCard also supports recovery codes and login alerts." },
          { title: "Agree on the event and tags", body: "Everyone scans into the same event." },
        ],
      },
      {
        type: "prose",
        heading: "Accountability without micromanaging",
        paragraphs: [
          "Workspaces have an audit log, which helps managers see what changed. More importantly, a shared list prevents two salespeople from emailing the same visitor with different offers.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Remove temporary access",
        body: "After the show, remove or downgrade temporary staff accounts as a general security practice.",
      },
      {
        "type": "table",
        "heading": "Sample role plan for a five-person stand",
        "intro": "A fictional allocation using eCard’s roles.",
        "headers": [
          "Person",
          "eCard role",
          "Event job"
        ],
        "rows": [
          [
            "Founder",
            "Owner",
            "Creates the event, owns billing and final follow-up decisions"
          ],
          [
            "Sales lead",
            "Manager",
            "Runs the evening review and assigns leads"
          ],
          [
            "Two sales reps",
            "Member",
            "Scan, tag and follow up on assigned leads"
          ],
          [
            "Hired promoter",
            "Scan-only guest",
            "Scans cards for the team during the show"
          ]
        ]
      },
      {
        "type": "steps",
        "heading": "Daily stand-up at the stand",
        "intro": "A ten-minute routine before doors open each morning.",
        "steps": [
          {
            "title": "Yesterday’s numbers",
            "body": "How many cards were scanned and how many were tagged hot."
          },
          {
            "title": "Open promises",
            "body": "Any quotes or samples promised that need sending today."
          },
          {
            "title": "Duplicates",
            "body": "Contacts scanned by two people — agree who owns them."
          },
          {
            "title": "Today’s focus",
            "body": "Which visitor types to prioritise and who is on capture duty."
          }
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls with teams",
        "items": [
          "Everyone emailing the same buyer because ownership wasn’t agreed.",
          "Giving temporary staff full member access when a scan-only guest role is enough.",
          "Forgetting to remove access for temporary staff after the show."
        ]
      },
      {
        "type": "prose",
        "heading": "Sample: avoiding the double email",
        "paragraphs": [
          "Sample: at a fictional engineering expo, two reps from the same stand speak to the same purchasing manager on different days and both scan his card. Without a check, he would receive two thank-you emails with slightly different pricing.",
          "Running duplicate merge during the evening review, and agreeing at the morning stand-up that whoever had the longer conversation owns the lead, prevents this. The other rep adds their notes to the merged contact so nothing is lost."
        ]
      },
    ],
    faqs: [
      { q: "Can hired booth staff see all our contacts?", a: "eCard offers a scan-only guest role intended for capturing cards. Confirm its exact permissions in the app." },
      { q: "How many people can join on the trial?", a: "The 14-day trial is of the Professional plan, which lists up to 100 users." },
      { q: "How do I remove temporary staff after the show?", a: "Remove them from the workspace once the show ends; check the app for the exact steps. The workspace audit log helps you review activity." },
      { q: "How many people can work an expo on each plan?", a: "Free allows 5 users, Starter 20, Professional 100, and Business and Enterprise are unlimited." },
    ],
    related: ["features/team-security/roles-and-permissions", "features/team-security/scan-only-guests", "platform/for-teams", "features/events-expos/trade-show-workflow"],
    source: "mixed",
  },
  {
    slug: "features/events-expos/site-visits",
    category: "events",
    title: "Site Visits",
    seoTitle: "Site Visits: Capture Visitor Cards On Location",
    description: "Use eCard on site visits and open houses to scan visitor cards, share brochures with your card and see who opened them before you follow up.",
    h1: "Site visits that turn into booked follow-ups",
    eyebrow: "Events & Expos",
    intro: "Site visits, open houses and factory tours are small events in their own right. eCard’s real-estate use case sums it up: turn site-visit cards into booked visits.",
    variant: "solution",
    visual: "whatsapp",
    icon: "map",
    sections: [
      {
        type: "prose",
        heading: "The real-estate pattern",
        paragraphs: [
          "eCard’s site describes a real-estate flow: scan buyer and broker cards, send the brochure with your card and see who opened it, and follow up in Marathi or Hindi on WhatsApp.",
          "The same pattern suits factory tours, showroom days and project walk-throughs in other industries.",
        ],
      },
      {
        type: "steps",
        heading: "On the day",
        steps: [
          { title: "Create an event for the visit day", body: "Sample: “Sample Towers – Open House – Sunday”." },
          { title: "Scan each visitor’s card", body: "Browser or Telegram, whichever is quicker." },
          { title: "Send the brochure with your card", body: "Share it while they’re still on site." },
          { title: "Check opens that evening", body: "See who opened the brochure and your card." },
        ],
      },
      {
        type: "bullets",
        heading: "Why it works",
        items: [
          "Visitors receive material while their interest is highest",
          "Opens help you prioritise call-backs",
          "Local-language WhatsApp feels personal",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Address check",
        body: "eCard checks addresses on scanned cards against Google Maps, handy when visitors come from across the city.",
      },
      {
        "type": "steps",
        "heading": "Sample: a Saturday open house",
        "intro": "A fictional day for a realtor showing a residential project.",
        "steps": [
          {
            "title": "Morning setup",
            "body": "QR code on the welcome desk linking to the agent’s digital card; brochure PDF ready to share."
          },
          {
            "title": "Each visitor",
            "body": "Scan the buyer’s or broker’s card and add a voice note: budget, preferred unit, timeline."
          },
          {
            "title": "Same evening",
            "body": "Send the brochure with the card; WhatsApp in Marathi or Hindi where that suits the buyer."
          },
          {
            "title": "Two days later",
            "body": "Check who opened the brochure and call those buyers first."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Buyer vs broker follow-up",
        "headers": [
          "Contact",
          "What they want",
          "Follow-up idea"
        ],
        "rows": [
          [
            "Buyer",
            "Price, layout, possession timeline",
            "Brochure link plus an offer of a second visit"
          ],
          [
            "Channel broker",
            "Inventory and terms",
            "Short note with the brochure and your card"
          ],
          [
            "Family member",
            "Reassurance and details",
            "Share through the main buyer, not separately"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls",
        "items": [
          "Mixing buyers and brokers in one list — tag them differently from the start.",
          "Sending a heavy PDF without a short message explaining what it is.",
          "Reading a brochure open as a commitment rather than a cue to call."
        ]
      },
      {
        "type": "steps",
        "heading": "Capturing the right details at a visit",
        "intro": "Information worth noting in a quick voice note while the visitor is still on site.",
        "steps": [
          {
            "title": "Budget and configuration",
            "body": "What they said they can spend and which unit or product interested them."
          },
          {
            "title": "Timeline",
            "body": "When they need to decide, move in or purchase."
          },
          {
            "title": "Decision makers",
            "body": "Who else needs to see it — a spouse, parent or business partner."
          },
          {
            "title": "Source",
            "body": "Whether a broker brought them or they came directly, so the right person is credited."
          }
        ]
      },
    ],
    faqs: [
      { q: "Can I see if a buyer opened the brochure?", a: "Yes. eCard’s link tracking shows opens of your card, PDFs and WhatsApp links." },
      { q: "Which languages can WhatsApp messages use?", a: "English, Hindi and Marathi." },
      { q: "Is site-visit tracking only for real estate?", a: "No. Real estate is the example eCard’s site gives, but any business that hosts visits — showrooms, factories, clinics — can group visitors the same way." },
      { q: "Can a broker and a buyer be told apart later?", a: "Yes, if you tag them differently at scan time — for example buyer and broker — and add the project as the event." },
    ],
    related: ["use-cases/real-estate", "features/link-tracking/brochure-tracking", "features/link-tracking/pdf-engagement", "integrations/whatsapp"],
    source: "verified",
  },
  {
    slug: "features/events-expos/expo-checklist",
    category: "events",
    title: "Expo Checklist",
    seoTitle: "The Expo Checklist for Card Capture & Follow-Up",
    description: "A printable-style expo checklist covering prep, booth capture and post-show follow-up, with the eCard steps that keep every visiting card organised.",
    h1: "Your expo checklist",
    eyebrow: "Events & Expos",
    intro: "Run through this before, during and after the show. It mixes general exhibitor good practice with the eCard steps that keep contacts in order.",
    variant: "reference",
    visual: "none",
    icon: "check",
    sections: [
      {
        type: "bullets",
        heading: "Before",
        items: [
          "Goal for the show written down",
          "Event created in eCard with a clear name",
          "Team invited and roles agreed",
          "Tag list agreed (keep it short)",
          "Test scan done on each phone",
          "Telegram bot linked via Settings → Telegram, if used",
          "Digital card and QR updated",
          "Brochure PDF ready to share",
        ],
      },
      {
        type: "bullets",
        heading: "During",
        items: [
          "Scan every card while the visitor is present",
          "Add a voice note or one-line memory",
          "Review scans in quiet periods",
          "Charge phones at lunch",
        ],
      },
      {
        type: "bullets",
        heading: "After",
        items: [
          "All scans reviewed and duplicates merged",
          "Group follow-up sent within 48 hours",
          "Hot leads contacted personally",
          "Card, PDF and WhatsApp link opens checked",
          "Temporary access removed",
        ],
      },
      {
        type: "table",
        heading: "Plan check",
        headers: ["Plan", "Monthly price", "Users", "Scans/month"],
        rows: [
          ["Free", "₹0", "5", "50"],
          ["Starter", "₹299", "20", "1,000"],
          ["Professional", "₹999", "100", "5,000"],
          ["Business", "₹2,999", "Unlimited", "Unlimited"],
        ],
      },
      {
        "type": "bullets",
        "heading": "Phone and kit",
        "intro": "Practical items that save a show day.",
        "items": [
          "Phone charged plus a power bank and cable.",
          "eCard signed in on the phone browser and a bookmark on the home screen.",
          "Telegram bot linked with the one-time code from Settings → Telegram.",
          "Printed QR code for your digital card, plus a few paper cards for people who prefer them.",
          "A cloth to wipe the phone camera lens — smudges blur card photos."
        ]
      },
      {
        "type": "table",
        "heading": "Sample: who owns each checklist item",
        "intro": "Fictional split for a small team.",
        "headers": [
          "Item",
          "Owner",
          "Done by"
        ],
        "rows": [
          [
            "Event created and tags agreed",
            "Owner",
            "One week before"
          ],
          [
            "Guests invited as scan-only",
            "Admin",
            "Three days before"
          ],
          [
            "Brochure PDF and card updated",
            "Marketing",
            "Three days before"
          ],
          [
            "Test scans on every phone",
            "Each scanner",
            "Day before"
          ],
          [
            "Follow-up drafts written",
            "Sales lead",
            "Day before"
          ]
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Reuse it",
        "body": "After the show, note what was missing from this checklist and keep your own copy for the next event."
      },
      {
        "type": "bullets",
        "heading": "Evening-of-each-day checklist",
        "intro": "Ten minutes in the hotel room that make the follow-up week much easier.",
        "items": [
          "Every card from today scanned — check pockets, bags and the stand bowl.",
          "Low-confidence fields reviewed and corrected before saving.",
          "Intent tags added while you still remember each conversation.",
          "Promises listed: quotes, samples, introductions, call-backs.",
          "Duplicates from teammates spotted and ownership agreed.",
          "Phone and power bank on charge for tomorrow."
        ]
      },
      {
        "type": "bullets",
        "heading": "Week-after checklist",
        "items": [
          "Hot leads contacted personally within three working days.",
          "Warm group sent a thank-you with your card and brochure link.",
          "Link opens checked and engaged contacts called.",
          "Non-leads archived; anyone asking not to be contacted added to the blacklist.",
          "Guest access removed for temporary staff."
        ]
      },
    ],
    faqs: [
      { q: "Which plan suits a large expo?", a: "Compare expected cards with scan limits: Starter gives 1,000 scans a month, Professional 5,000, Business unlimited." },
      { q: "Can I trial a paid plan for a show?", a: "New workspaces get a 14-day Professional trial with no card needed." },
      { q: "Do I need anything installed on my phone?", a: "No app is needed for eCard itself — it runs in the phone browser. Telegram is only needed if you want to scan through the bot." },
      { q: "Can I start the checklist on the Free plan?", a: "Yes. Events, tags, scanning and the Telegram bot are in the base set on every plan; Free includes 50 scans a month, so check that covers the show." },
    ],
    related: ["features/events-expos/before-the-show", "resources/guides/trade-show-playbook", "pricing/compare-plans", "features/events-expos/trade-show-workflow"],
    source: "mixed",
  },
];
