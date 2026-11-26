import { notFound } from "next/navigation";
import { ALL_PAGES, getPage } from "@/content/registry";
import { PageView } from "@/components/PageView";
import { DirectoryPage } from "@/components/DirectoryPage";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return ALL_PAGES.filter((p) => !p.custom && p.slug).map((p) => ({ slug: p.slug.split("/") }));
}

export async function generateMetadata({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params;
  const page = getPage(slug.join("/"));
  return page ? pageMetadata(page) : {};
}

export default async function Page({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params;
  const page = getPage(slug.join("/"));
  if (!page || page.custom) notFound();
  if (page.id === "site-index") return <DirectoryPage page={page} />;
  return <PageView page={page} />;
}
