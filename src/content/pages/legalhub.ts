import type { PageDef } from "../types";

export const pages: PageDef[] = [
  {
    slug: "legal",
    category: "legalhub",
    title: "Legal Centre",
    seoTitle: "eCard Legal Centre: Policies, Terms And Notices",
    description: "Index of eCard’s legal documents: privacy, terms, cookies, data processing, acceptable use, accessibility, notices, disclaimer and open-source licences.",
    h1: "Legal Documents And Notices",
    eyebrow: "Legal Centre",
    intro: "This is the index of every legal document for eCard, the AI visiting-card CRM. Most documents are drafts pending review by eCard, and each one says so at the top.",
    variant: "reference",
    visual: "none",
    icon: "book",
    sections: [
      {
        type: "callout",
        tone: "note",
        title: "Draft Documents Pending Review",
        body: "The documents listed here are drafts pending review by eCard. They are not yet the binding policies and may change before publication. For questions in the meantime, contact sales@bizzfly.com.",
      },
      {
        type: "table",
        heading: "Policies And Terms",
        intro: "The core documents that describe how eCard is provided and how data is handled.",
        headers: ["Document", "What it covers"],
        rows: [
          ["Privacy Policy", "The account and contact data eCard handles, why, and the choices you have."],
          ["Terms of Service", "The agreement for using eCard, including plans, billing and acceptable conduct."],
          ["Cookie Policy", "Cookies and similar technologies used on the site and app."],
          ["Data Processing", "How eCard handles contact data on behalf of the workspace owner."],
          ["Acceptable Use", "What you may and may not do with eCard, including messaging rules."],
        ],
      },
      {
        type: "table",
        heading: "Notices And Statements",
        headers: ["Document", "What it covers"],
        rows: [
          ["Accessibility", "eCard’s intent to make the site usable for everyone, and how to report barriers."],
          ["Legal Notices", "General notices about the site, trademarks and content."],
          ["Disclaimer", "Limits on reliance on site content, estimates and educational guides."],
          ["Licenses", "Open-source software the site is built with."],
        ],
      },
      {
        type: "prose",
        heading: "How To Read These Documents",
        paragraphs: [
          "Start with the Terms of Service and Privacy Policy, which together describe the main relationship between you and eCard. If you manage a workspace for a team, the Data Processing and Acceptable Use drafts matter too: they describe your role as the person responsible for the contacts you scan, and the rules for emails and WhatsApp messages you send.",
          "The notices further down are shorter and deal with the website itself rather than the service.",
        ],
      },
      {
        type: "bullets",
        heading: "What These Drafts Do Not Include Yet",
        items: [
          "Company registration details, which eCard has not published.",
          "Specific data retention periods.",
          "Governing law or jurisdiction clauses.",
          "A list of sub-processors or data locations.",
        ],
      },
      {
        type: "split",
        heading: "Related Trust Information",
        body: [
          "Legal documents describe obligations; the Trust Centre describes the controls that support them.",
        ],
        points: [
          "Security: 2FA, encrypted secrets, audit log",
          "Privacy: review before save, your own AI key and mailbox",
          "Compliance: consent, export and deletion checklist",
        ],
      },
      {
        type: "prose",
        heading: "Documents For Workspace Owners",
        paragraphs: [
          "If you run an eCard workspace for a company, you are typically the person responsible for the contacts your team scans. The Data Processing draft describes how eCard intends to act on your instructions, and the Acceptable Use draft describes the rules for sending intro emails and WhatsApp messages from your own accounts. Reading both before inviting your team will help you set sensible internal rules.",
          "The Trust Centre complements these documents with practical controls: roles to limit access, an audit log, and a compliance checklist for consent, export and deletion. Together they give you the means to meet your obligations, whatever the final policies say.",
        ],
      },
    ],
    faqs: [
      { q: "Are these the final policies?", a: "No. They are drafts pending review by eCard and are not yet binding." },
      { q: "Who do I contact with a legal question?", a: "Write to sales@bizzfly.com, the only contact eCard currently publishes." },
      { q: "Where is the data processing agreement?", a: "The Data Processing draft is listed above, pending review." },
      { q: "Is there a cookie policy?", a: "Yes. A draft cookie policy is listed above, pending review." },
      { q: "Will I be told when the final versions are published?", a: "eCard has not published a notification process. Check this Legal Centre, where final documents will replace the drafts." },
    ],
    related: ["legal/privacy-policy", "legal/terms-of-service", "legal/cookie-policy", "legal/data-processing", "legal/acceptable-use"],
    source: "mixed",
  },
  {
    slug: "legal/accessibility",
    category: "legalhub",
    title: "Accessibility",
    seoTitle: "Accessibility Statement (Draft)",
    description: "Draft eCard accessibility statement: our aim to make the site and app usable for everyone, known considerations, and how to report a barrier. Pending review.",
    h1: "Accessibility Statement",
    eyebrow: "Legal · Draft",
    intro: "This draft describes eCard’s approach to accessibility for its website and browser-based app, and how you can tell us about something that is hard to use.",
    variant: "legal",
    visual: "none",
    icon: "eye",
    sections: [
      {
        type: "callout",
        tone: "note",
        title: "Draft Pending Review",
        body: "This accessibility statement is a draft pending review by eCard. It is not yet the binding statement and may change before publication. For questions in the meantime, contact sales@bizzfly.com.",
      },
      {
        type: "prose",
        heading: "1. Our Aim",
        paragraphs: [
          "eCard aims to make its website and app usable by as many people as possible, including people who use screen readers, keyboard navigation, magnification or voice control. Because eCard works in any phone browser with no app to install, accessibility depends partly on the browser and device you use, and partly on how the site is built.",
          "eCard has not published the results of a formal accessibility audit or a conformance claim against any standard. This statement does not claim conformance.",
        ],
      },
      {
        type: "bullets",
        heading: "2. Design Practices We Work Toward",
        intro: "General practices that guide the site’s design:",
        items: [
          "Text with sufficient contrast against its background, in both light and dark themes.",
          "Meaningful headings and page structure that assistive technology can navigate.",
          "Controls that can be reached and used with a keyboard.",
          "Text alternatives for meaningful images; decorative sample visuals are marked as such.",
          "Layouts that adapt to small screens and to browser zoom.",
        ],
      },
      {
        type: "prose",
        heading: "3. Known Considerations",
        paragraphs: [
          "Some eCard features rely on the camera, such as photographing a visiting card. People who cannot use the camera can import contacts by CSV instead. AI-extracted fields are shown for review before saving, which gives everyone a chance to correct errors at their own pace. The intro email’s five-second send window can be cancelled or edited; if that timing is a barrier for you, please tell us.",
        ],
      },
      {
        type: "steps",
        heading: "4. Reporting A Barrier",
        steps: [
          { title: "Describe The Problem", body: "Tell us which page or feature, what you were trying to do and what went wrong." },
          { title: "Mention Your Setup", body: "The browser, device and any assistive technology you use helps us reproduce it." },
          { title: "Send It", body: "Email sales@bizzfly.com with “Accessibility” in the subject, or use the feedback page." },
        ],
      },
      {
        type: "prose",
        heading: "5. Changes To This Statement",
        paragraphs: [
          "This statement will be reviewed and may be updated as the site changes. The final version will replace this draft once eCard has completed its review.",
        ],
      },
      {
        type: "prose",
        heading: "6. Third-party Content",
        paragraphs: [
          "Some parts of the eCard experience happen in other services. Messages you open in WhatsApp, emails your contacts read in their own mail apps and the Telegram bot all run inside third-party apps, whose accessibility is managed by their owners. Your digital business card opens in any browser, so its accessibility also depends on the visitor’s browser and settings.",
          "eCard aims to keep its own pages and the content it generates, such as the digital card and intro emails, simple and readable so they work well with assistive technology in those environments.",
        ],
      },
    ],
    faqs: [
      { q: "Does eCard meet WCAG?", a: "eCard has not published a conformance claim or audit. This draft describes aims, not certified conformance." },
      { q: "Can I add contacts without the camera?", a: "Yes. Bulk import by CSV is available on every plan." },
      { q: "How do I report an accessibility problem?", a: "Email sales@bizzfly.com with “Accessibility” in the subject, or use the feedback page." },
      { q: "Is there an app with accessibility settings?", a: "eCard works in any phone browser with no app to install, so you can use your browser and device accessibility settings." },
    ],
    related: ["legal", "feedback", "mobile", "help", "legal/notices"],
    source: "educational",
  },
  {
    slug: "legal/notices",
    category: "legalhub",
    title: "Legal Notices",
    seoTitle: "Legal Notices (Draft)",
    description: "Draft legal notices for the eCard website covering trademarks, third-party names, sample data, external links and how to send a notice. Pending review.",
    h1: "Legal Notices",
    eyebrow: "Legal · Draft",
    intro: "This draft gathers the general legal notices that apply to the eCard website and its content.",
    variant: "legal",
    visual: "none",
    icon: "file",
    sections: [
      {
        type: "callout",
        tone: "note",
        title: "Draft Pending Review",
        body: "These legal notices are a draft pending review by eCard. They are not yet binding and may change before publication. For questions in the meantime, contact sales@bizzfly.com.",
      },
      {
        type: "prose",
        heading: "1. About This Website",
        paragraphs: [
          "This website describes eCard, an AI visiting-card CRM available at ecard.gg. eCard has not yet published company registration details on this site; they will be added to the final version of these notices. Commercial and Enterprise enquiries can be sent to sales@bizzfly.com.",
        ],
      },
      {
        type: "prose",
        heading: "2. Trademarks And Third-party Names",
        paragraphs: [
          "Names of other products and companies appear on this site to describe how eCard works with them. These include AI providers such as Claude, OpenAI, Gemini, DeepSeek and Grok; messaging and email services such as Telegram, WhatsApp, Gmail and Outlook; and services such as Google Maps, Google Contacts, Razorpay and Stripe. These names belong to their respective owners.",
          "Mentioning a product does not mean its owner endorses, sponsors or partners with eCard. eCard has not published any partner relationships.",
        ],
      },
      {
        type: "bullets",
        heading: "3. Sample Data And Illustrations",
        items: [
          "People, cards and messages shown in screenshots and mock-ups are fictional sample data.",
          "Any resemblance to real people or businesses is coincidental.",
          "Product visuals are illustrations and may not match the current app exactly.",
          "Figures from the time-saved calculator are estimates, not promises.",
        ],
      },
      {
        type: "prose",
        heading: "4. Content On This Site",
        paragraphs: [
          "Text, design and graphics on this site are provided for information about eCard. Guides and resources include general educational content, such as networking and follow-up advice, which is not professional or legal advice. The Disclaimer page explains this further.",
          "The site is built with open-source software, listed on the Licenses page.",
        ],
      },
      {
        type: "prose",
        heading: "5. Sending A Notice",
        paragraphs: [
          "If you need to send eCard a formal notice, for example about content on this site, email sales@bizzfly.com with a clear subject line. A dedicated legal contact will be confirmed in the final version of this document.",
        ],
      },
      {
        type: "prose",
        heading: "6. Links To Other Websites",
        paragraphs: [
          "This site links to other websites, including ecard.gg for sign-up and sign-in and the sites of third-party services that work with eCard. Those websites are run by others under their own terms and privacy policies. eCard is not responsible for their content or practices.",
          "Digital business cards created by eCard users may also contain links chosen by those users. Those links are the user’s responsibility. If you believe a card or link breaches the Acceptable Use draft, please report it by email to sales@bizzfly.com with the link and a short explanation.",
          "The final version of these notices will replace this draft once eCard’s review is complete.",
        ],
      },
    ],
    faqs: [
      { q: "Is eCard affiliated with OpenAI, Google or WhatsApp?", a: "Names of third-party services are used to describe compatibility only. eCard has not published any partnerships." },
      { q: "Are the people in screenshots real?", a: "No. All examples are fictional sample data." },
      { q: "Where are eCard’s company details?", a: "eCard has not yet published registration details. They will be added when these notices are finalised." },
      { q: "How do I report a misused digital card?", a: "Email sales@bizzfly.com with the card link and a short description of the problem." },
      { q: "Can I quote content from this site?", a: "Short, accurate quotes with a link back to the source are generally fine. Do not present eCard content as your own or alter it in a misleading way." },
    ],
    related: ["legal", "legal/disclaimer", "legal/licenses", "integrations", "contact"],
    source: "mixed",
  },
  {
    slug: "legal/disclaimer",
    category: "legalhub",
    title: "Disclaimer",
    seoTitle: "Website Disclaimer (Draft)",
    description: "Draft eCard disclaimer on the limits of site content: educational guides, time-saved estimates, AI accuracy and third-party services. Pending review.",
    h1: "Disclaimer",
    eyebrow: "Legal · Draft",
    intro: "This draft disclaimer explains how to read the information on this website and the limits on relying on it.",
    variant: "legal",
    visual: "none",
    icon: "help",
    sections: [
      {
        type: "callout",
        tone: "note",
        title: "Draft Pending Review",
        body: "This disclaimer is a draft pending review by eCard. It is not yet binding and may change before publication. For questions in the meantime, contact sales@bizzfly.com.",
      },
      {
        type: "prose",
        heading: "1. General Information Only",
        paragraphs: [
          "Content on this website is provided to describe eCard and to share general guidance on networking, follow-up and contact management. It is not legal, financial, tax or other professional advice. Rules on data protection, marketing messages and tracking differ by country; please take qualified advice for your situation.",
        ],
      },
      {
        type: "table",
        heading: "2. Specific Limits",
        headers: ["Content", "How to read it"],
        rows: [
          ["Time-saved calculator", "Figures are estimates, not promises. Your results depend on how you work."],
          ["AI card scanning", "AI extraction can make mistakes. Each field has a confidence score, and nothing is saved until you review it."],
          ["Industry and use-case pages", "Describe how eCard could be used. They do not imply existing customers in that industry."],
          ["Guides and resources", "General educational content, not eCard product claims unless stated."],
          ["Pricing", "Monthly prices in INR as published. GST applies where applicable; yearly totals are shown at checkout."],
        ],
      },
      {
        type: "prose",
        heading: "3. Third-party Services",
        paragraphs: [
          "eCard works with services you choose, such as the AI provider that reads your cards and the email host that sends your intros. Those services are run by other companies under their own terms. Their availability, pricing, rate limits and data handling are outside eCard’s control. eCard’s key pool can fail over between your keys when one is rate-limited, but it cannot guarantee a third-party service will be available.",
        ],
      },
      {
        type: "bullets",
        heading: "4. Accuracy Of This Site",
        items: [
          "eCard aims to keep this site accurate and up to date, but features and prices may change.",
          "Where the site and the app differ, the app and checkout are the current source.",
          "Visuals show sample data and may not match the current interface.",
        ],
      },
      {
        type: "prose",
        heading: "5. Liability",
        paragraphs: [
          "The terms that limit eCard’s liability for the service itself are set out in the Terms of Service, which is also a draft pending review. This disclaimer covers the website content only.",
        ],
      },
      {
        type: "prose",
        heading: "6. Changes And Availability",
        paragraphs: [
          "The website, the app and the plans described here may change over time. eCard may add, change or remove features, update prices for new billing periods or change which AI models and email providers are supported. The current pricing and features shown at sign-up and checkout take precedence over older descriptions on this site.",
          "The service runs in your browser and depends on your internet connection, your device and the third-party services you connect. eCard has not published an uptime commitment or status page, and nothing on this site should be read as one.",
        ],
      },
    ],
    faqs: [
      { q: "Are the time-saved figures guaranteed?", a: "No. They are labelled estimates, not promises." },
      { q: "Is the AI always accurate?", a: "No AI is perfect. eCard shows confidence scores and asks you to review fields before saving." },
      { q: "Is the guidance on this site legal advice?", a: "No. It is general information. Take qualified advice for your situation." },
      { q: "Does eCard guarantee uptime?", a: "No. eCard has not published an uptime figure or status page." },
      { q: "Which price applies if the site and checkout differ?", a: "The price and terms shown at checkout are the current ones. GST applies where applicable." },
    ],
    related: ["legal", "legal/terms-of-service", "legal/notices", "platform/time-saved", "features/ai-card-scanning/accuracy-and-review"],
    source: "mixed",
  },
  {
    slug: "legal/licenses",
    category: "legalhub",
    title: "Licenses",
    seoTitle: "Open-Source Licenses (Draft)",
    description: "Draft notice of the open-source software used to build the eCard website, including Next.js, React, Tailwind CSS and Lucide, under their own licenses.",
    h1: "Open-source Licenses",
    eyebrow: "Legal · Draft",
    intro: "The eCard website is built with open-source software. This draft acknowledges the main projects and explains how their licenses apply.",
    variant: "legal",
    visual: "none",
    icon: "code",
    sections: [
      {
        type: "callout",
        tone: "note",
        title: "Draft Pending Review",
        body: "This licenses page is a draft pending review by eCard. It is not yet the final notice and may change before publication. For questions in the meantime, contact sales@bizzfly.com.",
      },
      {
        type: "table",
        heading: "1. Main Open-source Components",
        intro: "Each project is used under its respective license. Refer to the project itself for the full license text.",
        headers: ["Project", "What it does on this site"],
        rows: [
          ["Next.js", "The web framework that renders and routes the site’s pages."],
          ["React", "The library used to build the user interface components."],
          ["Tailwind CSS", "The utility-first styling system used for layout and design."],
          ["Lucide", "The icon set used throughout the site."],
        ],
      },
      {
        type: "prose",
        heading: "2. How These Licenses Work",
        paragraphs: [
          "Open-source licenses let anyone use, study and build on software, usually on the condition that copyright and license notices are kept. Permissive licenses, common among web libraries, allow use in commercial products as long as those notices are preserved. Each project above publishes its own license, and that license governs its use rather than this page.",
          "These projects also depend on many smaller open-source packages. Their licenses are included with the software as distributed.",
        ],
      },
      {
        type: "bullets",
        heading: "3. What This Page Does Not Cover",
        items: [
          "The eCard app at ecard.gg, whose components have not been listed here.",
          "Third-party services you connect, such as AI providers or email hosts, which are governed by their own terms.",
          "eCard’s own content and brand, which are not released under an open-source license.",
        ],
      },
      {
        type: "prose",
        heading: "4. Thanks",
        paragraphs: [
          "eCard is grateful to the maintainers and contributors of these projects. If you believe a notice is missing or incorrect, please write to sales@bizzfly.com so it can be corrected in the final version.",
        ],
      },
      {
        type: "prose",
        heading: "5. Your Rights Under These Licenses",
        paragraphs: [
          "Open-source licenses grant rights to everyone, not only to eCard. If you want to use Next.js, React, Tailwind CSS or Lucide in your own project, you can obtain them directly from their maintainers and use them under the same license terms. You do not need eCard’s permission to do so, and nothing on this site changes those terms.",
          "If you are reviewing eCard for a procurement process and need a full software bill of materials, note that one has not been published. You can ask sales@bizzfly.com, and the final version of this page may include a more complete list.",
          "Open-source projects depend on volunteers and companies who maintain them. If you rely on these tools yourself, consider supporting them by contributing fixes, documentation or sponsorship.",
        ],
      },
    ],
    faqs: [
      { q: "Is eCard open source?", a: "No. The website uses open-source components, but eCard’s own product and content are not released under an open-source license." },
      { q: "Where can I read the full license texts?", a: "Each project publishes its own license with its source code and package." },
      { q: "Does this list cover the eCard app?", a: "No. This draft covers the website only." },
      { q: "Can I reuse eCard’s design or text?", a: "No. eCard’s own content and branding are not released under an open-source license." },
      { q: "I maintain one of these projects and a notice is wrong. What should I do?", a: "Please email sales@bizzfly.com with the correct attribution or license details, and it will be considered for the final version of this page." },
    ],
    related: ["legal", "legal/notices", "legal/terms-of-service", "platform/browser-based"],
    source: "educational",
  },
];
