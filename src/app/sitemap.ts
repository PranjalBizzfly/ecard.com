import type { MetadataRoute } from "next";
import { ALL_PAGES } from "@/content/registry";
import { SITE } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.verifiedOn);
  return ALL_PAGES.map((p) => ({
    url: p.slug ? `${SITE.url}/${p.slug}` : SITE.url,
    lastModified,
    changeFrequency: p.category === "legal" ? "yearly" : "monthly",
    priority: p.slug === "" ? 1 : p.slug.split("/").length === 1 ? 0.8 : 0.6,
  }));
}
