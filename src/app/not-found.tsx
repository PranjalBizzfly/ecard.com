import Link from "next/link";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">This page isn&apos;t in our card stack.</h1>
        <p className="mt-4 text-ink-500">The link may be old or mistyped. Try one of these instead.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Go home</Link>
          <Link href="/site-index" className="btn-ghost">Browse all pages</Link>
          <Link href="/help" className="btn-ghost">Help Center</Link>
        </div>
      </div>
    </section>
  );
}
