/**
 * Title Case for headings, labels and buttons: capitalises the first letter of every word.
 * Leaves alone brand words with set spelling (eCard, iPhone, WhatsApp, API), emails,
 * URLs/domains and words that start with a digit or symbol (₹299, 14-day).
 */
export function toTitleCase(input: string): string {
  return input
    .split(/(\s+)/)
    .map((word) => {
      if (!word.trim()) return word;
      if (/@|:\/\/|^www\.|\w\.(gg|com|in|io|org|net|si)\b/i.test(word)) return word;
      return word
        .split("/")
        .map((part) => {
          const m = /^([^\p{L}\p{N}]*)(\p{L})(.*)$/u.exec(part);
          if (!m) return part;
          const [, lead, first, rest] = m;
          // Mixed-case brand spellings such as eCard, iPhone, macOS keep their casing.
          if (first === first.toLowerCase() && /\p{Lu}/u.test(rest)) return part;
          return lead + first.toUpperCase() + rest;
        })
        .join("/");
    })
    .join("");
}
