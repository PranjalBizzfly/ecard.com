/* Social and payment marks for the footer (inline SVG, no external assets). */

export function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "Facebook":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.6 21v-7.4h2.5l.4-2.9h-2.9V8.9c0-.8.2-1.4 1.4-1.4h1.6V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2H8v2.9h2.5V21z" /></svg>;
    case "Instagram":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="3.7" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="16.9" cy="7.1" r="1.1" fill="currentColor" /></svg>;
    case "LinkedIn":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6.6" cy="6.5" r="1.7" fill="currentColor" /><rect x="5.1" y="9.2" width="3" height="9.8" fill="currentColor" /><path fill="currentColor" d="M10.3 9.2h2.9v1.4c.5-.9 1.6-1.6 3.1-1.6 2.7 0 3.7 1.7 3.7 4.2V19h-3v-5.1c0-1.2-.4-2.1-1.6-2.1-1.3 0-2.1.9-2.1 2.2V19h-3z" /></svg>;
    case "X":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.8 3.5h3l-6.6 7.5 7.8 9.5h-6.1l-4.8-5.9-5.5 5.9H2.6l7.1-8L2.2 3.5h6.2l4.3 5.4zm-1 15.2h1.7L7.4 5.2H5.6z" /></svg>;
    case "YouTube":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="currentColor" /><path fill="var(--night)" d="M10 9.2v5.6l4.9-2.8z" /></svg>;
    default:
      return null;
  }
}

const Card = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <svg viewBox="0 0 50 32" role="img" aria-label={label}><title>{label}</title><rect width="50" height="32" rx="4" fill="#fff" />{children}</svg>
);

/** Payment methods eCard lists on ecard.gg: UPI, cards (Visa/Mastercard), net banking, wallets, EMI. */
export const PAYMENT_MARKS = [
  { label: "UPI", svg: <Card label="UPI"><text x="25" y="20.5" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="900" fontStyle="italic" fontSize="12" fill="#097939">UPI</text><path d="M37 9l4 7-4 7" fill="none" stroke="#ed752e" strokeWidth="2" /></Card> },
  { label: "Visa", svg: <Card label="Visa"><text x="25" y="21" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="900" fontStyle="italic" fontSize="13" fill="#1a1f71">VISA</text></Card> },
  { label: "Mastercard", svg: <Card label="Mastercard"><circle cx="20.5" cy="16" r="8" fill="#eb001b" /><circle cx="29.5" cy="16" r="8" fill="#f79e1b" /><path d="M25 9.4a8 8 0 0 1 0 13.2 8 8 0 0 1 0-13.2z" fill="#ff5f00" /></Card> },
  { label: "Net banking", svg: <Card label="Net banking"><path d="M25 7l9 5H16z M18 13.5h2v7h-2z M24 13.5h2v7h-2z M30 13.5h2v7h-2z M16 22h18v2.5H16z" fill="#0a1020" /></Card> },
  { label: "Wallets", svg: <Card label="Wallets"><rect x="15" y="9" width="20" height="14" rx="3" fill="#7f19f7" /><rect x="27" y="13.5" width="9" height="5" rx="2" fill="#ba6afb" /><circle cx="30" cy="16" r="1.2" fill="#fff" /></Card> },
  { label: "EMI", svg: <Card label="EMI"><text x="25" y="20.5" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="11" fill="#0f9d77">EMI</text></Card> },
];
