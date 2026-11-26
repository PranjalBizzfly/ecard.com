import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/content/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
// Brand typeface for the eCard wordmark (logo guide, Nov 2026)
const instrumentSans = Instrument_Sans({ variable: "--font-instrument-sans", subsets: ["latin"], weight: ["600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "eCard — AI visiting card CRM", template: "%s | eCard" },
  description: "eCard reads visiting cards with AI, files them as clean contacts, remembers where you met, and sends the follow-up by email, WhatsApp or your digital card.",
  applicationName: "eCard",
  icons: { icon: "/brand/ecard-icon.svg" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#7f19f7", width: "device-width", initialScale: 1 };

const orgLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: "eCard", url: SITE.url, logo: `${SITE.url}/brand/ecard-icon.svg` },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: "eCard", publisher: { "@id": `${SITE.url}/#org` } },
  ],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${instrumentSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: orgLd }} />
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
