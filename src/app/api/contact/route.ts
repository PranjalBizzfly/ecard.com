import { FIELD_ORDER, validateAll, type ContactValues } from "@/lib/contact-validation";
import { countryByIso } from "@/content/countries";

/**
 * Receives contact/lead form submissions and runs the same checks as the browser.
 * No mail backend is connected yet, so a valid submission is accepted and the browser
 * then opens the visitor's email app with the message ready to send.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, errors: { form: "Invalid request." } }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return Response.json({ ok: false, errors: { form: "Invalid request." } }, { status: 400 });
  }
  const input = body as Record<string, unknown>;
  const values = Object.fromEntries(
    FIELD_ORDER.map((f) => [f, typeof input[f] === "string" ? (input[f] as string).trim() : ""]),
  ) as ContactValues;

  const errors = validateAll(values);
  if (Object.keys(errors).length) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }
  const country = countryByIso(values.country)!;
  return Response.json({ ok: true, phone: `${country.dial} ${values.phone}` });
}
