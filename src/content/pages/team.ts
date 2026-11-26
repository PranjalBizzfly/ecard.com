import type { PageDef } from "../types";

const B = "features/team-security";

export const pages: PageDef[] = [
  {
    slug: B,
    category: "team",
    title: "Team & Security",
    seoTitle: "Team Roles, 2FA & Audit Logs For Visiting-Card CRM",
    description: "eCard gives teams five roles, 2FA with recovery codes, login alerts, encrypted secrets, audit logs and white-label branding on higher plans.",
    h1: "Share One Card CRM With Your Team, Safely",
    eyebrow: "Team & Security",
    intro: "eCard workspaces are built for more than one person. Assign roles, protect sign-ins with two-factor authentication, keep an audit log, and put your own brand on the experience.",
    variant: "feature",
    visual: "security",
    icon: "shield",
    sections: [
      {
        type: "cards",
        heading: "What eCard Provides For Teams",
        intro: "Everything below is listed on ecard.gg as part of the team and admin feature set.",
        cards: [
          { title: "Five Roles", body: "Owner, admin, manager, member and scan-only guest, so each person gets an appropriate level of access.", icon: "users" },
          { title: "Two-factor Authentication", body: "Authenticator-app codes, recovery codes, trusted devices and login alerts.", icon: "key" },
          { title: "Encrypted Secrets", body: "API keys and SMTP passwords are encrypted with AES-256-GCM.", icon: "lock" },
          { title: "Audit Log", body: "Workspaces keep an audit log so admins can review activity.", icon: "file" },
          { title: "White-label", body: "Your logo, colours and a custom domain on Business and Enterprise plans.", icon: "palette" },
          { title: "Compliance Checklist", body: "A checklist covering consent, export and deletion.", icon: "check" },
        ],
      },
      {
        type: "prose",
        heading: "Why Team Controls Matter For A Card CRM",
        paragraphs: [
          "Visiting cards carry personal data: names, phone numbers, email addresses and sometimes home addresses. Once a team starts scanning cards into one shared place, the question of who can see, edit and export that data becomes important.",
          "Roles let you give a trade-show helper the ability to scan without handing over the whole contact book. Two-factor authentication protects the account if a password leaks. The audit log helps you answer the question \"who changed this?\" after the fact.",
        ],
      },
      {
        type: "table",
        heading: "Team Size By Plan",
        intro: "User limits come from the eCard pricing page (INR, monthly).",
        headers: ["Plan", "Price / month", "Users", "White label & custom domain"],
        rows: [
          ["Free", "₹0", "5", "No"],
          ["Starter", "₹299", "20", "No"],
          ["Professional", "₹999", "100", "No"],
          ["Business", "₹2,999", "Unlimited", "Yes"],
          ["Enterprise", "Custom", "Unlimited", "Yes"],
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "What The Site Does Not Publish",
        body: "eCard’s site names the roles and security features but does not publish a detailed permission matrix, certifications or uptime figures. Check in-app settings or contact sales@bizzfly.com for specifics.",
      },
      {
        type: "steps",
        heading: "A First-week Setup Path For A New Team",
        intro: "A practical sequence many teams follow. Adjust the pace to your size.",
        steps: [
          {
            title: "Day 1: Secure The Owner",
            body: "The owner enables two-factor authentication and stores recovery codes somewhere safe before anyone else is invited."
          },
          {
            title: "Day 2: Invite Admins",
            body: "Add one or two admins, ask them to enable 2FA too, and agree who handles invitations and removals."
          },
          {
            title: "Day 3: Invite The Team",
            body: "Invite everyday users as members; reserve manager for people who actually lead a group."
          },
          {
            title: "Day 4: Connect Secrets",
            body: "Each sender connects their own SMTP mailbox and the workspace adds the AI provider key it will use. eCard states these secrets are encrypted with AES-256-GCM."
          },
          {
            title: "Day 5: Review",
            body: "Open the audit log, confirm the expected invitations and setting changes appear, and fix any role that looks too broad."
          }
        ]
      },
      {
        type: "table",
        heading: "Which Control Answers Which Question",
        headers: [
          "Question",
          "Control to reach for"
        ],
        rows: [
          [
            "Who should be able to see our contacts?",
            "Roles"
          ],
          [
            "What if a password is phished?",
            "Two-factor authentication"
          ],
          [
            "Did someone sign in from somewhere unexpected?",
            "Login alerts and trusted devices"
          ],
          [
            "Who changed this setting?",
            "Audit log"
          ],
          [
            "Will clients see our brand?",
            "White-label and custom domain (Business and Enterprise)"
          ],
          [
            "Are we handling personal data responsibly?",
            "Compliance checklist: consent, export, deletion"
          ]
        ]
      },
      {
        type: "bullets",
        heading: "Common Mistakes When A Team Grows",
        items: [
          "Making everyone an admin so nobody has to ask for help.",
          "Leaving event helpers as full members after the expo ends.",
          "Sharing one login between several people, which makes the audit log meaningless.",
          "Postponing 2FA until after an incident."
        ]
      },
    ],
    faqs: [
      { q: "Which roles does eCard support?", a: "Owner, admin, manager, member and scan-only guest." },
      { q: "Is 2FA available on the Free plan?", a: "2FA is listed under eCard’s team and admin features; the pricing page does not restrict it to a specific plan. Check your account settings to confirm." },
      { q: "Which plan includes white-label?", a: "White label and custom domain are included on Business (₹2,999/month) and Enterprise." },
      { q: "Does every user need their own account?", a: "As general good practice, yes. Individual accounts let roles, 2FA and the audit log work as intended; shared logins undermine all three." },
    ],
    related: [`${B}/roles-and-permissions`, `${B}/two-factor-authentication`, `${B}/audit-logs`, `${B}/white-label`, "pricing/compare-plans"],
    source: "verified",
  },
  {
    slug: `${B}/roles-and-permissions`,
    category: "team",
    title: "Roles & Permissions",
    seoTitle: "Workspace Roles & Permissions In eCard",
    description: "Understand eCard’s five workspace roles (owner, admin, manager, member and scan-only guest) and how to plan least-privilege access for a team.",
    h1: "Five Roles, One Shared Contact Book",
    eyebrow: "Team & Security",
    intro: "eCard offers five roles: owner, admin, manager, member and scan-only guest. Picking the right one for each person keeps your contact data in the right hands.",
    variant: "feature",
    visual: "team",
    icon: "users",
    sections: [
      {
        type: "table",
        heading: "The Five Roles At A Glance",
        intro: "Role names are from ecard.gg. The descriptions are a practical guide to how teams typically use each level, not a published permission matrix.",
        headers: ["Role", "Typical fit"],
        rows: [
          ["Owner", "The person accountable for the workspace and its billing"],
          ["Admin", "Trusted operators who help manage people and settings"],
          ["Manager", "Team leads who coordinate a group’s contacts and follow-ups"],
          ["Member", "Everyday users who scan, organise and follow up"],
          ["Scan-only guest", "Temporary helpers, such as event staff, who only need to scan"],
        ],
      },
      {
        type: "prose",
        heading: "Least Privilege, In Plain Terms",
        paragraphs: [
          "The principle of least privilege says each person should have only the access they need to do their job. In a card CRM, that usually means most people are members, a few are managers or admins, and there is exactly one owner.",
          "Guests are the easiest place to reduce risk. Someone helping at an expo booth for two days does not need to browse your whole contact history; the scan-only guest role exists for exactly that situation.",
        ],
      },
      {
        type: "steps",
        heading: "Planning Roles For A New Workspace",
        steps: [
          { title: "Name The Owner", body: "Choose one accountable person, ideally with a company email address rather than a personal one." },
          { title: "Pick One Or Two Admins", body: "Enough to cover holidays, but not so many that nobody feels responsible." },
          { title: "Default Everyone Else To Member", body: "Promote to manager only when someone leads a group." },
          { title: "Use Guests For Short-term Help", body: "Remove guests once the event or project ends." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Check Exact Permissions In The App",
        body: "eCard’s public site lists the role names but not exactly which actions each role can perform. Review the role descriptions in your workspace before assigning them.",
      },
      {
        type: "bullets",
        heading: "Review Roles Regularly",
        items: [
          "Remove people who have left the team.",
          "Downgrade admins who no longer need settings access.",
          "Check the audit log after role changes.",
          "Revisit roles whenever you change plan or team size.",
        ],
      },
      {
        type: "table",
        heading: "Sample Role Plan For A 12-person Team",
        intro: "Visibly fictional example to show the shape of a least-privilege plan.",
        headers: [
          "Person (sample)",
          "Role",
          "Reason"
        ],
        rows: [
          [
            "Sample: Founder",
            "Owner",
            "Accountable for billing and the workspace"
          ],
          [
            "Sample: Operations lead",
            "Admin",
            "Covers people and settings when the owner is away"
          ],
          [
            "Sample: Two sales leads",
            "Manager",
            "Coordinate their groups’ follow-ups"
          ],
          [
            "Sample: Seven sales reps",
            "Member",
            "Scan, organise and follow up daily"
          ],
          [
            "Sample: One expo temp",
            "Scan-only guest",
            "Only needs to capture cards at the booth"
          ]
        ]
      },
      {
        type: "bullets",
        heading: "Signals That A Role Is Wrong",
        items: [
          "Someone regularly asks an admin to do one routine task for them: consider whether a higher role is justified, or whether the task should stay centralised.",
          "An admin has not changed a setting in months: they may only need member or manager access.",
          "A guest is still active weeks after the event: remove them.",
          "Two people both believe they are responsible for billing: clarify who the owner is."
        ]
      },
    ],
    faqs: [
      { q: "How many owners can a workspace have?", a: "eCard’s site does not state this. Most teams keep a single, clearly accountable owner." },
      { q: "Can I give someone scan-only access?", a: "Yes. eCard lists a scan-only guest role." },
      { q: "Should I start people on a higher role and reduce it later?", a: "Generally no. It is easier and safer to start with the lowest role that works and promote when there is a clear need." },
      { q: "Where do I see exactly what each role can do?", a: "eCard’s public site lists the role names only. The role descriptions inside your workspace are the authoritative reference." },
    ],
    related: [`${B}/owner-role`, `${B}/admin-role`, `${B}/scan-only-guests`, "resources/guides/inviting-your-team"],
    source: "mixed",
  },
  {
    slug: `${B}/owner-role`,
    category: "team",
    title: "Owner Role",
    seoTitle: "The Owner Role In An eCard Workspace",
    description: "The owner is the top role in an eCard workspace. Learn who should hold it, how to protect the account and what to plan for when people change jobs.",
    h1: "The Owner: Accountable For The Whole Workspace",
    eyebrow: "Roles",
    intro: "Owner is the first of eCard’s five roles. Whoever holds it should be the person accountable for the workspace, its data and its subscription.",
    variant: "feature",
    visual: "team",
    icon: "key",
    sections: [
      {
        type: "split",
        heading: "Who Should Be The Owner",
        body: [
          "Pick the person who answers for the workspace if something goes wrong, such as a founder, a sales head or an operations lead. For a solo user that is simply you.",
          "Use a company mailbox you control long-term. If the owner signs up with a personal address and then leaves, recovering control becomes harder.",
        ],
        points: ["Accountable for data", "Uses a long-lived company email", "Protected by 2FA", "Has a documented backup admin"],
      },
      {
        type: "steps",
        heading: "Protecting The Owner Account",
        steps: [
          { title: "Turn On 2FA", body: "eCard supports authenticator-app codes. Enable them first." },
          { title: "Store Recovery Codes", body: "Keep them in a password manager or a sealed, offline place." },
          { title: "Watch Login Alerts", body: "eCard sends login alerts; treat an unexpected one as a reason to change your password." },
          { title: "Limit Trusted Devices", body: "Only mark devices you personally control as trusted." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Plan For Handover",
        body: "Write down who takes over if the owner leaves. eCard’s site does not document an ownership-transfer flow, so check in-app settings or contact support before you need it.",
      },
      {
        type: "bullets",
        heading: "Things Owners Usually Look After",
        intro: "General good practice, rather than a list of eCard-specific owner-only actions:",
        items: [
          "Choosing and paying for the plan.",
          "Deciding who is admin.",
          "Approving white-label branding on Business plans.",
          "Reviewing the compliance checklist for consent, export and deletion.",
        ],
      },
      {
        type: "bullets",
        heading: "Owner Responsibilities Checklist",
        items: [
          "Keep 2FA enabled and recovery codes stored offline.",
          "Choose the plan and keep billing details current (subscriptions are paid via Razorpay·UPI or Stripe).",
          "Appoint at least one admin as backup.",
          "Review roles and the audit log on a regular schedule.",
          "Decide who may add AI provider keys and connect integrations."
        ]
      },
      {
        type: "prose",
        heading: "When The Owner Is A Single Point Of Failure",
        paragraphs: [
          "If only one person can manage the workspace and they are unreachable, routine tasks such as removing a departing employee can stall. Appointing a trusted admin reduces that risk without sharing the owner’s login.",
          "Never share the owner’s password or recovery codes with colleagues. If someone else needs to act, give them an appropriate role instead, so the audit log shows who did what."
        ]
      },
      {
        type: "steps",
        heading: "If The Owner Is Leaving The Company",
        steps: [
          {
            title: "Plan The Handover Early",
            body: "Identify the successor and confirm they have their own account with 2FA."
          },
          {
            title: "Check How Ownership Changes",
            body: "eCard’s site does not document ownership transfer, so ask support before the last day."
          },
          {
            title: "Review Secrets",
            body: "Rotate any API keys or SMTP passwords the departing owner set up personally."
          }
        ]
      },
      {
        type: "prose",
        heading: "Owner And The Plan",
        paragraphs: [
          "Plan choice affects how many users the workspace supports, from 5 on Free to unlimited on Business and Enterprise, and whether white-label and custom domains are available. The owner should revisit the plan as the team grows."
        ]
      },
      {
        type: "prose",
        heading: "Owner And Integrations",
        paragraphs: [
          "The owner should know which integrations are connected, such as Telegram, Google Contacts or webhooks on Professional and above, and who connected them, so nothing important is tied to a single person’s account."
        ]
      },
    ],
    faqs: [
      { q: "Should the owner use 2FA?", a: "Yes. The owner account is the most valuable to protect, and eCard supports authenticator-based 2FA." },
      { q: "Can ownership be transferred?", a: "eCard’s site does not document this. Check your workspace settings or ask support." },
      { q: "Should the owner use a personal email address?", a: "As general guidance, a company address is better, because it stays with the organisation if the person leaves." },
    ],
    related: [`${B}/roles-and-permissions`, `${B}/admin-role`, `${B}/two-factor-authentication`, `${B}/recovery-codes`],
    source: "mixed",
  },
  {
    slug: `${B}/admin-role`,
    category: "team",
    title: "Admin Role",
    seoTitle: "Admin Role: Running An eCard Workspace Day To Day",
    description: "Admins help the owner run an eCard workspace. See who to make admin, how many you need and the habits that keep a shared card CRM tidy and secure.",
    h1: "Admins Keep The Workspace Running",
    eyebrow: "Roles",
    intro: "Admin is the second of eCard’s five roles. Admins are the trusted operators who help the owner manage people and settings.",
    variant: "feature",
    visual: "team",
    icon: "settings",
    sections: [
      {
        type: "prose",
        heading: "Why Have Admins At All",
        paragraphs: [
          "A single owner becomes a bottleneck. When someone new joins, a card import needs cleaning or a guest has to be removed after an event, it helps to have one or two people who can act without waiting.",
          "Admin access is powerful, so it should go to people who are both trusted and active in the workspace. Two admins is enough for most small teams.",
        ],
      },
      {
        type: "cards",
        heading: "Common Admin Responsibilities",
        intro: "Typical duties in a shared CRM. Confirm in-app which settings your admin role can change.",
        cards: [
          { title: "People", body: "Inviting teammates and removing leavers promptly.", icon: "users" },
          { title: "Data Hygiene", body: "Merging duplicates, archiving old contacts and keeping the blacklist current.", icon: "merge" },
          { title: "Security Review", body: "Checking the audit log and nudging people to enable 2FA.", icon: "shield" },
          { title: "Imports", body: "Running CSV imports and bulk exports carefully.", icon: "upload" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Admins And Secrets",
        body: "eCard encrypts API keys and SMTP passwords with AES-256-GCM. Even so, only share these credentials with the people who need to configure them.",
      },
      {
        type: "bullets",
        heading: "Admin Checklist Each Month",
        items: [
          "Remove inactive users and expired guests.",
          "Scan the audit log for unexpected changes.",
          "Confirm everyone with admin access still needs it.",
          "Check that sending mailboxes still work.",
        ],
      },
      {
        type: "table",
        heading: "Admin Vs Owner Vs Manager: A Practical Split",
        intro: "A common division of work. Confirm actual permissions in your workspace.",
        headers: [
          "Task",
          "Who typically handles it"
        ],
        rows: [
          [
            "Choosing and paying for the plan",
            "Owner"
          ],
          [
            "Inviting and removing teammates",
            "Admin (or owner)"
          ],
          [
            "Reviewing the audit log",
            "Admin and owner"
          ],
          [
            "Coordinating a group’s follow-ups",
            "Manager"
          ],
          [
            "Daily scanning and outreach",
            "Member"
          ]
        ]
      },
      {
        type: "bullets",
        heading: "Admin Habits That Keep A Workspace Healthy",
        items: [
          "Remove leavers on their last day, not at the end of the month.",
          "Check that new users have turned on 2FA within their first week.",
          "Remove scan-only guests after each event.",
          "Watch the audit log after any bulk import or export.",
          "Keep a short written note of who holds which role and why."
        ]
      },
      {
        type: "prose",
        heading: "Protecting The Admin Account Itself",
        paragraphs: [
          "Admin accounts are attractive to attackers because they can change other people’s access. Use an authenticator app for 2FA, keep login alerts on, and avoid trusting shared or public devices."
        ]
      },
      {
        type: "prose",
        heading: "Sample: Covering For The Owner",
        paragraphs: [
          "Sample: the owner of a fictional consultancy is travelling during a trade show. A new hire needs access, and a departing contractor must be removed. Because an admin was appointed in advance, both changes happen the same day and appear in the audit log, with no shared passwords involved."
        ]
      },
      {
        type: "bullets",
        heading: "Admin Pitfalls",
        items: [
          "Granting admin to fix a one-off problem and never removing it.",
          "Using an admin account for everyday scanning on a shared device.",
          "Making role changes without telling the person affected.",
          "Skipping the audit log after large imports."
        ]
      },
    ],
    faqs: [
      { q: "How many admins should we have?", a: "As general guidance, one or two for small teams; enough to cover absences without spreading access too widely." },
      { q: "Does eCard publish what admins can do?", a: "The site names the admin role but does not list its exact permissions. Check in-app." },
      { q: "Can an admin remove the owner?", a: "eCard’s site does not say. Treat owner changes as something to confirm with support." },
      { q: "Should admins also be active users?", a: "Usually yes. Admins who use eCard daily notice problems sooner. Just make sure their admin account has 2FA on." },
    ],
    related: [`${B}/owner-role`, `${B}/manager-role`, `${B}/audit-logs`, `${B}/roles-and-permissions`],
    source: "mixed",
  },
  {
    slug: `${B}/manager-role`,
    category: "team",
    title: "Manager Role",
    seoTitle: "Manager Role For Team Leads In eCard",
    description: "The manager role in eCard suits team leads coordinating contacts and follow-ups. Learn how sales and event leads can use it without full admin rights.",
    h1: "A Role For Team Leads",
    eyebrow: "Roles",
    intro: "Manager sits between admin and member in eCard’s list of roles. It fits people who lead a group, such as a regional sales lead or an event coordinator.",
    variant: "feature",
    visual: "team",
    icon: "briefcase",
    sections: [
      {
        type: "split",
        heading: "When To Make Someone A Manager",
        body: [
          "Promote someone to manager when they are responsible for other people’s follow-ups, not just their own. A lead running a trade-show booth with four colleagues is a good example.",
          "Keeping leads at manager rather than admin limits how many people can change workspace-wide settings.",
        ],
        points: ["Leads a sales pod", "Runs an event team", "Owns a region or account list", "Does not need billing access"],
      },
      {
        type: "steps",
        heading: "A Manager’s Week, As An Example",
        intro: "Sample routine for a fictional lead, Sample: Arjun Mehta, Sales Manager.",
        steps: [
          { title: "Monday", body: "Search contacts with natural language, such as \"buyers I met in Pune last week\", and assign follow-ups." },
          { title: "Midweek", body: "Check which digital cards and brochures were opened using link tracking." },
          { title: "Friday", body: "Review meeting notes and make sure each new contact has a next step." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Permissions Not Published",
        body: "eCard’s site does not detail what managers can do compared with members or admins. Check the role description in your workspace.",
      },
      {
        type: "bullets",
        heading: "Good Manager Habits",
        items: [
          "Tag contacts by event so the team can follow up with the room.",
          "Agree on follow-up timing, for example within 24 hours of a meeting.",
          "Flag duplicates to an admin rather than ignoring them.",
        ],
      },
      {
        type: "prose",
        heading: "A Day In The Life Of A Manager (Sample)",
        paragraphs: [
          "Sample: Arjun Mehta leads a five-person field sales group. Each morning he reviews the contacts his team scanned the day before, checks tags and events are applied consistently, and nudges anyone whose follow-ups are slipping.",
          "He does not need to manage billing or workspace settings, which is why manager rather than admin fits: coordination without control over the whole workspace."
        ]
      },
      {
        type: "bullets",
        heading: "When To Promote A Member To Manager",
        items: [
          "They lead a group whose contacts and follow-ups need coordinating.",
          "They run event teams and need to keep a booth’s scans organised.",
          "They mentor new members on tagging and follow-up habits."
        ]
      },
      {
        type: "bullets",
        heading: "When Not To",
        items: [
          "As a reward or title change with no change in responsibility.",
          "To work around a permission an admin should handle centrally.",
          "For someone leaving the team soon."
        ]
      },
      {
        type: "steps",
        heading: "Manager Weekly Routine",
        steps: [
          {
            title: "Check Tags",
            body: "Make sure the group uses the same tags and event names so filters work."
          },
          {
            title: "Look For Duplicates",
            body: "Merge or clean up repeated contacts using eCard’s clean-data tools."
          },
          {
            title: "Review Follow-ups",
            body: "Identify contacts who were scanned but never contacted."
          }
        ]
      },
      {
        type: "prose",
        heading: "Managers At Events",
        paragraphs: [
          "At expos, managers often act as the booth lead: briefing scan-only guests, checking scans during quiet moments and making sure every contact gets a follow-up owner before the team packs up."
        ]
      },
      {
        type: "bullets",
        heading: "Manager Pitfalls",
        items: [
          "Creating new tags without agreeing them with other groups.",
          "Letting follow-ups pile up after big events.",
          "Treating the role as a route to settings changes that belong with admins.",
          "Forgetting to brief scan-only guests on note-taking."
        ]
      },
    ],
    faqs: [
      { q: "Is manager the same as admin?", a: "No. eCard lists them as separate roles. Exact differences are shown in-app." },
      { q: "Can a manager also scan cards?", a: "eCard does not publish a per-role matrix; scanning is a core feature, so check your workspace’s role settings." },
      { q: "How many managers does a team need?", a: "As a rule of thumb, one per group that genuinely needs coordinating. Small teams often need none." },
    ],
    related: [`${B}/member-role`, `${B}/admin-role`, "features/events-expos", `${B}/roles-and-permissions`],
    source: "mixed",
  },
  {
    slug: `${B}/member-role`,
    category: "team",
    title: "Member Role",
    seoTitle: "Member Role: Everyday Users Of eCard",
    description: "Members are the everyday users of an eCard workspace who scan cards and follow up. Learn why member should be the default role for most of your team.",
    h1: "Members Do The Everyday Work",
    eyebrow: "Roles",
    intro: "Member is the standard role in eCard for people who scan cards, keep notes and follow up with the contacts they meet.",
    variant: "feature",
    visual: "team",
    icon: "users",
    sections: [
      {
        type: "prose",
        heading: "Make Member The Default",
        paragraphs: [
          "When you invite someone and are not sure which role to give them, member is usually the right answer. It suits salespeople, consultants and anyone else whose job is to meet people and follow up.",
          "You can always promote someone later. Starting low and raising access when there is a clear need is safer than the reverse.",
        ],
      },
      {
        type: "cards",
        heading: "What Members Typically Use",
        intro: "These are eCard’s base features, available on every plan. Your workspace’s role settings decide the exact access.",
        cards: [
          { title: "AI Scanning", body: "Read a card with the AI model your workspace chose and review each field before saving.", icon: "scan" },
          { title: "Intro Emails", body: "Preview an AI draft that sends after 5 seconds from your own SMTP, with edit or cancel.", icon: "mail" },
          { title: "WhatsApp", body: "AI-written messages in English, Hindi or Marathi, opened in one tap.", icon: "message" },
          { title: "Digital Card", body: "A personal card with QR code and Save-to-contacts.", icon: "card" },
        ],
      },
      {
        type: "steps",
        heading: "A Member’s First Day",
        steps: [
          { title: "Accept The Invite", body: "Sign in at ecard.gg and set a strong password." },
          { title: "Enable 2FA", body: "Add an authenticator app and save recovery codes." },
          { title: "Scan A Card", body: "Check the confidence score on each field before saving." },
          { title: "Link Telegram", body: "Optional: use the one-time code from Settings → Telegram to scan by photo." },
        ],
      },
      {
        type: "steps",
        heading: "A Member’s Typical Card-to-follow-up Flow",
        steps: [
          {
            title: "Scan",
            body: "Capture the card in the phone browser or through the Telegram bot (linked with a one-time code from Settings → Telegram)."
          },
          {
            title: "Check The Fields",
            body: "The AI model reads the card; glance at the name, number and email before saving."
          },
          {
            title: "Tag And Add Context",
            body: "Add an event, tags and a note or voice note while the conversation is fresh."
          },
          {
            title: "Follow Up",
            body: "Send an intro email from your own mailbox or a WhatsApp message."
          }
        ]
      },
      {
        type: "bullets",
        heading: "Good Habits For Members",
        items: [
          "Use the team’s agreed tag and event names.",
          "Add a short note on why the contact matters.",
          "Do not export contacts to personal spreadsheets without approval.",
          "Turn on 2FA and keep login alerts on.",
          "Tell an admin if you lose a device that was trusted."
        ]
      },
      {
        type: "prose",
        heading: "What Members Usually Do Not Need",
        paragraphs: [
          "Members rarely need to change workspace settings, manage billing or invite others. Keeping those tasks with admins and the owner means fewer people can make changes that affect everyone."
        ]
      },
      {
        type: "prose",
        heading: "Sample: A Member After An Expo",
        paragraphs: [
          "Sample: Priya Shah, a fictional sales rep, scans 40 cards over two days. Each evening she adds notes while memories are fresh, and the next morning she sends intro emails from her own mailbox to the most promising contacts."
        ]
      },
      {
        type: "prose",
        heading: "When Something Goes Wrong",
        paragraphs: [
          "If a scan is misread, fix the fields straight away. If you lose a device or see an unexpected login alert, tell an admin immediately; quick reporting matters more than knowing the cause."
        ]
      },
    ],
    faqs: [
      { q: "Do members count towards the user limit?", a: "Plans list a number of users (5 on Free up to Unlimited on Business). eCard does not state how each role is counted; check in-app." },
      { q: "Can members use the Telegram bot?", a: "The Telegram bot is part of eCard’s base feature set. Each user links it with a one-time code from Settings → Telegram." },
      { q: "Can a member be promoted later?", a: "Roles are meant to be assigned per person, so changing them as responsibilities change is normal. Check your workspace for how to do it." },
    ],
    related: [`${B}/manager-role`, `${B}/onboarding-your-team`, "resources/guides/your-first-scan", "resources/guides/connecting-telegram"],
    source: "mixed",
  },
  {
    slug: `${B}/scan-only-guests`,
    category: "team",
    title: "Scan-Only Guests",
    seoTitle: "Scan-Only Guest Access For Event Helpers",
    description: "eCard’s scan-only guest role lets temporary helpers capture visiting cards at events without browsing your full contact list. Here’s how to use it well.",
    h1: "Let Helpers Scan Without Seeing Everything",
    eyebrow: "Roles",
    intro: "eCard includes a scan-only guest role. It is designed for people who should capture cards for you but do not need the rest of your workspace.",
    variant: "feature",
    visual: "scan",
    icon: "eye",
    sections: [
      {
        type: "cards",
        heading: "Who Scan-only Guests Are For",
        cards: [
          { title: "Booth Staff", body: "Temporary staff collecting cards at a trade show.", icon: "building" },
          { title: "Interns", body: "Helpers digitising a backlog of paper cards.", icon: "archive" },
          { title: "Partners", body: "A distributor capturing leads on your behalf at a joint event.", icon: "users" },
        ],
      },
      {
        type: "steps",
        heading: "Running An Event With Guests",
        steps: [
          { title: "Create An Event", body: "Group cards from the show so the team can follow up with everyone at once." },
          { title: "Invite Guests", body: "Give each helper the scan-only guest role." },
          { title: "Scan At The Booth", body: "Helpers scan in the phone browser; no app to install." },
          { title: "Review And Follow Up", body: "Members review the extracted fields and send follow-ups." },
          { title: "Remove Guests", body: "Take access away when the event ends." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Review Still Matters",
        body: "In eCard nothing from a scan is saved until it is reviewed, and each field has a confidence score. Decide who on your team does that review after a busy day of guest scanning.",
      },
      {
        type: "prose",
        heading: "Why Limited Access Is Worth The Effort",
        paragraphs: [
          "Event helpers often use their own phones and may not be long-term staff. Giving them a narrow role reduces the chance that your whole contact list ends up somewhere it should not.",
          "eCard’s site does not list exactly what a guest can see after scanning. Test the role with a sample card before the event so there are no surprises.",
        ],
      },
      {
        type: "steps",
        heading: "Running An Expo Booth With Guests",
        steps: [
          {
            title: "Before The Event",
            body: "Decide which helpers need access and invite them as scan-only guests; agree the event name to use."
          },
          {
            title: "Brief The Helpers",
            body: "Show them how to scan in the phone browser and how to add a quick note about each visitor."
          },
          {
            title: "During The Event",
            body: "A member or manager checks scans periodically for blurry images or missing fields."
          },
          {
            title: "After The Event",
            body: "Remove guest access the same day and hand contacts to the right members for follow-up."
          }
        ]
      },
      {
        type: "table",
        heading: "Guest Or Member?",
        headers: [
          "Situation",
          "Better fit"
        ],
        rows: [
          [
            "Temporary booth staff for two days",
            "Scan-only guest"
          ],
          [
            "Agency partner collecting cards for you",
            "Scan-only guest"
          ],
          [
            "New hire on their first week",
            "Member"
          ],
          [
            "Someone who will send follow-ups",
            "Member"
          ]
        ]
      },
      {
        type: "bullets",
        heading: "Guest Pitfalls",
        items: [
          "Forgetting to remove guests after the event.",
          "Sharing one guest login among several helpers.",
          "Letting guests use personal devices without a screen lock."
        ]
      },
      {
        type: "prose",
        heading: "Why Scan-only Access Reduces Risk",
        paragraphs: [
          "Temporary helpers are often hired at short notice and may use their own phones. Limiting them to scanning means that if a device is lost or a helper leaves on bad terms, your wider contact history is not exposed through their account.",
          "It also keeps the contact book cleaner: guests add cards, and members who understand the context decide how to follow up."
        ]
      },
      {
        type: "bullets",
        heading: "Briefing Card For Booth Helpers (Sample)",
        items: [
          "Scan every card, even if the conversation was short.",
          "Add one line about what the visitor wanted.",
          "Use the agreed event name exactly.",
          "Ask a member if anything looks wrong after scanning."
        ]
      },
    ],
    faqs: [
      { q: "Do guests need to install an app?", a: "No. eCard works in any phone browser." },
      { q: "Do guests count towards my plan’s user limit?", a: "eCard’s site does not say. Check your workspace or contact sales@bizzfly.com." },
      { q: "Can a guest send follow-up emails?", a: "The role is described as scan-only, so plan for members to handle follow-ups. Confirm exact permissions in-app." },
    ],
    related: ["features/events-expos", `${B}/roles-and-permissions`, "mobile/scan-from-your-phone", "resources/guides/trade-show-playbook"],
    source: "mixed",
  },
  {
    slug: `${B}/two-factor-authentication`,
    category: "team",
    title: "Two-Factor Authentication",
    seoTitle: "Two-Factor Authentication (2FA) In eCard",
    description: "eCard supports 2FA with authenticator-app codes, recovery codes and trusted devices. Learn how 2FA works and why every team member should turn it on.",
    h1: "Protect Sign-ins With Authenticator Codes",
    eyebrow: "Security",
    intro: "eCard supports two-factor authentication using codes from an authenticator app, backed up by recovery codes, trusted devices and login alerts.",
    variant: "feature",
    visual: "security",
    icon: "key",
    sections: [
      {
        type: "prose",
        heading: "What 2FA Is",
        paragraphs: [
          "Two-factor authentication asks for something you know (your password) and something you have (your phone with an authenticator app). Even if a password is guessed or leaked, an attacker still needs the code from your device.",
          "Authenticator apps generate a new six-digit code every 30 seconds or so, based on a secret shared when you set up 2FA. They work offline and are generally considered stronger than SMS codes.",
        ],
      },
      {
        type: "steps",
        heading: "Setting It Up, In General Terms",
        intro: "The exact screens are in your eCard account settings; a step-by-step guide is in our resources.",
        steps: [
          { title: "Install An Authenticator App", body: "Any standard TOTP authenticator app on your phone." },
          { title: "Scan The Setup Code", body: "Add eCard to the app from your account’s security settings." },
          { title: "Confirm With A Code", body: "Enter the current code to finish setup." },
          { title: "Save Recovery Codes", body: "Store them somewhere safe in case you lose your phone." },
        ],
      },
      {
        type: "table",
        heading: "eCard’s Sign-in Protections",
        headers: ["Feature", "What it does"],
        rows: [
          ["Authenticator codes", "Second factor at sign-in"],
          ["Recovery codes", "Backup access if your phone is lost"],
          ["Trusted devices", "Fewer prompts on devices you control"],
          ["Login alerts", "Notice when your account is signed in to"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start With The Owner And Admins",
        body: "If you roll out 2FA in stages, protect the accounts with the most access first.",
      },
      {
        type: "steps",
        heading: "Enabling 2FA, Step By Step (General Flow)",
        intro: "The exact screens are in-app; this is the typical shape of authenticator-based 2FA.",
        steps: [
          {
            title: "Install An Authenticator App",
            body: "Any standard TOTP authenticator works in principle; pick one your team is comfortable with."
          },
          {
            title: "Start Setup In Your Account",
            body: "You will typically be shown a code or QR to add to the authenticator."
          },
          {
            title: "Confirm With A Code",
            body: "Enter the code the app generates to prove setup worked."
          },
          {
            title: "Save Recovery Codes",
            body: "Store them offline, separate from your phone."
          }
        ]
      },
      {
        type: "bullets",
        heading: "Rollout Plan For A Team",
        items: [
          "Owner and admins first, the same day.",
          "Managers and members within their first week.",
          "Remind people who have not enabled it; check during role reviews.",
          "Include 2FA setup in onboarding for every new hire."
        ]
      },
      {
        type: "prose",
        heading: "Why Authenticator Codes Beat Passwords Alone",
        paragraphs: [
          "Passwords get reused, phished and leaked. An authenticator code changes frequently and lives on a device the attacker does not have, so a stolen password alone is not enough to sign in."
        ]
      },
      {
        type: "bullets",
        heading: "Choosing An Authenticator App",
        items: [
          "Pick a well-known app from your phone’s official app store.",
          "Check whether it supports secure backup or transfer to a new phone.",
          "Lock your phone with a PIN or biometric so the codes are protected."
        ]
      },
      {
        type: "prose",
        heading: "Changing Phones Without Losing Access",
        paragraphs: [
          "Before wiping or trading in a phone, check whether your authenticator app can move codes to the new device. If not, sign in on the new phone first, set up 2FA again, and only then reset the old one. Keep recovery codes handy throughout."
        ]
      },
    ],
    faqs: [
      { q: "Does eCard support SMS codes?", a: "eCard’s site mentions authenticator codes. It does not mention SMS." },
      { q: "What if I lose my phone?", a: "Use one of your recovery codes to sign in, then set up 2FA again on a new device." },
      { q: "Can admins require 2FA for everyone?", a: "eCard’s site does not say whether 2FA can be enforced workspace-wide. Check in-app." },
      { q: "Do I need 2FA if I use a strong password?", a: "Yes, ideally. Strong passwords can still be phished or leaked; 2FA adds a second, separate check." },
    ],
    related: ["resources/guides/enabling-2fa", `${B}/recovery-codes`, `${B}/trusted-devices`, `${B}/login-alerts`],
    source: "mixed",
  },
  {
    slug: `${B}/login-alerts`,
    category: "team",
    title: "Login Alerts",
    seoTitle: "Login Alerts: Know When Your Account Is Used",
    description: "eCard sends login alerts so you can spot unexpected sign-ins. Learn what to do when an alert looks wrong and how alerts fit with 2FA and trusted devices.",
    h1: "Know When Someone Signs In",
    eyebrow: "Security",
    intro: "Login alerts are one of eCard’s sign-in protections. They tell you when your account has been signed in to, so an unexpected sign-in does not go unnoticed.",
    variant: "feature",
    visual: "security",
    icon: "bell",
    sections: [
      {
        type: "split",
        heading: "Why Alerts Help",
        body: [
          "Most account takeovers are quiet. An alert turns a silent event into something you can react to within minutes rather than weeks.",
          "Alerts work best alongside 2FA: 2FA makes a takeover hard, and alerts tell you if someone tried anyway.",
        ],
        points: ["Spot unfamiliar sign-ins quickly", "Pairs with 2FA", "Useful for shared-device situations", "Prompts a timely password change"],
      },
      {
        type: "steps",
        heading: "If An Alert Looks Wrong",
        steps: [
          { title: "Do Not Ignore It", body: "Treat an unrecognised sign-in as real until proven otherwise." },
          { title: "Change Your Password", body: "Use the forgot-password flow if you cannot sign in." },
          { title: "Check 2FA", body: "Make sure 2FA is on and review your trusted devices." },
          { title: "Tell An Admin", body: "They can check the workspace audit log for unusual activity." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Alert Details",
        body: "eCard’s site lists login alerts but does not specify the delivery channel or the details included. Look at the alert itself or your account settings.",
      },
      {
        type: "bullets",
        heading: "Common Harmless Causes",
        items: [
          "Signing in from a new browser or a cleared browser.",
          "Using a colleague’s laptop at an event.",
          "Travelling and connecting from a new network.",
        ],
      },
      {
        type: "steps",
        heading: "What To Do When You Get An Unexpected Alert",
        steps: [
          {
            title: "Do Not Ignore It",
            body: "Assume it is real until you can explain it."
          },
          {
            title: "Change Your Password",
            body: "Use a new, unique password."
          },
          {
            title: "Check 2FA And Devices",
            body: "Make sure 2FA is still on and review trusted devices."
          },
          {
            title: "Tell An Admin",
            body: "They can review the audit log for unusual actions."
          }
        ]
      },
      {
        type: "table",
        heading: "Reading An Alert",
        headers: [
          "Alert looks like",
          "Likely explanation",
          "Action"
        ],
        rows: [
          [
            "You, on your usual phone",
            "Normal sign-in",
            "None"
          ],
          [
            "You, on a new laptop you just set up",
            "Expected new device",
            "None, if you recognise it"
          ],
          [
            "A device or time you do not recognise",
            "Possible unauthorised access",
            "Follow the steps above"
          ]
        ]
      },
      {
        type: "bullets",
        heading: "Making Alerts Useful",
        items: [
          "Use an email address you actually read.",
          "Filter alerts into an inbox folder you check, not a spam-like archive.",
          "Teach the team that reporting a false alarm is always fine."
        ]
      },
      {
        type: "prose",
        heading: "How Alerts Fit With Other Controls",
        paragraphs: [
          "Login alerts are a detection tool. Two-factor authentication makes unauthorised sign-in harder; alerts tell you when a sign-in happens; the audit log shows what was done afterwards. Together they cover prevention, detection and investigation.",
          "For admins and owners, an alert you cannot explain deserves urgent attention, because those accounts can change other people’s access."
        ]
      },
      {
        type: "bullets",
        heading: "Sample Alert Scenario",
        items: [
          "Sample: Neha, a member, receives an alert while she is asleep.",
          "She does not recognise the device, so she changes her password first thing in the morning.",
          "She checks that 2FA is still on and removes an old trusted device.",
          "Her admin reviews the audit log and finds no unusual activity, but notes the incident."
        ]
      },
      {
        type: "prose",
        heading: "Alerts And Shared Devices",
        paragraphs: [
          "If you see alerts every time you sign in on a booth tablet, that is a sign the device is being used in a way it should not be. Use individual accounts and avoid signing in on shared hardware where possible."
        ]
      },
    ],
    faqs: [
      { q: "Can I turn login alerts off?", a: "eCard’s site does not say. We recommend keeping them on." },
      { q: "Are login alerts a replacement for 2FA?", a: "No. Alerts tell you about a sign-in; 2FA helps prevent unauthorised ones." },
      { q: "Will I get an alert every time I sign in?", a: "eCard’s site does not describe alert frequency. Treat any alert you cannot explain as worth investigating." },
    ],
    related: [`${B}/two-factor-authentication`, `${B}/trusted-devices`, "help/password-reset", `${B}/audit-logs`],
    source: "mixed",
  },
  {
    slug: `${B}/trusted-devices`,
    category: "team",
    title: "Trusted Devices",
    seoTitle: "Trusted Devices And Fewer 2FA Prompts",
    description: "Mark devices you control as trusted in eCard to reduce repeat 2FA prompts. Learn when to trust a device and when to avoid it, especially at events.",
    h1: "Trust The Devices You Own, Not The Ones You Borrow",
    eyebrow: "Security",
    intro: "eCard’s 2FA includes trusted devices, so a laptop or phone you control does not need to ask for a code every time.",
    variant: "feature",
    visual: "security",
    icon: "smartphone",
    sections: [
      {
        type: "table",
        heading: "Trust Or Don’t Trust?",
        headers: ["Device", "Trust it?", "Why"],
        rows: [
          ["Your personal work laptop", "Yes", "Only you use it and it is locked"],
          ["Your phone with a screen lock", "Yes", "Usually with you and protected"],
          ["A shared booth tablet", "No", "Several people may use it"],
          ["A hotel or café computer", "No", "You do not control it"],
          ["A colleague’s phone", "No", "Sign out when you are done"],
        ],
      },
      {
        type: "prose",
        heading: "The Trade-off",
        paragraphs: [
          "Trusted devices make 2FA less annoying, which helps people keep it turned on. The cost is that anyone who gets hold of that device may skip the second factor.",
          "That is why the rule of thumb is simple: trust only devices that you alone use and that are protected by a screen lock.",
        ],
      },
      {
        type: "bullets",
        heading: "Housekeeping",
        items: [
          "Review your trusted devices when you replace a phone or laptop.",
          "Remove trust from devices you have sold or lost.",
          "If a login alert surprises you, review the list immediately.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Duration Not Published",
        body: "eCard’s site does not state how long a device stays trusted. Check your account’s security settings.",
      },
      {
        type: "table",
        heading: "Should This Device Be Trusted?",
        headers: [
          "Device",
          "Trust it?"
        ],
        rows: [
          [
            "Your own phone with a screen lock",
            "Usually yes"
          ],
          [
            "Your company laptop",
            "Usually yes"
          ],
          [
            "A shared booth tablet",
            "No"
          ],
          [
            "A hotel or business-centre computer",
            "No"
          ],
          [
            "A family member’s device",
            "No"
          ]
        ]
      },
      {
        type: "bullets",
        heading: "Device Hygiene For Card Scanning",
        items: [
          "Keep a screen lock on any phone used to scan cards.",
          "Keep the browser and operating system up to date.",
          "Sign out of eCard on devices you return or sell.",
          "Review your trusted devices after travel or events."
        ]
      },
      {
        type: "prose",
        heading: "When A Trusted Device Is Lost",
        paragraphs: [
          "Change your password, review trusted devices in your settings, and tell an admin. If you were using the device for 2FA, sign in with a recovery code and set up your authenticator again on a new device."
        ]
      },
      {
        type: "prose",
        heading: "What Trusting A Device Usually Means",
        paragraphs: [
          "In most services, marking a device as trusted means it is remembered after you sign in, so you are challenged less often on it. That convenience is exactly why it should only be used on devices you alone control.",
          "eCard lists trusted devices as part of its security features; check your settings in-app for how long trust lasts and how to remove a device."
        ]
      },
      {
        type: "steps",
        heading: "After An Expo Or Trip",
        steps: [
          {
            title: "Open Your Security Settings",
            body: "Look at the list of trusted devices."
          },
          {
            title: "Remove Anything Unfamiliar",
            body: "Including devices you only used once."
          },
          {
            title: "Report Concerns",
            body: "Tell an admin if you see a device you do not recognise."
          }
        ]
      },
      {
        type: "prose",
        heading: "Trusted Devices For Admins And Owners",
        paragraphs: [
          "Accounts that can change other people’s access deserve the strictest device rules. Owners and admins should trust only devices they personally control and keep locked, review the list after travel, and never trust a device at a hotel, airport lounge or event venue, however convenient it seems at the time."
        ]
      },
    ],
    faqs: [
      { q: "Should I trust a device at a trade show?", a: "Only if it is your own locked device. Shared booth devices should not be trusted." },
      { q: "What if I lose a trusted device?", a: "Change your password, review trusted devices in your settings and tell an admin." },
      { q: "Does trusting a device turn off 2FA?", a: "eCard’s site lists trusted devices alongside 2FA but does not detail how they interact. Check your security settings in-app." },
      { q: "How often should I review my trusted devices?", a: "As general guidance, after every trip or event and whenever you replace a phone or laptop." },
    ],
    related: [`${B}/two-factor-authentication`, `${B}/login-alerts`, `${B}/recovery-codes`, `${B}/security-best-practices`],
    source: "mixed",
  },
  {
    slug: `${B}/recovery-codes`,
    category: "team",
    title: "Recovery Codes",
    seoTitle: "2FA Recovery Codes: Store Them Safely",
    description: "eCard gives you recovery codes when you enable 2FA. Learn how to store them, when to use them and what to do after you use one to regain access.",
    h1: "Your Backup Key If Your Phone Goes Missing",
    eyebrow: "Security",
    intro: "When you turn on two-factor authentication in eCard you also get recovery codes. They let you sign in if your authenticator app is unavailable.",
    variant: "feature",
    visual: "security",
    icon: "lock",
    sections: [
      {
        type: "prose",
        heading: "How Recovery Codes Work",
        paragraphs: [
          "Recovery codes are one-time backup codes. Each can be used in place of an authenticator code, usually once. They exist for the moment you drop your phone in a lake, or reset it without moving your authenticator app.",
          "Because they bypass the second factor, recovery codes deserve the same care as a password.",
        ],
      },
      {
        type: "cards",
        heading: "Good Places To Keep Them",
        cards: [
          { title: "Password Manager", body: "A secure note next to your eCard login.", icon: "lock" },
          { title: "Printed Copy", body: "Kept somewhere physically secure, away from your phone.", icon: "file" },
          { title: "Not In Your Inbox", body: "Avoid emailing them to yourself or saving them in chat.", icon: "ban" },
        ],
      },
      {
        type: "steps",
        heading: "After You Use A Recovery Code",
        steps: [
          { title: "Sign In", body: "Enter the recovery code at the 2FA prompt." },
          { title: "Set Up 2FA Again", body: "Add eCard to your authenticator app on the new device." },
          { title: "Refresh Your Codes", body: "If your settings allow, generate a fresh set and store it safely." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Lost Codes And Phone?",
        body: "eCard’s site does not document a recovery path when both are lost. Contact eCard support through the details on the contact page.",
      },
      {
        type: "table",
        heading: "Where To Store Recovery Codes",
        headers: [
          "Option",
          "Good or risky",
          "Why"
        ],
        rows: [
          [
            "Password manager entry",
            "Good",
            "Encrypted and backed up"
          ],
          [
            "Printed copy in a locked drawer",
            "Good",
            "Offline and hard to steal remotely"
          ],
          [
            "Screenshot on the same phone as your authenticator",
            "Risky",
            "Lost with the phone"
          ],
          [
            "Shared team chat",
            "Risky",
            "Visible to others"
          ]
        ]
      },
      {
        type: "steps",
        heading: "Using A Recovery Code",
        steps: [
          {
            title: "Choose The Recovery Option",
            body: "At the 2FA prompt, use a recovery code instead of an authenticator code."
          },
          {
            title: "Cross It Off",
            body: "Treat that code as used."
          },
          {
            title: "Set Up 2FA Again",
            body: "Re-enrol your authenticator on your new device."
          },
          {
            title: "Refresh Your Codes",
            body: "If new codes are available, save them and discard the old set."
          }
        ]
      },
      {
        type: "bullets",
        heading: "Mistakes To Avoid",
        items: [
          "Not saving codes at all because setup felt finished.",
          "Storing codes in the same email account that receives login alerts.",
          "Handing codes to a colleague instead of asking an admin for help."
        ]
      },
      {
        type: "prose",
        heading: "Why Recovery Codes Exist",
        paragraphs: [
          "Two-factor authentication ties your sign-in to a device. If that device is lost, broken or reset, you need another way to prove it is you. Recovery codes are that fallback: a small set of one-time codes generated when you enable 2FA.",
          "Because a recovery code can stand in for your authenticator, treat each one with the same care as a password."
        ]
      },
      {
        type: "bullets",
        heading: "Team Guidance For Admins",
        items: [
          "Remind new users to save codes during onboarding.",
          "Never ask a user to send you their codes.",
          "Have a documented path for locked-out users that does not rely on sharing codes."
        ]
      },
      {
        type: "prose",
        heading: "Testing Your Recovery Plan",
        paragraphs: [
          "Before you need them, confirm you can actually find your recovery codes. Many people only discover they are missing during a lockout. A quick check once a year, or when you change phones, avoids a stressful day when you most need access, such as the morning of an event."
        ]
      },
    ],
    faqs: [
      { q: "How many recovery codes do I get?", a: "eCard’s site does not state the number. You will see them when you enable 2FA." },
      { q: "Can I reuse a recovery code?", a: "Recovery codes are normally single-use. Treat each as used once you enter it." },
      { q: "Can an admin give me new recovery codes?", a: "eCard’s site does not say. Contact your workspace admin or support if you are locked out." },
      { q: "What if I have used all my recovery codes?", a: "eCard’s site does not describe this case. Contact your workspace admin or support to regain access." },
    ],
    related: [`${B}/two-factor-authentication`, "product/account-recovery", "help/account-and-sign-in", `${B}/trusted-devices`],
    source: "mixed",
  },
  {
    slug: `${B}/audit-logs`,
    category: "team",
    title: "Audit Logs",
    seoTitle: "Workspace Audit Logs In eCard",
    description: "Every eCard workspace has an audit log. See how admins can use it to review activity, investigate changes and support a basic compliance routine.",
    h1: "A Record Of What Happened In Your Workspace",
    eyebrow: "Security",
    intro: "eCard workspaces include an audit log. It gives owners and admins a way to look back at activity when something needs explaining.",
    variant: "feature",
    visual: "dashboard",
    icon: "file",
    sections: [
      {
        type: "bullets",
        heading: "Questions An Audit Log Helps Answer",
        items: [
          "Who changed a role, and when?",
          "Was a large export expected?",
          "When did a former colleague last sign in?",
          "Did a setting change right before something broke?",
        ],
      },
      {
        type: "steps",
        heading: "A Simple Monthly Review",
        steps: [
          { title: "Pick A Reviewer", body: "Usually the owner or an admin." },
          { title: "Scan For The Unusual", body: "Look for unexpected role changes, bulk actions or sign-ins." },
          { title: "Follow Up", body: "Ask about anything unexplained, then fix roles if needed." },
          { title: "Note The Review", body: "Keep a short record that the check happened." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "What Is Logged",
        body: "eCard’s site confirms that workspaces have an audit log but does not list which events are recorded or how long entries are kept. Check the log in your workspace.",
      },
      {
        type: "split",
        heading: "Audit Logs And Compliance",
        body: [
          "Many privacy frameworks expect organisations to know who accesses personal data. An audit log is a practical part of that story, alongside eCard’s compliance checklist for consent, export and deletion.",
        ],
        points: ["Supports investigations", "Discourages misuse", "Complements roles", "Pairs with the compliance checklist"],
      },
      {
        type: "steps",
        heading: "A Monthly Audit-log Review",
        steps: [
          {
            title: "Pick A Regular Slot",
            body: "A short monthly review is easier to keep than an occasional deep dive."
          },
          {
            title: "Look At Access Changes",
            body: "New invitations, role changes and removals."
          },
          {
            title: "Look At Sensitive Actions",
            body: "Bulk exports, integration changes and settings updates."
          },
          {
            title: "Follow Up",
            body: "Ask the person involved about anything unexpected; most entries have innocent explanations."
          }
        ]
      },
      {
        type: "table",
        heading: "Questions The Audit Log Helps Answer",
        intro: "Exact event types are shown in-app; eCard’s site states only that workspaces have an audit log.",
        headers: [
          "Situation",
          "What to look for"
        ],
        rows: [
          [
            "A contact list seems smaller",
            "Deletions or bulk changes around that time"
          ],
          [
            "Someone has access they should not",
            "When and by whom their role was changed"
          ],
          [
            "An integration stopped working",
            "Recent changes to its settings"
          ]
        ]
      },
      {
        type: "bullets",
        heading: "Get More From The Log",
        items: [
          "Avoid shared logins, so every entry maps to a person.",
          "Write down the reason for unusual changes when you make them.",
          "Check the log after removing someone who left the company."
        ]
      },
      {
        type: "prose",
        heading: "Why An Audit Log Matters Even In Small Teams",
        paragraphs: [
          "In a three-person team you might think everyone knows who did what. In practice, memories fade, people leave and mistakes happen at busy times like expo weeks. A log turns a disagreement about what happened into a quick lookup.",
          "It also supports accountability without micromanagement: people can work freely, knowing changes can be explained later if needed."
        ]
      },
      {
        type: "bullets",
        heading: "What An Audit Log Cannot Do",
        items: [
          "Prevent a mistake in the first place; that is the job of roles and 2FA.",
          "Attribute actions correctly if several people share one login.",
          "Replace a backup; keep regular exports if your policy requires them."
        ]
      },
      {
        type: "prose",
        heading: "Pairing The Log With Offboarding",
        paragraphs: [
          "When someone leaves, the audit log is the quickest way to confirm their access was removed, by whom and when. It is also worth checking whether they exported contacts in their final weeks, so you can follow your organisation’s policy if they did. Record the outcome alongside your offboarding checklist."
        ]
      },
    ],
    faqs: [
      { q: "Who can see the audit log?", a: "eCard does not publish which roles can view it. Typically owners and admins; check in-app." },
      { q: "Can I export the audit log?", a: "The site does not say. Check your workspace settings." },
      { q: "How long are audit entries kept?", a: "eCard’s site does not state a retention period. Check in-app." },
      { q: "Is the audit log the same as login alerts?", a: "No. Login alerts notify a user about sign-ins to their account; the audit log records workspace activity for review by the people allowed to see it." },
    ],
    related: [`${B}/admin-role`, `${B}/compliance-checklist`, `${B}/security-best-practices`, "product/security-at-a-glance"],
    source: "mixed",
  },
  {
    slug: `${B}/secret-encryption`,
    category: "team",
    title: "Secret Encryption",
    seoTitle: "AES-256-GCM Encryption For API Keys & SMTP",
    description: "eCard encrypts the AI API keys and SMTP passwords you store with AES-256-GCM. Learn what that means and why bring-your-own-key setups need it.",
    h1: "Your API Keys And SMTP Passwords, Encrypted",
    eyebrow: "Security",
    intro: "eCard lets you bring your own AI key and send from your own mailbox. The secrets that make that possible, API keys and SMTP passwords, are encrypted with AES-256-GCM.",
    variant: "feature",
    visual: "security",
    icon: "lock",
    sections: [
      {
        type: "prose",
        heading: "Why eCard Stores Secrets At All",
        paragraphs: [
          "eCard reads cards using the AI model you choose (Claude, OpenAI, Gemini, DeepSeek or Grok, with Azure and custom endpoints mentioned in the FAQ) and you can bring your own key. Intro emails send from your own SMTP mailbox. Both need credentials.",
          "Storing those credentials safely is the difference between a convenient integration and a liability.",
        ],
      },
      {
        type: "prose",
        heading: "What AES-256-GCM Means",
        paragraphs: [
          "AES is a widely used symmetric encryption standard; 256 is the key length in bits. GCM (Galois/Counter Mode) adds integrity checking, so tampered ciphertext is detected rather than silently decrypted.",
          "The homepage summarises this as 256-bit key encryption.",
        ],
      },
      {
        type: "bullets",
        heading: "Your Side Of The Bargain",
        items: [
          "Use app passwords for SMTP where your mail provider supports them.",
          "Create AI keys dedicated to eCard, with spending limits at the provider.",
          "Rotate keys when someone with access leaves.",
          "Use a key pool with failover if you rely on scanning heavily.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not Published",
        body: "eCard’s site does not describe key management, hosting location or certifications. Contact sales@bizzfly.com for security questionnaires.",
      },
      {
        type: "prose",
        heading: "What AES-256-GCM Means, In Plain Terms",
        paragraphs: [
          "AES is a widely used encryption standard; 256 refers to the key length in bits. GCM is a mode that both encrypts data and detects tampering. eCard states that API keys and SMTP passwords are encrypted this way.",
          "Encryption of stored secrets does not replace good habits: who can add keys, how often they are rotated and where copies live still matter."
        ]
      },
      {
        type: "steps",
        heading: "Rotating An API Key Or SMTP Password",
        steps: [
          {
            title: "Create The New Secret",
            body: "Generate a new API key with your AI provider, or an app password with your mail provider."
          },
          {
            title: "Update eCard",
            body: "Replace the old value in the relevant settings."
          },
          {
            title: "Test",
            body: "Scan a sample card or send a test email."
          },
          {
            title: "Revoke The Old One",
            body: "Disable it at the provider so it cannot be used anywhere else."
          }
        ]
      },
      {
        type: "bullets",
        heading: "When To Rotate",
        items: [
          "Someone who had access to the secret leaves the team.",
          "A secret was pasted into chat, email or a document.",
          "Your provider reports suspicious usage.",
          "As a routine, on a schedule your team agrees."
        ]
      },
      {
        type: "bullets",
        heading: "Keep Secrets Out Of These Places",
        items: [
          "Team chat messages and group threads.",
          "Shared spreadsheets and documents.",
          "Screenshots sent for troubleshooting.",
          "Email to support; describe the problem instead of sending the key."
        ]
      },
      {
        type: "prose",
        heading: "Bring-your-own-key And Responsibility",
        paragraphs: [
          "eCard uses AI models with keys you bring, such as Claude, OpenAI, Gemini, DeepSeek, Grok or Azure. That means your provider account, its billing and its usage limits remain yours. Monitor usage at the provider, set spending alerts where available and rotate the key if usage looks unexpected."
        ]
      },
    ],
    faqs: [
      { q: "Which secrets are encrypted?", a: "eCard states that API keys and SMTP passwords are encrypted with AES-256-GCM." },
      { q: "Is my contact data encrypted the same way?", a: "The site specifically mentions API keys and SMTP passwords. It does not describe encryption of other data." },
      { q: "Should we use app passwords for SMTP?", a: "Where your mail provider offers them, app passwords are generally safer than your main account password, because they can be revoked individually." },
      { q: "Who should add the AI provider key?", a: "As general guidance, an owner or admin, so fewer people handle the raw key." },
    ],
    related: ["platform/bring-your-own-ai", "resources/guides/setting-up-smtp", `${B}/security-best-practices`, "product/security-at-a-glance"],
    source: "mixed",
  },
  {
    slug: `${B}/white-label`,
    category: "team",
    title: "White Label",
    seoTitle: "White-Label eCard With Your Logo And Colours",
    description: "On Business and Enterprise plans, eCard can carry your logo, colours and a custom domain. Learn what white-label covers and who it suits best.",
    h1: "Put Your Brand On The Experience",
    eyebrow: "Branding",
    intro: "eCard’s white-label option lets you use your own logo, colours and custom domain. It is included on the Business plan (₹2,999/month) and Enterprise.",
    variant: "feature",
    visual: "card",
    icon: "palette",
    sections: [
      {
        type: "cards",
        heading: "What White-label Covers",
        cards: [
          { title: "Logo", body: "Your company logo instead of eCard’s.", icon: "palette" },
          { title: "Colours", body: "Your brand colours.", icon: "sparkles" },
          { title: "Custom Domain", body: "Serve the experience from a domain you own.", icon: "globe" },
        ],
      },
      {
        type: "split",
        heading: "Who Benefits",
        body: [
          "White-label makes the most sense when the people you share cards with should see your brand, not a tool’s. Agencies, larger sales organisations and businesses with strong brand guidelines are typical fits.",
        ],
        points: ["Agencies", "Large sales teams", "Franchise and dealer networks", "Brand-led companies"],
      },
      {
        type: "table",
        heading: "Availability",
        headers: ["Plan", "White label & custom domain"],
        rows: [["Free / Starter / Professional", "Not included"], ["Business (₹2,999/month)", "Included"], ["Enterprise (custom)", "Included"]],
      },
      {
        type: "callout",
        tone: "note",
        title: "Scope Not Detailed",
        body: "eCard’s site does not specify exactly which screens or emails the branding applies to. Ask sales@bizzfly.com before committing if this matters for you.",
      },
      {
        type: "bullets",
        heading: "What eCard Lists Under White-label",
        intro: "From eCard’s feature and pricing information; available on Business (₹2,999/month) and Enterprise.",
        items: [
          "Your logo.",
          "Your colours.",
          "A custom domain."
        ]
      },
      {
        type: "steps",
        heading: "Preparing Your Brand Assets",
        steps: [
          {
            title: "Collect A Clean Logo",
            body: "A high-resolution version that reads well at small sizes and on light and dark backgrounds."
          },
          {
            title: "Pick Exact Colours",
            body: "Note the hex values from your brand guidelines so they match your website."
          },
          {
            title: "Choose The Domain",
            body: "Decide on a subdomain and who controls its DNS."
          },
          {
            title: "Review On A Phone",
            body: "Most people will see your branding on mobile, so check it there first."
          }
        ]
      },
      {
        type: "table",
        heading: "Is White-label Worth It For You?",
        headers: [
          "Situation",
          "Consideration"
        ],
        rows: [
          [
            "Agency sharing cards with clients",
            "A branded experience can matter"
          ],
          [
            "Large sales team with brand standards",
            "Consistency across reps"
          ],
          [
            "Small team, internal use only",
            "Lower plans may be enough"
          ]
        ]
      },
      {
        type: "prose",
        heading: "Brand Consistency Tips",
        paragraphs: [
          "Use the same logo and colours as your email signature and website, so a contact who opens your digital card recognises you immediately. Avoid low-contrast colour combinations that are hard to read outdoors at events."
        ]
      },
      {
        type: "steps",
        heading: "Rolling Out Branding To The Team",
        steps: [
          {
            title: "Agree A Launch Date",
            body: "Pick a quiet week rather than the day before a big expo, so any issues can be fixed calmly."
          },
          {
            title: "Update Shared Materials",
            body: "Replace old links in email signatures, slide decks and printed QR codes with links on the new domain."
          },
          {
            title: "Tell The Team",
            body: "Explain what changes for them: usually only how their digital card and links look to contacts."
          },
          {
            title: "Spot-check",
            body: "Open a few teammates’ digital cards on different phones and confirm the logo and colours render cleanly."
          }
        ]
      },
      {
        type: "bullets",
        heading: "Questions To Settle Before Upgrading",
        items: [
          "Does the team need more than 100 users? Business and Enterprise list unlimited users, which may matter as much as branding.",
          "Who owns the brand guidelines and must approve how the logo appears?",
          "Who controls DNS for the domain you want to use?"
        ]
      },
      {
        type: "prose",
        heading: "Branding And Trust",
        paragraphs: [
          "A consistent brand helps contacts recognise genuine messages from your team. That is useful protection against confusion: when every link and digital card looks the same, an odd-looking message stands out."
        ]
      },
    ],
    faqs: [
      { q: "Can I try white-label on the trial?", a: "The 14-day trial is of the Professional plan, which does not include white-label." },
      { q: "Does white-label include a custom domain?", a: "Yes, the pricing page lists them together." },
      { q: "Is white-label available on Professional?", a: "No. eCard’s pricing lists white label and custom domain on Business and Enterprise." },
      { q: "Can different teams use different logos?", a: "eCard’s site does not say. Check in-app or ask sales@bizzfly.com before planning around it." },
    ],
    related: [`${B}/custom-domains`, "pricing/business", "pricing/enterprise", "use-cases/agencies"],
    source: "verified",
  },
  {
    slug: `${B}/custom-domains`,
    category: "team",
    title: "Custom Domains",
    seoTitle: "Use Your Own Domain With eCard",
    description: "Business and Enterprise plans let you run eCard on a custom domain. Learn how custom domains generally work and what to prepare before setting one up.",
    h1: "Your Domain, Your Links",
    eyebrow: "Branding",
    intro: "Custom domains come with eCard’s white-label option on Business and Enterprise plans. Links you share can carry your own web address.",
    variant: "feature",
    visual: "card",
    icon: "globe",
    sections: [
      {
        type: "prose",
        heading: "Why A Custom Domain",
        paragraphs: [
          "A link on your own domain looks familiar to recipients and reinforces your brand. Digital card links such as the example path /c/rahul are shared constantly, so the domain they sit on gets a lot of exposure.",
        ],
      },
      {
        type: "steps",
        heading: "How Custom Domains Usually Work",
        intro: "General guidance; follow eCard’s in-app instructions for the exact records.",
        steps: [
          { title: "Choose A Subdomain", body: "Something like cards.example.com keeps your main site separate." },
          { title: "Add DNS Records", body: "Your DNS provider will need the records eCard asks for." },
          { title: "Wait For Verification", body: "DNS changes can take time to propagate." },
          { title: "Test Links", body: "Open a sample card link on mobile and desktop." },
        ],
      },
      {
        type: "bullets",
        heading: "Before You Start",
        items: [
          "Make sure you have access to your domain’s DNS settings.",
          "Pick a name you will keep; changing later breaks old links.",
          "Tell your IT team so the new subdomain is expected.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Details Are In-app",
        body: "eCard’s site does not publish DNS record types or certificate handling. Check the setup screen or ask sales@bizzfly.com.",
      },
      {
        type: "steps",
        heading: "Typical Custom-domain Workflow",
        intro: "General DNS guidance; follow eCard’s in-app instructions for exact values.",
        steps: [
          {
            title: "Pick A Subdomain",
            body: "Choose a clear, short name under a domain you own."
          },
          {
            title: "Find Who Manages DNS",
            body: "Often IT or whoever registered the domain."
          },
          {
            title: "Add The Records eCard Gives You",
            body: "eCard’s site does not publish the records; use the values shown in-app."
          },
          {
            title: "Wait And Verify",
            body: "DNS changes can take time to propagate; check that the domain loads correctly."
          }
        ]
      },
      {
        type: "table",
        heading: "Subdomain Vs Root Domain",
        headers: [
          "Option",
          "Pros",
          "Cons"
        ],
        rows: [
          [
            "Subdomain",
            "Keeps your main website untouched; easy to change",
            "Slightly longer address"
          ],
          [
            "Root domain",
            "Shortest address",
            "Can conflict with your existing website"
          ]
        ]
      },
      {
        type: "bullets",
        heading: "Common DNS Pitfalls",
        items: [
          "Editing records at the wrong DNS provider.",
          "Leaving an old conflicting record in place.",
          "Testing before propagation has finished and assuming it failed.",
          "Letting the domain registration lapse."
        ]
      },
      {
        type: "prose",
        heading: "Why A Custom Domain Matters To Contacts",
        paragraphs: [
          "People are increasingly cautious about clicking unfamiliar links. A link on a domain they associate with your company, rather than a generic address, can feel more trustworthy when it arrives in a WhatsApp message or email after an event.",
          "A custom domain also keeps your links consistent if you print QR codes on brochures or booth signage: the address reflects your brand, not a third party’s."
        ]
      },
      {
        type: "bullets",
        heading: "Before You Change Domains On Existing Links",
        items: [
          "List where your current links are already shared: email signatures, printed material, social profiles.",
          "Check in-app whether existing links keep working after the change; eCard’s site does not document this.",
          "Update printed materials on your normal reprint cycle rather than all at once."
        ]
      },
      {
        type: "prose",
        heading: "Keeping The Domain Healthy",
        paragraphs: [
          "Domains need ongoing care. Make sure renewal reminders go to a shared mailbox rather than one person, document which records support eCard, and check the domain still works after any changes to your main website’s DNS setup."
        ]
      },
    ],
    faqs: [
      { q: "Which plans include custom domains?", a: "Business (₹2,999/month) and Enterprise." },
      { q: "Can I use my root domain?", a: "eCard does not say. A subdomain is the common, safer choice." },
      { q: "Do I need to buy a new domain?", a: "Not usually. A subdomain of a domain you already own generally works well." },
      { q: "Who should own the DNS change?", a: "Whoever already manages your company’s domain, usually IT. Avoid giving DNS access to people who only need eCard." },
    ],
    related: [`${B}/white-label`, "features/digital-business-card", "pricing/business", "pricing/compare-plans"],
    source: "mixed",
  },
  {
    slug: `${B}/compliance-checklist`,
    category: "team",
    title: "Compliance Checklist",
    seoTitle: "Compliance Checklist: Consent, Export, Deletion",
    description: "eCard includes a compliance checklist covering consent, export and deletion. Learn how to use it as part of handling contact data from visiting cards.",
    h1: "Consent, Export And Deletion, In One Checklist",
    eyebrow: "Compliance",
    intro: "eCard’s team and admin features include a compliance checklist covering three topics: consent, export and deletion.",
    variant: "feature",
    visual: "security",
    icon: "check",
    sections: [
      {
        type: "cards",
        heading: "The Three Areas",
        cards: [
          { title: "Consent", body: "Think about how and why you are contacting people whose cards you collected.", icon: "check" },
          { title: "Export", body: "Be ready to give someone a copy of the data you hold about them.", icon: "download" },
          { title: "Deletion", body: "Be able to remove a person’s data when asked.", icon: "archive" },
        ],
      },
      {
        type: "prose",
        heading: "Why A Visiting Card Is Not Blanket Permission",
        paragraphs: [
          "Someone handing you a card is generally happy to hear from you about the conversation you had. That is different from adding them to every newsletter you send. Privacy laws in many countries draw exactly this kind of line.",
          "This page is general guidance, not legal advice. Your obligations depend on where you and your contacts are.",
        ],
      },
      {
        type: "steps",
        heading: "Putting It Into Practice",
        steps: [
          { title: "Record Context", body: "Use meeting memory to note where you met and what was agreed." },
          { title: "Respect Opt-outs", body: "Use the blacklist so people who say no are not contacted again." },
          { title: "Handle Requests", body: "Use export and deletion when someone asks." },
          { title: "Review Regularly", body: "Archive contacts you no longer need." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Not A Certification",
        body: "eCard’s site lists a compliance checklist but does not claim any certification. Speak to a qualified adviser about your own obligations.",
      },
      {
        type: "table",
        heading: "The Three Checklist Areas, Explained",
        headers: [
          "Area",
          "What it means in practice"
        ],
        rows: [
          [
            "Consent",
            "Being able to show why you are contacting someone, such as they handed you their card at an event"
          ],
          [
            "Export",
            "Being able to give people, or your organisation, a copy of their data"
          ],
          [
            "Deletion",
            "Being able to remove someone’s data when it is no longer needed or they ask"
          ]
        ]
      },
      {
        type: "steps",
        heading: "Handling A Deletion Request",
        steps: [
          {
            title: "Confirm Who Is Asking",
            body: "Make sure the request comes from the person concerned."
          },
          {
            title: "Find All Records",
            body: "Search for duplicates under other emails or numbers."
          },
          {
            title: "Delete And Stop Contact",
            body: "Remove the data; consider the blacklist so they are not readded by mistake."
          },
          {
            title: "Record What You Did",
            body: "Keep a simple note of the date and action, without re-storing their details."
          }
        ]
      },
      {
        type: "bullets",
        heading: "Questions To Ask Your Legal Adviser",
        items: [
          "Which data-protection laws apply to the people you meet?",
          "How long should you keep contacts who never responded?",
          "What wording should you use when asking for consent at events?"
        ]
      },
      {
        type: "prose",
        heading: "Making The Checklist A Habit",
        paragraphs: [
          "A checklist is most useful when it is part of normal work rather than a one-off project. Review it when you onboard a new team, before a big event, and whenever you change how you use contact data, such as starting WhatsApp follow-ups.",
          "Assign an owner for each area so requests do not fall between people."
        ]
      },
      {
        type: "bullets",
        heading: "Handling An Export Request",
        items: [
          "Confirm the identity of the person asking.",
          "Use eCard’s export to gather their stored details.",
          "Share the copy securely, not in a public channel."
        ]
      },
      {
        type: "bullets",
        heading: "Signs Your Process Needs Attention",
        items: [
          "Nobody knows who handles deletion requests.",
          "Contacts sit in the workspace for years with no notes.",
          "Opt-outs are recorded in someone’s inbox, not in eCard.",
          "Exports are shared in chat threads."
        ]
      },
    ],
    faqs: [
      { q: "Does the checklist make me compliant?", a: "No tool can do that alone. It helps you work through consent, export and deletion." },
      { q: "Where can I learn about eCard’s own data handling?", a: "See the legal pages, which are drafts pending review." },
      { q: "Does eCard decide how long we keep data?", a: "eCard’s site does not state retention periods. Your organisation should set its own policy with legal advice." },
    ],
    related: [`${B}/consent-management`, "platform/compliance-tools", "help/data-and-privacy", "legal/privacy-policy"],
    source: "mixed",
  },
  {
    slug: `${B}/consent-management`,
    category: "team",
    title: "Consent",
    seoTitle: "Consent And Visiting-Card Contacts",
    description: "Practical guidance on consent when you follow up with people from visiting cards, plus how eCard’s blacklist and compliance checklist can help.",
    h1: "Following Up With People Who Said Yes",
    eyebrow: "Compliance",
    intro: "Consent is the first item on eCard’s compliance checklist. Here is a practical way to think about it when you contact people whose cards you collected.",
    variant: "feature",
    visual: "email",
    icon: "check",
    sections: [
      {
        type: "table",
        heading: "Reasonable Vs Risky Follow-ups",
        intro: "General guidance only; not legal advice.",
        headers: ["Situation", "Usually reasonable?"],
        rows: [
          ["A thank-you email after you met", "Generally yes"],
          ["Sending the brochure they asked for", "Generally yes"],
          ["Adding them to a weekly newsletter without asking", "Risky"],
          ["Sharing their details with another company", "Risky"],
          ["Messaging again after they asked you to stop", "No"],
        ],
      },
      {
        type: "bullets",
        heading: "eCard Features That Support Good Practice",
        items: [
          "Intro emails can be previewed, edited or cancelled within the 5-second window before sending.",
          "The blacklist helps keep people who opted out from being contacted.",
          "Meeting memory records where you met and who introduced you, useful context for why you are in touch.",
          "Export and deletion are part of the compliance checklist.",
        ],
      },
      {
        type: "steps",
        heading: "A Simple Consent Habit",
        steps: [
          { title: "Ask At The Meeting", body: "“Can I send you the details by email or WhatsApp?” is enough for most conversations." },
          { title: "Note The Answer", body: "Add it to your meeting notes." },
          { title: "Honour No", body: "Add opt-outs to the blacklist right away." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "No Consent-record Feature Is Documented",
        body: "eCard’s site does not describe a dedicated consent field or log. Use notes and tags, and check in-app for anything newer.",
      },
      {
        type: "prose",
        heading: "Card Exchange Is Not Blanket Consent",
        paragraphs: [
          "When someone hands you a card, they usually expect a follow-up about that conversation. That is different from adding them to unrelated campaigns. Keep follow-ups relevant to how you met.",
          "Adding a note about the context, for example the event and topic discussed, makes it easier to show why you contacted someone later."
        ]
      },
      {
        type: "steps",
        heading: "Capturing Context At The Moment Of Scanning",
        steps: [
          {
            title: "Tag The Event",
            body: "Use the event name agreed by your team."
          },
          {
            title: "Add A Note",
            body: "Record what the person asked about."
          },
          {
            title: "Note Preferences",
            body: "If they said email only or no WhatsApp, write it down."
          },
          {
            title: "Respect Opt-outs",
            body: "Add people who ask not to be contacted to the blacklist."
          }
        ]
      },
      {
        type: "bullets",
        heading: "Respectful Follow-up Guidelines",
        items: [
          "Introduce yourself and mention where you met.",
          "Offer an easy way to say no thanks.",
          "Do not send more follow-ups after a clear no."
        ]
      },
      {
        type: "table",
        heading: "Context Notes That Help Later",
        headers: [
          "Situation (sample)",
          "Note to add"
        ],
        rows: [
          [
            "Met at an expo booth",
            "Event name and what they asked about"
          ],
          [
            "Introduced by a colleague",
            "Who introduced them and why"
          ],
          [
            "Asked for a quote",
            "The product or service requested"
          ],
          [
            "Said not interested",
            "Add to blacklist; no further follow-up"
          ]
        ]
      },
      {
        type: "prose",
        heading: "Withdrawal Is Part Of Consent",
        paragraphs: [
          "People can change their minds. Make it easy for someone to stop hearing from you, act on it promptly, and make sure teammates see it, so another rep does not contact them again from a different list."
        ]
      },
      {
        type: "prose",
        heading: "Consent Across A Team",
        paragraphs: [
          "When several people share contacts, one rep’s promise not to send WhatsApp messages must be visible to everyone. Keep preferences in notes or tags that the whole team checks before reaching out, and make checking them part of your onboarding so new members learn it on day one."
        ]
      },
    ],
    faqs: [
      { q: "Does eCard send marketing campaigns?", a: "eCard’s site describes intro emails and follow-ups to the people you meet, not newsletter campaigns." },
      { q: "How do I stop contacting someone?", a: "eCard includes a blacklist as part of its clean-data tools." },
      { q: "Is a WhatsApp message treated differently from email?", a: "Expectations vary by person and region. As general guidance, ask which channel someone prefers and note it." },
      { q: "Should we ask permission before adding someone to a newsletter?", a: "As general guidance, yes. A card exchange suggests interest in a follow-up, not in ongoing marketing. Get advice on the rules that apply to you." },
    ],
    related: [`${B}/compliance-checklist`, "features/outreach", "resources/guides/follow-up-playbook", "legal/acceptable-use"],
    source: "mixed",
  },
  {
    slug: `${B}/shared-workspaces`,
    category: "team",
    title: "Shared Workspaces",
    seoTitle: "Shared Workspaces For Teams That Network",
    description: "An eCard workspace lets a team scan, tag and follow up with contacts in one place. Learn how to organise a shared workspace with roles, tags and events.",
    h1: "One Workspace For Everyone Who Collects Cards",
    eyebrow: "Teams",
    intro: "eCard is organised around workspaces. A shared workspace gives your team one contact book, one set of events and one place to manage access.",
    variant: "feature",
    visual: "team",
    icon: "layers",
    sections: [
      {
        type: "split",
        heading: "Why Share One Workspace",
        body: [
          "When every salesperson keeps cards in a drawer, the company loses track of relationships the moment someone leaves. A shared workspace keeps the contact, the meeting notes and the follow-up history in one place.",
          "It also reduces duplicates: eCard’s duplicate merge helps when two colleagues meet the same person.",
        ],
        points: ["One contact book", "Shared events", "Duplicate merge", "Roles and audit log"],
      },
      {
        type: "cards",
        heading: "Organising The Workspace",
        cards: [
          { title: "Tags", body: "Label contacts by product line, region or stage.", icon: "tag" },
          { title: "Events", body: "Group every card from a show and follow up with everyone at once.", icon: "calendar" },
          { title: "Search", body: "Ask in plain language, like \"Investors I met in Mumbai last month\".", icon: "search" },
          { title: "Archive", body: "Keep the active list short without losing history.", icon: "archive" },
        ],
      },
      {
        type: "table",
        heading: "Users Per Plan",
        headers: ["Plan", "Users", "Storage"],
        rows: [["Free", "5", "1 GB"], ["Starter", "20", "25 GB"], ["Professional", "100", "250 GB"], ["Business", "Unlimited", "Unlimited"]],
      },
      {
        type: "callout",
        tone: "note",
        title: "Multiple Workspaces",
        body: "eCard’s site does not say whether one account can belong to several workspaces. Check in-app if you need that.",
      },
      {
        type: "bullets",
        heading: "Agree Conventions Before Importing",
        intro: "A shared contact book stays useful only if people organise it the same way.",
        items: [
          "Event names: one format, for example city plus show plus year.",
          "Tags: a short shared list, with an owner who approves new ones.",
          "Notes: what context to always record.",
          "Duplicates: who merges them and how often."
        ]
      },
      {
        type: "steps",
        heading: "Moving An Existing Spreadsheet Into A Shared Workspace",
        steps: [
          {
            title: "Clean The Sheet First",
            body: "Remove obvious duplicates and empty rows."
          },
          {
            title: "Use Bulk Import",
            body: "eCard includes bulk import and export on every plan."
          },
          {
            title: "Apply Tags",
            body: "Tag the imported batch so you can find it later."
          },
          {
            title: "Check The Result",
            body: "Spot-check a few contacts and the audit log."
          }
        ]
      },
      {
        type: "table",
        heading: "Shared Workspace Vs Separate Workspaces",
        headers: [
          "Need",
          "Suggested approach"
        ],
        rows: [
          [
            "One sales team sharing leads",
            "One shared workspace with roles"
          ],
          [
            "Two unrelated businesses",
            "Separate workspaces"
          ],
          [
            "Temporary event helpers",
            "Shared workspace with scan-only guests"
          ]
        ]
      },
      {
        type: "prose",
        heading: "Sample: One Workspace, Three Groups",
        paragraphs: [
          "Sample: a fictional distributor has a Mumbai sales group, a Delhi sales group and a marketing team that runs expos. All three share one workspace. Each group lead is a manager, tags identify the group and the event, and marketing invites scan-only guests for each show.",
          "Because everyone follows the same naming conventions, a rep in Delhi can find a contact first met at a Mumbai expo without asking around, and duplicates are caught early."
        ]
      },
      {
        type: "bullets",
        heading: "Signs Your Shared Workspace Needs A Tidy-up",
        items: [
          "Several spellings of the same event name.",
          "Tags that nobody remembers creating.",
          "The same person appearing more than once.",
          "Contacts with no tag, event or note at all."
        ]
      },
      {
        type: "prose",
        heading: "Who Looks After The Shared Space",
        paragraphs: [
          "Assign one person, often a manager or admin, to own workspace tidiness. They approve new tags, merge duplicates found by teammates and remind people of conventions. Without a clear owner, a shared workspace slowly fills with near-duplicate tags and contacts nobody feels responsible for."
        ]
      },
    ],
    faqs: [
      { q: "Can teammates see each other’s contacts?", a: "That depends on roles; eCard does not publish a detailed permission matrix. Check role settings in your workspace." },
      { q: "How many people can join?", a: "5 on Free, 20 on Starter, 100 on Professional and unlimited on Business and Enterprise." },
      { q: "Can contacts be exported if a teammate leaves?", a: "eCard offers bulk export on every plan. Who can export depends on role settings in-app." },
      { q: "Can guests see the whole shared workspace?", a: "The guest role is described as scan-only. Exact visibility is shown in your workspace’s role settings." },
    ],
    related: ["platform/workspace", "platform/for-teams", `${B}/roles-and-permissions`, "features/contact-management"],
    source: "mixed",
  },
  {
    slug: `${B}/onboarding-your-team`,
    category: "team",
    title: "Onboarding Your Team",
    seoTitle: "How To Onboard Your Team Onto eCard",
    description: "A practical plan for rolling eCard out to a team: pick roles, secure accounts, connect mailboxes, link Telegram and agree on follow-up habits.",
    h1: "Roll Out eCard To Your Team In A Week",
    eyebrow: "Teams",
    intro: "A short plan for moving a team from drawers of paper cards to one shared eCard workspace, without overwhelming anyone.",
    variant: "guide",
    visual: "team",
    icon: "users",
    sections: [
      {
        type: "steps",
        heading: "The One-week Rollout",
        steps: [
          { title: "Day 1: Owner Setup", body: "Create the workspace, enable 2FA and choose your AI model and key." },
          { title: "Day 2: Invite People", body: "Default to member; use manager for team leads and guests for helpers." },
          { title: "Day 3: Mailboxes", body: "Each person connects their own SMTP mailbox for intro emails." },
          { title: "Day 4: Telegram", body: "Link the bot with the one-time code from Settings → Telegram." },
          { title: "Day 5: Backlog", body: "Scan or CSV-import existing cards and merge duplicates." },
        ],
      },
      {
        type: "bullets",
        heading: "Agree On A Few Team Rules",
        items: [
          "Review every scan before saving; check low-confidence fields.",
          "Tag every contact with the event or source.",
          "Follow up within one working day.",
          "Use the blacklist for anyone who opts out.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Use The Trial",
        body: "New workspaces get a 14-day Professional trial with no card needed, enough time to run this plan before choosing a plan.",
      },
      {
        type: "prose",
        heading: "Keep It Light",
        paragraphs: [
          "Adoption fails when a tool feels like extra admin. Start with the one habit that saves the most time, scanning cards the same day, and add digital cards, WhatsApp follow-ups and events once that sticks.",
          "No app installation is needed: eCard works in any phone browser, which removes one of the most common rollout hurdles.",
        ],
      },
      {
        type: "bullets",
        heading: "Onboarding Checklist For Each New User",
        items: [
          "Account created with a work email address.",
          "Appropriate role assigned.",
          "2FA enabled and recovery codes saved.",
          "Own SMTP mailbox connected if they will send intros.",
          "Telegram linked via Settings → Telegram, if they want it.",
          "Shown the team’s tag and event conventions."
        ]
      },
      {
        type: "prose",
        heading: "A 20-minute First Session (Sample Agenda)",
        paragraphs: [
          "Five minutes on why the team uses a shared card CRM. Five minutes scanning a sample card together. Five minutes on tags, events and notes. Five minutes on security: 2FA, login alerts and what to do if a phone is lost."
        ]
      },
      {
        type: "bullets",
        heading: "Offboarding, The Other Half Of Onboarding",
        items: [
          "Remove access on the person’s last day.",
          "Reassign their open follow-ups to a member.",
          "Rotate any shared secrets they used.",
          "Check the audit log for recent exports."
        ]
      },
      {
        type: "steps",
        heading: "Inviting A Team In Waves",
        intro: "Inviting everyone at once can work for small teams; larger teams often prefer waves.",
        steps: [
          {
            title: "Wave 1: Owner And Admins",
            body: "Secure the core accounts and agree conventions."
          },
          {
            title: "Wave 2: A Pilot Group",
            body: "Two or three members use eCard for a week and report friction."
          },
          {
            title: "Wave 3: Everyone Else",
            body: "Invite the rest with the pilot group’s tips included."
          }
        ]
      },
      {
        type: "bullets",
        heading: "Plan Limits To Keep In Mind",
        items: [
          "Free: up to 5 users.",
          "Starter (₹299/month): up to 20 users.",
          "Professional (₹999/month): up to 100 users.",
          "Business (₹2,999/month) and Enterprise: unlimited users."
        ]
      },
      {
        type: "prose",
        heading: "Measuring Whether Onboarding Worked",
        paragraphs: [
          "After a couple of weeks, check a few simple signals: has everyone enabled 2FA, are new contacts tagged with the agreed event names, and are scanned contacts actually receiving follow-ups? If not, a ten-minute refresher usually fixes it faster than a long document."
        ]
      },
    ],
    faqs: [
      { q: "Do people need to install anything?", a: "No. eCard works in any phone browser; Telegram is optional." },
      { q: "Does each person need their own mailbox?", a: "Intro emails send from your own SMTP mailbox, so each sender typically connects theirs." },
      { q: "What should a new user do first?", a: "Turn on 2FA, then scan one sample card to learn the flow." },
      { q: "Can I onboard people during the 14-day trial?", a: "Yes, the trial is of the Professional plan, which lists up to 100 users. Plan which plan you will continue on before the trial ends." },
    ],
    related: ["resources/guides/inviting-your-team", "resources/guides/setting-up-smtp", "resources/guides/connecting-telegram", "pricing/free-trial"],
    source: "mixed",
  },
  {
    slug: `${B}/security-best-practices`,
    category: "team",
    title: "Security Best Practices",
    seoTitle: "Security Best Practices For A Card CRM Team",
    description: "Ten practical security habits for teams using eCard: 2FA, least-privilege roles, key hygiene, guest cleanup, audit reviews and safe event scanning.",
    h1: "Security Habits That Actually Stick",
    eyebrow: "Security",
    intro: "eCard provides the controls; these habits make them work. Use this as a checklist for your team.",
    variant: "guide",
    visual: "security",
    icon: "shield",
    sections: [
      {
        type: "bullets",
        heading: "The Checklist",
        items: [
          "Turn on 2FA for every account, owner and admins first.",
          "Store recovery codes in a password manager.",
          "Only trust devices you alone use.",
          "Give the lowest role that does the job.",
          "Remove guests after each event.",
          "Use dedicated AI keys with spending limits.",
          "Use SMTP app passwords where available.",
          "Review the audit log monthly.",
          "Act on unexpected login alerts.",
          "Offboard leavers on their last day.",
        ],
      },
      {
        type: "split",
        heading: "Events Are The Weak Spot",
        body: [
          "Trade shows mix shared devices, public Wi-Fi and temporary staff. That is exactly when access controls matter most.",
        ],
        points: ["Use scan-only guests", "Avoid shared logins", "Sign out of shared tablets", "Lock phones"],
      },
      {
        type: "table",
        heading: "Controls And The Habits Behind Them",
        headers: ["eCard control", "Habit"],
        rows: [
          ["Roles", "Least privilege, reviewed quarterly"],
          ["2FA & recovery codes", "Enabled on day one, codes stored safely"],
          ["Login alerts", "Investigated, not ignored"],
          ["Audit log", "Reviewed monthly"],
          ["AES-256-GCM secrets", "Rotated when people leave"],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Questions For Procurement?",
        body: "eCard’s site does not list certifications. For security questionnaires, contact sales@bizzfly.com.",
      },
      {
        type: "table",
        heading: "Quick Wins By Effort",
        intro: "General guidance on where to start.",
        headers: [
          "Practice",
          "Effort",
          "Impact"
        ],
        rows: [
          [
            "2FA for owner and admins",
            "Low",
            "High"
          ],
          [
            "Remove leavers on their last day",
            "Low",
            "High"
          ],
          [
            "Scan-only guests for events",
            "Low",
            "Medium"
          ],
          [
            "Monthly audit-log review",
            "Medium",
            "Medium"
          ],
          [
            "Rotating API keys and SMTP passwords",
            "Medium",
            "Medium"
          ]
        ]
      },
      {
        type: "steps",
        heading: "Responding To A Suspected Compromise",
        steps: [
          {
            title: "Contain",
            body: "Change the affected password and remove suspicious trusted devices."
          },
          {
            title: "Investigate",
            body: "Review the audit log for exports, role changes or settings edits."
          },
          {
            title: "Rotate",
            body: "Replace API keys and SMTP passwords that may have been exposed."
          },
          {
            title: "Communicate",
            body: "Tell the owner and, where appropriate, contact eCard support."
          }
        ]
      },
      {
        type: "bullets",
        heading: "Phishing Warning Signs",
        items: [
          "Urgent requests to share codes or passwords.",
          "Sign-in links from unfamiliar domains.",
          "Messages asking for recovery codes. No legitimate support process should need them."
        ]
      },
      {
        type: "prose",
        heading: "Security Is Mostly About People And Routine",
        paragraphs: [
          "The features eCard lists, such as roles, 2FA, login alerts, trusted devices, recovery codes, encrypted secrets and audit logs, only help if the team uses them consistently. Most account problems come from reused passwords, shared logins and access that was never removed.",
          "A short written policy, even one page, helps: who approves new users, when 2FA must be on, who reviews the audit log and what to do if a phone is lost."
        ]
      },
      {
        type: "bullets",
        heading: "A Quarterly Security Review",
        items: [
          "Compare the user list with your current staff list.",
          "Confirm every owner and admin has 2FA on.",
          "Remove any scan-only guests left over from events.",
          "Check which API keys and SMTP passwords are connected and who added them.",
          "Skim the audit log for bulk exports."
        ]
      },
      {
        type: "prose",
        heading: "Start Small, Then Build",
        paragraphs: [
          "If this list feels long, begin with two actions this week: turn on 2FA for the owner and admins, and remove anyone who no longer needs access. Add the routine reviews once those are in place."
        ]
      },
    ],
    faqs: [
      { q: "What is the single most important step?", a: "Turning on 2FA, starting with the owner and admins." },
      { q: "How should we handle someone leaving?", a: "Remove their access on their last day, rotate any shared keys they used and check the audit log." },
      { q: "Should we share one login for the booth tablet?", a: "No. Give each helper a scan-only guest account so roles and the audit log work properly." },
      { q: "Does eCard publish security certifications?", a: "eCard’s site does not list certifications. Ask sales@bizzfly.com if your procurement process needs them." },
    ],
    related: [`${B}/two-factor-authentication`, `${B}/audit-logs`, `${B}/secret-encryption`, "product/security-at-a-glance", "resources/guides/enabling-2fa"],
    source: "mixed",
  },
];
