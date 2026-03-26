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
                name: "Hogyan működik a demo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Megadod a weboldal URL-jét, mi lefuttatjuk a rendszert és elküldjük az eredményt emailben. Utána egyeztetünk egy 30 perces hívást ahol végigmegyünk a riporton.",
                },
              },
              {
                "@type": "Question",
                name: "Kinek szól ez a rendszer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Marketing ügynökségeknek akik gyorsabban akarnak auditot csinálni az ügyfeleiknek, és vállalkozásoknak akik szeretnék tudni hol áll a weboldaluk a Google-ben és az AI keresőkben.",
                },
              },
              {
                "@type": "Question",
                name: "Mi az a GEO és miért fontos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A GEO (Generative Engine Optimization) azt jelenti hogy a weboldalad hogyan jelenik meg az AI keresőkben — ChatGPT, Perplexity, Gemini. 2026-ban a keresések 40%-a már AI-ból indul. Ha ott nem vagy, láthatatlan vagy.",
                },
              },
              {
                "@type": "Question",
                name: "Miben más ez mint egy SEMrush vagy Ahrefs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Azok a toolok technikai SEO-ra fókuszálnak. Mi három dimenzióban elemzünk: GEO/SEO + Marketing + Üzleti Potenciál. Ráadásul nem csak hibákat keresünk — kész megoldásokat adunk és minden megállapítás címkézve van.",
                },
              },
              {
                "@type": "Question",
                name: "Mennyibe kerül?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Az árazás az együttműködés formájától függ — egyedi projekt, havi megbízás, vagy rendszeres audit csomag. Az első demo audit ingyenes. Írj a részletekért.",
                },
              },
              {
                "@type": "Question",
                name: "A compliance audit kiterjed a magyar jogra is?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. A rendszer 5 jogi keretrendszert vizsgál: GDPR (14 pont), magyar elektronikus kereskedelmi és adatvédelmi törvény (8 pont), ADA/WCAG akadálymentesség (10 pont), PCI-DSS fizetési biztonság (6 pont) és CAN-SPAM email compliance (5 pont). Összesen 43 szempont.",
                },
              },
              {
                "@type": "Question",
                name: "Használhatom az ügyfeleimnek is?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. A rendszer white-label módban is működik — a riport a te céged nevével, logójával és színeivel készül.",
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
