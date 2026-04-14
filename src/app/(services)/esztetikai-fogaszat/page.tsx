import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Esztétikai fogászat Szombathely — fogfehérítés, héjak | Dr. Köteles Renáta",
  description: "Esztétikai fogászat Szombathelyen: fogfehérítés, kompozit héjak (veneers), esztétikai töméscsere. Magabiztos mosoly, modern módszerekkel. Időpontfoglalás: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/esztetikai-fogaszat" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Esztétikai fogászat",
  description: "Fogfehérítés, kompozit héjak és esztétikai töméscsere a tökéletes mosolyért.",
  procedureType: "https://health-lifesci.schema.org/TherapeuticProcedure",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        title="Esztétikai fogászat"
        subtitle="Mert az első benyomás a mosolynál kezdődik."
        image="/images/hero/service-5.webp"
        sections={[
          {
            heading: "Fogfehérítés",
            text: "A rendelői fogfehérítés során professzionális fehérítő géllel akár több árnyalattal világosabbá tehetjük a fogakat. A kezelés biztonságos, a fogzománcot nem károsítja, az esetleges érzékenység átmeneti. A kávé, tea, vörösbor és dohányzás által okozott elszíneződések hatékonyan csökkenthetők. Az eredmény a szájhigiéniai szokásoktól függően 1-3 évig tarthat."
          },
          {
            heading: "Kompozit héjak (veneers)",
            text: "A direkt kompozit héjak (veneers) segítségével javítjuk a repedezett, enyhén ferde, elszíneződött vagy apró résekkel rendelkező fogak megjelenését. A kompozitot közvetlenül a fog felszínére modellezzük — a beavatkozás egy ülésben elvégezhető, fogcsiszolás nélkül. Az eredmény természetes hatású és tartós."
          },
          {
            heading: "Esztétikai töméscsere",
            text: "A régi, sötétedő amalgám töméseket fogszínű kompozitra cseréljük. Az új tömés szinte láthatatlanul illeszkedik a fog természetes színéhez, miközben tartós és megbízható. Az amalgámcserét esztétikai okokból, de akár páciens kérésére is elvégezzük."
          },
        ]}
        relatedServices={[
          { title: "Fogkőeltávolítás", href: "/fogkoeltavolitas" },
          { title: "Fogpótlás", href: "/fogpotlas" },
          { title: "Fogmegtartó kezelések", href: "/fogmegtarto-kezelesek" },
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
        ]}
      />
    </>
  );
}
