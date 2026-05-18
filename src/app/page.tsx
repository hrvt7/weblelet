import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
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
                name: "Tényleg nem látszik rajta hogy AI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Szolgáltatásunk lényege a stúdió minőség. Képeinket rendszeresen veszik valódi fotónak. Az eredmény számít, nem az eszköz — a végeredmény ugyanolyan profi, mint egy klasszikus stúdiófotózás.",
                },
              },
              {
                "@type": "Question",
                name: "Mennyi idő alatt készül el?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Általában 3-5 munkanap az átfutás. Sürgős esetben 24-48 óra is megoldható, prémium gyorsítási díjjal.",
                },
              },
              {
                "@type": "Question",
                name: "Milyen iparágaknak ajánljátok?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fashion, fitness, étterem, szépségipar, e-commerce, ingatlan, automotive — bármely vizuális tartalmat igénylő vállalkozásnak.",
                },
              },
              {
                "@type": "Question",
                name: "Hogyan indulhatunk el?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Küldj egy üzenetet az info@hrvtstudio.hu címre, és ingyenesen elkészítünk egy demó képet a termékedről. Csak utána döntesz a következő lépésről.",
                },
              },
              {
                "@type": "Question",
                name: "Van szerződéses kötelezettség?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nincs. Havi előfizetés, bármikor lemondható — semmi minimum időtartam, semmi rejtett kötelezettség.",
                },
              },
            ],
          }),
        }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
