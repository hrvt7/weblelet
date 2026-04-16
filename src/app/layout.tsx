import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const heading = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
    default: "Dr. Minta Réka — Fogorvos | Budapest",
    template: "%s | Dr. Minta Réka",
  },
  description:
    "Felnőtt fogorvosi rendelő Budapesten. Fájdalommentes fogászat, családias légkörben. Fogmegtartó kezelések, fogkőeltávolítás, fogpótlás, esztétikai fogászat. TB-támogatott, NEAK szerződéses.",
  keywords:
    "fogorvos budapest, fogászat budapest, fogorvosi rendelő, Dr. Minta Réka, fogászati szűrővizsgálat, fogkőeltávolítás, fogmegtartó kezelés, fogpótlás, esztétikai fogászat, gyermekfogászat, TB fogászat, NEAK fogorvos",
  openGraph: {
    title: "Dr. Minta Réka — Fogorvos | Budapest",
    description:
      "Felnőtt fogorvosi rendelő Budapesten. Fájdalommentes fogászat, családias légkörben. TB-támogatott ellátás.",
    url: "https://weblelet.hu",
    siteName: "Dr. Minta Réka — Fogorvos",
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Dr. Minta Réka — Fogorvos | Budapest",
    description:
      "Felnőtt fogorvosi rendelő Budapesten. Fájdalommentes fogászat, TB-támogatott ellátás.",
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
        <script dangerouslySetInnerHTML={{ __html: `if('scrollRestoration' in history)history.scrollRestoration='manual';if(location.hash)history.replaceState(null,'',location.pathname);window.scrollTo(0,0)` }} />
        {/* Dentist JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "@id": "https://weblelet.hu/#dentist",
              name: "Dr. Minta Réka — Fogorvos",
              description:
                "Felnőtt fogorvosi rendelő Budapesten. Széleskörű fogászati ellátás, fogmegtartó kezelések, családias légkörben. TB-támogatott, NEAK szerződéses.",
              url: "https://weblelet.hu",
              telephone: "+36301234567",
              email: "info@mintarendelo.hu",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Példa utca 10.",
                addressLocality: "Budapest",
                postalCode: "1234",
                addressCountry: "HU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.4979,
                longitude: 19.0402,
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "13:30", closes: "19:30" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "07:30", closes: "13:30" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "13:30", closes: "19:30" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "07:30", closes: "13:30" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:30", closes: "19:30" },
              ],
              medicalSpecialty: "Dentistry",
              availableService: [
                { "@type": "MedicalProcedure", name: "Fogászati szűrővizsgálat" },
                { "@type": "MedicalProcedure", name: "Fogmegtartó kezelések" },
                { "@type": "MedicalProcedure", name: "Fogkőeltávolítás" },
                { "@type": "MedicalProcedure", name: "Fogpótlás" },
                { "@type": "MedicalProcedure", name: "Esztétikai fogászat" },
                { "@type": "MedicalProcedure", name: "Gyermekfogászat" },
                { "@type": "MedicalProcedure", name: "Profilaxia" },
                { "@type": "MedicalProcedure", name: "Air-flow kezelés" },
                { "@type": "MedicalProcedure", name: "Parodontológia" },
              ],
              isAcceptingNewPatients: true,
              priceRange: "TB-támogatott",
            }),
          }}
        />
        {/* Person JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://weblelet.hu/#person",
              name: "Dr. Minta Réka",
              jobTitle: "Fogorvos",
              worksFor: { "@id": "https://weblelet.hu/#dentist" },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Példa utca 10.",
                addressLocality: "Budapest",
                postalCode: "1234",
                addressCountry: "HU",
              },
              telephone: "+36301234567",
              email: "info@mintarendelo.hu",
              medicalSpecialty: "Dentistry",
            }),
          }}
        />
        {/* MedicalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Dr. Minta Réka — Felnőtt fogorvosi rendelő",
              url: "https://weblelet.hu",
              telephone: "+36301234567",
              email: "info@mintarendelo.hu",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Példa utca 10.",
                addressLocality: "Budapest",
                postalCode: "1234",
                addressCountry: "HU",
              },
              areaServed: {
                "@type": "City",
                name: "Budapest",
              },
              employee: { "@id": "https://weblelet.hu/#person" },
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
