import type { PageDef, CategoryKey } from "@/content/types";
import { CATEGORIES } from "@/content/site";
import { pagesIn, trail } from "@/content/registry";
import { Breadcrumbs } from "./blocks";
import { JsonLd } from "./JsonLd";
import { Directory, type DirGroup } from "./Directory";

/** /explore-all-pages — "Explore All Pages" directory, laid out like the reference site map. */
export function DirectoryPage({ page }: { page: PageDef }) {
  const groups: DirGroup[] = (Object.keys(CATEGORIES) as CategoryKey[])
    .map((c) => ({ key: c, label: CATEGORIES[c].label, pages: pagesIn(c).map((p) => ({ t: p.title, h: p.slug ? `/${p.slug}` : "/" })) }))
    .filter((g) => g.pages.length);
  const total = groups.reduce((n, g) => n + g.pages.length, 0);
  const crumbs = trail(page.slug);

  return (
    <>
      <JsonLd page={page} crumbs={crumbs} />
      <section className="ip ip-hero">
        <div className="container-x ip-hero-inner">
          <Breadcrumbs items={crumbs} />
          <span className="ip-eyebrow">Directory</span>
          <h1 className="ip-h1">Every Page, In One Place</h1>
          <p className="ip-intro">{total} pages across {groups.length} sections. Filter by section, or type to find a page by name.</p>
        </div>
      </section>
      <div className="container-x dir-wrap">
        <Directory groups={groups} />
      </div>
    </>
  );
}
