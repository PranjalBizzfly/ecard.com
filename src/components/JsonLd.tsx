import type { PageDef } from "@/content/types";
import { SITE } from "@/content/site";

export function JsonLd({ page, crumbs }: { page: PageDef; crumbs: { title: string; href: string }[] }) {
  const url = `${SITE.url}/${page.slug}`;
  const graph: object[] = [
    { "@type": "WebPage", "@id": url, url, name: page.seoTitle, description: page.description, isPartOf: { "@id": `${SITE.url}/#website` } },
    { "@type": "BreadcrumbList", itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.title, item: `${SITE.url}${c.href === "/" ? "" : c.href}` })) },
  ];
  if (page.faqs?.length) {
    graph.push({ "@type": "FAQPage", mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
  }
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
