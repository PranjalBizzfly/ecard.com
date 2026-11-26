import { Check, MapPin, Mic, QrCode, Send, ShieldCheck, Sparkles, Eye, FileText, MessageCircle, KeyRound, Users } from "lucide-react";
import type { VisualKey } from "@/content/types";

function Frame({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <figure className={`pm-window ${className}`}>
      <div className="pm-bar">
        <span className="pm-dots" aria-hidden><i /><i /><i /></span>
        <span className="pm-url">app.ecard.gg · {title}</span>
        <span className="pm-chip">Sample</span>
      </div>
      <div className="pm-body">{children}</div>
      <figcaption className="pm-cap">Illustration · sample data, not real customer information</figcaption>
    </figure>
  );
}

const Bar = ({ w, c = "bg-ink-100" }: { w: string; c?: string }) => <span className={`block h-2 rounded-full ${c}`} style={{ width: w }} />;

function PaperCard() {
  return (
    <div className="relative rotate-[-3deg] rounded-xl border border-ink-100 bg-gradient-to-br from-surface to-ink-50 p-4 shadow-md">
      <p className="font-semibold text-ink-950">Priya Shah</p>
      <p className="text-xs text-ink-500">Sales Manager · Sample Realty</p>
      <div className="mt-3 space-y-1 text-[11px] text-ink-700"><p>+91 98xxx xxx10</p><p>priya@example.com</p><p>Andheri East, Mumbai</p></div>
      <span className="absolute inset-x-0 top-1/2 h-0.5 animate-pulse bg-brand-600/70" aria-hidden />
    </div>
  );
}

function Scan() {
  const fields: [string, string, number][] = [["Name", "Priya Shah", 99], ["Company", "Sample Realty", 97], ["Phone", "+91 98xxx xxx10", 95], ["Email", "priya@example.com", 98], ["Address", "Andheri East, Mumbai", 88]];
  return (
    <Frame title="Scan · review before saving">
      <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr]">
        <PaperCard />
        <ul className="space-y-2">
          {fields.map(([k, v, c]) => (
            <li key={k} className="flex items-center justify-between gap-2 rounded-lg border border-ink-100 px-3 py-2 text-xs">
              <span><span className="block text-ink-500">{k}</span><span className="font-medium text-ink-950">{v}</span></span>
              <span className={`rounded-full px-2 py-0.5 font-semibold ${c > 90 ? "bg-mint-100 text-mint-600" : "bg-amber-100 text-amber-500"}`}>{c}%</span>
            </li>
          ))}
          <li className="flex gap-2 pt-1"><span className="btn-primary !px-3 !py-1.5 text-xs">Save Contact</span><span className="btn-ghost !px-3 !py-1.5 text-xs">Edit</span></li>
        </ul>
      </div>
    </Frame>
  );
}

function Extract() {
  return (
    <Frame title="Contact extraction">
      <div className="space-y-3">
        <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-brand-100 font-bold text-brand-700">RK</span><div><p className="font-semibold">Rohan Kulkarni</p><p className="text-xs text-ink-500">Founder · Sample Labs</p></div></div>
        <div className="flex flex-wrap gap-1.5">{["expo-2026", "Pune", "investor", "warm"].map((t) => <span key={t} className="rounded-full bg-ink-50 px-2.5 py-1 text-xs text-ink-700">#{t}</span>)}</div>
        <p className="flex items-center gap-2 rounded-lg bg-mint-100 px-3 py-2 text-xs text-mint-600"><MapPin className="size-3.5" aria-hidden /> Address checked against Google Maps</p>
        <div className="space-y-1.5"><Bar w="90%" /><Bar w="70%" /><Bar w="80%" /></div>
      </div>
    </Frame>
  );
}

function Card() {
  return (
    <Frame title="ecard.gg/c/sample">
      <div className="mx-auto max-w-xs rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-5 text-white shadow-lg">
        <div className="flex items-center gap-3"><span className="grid size-12 place-items-center rounded-full bg-white/20 text-lg font-bold">AM</span><div><p className="font-semibold">Aarav Mehta</p><p className="text-xs text-white/75">Partner · Sample Agency</p></div></div>
        <div className="mt-5 grid grid-cols-[1fr_auto] items-end gap-3">
          <div className="space-y-2 text-xs"><p className="rounded-lg bg-white/15 px-3 py-2">Save to contacts</p><p className="rounded-lg bg-white/15 px-3 py-2">Company profile (PDF)</p><p className="rounded-lg bg-white/15 px-3 py-2">WhatsApp</p></div>
          <span className="grid size-16 place-items-center rounded-lg bg-white text-night"><QrCode className="size-12" aria-hidden /></span>
        </div>
      </div>
    </Frame>
  );
}

function Dashboard() {
  const rows = [["Priya Shah", "Sample Realty", "Emailed"], ["Rohan Kulkarni", "Sample Labs", "WhatsApp"], ["Neha Iyer", "Sample Clinic", "Review"], ["Kabir Rao", "Sample Exports", "Emailed"]];
  return (
    <Frame title="Workspace · Contacts">
      <div className="grid grid-cols-3 gap-2">{[["Contacts", "248"], ["This event", "36"], ["Follow-ups", "12"]].map(([k, v]) => <div key={k} className="rounded-xl bg-ink-50 p-3"><p className="text-[11px] text-ink-500">{k}</p><p className="text-xl font-bold">{v}</p></div>)}</div>
      <table className="mt-4 w-full text-left text-xs"><thead className="text-ink-500"><tr><th className="pb-2 font-medium">Name</th><th className="hidden pb-2 font-medium sm:table-cell">Company</th><th className="pb-2 font-medium">Status</th></tr></thead>
        <tbody>{rows.map((r) => <tr key={r[0]} className="border-t border-ink-100"><td className="py-2 font-medium">{r[0]}</td><td className="hidden py-2 text-ink-500 sm:table-cell">{r[1]}</td><td className="py-2"><span className="rounded-full bg-brand-50 px-2 py-0.5 text-brand-700">{r[2]}</span></td></tr>)}</tbody></table>
    </Frame>
  );
}

function Chat({ title, accent, lines }: { title: string; accent: string; lines: { me?: boolean; t: string }[] }) {
  return (
    <Frame title={title}>
      <div className="space-y-2.5 rounded-xl bg-ink-50 p-3">
        {lines.map((l, i) => <p key={i} className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${l.me ? `ml-auto ${accent} text-white` : "bg-surface text-ink-900 shadow-sm"}`}>{l.t}</p>)}
      </div>
    </Frame>
  );
}

function Email() {
  return (
    <Frame title="Intro email · preview">
      <div className="space-y-3 text-xs">
        <p><span className="text-ink-500">To:</span> priya@example.com</p>
        <p><span className="text-ink-500">Subject:</span> Great meeting you at the Sample Property Expo</p>
        <div className="space-y-1.5 rounded-lg border border-ink-100 p-3"><Bar w="95%" /><Bar w="88%" /><Bar w="60%" /></div>
        <div className="flex items-center justify-between rounded-lg bg-brand-50 px-3 py-2 text-brand-700"><span className="flex items-center gap-2"><Send className="size-3.5" aria-hidden />Sending in 5s from your SMTP</span><span className="font-semibold">Edit · Cancel</span></div>
      </div>
    </Frame>
  );
}

function Meeting() {
  return (
    <Frame title="Meeting memory">
      <ul className="space-y-3 text-xs">
        <li className="flex gap-2"><MapPin className="size-4 text-brand-600" aria-hidden /><span><b>Where:</b> Sample Startup Summit, Bengaluru</span></li>
        <li className="flex gap-2"><Users className="size-4 text-brand-600" aria-hidden /><span><b>Introduced by:</b> Sample contact</span></li>
        <li className="flex items-center gap-2 rounded-lg bg-ink-50 p-2"><Mic className="size-4 text-brand-600" aria-hidden /><span className="flex h-6 flex-1 items-end gap-0.5">{[3, 5, 8, 4, 9, 6, 3, 7, 5, 8, 4, 6, 9, 5, 3].map((h, i) => <span key={i} className="w-1 rounded bg-brand-400" style={{ height: `${h * 10}%` }} />)}</span><span>0:42</span></li>
        <li className="rounded-lg border border-brand-100 bg-brand-50 p-3"><p className="mb-1 flex items-center gap-1 font-semibold text-brand-700"><Sparkles className="size-3.5" aria-hidden />AI summary</p><div className="space-y-1.5"><Bar w="92%" c="bg-brand-100" /><Bar w="75%" c="bg-brand-100" /></div></li>
      </ul>
    </Frame>
  );
}

function Analytics() {
  const bars = [30, 45, 38, 60, 52, 75, 68];
  return (
    <Frame title="Link tracking · bots filtered">
      <div className="grid grid-cols-3 gap-2 text-xs">{[[Eye, "Card views"], [FileText, "PDF opens"], [MessageCircle, "WhatsApp clicks"]].map(([I, k]) => { const C = I as typeof Eye; return <div key={k as string} className="rounded-xl bg-ink-50 p-3"><C className="mb-1 size-4 text-brand-600" aria-hidden /><p className="text-ink-500">{k as string}</p></div>; })}</div>
      <div className="mt-4 flex h-28 items-end gap-2">{bars.map((h, i) => <span key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-brand-700 to-brand-400" style={{ height: `${h}%` }} />)}</div>
    </Frame>
  );
}

function Team() {
  const roles = [["Owner", "Full control"], ["Admin", "Manage workspace"], ["Manager", "Manage team"], ["Member", "Own contacts"], ["Scan-only guest", "Scan cards"]];
  return (
    <Frame title="Team · roles">
      <ul className="space-y-2 text-xs">{roles.map(([r, d], i) => <li key={r} className="flex items-center justify-between rounded-lg border border-ink-100 px-3 py-2"><span className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-full bg-brand-100 font-semibold text-brand-700">{String.fromCharCode(65 + i)}</span><b>{r}</b></span><span className="text-ink-500">{d}</span></li>)}</ul>
    </Frame>
  );
}

function Security() {
  const items = ["Two-factor sign-in (authenticator codes)", "Recovery codes & trusted devices", "Login alerts", "API keys & SMTP passwords: AES-256-GCM", "Audit log", "Consent, export & deletion tools"];
  return (
    <Frame title="Security settings">
      <ul className="space-y-2 text-xs">{items.map((t) => <li key={t} className="flex items-center gap-2 rounded-lg bg-ink-50 px-3 py-2"><ShieldCheck className="size-4 text-mint-600" aria-hidden />{t}</li>)}</ul>
    </Frame>
  );
}

function Integrations() {
  const names = ["Telegram", "WhatsApp", "Gmail", "Outlook", "Google Contacts", "Google Maps", "Razorpay · UPI", "Stripe", "Claude", "OpenAI", "Gemini", "Zoho Mail", "SendGrid", "Webhooks", "CSV import"];
  return (
    <Frame title="Integrations">
      <ul className="flex flex-wrap gap-2">{names.map((n) => <li key={n} className="rounded-full border border-ink-100 bg-surface px-3 py-1.5 text-xs font-medium">{n}</li>)}</ul>
    </Frame>
  );
}

function Pricing() {
  return (
    <Frame title="Plans · INR / month">
      <ul className="space-y-2 text-xs">{[["Free", "₹0"], ["Starter", "₹299"], ["Professional", "₹999"], ["Business", "₹2,999"], ["Enterprise", "Custom"]].map(([n, p]) => <li key={n} className="flex justify-between rounded-lg bg-ink-50 px-3 py-2"><b>{n}</b><span>{p}</span></li>)}</ul>
    </Frame>
  );
}

function Keys() {
  return (
    <Frame title="AI keys · pool & failover">
      <ul className="space-y-2 text-xs">{["Key A · active", "Key B · standby", "Key C · rate-limited → skipped"].map((k, i) => <li key={k} className="flex items-center gap-2 rounded-lg border border-ink-100 px-3 py-2"><KeyRound className={`size-4 ${i === 2 ? "text-amber-500" : "text-mint-600"}`} aria-hidden />{k}{i === 0 && <Check className="ml-auto size-4 text-mint-600" aria-hidden />}</li>)}</ul>
    </Frame>
  );
}

export function Visual({ kind }: { kind: VisualKey }) {
  switch (kind) {
    case "scan": return <Scan />;
    case "extract": return <Extract />;
    case "card": return <Card />;
    case "dashboard": return <Dashboard />;
    case "telegram": return <Chat title="Telegram · eCard bot" accent="bg-sky-500" lines={[{ me: true, t: "📷 [photo of a visiting card]" }, { t: "Saved: Priya Shah · Sample Realty. Intro email queued." }, { t: "[ Open ]   [ Send ]" }]} />;
    case "whatsapp": return <Chat title="WhatsApp · English / हिंदी / मराठी" accent="bg-mint-600" lines={[{ me: true, t: "Hi Priya, great meeting you at the expo today! Sharing my card: ecard.gg/c/sample" }, { t: "Thanks! Will check it out." }]} />;
    case "email": return <Email />;
    case "meeting": return <Meeting />;
    case "analytics": return <Analytics />;
    case "team": return <Team />;
    case "security": return <Security />;
    case "integrations": return <Integrations />;
    case "pricing": return <Pricing />;
    default: return null;
  }
}

export { Keys as KeysVisual };
