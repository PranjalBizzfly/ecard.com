import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { getPage } from "@/content/registry";
import { pageMetadata } from "@/lib/seo";
import { SITE, VERIFIED_FAQS, WA_LANGUAGES } from "@/content/site";
import { Visual } from "@/components/Visuals";
import { Icon } from "@/components/Icon";
import { CtaBand, FaqList } from "@/components/blocks";
import { SampleScan } from "@/components/interactive/SampleScan";
import { TimeSaved } from "@/components/interactive/TimeSaved";
import { PricingTable } from "@/components/interactive/PricingTable";
import type { IconName, VisualKey } from "@/content/types";

export function generateMetadata() {
  const p = getPage("");
  return p ? { ...pageMetadata(p), title: { absolute: p.seoTitle } } : {};
}

const STATS: [string, string][] = [["7", "AI models to choose from"], ["3", "WhatsApp languages"], ["5s", "to auto-send an intro"], ["14 days", "free Pro trial"], ["256-bit", "encryption for your keys"], ["₹0", "to start on Free"]];

const SHOWCASE: { eyebrow: string; title: string; body: string; points: string[]; href: string; visual: VisualKey }[] = [
  { eyebrow: "AI card scanning", title: "Your model. Your keys. Your review.", body: "Read cards with Claude, OpenAI, Gemini, DeepSeek or Grok — bring your own key or use ours. Every field gets a confidence score, and nothing is saved until you check it.", points: ["Front and back of the card", "Addresses checked against Google Maps", "Key pool with automatic failover"], href: "/features/ai-card-scanning", visual: "scan" },
  { eyebrow: "Telegram capture", title: "Snap a card in Telegram. It's saved and emailed.", body: "Send a photo to the eCard bot. The contact lands in your workspace with Open and Send buttons right in the chat — link it once with a one-time code from Settings → Telegram.", points: ["No app switch at the booth", "Every forwarded card lands in your workspace", "Works for the whole team"], href: "/features/telegram-bot", visual: "telegram" },
  { eyebrow: "WhatsApp follow-ups", title: `Personal messages in ${WA_LANGUAGES.length} languages.`, body: "eCard writes a personal WhatsApp message in English, Hindi or Marathi and opens WhatsApp in one tap.", points: WA_LANGUAGES, href: "/features/whatsapp-follow-ups", visual: "whatsapp" },
  { eyebrow: "Intros that send themselves", title: "Preview it. It sends in five seconds.", body: "Preview the AI draft; it goes out from your own SMTP five seconds later. Edit or cancel any time — Gmail, Outlook, Zoho, SendGrid and any SMTP host.", points: ["From your own mailbox", "Edit or cancel before it sends", "Includes your digital card"], href: "/features/automated-email-outreach", visual: "email" },
  { eyebrow: "Meeting memory", title: "Remember where you met — and what was said.", body: "Capture the place, who introduced you, and voice notes. eCard turns them into a searchable AI summary.", points: ["Where you met & who introduced you", "Voice notes", "Searchable AI summary"], href: "/features/meeting-memory", visual: "meeting" },
];

const GRID: { icon: IconName; title: string; body: string; href: string }[] = [
  { icon: "card", title: "Your own digital business card", body: "Premium templates, QR code, Save-to-contacts and short links that count every click — bots filtered.", href: "/features/digital-business-card" },
  { icon: "chart", title: "Link-click tracking", body: "See who opened your card, PDFs and WhatsApp links.", href: "/features/link-tracking" },
  { icon: "search", title: "Ask in plain English", body: "“Investors I met in Mumbai last month.”", href: "/features/contact-management/natural-language-search" },
  { icon: "calendar", title: "Events & expos", body: "Group every card from a trade show and follow up with the whole room.", href: "/features/events-expos" },
  { icon: "merge", title: "Clean data", body: "Duplicate merge, blacklist, archive, CSV import and Google Contacts sync.", href: "/features/contact-management" },
  { icon: "shield", title: "Team & admin", body: "Roles, 2FA, login alerts, audit log, white-label and signed webhooks.", href: "/features/team-security" },
];

const USE_CASES: { icon: IconName; title: string; body: string; href: string }[] = [
  { icon: "building", title: "Real estate", body: "Turn site-visit cards into booked visits. Send the brochure with your card, see who opened it, follow up in Marathi or Hindi.", href: "/use-cases/real-estate" },
  { icon: "calendar", title: "Events & expos", body: "Scan the stack from every booth and follow up with the whole room the same evening.", href: "/use-cases/events-expos" },
  { icon: "briefcase", title: "Sales teams", body: "Shared workspace, roles and one place for every card the team collects.", href: "/use-cases/sales-teams" },
  { icon: "palette", title: "Agencies", body: "White-label cards on your own domain for the brands you represent.", href: "/use-cases/agencies" },
];

const INTEGRATIONS = [["Telegram", "telegram"], ["WhatsApp", "whatsapp"], ["Gmail", "gmail"], ["Outlook", "outlook"], ["Google Contacts", "google-contacts"], ["Google Maps", "google-maps"], ["Razorpay · UPI", "razorpay-upi"], ["Stripe", "stripe"], ["Claude", "claude"], ["OpenAI", "openai"], ["Gemini", "gemini"], ["Zoho Mail", "zoho-mail"], ["SendGrid", "sendgrid"], ["Webhooks", "webhooks"], ["CSV import", "csv-import"]];

const FAQS = VERIFIED_FAQS;

export default function Home() {
  const faqLd = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqLd }} />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_70%_-10%,var(--color-brand-100),transparent)]" />
        <div className="container-x grid gap-14 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pb-24">
          <div className="reveal">
            <p className="eyebrow">AI visiting-card CRM</p>
            <h1 className="mt-4 text-[2.6rem] font-bold leading-[1.05] tracking-tight text-ink-950 sm:text-6xl">{SITE.heroTitle}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">eCard reads visiting cards with AI, files them as clean contacts, remembers where you met, and sends the follow-up by email, WhatsApp or your own digital card.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.signUp} className="btn-primary">Start free — 14-day Pro trial <ArrowRight className="size-4" aria-hidden /></a>
              <a href="#try" className="btn-ghost">Try a sample scan</a>
            </div>
            <p className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-500">{["50 free scans", "No card required", "14-day Pro trial"].map((t) => <span key={t} className="flex items-center gap-1"><Check className="size-4 text-mint-600" aria-hidden />{t}</span>)}</p>
          </div>
          <div className="reveal relative">
            <Visual kind="scan" />
            <div className="absolute -bottom-8 -left-6 hidden w-60 xl:block"><div className="card-surface p-4 text-xs"><p className="font-semibold">Paper → digital</p><p className="mt-1 text-ink-500">Each paper card becomes a contact — and you get your own card at ecard.gg/c/you.</p></div></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="eCard at a glance" className="border-y border-ink-100 bg-ink-50/60">
        <dl className="container-x grid grid-cols-2 gap-6 py-10 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map(([v, k]) => <div key={k}><dt className="sr-only">{k}</dt><dd className="text-3xl font-bold tracking-tight text-ink-950">{v}</dd><dd className="text-sm text-ink-500">{k}</dd></div>)}
        </dl>
      </section>

      {/* Paper to digital */}
      <section className="container-x py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Paper → digital</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">From a stack of cards to a working network.</h2>
          <p className="mt-4 text-lg text-ink-500">Details are read by AI and checked against Google Maps. Each card becomes a contact you can tag, search and follow up with.</p>
        </div>
        <ol className="mt-14 grid gap-4 md:grid-cols-4">
          {[["scan", "Scan", "Snap the front and back in any phone browser or Telegram."], ["check", "Review", "Check fields with confidence scores before saving."], ["tag", "Organize", "Tag by event, city and intent. Merge duplicates."], ["send", "Follow up", "Email from your SMTP or WhatsApp in three languages."]].map(([i, t, b], n) => (
            <li key={t} className="card-surface relative p-6"><span className="absolute right-5 top-5 text-5xl font-bold text-ink-100">{n + 1}</span><span className="grid size-10 place-items-center rounded-xl bg-brand-600 text-white"><Icon name={i as IconName} /></span><h3 className="mt-5 font-semibold">{t}</h3><p className="mt-1 text-sm text-ink-500">{b}</p></li>
          ))}
        </ol>
      </section>

      {/* Showcase alternating */}
      <section id="features" className="scroll-mt-28 space-y-24 pb-24 sm:space-y-32">
        {SHOWCASE.map((s, i) => (
          <div key={s.title} className="container-x grid items-center gap-12 lg:grid-cols-2">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <p className="eyebrow">{s.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{s.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">{s.body}</p>
              <ul className="mt-6 space-y-2">{s.points.map((p) => <li key={p} className="flex gap-2 text-ink-700"><Check className="mt-0.5 size-5 text-mint-600" aria-hidden />{p}</li>)}</ul>
              <Link href={s.href} className="mt-6 inline-flex items-center gap-1 font-semibold text-brand-700 hover:gap-2">Learn more <span className="sr-only">about {s.eyebrow}</span><ArrowRight className="size-4" aria-hidden /></Link>
            </div>
            <Visual kind={s.visual} />
          </div>
        ))}
      </section>

      {/* Feature grid + dashboard */}
      <section className="bg-ink-950 py-20 text-white sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-400">Everything in one place</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">One workspace for every person you meet.</h2></div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <ul className="grid gap-3 sm:grid-cols-2">
              {GRID.map((g) => <li key={g.title}><Link href={g.href} className="block h-full rounded-2xl border border-ink-700 p-5 transition hover:border-brand-400 hover:bg-white/5"><Icon name={g.icon} className="size-5 text-brand-400" /><h3 className="mt-3 font-semibold">{g.title}</h3><p className="mt-1 text-sm text-ink-300">{g.body}</p></Link></li>)}
            </ul>
            <div className="text-ink-900"><Visual kind="dashboard" /><div className="mt-4"><Visual kind="analytics" /></div></div>
          </div>
        </div>
      </section>

      {/* Try */}
      <section id="try" className="container-x scroll-mt-28 py-20 sm:py-28">
        <div className="mx-auto mb-10 max-w-2xl text-center"><p className="eyebrow">Try it</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Pick a card. Watch eCard read it.</h2></div>
        <SampleScan />
      </section>

      {/* Use cases */}
      <section id="usecases" className="scroll-mt-28 bg-ink-50/60 py-20 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl"><p className="eyebrow">Use cases</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Made for whoever collects cards for a living.</h2></div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {USE_CASES.map((u) => <li key={u.title}><Link href={u.href} className="card-surface group flex h-full flex-col p-6 hover:border-brand-400"><Icon name={u.icon} className="size-6 text-brand-600" /><h3 className="mt-4 text-lg font-semibold">{u.title}</h3><p className="mt-2 flex-1 text-sm text-ink-500">{u.body}</p><span className="mt-4 text-sm font-semibold text-brand-700">Explore <ArrowRight className="inline size-3.5" aria-hidden /></span></Link></li>)}
          </ul>
          <Link href="/use-cases" className="btn-ghost mt-8">All use cases</Link>
        </div>
      </section>

      {/* Team + integrations */}
      <section className="container-x grid gap-12 py-20 sm:py-28 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Team & admin</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Controls your admin will actually like.</h2>
          <p className="mt-4 text-lg text-ink-500">Roles for owners, admins, managers, members and scan-only guests. 2FA, login alerts, trusted devices, audit log — and white-label with your own domain.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2"><Visual kind="team" /><Visual kind="security" /></div>
        </div>
        <div>
          <p className="eyebrow">Integrations</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Plugs into the tools you already use.</h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {INTEGRATIONS.map(([n, s]) => <li key={s}><Link href={`/integrations/${s}`} className="block rounded-xl border border-ink-100 bg-white px-4 py-3 text-sm font-medium hover:border-brand-400 hover:text-brand-700">{n}</Link></li>)}
          </ul>
          <Link href="/integrations" className="mt-6 inline-flex items-center gap-1 font-semibold text-brand-700">All integrations <ArrowRight className="size-4" aria-hidden /></Link>
        </div>
      </section>

      {/* Calculator */}
      <section className="container-x pb-20 sm:pb-28">
        <div className="mb-10 max-w-2xl"><p className="eyebrow">Time saved</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">How much typing could you skip?</h2></div>
        <TimeSaved />
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-ink-50/60 py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto mb-10 max-w-2xl text-center"><p className="eyebrow">Pricing</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Start free, upgrade as your network grows.</h2></div>
          <PricingTable />
          <p className="mt-6 text-center"><Link href="/pricing/compare-plans" className="font-semibold text-brand-700">Compare every plan in detail →</Link></p>
        </div>
      </section>

      <section id="faq" className="container-x scroll-mt-28 py-20 sm:py-28"><FaqList faqs={FAQS} /></section>
      <div className="pb-20"><CtaBand /></div>
    </>
  );
}
