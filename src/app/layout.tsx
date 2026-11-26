import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Sans, Inter, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TypingHeadings } from "@/components/TypingHeadings";
import { Motion } from "@/components/Motion";
import { Intro, introInitScript } from "@/components/Intro";
import { SITE } from "@/content/site";
import { themeInitScript } from "@/lib/theme";
import { ScrollButtons } from "@/components/ScrollButtons";
import { ALL_PAGES } from "@/content/registry";
import { CATEGORIES } from "@/content/site";
import type { SearchEntry } from "@/components/SearchPalette";

/** Compact index of every page for the header search (title, href, section). */
const SEARCH_INDEX: SearchEntry[] = ALL_PAGES.map((p) => ({ t: p.title, h: p.slug ? `/${p.slug}` : "/", c: CATEGORIES[p.category].label }));
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
// Reference design: Inter (body) + Manrope (h1–h3).
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap" });
// Brand typeface for the eCard wordmark (logo guide, Nov 2026)
const instrumentSans = Instrument_Sans({ variable: "--font-instrument-sans", subsets: ["latin"], weight: ["600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "eCard | AI Visiting Card CRM", template: "%s | eCard" },
  description: "eCard reads visiting cards with AI, files them as clean contacts, remembers where you met, and sends the follow-up by email, WhatsApp or your digital card.",
  applicationName: "eCard",
  icons: { icon: "/brand/ecard-icon.svg" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0b14" },
  ],
  width: "device-width",
  initialScale: 1,
};

const orgLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: "eCard", url: SITE.url, logo: `${SITE.url}/brand/ecard-icon.svg` },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: "eCard", publisher: { "@id": `${SITE.url}/#org` } },
  ],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${instrumentSans.variable} ${inter.variable} ${manrope.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: introInitScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <Intro />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:shadow">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: orgLd }} />
        <Header searchIndex={SEARCH_INDEX} />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <TypingHeadings />
        <ScrollButtons />
        <Motion />
      </body>
    </html>
  );
}
