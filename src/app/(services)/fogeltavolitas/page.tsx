import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Fogeltávolítás Szombathely — foghúzás, bölcsességfog | Dr. Köteles Renáta",
  description: "Kíméletes fogeltávolítás Szombathelyen: foghúzás, bölcsességfog eltávolítás helyi érzéstelenítéssel. Részletes utógondozás. TB-támogatott. Időpontfoglalás: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/fogeltavolitas" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Fogeltávolítás",
  description: "Kíméletes fogeltávolítás és bölcsességfog eltávolítás helyi érzéstelenítéssel.",
  procedureType: "https://health-lifesci.schema.org/TherapeuticProcedure",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        title="Fogeltávolítás"
        subtitle="Az utolsó lehetőség, amelyet kíméletesen és megfelelő érzéstelenítéssel végzünk."
        image="/images/service-6-fogeltavolitas.jpg"
        sections={[
          {
            heading: "Mikor szükséges a fogeltávolítás?",
            text: "A fogeltávolítás (extrakció) akkor válik szükségessé, ha a fog konzervatív módszerekkel már nem menthető meg — például előrehaladott szuvasodás, mélyen eltörött gyökér, súlyos parodontális érintettség, vagy ismétlődő tályogok esetén. Döntés előtt minden esetben megvizsgáljuk a fogmentés lehetőségét."
          },
          {
            heading: "Bölcsességfog eltávolítás",
            text: "A bölcsességfogak (harmadik nagyőrlők) gyakran csak részlegesen törnek elő, félreállnak, vagy nyomást gyakorolnak a szomszédos fogakra. Visszatérő gyulladást, ínyzsákot vagy szuvasodást okozhatnak. Ezekben az esetekben az eltávolítás a leghatékonyabb megoldás. A beavatkozás helyi érzéstelenítésben történik."
          },
          {
            heading: "Utógondozás",
            text: "A fogeltávolítás után részletes utógondozási tanácsot adunk a gyors és szövődménymentes gyógyulás érdekében. Ez magában foglalja a sebhely ápolását, az étkezési tanácsokat, a fájdalomcsillapítás módját és a kontrollidőpont megbeszélését. A seb általában 7-10 nap alatt gyógyul, a teljes csontgyógyulás néhány hónapot vehet igénybe."
          },
        ]}
        relatedServices={[
          { title: "Fogpótlás", href: "/fogpotlas" },
          { title: "Sürgősségi ellátás", href: "/surgossegi-ellatas" },
          { title: "Fogmegtartó kezelések", href: "/fogmegtarto-kezelesek" },
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
        ]}
      />
    </>
  );
}
