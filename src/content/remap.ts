import type { PageDef } from "./types";
import { slugify } from "./slugify";

/**
 * Every page URL is derived from its title, so the link text, breadcrumb and web address match.
 * Each path segment that is itself a page is replaced by that page's title slug; segments that
 * are not pages (e.g. "features") are dropped. Custom routes with their own app folder keep their path.
 */
export function remapSlugs(pages: PageDef[]) {
  const byOld = new Map(pages.map((p) => [p.slug, p]));
  const memo = new Map<string, string>();
  const used = new Set<string>();

  const compute = (old: string): string => {
    if (memo.has(old)) return memo.get(old)!;
    const p = byOld.get(old);
    let out: string;
    if (old === "" || (p && p.custom)) out = old;
    else {
      const parts = old.split("/");
      const parentOld = parts.slice(0, -1).join("/");
      const parent = parentOld ? computePrefix(parentOld) : "";
      const leaf = p ? slugify(p.title) || parts[parts.length - 1] : parts[parts.length - 1];
      out = parent ? `${parent}/${leaf}` : leaf;
      if (p) {
        let n = 2; const base = out;
        while (used.has(out)) out = `${base}-${n++}`;
      }
    }
    if (p) used.add(out);
    memo.set(old, out);
    return out;
  };
  // Prefix that may or may not be a page.
  const computePrefix = (old: string): string => {
    if (byOld.has(old)) return compute(old);
    const parts = old.split("/");
    const parentOld = parts.slice(0, -1).join("/");
    // Not a page (e.g. "features"): drop it, so every URL segment is a real page name.
    return parentOld ? computePrefix(parentOld) : "";
  };

  // Custom pages first so they reserve their paths.
  for (const p of pages) if (p.custom || p.slug === "") compute(p.slug);
  for (const p of pages) compute(p.slug);

  const oldToNew = new Map<string, string>();
  for (const p of pages) oldToNew.set(p.slug, memo.get(p.slug)!);
  const map = (s: string) => oldToNew.get(s) ?? s;

  const remapped = pages.map((p) => ({ ...p, id: p.slug, slug: map(p.slug), related: p.related?.map(map) }));
  return { pages: remapped, oldToNew };
}
