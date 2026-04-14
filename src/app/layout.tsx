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
    default: "Dr. Köteles Renáta — Fogorvos | Szombathely",
    template: "%s | Dr. Köteles Renáta",
  },
  description:
    "Felnőtt fogorvosi rendelő Szombathelyen. Fájdalommentes fogászat, családias légkörben. Fogmegtartó kezelések, fogkőeltávolítás, fogpótlás, esztétikai fogászat. TB-támogatott, NEAK szerződéses.",
  keywords:
    "fogorvos szombathely, fogászat szombathely, fogorvosi rendelő, Dr. Köteles Renáta, fogászati szűrővizsgálat, fogkőeltávolítás, fogmegtartó kezelés, fogpótlás, esztétikai fogászat, gyermekfogászat, TB fogászat, NEAK fogorvos",
  openGraph: {
    title: "Dr. Köteles Renáta — Fogorvos | Szombathely",
    description:
      "Felnőtt fogorvosi rendelő Szombathelyen. Fájdalommentes fogászat, családias légkörben. TB-támogatott ellátás.",
    url: "https://weblelet.hu",
    siteName: "Dr. Köteles Renáta — Fogorvos",
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Dr. Köteles Renáta — Fogorvos | Szombathely",
    description:
      "Felnőtt fogorvosi rendelő Szombathelyen. Fájdalommentes fogászat, TB-támogatott ellátás.",
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
        {/* Dentist JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "@id": "https://weblelet.hu/#dentist",
              name: "Dr. Köteles Renáta — Fogorvos",
              description:
                "Felnőtt fogorvosi rendelő Szombathelyen. Széleskörű fogászati ellátás, fogmegtartó kezelések, családias légkörben. TB-támogatott, NEAK szerződéses.",
              url: "https://weblelet.hu",
              telephone: "+3694900887",
              email: "dr.kotelesrenata@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Markusovszky Lajos u. 8.",
                addressLocality: "Szombathely",
                postalCode: "9700",
                addressCountry: "HU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.2307,
                longitude: 16.6215,
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
              name: "Dr. Köteles Renáta",
              jobTitle: "Fogorvos",
              worksFor: { "@id": "https://weblelet.hu/#dentist" },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Markusovszky Lajos u. 8.",
                addressLocality: "Szombathely",
                postalCode: "9700",
                addressCountry: "HU",
              },
              telephone: "+3694900887",
              email: "dr.kotelesrenata@gmail.com",
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
              name: "Dr. Köteles Renáta — Felnőtt fogorvosi rendelő",
              url: "https://weblelet.hu",
              telephone: "+3694900887",
              email: "dr.kotelesrenata@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Markusovszky Lajos u. 8.",
                addressLocality: "Szombathely",
                postalCode: "9700",
                addressCountry: "HU",
              },
              areaServed: {
                "@type": "City",
                name: "Szombathely",
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
