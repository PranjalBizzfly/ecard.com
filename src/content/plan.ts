import type { CategoryKey } from "./types";

/** Approved 300-route plan. Each entry: [slug, short title]. Content lives in src/content/pages/<category>.ts */
export const PLAN: Record<CategoryKey, [string, string][]> = {
  company: [
    ["", "Home"], ["about", "About eCard"], ["contact", "Contact"], ["contact-sales", "Contact Sales"],
    ["why-ecard", "Why eCard"], ["how-it-works", "How It Works"], ["product-tour", "Product Tour"],
    ["sample-scan", "Try a Sample Scan"], ["get-started", "Get Started"], ["site-index", "Site Index"],
  ],
  platform: [
    ["platform", "Platform Overview"], ["platform/ai-visiting-card-crm", "AI Visiting-Card CRM"],
    ["platform/paper-to-digital", "Paper to Digital"], ["platform/workspace", "Workspaces"],
    ["platform/dashboard", "Dashboard"], ["platform/all-features", "All Features"],
    ["platform/bring-your-own-ai", "Bring Your Own AI"], ["platform/browser-based", "Browser-Based by Design"],
    ["platform/data-ownership", "Your Data, Your Control"], ["platform/time-saved", "Time Saved"],
    ["platform/follow-up-engine", "Follow-Up Engine"], ["platform/relationship-memory", "Relationship Memory"],
    ["platform/compliance-tools", "Compliance Tools"], ["platform/multi-language", "Multi-Language Messaging"],
    ["platform/for-teams", "eCard for Teams"],
  ],
  scanning: [
    ["features/ai-card-scanning", "AI Card Scanning"],
    ...([
      ["how-it-works", "How Scanning Works"], ["front-and-back", "Front & Back Scanning"],
      ["contact-extraction", "Contact Extraction"], ["ai-model-selection", "AI Model Selection"],
      ["choosing-a-model", "Choosing a Model"], ["custom-ai-endpoints", "Custom AI Endpoints"],
      ["confidence-scores", "Confidence Scores"], ["manual-review", "Manual Review"],
      ["address-verification", "Google Maps Address Verification"], ["key-pool", "AI Key Pool"],
      ["key-rotation-failover", "Key Rotation & Failover"], ["handling-rate-limits", "Handling Rate Limits"],
      ["bring-your-own-key", "Bring Your Own Key"], ["key-encryption", "Key Encryption"],
      ["scan-limits-by-plan", "Scan Limits by Plan"], ["scan-quality-tips", "Scan Quality Tips"],
      ["photo-best-practices", "Photo Best Practices"], ["field-reference", "Extracted Field Reference"],
      ["accuracy-and-review", "Accuracy & Review"], ["scan-to-follow-up", "From Scan to Follow-Up"],
      ["sample-scan-demo", "Sample Scan Demo"], ["scanning-at-volume", "Scanning at Volume"],
      ["scanning-for-teams", "Scanning for Teams"], ["unusual-card-layouts", "Unusual Card Layouts"],
    ] as [string, string][]).map(([s, t]) => [`features/ai-card-scanning/${s}`, t] as [string, string]),
  ],
  crm: [
    ["features/contact-management", "Contact Management"],
    ...([
      ["contact-records", "Contact Records"], ["editing-contacts", "Editing Contacts"], ["tags", "Contact Tags"],
      ["tag-by-event-city-intent", "Tag by Event, City & Intent"], ["contact-history", "Contact History"],
      ["natural-language-search", "Natural-Language Search"], ["search-examples", "Search Examples"],
      ["duplicate-merge", "Duplicate Merge"], ["blacklist", "Blacklist"], ["archive", "Archive"],
      ["csv-import", "CSV Import"], ["csv-export", "CSV Export"], ["bulk-import-export", "Bulk Import & Export"],
      ["google-contacts-sync", "Google Contacts Sync"], ["follow-up-reminders", "Follow-Up Reminders"],
      ["data-hygiene", "Data Hygiene"], ["shared-team-contacts", "Shared Team Contacts"],
      ["data-export-and-deletion", "Data Export & Deletion"], ["crm-vs-spreadsheet", "CRM vs Spreadsheet"],
      ["migrating-from-spreadsheets", "Migrating from Spreadsheets"], ["contact-organization", "Contact Organization"],
      ["contact-lifecycle", "Contact Lifecycle"], ["search-tips", "Search Tips"], ["clean-data-checklist", "Clean Data Checklist"],
    ] as [string, string][]).map(([s, t]) => [`features/contact-management/${s}`, t] as [string, string]),
  ],
  cards: [
    ["features/digital-business-card", "Digital Business Card"],
    ...([
      ["create", "Create Your Card"], ["templates", "Premium Templates"], ["qr-code", "QR Code Sharing"],
      ["save-to-contacts", "Save to Contacts"], ["short-links", "Short Links"], ["tracked-links", "Tracked Links"],
      ["bot-filtering", "Bot-Filtered Click Counts"], ["no-app-required", "No App Required"],
      ["mobile-sharing", "Mobile Sharing"], ["share-by-email", "Share by Email"], ["share-by-whatsapp", "Share by WhatsApp"],
      ["personal-url", "Your Personal Card URL"], ["personal-profile", "Personal Profile"],
      ["share-pdfs-and-brochures", "Share PDFs & Brochures"], ["paper-vs-digital", "Paper vs Digital Cards"],
      ["qr-at-events", "QR Codes at Events"], ["email-signature", "Card in Your Email Signature"],
      ["white-label-cards", "White-Label Cards"], ["card-design-tips", "Card Design Tips"],
    ] as [string, string][]).map(([s, t]) => [`features/digital-business-card/${s}`, t] as [string, string]),
  ],
  outreach: [
    ["features/outreach", "Email & WhatsApp Outreach"],
    ["features/automated-email-outreach", "Automated Email Outreach"],
    ["features/whatsapp-follow-ups", "WhatsApp Follow-Ups"],
    ...([
      ["ai-email-drafts", "AI Email Drafts"], ["email-preview", "Email Preview"], ["edit-and-cancel-emails", "Edit & Cancel Emails"],
      ["five-second-send", "The 5-Second Send"], ["smtp-setup", "SMTP Setup"], ["send-from-your-own-address", "Send from Your Own Address"],
      ["email-providers", "Supported Email Providers"], ["email-deliverability", "Email Deliverability"],
      ["intro-email-templates", "Intro Email Templates"], ["whatsapp-english", "WhatsApp in English"],
      ["whatsapp-hindi", "WhatsApp in Hindi"], ["whatsapp-marathi", "WhatsApp in Marathi"],
      ["one-tap-whatsapp", "One-Tap WhatsApp"], ["whatsapp-message-generation", "WhatsApp Message Generation"],
      ["follow-up-workflows", "Follow-Up Workflows"], ["follow-up-timing", "Follow-Up Timing"],
      ["follow-up-etiquette", "Follow-Up Etiquette"], ["email-vs-whatsapp", "Email vs WhatsApp"],
      ["post-event-outreach", "Post-Event Outreach"], ["outreach-tracking", "Outreach Tracking"],
      ["personalised-follow-ups", "Personalised Follow-Ups"], ["multilingual-outreach", "Multilingual Outreach"],
    ] as [string, string][]).map(([s, t]) => [`features/outreach/${s}`, t] as [string, string]),
  ],
  telegram: [
    ["features/telegram-bot", "Telegram Bot"],
    ...([
      ["connect-workspace", "Connect Your Workspace"], ["snap-a-card", "Snap a Card"], ["open-and-send-buttons", "Open & Send Buttons"],
      ["auto-email", "Auto Email from Telegram"], ["forwarding-cards", "Forwarding Cards"], ["telegram-vs-browser", "Telegram vs Browser"],
      ["team-telegram", "Telegram for Teams"], ["telegram-at-events", "Telegram at Events"], ["troubleshooting", "Telegram Troubleshooting"],
    ] as [string, string][]).map(([s, t]) => [`features/telegram-bot/${s}`, t] as [string, string]),
  ],
  meetings: [
    ["features/meeting-memory", "Meeting Memory"],
    ...([
      ["where-you-met", "Where You Met"], ["meeting-locations", "Meeting Locations"], ["introductions", "Introductions"],
      ["meeting-context", "Meeting Context"], ["voice-notes", "Voice Notes"], ["voice-note-tips", "Voice Note Tips"],
      ["ai-summaries", "AI Meeting Summaries"], ["summary-examples", "Summary Examples"], ["searchable-memory", "Searchable Memory"],
      ["calendar-and-meet-booking", "Calendar & Meet Booking"], ["notes-to-follow-up", "Notes to Follow-Up"],
      ["prepare-for-meetings", "Prepare for Meetings"], ["memory-for-teams", "Memory for Teams"], ["relationship-timeline", "Relationship Timeline"],
    ] as [string, string][]).map(([s, t]) => [`features/meeting-memory/${s}`, t] as [string, string]),
  ],
  events: [
    ["features/events-expos", "Events & Expos"],
    ...([
      ["create-event", "Create an Event"], ["group-contacts", "Group Contacts by Event"], ["follow-up-the-room", "Follow Up with the Room"],
      ["trade-show-workflow", "Trade-Show Workflow"], ["before-the-show", "Before the Show"], ["at-the-booth", "At the Booth"],
      ["after-the-show", "After the Show"], ["lead-tracking", "Lead Tracking"], ["event-tagging", "Event Tagging"],
      ["conferences", "Conferences"], ["networking-meetups", "Networking Meetups"], ["team-at-expos", "Your Team at Expos"],
      ["site-visits", "Site Visits"], ["expo-checklist", "Expo Checklist"],
    ] as [string, string][]).map(([s, t]) => [`features/events-expos/${s}`, t] as [string, string]),
  ],
  analytics: [
    ["features/link-tracking", "Link Tracking & Analytics"],
    ...([
      ["card-views", "Card Views"], ["link-clicks", "Link Clicks"], ["pdf-engagement", "PDF Engagement"],
      ["whatsapp-link-tracking", "WhatsApp Link Tracking"], ["who-opened-your-card", "Who Opened Your Card"],
      ["short-link-analytics", "Short-Link Analytics"], ["dashboard", "Analytics Dashboard"], ["contact-activity", "Contact Activity"],
      ["accurate-click-counts", "Accurate Click Counts"], ["engagement-signals", "Engagement Signals"],
      ["measuring-follow-up", "Measuring Follow-Up"], ["reading-your-analytics", "Reading Your Analytics"],
      ["brochure-tracking", "Brochure Tracking"], ["analytics-for-teams", "Analytics for Teams"],
    ] as [string, string][]).map(([s, t]) => [`features/link-tracking/${s}`, t] as [string, string]),
  ],
  team: [
    ["features/team-security", "Team & Security"],
    ...([
      ["roles-and-permissions", "Roles & Permissions"], ["owner-role", "Owner Role"], ["admin-role", "Admin Role"],
      ["manager-role", "Manager Role"], ["member-role", "Member Role"], ["scan-only-guests", "Scan-Only Guests"],
      ["two-factor-authentication", "Two-Factor Authentication"], ["login-alerts", "Login Alerts"],
      ["trusted-devices", "Trusted Devices"], ["recovery-codes", "Recovery Codes"], ["audit-logs", "Audit Logs"],
      ["secret-encryption", "Secret Encryption"], ["white-label", "White Label"], ["custom-domains", "Custom Domains"],
      ["compliance-checklist", "Compliance Checklist"], ["consent-management", "Consent"], ["shared-workspaces", "Shared Workspaces"],
      ["onboarding-your-team", "Onboarding Your Team"], ["security-best-practices", "Security Best Practices"],
    ] as [string, string][]).map(([s, t]) => [`features/team-security/${s}`, t] as [string, string]),
  ],
  integrations: [
    ["integrations", "Integrations"],
    ...([
      ["telegram", "Telegram"], ["whatsapp", "WhatsApp"], ["gmail", "Gmail"], ["outlook", "Outlook"],
      ["google-contacts", "Google Contacts"], ["google-maps", "Google Maps"], ["razorpay-upi", "Razorpay & UPI"],
      ["stripe", "Stripe"], ["claude", "Claude"], ["openai", "OpenAI"], ["gemini", "Gemini"], ["deepseek", "DeepSeek"],
      ["grok", "Grok"], ["azure", "Azure"], ["zoho-mail", "Zoho Mail"], ["sendgrid", "SendGrid"], ["brevo", "Brevo"],
      ["mailgun", "Mailgun"], ["amazon-ses", "Amazon SES"], ["resend", "Resend"], ["smtp", "Any SMTP Host"],
      ["webhooks", "Webhooks"], ["api", "API"], ["csv-import", "CSV Import"],
    ] as [string, string][]).map(([s, t]) => [`integrations/${s}`, t] as [string, string]),
  ],
  solutions: [
    ["use-cases", "Use Cases"],
    ...([
      ["real-estate", "Real Estate"], ["events-expos", "Events & Expos"], ["sales-teams", "Sales Teams"], ["agencies", "Agencies"],
      ["recruiters", "Recruiters"], ["consultants", "Consultants"], ["startup-founders", "Startup Founders"], ["doctors", "Doctors & Clinics"],
      ["insurance-agents", "Insurance Agents"], ["financial-advisors", "Financial Advisors"], ["manufacturers-exporters", "Manufacturers & Exporters"],
      ["distributors", "B2B Distributors"], ["event-organisers", "Event Organisers"], ["freelancers", "Freelancers"], ["lawyers", "Lawyers"],
      ["architects-designers", "Architects & Designers"], ["travel-agencies", "Travel Agencies"], ["hospitality", "Hospitality"],
      ["investors", "Investors"], ["chartered-accountants", "Chartered Accountants"], ["it-services", "IT Services"],
      ["marketing-teams", "Marketing Teams"], ["small-business-owners", "Small Business Owners"], ["education", "Education & Training"],
    ] as [string, string][]).map(([s, t]) => [`use-cases/${s}`, t] as [string, string]),
  ],
  pricing: [
    ["pricing", "Pricing"], ["pricing/free", "Free Plan"], ["pricing/starter", "Starter Plan"], ["pricing/professional", "Professional Plan"],
    ["pricing/business", "Business Plan"], ["pricing/enterprise", "Enterprise Plan"], ["pricing/compare-plans", "Compare Plans"],
    ["pricing/billing-and-payments", "Billing & Payments"], ["pricing/free-trial", "14-Day Free Trial"], ["pricing/faq", "Pricing FAQ"],
  ],
  mobile: [
    ["mobile", "Mobile Experience"], ["mobile/scan-from-your-phone", "Scan from Your Phone"],
    ["mobile/share-your-card-on-mobile", "Share Your Card on Mobile"], ["mobile/no-app-needed", "No App Needed"],
    ["mobile/telegram-on-the-go", "Telegram on the Go"],
  ],
  resources: [
    ["resources", "Resources"], ["resources/guides", "Guides"],
    ...([
      ["getting-started", "Getting Started"], ["your-first-scan", "Your First Scan"], ["setting-up-smtp", "Setting Up SMTP"],
      ["connecting-telegram", "Connecting Telegram"], ["importing-contacts-csv", "Importing Contacts from CSV"],
      ["creating-your-digital-card", "Creating Your Digital Card"], ["inviting-your-team", "Inviting Your Team"],
      ["enabling-2fa", "Enabling 2FA"], ["setting-up-webhooks", "Setting Up Webhooks"], ["trade-show-playbook", "Trade-Show Playbook"],
      ["follow-up-playbook", "Follow-Up Playbook"], ["visiting-card-etiquette", "Visiting-Card Etiquette"],
    ] as [string, string][]).map(([s, t]) => [`resources/guides/${s}`, t] as [string, string]),
    ["resources/glossary", "Glossary"],
  ],
  support: [
    ["help", "Help Center"], ["help/faq", "FAQ"], ["help/account-and-sign-in", "Account & Sign-In"], ["help/password-reset", "Password Reset"],
    ["help/billing", "Billing Help"], ["help/scanning", "Scanning Help"], ["help/email-sending", "Email Sending Help"],
    ["help/telegram", "Telegram Help"], ["help/data-and-privacy", "Data & Privacy"], ["help/contact-support", "Contact Support"],
  ],
  legal: [
    ["legal/privacy-policy", "Privacy Policy"], ["legal/terms-of-service", "Terms of Service"], ["legal/acceptable-use", "Acceptable Use"],
    ["legal/cookie-policy", "Cookie Policy"], ["legal/data-processing", "Data Processing"],
  ],
  more: [
    ["product/whats-new-telegram", "New: Telegram Bot"], ["product/sign-up-flow", "Sign-Up Flow"], ["product/plan-picker", "Choosing a Plan at Sign-Up"],
    ["product/workspace-setup", "Workspace Setup"], ["product/account-recovery", "Account Recovery"], ["product/digital-card-example", "Digital Card Example"],
    ["product/sample-personas", "Sample Scan Personas"], ["product/at-a-glance", "eCard at a Glance"],
    ["product/feature-availability", "Feature Availability by Plan"], ["product/security-at-a-glance", "Security at a Glance"],
  ],

  // ---- Corporate architecture pages (from "Master Website & Subdomain Architecture - SaaS") ----
  aboutus: [
    ["about/our-story", "Our Story"], ["about/mission-vision", "Mission & Vision"], ["about/values", "Our Values"],
    ["about/leadership", "Leadership"], ["about/team", "Our Team"], ["about/locations", "Locations"], ["about/awards", "Awards & Recognition"],
  ],
  offerings: [["products", "Products"], ["services", "Services"], ["solutions", "Solutions"], ["industries", "Industries"]],
  customers: [["customers", "Customers"], ["case-studies", "Case Studies"], ["testimonials", "Testimonials"], ["success-stories", "Success Stories"]],
  library: [
    ["blog", "Blog"], ["insights", "Insights"], ["guides", "Guides Library"], ["reports", "Reports"],
    ["whitepapers", "Whitepapers"], ["webinars", "Webinars"], ["events", "Events"],
  ],
  business: [
    ["partners", "Partners"], ["partners/become-a-partner", "Become a Partner"], ["partners/find-a-partner", "Find a Partner"],
    ["vendors", "Vendors"], ["vendors/become-a-vendor", "Become a Vendor"], ["vendors/requirements", "Vendor Requirements"], ["vendors/policies", "Vendor Policies"],
    ["affiliates", "Affiliates"], ["affiliates/join", "Join the Affiliate Program"], ["affiliates/terms", "Affiliate Terms"],
  ],
  corporate: [
    ["careers", "Careers"], ["news", "News"], ["media", "Media"], ["investors", "Investors"],
    ["sustainability", "Sustainability"], ["esg", "ESG"], ["csr", "CSR"], ["governance", "Governance"],
  ],
  trust: [
    ["trust", "Trust Centre"], ["trust/security", "Security"], ["trust/privacy", "Privacy"], ["trust/compliance", "Compliance"],
    ["trust/certifications", "Certifications"], ["trust/responsible-disclosure", "Responsible Disclosure"],
  ],
  engagement: [
    ["feedback", "Feedback"], ["feedback/complaints", "Complaints"], ["speak-up", "Speak Up"],
    ["speak-up/anonymous-report", "Anonymous Report"], ["speak-up/ethics", "Ethics Concerns"],
    ["speak-up/workplace", "Workplace Concerns"], ["speak-up/whistleblower", "Whistleblower"],
  ],
  helpdesk: [["support", "Support"], ["support/help-centre", "Help Centre"], ["support/faq", "Support FAQ"], ["support/contact", "Contact Support"]],
  contacts: [["contact/sales", "Sales Enquiries"], ["contact/media", "Media Enquiries"], ["contact/partners", "Partner Enquiries"], ["contact/locations", "Contact Locations"]],
  legalhub: [
    ["legal", "Legal Centre"], ["legal/accessibility", "Accessibility"], ["legal/notices", "Legal Notices"],
    ["legal/disclaimer", "Disclaimer"], ["legal/licenses", "Licenses"],
  ],
  customerSites: [
    ["customer-sites/account", "Account"], ["customer-sites/portal", "Customer Portal"], ["customer-sites/support", "Support Desk"],
    ["customer-sites/community", "Community"], ["customer-sites/academy", "Academy"], ["customer-sites/billing", "Billing"],
    ["customer-sites/onboarding", "Onboarding"], ["customer-sites/feedback", "Feedback Portal"],
  ],
  businessSites: [
    ["business-sites/partners", "Partner Portal"], ["business-sites/vendors", "Vendor Portal"], ["business-sites/affiliates", "Affiliate Portal"],
    ["business-sites/resellers", "Resellers"], ["business-sites/marketplace", "Marketplace"], ["business-sites/procurement", "Procurement"],
  ],
  developerSites: [
    ["developer-sites/developers", "Developers"], ["developer-sites/docs", "Docs"], ["developer-sites/api", "API Access"],
    ["developer-sites/status", "Status"], ["developer-sites/integrations", "Integrations Hub"], ["developer-sites/sandbox", "Sandbox"],
    ["developer-sites/labs", "Labs"], ["developer-sites/changelog", "Changelog"],
  ],
  corporateSites: [
    ["corporate-sites/careers", "Careers Site"], ["corporate-sites/trust", "Trust Site"], ["corporate-sites/media", "Media Site"],
    ["corporate-sites/investors", "Investors Site"], ["corporate-sites/sustainability", "Sustainability Site"],
  ],
  reportingSites: [
    ["reporting-sites/speakup", "Speak-Up Site"], ["reporting-sites/ethics", "Ethics Site"],
    ["reporting-sites/complaints", "Complaints Site"], ["reporting-sites/surveys", "Surveys"],
  ],
  deals: [
    ["deals/black-friday", "Black Friday"], ["deals/cyber-monday", "Cyber Monday"], ["deals/11-11-singles-day", "11.11 Singles' Day"],
    ["deals/christmas", "Christmas"], ["deals/new-year", "New Year"], ["deals/boxing-day", "Boxing Day"],
    ["deals/year-end-clearance", "Year-End Clearance"], ["deals/easter", "Easter"], ["deals/valentines-day", "Valentine's Day"],
    ["deals/summer-sale", "Summer Sale"], ["deals/back-to-business", "Back to Business"], ["deals/spring-sale", "Spring Sale"],
    ["deals/anniversary", "Anniversary"], ["deals/founders-day", "Founders' Day"], ["deals/flash-sale", "Flash Sale"],
    ["deals/lifetime-deal", "Lifetime Deal"], ["deals/startup-small-business", "Startup & Small Business"],
    ["deals/world-productivity-day", "World Productivity Day"], ["deals/halloween", "Halloween"], ["deals/secret-deal", "Secret Deal"],
  ],
};
