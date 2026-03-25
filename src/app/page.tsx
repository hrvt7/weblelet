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
                name: "Tényleg ingyenes az első diagnózis?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Az 5 oldalas diagnózist ingyen elkészítjük és emailben elküldjük. Nincs apróbetűs rész, nincs rejtett költség.",
                },
              },
              {
                "@type": "Question",
                name: "Mit tudok kezdeni a diagnózissal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A diagnózisban minden probléma mellett le van írva: ki csinálja meg, mennyi idő, mennyibe kerül. Ha van webfejlesztőd, odaadod neki a technikai mellékletet. Ha nincs, mi is meg tudjuk csinálni.",
                },
              },
              {
                "@type": "Question",
                name: "Honnan tudjátok ezeket a weboldalam alapján?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A rendszer a weboldal forráskódját, a keresőmotorok és AI keresők viselkedését, valamint a nyilvánosan elérhető adatokat elemzi. Nem kell jelszó és nem férünk hozzá belső adatokhoz.",
                },
              },
              {
                "@type": "Question",
                name: "Mi az a GEO és miért fontos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A GEO (Generative Engine Optimization) azt jelenti, hogy a weboldalad hogyan jelenik meg az AI keresőkben — amikor valaki megkérdezi a ChatGPT-t vagy a Google AI-t. 2025-ben ez már ugyanolyan fontos mint a hagyományos Google keresés.",
                },
              },
              {
                "@type": "Question",
                name: "Mennyivel jobb ez mint egy ingyenes online SEO checker?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Az ingyenes checkerek 10-15 technikai szempontot vizsgálnak. Mi 53 szempontot nézünk 3 dimenzióban, és nem csak hibákat keresünk — kész megoldásokat is adunk amit a fejlesztőd azonnal használhat.",
                },
              },
              {
                "@type": "Question",
                name: "Mi történik az ingyenes diagnózis után?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Semmi, hacsak nem szeretnéd a teljes elemzést. Ha igen, elkészítjük a 18 oldalas részletes riportot + 30 perc konzultációt tartunk ahol végigmegyünk az eredményeken.",
                },
              },
              {
                "@type": "Question",
                name: "Hogyan fizethetek?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Banki átutalással, a diagnózis elkészülte után. Számlát küldünk emailben.",
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
