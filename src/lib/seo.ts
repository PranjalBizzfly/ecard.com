import type { Metadata } from "next";
import type { PageDef } from "@/content/types";
import { SITE } from "@/content/site";

export function pageMetadata(p: PageDef): Metadata {
  const path = p.slug ? `/${p.slug}` : "/";
  return {
    title: p.seoTitle,
    description: p.description,
    alternates: { canonical: path },
    openGraph: { type: "website", url: path, title: p.seoTitle, description: p.description, siteName: SITE.name, locale: "en_IN" },
    twitter: { card: "summary_large_image", title: p.seoTitle, description: p.description },
  };
}
