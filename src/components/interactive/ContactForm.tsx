"use client";

import { useState } from "react";
import { SITE } from "@/content/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

/**
 * No backend is connected, so the form validates input and then opens the
 * visitor's email app with a pre-filled message to the verified sales address.
 */
export function ContactForm({ subject = "eCard enquiry" }: { subject?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const email = String(f.get("email") ?? "").trim();
    const company = String(f.get("company") ?? "").trim();
    const message = String(f.get("message") ?? "").trim();
    const errs: Errors = {};
    if (name.length < 2) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email address.";
    if (message.length < 10) errs.message = "Please write at least 10 characters.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\n\n${message}`;
    window.location.href = `mailto:${SITE.salesEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const input = "ip-control";
  return (
    <form noValidate onSubmit={onSubmit} className="ip-form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="ip-label">Name</label>
          <input id="cf-name" name="name" autoComplete="name" className={input} aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-e" : undefined} />
          {errors.name && <p id="cf-name-e" className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="ip-label">Work email</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" className={input} aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-e" : undefined} />
          {errors.email && <p id="cf-email-e" className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="cf-company" className="ip-label">Company <span className="text-ink-500">(optional)</span></label>
        <input id="cf-company" name="company" autoComplete="organization" className={input} />
      </div>
      <div>
        <label htmlFor="cf-msg" className="ip-label">How can we help?</label>
        <textarea id="cf-msg" name="message" rows={5} className={input} aria-invalid={!!errors.message} aria-describedby={errors.message ? "cf-msg-e" : undefined} />
        {errors.message && <p id="cf-msg-e" className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto sm:justify-self-start">Open email to send</button>
      <p className="text-xs text-ink-500" aria-live="polite">
        {sent ? "Your email app should now be open with the message ready to send." : `This opens your email app addressed to ${SITE.salesEmail}.`}
      </p>
    </form>
  );
}
