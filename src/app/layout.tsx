import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://weblelet.hu"),
  title: {
    default: "HRVT Studio — AI Kreatív Tartalom Magyar Vállalkozásoknak",
    template: "%s | HRVT Studio",
  },
  description:
    "Profi termékfotók és reklámvideók AI technológiával. Stúdió minőség, töredékáron. Magyar kisvállalkozásoknak — havi előfizetés, bármikor lemondható.",
  keywords:
    "AI termékfotó, AI reklámvideó, kreatív tartalom, vizuális marketing, e-commerce képek, social media tartalom, UGC, brand kampány, content naptár, magyar vállalkozás, HRVT Studio",
  openGraph: {
    title: "HRVT Studio — AI Kreatív Tartalom Magyar Vállalkozásoknak",
    description:
      "Stúdióminőség. AI sebesség. Tized annyi pénzért. Profi termékfotók és reklámvideók magyar vállalkozásoknak.",
    url: "https://weblelet.hu",
    siteName: "HRVT Studio",
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HRVT Studio — AI Kreatív Tartalom",
    description:
      "Stúdióminőség. AI sebesség. Tized annyi pénzért. AI-alapú vizuális tartalom magyar vállalkozásoknak.",
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
    <html lang="hu" className="h-full">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if('scrollRestoration' in history)history.scrollRestoration='manual';if(location.hash)history.replaceState(null,'',location.pathname);window.scrollTo(0,0)`,
          }}
        />
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://weblelet.hu/#organization",
              name: "HRVT Studio",
              alternateName: "HRVT Studio — AI Kreatív Tartalom",
              description:
                "AI-alapú vizuális tartalom szolgáltatás magyar vállalkozásoknak. Stúdióminőség, AI sebesség, tized annyi pénzért.",
              url: "https://weblelet.hu",
              email: "info@hrvtstudio.hu",
              areaServed: { "@type": "Country", name: "Hungary" },
              slogan: "Stúdióminőség. AI sebesség. Tized annyi pénzért.",
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
              name: "AI Kreatív Tartalom Szolgáltatás",
              provider: { "@id": "https://weblelet.hu/#organization" },
              areaServed: { "@type": "Country", name: "Hungary" },
              serviceType: "AI-alapú vizuális tartalom készítés",
              description:
                "AI termékfotó, reklámvideó, UGC tartalom, brand kampány és havi content naptár magyar kisvállalkozásoknak.",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "HRVT Studio csomagok",
                itemListElement: [
                  { "@type": "Offer", name: "Starter csomag", price: "120", priceCurrency: "EUR", description: "8 db AI termékfotó / hó" },
                  { "@type": "Offer", name: "Growth csomag", price: "250", priceCurrency: "EUR", description: "20 db AI kép + 2 reklámvideó / hó" },
                  { "@type": "Offer", name: "Pro csomag", price: "450", priceCurrency: "EUR", description: "Korlátlan kép + kampányvideók / hó" },
                ],
              },
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
              url: "https://weblelet.hu",
              name: "HRVT Studio",
              description:
                "AI-alapú vizuális tartalom magyar vállalkozásoknak — termékfotó, reklámvideó, UGC tartalom.",
              publisher: { "@id": "https://weblelet.hu/#organization" },
              inLanguage: "hu-HU",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
        <CookieConsent />
      </body>
    </html>
  );
}
