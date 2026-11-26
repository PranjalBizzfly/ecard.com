import { toTitleCase } from "@/lib/text";
import { Card3D } from "@/components/home/Card3D";
import Link from "next/link";
import { ArrowRight, Check, Bot, Languages, Timer, Gift, Lock, Wallet, type LucideIcon } from "lucide-react";
import { getPage, pathFor, titleFor } from "@/content/registry";
import { pageMetadata } from "@/lib/seo";
import { ROLES, SITE, VERIFIED_FAQS, WA_LANGUAGES } from "@/content/site";
import { Visual } from "@/components/Visuals";
import { Icon } from "@/components/Icon";
import { FaqList } from "@/components/blocks";
import { SampleScan } from "@/components/interactive/SampleScan";
import { TimeSaved } from "@/components/interactive/TimeSaved";
import { PricingTable } from "@/components/interactive/PricingTable";
import { ProductTour } from "@/components/home/ProductTour";
import { SectionHead } from "@/components/home/SectionHead";
import { HeroScanStory } from "@/components/home/HeroScanStory";
import type { IconName, VisualKey } from "@/content/types";

export function generateMetadata() {
  const p = getPage("");
  return p ? { ...pageMetadata(p), title: { absolute: p.seoTitle } } : {};
}

const STATS: [string, string, LucideIcon][] = [["7", "AI models to choose from", Bot], ["3", "WhatsApp languages", Languages], ["5s", "to auto-send an intro", Timer], ["14 days", "free Pro trial", Gift], ["256-bit", "encryption for your keys", Lock], ["₹0", "to start on Free", Wallet]];

const SHOWCASE: { eyebrow: string; icon: IconName; title: string; body: string; points: string[]; href: string; visual: VisualKey }[] = [
  { eyebrow: "AI card scanning", icon: "scan", title: "Your model. Your keys. Your review.", body: "Read cards with Claude, OpenAI, Gemini, DeepSeek or Grok. Bring your own key or use ours. Every field gets a confidence score, and nothing is saved until you check it.", points: ["Front and back of the card", "Addresses checked against Google Maps", "Key pool with automatic failover"], href: "/ai-card-scanning", visual: "scan" },
  { eyebrow: "Telegram capture", icon: "send", title: "Snap a card in Telegram. It's saved and emailed.", body: "Send a photo to the eCard bot. The contact lands in your workspace with Open and Send buttons right in the chat. Link it once with a one-time code from Settings → Telegram.", points: ["No app switch at the booth", "Every forwarded card lands in your workspace", "Works for the whole team"], href: "/telegram-bot", visual: "telegram" },
  { eyebrow: "WhatsApp follow-ups", icon: "message", title: `Personal messages in ${WA_LANGUAGES.length} languages.`, body: "eCard writes a personal WhatsApp message in English, Hindi or Marathi and opens WhatsApp in one tap.", points: WA_LANGUAGES, href: "/whatsapp-follow-ups", visual: "whatsapp" },
  { eyebrow: "Intros that send themselves", icon: "mail", title: "Preview it. It sends in five seconds.", body: "Preview the AI draft; it goes out from your own SMTP five seconds later. Edit or cancel any time. Works with Gmail, Outlook, Zoho, SendGrid and any SMTP host.", points: ["From your own mailbox", "Edit or cancel before it sends", "Includes your digital card"], href: "/automated-email-outreach", visual: "email" },
  { eyebrow: "Meeting memory", icon: "mic", title: "Remember where you met and what was said.", body: "Capture the place, who introduced you, and voice notes. eCard turns them into a searchable AI summary.", points: ["Where you met & who introduced you", "Voice notes", "Searchable AI summary"], href: "/meeting-memory", visual: "meeting" },
];

const GRID: { icon: IconName; title: string; body: string; href: string; chips?: string[] }[] = [
  { icon: "card", title: "Your own digital business card", body: "Premium templates, QR code, Save-to-contacts and short links that count every click, with bots filtered out.", href: "/digital-business-card", chips: ["Templates", "QR code", "Save to contacts", "Short links"] },
  { icon: "chart", title: "Link-click tracking", body: "See who opened your card, PDFs and WhatsApp links.", href: "/link-tracking-and-analytics" },
  { icon: "search", title: "Ask in plain English", body: "“Investors I met in Mumbai last month.”", href: "/contact-management/natural-language-search" },
  { icon: "calendar", title: "Events & expos", body: "Group every card from a trade show and follow up with the whole room.", href: "/events-and-expos", chips: ["Group by event", "Follow up with the room"] },
  { icon: "merge", title: "Clean data", body: "Duplicate merge, blacklist, archive, CSV import and Google Contacts sync.", href: "/contact-management", chips: ["Duplicate merge", "Blacklist", "Archive", "CSV import", "Google Contacts sync"] },
  { icon: "shield", title: "Team & admin", body: "Roles, 2FA, login alerts, audit log, white-label and signed webhooks.", href: "/team-and-security" },
];
// Bento rhythm: [wide][1] / [1][wide] / [wide][1]
const WIDE = [true, false, false, true, true, false];

const STEPS: [IconName, string, string][] = [["scan", "Scan", "Snap the front and back in any phone browser or Telegram."], ["check", "Review", "Check fields with confidence scores before saving."], ["tag", "Organize", "Tag by event, city and intent. Merge duplicates."], ["send", "Follow up", "Email from your SMTP or WhatsApp in three languages."]];

const USE_CASES: { icon: IconName; title: string; body: string; href: string }[] = [
  { icon: "building", title: "Real estate", body: "Turn site-visit cards into booked visits. Send the brochure with your card, see who opened it, follow up in Marathi or Hindi.", href: "/use-cases/real-estate" },
  { icon: "calendar", title: "Events & expos", body: "Scan the stack from every booth and follow up with the whole room the same evening.", href: "/use-cases/events-and-expos" },
  { icon: "briefcase", title: "Sales teams", body: "Shared workspace, roles and one place for every card the team collects.", href: "/use-cases/sales-teams" },
  { icon: "palette", title: "Agencies", body: "White-label cards on your own domain for the brands you represent.", href: "/use-cases/agencies" },
];

const INTEGRATIONS = [["Telegram", "telegram"], ["WhatsApp", "whatsapp"], ["Gmail", "gmail"], ["Outlook", "outlook"], ["Google Contacts", "google-contacts"], ["Google Maps", "google-maps"], ["Razorpay · UPI", "razorpay-upi"], ["Stripe", "stripe"], ["Claude", "claude"], ["OpenAI", "openai"], ["Gemini", "gemini"], ["Zoho Mail", "zoho-mail"], ["SendGrid", "sendgrid"], ["Webhooks", "webhooks"], ["CSV import", "csv-import"]];

const TEAM_POINTS = ["Roles for owners, admins, managers, members and scan-only guests", "2FA, login alerts and trusted devices", "Audit log", "White-label with your own domain"];

const FAQS = VERIFIED_FAQS;
const PROOF = ["50 free scans", "No card required", "14-day Pro trial"];

export default function Home() {
  const faqLd = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
  const tour = SHOWCASE.map((s) => ({
    title: s.eyebrow, body: s.body, caption: s.title, href: s.href, icon: <Icon name={s.icon} />,
    panel: (
      <>
        <Visual kind={s.visual} />
        <ul className="mt-4 flex flex-wrap justify-center gap-2">{s.points.map((p) => <li key={p} className="hm-chip">{p}</li>)}</ul>
      </>
    ),
  }));

  return (
    <div className="hm">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqLd }} />

      {/* 1 · Hero */}
      <section className="hm-hero">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="hm-bokeh" style={{ width: 210, height: 210, top: "-4rem", right: "8%" }} />
          <span className="hm-bokeh" style={{ width: 120, height: 120, bottom: "10%", left: "4%" }} />
          <span className="hm-bokeh" style={{ width: 60, height: 60, top: "30%", left: "45%" }} />
        </div>
        <div className="container-x relative z-10 grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_1.12fr]">
          <div className="reveal min-w-0">
            <span className="hm-hr-pill"><span className="hm-hr-dot" aria-hidden />AI visiting-card CRM</span>
            <h1 className="hm-hr-title mt-5" data-typed="" aria-label="Every Card You Collect, Scanned Into A Relationship.">
              <span className="ln-mask" aria-hidden><span className="ln" style={{ animationDelay: "0ms" }}>Every Card You</span></span>{" "}
              <span className="ln-mask" aria-hidden><span className="ln" style={{ animationDelay: "120ms" }}>Collect, <span className="hm-accent">Scanned</span></span></span>{" "}
              <span className="ln-mask" aria-hidden><span className="ln hm-accent" style={{ animationDelay: "240ms" }}>Into A Relationship.</span></span>
            </h1>
            <p className="hm-hr-lead mt-6">eCard reads visiting cards with AI, files them as clean contacts, remembers where you met, and sends the follow-up by email, WhatsApp or your own digital card.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={SITE.signUp} className="hm-btn hm-btn-primary">Start Free With A 14-Day Pro Trial <ArrowRight className="size-4" aria-hidden /></a>
              <a href="#try" className="hm-btn hm-btn-ghost">Try A Sample Scan</a>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2.5">{PROOF.map((t) => <li key={t} className="hm-hr-proof"><Check className="size-4" aria-hidden />{t}</li>)}</ul>
          </div>
          <div className="reveal min-w-0" data-depth="" style={{ ["--depth" as string]: "-22px" }}>
            <HeroScanStory />
          </div>
        </div>
      </section>

      {/* 2 · Stats strip */}
      <section aria-label="eCard at a glance" className="hm-stats">
        <ul className="container-x grid grid-cols-2 gap-3 py-12 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {STATS.map(([v, k, I]) => <li key={k} className="hm-stat"><span className="hm-stat-ic" aria-hidden><I /></span><p className="hm-stat-num">{v}</p><p className="mt-2 text-sm font-bold text-ink-950">{k}</p></li>)}
        </ul>
      </section>

      {/* 2b · Interactive 3D card */}
      <section className="container-x hm-sec grid items-center gap-10 lg:grid-cols-2">
        <SectionHead align="left" pill="Your digital card" title="Hand Over A Card" accent="They Can Keep." lead="Every eCard user gets a digital business card with a QR code, Save-to-contacts and a short link that counts opens. This one is a sample. Tilt it and flip it." />
        <Card3D />
      </section>

      {/* 3 · Product tour (plain) */}
      <section id="features" className="container-x hm-sec scroll-mt-28">
        <SectionHead pill="Inside eCard" title="From a stack of cards" accent="to a working network." lead="Details are read by AI and checked against Google Maps. Each card becomes a contact you can tag, search and follow up with." />
        <ProductTour items={tour} />
      </section>

      {/* 4 · Features bento (plain) */}
      <section className="container-x hm-sec pt-0">
        <SectionHead pill="Everything in one place" title="One workspace for" accent="every person you meet." />
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GRID.map((g, i) => (
            <li key={g.title} className={WIDE[i] ? "lg:col-span-2" : ""}>
              <Link href={g.href} className={`hm-bento hm-card-hover${WIDE[i] ? " is-wide" : ""}`}>
                <span className="hm-ic-tile" aria-hidden><Icon name={g.icon} /></span>
                <h3 className="mt-6 text-xl font-bold text-ink-950">{toTitleCase(g.title)}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-ink-700">{g.body}</p>
                {WIDE[i] && g.chips && <span className="mt-5 flex flex-wrap gap-2">{g.chips.map((c) => <span key={c} className="hm-chip">{c}</span>)}</span>}
                <span className="mt-auto inline-flex items-center gap-1 pt-6 font-bold text-brand-600">Learn More<ArrowRight className="hm-arrow size-4" aria-hidden /></span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center"><Link href="/platform-overview" className="hm-outline">Explore The Platform <ArrowRight className="size-4" aria-hidden /></Link></div>
      </section>

      {/* 5 · How it works (band) */}
      <section className="hm-band hm-band-sec">
        <div className="container-x relative">
          <SectionHead pill="How it works" title="Paper to digital" accent="in four steps." />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([i, t, b]) => (
              <li key={t} className="hm-step">
                <span className="hm-ic-tile" aria-hidden><Icon name={i} /></span>
                <h3 className="mt-6 text-xl font-bold text-ink-950">{toTitleCase(t)}</h3>
                <p className="mt-3 leading-relaxed text-ink-700">{b}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 text-center"><a href={SITE.signUp} className="hm-btn hm-btn-primary">Start Free With A 14-Day Pro Trial <ArrowRight className="size-4" aria-hidden /></a></div>
        </div>
      </section>

      {/* 6 · Split: team & admin checklist + mocks (plain) */}
      <section className="container-x hm-sec grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="min-w-0">
          <SectionHead align="left" pill="Team & admin" title="Controls your admin" accent="will actually like." />
          <div className="mt-6 flex flex-wrap gap-2">{ROLES.map((r) => <span key={r} className="hm-chip">{r}</span>)}</div>
          <ul className="mt-8 grid gap-4">{TEAM_POINTS.map((t) => <li key={t} className="flex items-start gap-3 text-ink-700"><span className="hm-tick" aria-hidden><Check className="size-3.5" /></span>{t}</li>)}</ul>
          <Link href="/team-and-security" className="mt-8 inline-flex items-center gap-1 font-bold text-brand-600">Team & Security <ArrowRight className="size-4" aria-hidden /></Link>
        </div>
        <div className="grid min-w-0 gap-4 sm:grid-cols-2"><Visual kind="team" /><Visual kind="security" /></div>
      </section>

      {/* 7 · Use cases + integrations panel (plain) */}
      <section id="usecases" className="container-x hm-sec scroll-mt-28 pt-0">
        <SectionHead pill="Use cases" title="Made for whoever collects" accent="cards for a living." />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((u) => (
            <li key={u.title}>
              <Link href={u.href} className="hm-team hm-card-hover group">
                <span className="hm-ic-soft" aria-hidden><Icon name={u.icon} /></span>
                <h3 className="mt-5 font-bold leading-snug text-ink-950">{toTitleCase(u.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{u.body}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-bold text-brand-600">Explore<ArrowRight className="hm-arrow size-3.5" aria-hidden /></span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hm-uc-panel mt-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600">Integrations</p><h3 className="mt-2 text-xl font-bold text-ink-950">Plugs Into The Tools You Already Use.</h3></div>
            <Link href="/integrations" className="inline-flex items-center gap-1 text-sm font-bold text-brand-600">All integrations <ArrowRight className="size-3.5" aria-hidden /></Link>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {INTEGRATIONS.map(([n, s], i) => <li key={s}><Link href={pathFor(`integrations/${s}`)} className="hm-uc-item hm-card-hover"><span className="hm-uc-num" aria-hidden>{String(i + 1).padStart(2, "0")}</span>{titleFor(`integrations/${s}`)}</Link></li>)}
          </ul>
        </div>
        <div className="mt-10 text-center"><Link href="/use-cases" className="hm-outline">All Use Cases <ArrowRight className="size-4" aria-hidden /></Link></div>
      </section>

      {/* 8 · Try it (band) */}
      <section id="try" className="hm-band hm-band-sec scroll-mt-28">
        <div className="container-x relative">
          <SectionHead pill="Try it" title="Pick a card." accent="Watch eCard read it." lead="A sample demo with no upload and no AI call. Sign up to scan your real cards." />
          <div className="mx-auto mt-14 max-w-5xl"><SampleScan /></div>
        </div>
      </section>

      {/* 9 · Calculator (plain) */}
      <section className="container-x hm-sec">
        <SectionHead pill="Time saved" title="How much typing" accent="could you skip?" />
        <div className="mx-auto mt-14 max-w-5xl"><TimeSaved /></div>
      </section>

      {/* 10 · Pricing (plain) */}
      <section id="pricing" className="container-x hm-sec scroll-mt-28 pt-0">
        <SectionHead pill="Pricing" title="Start free, upgrade" accent="as your network grows." />
        <div className="mt-14"><PricingTable /></div>
        <div className="mt-10 text-center"><Link href="/pricing/compare-plans" className="hm-outline">Compare Every Plan In Detail <ArrowRight className="size-4" aria-hidden /></Link></div>
      </section>

      {/* 11 · FAQ (plain) */}
      <section id="faq" className="container-x hm-sec scroll-mt-28 pt-0">
        <SectionHead pill="FAQ" title="Questions," accent="answered." />
        <div className="hm-faq mx-auto mt-10 max-w-3xl"><FaqList faqs={FAQS} /></div>
        <div className="mt-10 text-center"><Link href="/help-center" className="hm-outline">Help &amp; FAQ <ArrowRight className="size-4" aria-hidden /></Link></div>
      </section>

      {/* 12 · Closing CTA panel */}
      <section className="container-x hm-sec pt-0 pb-20">
        <div className="hm-cta">
          <span className="hm-cta-shape a" aria-hidden /><span className="hm-cta-shape b" aria-hidden />
          <h2 className="hm-title relative mx-auto max-w-3xl text-center">Turn Your Next Stack Of Cards <span className="hm-accent">Into Relationships.</span></h2>
          <p className="hm-lead relative mx-auto mt-5 max-w-xl text-center">Scan, remember and follow up with every person you meet.</p>
          <div className="relative mt-9 flex flex-wrap justify-center gap-3">
            <a href={SITE.signUp} className="hm-btn hm-btn-primary">Start Free <ArrowRight className="size-4" aria-hidden /></a>
            <Link href="/pricing" className="hm-outline">Pricing</Link>
          </div>
          <ul className="relative mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-700">{PROOF.map((t) => <li key={t} className="flex items-center gap-1.5"><Check className="size-4 text-brand-600" aria-hidden />{t}</li>)}</ul>
        </div>
      </section>
    </div>
  );
}
