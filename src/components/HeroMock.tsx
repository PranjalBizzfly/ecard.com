import {
  BarChart3, Bot, Building2, Calendar, Check, Eye, CheckCircle2, ChevronRight, FileText, Filter, Globe, KeyRound, Link2,
  Lock, Mail, MapPin, Mic, Paperclip, QrCode, RefreshCw, Search, Send, ShieldCheck, Smartphone, Sparkles, Tag, Users, Zap,
} from "lucide-react";
import type { CategoryKey, PageDef } from "@/content/types";
import { PLANS, WA_LANGUAGES } from "@/content/site";
import { toTitleCase } from "@/lib/text";

/* ---------------------------------------------------------------------------
   HeroMock — a decorative, page-specific product illustration for inner heroes.
   Every template is filled from the page's own title, headings and items, and
   shows sample data only (labelled "Sample"). Tokens only, so it works in both themes.
--------------------------------------------------------------------------- */

export type MockKind =
  | "scan" | "crm" | "card" | "email" | "whatsapp" | "telegram" | "meeting" | "event" | "analytics"
  | "admin" | "integration" | "pipeline" | "pricing" | "article" | "legal" | "overview" | "phone";

const clip = (s: string, n = 40) => {
  const t = s.replace(/\s+/g, " ").trim();
  return t.length > n ? `${t.slice(0, n - 1).trimEnd()}…` : t;
};

/** Short items from the page's sections, in reading order. */
function itemsOf(page: PageDef): string[] {
  const out: string[] = [];
  for (const s of page.sections) {
    switch (s.type) {
      case "bullets": out.push(...s.items); break;
      case "steps": out.push(...s.steps.map((x) => x.title)); break;
      case "cards": out.push(...s.cards.map((x) => x.title)); break;
      case "table": out.push(...s.rows.map((r) => r[0] ?? "")); break;
      case "split": out.push(...s.points); break;
      default: break;
    }
  }
  // Prefer the short phrase before a colon/dash so labels stay compact.
  return out.map((x) => x.split(/[:—–]| - /)[0]).map((x) => x.replace(/[.]$/, "").trim()).filter(Boolean);
}

function stepsOf(page: PageDef): string[] {
  const steps = page.sections.flatMap((s) => (s.type === "steps" ? s.steps.map((x) => x.title) : []));
  return steps.length >= 3 ? steps : page.sections.flatMap((s) => ("heading" in s ? [s.heading] : []));
}

function headingsOf(page: PageDef) {
  return page.sections.flatMap((s) => ("heading" in s ? [s.heading] : s.type === "callout" ? [s.title] : []));
}

/** Pad a list with fallbacks so every template always has enough rows. */
function take(list: string[], n: number, fallback: string[], len = 34) {
  const seen = new Set<string>();
  const res: string[] = [];
  for (const x of [...list, ...fallback]) {
    const c = clip(toTitleCase(x), len);
    if (!c || seen.has(c.toLowerCase())) continue;
    seen.add(c.toLowerCase());
    res.push(c);
    if (res.length === n) break;
  }
  return res;
}

/** Deterministic pseudo-random numbers from the slug so each page's sample numbers differ. */
function seeded(slug: string) {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) h = Math.imul(h ^ slug.charCodeAt(i), 16777619);
  return (min: number, max: number) => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return min + ((h >>> 0) % (max - min + 1));
  };
}

const OVERVIEW_CATS: CategoryKey[] = [
  "company", "aboutus", "corporate", "business", "contacts", "engagement", "platform", "more",
  "customerSites", "businessSites", "developerSites", "corporateSites", "reportingSites",
];

export function mockKindOf(page: PageDef): MockKind {
  const slug = (page.id ?? page.slug).toLowerCase();
  const has = (...k: string[]) => k.some((x) => slug.includes(x));
  const wa = has("whatsapp", "hindi", "marathi", "multilingual", "multi-language");
  switch (page.category) {
    case "scanning": return "scan";
    case "crm": return "crm";
    case "cards": return "card";
    case "outreach": return wa ? "whatsapp" : "email";
    case "telegram": return "telegram";
    case "meetings": return "meeting";
    case "events": return "event";
    case "analytics": return "analytics";
    case "team": case "trust": return "admin";
    case "integrations": return has("telegram") ? "telegram" : has("whatsapp") ? "whatsapp" : "integration";
    case "solutions": case "offerings": case "customers": return "pipeline";
    case "pricing": case "deals": return "pricing";
    case "resources": case "support": case "helpdesk": case "library": return "article";
    case "legal": case "legalhub": return "legal";
    case "mobile": return "phone";
    default: break;
  }
  if (OVERVIEW_CATS.includes(page.category)) {
    // Keyword refinements keep generic categories on-topic (e.g. platform/dashboard → analytics).
    if (has("sample-scan", "paper-to-digital")) return "scan";
    if (wa) return "whatsapp";
    if (has("telegram")) return "telegram";
    if (has("dashboard", "time-saved", "reporting-sites/surveys", "investors")) return "analytics";
    if (has("follow-up")) return "email";
    if (has("relationship-memory")) return "meeting";
    if (has("plan-picker")) return "pricing";
    if (has("digital-card", "card-example")) return "card";
    if (has("for-teams", "workspace", "compliance", "data-ownership", "bring-your-own-ai", "account-recovery", "trust", "speak-up", "ethics")) return "admin";
    if (has("developer-sites/api", "developer-sites/integrations", "developer-sites/sandbox", "developer-sites/developers")) return "integration";
    if (has("developer-sites/docs", "academy", "how-it-works")) return "article";
  }
  return "overview";
}

/* ------------------------------- frames -------------------------------- */

function Browser({ url, children, label }: { url: string; children: React.ReactNode; label: string }) {
  return (
    <figure className="pm-window hx-win" role="img" aria-label={`${label} (sample illustration)`}>
      <div className="pm-bar" aria-hidden>
        <span className="pm-dots"><i /><i /><i /></span>
        <span className="pm-url"><Lock className="hx-lock" /> app.ecard.gg/{url}</span>
        <span className="pm-chip">Sample</span>
      </div>
      <div className="pm-body hx-body" aria-hidden>{children}</div>
      <figcaption className="pm-cap" aria-hidden>Illustration · sample data, not real customer information</figcaption>
    </figure>
  );
}

function Phone({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <figure className="hx-phone" role="img" aria-label={`${label} (sample illustration)`}>
      <div className="hx-phone-screen" aria-hidden>
        <div className="hx-notch" />
        <div className="hx-status"><span>9:41</span><span className="pm-chip">Sample</span></div>
        {children}
      </div>
    </figure>
  );
}

const Head = ({ icon, title, sub }: { icon: React.ReactNode; title: string; sub?: string }) => (
  <div className="hx-head">
    <span className="hx-ic">{icon}</span>
    <span className="min-w-0"><b>{title}</b>{sub && <small>{sub}</small>}</span>
  </div>
);

const Meter = ({ v, tone = "brand" }: { v: number; tone?: "brand" | "mint" | "amber" }) => (
  <span className={`hx-meter is-${tone}`}><i style={{ width: `${v}%` }} /></span>
);

/* ------------------------------ templates ------------------------------ */

type T = { page: PageDef; items: string[]; r: (a: number, b: number) => number; title: string };

function ScanMock({ items, r, title }: T) {
  const labels = take(items, 6, ["Name", "Company", "Phone", "Email", "Address", "Website"], 26);
  const values = ["Priya S. (sample)", "Sample Realty", "+91 98xxx xxx10", "priya@example.com", "Andheri East, Mumbai", "example.com"];
  return (
    <Browser url="scan/review" label={`Card scan review for ${title}`}>
      <Head icon={<Sparkles />} title={title} sub="Scan · review before saving" />
      <div className="hx-scan">
        <div className="hx-paper">
          <b>Priya S.</b><small>Sales Manager · Sample Realty</small>
          <span className="hx-line w-70" /><span className="hx-line w-50" /><span className="hx-line w-60" />
          <QrCode className="hx-paper-qr" />
          <span className="hx-scanline" />
        </div>
        <ul className="hx-fields">
          {labels.map((l, i) => {
            const c = i === 4 ? r(78, 88) : r(92, 99);
            return (
              <li key={l}>
                <span className="hx-field-k">{l}</span>
                <span className="hx-field-v">{values[i]}</span>
                <span className="hx-field-c"><Meter v={c} tone={c > 90 ? "mint" : "amber"} /><em>{c}%</em></span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hx-actions"><span className="hx-btn">Save Contact</span><span className="hx-btn is-ghost">Edit Fields</span></div>
    </Browser>
  );
}

function CrmMock({ page, items, r, title }: T) {
  const q = clip(page.title, 26).toLowerCase();
  const tags = take(items, 3, ["Warm", "Expo", "Follow-up"], 16);
  const people = [["AS", "Sample Contact A", "Sample Labs"], ["RK", "Sample Contact B", "Demo Traders"], ["MN", "Sample Contact C", "Example Co."], ["JD", "Sample Contact D", "Placeholder Inc."], ["TV", "Sample Contact E", "Sample Studio"]];
  return (
    <Browser url="contacts" label={`Contacts list for ${title}`}>
      <div className="hx-search"><Search /><span>{q}</span><kbd>⌘K</kbd></div>
      <div className="hx-tags"><Filter />{tags.map((t) => <span key={t} className="hx-tag">#{t}</span>)}</div>
      <ul className="hx-rows">
        {people.map(([i, n, c], k) => (
          <li key={n} className={k === 0 ? "is-on" : ""}>
            <span className="hx-av">{i}</span>
            <span className="min-w-0 flex-1"><b>{n}</b><small>{c} · {tags[k % tags.length]}</small></span>
            <span className="hx-pill">{r(1, 9)}d</span>
          </li>
        ))}
      </ul>
      <p className="hx-foot"><Users /> {r(120, 980)} sample contacts · {title}</p>
    </Browser>
  );
}

function CardMock({ items, r, title }: T) {
  const chips = take(items, 4, ["Website", "Brochure PDF", "Book A Meeting", "LinkedIn"], 20);
  return (
    <Phone label={`Digital business card for ${title}`}>
      <div className="hx-dcard">
        <div className="hx-dcard-top"><span className="hx-av is-lg">PS</span><span><b>Priya S.</b><small>Sample Realty</small></span></div>
        <div className="hx-qr"><QrCode /></div>
        <p className="hx-dcard-t">{clip(title, 30)}</p>
      </div>
      <ul className="hx-links">
        {chips.map((c, i) => <li key={c}><Link2 /><span>{c}</span><em>{r(4, 60)} {i === 0 ? "views" : "clicks"}</em></li>)}
      </ul>
      <span className="hx-btn is-block">Save Contact</span>
    </Phone>
  );
}

function EmailMock({ items, title }: T) {
  const lines = take(items, 5, ["Thanks for meeting today", "Sharing my card and details", "Happy to set up a call", "Let me know a good time", "Looking forward to it"], 48);
  return (
    <Browser url="outreach/compose" label={`Email composer for ${title}`}>
      <Head icon={<Mail />} title={title} sub="AI draft · from your own mailbox" />
      <div className="hx-mail">
        <p><span>To</span><em className="hx-rcpt">Sample Contact A</em><em className="hx-rcpt">sample.b@example.com</em></p>
        <p><span>Subject</span>Great meeting you — {clip(title, 28)}</p>
        <div className="hx-mail-body">
          <p>Hi Sample Contact,</p>
          {lines.map((l) => <p key={l}><Sparkles className="hx-spark" />{l}.</p>)}
          <p className="hx-sig">Sent from my eCard workspace (sample)</p>
        </div>
        <div className="hx-sendbar"><span className="hx-sendbar-fill" /><b><Send /> Sending in 5s</b><em>Cancel</em></div>
      </div>
      <p className="hx-foot"><Paperclip /> Digital card attached · tracked links on</p>
    </Browser>
  );
}

function WhatsAppMock({ page, items, title }: T) {
  const s = page.id ?? page.slug;
  const lang = s.includes("marathi") ? WA_LANGUAGES[2] : s.includes("hindi") ? WA_LANGUAGES[1] : WA_LANGUAGES[0];
  const msg = s.includes("marathi") ? "नमस्कार! आज भेटून आनंद झाला." : s.includes("hindi") ? "नमस्ते! आज मिलकर अच्छा लगा।" : "Hi! Great meeting you today.";
  const line = take(items, 1, ["Here is my digital card"], 48)[0];
  return (
    <Phone label={`WhatsApp follow-up for ${title}`}>
      <div className="hx-chat-head is-wa"><span className="hx-av">SC</span><span><b>Sample Contact</b><small>WhatsApp · {lang}</small></span></div>
      <div className="hx-chat">
        <p className="hx-msg is-out">{msg}</p>
        <p className="hx-msg is-out">{line}<span className="hx-msg-link"><Link2 /> ecard.gg/sample</span></p>
        <p className="hx-msg is-in">Thanks, saved your card!</p>
      </div>
      <div className="hx-lang">{WA_LANGUAGES.map((l) => <span key={l} className={l === lang ? "is-on" : ""}>{l.split(" ")[0]}</span>)}</div>
    </Phone>
  );
}

function TelegramMock({ items, title }: T) {
  const line = take(items, 2, ["Card received", "Contact saved to your workspace"], 40);
  return (
    <Phone label={`Telegram bot chat for ${title}`}>
      <div className="hx-chat-head is-tg"><span className="hx-av"><Bot /></span><span><b>eCard Bot</b><small>bot · {clip(title, 22)}</small></span></div>
      <div className="hx-chat">
        <p className="hx-msg is-out hx-photo"><FileText /> card_front.jpg</p>
        <div className="hx-msg is-in">
          <b>{line[0]}</b>
          <span className="hx-mini">Priya S. · Sample Realty</span>
          <span className="hx-mini">{line[1]}</span>
          <span className="hx-tg-btns"><span>Open</span><span>Send Follow-up</span></span>
        </div>
      </div>
    </Phone>
  );
}

function MeetingMock({ items, r, title }: T) {
  const notes = take(items, 5, ["Interested in a demo", "Follow up next week", "Shares office in Pune", "Asked about pricing", "Send brochure"], 44);
  const bars = Array.from({ length: 26 }, () => r(20, 100));
  return (
    <Browser url="contacts/meeting-memory" label={`Meeting memory note for ${title}`}>
      <Head icon={<Calendar />} title={title} sub="Meeting memory · sample" />
      <div className="hx-meta">
        <span><MapPin /> Sample Expo Hall, Mumbai</span>
        <span><Users /> Introduced by Sample Contact B</span>
      </div>
      <div className="hx-wave"><Mic />{bars.map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}<em>0:{r(18, 58)}</em></div>
      <div className="hx-ai"><b><Sparkles /> AI summary</b>{notes.map((n) => <p key={n}>{n}</p>)}</div>
    </Browser>
  );
}

function EventMock({ items, r, title }: T) {
  const groups = take(items, 3, ["Hot leads", "Partners", "Follow later"], 22);
  return (
    <Browser url="events/board" label={`Event board for ${title}`}>
      <Head icon={<Calendar />} title={title} sub="Sample Trade Expo · Day 2" />
      <div className="hx-cols">
        {groups.map((g, i) => {
          const n = r(3, 14);
          return (
            <div key={g} className="hx-col">
              <b>{g}<em>{n}</em></b>
              {Array.from({ length: 3 }, (_, k) => <span key={k} className="hx-mini-card"><span className="hx-av is-sm">{String.fromCharCode(65 + i * 2 + k)}</span><span className="hx-line w-70" /></span>)}
            </div>
          );
        })}
      </div>
      <div className="hx-progress"><span>Follow-ups sent</span><Meter v={r(55, 90)} tone="mint" /></div>
    </Browser>
  );
}

function AnalyticsMock({ items, r, title }: T) {
  const labels = take(items, 3, ["Card views", "Link clicks", "PDF opens"], 18);
  const bars = Array.from({ length: 12 }, () => r(25, 100));
  return (
    <Browser url="analytics" label={`Analytics dashboard for ${title}`}>
      <Head icon={<BarChart3 />} title={title} sub="Last 30 days · sample" />
      <div className="hx-stats">
        {labels.map((l) => <div key={l} className="hx-stat"><small>{l}</small><b>{r(40, 990)}</b><em>+{r(3, 28)}%</em></div>)}
      </div>
      <div className="hx-chart">
        <svg viewBox="0 0 240 70" preserveAspectRatio="none" className="hx-chart-line">
          <polyline points={bars.map((b, i) => `${(i * 240) / 11},${70 - b * 0.6}`).join(" ")} />
        </svg>
        <div className="hx-chart-bars">{bars.map((b, i) => <i key={i} style={{ height: `${b}%` }} />)}</div>
      </div>
      <ul className="hx-sync">
        {take(items.slice(3), 3, ["Opened your card", "Clicked brochure", "Viewed website"], 30).map((x, i) => <li key={x}><Eye /><span className="min-w-0 flex-1">{x}</span><em>{r(1, 9)}{i ? "h" : "m"} ago</em></li>)}
      </ul>
    </Browser>
  );
}

function AdminMock({ items, r, title }: T) {
  const rows = take(items, 6, ["Two-factor sign-in", "Audit log", "Role permissions", "Data export", "Encrypted secrets", "Session control"], 30);
  return (
    <Browser url="settings/workspace" label={`Workspace settings for ${title}`}>
      <Head icon={<ShieldCheck />} title={title} sub="Settings · admin" />
      <ul className="hx-toggles">
        {rows.map((t, i) => (
          <li key={t}><span className="hx-ic is-sm">{i % 2 ? <KeyRound /> : <Lock />}</span><span className="flex-1 min-w-0">{t}</span><span className={`hx-switch ${i === 2 && r(0, 1) ? "" : "is-on"}`} /></li>
        ))}
      </ul>
      <div className="hx-roles">{["Owner", "Admin", "Member"].map((x) => <span key={x}><Users />{x}</span>)}</div>
    </Browser>
  );
}

function IntegrationMock({ page, items, r, title }: T) {
  const name = clip(page.title.replace(/integration(s)?/i, "").trim() || page.title, 18);
  const rows = take(items, 5, ["Contacts synced", "Events delivered", "Webhook verified", "Field mapping", "Retry on failure"], 30);
  return (
    <Browser url="settings/integrations" label={`eCard connected to ${name}`}>
      <div className="hx-link">
        <span className="hx-node is-brand"><Sparkles /><b>eCard</b></span>
        <span className="hx-wire"><RefreshCw /></span>
        <span className="hx-node"><Globe /><b>{name}</b></span>
      </div>
      <ul className="hx-sync">
        {rows.map((x, i) => <li key={x}><CheckCircle2 /><span className="flex-1 min-w-0">{x}</span><em>{i === 0 ? `${r(2, 59)}s ago` : "OK"}</em></li>)}
      </ul>
      <p className="hx-foot"><Zap /> Connected · {clip(title, 30)}</p>
    </Browser>
  );
}

function PipelineMock({ items, r, title }: T) {
  const stages = ["Met", "Followed up", "Meeting"];
  const cards = take(items, 9, ["Sample lead", "Follow-up call", "Proposal sent", "Demo request", "Referral", "Expo contact", "Inbound", "Partner intro"], 22);
  return (
    <Browser url="pipeline" label={`Pipeline board for ${title}`}>
      <Head icon={<Building2 />} title={title} sub="Pipeline · sample" />
      <div className="hx-cols">
        {stages.map((s, i) => (
          <div key={s} className="hx-col">
            <b>{s}<em>{r(2, 18)}</em></b>
            {cards.slice(i * 3, i * 3 + 3).map((c) => <span key={c} className="hx-kcard">{c}</span>)}
          </div>
        ))}
      </div>
    </Browser>
  );
}

function PricingMock({ page, title }: T) {
  const slug = page.id ?? page.slug;
  const pick = PLANS.find((p) => p.price !== null && slug.endsWith(`/${p.id}`)) ?? PLANS.find((p) => p.popular)!;
  const other = PLANS.find((p) => p.id === (pick.id === "starter" ? "free" : "starter"))!;
  const card = (p: typeof pick, main: boolean) => (
    <div className={`hx-plan ${main ? "is-main" : ""}`}>
      <b>{p.name}{p.popular && <em>Popular</em>}</b>
      <p className="hx-price">{p.price === null ? "Custom" : `₹${p.price.toLocaleString("en-IN")}`}<small>{p.price === null ? "" : "/month"}</small></p>
      <ul>
        <li><Check />{p.users} users</li><li><Check />{p.scans} scans</li><li><Check />{p.storage} storage</li>
      </ul>
    </div>
  );
  return (
    <Browser url="billing/plans" label={`${pick.name} plan for ${title}`}>
      <Head icon={<Tag />} title={title} sub="Monthly · INR · GST where applicable" />
      <div className="hx-plans">{card(other, false)}{card(pick, true)}</div>
    </Browser>
  );
}

function ArticleMock({ page, r, title }: T) {
  const steps = take(stepsOf(page), 6, ["Open your workspace", "Pick the setting", "Save changes", "Check the result", "Share with your team", "Get help if needed"], 38);
  const prog = r(30, 70);
  return (
    <Browser url={`help/${page.slug.split("/").pop() || "guide"}`} label={`Guide: ${title}`}>
      <div className="hx-read"><i style={{ width: `${prog}%` }} /></div>
      <Head icon={<FileText />} title={title} sub={`${steps.length} steps · ${page.faqs?.length ?? 0} FAQs`} />
      <ol className="hx-steps">
        {steps.map((s, i) => <li key={s} className={i === 1 ? "is-on" : ""}><span>{i < 1 ? <Check /> : i + 1}</span>{s}</li>)}
      </ol>
    </Browser>
  );
}

function LegalMock({ page, title }: T) {
  const outline = take(headingsOf(page), 7, ["Overview", "What we collect", "Your rights", "Contact", "Changes", "Definitions", "Questions"], 30);
  return (
    <Browser url={page.slug || "legal"} label={`Document outline for ${title}`}>
      <div className="hx-doc">
        <ul className="hx-outline">{outline.map((h, i) => <li key={h} className={i === 0 ? "is-on" : ""}>{i + 1}. {h}</li>)}</ul>
        <div className="hx-paperdoc">
          <b>{clip(title, 34)}</b>
          {[90, 100, 80, 95, 60, 100, 85, 70, 92, 66, 100, 78].map((w, i) => <span key={i} className="hx-line" style={{ width: `${w}%` }} />)}
        </div>
      </div>
    </Browser>
  );
}

const OV_ICONS = [Sparkles, Users, ShieldCheck, Zap, Globe, Mail];

function OverviewMock({ page, items, title }: T) {
  const cards = take(items.length ? items : headingsOf(page), 6, headingsOf(page).concat(["Overview", "Details", "Next steps", "Contact", "Resources", "Support"]), 26);
  return (
    <Browser url={page.slug} label={`Overview of ${title}`}>
      <Head icon={<Sparkles />} title={title} sub="Overview" />
      <div className="hx-tiles">
        {cards.map((c, i) => {
          const I = OV_ICONS[i % OV_ICONS.length];
          return <div key={c} className="hx-tile"><span className="hx-ic is-sm"><I /></span><b>{c}</b><span className="hx-line w-70" /></div>;
        })}
      </div>
    </Browser>
  );
}

function PhoneMock({ items, title }: T) {
  const rows = take(items, 4, ["Scan from your phone", "Share your card", "Follow up", "Works in any browser"], 26);
  return (
    <Phone label={`Mobile view for ${title}`}>
      <div className="hx-mhead"><Smartphone /><b>{clip(title, 24)}</b></div>
      <div className="hx-cam"><span className="hx-cam-card"><b>Priya S.</b><small>Sample Realty</small></span><span className="hx-scanline" /></div>
      <ul className="hx-links">{rows.map((x) => <li key={x}><ChevronRight /><span>{x}</span></li>)}</ul>
    </Phone>
  );
}

const MOCKS: Record<MockKind, (p: T) => React.ReactElement> = {
  scan: ScanMock, crm: CrmMock, card: CardMock, email: EmailMock, whatsapp: WhatsAppMock, telegram: TelegramMock,
  meeting: MeetingMock, event: EventMock, analytics: AnalyticsMock, admin: AdminMock, integration: IntegrationMock,
  pipeline: PipelineMock, pricing: PricingMock, article: ArticleMock, legal: LegalMock, overview: OverviewMock, phone: PhoneMock,
};

export const isPhoneMock = (k: MockKind) => k === "card" || k === "whatsapp" || k === "telegram" || k === "phone";

export function HeroMock({ page }: { page: PageDef }) {
  const kind = mockKindOf(page);
  const M = MOCKS[kind];
  return (
    <div className={`hx hx-${kind}`} data-mock={kind}>
      <M page={page} items={itemsOf(page)} r={seeded(page.slug)} title={toTitleCase(page.title)} />
    </div>
  );
}
