import type { PageDef } from "../types";

const DRAFT = (doc: string) => ({
  type: "callout" as const,
  tone: "note" as const,
  title: "Draft Pending Review",
  body: `This ${doc} is a draft pending review by eCard. It is not yet the binding policy and may change before publication. For questions in the meantime, contact sales@bizzfly.com.`,
});

export const pages: PageDef[] = [
  {
    slug: "legal/privacy-policy",
    category: "legal",
    title: "Privacy Policy",
    seoTitle: "Privacy Policy (Draft)",
    description: "Draft eCard privacy policy describing the account, contact and usage data the service handles, how it is used, and the choices users have. Pending review.",
    h1: "Privacy Policy",
    eyebrow: "Legal · Draft",
    intro: "This draft explains what information eCard handles when you use the service, why, and the choices you have.",
    variant: "legal",
    visual: "none",
    icon: "shield",
    sections: [
      DRAFT("privacy policy"),
      {
        type: "bullets",
        heading: "1. Information We Handle",
        items: [
          "Account information: such as your name, email address and sign-in details.",
          "Contact data you add: details read from visiting cards you scan or import, plus notes, tags, events and voice notes you attach.",
          "Credentials you provide: AI provider API keys and SMTP passwords, which eCard states are encrypted with AES-256-GCM.",
          "Usage and link data: for example, opens of your digital card, PDFs and WhatsApp links, with bots filtered out.",
          "Billing information processed by payment providers such as Razorpay or Stripe.",
        ],
      },
      {
        type: "prose",
        heading: "2. How Information Is Used",
        paragraphs: [
          "To provide the service: reading cards with the AI model you select, storing contacts, sending emails from your own mailbox, preparing WhatsApp messages, operating the Telegram bot and showing link analytics.",
          "To secure accounts, for example with two-factor authentication, login alerts and workspace audit logs, and to process payments and communicate about your account.",
        ],
      },
      {
        type: "prose",
        heading: "3. Third-party Services You Choose",
        paragraphs: [
          "Some features send data to services you select. Card images or text may be processed by the AI provider whose key you configure. Emails are sent through your SMTP provider. Addresses may be checked with Google Maps, and contacts may sync with Google Contacts if you enable it. Each of these providers has its own privacy terms.",
        ],
      },
      {
        type: "bullets",
        heading: "4. Your Choices",
        items: [
          "Export contact data you have added.",
          "Delete contacts or request deletion of your account.",
          "Disconnect integrations such as Telegram or Google Contacts.",
          "Workspace administrators can use the compliance checklist for consent, export and deletion.",
        ],
      },
      {
        type: "prose",
        heading: "5. Retention, Changes And Contact",
        paragraphs: [
          "Retention periods will be set out in the final policy. If this policy changes, the updated version will be posted on this page. Questions can be sent to the contact listed on the eCard contact page.",
        ],
      },
      {
        type: "bullets",
        heading: "6. Your Rights In General Terms",
        intro: "Depending on where you live, data-protection law may give you rights such as the following. The final policy will describe how they apply.",
        items: [
          "To ask what personal information is held about you.",
          "To ask for inaccurate information to be corrected.",
          "To ask for information to be deleted where appropriate.",
          "To object to certain uses or withdraw consent you previously gave.",
          "To receive a copy of data you provided."
        ]
      },
      {
        type: "prose",
        heading: "7. Contacts You Add About Other People",
        paragraphs: [
          "When you scan someone’s card, you add their personal information to eCard. You are responsible for having a legitimate reason to store and contact them, and for honouring their requests. Workspace tools such as the compliance checklist and blacklist are there to help."
        ]
      },
      {
        type: "steps",
        heading: "8. How To Make A Privacy Request",
        steps: [
          {
            title: "Contact Us",
            body: "Send your request to the contact listed on the eCard contact page."
          },
          {
            title: "Verification",
            body: "We may need to confirm your identity before acting."
          },
          {
            title: "Response",
            body: "We will respond in line with applicable law, which the final policy will describe."
          }
        ]
      },
      {
        type: "prose",
        heading: "9. Security",
        paragraphs: [
          "eCard states that API keys and SMTP passwords are encrypted with AES-256-GCM, and offers two-factor authentication, login alerts and audit logs. No online service can guarantee absolute security, and users play a part by protecting their sign-in details."
        ]
      },
      {
        type: "prose",
        heading: "10. Children",
        paragraphs: [
          "eCard is a business tool and is not intended for use by children. The final policy will describe how this is handled."
        ]
      },
    ],
    related: ["legal/data-processing", "legal/cookie-policy", "help/data-and-privacy", "features/team-security/compliance-checklist"],
    source: "mixed",
  },
  {
    slug: "legal/terms-of-service",
    category: "legal",
    title: "Terms Of Service",
    seoTitle: "Terms Of Service (Draft)",
    description: "Draft eCard terms of service covering accounts, plans and billing, acceptable use, your content, third-party services and termination. Pending legal review.",
    h1: "Terms Of Service",
    eyebrow: "Legal · Draft",
    intro: "This draft sets out the terms for using eCard, the AI visiting-card CRM. It explains your account, your plan and billing, what you may and may not do, and how either side can end the agreement.",
    variant: "legal",
    visual: "none",
    icon: "file",
    sections: [
      DRAFT("terms of service document"),
      {
        type: "prose",
        heading: "1. Accounts And Workspaces",
        paragraphs: [
          "You need an account to use eCard. You are responsible for keeping your sign-in details secure, and we encourage two-factor authentication. Workspace owners are responsible for the people they invite and the roles they assign.",
        ],
      },
      {
        type: "bullets",
        heading: "2. Plans, Trials And Billing",
        items: [
          "Plans and monthly prices are shown on the pricing page in INR; local currency may be shown at checkout and GST applies where applicable.",
          "New workspaces get a 14-day Professional trial without a card.",
          "You can cancel at any time and keep access until the end of your billing period.",
          "Enterprise terms are agreed separately with sales.",
        ],
      },
      {
        type: "prose",
        heading: "3. Your Content",
        paragraphs: [
          "You keep ownership of the contacts, notes and files you add. You grant eCard the rights needed to host and process that content to provide the service. You are responsible for having an appropriate basis to store and contact the people in your workspace.",
        ],
      },
      {
        type: "prose",
        heading: "4. Third-party Services",
        paragraphs: [
          "eCard connects to services you choose, such as AI providers, SMTP mailboxes, Telegram, WhatsApp and Google services. Your use of those services is governed by their own terms, and you are responsible for any charges from providers whose keys you supply.",
        ],
      },
      {
        type: "prose",
        heading: "5. Acceptable Use, Suspension And Changes",
        paragraphs: [
          "Use of eCard is subject to the Acceptable Use policy. Accounts that breach it may be suspended or terminated. These terms may be updated; material changes will be communicated. Liability, governing law and dispute terms will be completed in the final version.",
        ],
      },
      {
        type: "bullets",
        heading: "Account Responsibilities",
        items: [
          "Keep your sign-in details confidential and enable available security features such as two-factor authentication.",
          "Make sure the people you invite use the service in line with these terms.",
          "Provide accurate account and billing information.",
          "Tell us promptly if you believe your account has been accessed without permission."
        ]
      },
      {
        type: "prose",
        heading: "Content And Data You Provide",
        paragraphs: [
          "You keep ownership of the contacts, notes and other content you add. You give eCard the permissions needed to store and process that content to provide the service, including sending it to third-party providers you choose to connect, such as AI models or your SMTP mailbox.",
          "You are responsible for having the right to add and contact the people whose details you store."
        ]
      },
      {
        type: "bullets",
        heading: "Suspension And Termination (General Structure)",
        items: [
          "You may stop using the service and cancel your subscription.",
          "eCard may suspend or end access for serious breaches of these terms or the Acceptable Use Policy.",
          "The final terms will describe what happens to your data and access when an account ends."
        ]
      },
      {
        type: "prose",
        heading: "Changes And Contact",
        paragraphs: [
          "Updated terms will be posted on this page. Questions can be sent to sales@bizzfly.com."
        ]
      },
      {
        type: "bullets",
        heading: "Plans And Billing (General Structure)",
        items: [
          "Plans and monthly prices are shown on the eCard pricing page.",
          "Subscriptions are paid through payment providers such as Razorpay·UPI or Stripe.",
          "The final terms will describe renewals, cancellations and refunds."
        ]
      },
      {
        type: "prose",
        heading: "Third-party Services",
        paragraphs: [
          "Some features depend on services you connect, such as AI providers, SMTP mailboxes, WhatsApp, Telegram, Google Maps and Google Contacts. Your use of those services is also governed by their own terms, and their availability is outside eCard’s control."
        ]
      },
    ],
    related: ["legal/acceptable-use", "legal/privacy-policy", "pricing/billing-and-payments", "pricing"],
    source: "mixed",
  },
  {
    slug: "legal/acceptable-use",
    category: "legal",
    title: "Acceptable Use",
    seoTitle: "Acceptable Use Policy (Draft)",
    description: "Draft eCard acceptable use policy: no spam, no unlawful data collection, no abuse of messaging or AI features, and respect for opt-outs. Pending review.",
    h1: "Acceptable Use Policy",
    eyebrow: "Legal · Draft",
    intro: "eCard is built for following up with people you have actually met. This draft describes what is and is not acceptable.",
    variant: "legal",
    visual: "none",
    icon: "ban",
    sections: [
      DRAFT("acceptable use policy"),
      {
        type: "bullets",
        heading: "1. You May Not",
        items: [
          "Send unsolicited bulk email or messages, or use eCard as a mass-marketing tool.",
          "Import contact lists you are not entitled to use.",
          "Contact people who have asked you to stop.",
          "Impersonate another person or organisation on a digital card.",
          "Use the service for unlawful, harassing or fraudulent activity.",
          "Attempt to access other workspaces, probe security or overload the service.",
        ],
      },
      {
        type: "prose",
        heading: "2. Messaging From Your Own Mailbox",
        paragraphs: [
          "Intro emails are sent from your own SMTP mailbox, so your mail provider’s policies also apply. Messages should relate to a genuine interaction. Use the blacklist to respect opt-outs.",
        ],
      },
      {
        type: "prose",
        heading: "3. AI Features",
        paragraphs: [
          "You are responsible for reviewing AI-extracted fields and AI-drafted messages before they are saved or sent, and for complying with the terms of the AI provider whose key you use.",
        ],
      },
      {
        type: "prose",
        heading: "4. Enforcement",
        paragraphs: [
          "eCard may remove content, suspend features or close accounts that breach this policy. Reports of abuse can be sent through the contact details on the eCard contact page.",
        ],
      },
      {
        type: "table",
        heading: "Examples: Acceptable Vs Not Acceptable",
        headers: [
          "Acceptable",
          "Not acceptable"
        ],
        rows: [
          [
            "Following up with someone who gave you their card",
            "Sending bulk unsolicited messages to scraped lists"
          ],
          [
            "Importing your own existing contacts",
            "Importing purchased lists without a lawful basis"
          ],
          [
            "Sharing your digital card",
            "Using links to distribute malware or phishing pages"
          ],
          [
            "Giving event staff guest access",
            "Sharing one login among many people"
          ]
        ]
      },
      {
        type: "bullets",
        heading: "Security Misuse",
        items: [
          "Attempting to access other workspaces or accounts.",
          "Probing, scanning or testing the service for vulnerabilities without permission.",
          "Interfering with the service’s normal operation.",
          "Circumventing plan limits or access controls."
        ]
      },
      {
        type: "steps",
        heading: "Reporting Misuse",
        steps: [
          {
            title: "Collect Details",
            body: "Note what you saw, when, and any relevant links."
          },
          {
            title: "Contact eCard",
            body: "Send the report to sales@bizzfly.com or the contact on the eCard contact page."
          },
          {
            title: "Do Not Retaliate",
            body: "Avoid testing or attacking the suspected account yourself."
          }
        ]
      },
      {
        type: "prose",
        heading: "Enforcement",
        paragraphs: [
          "Depending on the seriousness of a breach, eCard may warn, restrict features, suspend or close accounts. The final policy will describe the process in more detail."
        ]
      },
      {
        type: "prose",
        heading: "Why This Policy Exists",
        paragraphs: [
          "eCard is used to store and contact real people. This policy protects those people, other customers and the service itself from misuse, such as spam or harassment sent through connected mailboxes and messaging apps."
        ]
      },
      {
        type: "bullets",
        heading: "Responsibilities Of Workspace Owners And Admins",
        items: [
          "Make sure invited users are aware of this policy.",
          "Remove access for anyone who misuses the service.",
          "Respond to reports of misuse involving their workspace."
        ]
      },
      {
        type: "prose",
        heading: "Messaging And Outreach Rules",
        paragraphs: [
          "Emails are sent from your own mailbox and WhatsApp messages from your own account, so the rules of those providers apply as well as this policy. Keep outreach relevant to how you met someone, identify yourself clearly, and stop when asked. Repeated unwanted messages may breach this policy even if each one seems harmless."
        ]
      },
      {
        type: "bullets",
        heading: "Content You Must Not Store Or Send",
        items: [
          "Unlawful, defamatory or harassing content.",
          "Content that infringes someone else’s rights.",
          "Personal data you have no legitimate reason to hold."
        ]
      },
      {
        type: "prose",
        heading: "Questions About This Policy",
        paragraphs: [
          "If you are unsure whether a planned use is acceptable, ask before you start by contacting sales@bizzfly.com."
        ]
      },
    ],
    related: ["legal/terms-of-service", "features/team-security/consent-management", "features/outreach", "legal/privacy-policy"],
    source: "educational",
  },
  {
    slug: "legal/cookie-policy",
    category: "legal",
    title: "Cookie Policy",
    seoTitle: "Cookie Policy (Draft)",
    description: "Draft eCard cookie policy explaining the categories of cookies and similar technologies the site may use, why, and how you can manage them. Pending review.",
    h1: "Cookie Policy",
    eyebrow: "Legal · Draft",
    intro: "This draft explains how eCard may use cookies and similar technologies, and how you can control them.",
    variant: "legal",
    visual: "none",
    icon: "settings",
    sections: [
      DRAFT("cookie policy"),
      {
        type: "prose",
        heading: "1. What Cookies Are",
        paragraphs: [
          "Cookies are small text files stored by your browser. Similar technologies include local storage. They help websites remember who you are and how you use them.",
        ],
      },
      {
        type: "table",
        heading: "2. Categories That May Be Used",
        intro: "The final policy will list specific cookies; this draft describes categories only.",
        headers: ["Category", "Purpose"],
        rows: [
          ["Strictly necessary", "Keeping you signed in, security features such as trusted devices"],
          ["Preferences", "Remembering settings such as language"],
          ["Analytics", "Understanding how the site is used, if enabled"],
          ["Link tracking", "Counting opens of shared cards and links, with bots filtered out"],
        ],
      },
      {
        type: "prose",
        heading: "3. Managing Cookies",
        paragraphs: [
          "Most browsers let you block or delete cookies. Blocking strictly necessary cookies may stop you signing in or using features like trusted devices.",
        ],
      },
      {
        type: "prose",
        heading: "4. Changes",
        paragraphs: [
          "This policy will be updated when the cookies in use change. The current version will always be posted on this page.",
        ],
      },
      {
        type: "table",
        heading: "Common Cookie Categories",
        intro: "General categories used by many web services. The final policy will list the cookies eCard actually uses.",
        headers: [
          "Category",
          "Typical purpose"
        ],
        rows: [
          [
            "Strictly necessary",
            "Keeping you signed in and the service secure"
          ],
          [
            "Preferences",
            "Remembering settings such as interface choices"
          ],
          [
            "Analytics",
            "Understanding how pages are used in aggregate"
          ]
        ]
      },
      {
        type: "prose",
        heading: "Cookies And Link Analytics",
        paragraphs: [
          "eCard shows opens of your digital card, PDFs and WhatsApp links, with bots filtered out. The final policy will explain which technologies support these analytics and what visitors can control."
        ]
      },
      {
        type: "bullets",
        heading: "Managing Cookies In Your Browser",
        items: [
          "Most browsers let you view and delete cookies in their privacy settings.",
          "You can block third-party cookies or all cookies, though blocking necessary cookies may stop sign-in working.",
          "Private or incognito windows usually discard cookies when closed."
        ]
      },
      {
        type: "prose",
        heading: "Questions",
        paragraphs: [
          "Questions about this draft can be sent to the contact listed on the eCard contact page."
        ]
      },
      {
        type: "prose",
        heading: "What Cookies Are",
        paragraphs: [
          "Cookies are small text files that a website stores in your browser. They let a site remember information between pages or visits, such as whether you are signed in. Similar technologies include local storage and pixels.",
          "Some cookies are set by the site you are visiting; others may be set by third-party services the site uses."
        ]
      },
      {
        type: "bullets",
        heading: "Your Choices In General Terms",
        items: [
          "Accept or decline non-essential cookies where a choice is offered.",
          "Change your browser settings at any time.",
          "Contact eCard with questions about how cookies are used."
        ]
      },
      {
        type: "prose",
        heading: "Changes To This Policy",
        paragraphs: [
          "If the cookies eCard uses change, the updated policy will be posted on this page."
        ]
      },
      {
        type: "prose",
        heading: "Scope Of This Policy",
        paragraphs: [
          "This draft covers cookies and similar technologies used on eCard’s website and web app, including pages that show a user’s digital card to visitors. It explains the kinds of technologies involved and the general choices available. The final policy will name specific cookies, their purposes and whether they are set by eCard or by third parties."
        ]
      },
      {
        type: "bullets",
        heading: "Visitors To A Digital Card",
        items: [
          "People who open a shared digital card, PDF or WhatsApp link may be counted in the card owner’s link analytics.",
          "The final policy will explain what information is recorded about these visits.",
          "Visitors will be able to contact eCard with questions."
        ]
      },
    ],
    related: ["legal/privacy-policy", "legal/terms-of-service", "features/link-tracking", "help/data-and-privacy"],
    source: "educational",
  },
  {
    slug: "legal/data-processing",
    category: "legal",
    title: "Data Processing",
    seoTitle: "Data Processing Terms (Draft)",
    description: "Draft eCard data processing terms describing roles, processing purposes, sub-processors you choose, security measures and data subject requests. Pending review.",
    h1: "Data Processing Terms",
    eyebrow: "Legal · Draft",
    intro: "This draft describes how eCard processes personal data that customers store in their workspaces, such as details from scanned visiting cards.",
    variant: "legal",
    visual: "none",
    icon: "server",
    sections: [
      DRAFT("data processing document"),
      {
        type: "prose",
        heading: "1. Roles",
        paragraphs: [
          "For contacts you add to your workspace, you decide why and how that data is used, and eCard processes it on your behalf to provide the service. For account and billing data, eCard handles data for its own purposes as described in the Privacy Policy.",
        ],
      },
      {
        type: "bullets",
        heading: "2. Processing Activities",
        items: [
          "Reading card images with the AI provider you configure.",
          "Storing contacts, notes, tags, events and voice notes.",
          "Sending emails through your SMTP mailbox and preparing WhatsApp messages.",
          "Address checks with Google Maps and optional Google Contacts sync.",
          "Delivering signed webhook events for new contacts on plans that include webhooks.",
        ],
      },
      {
        type: "cards",
        heading: "3. Security Measures Described On ecard.gg",
        cards: [
          { title: "Encryption Of Secrets", body: "API keys and SMTP passwords encrypted with AES-256-GCM.", icon: "lock" },
          { title: "Access Controls", body: "Five roles, two-factor authentication, trusted devices and login alerts.", icon: "key" },
          { title: "Audit Log", body: "Workspace activity is recorded in an audit log.", icon: "file" },
        ],
      },
      {
        type: "prose",
        heading: "4. Data Subject Requests And Deletion",
        paragraphs: [
          "Customers can use export and deletion tools, supported by the compliance checklist, to respond to requests from the people whose data they hold. Retention periods, sub-processor lists and transfer terms will be set out in the final version.",
        ],
      },
      {
        type: "table",
        heading: "Who Does What (General Structure)",
        headers: [
          "Role",
          "Typical meaning"
        ],
        rows: [
          [
            "Controller",
            "The customer organisation that decides why contact data is collected and used"
          ],
          [
            "Processor",
            "eCard, processing that data to provide the service on the customer’s instructions"
          ],
          [
            "Sub-processors and chosen providers",
            "Services involved in delivering features, including providers the customer selects such as AI models or SMTP mailboxes"
          ]
        ]
      },
      {
        type: "bullets",
        heading: "Security Measures Referenced On eCard’s Site",
        items: [
          "API keys and SMTP passwords encrypted with AES-256-GCM.",
          "Two-factor authentication, recovery codes, trusted devices and login alerts.",
          "Role-based access with five workspace roles.",
          "Workspace audit logs."
        ]
      },
      {
        type: "bullets",
        heading: "Customer Responsibilities (General)",
        items: [
          "Having a lawful basis to collect and contact the people stored in the workspace.",
          "Configuring roles and access appropriately.",
          "Handling requests from people whose data is stored, using export and deletion tools."
        ]
      },
      {
        type: "prose",
        heading: "Requesting A Data Processing Agreement",
        paragraphs: [
          "Organisations that need a signed agreement can contact sales@bizzfly.com. The final terms will be provided once review is complete."
        ]
      },
      {
        type: "prose",
        heading: "Scope Of This Document",
        paragraphs: [
          "This draft covers how eCard would process personal data on behalf of customers, mainly the contact details read from visiting cards and the notes, tags and events attached to them. It is intended for organisations that use eCard as part of their own business."
        ]
      },
      {
        type: "bullets",
        heading: "Topics The Final Agreement Is Expected To Cover",
        items: [
          "The nature and purpose of processing.",
          "Confidentiality obligations for people with access.",
          "Assistance with data-subject requests.",
          "Notification if a security incident affects customer data.",
          "Return or deletion of data when the service ends."
        ]
      },
      {
        type: "prose",
        heading: "Instructions And Changes",
        paragraphs: [
          "Under a typical processing arrangement, the customer’s use and configuration of the service act as its instructions, for example which AI model reads cards and which mailbox sends emails. The final agreement will describe how changes to providers or terms are communicated to customers, and how customers can raise concerns or questions."
        ]
      },
      {
        type: "prose",
        heading: "Questions About This Draft",
        paragraphs: [
          "Customers reviewing eCard for procurement can send questions about processing, security features or providers to sales@bizzfly.com while this document is pending review."
        ]
      },
    ],
    related: ["legal/privacy-policy", "features/team-security/secret-encryption", "platform/data-ownership", "features/team-security/compliance-checklist"],
    source: "mixed",
  },
];
