import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
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
                name: "Tényleg ingyenes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Az ingyenes lelet 2 oldalas összefoglalót tartalmaz a legfontosabb problémákról. Semmilyen kötelezettséggel nem jár, és nem kell bankkártya.",
                },
              },
              {
                "@type": "Question",
                name: "Honnan tudjátok ezeket a weboldalam alapján?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pontosan azt elemezzük amit a világ — a Google, a ChatGPT, és a potenciális ügyfeleid — látnak rólad. Nem kell jelszó vagy hozzáférés. Kívülről vizsgáljuk az oldalad, ahogy egy új ügyfeled tenné.",
                },
              },
              {
                "@type": "Question",
                name: "Mi az a GEO/SEO és miért fontos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A GEO (Generative Engine Optimization) azt jelenti, hogy a weboldal hogyan jelenik meg az AI keresőkben — ChatGPT, Google AI, Perplexity. 2026-ban az emberek egyre többen keresnek AI-val. Ha ott nem jelensz meg, ügyfeleket veszítesz.",
                },
              },
              {
                "@type": "Question",
                name: "Mennyivel jobb ez mint ha egy ügynökséget bízok meg?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Gyorsabb (48 óra vs. 5-10 nap), olcsóbb (49.900 Ft vs. 200-600.000 Ft), és tartalmazza az AI keresők elemzését is, amit a legtöbb magyar ügynökség nem kínál.",
                },
              },
              {
                "@type": "Question",
                name: "Mi történik az audit után?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Megkapod a riportot, és ha szeretnéd, 30 percben átbeszéljük személyesen vagy online. Utána te döntöd el mit csinálsz: megcsinálod magad, odaadod a webfejlesztődnek, vagy megbízol minket.",
                },
              },
              {
                "@type": "Question",
                name: "Hogyan fizetünk?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Az ingyenes lelet természetesen díjmentes. A fizetős csomagokról a konzultáción beszélünk — csak akkor fizetsz, ha az audit alapján úgy döntesz, hogy szeretnéd a teljes riportot. Számlát adunk, bankkártyás és átutalásos fizetés egyaránt elérhető.",
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
