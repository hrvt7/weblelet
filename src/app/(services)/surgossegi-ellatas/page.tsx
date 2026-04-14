import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Sürgősségi fogászat Szombathely — akut fogfájás ellátás | Dr. Köteles Renáta",
  description: "Sürgősségi fogászati ellátás Szombathelyen: akut fogfájás, eltörött fog, kiesett tömés. Mielőbbi ellátás rendelési időben. Hívjon: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/surgossegi-ellatas" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Sürgősségi fogászati ellátás",
  description: "Akut fogfájás, eltörött fog, kiesett tömés vagy fogászati trauma mielőbbi kezelése.",
  procedureType: "https://health-lifesci.schema.org/TherapeuticProcedure",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        title="Sürgősségi ellátás"
        subtitle="Akut fogfájás vagy fogászati baleset esetén mielőbbi ellátást biztosítunk."
        image="/images/hero/service-8.webp"
        sections={[
          {
            heading: "Mikor beszélünk sürgősségről?",
            text: "Sürgősségi fogászati ellátásra van szükség akut, erős fogfájás esetén, ha a fog eltörött vagy megrepedt, ha tömés vagy korona kiesett, fogászati trauma (ütés, esés) történt, vagy ha a fog környéki íny megduzzadt és gennyes tályog alakult ki. Ezekben az esetekben a mielőbbi ellátás megelőzheti a probléma súlyosbodását."
          },
          {
            heading: "A sürgősségi vizsgálat menete",
            text: "A sürgősségi vizsgálat során azonosítjuk a fájdalom okát, szükség esetén röntgenfelvételt készítünk, és elvégezzük az akut beavatkozást. Ez lehet ideiglenes tömés, gyökérkezelés megkezdése, tályog megnyitása és antibiotikum felírása, vagy a fájdalom egyéb csillapítása. A cél a tünetek mielőbbi enyhítése."
          },
          {
            heading: "Mi történik a sürgősségi kezelés után?",
            text: "Amennyiben a végleges kezelés több ülést igényel, kezelési tervet készítünk és soron kívüli időpontot biztosítunk a folytatáshoz. A sürgősségi ellátás a rendelési időben érhető el — hívjon a +36 94 900-887 számon, és igyekszünk mielőbb fogadni."
          },
        ]}
        relatedServices={[
          { title: "Fogmegtartó kezelések", href: "/fogmegtarto-kezelesek" },
          { title: "Fogeltávolítás", href: "/fogeltavolitas" },
          { title: "Fogpótlás", href: "/fogpotlas" },
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
        ]}
      />
    </>
  );
}
