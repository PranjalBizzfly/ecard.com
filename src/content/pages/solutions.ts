import type { PageDef, Section, FAQ } from "../types";

const UC = "use-cases";

export const pages: PageDef[] = [
  {
    slug: "use-cases",
    category: "solutions",
    title: "Use Cases",
    seoTitle: "eCard Use Cases: Visiting-Card CRM by Industry",
    description: "See how people who collect visiting cards for a living can map their workflow onto eCard’s scanning, meeting memory, WhatsApp and email follow-up.",
    h1: "Made for whoever collects cards for a living",
    eyebrow: "Use cases",
    intro: "Every profession collects cards differently: at a site visit, a booth, a clinic desk or a pitch night. These pages walk through common workflows and show which eCard features fit each step.",
    variant: "solution",
    visual: "dashboard",
    icon: "layers",
    sections: [
      {
        type: "prose",
        heading: "One habit, many workflows",
        paragraphs: [
          "A visiting card is a promise to follow up. What changes from field to field is where the card is handed over, how quickly the other person expects to hear from you, and which channel feels natural: a WhatsApp message in Marathi for a home buyer, a formal email for a law-firm partner, a brochure link for a distributor.",
          "eCard’s core loop stays the same for all of them: scan the card with the AI model you choose, review every field before it is saved, record where you met, and send an intro email or WhatsApp message while the conversation is fresh.",
        ],
      },
      {
        type: "cards",
        heading: "Browse by role",
        intro: "Real estate is the use case eCard’s own site describes in detail. The others are workflow guides that apply eCard’s documented features to typical industry routines.",
        cards: [
          { title: "Real Estate", body: "Site-visit cards turned into booked visits, with brochures you can track.", icon: "building" },
          { title: "Events & Expos", body: "Group every card from a show and follow up with the room.", icon: "calendar" },
          { title: "Sales Teams", body: "Shared contacts, roles and natural-language search for field reps.", icon: "briefcase" },
          { title: "Agencies", body: "White-label cards and pitch follow-ups under your own brand.", icon: "palette" },
          { title: "Professional services", body: "Lawyers, CAs, consultants and advisors who follow up formally.", icon: "file" },
          { title: "Founders & investors", body: "Pitch nights, demo days and warm introductions you remember.", icon: "sparkles" },
        ],
      },
      {
        type: "table",
        heading: "Which feature matters most where",
        headers: ["Workflow", "Most useful eCard feature", "Plan note"],
        rows: [
          ["High-volume card collection", "Events & expos grouping, Telegram bot", "All plans"],
          ["Regional-language follow-up", "WhatsApp in English, Hindi or Marathi", "All plans"],
          ["Formal email intros", "AI draft sent from your own SMTP after 5 seconds", "All plans"],
          ["Pushing contacts into other systems", "Signed webhooks for each new contact", "Professional and above"],
          ["Branded cards for a firm", "White-label logo, colours and custom domain", "Business and above"],
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "About these pages",
        body: "Except for real estate, eCard’s website only names its use cases. Industry pages here describe typical workflows as guidance and do not suggest that eCard has customers in those industries.",
      },
    ],
    faqs: [
      { q: "Is eCard built for one specific industry?", a: "No. It is a general visiting-card CRM. Its site describes a real-estate workflow in detail and names events & expos, sales teams and agencies as use cases." },
      { q: "Can I try it before choosing a plan?", a: "Yes. The Free plan includes 50 scans a month, and new workspaces get a 14-day Professional trial with no card needed." },
    ],
    related: [`${UC}/real-estate`, `${UC}/events-expos`, `${UC}/sales-teams`, "pricing", "how-it-works"],
    source: "mixed",
  },
  {
    slug: `${UC}/real-estate`,
    category: "solutions",
    title: "Real Estate",
    seoTitle: "Real Estate Visiting-Card CRM | Site Visits to Bookings",
    description: "Turn site-visit cards into booked visits: scan buyer and broker cards, send your brochure with your card, see who opened it and follow up on WhatsApp.",
    h1: "Turn site-visit cards into booked visits",
    eyebrow: "Real estate",
    intro: "Scan buyer and broker cards, send the brochure with your card and see who opened it, and follow up in Marathi or Hindi on WhatsApp.",
    variant: "solution",
    visual: "whatsapp",
    icon: "building",
    sections: [
      {
        type: "steps",
        heading: "A site-visit day, step by step",
        steps: [
          { title: "Scan at the sample flat", body: "Photograph the buyer’s or channel partner’s card in any phone browser. The AI fills each field with a confidence score, and nothing is saved until you review it." },
          { title: "Note the context", body: "Use meeting memory to record the project, who referred the buyer and a voice note on their budget or preferred floor." },
          { title: "Send the brochure", body: "Share your digital card and the project PDF. Link tracking shows when your card, PDF or WhatsApp link is opened." },
          { title: "Follow up in their language", body: "AI writes a WhatsApp message in English, Hindi or Marathi, which opens in WhatsApp in one tap." },
        ],
      },
      {
        type: "split",
        heading: "Brokers and buyers in one place",
        body: [
          "Channel partners, buyers, loan agents and interior vendors all hand over cards. Tags and events help you keep each project’s contacts together, and natural-language search finds people later, for example: “brokers I met at the Pune launch last month”.",
        ],
        points: [
          "Addresses on cards are checked against Google Maps",
          "Duplicate merge for brokers who visit more than once",
          "Short links count clicks with bots filtered out",
        ],
      },
      {
        type: "prose",
        heading: "Why speed matters after a site visit",
        paragraphs: [
          "Buyers often visit several projects on the same weekend. A short, personal message the same evening, with the brochure attached, helps your project stay top of mind when families compare options. Opens on the brochure link give you a reason to call back, without guessing.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Sample message",
        body: "Sample: “Namaste Priya ji, thank you for visiting the sample flat today. Here is the brochure and my card. Shall I block a slot for your family on Sunday?” Generate it in Marathi or Hindi if the buyer prefers.",
      },
    ],
    faqs: [
      { q: "Can I follow up in Marathi?", a: "Yes. eCard’s AI can write WhatsApp messages in English, Hindi or Marathi and open them in WhatsApp in one tap." },
      { q: "Will I know if a buyer opened my brochure?", a: "Link tracking shows opens of your card, PDFs and WhatsApp links. Click counts on short links filter out bots." },
      { q: "Do my site staff need an app?", a: "No. eCard works in any phone browser, and there is also a Telegram bot for sending a card photo." },
    ],
    related: ["features/events-expos/site-visits", "features/outreach/whatsapp-marathi", "features/link-tracking/brochure-tracking", "features/digital-business-card/share-pdfs-and-brochures"],
    source: "verified",
  },
  {
    slug: `${UC}/events-expos`,
    category: "solutions",
    title: "Events & Expos",
    seoTitle: "Trade Show Card Scanning & Follow-Up | eCard",
    description: "Group every card collected at a trade show or expo, capture booth context with voice notes and follow up with everyone at once after the event ends.",
    h1: "Leave the expo with a follow-up list, not a rubber band",
    eyebrow: "Events & expos",
    intro: "Three days at a booth can mean hundreds of cards. eCard lets you group them by event and follow up with everyone at once, while the show is still fresh in their minds.",
    variant: "solution",
    visual: "scan",
    icon: "calendar",
    sections: [
      {
        type: "bullets",
        heading: "What usually goes wrong after a show",
        items: [
          "Cards sit in a bag until the next week, and visitors forget your stand.",
          "Nobody remembers which visitor asked for a quote and which only took a brochure.",
          "Two colleagues spoke to the same buyer and both send different emails.",
        ],
      },
      {
        type: "steps",
        heading: "A booth workflow with eCard",
        steps: [
          { title: "Create the event first", body: "Set up the expo as an event so every scan from the stand is grouped together." },
          { title: "Scan between conversations", body: "Use a phone browser or send the photo to the Telegram bot. Booth helpers can join as scan-only guests." },
          { title: "Add a quick voice note", body: "Record what the visitor wanted. Meeting memory turns notes into a searchable AI summary." },
          { title: "Follow up with the room", body: "After the show, send intros to the whole group. Each AI email draft can be previewed, edited or cancelled before it sends from your own SMTP." },
        ],
      },
      {
        type: "table",
        heading: "Who does what at the stand",
        headers: ["Person", "Suggested role", "Why"],
        rows: [
          ["Stall manager", "Manager", "Oversees the event’s contacts"],
          ["Sales staff", "Member", "Scan, note and follow up"],
          ["Temporary helpers", "Scan-only guest", "Capture cards without wider access"],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Plan for volume",
        body: "Scan allowances are 50 a month on Free, 1,000 on Starter, 5,000 on Professional and unlimited on Business. Check your plan before a large show.",
      },
    ],
    faqs: [
      { q: "Can temporary booth staff scan without seeing all contacts?", a: "eCard has a scan-only guest role, intended for people who only need to capture cards." },
      { q: "Can I email everyone from one event?", a: "Yes. eCard lets you group cards from a trade show and follow up with everyone at once." },
    ],
    related: ["features/events-expos/trade-show-workflow", "features/events-expos/at-the-booth", "features/team-security/scan-only-guests", "features/outreach/post-event-outreach"],
    source: "mixed",
  },
  {
    slug: `${UC}/sales-teams`,
    category: "solutions",
    title: "Sales Teams",
    seoTitle: "Visiting-Card CRM for Field Sales Teams | eCard",
    description: "Give field reps one shared workspace for every visiting card, with roles, an audit log, natural-language search and intros that send from their own mailbox.",
    h1: "Every rep’s cards, in one shared workspace",
    eyebrow: "Sales teams",
    intro: "When a rep leaves, their card box often leaves too. A shared eCard workspace keeps contacts, meeting notes and follow-ups with the team.",
    variant: "solution",
    visual: "team",
    icon: "briefcase",
    sections: [
      {
        type: "prose",
        heading: "How field sales collects cards",
        paragraphs: [
          "Reps meet purchase managers on plant visits, owners at dealer meets and new prospects in waiting rooms. The card is collected in a hurry, and the follow-up competes with the next visit on the route.",
          "With eCard, the rep scans the card in a phone browser or sends it to the Telegram bot between meetings. The AI draft of an intro email can go out from the rep’s own mailbox five seconds after preview, while they drive to the next appointment.",
        ],
      },
      {
        type: "cards",
        heading: "Built for managers too",
        cards: [
          { title: "Roles", body: "Owner, admin, manager, member and scan-only guest.", icon: "users" },
          { title: "Audit log", body: "Workspaces keep an audit log of activity.", icon: "file" },
          { title: "Natural-language search", body: "Ask for “distributors I met in Nagpur last month”.", icon: "search" },
          { title: "Webhooks", body: "Signed events for each new contact on Professional and above.", icon: "webhook" },
        ],
      },
      {
        type: "split",
        heading: "Keep data clean as the team grows",
        body: ["Two reps meeting the same buyer is normal in territory sales. Duplicate merge, blacklist and archive keep the shared list usable."],
        points: ["CSV import for your existing lists", "Google Contacts sync on Starter and above", "2FA and login alerts for every user"],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Choosing a plan by headcount",
        body: "Starter covers 20 users at ₹299 a month, Professional 100 users at ₹999, and Business has unlimited users at ₹2,999.",
      },
    ],
    faqs: [
      { q: "Does eCard replace our main sales CRM?", a: "eCard focuses on visiting cards and follow-up. On Professional and above, signed webhooks fire for each new contact, which you can use to pass contacts to other systems. Field mapping is not documented on eCard’s site; check in-app settings." },
      { q: "Can managers see team activity?", a: "Workspaces have roles and an audit log. Exact permission details are best checked in the app." },
    ],
    related: ["features/team-security/roles-and-permissions", "features/contact-management/shared-team-contacts", "integrations/webhooks", "platform/for-teams"],
    source: "mixed",
  },
  {
    slug: `${UC}/agencies`,
    category: "solutions",
    title: "Agencies",
    seoTitle: "Visiting-Card CRM for Creative & Digital Agencies",
    description: "Agencies meet prospects at pitches, panels and industry nights. Keep every card, share branded digital cards and track who opened your credentials deck.",
    h1: "From pitch-night card to signed retainer",
    eyebrow: "Agencies",
    intro: "Agency new business runs on credentials decks and timely nudges. eCard helps you capture who you met, send your deck and know when it gets opened.",
    variant: "solution",
    visual: "card",
    icon: "palette",
    sections: [
      {
        type: "bullets",
        heading: "Where agency people collect cards",
        items: [
          "Award nights and industry panels, usually late in the evening",
          "Brand-side marketing meetups and client offsites",
          "Partner introductions from production houses or media owners",
        ],
      },
      {
        type: "steps",
        heading: "A new-business follow-up",
        steps: [
          { title: "Capture and tag", body: "Scan the marketing head’s card and record who introduced you in meeting memory." },
          { title: "Send credentials", body: "Share your digital card with the credentials PDF. Link tracking shows opens of your card and PDFs." },
          { title: "Time the nudge", body: "If the deck is opened, send a short follow-up email from your own SMTP, previewed before it goes." },
        ],
      },
      {
        type: "split",
        heading: "Your brand, not ours",
        body: ["On Business and Enterprise plans, white-label lets you use your logo, colours and a custom domain, so the cards your team shares look like your agency."],
        points: ["Premium card templates", "QR code for slides and stands", "Short links with bot-filtered click counts"],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Follow-up etiquette",
        body: "Brand managers get many agency emails after events. One relevant idea tied to what they said on the night usually lands better than a generic capabilities pitch.",
      },
    ],
    faqs: [
      { q: "Can we brand the digital cards with our agency identity?", a: "White-label (logo, colours and custom domain) is included on the Business and Enterprise plans." },
      { q: "Will we see if a prospect opened our deck?", a: "eCard’s link tracking shows opens of your card, PDFs and WhatsApp links." },
    ],
    related: ["features/team-security/white-label", "features/link-tracking/pdf-engagement", "features/digital-business-card/templates", "pricing/business"],
    source: "mixed",
  },
  {
    slug: `${UC}/recruiters`,
    category: "solutions",
    title: "Recruiters",
    seoTitle: "Visiting-Card CRM for Recruiters & Hiring Teams",
    description: "Recruiters gather cards from candidates and hiring managers at campus drives and meetups. Keep context, search by skill and city, and follow up promptly.",
    h1: "Remember every candidate you met at the job fair",
    eyebrow: "Recruiters",
    intro: "Recruiters meet two audiences at once: candidates and the hiring managers who need them. Keeping both straight is where a visiting-card CRM helps.",
    variant: "solution",
    visual: "meeting",
    icon: "users",
    sections: [
      {
        type: "prose",
        heading: "Two kinds of cards, two kinds of follow-up",
        paragraphs: [
          "At a tech meetup, an engineer’s card means a possible placement; a CTO’s card means a possible mandate. Candidates expect a quick, low-pressure note. Hiring managers expect a more formal email with a clear next step.",
          "Tags in eCard can separate the two groups, and meeting memory keeps what each person said: notice period, preferred city, the role they are hiring for.",
        ],
      },
      {
        type: "table",
        heading: "Mapping the workflow",
        headers: ["Moment", "What you do", "eCard feature"],
        rows: [
          ["Campus or job fair", "Scan cards between conversations", "AI scanning, events"],
          ["Right after", "Record skills and notice period", "Voice notes, AI summary"],
          ["Shortlisting", "Find people by skill and city", "Natural-language search"],
          ["Outreach", "Quick note on WhatsApp or email", "WhatsApp messages, intro emails"],
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Handle candidate data carefully",
        body: "Candidate contact details are personal data. eCard includes a compliance checklist covering consent, export and deletion; follow your own legal advice on how long to keep records.",
      },
      {
        type: "bullets",
        heading: "Search examples",
        items: [
          "Sample: “Java developers I met in Bengaluru last month”",
          "Sample: “Hiring managers from the fintech meetup”",
        ],
      },
    ],
    faqs: [
      { q: "Can I search contacts by skill mentioned in my notes?", a: "eCard offers natural-language search and searchable AI summaries of meeting notes. Results depend on what you recorded." },
      { q: "Can candidates be removed on request?", a: "eCard’s compliance checklist covers consent, export and deletion. Archive and blacklist are also available." },
    ],
    related: ["features/contact-management/natural-language-search", "features/meeting-memory/voice-notes", "features/team-security/consent-management", "features/events-expos/networking-meetups"],
    source: "mixed",
  },
  {
    slug: `${UC}/consultants`,
    category: "solutions",
    title: "Consultants",
    seoTitle: "Visiting-Card CRM for Independent Consultants",
    description: "Consultants win work through referrals and long relationships. Record who introduced you, keep meeting notes and send a thoughtful follow-up email the same day.",
    h1: "Turn introductions into engagements",
    eyebrow: "Consultants",
    intro: "Most consulting work starts with a referral and closes months later. eCard keeps the thread: who introduced you, what the client worried about, and when you last wrote.",
    variant: "solution",
    visual: "meeting",
    icon: "brain",
    sections: [
      {
        type: "split",
        heading: "The referral is the asset",
        body: ["A consultant’s pipeline is a web of introductions. Meeting memory records where you met and who introduced you, so months later you can thank the right person and refer back to the original conversation."],
        points: ["Where you met", "Who introduced you", "Voice notes with a searchable AI summary"],
      },
      {
        type: "steps",
        heading: "From coffee meeting to proposal",
        steps: [
          { title: "Scan after the meeting", body: "Capture the card and add a voice note on the problem the client described." },
          { title: "Send a considered intro", body: "Preview the AI email draft, rewrite the key paragraph in your own words, and let it send from your own mailbox." },
          { title: "Book the next call", body: "On Starter and above, eCard includes Google Calendar & Meet booking." },
          { title: "Prepare later", body: "Before the next meeting, search your notes to recall exactly what was discussed." },
        ],
      },
      {
        type: "prose",
        heading: "Follow-up norms for advisory work",
        paragraphs: [
          "Senior clients rarely reply to pushy sequences. A single, specific email within a day, followed by a useful article or insight a few weeks later, matches how advisory relationships usually develop.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Use the five-second window",
        body: "eCard’s intro email sends five seconds after preview. If you want to add a personal line, edit or cancel it before then.",
      },
    ],
    faqs: [
      { q: "Can I send from my own domain email?", a: "Yes. Intro emails send from your own SMTP, such as Gmail, Outlook, Zoho or any SMTP host." },
      { q: "Is meeting booking included?", a: "Google Calendar & Meet booking is listed on paid plans starting with Starter." },
    ],
    related: ["features/meeting-memory/introductions", "features/meeting-memory/calendar-and-meet-booking", "features/outreach/edit-and-cancel-emails", "features/meeting-memory/prepare-for-meetings"],
    source: "mixed",
  },
  {
    slug: `${UC}/startup-founders`,
    category: "solutions",
    title: "Startup Founders",
    seoTitle: "Visiting-Card CRM for Startup Founders",
    description: "Founders collect cards from investors, early customers and hires at demo days and meetups. Search them later in plain language and follow up quickly.",
    h1: "Every demo-day card, ready when you raise",
    eyebrow: "Startup founders",
    intro: "Founders meet investors, customers, mentors and future hires in the same evening. eCard helps you remember which is which and follow up before the moment passes.",
    variant: "solution",
    visual: "extract",
    icon: "sparkles",
    sections: [
      {
        type: "cards",
        heading: "Four kinds of people at a demo day",
        cards: [
          { title: "Investors", body: "Tag by stage or thesis and note what they asked.", icon: "rupee" },
          { title: "Early customers", body: "Record the pain point they mentioned for your next call.", icon: "briefcase" },
          { title: "Mentors", body: "Remember who introduced you to whom.", icon: "users" },
          { title: "Candidates", body: "Keep the engineer you met for when you can hire.", icon: "sparkles" },
        ],
      },
      {
        type: "prose",
        heading: "Search the way you remember",
        paragraphs: [
          "Months later you rarely remember a name; you remember a context. eCard’s natural-language search is built for that, for example “Investors I met in Mumbai last month”.",
          "Startup founders are one of the three personas in eCard’s sample scan demo, so you can see how a card is read before signing up.",
        ],
      },
      {
        type: "steps",
        heading: "A lean follow-up routine",
        steps: [
          { title: "Scan on the way home", body: "Send each card photo to the Telegram bot; Open and Send buttons appear in the chat." },
          { title: "Send your deck link", body: "Share your digital card and pitch PDF, and see opens with link tracking." },
          { title: "Follow up on signal", body: "Prioritise people who opened the deck." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Start at ₹0",
        body: "The Free plan includes 50 scans a month for up to 5 users, and new workspaces get a 14-day Professional trial with no card required.",
      },
    ],
    faqs: [
      { q: "Can my co-founders share the same contacts?", a: "Yes. A workspace can hold multiple users; the Free plan allows 5." },
      { q: "Can I bring my own AI key?", a: "Yes. You can choose Claude, OpenAI, Gemini, DeepSeek or Grok and bring your own key; the FAQ also mentions Azure and custom endpoints." },
    ],
    related: [`${UC}/investors`, "features/contact-management/search-examples", "sample-scan", "pricing/free"],
    source: "mixed",
  },
  {
    slug: `${UC}/doctors`,
    category: "solutions",
    title: "Doctors & Clinics",
    seoTitle: "Visiting-Card CRM for Doctors & Clinics",
    description: "Doctors exchange cards with referring physicians, medical reps and conference peers. Keep professional contacts organised and send courteous follow-ups.",
    h1: "Keep your referral network as organised as your patient files",
    eyebrow: "Doctors & clinics",
    intro: "Doctors build practices on referrals from peers. eCard helps you keep the cards from CMEs, conferences and hospital meetings in one searchable place.",
    variant: "solution",
    visual: "scan",
    icon: "shield",
    sections: [
      {
        type: "callout",
        tone: "note",
        title: "Professional contacts, not patient records",
        body: "This page is about the professional cards doctors collect. eCard is a visiting-card CRM and its site does not describe it as a patient-records or clinical system.",
      },
      {
        type: "bullets",
        heading: "Where doctors exchange cards",
        items: [
          "CME sessions and specialty conferences",
          "Referral meetings with GPs and nursing homes",
          "Visits from diagnostic labs, equipment vendors and medical representatives",
        ],
      },
      {
        type: "split",
        heading: "A referral-friendly follow-up",
        body: ["After a conference, a short email to a peer you met, with your digital card so they can save your number, makes referring patients easier. eCard previews the AI draft and sends it from your own mailbox."],
        points: ["Save-to-contacts on your digital card", "QR code for your clinic desk", "Tags for referrers, vendors and peers"],
      },
      {
        type: "steps",
        heading: "Simple clinic routine",
        steps: [
          { title: "Scan at the front desk", body: "Staff can capture vendor cards as scan-only guests." },
          { title: "Review fields", body: "Every field has a confidence score and nothing is saved until reviewed." },
          { title: "Secure the workspace", body: "Turn on 2FA with authenticator codes and keep recovery codes safe." },
        ],
      },
    ],
    faqs: [
      { q: "Is eCard a patient management system?", a: "No. eCard describes itself as an AI visiting-card CRM for the people you meet. It is not presented as a clinical system." },
      { q: "Is there a sample for doctors?", a: "Yes. A Doctor persona is one of the three samples in eCard’s scan demo." },
    ],
    related: ["sample-scan", "features/digital-business-card/save-to-contacts", "features/team-security/two-factor-authentication", "features/events-expos/conferences"],
    source: "mixed",
  },
  {
    slug: `${UC}/insurance-agents`,
    category: "solutions",
    title: "Insurance Agents",
    seoTitle: "Visiting-Card CRM for Insurance Agents",
    description: "Insurance agents meet prospects at society events, offices and family functions. Capture cards, note life events and follow up on WhatsApp in Hindi or Marathi.",
    h1: "Follow up with every prospect, in the language they prefer",
    eyebrow: "Insurance agents",
    intro: "Insurance is sold through trust and patient follow-up. eCard helps agents remember each prospect’s situation and reach them on WhatsApp in English, Hindi or Marathi.",
    variant: "solution",
    visual: "whatsapp",
    icon: "shield",
    sections: [
      {
        type: "prose",
        heading: "A long, personal sales cycle",
        paragraphs: [
          "An agent might collect a card at a housing-society meeting, then follow up over weeks as the prospect compares policies. Notes like “child starting college next year” or “renewal due in March” are what make the next conversation relevant.",
        ],
      },
      {
        type: "table",
        heading: "Workflow at a glance",
        headers: ["Step", "Practice", "eCard"],
        rows: [
          ["Meet", "Collect card at a seminar or society event", "Scan in phone browser or Telegram"],
          ["Remember", "Note family and policy context", "Voice note and AI summary"],
          ["Reach out", "Warm, informal message", "WhatsApp in English, Hindi or Marathi"],
          ["Share", "Your profile and contact", "Digital card with Save-to-contacts"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Respect the prospect’s pace",
        body: "Unsolicited, repeated messages damage trust. Use the blacklist for people who ask not to be contacted, and keep notes so each message adds something new.",
      },
      {
        type: "bullets",
        heading: "Useful searches",
        items: ["Sample: “People I met at the Thane society meeting”", "Sample: “Prospects who mentioned a home loan”"],
      },
    ],
    faqs: [
      { q: "Does eCard send WhatsApp messages automatically?", a: "eCard’s AI writes the message and opens it in WhatsApp in one tap; you send it from WhatsApp." },
      { q: "Can I stop messaging someone who opted out?", a: "eCard includes a blacklist as part of its clean-data tools." },
    ],
    related: ["features/outreach/whatsapp-hindi", "features/contact-management/blacklist", "features/meeting-memory/voice-notes", `${UC}/financial-advisors`],
    source: "mixed",
  },
  {
    slug: `${UC}/financial-advisors`,
    category: "solutions",
    title: "Financial Advisors",
    seoTitle: "Visiting-Card CRM for Financial Advisors",
    description: "Financial advisors meet clients at investor-awareness talks and through referrals. Keep careful notes, secure your workspace with 2FA and follow up well.",
    h1: "Careful notes for client relationships built over years",
    eyebrow: "Financial advisors",
    intro: "Advisory relationships last for years and depend on remembering details accurately. eCard keeps meeting context searchable and your workspace protected.",
    variant: "solution",
    visual: "security",
    icon: "rupee",
    sections: [
      {
        type: "steps",
        heading: "From seminar to first review",
        steps: [
          { title: "Collect cards at the talk", body: "Investor-awareness sessions and corporate talks generate many cards in a short time. Group them as an event." },
          { title: "Record intent, not advice", body: "Note what the attendee wanted to discuss, such as retirement or children’s education." },
          { title: "Send a formal intro", body: "An email from your own mailbox, previewed before it sends, suits this audience better than a casual message." },
          { title: "Book the review", body: "On Starter and above, use Google Calendar & Meet booking." },
        ],
      },
      {
        type: "cards",
        heading: "Security that matches the trust involved",
        cards: [
          { title: "2FA", body: "Authenticator codes, recovery codes and trusted devices.", icon: "lock" },
          { title: "Login alerts", body: "Know when your account is accessed.", icon: "bell" },
          { title: "Encrypted secrets", body: "API keys and SMTP passwords use AES-256-GCM.", icon: "key" },
          { title: "Audit log", body: "Workspaces keep a record of activity.", icon: "file" },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Regulatory duties stay with you",
        body: "eCard’s site does not claim any financial-regulatory certification. Advisors remain responsible for their own record-keeping and disclosure obligations.",
      },
    ],
    faqs: [
      { q: "Is eCard certified for financial services?", a: "eCard’s site does not list any certifications. It documents 2FA, login alerts, encryption of keys and SMTP passwords, audit logs and a compliance checklist." },
      { q: "Can my assistant scan cards for me?", a: "Yes. Workspace roles include a scan-only guest for people who only need to capture cards." },
    ],
    related: ["features/team-security/security-best-practices", "features/team-security/audit-logs", `${UC}/insurance-agents`, `${UC}/chartered-accountants`],
    source: "mixed",
  },
  {
    slug: `${UC}/manufacturers-exporters`,
    category: "solutions",
    title: "Manufacturers & Exporters",
    seoTitle: "Visiting-Card CRM for Manufacturers & Exporters",
    description: "Manufacturers and exporters collect buyer cards at international fairs. Group them by fair, send catalogues, track opens and follow up before competitors do.",
    h1: "Fair buyers into export orders",
    eyebrow: "Manufacturers & exporters",
    intro: "At an international fair, an exporter may meet buyers from a dozen countries in a day. eCard groups them by fair and helps you send catalogues while the stand is still remembered.",
    variant: "solution",
    visual: "integrations",
    icon: "globe",
    sections: [
      {
        type: "prose",
        heading: "Cards from many countries",
        paragraphs: [
          "Export buyers’ cards vary widely in layout and language. eCard reads cards with the AI model you choose, shows a confidence score per field and saves nothing until you review it, which matters for unfamiliar formats. Addresses are checked against Google Maps.",
          "Buyers usually return home and compare samples from many suppliers within days. Sending the catalogue and price list during or right after the fair is common practice.",
        ],
      },
      {
        type: "steps",
        heading: "Fair follow-up plan",
        steps: [
          { title: "One event per fair", body: "Group all stand scans under the fair’s name." },
          { title: "Note product interest", body: "Record the SKU, MOQ question or sample request in a voice note." },
          { title: "Send catalogue by email", body: "AI drafts go out from your own SMTP; for volume, providers like SendGrid, Amazon SES or Mailgun can be used." },
          { title: "Watch catalogue opens", body: "Link tracking shows PDF opens, helping you prioritise calls." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Paying from abroad",
        body: "Subscriptions in India can be paid by UPI, cards, net banking, wallets or EMI; international customers pay by card.",
      },
    ],
    faqs: [
      { q: "Can eCard read non-Indian visiting cards?", a: "eCard uses AI models such as Claude, OpenAI, Gemini, DeepSeek or Grok, and every field shows a confidence score for review. Its site does not list supported languages for scanning, so review results carefully." },
      { q: "Can I follow up with buyers in Hindi on WhatsApp?", a: "WhatsApp messages can be generated in English, Hindi or Marathi; international buyers will usually prefer English." },
    ],
    related: ["features/ai-card-scanning/unusual-card-layouts", "features/link-tracking/pdf-engagement", "features/events-expos/after-the-show", `${UC}/distributors`],
    source: "mixed",
  },
  {
    slug: `${UC}/distributors`,
    category: "solutions",
    title: "B2B Distributors",
    seoTitle: "Visiting-Card CRM for B2B Distributors",
    description: "Distributors meet retailers, dealers and principals on market visits and dealer meets. Keep counter contacts clean, deduplicated and searchable by town.",
    h1: "Every dealer on your beat, in one clean list",
    eyebrow: "B2B distributors",
    intro: "Distribution runs on beat visits: the same towns, the same counters, new retailers every month. eCard keeps those contacts deduplicated and searchable by place.",
    variant: "solution",
    visual: "dashboard",
    icon: "layers",
    sections: [
      {
        type: "split",
        heading: "Beat visits create messy data",
        body: ["Salesmen collect cards at shop counters, wholesale markets and principal-organised dealer meets. The same shop owner may appear three times with different numbers."],
        points: ["Duplicate merge", "Archive shops that closed", "CSV import of your existing dealer list"],
      },
      {
        type: "table",
        heading: "Typical contacts and follow-up",
        headers: ["Contact", "Where met", "Usual channel"],
        rows: [
          ["Retailer", "Shop counter", "WhatsApp in Hindi or Marathi"],
          ["Sub-dealer", "Dealer meet", "WhatsApp, then a call"],
          ["Brand principal", "Head-office meeting", "Email from your own mailbox"],
        ],
      },
      {
        type: "bullets",
        heading: "Search by beat",
        intro: "Natural-language search lets a salesman find counters without remembering names.",
        items: ["Sample: “Retailers I met in Kolhapur last month”", "Sample: “Dealers from the monsoon scheme meet”"],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Share schemes with a tracked link",
        body: "Send a scheme PDF with your digital card. Link tracking shows which retailers opened it, so you know whom to visit first.",
      },
    ],
    faqs: [
      { q: "Do salesmen need to install an app?", a: "eCard works in any phone browser with no app to install, and also via a Telegram bot." },
      { q: "Can I import my existing dealer list?", a: "Yes, CSV import is included in eCard’s clean-data tools." },
    ],
    related: ["features/contact-management/duplicate-merge", "features/contact-management/csv-import", "features/outreach/whatsapp-marathi", `${UC}/manufacturers-exporters`],
    source: "mixed",
  },
  {
    slug: `${UC}/event-organisers`,
    category: "solutions",
    title: "Event Organisers",
    seoTitle: "Visiting-Card CRM for Event Organisers",
    description: "Event organisers juggle sponsors, speakers, venues and vendors. Keep their cards tagged by event, share a QR card on stage and follow up after the show.",
    h1: "Sponsors, speakers and vendors, sorted by event",
    eyebrow: "Event organisers",
    intro: "Organisers sit on the other side of the expo: they need sponsors, speakers, venues and vendors for every edition. eCard keeps those relationships across events.",
    variant: "solution",
    visual: "card",
    icon: "calendar",
    sections: [
      {
        type: "cards",
        heading: "Who organisers collect cards from",
        cards: [
          { title: "Sponsors", body: "Marketing heads who sign up again next year if followed up well.", icon: "rupee" },
          { title: "Speakers", body: "Experts you may invite to future editions.", icon: "mic" },
          { title: "Venues and vendors", body: "AV, catering and decor partners.", icon: "building" },
          { title: "Exhibitors", body: "Companies that booked stalls and may rebook.", icon: "briefcase" },
        ],
      },
      {
        type: "steps",
        heading: "Edition-to-edition workflow",
        steps: [
          { title: "Tag by edition", body: "Group contacts from each edition as an event." },
          { title: "Put your card on stage", body: "Show your digital card’s QR code on the closing slide so attendees can save your details." },
          { title: "Thank sponsors fast", body: "Send a thank-you email with photos link from your own mailbox the next day." },
          { title: "Plan the next edition", body: "Search “speakers from last year’s summit” to start invitations." },
        ],
      },
      {
        type: "prose",
        heading: "Why post-event thank-yous matter",
        paragraphs: ["Sponsors judge an event partly on how they are treated after it. A personal thank-you with a recap, sent within a couple of days, is a widely followed practice that helps with renewals."],
      },
    ],
    faqs: [
      { q: "Can attendees save my contact from a QR code?", a: "eCard’s digital card includes a QR code and Save-to-contacts, with no app needed." },
      { q: "Can volunteers help scan?", a: "The scan-only guest role is intended for people who only capture cards." },
    ],
    related: ["features/digital-business-card/qr-at-events", "features/events-expos/create-event", `${UC}/events-expos`, "features/events-expos/follow-up-the-room"],
    source: "mixed",
  },
  {
    slug: `${UC}/freelancers`,
    category: "solutions",
    title: "Freelancers",
    seoTitle: "Visiting-Card CRM for Freelancers",
    description: "Freelancers win clients at meetups and co-working spaces. Share a digital card with your portfolio, track opens and follow up without paying for a big CRM.",
    h1: "A one-person CRM that starts at ₹0",
    eyebrow: "Freelancers",
    intro: "Freelancers rarely need a heavy sales CRM, but they do need to remember the people who might hire them. eCard’s Free plan covers the basics.",
    variant: "solution",
    visual: "card",
    icon: "smartphone",
    sections: [
      {
        type: "bullets",
        heading: "Where freelance work comes from",
        items: ["Co-working spaces and community meetups", "Past clients who refer friends", "Agencies that outsource overflow work"],
      },
      {
        type: "split",
        heading: "Your card is your shopfront",
        body: ["eCard’s digital card gives you premium templates, a QR code, Save-to-contacts and a short link such as the example /c/rahul. Share your portfolio PDF alongside it and see opens."],
        points: ["No app needed", "Bot-filtered click counts", "Works on any phone browser"],
      },
      {
        type: "steps",
        heading: "Follow-up without the awkwardness",
        steps: [
          { title: "Scan the card at the meetup", body: "Review fields before saving." },
          { title: "Send a short note", body: "A WhatsApp message or an email that mentions what you talked about." },
          { title: "Check in later", body: "Search your notes when a relevant project comes up." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "What the Free plan includes",
        body: "₹0 a month, up to 5 users, 1 GB storage and 50 scans a month, with AI scanning, email outreach, WhatsApp, the digital card and the Telegram bot.",
      },
    ],
    faqs: [
      { q: "Is the Free plan enough for a freelancer?", a: "Many freelancers collect fewer than 50 cards a month, which is the Free plan’s scan allowance. Starter at ₹299 a month raises it to 1,000." },
      { q: "Can I send emails from my own address?", a: "Yes. eCard sends intro emails from your own SMTP mailbox." },
    ],
    related: ["pricing/free", "features/digital-business-card/personal-url", "features/digital-business-card/share-pdfs-and-brochures", `${UC}/small-business-owners`],
    source: "mixed",
  },
  {
    slug: `${UC}/lawyers`,
    category: "solutions",
    title: "Lawyers",
    seoTitle: "Visiting-Card CRM for Lawyers & Law Firms",
    description: "Lawyers collect cards at bar events, seminars and client meetings. Keep a formal, well-documented network and send measured emails from your firm mailbox.",
    h1: "A measured network for a measured profession",
    eyebrow: "Lawyers",
    intro: "Legal practice depends on referrals from other lawyers, CAs and corporate contacts. eCard helps you keep that network organised and your follow-ups formal.",
    variant: "solution",
    visual: "email",
    icon: "book",
    sections: [
      {
        type: "prose",
        heading: "How lawyers typically network",
        paragraphs: [
          "Cards change hands at bar association events, seminars, arbitration conferences and in-house counsel meetups. Follow-up norms are conservative: a short, formal email, no hard selling, and care about anything that could look like solicitation under your professional rules.",
          "eCard’s intro email lets you preview the AI draft and edit or cancel it before it sends from your own mailbox, so every word can be checked.",
        ],
      },
      {
        type: "table",
        heading: "Mapping a practice’s network",
        headers: ["Contact", "Typical source", "Tag idea"],
        rows: [
          ["Referring advocate", "Bar event", "referrer"],
          ["In-house counsel", "Corporate seminar", "client-side"],
          ["Chartered accountant", "Tax conference", "professional"],
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Professional rules come first",
        body: "Rules on advertising and solicitation vary by jurisdiction and bar body. Treat eCard as a contact tool and check your own obligations before outreach.",
      },
      {
        type: "bullets",
        heading: "Firm-level controls",
        items: ["Roles from owner to scan-only guest", "2FA, recovery codes and login alerts", "Audit log for the workspace", "White-label cards on Business and above"],
      },
    ],
    faqs: [
      { q: "Can I review every email before it is sent?", a: "Yes. You preview the AI draft; it sends after 5 seconds and you can edit or cancel it." },
      { q: "Can the firm brand the cards?", a: "White-label with logo, colours and a custom domain is available on Business and Enterprise." },
    ],
    related: ["features/outreach/email-preview", "features/team-security/audit-logs", `${UC}/chartered-accountants`, "features/outreach/follow-up-etiquette"],
    source: "mixed",
  },
  {
    slug: `${UC}/architects-designers`,
    category: "solutions",
    title: "Architects & Designers",
    seoTitle: "Visiting-Card CRM for Architects & Interior Designers",
    description: "Architects and interior designers meet clients, contractors and material suppliers. Keep project contacts together and send portfolio PDFs you can track.",
    h1: "Clients, contractors and suppliers, project by project",
    eyebrow: "Architects & designers",
    intro: "A single project involves a client, a contractor, a dozen material suppliers and a few consultants. eCard keeps their cards together and remembers where you met them.",
    variant: "solution",
    visual: "analytics",
    icon: "palette",
    sections: [
      {
        type: "cards",
        heading: "Cards that pile up on a project",
        cards: [
          { title: "Clients", body: "Met at a referral meeting or a site walk-through.", icon: "users" },
          { title: "Material suppliers", body: "Tile, stone, lighting and furniture showroom cards.", icon: "layers" },
          { title: "Contractors", body: "Civil, electrical and carpentry teams.", icon: "building" },
          { title: "Consultants", body: "Structural, MEP and landscape specialists.", icon: "settings" },
        ],
      },
      {
        type: "steps",
        heading: "Showroom-to-site workflow",
        steps: [
          { title: "Scan at the showroom", body: "Capture the supplier’s card and record the product you shortlisted in a voice note." },
          { title: "Tag by project", body: "Keep each project’s suppliers and contractors grouped." },
          { title: "Send your portfolio", body: "Share your digital card and portfolio PDF with a prospective client; link tracking shows opens." },
        ],
      },
      {
        type: "prose",
        heading: "Finding the supplier you met last year",
        paragraphs: ["Designers often remember a material, not a name. Meeting notes become searchable AI summaries, so a search like “lighting supplier from the Mumbai design week” has something to match."],
      },
    ],
    faqs: [
      { q: "Can I check a supplier’s showroom address?", a: "eCard checks addresses on scanned cards against Google Maps." },
      { q: "Can I see if a client viewed my portfolio?", a: "Link tracking shows opens of your card, PDFs and WhatsApp links." },
    ],
    related: ["features/ai-card-scanning/address-verification", "features/meeting-memory/searchable-memory", "features/digital-business-card/card-design-tips", `${UC}/real-estate`],
    source: "mixed",
  },
  {
    slug: `${UC}/travel-agencies`,
    category: "solutions",
    title: "Travel Agencies",
    seoTitle: "Visiting-Card CRM for Travel Agencies",
    description: "Travel agents meet hoteliers, DMCs and corporate travel desks at travel marts. Group cards by mart, send itineraries on WhatsApp and track PDF opens.",
    h1: "From travel-mart handshake to booked itinerary",
    eyebrow: "Travel agencies",
    intro: "Travel agencies work with two networks: suppliers like hotels and DMCs, and clients from families to corporate travel desks. eCard keeps both organised.",
    variant: "solution",
    visual: "whatsapp",
    icon: "map",
    sections: [
      {
        type: "split",
        heading: "Supplier cards from travel marts",
        body: ["Travel trade marts put hundreds of hoteliers, DMCs and tourism boards in one hall. Group those scans by mart and destination so you can find them when a client asks for that region."],
        points: ["Events to group each mart", "Tags by destination", "Google Maps check on hotel addresses"],
      },
      {
        type: "table",
        heading: "Client follow-up by type",
        headers: ["Client", "Preferred channel", "Content"],
        rows: [
          ["Family holiday", "WhatsApp in Hindi, Marathi or English", "Itinerary PDF"],
          ["Corporate travel desk", "Email from your own mailbox", "Quote and policy"],
          ["Wedding or group", "WhatsApp plus email", "Package options"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Use opens as a cue",
        body: "When link tracking shows an itinerary PDF was opened, that is a natural moment to call and answer questions before the client books elsewhere.",
      },
      {
        type: "bullets",
        heading: "Search ideas",
        items: ["Sample: “Kerala houseboat operators from the travel mart”", "Sample: “Corporate clients I met in Pune last month”"],
      },
    ],
    faqs: [
      { q: "Can I send an itinerary on WhatsApp?", a: "eCard can generate a WhatsApp message and open it in one tap, and link tracking covers WhatsApp links and PDFs." },
      { q: "Does eCard handle bookings?", a: "No. eCard is a visiting-card CRM; its site does not describe booking or payment for travel." },
    ],
    related: ["features/link-tracking/whatsapp-link-tracking", "features/events-expos/event-tagging", `${UC}/hospitality`, "features/outreach/email-vs-whatsapp"],
    source: "mixed",
  },
  {
    slug: `${UC}/hospitality`,
    category: "solutions",
    title: "Hospitality",
    seoTitle: "Visiting-Card CRM for Hotels & Hospitality Sales",
    description: "Hotel sales teams collect cards from corporate admins, wedding planners and travel agents. Share a branded card and follow up on MICE and group enquiries.",
    h1: "Hotel sales, from lobby handshake to group booking",
    eyebrow: "Hospitality",
    intro: "Hotel and banquet sales teams meet corporate admins, wedding planners and agents every day. eCard helps them capture each card and follow up with the right proposal.",
    variant: "solution",
    visual: "team",
    icon: "building",
    sections: [
      {
        type: "prose",
        heading: "Where hospitality cards come from",
        paragraphs: [
          "Sales managers collect cards on corporate sales calls, during property site inspections, at wedding fairs and from travel agents at trade marts. Guests at the front desk also leave cards for corporate rate enquiries.",
          "MICE and wedding enquiries move quickly; planners often shortlist three venues within days of a visit.",
        ],
      },
      {
        type: "steps",
        heading: "Site-inspection follow-up",
        steps: [
          { title: "Scan during the walk-through", body: "Front-desk or banquet staff can capture cards as scan-only guests." },
          { title: "Note requirements", body: "Voice-note the dates, pax and budget mentioned." },
          { title: "Send the banquet kit", body: "Share the PDF with your digital card and track opens." },
          { title: "Follow up on WhatsApp", body: "A friendly message in English, Hindi or Marathi, opened in one tap." },
        ],
      },
      {
        type: "cards",
        heading: "Useful for multi-property teams",
        cards: [
          { title: "Shared workspace", body: "Roles from owner to member across the sales team.", icon: "users" },
          { title: "White-label", body: "Your hotel’s logo, colours and domain on Business plans.", icon: "palette" },
          { title: "Google Contacts sync", body: "Available on Starter and above.", icon: "phone" },
        ],
      },
    ],
    faqs: [
      { q: "Does eCard integrate with hotel property management systems?", a: "eCard’s site does not list any PMS integration. Webhooks with signed events for each new contact are available on Professional and above." },
      { q: "Can banquet staff scan without full access?", a: "The scan-only guest role is designed for people who only capture cards." },
    ],
    related: [`${UC}/travel-agencies`, "features/team-security/white-label", "features/link-tracking/brochure-tracking", "features/team-security/scan-only-guests"],
    source: "mixed",
  },
  {
    slug: `${UC}/investors`,
    category: "solutions",
    title: "Investors",
    seoTitle: "Visiting-Card CRM for Angel Investors & VCs",
    description: "Investors meet dozens of founders at demo days and pitch events. Capture each card with context and find them months later with natural-language search.",
    h1: "Remember the founder before they raise their next round",
    eyebrow: "Investors",
    intro: "Angel investors and VCs meet many founders long before they are ready to invest. eCard keeps the context so you can pick the conversation up later.",
    variant: "solution",
    visual: "meeting",
    icon: "chart",
    sections: [
      {
        type: "bullets",
        heading: "Deal flow arrives as visiting cards",
        items: ["Demo days and accelerator pitch nights", "Angel network screening sessions", "Introductions from co-investors and portfolio founders"],
      },
      {
        type: "split",
        heading: "Context is the hard part",
        body: ["Months later, you remember “the logistics founder from the Bengaluru demo day”, not a name. Meeting memory records where you met, who introduced you and a voice note, summarised and searchable."],
        points: ["Who introduced you", "Voice notes with AI summary", "Natural-language search"],
      },
      {
        type: "steps",
        heading: "A light-touch investor routine",
        steps: [
          { title: "Scan after each pitch", body: "Send card photos to the Telegram bot between sessions." },
          { title: "Tag by thesis", body: "For example sector, stage or ‘revisit in six months’." },
          { title: "Reply courteously", body: "A quick email acknowledging the pitch is a common courtesy, even when the answer is no for now." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Bring your own AI key",
        body: "Choose Claude, OpenAI, Gemini, DeepSeek or Grok (Azure and custom endpoints are mentioned in the FAQ). API keys are encrypted with AES-256-GCM.",
      },
    ],
    faqs: [
      { q: "Can my fund’s analysts share contacts?", a: "Yes. Workspaces support multiple users with roles including owner, admin, manager and member." },
      { q: "Can I search by where I met someone?", a: "Yes. Natural-language search handles queries such as “Investors I met in Mumbai last month”, and works the same way for founders." },
    ],
    related: [`${UC}/startup-founders`, "features/meeting-memory/where-you-met", "features/telegram-bot/snap-a-card", "platform/bring-your-own-ai"],
    source: "mixed",
  },
  {
    slug: `${UC}/chartered-accountants`,
    category: "solutions",
    title: "Chartered Accountants",
    seoTitle: "Visiting-Card CRM for Chartered Accountants",
    description: "CAs meet business owners at seminars, industry associations and client offices. Organise contacts by service and follow up before filing deadlines.",
    h1: "Seminar contacts into long-term clients",
    eyebrow: "Chartered accountants",
    intro: "CA practices grow through seminars, association meetings and referrals from existing clients. eCard helps you keep those contacts organised by service and season.",
    variant: "solution",
    visual: "extract",
    icon: "file",
    sections: [
      {
        type: "table",
        heading: "Where CAs meet prospects",
        headers: ["Setting", "Typical contact", "Follow-up norm"],
        rows: [
          ["Tax or GST seminar", "Small business owner", "Email recap of key points"],
          ["Industry association meeting", "Factory owner, trader", "Call or WhatsApp"],
          ["Client referral", "Client’s supplier or relative", "Warm introduction email"],
        ],
      },
      {
        type: "prose",
        heading: "Seasonal follow-up",
        paragraphs: [
          "Accounting work follows a calendar of filing and audit seasons. Tagging contacts by service, such as audit, GST or start-up registration, lets you write to the relevant group before the season begins instead of messaging everyone.",
          "eCard’s natural-language search and tags help, for example “GST clients I met at the Surat seminar”.",
        ],
      },
      {
        type: "steps",
        heading: "After a seminar",
        steps: [
          { title: "Scan cards at the registration desk", body: "Staff can capture cards as scan-only guests." },
          { title: "Group by seminar", body: "Create an event for the session." },
          { title: "Send a recap", body: "An AI-drafted email from your own mailbox, previewed before it sends." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Client confidentiality",
        body: "Store only contact and meeting context in eCard. Client financial documents belong in systems you use for engagement work.",
      },
    ],
    faqs: [
      { q: "Can I export my contacts?", a: "Yes. Bulk import and export are part of every plan." },
      { q: "Is the workspace protected?", a: "eCard offers 2FA, recovery codes, trusted devices, login alerts and an audit log." },
    ],
    related: [`${UC}/lawyers`, `${UC}/financial-advisors`, "features/contact-management/tags", "features/contact-management/csv-export"],
    source: "mixed",
  },
  {
    slug: `${UC}/it-services`,
    category: "solutions",
    title: "IT Services",
    seoTitle: "Visiting-Card CRM for IT Services Companies",
    description: "IT services firms meet CIOs and IT heads at tech conferences. Capture cards, push new contacts to your systems with webhooks and follow up with case-study PDFs.",
    h1: "Conference contacts into your delivery pipeline",
    eyebrow: "IT services",
    intro: "IT services sales teams meet CIOs, IT managers and partners at conferences and vendor events. eCard captures the cards and, on Professional and above, can notify your own systems of each new contact.",
    variant: "solution",
    visual: "integrations",
    icon: "server",
    sections: [
      {
        type: "split",
        heading: "Fit eCard into your stack",
        body: ["Technical teams usually want contacts to flow into their own tools. eCard offers webhooks and an API, with signed events for each new contact, on Professional and above. Its site does not document payload formats or field mapping; check in-app settings."],
        points: ["Signed webhook events", "Bring your own AI key or custom endpoint", "AES-256-GCM encryption of keys and SMTP passwords"],
      },
      {
        type: "steps",
        heading: "Conference workflow",
        steps: [
          { title: "Scan at the booth or session", body: "Group scans by conference as an event." },
          { title: "Record the requirement", body: "Voice-note the stack, project or pain point mentioned." },
          { title: "Send a relevant case study", body: "Share your card with a PDF and track opens." },
          { title: "Hand off to pre-sales", body: "Use roles and shared contacts so the right person follows up." },
        ],
      },
      {
        type: "bullets",
        heading: "Security points IT buyers ask about",
        items: ["2FA with authenticator codes, recovery codes and trusted devices", "Login alerts", "Workspace audit log", "Compliance checklist covering consent, export and deletion"],
      },
    ],
    faqs: [
      { q: "Is there an API?", a: "eCard lists webhooks and an API with signed events for each new contact. Its public site does not include API reference documentation." },
      { q: "Can we use our own AI endpoint?", a: "eCard’s FAQ mentions Azure and custom endpoints alongside Claude, OpenAI, Gemini, DeepSeek and Grok." },
    ],
    related: ["integrations/webhooks", "integrations/api", "features/ai-card-scanning/custom-ai-endpoints", "features/events-expos/conferences"],
    source: "mixed",
  },
  {
    slug: `${UC}/marketing-teams`,
    category: "solutions",
    title: "Marketing Teams",
    seoTitle: "Visiting-Card CRM for Marketing Teams",
    description: "Marketing teams run events, roadshows and partner meets that produce stacks of cards. Group them by campaign, send tracked content and measure engagement.",
    h1: "Turn every roadshow into measurable leads",
    eyebrow: "Marketing teams",
    intro: "Field marketing creates cards faster than anyone can type them in. eCard groups contacts by campaign and shows which shared content gets opened.",
    variant: "solution",
    visual: "analytics",
    icon: "chart",
    sections: [
      {
        type: "cards",
        heading: "Campaigns that produce cards",
        cards: [
          { title: "Roadshows", body: "City-by-city events with local partners.", icon: "map" },
          { title: "Sponsored booths", body: "Stalls at industry expos.", icon: "calendar" },
          { title: "Partner meets", body: "Dealer and channel gatherings.", icon: "users" },
        ],
      },
      {
        type: "steps",
        heading: "Campaign-to-handover",
        steps: [
          { title: "One event per city", body: "Group roadshow scans by stop so results can be compared." },
          { title: "Send tracked content", body: "Share brochures, PDFs and WhatsApp links; link tracking shows opens, with bots filtered out of short-link clicks." },
          { title: "Pass hot contacts to sales", body: "Use shared contacts, or signed webhooks on Professional and above." },
        ],
      },
      {
        type: "prose",
        heading: "Reading engagement honestly",
        paragraphs: ["Opens are a signal, not a conversion. A brochure opened twice is a reason to prioritise a call; it does not mean a sale. Compare events by how many contacts engaged, not by raw scan counts alone."],
      },
      {
        type: "callout",
        tone: "info",
        title: "Consent",
        body: "eCard includes a compliance checklist covering consent, export and deletion. Confirm your team’s consent practices before bulk outreach.",
      },
    ],
    faqs: [
      { q: "Are bot clicks counted?", a: "eCard’s short links count clicks with bots filtered out." },
      { q: "Can we brand cards for campaigns?", a: "White-label (logo, colours and custom domain) is available on Business and Enterprise." },
    ],
    related: ["features/link-tracking/engagement-signals", "features/digital-business-card/bot-filtering", "features/events-expos/lead-tracking", `${UC}/events-expos`],
    source: "mixed",
  },
  {
    slug: `${UC}/small-business-owners`,
    category: "solutions",
    title: "Small Business Owners",
    seoTitle: "Visiting-Card CRM for Small Business Owners",
    description: "Small business owners collect cards from suppliers, customers and bankers. Keep them in one place, follow up on WhatsApp and start free with 50 scans a month.",
    h1: "The card box in your drawer, finally searchable",
    eyebrow: "Small business owners",
    intro: "Owners of shops, workshops and service firms collect cards from suppliers, customers, bankers and inspectors. eCard turns that drawer into a searchable list.",
    variant: "solution",
    visual: "scan",
    icon: "briefcase",
    sections: [
      {
        type: "bullets",
        heading: "Cards a business owner keeps",
        items: ["Suppliers and transporters", "Repeat customers and dealers", "Bank relationship managers and CAs", "Repair technicians for machines"],
      },
      {
        type: "steps",
        heading: "Getting started in an afternoon",
        steps: [
          { title: "Scan the drawer", body: "Photograph old cards in a phone browser or via the Telegram bot. Review each before saving." },
          { title: "Import what you already typed", body: "Bring in spreadsheets with CSV import." },
          { title: "Clean up", body: "Merge duplicates and archive old suppliers." },
          { title: "Make your own card", body: "Create a digital card with a QR code for your counter." },
        ],
      },
      {
        type: "table",
        heading: "Plans for a growing business",
        headers: ["Plan", "Monthly price", "Users", "Scans/month"],
        rows: [
          ["Free", "₹0", "5", "50"],
          ["Starter", "₹299", "20", "1,000"],
          ["Professional", "₹999", "100", "5,000"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Pay the way you already do",
        body: "In India, eCard subscriptions can be paid by UPI, cards, net banking, wallets or EMI. GST applies where applicable.",
      },
    ],
    faqs: [
      { q: "Do I need to install an app?", a: "No. eCard works in any phone browser." },
      { q: "Can I cancel any time?", a: "Yes. You can cancel any time and keep access until the end of the billing period." },
    ],
    related: ["pricing/compare-plans", "features/contact-management/migrating-from-spreadsheets", "mobile/no-app-needed", `${UC}/freelancers`],
    source: "mixed",
  },
  {
    slug: `${UC}/education`,
    category: "solutions",
    title: "Education & Training",
    seoTitle: "Visiting-Card CRM for Education & Training",
    description: "Colleges, coaching institutes and trainers meet corporates, recruiters and partners at fairs. Keep placement and partnership contacts organised and followed up.",
    h1: "Placement, partnership and training contacts in one place",
    eyebrow: "Education & training",
    intro: "Placement cells, admissions teams and corporate trainers all collect cards from organisations they hope to work with. eCard keeps those contacts organised year after year.",
    variant: "solution",
    visual: "team",
    icon: "book",
    sections: [
      {
        type: "prose",
        heading: "Relationships that outlast a batch",
        paragraphs: [
          "A placement officer meets HR managers at job fairs and industry conclaves; a corporate trainer meets L&D heads at HR summits. These relationships repeat every year, but staff change. A shared workspace keeps the contacts with the institution.",
        ],
      },
      {
        type: "cards",
        heading: "Who uses it, and how",
        cards: [
          { title: "Placement cells", body: "Tag recruiters by sector and batch year.", icon: "users" },
          { title: "Admissions teams", body: "Group school and counsellor contacts from education fairs.", icon: "calendar" },
          { title: "Corporate trainers", body: "Send programme brochures and see who opened them.", icon: "file" },
        ],
      },
      {
        type: "steps",
        heading: "Annual placement cycle",
        steps: [
          { title: "Collect at conclaves", body: "Student volunteers can scan as scan-only guests." },
          { title: "Invite for campus drives", body: "Send formal invitations from the institution’s mailbox." },
          { title: "Thank and record", body: "Note outcomes in meeting memory for next year’s team." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Student data",
        body: "This workflow is about professional contacts. Follow your institution’s policies before storing any student personal data.",
      },
    ],
    faqs: [
      { q: "Can volunteers scan without seeing every contact?", a: "eCard includes a scan-only guest role for people who only capture cards." },
      { q: "What happens when a staff member leaves?", a: "Contacts live in the shared workspace. Owners and admins can manage users; check in-app for exact permissions." },
    ],
    related: ["features/team-security/onboarding-your-team", "features/contact-management/shared-team-contacts", `${UC}/recruiters`, "features/digital-business-card/share-by-email"],
    source: "mixed",
  },
];

/**
 * Industry-specific expansion sections, merged into the pages above.
 * eCard product claims come only from docs/source-content-inventory.md;
 * scenarios are fictional and labelled "Sample".
 */
const EXTRA: Record<string, { sections: Section[]; faqs: FAQ[] }> = {
  "use-cases": {
    sections: [
      {
        type: "table",
        heading: "Picking a starting plan by how you collect cards",
        intro: "Plan limits below are from eCard’s pricing page (INR, monthly). Most people can begin on Free or the 14-day Professional trial and move up once their real volume is clear.",
        headers: ["If you…", "Start with", "Why"],
        rows: [
          ["Meet a few dozen people a month, alone or with a partner", "Free (₹0)", "50 scans a month, 5 users, 1 GB storage and the full base feature set"],
          ["Run a small team that also books meetings", "Starter (₹299)", "1,000 scans, 20 users, Google Contacts sync and Calendar & Meet booking"],
          ["Need contacts pushed into another system", "Professional (₹999)", "5,000 scans, 100 users and signed webhooks for each new contact"],
          ["Want cards under your own brand and domain", "Business (₹2,999)", "Unlimited users, storage and scans, plus white label and custom domain"],
        ],
      },
    ],
    faqs: [
      { q: "My industry is not listed. Will eCard still work?", a: "Probably. The core loop of scan, review, record context and follow up is the same for anyone who collects visiting cards. Start on the Free plan and see whether it fits your routine." },
      { q: "Do these pages describe real customers?", a: "No. They describe typical workflows as guidance. They are not case studies and do not claim customers in any industry." },
    ],
  },
  [`${UC}/real-estate`]: {
    sections: [
      {
        type: "table",
        heading: "From enquiry to booking: where each feature fits",
        headers: ["Moment in the sales cycle", "eCard feature", "What it saves you"],
        rows: [
          ["Walk-in at the site office", "AI scan with per-field confidence scores", "Typing numbers from a crumpled card while the family waits"],
          ["Channel partner drops by with a client", "Meeting memory: who introduced you", "Disputes later about which broker brought the buyer"],
          ["Evening after the visit", "Brochure PDF plus digital card, with link tracking", "Guessing whether the family looked at the floor plans"],
          ["Weekend follow-up", "WhatsApp message in Marathi, Hindi or English", "Writing the same message twenty times by hand"],
          ["Launch event", "Events & expos grouping", "A pile of cards with no record of which launch they came from"],
        ],
      },
      {
        type: "bullets",
        heading: "Follow-up mistakes common in property sales",
        items: [
          "Sending a generic brochure for the whole project instead of the configuration the buyer asked about. Note the BHK and budget in a voice note so the message matches.",
          "Calling the same evening and again the next morning. Check whether the brochure was opened first and let that set the pace.",
          "Losing track of broker attribution. Record who introduced each buyer at the moment you scan, not at booking time.",
          "Mixing contacts from different projects. Tag by project or group by launch event so a later search stays clean.",
        ],
      },
      {
        type: "prose",
        heading: "Which plan suits a project sales team",
        paragraphs: [
          "A single agent handling a handful of site visits a week can stay within the Free plan’s 50 scans a month. A project sales office with several executives and weekend crowds will outgrow that quickly; Starter at ₹299 covers 1,000 scans and 20 users, and adds Calendar & Meet booking for scheduling revisits. A developer that wants new leads to flow automatically into another system should look at Professional for webhooks.",
        ],
      },
    ],
    faqs: [
      { q: "Can several sales executives share one project’s contacts?", a: "Yes. Workspaces support multiple users with roles such as manager and member, and the user limit depends on the plan: 5 on Free, 20 on Starter, 100 on Professional." },
    ],
  },
  [`${UC}/events-expos`]: {
    sections: [
      {
        type: "steps",
        heading: "Sample: a three-day expo, hour by hour",
        intro: "Sample scenario with fictional details: a four-person booth team at an industrial expo.",
        steps: [
          { title: "Day 1, 9:30 am", body: "The team lead creates an event for the show so every scan lands in one group. A temporary helper joins as a scan-only guest." },
          { title: "Day 1, 2:00 pm", body: "Rush at the booth. Staff photograph cards and send them to the Telegram bot rather than stopping to review each one." },
          { title: "Day 1, 7:00 pm", body: "At the hotel, the team reviews the day’s scans, fixes low-confidence fields and adds a quick voice note on each serious enquiry." },
          { title: "Day 3, evening", body: "With the stall packed up, the lead sends one follow-up to everyone from the show, then personal emails to the hottest leads." },
        ],
      },
      {
        type: "bullets",
        heading: "Expo follow-up mistakes to avoid",
        items: [
          "Waiting until the team is back in the office. Visitors meet dozens of exhibitors; a thank-you within a day or two stands out.",
          "Treating every card the same. A student collecting freebies and a buyer asking for a quote need different messages, so tag them at review time.",
          "Leaving context in one person’s head. Voice notes and meeting memory let anyone on the team pick up a lead.",
          "Forgetting to share your own details. Put your digital card’s QR code on the booth so visitors can save your contact without a paper card.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Sizing your plan for show season",
        body: "Count the cards your team brought back from the last show. Fewer than 50 a month fits Free; a busy booth can collect hundreds, which suits Starter (1,000 scans, 20 users) or Professional (5,000 scans, 100 users). The 14-day Professional trial is a low-risk way to cover a single show and see your real volume.",
      },
    ],
    faqs: [
      { q: "Can I scan cards when hall signal is weak?", a: "eCard works in a phone browser and through a Telegram bot, both of which need a connection. If coverage is poor, photograph cards and send them once you are back online." },
      { q: "Does the digital card help at the booth?", a: "Yes. It has a QR code and Save-to-contacts, so visitors can store your details in their phone without an app." },
    ],
  },
  [`${UC}/sales-teams`]: {
    sections: [
      {
        type: "table",
        heading: "Field-sales moments mapped to eCard",
        headers: ["Moment", "eCard feature", "Manager’s benefit"],
        rows: [
          ["Rep meets a new buyer on a cold visit", "Phone-browser scan or Telegram bot", "No app rollout across the team"],
          ["Rep needs to recall a lead before a revisit", "Searchable AI summary and voice notes", "Context survives even if the rep changes territory"],
          ["Manager plans next quarter", "Natural-language search, e.g. “buyers I met in Nagpur last month”", "Quick territory views without exporting spreadsheets"],
          ["Rep sends an intro the same day", "AI email from the rep’s own mailbox, with a 5-second cancel window", "Consistent first touch without rigid scripts"],
          ["Leads must reach the main CRM", "Signed webhooks per new contact (Professional and above)", "No double data entry"],
        ],
      },
      {
        type: "prose",
        heading: "Sample: a regional rep’s Tuesday",
        paragraphs: [
          "Sample scenario, fictional: Arjun covers distributors across one state. Between his second and third visit he forwards two cards to the Telegram bot from the car park, adds a twenty-second voice note on order size, and moves on. At lunch he reviews the fields, fixes a phone number the AI flagged with low confidence, and sends both buyers an intro email from his own address. By evening his manager can find both contacts in the shared workspace without asking for an update.",
        ],
      },
      {
        type: "bullets",
        heading: "Where sales-team follow-up usually breaks",
        items: [
          "Cards stay in a rep’s wallet until the monthly review. Make scanning part of the visit, not the weekly report.",
          "Every rep keeps their own spreadsheet. A shared workspace with roles avoids five versions of the same buyer, and duplicate merge cleans up the overlaps.",
          "Departing reps take their contacts with them. Keep contacts in the company workspace and use the audit log to see changes.",
        ],
      },
    ],
    faqs: [
      { q: "Which plan suits a 30-person field team?", a: "Starter allows 20 users, so a team of 30 needs Professional (100 users, 5,000 scans, ₹999 a month), which also adds webhooks for pushing contacts elsewhere." },
      { q: "Can a manager review what reps scanned?", a: "Contacts live in the shared workspace and there is an audit log. Check in-app settings for exactly what each role can see." },
    ],
  },
  [`${UC}/agencies`]: {
    sections: [
      {
        type: "steps",
        heading: "Sample: from networking evening to signed brief",
        intro: "Sample scenario with fictional details.",
        steps: [
          { title: "Meet", body: "Neha, an account director, meets a marketing head at an industry awards night and scans her card before the next speech." },
          { title: "Remember", body: "She records a voice note: rebrand planned next quarter, budget not fixed, introduced by a mutual client." },
          { title: "Send credentials", body: "Next morning she shares the agency’s digital card and credentials PDF. Link tracking shows when it is opened." },
          { title: "Book the chemistry meeting", body: "Once the PDF has been opened, she proposes a slot; Calendar & Meet booking is available from Starter upward." },
        ],
      },
      {
        type: "table",
        heading: "Agency moments and the feature that fits",
        headers: ["Moment", "eCard feature"],
        rows: [
          ["Pitch nights and award shows", "Events grouping so each night’s contacts stay together"],
          ["Sending credentials or a case-study deck", "PDF sharing with open tracking"],
          ["Pitching under the agency brand", "White-label logo, colours and custom domain (Business and above)"],
          ["Hand-off from new-business team to account team", "Meeting memory with who introduced you and a searchable summary"],
          ["Quarterly check-in with dormant prospects", "Natural-language search, e.g. “brand managers I met at award shows last year”"],
        ],
      },
      {
        type: "bullets",
        heading: "Common agency new-business slips",
        items: [
          "Sending the full 40-page credentials deck to someone who asked about one service. Send the relevant piece and note what they asked for.",
          "Following up from a personal address the client cannot connect to the agency. Use your work mailbox via SMTP so replies land in the right place.",
          "Forgetting who made the introduction. Referrers deserve a thank-you, and meeting memory keeps that name attached to the contact.",
        ],
      },
    ],
    faqs: [
      { q: "Which plan should a small agency start on?", a: "A boutique agency of up to 20 people can usually start on Starter (₹299 a month). White-label branding needs Business (₹2,999), which also removes user and scan limits." },
      { q: "Can freelancers or interns help capture cards at a pitch event without seeing the whole pipeline?", a: "eCard’s workspace roles include a scan-only guest, intended for people who only capture cards. Check in-app settings for exactly what that role can view before you invite anyone." },
    ],
  },
  [`${UC}/recruiters`]: {
    sections: [
      {
        type: "prose",
        heading: "Sample: a recruiter’s week around a tech meetup",
        paragraphs: [
          "Sample scenario, fictional: Kavya places backend engineers. At a Thursday meetup she collects eleven cards: seven engineers, three engineering managers who might become clients, and one fellow recruiter. She scans each card on the spot and records a short voice note — “Go, payments, open to Pune, notice period two months” — while it is fresh.",
          "On Friday she searches for the managers, sends each a short email from her agency mailbox, and tags the engineers by stack. Three weeks later, when a client asks for a payments engineer, a natural-language search over her notes surfaces the right person in seconds instead of a scroll through her phone gallery.",
        ],
      },
      {
        type: "table",
        heading: "Recruiting moments mapped to eCard",
        headers: ["Moment", "eCard feature"],
        rows: [
          ["Campus drive or job fair", "Events grouping plus scan-only guests for helpers"],
          ["Candidate mentions skills and notice period", "Voice notes and a searchable AI summary"],
          ["Hiring manager asks for your details", "Digital card with QR and Save-to-contacts"],
          ["Candidate asks to be forgotten", "Archive, blacklist and the compliance checklist for consent, export and deletion"],
        ],
      },
      {
        type: "bullets",
        heading: "Recruiting follow-up mistakes",
        items: [
          "Mixing candidates and clients in one undifferentiated list. Tag them differently from the first scan.",
          "Messaging a passive candidate on WhatsApp before they have agreed to it. Ask which channel they prefer and record it.",
          "Keeping candidate data longer than needed. Use the archive and deletion tools in line with your own policy and local law.",
        ],
      },
    ],
    faqs: [
      { q: "What plan fits a solo recruiter versus an agency?", a: "A solo recruiter attending a few events a month may fit the Free plan’s 50 scans. An agency with several consultants sharing a pool usually needs Starter (20 users, 1,000 scans) or Professional (100 users, 5,000 scans)." },
      { q: "Can new candidates flow into our applicant tracking system?", a: "eCard does not list any ATS integration. On Professional and above it sends signed webhook events for each new contact, which your own tooling could receive; field mapping is not documented on eCard’s site, so check in-app settings." },
    ],
  },
  [`${UC}/consultants`]: {
    sections: [
      {
        type: "prose",
        heading: "Sample: one referral, three months",
        paragraphs: [
          "Sample scenario, fictional: Rohan, an operations consultant, is introduced to the COO of a mid-sized logistics firm at an industry association dinner. He scans her card at the table and records who made the introduction and her main worry: warehouse turnaround times.",
          "He sends a short email the next morning from his own domain, mentioning the mutual contact. Six weeks later, before a call, he opens the contact and reads the AI summary of the dinner conversation rather than relying on memory. When the proposal is finally requested in month three, he can thank the original referrer by name.",
        ],
      },
      {
        type: "table",
        heading: "Advisory moments and the matching feature",
        headers: ["Moment", "eCard feature", "Why it matters for consultants"],
        rows: [
          ["Introduced at a dinner or conference", "Meeting memory: where you met and who introduced you", "Referrers expect to be credited and thanked"],
          ["Diagnostic conversation", "Voice notes turned into a searchable summary", "You can quote the client’s own words back in the proposal"],
          ["Scheduling the scoping call", "Google Calendar & Meet booking (Starter and above)", "Fewer back-and-forth emails over availability"],
          ["Sharing a capability note", "PDF link tracking", "You know whether it was read before you call"],
        ],
      },
      {
        type: "bullets",
        heading: "Consulting follow-up mistakes",
        items: [
          "Pitching in the first email. A thank-you and one relevant thought usually works better than a services list.",
          "Letting months pass with no touch. Long sales cycles need light, useful check-ins: an article, an event invitation, a short note.",
          "Forgetting the referrer once the work is won. Close the loop with the person who introduced you.",
          "Using a free webmail address for formal proposals. Send from your firm’s mailbox through SMTP.",
        ],
      },
    ],
    faqs: [
      { q: "Is the Free plan enough for an independent consultant?", a: "If you meet fewer than 50 new people a month, the Free plan’s scan allowance may be enough. Starter at ₹299 a month adds Calendar & Meet booking and Google Contacts sync." },
    ],
  },
  [`${UC}/startup-founders`]: {
    sections: [
      {
        type: "steps",
        heading: "Sample: the 48 hours after a demo day",
        intro: "Sample scenario, fictional details: a two-founder fintech startup pitches at an accelerator demo day.",
        steps: [
          { title: "During networking", body: "Both founders scan every card into the same workspace, each tagging people as investor, customer, mentor or candidate." },
          { title: "That night", body: "They review low-confidence fields, then add one-line voice notes: “wants traction numbers”, “intro to a bank partner offered”." },
          { title: "Next morning", body: "Investor follow-ups go out by email from the founders’ own domain, with the deck link. Open tracking shows who looked at it." },
          { title: "Day two", body: "Mentors and candidates get a lighter WhatsApp thank-you, drafted by AI and sent in one tap." },
        ],
      },
      {
        type: "table",
        heading: "Founder moments mapped to eCard",
        headers: ["Moment", "eCard feature"],
        rows: [
          ["Pitch night with dozens of cards", "Events grouping for the whole evening"],
          ["“Who was the angel interested in B2B payments?”", "Natural-language search over contacts and notes"],
          ["Sending the deck", "PDF and digital card links with open tracking"],
          ["Co-founder overlap", "Shared workspace with duplicate merge"],
          ["Keeping AI costs predictable", "Bring your own key for Claude, OpenAI, Gemini, DeepSeek or Grok"],
        ],
      },
      {
        type: "bullets",
        heading: "Founder follow-up mistakes",
        items: [
          "Sending every investor the same mass email. Reference what they asked about on the night.",
          "Following up only with investors. Early customers and future hires met at the same event are often more valuable.",
          "Both founders emailing the same person. Decide an owner per contact and let duplicate merge catch overlaps.",
        ],
      },
    ],
    faqs: [
      { q: "Can we tell which investors actually opened our deck?", a: "eCard’s link tracking shows opens of your digital card, PDFs and WhatsApp links, and short links count clicks with bots filtered out. An open is a signal of interest, not a commitment, so follow up thoughtfully." },
      { q: "Which plan suits an early-stage startup?", a: "Free covers 5 users and 50 scans a month at ₹0, which suits a small founding team. If you start booking many calls, Starter (₹299) adds Calendar & Meet booking and raises scans to 1,000." },
    ],
  },
  [`${UC}/doctors`]: {
    sections: [
      {
        type: "prose",
        heading: "Sample: after a regional CME",
        paragraphs: [
          "Sample scenario, fictional: Dr. Meera Iyer, an orthopaedic surgeon, attends a two-day CME. She comes home with cards from a physiotherapy centre, two general physicians who refer patients in her area, a medical-device representative and a speaker she wants to invite to her hospital’s grand rounds.",
          "On the drive back she scans the cards, adds a voice note on each, and tags the physicians as referral partners. The following week she sends each physician a short, professional thank-you email. The device representative is saved but not contacted; she will search for him when the purchase committee meets.",
        ],
      },
      {
        type: "table",
        heading: "Professional moments in medicine, mapped to eCard",
        headers: ["Moment", "eCard feature"],
        rows: [
          ["CME, conference or hospital meeting", "Events grouping for each conference"],
          ["Building a referral network", "Tags plus meeting memory recording who introduced you"],
          ["Sharing clinic details with a referring doctor", "Digital card with QR code and Save-to-contacts"],
          ["Finding a vendor met last year", "Natural-language search over contacts and notes"],
        ],
      },
      {
        type: "bullets",
        heading: "Mistakes to avoid",
        items: [
          "Storing patient information in a networking tool. Keep eCard for professional contacts and use your clinical systems for patient records.",
          "Sending promotional messages to peers. A short note about shared interests or a referral pathway reads as collegial, not as marketing.",
          "Losing track of representatives. Tag vendors separately so they don’t mix with referral doctors.",
        ],
      },
    ],
    faqs: [
      { q: "Which plan is enough for a single doctor?", a: "Most individual doctors collect far fewer than 50 cards a month, so the Free plan is a reasonable start. A multi-doctor clinic sharing contacts may prefer Starter for up to 20 users." },
      { q: "Can my clinic’s front desk help scan cards?", a: "Yes. The scan-only guest role is intended for people who only need to capture cards." },
      { q: "Can I share my clinic address and timings with a referring doctor?", a: "Your digital card includes a QR code and Save-to-contacts and opens in any browser. Addresses on scanned cards are checked against Google Maps, which helps when you save a colleague’s clinic location." },
    ],
  },
  [`${UC}/insurance-agents`]: {
    sections: [
      {
        type: "prose",
        heading: "Sample: a Saturday society meeting",
        paragraphs: [
          "Sample scenario, fictional: Suresh, a life and health insurance agent, gives a short talk on health cover at a housing society. Nine residents hand him cards or write numbers on his. He scans each, recording family size, existing policies and the renewal month mentioned.",
          "That evening he sends a WhatsApp thank-you in Marathi to the residents who preferred it and in English to the rest, each drafted by AI and opened in WhatsApp in one tap. Two months later, before renewal season, he searches “society meeting residents with health policies renewing in March” and calls the right three people first.",
        ],
      },
      {
        type: "bullets",
        heading: "Insurance follow-up mistakes",
        items: [
          "Pushing a product in the first message. Thank them for their time and offer to answer questions instead.",
          "Ignoring renewal dates mentioned in conversation. Record them in a voice note the moment you hear them.",
          "Continuing to message someone who said no. Add them to the blacklist so no colleague contacts them again by accident.",
          "Using only one language. Families often prefer Hindi or Marathi for personal matters; ask and note it.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Choosing a plan as an agent",
        body: "An individual agent meeting under 50 new prospects a month can use the Free plan. An agency with a team of advisors sharing leads will likely need Starter (₹299, 20 users, 1,000 scans), which also adds Calendar & Meet booking for policy reviews.",
      },
    ],
    faqs: [
      { q: "Can I record policy details in eCard?", a: "eCard’s meeting memory stores notes and voice notes about your conversations. It is a visiting-card CRM, not a policy administration system, so keep official records in your insurer’s tools." },
      { q: "Will eCard send my WhatsApp messages for me?", a: "No. The AI drafts a message in English, Hindi or Marathi and opens it in WhatsApp in one tap. You read it, adjust it if needed and press send yourself, which keeps each message personal." },
      { q: "Can my sub-agents share leads with me?", a: "Yes, within a shared workspace with roles such as manager and member. The Free plan allows 5 users and Starter allows 20; check in-app settings for what each role can see." },
    ],
  },
  [`${UC}/financial-advisors`]: {
    sections: [
      {
        type: "steps",
        heading: "Sample: from investor seminar to first meeting",
        intro: "Sample scenario, fictional details: an independent advisor runs an evening seminar on retirement planning.",
        steps: [
          { title: "At the seminar", body: "An assistant, set up as a scan-only guest, scans attendee cards at the registration desk." },
          { title: "Same night", body: "The advisor reviews each contact, adds a note on the question they asked, and groups them under the seminar event." },
          { title: "Within two days", body: "Each attendee gets an email from the advisor’s own mailbox with the seminar slides. The PDF link shows who opened it." },
          { title: "First meeting", body: "Attendees who opened the slides are offered a review slot via Calendar & Meet booking (Starter and above)." },
        ],
      },
      {
        type: "table",
        heading: "Advisory moments and controls",
        headers: ["Moment", "eCard feature"],
        rows: [
          ["Protecting a client list", "2FA with authenticator codes, recovery codes, trusted devices and login alerts"],
          ["Several advisors sharing one practice", "Roles: owner, admin, manager, member, scan-only guest"],
          ["Reviewing who changed what", "Workspace audit log"],
          ["Client asks for their data", "Compliance checklist covering consent, export and deletion"],
          ["Client no longer wants contact", "Blacklist, so no one in the practice messages them by mistake"],
        ],
      },
      {
        type: "bullets",
        heading: "Mistakes advisors should avoid",
        items: [
          "Following up with a product recommendation before understanding the person’s goals. Use the first meeting to listen.",
          "Recording sensitive financial details casually. Note what you need for the next conversation, and keep formal records in your regulated systems.",
          "Sharing one login among staff. Give each person their own account and the narrowest role they need.",
        ],
      },
    ],
    faqs: [
      { q: "Where are my email credentials stored?", a: "eCard says API keys and SMTP passwords are encrypted with AES-256-GCM. Intro emails send from your own mailbox, so replies come straight back to you." },
      { q: "Can I search for clients by the topic we discussed?", a: "Meeting memory produces a searchable AI summary, and natural-language search works over your contacts, for example “people from the retirement seminar who asked about tax”. Results depend on what you recorded." },
      { q: "Which plan suits a small advisory practice?", a: "A practice with a few advisors can start on Free (5 users, 50 scans). If you want Calendar & Meet booking for review meetings or more scans, Starter costs ₹299 a month." },
    ],
  },
  [`${UC}/manufacturers-exporters`]: {
    sections: [
      {
        type: "prose",
        heading: "Sample: a five-day international fair",
        paragraphs: [
          "Sample scenario, fictional: a family-run brass hardware exporter from Gujarat takes a stand at an international home-goods fair. Over five days the two directors and an export executive collect around 140 cards from importers, wholesalers, sourcing agents and freight forwarders from several countries.",
          "Each evening the team reviews the day’s scans in the hotel, correcting any field the AI marked with low confidence — often a country code or a transliterated company name. They tag each buyer with product interest and a voice note on the target price discussed. On the flight home, the director emails every importer the relevant catalogue PDF from the company mailbox; the open tracking later shows which buyers went back to the catalogue twice.",
        ],
      },
      {
        type: "table",
        heading: "Export sales moments mapped to eCard",
        headers: ["Moment", "eCard feature", "Practical note"],
        rows: [
          ["Buyer visits the stand", "AI scan with confidence scores per field", "Review foreign names and phone formats carefully"],
          ["Price and quantity discussed", "Voice notes and a searchable AI summary", "Record currency and incoterm mentioned"],
          ["Catalogue sent after the fair", "PDF sharing with open tracking", "Opens help prioritise sample requests"],
          ["Fair ends", "Events grouping and follow-up with everyone at once", "Then personalise for serious buyers"],
          ["Leads must reach your ERP or CRM", "Signed webhooks per new contact (Professional and above)", "Mapping is not documented; check in-app"],
        ],
      },
      {
        type: "bullets",
        heading: "Export follow-up mistakes",
        items: [
          "Sending a WhatsApp message to an overseas buyer who only gave an email. Respect the channel the buyer offered.",
          "Quoting prices in a follow-up without noting the terms discussed at the stand. Check your voice note first.",
          "Following up weeks later. Buyers visit many stands; a catalogue within a few days keeps your stand in mind.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Plan sizing for fair season",
        body: "A single large fair can exceed the Free plan’s 50 scans in one morning. Starter covers 1,000 scans and 20 users at ₹299 a month; Professional covers 5,000 scans and adds webhooks. The 14-day Professional trial can cover one fair while you measure your real volume.",
      },
    ],
    faqs: [
      { q: "Can international buyers open my digital card?", a: "Yes. The digital card opens in any browser with no app, and includes a QR code and Save-to-contacts." },
    ],
  },
  [`${UC}/distributors`]: {
    sections: [
      {
        type: "steps",
        heading: "Sample: a distributor’s Monday beat",
        intro: "Sample scenario, fictional details: a sales officer for an FMCG distributor covers twelve retail counters in two towns.",
        steps: [
          { title: "Morning counters", body: "At a new kirana store he scans the owner’s card in the phone browser. The address is checked against Google Maps, which helps when the shop sign and the card differ." },
          { title: "Repeat retailers", body: "A shop he already met last month hands over a new card with a changed number. Duplicate merge keeps one record instead of two." },
          { title: "Lunch break", body: "He sends a scheme update to the new retailers on WhatsApp in Hindi, drafted by AI and opened in one tap." },
          { title: "Evening", body: "His manager searches “new retailers in Wardha this week” to plan the next supply run." },
        ],
      },
      {
        type: "table",
        heading: "Distribution moments mapped to eCard",
        headers: ["Moment", "eCard feature"],
        rows: [
          ["Onboarding a new retailer", "Phone-browser scan or Telegram bot, no app install"],
          ["Same shop, new card", "Duplicate merge"],
          ["Existing dealer list in a spreadsheet", "CSV import"],
          ["Shop has closed or is blacklisted for credit", "Archive and blacklist"],
          ["Several salesmen across territories", "Shared workspace with roles"],
        ],
      },
      {
        type: "bullets",
        heading: "Mistakes in beat-based follow-up",
        items: [
          "Letting each salesman keep retailer numbers on his personal phone. When he leaves, the beat goes with him.",
          "Importing a messy dealer spreadsheet without cleaning it first. Remove obvious duplicates before CSV import, then let duplicate merge catch the rest.",
          "Sending the same scheme message to wholesalers and small retailers. Tag by counter type.",
          "Never archiving closed shops, so the active list keeps shrinking in usefulness.",
        ],
      },
    ],
    faqs: [
      { q: "Which plan suits a distributor’s sales team?", a: "Count your salesmen and new counters per month. Up to 5 users and 50 new cards a month fits Free. A team of up to 20 salesmen fits Starter (1,000 scans, ₹299 a month). Larger teams, or those wanting each new contact sent to their own billing or DMS software via webhooks, should look at Professional (₹999)." },
      { q: "Can I find every retailer in one town?", a: "Natural-language search accepts queries like “retailers I met in Wardha last month”. Addresses on scanned cards are also checked against Google Maps, which helps keep locations accurate." },
      { q: "Can retailers save my number easily?", a: "Yes. Share your digital card; it has a QR code and Save-to-contacts and opens in any phone browser." },
    ],
  },
  [`${UC}/event-organisers`]: {
    sections: [
      {
        type: "prose",
        heading: "Sample: planning the next edition",
        paragraphs: [
          "Sample scenario, fictional: an organiser runs an annual food-processing expo. At this year’s edition, the team collects cards from 30 exhibitors who might upgrade their stand, 12 potential sponsors, 8 speakers, a venue manager and several caterers and fabricators.",
          "Each contact is grouped under this year’s event and tagged by role. A volunteer team scans at the registration desk as scan-only guests. Two weeks after the show, the organiser sends sponsors a thank-you and a post-show report PDF; open tracking shows which sponsors read it, and those get the first calls about next year’s packages.",
        ],
      },
      {
        type: "table",
        heading: "Organiser moments mapped to eCard",
        headers: ["Moment", "eCard feature"],
        rows: [
          ["Volunteers at registration", "Scan-only guest role"],
          ["Separating sponsors, speakers and vendors", "Tags within an event group"],
          ["Sending the sponsorship deck", "PDF sharing with open tracking"],
          ["Recalling last year’s caterer", "Natural-language search, e.g. “caterers from last year’s expo”"],
          ["Sharing your details at the venue", "Digital card QR code on badges or banners"],
        ],
      },
      {
        type: "bullets",
        heading: "Mistakes organisers commonly make",
        items: [
          "Starting sponsor outreach for the next edition from scratch. Your previous year’s event group is the warmest list you have.",
          "Thanking sponsors but not speakers and vendors. All three decide whether to come back.",
          "Letting volunteers walk away with contact lists. Scan into the shared workspace instead of personal phones.",
          "Sending one generic post-show email. Sponsors want reach; speakers want feedback; vendors want the next date.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Plan reasoning for organisers",
        body: "Organisers often need more users than they expect once volunteers are added. Free allows 5 users; Starter allows 20 at ₹299; Professional allows 100 at ₹999. If you want the event’s cards branded with your own logo and domain, white label is on Business.",
      },
    ],
    faqs: [
      { q: "Can eCard scan attendee badges?", a: "eCard is built to read visiting cards. Its site does not describe badge scanning, so test with your own badge design before relying on it." },
      { q: "Can I keep contacts from several editions apart?", a: "Yes. Group each edition’s cards as its own event and use tags for roles such as sponsor, speaker or vendor. Duplicate merge helps when the same exhibitor returns year after year with a new card." },
    ],
  },
  [`${UC}/freelancers`]: {
    sections: [
      {
        type: "prose",
        heading: "Sample: a freelance designer’s month",
        paragraphs: [
          "Sample scenario, fictional: Aisha, a freelance illustrator, attends a startup mixer, a publishing meetup and a friend’s product launch in the same month. She returns with 18 cards. Instead of a drawer, she scans each one and notes what the person was working on.",
          "She sends a short email from her own domain mailbox to the four people who mentioned upcoming projects, including her digital card and a link to a portfolio PDF. Two open the portfolio; one replies a week later asking for a quote. The others stay searchable for the day she needs to find “the publisher I met in Bengaluru”.",
        ],
      },
      {
        type: "table",
        heading: "Freelance moments mapped to eCard",
        headers: ["Moment", "eCard feature"],
        rows: [
          ["Meeting a potential client", "Scan in any phone browser, or forward to the Telegram bot"],
          ["Sharing your work", "Digital card with QR code and portfolio PDF link"],
          ["Knowing if they looked", "Link tracking for card, PDF and WhatsApp opens"],
          ["Booking a discovery call", "Google Calendar & Meet booking (Starter and above)"],
        ],
      },
      {
        type: "bullets",
        heading: "Freelance follow-up mistakes",
        items: [
          "Following up only when you need work. A short note when you see their launch or news keeps the relationship warm.",
          "Sending a portfolio with no context. Mention the project they talked about.",
          "Letting cards from small events pile up because “it was only a few”. Those few are often the best leads.",
        ],
      },
    ],
    faqs: [
      { q: "When should a freelancer upgrade from Free?", a: "When you regularly exceed 50 scans a month, or want Google Contacts sync and Calendar & Meet booking for discovery calls. Starter costs ₹299 a month, and new workspaces can try Professional free for 14 days with no card needed." },
      { q: "Do clients need to install anything to see my card?", a: "No. Your digital card opens in any browser, with a QR code, Save-to-contacts and a short link such as /c/yourname. Link tracking counts clicks with bots filtered out, so you get an honest sense of who looked." },
      { q: "Can I follow up on WhatsApp instead of email?", a: "Yes. eCard’s AI drafts a WhatsApp message in English, Hindi or Marathi and opens it in WhatsApp in one tap, which suits clients who prefer chat to email." },
    ],
  },
  [`${UC}/lawyers`]: {
    sections: [
      {
        type: "steps",
        heading: "Sample: a bar association seminar",
        intro: "Sample scenario, fictional details: a partner at a small corporate law firm speaks at a seminar on insolvency.",
        steps: [
          { title: "After the talk", body: "She collects cards from two CAs, a company secretary, an in-house counsel and a junior advocate interested in joining the firm." },
          { title: "Context first", body: "She records who each person is and what they asked, plus who introduced her to the in-house counsel." },
          { title: "Formal follow-up", body: "Next morning she sends a short, formal email from the firm’s mailbox, reviewing each AI draft before the 5-second send. She cancels one draft and rewrites it entirely." },
          { title: "Referral tracking", body: "Months later, when the in-house counsel calls about a matter, she can see exactly how the relationship began." },
        ],
      },
      {
        type: "table",
        heading: "Legal practice moments mapped to eCard",
        headers: ["Moment", "eCard feature"],
        rows: [
          ["Seminars and bar events", "Events grouping"],
          ["Referral from a CA or another firm", "Meeting memory: who introduced you"],
          ["Formal written follow-up", "AI email preview, sent from your firm’s SMTP with edit or cancel"],
          ["Firm-branded cards", "White label with logo, colours and custom domain (Business and above)"],
          ["Partner and associate access", "Roles, 2FA and an audit log"],
        ],
      },
      {
        type: "bullets",
        heading: "Mistakes to avoid in legal networking",
        items: [
          "Discussing a potential matter in detail over WhatsApp. Keep substantive matters to formal channels.",
          "Sending anything that could read as solicitation where professional rules restrict it. Check your bar council’s rules on advertising before any follow-up.",
          "Recording confidential client information in a networking tool. Note the relationship and how it began, not the details of the matter.",
        ],
      },
    ],
    faqs: [
      { q: "Which plan suits a small law firm?", a: "A firm of up to 5 people can start on Free. Up to 20 users fits Starter (₹299). Firm-branded digital cards with your own domain require Business (₹2,999)." },
      { q: "Can associates scan cards for a partner?", a: "Yes. Associates can be members of the firm’s workspace, and the scan-only guest role suits interns or clerks who only capture cards. Check in-app settings for what each role can see." },
      { q: "Is two-factor sign-in available for the firm?", a: "Yes. eCard supports 2FA with authenticator codes, recovery codes, trusted devices and login alerts, and workspaces have an audit log." },
    ],
  },
  [`${UC}/architects-designers`]: {
    sections: [
      {
        type: "prose",
        heading: "Sample: one residential project, forty cards",
        paragraphs: [
          "Sample scenario, fictional: an interior designer, Farhan, takes on a three-bedroom apartment fit-out. Over eight weeks he collects cards from a tile showroom, two lighting suppliers, a modular-kitchen vendor, a carpenter, an electrician, a structural consultant, the society secretary and the client’s cousin who handles their finances.",
          "He scans each card the day he gets it and tags it with the project name and trade. In voice notes he records the price quoted, lead time and which sample the client liked. When the client asks in month two for “that Italian-looking tile from the first showroom visit”, Farhan searches his notes instead of calling three vendors.",
        ],
      },
      {
        type: "table",
        heading: "Project moments mapped to eCard",
        headers: ["Moment", "eCard feature", "Why it helps a design practice"],
        rows: [
          ["Showroom visit with a client", "Scan with Google Maps address check", "You can find the showroom again later"],
          ["Quote and lead time discussed", "Voice notes and AI summary", "No need to dig through chats for numbers"],
          ["Sending a portfolio to a prospective client", "PDF and digital card link tracking", "You know whether they looked before the meeting"],
          ["Starting a new project with known vendors", "Natural-language search, e.g. “lighting suppliers I met last year”", "Reuse trusted trades"],
          ["Studio branding", "White label with logo, colours and custom domain (Business and above)", "Cards match your studio identity"],
        ],
      },
      {
        type: "bullets",
        heading: "Mistakes design practices often make",
        items: [
          "Saving vendors under first names only. Add the trade and project tag so “Ramesh” becomes findable.",
          "Losing the trail of who recommended a contractor. Record the referrer, because it affects how you handle problems later.",
          "Mixing client and vendor contacts. Tag them differently so a client never receives a vendor-style message.",
          "Sending a heavy portfolio to every lead. Pick two relevant projects and note which ones you sent.",
        ],
      },
    ],
    faqs: [
      { q: "Which plan suits a small studio?", a: "A studio of up to 5 people collecting fewer than 50 cards a month can use Free. Busy studios that also want Calendar & Meet booking for client meetings can move to Starter at ₹299 a month." },
      { q: "Can site supervisors add contacts from the site?", a: "Yes. eCard works in any phone browser, and the Telegram bot lets them forward a card photo that lands in your workspace once linked with a one-time code from Settings → Telegram." },
    ],
  },
  [`${UC}/travel-agencies`]: {
    sections: [
      {
        type: "steps",
        heading: "Sample: after a travel mart",
        intro: "Sample scenario, fictional details: a two-branch agency attends a domestic travel trade mart.",
        steps: [
          { title: "Mart floor", body: "The owner and a sales executive meet hotel sales managers, a houseboat operator, a DMC from the North-East and two airline representatives. Every card is scanned under the mart’s event." },
          { title: "Notes on rates", body: "Each supplier gets a voice note: contract season, group rates mentioned, contact for allotments." },
          { title: "Supplier thank-yous", body: "Back at the office, each supplier gets a short email from the agency mailbox asking for the rate sheet." },
          { title: "When a client enquires", body: "Two months later a family asks about the North-East. A search for “DMC from the travel mart” brings up the right contact and notes." },
        ],
      },
      {
        type: "table",
        heading: "Travel-agency moments mapped to eCard",
        headers: ["Moment", "eCard feature"],
        rows: [
          ["Meeting suppliers at a mart", "Events grouping with voice notes"],
          ["Corporate travel desk enquiry", "Formal intro email from your own SMTP"],
          ["Sending a sample itinerary to a family", "WhatsApp message in English, Hindi or Marathi plus PDF link tracking"],
          ["Repeat suppliers with new cards", "Duplicate merge"],
        ],
      },
      {
        type: "bullets",
        heading: "Travel follow-up mistakes",
        items: [
          "Keeping supplier contacts only in one executive’s phone. Supplier relationships are an agency asset; keep them in the shared workspace.",
          "Sending a leisure-style WhatsApp to a corporate travel manager. Match channel and tone to the client type.",
          "Following up with an itinerary before asking about dates and budget. Use the first message to confirm the basics, then send options.",
          "Ignoring suppliers between seasons. A short note before contract renewal keeps your agency on their priority list.",
        ],
      },
    ],
    faqs: [
      { q: "Which plan suits a travel agency?", a: "A small agency of up to 5 people can start on Free. If several branches share contacts, Starter covers 20 users and 1,000 scans at ₹299 a month." },
      { q: "Can I tell whether a client opened the itinerary?", a: "Link tracking shows opens of your card, PDFs and WhatsApp links, with bot clicks filtered out on short links." },
      { q: "Can international suppliers’ cards be scanned?", a: "eCard reads cards with AI models such as Claude, OpenAI, Gemini, DeepSeek or Grok, and shows a confidence score for each field. Its site does not list supported scripts or languages, so review foreign cards carefully." },
    ],
  },
  [`${UC}/hospitality`]: {
    sections: [
      {
        type: "prose",
        heading: "Sample: a banquet sales manager’s week",
        paragraphs: [
          "Sample scenario, fictional: Rina sells banquets and corporate stays for a mid-sized city hotel. On Monday she hosts a site inspection for a pharmaceutical company’s admin head; on Wednesday she meets three wedding planners at a bridal exhibition; on Friday a travel agent drops by to discuss group rates.",
          "She scans every card the moment it is handed over and adds a voice note — expected guest count, preferred dates, dietary needs. Each prospect gets a proposal PDF and her digital card the same day. When the admin head opens the proposal twice on Thursday, she calls on Friday morning rather than waiting a week.",
        ],
      },
      {
        type: "table",
        heading: "Hospitality sales moments mapped to eCard",
        headers: ["Moment", "eCard feature", "Note"],
        rows: [
          ["Site inspection", "Scan plus meeting memory with event date and headcount", "The details matter more than the name"],
          ["Bridal or MICE exhibition", "Events grouping and bulk follow-up", "Personalise for planners who showed real interest"],
          ["Proposal sent", "PDF link tracking", "Opens help time your call"],
          ["Front-office or banquet staff help capture cards", "Scan-only guest role", "Limits what temporary staff can see"],
          ["Group with several properties", "Shared workspace with roles", "Check in-app for permission details"],
        ],
      },
      {
        type: "bullets",
        heading: "Common hospitality follow-up mistakes",
        items: [
          "Sending a generic rate card instead of a proposal for the specific date and headcount discussed.",
          "Forgetting the planner after the wedding is done. Planners book many events; a thank-you after the function matters.",
          "Losing contacts when a sales manager moves to another property. Keep relationships in the hotel’s workspace.",
          "Replying to corporate admins on WhatsApp when they wrote by email. Match the channel the client chose.",
        ],
      },
    ],
    faqs: [
      { q: "Which plan fits a hotel sales team?", a: "A single property with a few sales managers can start on Free (5 users) or Starter (20 users, 1,000 scans, ₹299). A group wanting new contacts pushed into its own systems via webhooks would need Professional (₹999)." },
      { q: "Can guests save my details easily?", a: "Yes. The digital card includes a QR code and Save-to-contacts, and opens in any browser without an app." },
    ],
  },
  [`${UC}/investors`]: {
    sections: [
      {
        type: "steps",
        heading: "Sample: one founder, eighteen months",
        intro: "Sample scenario, fictional details: an angel investor meets a founder at a university demo day.",
        steps: [
          { title: "Demo day", body: "She scans the founder’s card and records a voice note: two-person team, logistics software, too early, strong technical co-founder." },
          { title: "Month six", body: "The founder emails an update. She opens the contact, reads the original AI summary and replies with one specific question." },
          { title: "Month twelve", body: "At another event a co-investor mentions the same startup. A search for “logistics founders I met at demo days” brings up the notes." },
          { title: "Month eighteen", body: "The founder raises a seed round. She remembers exactly why she passed the first time and what has changed." },
        ],
      },
      {
        type: "table",
        heading: "Investor moments mapped to eCard",
        headers: ["Moment", "eCard feature"],
        rows: [
          ["Pitch nights and demo days", "Events grouping"],
          ["Warm introductions", "Meeting memory: who introduced you"],
          ["Revisiting an old conversation", "Searchable AI summary of meeting notes"],
          ["Sharing your thesis or fund one-pager", "Digital card and PDF links with open tracking"],
          ["Fund team sharing deal flow", "Shared workspace with roles and an audit log"],
        ],
      },
      {
        type: "bullets",
        heading: "Mistakes investors make with deal flow",
        items: [
          "Not replying to founders at all. A short, clear “not now, keep me updated” builds reputation among founders.",
          "Forgetting who made the introduction. Introducers are a source of future deal flow and deserve feedback.",
          "Passing without recording why. Without a reason on file, you cannot tell later what has changed.",
        ],
      },
    ],
    faqs: [
      { q: "Which plan suits an individual angel or a small fund?", a: "An individual angel meeting under 50 founders a month can stay on Free. A fund team of up to 20 people fits Starter (₹299); webhooks to pass new contacts to your own deal-flow tooling start on Professional (₹999)." },
      { q: "Is my contact list protected?", a: "eCard offers 2FA with authenticator codes, recovery codes, trusted devices and login alerts. API keys and SMTP passwords are encrypted with AES-256-GCM." },
      { q: "Can I keep founders I passed on separate from my portfolio?", a: "Yes. Use tags such as “passed”, “watching” and “portfolio”, and archive contacts you no longer need in your active list. Natural-language search still finds them later if you need the history." },
    ],
  },
  [`${UC}/chartered-accountants`]: {
    sections: [
      {
        type: "prose",
        heading: "Sample: a GST seminar for small businesses",
        paragraphs: [
          "Sample scenario, fictional: a three-partner CA firm hosts a seminar on GST changes at a local trade association. Around 40 business owners attend; 25 leave cards. An article assistant scans them at the door as a scan-only guest, and a partner adds notes on who asked about audits, who asked about returns and who mentioned a new business.",
          "The next day, every attendee gets an email from the firm’s mailbox with the seminar slides. Those who asked about audits get a separate note offering a short call. In the run-up to the next filing season, a search for “seminar attendees who asked about GST returns” produces the list for a reminder.",
        ],
      },
      {
        type: "table",
        heading: "CA practice moments mapped to eCard",
        headers: ["Moment", "eCard feature"],
        rows: [
          ["Association meetings and seminars", "Events grouping and bulk follow-up"],
          ["Referral from an existing client or lawyer", "Meeting memory: who introduced you"],
          ["Article assistants collecting cards", "Scan-only guest role"],
          ["Seasonal reminders", "Natural-language search by topic and event"],
          ["Client asks to stop receiving messages", "Blacklist"],
        ],
      },
      {
        type: "bullets",
        heading: "Mistakes CA firms should avoid",
        items: [
          "Sending deadline reminders to everyone, including people who never became clients. Segment by tag first.",
          "Recording client financials in a networking tool. Keep engagement data in your practice software.",
          "Forgetting to thank referring clients. A short note when a referral becomes an engagement strengthens the relationship.",
          "Leaving seminar cards with the article assistant who collected them. Scan them into the firm’s shared workspace the same day so any partner can follow up, and keep the event grouping for next year’s invite list.",
        ],
      },
    ],
    faqs: [
      { q: "Which plan suits a CA firm?", a: "A small practice of up to 5 people can begin on Free. A firm with more partners, managers and article assistants fits Starter (20 users, 1,000 scans, ₹299 a month)." },
      { q: "Can I import my existing client list?", a: "Yes. CSV import is part of eCard’s clean-data tools, and duplicate merge helps clean overlaps afterwards." },
      { q: "Can seminar follow-ups go out from the firm’s own email?", a: "Yes. Connect the firm’s mailbox through SMTP — Gmail, Outlook, Zoho or any SMTP host. You preview each AI draft, and it sends after 5 seconds unless you edit or cancel it." },
    ],
  },
  [`${UC}/it-services`]: {
    sections: [
      {
        type: "prose",
        heading: "Sample: a cloud conference and a CIO lunch",
        paragraphs: [
          "Sample scenario, fictional: a 60-person IT services firm sends three people to a two-day cloud conference. They meet IT managers from manufacturing companies, a CIO at a hospital chain, two hyperscaler partner managers and a cybersecurity vendor looking for implementation partners.",
          "Every card is scanned under the conference event, with a voice note on the prospect’s current stack and pain point. Because the firm is on Professional, a signed webhook fires for each new contact, and its own small service creates a lead in the company’s main CRM. The account managers then send intro emails from their own mailboxes, attaching a relevant case-study PDF, and book discovery calls through Calendar & Meet booking.",
        ],
      },
      {
        type: "table",
        heading: "IT services moments mapped to eCard",
        headers: ["Moment", "eCard feature", "Technical note"],
        rows: [
          ["Conference or partner summit", "Events grouping and bulk follow-up", "One group per event keeps reporting clean"],
          ["New contact must reach your CRM", "Signed webhook events for each new contact (Professional and above)", "Payload format is not published; inspect in-app"],
          ["Choosing the AI that reads cards", "Claude, OpenAI, Gemini, DeepSeek, Grok, Azure or a custom endpoint, with your own key", "A key pool fails over when one is rate-limited"],
          ["Security review by a prospect’s IT team", "2FA, login alerts, AES-256-GCM for keys and SMTP passwords, audit log", "No certifications are listed on eCard’s site"],
          ["Discovery call scheduling", "Google Calendar & Meet booking (Starter and above)", "Fewer emails to agree a slot"],
        ],
      },
      {
        type: "bullets",
        heading: "Follow-up mistakes in IT services sales",
        items: [
          "Leading with a capabilities deck. IT buyers respond better to a short note on the specific problem they mentioned.",
          "Building a webhook receiver that trusts every request. Verify the signature on each event before acting on it.",
          "Letting partner-manager contacts sit unused. Alliance relationships need regular, light contact just like prospects do.",
          "Treating webhook delivery as guaranteed without monitoring. Log what you receive and reconcile against the eCard workspace now and then.",
        ],
      },
    ],
    faqs: [
      { q: "Which plan suits an IT services firm?", a: "If you want new contacts pushed into another system, Professional (₹999 a month, 100 users, 5,000 scans) is the first plan with webhooks. Larger firms needing unlimited users or white-label cards should look at Business (₹2,999) or Enterprise." },
      { q: "Can we use our Azure OpenAI deployment?", a: "eCard’s FAQ lists Azure and custom endpoints alongside Claude, OpenAI, Gemini, DeepSeek and Grok. Configuration details are not documented on the public site, so check in-app settings." },
    ],
  },
  [`${UC}/marketing-teams`]: {
    sections: [
      {
        type: "steps",
        heading: "Sample: a field-marketing roadshow",
        intro: "Sample scenario, fictional details: a B2B software company runs a four-city breakfast roadshow for finance leaders.",
        steps: [
          { title: "Before the tour", body: "The marketing manager creates one event per city and invites local sales reps as members and agency staff as scan-only guests." },
          { title: "At each breakfast", body: "Cards are scanned at the welcome desk. A QR code linking to the host’s digital card sits on every table so guests can save it." },
          { title: "Same afternoon", body: "Each attendee receives a thank-you email with the presentation PDF. Link tracking records opens, with bot clicks filtered out on short links." },
          { title: "Handover", body: "Attendees who opened the deck are passed to sales with the meeting notes attached; on Professional, webhooks can notify your other systems of each new contact." },
        ],
      },
      {
        type: "table",
        heading: "Campaign moments mapped to eCard",
        headers: ["Campaign moment", "eCard feature"],
        rows: [
          ["Roadshows, webinars with in-person meetups, booths", "Events grouping per city or activation"],
          ["Agency or temp staff at the desk", "Scan-only guest role"],
          ["Measuring content interest", "Opens of card, PDFs and WhatsApp links"],
          ["Branded cards for a campaign", "White label with logo, colours and custom domain (Business and above)"],
          ["Cleaning lists after the season", "Duplicate merge, archive and blacklist"],
        ],
      },
      {
        type: "bullets",
        heading: "Field-marketing mistakes to avoid",
        items: [
          "Reporting opens as conversions. An open shows interest; a reply or meeting is the real outcome.",
          "Sending the whole list to sales on day one. Hand over people who engaged, with context, and nurture the rest.",
          "Emailing attendees who asked not to be contacted. Use the blacklist and respect the compliance checklist for consent.",
          "Letting each city’s cards land in different spreadsheets. One workspace, one event per city.",
        ],
      },
    ],
    faqs: [
      { q: "Which plan suits a marketing team?", a: "Starter (₹299, 20 users, 1,000 scans) covers many small teams. Heavy event calendars or webhook handover to other systems point to Professional (₹999, 5,000 scans). Campaign-branded cards on your own domain require Business (₹2,999)." },
      { q: "Can we import attendee lists from a registration tool?", a: "Yes. CSV import is included on every plan, and duplicate merge helps when the same person also handed over a card." },
      { q: "Can we compare which city’s content got the most attention?", a: "Each city can be its own event, and link tracking shows opens of your card, PDFs and WhatsApp links. eCard’s site does not describe campaign reports, so compare event groups yourself." },
    ],
  },
  [`${UC}/small-business-owners`]: {
    sections: [
      {
        type: "prose",
        heading: "Sample: a hardware shop owner clears the drawer",
        paragraphs: [
          "Sample scenario, fictional: Mahesh runs a hardware and sanitaryware shop. Over ten years his drawer has collected cards from plumbers, contractors, three cement suppliers, a bank relationship manager, a CA, a GST consultant and dozens of customers who wanted delivery.",
          "On a slow Sunday he scans about 40 of the most useful cards on the Free plan, tagging each as supplier, tradesperson, customer or adviser. He archives the businesses that have closed. The following week, when a contractor asks for a reliable plumber, he searches “plumbers in Kothrud” and shares the contact in a minute. A WhatsApp in Marathi to his best contractors announcing a new tile range goes out the same evening, each message opened in WhatsApp with one tap.",
        ],
      },
      {
        type: "table",
        heading: "Everyday moments mapped to eCard",
        headers: ["Moment", "eCard feature"],
        rows: [
          ["A supplier’s new salesman visits", "Scan in the phone browser and tag as supplier"],
          ["Finding the electrician you used last year", "Natural-language search over contacts"],
          ["Telling regular customers about a new stock arrival", "AI-written WhatsApp message in English, Hindi or Marathi"],
          ["Sharing your shop’s details", "Digital card with QR code at the billing counter"],
          ["Old, closed businesses cluttering the list", "Archive"],
        ],
      },
      {
        type: "bullets",
        heading: "Mistakes small businesses often make",
        items: [
          "Trying to scan ten years of cards in one sitting. Start with the 50 most useful contacts, which fits the Free plan’s monthly scans.",
          "Saving everyone under a first name. Add the trade or company and a tag so search works later.",
          "Messaging every customer about every offer. Choose the people who actually buy that category, and add anyone who asks you to stop to the blacklist.",
        ],
      },
    ],
    faqs: [
      { q: "Is the Free plan really enough?", a: "For many owners, yes: it includes 50 scans a month, 5 users, 1 GB of storage and the base features, including WhatsApp messages and a digital card. Starter at ₹299 a month raises scans to 1,000." },
      { q: "Can my staff at the counter use it too?", a: "Yes. The Free plan allows 5 users, and roles such as member or scan-only guest let you decide who does what. Check in-app settings for exact permissions." },
      { q: "I already have contacts in my phone. Do I start over?", a: "No. You can bring existing contacts in by CSV import, and on Starter and above Google Contacts sync is available. Duplicate merge then tidies up anyone who appears twice." },
    ],
  },
  [`${UC}/education`]: {
    sections: [
      {
        type: "prose",
        heading: "Sample: a placement officer’s conclave season",
        paragraphs: [
          "Sample scenario, fictional: the placement officer at an engineering college attends an HR conclave and two industry association meetings in one month. She meets HR business partners, campus-hiring leads, an internship coordinator from a startup and an L&D head interested in a guest lecture series.",
          "Two student coordinators help scan cards as scan-only guests. She tags each contact by sector and the batch they might recruit from. Formal campus-drive invitations go out from the college’s placement mailbox, with the placement brochure as a tracked PDF. When she hands over to a colleague next year, the meeting notes and AI summaries go with the workspace instead of leaving with her.",
        ],
      },
      {
        type: "table",
        heading: "Institution moments mapped to eCard",
        headers: ["Moment", "eCard feature"],
        rows: [
          ["Education fairs and HR conclaves", "Events grouping for each fair"],
          ["Students or volunteers helping capture cards", "Scan-only guest role"],
          ["Sending the placement or programme brochure", "PDF sharing with open tracking"],
          ["Scheduling a campus visit call", "Google Calendar & Meet booking (Starter and above)"],
          ["Institution-branded cards", "White label with logo, colours and custom domain (Business and above)"],
        ],
      },
      {
        type: "bullets",
        heading: "Mistakes institutions often make",
        items: [
          "Contacting recruiters only in placement season. A short update on projects or achievements mid-year keeps the relationship alive.",
          "Letting each faculty coordinator keep their own list. One workspace avoids three people emailing the same HR head.",
          "Sending one brochure to every organisation. Recruiters, training partners and schools need different material.",
        ],
      },
    ],
    faqs: [
      { q: "Which plan suits a college or training institute?", a: "A small placement cell can start on Free (5 users, 50 scans). Once coordinators and volunteers are added, Starter covers 20 users and 1,000 scans at ₹299 a month; larger institutions may need Professional (100 users)." },
      { q: "Can invitations go out from the institution’s email address?", a: "Yes. Connect the placement or admissions mailbox through SMTP, such as Gmail, Outlook, Zoho or any SMTP host. You preview each AI draft, and it sends after 5 seconds unless you edit or cancel it." },
      { q: "Can we tell which recruiters looked at our placement brochure?", a: "Link tracking shows opens of your digital card, PDFs and WhatsApp links, and short links count clicks with bots filtered out. Use opens to decide whom to call first, not as a sign of commitment." },
    ],
  },
};

for (const p of pages) {
  const extra = EXTRA[p.slug];
  if (!extra) continue;
  p.sections = [...p.sections, ...extra.sections];
  p.faqs = [...(p.faqs ?? []), ...extra.faqs];
}
