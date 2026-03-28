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
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Mennyibe kerül egy weboldal audit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A GEO ALAP csomag 0,99 € — komplett GEO audit PDF riporttal, 6 dimenzió, 14 AI robot ellenőrzés, valódi Perplexity mérés, SEO elemzés. A GEO PRO csomag egyedi árazású, a weboldalad és az igényeid alapján.",
                },
              },
              {
                "@type": "Question",
                name: "Mi az a GEO (Generative Engine Optimization) és miért fontos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A GEO (Generative Engine Optimization) azt vizsgálja, hogyan jelenik meg a weboldalad az AI keresőkben — ChatGPT, Perplexity, Gemini, Google AI Mode. 2026-ban a keresések 37%-a AI eszközökkel indul. Ha a weboldalad nincs felkészítve az AI keresőoptimalizálásra, a potenciális ügyfeleid nem találnak rád.",
                },
              },
              {
                "@type": "Question",
                name: "Mi a különbség a SEO és a GEO között?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A hagyományos SEO (keresőoptimalizálás) a Google organikus találatokra optimalizál. A GEO (Generative Engine Optimization) az AI keresőkre — ChatGPT, Perplexity, Gemini — koncentrál. 2026-ban mindkettő kell: a SEO a klasszikus Google forgalomhoz, a GEO az AI keresőkből érkező látogatókhoz. A WebLelet mindkettőt méri.",
                },
              },
              {
                "@type": "Question",
                name: "Hogyan kerülhet be a weboldalam a ChatGPT válaszaiba?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A ChatGPT-ben való megjelenéshez szükséges: engedélyezni a GPTBot crawlert a robots.txt-ben, llms.txt fájlt létrehozni, strukturált adatokat (schema markup) beépíteni, és E-E-A-T jeleket erősíteni. A WebLelet GEO audit pontosan ezeket vizsgálja és konkrét javítási tervet ad.",
                },
              },
              {
                "@type": "Question",
                name: "Miért nem találnak rám a Google-ben?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A leggyakoribb okok: hiányzó vagy hibás meta címkék, nincs sitemap.xml, rossz robots.txt beállítás, lassú betöltés, nem mobilbarát design, hiányzó schema markup, gyenge tartalom. A WebLelet SEO audit ezeket mind feltárja és priorizált javítási tervet ad.",
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
                name: "Miben más ez mint a SEMrush vagy Ahrefs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A SEMrush és Ahrefs hagyományos SEO eszközök. A WebLelet az AI keresőkre is elemez: 6 GEO dimenzió, valódi Perplexity mérés, AI robot hozzáférés vizsgálat, llms.txt ellenőrzés. A klasszikus SEO audit mellett megkapod az AI láthatósági képet is.",
                },
              },
              {
                "@type": "Question",
                name: "Mennyi ideig tart a weboldal audit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A GEO ALAP csomag 2 perc alatt elkészül — automatizált AI elemzés. A GEO PRO csomag 1-3 munkanap, mert mélyebb elemzést tartalmaz: E-E-A-T audit, versenytárs GEO összehasonlítás, multi-platform readiness vizsgálat.",
                },
              },
              {
                "@type": "Question",
                name: "Mi történik az audit után?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kapsz egy részletes PDF riportot amiben minden megállapítás jelölve van (TÉNY / BECSLÉS / JAVASLAT), prioritási sorrendben. A GEO PRO csomagban ezen felül kész schema markup kódot, llms.txt fájlt és teljes implementációs prioritáslistát is kapsz.",
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
      {/* HowTo JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Hogyan ellenőrizd a weboldalad AI keresők láthatóságát",
            description: "3 lépésben megmérheted a weboldalad GEO score-ját és SEO állapotát a WebLelet segítségével.",
            totalTime: "PT2M",
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Add meg a weboldalad URL-jét",
                text: "Írd be a weboldalad címét a WebLelet keresőjébe. Nem kell jelszó, nem kell hozzáférés — a rendszer automatikusan letölti és elemzi az oldalt.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Várj 2 percet az AI elemzésre",
                text: "A rendszer 6 GEO dimenzióban elemez: AI idézhetőség, márkaautoritás, tartalom minőség, technikai alapok, strukturált adatok, platform optimalizálás. Emellett SEO elemzést is végez.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Töltsd le a PDF riportot",
                text: "Letölthető PDF riportot kapsz 100 pontos GEO score-ral, dimenzió bontással, SEO eredményekkel és priorizált javítási tervvel.",
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
