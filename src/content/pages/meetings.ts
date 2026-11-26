import type { PageDef } from "../types";
export const pages: PageDef[] = [
  {
    slug: "features/meeting-memory",
    category: "meetings",
    title: "Meeting Memory",
    seoTitle: "Meeting Memory: Remember Every Conversation",
    description: "eCard remembers where you met, who introduced you, your voice notes and a searchable AI summary, so every contact keeps its story attached.",
    h1: "Remember where you met and what was said",
    eyebrow: "Meeting memory",
    intro: "A name and number are not a relationship. eCard's meeting memory keeps the context: where you met, who introduced you, voice notes, and a searchable AI summary.",
    variant: "feature",
    visual: "meeting",
    icon: "brain",
    sections: [
      {
        type: "cards",
        heading: "What eCard remembers",
        cards: [
          { title: "Where you met", body: "The place or event behind each card.", icon: "map" },
          { title: "Who introduced you", body: "The person who connected you, so you can thank them and mention them.", icon: "users" },
          { title: "Voice notes", body: "Speak your thoughts instead of typing them after a meeting.", icon: "mic" },
          { title: "AI summary", body: "A searchable summary of the meeting, attached to the contact.", icon: "sparkles" },
        ],
      },
      {
        type: "prose",
        heading: "The problem with a stack of cards",
        paragraphs: [
          "Six weeks after a conference, you find a card and remember nothing about the person. Was it the supplier with the urgent order, or the student looking for internships?",
          "Meeting memory attaches the story to the card at the moment you have it, so the context is there when you need it.",
        ],
      },
      {
        type: "split",
        heading: "Search by what you remember",
        body: [
          "eCard's natural-language search lets you ask in plain words, for example \"Investors I met in Mumbai last month\". Meeting memory is what gives those searches something to find.",
        ],
        points: ["Plain-language queries", "Searchable AI summaries", "Place and time context"],
      },
      {
        type: "callout",
        tone: "info",
        title: "Book the next meeting",
        body: "Google Calendar & Meet booking is available on Starter, Professional, Business and Enterprise plans.",
      },
      {
        "type": "steps",
        "heading": "A day at an expo, start to finish",
        "intro": "A practical routine for using the four parts of meeting memory together.",
        "steps": [
          {
            "title": "At the stand",
            "body": "Scan the card in your phone browser and review the fields before saving. Note where you met while you are still standing there."
          },
          {
            "title": "Walking to the next stand",
            "body": "Record a short voice note: who they are, what they need, what you promised. Mention the introducer if someone brought you together."
          },
          {
            "title": "Lunch break",
            "body": "Skim the AI summaries from the morning. Anything vague is easier to fix now than next week."
          },
          {
            "title": "Evening",
            "body": "Send intro emails or WhatsApp messages while each conversation is still fresh, using details from the summary."
          },
          {
            "title": "A month later",
            "body": "Search in plain language for the people you need, instead of hunting through a box of cards."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Which part of memory answers which question",
        "headers": [
          "Question you'll ask later",
          "Where the answer lives"
        ],
        "rows": [
          [
            "\"Where did I meet this person?\"",
            "Where you met"
          ],
          [
            "\"Who should I thank for this lead?\"",
            "Who introduced you"
          ],
          [
            "\"What exactly did they ask for?\"",
            "Voice notes"
          ],
          [
            "\"Who wanted a demo last quarter?\"",
            "Searchable AI summary"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Common pitfalls",
        "items": [
          "Leaving capture until the end of the day, when five conversations have blurred into one.",
          "Recording opinions (\"seemed keen\") instead of facts (\"wants pricing for 50 users\").",
          "Never reading memory again: open it before every follow-up and every second meeting.",
          "Capturing sensitive personal details the contact would not expect you to store."
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Start with one habit",
        "body": "If four things feel like too much, start by recording a single voice note per contact for a week. Once that is routine, add where you met and the introducer; they take seconds once the habit exists."
      },
    ],
    faqs: [
      { q: "What does meeting memory include?", a: "Where you met, who introduced you, voice notes, and a searchable AI summary." },
      { q: "Can I search my notes?", a: "Yes. The AI summary is searchable, and natural-language search supports queries like \"Investors I met in Mumbai last month\"." },
      { q: "Is Calendar booking on the Free plan?", a: "No. Google Calendar & Meet booking starts on Starter (₹299/month)." },
      { q: "Do I need a separate app for meeting memory?", a: "No. eCard works in any phone browser, and meeting memory is part of the contact record." },
    ],
    related: ["features/meeting-memory/voice-notes", "features/meeting-memory/ai-summaries", "features/meeting-memory/searchable-memory", "platform/relationship-memory", "features/contact-management/natural-language-search"],
    source: "verified",
  },
  {
    slug: "features/meeting-memory/where-you-met",
    category: "meetings",
    title: "Where You Met",
    seoTitle: "Record Where You Met Each Contact",
    description: "Keep where you met attached to every contact in eCard, so follow-ups, searches and introductions always start with the right context.",
    h1: "Every contact remembers where it started",
    eyebrow: "Meeting memory",
    intro: "\"We met at…\" is the most useful line in any follow-up. eCard keeps where you met next to each contact.",
    variant: "feature",
    visual: "meeting",
    icon: "map",
    sections: [
      {
        type: "bullets",
        heading: "Why it matters",
        items: [
          "Opens your follow-up with shared context.",
          "Helps you find people later by place.",
          "Shows which events and venues produce real relationships.",
          "Helps teammates understand a contact they didn't meet.",
        ],
      },
      {
        type: "table",
        heading: "Sample entries",
        intro: "Fictional sample data.",
        headers: ["Contact (sample)", "Where you met"],
        rows: [
          ["Priya Shah, Realtor", "Site visit, Baner, Pune"],
          ["Dr. Arvind Rao", "Medical conference, Hyderabad"],
          ["Zoya Khan, Founder", "Startup meetup, Bengaluru"],
        ],
      },
      {
        type: "prose",
        heading: "Place plus event",
        paragraphs: [
          "Where you met works alongside eCard's events and tags. An event groups everyone from a trade show; where you met records the specific context for one person.",
          "Combined, they make searches like \"people I met in Mumbai last month\" meaningful.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Be specific",
        body: "\"Hall 3, packaging stand\" is more useful later than \"expo\".",
      },
      {
        "type": "steps",
        "heading": "How to write a useful \"where you met\"",
        "intro": "General guidance for a field you will read months later.",
        "steps": [
          {
            "title": "Name the occasion",
            "body": "The event, visit or meeting type: trade show, site visit, client dinner, webinar follow-up."
          },
          {
            "title": "Add the place",
            "body": "City at minimum, plus venue or hall if the event is large."
          },
          {
            "title": "Add a detail that triggers recall",
            "body": "\"Stand next to the coffee counter\" or \"sat together at the panel on exports\" brings the conversation back instantly."
          },
          {
            "title": "Keep the date implicit",
            "body": "The scan already happens on a specific day; you don't need to repeat it unless you are adding the card late."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Vague vs useful",
        "intro": "Sample entries, fictional.",
        "headers": [
          "Vague",
          "Useful"
        ],
        "rows": [
          [
            "Expo",
            "Packaging expo, Mumbai, Hall 3, stand opposite ours"
          ],
          [
            "Meeting",
            "Coffee at client office, Andheri, after the vendor review"
          ],
          [
            "Event",
            "Founders' meetup, Bengaluru, asked a question on pricing"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Using it in your first message",
        "paragraphs": [
          "The opening line of a follow-up has one job: make the reader remember you. \"Great to meet you at the Pune property expo, near the Baner projects stand\" does that better than any company description.",
          "It also helps when you add a card days later. If you scan a pocketful of cards on Monday from a weekend event, recording where you met for each one keeps the context accurate even though the scan date is not."
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls to avoid",
        "items": [
          "Using the event's official long name one day and an abbreviation the next; pick one form and stick to it.",
          "Writing only \"office\" without saying whose office.",
          "Copying the same where-you-met text onto every card from a two-day event, which hides who you met on which day or stand.",
          "Confusing where you met with where they are based; record both separately when they differ."
        ]
      },
    ],
    faqs: [
      { q: "Is location captured automatically?", a: "eCard's site does not say location is captured automatically. It lists where you met as part of meeting memory." },
      { q: "How is this different from events?", a: "Events group many cards from one show; where you met is context for each contact." },
      { q: "What if I don't remember where I met someone?", a: "Record what you do know, such as the city or the month, and leave the rest. Partial context still helps search and follow-ups." },
      { q: "Can I search by where I met people?", a: "eCard's natural-language search supports queries like \"Investors I met in Mumbai last month\", so place context is worth recording." },
      { q: "Should teammates use the same format?", a: "General guidance: yes. Agree a simple pattern such as event, city, detail, so searches return consistent results across the workspace." },
    ],
    related: ["features/meeting-memory/meeting-locations", "features/events-expos/group-contacts", "features/contact-management/tag-by-event-city-intent", "features/meeting-memory"],
    source: "mixed",
  },
  {
    slug: "features/meeting-memory/meeting-locations",
    category: "meetings",
    title: "Meeting Locations",
    seoTitle: "Meeting Locations and City-Based Search",
    description: "Use meeting locations in eCard to find contacts by city or venue, plan trips around people you've met, and keep addresses checked against Google Maps.",
    h1: "Find people by where you met them",
    eyebrow: "Meeting memory",
    intro: "Travelling to Mumbai next week? Meeting locations help you find everyone you met there, using plain-language search.",
    variant: "guide",
    visual: "meeting",
    icon: "globe",
    sections: [
      {
        type: "steps",
        heading: "Plan a trip around your network",
        steps: [
          { title: "Search by city", body: "Try a natural-language query such as \"people I met in Mumbai\"." },
          { title: "Review the list", body: "Read meeting memory to recall each conversation." },
          { title: "Reach out", body: "Send a WhatsApp message or intro email proposing a meeting." },
          { title: "Book it", body: "On paid plans, use Google Calendar & Meet booking." },
        ],
      },
      {
        type: "split",
        heading: "Meeting place vs company address",
        body: [
          "Where you met and where a contact works aren't always the same. A Delhi buyer may visit a Mumbai expo.",
          "eCard checks scanned addresses against Google Maps, which helps keep the company address accurate.",
        ],
        points: ["Meeting place: context of the conversation", "Card address: checked against Google Maps", "Tags: city and intent"],
      },
      {
        type: "callout",
        tone: "note",
        title: "Map views",
        body: "eCard's site does not describe a map view of contacts. Use search and tags to filter by place.",
      },
      {
        type: "bullets",
        heading: "Location tagging tips",
        items: [
          "Use consistent city names (Bengaluru or Bangalore, not both).",
          "Tag the city as well as recording where you met.",
          "Add the venue for events that recur yearly.",
        ],
      },
      {
        "type": "table",
        "heading": "Sample: planning a two-day Mumbai trip",
        "intro": "Fictional sample showing how a city search turns into a schedule.",
        "headers": [
          "Contact (sample)",
          "Met at",
          "Last note",
          "Plan"
        ],
        "rows": [
          [
            "Nikhil Joshi, Distributor",
            "Packaging expo, Mumbai",
            "Wanted samples after Diwali",
            "Visit warehouse, Day 1 morning"
          ],
          [
            "Farah Ali, Investor",
            "Founders' meetup, Mumbai",
            "Asked for traction numbers",
            "Coffee, Day 1 afternoon"
          ],
          [
            "Sameer Kulkarni, Architect",
            "Site visit, Thane",
            "Comparing suppliers",
            "Video call instead; too far"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Grouping visits efficiently",
        "items": [
          "Cluster meetings by neighbourhood, not just by city; travel time across a large city can eat half a day.",
          "Put the warmest contacts in fixed slots and offer flexible slots to the rest.",
          "For contacts outside your route, propose a video call rather than dropping them.",
          "Send meeting requests a week ahead with two concrete time options."
        ]
      },
      {
        "type": "prose",
        "heading": "When the meeting place is not the city",
        "paragraphs": [
          "Online events, webinars and phone introductions don't have a city. Record them as such (\"Webinar on GST invoicing\") so they don't pollute city-based searches.",
          "For contacts you met at their own premises, the meeting place and company address match. That is the one case where you can rely on the card address alone."
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Check before you book travel",
        "body": "Run a city search before deciding whether a trip is worth it. Ten warm contacts in one city can justify a visit that a single meeting cannot."
      },
      {
        "type": "prose",
        "heading": "Recurring venues and annual events",
        "paragraphs": [
          "Many industries return to the same exhibition centre every year. Recording the venue consistently lets you search for everyone you met there across several editions, which is useful when you prepare for the next one.",
          "Before the event, pull up last year's contacts from that venue, check which ones never received a proper follow-up, and message them to say you will be there again. A reunion at the same stand is an easy, natural restart."
        ]
      },
    ],
    faqs: [
      { q: "Can I search by city?", a: "Natural-language search supports queries like \"Investors I met in Mumbai last month\"." },
      { q: "What does Google Maps do in eCard?", a: "Scanned card addresses are checked against Google Maps." },
      { q: "Should I tag the city or the venue?", a: "General guidance: tag the city for search, and record the venue in where you met for context. Both together are most useful." },
      { q: "Does eCard show contacts on a map?", a: "eCard's site does not describe a map view. Use natural-language search and tags to filter by place." },
      { q: "Can I use meeting locations to evaluate which events are worth attending?", a: "General guidance: yes. Compare how many contacts from each event or venue turned into real conversations, using your tags and meeting memory." },
    ],
    related: ["features/meeting-memory/where-you-met", "features/ai-card-scanning/address-verification", "features/contact-management/search-examples", "integrations/google-maps"],
    source: "mixed",
  },
  {
    slug: "features/meeting-memory/introductions",
    category: "meetings",
    title: "Introductions",
    seoTitle: "Track Who Introduced You to Each Contact",
    description: "eCard records who introduced you to each contact. Use it to thank connectors, warm up follow-ups, and see who in your network opens the most doors.",
    h1: "Remember who made the introduction",
    eyebrow: "Meeting memory",
    intro: "Warm introductions are the most valuable way to meet people. eCard's meeting memory records who introduced you.",
    variant: "feature",
    visual: "meeting",
    icon: "link",
    sections: [
      {
        type: "prose",
        heading: "Why track introductions",
        paragraphs: [
          "An introduction carries trust from the connector to you. Mentioning them in your follow-up (\"Kavya suggested we talk\") transfers that trust.",
          "Over time, knowing who introduced whom shows which people in your network are true connectors, the ones worth thanking and helping in return.",
        ],
      },
      {
        type: "cards",
        heading: "Ways to use it",
        cards: [
          { title: "Warmer follow-ups", body: "Name the introducer in your first message.", icon: "message" },
          { title: "Thank-yous", body: "Let connectors know when an intro led somewhere.", icon: "check" },
          { title: "Network insight", body: "Spot who in your network opens the most doors.", icon: "users" },
        ],
      },
      {
        type: "table",
        heading: "Sample",
        intro: "Fictional sample data.",
        headers: ["Contact", "Introduced by", "Follow-up line"],
        rows: [
          ["Rahul Mehta, CA", "Sanjay Desai", "Sanjay mentioned you help startups with compliance."],
          ["Leena George, Architect", "Self (met at expo)", "Great meeting you at your stand."],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Close the loop",
        body: "A quick message to the introducer after the meeting keeps them inclined to introduce you again.",
      },
      {
        "type": "steps",
        "heading": "Handling a warm introduction well",
        "intro": "General networking etiquette for the days after someone connects you.",
        "steps": [
          {
            "title": "Reply quickly",
            "body": "Respond within a day and move the introducer to BCC, thanking them in the first line."
          },
          {
            "title": "Record the introducer",
            "body": "Add who introduced you in meeting memory when you scan the card or save the contact."
          },
          {
            "title": "Reference them once",
            "body": "Mention the introducer in your opening line, then let the conversation stand on its own."
          },
          {
            "title": "Report back",
            "body": "After the meeting, tell the introducer briefly how it went. If it leads somewhere, tell them again."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Types of introductions",
        "headers": [
          "Type",
          "Example (sample)",
          "What to record"
        ],
        "rows": [
          [
            "Email intro",
            "A client emails you and a supplier together",
            "Introducer's name and why they connected you"
          ],
          [
            "In-person handoff",
            "A colleague walks a buyer to your stand",
            "Introducer plus the event"
          ],
          [
            "Referral",
            "A contact tells you to call someone",
            "Introducer and what they said about the person"
          ],
          [
            "Self-introduction",
            "You approached them directly",
            "\"Self\" so you know it was cold"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls to avoid",
        "items": [
          "Forgetting the introducer entirely and sending a cold-sounding first message.",
          "Over-using the introducer's name, which can feel like pressure.",
          "Never telling the introducer the outcome; connectors stop connecting when they hear nothing back."
        ]
      },
      {
        "type": "prose",
        "heading": "Sample: a follow-up that uses the introduction",
        "paragraphs": [
          "Sample: \"Hi Rahul, Sanjay Desai suggested we speak after the startup compliance session in Pune. He mentioned you help early-stage founders with GST filings. We are a five-person team about to register; would a 20-minute call next week work?\"",
          "Notice the shape: the introducer, the reason they connected you, a specific situation and a small, easy ask. The introducer appears once and then steps aside."
        ]
      },
      {
        "type": "prose",
        "heading": "Introductions you make for others",
        "paragraphs": [
          "Memory works both ways. When you connect two people yourself, a short note on both contacts (\"I introduced her to Anil for logistics\") reminds you later why they might mention each other, and shows how often you help your network.",
          "Generous connectors tend to receive introductions in return. Keeping a light record of the introductions you give makes it easier to follow up and ask how they went."
        ]
      },
    ],
    faqs: [
      { q: "Is the introducer linked as a contact?", a: "eCard's site lists \"who introduced you\" in meeting memory but doesn't document linking it to another contact record." },
      { q: "Can I search by introducer?", a: "The AI summary is searchable; including the introducer's name there helps." },
      { q: "What should I record if nobody introduced us?", a: "A simple \"self\" or the event name. Knowing a contact was cold is useful context too." },
      { q: "How do I thank an introducer without making it awkward?", a: "General guidance: a short message after the first meeting, and another if something comes of it. Offering an introduction in return is the strongest thank-you." },
    ],
    related: ["features/meeting-memory/meeting-context", "features/outreach/personalised-follow-ups", "features/meeting-memory/relationship-timeline", "features/meeting-memory"],
    source: "mixed",
  },
  {
    slug: "features/meeting-memory/meeting-context",
    category: "meetings",
    title: "Meeting Context",
    seoTitle: "Capture Meeting Context Before You Forget",
    description: "What meeting context to capture after you meet someone — needs, promises, timing and personal details — and how eCard keeps it with the contact.",
    h1: "The details that make the next conversation easy",
    eyebrow: "Meeting memory",
    intro: "Context fades within hours. Capture it right after the meeting and eCard keeps it with the contact.",
    variant: "guide",
    visual: "meeting",
    icon: "book",
    sections: [
      {
        type: "bullets",
        heading: "Five things worth capturing",
        items: [
          "What they need, in their words.",
          "What you promised to send or do.",
          "Their timeline or deadline.",
          "Who else is involved in the decision.",
          "One personal detail, such as a shared interest.",
        ],
      },
      {
        type: "steps",
        heading: "A two-minute capture habit",
        steps: [
          { title: "Scan the card", body: "Right after the conversation." },
          { title: "Record a voice note", body: "Say the five things out loud while walking." },
          { title: "Let the AI summarise", body: "eCard produces a searchable AI summary." },
        ],
      },
      {
        type: "prose",
        heading: "Context for teammates",
        paragraphs: [
          "When a lead moves from the person who met them to a colleague who will close the deal, meeting context is what stops the customer from repeating themselves.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Keep it respectful",
        body: "Record business-relevant context. Avoid sensitive personal data you wouldn't want the contact to see.",
      },
      {
        "type": "table",
        "heading": "Sample: one meeting, captured well",
        "intro": "Fictional sample after a 10-minute expo conversation.",
        "headers": [
          "Item",
          "Captured note"
        ],
        "rows": [
          [
            "Need",
            "Needs 500 compostable food trays a month for a cloud kitchen chain"
          ],
          [
            "Promise",
            "Send price list and two samples by Friday"
          ],
          [
            "Timing",
            "Current supplier contract ends in March"
          ],
          [
            "Decision makers",
            "Ops head decides; finance signs off above ₹2 lakh"
          ],
          [
            "Personal",
            "Also from Nashik; follows cricket"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Facts, not impressions",
        "paragraphs": [
          "\"Seemed interested\" is the least useful note you can write. It tells your future self nothing about what to send or when. Replace impressions with something observable: what they asked, what they said about budget, which product they picked up.",
          "Quantities, dates and names are the details that fade fastest and matter most. If you capture only one thing precisely, make it the number or deadline they mentioned."
        ]
      },
      {
        "type": "bullets",
        "heading": "Context checklist for different meeting types",
        "items": [
          "Sales conversation: need, budget range, decision date, competitors mentioned.",
          "Partnership: what each side brings, who owns the next step.",
          "Hiring or talent: role of interest, notice period, referral source.",
          "Supplier: minimum order, lead time, sample promised."
        ]
      },
      {
        "type": "steps",
        "heading": "Capturing context when you can't speak",
        "intro": "At a quiet seminar or a formal dinner, a voice note may be out of the question.",
        "steps": [
          {
            "title": "Scan now, note later",
            "body": "Save the card immediately so it is not lost."
          },
          {
            "title": "Jot keywords",
            "body": "Three words per person are enough to trigger memory later: \"trays, March, Nashik\"."
          },
          {
            "title": "Expand within the hour",
            "body": "Step outside or wait until you leave, then record the full voice note while the keywords still make sense."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Write for a stranger",
        "body": "Test a note by asking whether a colleague who has never met the contact could act on it. If not, add the missing need, promise or date."
      },
      {
        "type": "prose",
        "heading": "Context changes over time",
        "paragraphs": [
          "The need someone described at a trade show in October may look different by January. Treat context as something you update, not something you write once. After every new conversation, add a sentence about what changed: a new budget, a new decision maker, a delayed timeline."
        ]
      },
    ],
    faqs: [
      { q: "Do I need to type notes?", a: "No. eCard supports voice notes and an AI summary." },
      { q: "Can teammates see context?", a: "See Memory for Teams for what's documented about shared workspaces." },
      { q: "How much context is too much?", a: "General guidance: if a note would take more than a minute to read later, summarise it. Keep the five essentials and skip the rest." },
      { q: "What if I forgot to capture context on the day?", a: "Record what you still remember as soon as you notice, and mark uncertain details as such. A partial note is far better than none." },
    ],
    related: ["features/meeting-memory/voice-notes", "features/meeting-memory/notes-to-follow-up", "features/meeting-memory/memory-for-teams", "features/team-security/consent-management"],
    source: "mixed",
  },
  {
    slug: "features/meeting-memory/voice-notes",
    category: "meetings",
    title: "Voice Notes",
    seoTitle: "Voice Notes for Contacts and Meetings",
    description: "Record voice notes after a meeting instead of typing. eCard keeps them with the contact alongside a searchable AI summary of what was said.",
    h1: "Talk through the meeting instead of typing it",
    eyebrow: "Meeting memory",
    intro: "Typing notes on a phone between booths doesn't happen. Speaking for thirty seconds does. eCard keeps voice notes with the contact.",
    variant: "feature",
    visual: "meeting",
    icon: "mic",
    sections: [
      {
        type: "split",
        heading: "Faster than typing",
        body: [
          "Most people speak far faster than they type on a phone. A voice note captures tone and nuance that bullet points lose.",
          "eCard pairs voice notes with a searchable AI summary, so you aren't left with hours of audio you'll never replay.",
        ],
        points: ["Attached to the contact", "Paired with an AI summary", "Works in the phone browser"],
      },
      {
        type: "cards",
        heading: "When to record",
        cards: [
          { title: "Walking away", body: "Right after the handshake, while it's fresh.", icon: "clock" },
          { title: "End of day", body: "A quick round-up of each person you met.", icon: "calendar" },
          { title: "After a call", body: "Capture decisions and next steps.", icon: "phone" },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not documented",
        body: "eCard's site doesn't state voice note length limits, languages or storage details; check in-app.",
      },
      {
        type: "bullets",
        heading: "Privacy reminder",
        items: [
          "Record your own notes, not the other person, unless they've agreed.",
          "Avoid sensitive personal or health information.",
          "Follow your organisation's data policies.",
        ],
      },
      {
        "type": "steps",
        "heading": "A voice-note routine between meetings",
        "steps": [
          {
            "title": "Scan first",
            "body": "Save the contact so the note has somewhere to live."
          },
          {
            "title": "Move somewhere quieter",
            "body": "A corridor or the end of an aisle is enough to cut background noise."
          },
          {
            "title": "Speak in order",
            "body": "Who, need, promise, next step. Thirty seconds is usually plenty."
          },
          {
            "title": "Check the summary later",
            "body": "Read the AI summary that evening and correct anything that is off."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Voice note or typed note?",
        "headers": [
          "Situation",
          "Better choice",
          "Why"
        ],
        "rows": [
          [
            "Busy expo floor",
            "Voice note",
            "Hands are full and time is short"
          ],
          [
            "Quiet office after a call",
            "Either",
            "Type if you need exact figures"
          ],
          [
            "Open-plan or shared space",
            "Typed note",
            "Avoid speaking client details aloud"
          ],
          [
            "Long, complex meeting",
            "Voice note, then review",
            "Faster to capture, summary condenses it"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "What voice notes are good at",
        "paragraphs": [
          "Voice captures things that are awkward to type: the order in which someone raised concerns, the hesitation before they mentioned budget, the side comment about a competitor. Those details often decide what your follow-up should say.",
          "They are less good at precise figures and spellings. Say important numbers twice, and check names against the scanned card, which already has them in writing."
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls with voice notes",
        "items": [
          "Recording one long note for an entire day instead of one per contact.",
          "Leaving notes unreviewed until the summary is too vague to fix from memory.",
          "Speaking confidential pricing aloud in a crowded hall within earshot of competitors.",
          "Assuming the note captured a name correctly without checking it against the card."
        ]
      },
      {
        "type": "prose",
        "heading": "Sample: a thirty-second voice note",
        "paragraphs": [
          "Sample: \"Met Kavita Desai, purchase manager at a Surat textile unit, at the Gandhinagar expo. They need packaging for 2,000 units a month starting June. I promised a sample kit and a price sheet by Wednesday. She prefers email. Next step: send both, then call Friday.\"",
          "That single note answers who, where, need, promise, channel and next step, which is everything a follow-up needs."
        ]
      },
    ],
    faqs: [
      { q: "Can I record a voice note from my phone?", a: "eCard works in any phone browser. Voice notes are part of meeting memory." },
      { q: "Is the voice note transcribed?", a: "eCard describes a searchable AI summary. The site doesn't say whether a full transcript is shown." },
      { q: "Do voice notes replace the AI summary?", a: "No. They work together: voice notes hold the detail, and the searchable AI summary gives you the short version." },
      { q: "Do I need to install an app to record voice notes?", a: "No app is required; eCard works in any phone browser. Your browser may ask for microphone permission." },
    ],
    related: ["features/meeting-memory/voice-note-tips", "features/meeting-memory/ai-summaries", "mobile/scan-from-your-phone", "features/meeting-memory"],
    source: "mixed",
  },
  {
    slug: "features/meeting-memory/voice-note-tips",
    category: "meetings",
    title: "Voice Note Tips",
    seoTitle: "Voice Note Tips for Better Meeting Summaries",
    description: "How to record short, structured voice notes after meetings so AI summaries are accurate and useful: structure, names, numbers and background noise.",
    h1: "Better voice notes, better summaries",
    eyebrow: "Guidance",
    intro: "A good AI summary starts with a clear voice note. These general tips make thirty seconds of speaking count.",
    variant: "guide",
    visual: "meeting",
    icon: "mic",
    sections: [
      {
        type: "steps",
        heading: "A simple structure",
        steps: [
          { title: "Who and where", body: "\"Met Zoya Khan, founder, at the Bengaluru meetup.\" (sample)" },
          { title: "What they need", body: "\"Looking for a payments partner for a pilot.\"" },
          { title: "What I promised", body: "\"Send our deck and pricing by Friday.\"" },
          { title: "Next step", body: "\"Suggest a call next Tuesday.\"" },
        ],
      },
      {
        type: "bullets",
        heading: "Recording tips",
        items: [
          "Step away from loud booths or speakers.",
          "Spell unusual names or say them slowly.",
          "Say numbers clearly: \"two hundred units\", not \"a couple hundred\".",
          "Keep it under a minute; record a second note if needed.",
        ],
      },
      {
        type: "table",
        heading: "Weak vs strong",
        intro: "Sample voice notes.",
        headers: ["Weak", "Strong"],
        rows: [
          ["\"Nice guy, follow up.\"", "\"Arjun from Nashik, needs 500 compostable trays monthly, decision by March.\""],
          ["\"Interested.\"", "\"Wants a demo for her team of five, prefers WhatsApp.\""],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Say the follow-up channel",
        body: "Mentioning \"prefers WhatsApp in Marathi\" makes your next step obvious later.",
      },
      {
        "type": "cards",
        "heading": "Tips for specific situations",
        "cards": [
          {
            "title": "Several people at once",
            "body": "Record a separate note per contact. A combined note makes the summary attribute needs to the wrong person.",
            "icon": "users"
          },
          {
            "title": "Mixed languages",
            "body": "If you naturally switch languages mid-sentence, say names and numbers in one consistent language to reduce errors.",
            "icon": "globe"
          },
          {
            "title": "Technical products",
            "body": "Say model numbers or specs slowly, character by character if needed.",
            "icon": "settings"
          },
          {
            "title": "Sensitive topics",
            "body": "Leave out health, financial or personal details the contact shared in confidence.",
            "icon": "lock"
          }
        ]
      },
      {
        "type": "bullets",
        "heading": "Words that make summaries sharper",
        "intro": "Signal phrases help any summariser separate facts from chatter.",
        "items": [
          "\"They need…\" before the requirement.",
          "\"I promised…\" before your commitment.",
          "\"Deadline is…\" before any date.",
          "\"Next step:\" at the end, always."
        ]
      },
      {
        "type": "prose",
        "heading": "Re-recording is cheap",
        "paragraphs": [
          "If you listen back and the note is rambling, record a cleaner one. Thirty seconds now saves you from deciphering a muddled summary next month.",
          "At the end of a long event day, a quick round of corrections, one sentence per contact, is often more valuable than the original notes."
        ]
      },
      {
        "type": "table",
        "heading": "Sample: rambling vs structured",
        "intro": "Fictional sample notes about the same conversation.",
        "headers": [
          "Rambling (sample)",
          "Structured (sample)"
        ],
        "rows": [
          [
            "\"Okay so the lady from the hospital, Sunita I think, nice chat, they might want something, she said call later maybe after budget stuff…\"",
            "\"Sunita Rao, procurement, city hospital, Nagpur. They need 40 tablets for wards. Budget approved in April. I promised a quote. Next step: call first week of April.\""
          ]
        ]
      },
      {
        "type": "callout",
        "tone": "note",
        "title": "What the site documents",
        "body": "eCard lists voice notes and a searchable AI summary as part of meeting memory. Recording limits, supported languages and transcription details are not documented on the site; check in the app."
      },
      {
        "type": "bullets",
        "heading": "A pre-event checklist",
        "items": [
          "Test that your phone browser can record before the event starts, not at the first stand.",
          "Charge your phone and carry a power bank; recording and scanning all day drains batteries.",
          "Agree a note structure with teammates working the same event.",
          "Plan a ten-minute review slot at the end of each day.",
          "Pack earphones with a mic for very noisy halls."
        ]
      },
    ],
    faqs: [
      { q: "How long should a voice note be?", a: "General guidance: 20–60 seconds per contact." },
      { q: "Which languages can I speak in?", a: "eCard's site doesn't document voice note languages. Test with a short note." },
      { q: "Should I record during the conversation?", a: "General guidance: no, unless the other person has agreed. Record your own recap just after you part." },
      { q: "What is the single most useful tip?", a: "End every note with \"Next step:\" and a concrete action. It makes the summary, and your follow-up, obvious." },
    ],
    related: ["features/meeting-memory/voice-notes", "features/meeting-memory/ai-summaries", "features/meeting-memory/summary-examples", "features/events-expos/at-the-booth"],
    source: "educational",
  },
  {
    slug: "features/meeting-memory/ai-summaries",
    category: "meetings",
    title: "AI Meeting Summaries",
    seoTitle: "AI Meeting Summaries You Can Search",
    description: "eCard creates a searchable AI summary of each meeting, so you can find people by what was discussed and pick up conversations without rereading notes.",
    h1: "A searchable summary of every meeting",
    eyebrow: "Meeting memory",
    intro: "eCard turns your meeting memory into a short, searchable AI summary attached to the contact.",
    variant: "feature",
    visual: "meeting",
    icon: "sparkles",
    sections: [
      {
        type: "prose",
        heading: "Why summaries beat raw notes",
        paragraphs: [
          "Raw notes and voice recordings are rarely reread. A summary gives you the gist in seconds: who, what they need, what's next.",
          "Because the summary is searchable, you can find contacts by topic, not just by name.",
        ],
      },
      {
        type: "cards",
        heading: "What a useful summary contains",
        cards: [
          { title: "Need", body: "What the contact is looking for.", icon: "search" },
          { title: "Commitments", body: "What either side promised.", icon: "check" },
          { title: "Next step", body: "The agreed or suggested follow-up.", icon: "send" },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Your AI model",
        body: "eCard lets you choose AI models and bring your own key. The site doesn't specify which model writes meeting summaries.",
      },
      {
        type: "bullets",
        heading: "Review it like you review scans",
        items: [
          "AI can misread names or numbers; check key facts.",
          "Correct anything wrong so search results stay reliable.",
          "Add commitments the AI missed.",
        ],
      },
      {
        "type": "steps",
        "heading": "Using a summary in practice",
        "steps": [
          {
            "title": "Before a follow-up",
            "body": "Read the summary and pick one specific detail to reference in your message."
          },
          {
            "title": "Before a second meeting",
            "body": "Check the commitments section: did you deliver what you promised?"
          },
          {
            "title": "When handing over",
            "body": "Point a teammate to the summary rather than retelling the story."
          },
          {
            "title": "When searching",
            "body": "Search by topic, such as \"asked for a demo\", to find contacts whose summaries mention it."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Summary quality check",
        "intro": "General guidance for reviewing any AI-written summary.",
        "headers": [
          "Check",
          "Fix if wrong"
        ],
        "rows": [
          [
            "Name and company match the card",
            "Correct the spelling"
          ],
          [
            "Numbers match what was said",
            "Replace with the exact figure"
          ],
          [
            "Commitments are attributed correctly",
            "Clarify who promised what"
          ],
          [
            "A next step is present",
            "Add one, even if it is \"check in after March\""
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Garbage in, garbage out",
        "paragraphs": [
          "A summary can only be as good as the notes behind it. A rambling voice note recorded next to a loudspeaker will produce a vague summary; a structured thirty-second note will produce a crisp one.",
          "That is why the most effective habit is not reading summaries harder, but recording better input. The voice note tips page covers a simple structure."
        ]
      },
      {
        "type": "cards",
        "heading": "Who benefits from summaries",
        "cards": [
          {
            "title": "Busy founders",
            "body": "Recall dozens of investor and partner conversations without rereading notes.",
            "icon": "zap"
          },
          {
            "title": "Field sales",
            "body": "Glance at a summary in the car park before walking into a second meeting.",
            "icon": "briefcase"
          },
          {
            "title": "Managers",
            "body": "Understand a rep's pipeline from short summaries instead of long reports.",
            "icon": "chart"
          }
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Keep the summary current",
        "body": "After each new conversation, add a short voice note so the summary reflects where things stand now, not just the first meeting."
      },
      {
        "type": "prose",
        "heading": "Summaries across many contacts",
        "paragraphs": [
          "The value of summaries grows with volume. Ten contacts can be remembered; three hundred from a season of events cannot. At that scale, a consistent short summary per contact is what makes it possible to answer questions like \"who asked for a demo?\" without opening each record.",
          "This is also why consistency matters more than eloquence. Summaries that always state need, commitments and next step are easier to scan and to search than beautifully written but irregular notes."
        ]
      },
    ],
    faqs: [
      { q: "Is the summary searchable?", a: "Yes. eCard describes a searchable AI summary as part of meeting memory." },
      { q: "Can I edit a summary?", a: "The site doesn't document editing summaries. Check in the app." },
      { q: "Which AI models does eCard support?", a: "eCard lets you choose Claude, OpenAI, Gemini, DeepSeek or Grok (the FAQ adds Azure and custom endpoints), and bring your own key." },
      { q: "Are AI summaries always accurate?", a: "No AI is perfect. Treat summaries like scanned fields: check names, numbers and commitments before relying on them." },
    ],
    related: ["features/meeting-memory/summary-examples", "features/meeting-memory/searchable-memory", "features/meeting-memory/voice-notes", "platform/bring-your-own-ai"],
    source: "mixed",
  },
  {
    slug: "features/meeting-memory/summary-examples",
    category: "meetings",
    title: "Summary Examples",
    seoTitle: "Sample Meeting Summaries for Contacts",
    description: "Sample meeting summaries for a realtor, a doctor and a startup founder, showing what a concise, searchable summary of a first meeting can look like.",
    h1: "What a good meeting summary looks like",
    eyebrow: "Examples",
    intro: "These are fictional sample summaries, modelled on eCard's three demo personas: Realtor, Doctor and Startup founder.",
    variant: "reference",
    visual: "meeting",
    icon: "file",
    sections: [
      {
        type: "cards",
        heading: "Three sample summaries",
        cards: [
          { title: "Sample: Priya Shah, Realtor", body: "Met at a Pune property expo. Represents buyers seeking 2BHK flats under ₹90 lakh in Baner. Wants brochures for two projects. Prefers WhatsApp in Marathi. Next: send brochures, propose site visit Sunday.", icon: "building" },
          { title: "Sample: Dr. Arvind Rao, Doctor", body: "Met at a Hyderabad medical conference. Runs a three-doctor clinic, interested in appointment reminders. Introduced by Dr. Meena. Next: email product overview, call in two weeks.", icon: "users" },
          { title: "Sample: Zoya Khan, Startup founder", body: "Met at a Bengaluru founders' meetup. Pre-seed fintech, looking for pilot partners. Next: share deck, intro to our partnerships lead.", icon: "zap" },
        ],
      },
      {
        type: "bullets",
        heading: "Patterns to notice",
        items: [
          "Each starts with where you met.",
          "Needs are specific: budget, size, timing.",
          "Preferred channel and language are noted.",
          "Each ends with a clear next step.",
        ],
      },
      {
        type: "table",
        heading: "Searches these would answer",
        headers: ["Search (sample)", "Finds"],
        rows: [
          ["Realtors I met in Pune", "Priya Shah"],
          ["Clinics interested in reminders", "Dr. Arvind Rao"],
          ["Founders looking for pilots", "Zoya Khan"],
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Illustrative only",
        body: "These are hand-written samples, not output captured from eCard.",
      },
      {
        "type": "table",
        "heading": "Sample: before and after",
        "intro": "Fictional sample showing how a rough note becomes a usable summary.",
        "headers": [
          "Rough voice note (sample)",
          "Concise summary (sample)"
        ],
        "rows": [
          [
            "\"So Kiran, the guy from the Chennai textile place, he said they're fed up with their current dye supplier, something about delays, and maybe they'd try us, I said I'd send samples, he mentioned their MD decides…\"",
            "Kiran Iyer, Chennai textile mill. Unhappy with current dye supplier over delays. Open to trial. MD decides. Next: send samples this week."
          ]
        ]
      },
      {
        "type": "cards",
        "heading": "More samples from other contexts",
        "cards": [
          {
            "title": "Sample: Anil Verma, Distributor",
            "body": "Met at a Delhi FMCG expo. Covers 40 retailers in north Delhi. Wants 15% margin and credit terms. Next: send distributor terms, call Monday.",
            "icon": "briefcase"
          },
          {
            "title": "Sample: Meera Nair, HR Head",
            "body": "Met at a Kochi HR summit. Hiring 10 engineers by June. Introduced by Rohan. Next: share candidate shortlist process.",
            "icon": "users"
          }
        ]
      },
      {
        "type": "bullets",
        "heading": "What to leave out of a summary",
        "items": [
          "Small talk that doesn't affect the next step.",
          "Your opinion of the person's personality.",
          "Sensitive personal data such as health or family matters.",
          "Information already on the card, such as phone number and title."
        ]
      },
      {
        "type": "prose",
        "heading": "Adapting the pattern to your work",
        "paragraphs": [
          "A recruiter's summary leans on role, notice period and salary band. A supplier's leans on quantities, lead times and samples. A founder's leans on stage, ask and who else is involved. The pattern stays the same: where you met, the need, commitments, next step.",
          "Pick the three or four facts that decide your next action in your line of work, and make sure every voice note mentions them."
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Read your own summaries a week later",
        "body": "The real test of a summary is whether it still makes sense once the meeting has faded. Pick five summaries from last week and ask: could I write a follow-up from this alone? If not, note what was missing and say it in your next voice note."
      },
    ],
    faqs: [
      { q: "Are these real eCard outputs?", a: "No. They are fictional samples to illustrate a useful summary." },
      { q: "Can I try a sample scan?", a: "Yes. eCard's site has a sample scan demo with Realtor, Doctor and Startup founder personas." },
      { q: "How long should a summary be?", a: "General guidance: two to four sentences. Enough to recall need, commitment and next step." },
      { q: "Can I copy these samples as templates?", a: "Yes, as a pattern for your own notes. Replace every detail with real information from your meetings." },
    ],
    related: ["features/meeting-memory/ai-summaries", "product/sample-personas", "sample-scan", "features/meeting-memory/voice-note-tips"],
    source: "mixed",
  },
  {
    slug: "features/meeting-memory/searchable-memory",
    category: "meetings",
    title: "Searchable Memory",
    seoTitle: "Search Your Network in Plain Language",
    description: "Find people by what you remember — \"Investors I met in Mumbai last month\" — using eCard's natural-language search over contacts and meeting summaries.",
    h1: "Ask your network a question",
    eyebrow: "Search",
    intro: "You rarely remember a name. You remember \"that investor from Mumbai last month\". eCard's natural-language search is built for that.",
    variant: "feature",
    visual: "dashboard",
    icon: "search",
    sections: [
      {
        type: "split",
        heading: "Search the way you remember",
        body: [
          "eCard's example query is \"Investors I met in Mumbai last month\". It combines a role, a place and a time, the three things people actually recall.",
          "Searchable AI summaries add a fourth dimension: what you talked about.",
        ],
        points: ["Who they are", "Where you met", "When", "What was discussed"],
      },
      {
        type: "table",
        heading: "Sample queries to try",
        headers: ["Query", "What it relies on"],
        rows: [
          ["Investors I met in Mumbai last month", "Role, city, date"],
          ["Distributors from the Delhi expo", "Role, event"],
          ["People who asked for a demo", "AI summary"],
          ["Contacts Kavya introduced", "Meeting memory"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Good memory makes good search",
        body: "The more context you capture in meeting memory and tags, the better plain-language search can work.",
      },
      {
        type: "prose",
        heading: "Search before you reach out",
        paragraphs: [
          "Before a trip, a pitch or a hiring push, a two-second search can surface people you'd forgotten you knew. That's often where the warmest opportunities are.",
        ],
      },
      {
        "type": "steps",
        "heading": "Writing better queries",
        "steps": [
          {
            "title": "Start broad",
            "body": "\"People I met in Pune\" shows the size of the pool."
          },
          {
            "title": "Add a role",
            "body": "\"Builders I met in Pune\" narrows it to who matters."
          },
          {
            "title": "Add time",
            "body": "\"…in the last three months\" filters out stale contacts."
          },
          {
            "title": "Add a topic",
            "body": "\"…who asked about bulk pricing\" relies on what your summaries contain."
          }
        ]
      },
      {
        "type": "cards",
        "heading": "Scenarios where search pays off",
        "cards": [
          {
            "title": "Launching a product",
            "body": "Find everyone who asked about the feature you just shipped.",
            "icon": "sparkles"
          },
          {
            "title": "Fundraising",
            "body": "Pull up investors you met at last year's events before you start a round.",
            "icon": "chart"
          },
          {
            "title": "Hiring",
            "body": "Find people who mentioned they were open to a move.",
            "icon": "briefcase"
          },
          {
            "title": "Re-engagement",
            "body": "List contacts from an old trade show who never received a follow-up.",
            "icon": "bell"
          }
        ]
      },
      {
        "type": "bullets",
        "heading": "When search comes up empty",
        "items": [
          "Try a synonym: \"distributor\" vs \"dealer\", \"Bengaluru\" vs \"Bangalore\".",
          "Drop the time filter; you may have met them earlier than you think.",
          "Search by the event instead of the city.",
          "If the context was never captured, no search can find it; that's a prompt to capture it next time."
        ]
      },
      {
        "type": "table",
        "heading": "Sample: a weekly search routine",
        "intro": "General guidance for making search a habit.",
        "headers": [
          "Day",
          "Search (sample)",
          "Purpose"
        ],
        "rows": [
          [
            "Monday",
            "People I met last week",
            "Check every contact got a follow-up"
          ],
          [
            "Wednesday",
            "Contacts who asked for pricing",
            "Make sure quotes went out"
          ],
          [
            "Friday",
            "Investors I met in Mumbai last month",
            "Plan next week's calls"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Why plain language beats filters",
        "paragraphs": [
          "Traditional CRMs expect you to know which field holds which value: industry dropdown, city field, created-date range. Most people don't think that way. They remember a fragment, such as a role, a place, roughly when, or something the person said.",
          "Natural-language search accepts that fragment as it is. The trade-off is that it depends on the context you captured. Tags, where you met and summaries are what turn a vague question into a short, accurate list."
        ]
      },
    ],
    faqs: [
      { q: "Do I need special syntax?", a: "No. eCard's search accepts natural-language queries." },
      { q: "Does search include meeting summaries?", a: "eCard describes the AI summary as searchable." },
      { q: "Can I search by who introduced someone?", a: "Who introduced you is part of meeting memory. Including the introducer's name in notes makes it easier to find in searchable summaries." },
      { q: "Is search available on the Free plan?", a: "eCard's site lists natural-language search as a homepage feature, but the pricing table does not say which plans include it. Check plan details in the app." },
      { q: "Does search find contacts by what we discussed?", a: "It can, when the discussion is captured. eCard describes the AI summary as searchable, so a query about a topic depends on that topic appearing in your notes." },
    ],
    related: ["features/contact-management/natural-language-search", "features/contact-management/search-examples", "features/meeting-memory/ai-summaries", "features/contact-management/search-tips"],
    source: "verified",
  },
  {
    slug: "features/meeting-memory/calendar-and-meet-booking",
    category: "meetings",
    title: "Calendar & Meet Booking",
    seoTitle: "Google Calendar & Meet Booking on Paid Plans",
    description: "eCard's paid plans include Google Calendar & Meet booking, from Starter at ₹299/month. What's included by plan and what the site does not yet document.",
    h1: "Turn a follow-up into a booked meeting",
    eyebrow: "Calendar",
    intro: "Google Calendar & Meet booking appears on eCard's Starter, Professional, Business and Enterprise plans.",
    variant: "feature",
    visual: "meeting",
    icon: "calendar",
    sections: [
      {
        type: "table",
        heading: "Availability by plan",
        headers: ["Plan", "Price / month", "Calendar & Meet booking"],
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
        heading: "Why booking belongs next to memory",
        paragraphs: [
          "The goal of most follow-ups is a second conversation. Having booking in the same place as the contact and its meeting memory removes a step between \"let's talk\" and a date in the diary.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Details not on the site",
        body: "eCard's pricing page lists Google Calendar & Meet booking but doesn't describe how booking works, booking pages, or calendar sync direction. Check the app or ask sales@bizzfly.com.",
      },
      {
        type: "bullets",
        heading: "General tips for booking follow-up meetings",
        items: [
          "Offer two or three specific slots rather than \"whenever suits\".",
          "Use video calls for distant contacts; in person for local, high-value ones.",
          "Add the meeting context to the invite description.",
          "Mind time zones for international contacts.",
        ],
      },
      {
        "type": "steps",
        "heading": "A general booking workflow after an event",
        "intro": "General guidance; eCard's site does not document the booking screens.",
        "steps": [
          {
            "title": "Prioritise",
            "body": "Pick the contacts whose summaries show a clear need and a near-term timeline."
          },
          {
            "title": "Propose times",
            "body": "In your follow-up, suggest two or three specific slots within the next week."
          },
          {
            "title": "Choose the format",
            "body": "In person for nearby high-value contacts; video for everyone else."
          },
          {
            "title": "Add context to the invite",
            "body": "One line on what you'll cover, drawn from the meeting summary."
          },
          {
            "title": "Prepare",
            "body": "Re-read meeting memory five minutes before the call."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Video or in person?",
        "headers": [
          "Situation",
          "Suggested format"
        ],
        "rows": [
          [
            "Contact in another city",
            "Video call"
          ],
          [
            "First demo of a software product",
            "Video call with screen share"
          ],
          [
            "Large deal or site-specific need",
            "In person"
          ],
          [
            "Quick clarification",
            "Phone or short video call"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Sample: from summary to invite",
        "paragraphs": [
          "Sample summary: \"Dr. Arvind Rao, three-doctor clinic, Hyderabad. Interested in appointment reminders. Prefers evenings.\"",
          "Sample invite title: \"Appointment reminders: 20-minute walkthrough\". Sample description: \"Following our chat at the Hyderabad medical conference. We'll look at how reminders could work for a three-doctor clinic.\" Offered slots: two evening options later in the week.",
          "The invite reuses the context you already captured, so the contact remembers why the meeting exists when it appears in their calendar."
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls when booking",
        "items": [
          "Sending an invite before the contact has agreed to meet.",
          "Generic titles like \"Catch-up\" that mean nothing a week later.",
          "Forgetting to re-read memory before the call you just booked."
        ]
      },
      {
        "type": "prose",
        "heading": "Choosing a plan for booking",
        "paragraphs": [
          "If booking follow-up meetings is central to how you work, Starter at ₹299/month is the lowest plan that lists Google Calendar & Meet booking, alongside Google Contacts sync. Professional at ₹999/month adds webhooks, and Business at ₹2,999/month adds white label and a custom domain.",
          "Prices are monthly in INR; GST applies where applicable. You can cancel any time and keep access until the end of the period."
        ]
      },
    ],
    faqs: [
      { q: "Which plan do I need?", a: "Starter (₹299/month) or higher." },
      { q: "Is it in the free trial?", a: "New workspaces get a 14-day Professional trial, and Professional includes Calendar & Meet booking." },
      { q: "Does it work with Outlook calendars?", a: "The site names Google Calendar & Meet only." },
      { q: "Can I try booking before paying?", a: "The 14-day Professional trial needs no card, and Professional includes Google Calendar & Meet booking." },
      { q: "Does booking replace my existing calendar?", a: "No booking details are documented beyond the name Google Calendar & Meet booking. Your Google Calendar remains your calendar; check in the app how eCard connects to it." },
    ],
    related: ["pricing/starter", "pricing/compare-plans", "pricing/free-trial", "features/meeting-memory/prepare-for-meetings", "product/feature-availability"],
    source: "verified",
  },
  {
    slug: "features/meeting-memory/notes-to-follow-up",
    category: "meetings",
    title: "Notes to Follow-Up",
    seoTitle: "From Meeting Notes to a Follow-Up Message",
    description: "Turn meeting notes, voice notes and AI summaries into a personal follow-up email or WhatsApp message with eCard, in under a minute per contact.",
    h1: "From what was said to what you send",
    eyebrow: "Workflow",
    intro: "Notes are only useful if they change what you do next. Here's how meeting memory feeds your follow-ups.",
    variant: "guide",
    visual: "email",
    icon: "send",
    sections: [
      {
        type: "steps",
        heading: "The workflow",
        steps: [
          { title: "Capture", body: "Scan the card and record a voice note." },
          { title: "Summarise", body: "eCard produces a searchable AI summary." },
          { title: "Draft", body: "Start an intro email or WhatsApp message from the contact." },
          { title: "Personalise", body: "Add a line from the summary: their need or your promise." },
          { title: "Send", body: "Email sends after 5 seconds from your mailbox; WhatsApp opens in one tap." },
        ],
      },
      {
        type: "table",
        heading: "Note to message",
        intro: "Fictional sample data.",
        headers: ["Note", "Message line"],
        rows: [
          ["Promised pricing by Friday", "As promised, here's our pricing."],
          ["Prefers Hindi on WhatsApp", "Send WhatsApp in Hindi"],
          ["Decision in March", "Happy to reconnect early March."],
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Manual step",
        body: "eCard's site doesn't say AI drafts automatically pull in meeting notes. Add the detail yourself when editing.",
      },
      {
        type: "bullets",
        heading: "Keep promises visible",
        items: [
          "Note every commitment, however small.",
          "Deliver it in the first follow-up when possible.",
          "Record what you sent so teammates don't duplicate.",
        ],
      },
      {
        "type": "prose",
        "heading": "Sample: one note, two messages",
        "paragraphs": [
          "Sample note: \"Met Rohit Bansal, Jaipur, runs a chain of four opticians. Wants a quote for 200 frames. Prefers WhatsApp in Hindi. Promised the catalogue by Thursday.\"",
          "Sample email line: \"Thanks for the chat at the Jaipur trade fair. As promised, our catalogue is attached, and I'll follow with a quote for 200 frames once you confirm the styles.\"",
          "Sample WhatsApp (to be written in Hindi): a short greeting, a reminder of where you met, the catalogue link, and a question about which styles he liked."
        ]
      },
      {
        "type": "table",
        "heading": "Which channel the notes point to",
        "headers": [
          "Note says",
          "Lead with"
        ],
        "rows": [
          [
            "Prefers WhatsApp, or gave a mobile number only",
            "WhatsApp in English, Hindi or Marathi"
          ],
          [
            "Formal buyer, procurement process",
            "Intro email from your own address"
          ],
          [
            "Promised a document",
            "Whichever channel lets you send it fastest"
          ],
          [
            "Unclear preference",
            "Email first, WhatsApp if no reply"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls when turning notes into messages",
        "items": [
          "Pasting the whole summary into the message; pick one detail.",
          "Promising something new in the follow-up before delivering the original promise.",
          "Sending the same generic text to everyone from one event."
        ]
      },
      {
        "type": "steps",
        "heading": "Working through a pile after an event",
        "steps": [
          {
            "title": "Sort by warmth",
            "body": "Read summaries and start with contacts who had a clear need."
          },
          {
            "title": "Deliver promises first",
            "body": "Anyone you promised something to gets their message before generic thank-yous."
          },
          {
            "title": "Batch by language",
            "body": "Group WhatsApp messages by English, Hindi or Marathi so you stay in one mode."
          },
          {
            "title": "Note what went out",
            "body": "A one-line voice note per contact records what you sent."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "When the notes say \"not now\"",
        "paragraphs": [
          "Some meetings end with a clear no for the moment: no budget this year, a contract locked until next spring. Those notes are still worth acting on. Send a short thank-you that acknowledges the timing, then record the date they mentioned so a search near that time brings them back.",
          "A polite, well-timed message months later, referencing exactly what they said, is often better received than an eager follow-up the next morning."
        ]
      },
    ],
    faqs: [
      { q: "Can I follow up from the meeting record?", a: "Follow-ups start from the contact, where meeting memory is kept." },
      { q: "Which channels?", a: "Intro email from your own SMTP, and WhatsApp in English, Hindi or Marathi." },
      { q: "Can I stop an email if I spot a mistake?", a: "Yes. Intro emails send after 5 seconds, and you can edit or cancel them before then." },
      { q: "How soon should I follow up after a meeting?", a: "General guidance: within 24 to 48 hours, while both of you still remember the conversation." },
    ],
    related: ["features/outreach/personalised-follow-ups", "features/outreach/ai-email-drafts", "features/meeting-memory/meeting-context", "platform/follow-up-engine"],
    source: "mixed",
  },
  {
    slug: "features/meeting-memory/prepare-for-meetings",
    category: "meetings",
    title: "Prepare for Meetings",
    seoTitle: "Prepare for a Meeting in Five Minutes",
    description: "A five-minute pre-meeting routine using eCard's meeting memory, AI summaries and link tracking so you walk in knowing the history and what they've seen.",
    h1: "Walk in already knowing the story",
    eyebrow: "Guidance",
    intro: "Preparation is the cheapest way to look impressive. A quick look at meeting memory before a second meeting goes a long way.",
    variant: "guide",
    visual: "meeting",
    icon: "briefcase",
    sections: [
      {
        type: "steps",
        heading: "A five-minute routine",
        steps: [
          { title: "Read the summary", body: "Recall needs, promises and next steps." },
          { title: "Check who introduced you", body: "Mention them if relevant." },
          { title: "Look at engagement", body: "Link tracking shows if they opened your card, PDF or WhatsApp link." },
          { title: "Check the company", body: "A quick web search for recent news." },
          { title: "Write one goal", body: "Decide what a good outcome of this meeting is." },
        ],
      },
      {
        type: "cards",
        heading: "Questions to walk in with",
        cards: [
          { title: "Has anything changed?", body: "Budgets, timelines and people move.", icon: "clock" },
          { title: "Who else decides?", body: "Find the other stakeholders.", icon: "users" },
          { title: "What would success look like?", body: "In their words.", icon: "check" },
        ],
      },
      {
        type: "prose",
        heading: "Signals from tracking",
        paragraphs: [
          "If they opened your brochure three times, they're likely comparing options. If they never opened anything, start by re-establishing the problem. eCard's link tracking gives you that signal without asking.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "After the meeting",
        body: "Record a voice note straight away to update meeting memory for next time.",
      },
      {
        "type": "table",
        "heading": "Sample prep sheet",
        "intro": "Fictional sample for a second meeting.",
        "headers": [
          "Item",
          "Sample entry"
        ],
        "rows": [
          [
            "Contact",
            "Sample: Zoya Khan, Founder"
          ],
          [
            "First met",
            "Founders' meetup, Bengaluru; introduced by Kavya"
          ],
          [
            "Their need",
            "Pilot partner for a payments product"
          ],
          [
            "What we sent",
            "Deck and pricing; deck opened twice"
          ],
          [
            "Open promise",
            "Intro to our partnerships lead"
          ],
          [
            "Goal for today",
            "Agree pilot scope and a start date"
          ]
        ]
      },
      {
        "type": "bullets",
        "heading": "Mistakes that show you didn't prepare",
        "items": [
          "Asking questions already answered in the first meeting.",
          "Forgetting the introducer they mentioned.",
          "Re-pitching from scratch when they have already read your material.",
          "Arriving without the document you promised last time."
        ]
      },
      {
        "type": "steps",
        "heading": "Preparing for a group meeting",
        "steps": [
          {
            "title": "List attendees",
            "body": "Check which ones you have met before and read their memory."
          },
          {
            "title": "Map roles",
            "body": "Note who decides, who influences and who will use the product."
          },
          {
            "title": "Plan one question per person",
            "body": "It keeps everyone engaged and shows you remember them."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "When you have only one minute",
        "paragraphs": [
          "Sometimes the call starts before you expected. In that case, read only two things: the next step from the summary, and anything you promised. Opening with \"Last time I said I'd send the pricing, did it reach you?\" shows you remembered, even if you prepared for sixty seconds."
        ]
      },
      {
        "type": "callout",
        "tone": "note",
        "title": "What eCard provides here",
        "body": "eCard documents meeting memory, searchable AI summaries, link tracking of card, PDF and WhatsApp link opens, and Google Calendar & Meet booking on paid plans. The routine on this page is general guidance built on those features."
      },
      {
        "type": "bullets",
        "heading": "Pre-meeting checklist",
        "items": [
          "Summary read: need, promises, next step.",
          "Introducer noted and worth mentioning?",
          "Material sent and whether it was opened.",
          "Open promises from your side delivered.",
          "One goal for the meeting written down.",
          "Contact's preferred channel for the follow-up afterwards."
        ]
      },
    ],
    faqs: [
      { q: "Can I see if they opened what I sent?", a: "eCard tracks opens of your card, PDFs and WhatsApp links." },
      { q: "How do I find the contact quickly?", a: "Use natural-language search, e.g. by city, role or time." },
      { q: "Can I book the meeting from eCard?", a: "Google Calendar & Meet booking is available on Starter and higher plans." },
      { q: "Should I mention that they opened my brochure?", a: "General guidance: no. Use the signal to shape your conversation, but don't tell people you tracked their opens; it can feel intrusive." },
      { q: "How long should preparation take?", a: "General guidance: five minutes for a second meeting is usually enough. Read the summary, check what was sent and opened, and write down one goal for the conversation." },
    ],
    related: ["features/meeting-memory/relationship-timeline", "features/link-tracking/contact-activity", "features/meeting-memory/calendar-and-meet-booking", "features/meeting-memory/searchable-memory"],
    source: "mixed",
  },
  {
    slug: "features/meeting-memory/memory-for-teams",
    category: "meetings",
    title: "Memory for Teams",
    seoTitle: "Shared Meeting Memory for Sales Teams",
    description: "How shared workspaces and roles help teams keep meeting context in one place, hand over leads cleanly and avoid double follow-ups with the same contact.",
    h1: "Team memory that survives handovers",
    eyebrow: "Teams",
    intro: "When a rep leaves or a lead changes hands, the context usually leaves too. Keeping meeting memory in a shared workspace changes that.",
    variant: "solution",
    visual: "team",
    icon: "users",
    sections: [
      {
        type: "cards",
        heading: "What teams gain",
        cards: [
          { title: "Clean handovers", body: "The closer sees what the first contact heard.", icon: "merge" },
          { title: "No double follow-ups", body: "Teammates can see who already met someone.", icon: "ban" },
          { title: "Continuity", body: "Relationships stay with the business when people move on.", icon: "archive" },
        ],
      },
      {
        type: "table",
        heading: "eCard roles",
        intro: "Roles named on eCard's site. Exact permissions are documented in the app.",
        headers: ["Role", "Typical use"],
        rows: [
          ["Owner", "Workspace owner and billing"],
          ["Admin", "Manages settings and users"],
          ["Manager", "Oversees a team's contacts"],
          ["Member", "Scans and follows up"],
          ["Scan-only guest", "Temporary help at events"],
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Visibility rules",
        body: "eCard's site names roles but doesn't document who can see which contacts' meeting memory. Check in-app role settings.",
      },
      {
        type: "bullets",
        heading: "Team habits",
        items: [
          "Agree a voice-note structure everyone uses.",
          "Tag contacts by owner or territory.",
          "Use the audit log to review workspace activity.",
        ],
      },
      {
        "type": "steps",
        "heading": "A clean lead handover",
        "intro": "General guidance for moving a contact between teammates.",
        "steps": [
          {
            "title": "Update the summary",
            "body": "The person handing over makes sure need, promises and next step are current."
          },
          {
            "title": "Record the introducer",
            "body": "If the original rep made the connection, say so, so the new owner can reference it."
          },
          {
            "title": "Tag the new owner",
            "body": "Use tags by owner or territory so ownership is searchable."
          },
          {
            "title": "Introduce the new owner",
            "body": "A short message from the original rep keeps the trust intact."
          }
        ]
      },
      {
        "type": "cards",
        "heading": "Scenarios",
        "cards": [
          {
            "title": "Event staffing",
            "body": "Scan-only guests capture cards at a busy stand; members follow up afterwards with the context recorded.",
            "icon": "scan"
          },
          {
            "title": "Territory change",
            "body": "A manager reassigns a region and the new rep reads meeting memory before calling anyone.",
            "icon": "map"
          },
          {
            "title": "Rep leaves",
            "body": "Contacts and their history stay in the workspace rather than in a personal phone.",
            "icon": "archive"
          }
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls in shared memory",
        "items": [
          "Inconsistent note styles that make summaries hard to compare.",
          "Two reps contacting the same person after one event because nobody checked.",
          "Recording opinions about colleagues or clients that shouldn't be shared."
        ]
      },
      {
        "type": "table",
        "heading": "Sample: a shared note standard",
        "intro": "Fictional sample a team might agree on.",
        "headers": [
          "Field",
          "Team rule (sample)"
        ],
        "rows": [
          [
            "Where you met",
            "Event name, city, stand or venue"
          ],
          [
            "Introducer",
            "Full name, or \"self\""
          ],
          [
            "Voice note",
            "Who, need, promise, next step, in that order"
          ],
          [
            "Tags",
            "Owner initials and territory"
          ]
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Review together",
        "body": "A ten-minute weekly review of new contacts' summaries helps a team spot duplicates, stalled follow-ups and gaps in notes early."
      },
      {
        "type": "prose",
        "heading": "Plan limits for growing teams",
        "paragraphs": [
          "User counts on eCard plans: Free 5, Starter 20, Professional 100, Business and Enterprise unlimited. Storage also scales by plan, from 1 GB on Free to unlimited on Business. A team that records voice notes for every contact should keep an eye on storage as well as seats.",
          "Workspace security includes 2FA with authenticator codes, recovery codes, trusted devices and login alerts, which matters more as more people gain access to shared memory."
        ]
      },
    ],
    faqs: [
      { q: "How many users can share a workspace?", a: "Free 5, Starter 20, Professional 100, Business and Enterprise unlimited." },
      { q: "Is there an audit log?", a: "Yes. Workspaces have an audit log." },
      { q: "Is there a role for temporary event staff?", a: "Yes. eCard names a scan-only guest role." },
      { q: "Can a workspace see what changed and who changed it?", a: "eCard workspaces have an audit log. The site does not document exactly which actions it records; check in the app." },
      { q: "What happens to meeting memory when someone leaves the team?", a: "Contacts and their memory live in the shared workspace rather than on a personal phone. The site does not document reassignment steps; check role settings in the app." },
    ],
    related: ["features/team-security/roles-and-permissions", "features/contact-management/shared-team-contacts", "platform/for-teams", "use-cases/sales-teams"],
    source: "mixed",
  },
  {
    slug: "features/meeting-memory/relationship-timeline",
    category: "meetings",
    title: "Relationship Timeline",
    seoTitle: "Build a Relationship Timeline for Each Contact",
    description: "Think of every contact as a timeline: first meeting, intro, follow-ups, opens and next meetings. How eCard's memory and tracking build that history.",
    h1: "See a relationship as it unfolds",
    eyebrow: "Meeting memory",
    intro: "Relationships are stories over time. Meeting memory, outreach and link tracking together give each contact a history you can read at a glance.",
    variant: "feature",
    visual: "dashboard",
    icon: "clock",
    sections: [
      {
        type: "table",
        heading: "Sample timeline",
        intro: "Fictional sample: Priya Shah, Realtor.",
        headers: ["When", "Event"],
        rows: [
          ["Day 0", "Met at Pune property expo; card scanned; voice note recorded"],
          ["Day 0", "Intro email sent from your mailbox"],
          ["Day 1", "WhatsApp in Marathi with brochure link"],
          ["Day 2", "Brochure opened (link tracking)"],
          ["Day 5", "Site visit booked"],
        ],
      },
      {
        type: "prose",
        heading: "Why a timeline view helps",
        paragraphs: [
          "Seeing the sequence tells you what to do next. A contact who opened everything but never replied needs a different approach from one who replied once and went quiet.",
        ],
      },
      {
        type: "bullets",
        heading: "What feeds the history",
        items: [
          "Meeting memory: where you met, who introduced you, voice notes, AI summary.",
          "Outreach: intro emails and WhatsApp messages.",
          "Link tracking: opens of your card, PDFs and WhatsApp links.",
          "Contact history in the CRM.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "About the view",
        body: "eCard's site doesn't show a timeline screen. This page describes the history you can build from its documented features.",
      },
      {
        "type": "table",
        "heading": "Reading common patterns",
        "intro": "General guidance on what a history suggests.",
        "headers": [
          "Pattern",
          "Likely meaning",
          "Suggested next step"
        ],
        "rows": [
          [
            "Opened everything, no reply",
            "Interested but busy or undecided",
            "Short message with one specific question"
          ],
          [
            "Replied once, then quiet",
            "Priorities shifted",
            "Check in around the timeline they mentioned"
          ],
          [
            "Nothing opened",
            "Message missed or wrong channel",
            "Try the other channel"
          ],
          [
            "Repeated brochure opens",
            "Comparing options",
            "Offer a call to answer questions"
          ]
        ]
      },
      {
        "type": "steps",
        "heading": "Keeping the history complete",
        "steps": [
          {
            "title": "Log the first meeting",
            "body": "Where you met, introducer and a voice note on day zero."
          },
          {
            "title": "Send from eCard",
            "body": "Use intro emails and WhatsApp from the contact so outreach stays alongside memory."
          },
          {
            "title": "Use tracked links",
            "body": "Share your card and PDFs as links so opens are recorded."
          },
          {
            "title": "Add a note after each touchpoint",
            "body": "A one-line voice note after calls and meetings keeps the story continuous."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "Long relationships",
        "paragraphs": [
          "Some contacts take a year or more to become customers or partners. Without history, each conversation restarts from zero. With it, you can open a call by recalling what they told you last spring, which is often what wins the relationship."
        ]
      },
      {
        "type": "bullets",
        "heading": "Pitfalls that break the story",
        "items": [
          "Sending messages from a personal phone or another tool, so they never appear alongside the contact.",
          "Attaching files directly instead of sharing tracked links, losing the open signal.",
          "Skipping notes after calls, leaving gaps of months with no record of what was said.",
          "Several teammates contacting the same person without recording it."
        ]
      },
      {
        "type": "prose",
        "heading": "Timelines for teams",
        "paragraphs": [
          "When several people touch one relationship, a shared history prevents mixed messages. A manager can read the sequence before a renewal call; a new rep can see what was promised before they inherited the account. Agreeing that every touchpoint gets a one-line note keeps the story readable for everyone."
        ]
      },
    ],
    faqs: [
      { q: "Is there a timeline screen in eCard?", a: "The site doesn't document one. See Contact History in Contact Management." },
      { q: "What engagement is tracked?", a: "Opens of your card, PDFs and WhatsApp links." },
      { q: "How do I make sure outreach shows up in the history?", a: "Send intro emails and WhatsApp messages from the contact in eCard, and share tracked links rather than attachments where possible." },
      { q: "Can I export a contact's history?", a: "eCard lists bulk import and export on every plan. The site does not document exactly which history fields an export includes." },
      { q: "Which events should I record in a contact's history?", a: "General guidance: every meeting, call, message sent and document shared, plus any change in their need or timeline. One line each is enough." },
    ],
    related: ["features/contact-management/contact-history", "features/link-tracking/contact-activity", "features/contact-management/contact-lifecycle", "platform/relationship-memory"],
    source: "mixed",
  },
];
