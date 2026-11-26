import { NextResponse, type NextRequest } from "next/server";
import { ALL_PAGES, OLD_TO_NEW } from "@/content/registry";

/**
 * With Cache Components, the catch-all route streams the not-found UI for unknown
 * paths, which forces a 200 status (a soft 404). Proxy runs before rendering, so
 * it serves the branded 404 page with a real 404 status for any unplanned path.
 */
const KNOWN = new Set(ALL_PAGES.map((p) => (p.slug ? `/${p.slug}` : "/")));
/** Legacy short URLs -> current title-based URLs (permanent redirect). */
const LEGACY = new Map([...OLD_TO_NEW].filter(([o, n]) => o !== n).map(([o, n]) => [`/${o}`, `/${n}`]));
const NOT_FOUND_PATH = "/__not-found";

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/+$/, "") || "/";
  if (KNOWN.has(path) || path === NOT_FOUND_PATH) return NextResponse.next();
  const moved = LEGACY.get(path);
  if (moved) {
    const url = request.nextUrl.clone();
    url.pathname = moved;
    return NextResponse.redirect(url, 308);
  }
  const page = await fetch(new URL(NOT_FOUND_PATH, request.url), { headers: { accept: "text/html" } });
  return new NextResponse(page.body, {
    status: 404,
    headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex" },
  });
}

export const config = {
  // Skip Next internals, API routes, metadata routes and any file with an extension.
  matcher: ["/((?!_next/|api/|robots\\.txt|sitemap\\.xml|favicon\\.ico|brand/|.*\\..*).*)"],
};
