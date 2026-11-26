import type { FAQ, PageDef, Section } from "../types";

const B = "features/contact-management";

const base: PageDef[] = [
  {
    slug: B,
    category: "crm",
    title: "Contact Management",
    seoTitle: "Contact Management For Visiting Cards",
    description: "eCard turns scanned visiting cards into clean, searchable contacts with tags, events, duplicate merge, blacklist, archive, CSV import and Google Contacts sync.",
    h1: "Every Card Becomes A Contact You Can Actually Find Again",
    eyebrow: "Contact CRM",
    intro: "Scanning a card is only the start. eCard keeps each person as a reviewed contact with tags, events and meeting memory, then gives you tools to keep the list clean as it grows.",
    variant: "feature",
    visual: "dashboard",
    icon: "users",
    sections: [
      {
        type: "prose",
        heading: "From A Stack Of Paper To A Working List",
        paragraphs: [
          "Most people who collect visiting cards end up with a drawer, a rubber band and good intentions. The problem is rarely capturing the details; it is remembering why the person mattered and finding them again when it counts.",
          "In eCard, a card is read by the AI model you choose, each field gets a confidence score, and nothing is saved until you review it. What you approve becomes a contact in your workspace, ready to tag, search and follow up with by email or WhatsApp.",
        ],
      },
      {
        type: "cards",
        heading: "What The Contact CRM Includes",
        intro: "These capabilities are listed on eCard's site. Contacts, tags, events and bulk import/export are part of every plan.",
        cards: [
          { title: "Tags & Events", body: "Group contacts by the trade show, city or intent that matters to you.", icon: "tag" },
          { title: "Natural-language Search", body: "Ask for things like \"Investors I met in Mumbai last month\".", icon: "search" },
          { title: "Duplicate Merge", body: "Combine repeat records when you meet the same person twice.", icon: "merge" },
          { title: "Blacklist & Archive", body: "Keep unwanted or inactive contacts out of your working list.", icon: "archive" },
          { title: "CSV Import & Export", body: "Bring in existing lists and take your data out in bulk.", icon: "upload" },
          { title: "Google Contacts Sync", body: "Available on Starter and higher plans.", icon: "users" },
        ],
      },
      {
        type: "split",
        heading: "Context Travels With The Contact",
        body: [
          "eCard's meeting memory records where you met, who introduced you, voice notes and a searchable AI summary. That context sits alongside the card details, so a name in your list still means something three months later.",
          "Link tracking adds another layer: you can see opens of your digital card, PDFs and WhatsApp links you shared.",
        ],
        points: ["Where you met", "Who introduced you", "Voice notes", "Searchable AI summary"],
      },
      {
        type: "table",
        heading: "Contact Features By Plan",
        headers: ["Plan", "Monthly price", "Users", "Scans / month", "Google Contacts sync"],
        rows: [
          ["Free", "₹0", "5", "50", "No"],
          ["Starter", "₹299", "20", "1,000", "Yes"],
          ["Professional", "₹999", "100", "5,000", "Yes"],
          ["Business", "₹2,999", "Unlimited", "Unlimited", "Yes"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start With Tags You Will Really Use",
        body: "A short, consistent tag list (event, city, intent) beats dozens of one-off labels. Decide your tag scheme before your next trade show, not after.",
      },
    ],
    faqs: [
      { q: "Is the contact CRM included on the Free plan?", a: "Yes. Contacts, tags and events plus bulk import/export are part of the base set on every plan, including Free." },
      { q: "Which plans include Google Contacts sync?", a: "Google Contacts sync is listed on Starter (₹299/month) and every plan above it." },
      { q: "Does eCard save a scanned card automatically?", a: "No. eCard shows each extracted field with a confidence score and nothing is saved until you review it." },
    ],
    related: [`${B}/contact-records`, `${B}/natural-language-search`, `${B}/duplicate-merge`, "features/ai-card-scanning", "features/meeting-memory"],
    source: "verified",
  },
  {
    slug: `${B}/contact-records`,
    category: "crm",
    title: "Contact Records",
    seoTitle: "What A Contact Record Holds In eCard",
    description: "See what goes into an eCard contact record: reviewed card fields, tags, events and meeting memory such as where you met and who introduced you.",
    h1: "Anatomy Of A Contact Record",
    eyebrow: "Contact CRM",
    intro: "A good contact record answers two questions at once: how do I reach this person, and why should I? eCard combines reviewed card details with the context of your meeting.",
    variant: "feature",
    visual: "extract",
    icon: "file",
    sections: [
      {
        type: "split",
        heading: "Card Details, Reviewed By You",
        body: [
          "When a card is scanned, the AI model you selected reads the fields and assigns each one a confidence score. You check the result before anything is saved, so the record starts accurate rather than needing cleanup later.",
          "Addresses are checked against Google Maps, which helps catch misreads on cramped or stylised cards.",
        ],
        points: ["Per-field confidence scores", "Nothing saved until reviewed", "Address check via Google Maps"],
      },
      {
        type: "bullets",
        heading: "Context That Sits On The Record",
        intro: "eCard's meeting memory adds the details a card never prints:",
        items: [
          "Where you met the person",
          "Who introduced you",
          "Voice notes you recorded afterwards",
          "A searchable AI summary of the meeting",
          "Tags and the event the card came from",
        ],
      },
      {
        type: "cards",
        heading: "Sample Record",
        intro: "Illustrative, fictional data only.",
        cards: [
          { title: "Sample: Priya Shah, Realtor", body: "Sample company: Shah Homes. Sample phone and email as printed on the card.", icon: "card" },
          { title: "Sample Context", body: "Met at a sample property expo in Pune, introduced by a sample broker. Tagged: pune, buyer-referrals.", icon: "map" },
          { title: "Sample Summary", body: "Interested in co-listing projects; asked for the brochure. Follow up on WhatsApp in Marathi.", icon: "sparkles" },
        ],
      },
      {
        type: "prose",
        heading: "Why The Extra Context Matters",
        paragraphs: [
          "A name and number are easy to store and easy to forget. Most follow-ups fail not because the email address is wrong but because nobody remembers what was promised at the booth.",
          "Capturing the meeting context on the same record means anyone reviewing it later, including you, can pick up the conversation without guessing.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Field List",
        body: "eCard's site does not publish a full list of contact fields. For the fields the scanner extracts, see the extracted field reference, and check in-app for anything else.",
      },
    ],
    faqs: [
      { q: "Can I add notes that are not on the card?", a: "eCard's meeting memory lets you record where you met, who introduced you and voice notes, with a searchable AI summary." },
      { q: "Does eCard verify addresses?", a: "Addresses read from a card are checked against Google Maps." },
    ],
    related: [`${B}/editing-contacts`, `${B}/contact-history`, "features/ai-card-scanning/field-reference", "features/meeting-memory/meeting-context"],
    source: "mixed",
  },
  {
    slug: `${B}/editing-contacts`,
    category: "crm",
    title: "Editing Contacts",
    seoTitle: "Editing And Correcting Contacts",
    description: "How to keep eCard contacts accurate: review scans before saving, fix misreads, add tags and context, and merge duplicates when the same person appears twice.",
    h1: "Fix It Once, Trust It Forever",
    eyebrow: "Contact CRM",
    intro: "The cheapest moment to correct a contact is before it is saved. eCard is built around that review step, and good editing habits keep records reliable afterwards.",
    variant: "guide",
    visual: "extract",
    icon: "settings",
    sections: [
      {
        type: "steps",
        heading: "A Reliable Editing Routine",
        steps: [
          { title: "Review At Scan Time", body: "eCard shows each extracted field with a confidence score. Low-confidence fields are the first ones to check against the physical card." },
          { title: "Correct Names Carefully", body: "Spelling of names and company names matters most for outreach. Compare against the card or the person's email domain." },
          { title: "Add Context Immediately", body: "Record where you met and who introduced you while it is fresh. A short voice note works when typing is awkward." },
          { title: "Tag Consistently", body: "Apply your agreed event, city and intent tags so the contact appears in the right searches." },
          { title: "Merge If It Already Exists", body: "If the person is already in your workspace, use duplicate merge instead of keeping two records." },
        ],
      },
      {
        type: "bullets",
        heading: "Common Corrections Worth Checking",
        items: [
          "Titles split across two lines on the card",
          "Phone numbers missing a country code",
          "Logos misread as part of a company name",
          "Personal versus office email addresses",
          "Addresses where the Google Maps check flagged a mismatch",
        ],
      },
      {
        type: "prose",
        heading: "Why Review Beats Bulk Cleanup",
        paragraphs: [
          "Errors that slip in at capture multiply: a wrong email bounces, a misspelt name looks careless in an intro, and duplicates split your history across records.",
          "Spending a few seconds per card during review usually saves far more time than a periodic cleanup session where you no longer remember the person.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Editing Controls",
        body: "eCard's site does not document every editing control or menu. The details here describe review and cleanup features the site lists; check the app for exact screens.",
      },
    ],
    faqs: [
      { q: "Can I correct a field before the contact is saved?", a: "Yes. eCard says nothing is saved until you review the extracted fields." },
      { q: "What should I do if I scanned the same person twice?", a: "Use duplicate merge, which eCard lists among its clean-data tools." },
    ],
    related: [`${B}/contact-records`, `${B}/duplicate-merge`, "features/ai-card-scanning/manual-review", "features/ai-card-scanning/confidence-scores"],
    source: "mixed",
  },
  {
    slug: `${B}/tags`,
    category: "crm",
    title: "Contact Tags",
    seoTitle: "Contact Tags: Organise Cards Your Way",
    description: "Use tags in eCard to group contacts by event, city, intent or relationship, so the right people surface in search and follow-ups go to the right group.",
    h1: "Tags Turn A List Into Segments",
    eyebrow: "Contact CRM",
    intro: "Tags are the lightest way to add meaning to a contact. In eCard, contacts, tags and events are part of every plan, including Free.",
    variant: "feature",
    visual: "dashboard",
    icon: "tag",
    sections: [
      {
        type: "prose",
        heading: "What A Tag Is For",
        paragraphs: [
          "A tag is a short label you attach to a contact. Unlike a folder, one contact can carry several tags, so a single person can be both a Mumbai contact and a potential investor.",
          "The value of tags shows up later: when you want everyone from one expo, or every prospect in one city, a consistent tag makes that a single search instead of a memory exercise.",
        ],
      },
      {
        type: "table",
        heading: "A Simple Tag Scheme",
        intro: "Sample scheme; adapt the names to your work.",
        headers: ["Tag type", "Sample tags", "Use it to"],
        rows: [
          ["Event", "sample-expo-2026, sample-meetup", "Follow up with everyone from one show"],
          ["City", "mumbai, pune, delhi", "Plan visits and local outreach"],
          ["Intent", "buyer, partner, investor, supplier", "Choose the right message"],
          ["Stage", "new, in-talks, closed", "See where each relationship stands"],
        ],
      },
      {
        type: "bullets",
        heading: "Tagging Habits That Last",
        items: [
          "Use lowercase and one spelling per idea",
          "Prefer a few broad tags over many narrow ones",
          "Tag at review time, not weeks later",
          "Agree the scheme with your team before a shared event",
          "Retire tags nobody searches for",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Tags Plus Search",
        body: "eCard also offers natural-language search. Tags make those results sharper because the meaning you added is attached to the record.",
      },
    ],
    faqs: [
      { q: "Are tags available on the Free plan?", a: "Yes. Contacts, tags and events are part of the base feature set on every eCard plan." },
      { q: "Can a contact have more than one tag?", a: "Tags are designed as labels you combine. eCard's site does not state a limit; check in-app for specifics." },
    ],
    related: [`${B}/tag-by-event-city-intent`, `${B}/contact-organization`, "features/events-expos/event-tagging", `${B}/natural-language-search`],
    source: "mixed",
  },
  {
    slug: `${B}/tag-by-event-city-intent`,
    category: "crm",
    title: "Tag By Event, City & Intent",
    seoTitle: "Tagging By Event, City And Intent",
    description: "A practical three-axis tagging method for visiting-card contacts: record the event, the city and the intent so every follow-up reaches the right person.",
    h1: "Three Questions To Tag Every Card",
    eyebrow: "Contact CRM",
    intro: "Where did we meet, where are they based, and what do they want? Answering those three questions at review time makes almost any later search easy.",
    variant: "guide",
    visual: "dashboard",
    icon: "tag",
    sections: [
      {
        type: "steps",
        heading: "Apply The Three Axes",
        steps: [
          { title: "Event", body: "Name the trade show, conference or meetup. In eCard, events also let you group a whole show's cards and follow up with everyone at once." },
          { title: "City", body: "Record the person's base, not where the event was held. This drives travel planning and local outreach." },
          { title: "Intent", body: "Choose one word for why the contact matters: buyer, partner, supplier, investor, hire. It decides the tone of your follow-up." },
        ],
      },
      {
        type: "split",
        heading: "Why Three Axes, Not Thirty",
        body: [
          "Large tag lists collapse under their own weight: people forget which variant to use, and searches miss half the records. Three fixed axes give enough structure without slowing down review.",
          "Combined, they answer most real questions: every buyer from the Pune show, every partner in Delhi, every investor met this quarter.",
        ],
        points: ["Fast to apply", "Easy for teams to share", "Works with natural-language search"],
      },
      {
        type: "table",
        heading: "Sample Combinations",
        intro: "Fictional examples.",
        headers: ["Sample contact", "Event", "City", "Intent"],
        rows: [
          ["Sample: Priya Shah, Realtor", "sample-property-expo", "pune", "partner"],
          ["Sample: Dr. Arjun Rao", "sample-health-summit", "bengaluru", "buyer"],
          ["Sample: Neha Kapoor, Founder", "sample-startup-meetup", "mumbai", "investor"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Do It At The Booth",
        body: "If you scan with the Telegram bot during a show, add tags when you review that evening, while you still remember each conversation.",
      },
    ],
    faqs: [
      { q: "Should the city tag be the event city?", a: "We suggest the contact's own base city; the event tag already records where you met." },
      { q: "Can I follow up with an entire event at once?", a: "eCard lists events & expos as a way to group a show's cards and follow up with everyone at once." },
    ],
    related: [`${B}/tags`, "features/events-expos/group-contacts", "features/events-expos/event-tagging", `${B}/search-examples`],
    source: "mixed",
  },
  {
    slug: `${B}/contact-history`,
    category: "crm",
    title: "Contact History",
    seoTitle: "Contact History And Relationship Context",
    description: "Keep the story of each relationship in eCard: where you met, who introduced you, voice notes, AI summaries and engagement with the card and links you shared.",
    h1: "The Whole Relationship, Not Just The Card",
    eyebrow: "Contact CRM",
    intro: "A contact's history is what turns a cold name into a warm follow-up. eCard brings meeting memory and link tracking together around each person.",
    variant: "feature",
    visual: "meeting",
    icon: "clock",
    sections: [
      {
        type: "cards",
        heading: "Signals That Build The History",
        cards: [
          { title: "Meeting Memory", body: "Where you met, who introduced you, voice notes and a searchable AI summary.", icon: "mic" },
          { title: "Link Tracking", body: "Opens of your digital card, PDFs and WhatsApp links you shared.", icon: "eye" },
          { title: "Outreach", body: "AI-drafted intro emails sent from your own SMTP, and WhatsApp messages in English, Hindi or Marathi.", icon: "send" },
          { title: "Events", body: "The trade show or expo the card came from.", icon: "calendar" },
        ],
      },
      {
        type: "prose",
        heading: "Reading A History Well",
        paragraphs: [
          "Before you contact someone again, look at three things: when you last spoke, what you promised, and whether they engaged with anything you sent. A brochure opened twice suggests a different message from one never opened.",
          "History also protects against awkward repetition, such as sending the same intro twice or forgetting who made the introduction.",
        ],
      },
      {
        type: "bullets",
        heading: "Make The History Useful",
        items: [
          "Record a voice note right after an important meeting",
          "Always note who introduced you; it is the strongest opener",
          "Use the AI summary to refresh your memory before a call",
          "Merge duplicates so history is not split across two records",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "What The Site Does Not Specify",
        body: "eCard's site does not describe a timeline layout or how long history is kept. Check the app for how activity is displayed.",
      },
    ],
    faqs: [
      { q: "Can I see if someone opened my card?", a: "eCard's link tracking shows opens of your card, PDFs and WhatsApp links." },
      { q: "Are voice notes searchable?", a: "eCard describes meeting memory as including voice notes and a searchable AI summary." },
    ],
    related: ["features/meeting-memory/relationship-timeline", "features/link-tracking/contact-activity", `${B}/contact-lifecycle`, `${B}/contact-records`],
    source: "mixed",
  },
  {
    slug: `${B}/natural-language-search`,
    category: "crm",
    title: "Natural-Language Search",
    seoTitle: "Natural-Language Contact Search",
    description: "Search eCard contacts the way you remember them, with plain questions like \"Investors I met in Mumbai last month\" instead of exact names or filters.",
    h1: "Search The Way You Remember People",
    eyebrow: "Contact CRM",
    intro: "You rarely remember a surname. You remember a city, a month and a reason. eCard's natural-language search is built around that, with queries like \"Investors I met in Mumbai last month\".",
    variant: "feature",
    visual: "dashboard",
    icon: "search",
    sections: [
      {
        type: "split",
        heading: "Ask A Question, Get People",
        body: [
          "Traditional contact search needs an exact name or a stack of filters. Natural-language search lets you type the memory itself and let the system interpret it.",
          "The example eCard gives, \"Investors I met in Mumbai last month\", combines an intent, a place and a time in one sentence.",
        ],
        points: ["No exact spelling needed", "Combine who, where and when", "Works alongside tags and events"],
      },
      {
        type: "prose",
        heading: "Why Context Makes Search Better",
        paragraphs: [
          "Search can only find what was recorded. Meeting memory (where you met, who introduced you, voice notes and an AI summary) and consistent tags give a question like this something to match against.",
          "That is why review-time habits matter: a contact tagged investor with a Mumbai meeting note is far easier to surface than one with only a phone number.",
        ],
      },
      {
        type: "bullets",
        heading: "Good First Queries To Try",
        items: [
          "People I met at a specific expo",
          "Suppliers in a given city",
          "Contacts introduced by a named colleague",
          "Founders I met this quarter",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Scope",
        body: "eCard's site gives the example query but does not document query syntax or limits. Results depend on the details stored on each contact.",
      },
    ],
    faqs: [
      { q: "Do I need special syntax?", a: "eCard presents search as plain language, for example \"Investors I met in Mumbai last month\". No syntax is documented on the site." },
      { q: "Is natural-language search on every plan?", a: "eCard's pricing page does not list it as a plan-specific extra. Check in-app or with sales for confirmation." },
    ],
    related: [`${B}/search-examples`, `${B}/search-tips`, "features/meeting-memory/searchable-memory", `${B}/tags`],
    source: "mixed",
  },
  {
    slug: `${B}/search-examples`,
    category: "crm",
    title: "Search Examples",
    seoTitle: "Contact Search Examples To Try",
    description: "Practical sample searches for an AI visiting-card CRM, grouped by goal: follow-ups after events, local visits, partner hunting and preparing for meetings.",
    h1: "Sample Searches For Real Situations",
    eyebrow: "Contact CRM",
    intro: "Here are sample questions you might ask a natural-language contact search, organised by what you are trying to get done. All names and places are illustrative.",
    variant: "guide",
    visual: "dashboard",
    icon: "search",
    sections: [
      {
        type: "table",
        heading: "Searches By Goal",
        headers: ["Goal", "Sample query"],
        rows: [
          ["Follow up after a show", "Everyone I met at the sample textile expo"],
          ["Plan a city visit", "Distributors in Ahmedabad"],
          ["Fundraising", "Investors I met in Mumbai last month"],
          ["Warm intros", "People introduced by Sample Ravi"],
          ["Meeting prep", "Doctors I spoke to about clinic software"],
        ],
      },
      {
        type: "cards",
        heading: "What Each Query Relies On",
        cards: [
          { title: "Event", body: "Works best when contacts are grouped into an event.", icon: "calendar" },
          { title: "Place", body: "Uses city tags, card addresses or meeting location.", icon: "map" },
          { title: "Intent", body: "Needs an intent tag or a note about why you met.", icon: "tag" },
          { title: "Introducer", body: "Draws on the who-introduced-you detail in meeting memory.", icon: "users" },
        ],
      },
      {
        type: "prose",
        heading: "Refining A Result",
        paragraphs: [
          "If a query returns too many people, add one more detail: a month, a city or an intent. If it returns too few, remove the most specific word, since that is often the one that was never recorded.",
          "When a search repeatedly misses someone you know is there, open the record and add the missing tag or note. Search quality is a reflection of record quality.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Example From eCard",
        body: "The one query eCard itself publishes is \"Investors I met in Mumbai last month\". The others above are our illustrations of the same idea.",
      },
    ],
    faqs: [
      { q: "Are these queries guaranteed to work?", a: "They are illustrations. Results depend on what is stored on each contact; eCard's site documents only one example query." },
      { q: "How can I improve results?", a: "Tag by event, city and intent, and record meeting context such as who introduced you." },
    ],
    related: [`${B}/natural-language-search`, `${B}/search-tips`, `${B}/tag-by-event-city-intent`, "features/meeting-memory/prepare-for-meetings"],
    source: "mixed",
  },
  {
    slug: `${B}/duplicate-merge`,
    category: "crm",
    title: "Duplicate Merge",
    seoTitle: "Duplicate Merge For Contacts",
    description: "Meet the same person twice, scan their card twice? eCard's duplicate merge combines repeat records so history, tags and context stay in one place.",
    h1: "One Person, One Record",
    eyebrow: "Clean Data",
    intro: "Duplicates creep in naturally: a second card at another event, a colleague scanning the same person, an old CSV import. eCard lists duplicate merge among its clean-data tools.",
    variant: "feature",
    visual: "dashboard",
    icon: "merge",
    sections: [
      {
        type: "bullets",
        heading: "Where Duplicates Come From",
        items: [
          "Meeting the same person at two events",
          "A new card after a job or title change",
          "Teammates scanning the same visitor at a booth",
          "Importing a CSV that overlaps your existing contacts",
          "Contacts arriving from Google Contacts sync",
        ],
      },
      {
        type: "split",
        heading: "Why Merging Matters",
        body: [
          "Two records for one person split their history. You might send an intro from one record without seeing the voice note on the other, or count one relationship as two.",
          "Merging brings the details back together so search, follow-ups and link tracking all point to the same person.",
        ],
        points: ["Single history per person", "No double outreach", "Accurate counts"],
      },
      {
        type: "steps",
        heading: "A Sensible Merge Routine",
        steps: [
          { title: "Check After Big Imports And Events", body: "These are the moments duplicates spike." },
          { title: "Compare Before Combining", body: "Two people can share a name. Confirm with company, email or phone." },
          { title: "Keep The Newest Card Details", body: "A recent card usually has the current title and number." },
          { title: "Preserve Context", body: "Make sure notes, tags and the introducer survive the merge." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "How Matching Works",
        body: "eCard's site names duplicate merge but does not document its matching rules. Review suggested merges rather than assuming they are identical people.",
      },
    ],
    faqs: [
      { q: "Does eCard merge duplicates automatically?", a: "The site lists duplicate merge as a feature but does not say whether merging is automatic. Check the app for how it behaves." },
      { q: "When should I check for duplicates?", a: "After CSV imports, Google Contacts sync and large events are good moments." },
    ],
    related: [`${B}/data-hygiene`, `${B}/clean-data-checklist`, `${B}/csv-import`, `${B}/editing-contacts`],
    source: "mixed",
  },
  {
    slug: `${B}/blacklist`,
    category: "crm",
    title: "Blacklist",
    seoTitle: "Blacklist Contacts You Should Not Contact",
    description: "Use eCard's blacklist to keep people who should not receive outreach out of your follow-ups, from opt-outs to vendors and spam cards collected at events.",
    h1: "Some People Should Never Get The Follow-up",
    eyebrow: "Clean Data",
    intro: "Not every card should lead to an email. eCard includes a blacklist among its clean-data tools, so you can mark contacts to leave alone.",
    variant: "feature",
    visual: "dashboard",
    icon: "ban",
    sections: [
      {
        type: "cards",
        heading: "Who Typically Belongs On A Blacklist",
        cards: [
          { title: "Opt-outs", body: "Anyone who has asked not to be contacted.", icon: "ban" },
          { title: "Competitors", body: "Cards collected at shows that should not get sales outreach.", icon: "briefcase" },
          { title: "Your Own Vendors", body: "Suppliers you already work with and do not prospect.", icon: "building" },
          { title: "Junk Cards", body: "Promotional flyers or duplicates scanned by mistake.", icon: "archive" },
        ],
      },
      {
        type: "prose",
        heading: "Blacklist Versus Archive",
        paragraphs: [
          "Archive is for contacts that are no longer active but might matter again. A blacklist is a stronger signal: this person should not be reached by your outreach.",
          "Keeping the distinction clear helps when you follow up with an entire event. You want the room, minus the people who said no.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Respecting Consent",
        body: "eCard's team features include a compliance checklist covering consent, export and deletion. A blacklist is one practical way to honour an opt-out.",
      },
      {
        type: "bullets",
        heading: "Good Practice",
        items: [
          "Add opt-outs the same day you receive them",
          "Note why a contact was blacklisted",
          "Review the list occasionally in case circumstances change",
          "Make sure teammates know the list exists before bulk outreach",
        ],
      },
    ],
    faqs: [
      { q: "Is a blacklisted contact deleted?", a: "eCard's site does not say. Blacklist and deletion are listed separately; check the app for exact behaviour." },
      { q: "Should opt-outs go on the blacklist?", a: "That is a sensible use. Respecting opt-outs is good practice and part of consent management." },
    ],
    related: [`${B}/archive`, `${B}/data-hygiene`, "features/team-security/consent-management", `${B}/data-export-and-deletion`],
    source: "mixed",
  },
  {
    slug: `${B}/archive`,
    category: "crm",
    title: "Archive",
    seoTitle: "Archive Inactive Contacts Without Losing Them",
    description: "Archive contacts in eCard to clear your working list of inactive relationships while keeping the record available if the person becomes relevant again.",
    h1: "Out Of The Way, Not Out Of Reach",
    eyebrow: "Clean Data",
    intro: "A list full of people you no longer work with slows everything down. Archiving, one of eCard's clean-data tools, lets you step a contact back without throwing away the history.",
    variant: "feature",
    visual: "dashboard",
    icon: "archive",
    sections: [
      {
        type: "split",
        heading: "When To Archive",
        body: [
          "Archive suits relationships that have gone quiet for a good reason: a deal closed, a project ended, someone changed industries. You may not need them this quarter, but you would not want to rebuild the context from scratch.",
        ],
        points: ["Completed projects", "Contacts who moved roles", "Old event leads that went cold", "Seasonal partners"],
      },
      {
        type: "table",
        heading: "Archive, Blacklist Or Delete?",
        headers: ["Action", "Use when", "Record kept?"],
        rows: [
          ["Archive", "Inactive but may matter later", "Intended to be kept"],
          ["Blacklist", "Should not receive outreach", "See app for details"],
          ["Delete", "Person asks for removal or data is wrong", "Removed"],
        ],
      },
      {
        type: "prose",
        heading: "A Quarterly Archive Habit",
        paragraphs: [
          "Once a quarter, look at contacts with no recent activity and decide: still relevant, archive, or delete. Ten minutes is usually enough and keeps search results focused.",
          "If you work in a team, agree who makes the call, so a colleague does not archive someone you are mid-conversation with.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Details To Confirm In-app",
        body: "eCard's site lists archive as a feature but does not describe how archived contacts appear in search or how to restore them.",
      },
    ],
    faqs: [
      { q: "Is archiving the same as deleting?", a: "No. Archive and deletion are listed separately by eCard; archive is for stepping a contact back rather than removing it." },
      { q: "Can I restore an archived contact?", a: "The site does not document restoring. Check the app." },
    ],
    related: [`${B}/blacklist`, `${B}/contact-lifecycle`, `${B}/data-hygiene`, `${B}/data-export-and-deletion`],
    source: "mixed",
  },
  {
    slug: `${B}/csv-import`,
    category: "crm",
    title: "CSV Import",
    seoTitle: "Import Contacts Into eCard From CSV",
    description: "Bring existing contact lists into eCard with CSV import. Prepare columns, clean the file, import, then check for duplicates. Available on every plan.",
    h1: "Bring Your Existing List With You",
    eyebrow: "Clean Data",
    intro: "You probably already have contacts in a spreadsheet or another tool. eCard supports CSV import, and bulk import/export is part of every plan.",
    variant: "guide",
    visual: "integrations",
    icon: "upload",
    sections: [
      {
        type: "steps",
        heading: "Preparing A CSV For Import",
        steps: [
          { title: "Export From Your Current Tool", body: "Most spreadsheets and contact apps can save as CSV (comma-separated values)." },
          { title: "One Person Per Row", body: "Remove merged cells, subtotals and blank header rows." },
          { title: "Clear Column Headers", body: "Use plain headers such as Name, Company, Email, Phone, City." },
          { title: "Clean Obvious Problems", body: "Trim stray spaces, fix phone formats and remove test rows." },
          { title: "Import, Then Review", body: "Spot-check a few contacts and run a duplicate check." },
        ],
      },
      {
        type: "bullets",
        heading: "CSV Pitfalls To Avoid",
        items: [
          "Saving with the wrong encoding, which breaks non-English names (UTF-8 is the safe choice)",
          "Commas inside company names without quotes",
          "Leading zeros dropped from phone numbers by spreadsheet apps",
          "Multiple emails crammed into one cell",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Column Mapping",
        body: "eCard's site does not document required columns or field-level mapping for CSV import. Check the import screen in the app for the expected format.",
      },
      {
        type: "prose",
        heading: "After The Import",
        paragraphs: [
          "Imported contacts lack the meeting context that scanned cards get at review time. Consider adding tags to the batch, such as the source of the list, so you can find and enrich them later.",
        ],
      },
    ],
    faqs: [
      { q: "Is CSV import on the Free plan?", a: "Yes. Bulk import/export is part of the base set on every eCard plan." },
      { q: "What columns does eCard expect?", a: "The site does not document them. Check the import screen in the app." },
    ],
    related: [`${B}/migrating-from-spreadsheets`, `${B}/bulk-import-export`, "integrations/csv-import", "resources/guides/importing-contacts-csv"],
    source: "mixed",
  },
  {
    slug: `${B}/csv-export`,
    category: "crm",
    title: "CSV Export",
    seoTitle: "Export Your Contacts To CSV",
    description: "Take your contacts out of eCard as a CSV for backups, reporting or other tools. Bulk export is part of every plan, including the Free plan.",
    h1: "Your Contacts, Portable",
    eyebrow: "Clean Data",
    intro: "A contact list you cannot take with you is a liability. eCard includes bulk export on every plan, and export is part of its compliance checklist.",
    variant: "feature",
    visual: "integrations",
    icon: "download",
    sections: [
      {
        type: "cards",
        heading: "Why Export",
        cards: [
          { title: "Backups", body: "Keep a periodic copy of your contacts under your own control.", icon: "archive" },
          { title: "Reporting", body: "Analyse event results in a spreadsheet.", icon: "chart" },
          { title: "Other Tools", body: "Move a segment into another system you use.", icon: "link" },
          { title: "Data Requests", body: "Respond when someone asks what data you hold about them.", icon: "shield" },
        ],
      },
      {
        type: "prose",
        heading: "Handle Exports Carefully",
        paragraphs: [
          "An exported CSV is a file full of personal data sitting outside any access controls. Store it somewhere protected, share it only with people who need it, and delete old copies you no longer use.",
          "If you export for a one-off task, filter to the contacts you need rather than exporting everything.",
        ],
      },
      {
        type: "bullets",
        heading: "Export Checklist",
        items: [
          "Decide why you need the file",
          "Export only the relevant segment where possible",
          "Open with UTF-8 so names display correctly",
          "Store securely and remove when done",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Format Details",
        body: "eCard's site does not list the exact columns included in exports. Check a sample export in the app.",
      },
    ],
    faqs: [
      { q: "Can I export on the Free plan?", a: "Yes. Bulk import/export is in the base feature set on every plan." },
      { q: "Is export part of compliance?", a: "eCard's compliance checklist covers consent, export and deletion." },
    ],
    related: [`${B}/data-export-and-deletion`, `${B}/bulk-import-export`, "platform/data-ownership", `${B}/csv-import`],
    source: "mixed",
  },
  {
    slug: `${B}/bulk-import-export`,
    category: "crm",
    title: "Bulk Import & Export",
    seoTitle: "Bulk Contact Import And Export",
    description: "Move contacts in and out of eCard in bulk. Bulk import and export are part of the base feature set on all plans, from Free to Enterprise.",
    h1: "Move Contacts In Bulk, On Any Plan",
    eyebrow: "Clean Data",
    intro: "Bulk import/export is listed in eCard's base feature set, so it is included whether you are on Free at ₹0 or a paid plan.",
    variant: "reference",
    visual: "integrations",
    icon: "layers",
    sections: [
      {
        type: "table",
        heading: "Bulk Tools At A Glance",
        headers: ["Tool", "What it does", "Plans"],
        rows: [
          ["CSV import", "Bring in an existing list", "All"],
          ["Bulk export", "Take contacts out", "All"],
          ["Google Contacts sync", "Keep contacts in step with Google", "Starter and above"],
          ["Webhooks", "Signed event for each new contact", "Professional and above"],
        ],
      },
      {
        type: "split",
        heading: "Choosing The Right Route",
        body: [
          "CSV is best for one-off moves: migrating from a spreadsheet or sending a segment to a colleague. Ongoing connections suit sync or webhooks better, because they do not depend on someone remembering to run an export.",
        ],
        points: ["One-off: CSV", "Ongoing with Google: Contacts sync", "Ongoing with your systems: webhooks"],
      },
      {
        type: "steps",
        heading: "A Safe Bulk Workflow",
        steps: [
          { title: "Back Up First", body: "Export your current contacts before a large import." },
          { title: "Test With A Small File", body: "Import ten rows and check how they appear." },
          { title: "Run The Full Import", body: "Then tag the batch with its source." },
          { title: "Deduplicate", body: "Use duplicate merge on any overlaps." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Limits",
        body: "eCard's site does not state row limits for imports or exports. Storage per plan ranges from 1 GB on Free to unlimited on Business.",
      },
    ],
    faqs: [
      { q: "Do I need a paid plan for bulk import?", a: "No. Bulk import/export is part of every plan." },
      { q: "Is there a row limit?", a: "The site does not publish one. Check the app or contact sales for large migrations." },
    ],
    related: [`${B}/csv-import`, `${B}/csv-export`, `${B}/google-contacts-sync`, "integrations/webhooks"],
    source: "verified",
  },
  {
    slug: `${B}/google-contacts-sync`,
    category: "crm",
    title: "Google Contacts Sync",
    seoTitle: "Google Contacts Sync On Starter And Up",
    description: "Sync eCard contacts with Google Contacts on the Starter plan (₹299/month) and above, so people you scan are available wherever you use Google.",
    h1: "Scanned Contacts, In Google Too",
    eyebrow: "Integrations",
    intro: "Google Contacts sync is listed on eCard's Starter, Professional, Business and Enterprise plans. It helps contacts you scan show up where you already look for phone numbers.",
    variant: "integration",
    visual: "integrations",
    icon: "users",
    sections: [
      {
        type: "table",
        heading: "Availability",
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
        heading: "Why Sync Matters",
        paragraphs: [
          "Your phone's dialler, Gmail autocomplete and many messaging apps lean on Google Contacts. When a scanned contact appears there, calling or emailing them later does not require opening another tool.",
          "Sync also reduces the temptation to keep a second, hand-typed list that drifts out of date.",
        ],
      },
      {
        type: "bullets",
        heading: "Before You Turn It On",
        items: [
          "Clean duplicates in eCard so they do not spread",
          "Decide which Google account should receive contacts",
          "Agree with your team whose account syncs, if you share a workspace",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "What Is Not Documented",
        body: "eCard's site does not document sync direction, field-level mapping or frequency. Check the in-app settings to confirm how sync behaves.",
      },
    ],
    faqs: [
      { q: "Which plan do I need?", a: "Starter (₹299/month) or higher. It is not on the Free plan." },
      { q: "Is sync two-way?", a: "eCard's site does not say. Check in-app settings." },
      { q: "Can I try it before paying?", a: "New workspaces get a 14-day Professional trial with no card needed, and Professional includes Google Contacts sync." },
    ],
    related: ["integrations/google-contacts", "pricing/starter", `${B}/duplicate-merge`, "pricing/compare-plans"],
    source: "verified",
  },
  {
    slug: `${B}/follow-up-reminders`,
    category: "crm",
    title: "Follow-Up Reminders",
    seoTitle: "Follow-Up Reminders And Timing Habits",
    description: "Build a follow-up rhythm for contacts from visiting cards: when to reach out, how to remember, and how eCard's intros and WhatsApp drafts help you act fast.",
    h1: "The Follow-up You Remember To Send",
    eyebrow: "Contact CRM",
    intro: "Most relationships are lost in the gap between meeting and following up. This page covers practical reminder habits and how eCard shortens that gap.",
    variant: "guide",
    visual: "email",
    icon: "bell",
    sections: [
      {
        type: "callout",
        tone: "note",
        title: "About Reminders In eCard",
        body: "eCard's site does not describe a dedicated reminder or task feature. The advice below is general guidance plus the outreach tools eCard does list.",
      },
      {
        type: "steps",
        heading: "A Simple Follow-up Rhythm",
        steps: [
          { title: "Same Day", body: "Send a short intro while you are still fresh in their mind. eCard drafts an intro email you preview; it sends after 5 seconds from your own SMTP unless you edit or cancel it." },
          { title: "Within A Week", body: "Share the promised brochure or proposal. Link tracking shows whether PDFs were opened." },
          { title: "Two To Three Weeks", body: "A light check-in, ideally on the channel they prefer. eCard can write WhatsApp messages in English, Hindi or Marathi." },
          { title: "Quarterly", body: "Review tagged contacts that matter and decide who deserves a fresh touch." },
        ],
      },
      {
        type: "bullets",
        heading: "Ways To Remember Without A Reminder Tool",
        items: [
          "Block a recurring slot in your calendar for follow-ups",
          "Use a tag such as follow-up-this-week and search for it",
          "Use natural-language search, for example people met at last month's expo",
          "On Starter and above, use Google Calendar & Meet booking to lock in the next conversation",
        ],
      },
      {
        type: "prose",
        heading: "Why Speed Matters More Than Polish",
        paragraphs: [
          "A short, timely message usually beats a perfect one sent a week later. The person still remembers your booth, your conversation and why they gave you a card.",
        ],
      },
    ],
    faqs: [
      { q: "Does eCard send automatic reminders?", a: "The site does not document a reminder feature. It does list AI intro emails, WhatsApp drafts and Calendar & Meet booking on paid plans." },
      { q: "Can I stop an intro email before it sends?", a: "Yes. You preview the draft and can edit or cancel it before it sends after 5 seconds." },
    ],
    related: ["features/outreach/follow-up-timing", "features/outreach/follow-up-workflows", "features/meeting-memory/notes-to-follow-up", `${B}/tags`],
    source: "mixed",
  },
  {
    slug: `${B}/data-hygiene`,
    category: "crm",
    title: "Data Hygiene",
    seoTitle: "Contact Data Hygiene Principles",
    description: "Why contact data decays and how to keep it clean with review at capture, duplicate merge, blacklist, archive and regular exports using eCard's clean-data tools.",
    h1: "Contact Data Decays. Plan For It.",
    eyebrow: "Clean Data",
    intro: "People change jobs, numbers and cities. A contact list is never finished; it needs light, regular care. eCard groups its tools for this under clean data.",
    variant: "feature",
    visual: "dashboard",
    icon: "check",
    sections: [
      {
        type: "prose",
        heading: "Where Bad Data Comes From",
        paragraphs: [
          "Most mess enters at three points: capture (misread or half-typed cards), import (old spreadsheets full of variants) and time (people moving on). Each needs a different fix.",
          "eCard tackles capture with per-field confidence scores and a review step before saving. The other two need habits and the clean-data tools.",
        ],
      },
      {
        type: "cards",
        heading: "eCard's Clean-data Tools",
        cards: [
          { title: "Duplicate Merge", body: "Combine repeat records into one.", icon: "merge" },
          { title: "Blacklist", body: "Keep people out of outreach.", icon: "ban" },
          { title: "Archive", body: "Step back inactive contacts.", icon: "archive" },
          { title: "CSV Import", body: "Bring in lists in a controlled way.", icon: "upload" },
          { title: "Google Contacts Sync", body: "One source on Starter and above.", icon: "users" },
        ],
      },
      {
        type: "table",
        heading: "A Hygiene Calendar",
        headers: ["When", "Task"],
        rows: [
          ["Every scan", "Review low-confidence fields before saving"],
          ["After each event", "Tag the batch, merge duplicates"],
          ["Monthly", "Process opt-outs and blacklist"],
          ["Quarterly", "Archive inactive contacts, export a backup"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Small And Often",
        body: "Five minutes after each event beats a full-day cleanup once a year, when nobody remembers who anyone is.",
      },
    ],
    faqs: [
      { q: "What does eCard include for clean data?", a: "Duplicate merge, blacklist, archive, CSV import and Google Contacts sync are listed on the site." },
      { q: "How often should I clean my contacts?", a: "Lightly after every event, with a fuller review each quarter, is a practical rhythm." },
    ],
    related: [`${B}/clean-data-checklist`, `${B}/duplicate-merge`, `${B}/archive`, `${B}/blacklist`],
    source: "mixed",
  },
  {
    slug: `${B}/shared-team-contacts`,
    category: "crm",
    title: "Shared Team Contacts",
    seoTitle: "Shared Contacts For Teams",
    description: "Share contacts across a team workspace in eCard with roles from owner to scan-only guest, an audit log and plans from 5 users free to unlimited on Business.",
    h1: "One Contact Base For The Whole Team",
    eyebrow: "Team",
    intro: "When several people collect cards, a shared workspace stops contacts being trapped in one person's phone. eCard supports team roles and workspace audit logs.",
    variant: "feature",
    visual: "team",
    icon: "users",
    sections: [
      {
        type: "table",
        heading: "Roles Available",
        intro: "Roles listed on eCard's site. Exact permissions per role are not documented publicly.",
        headers: ["Role", "Typical use"],
        rows: [
          ["Owner", "Account holder responsible for the workspace"],
          ["Admin", "Manages settings and people"],
          ["Manager", "Leads a group of members"],
          ["Member", "Day-to-day scanning and follow-up"],
          ["Scan-only guest", "Temporary help, such as booth staff, who only scan"],
        ],
      },
      {
        type: "split",
        heading: "Why Sharing Helps",
        body: [
          "At an expo, three people may meet the same buyer. In a shared workspace, the second person can see the first conversation instead of sending a duplicate intro.",
          "When someone leaves, their contacts stay with the business rather than leaving with them.",
        ],
        points: ["Fewer duplicate intros", "Continuity when people leave", "Audit log for accountability"],
      },
      {
        type: "table",
        heading: "Users Per Plan",
        headers: ["Plan", "Users", "Monthly price"],
        rows: [
          ["Free", "5", "₹0"],
          ["Starter", "20", "₹299"],
          ["Professional", "100", "₹999"],
          ["Business", "Unlimited", "₹2,999"],
        ],
      },
      {
        type: "bullets",
        heading: "Ground Rules For Shared Contacts",
        items: [
          "Agree the tag scheme before the first shared event",
          "Decide who owns the follow-up for each contact",
          "Use scan-only guest for temporary staff",
          "Turn on 2FA for everyone with full access",
        ],
      },
    ],
    faqs: [
      { q: "How many users can share a workspace?", a: "5 on Free, 20 on Starter, 100 on Professional and unlimited on Business and Enterprise." },
      { q: "Is there an audit log?", a: "Yes. eCard lists an audit log for workspaces." },
    ],
    related: ["features/team-security/roles-and-permissions", "features/team-security/shared-workspaces", "features/team-security/scan-only-guests", "platform/for-teams"],
    source: "verified",
  },
  {
    slug: `${B}/data-export-and-deletion`,
    category: "crm",
    title: "Data Export & Deletion",
    seoTitle: "Contact Data Export And Deletion",
    description: "eCard's compliance checklist covers consent, export and deletion. Learn how to answer data requests and remove contacts responsibly from your workspace.",
    h1: "Answering \"What Do You Have On Me?\"",
    eyebrow: "Compliance",
    intro: "Someone may ask what you hold about them, or ask you to delete it. eCard lists a compliance checklist covering consent, export and deletion to help you respond.",
    variant: "feature",
    visual: "security",
    icon: "shield",
    sections: [
      {
        type: "steps",
        heading: "Handling A Data Request",
        steps: [
          { title: "Confirm Who Is Asking", body: "Make sure the request comes from the person concerned before sharing anything." },
          { title: "Find Every Record", body: "Search by name, email and phone; merge duplicates so nothing is missed." },
          { title: "Export If Requested", body: "Provide the details you hold in a readable format." },
          { title: "Delete If Requested", body: "Remove the contact and any copies, including old CSV exports." },
          { title: "Record The Outcome", body: "Keep a note of what was done and when, without retaining the deleted data." },
        ],
      },
      {
        type: "prose",
        heading: "Deletion Beyond eCard",
        paragraphs: [
          "If contacts were synced to Google Contacts or sent elsewhere by webhook, deletion in eCard alone may not remove every copy. Check connected systems too.",
          "Exports saved on laptops or shared drives are easy to forget; they count as copies.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not Legal Advice",
        body: "This page is general guidance. Your obligations depend on where you and your contacts are; take advice for your situation. eCard's site does not specify retention periods.",
      },
      {
        type: "bullets",
        heading: "Related Habits",
        items: [
          "Blacklist people who opt out of outreach",
          "Export backups only when needed and store them securely",
          "Limit who in the team can export data",
        ],
      },
    ],
    faqs: [
      { q: "Does eCard support export and deletion?", a: "Its compliance checklist covers consent, export and deletion, and bulk export is on every plan." },
      { q: "How long does eCard keep deleted data?", a: "The site does not state retention periods. Contact eCard for specifics." },
    ],
    related: ["features/team-security/compliance-checklist", "help/data-and-privacy", `${B}/csv-export`, "platform/compliance-tools"],
    source: "mixed",
  },
  {
    slug: `${B}/crm-vs-spreadsheet`,
    category: "crm",
    title: "CRM Vs Spreadsheet",
    seoTitle: "Visiting-Card CRM Vs Spreadsheet",
    description: "Spreadsheets are free and familiar, but a visiting-card CRM adds scanning, search, follow-up and tracking. Here is an honest comparison to help you decide.",
    h1: "When A Spreadsheet Stops Being Enough",
    eyebrow: "Comparison",
    intro: "Plenty of people run their network from a spreadsheet, and for a small list that is fine. The trouble starts when cards pile up and follow-ups slip.",
    variant: "reference",
    visual: "dashboard",
    icon: "layers",
    sections: [
      {
        type: "table",
        heading: "Side By Side",
        headers: ["Task", "Spreadsheet", "eCard"],
        rows: [
          ["Capturing a card", "Type it by hand", "AI scan with review before saving"],
          ["Finding someone", "Exact text match", "Natural-language search"],
          ["Meeting context", "Free-text column", "Where you met, introducer, voice notes, AI summary"],
          ["Follow-up", "Separate email app", "AI intro email from your SMTP; WhatsApp drafts"],
          ["Seeing engagement", "Not possible", "Card, PDF and WhatsApp link opens"],
          ["Team access", "Shared file", "Roles and audit log"],
          ["Cost to start", "Free", "Free plan at ₹0"],
        ],
      },
      {
        type: "split",
        heading: "Where Spreadsheets Still Win",
        body: [
          "Spreadsheets are flexible, universally understood and great for one-off analysis. That is why eCard supports CSV import and export: you can keep using a spreadsheet for reporting while the day-to-day work happens elsewhere.",
        ],
        points: ["Ad-hoc analysis", "Custom calculations", "Sharing a snapshot"],
      },
      {
        type: "bullets",
        heading: "Signs You Have Outgrown The Sheet",
        items: [
          "A backlog of unscanned cards on your desk",
          "Duplicate rows for the same person",
          "You cannot remember why half the contacts are there",
          "Follow-ups happen days late or not at all",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Try Both",
        body: "Start on eCard's Free plan with 50 scans a month and import your sheet by CSV. Keep the sheet until you are confident.",
      },
    ],
    faqs: [
      { q: "Can I bring my spreadsheet into eCard?", a: "Yes, via CSV import, which is part of every plan." },
      { q: "Is eCard free to try?", a: "The Free plan is ₹0 with 50 scans a month, and new workspaces get a 14-day Professional trial with no card needed." },
    ],
    related: [`${B}/migrating-from-spreadsheets`, `${B}/csv-import`, "pricing/free", "platform/paper-to-digital"],
    source: "mixed",
  },
  {
    slug: `${B}/migrating-from-spreadsheets`,
    category: "crm",
    title: "Migrating From Spreadsheets",
    seoTitle: "Migrate Contacts From A Spreadsheet",
    description: "Step-by-step plan to move a contact spreadsheet into eCard: audit, clean, standardise, import by CSV, tag the batch and check for duplicates afterwards.",
    h1: "A Calm Migration From Your Spreadsheet",
    eyebrow: "Guide",
    intro: "Moving years of contacts can feel risky. Break it into stages and keep the original file until the new system has earned your trust.",
    variant: "guide",
    visual: "integrations",
    icon: "upload",
    sections: [
      {
        type: "steps",
        heading: "Five-stage Migration",
        steps: [
          { title: "Audit", body: "Count rows, list columns and note which ones you actually use. Drop columns nobody has filled in for a year." },
          { title: "Clean", body: "Remove test rows, obvious duplicates and people you would never contact again." },
          { title: "Standardise", body: "One format for phone numbers, one spelling per city, one person per row." },
          { title: "Import", body: "Save as UTF-8 CSV and use eCard's CSV import. Try a small sample first." },
          { title: "Enrich", body: "Tag the batch with its source, run duplicate merge, and add meeting context to key contacts." },
        ],
      },
      {
        type: "split",
        heading: "Mapping Columns To Tags",
        body: [
          "Spreadsheets often have columns like Source, Event or Category. These map naturally to tags in eCard, using the event, city and intent approach.",
        ],
        points: ["Event column to event tag", "City column to city tag", "Category column to intent tag"],
      },
      {
        type: "callout",
        tone: "note",
        title: "Field Mapping",
        body: "eCard's site does not document how CSV columns map to contact fields. Check the import screen before your full import.",
      },
      {
        type: "bullets",
        heading: "After You Switch",
        items: [
          "Stop adding new rows to the old sheet",
          "Scan new cards straight into eCard",
          "Keep the original file read-only as a backup",
        ],
      },
    ],
    faqs: [
      { q: "Should I import everything?", a: "Not necessarily. Migrating is a good moment to leave behind contacts you will never use." },
      { q: "Is there a cost to import?", a: "CSV import is part of every plan, including Free." },
    ],
    related: [`${B}/csv-import`, `${B}/crm-vs-spreadsheet`, "resources/guides/importing-contacts-csv", `${B}/duplicate-merge`],
    source: "mixed",
  },
  {
    slug: `${B}/contact-organization`,
    category: "crm",
    title: "Contact Organization",
    seoTitle: "Organising Contacts That Scale",
    description: "Organise a growing contact base with events, tags, archive and search. A practical structure for professionals who collect visiting cards every week.",
    h1: "Structure That Still Works At 5,000 Contacts",
    eyebrow: "Contact CRM",
    intro: "Organisation that feels fine at 100 contacts often breaks at 1,000. Here is a structure built from eCard's events, tags, archive and search.",
    variant: "guide",
    visual: "dashboard",
    icon: "layers",
    sections: [
      {
        type: "cards",
        heading: "Four Building Blocks",
        cards: [
          { title: "Events", body: "Group every card from a trade show or expo.", icon: "calendar" },
          { title: "Tags", body: "Add city, intent and stage labels.", icon: "tag" },
          { title: "Archive", body: "Move inactive people out of the way.", icon: "archive" },
          { title: "Search", body: "Find anyone by asking in plain language.", icon: "search" },
        ],
      },
      {
        type: "prose",
        heading: "Organise For Retrieval, Not For Tidiness",
        paragraphs: [
          "It is tempting to design an elaborate filing system. The better test is: when I need someone, can I find them in ten seconds? Structure should serve that, nothing more.",
          "That usually means fewer categories, applied consistently, plus good meeting notes that search can use.",
        ],
      },
      {
        type: "bullets",
        heading: "Organisation Anti-patterns",
        items: [
          "Tags that duplicate information already on the card, like company name",
          "One tag per person, which makes it impossible to find groups",
          "Never archiving, so search returns years of inactive contacts",
          "Different teammates inventing their own schemes",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Write It Down",
        body: "Keep a one-paragraph tagging guide for your team. It takes five minutes and prevents months of inconsistent data.",
      },
    ],
    faqs: [
      { q: "Should I use events or tags?", a: "Both. Events group cards from a specific show; tags add cross-cutting labels such as city and intent." },
      { q: "How many tags is too many?", a: "If teammates cannot remember the list, it is probably too long." },
    ],
    related: [`${B}/tags`, `${B}/archive`, "features/events-expos/group-contacts", `${B}/search-tips`],
    source: "mixed",
  },
  {
    slug: `${B}/contact-lifecycle`,
    category: "crm",
    title: "Contact Lifecycle",
    seoTitle: "The Lifecycle Of A Business Contact",
    description: "Follow a contact from scanned card to follow-up, active relationship, archive or deletion, and see which eCard tools support each stage of the lifecycle.",
    h1: "From Card To Relationship, And Beyond",
    eyebrow: "Contact CRM",
    intro: "Every contact moves through stages. Knowing the stage tells you what to do next, and which eCard tool helps.",
    variant: "guide",
    visual: "meeting",
    icon: "zap",
    sections: [
      {
        type: "steps",
        heading: "Stages Of A Contact",
        steps: [
          { title: "Captured", body: "The card is scanned and reviewed. Fields carry confidence scores; nothing saves until you approve." },
          { title: "Contextualised", body: "You add where you met, who introduced you and a voice note." },
          { title: "Contacted", body: "An AI intro email goes from your own SMTP, or a WhatsApp message in English, Hindi or Marathi." },
          { title: "Engaged", body: "Link tracking shows opens of your card, PDFs or WhatsApp links." },
          { title: "Active", body: "Meetings and conversations continue; on Starter and above you can use Calendar & Meet booking." },
          { title: "Dormant Or Closed", body: "Archive, blacklist, or delete on request." },
        ],
      },
      {
        type: "table",
        heading: "Stage Tags You Can Use",
        intro: "Sample scheme.",
        headers: ["Tag", "Meaning"],
        rows: [
          ["new", "Scanned, not yet contacted"],
          ["contacted", "Intro sent"],
          ["engaged", "Replied or opened your material"],
          ["active", "Ongoing relationship"],
        ],
      },
      {
        type: "prose",
        heading: "Most Contacts Stall At Stage Two",
        paragraphs: [
          "The gap between captured and contacted is where most networking value disappears. That is why eCard puts the intro email right after the scan: preview, and it sends in 5 seconds unless you edit or cancel.",
        ],
      },
    ],
    faqs: [
      { q: "Does eCard track lifecycle stages automatically?", a: "The site does not describe automatic stages. Tags are a simple way to mark them." },
      { q: "What happens at the end of a relationship?", a: "You can archive, blacklist or, on request, delete the contact." },
    ],
    related: [`${B}/contact-history`, `${B}/archive`, "features/ai-card-scanning/scan-to-follow-up", "platform/follow-up-engine"],
    source: "mixed",
  },
  {
    slug: `${B}/search-tips`,
    category: "crm",
    title: "Search Tips",
    seoTitle: "Tips For Better Contact Search Results",
    description: "Get better results from natural-language contact search: phrase queries by who, where and when, enrich records with context and fix gaps when searches miss.",
    h1: "Small Habits, Much Better Search",
    eyebrow: "Contact CRM",
    intro: "Natural-language search is only as good as the records behind it. These tips cover both sides: how to ask, and how to store.",
    variant: "guide",
    visual: "dashboard",
    icon: "search",
    sections: [
      {
        type: "bullets",
        heading: "Asking Better Questions",
        items: [
          "Lead with the role or intent: investors, suppliers, doctors",
          "Add one place: a city or an event",
          "Add one time window: last month, this quarter",
          "Drop details you are unsure about; wrong details hide right answers",
        ],
      },
      {
        type: "bullets",
        heading: "Storing Better Records",
        items: [
          "Tag event, city and intent at review time",
          "Note who introduced you",
          "Record a voice note after important meetings so the AI summary has substance",
          "Merge duplicates so details are not split",
        ],
      },
      {
        type: "split",
        heading: "When Search Misses Someone",
        body: [
          "If you know a person is in your workspace but your query does not find them, open their record and compare. Usually a tag or note is missing. Add it, and the next search works.",
        ],
        points: ["Check tags", "Check meeting notes", "Check for duplicates"],
      },
      {
        type: "callout",
        tone: "info",
        title: "The Example Query",
        body: "eCard's own example is \"Investors I met in Mumbai last month\": role, place and time in one sentence.",
      },
    ],
    faqs: [
      { q: "Why does search miss contacts?", a: "Usually because the detail you searched for was never recorded on the contact." },
      { q: "Do voice notes help search?", a: "eCard describes meeting memory as including voice notes and a searchable AI summary." },
    ],
    related: [`${B}/natural-language-search`, `${B}/search-examples`, "features/meeting-memory/voice-note-tips", `${B}/tag-by-event-city-intent`],
    source: "mixed",
  },
  {
    slug: `${B}/clean-data-checklist`,
    category: "crm",
    title: "Clean Data Checklist",
    seoTitle: "Clean Contact Data Checklist",
    description: "A printable checklist for clean contact data: review at scan time, tag, deduplicate, blacklist opt-outs, archive the inactive and export backups securely.",
    h1: "The Clean Data Checklist",
    eyebrow: "Clean Data",
    intro: "Use this checklist after events and at the end of each quarter. Each item maps to a habit or an eCard clean-data tool.",
    variant: "reference",
    visual: "dashboard",
    icon: "check",
    sections: [
      {
        type: "bullets",
        heading: "At Every Scan",
        items: [
          "Check low-confidence fields against the card",
          "Confirm the address check result",
          "Add event, city and intent tags",
          "Record where you met and who introduced you",
        ],
      },
      {
        type: "bullets",
        heading: "After Each Event",
        items: [
          "Make sure all cards are grouped under the event",
          "Run duplicate merge on the batch",
          "Blacklist competitors or junk cards",
          "Send or schedule follow-ups",
        ],
      },
      {
        type: "bullets",
        heading: "Every Quarter",
        items: [
          "Archive contacts with no recent activity",
          "Process any export or deletion requests",
          "Export a backup and store it securely",
          "Remove old export files you no longer need",
          "Review who on the team has access",
        ],
      },
      {
        type: "table",
        heading: "Tool For Each Job",
        headers: ["Job", "eCard tool"],
        rows: [
          ["Accurate capture", "Confidence scores and review"],
          ["Repeats", "Duplicate merge"],
          ["Do-not-contact", "Blacklist"],
          ["Inactive", "Archive"],
          ["Backups and requests", "Bulk export; compliance checklist"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Assign An Owner",
        body: "In a team, one person owning the quarterly checklist is far more reliable than everyone owning it a little.",
      },
    ],
    faqs: [
      { q: "How long does the checklist take?", a: "After an event, typically a few minutes per batch; quarterly reviews take longer depending on list size." },
      { q: "Which plans have these tools?", a: "Review, tags, events and bulk import/export are on every plan; Google Contacts sync is Starter and above." },
    ],
    related: [`${B}/data-hygiene`, `${B}/duplicate-merge`, "features/events-expos/after-the-show", "features/team-security/compliance-checklist"],
    source: "mixed",
  },
];

type Extra = { sections: Section[]; faqs?: FAQ[] };
const X = (s: string) => (s ? `${B}/${s}` : B);

const extras: Record<string, Extra> = {
  [X("")]: {
    sections: [
      {
        type: "steps",
        heading: "Your First Week With The Contact CRM",
        intro: "A practical sequence for getting a working list without overwhelming yourself.",
        steps: [
          { title: "Day 1: Import What You Already Have", body: "Bring an existing spreadsheet in by CSV and tag the whole batch with its source, so you can tell imported contacts from scanned ones later." },
          { title: "Day 2: Scan The Backlog", body: "Work through the stack of paper cards on your desk. Review low-confidence fields before saving each one." },
          { title: "Day 3: Add Context To The Top Twenty", body: "For the people who matter most, record where you met and who introduced you while you still remember." },
          { title: "Day 4: Merge And Prune", body: "Run duplicate merge across imported and scanned contacts, then archive people you will not contact this year." },
          { title: "Day 5: Test Search", body: "Ask a plain-language question you would genuinely need answered. If someone is missing, the gap shows you which tag or note to add." },
        ],
      },
      {
        type: "table",
        heading: "Which Tool Answers Which Question",
        headers: ["You want to know", "Reach for"],
        rows: [
          ["Who was at that expo?", "Events and event tags"],
          ["Who in Pune should I visit?", "City tags or natural-language search"],
          ["Why did I save this person?", "Meeting memory and the AI summary"],
          ["Did they look at what I sent?", "Link tracking"],
          ["Should I contact them at all?", "Blacklist and archive status"],
        ],
      },
    ],
    faqs: [
      { q: "Can I bring contacts from another tool?", a: "Yes. CSV import is part of every plan, so most tools that can export a CSV file can be a starting point." },
    ],
  },
  [X("contact-records")]: {
    sections: [
      {
        type: "table",
        heading: "Which Part Of The Record Answers Which Question",
        headers: ["Question you have later", "Where the answer lives"],
        rows: [
          ["How do I reach them?", "Reviewed card fields such as phone and email"],
          ["Is their address real?", "The Google Maps check made at scan time"],
          ["Why does this person matter?", "Intent tag and the AI meeting summary"],
          ["Who can vouch for me?", "The introducer recorded in meeting memory"],
          ["Which show did they come from?", "The event the card was grouped into"],
        ],
      },
      {
        type: "bullets",
        heading: "Signs A Record Needs Attention",
        items: [
          "It has a phone number but no tag, so no search will ever surface it",
          "The meeting summary is empty for someone you plan to call this week",
          "The company on the card no longer matches their email domain, a hint they have moved jobs",
          "Two records share an email address, which usually means a duplicate to merge",
          "Nobody on the team can say why the contact was saved",
        ],
      },
    ],
    faqs: [
      { q: "Is the original card image kept?", a: "eCard's site does not state whether the card photo is stored with the record. Check the contact screen in the app." },
      { q: "Who can see a contact record in a team?", a: "eCard lists roles from owner to scan-only guest and an audit log, but does not publish per-role permissions. Confirm in-app." },
    ],
  },
  [X("editing-contacts")]: {
    sections: [
      {
        type: "table",
        heading: "Sample Corrections At Review Time",
        intro: "Fictional examples of what a quick check can catch.",
        headers: ["Sample field as read", "Corrected to", "Why"],
        rows: [
          ["Company: S Sample Textiles", "Sample Textiles", "Logo letter read as text"],
          ["Phone: 98200 12345", "+91 98200 12345", "Country code missing"],
          ["Title: Head of", "Head of Procurement", "Title wrapped onto a second line"],
          ["Email: info@sample.in", "anil@sample.in", "Generic inbox chosen over the person's own"],
        ],
      },
      {
        type: "split",
        heading: "When To Edit And When To Leave It",
        body: [
          "Not every imperfection is worth fixing. Spend effort on the fields you will actually use for outreach: name, company, email and phone. A slightly odd fax number or an abbreviated street name rarely matters.",
          "If you cannot tell which value is right, keep the card's version and add a short note. Guessing introduces errors that look authoritative later.",
        ],
        points: ["Fix outreach fields first", "Do not guess; note doubts", "Recheck after job changes"],
      },
    ],
    faqs: [
      { q: "What if someone gives me a new card after changing jobs?", a: "Scan it and merge with the existing record using duplicate merge, keeping the newer details and the older meeting context." },
    ],
  },
  [X("tags")]: {
    sections: [
      {
        type: "steps",
        heading: "Setting Up Tags For The First Time",
        steps: [
          { title: "List Your Real Questions", body: "Write down five searches you expect to run in the next month. Each recurring word is a tag candidate." },
          { title: "Pick No More Than Three Tag Types", body: "Event, city and intent cover most needs. Add stage only if you actually track deals." },
          { title: "Fix The Spelling", body: "Decide once whether it is bengaluru or bangalore and stick to it." },
          { title: "Tag The Last Fifty Contacts", body: "Apply the scheme to recent records so search is useful immediately." },
          { title: "Review After A Month", body: "Delete tags nobody used and merge near-duplicates." },
        ],
      },
      {
        type: "bullets",
        heading: "Tag Pitfalls",
        items: [
          "Singular and plural versions of the same idea, such as buyer and buyers",
          "Tags that only mean something to one teammate, like abbreviations or nicknames",
          "Date-stamped tags for everything, which multiply quickly and are better handled by events",
          "Tagging the company name, which is already on the card",
        ],
      },
    ],
    faqs: [
      { q: "Should I tag by stage or by intent?", a: "Intent describes why someone matters and rarely changes; stage changes often. Start with intent and add stage only if you will maintain it." },
    ],
  },
  [X("tag-by-event-city-intent")]: {
    sections: [
      {
        type: "cards",
        heading: "Edge Cases And How To Tag Them",
        cards: [
          { title: "Met Outside An Event", body: "Use a broad event tag such as referral or cold-call, so every contact still has an origin.", icon: "calendar" },
          { title: "Works In Two Cities", body: "Tag the city where you would visit them. Add a second city only if you genuinely plan trips to both.", icon: "map" },
          { title: "Unclear Intent", body: "Use a holding tag like unknown and revisit after the first follow-up reply.", icon: "tag" },
          { title: "Intent Changes", body: "A supplier can become a partner. Replace the old intent rather than stacking both.", icon: "zap" },
        ],
      },
      {
        type: "prose",
        heading: "How The Axes Shape Your Follow-up",
        paragraphs: [
          "Each axis feeds a different decision. The event tag decides timing: everyone from last week's show should hear from you within a few days. The city tag decides channel and logistics: local contacts can be offered a meeting, distant ones a call.",
          "The intent tag decides the message itself. A buyer wants a clear offer and a next step; a partner wants to know what is in it for both sides; an investor wants a short update. Writing three template openings, one per common intent, saves a surprising amount of time after a busy show.",
        ],
      },
    ],
    faqs: [
      { q: "Can I add more axes later?", a: "Yes, but each new axis adds work at review time. Add one only when a real, recurring search needs it." },
    ],
  },
  [X("contact-history")]: {
    sections: [
      {
        type: "table",
        heading: "Sample History And What It Suggests",
        intro: "Fictional sequence for a sample contact.",
        headers: ["Sample moment", "Signal", "Sensible next step"],
        rows: [
          ["Day 0: met at sample expo, introduced by Sample Meera", "Warm introduction", "Mention Meera in the intro email"],
          ["Day 0: intro email sent", "Outreach logged", "Wait for a reply"],
          ["Day 3: brochure PDF opened twice", "Interest", "Offer a short call"],
          ["Day 10: no reply", "Quiet", "Switch to a brief WhatsApp check-in"],
        ],
      },
      {
        type: "steps",
        heading: "A Two-minute Pre-call Review",
        steps: [
          { title: "Read The AI Summary", body: "Refresh what you discussed and what you promised." },
          { title: "Check The Introducer", body: "A mutual contact is often the best way to open the call." },
          { title: "Look At Engagement", body: "Opened material tells you what to ask about; unopened material tells you to summarise it verbally." },
          { title: "Note One Next Step", body: "Decide before dialling what you want the call to lead to." },
        ],
      },
    ],
    faqs: [
      { q: "Can teammates see a contact's history?", a: "In a shared workspace, contacts are shared across the team. Exact permissions per role are not published; check in-app." },
    ],
  },
  [X("natural-language-search")]: {
    sections: [
      {
        type: "table",
        heading: "Filter-style Search Versus Natural Language",
        headers: ["Task", "With filters", "In plain language"],
        rows: [
          ["Find investors from Mumbai", "Pick a tag, pick a city, set a date range", "Investors I met in Mumbai last month"],
          ["Find a half-remembered person", "Guess at name spellings", "The architect who asked about the brochure"],
          ["Prepare for a trip", "Filter by city only", "Suppliers in Ahmedabad I have not contacted yet"],
        ],
      },
      {
        type: "steps",
        heading: "Make Search Useful From Day One",
        steps: [
          { title: "Write Context At Review", body: "Search can only match what is stored, so record where you met while scanning." },
          { title: "Start With One-concept Queries", body: "Search for a city or an event alone, then add detail once you see what comes back." },
          { title: "Fix Misses At The Source", body: "When someone does not appear, add the missing tag or note to their record." },
        ],
      },
    ],
    faqs: [
      { q: "Can search find people by who introduced them?", a: "Meeting memory records who introduced you, which gives a query like that something to match. Results depend on what was recorded." },
    ],
  },
  [X("search-examples")]: {
    sections: [
      {
        type: "split",
        heading: "Sample Scenario: Preparing A Bengaluru Trip",
        body: [
          "Sample situation: you are visiting Bengaluru next week and want to make the trip count. Start broad with a query such as \"Contacts in Bengaluru\". If the list is long, narrow it with intent: \"Buyers in Bengaluru\".",
          "Then look for warmth: \"People in Bengaluru introduced by a colleague\". Those are the easiest meetings to book. Finally, check engagement on the shortlist; anyone who opened your brochure recently is a strong first call.",
        ],
        points: ["Broad: city", "Narrow: intent", "Warm: introducer", "Prioritise: engagement"],
      },
      {
        type: "bullets",
        heading: "Queries That Tend To Disappoint",
        items: [
          "Very long sentences with five or more conditions, where one unrecorded detail hides everyone",
          "Exact dates, when you only roughly remember the month",
          "Internal nicknames for clients that never made it into a note",
          "Questions about things eCard does not store, such as deal values",
        ],
      },
    ],
    faqs: [
      { q: "Can I search by language preference?", a: "Only if you recorded it, for example in a note or a tag such as marathi. Search draws on what is stored." },
    ],
  },
  [X("duplicate-merge")]: {
    sections: [
      {
        type: "table",
        heading: "Same Person Or Not? A Quick Decision Table",
        headers: ["What matches", "What differs", "Likely verdict"],
        rows: [
          ["Name and email", "Title", "Same person, new role: merge"],
          ["Name and company", "Phone", "Probably same: confirm, then merge"],
          ["Name only", "Company and email", "Possibly different people: do not merge yet"],
          ["Email only", "Name spelling", "Same person, misread name: merge and fix"],
        ],
      },
      {
        type: "cards",
        heading: "Sample Merge",
        intro: "Fictional records.",
        cards: [
          { title: "Sample Record A", body: "Rohan Mehta, Sales Manager, Sample Foods. Tagged sample-food-expo. Voice note about packaging needs.", icon: "card" },
          { title: "Sample Record B", body: "Rohan Mehta, Regional Head, Sample Foods. Newer card, new mobile number, tagged pune.", icon: "card" },
          { title: "Sample Result", body: "One record with the new title and number, both tags and the original voice note.", icon: "merge" },
        ],
      },
    ],
    faqs: [
      { q: "What if two different people share a name?", a: "Compare company, email and phone before merging. A shared name alone is not enough." },
    ],
  },
  [X("blacklist")]: {
    sections: [
      {
        type: "steps",
        heading: "Handling An Opt-out Request",
        steps: [
          { title: "Acknowledge Politely", body: "A short reply confirming you will not contact them again is courteous and closes the loop." },
          { title: "Find Every Record", body: "Search by name, email and phone so a duplicate does not slip through." },
          { title: "Blacklist And Note The Reason", body: "Record the date and that the person asked, so teammates understand." },
          { title: "Check Connected Places", body: "If the contact was synced to Google Contacts or sent elsewhere, make sure outreach from those places stops too." },
        ],
      },
      {
        type: "table",
        heading: "Sample Reasons To Record",
        headers: ["Sample reason", "Revisit later?"],
        rows: [
          ["Asked not to be contacted", "No"],
          ["Competitor collected at a show", "Only if they change company"],
          ["Existing vendor, not a prospect", "If the relationship ends"],
          ["Promotional flyer scanned by mistake", "No; consider deleting"],
        ],
      },
    ],
    faqs: [
      { q: "Should I blacklist or delete junk scans?", a: "For accidental scans with no real person behind them, deletion is usually cleaner. Blacklist suits real people who should not be contacted." },
    ],
  },
  [X("archive")]: {
    sections: [
      {
        type: "steps",
        heading: "Running A Quarterly Archive Review",
        steps: [
          { title: "List Quiet Contacts", body: "Look for people with no outreach, replies or opens in the last few months." },
          { title: "Ask One Question Each", body: "Would I be glad this person appears in a search next month? If not, archive." },
          { title: "Add A Reason", body: "A short note such as project-ended helps when someone wonders later why they disappeared." },
          { title: "Skip Anyone Mid-conversation", body: "Check with teammates before archiving contacts they may own." },
        ],
      },
      {
        type: "bullets",
        heading: "Do Not Archive",
        items: [
          "Introducers who have sent you good contacts, even if you rarely speak",
          "Contacts with an open proposal or unpaid invoice",
          "People who asked not to be contacted; they belong on the blacklist instead",
          "Anyone requested for deletion; delete rather than hide",
        ],
      },
    ],
    faqs: [
      { q: "Does archiving free up my scan allowance?", a: "Scan limits are per month (for example 50 on Free and 1,000 on Starter) and relate to scanning, not to how many contacts are active." },
    ],
  },
  [X("csv-import")]: {
    sections: [
      {
        type: "table",
        heading: "Sample CSV Layout",
        intro: "Fictional rows showing a clean, one-person-per-row structure.",
        headers: ["Name", "Company", "Email", "Phone", "City"],
        rows: [
          ["Sample Kavita Rao", "Sample Interiors", "kavita@sample.in", "+91 90000 00001", "Pune"],
          ["Sample Imran Khan", "\"Sample Steel, Pvt Ltd\"", "imran@sample.in", "+91 90000 00002", "Nagpur"],
        ],
      },
      {
        type: "split",
        heading: "Imported Contacts Versus Scanned Contacts",
        body: [
          "A scanned card arrives with per-field confidence scores, an address check and fresh meeting context. An imported row arrives with whatever the old file contained, which may be years out of date.",
          "Treat imports as a starting point. Tag them by source, prioritise the people you will contact soon, and enrich those first rather than trying to perfect the whole list at once.",
        ],
        points: ["Tag by source", "Enrich the top contacts first", "Expect some stale data"],
      },
    ],
    faqs: [
      { q: "Will importing create duplicates?", a: "It can if the file overlaps existing contacts. Run duplicate merge after any large import." },
    ],
  },
  [X("csv-export")]: {
    sections: [
      {
        type: "steps",
        heading: "Sample: Exporting An Event For A Report",
        steps: [
          { title: "Decide The Question", body: "Sample: how many contacts from the sample hardware expo were buyers, and how many have been contacted?" },
          { title: "Export Only That Event", body: "Filter to the event before exporting where possible, rather than pulling your whole workspace." },
          { title: "Open Safely", body: "Import into your spreadsheet as UTF-8 so names in Hindi or Marathi display correctly." },
          { title: "Summarise, Then Delete", body: "Build the summary you need, then remove the raw export file." },
        ],
      },
      {
        type: "table",
        heading: "Pick The Right Route Out",
        headers: ["Need", "Better route"],
        rows: [
          ["One-off analysis", "CSV export"],
          ["Contacts on your phone", "Google Contacts sync (Starter and above)"],
          ["Every new contact in another system", "Webhooks (Professional and above)"],
          ["Someone asks what you hold", "Export their record only"],
        ],
      },
    ],
    faqs: [
      { q: "Can I schedule automatic exports?", a: "eCard's site does not describe scheduled exports. For ongoing feeds, webhooks on Professional and above send signed events for every new contact." },
    ],
  },
  [X("bulk-import-export")]: {
    sections: [
      {
        type: "bullets",
        heading: "Common Bulk Scenarios",
        items: [
          "Moving from a spreadsheet you have kept for years",
          "Merging contact lists when two teams start sharing one workspace",
          "Pulling an event's contacts into a spreadsheet for a post-show review",
          "Taking a full backup before a large clean-up",
          "Handing a segment to a colleague who works in another tool",
        ],
      },
      {
        type: "cards",
        heading: "Pitfalls In Bulk Moves",
        cards: [
          { title: "No Backup", body: "A large import that goes wrong is much easier to undo if you exported first.", icon: "archive" },
          { title: "Skipping The Test", body: "Ten rows reveal column problems before they affect thousands.", icon: "check" },
          { title: "Untagged Batches", body: "Without a source tag, imported people blend in and cannot be reviewed as a group.", icon: "tag" },
          { title: "Forgotten Files", body: "Bulk exports left on shared drives are an easy privacy leak.", icon: "shield" },
        ],
      },
    ],
    faqs: [
      { q: "Can I move contacts between workspaces?", a: "The site does not describe a direct transfer. Export to CSV and import into the other workspace is the general route." },
    ],
  },
  [X("google-contacts-sync")]: {
    sections: [
      {
        type: "split",
        heading: "Sample Scenario: Calling From Your Phone",
        body: [
          "Sample: you scan a card from Sample Anjali Desai at a morning meeting. That afternoon she calls you. With sync on, your phone can show her name instead of an unknown number, because the contact can reach Google Contacts, which many Android phones and Gmail rely on.",
          "The same applies when you start typing her name into a Gmail compose window or a messaging app that reads your Google contacts.",
        ],
        points: ["Recognise incoming calls", "Autocomplete in Gmail", "One list instead of two"],
      },
      {
        type: "steps",
        heading: "A Careful First Sync",
        steps: [
          { title: "Clean eCard First", body: "Merge duplicates and archive dead records so they do not spread." },
          { title: "Check Your Google Side", body: "If Google Contacts already holds many of the same people, expect overlaps to review." },
          { title: "Connect And Observe", body: "Look at a few contacts in Google after connecting to confirm how fields appear." },
          { title: "Agree Team Rules", body: "In a shared workspace, decide whose Google account is connected." },
        ],
      },
    ],
    faqs: [
      { q: "Does deleting a contact in eCard remove it from Google?", a: "The site does not document this. Check both places when handling deletion requests." },
    ],
  },
  [X("follow-up-reminders")]: {
    sections: [
      {
        type: "table",
        heading: "Matching Follow-up To The Situation",
        headers: ["Situation", "Sensible gap", "Channel"],
        rows: [
          ["Promised to send something", "Same day", "Email with the material"],
          ["Good conversation, no promise", "Within two days", "Short intro email"],
          ["Brochure opened, no reply", "Two to four days after the open", "WhatsApp or call"],
          ["No engagement at all", "Around two weeks", "Try a different channel once"],
          ["Said not now", "When they suggested, or next quarter", "Light check-in"],
        ],
      },
      {
        type: "bullets",
        heading: "Follow-up Mistakes To Avoid",
        items: [
          "Waiting to write the perfect message and sending nothing",
          "Sending the same text to everyone from an event without mentioning the conversation",
          "Following up on every channel at once, which feels like pressure",
          "Mentioning that you saw them open your brochure",
          "Continuing after a clear no; add them to the blacklist instead",
        ],
      },
    ],
    faqs: [
      { q: "How many follow-ups are reasonable?", a: "As general guidance, two or three spaced attempts on different channels is usually enough before pausing." },
    ],
  },
  [X("data-hygiene")]: {
    sections: [
      {
        type: "table",
        heading: "Symptoms And Likely Causes",
        headers: ["Symptom", "Likely cause", "Fix"],
        rows: [
          ["Intro emails bounce", "Misread or outdated email", "Check at review; update after job changes"],
          ["Same person contacted twice", "Duplicate records", "Duplicate merge"],
          ["Search returns hundreds of old names", "Nothing ever archived", "Quarterly archive review"],
          ["Someone who opted out gets a message", "Opt-out not recorded", "Blacklist the same day"],
          ["Nobody knows why a contact exists", "No context captured", "Meeting memory at scan time"],
        ],
      },
      {
        type: "prose",
        heading: "The Cost Of Letting It Slide",
        paragraphs: [
          "Messy data rarely causes one big failure. It causes many small ones: a bounced intro here, an embarrassing duplicate message there, ten minutes lost hunting for a contact you know you met. Each is minor; together they make people stop trusting the list and start keeping private notes again.",
          "Once that happens, the shared contact base loses its value. Light, regular hygiene is what keeps people using it.",
        ],
      },
    ],
    faqs: [
      { q: "Who should own data hygiene in a team?", a: "One named person per workspace works best, with everyone responsible for reviewing their own scans." },
    ],
  },
  [X("shared-team-contacts")]: {
    sections: [
      {
        type: "steps",
        heading: "Sample: A Three-person Expo Team",
        intro: "Fictional setup for a shared event.",
        steps: [
          { title: "Before The Show", body: "The sample manager agrees the tag scheme and adds a temporary helper as a scan-only guest." },
          { title: "During The Show", body: "Everyone scans into the same workspace, so a buyer met by two people can be merged into one record rather than followed up twice." },
          { title: "That Evening", body: "Each person reviews their own scans, adds who they spoke to and tags intent." },
          { title: "Next Day", body: "The team splits follow-ups by owner so no buyer gets three intro emails." },
        ],
      },
      {
        type: "bullets",
        heading: "Shared Workspace Pitfalls",
        items: [
          "Nobody owns the follow-up, so everyone assumes someone else sent it",
          "Temporary staff given full access instead of scan-only",
          "Different spellings of the same tag by different people",
          "Leaving former employees' accounts active",
        ],
      },
    ],
    faqs: [
      { q: "What role should booth helpers get?", a: "eCard offers a scan-only guest role, suited to temporary help who only need to capture cards." },
    ],
  },
  [X("data-export-and-deletion")]: {
    sections: [
      {
        type: "table",
        heading: "Where Copies Of A Contact Can Live",
        headers: ["Location", "Check during a request"],
        rows: [
          ["Your eCard workspace", "All records, including duplicates and archived contacts"],
          ["Google Contacts", "If sync was on (Starter and above)"],
          ["Systems receiving webhooks", "If webhooks were set up (Professional and above)"],
          ["CSV exports", "Laptops, shared drives and email attachments"],
          ["Sent emails", "Intros sent from your own mailbox"],
        ],
      },
      {
        type: "cards",
        heading: "Sample Request Log Entry",
        intro: "Fictional, minimal record of what was done.",
        cards: [
          { title: "Sample Request", body: "Deletion request received by email from a sample contact.", icon: "mail" },
          { title: "Sample Actions", body: "Two duplicate records found and deleted; one old CSV export removed.", icon: "check" },
          { title: "Sample Outcome", body: "Confirmation sent; the log keeps the date and actions, not the deleted details.", icon: "shield" },
        ],
      },
    ],
    faqs: [
      { q: "Should deleted people go on the blacklist?", a: "Keeping their details on a blacklist would conflict with deleting them. Take advice for your situation on how to record the request." },
    ],
  },
  [X("crm-vs-spreadsheet")]: {
    sections: [
      {
        type: "table",
        heading: "Which Fits You Today",
        headers: ["Your situation", "Spreadsheet is fine", "Consider a card CRM"],
        rows: [
          ["Cards collected per month", "A handful", "Dozens or more"],
          ["People using the list", "Just you", "A team"],
          ["Follow-up speed", "No rush", "Days matter"],
          ["Need to know what was opened", "No", "Yes"],
          ["Events attended", "Rarely", "Regularly"],
        ],
      },
      {
        type: "prose",
        heading: "The Hidden Cost Of The Sheet",
        paragraphs: [
          "Spreadsheets look free, but the cost sits in typing. Entering a card by hand, checking the spelling and adding a note can take a couple of minutes per person. After a busy expo with a hundred cards, that is an afternoon, and it usually gets postponed until the leads are cold.",
          "The other cost is context. A row rarely records who introduced you or what was promised, so the follow-up that does go out is generic.",
        ],
      },
    ],
    faqs: [
      { q: "Can I go back to a spreadsheet later?", a: "Yes. Bulk export to CSV is on every plan, so your contacts are not locked in." },
    ],
  },
  [X("migrating-from-spreadsheets")]: {
    sections: [
      {
        type: "table",
        heading: "Sample Standardisation Choices",
        intro: "Decide these before importing; fictional examples.",
        headers: ["Column", "Messy sample values", "Pick one format"],
        rows: [
          ["Phone", "9820012345 / 098200-12345 / +91-98200 12345", "+91 98200 12345"],
          ["City", "Bombay / Mumbai / mumbai", "mumbai"],
          ["Category", "Client / client / CUSTOMER", "buyer"],
        ],
      },
      {
        type: "bullets",
        heading: "Migration Pitfalls",
        items: [
          "Importing several tabs at once, each with different columns",
          "Keeping both the sheet and eCard live, so new contacts land in two places",
          "Losing leading zeros or the plus sign when resaving in a spreadsheet app",
          "Skipping the source tag, which makes the batch impossible to review later",
        ],
      },
    ],
    faqs: [
      { q: "How long should I keep the old spreadsheet?", a: "Keep it read-only until you have used eCard for a few weeks and are confident nothing is missing, then store or delete it securely." },
    ],
  },
  [X("contact-organization")]: {
    sections: [
      {
        type: "table",
        heading: "Sample Structure For A Busy Professional",
        headers: ["Layer", "Sample values", "Purpose"],
        rows: [
          ["Event", "sample-auto-expo, referral", "Where the contact came from"],
          ["City", "pune, mumbai, nashik", "Travel and local outreach"],
          ["Intent", "buyer, partner, supplier", "Which message to send"],
          ["Archive", "Inactive contacts", "Keep search focused"],
        ],
      },
      {
        type: "steps",
        heading: "Reorganising An Existing Mess",
        steps: [
          { title: "Freeze New Tags", body: "Stop creating tags until the scheme is agreed." },
          { title: "List Current Tags", body: "Group near-duplicates and pick one winner for each." },
          { title: "Retag The Active Contacts", body: "Focus on people you will contact this quarter; leave the rest." },
          { title: "Archive The Long Tail", body: "Old, unfamiliar contacts can step back rather than be reorganised." },
        ],
      },
    ],
    faqs: [
      { q: "Should each teammate have their own tags?", a: "Shared tags work better. Personal schemes make team searches unreliable." },
    ],
  },
  [X("contact-lifecycle")]: {
    sections: [
      {
        type: "cards",
        heading: "Sample Contact Through The Stages",
        intro: "Fictional example.",
        cards: [
          { title: "Captured", body: "Sample Dr. Leena Joshi's card is scanned at a sample health summit and reviewed.", icon: "scan" },
          { title: "Contacted", body: "An intro email goes out the same evening, mentioning the clinic software discussion.", icon: "send" },
          { title: "Engaged", body: "She opens the brochure PDF two days later.", icon: "eye" },
          { title: "Active", body: "A demo call is booked; her tag moves to active.", icon: "calendar" },
        ],
      },
      {
        type: "table",
        heading: "Stuck At A Stage? What To Try",
        headers: ["Stuck at", "Typical reason", "Try"],
        rows: [
          ["Captured", "Follow-up postponed", "Send the intro straight after review"],
          ["Contacted", "Wrong channel", "Switch from email to WhatsApp or the reverse"],
          ["Engaged", "No clear next step", "Propose one specific call or visit"],
          ["Active", "Relationship drifting", "Schedule a quarterly check-in"],
        ],
      },
    ],
    faqs: [
      { q: "Can a dormant contact become active again?", a: "Yes. Archived contacts are stepped back rather than removed, so the history is there if the relationship restarts." },
    ],
  },
  [X("search-tips")]: {
    sections: [
      {
        type: "table",
        heading: "Rewriting Weak Queries",
        intro: "Sample queries.",
        headers: ["Weak query", "Why it struggles", "Stronger version"],
        rows: [
          ["That guy from the thing", "No role, place or time", "Suppliers I met at the sample expo"],
          ["Investors Mumbai March 14 2026 fintech seed", "Too many conditions", "Investors I met in Mumbai in March"],
          ["Sample Pvt Ltd", "Company names vary in spelling", "People from Sample in Pune"],
        ],
      },
      {
        type: "prose",
        heading: "A Weekly Two-minute Habit",
        paragraphs: [
          "Once a week, run the three searches you rely on most, such as this month's event or your key city. Scan the results for anyone missing or misplaced and fix those records on the spot.",
          "This tiny routine catches tagging drift early, before a teammate's new spelling or a forgotten note quietly makes half your contacts invisible.",
        ],
      },
    ],
    faqs: [
      { q: "Does search look inside notes?", a: "eCard describes meeting memory as including a searchable AI summary. How much of each note is used is not documented." },
    ],
  },
  [X("clean-data-checklist")]: {
    sections: [
      {
        type: "steps",
        heading: "Sample: A Post-event Pass For 80 Cards",
        intro: "Fictional example for one person after a sample trade show.",
        steps: [
          { title: "Confirm Grouping", body: "Check that all 80 sample contacts sit under the event." },
          { title: "Merge", body: "Sample result: four visitors were scanned twice by different teammates; merge them." },
          { title: "Exclude", body: "Blacklist two competitor cards so they skip the event follow-up." },
          { title: "Follow Up", body: "Send intros to the remaining contacts, starting with buyers." },
        ],
      },
    ],
    faqs: [
      { q: "Can I print this checklist?", a: "Yes. Use your browser's print option to keep a paper copy beside your desk." },
      { q: "What if I skip a quarter?", a: "Run the quarterly items next time, starting with opt-outs and deletion requests, which matter most." },
    ],
  },
};

const more: Record<string, Extra> = {
  [X("")]: {
    sections: [],
    faqs: [
      { q: "How do I keep the contact list useful as it grows?", a: "Review each scan before saving, tag by event, city and intent, merge duplicates after big events and archive inactive people each quarter." },
    ],
  },
  [X("editing-contacts")]: {
    sections: [],
    faqs: [
      { q: "Should I correct a name to match the email address?", a: "Use the card as the primary source. If the email suggests a different spelling, confirm with the person rather than guessing." },
    ],
  },
  [X("tags")]: {
    sections: [
      {
        type: "prose",
        heading: "Tags For A Solo Professional Versus A Team",
        paragraphs: [
          "Working alone, you can afford a little inconsistency because you remember what you meant. A tag called vc and another called investors will both make sense to you, at least for a while.",
          "In a team, that tolerance disappears. A colleague searching for investors will miss everything you tagged vc. Before a shared workspace grows, write the agreed tags in a short note everyone can see, and treat any new tag as a small team decision rather than a personal shortcut.",
        ],
      },
    ],
  },
  [X("tag-by-event-city-intent")]: {
    sections: [],
    faqs: [
      { q: "What if I forget to tag at review time?", a: "Search for contacts without the tag you expect, such as recent cards with no event, and tag them in one sitting. Waiting longer makes intent harder to recall." },
      { q: "Should I use the same intent words as my teammates?", a: "Yes. A shared list of intent words is what lets one person's search find another person's contacts." },
    ],
  },
  [X("contact-history")]: {
    sections: [
      {
        type: "prose",
        heading: "When History Matters Most",
        paragraphs: [
          "History earns its keep in three moments. The first is a callback: someone rings you weeks later and you need to recall the conversation before you answer. The second is a handover: a colleague takes over an account and needs the background without a long briefing. The third is a reintroduction: a contact resurfaces after a year and you want to open with something specific rather than a generic hello.",
          "In each case, the details that help are rarely on the card itself. They are the introducer, the promise made and the material the person engaged with.",
        ],
      },
    ],
  },
  [X("natural-language-search")]: {
    sections: [
      {
        type: "prose",
        heading: "Sample Scenario: A Forgotten Name",
        paragraphs: [
          "Sample: a month after a sample fintech meetup, you want to reach a founder who mentioned raising a seed round. You remember the city, the event and the topic, but not her name or company.",
          "Instead of scrolling through every contact from that month, you ask something like \"Founders I met at the fintech meetup in Mumbai\". If you tagged intent and recorded a short note at review time, she is likely near the top of the results. If not, the search becomes a reminder to capture that context next time.",
        ],
      },
    ],
  },
  [X("search-examples")]: {
    sections: [],
    faqs: [
      { q: "Can I reuse the same searches every week?", a: "Yes. Repeating a few core searches, such as this month's event or your key city, is a good way to spot gaps in your records." },
      { q: "Do I need to tag everything for these examples to work?", a: "No, but the more event, city and intent detail a record has, the more queries it can answer." },
    ],
  },
  [X("duplicate-merge")]: {
    sections: [
      {
        type: "prose",
        heading: "What To Keep When Records Disagree",
        paragraphs: [
          "When two records conflict, the newer card usually wins for contact details: title, phone and email change as people move roles. Context works the other way. The older record often holds the introducer, the first meeting note and the reason you cared in the first place, so it should survive the merge.",
          "If both records carry different phone numbers and you are not sure which is current, keep the newer one and add the older one to a note until you confirm.",
        ],
      },
    ],
  },
  [X("blacklist")]: {
    sections: [
      {
        type: "prose",
        heading: "Sample Scenario: An Event-wide Follow-up",
        paragraphs: [
          "Sample: after a sample industrial expo you have 120 contacts grouped under the event and plan to follow up with everyone at once. Among them are three people from a direct competitor, two existing suppliers and one visitor who asked you, politely, not to email.",
          "If those six are blacklisted before the send, the follow-up reaches the buyers it was meant for and nobody receives a message they should not. Doing this check before every bulk follow-up takes a minute and avoids an awkward apology later.",
        ],
      },
    ],
  },
  [X("archive")]: {
    sections: [
      {
        type: "prose",
        heading: "Sample Scenario: A Seasonal Partner",
        paragraphs: [
          "Sample: a sample event caterer works with you every festival season and is quiet the rest of the year. Archiving them in the off-season keeps your daily searches focused on active work, while their history, tags and notes stay intact.",
          "A month before the next season, search archived contacts for the caterer tag and bring them back into your working list. You pick up the relationship with all the previous context, rather than starting again from an old phone number.",
        ],
      },
    ],
  },
  [X("csv-import")]: {
    sections: [
      {
        type: "prose",
        heading: "Sample Scenario: Importing A Trade Association Directory",
        paragraphs: [
          "Sample: a sample trade association shares a member list as a spreadsheet. Before importing, delete columns you will not use, split any cell that holds two phone numbers and remove members you already know well.",
          "Import with a source tag such as sample-association-list. Because these people never handed you a card, treat them as cold contacts: they should not receive the same warm follow-up you send to people you actually met. Also check whether you have permission to contact them before any outreach.",
        ],
      },
    ],
  },
  [X("csv-export")]: {
    sections: [
      {
        type: "prose",
        heading: "Common Export Pitfalls",
        paragraphs: [
          "Most export problems show up after the file is opened. Spreadsheet apps can strip the plus sign from phone numbers, turn long numbers into scientific notation and garble names saved in non-Latin scripts. Importing the file as UTF-8 text, rather than double-clicking it, avoids most of this.",
          "The other pitfall is forgetting the file exists. Exports attached to emails or left in downloads folders tend to outlive their purpose. Give each export a clear name and date, and delete it when the job is done.",
        ],
      },
    ],
  },
  [X("bulk-import-export")]: {
    sections: [
      {
        type: "prose",
        heading: "Sample Scenario: Two Teams Join One Workspace",
        paragraphs: [
          "Sample: a sales team and a partnerships team have kept separate contact lists and now want one shared workspace. Each team exports its list, agrees a common set of tags and imports its file with a source tag such as sales-list or partners-list.",
          "After both imports, duplicate merge resolves the people both teams knew. The source tags make it easy to see where overlaps came from and to decide who owns each relationship going forward.",
        ],
      },
    ],
  },
  [X("google-contacts-sync")]: {
    sections: [
      {
        type: "prose",
        heading: "Common Sync Pitfalls",
        paragraphs: [
          "The most common problem is spreading mess: duplicates or half-reviewed records in eCard can appear in Google too, where they clutter your phone. Clean first, then connect.",
          "The second is account confusion. If you have personal and work Google accounts, make sure contacts go to the one you use for business. In a team, connecting several personal accounts can scatter the same contacts across many phones, which may not be what your organisation wants.",
        ],
      },
    ],
  },
  [X("follow-up-reminders")]: {
    sections: [],
    faqs: [
      { q: "What if I missed the same-day window?", a: "Send anyway. A short message a few days late that mentions where you met is still far better than none." },
      { q: "Should I follow up with people who did not seem interested?", a: "One polite message is reasonable. After that, focus on contacts who engaged." },
    ],
  },
  [X("data-hygiene")]: {
    sections: [],
    faqs: [
      { q: "Does eCard check data at capture?", a: "Yes. Each extracted field gets a confidence score, addresses are checked against Google Maps and nothing is saved until you review it." },
      { q: "Is it worth cleaning very old contacts?", a: "Usually not individually. Archive the long tail and spend cleaning effort on people you will contact soon." },
    ],
  },
  [X("shared-team-contacts")]: {
    sections: [
      {
        type: "prose",
        heading: "When Someone Leaves The Team",
        paragraphs: [
          "A shared workspace is most valuable on the day someone leaves. Their contacts, tags, notes and history stay with the business instead of walking out on a personal phone.",
          "Make a short handover routine: reassign their active follow-ups to a named colleague, review contacts they owned for anything mid-conversation and remove their access promptly. The audit log helps confirm what changed and when.",
        ],
      },
    ],
  },
  [X("data-export-and-deletion")]: {
    sections: [],
    faqs: [
      { q: "Can I export a single person's data?", a: "eCard lists bulk export on every plan. Check the app for how to narrow an export to one contact." },
      { q: "What if the person was scanned by a teammate?", a: "Search the whole shared workspace, not just your own contacts, so records captured by colleagues are included." },
    ],
  },
  [X("crm-vs-spreadsheet")]: {
    sections: [],
    faqs: [
      { q: "Does eCard replace my spreadsheet for reporting?", a: "Not necessarily. Many people keep spreadsheets for ad-hoc analysis and export from eCard when they need one." },
      { q: "What is the biggest difference in practice?", a: "Capture speed and context: scanning with review instead of typing, plus where you met and who introduced you stored with the contact." },
    ],
  },
  [X("migrating-from-spreadsheets")]: {
    sections: [
      {
        type: "prose",
        heading: "Sample Timeline For A Small Business",
        paragraphs: [
          "Sample: a sample distributor has 2,000 rows collected over six years. Week one is the audit and clean, where around a third of rows turn out to be outdated or duplicates. Week two is standardisation and a test import of twenty rows.",
          "In week three the full import runs, followed by duplicate merge and tagging the batch. From then on, new cards are scanned directly into eCard and the spreadsheet is kept read-only. Spreading the work across weeks keeps daily business running while the switch happens.",
        ],
      },
    ],
  },
  [X("contact-organization")]: {
    sections: [
      {
        type: "prose",
        heading: "What Changes Between 100 And 5,000 Contacts",
        paragraphs: [
          "At 100 contacts you can scroll. At 1,000 you need tags, because scrolling stops working. At 5,000 you need archive, because even good tags return too many people, many of them no longer relevant.",
          "The other change is people. Larger lists are usually shared, which means the structure has to make sense to someone who did not build it. That is why a small, documented set of tags tends to outlast a clever, personal one.",
        ],
      },
    ],
    faqs: [
      { q: "When should I start organising?", a: "Now. A simple scheme applied from the start is much easier than reorganising thousands of contacts later." },
    ],
  },
  [X("contact-lifecycle")]: {
    sections: [
      {
        type: "bullets",
        heading: "Lifecycle Pitfalls",
        items: [
          "Letting new contacts sit uncontacted until the event is forgotten",
          "Treating an open as a yes and pushing too hard",
          "Never moving anyone out of active, so the stage loses meaning",
          "Archiving someone a teammate is still talking to",
          "Deleting a relationship that should only have been archived",
        ],
      },
    ],
    faqs: [
      { q: "How often should I update stage tags?", a: "Whenever something meaningful happens, such as a reply or a meeting, and during a quarterly review." },
    ],
  },
  [X("search-tips")]: {
    sections: [
      {
        type: "bullets",
        heading: "Search Pitfalls",
        items: [
          "Assuming a contact is missing when the detail you searched for was never stored",
          "Searching for a company name spelled differently from the card",
          "Forgetting that archived contacts may be out of everyday results",
          "Using a teammate's private shorthand that is not in any note",
        ],
      },
    ],
    faqs: [
      { q: "Should I search by name or by context?", a: "If you know the name, use it. If you only remember the situation, describe the who, where and when." },
    ],
  },
  [X("clean-data-checklist")]: {
    sections: [
      {
        type: "prose",
        heading: "Adapting The Checklist To Your Volume",
        paragraphs: [
          "If you collect a handful of cards a month, the at-every-scan list does most of the work and the quarterly review can be brief. If you attend several shows a month, the after-each-event list becomes the important one, because duplicates and junk cards pile up quickly.",
          "Teams should add one item to the quarterly list: confirm that everyone with access still needs it, and that temporary scan-only guests from past events have been removed.",
        ],
      },
    ],
  },
};

/** Extra paragraphs appended to the page's last prose (or split) section, plus extra FAQs. */
type Deep = { paras: string[]; faqs?: FAQ[] };

const deeper: Record<string, Deep> = {
  [X("duplicate-merge")]: {
    paras: [
      "A useful habit is to merge at the moment you notice, not later. If you scan someone and their name looks familiar, search for them before saving the new card. Thirty seconds then saves a confusing split history in a month.",
    ],
    faqs: [
      { q: "Do duplicates affect link tracking?", a: "If a person exists twice, engagement may be attached to only one record. Merging keeps their activity in one place." },
      { q: "Should I merge contacts from different companies?", a: "Only when you are sure it is the same person who changed jobs. Otherwise keep them separate." },
    ],
  },
  [X("blacklist")]: {
    paras: [
      "The same check applies before WhatsApp follow-ups and intro emails sent one at a time. A blacklist only helps if everyone on the team looks at it, so mention it in your team's follow-up routine rather than relying on memory.",
    ],
    faqs: [
      { q: "Can I remove someone from the blacklist?", a: "The site does not document this. Circumstances do change, such as a competitor joining a client, so check the app for how to reverse it." },
      { q: "Do teammates see my blacklist?", a: "In a shared workspace contacts are shared, but per-role visibility is not published. Confirm in-app." },
    ],
  },
  [X("archive")]: {
    paras: [
      "Archiving is also useful when a whole segment pauses, for example everyone tagged for a product you no longer sell. Stepping them back together keeps the tag intact, so the group is easy to bring back if the product returns.",
    ],
    faqs: [
      { q: "Will archived contacts still appear in search?", a: "The site does not describe how archived contacts appear in search. Check the app." },
      { q: "Should I archive or delete old event leads?", a: "Archive if you might ever contact them again; delete if the data is wrong or the person asked for removal." },
    ],
  },
  [X("csv-import")]: {
    paras: [
      "After any import, open five random contacts and compare them with the original rows. If names, phone numbers or cities look wrong on those five, fix the file and reimport before the problem spreads into tags and follow-ups.",
    ],
    faqs: [
      { q: "Can I import contacts in Hindi or Marathi script?", a: "Save the file as UTF-8, which preserves non-Latin characters. The site does not list language-specific import rules." },
      { q: "Should imported contacts receive intro emails?", a: "Be careful. People who never met you may not expect contact; check you have a legitimate reason and permission first." },
    ],
  },
  [X("csv-export")]: {
    paras: [
      "If an export is going to someone outside your team, such as an accountant or a partner, send only the columns they need. A file with names and cities is far less sensitive than one with phone numbers, emails and meeting notes.",
    ],
    faqs: [
      { q: "How often should I export a backup?", a: "A quarterly backup, stored securely and replacing the previous one, is a practical rhythm for most people." },
      { q: "Can teammates export contacts?", a: "The site does not publish which roles can export. Limiting export to a few trusted people is a sensible policy." },
    ],
  },
  [X("bulk-import-export")]: {
    paras: [
      "Whichever route you choose, write down what you did: the file name, the date, how many rows went in or out and which tag marks the batch. That short note is what lets you answer, months later, where a group of contacts came from.",
    ],
    faqs: [
      { q: "Is CSV the only bulk format?", a: "CSV is the format eCard's site names for import and export. Ongoing connections use Google Contacts sync or webhooks." },
      { q: "Do I need technical help for a bulk import?", a: "Usually not. A spreadsheet app and a few careful checks are enough for most lists." },
    ],
  },
  [X("google-contacts-sync")]: {
    paras: [
      "After the first sync, spend a week noticing how contacts appear in your dialler and Gmail. If something looks wrong, such as a name split oddly or a company missing, fix it in eCard first and check again, rather than editing many contacts on the Google side.",
    ],
    faqs: [
      { q: "Do I need Google Contacts sync if I already export CSV?", a: "They solve different problems. CSV is for one-off moves; sync keeps scanned contacts available in Google without remembering to export." },
    ],
  },
  [X("follow-up-reminders")]: {
    paras: [
      "Timing also depends on the person. Senior people at large companies often reply slowly but thoughtfully; small business owners may answer on WhatsApp within minutes and ignore email for days. Notice how each contact replies, and record the preferred channel on their record so the next follow-up goes where they actually read.",
    ],
  },
  [X("data-hygiene")]: {
    paras: [
      "A simple measure of hygiene is how often you trust your first search result. If you regularly double-check numbers elsewhere, or keep a private list on the side, the shared data has drifted. That is the signal to run a quick merge, archive and tagging pass before the next event.",
      "Time also matters more than tools. Contacts decay steadily as people move roles; a light touch every few weeks prevents the slow build-up that makes a full clean-up feel impossible.",
    ],
  },
  [X("shared-team-contacts")]: {
    paras: [
      "The same routine applies to temporary helpers after an event. Scan-only guests should be removed once their cards are reviewed, so the workspace only includes people who still need access.",
    ],
    faqs: [
      { q: "Can two people own the same contact?", a: "The site does not describe contact ownership. Agree a simple rule, such as whoever met them first owns the follow-up." },
      { q: "Do shared contacts count against my scan limit?", a: "Scan limits are per month by plan, for example 1,000 on Starter and 5,000 on Professional. Check in-app how team usage is counted." },
    ],
  },
  [X("data-export-and-deletion")]: {
    paras: [
      "Requests are easier when your data is already tidy. Duplicates, forgotten exports and untracked connections are what turn a ten-minute task into an afternoon of searching. Keeping a short list of where contacts flow, such as Google Contacts or a webhook endpoint, means you know where to look when a request arrives.",
      "Respond calmly and promptly. Most people asking are simply cautious, and a clear, courteous reply builds trust.",
    ],
  },
  [X("crm-vs-spreadsheet")]: {
    paras: [
      "A fair test is to run both for a month. Scan the next batch of cards into eCard on the Free plan and keep the spreadsheet for your old list. At the end of the month, compare how quickly follow-ups went out and how easily you found people. The answer is usually obvious once you have used both on real work.",
      "If the spreadsheet still wins for you, that is a valid result. Nothing is locked in: export your contacts and carry on.",
    ],
  },
  [X("migrating-from-spreadsheets")]: {
    paras: [
      "Tell anyone who used the old sheet about the switch on the day it happens, and where to find contacts now. Migrations fail quietly when one teammate keeps adding rows to the spreadsheet out of habit.",
    ],
    faqs: [
      { q: "What if my spreadsheet has notes columns?", a: "eCard's site does not document how notes import. Test with a few rows, and add key context to important contacts by hand if needed." },
      { q: "Can I migrate in stages?", a: "Yes. Importing your most active contacts first and the long tail later is a sensible approach." },
    ],
  },
  [X("contact-organization")]: {
    paras: [
      "Finally, give the structure an owner. Someone has to decide when a new tag is allowed, when an old one retires and when archive reviews happen. Without that, even a well-designed scheme slowly drifts back into a mess.",
    ],
    faqs: [
      { q: "Are events the same as tags?", a: "No. eCard lists events and expos as a way to group a show's cards and follow up with everyone at once; tags are flexible labels across all contacts." },
    ],
  },
  [X("contact-lifecycle")]: {
    paras: [
      "Thinking in stages also helps you spend time well. New contacts need speed, engaged contacts need a clear next step and active relationships need occasional care. A quick weekly look at each stage shows where effort is most likely to pay off.",
      "It also makes handovers easier: a colleague can see at a glance which contacts are waiting for a first message and which are already in conversation.",
    ],
    faqs: [
      { q: "How do I know a contact is engaged?", a: "A reply, or opens of your card, PDFs or WhatsApp links in eCard's link tracking, are reasonable signs." },
    ],
  },
  [X("search-tips")]: {
    paras: [
      "Search also benefits from a little discipline across the team. If everyone records the introducer and the event in the same way, one person's search can find another person's contacts, which is where a shared workspace pays off.",
    ],
    faqs: [
      { q: "Does capitalisation matter in queries?", a: "Natural-language search is designed around plain questions; eCard does not document case rules. Consistent lowercase tags are still a good habit." },
    ],
  },
  [X("clean-data-checklist")]: {
    paras: [
      "Keep the checklist where you will see it: pinned in your team chat, printed by your desk or added to the calendar invite for each event. A checklist nobody opens is no checklist at all.",
      "When an item keeps being skipped, ask why. Usually it is too vague or nobody owns it. Make it specific, give it a name, and it tends to get done.",
    ],
    faqs: [
      { q: "Who should run the after-event list?", a: "The person who organised the team's presence at the event is a natural owner, with each scanner reviewing their own cards first." },
    ],
  },
};

const topUp: Record<string, string[]> = {
  [X("clean-data-checklist")]: [
    "If you only have time for one item, make it the opt-outs. Data that is slightly messy costs you time; contacting someone who asked you not to costs you trust.",
  ],
  [X("search-tips")]: [
    "When a query surprises you with someone unexpected, look at why they matched. Sometimes the record holds a useful detail you had forgotten; sometimes it shows a tag applied by mistake that needs fixing.",
  ],
  [X("search-examples")]: [
    "The same pattern works for any city or event: start broad, narrow by intent, look for warm introductions, then let engagement decide the order of your calls. Keep a note of queries that worked well so you can reuse them before the next trip.",
  ],
  [X("contact-organization")]: [
    "Revisit the structure once a year. Businesses change direction, new cities matter and old intents fade. A short annual review keeps the scheme matched to the work you actually do today.",
  ],
  [X("contact-history")]: [
    "That is also why a few seconds of note-taking straight after a meeting is worth more than a long write-up a week later. Fresh, specific details, such as a promised price sheet or a child's exam that delayed a decision, are exactly what make the next conversation feel personal.",
  ],
  [X("data-export-and-deletion")]: [
    "Finally, review the process once a year. Check that the people who handle requests still know the steps and that your list of connected systems is still accurate.",
  ],
  [X("contact-lifecycle")]: [
    "Keep stage names few and plain so everyone uses them the same way.",
  ],
  [X("editing-contacts")]: [
    "Treat any correction made after saving as a prompt to ask why the error happened. A pattern of the same mistake, such as missing country codes from one region, tells you what to look for at review time.",
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
