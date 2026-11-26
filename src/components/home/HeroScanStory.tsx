import { Mail, MessageCircle, Check, Phone, AtSign, MapPin, ScanLine } from "lucide-react";

/**
 * Home hero visual — a looping 9s story told in pure CSS:
 * a paper visiting card drops in → scan frame locks on → a beam reads it →
 * fields fly across into an (initially empty) contact panel → it is saved → follow-ups go out.
 * Sample data only.
 */
const FIELDS = [
  { k: "Name", v: "Priya Shah", c: "99%" },
  { k: "Company", v: "Sample Realty", c: "97%" },
  { k: "Phone", v: "+91 98xxx xxx10", c: "95%" },
  { k: "Email", v: "priya@example.com", c: "98%" },
];

export function HeroScanStory() {
  return (
    <div className="hs" role="img" aria-label="Illustration: a paper visiting card is scanned and becomes a digital contact with follow-ups sent (sample data)">
      <div className="hs-stage" aria-hidden>
        {/* Paper card inside a fixed scan frame */}
        <div className="hs-scan">
          <span className="hs-corner tl" /><span className="hs-corner tr" /><span className="hs-corner bl" /><span className="hs-corner br" />
          <div className="hs-paper">
            <div className="hs-paper-top">
              <span className="hs-paper-logo" />
              <span className="hs-paper-qr" />
            </div>
            <b>Priya Shah</b>
            <small>Sales Manager · Sample Realty</small>
            <ul className="hs-paper-lines">
              <li><Phone /> +91 98xxx xxx10</li>
              <li><AtSign /> priya@example.com</li>
              <li><MapPin /> Andheri East, Mumbai</li>
            </ul>
            <span className="hs-beam" />
          </div>
          <span className="hs-scan-label"><ScanLine className="size-3.5" /> <i>Reading card…</i></span>
        </div>

        {/* Fields in flight */}
        {FIELDS.slice(0, 3).map((f, i) => (
          <span key={f.k} className="hs-fly" style={{ ["--i" as string]: i }}>{f.v}</span>
        ))}

        {/* Digital contact — visible from the start as an empty skeleton, then filled */}
        <div className="hs-contact">
          <div className="hs-contact-head">
            <span className="hs-avatar"><i>PS</i></span>
            <span><b>New contact</b><small>Waiting for scan…</small><small className="hs-ready">Reviewed · ready to save</small></span>
          </div>
          <ul>
            {FIELDS.map((f, i) => (
              <li key={f.k} style={{ ["--i" as string]: i }}>
                <small>{f.k}</small><b>{f.v}</b><em>{f.c}</em>
              </li>
            ))}
          </ul>
          <span className="hs-saved"><Check className="size-3.5" /> Saved to contacts</span>
        </div>

        {/* Follow-ups */}
        <span className="hs-toast t1"><Mail className="size-3.5" /> Intro email sent</span>
        <span className="hs-toast t2"><MessageCircle className="size-3.5" /> WhatsApp · Marathi</span>
      </div>

      <div className="hs-progress" aria-hidden>
        <span className="hs-bar" />
        <ol><li>Scan</li><li>Read</li><li>Save</li><li>Follow up</li></ol>
      </div>
      <p className="hs-note">Illustration · sample data</p>
    </div>
  );
}
