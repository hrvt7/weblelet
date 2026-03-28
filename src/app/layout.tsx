import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const body = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://weblelet.hu"),
  title: {
    default: "Weboldal Audit: GEO + SEO Elemzés AI Keresőkre | WebLelet",
    template: "%s | WebLelet",
  },
  description:
    "Látható a weboldalad a ChatGPT-ben, Perplexity-ben, Gemini-ben? 2 perc alatt kiderül. AI-alapú weboldal audit — 6 GEO dimenzió, SEO elemzés, azonnali PDF riport magyar vállalkozásoknak.",
  keywords:
    "weboldal audit, SEO audit, GEO optimalizálás, AI keresőoptimalizálás, weboldal elemzés, ChatGPT láthatóság, Perplexity optimalizálás, AI láthatóság, keresőoptimalizálás, weboldal ellenőrzés, online jelenlét, GEO score, AI keresők, Google AI Overviews, magyar vállalkozás, SEO elemzés",
  openGraph: {
    title: "Weboldal Audit: GEO + SEO Elemzés AI Keresőkre | WebLelet",
    description:
      "Látható a weboldalad a ChatGPT-ben és a Google-ben? AI-alapú weboldal audit 2 perc alatt — GEO score, SEO elemzés, azonnali PDF riport.",
    url: "https://weblelet.hu",
    siteName: "WebLelet",
    locale: "hu_HU",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebLelet — AI weboldal audit: GEO + SEO elemzés magyar vállalkozásoknak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weboldal Audit: GEO + SEO Elemzés AI Keresőkre | WebLelet",
    description:
      "Látható a weboldalad a ChatGPT-ben? 2 perc alatt kiderül. 6 GEO dimenzió, 14 AI robot, SEO elemzés — PDF riport azonnal.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://weblelet.hu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${heading.variable} ${body.variable} h-full`}>
      <head>
        <meta name="google-site-verification" content="3AxdJpMstdvN16odkidb_os6gx1yOLB6683iJC_VZWc" />
        {/* GA4 — feltételesen töltődik a CookieConsent komponensből */}
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://weblelet.hu/#organization",
              name: "WebLelet",
              url: "https://weblelet.hu",
              logo: "https://weblelet.hu/icon.svg",
              description:
                "AI-alapú weboldal audit szolgáltatás: GEO optimalizálás (AI keresők láthatósága) és SEO elemzés magyar vállalkozásoknak. ChatGPT, Perplexity, Gemini, Google AI láthatóság mérés.",
              email: "info@weblelet.hu",
              founder: {
                "@type": "Person",
                name: "Horváth Ádám",
              },
              areaServed: {
                "@type": "Country",
                name: "Hungary",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "info@weblelet.hu",
                availableLanguage: ["Hungarian", "English"],
              },
              sameAs: [
                "https://www.linkedin.com/company/weblelet",
              ],
              knowsAbout: [
                "GEO optimalizálás",
                "Generative Engine Optimization",
                "SEO audit",
                "AI keresőoptimalizálás",
                "weboldal elemzés",
              ],
            }),
          }}
        />
        {/* WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://weblelet.hu/#website",
              name: "WebLelet",
              url: "https://weblelet.hu",
              description:
                "AI-alapú weboldal audit: GEO optimalizálás és SEO elemzés magyar vállalkozásoknak. Megmérjük, megtalál-e a ChatGPT, Perplexity és a Google.",
              inLanguage: "hu",
              publisher: { "@id": "https://weblelet.hu/#organization" },
            }),
          }}
        />
        {/* Service JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://weblelet.hu/#service",
              name: "Weboldal Audit — GEO + SEO Elemzés",
              provider: { "@id": "https://weblelet.hu/#organization" },
              description:
                "Egyetlen URL megadásával AI rendszer elemzi a weboldalt: GEO (AI keresők láthatósága — ChatGPT, Perplexity, Gemini) és SEO (hagyományos keresőoptimalizálás). 2 perc alatt részletes PDF riportot kapsz 6 GEO dimenzióban, 100 pontos score-ral.",
              areaServed: {
                "@type": "Country",
                name: "Hungary",
              },
              serviceType: "Weboldal audit",
              category: "AI keresőoptimalizálás",
              offers: {
                "@type": "Offer",
                name: "GEO ALAP audit",
                price: "0.99",
                priceCurrency: "EUR",
                description: "Komplett GEO audit: 6 dimenzió, 14 AI robot ellenőrzés, Perplexity mérés, SEO elemzés, PDF riport",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body antialiased bg-surface text-foreground">
        {children}
        <Analytics />
        <SpeedInsights />
        <CookieConsent />
      </body>
    </html>
  );
}
