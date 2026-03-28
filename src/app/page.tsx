import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import GeoSection from "@/components/GeoSection";
import HowItWorks from "@/components/HowItWorks";
import WhatWeExamine from "@/components/WhatWeExamine";
import SampleReport from "@/components/SampleReport";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Mennyibe kerül?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Az GEO ALAP csomag 0,99 € — komplett GEO audit PDF riporttal, 6 dimenzió, 14 AI robot ellenőrzés, valódi Perplexity mérés. A GEO PRO csomag egyedi árazású, a weboldalad és az igényeid alapján.",
                },
              },
              {
                "@type": "Question",
                name: "Mi az a GEO és miért fontos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A GEO (Generative Engine Optimization) azt vizsgálja hogyan jelenik meg a weboldalad az AI keresőkben — ChatGPT, Perplexity, Gemini, Google AI Mode. 2026-ban a keresések 37%-a AI eszközökkel indul. Ha a weboldalad nincs felkészítve, a következő generáció nem talál rád.",
                },
              },
              {
                "@type": "Question",
                name: "Miben más ez mint a SEMrush vagy Ahrefs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Azok technikai SEO toolok. Mi 6 GEO dimenzióban elemzünk: AI citability, brand authority, tartalom minőség, technikai alapok, strukturált adatok, platform optimalizálás. Valódi Perplexity méréssel dolgozunk — nem becsüljük, megmérjük.",
                },
              },
              {
                "@type": "Question",
                name: "Mi az a GEO score és hogyan számítják?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A GEO score 100 pontos rendszer, Princeton/IIT Delhi KDD '24 kutatás alapján. 6 dimenzió súlyozott átlaga: AI Citability & Láthatóság (25%), Márkaautoritás (20%), Tartalom Minőség & E-E-A-T (20%), Technikai Alapok (15%), Strukturált Adatok (10%), Platform Optimalizálás (10%).",
                },
              },
              {
                "@type": "Question",
                name: "Mennyi ideig tart?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A GEO ALAP csomag 2 perc alatt elkészül. A GEO PRO csomag 1-3 munkanap, mert mélyebb elemzést — E-E-A-T audit, versenytárs GEO összehasonlítás, multi-platform readiness — is tartalmaz.",
                },
              },
              {
                "@type": "Question",
                name: "Mi történik az audit után?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kapsz egy PDF riportot amiben minden megállapítás jelölve van (TÉNY / BECSLÉS / JAVASLAT), prioritási sorrendben. A GEO PRO csomagban ezen felül kész schema markup kódot, llms.txt fájlt és teljes implementációs prioritáslistát is kapsz.",
                },
              },
              {
                "@type": "Question",
                name: "Használhatom az ügyfeleimnek is?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Ha ügynökség vagy, vagy ügyfélnek dolgozol, a riportot egyszerűen továbbküldheted — minden megállapítás konkrét, érthető és azonnal használható.",
                },
              },
            ],
          }),
        }}
      />
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <GeoSection />
        <HowItWorks />
        <WhatWeExamine />
        <SampleReport />
        <WhyUs />
        <Pricing />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
