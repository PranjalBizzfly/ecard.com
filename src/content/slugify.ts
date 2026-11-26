/** Turn a page title into its URL segment: "Free Plan" -> "free-plan", "Key Rotation & Failover" -> "key-rotation-and-failover". */
export function slugify(title: string): string {
  return title
    .normalize("NFKD").replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ").replace(/\+/g, " plus ").replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
