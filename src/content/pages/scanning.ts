import type { PageDef, Section, FAQ } from "../types";

const B = "features/ai-card-scanning";

export const pages: PageDef[] = [
  {
    slug: B,
    category: "scanning",
    title: "AI Card Scanning",
    seoTitle: "AI Visiting Card Scanner with Model Choice",
    description: "Scan visiting cards with Claude, OpenAI, Gemini, DeepSeek or Grok. Review every field with confidence scores before anything is saved to eCard.",
    h1: "Scan a visiting card with the AI model you choose",
    eyebrow: "AI Card Scanning",
    intro: "eCard reads visiting cards with an AI model you pick, shows a confidence score for each field, and saves nothing until you have reviewed it. Addresses are checked against Google Maps.",
    variant: "feature",
    visual: "scan",
    icon: "scan",
    sections: [
      {
        type: "cards",
        heading: "What the scanner does",
        intro: "Every point below is stated on eCard’s own site.",
        cards: [
          { title: "Choose your model", body: "Pick Claude, OpenAI, Gemini, DeepSeek or Grok. The FAQ also lists Azure and custom endpoints.", icon: "brain" },
          { title: "Bring your own key", body: "Use your own AI provider key instead of relying on a shared one.", icon: "key" },
          { title: "Confidence per field", body: "Each extracted field carries a confidence score so you know what to double-check.", icon: "eye" },
          { title: "Review before save", body: "Nothing is written to your contacts until you have reviewed the result.", icon: "check" },
          { title: "Key pool with failover", body: "Add several keys to a pool so scanning can fail over when one key has a problem.", icon: "layers" },
          { title: "Google Maps address check", body: "Addresses read from a card are checked against Google Maps.", icon: "map" },
        ],
      },
      {
        type: "prose",
        heading: "Why model choice matters",
        paragraphs: [
          "Visiting cards vary enormously: glossy finishes, small fonts, logos that overlap text, two languages on one side. Different AI models handle these differently, and the costs of each provider differ too. Rather than locking you into one engine, eCard lets you decide which model reads your cards.",
          "Because you can bring your own key, the usage relationship with the AI provider is yours. eCard encrypts stored API keys with AES-256-GCM, the same protection it applies to SMTP passwords.",
        ],
      },
      {
        type: "steps",
        heading: "From card to contact",
        steps: [
          { title: "Capture", body: "Photograph the card in any phone browser, or send the photo to the eCard Telegram bot." },
          { title: "Read", body: "Your chosen AI model extracts the fields and assigns each one a confidence score." },
          { title: "Review", body: "Check low-confidence fields and correct anything the model misread." },
          { title: "Save and follow up", body: "Save the contact, then send an intro email from your own mailbox or a WhatsApp message." },
        ],
      },
      {
        type: "table",
        heading: "Monthly scans by plan",
        intro: "AI scanning is included on every plan. Prices are monthly, in INR.",
        headers: ["Plan", "Price", "Scans per month"],
        rows: [
          ["Free", "₹0", "50"],
          ["Starter", "₹299", "1,000"],
          ["Professional", "₹999", "5,000"],
          ["Business", "₹2,999", "Unlimited"],
          ["Enterprise", "Custom", "Unlimited"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start without a card",
        body: "The Free plan includes 50 scans, and new workspaces get a 14-day Professional trial with no card required.",
      },
    ],
    faqs: [
      { q: "Which AI models can read my cards?", a: "Claude, OpenAI, Gemini, DeepSeek and Grok are named on the homepage. eCard’s FAQ also mentions Azure and custom endpoints." },
      { q: "Is a scan saved automatically?", a: "No. eCard states that nothing is saved until you review it." },
      { q: "Do I need to install an app?", a: "No. eCard works in any phone browser, and you can also scan through the Telegram bot." },
    ],
    related: [`${B}/how-it-works`, `${B}/ai-model-selection`, `${B}/confidence-scores`, "features/telegram-bot", "pricing"],
    source: "verified",
  },
  {
    slug: `${B}/how-it-works`,
    category: "scanning",
    title: "How Scanning Works",
    seoTitle: "How eCard AI Card Scanning Works",
    description: "A plain walkthrough of eCard scanning: capture a card photo, let your chosen AI model read it, review confidence scores, then save the contact.",
    h1: "What happens between the photo and the saved contact",
    eyebrow: "AI Card Scanning",
    intro: "Scanning in eCard is a short pipeline: a photo goes in, an AI model reads it, you review the result, and only then does a contact exist. Here is each stage and what you control.",
    variant: "guide",
    visual: "extract",
    icon: "zap",
    sections: [
      {
        type: "steps",
        heading: "The four stages",
        steps: [
          { title: "1. Capture the image", body: "Take a photo in your phone browser — eCard has no app to install — or send the photo to the eCard Telegram bot." },
          { title: "2. The model reads the card", body: "The image goes to the AI model you selected: Claude, OpenAI, Gemini, DeepSeek or Grok, or Azure or a custom endpoint as listed in the FAQ." },
          { title: "3. Fields are scored", body: "Each extracted field gets a confidence score so you can see which values the model was less sure about." },
          { title: "4. You review, then save", body: "Nothing is saved until you have reviewed it. Addresses are also checked against Google Maps." },
        ],
      },
      {
        type: "split",
        heading: "Why the review step exists",
        body: [
          "AI models are very good at reading printed text, but cards are designed for people, not machines. Stylised fonts, phone numbers split across lines or a name printed in two scripts can all trip a model up.",
          "A review step means one quick glance catches the occasional mistake before it reaches your contacts, your follow-up emails and your team.",
        ],
        points: [
          "Low-confidence fields show you where to look",
          "Corrections happen before the record exists",
          "Clean records make search and duplicate merge more reliable",
        ],
      },
      {
        type: "prose",
        heading: "Where your key fits in",
        paragraphs: [
          "eCard lets you bring your own AI key. You can also add several keys to a key pool; if one fails, scanning fails over to another. Stored API keys are encrypted with AES-256-GCM.",
          "eCard’s site does not publish the internal details of how images are sent to each provider. If that matters for your organisation, review your AI provider’s own data terms alongside eCard’s.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "After the save",
        body: "Once saved, a contact can receive an AI-drafted intro email that sends after 5 seconds from your own SMTP, with time to edit or cancel. You can also open a WhatsApp message in English, Hindi or Marathi in one tap.",
      },
    ],
    faqs: [
      { q: "Can I scan without the Telegram bot?", a: "Yes. eCard works in any phone browser; Telegram is an additional way to send card photos." },
      { q: "What if the model gets a field wrong?", a: "You correct it during review. eCard does not save the contact until you have reviewed it." },
    ],
    related: [B, `${B}/confidence-scores`, `${B}/manual-review`, `${B}/scan-to-follow-up`],
    source: "verified",
  },
  {
    slug: `${B}/front-and-back`,
    category: "scanning",
    title: "Front & Back Scanning",
    seoTitle: "Scanning Both Sides of a Visiting Card",
    description: "Many visiting cards carry details on both sides. Practical guidance for capturing double-sided cards so no phone number or address gets missed.",
    h1: "Don’t lose the details printed on the back",
    eyebrow: "AI Card Scanning",
    intro: "Plenty of cards print a second language, a branch address or a WhatsApp number on the reverse. This page offers general guidance for handling double-sided cards when you scan.",
    variant: "guide",
    visual: "scan",
    icon: "layers",
    sections: [
      {
        type: "callout",
        tone: "note",
        title: "What eCard documents",
        body: "eCard’s public site describes scanning a card photo with your chosen AI model and reviewing each field before saving. It does not document a dedicated two-sided capture mode. Check the scan screen in the app for current options.",
      },
      {
        type: "bullets",
        heading: "What typically lives on the back",
        items: [
          "The same details in a regional language, such as Hindi or Marathi",
          "Additional office or factory addresses",
          "A product list, certifications or a tagline",
          "A personal mobile or WhatsApp number added by hand",
          "A QR code pointing to a website or digital card",
        ],
      },
      {
        type: "steps",
        heading: "A practical approach",
        steps: [
          { title: "Scan the side with the most contact detail", body: "Usually the front holds name, title, phone and email. Let the AI read that first." },
          { title: "Check the back before you save", body: "Look for numbers or addresses that are not in the extracted fields." },
          { title: "Add missing details during review", body: "Because nothing is saved until you review it, you can type in anything the photo didn’t include." },
          { title: "Capture handwritten notes in context", body: "If someone scribbled a number on the card, record why — eCard’s meeting memory supports notes and voice notes." },
        ],
      },
      {
        type: "prose",
        heading: "Bilingual cards",
        paragraphs: [
          "Cards printed in English on one side and a regional script on the other are common in India. Usually the English side is enough for a contact record, but the regional side can confirm spellings of names.",
          "If you plan to follow up on WhatsApp in Hindi or Marathi — two of the three languages eCard supports — the regional side may also hint at the contact’s preferred language.",
        ],
      },
    ],
    faqs: [
      { q: "Does eCard merge front and back automatically?", a: "eCard’s site does not document this. Review the extracted fields and add any back-side details manually before saving." },
      { q: "Which side should I photograph first?", a: "As general guidance, start with the side that has the name, phone and email, then check the other side during review." },
    ],
    related: [`${B}/unusual-card-layouts`, `${B}/manual-review`, `${B}/photo-best-practices`, "features/meeting-memory/voice-notes"],
    source: "mixed",
  },
  {
    slug: `${B}/contact-extraction`,
    category: "scanning",
    title: "Contact Extraction",
    seoTitle: "Contact Extraction from Visiting Cards",
    description: "How eCard turns a card photo into contact fields, why each field carries a confidence score, and how address checks with Google Maps help.",
    h1: "Turning printed cards into structured contact fields",
    eyebrow: "AI Card Scanning",
    intro: "Extraction is the step where an AI model reads the card and splits its text into fields like name, company and phone. eCard pairs every extracted field with a confidence score.",
    variant: "feature",
    visual: "extract",
    icon: "file",
    sections: [
      {
        type: "prose",
        heading: "From pixels to fields",
        paragraphs: [
          "A visiting card has no labels. Nothing says “this line is a job title”. The AI model has to infer structure from layout, font size and conventions — that the large text is probably a name, that a string with @ is an email, that +91 starts a phone number.",
          "eCard uses the model you choose for this work: Claude, OpenAI, Gemini, DeepSeek or Grok, with Azure and custom endpoints also named in the FAQ.",
        ],
      },
      {
        type: "table",
        heading: "Sample extraction",
        intro: "Sample, fictional data for illustration only. Scores shown are illustrative, not real output.",
        headers: ["Field", "Sample value", "Sample confidence"],
        rows: [
          ["Name", "Sample: Priya Shah", "High"],
          ["Title", "Realtor", "High"],
          ["Company", "Sample Homes Pvt Ltd", "Medium"],
          ["Phone", "+91 90000 00000", "High"],
          ["Address", "Sample Road, Pune", "Medium — checked against Google Maps"],
        ],
      },
      {
        type: "cards",
        heading: "Safeguards around extraction",
        cards: [
          { title: "Confidence scores", body: "Every field shows how sure the model is.", icon: "eye" },
          { title: "Review gate", body: "Nothing is saved until you review it.", icon: "check" },
          { title: "Address check", body: "Addresses are checked against Google Maps.", icon: "map" },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Field list",
        body: "eCard’s public site does not publish a complete list of extracted fields. The Extracted Field Reference page covers common card fields as general guidance.",
      },
    ],
    faqs: [
      { q: "Can I edit extracted fields?", a: "Yes — you review the result before saving, which is when corrections are made." },
      { q: "Does eCard verify phone numbers?", a: "eCard’s site mentions address checks against Google Maps. It does not state any phone verification." },
    ],
    related: [`${B}/field-reference`, `${B}/confidence-scores`, `${B}/address-verification`, `${B}/accuracy-and-review`],
    source: "mixed",
  },
  {
    slug: `${B}/ai-model-selection`,
    category: "scanning",
    title: "AI Model Selection",
    seoTitle: "Pick Claude, OpenAI, Gemini, DeepSeek or Grok",
    description: "eCard lets you choose the AI model that reads your visiting cards: Claude, OpenAI, Gemini, DeepSeek, Grok, plus Azure or a custom endpoint.",
    h1: "Your cards, read by the model you trust",
    eyebrow: "AI Card Scanning",
    intro: "Instead of a single built-in engine, eCard lets you choose which AI model reads your cards. The homepage counts 7 AI models across the options it lists.",
    variant: "feature",
    visual: "integrations",
    icon: "brain",
    sections: [
      {
        type: "cards",
        heading: "Options named by eCard",
        cards: [
          { title: "Claude", body: "Anthropic’s models.", icon: "sparkles" },
          { title: "OpenAI", body: "OpenAI’s models.", icon: "sparkles" },
          { title: "Gemini", body: "Google’s models.", icon: "sparkles" },
          { title: "DeepSeek", body: "Named in eCard’s FAQ.", icon: "sparkles" },
          { title: "Grok", body: "xAI’s models.", icon: "sparkles" },
          { title: "Azure", body: "Named in eCard’s FAQ.", icon: "server" },
          { title: "Custom endpoint", body: "Named in eCard’s FAQ for other compatible providers.", icon: "link" },
        ],
      },
      {
        type: "split",
        heading: "Why not just one model?",
        body: [
          "Teams already have relationships with AI providers — an existing contract, a preferred region, or a policy about where data can go. Model choice lets eCard fit those constraints.",
          "Pricing and performance also shift over time. Being able to switch keeps you in control.",
        ],
        points: ["Use a provider you already pay for", "Bring your own key", "Pool keys for failover"],
      },
      {
        type: "prose",
        heading: "What eCard does not specify",
        paragraphs: [
          "eCard’s site does not name specific model versions or publish accuracy benchmarks per provider. Which exact versions are offered may change; check the model picker in the app.",
          "The Choosing a Model page offers general criteria for deciding between providers.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Every result is reviewed anyway",
        body: "Whichever model you pick, each field gets a confidence score and nothing is saved until you review it.",
      },
    ],
    faqs: [
      { q: "Can I switch models later?", a: "Model choice is a core eCard feature. The site does not detail switching mechanics; check your scanning settings in the app." },
      { q: "Which model is the most accurate?", a: "eCard does not publish comparisons. Try a few cards with each and compare confidence scores and corrections." },
    ],
    related: [`${B}/choosing-a-model`, `${B}/custom-ai-endpoints`, `${B}/bring-your-own-key`, "integrations/claude", "integrations/openai"],
    source: "verified",
  },
  {
    slug: `${B}/choosing-a-model`,
    category: "scanning",
    title: "Choosing a Model",
    seoTitle: "How to Choose an AI Model for Card Scanning",
    description: "General criteria for picking an AI model to read visiting cards: accuracy on your cards, cost per scan, data policies, and existing provider accounts.",
    h1: "A practical way to choose your scanning model",
    eyebrow: "AI Card Scanning",
    intro: "eCard gives you a choice of AI providers. This guide offers general, vendor-neutral criteria to help you decide — it is advice, not a ranking.",
    variant: "guide",
    visual: "extract",
    icon: "search",
    sections: [
      {
        type: "table",
        heading: "Criteria to weigh",
        headers: ["Criterion", "Question to ask", "How to check"],
        rows: [
          ["Accuracy on your cards", "Does it read the cards you actually collect?", "Scan a sample batch and count corrections"],
          ["Cost", "What does each scan cost on your key?", "Your provider’s pricing page"],
          ["Data policy", "Does the provider meet your organisation’s rules?", "Provider’s data and retention terms"],
          ["Existing account", "Do you already pay for one provider?", "Your billing records"],
          ["Reliability", "How often do you hit rate limits?", "Watch for failovers in a busy week"],
        ],
      },
      {
        type: "steps",
        heading: "Run a simple bake-off",
        steps: [
          { title: "Collect 20 real cards", body: "Include hard ones: glossy, tiny fonts, bilingual, dark backgrounds." },
          { title: "Scan with model A", body: "Note how many fields you correct and which fields show low confidence." },
          { title: "Repeat with model B", body: "Use the same cards and the same lighting." },
          { title: "Compare", body: "Choose the model with fewer corrections at a cost you accept." },
        ],
      },
      {
        type: "prose",
        heading: "Don’t over-optimise",
        paragraphs: [
          "Because eCard asks you to review each scan before saving, small accuracy differences matter less than you might think. A model that saves you one correction per twenty cards is rarely worth a large cost increase.",
          "If your team handles very high volume, a key pool with failover across providers can matter more than picking the single best model.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "No published benchmarks",
        body: "eCard does not publish accuracy comparisons between providers. Results depend on your cards and on model versions at the time.",
      },
    ],
    faqs: [
      { q: "Can I use different models for different team members?", a: "eCard’s site does not document per-user model settings. Check workspace settings in the app." },
      { q: "Is a more expensive model always better?", a: "Not necessarily. Test on your own cards; the review step catches most remaining errors." },
    ],
    related: [`${B}/ai-model-selection`, `${B}/key-pool`, `${B}/accuracy-and-review`, "integrations/gemini"],
    source: "educational",
  },
  {
    slug: `${B}/custom-ai-endpoints`,
    category: "scanning",
    title: "Custom AI Endpoints",
    seoTitle: "Custom AI Endpoints and Azure for Card Scanning",
    description: "eCard’s FAQ lists Azure and custom endpoints alongside named AI providers. What that means, and what to check before connecting your own endpoint.",
    h1: "Point eCard at Azure or your own AI endpoint",
    eyebrow: "AI Card Scanning",
    intro: "Beyond Claude, OpenAI, Gemini, DeepSeek and Grok, eCard’s FAQ names Azure and custom endpoints as options for reading cards.",
    variant: "integration",
    visual: "integrations",
    icon: "server",
    sections: [
      {
        type: "prose",
        heading: "Why organisations want a custom endpoint",
        paragraphs: [
          "Larger organisations often route AI traffic through a cloud account they control — for example an Azure deployment — so that usage, billing and data handling follow their own policies.",
          "A custom endpoint option lets eCard fit into that setup rather than requiring a separate provider relationship.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not documented publicly",
        body: "eCard’s site names custom endpoints but does not document the required request format, authentication or compatible APIs. Confirm details in the app or with eCard before planning a rollout.",
      },
      {
        type: "bullets",
        heading: "Questions to settle internally first",
        items: [
          "Which deployment or region should card images go to?",
          "Who owns the key, and who can rotate it?",
          "What are your provider’s data retention terms?",
          "Do you need a fallback provider in the key pool?",
        ],
      },
      {
        type: "cards",
        heading: "What stays the same",
        cards: [
          { title: "Encryption", body: "Stored API keys are encrypted with AES-256-GCM.", icon: "lock" },
          { title: "Review", body: "Each field still gets a confidence score, and nothing saves without review.", icon: "check" },
          { title: "Audit", body: "Workspaces keep an audit log.", icon: "file" },
        ],
      },
    ],
    faqs: [
      { q: "Is Azure supported?", a: "Azure is named in eCard’s FAQ as an AI provider option." },
      { q: "What API format does a custom endpoint need?", a: "eCard’s site does not document this. Check the in-app settings or contact eCard." },
    ],
    related: [`${B}/ai-model-selection`, `${B}/key-encryption`, "integrations/azure", "features/team-security/audit-logs"],
    source: "mixed",
  },
  {
    slug: `${B}/confidence-scores`,
    category: "scanning",
    title: "Confidence Scores",
    seoTitle: "Per-Field Confidence Scores on Card Scans",
    description: "Every field eCard extracts from a visiting card gets a confidence score. Learn how to read the scores and where to focus your review time.",
    h1: "See how sure the AI is — field by field",
    eyebrow: "AI Card Scanning",
    intro: "eCard attaches a confidence score to each field it extracts. Scores turn review from re-reading the whole card into checking the few values that need attention.",
    variant: "feature",
    visual: "extract",
    icon: "eye",
    sections: [
      {
        type: "split",
        heading: "What a score tells you",
        body: [
          "A confidence score is the model’s signal of how certain it is about a value. A crisp email address printed in a plain font will usually score high. A name in decorative script, or a phone number partly covered by a logo, may score lower.",
          "Low confidence doesn’t mean wrong — it means look here first.",
        ],
        points: ["Score per field, not per card", "Shown before saving", "Paired with a mandatory review"],
      },
      {
        type: "bullets",
        heading: "Fields that often deserve a second look",
        intro: "General patterns, not eCard statistics.",
        items: [
          "Names with uncommon spellings or initials",
          "Phone numbers with extensions or multiple numbers on one line",
          "Company names that are also logos",
          "Long addresses that wrap across lines",
          "Email addresses with similar-looking characters (l, 1, I)",
        ],
      },
      {
        type: "steps",
        heading: "A fast review habit",
        steps: [
          { title: "Scan the low scores", body: "Check every field flagged as less certain." },
          { title: "Glance at the contact essentials", body: "Even high-confidence phone and email are worth a one-second look." },
          { title: "Save", body: "Only then does the contact enter your workspace." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "About the scale",
        body: "eCard’s public site does not publish the exact scoring scale or thresholds. Treat scores as a guide to attention, not a guarantee.",
      },
    ],
    faqs: [
      { q: "Can I skip review for high-confidence scans?", a: "eCard states that nothing is saved until you review it." },
      { q: "Do scores differ between AI models?", a: "Each model produces its own reading, so results can differ. eCard doesn’t publish comparisons." },
    ],
    related: [`${B}/manual-review`, `${B}/accuracy-and-review`, `${B}/scan-quality-tips`, `${B}/contact-extraction`],
    source: "mixed",
  },
  {
    slug: `${B}/manual-review`,
    category: "scanning",
    title: "Manual Review",
    seoTitle: "Review Every Scan Before It Is Saved",
    description: "eCard saves nothing until you review it. Why a human review step keeps your contact data clean, and how to make it take seconds, not minutes.",
    h1: "Nothing is saved until you’ve checked it",
    eyebrow: "AI Card Scanning",
    intro: "eCard puts you between the AI and your contact list. Every scan waits for your review, so mistakes are fixed before they spread to emails, WhatsApp messages and team records.",
    variant: "feature",
    visual: "extract",
    icon: "check",
    sections: [
      {
        type: "prose",
        heading: "Why a human checkpoint",
        paragraphs: [
          "An intro email to the wrong address, or a WhatsApp message to a mistyped number, is worse than no follow-up at all. Because eCard can draft and send intros quickly — the email sends after 5 seconds from your own SMTP — getting the data right first matters.",
          "The review step is where that happens. Confidence scores point you to the fields that need attention.",
        ],
      },
      {
        type: "cards",
        heading: "What to do during review",
        cards: [
          { title: "Fix misreads", body: "Correct letters or digits the model got wrong.", icon: "check" },
          { title: "Add what’s missing", body: "Type in details from the back of the card or handwritten notes.", icon: "file" },
          { title: "Confirm the address", body: "Addresses are checked against Google Maps.", icon: "map" },
          { title: "Add context", body: "Note where you met — eCard’s meeting memory keeps it.", icon: "calendar" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Review right after the conversation",
        body: "Details are freshest in the minutes after you meet someone. Reviewing immediately is also when you’ll remember what to put in the follow-up.",
      },
      {
        type: "bullets",
        heading: "Signs of a good review habit",
        items: [
          "Fewer duplicates to merge later",
          "Intro emails rarely bounce",
          "Natural-language search finds people the first time",
          "Teammates trust shared contacts",
        ],
      },
    ],
    faqs: [
      { q: "What happens if I close the scan without saving?", a: "eCard states nothing is saved until you review it. The site does not describe draft behaviour; check the app." },
      { q: "Does review apply to Telegram scans?", a: "eCard says a Telegram photo saves the contact and shows Open and Send buttons. Use Open to check and correct the record." },
    ],
    related: [`${B}/confidence-scores`, `${B}/accuracy-and-review`, "features/contact-management/editing-contacts", "features/telegram-bot/open-and-send-buttons"],
    source: "mixed",
  },
  {
    slug: `${B}/address-verification`,
    category: "scanning",
    title: "Google Maps Address Verification",
    seoTitle: "Google Maps Address Checks on Scanned Cards",
    description: "eCard checks addresses read from visiting cards against Google Maps. Why address quality matters and how to handle partial or outdated addresses.",
    h1: "Addresses checked against Google Maps",
    eyebrow: "AI Card Scanning",
    intro: "When a card includes an address, eCard checks it against Google Maps. That helps catch misreads and incomplete addresses before they reach your contact list.",
    variant: "integration",
    visual: "extract",
    icon: "map",
    sections: [
      {
        type: "split",
        heading: "Why addresses are tricky",
        body: [
          "Addresses on visiting cards are often the longest and messiest text: building names, landmarks, floor numbers, PIN codes and abbreviations all squeezed onto a few lines.",
          "Checking against Google Maps gives a second signal beyond the AI model’s own reading.",
        ],
        points: ["Catches misread PIN codes or street names", "Flags addresses that don’t resolve", "Helps with site visits and meeting locations"],
      },
      {
        type: "callout",
        tone: "note",
        title: "What isn’t documented",
        body: "eCard’s site says addresses are checked against Google Maps. It does not describe how mismatches are displayed or whether addresses are auto-corrected. Review the address field before saving.",
      },
      {
        type: "bullets",
        heading: "When an address won’t verify",
        intro: "General guidance:",
        items: [
          "Check the photo — a fold or glare may have hidden part of the text",
          "Industrial estates and new developments may be mapped under a different name",
          "Some cards show a head office, not where the person actually works — ask",
          "Leave a note rather than guessing",
        ],
      },
      {
        type: "prose",
        heading: "Where good addresses pay off",
        paragraphs: [
          "Accurate addresses make natural-language search more useful — for example, finding everyone you met in a particular city. They also support site visits and meeting memory, which records where you met.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need my own Google Maps key?", a: "eCard’s site does not say. It only states that addresses are checked against Google Maps." },
      { q: "Will eCard change the address automatically?", a: "This is not documented. Always confirm the address during review." },
    ],
    related: ["integrations/google-maps", `${B}/manual-review`, "features/meeting-memory/meeting-locations", "features/contact-management/natural-language-search"],
    source: "mixed",
  },
  {
    slug: `${B}/key-pool`,
    category: "scanning",
    title: "AI Key Pool",
    seoTitle: "AI Key Pool with Failover for Card Scanning",
    description: "Add several AI keys to an eCard key pool so card scanning keeps working when one key fails. How pools help busy teams and trade-show days.",
    h1: "More than one key, so scanning keeps going",
    eyebrow: "AI Card Scanning",
    intro: "eCard supports a key pool with failover. Instead of relying on a single AI key, you can add several, and scanning can move to another key when one has a problem.",
    variant: "feature",
    visual: "security",
    icon: "layers",
    sections: [
      {
        type: "prose",
        heading: "The problem a pool solves",
        paragraphs: [
          "A single API key is a single point of failure. Keys can hit provider rate limits, run out of credit or be revoked. On a quiet day that is an inconvenience; at an expo with a queue at your booth, it stops the team.",
          "A pool gives eCard alternatives to try.",
        ],
      },
      {
        type: "cards",
        heading: "Ways teams use a pool",
        intro: "General patterns; set them up to suit your own accounts.",
        cards: [
          { title: "Same provider, several keys", body: "Spread load across keys in one provider account.", icon: "key" },
          { title: "Mixed providers", body: "Keep a second provider ready in case the first is unavailable.", icon: "layers" },
          { title: "Event surge", body: "Add a key ahead of a big show, remove it after.", icon: "calendar" },
        ],
      },
      {
        type: "steps",
        heading: "Setting up a sensible pool",
        steps: [
          { title: "Start with your main key", body: "Bring your own key from the provider you use most." },
          { title: "Add a backup", body: "Add a second key, ideally with separate limits." },
          { title: "Watch for failovers", body: "If failovers happen often, review limits with your provider." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Security",
        body: "eCard encrypts stored API keys with AES-256-GCM. The site does not document the order in which pooled keys are tried.",
      },
    ],
    faqs: [
      { q: "How many keys can a pool hold?", a: "eCard’s site does not state a limit." },
      { q: "Can a pool mix providers?", a: "The site describes a key pool with failover but does not detail mixing rules. Check the in-app settings." },
    ],
    related: [`${B}/key-rotation-failover`, `${B}/handling-rate-limits`, `${B}/bring-your-own-key`, `${B}/key-encryption`],
    source: "mixed",
  },
  {
    slug: `${B}/key-rotation-failover`,
    category: "scanning",
    title: "Key Rotation & Failover",
    seoTitle: "Rotating AI Keys and Failover in eCard",
    description: "Rotate AI provider keys safely without interrupting card scanning. General key-rotation practice plus how eCard’s key pool failover helps.",
    h1: "Rotate keys without stopping the scanner",
    eyebrow: "AI Card Scanning",
    intro: "Rotating API keys regularly is good security hygiene. With eCard’s key pool and failover, you can replace a key while another one keeps scanning running.",
    variant: "guide",
    visual: "security",
    icon: "key",
    sections: [
      {
        type: "prose",
        heading: "Why rotate at all",
        paragraphs: [
          "Keys leak: they get pasted into chat, saved in old scripts or left with people who changed roles. Rotation limits how long a leaked key stays useful. Many security teams rotate on a schedule and immediately after anyone with access leaves.",
        ],
      },
      {
        type: "steps",
        heading: "A no-downtime rotation",
        intro: "General practice adapted to a pool with failover.",
        steps: [
          { title: "Create a new key at your provider", body: "Don’t revoke the old one yet." },
          { title: "Add it to the eCard key pool", body: "Now two keys are available." },
          { title: "Remove the old key from eCard", body: "Scanning continues on the new key." },
          { title: "Revoke the old key at the provider", body: "Close the loop so the old key is useless." },
          { title: "Check the audit log", body: "eCard workspaces keep an audit log you can review." },
        ],
      },
      {
        type: "table",
        heading: "Failover vs rotation",
        headers: ["", "Failover", "Rotation"],
        rows: [
          ["Trigger", "A key stops working", "Your schedule or a security event"],
          ["Who acts", "eCard tries another pooled key", "An admin replaces the key"],
          ["Goal", "Keep scanning running", "Limit exposure of old keys"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Limit who handles keys",
        body: "eCard has owner, admin, manager, member and scan-only guest roles. Keep key management with the smallest group practical.",
      },
    ],
    faqs: [
      { q: "Does eCard rotate keys automatically?", a: "No such feature is stated. eCard describes a key pool with failover; rotation is something you do." },
      { q: "Which roles can manage keys?", a: "eCard’s site lists roles but not their exact permissions. Check Roles & Permissions in the app." },
    ],
    related: [`${B}/key-pool`, `${B}/key-encryption`, "features/team-security/audit-logs", "features/team-security/roles-and-permissions"],
    source: "mixed",
  },
  {
    slug: `${B}/handling-rate-limits`,
    category: "scanning",
    title: "Handling Rate Limits",
    seoTitle: "Handling AI Rate Limits During Busy Scanning",
    description: "AI providers cap how many requests a key can make. How rate limits affect card scanning at events and how a key pool with failover helps.",
    h1: "Keep scanning when your AI provider says slow down",
    eyebrow: "AI Card Scanning",
    intro: "Every AI provider limits how many requests a key can make in a period. During a busy event, a team scanning together can reach that limit. Here is how to plan for it.",
    variant: "guide",
    visual: "scan",
    icon: "clock",
    sections: [
      {
        type: "prose",
        heading: "What a rate limit is",
        paragraphs: [
          "Rate limits are set by your AI provider, not by eCard. They usually cap requests per minute or tokens per minute, and new or low-tier accounts often have lower limits.",
          "These are separate from eCard’s monthly scan allowance per plan (50 on Free, 1,000 on Starter, 5,000 on Professional, unlimited on Business and Enterprise).",
        ],
      },
      {
        type: "bullets",
        heading: "Signs you’re hitting limits",
        items: [
          "Scans that are fine individually slow down when many people scan at once",
          "Errors cluster at the busiest hour of an event",
          "Your provider dashboard shows throttled requests",
        ],
      },
      {
        type: "cards",
        heading: "Ways to stay ahead",
        cards: [
          { title: "Use a key pool", body: "eCard supports a pool with failover across keys.", icon: "layers" },
          { title: "Raise your tier", body: "Ask your provider about higher limits before a big show.", icon: "zap" },
          { title: "Spread the work", body: "Batch-scan quieter moments rather than all at closing time.", icon: "clock" },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Provider-specific",
        body: "Limits differ by provider and account and change over time. eCard’s site does not publish them; check your provider’s documentation.",
      },
    ],
    faqs: [
      { q: "Is a rate limit the same as my plan’s scan limit?", a: "No. Plan scan limits come from eCard; rate limits come from your AI provider." },
      { q: "Will failover always avoid a rate limit?", a: "Only if another pooled key has capacity. Plan keys with separate limits." },
    ],
    related: [`${B}/key-pool`, `${B}/scanning-at-volume`, `${B}/scan-limits-by-plan`, "features/events-expos/at-the-booth"],
    source: "mixed",
  },
  {
    slug: `${B}/bring-your-own-key`,
    category: "scanning",
    title: "Bring Your Own Key",
    seoTitle: "Bring Your Own AI Key to eCard",
    description: "Use your own Claude, OpenAI, Gemini, DeepSeek or Grok key to scan cards in eCard. Keys are encrypted with AES-256-GCM and can be pooled.",
    h1: "Use the AI account you already have",
    eyebrow: "AI Card Scanning",
    intro: "eCard lets you bring your own key for the AI model that reads your cards. Your usage and provider terms stay under your own account.",
    variant: "feature",
    visual: "security",
    icon: "key",
    sections: [
      {
        type: "split",
        heading: "What bringing your own key gives you",
        body: [
          "With your own key, the relationship with the AI provider is yours: you see the usage, you choose the tier and you can revoke access at any time.",
          "It also lets eCard work with providers your organisation has already approved.",
        ],
        points: ["Your provider, your billing", "Revoke any time at the provider", "Pool several keys for failover"],
      },
      {
        type: "steps",
        heading: "Getting started",
        steps: [
          { title: "Pick a provider", body: "Claude, OpenAI, Gemini, DeepSeek or Grok, or Azure or a custom endpoint per the FAQ." },
          { title: "Create a key at the provider", body: "Give it a clear name, such as “eCard scanning”." },
          { title: "Add it in eCard", body: "Enter the key in your workspace’s AI settings." },
          { title: "Scan a test card", body: "Confirm the result and confidence scores look right." },
        ],
      },
      {
        type: "cards",
        heading: "How the key is protected",
        cards: [
          { title: "AES-256-GCM", body: "eCard encrypts API keys and SMTP passwords at rest.", icon: "lock" },
          { title: "2FA", body: "Authenticator-code 2FA protects accounts.", icon: "shield" },
          { title: "Audit log", body: "Workspaces keep an audit log.", icon: "file" },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Provider charges",
        body: "Using your own key means your AI provider may bill you for usage under its own pricing. eCard plan prices are separate.",
      },
    ],
    faqs: [
      { q: "Is a key required to scan?", a: "eCard’s site says you can bring your own key; it does not state that one is mandatory. Check sign-up and settings for current defaults." },
      { q: "Where do I enter my key?", a: "eCard’s site does not publish the exact menu path. Look in the workspace AI or scanning settings." },
    ],
    related: [`${B}/key-encryption`, `${B}/key-pool`, `${B}/ai-model-selection`, "integrations/openai"],
    source: "mixed",
  },
  {
    slug: `${B}/key-encryption`,
    category: "scanning",
    title: "Key Encryption",
    seoTitle: "AES-256-GCM Encryption for Your AI Keys",
    description: "eCard encrypts AI API keys and SMTP passwords with AES-256-GCM. What that means in plain terms, plus habits that keep your keys safe.",
    h1: "Your AI keys, encrypted with AES-256-GCM",
    eyebrow: "AI Card Scanning",
    intro: "eCard stores API keys and SMTP passwords encrypted with AES-256-GCM — the “256-bit key encryption” mentioned on the homepage.",
    variant: "feature",
    visual: "security",
    icon: "lock",
    sections: [
      {
        type: "prose",
        heading: "AES-256-GCM in plain terms",
        paragraphs: [
          "AES is a widely used encryption standard. The 256 refers to the length of the encryption key in bits. GCM is a mode that both encrypts data and detects tampering — if the stored value is altered, decryption fails rather than producing garbage.",
          "In practice, it means the secrets you give eCard are not stored as readable text.",
        ],
      },
      {
        type: "table",
        heading: "What eCard says it encrypts",
        headers: ["Secret", "Protection"],
        rows: [
          ["AI provider API keys", "AES-256-GCM"],
          ["SMTP passwords", "AES-256-GCM"],
        ],
      },
      {
        type: "bullets",
        heading: "Your side of the bargain",
        intro: "Encryption at rest is one layer. General habits that help:",
        items: [
          "Turn on 2FA with an authenticator app",
          "Store recovery codes somewhere safe",
          "Review login alerts and trusted devices",
          "Rotate keys when someone with access leaves",
          "Use app passwords for SMTP where your provider offers them",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Scope",
        body: "eCard’s site does not describe key management, hosting or certification details. Don’t assume anything beyond AES-256-GCM encryption of keys and SMTP passwords.",
      },
    ],
    faqs: [
      { q: "Can eCard staff read my key?", a: "eCard’s site does not address staff access. It states keys are encrypted with AES-256-GCM." },
      { q: "Is my SMTP password encrypted too?", a: "Yes. eCard states SMTP passwords are also encrypted with AES-256-GCM." },
    ],
    related: ["features/team-security/secret-encryption", `${B}/bring-your-own-key`, "features/team-security/two-factor-authentication", "features/team-security/security-best-practices"],
    source: "mixed",
  },
  {
    slug: `${B}/scan-limits-by-plan`,
    category: "scanning",
    title: "Scan Limits by Plan",
    seoTitle: "eCard Monthly Scan Limits by Plan",
    description: "How many cards you can scan each month on eCard: 50 on Free, 1,000 on Starter, 5,000 on Professional and unlimited on Business and Enterprise.",
    h1: "How many cards each plan can scan",
    eyebrow: "AI Card Scanning",
    intro: "AI scanning is part of every eCard plan. What changes between plans is how many scans you get each month, along with users and storage.",
    variant: "reference",
    visual: "pricing",
    icon: "rupee",
    sections: [
      {
        type: "table",
        heading: "Plans at a glance",
        intro: "Monthly prices in INR. GST applies where applicable.",
        headers: ["Plan", "Price / month", "Scans / month", "Users", "Storage"],
        rows: [
          ["Free", "₹0", "50", "5", "1 GB"],
          ["Starter", "₹299", "1,000", "20", "25 GB"],
          ["Professional", "₹999", "5,000", "100", "250 GB"],
          ["Business", "₹2,999", "Unlimited", "Unlimited", "Unlimited"],
          ["Enterprise", "Custom", "Unlimited", "Unlimited", "Unlimited"],
        ],
      },
      {
        type: "prose",
        heading: "Estimating what you need",
        paragraphs: [
          "Count roughly how many cards you and your team collect in a typical month, then add your biggest event. Someone attending one networking meetup a week may stay within 50 scans; a team working several expos a quarter will likely need Starter or Professional.",
          "Remember this is eCard’s allowance. If you bring your own AI key, your provider may also bill for usage.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Try Professional free",
        body: "New workspaces get a 14-day Professional trial with no card needed, which includes 5,000 scans a month.",
      },
      {
        type: "bullets",
        heading: "Also included on every plan",
        items: [
          "Contacts, tags and events",
          "Bulk import and export",
          "Email outreach from your own mailbox",
          "WhatsApp messages",
          "Digital business card",
          "Telegram scanning bot",
        ],
      },
    ],
    faqs: [
      { q: "What happens when I reach my limit?", a: "eCard’s site doesn’t describe this. Check your workspace billing screen or upgrade your plan." },
      { q: "Do Telegram scans count?", a: "eCard’s site does not say separately. Assume a scan is a scan, and check usage in the app." },
      { q: "Is there yearly pricing?", a: "Yearly billing is said to save about two months; exact yearly totals are shown at checkout." },
    ],
    related: ["pricing", "pricing/compare-plans", "pricing/free-trial", `${B}/scanning-at-volume`],
    source: "verified",
  },
  {
    slug: `${B}/scan-quality-tips`,
    category: "scanning",
    title: "Scan Quality Tips",
    seoTitle: "Tips for Better Visiting Card Scans",
    description: "Simple habits that improve AI reading of visiting cards: lighting, framing, glare, focus and handling glossy, dark or embossed cards.",
    h1: "Small habits, cleaner scans",
    eyebrow: "AI Card Scanning",
    intro: "The AI does the reading, but the photo is up to you. These general tips reduce corrections and keep confidence scores high.",
    variant: "guide",
    visual: "scan",
    icon: "sparkles",
    sections: [
      {
        type: "cards",
        heading: "The five big ones",
        cards: [
          { title: "Light evenly", body: "Diffuse daylight beats a single overhead lamp.", icon: "sparkles" },
          { title: "Kill the glare", body: "Tilt the card slightly to move reflections off text.", icon: "eye" },
          { title: "Fill the frame", body: "Get close so the card takes up most of the photo.", icon: "scan" },
          { title: "Hold steady", body: "Rest your elbows; blur is the commonest problem.", icon: "smartphone" },
          { title: "Contrast background", body: "A dark table for a white card, and vice versa.", icon: "layers" },
        ],
      },
      {
        type: "table",
        heading: "Tricky cards and fixes",
        headers: ["Card type", "Problem", "Try"],
        rows: [
          ["Glossy or laminated", "Reflections", "Angle the card, avoid direct light"],
          ["Dark background", "Low contrast", "Brighter, even light"],
          ["Embossed or foil", "Shadows and shine", "Side light, no flash"],
          ["Tiny fonts", "Unreadable digits", "Move closer, tap to focus"],
          ["Curved or bent", "Distorted lines", "Flatten under a finger at the edge"],
        ],
      },
      {
        type: "prose",
        heading: "Let the scores guide you",
        paragraphs: [
          "If the same field keeps getting low confidence across many cards, the issue is often your setup rather than the AI. Change one thing — lighting, distance or background — and compare.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Busy event?",
        body: "Snap the photo in Telegram right after the conversation and review later. eCard’s Telegram bot saves the contact and shows Open and Send buttons.",
      },
    ],
    faqs: [
      { q: "Does flash help?", a: "Often not on glossy cards — it creates glare. Try even ambient light first." },
      { q: "Should I crop the photo?", a: "Filling the frame when you shoot is usually enough." },
    ],
    related: [`${B}/photo-best-practices`, `${B}/confidence-scores`, `${B}/unusual-card-layouts`, "mobile/scan-from-your-phone"],
    source: "educational",
  },
  {
    slug: `${B}/photo-best-practices`,
    category: "scanning",
    title: "Photo Best Practices",
    seoTitle: "Photographing Visiting Cards on Your Phone",
    description: "Phone camera settings and shooting technique for visiting cards: focus, distance, orientation and what to avoid when scanning in a browser.",
    h1: "Get the photo right with the phone you already carry",
    eyebrow: "AI Card Scanning",
    intro: "eCard works in any phone browser and through Telegram, so your phone camera is the scanner. A few camera habits make a real difference.",
    variant: "guide",
    visual: "scan",
    icon: "smartphone",
    sections: [
      {
        type: "steps",
        heading: "A ten-second routine",
        steps: [
          { title: "Clean the lens", body: "Phones live in pockets; a smudge softens every photo." },
          { title: "Place the card flat", body: "A table, a notebook, even your palm in a pinch." },
          { title: "Shoot from directly above", body: "Angled shots stretch text and confuse layouts." },
          { title: "Tap to focus on the name", body: "Wait for focus to lock before shooting." },
          { title: "Check before sending", body: "Zoom in — if you can read the phone number, so can the model." },
        ],
      },
      {
        type: "bullets",
        heading: "Things to avoid",
        items: [
          "Digital zoom from far away — move closer instead",
          "Your own shadow across the card",
          "Fingers over the corners where emails often sit",
          "Beauty or portrait modes that smooth detail",
          "Heavily compressed screenshots of photos",
        ],
      },
      {
        type: "split",
        heading: "Orientation",
        body: [
          "Vertical cards are increasingly common. Shoot them upright so the text reads naturally in the photo rather than sideways.",
        ],
        points: ["Match phone orientation to the card", "Keep all four edges visible", "Leave a small margin around the card"],
      },
      {
        type: "callout",
        tone: "info",
        title: "No app required",
        body: "eCard runs in the phone browser, and you can also send photos to the eCard Telegram bot.",
      },
    ],
    faqs: [
      { q: "Do I need a high-end phone?", a: "Generally no. A steady, well-lit shot from any modern phone is usually enough." },
      { q: "Can I upload an existing photo?", a: "Sending a photo to the eCard Telegram bot saves the contact. For browser uploads, check the scan screen in the app." },
    ],
    related: [`${B}/scan-quality-tips`, "mobile/scan-from-your-phone", "features/telegram-bot/snap-a-card", `${B}/front-and-back`],
    source: "educational",
  },
  {
    slug: `${B}/field-reference`,
    category: "scanning",
    title: "Extracted Field Reference",
    seoTitle: "Common Visiting Card Fields Reference",
    description: "A reference to the fields commonly printed on visiting cards — name, title, company, phone, email, address — and what to check for each.",
    h1: "The fields a visiting card usually carries",
    eyebrow: "AI Card Scanning",
    intro: "This reference lists fields commonly found on visiting cards and what to check during review. It is general guidance; eCard’s site does not publish a definitive field list.",
    variant: "reference",
    visual: "extract",
    icon: "book",
    sections: [
      {
        type: "callout",
        tone: "note",
        title: "Guidance, not a spec",
        body: "Use this as a checklist for review. The exact fields shown in eCard may differ; check the scan review screen in the app.",
      },
      {
        type: "table",
        heading: "Common fields and review checks",
        headers: ["Field", "Typical look", "Check for"],
        rows: [
          ["Name", "Largest text", "Spelling, initials, honorifics"],
          ["Job title", "Below the name", "Abbreviations like VP, GM"],
          ["Company", "Logo or bold line", "Legal suffix, brand vs legal name"],
          ["Mobile", "+91 and 10 digits", "Swapped or missing digits"],
          ["Landline", "STD code + number", "Extensions"],
          ["Email", "Contains @", "l/1/I and O/0 confusion"],
          ["Website", "www or domain", "Matches the email domain"],
          ["Address", "Multiple lines", "PIN code; Google Maps check"],
        ],
      },
      {
        type: "bullets",
        heading: "Details cards often hide",
        items: [
          "A second mobile number marked WhatsApp",
          "GSTIN or registration numbers on business cards in India",
          "Social handles printed as icons",
          "QR codes linking to a digital card",
        ],
      },
      {
        type: "prose",
        heading: "Why tidy fields matter later",
        paragraphs: [
          "Clean fields feed everything downstream: natural-language search such as “Investors I met in Mumbai last month”, duplicate merge, CSV export and Google Contacts sync on Starter and above.",
        ],
      },
    ],
    faqs: [
      { q: "Does eCard extract social media handles?", a: "eCard’s site doesn’t specify. Add them manually during review if needed." },
      { q: "Can I add custom fields?", a: "This isn’t documented on eCard’s site. Check the contact editor in the app." },
    ],
    related: [`${B}/contact-extraction`, "features/contact-management/contact-records", `${B}/manual-review`, "features/contact-management/data-hygiene"],
    source: "educational",
  },
  {
    slug: `${B}/accuracy-and-review`,
    category: "scanning",
    title: "Accuracy & Review",
    seoTitle: "AI Scan Accuracy and Why Review Matters",
    description: "No AI reads every card perfectly. How eCard combines confidence scores, Google Maps address checks and human review to keep contact data accurate.",
    h1: "Accuracy is a process, not a promise",
    eyebrow: "AI Card Scanning",
    intro: "eCard doesn’t claim perfect reading. Instead it gives you three layers: per-field confidence scores, a Google Maps address check and a review step before anything is saved.",
    variant: "feature",
    visual: "extract",
    icon: "shield",
    sections: [
      {
        type: "cards",
        heading: "Three layers of accuracy",
        cards: [
          { title: "Confidence scores", body: "Each field shows how certain the model is.", icon: "eye" },
          { title: "Address check", body: "Addresses are checked against Google Maps.", icon: "map" },
          { title: "Human review", body: "Nothing saves until you review it.", icon: "check" },
        ],
      },
      {
        type: "prose",
        heading: "Where errors come from",
        paragraphs: [
          "Most misreads trace back to the photo (blur, glare, a cropped edge) or to the card design (script fonts, low contrast, crowded layouts). A smaller share come from genuine ambiguity — is “Raj K.” a first name and initial, or a nickname?",
          "Better photos fix the first group; review fixes the rest.",
        ],
      },
      {
        type: "steps",
        heading: "Measure your own accuracy",
        intro: "eCard publishes no accuracy figures, so measure on your cards:",
        steps: [
          { title: "Track corrections", body: "For a week, note how many fields you change per card." },
          { title: "Find patterns", body: "Is it always phone numbers? Always one card style?" },
          { title: "Adjust", body: "Improve photos, try another model, or add a key to your pool." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "No accuracy claims",
        body: "eCard’s site does not state an accuracy percentage. Be wary of any figure not tested on your own cards.",
      },
    ],
    faqs: [
      { q: "How accurate is eCard?", a: "eCard does not publish a figure. Accuracy depends on the model, the card and the photo — and you review every scan." },
      { q: "Does a different model help?", a: "It can. eCard lets you choose Claude, OpenAI, Gemini, DeepSeek or Grok." },
    ],
    related: [`${B}/confidence-scores`, `${B}/manual-review`, `${B}/choosing-a-model`, `${B}/scan-quality-tips`],
    source: "mixed",
  },
  {
    slug: `${B}/scan-to-follow-up`,
    category: "scanning",
    title: "From Scan to Follow-Up",
    seoTitle: "From Card Scan to Follow-Up in Minutes",
    description: "Scan a visiting card, review it, then send an AI intro email from your own SMTP or a WhatsApp message in English, Hindi or Marathi with eCard.",
    h1: "The scan is the start — the follow-up is the point",
    eyebrow: "AI Card Scanning",
    intro: "A card in a drawer does nothing. eCard connects the scan directly to follow-up: an intro email from your own mailbox or a WhatsApp message in one tap.",
    variant: "solution",
    visual: "email",
    icon: "send",
    sections: [
      {
        type: "steps",
        heading: "The full path",
        steps: [
          { title: "Scan", body: "In your phone browser or via the Telegram bot." },
          { title: "Review", body: "Confirm fields using the confidence scores." },
          { title: "Remember", body: "Add where you met, who introduced you or a voice note." },
          { title: "Email", body: "Preview the AI draft; it sends after 5 seconds from your own SMTP, and you can edit or cancel." },
          { title: "WhatsApp", body: "Open an AI-written message in English, Hindi or Marathi in one tap." },
        ],
      },
      {
        type: "split",
        heading: "Why speed matters",
        body: [
          "As general networking guidance, follow-ups sent the same day are easier to connect to the conversation. By next week, you are one of dozens of people they met.",
        ],
        points: ["Same-day intros while you’re remembered", "Context from meeting memory", "Track opens of your card and PDFs"],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Sample intro",
        body: "Sample: “Hi Priya, great to meet you at the sample Pune property expo today. As promised, here is my card and the brochure we discussed.”",
      },
      {
        type: "prose",
        heading: "Telegram shortcut",
        paragraphs: [
          "Send a card photo to the eCard Telegram bot and the contact is saved with Open and Send buttons in the chat — useful when you are standing at a booth and don’t want to switch screens.",
        ],
      },
    ],
    faqs: [
      { q: "Whose email address do intros come from?", a: "Your own, via your SMTP settings — for example Gmail, Outlook, Zoho or another SMTP host." },
      { q: "Can I stop an email after sending?", a: "eCard sends after 5 seconds and you can cancel within that window or edit beforehand." },
    ],
    related: ["features/automated-email-outreach", "features/whatsapp-follow-ups", "features/outreach/five-second-send", "features/telegram-bot/open-and-send-buttons", "features/meeting-memory"],
    source: "verified",
  },
  {
    slug: `${B}/sample-scan-demo`,
    category: "scanning",
    title: "Sample Scan Demo",
    seoTitle: "Sample Scan Demo: Realtor, Doctor, Founder",
    description: "eCard’s homepage demo shows scans for three sample personas: a Realtor, a Doctor and a Startup founder. See what the demo illustrates.",
    h1: "Three sample cards, three sample scans",
    eyebrow: "AI Card Scanning",
    intro: "eCard’s homepage includes a sample scan demo with three personas — a Realtor, a Doctor and a Startup founder. All demo data is fictional.",
    variant: "feature",
    visual: "scan",
    icon: "eye",
    sections: [
      {
        type: "cards",
        heading: "The three personas",
        intro: "Names below are sample data for illustration.",
        cards: [
          { title: "Realtor", body: "Sample: Priya Shah, Realtor — a card with property firm branding and a mobile number.", icon: "building" },
          { title: "Doctor", body: "Sample: Dr. Arjun Mehta — a clinic card with qualifications and clinic address.", icon: "briefcase" },
          { title: "Startup founder", body: "Sample: Neha Rao, Founder — a minimal card with email and website.", icon: "sparkles" },
        ],
      },
      {
        type: "prose",
        heading: "What the demo is for",
        paragraphs: [
          "The demo gives a feel for the flow — a card goes in and structured fields come out — before you sign up. It is illustrative, not a benchmark.",
          "Your real scans use the AI model you pick and show confidence scores for each field.",
        ],
      },
      {
        type: "bullets",
        heading: "Things to notice in any scan",
        items: [
          "How titles and qualifications are separated from names",
          "Whether the company and website match",
          "How addresses are laid out — and checked against Google Maps",
          "Which fields would deserve a second look",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Try your own cards",
        body: "The Free plan includes 50 scans a month with no card required — the best demo is your own card stack.",
      },
    ],
    faqs: [
      { q: "Are the demo people real?", a: "No. The personas are samples for illustration." },
      { q: "Is the demo result what I’ll see?", a: "Your results depend on your chosen model and photo. You review every scan before saving." },
    ],
    related: ["product/sample-personas", B, "use-cases/real-estate", "use-cases/doctors"],
    source: "verified",
  },
  {
    slug: `${B}/scanning-at-volume`,
    category: "scanning",
    title: "Scanning at Volume",
    seoTitle: "Scanning Hundreds of Cards After an Expo",
    description: "Practical tips for scanning large stacks of visiting cards after trade shows: batching, key pools, plan limits and grouping contacts by event.",
    h1: "When the stack is hundreds of cards deep",
    eyebrow: "AI Card Scanning",
    intro: "After a big expo the problem isn’t reading one card, it’s getting through all of them while the leads are still warm. Here is a workflow for volume.",
    variant: "solution",
    visual: "dashboard",
    icon: "archive",
    sections: [
      {
        type: "steps",
        heading: "A volume workflow",
        steps: [
          { title: "Create the event first", body: "eCard lets you group cards from a trade show, so every scan lands in the right group." },
          { title: "Sort the stack", body: "Hot leads on top. Scan and follow up with those first." },
          { title: "Batch in sessions", body: "Twenty-minute bursts keep review quality high." },
          { title: "Review low scores only closely", body: "Use confidence scores to move faster on clean fields." },
          { title: "Follow up with the room", body: "Follow up with everyone from the event at once." },
        ],
      },
      {
        type: "table",
        heading: "Plan fit for volume",
        headers: ["Plan", "Scans / month", "Price / month"],
        rows: [
          ["Starter", "1,000", "₹299"],
          ["Professional", "5,000", "₹999"],
          ["Business", "Unlimited", "₹2,999"],
        ],
      },
      {
        type: "cards",
        heading: "Keep the engine running",
        cards: [
          { title: "Key pool", body: "Add keys with failover so one key’s limits don’t stall you.", icon: "layers" },
          { title: "Split the work", body: "Teammates — even scan-only guests — can scan in parallel.", icon: "users" },
          { title: "Merge duplicates", body: "People hand out cards twice; duplicate merge cleans up.", icon: "merge" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Bulk import",
        body: "If cards were already captured elsewhere as a spreadsheet, eCard’s CSV import may be faster than re-scanning.",
      },
    ],
    faqs: [
      { q: "Can several people scan at once?", a: "Yes, workspaces have multiple users and a scan-only guest role. Plans differ in users: 5, 20, 100 or unlimited." },
      { q: "Is there batch upload of many photos?", a: "eCard’s site does not describe batch photo upload. Check the app." },
    ],
    related: ["features/events-expos/after-the-show", `${B}/handling-rate-limits`, `${B}/scanning-for-teams`, "features/contact-management/duplicate-merge"],
    source: "mixed",
  },
  {
    slug: `${B}/scanning-for-teams`,
    category: "scanning",
    title: "Scanning for Teams",
    seoTitle: "Team Card Scanning with Roles and Guests",
    description: "Let your whole team scan visiting cards into one eCard workspace, with roles from owner to scan-only guest, shared keys and an audit log.",
    h1: "One workspace, everyone scanning",
    eyebrow: "AI Card Scanning",
    intro: "When a team collects cards, they belong in one place. eCard workspaces support roles — owner, admin, manager, member and scan-only guest — so the right people can scan.",
    variant: "solution",
    visual: "team",
    icon: "users",
    sections: [
      {
        type: "table",
        heading: "Roles named by eCard",
        intro: "eCard lists these roles; exact permissions are not published on the site.",
        headers: ["Role", "Typical use (general guidance)"],
        rows: [
          ["Owner", "Workspace owner, billing"],
          ["Admin", "Settings, keys, users"],
          ["Manager", "Oversees a group of members"],
          ["Member", "Scans and follows up"],
          ["Scan-only guest", "Temporary staff or booth helpers who only scan"],
        ],
      },
      {
        type: "split",
        heading: "The scan-only guest",
        body: [
          "Expos often bring in temporary staff or partners. A scan-only guest role lets them capture cards into your workspace without broader access.",
        ],
        points: ["Ideal for booth helpers", "Keeps contacts in your workspace", "Remove when the event ends"],
      },
      {
        type: "cards",
        heading: "Team safeguards",
        cards: [
          { title: "2FA", body: "Authenticator codes, recovery codes and trusted devices.", icon: "shield" },
          { title: "Login alerts", body: "Know when accounts sign in.", icon: "bell" },
          { title: "Audit log", body: "Workspaces keep an audit log.", icon: "file" },
          { title: "Encrypted keys", body: "Shared AI keys encrypted with AES-256-GCM.", icon: "lock" },
        ],
      },
      {
        type: "prose",
        heading: "User counts by plan",
        paragraphs: [
          "Free allows 5 users, Starter 20, Professional 100, and Business and Enterprise are unlimited. Pick a plan based on how many people, including guests, will scan.",
        ],
      },
    ],
    faqs: [
      { q: "Do guests count as users?", a: "eCard’s site does not say. Check your workspace user count in the app." },
      { q: "Can each person use Telegram?", a: "eCard describes linking the bot with a one-time code from Settings → Telegram; the site doesn’t detail per-user linking." },
    ],
    related: ["features/team-security/scan-only-guests", "features/team-security/roles-and-permissions", "features/events-expos/team-at-expos", "features/telegram-bot/team-telegram"],
    source: "mixed",
  },
  {
    slug: `${B}/unusual-card-layouts`,
    category: "scanning",
    title: "Unusual Card Layouts",
    seoTitle: "Scanning Vertical, Bilingual and Unusual Cards",
    description: "Vertical cards, bilingual print, folded cards and logo-heavy designs can trip up AI reading. General guidance for handling unusual layouts.",
    h1: "When the card doesn’t look like a card",
    eyebrow: "AI Card Scanning",
    intro: "Designers love breaking conventions. Vertical layouts, two languages, transparent plastic or a name hidden in a logo all make reading harder. Here’s how to cope.",
    variant: "guide",
    visual: "scan",
    icon: "palette",
    sections: [
      {
        type: "table",
        heading: "Layouts and what to watch",
        headers: ["Layout", "Common issue", "Review focus"],
        rows: [
          ["Vertical", "Fields read out of order", "Title vs company"],
          ["Bilingual", "Duplicate or mixed-script fields", "Name spelling"],
          ["Folded", "Details inside the fold", "Missing phone or address"],
          ["Transparent or metal", "Background shows through", "Every field"],
          ["Logo-only company", "No text company name", "Type the company in"],
          ["Multiple people", "Two names on one card", "Which person you met"],
        ],
      },
      {
        type: "prose",
        heading: "Use confidence as an early warning",
        paragraphs: [
          "Unusual layouts tend to produce lower confidence scores. Treat a page full of low scores as a cue to read the whole card yourself rather than spot-checking.",
          "If one model consistently struggles with a style you see often, it may be worth testing another provider.",
        ],
      },
      {
        type: "bullets",
        heading: "Photo tricks for odd cards",
        items: [
          "Transparent cards: place on plain white paper",
          "Metal or foil: avoid direct light; use shade",
          "Folded: photograph the inside panel as well and add details at review",
          "Tiny or rounded cards: get closer and keep edges visible",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not a guarantee",
        body: "eCard doesn’t claim to handle every design perfectly. Review exists precisely for these cards.",
      },
    ],
    faqs: [
      { q: "Can eCard read Hindi or Marathi text on cards?", a: "eCard’s site documents WhatsApp messages in Hindi and Marathi, not scanning languages. Results depend on the AI model you choose." },
      { q: "What if a card has two people?", a: "Keep the person you met and add the other manually if needed during review." },
    ],
    related: [`${B}/front-and-back`, `${B}/scan-quality-tips`, `${B}/confidence-scores`, `${B}/choosing-a-model`],
    source: "educational",
  },
];

type Extra = { sections: Section[]; faqs?: FAQ[] };

const EXTRA: Record<string, Extra> = {
  [B]: {
    sections: [
      {
        type: "table",
        heading: "Typing a card vs scanning it",
        intro: "General comparison of the manual habit most people start with and an AI scan with review.",
        headers: ["Step", "Typing by hand", "Scanning with eCard"],
        rows: [
          ["Capture", "Type each field into your phone’s contacts", "Photograph the card in the browser or the Telegram bot"],
          ["Accuracy check", "Relies on your own proofreading", "Each field gets a confidence score and you review before saving"],
          ["Address", "Copied as printed", "Checked against Google Maps"],
          ["Next step", "Open email separately and write from scratch", "Preview an AI intro that sends from your own mailbox"],
        ],
      },
      {
        type: "bullets",
        heading: "Your first ten scans: a checklist",
        items: [
          "Pick a mix of cards — a plain one, a glossy one, a dense one — to see how results vary.",
          "Watch the confidence scores and note which fields you end up correcting most.",
          "Add where you met to at least a few contacts, so you can test natural-language search later.",
          "Try one scan through the Telegram bot to compare the two routes.",
        ],
      },
    ],
    faqs: [
      { q: "How many scans can I try for free?", a: "The Free plan includes 50 scans a month with no card required, and there is a 14-day Professional trial if you want to test at higher volume." },
    ],
  },
  [`${B}/how-it-works`]: {
    sections: [
      {
        type: "prose",
        heading: "Sample: one card, start to finish",
        paragraphs: [
          "Sample: Dr. Meera Iyer, a fictional dermatologist, hands you a card at a medical conference. You photograph it in your phone browser. The AI model you chose reads it and proposes a name, designation, clinic name, phone, email and address, each with its own confidence score.",
          "The clinic address is checked against Google Maps. The email shows a lower score because a hyphen was faint, so you look at the card and fix it. Only when you save does the contact exist in eCard — and from there you can preview an intro email or add a voice note about what you discussed.",
        ],
      },
      {
        type: "table",
        heading: "Who does what at each stage",
        headers: ["Stage", "Handled by", "Your role"],
        rows: [
          ["Taking the photo", "You", "Frame, light and steady the shot"],
          ["Reading the card", "The AI model you selected", "Choose the model and, optionally, your own key"],
          ["Checking the address", "Google Maps check", "Confirm the result looks right"],
          ["Saving the contact", "You", "Review fields and approve"],
        ],
      },
      {
        type: "bullets",
        heading: "Where scans most often go wrong",
        items: [
          "Rushed photos taken at an angle, which stretch small print such as email addresses.",
          "Saving without reading low-confidence fields because the rest looked fine.",
          "Forgetting to add context, so a perfect contact record later has no story behind it.",
        ],
      },
    ],
    faqs: [
      { q: "How long does a scan take?", a: "eCard’s site does not publish a scan time. It depends partly on the AI provider you use, so test with your own model and connection." },
    ],
  },
  [`${B}/front-and-back`]: {
    sections: [
      {
        type: "table",
        heading: "Decide whether the back is worth scanning",
        headers: ["What’s on the back", "Scan it?", "Why"],
        rows: [
          ["Only a logo or pattern", "No", "Nothing to extract; saves a scan."],
          ["Branch addresses or a second office", "Yes", "Useful for location searches and visits."],
          ["Same details in another language", "Usually no", "Pick the side that matches how you’ll write to them."],
          ["Handwritten mobile number", "Yes, or type it", "Personal numbers are often the most valuable field."],
        ],
      },
      {
        type: "steps",
        heading: "Sample: combining two sides cleanly",
        steps: [
          { title: "Scan the front", body: "Sample: Vikram Desai, a fictional startup founder, has name, title and email on the front." },
          { title: "Review and save", body: "Correct any low-confidence fields before saving." },
          { title: "Check the back", body: "His personal mobile is handwritten on the back." },
          { title: "Add the extra detail", body: "Type the number into the saved contact, or scan the back and merge duplicates afterwards." },
        ],
      },
    ],
    faqs: [
      { q: "Does scanning the back use another scan from my allowance?", a: "eCard’s site does not say how two-sided cards are counted. Assume each photo you scan counts, and check your usage in the workspace." },
    ],
  },
};

const EXTRA2: Record<string, Extra> = {
  [`${B}/contact-extraction`]: {
    sections: [
      {
        type: "table",
        heading: "Common extraction mix-ups and how to spot them",
        intro: "General patterns seen with any automated card reading, not eCard-specific figures.",
        headers: ["Mix-up", "Example (sample)", "How to catch it"],
        rows: [
          ["Company read as the person’s name", "“Shah Realty” saved as the first name", "Check the name field matches a person, not a brand."],
          ["Tagline read as job title", "“Building trust since 1998” as designation", "Titles are usually short role words."],
          ["Landline and mobile swapped", "Office number saved as mobile", "Look at the prefixes printed beside each number."],
          ["Website taken as email", "www.example.com in the email field", "An email always contains @."],
          ["Two addresses merged", "Head office and branch joined into one line", "Keep the address you will actually visit."],
        ],
      },
      {
        type: "steps",
        heading: "A 20-second extraction check",
        steps: [
          { title: "Name and company", body: "Make sure the person and the organisation are in the right fields." },
          { title: "Ways to reach them", body: "Compare the email and mobile character by character with the card." },
          { title: "Role", body: "Confirm the designation is a role, not a slogan." },
          { title: "Address", body: "Glance at the Google Maps check result before you save." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Fix it once, benefit everywhere",
        body: "Extracted fields feed everything downstream — intros, WhatsApp messages, search and exports. A minute spent correcting a field during review saves an awkward correction email later.",
      },
    ],
    faqs: [
      { q: "What if the card has no email address?", a: "Save the contact with the fields that exist. You can still reach them through other channels such as WhatsApp, and add an email later if you get one." },
      { q: "Does extraction work on handwritten details?", a: "eCard’s site does not make claims about handwriting. As a general rule, neat handwriting may be read, but always check it carefully in review." },
    ],
  },
  [`${B}/ai-model-selection`]: {
    sections: [
      {
        type: "table",
        heading: "Questions to ask before you pick a provider",
        headers: ["Question", "Why it matters"],
        rows: [
          ["Do we already have an account with one of these providers?", "Reusing an existing account and billing relationship keeps things simple."],
          ["Does our organisation have rules about where data is processed?", "Some teams prefer a provider their IT or legal team has already approved, or Azure."],
          ["What languages appear on our cards?", "Test the model on the scripts you actually collect."],
          ["How many cards do we scan a month?", "Volume affects provider costs and rate limits on your own key."],
        ],
      },
      {
        type: "steps",
        heading: "Sample: a small agency picks a model",
        steps: [
          { title: "Shortlist", body: "Sample: a fictional five-person agency already pays for one AI provider, so it starts there." },
          { title: "Test", body: "They scan 15 cards from their last event and count corrections in review." },
          { title: "Compare", body: "They repeat with a second provider on the same cards." },
          { title: "Decide", body: "They keep the one needing fewer corrections and add a backup key to the pool." },
        ],
      },
      {
        type: "bullets",
        heading: "Pitfalls",
        items: [
          "Choosing a model on reputation alone without testing your own cards.",
          "Switching models every week, which makes it hard to know what changed.",
          "Forgetting that your provider’s own billing and limits apply when you bring your own key.",
        ],
      },
    ],
    faqs: [
      { q: "How many AI models does eCard mention?", a: "eCard’s homepage cites 7 AI models. Claude, OpenAI, Gemini, DeepSeek and Grok are named, and the FAQ adds Azure and custom endpoints." },
      { q: "Do I need a technical background to choose?", a: "No. Testing a few of your own cards and comparing how many fields you correct is a practical way to choose." },
    ],
  },
  [`${B}/choosing-a-model`]: {
    sections: [
      {
        type: "table",
        heading: "Sample bake-off scorecard",
        intro: "Sample figures for illustration only — run your own test, because eCard publishes no benchmarks.",
        headers: ["Measure", "Model A (sample)", "Model B (sample)"],
        rows: [
          ["Cards tested", "20", "20"],
          ["Fields corrected in review", "11", "17"],
          ["Low-confidence fields flagged", "9", "14"],
          ["Cards with a wrong email", "1", "3"],
        ],
      },
      {
        type: "bullets",
        heading: "What a fair test looks like",
        items: [
          "Use the same 15–20 cards for every model, photographed once and reused.",
          "Include your hardest cards: dense, glossy, bilingual and minimalist designs.",
          "Count corrections, not just whether the name is right — emails and phones matter most for follow-up.",
          "Note any errors or timeouts, which may point to rate limits on your key.",
        ],
      },
      {
        type: "prose",
        heading: "When to revisit your choice",
        paragraphs: [
          "Revisit the decision when something changes: your cards start coming from a new region or language, your provider changes pricing, or your team starts scanning far more cards each month. A quick re-test on a fresh sample tells you whether a switch is worth it.",
        ],
      },
    ],
    faqs: [
      { q: "How many cards do I need for a useful test?", a: "There is no official number. Fifteen to twenty varied cards is a practical general starting point that shows clear differences without taking long." },
    ],
  },
  [`${B}/custom-ai-endpoints`]: {
    sections: [
      {
        type: "table",
        heading: "Hosted provider vs custom endpoint",
        intro: "General trade-offs to discuss with your IT team.",
        headers: ["Consideration", "Named provider", "Custom endpoint"],
        rows: [
          ["Setup effort", "Lower — add a key", "Higher — you run or arrange the endpoint"],
          ["Control over hosting", "Set by the provider", "Set by your organisation"],
          ["Who maintains it", "The provider", "Your team or vendor"],
          ["Troubleshooting", "Provider status pages and support", "Your own monitoring"],
        ],
      },
      {
        type: "steps",
        heading: "A sensible pilot plan",
        steps: [
          { title: "Confirm support in the app", body: "eCard’s FAQ mentions custom endpoints; check in-app settings for what is required." },
          { title: "Pilot with one user", body: "Run a small batch of cards before rolling out to a team." },
          { title: "Compare with a named provider", body: "Scan the same cards both ways and count corrections." },
          { title: "Keep a fallback", body: "A key pool with failover can include a named provider if your endpoint is unavailable — confirm options in the app." },
        ],
      },
      {
        type: "bullets",
        heading: "Pitfalls",
        items: [
          "Treating a custom endpoint as set-and-forget — someone must own its uptime.",
          "Skipping a security review of who can reach the endpoint.",
          "Assuming a model that works for chat will read card images well; test it.",
          "Losing your way back: keep a key for a named provider such as Claude, OpenAI, Gemini, DeepSeek, Grok or Azure so you can switch if the endpoint is retired.",
          "Not documenting the setup, so nobody else knows how scanning is wired when the original owner moves on.",
        ],
      },
    ],
    faqs: [
      { q: "Is a custom endpoint encrypted like other keys?", a: "eCard states API keys are encrypted with AES-256-GCM. The site does not detail how custom endpoint settings are stored; confirm with eCard." },
      { q: "Who usually needs a custom endpoint?", a: "Typically organisations with internal rules about which AI services may process data. Most individuals are fine with a named provider." },
    ],
  },
  [`${B}/confidence-scores`]: {
    sections: [
      {
        type: "table",
        heading: "Sample: reading the scores on one card",
        intro: "Sample data for illustration — the scale and display in eCard may differ.",
        headers: ["Field", "Sample value", "Score", "Action"],
        rows: [
          ["Name", "Priya Shah", "High", "Glance and move on"],
          ["Designation", "Realtor", "High", "Glance and move on"],
          ["Email", "priya@example-realty.in", "Low", "Compare with the card letter by letter"],
          ["Mobile", "+91 98XXX XXXXX", "Medium", "Check the digit count"],
        ],
      },
      {
        type: "bullets",
        heading: "Misreading the scores: common traps",
        items: [
          "Treating high confidence as proof — a model can be confidently wrong, so key fields still deserve a glance.",
          "Ignoring a cluster of low scores — that usually means the photo, not the model, is the problem.",
          "Comparing scores across different models as if they were the same scale.",
        ],
      },
      {
        type: "prose",
        heading: "Using scores to improve your photos",
        paragraphs: [
          "If the same field keeps scoring low across many cards — say, emails in small print — the fix is often in how you shoot: move closer, avoid glare and keep the phone flat. Over a few events, watching where scores dip is a cheap way to tune your technique.",
        ],
      },
    ],
    faqs: [
      { q: "What should I do when every field is low?", a: "Retake the photo with better light and a flatter angle before correcting fields by hand. A clearer image usually lifts the whole card." },
    ],
  },
  [`${B}/manual-review`]: {
    sections: [
      {
        type: "table",
        heading: "What to fix now vs later",
        headers: ["Field or detail", "Fix during review?", "Reason"],
        rows: [
          ["Email address", "Always", "Intros go to this address."],
          ["Mobile number", "Always", "WhatsApp messages rely on it."],
          ["Name spelling", "Always", "It appears in every message you send."],
          ["Designation wording", "If clearly wrong", "Minor style differences can wait."],
          ["Meeting context", "If you have a moment", "Easier to add while you remember."],
        ],
      },
      {
        type: "steps",
        heading: "Sample: reviewing a batch after a meetup",
        steps: [
          { title: "Sort by importance", body: "Sample: of 12 cards, start with the three people you promised to follow up." },
          { title: "Check the reach fields", body: "Email and mobile first, comparing with the physical card." },
          { title: "Add context", body: "Where you met, who introduced you, a short voice note." },
          { title: "Save and move on", body: "Routine cards get a quicker pass focused on name and email." },
        ],
      },
    ],
    faqs: [
      { q: "Can someone else review my scans?", a: "eCard’s site does not document handing a pending review to a colleague. Review your own scans, then share contacts through your workspace." },
    ],
  },
  [`${B}/address-verification`]: {
    sections: [
      {
        type: "table",
        heading: "Address problems and what to do",
        intro: "General guidance for Indian and international card addresses.",
        headers: ["Problem", "Sample", "What to do"],
        rows: [
          ["Landmark-style address", "Near City Mall, opp. bus stand", "Keep the landmark; add the PIN code if known."],
          ["Abbreviations", "Bldg, Rd, Opp.", "Expand if it helps the match; keep it readable."],
          ["Several offices listed", "HQ in one city, branch in another", "Keep the office you will visit."],
          ["Office has moved", "Card is a few years old", "Ask the person or check their website."],
        ],
      },
      {
        type: "steps",
        heading: "Sample: confirming a site-visit address",
        steps: [
          { title: "Scan the card", body: "Sample: Rahul Mehta, a fictional builder, lists a site office address." },
          { title: "Check the Maps result", body: "eCard checks the address against Google Maps." },
          { title: "Compare with the card", body: "Make sure the matched location is the site office, not the head office." },
          { title: "Save with a note", body: "Add a note like “site office, ask for Rahul at gate” to the contact." },
        ],
      },
      {
        type: "bullets",
        heading: "Pitfalls",
        items: [
          "Assuming a verified address is the person’s current workplace.",
          "Deleting landmark details that local visitors rely on.",
          "Saving a home address from a card without the person’s clear intent to share it.",
        ],
      },
    ],
    faqs: [
      { q: "Does address checking use my scan allowance?", a: "eCard’s site does not say. It describes address checks as part of scanning; check your workspace usage for details." },
    ],
  },
};

const EXTRA3: Record<string, Extra> = {
  [`${B}/key-pool`]: {
    sections: [
      {
        type: "table",
        heading: "Sample pool layouts",
        intro: "Illustrative set-ups; eCard’s site does not document pool limits or provider mixing, so confirm options in the app.",
        headers: ["Team (sample)", "Pool idea", "Goal"],
        rows: [
          ["Solo consultant", "One main key plus one spare", "Keep scanning if the main key hits a limit."],
          ["Ten-person sales team", "Two or three keys under the company account", "Spread load during busy event days."],
          ["Organisation with strict IT rules", "Keys only from an approved provider", "Stay within policy while keeping failover."],
        ],
      },
      {
        type: "bullets",
        heading: "Pool hygiene checklist",
        items: [
          "Label each key in your provider dashboard so you know which one belongs to eCard.",
          "Set spending alerts with each provider, since bringing your own key means their billing applies.",
          "Remove keys from the pool when they are revoked, rather than leaving dead entries.",
          "Review the pool before a big expo, not during it.",
          "Keep a simple record of which keys exist, who created them and when they were last rotated.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "A pool is not a quota increase",
        body: "Adding keys can help with provider-side rate limits, but your eCard plan’s monthly scan allowance still applies — for example, 1,000 scans on Starter and 5,000 on Professional.",
      },
    ],
    faqs: [
      { q: "Do I need a pool as a solo user?", a: "Not necessarily. A single key works; a spare key simply gives you a fallback if the first one is rate-limited or revoked." },
      { q: "Does a pool protect against a leaked key?", a: "No. Failover keeps scanning going, but a leaked key should be revoked at the provider and removed from the pool straight away." },
    ],
  },
  [`${B}/key-rotation-failover`]: {
    sections: [
      {
        type: "table",
        heading: "Sample rotation calendar",
        intro: "A general pattern; set the cadence your security policy requires.",
        headers: ["When", "Action"],
        rows: [
          ["Every quarter (sample cadence)", "Create a new key, add it to the pool, then retire the oldest."],
          ["When someone with key access leaves", "Rotate any key they could have seen."],
          ["After a suspected exposure", "Revoke immediately at the provider, then add a fresh key."],
          ["Before a major event", "Confirm every pooled key still works."],
        ],
      },
      {
        type: "steps",
        heading: "Sample: rotating without interrupting a team",
        steps: [
          { title: "Pick a quiet time", body: "Sample: a Monday morning with no events booked." },
          { title: "Add the new key first", body: "With two keys in the pool, scanning continues during the change." },
          { title: "Test a scan", body: "Scan one card to confirm the new key works." },
          { title: "Remove and revoke the old key", body: "Take it out of eCard, then revoke it in the provider dashboard." },
          { title: "Note it", body: "Record the change; eCard workspaces have an audit log you can review." },
        ],
      },
    ],
    faqs: [
      { q: "What if I revoke a key that is still in the pool?", a: "Scans through that key would fail. With failover, another pooled key may take over, but remove the revoked key so it isn’t retried." },
    ],
  },
  [`${B}/handling-rate-limits`]: {
    sections: [
      {
        type: "table",
        heading: "Two different limits, side by side",
        headers: ["", "eCard plan scan limit", "Provider rate limit"],
        rows: [
          ["Set by", "Your eCard plan", "Your AI provider account"],
          ["Measured over", "A month", "Usually seconds or minutes"],
          ["Sample figure", "Free 50, Starter 1,000, Professional 5,000 scans", "Varies by provider and account tier"],
          ["How to raise it", "Upgrade your plan", "Raise your provider tier or add pooled keys"],
        ],
      },
      {
        type: "steps",
        heading: "Sample: a burst at a booth",
        steps: [
          { title: "The rush", body: "Sample: four team members scan 30 cards in ten minutes after a product demo." },
          { title: "The symptom", body: "A few scans fail or slow down as the provider throttles requests." },
          { title: "Failover helps", body: "If the pool has another key with capacity, scanning can continue." },
          { title: "Afterwards", body: "Check provider dashboards and consider a higher tier or another key before the next event." },
        ],
      },
      {
        type: "bullets",
        heading: "Pitfalls",
        items: [
          "Pooling several keys from the same provider account that share one limit.",
          "Retrying failed scans rapidly, which can make throttling worse.",
          "Confusing a provider error with an eCard outage.",
          "Testing your setup only with single scans, which never reveals how it behaves under a real event-day burst. A short rehearsal with a stack of sample cards is enough.",
        ],
      },
    ],
    faqs: [
      { q: "How do I know my provider’s rate limit?", a: "Check your provider’s dashboard or documentation. Limits vary by provider and account tier, and eCard’s site does not list them." },
    ],
  },
  [`${B}/bring-your-own-key`]: {
    sections: [
      {
        type: "table",
        heading: "Is bringing your own key right for you?",
        headers: ["If you…", "BYOK is…", "Why"],
        rows: [
          ["Already pay for an AI provider", "A good fit", "Reuse an account and billing you know."],
          ["Need a specific provider for policy reasons", "A good fit", "Choose the provider your organisation approves."],
          ["Want zero setup", "Optional", "Check in the app what works without your own key."],
          ["Scan in big bursts at events", "Worth pairing with a pool", "Spare keys help with provider rate limits."],
        ],
      },
      {
        type: "bullets",
        heading: "Key safety checklist",
        items: [
          "Create a dedicated key for eCard rather than reusing one from another tool.",
          "Set a monthly spending cap or alert with the provider.",
          "Never paste keys into chats or emails, even to colleagues.",
          "Revoke the key at the provider if you stop using eCard or switch providers.",
          "Limit who in the workspace can add or view keys; eCard has owner, admin, manager, member and scan-only guest roles.",
        ],
      },
      {
        type: "prose",
        heading: "Sample: estimating provider cost",
        paragraphs: [
          "Sample: a fictional team expects about 400 scans in a month. They check their provider’s published per-request pricing, multiply by an estimate of 400 requests, and add headroom for re-scans. eCard publishes no per-scan AI cost, so this estimate always comes from your provider’s own pricing.",
        ],
      },
    ],
    faqs: [
      { q: "What happens if my key runs out of credit?", a: "Scans through that key would likely fail. A key pool with failover can help, but top up or replace the key with your provider." },
    ],
  },
  [`${B}/key-encryption`]: {
    sections: [
      {
        type: "table",
        heading: "What encryption covers — and what it doesn’t",
        intro: "General explanation of the limits of encryption at rest.",
        headers: ["Threat", "Helped by encryption at rest?", "Your extra defence"],
        rows: [
          ["Stored data copied without authorisation", "Yes — it is unreadable without the key", "—"],
          ["Someone signs in to your account", "No", "Use 2FA with authenticator codes"],
          ["A key pasted into a chat or document", "No", "Never share keys outside eCard"],
          ["A former employee who copied a key", "No", "Rotate keys when people leave"],
        ],
      },
      {
        type: "steps",
        heading: "A key-handling routine",
        steps: [
          { title: "Create the key at the provider", body: "Name it clearly, for example “eCard workspace”." },
          { title: "Paste it straight into eCard", body: "Avoid staging it in notes apps or spreadsheets." },
          { title: "Turn on 2FA", body: "eCard supports authenticator codes, recovery codes, trusted devices and login alerts." },
          { title: "Review regularly", body: "Check the workspace audit log and rotate keys on a schedule." },
        ],
      },
      {
        type: "bullets",
        heading: "Glossary",
        items: [
          "AES-256: a widely used symmetric encryption standard with a 256-bit key.",
          "GCM: a mode that also detects tampering, not just hides the data.",
          "At rest: data while stored, as opposed to while travelling over the network. eCard’s site specifically mentions encryption of stored API keys and SMTP passwords; it does not detail transport encryption, so ask eCard if a security review needs written confirmation.",
          "Rotation: replacing a key with a new one on a schedule, so any exposed copy stops working.",
          "Revocation: cancelling a key at the provider so it can never be used again.",
        ],
      },
    ],
    faqs: [
      { q: "Does encryption mean I never need to rotate keys?", a: "No. Encryption protects stored keys, but rotation limits the damage if a key is ever exposed some other way." },
      { q: "What does “256-bit key encryption” on the homepage refer to?", a: "eCard states that API keys and SMTP passwords are encrypted with AES-256-GCM." },
    ],
  },
  [`${B}/scan-limits-by-plan`]: {
    sections: [
      {
        type: "table",
        heading: "Sample: matching usage to a plan",
        intro: "Fictional profiles to illustrate the arithmetic; monthly prices only.",
        headers: ["Profile (sample)", "Scans a month", "Users", "Plan that fits"],
        rows: [
          ["Freelancer at two meetups a month", "About 30", "1", "Free (₹0, 50 scans)"],
          ["Five-person sales team", "About 600", "5", "Starter (₹299, 1,000 scans, 20 users)"],
          ["Expo-heavy team of 40", "About 3,500", "40", "Professional (₹999, 5,000 scans, 100 users)"],
          ["Large organisation, unpredictable volume", "Varies widely", "150+", "Business (₹2,999, unlimited)"],
        ],
      },
      {
        type: "bullets",
        heading: "Budgeting tips",
        items: [
          "Plan around your busiest month, not your average — expo season can triple volume.",
          "Leave headroom for re-scans of poor photos.",
          "Remember plan features too: Starter adds Google Contacts sync and Calendar & Meet booking; Professional adds Webhooks.",
          "GST applies where applicable, and local currency is shown at checkout.",
          "Yearly billing is said to save about two months, but no yearly price is published, so compare at checkout.",
        ],
      },
    ],
    faqs: [
      { q: "Can I cancel if I over-buy?", a: "eCard says you can cancel any time and keep access until the end of the period." },
    ],
  },
};

const EXTRA4: Record<string, Extra> = {
  [`${B}/scan-quality-tips`]: {
    sections: [
      {
        type: "table",
        heading: "Venue lighting cheat sheet",
        intro: "General guidance for the places cards usually change hands.",
        headers: ["Where", "Typical problem", "Quick fix"],
        rows: [
          ["Exhibition hall", "Overhead spotlights cause glare", "Tilt the card slightly until the glare moves off the text."],
          ["Restaurant or bar", "Dim, warm light", "Step towards a window or brighter area; hold the phone steady."],
          ["Outdoor site visit", "Harsh sun and hard shadows", "Shade the card with your body for even light."],
          ["Car or taxi", "Movement and blur", "Wait until you stop, or rest your elbows to steady the phone."],
        ],
      },
      {
        type: "steps",
        heading: "Recovering a bad scan",
        steps: [
          { title: "Spot it", body: "Several low-confidence fields at once usually means the photo is the problem." },
          { title: "Retake rather than retype", body: "A fresh, clear photo often fixes many fields in one go." },
          { title: "Fix what remains by hand", body: "Correct leftover fields against the physical card." },
          { title: "Learn from it", body: "Note the cause — glare, angle, distance — and adjust next time." },
        ],
      },
      {
        type: "bullets",
        heading: "Quality pitfalls people don’t notice",
        items: [
          "A dirty phone lens, which softens every scan slightly.",
          "Digital zoom, which enlarges blur instead of adding detail — move closer instead.",
          "A patterned tablecloth behind the card that confuses edges.",
          "Shooting in a hurry while walking, which adds motion blur to small print.",
        ],
      },
    ],
    faqs: [
      { q: "Does a retake use another scan?", a: "eCard’s site does not say how retakes are counted. Assume each scan counts and check your usage in the workspace." },
      { q: "Is portrait or landscape better?", a: "Match the card’s orientation so it fills the frame; that usually gives the clearest text." },
    ],
  },
  [`${B}/photo-best-practices`]: {
    sections: [
      {
        type: "table",
        heading: "Phone camera settings worth checking",
        intro: "General smartphone advice; menus differ by phone.",
        headers: ["Setting", "Suggested", "Why"],
        rows: [
          ["Flash", "Off for glossy cards", "Flash bounces off coated surfaces."],
          ["Zoom", "1x, move closer instead", "Digital zoom adds blur."],
          ["HDR", "Auto", "Helps with uneven lighting in many phones."],
          ["Focus", "Tap on the text", "Ensures small print is sharp."],
        ],
      },
      {
        type: "prose",
        heading: "Sample: three shots of the same card",
        paragraphs: [
          "Sample: a fictional doctor’s card, Dr. Anil Rao, is photographed three ways. Shot one, on a dark restaurant table with flash, has a bright spot over the phone number. Shot two, at a steep angle, makes the email look stretched. Shot three, flat under a window with the card filling the frame, reads cleanly.",
          "The lesson is less about the phone and more about the two seconds before you tap the shutter: flat, close, evenly lit.",
        ],
      },
      {
        type: "bullets",
        heading: "Background and framing",
        items: [
          "Use a plain, contrasting surface — a dark folder for white cards, a light page for dark cards.",
          "Keep fingers off the printed area; hold the card by its edges.",
          "Leave a small margin around the card so no edge is cut off.",
        ],
      },
    ],
    faqs: [
      { q: "Should I clean my phone lens?", a: "Yes, a quick wipe helps. Pocket lint and fingerprints soften small text more than most people expect." },
    ],
  },
  [`${B}/field-reference`]: {
    sections: [
      {
        type: "table",
        heading: "Sample: a complete contact record",
        intro: "Fictional data showing a well-reviewed record.",
        headers: ["Field", "Sample value", "Format tip"],
        rows: [
          ["Name", "Sneha Kulkarni", "Use the person’s preferred spelling from the card."],
          ["Designation", "Head of Procurement", "Keep it short; drop slogans."],
          ["Company", "Sample Industries Pvt Ltd", "Include the legal suffix if printed."],
          ["Mobile", "+91 9XXXX XXXXX", "Include the country code for WhatsApp."],
          ["Email", "sneha@sample-industries.example", "Check every character."],
          ["Address", "Plot 12, MIDC, Pune", "Confirm the Google Maps check."],
        ],
      },
      {
        type: "bullets",
        heading: "Formatting conventions that help later",
        items: [
          "Store mobiles with country codes so WhatsApp and international calls work.",
          "Write company names consistently so duplicate merge and search find them.",
          "Keep designations in the person’s own words rather than your shorthand.",
          "Use the full company website rather than a social profile when both are printed, and add handles separately if you need them.",
          "Avoid putting notes inside name or company fields — “Rohit (met at expo)” breaks search, sorting and the greeting in every intro.",
          "Add context — where you met, who introduced you — in meeting memory rather than squeezing it into fields.",
        ],
      },
    ],
    faqs: [
      { q: "Should I store landline numbers?", a: "Yes, if they are useful, but make sure the mobile number is in the right field because WhatsApp relies on it." },
      { q: "Can I export these fields?", a: "eCard includes bulk import and export on every plan; the site does not document the exact export columns." },
    ],
  },
  [`${B}/accuracy-and-review`]: {
    sections: [
      {
        type: "table",
        heading: "Sample accuracy log",
        intro: "A fictional log showing how a team might track its own results.",
        headers: ["Event (sample)", "Cards", "Cards needing edits", "Most common fix"],
        rows: [
          ["Realty expo, day 1", "40", "9", "Email typos from glare"],
          ["Realty expo, day 2", "35", "4", "Designation wording"],
          ["Client meetings, week", "12", "1", "Handwritten mobile"],
        ],
      },
      {
        type: "prose",
        heading: "Reading your log",
        paragraphs: [
          "In the sample, edits fell sharply on day two once the team moved away from the spotlights. That pattern is typical: most accuracy gains come from better photos and habits, not from switching models. If corrections stay high after improving technique, then test another model.",
        ],
      },
      {
        type: "bullets",
        heading: "What “accurate enough” means for you",
        items: [
          "Emails and mobiles must be exactly right — they decide whether follow-up reaches anyone.",
          "Names should be right before any message is sent.",
          "Designation and company can tolerate minor wording differences.",
          "Addresses matter most when you plan site visits or search by location; check the Google Maps result for those contacts.",
          "Context such as where you met is not extracted from the card at all, so accuracy there depends entirely on the notes you add.",
        ],
      },
    ],
    faqs: [
      { q: "Should I track accuracy at all?", a: "A light log for your first few events is worthwhile; it shows whether to change photos, models or review habits." },
    ],
  },
  [`${B}/scan-to-follow-up`]: {
    sections: [
      {
        type: "table",
        heading: "Choosing the follow-up channel",
        headers: ["Situation", "Channel", "eCard tool"],
        rows: [
          ["Formal business contact", "Email", "AI intro from your own SMTP, sent after 5 seconds"],
          ["Contact who prefers chat", "WhatsApp", "AI message in English, Hindi or Marathi"],
          ["You want them to save your details", "Your digital card", "Short link or QR with Save-to-contacts"],
          ["A whole event’s worth of contacts", "Group follow-up", "Events & expos grouping"],
        ],
      },
      {
        type: "steps",
        heading: "Sample: a 48-hour follow-up plan",
        steps: [
          { title: "Same day", body: "Sample: send intros to the people you promised something." },
          { title: "Next morning", body: "WhatsApp anyone who said they prefer chat, in their language." },
          { title: "Day two", body: "Group remaining event contacts and send a considered follow-up." },
          { title: "Then watch", body: "Link tracking shows opens of your card, PDFs and WhatsApp links." },
        ],
      },
      {
        type: "bullets",
        heading: "Follow-up pitfalls",
        items: [
          "Sending a generic message that doesn’t mention where you met.",
          "Following up on every channel at once — pick one.",
          "Leaving it a week, when the conversation is no longer fresh.",
        ],
      },
    ],
    faqs: [
      { q: "Can I follow up on WhatsApp instead of email?", a: "Yes. eCard’s AI writes a WhatsApp message in English, Hindi or Marathi and opens it in WhatsApp in one tap." },
    ],
  },
};

const EXTRA5: Record<string, Extra> = {
  [`${B}/sample-scan-demo`]: {
    sections: [
      {
        type: "table",
        heading: "What each sample persona tends to test",
        intro: "General observations about these card types; the demo data is fictional.",
        headers: ["Persona", "Typical card traits", "Worth watching"],
        rows: [
          ["Realtor", "Several phone numbers, office and site addresses", "Which number lands in the mobile field; the address check."],
          ["Doctor", "Qualifications after the name, clinic timings", "Whether degrees stay out of the name field."],
          ["Startup founder", "Minimal design, social handles, website", "Whether the email and website are separated correctly."],
        ],
      },
      {
        type: "steps",
        heading: "From demo to your own first scan",
        steps: [
          { title: "Run the demo", body: "Look at how fields and confidence scores are presented." },
          { title: "Sign up free", body: "The Free plan includes 50 scans a month with no card required." },
          { title: "Scan a card you know well", body: "Your own card is ideal — you know every detail." },
          { title: "Compare", body: "Check the result against the card and note any corrections." },
        ],
      },
      {
        type: "bullets",
        heading: "Questions to answer while you explore",
        items: [
          "Which fields matter most for how I follow up?",
          "Would my team scan in the browser, Telegram, or both?",
          "Do I want to bring my own AI key, or test first?",
          "How many cards do I collect in a typical month, and which plan’s scan allowance fits?",
          "Who else on my team would need access, and in which role?",
          "Which follow-up channel suits my contacts best — email, WhatsApp or my digital card?",
        ],
      },
    ],
    faqs: [
      { q: "Does the demo use my scan allowance?", a: "eCard’s site does not say. The demo shows sample personas; your own scans begin once you sign up." },
    ],
  },
  [`${B}/scanning-at-volume`]: {
    sections: [
      {
        type: "table",
        heading: "Sample: a 500-card expo, by the numbers",
        intro: "Fictional planning arithmetic, not eCard benchmarks. Work through the same sums with your own expected footfall before you choose a plan or book staff.",
        headers: ["Item", "Sample estimate"],
        rows: [
          ["Expected cards over three days", "500"],
          ["Re-scan headroom (10%)", "50"],
          ["Total scans needed", "About 550"],
          ["Plan check", "Free (50) is too small; Starter (1,000) covers it"],
          ["People scanning", "6 staff plus 2 scan-only guests"],
        ],
      },
      {
        type: "bullets",
        heading: "Bottlenecks at volume and fixes",
        items: [
          "Review backlog: schedule short review blocks at breaks, not one long session after the show.",
          "Provider throttling: add spare keys to the pool before the event.",
          "Duplicates from repeat visitors: run duplicate merge after each day.",
          "Lost context: add a one-line note to hot leads as you go.",
          "Flat batteries: photographing hundreds of cards drains phones, so keep power banks at the booth.",
          "Weak venue signal: exhibition halls often have poor coverage; check mobile data on setup day and know where the stronger spots are.",
          "Uneven follow-up: decide before the event which contacts get a personal intro and which get the grouped event follow-up, so nobody falls between the two.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Group as you go",
        body: "eCard lets you group cards from a trade show and follow up with everyone at once. Setting up the event grouping before day one keeps hundreds of contacts organised.",
      },
    ],
    faqs: [
      { q: "Which plan handles the most scans?", a: "Business and Enterprise include unlimited scans; Professional includes 5,000 a month." },
    ],
  },
  [`${B}/scanning-for-teams`]: {
    sections: [
      {
        type: "table",
        heading: "Sample: who does what at an event",
        intro: "Fictional role assignment; eCard’s site names roles but not their exact permissions. Agree a split like this before the event so everyone knows who scans, who reviews and who follows up.",
        headers: ["Person (sample)", "Role", "Responsibility"],
        rows: [
          ["Anita, sales head", "Manager", "Assigns follow-ups and reviews hot leads."],
          ["Kunal, sales rep", "Member", "Scans and follows up his own conversations."],
          ["Event temp staff", "Scan-only guest", "Captures cards at the booth."],
          ["Ops lead", "Admin", "Manages keys, mailboxes and access."],
        ],
      },
      {
        type: "bullets",
        heading: "Team scanning pitfalls",
        items: [
          "No agreed owner per lead, so two people send intros.",
          "Temporary staff keep access after the event.",
          "Everyone uses different tags, making the event hard to filter.",
          "Nobody reviews guest scans before follow-up starts.",
          "Shared logins at the booth, which make the audit log meaningless — give each person their own access instead.",
          "Plan user limits forgotten until the day: Free includes 5 users, Starter 20, Professional 100, and Business unlimited.",
          "No briefing for new scanners, so photo quality varies wildly across the team; a two-minute demo of a good photo fixes most of it.",
        ],
      },
      {
        type: "steps",
        heading: "Offboarding after an event",
        steps: [
          { title: "Review guest scans", body: "Check fields and assign each contact an owner." },
          { title: "Remove temporary access", body: "Take scan-only guests out of the workspace." },
          { title: "Check the audit log", body: "eCard workspaces have an audit log for reviewing activity." },
        ],
      },
    ],
    faqs: [
      { q: "Can managers see team scans?", a: "eCard names a manager role but doesn’t publish its exact permissions. Check Roles in your workspace." },
    ],
  },
  [`${B}/unusual-card-layouts`]: {
    sections: [
      {
        type: "table",
        heading: "Sample: odd cards and the fields to check",
        headers: ["Card (sample)", "What’s unusual", "Check during review"],
        rows: [
          ["Vertical card, Sample Design Studio", "Text runs top to bottom", "Name and title order."],
          ["Transparent plastic card", "Background shows through", "Every field; reshoot on a plain surface."],
          ["Folded card", "Details inside the fold", "Photograph each panel separately."],
          ["Embossed, no ink", "Low contrast lettering", "Use side light to raise shadows."],
          ["QR-only minimalist card", "Few printed details", "Add missing fields manually."],
        ],
      },
      {
        type: "bullets",
        heading: "When to give up and type it",
        items: [
          "The card is mostly artwork with tiny text.",
          "Two retakes still give many low-confidence fields.",
          "Key details are handwritten in a hurry.",
          "The card is damaged, creased or partly torn across the contact details.",
          "Only one or two fields are needed and typing them is faster than reshooting.",
        ],
      },
      {
        type: "prose",
        heading: "Respect the design",
        paragraphs: [
          "Unusual cards are often deliberate brand choices. When you follow up, using the exact company styling of the name — capitalisation, spacing — shows care, even if the scanner normalised it.",
          "It is also worth noting the card itself in your meeting notes — “silver transparent card, design studio” — because memorable cards are a useful memory hook when you search for someone months later.",
        ],
      },
    ],
    faqs: [
      { q: "Can eCard read QR codes on cards?", a: "eCard’s site does not document QR reading during scans. Add any details from the QR manually." },
    ],
  },
};


const MORE_FAQS: Record<string, FAQ[]> = {
  [`${B}/front-and-back`]: [
    { q: "What about cards with a QR code on the back?", a: "eCard’s site does not document reading QR codes during a scan. If the QR leads to useful details such as a portfolio or booking link, open it on your phone and add the link to the contact manually." },
  ],
  [`${B}/ai-model-selection`]: [
    { q: "Can my team standardise on one model?", a: "Standardising usually makes results easier to compare and support. eCard’s site does not document per-user model settings, so check your workspace settings for how model choice applies across the team." },
  ],
  [`${B}/choosing-a-model`]: [
    { q: "Should I weigh speed as well as accuracy?", a: "Yes, especially at busy events where people are waiting. eCard publishes no speed figures, so time a few scans with each model during your bake-off. A slightly slower model that needs fewer corrections can still save time overall, because review is usually the slower step." },
  ],
  [`${B}/custom-ai-endpoints`]: [
    { q: "Will the review step still apply with a custom endpoint?", a: "eCard states that nothing is saved until you review it, and that each field gets a confidence score. Treat scans from a custom endpoint the same way, and look closely at the first batches while you build confidence in the endpoint." },
  ],
  [`${B}/confidence-scores`]: [
    { q: "Are confidence scores shown for Telegram scans too?", a: "eCard describes confidence scores as part of AI scanning but does not document how they appear in the Telegram chat. Tap Open to see the contact in eCard, where you can check and correct fields." },
    { q: "Should I trust a high score on an email address?", a: "Mostly, but emails are the field where one wrong character breaks everything. A two-second glance at the card is cheap insurance before an intro goes out from your mailbox." },
  ],
  [`${B}/manual-review`]: [
    { q: "How long should review take per card?", a: "There is no official figure. As general guidance, a routine card with high-confidence fields takes a few seconds; an important lead with low-confidence fields deserves a minute, including adding where you met and who introduced you." },
    { q: "What if I don’t have time to review at an event?", a: "Capture the card and keep the physical copy safe. Review during the next break or that evening while you still remember the conversations. Waiting days makes both the fields and the context harder to verify." },
  ],
  [`${B}/address-verification`]: [
    { q: "What if the card has no address at all?", a: "That’s common with startup and freelancer cards. Save the contact without one; an address is only needed if you plan to visit, send something physical or search contacts by location later." },
    { q: "Can I search contacts by city?", a: "eCard offers natural-language search, for example “Investors I met in Mumbai last month”. Clean, verified addresses make location-based searches like this more useful." },
  ],
  [`${B}/key-pool`]: [
    { q: "Who should manage the pool?", a: "Usually one or two trusted people, such as the workspace owner or an admin. eCard names roles but doesn’t publish their exact permissions, so check Roles in your workspace and keep key access narrow." },
  ],
  [`${B}/key-rotation-failover`]: [
    { q: "How often should I rotate keys?", a: "eCard does not prescribe a schedule. Many organisations follow their own security policy, often quarterly or when staff change. Whatever cadence you choose, add the new key before removing the old one so scanning never stops." },
  ],
  [`${B}/handling-rate-limits`]: [
    { q: "Do rate limits affect the Telegram bot too?", a: "The bot reads cards with an AI model like any other scan, so a provider rate limit can affect it in the same way. If Telegram scans start failing in a burst, wait a moment and check provider dashboards." },
    { q: "Can I schedule scans to avoid limits?", a: "Not in a documented way. The practical approach is to spread load across pooled keys, raise your provider tier before busy events, and avoid rapid repeated retries." },
  ],
  [`${B}/bring-your-own-key`]: [
    { q: "Can I use a key from my company’s Azure account?", a: "Azure is named in eCard’s FAQ as an AI provider option. Ask your IT team which deployment to use, and confirm the required details in eCard’s in-app settings, as the site does not document them." },
  ],
  [`${B}/key-encryption`]: [
    { q: "What should I do if I think a key was exposed?", a: "Revoke it at the provider immediately, create a new key, add it in eCard and remove the old one. Then check the workspace audit log and enable 2FA for everyone with access to settings." },
  ],
  [`${B}/scan-limits-by-plan`]: [
    { q: "Does the 14-day trial include Professional scan limits?", a: "eCard offers a 14-day Professional trial with no card needed. The site does not say whether trial usage limits differ from the paid plan, so check your workspace during the trial." },
  ],
  [`${B}/scan-quality-tips`]: [
    { q: "Why do some cards always scan worse?", a: "Metallic inks, textured paper, very small fonts and low-contrast colours are harder for any camera and model. Use even, indirect light and fill the frame; for persistent problem cards, type the key fields by hand." },
  ],
  [`${B}/photo-best-practices`]: [
    { q: "Is it okay to photograph a card while the person is still there?", a: "Usually yes, and it can be a nice moment to confirm the spelling of their name or which number they prefer. Ask briefly if it feels appropriate, and keep the conversation, not your phone, at the centre." },
    { q: "Do I need to hold the card or can it lie on a table?", a: "Lying flat on a plain table is often steadier than holding it, and keeps fingers out of the way. Just watch for overhead lights reflecting off glossy cards." },
  ],
  [`${B}/field-reference`]: [
    { q: "What if a person has two email addresses on the card?", a: "Save the one they are most likely to read for business, usually the personal-name address rather than a generic one. Add the other in a note if the contact editor has no second email field." },
  ],
  [`${B}/accuracy-and-review`]: [
    { q: "Does the Google Maps check count as accuracy?", a: "It is a separate check on the address field. A verified address still needs a quick look to confirm it is the right office for the person, but it reduces one common source of errors." },
    { q: "How can a team improve accuracy together?", a: "Share a short photo routine, keep a light accuracy log for the first few events, and agree which fields must always be checked before follow-up. Most improvement comes from consistent habits across the team." },
  ],
  [`${B}/scan-to-follow-up`]: [
    { q: "What should a first follow-up include?", a: "As general guidance: where you met, one detail from the conversation, what you promised, and a clear next step such as a call or a link. eCard’s AI drafts the intro, which you can edit before it sends." },
    { q: "Can I book a meeting from the follow-up?", a: "Google Calendar & Meet booking is listed on paid plans from Starter (₹299 a month) upwards. Check your workspace for how booking links fit into your messages." },
  ],
  [`${B}/sample-scan-demo`]: [
    { q: "Can I show the demo to my team?", a: "Yes. Because the personas are fictional, the demo is a safe way to show colleagues how scanning, confidence scores and review look before anyone scans real contacts." },
    { q: "What should I try after the demo?", a: "Scan a handful of your own cards, try the Telegram bot once, and preview an intro email. That shows the full path from card to follow-up in your real setup." },
  ],
  [`${B}/scanning-at-volume`]: [
    { q: "How many people should scan at a busy booth?", a: "There’s no official guidance. A practical approach is one scanner per conversation point, plus a scan-only guest for overflow, and one person responsible for reviewing and merging duplicates each evening." },
    { q: "What if we run out of scans mid-event?", a: "eCard’s site does not describe what happens at the limit. Check your remaining allowance before the event and upgrade in advance if your estimate is close to the plan limit." },
  ],
  [`${B}/scanning-for-teams`]: [
    { q: "How do we avoid two people scanning the same card?", a: "Agree that whoever had the conversation scans the card. After the event, run duplicate merge, which eCard includes in its clean-data tools, so each contact appears once." },
    { q: "Should temporary staff be members or scan-only guests?", a: "As general practice, give them the narrowest role that works. eCard names a scan-only guest role, which fits staff who only need to capture cards at a booth." },
  ],
  [`${B}/unusual-card-layouts`]: [
    { q: "How do I scan a card in two languages?", a: "Photograph the side that matches the language you’ll use to follow up, review the fields, and add any extra details by hand. eCard’s site doesn’t document scan language support." },
    { q: "Do digital cards replace unusual paper cards?", a: "They complement them. eCard’s digital card offers a QR code, Save-to-contacts and short links, so people can save your details without retyping, whatever their own card looks like." },
  ],
};

const MORE_SECTIONS: Record<string, Section[]> = {
  [`${B}/manual-review`]: [
    { type: "callout", tone: "note", title: "Review protects your reputation", body: "An intro sent to a misspelt name or a WhatsApp message to the wrong number is the most visible mistake a scanner can cause. The review step is where you stop it — it is worth treating as part of the conversation, not paperwork." },
  ],
  [`${B}/key-rotation-failover`]: [
    { type: "callout", tone: "tip", title: "Test failover before you need it", body: "Once in a while, temporarily remove your main key and scan a test card to confirm the backup key takes over. Discovering a broken backup on a quiet Monday is far better than discovering it at an expo." },
  ],
  [`${B}/scan-limits-by-plan`]: [
    { type: "prose", heading: "Users and storage matter too", paragraphs: ["Scan allowance is only one dimension of a plan. Free includes 5 users and 1 GB of storage; Starter 20 users and 25 GB; Professional 100 users and 250 GB; Business and Enterprise are unlimited. A team that scans little but has many members may outgrow a plan on users before scans.", "Voice notes and attachments use storage, so teams that rely heavily on meeting memory should keep an eye on that figure too."] },
  ],
  [`${B}/field-reference`]: [
    { type: "callout", tone: "info", title: "Fields feed your follow-ups", body: "The name and company you save appear in AI intro emails and WhatsApp messages, and the mobile number is what opens the WhatsApp chat. A tidy record means every message starts on the right foot." },
  ],
};

for (const p of pages) {
  const x = EXTRA[p.slug] ?? EXTRA2[p.slug] ?? EXTRA3[p.slug] ?? EXTRA4[p.slug] ?? EXTRA5[p.slug];
  if (!x) continue;
  p.sections.push(...x.sections, ...(MORE_SECTIONS[p.slug] ?? []));
  p.faqs = [...(p.faqs ?? []), ...(x.faqs ?? []), ...(MORE_FAQS[p.slug] ?? [])];
}
