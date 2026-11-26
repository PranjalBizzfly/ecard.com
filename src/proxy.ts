import { NextResponse, type NextRequest } from "next/server";
import { PLAN } from "@/content/plan";

/**
 * With Cache Components, the catch-all route streams the not-found UI for unknown
 * paths, which forces a 200 status (a soft 404). Proxy runs before rendering, so
 * it serves the branded 404 page with a real 404 status for any unplanned path.
 */
const KNOWN = new Set(Object.values(PLAN).flat().map(([slug]) => `/${slug}`));
const NOT_FOUND_PATH = "/__not-found";

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/+$/, "") || "/";
  if (KNOWN.has(path) || path === NOT_FOUND_PATH) return NextResponse.next();
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
