# Product Feature Inventory

Verified against https://ecard.gg on 2026-11-25. "Plan" shows the lowest plan that includes the feature, according to /pricing.

| Area | Feature | Verified detail | Plan |
|---|---|---|---|
| Scanning | AI card scanning | Claude, OpenAI, Gemini, DeepSeek or Grok. The FAQ adds Azure and custom endpoints. Bring your own key or use eCard's | Free (50/mo) |
| Scanning | Confidence scores and review | Each field is scored. Nothing is saved until you check it | Free |
| Scanning | Key pool and failover | Several keys; rotates and fails over when one is rate-limited | Free |
| Scanning | Address check | "Checked against Google Maps" | Free |
| Scanning | Key encryption | API keys and SMTP passwords are encrypted with AES-256-GCM | Free |
| Telegram | Bot capture | Send a photo and the contact is saved, with Open and Send buttons. Linked with a one-time code from Settings → Telegram | Free |
| Outreach | Intro email | Preview the AI draft. It sends 5 seconds later from your own SMTP; you can edit or cancel | Free |
| Outreach | Email providers | Gmail, Outlook, Zoho, SendGrid, Brevo, Mailgun, Amazon SES, Resend, any SMTP host | Free |
| Outreach | WhatsApp | AI-written message in English, Hindi or Marathi; opens WhatsApp in one tap | Free |
| Cards | Digital business card | Premium templates, QR, Save-to-contacts, short links with click counts (bots filtered). Example URL: /c/rahul | Free |
| CRM | Contacts, tags, events | Tag by event, city and intent | Free |
| CRM | Natural-language search | Example: "Investors I met in Mumbai last month" | Not stated |
| CRM | Clean data | Duplicate merge, blacklist, archive, CSV import | Free (bulk import/export) |
| CRM | Google Contacts sync | — | Starter |
| Meetings | Meeting memory | Where you met, who introduced you, voice notes, searchable AI summary | Not stated |
| Meetings | Calendar and Meet booking | "Google Calendar & Meet booking" | Starter |
| Analytics | Link tracking | Who opened your card, PDFs and WhatsApp links | Not stated |
| Team | Roles | Owner, admin, manager, member, scan-only guest | Not stated |
| Team | Security | 2FA (authenticator), recovery codes, trusted devices, login alerts, audit log | Not stated |
| Team | Compliance | Checklist covering consent, export and deletion | Not stated |
| Team | White label | Logo, colours, custom domain | Business |
| API | Webhooks and API | Signed events for every new contact | Professional |
| Billing | Payments | UPI, cards, net banking, wallets, EMI (India); card (international). GST where applicable | — |

## Plan limits
| Plan | ₹/mo | Users | Storage | Scans/mo |
|---|---|---|---|---|
| Free | 0 | 5 | 1 GB | 50 |
| Starter | 299 | 20 | 25 GB | 1,000 |
| Professional | 999 | 100 | 250 GB | 5,000 |
| Business | 2,999 | Unlimited | Unlimited | Unlimited |
| Enterprise | Custom | Unlimited | Unlimited | Unlimited |

The single source of truth in code is `src/content/site.ts`. Update it there when prices change, then update `SITE.verifiedOn`.
