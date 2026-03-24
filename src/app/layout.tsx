import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "WebLelet — AI weboldal audit magyar vállalkozásoknak",
  description:
    "Megtudod 48 órán belül, miért nem talál rád az ügyfeled. 15 AI agent elemzi a weboldaladat 3 dimenzióban — GEO/SEO, Marketing, Sales. Konkrét pontszámok, problémák, cselekvési terv.",
  keywords:
    "weboldal audit, SEO audit, AI audit, magyar vállalkozás, GEO optimalizálás, marketing elemzés",
  openGraph: {
    title: "WebLelet — AI weboldal audit magyar vállalkozásoknak",
    description:
      "Megtudod 48 órán belül, miért nem talál rád az ügyfeled. 15 AI agent, 3 dimenzió, 18 oldalas riport.",
    url: "https://weblelet.hu",
    siteName: "WebLelet",
    locale: "hu_HU",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebLelet — AI-alapú weboldal diagnosztika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebLelet — AI weboldal audit magyar vállalkozásoknak",
    description:
      "Megtudod 48 órán belül, miért nem talál rád az ügyfeled.",
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
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WebLelet",
              url: "https://weblelet.hu",
              logo: "https://weblelet.hu/icon.svg",
              description:
                "AI-alapú weboldal audit szolgáltatás magyar kisvállalkozásoknak. GEO/SEO, Marketing és Üzleti Potenciál elemzés.",
              email: "info@weblelet.hu",
              areaServed: {
                "@type": "Country",
                name: "Hungary",
              },
              sameAs: [
                "https://www.linkedin.com/company/weblelet",
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
              name: "WebLelet",
              url: "https://weblelet.hu",
              description:
                "AI-alapú weboldal audit magyar vállalkozásoknak — GEO/SEO, Marketing, Üzleti Potenciál elemzés 48 órán belül.",
              inLanguage: "hu",
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
              name: "WebLelet — AI Weboldal Audit",
              provider: {
                "@type": "Organization",
                name: "WebLelet",
                url: "https://weblelet.hu",
              },
              description:
                "Egyetlen URL megadásával AI rendszer elemzi a weboldalt 3 dimenzióban: GEO/SEO, Marketing és Üzleti Potenciál. 48 órán belül részletes PDF diagnózist küldünk.",
              areaServed: {
                "@type": "Country",
                name: "Hungary",
              },
              serviceType: "Weboldal audit",
              offers: [
                {
                  "@type": "Offer",
                  name: "Ingyenes Gyorsdiagnózis",
                  price: "0",
                  priceCurrency: "HUF",
                  description: "5 oldalas gyorsdiagnózis a legfontosabb hibákról",
                },
                {
                  "@type": "Offer",
                  name: "Teljes WebLelet",
                  price: "49900",
                  priceCurrency: "HUF",
                  description: "18 oldalas részletes riport 3 blokkban + 30 perces konzultáció",
                },
                {
                  "@type": "Offer",
                  name: "Havi WebLelet Pro",
                  price: "69900",
                  priceCurrency: "HUF",
                  description: "Folyamatos monitoring + havi friss riport + tanácsadás",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body antialiased bg-surface text-foreground">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
