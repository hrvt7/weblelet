import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
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
  title: "WebLelet — AI weboldal audit magyar vállalkozásoknak",
  description:
    "Megtudod 48 órán belül, miért nem talál rád az ügyfeled. 15 AI agent elemzi a weboldaladat 3 dimenzióban — GEO/SEO, Marketing, Sales. Konkrét pontszámok, problémák, cselekvési terv.",
  keywords:
    "weboldal audit, SEO audit, AI audit, magyar vállalkozás, GEO optimalizálás, marketing elemzés",
  openGraph: {
    title: "WebLelet — AI weboldal audit magyar vállalkozásoknak",
    description:
      "Megtudod 48 órán belül, miért nem talál rád az ügyfeled. 15 AI agent, 3 dimenzió, 10 oldalas riport.",
    url: "https://weblelet.hu",
    siteName: "WebLelet",
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebLelet — AI weboldal audit magyar vállalkozásoknak",
    description:
      "Megtudod 48 órán belül, miért nem talál rád az ügyfeled.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${heading.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col font-body antialiased bg-surface text-foreground">
        {children}
      </body>
    </html>
  );
}
