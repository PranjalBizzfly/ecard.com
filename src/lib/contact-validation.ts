import { countryByIso } from "@/content/countries";

export type ContactField = "name" | "email" | "country" | "phone" | "company" | "message";
export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;

export const FIELD_ORDER: ContactField[] = ["name", "email", "country", "phone", "company", "message"];
export const LIMITS = { name: [2, 60], company: [0, 100], message: [10, 2000], email: [0, 254] } as const;

const NAME_RE = /^[\p{L}\s'.]+$/u;
const EMAIL_RE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

/** Checks one field. Values are trimmed first. Returns an error message or undefined. */
export function validateField(field: ContactField, raw: string, all?: Partial<ContactValues>): string | undefined {
  const v = (raw ?? "").trim();
  switch (field) {
    case "name":
      if (!v) return "Please enter your name.";
      if (!NAME_RE.test(v)) return "Use letters, spaces, apostrophes or full stops only.";
      if (v.length < LIMITS.name[0]) return "Name must be at least 2 characters.";
      if (v.length > LIMITS.name[1]) return "Name must be 60 characters or fewer.";
      return;
    case "email":
      if (!v) return "Please enter your email address.";
      if (v.length > LIMITS.email[1] || !EMAIL_RE.test(v)) return "Please enter a valid email address, like name@company.com.";
      return;
    case "country":
      if (!countryByIso(v)) return "Please choose a country code.";
      return;
    case "phone": {
      if (!v) return "Please enter your phone number.";
      if (!/^\d+$/.test(v)) return "Use digits only.";
      const c = countryByIso((all?.country ?? "").trim());
      const [min, max] = c ? [c.min, c.max] : [6, 15];
      if (v.length < min || v.length > max) {
        const need = min === max ? `${min}` : `${min} to ${max}`;
        return `${c ? `${c.name} numbers have` : "Numbers have"} ${need} digits. You entered ${v.length}.`;
      }
      return;
    }
    case "company":
      if (v.length > LIMITS.company[1]) return "Company must be 100 characters or fewer.";
      return;
    case "message":
      if (!v) return "Please write your message.";
      if (v.length < LIMITS.message[0]) return "Please write at least 10 characters.";
      if (v.length > LIMITS.message[1]) return "Message must be 2,000 characters or fewer.";
      return;
  }
}

export function validateAll(values: Partial<ContactValues>): ContactErrors {
  const errors: ContactErrors = {};
  for (const f of FIELD_ORDER) {
    const e = validateField(f, values[f] ?? "", values);
    if (e) errors[f] = e;
  }
  return errors;
}
