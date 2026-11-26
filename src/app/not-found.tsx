import Link from "next/link";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="ip ip-hero">
      <div className="container-x ip-hero-inner grid min-h-[60vh] place-items-center text-center">
        <div className="mx-auto max-w-3xl">
          <span className="ip-eyebrow">404</span>
          <h1 className="ip-h1">This Page Isn&apos;t In Our Card Stack.</h1>
          <p className="ip-intro mx-auto">The link may be old or mistyped. Try one of these instead.</p>
          <div className="ip-actions justify-center">
            <Link href="/" className="btn-primary">Go Home</Link>
            <Link href="/site-index" className="btn-ghost">Browse All Pages</Link>
            <Link href="/help" className="btn-ghost">Help Center</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
