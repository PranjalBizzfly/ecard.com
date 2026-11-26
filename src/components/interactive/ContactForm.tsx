"use client";

import { useState } from "react";
import { SITE } from "@/content/site";
import { DEFAULT_COUNTRY, countryByIso } from "@/content/countries";
import { FIELD_ORDER, LIMITS, validateAll, validateField, type ContactErrors, type ContactField, type ContactValues } from "@/lib/contact-validation";
import { CountrySelect } from "./CountrySelect";

const EMPTY: ContactValues = { name: "", email: "", country: DEFAULT_COUNTRY, phone: "", company: "", message: "" };
const IDS: Record<ContactField, string> = { name: "cf-name", email: "cf-email", country: "cf-country", phone: "cf-phone", company: "cf-company", message: "cf-msg" };

/**
 * Lead form. Errors show while typing once the input is wrong, and for empty fields only
 * after blur or submit. The server route checks everything again; then the visitor's
 * email app opens with the message ready to send to the sales address.
 */
export function ContactForm({ subject = "eCard enquiry" }: { subject?: string }) {
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [serverErrors, setServerErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  const errorOf = (f: ContactField) => {
    const v = values[f].trim();
    const err = validateField(f, values[f], values);
    if (err && (v !== "" || touched[f] || submitted)) return err;
    return undefined;
  };

  const set = (f: ContactField, v: string) => {
    setValues((s) => ({ ...s, [f]: v }));
    setServerErrors((s) => ({ ...s, [f]: undefined }));
  };
  const blur = (f: ContactField) => setTouched((t) => ({ ...t, [f]: true }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    const errs = validateAll(values);
    const first = FIELD_ORDER.find((f) => errs[f]);
    if (first) { document.getElementById(IDS[first])?.focus(); return; }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const data = (await res.json()) as { ok: boolean; errors?: ContactErrors; phone?: string };
      if (!data.ok) {
        setServerErrors(data.errors ?? {});
        setStatus("failed");
        const bad = FIELD_ORDER.find((f) => data.errors?.[f]);
        if (bad) document.getElementById(IDS[bad])?.focus();
        return;
      }
      const v = Object.fromEntries(Object.entries(values).map(([k, x]) => [k, x.trim()])) as ContactValues;
      const body = `Name: ${v.name}\nEmail: ${v.email}\nPhone: ${data.phone}\nCompany: ${v.company || "-"}\n\n${v.message}`;
      window.location.href = `mailto:${SITE.salesEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  };

  const country = countryByIso(values.country);
  const field = (f: ContactField) => {
    const err = errorOf(f) ?? serverErrors[f];
    return { err, aria: { "aria-invalid": !!err, "aria-describedby": err ? `${IDS[f]}-e` : undefined } };
  };
  const errText = (f: ContactField, err?: string) => (err ? <p id={`${IDS[f]}-e`} className="cf-error">{err}</p> : null);

  const name = field("name"), email = field("email"), phone = field("phone"), company = field("company"), message = field("message");
  const cc = field("country");
  const input = "ip-control";

  return (
    <form noValidate onSubmit={onSubmit} className="ip-form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={IDS.name} className="ip-label">Name</label>
          <input id={IDS.name} name="name" autoComplete="name" maxLength={LIMITS.name[1] + 10} className={input} value={values.name}
            onChange={(e) => set("name", e.target.value)} onBlur={() => blur("name")} {...name.aria} />
          {errText("name", name.err)}
        </div>
        <div>
          <label htmlFor={IDS.email} className="ip-label">Work email</label>
          <input id={IDS.email} name="email" type="email" inputMode="email" autoComplete="email" className={input} value={values.email}
            onChange={(e) => set("email", e.target.value)} onBlur={() => blur("email")} {...email.aria} />
          {errText("email", email.err)}
        </div>
      </div>
      <div>
        <label htmlFor={IDS.phone} className="ip-label">Phone</label>
        <div className="cc-row">
          <CountrySelect id={IDS.country} value={values.country} onChange={(iso) => set("country", iso)} describedBy={cc.aria["aria-describedby"]} />
          <input id={IDS.phone} name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" className={`${input} min-w-0 flex-1`}
            maxLength={country?.max ?? 15} placeholder={country ? `${country.min === country.max ? country.min : `${country.min} to ${country.max}`} digits` : undefined}
            value={values.phone}
            onKeyDown={(e) => { if (e.key.length === 1 && !/\d/.test(e.key) && !e.ctrlKey && !e.metaKey) e.preventDefault(); }}
            onChange={(e) => set("phone", e.target.value.replace(/\D/g, ""))} onBlur={() => blur("phone")} {...phone.aria} />
        </div>
        {errText("country", cc.err)}
        {errText("phone", phone.err)}
      </div>
      <div>
        <label htmlFor={IDS.company} className="ip-label">Company <span className="text-ink-500">(optional)</span></label>
        <input id={IDS.company} name="company" autoComplete="organization" className={input} value={values.company}
          onChange={(e) => set("company", e.target.value)} onBlur={() => blur("company")} {...company.aria} />
        {errText("company", company.err)}
      </div>
      <div>
        <label htmlFor={IDS.message} className="ip-label">How can we help?</label>
        <textarea id={IDS.message} name="message" rows={5} className={input} value={values.message}
          onChange={(e) => set("message", e.target.value)} onBlur={() => blur("message")} {...message.aria} />
        {errText("message", message.err)}
      </div>
      <button type="submit" disabled={status === "sending"} className="btn-primary w-full sm:w-auto sm:justify-self-start">
        {status === "sending" ? "Checking…" : "Open Email To Send"}
      </button>
      <p className="text-xs text-ink-500" aria-live="polite">
        {status === "sent" ? "Your email app should now be open with the message ready to send."
          : status === "failed" ? "Please fix the highlighted fields and try again."
          : `This opens your email app addressed to ${SITE.salesEmail}.`}
      </p>
    </form>
  );
}
