import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Schedule from "@/components/Schedule";
import About from "@/components/About";
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
                name: "Kell-e előre időpontot foglalni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, kérjük hívjon a +36 94 900-887 telefonszámon. A prevenciós időben érkező pácienseket előnyben részesítjük.",
                },
              },
              {
                "@type": "Question",
                name: "TB-támogatott a rendelés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, rendelőnk NEAK szerződéssel működik. Az alapellátás társadalombiztosítás keretében igénybe vehető.",
                },
              },
              {
                "@type": "Question",
                name: "Milyen gyakran kell szűrővizsgálatra járni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Félévente javasolt a fogászati kontroll. A korai felismerés a leghatékonyabb megelőzés.",
                },
              },
              {
                "@type": "Question",
                name: "Fáj a kezelés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Modern érzéstelenítési módszerekkel dolgozunk, a legtöbb kezelés fájdalommentesen elvégezhető.",
                },
              },
              {
                "@type": "Question",
                name: "Gyermekeket is fogadnak?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, gyermekfogászati ellátást is nyújtunk. Barátságos, játékos környezetben ismerkedhetnek meg a fogászattal.",
                },
              },
              {
                "@type": "Question",
                name: "Mi a teendő sürgős fogfájás esetén?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hívjon a rendelési időben a +36 94 900-887 számon, és igyekszünk mielőbb ellátni.",
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
        <About />
        <BeforeAfter />
        <Schedule />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
