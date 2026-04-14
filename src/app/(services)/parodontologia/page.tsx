import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Parodontológia Szombathely — fogágykezelés | Dr. Köteles Renáta",
  description: "Parodontológiai kezelés Szombathelyen: fogágygyulladás diagnosztika, mély küretálás, gyökérfelszín simítás. A fogvesztés megelőzése. TB-támogatott. Időpontfoglalás: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/parodontologia" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Parodontológia",
  description: "Fogágygyulladás (parodontitis) diagnosztikája és kezelése: mély küretálás, gyökérfelszín simítás, rendszeres kontroll.",
  procedureType: "https://health-lifesci.schema.org/TherapeuticProcedure",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        title="Parodontológia"
        subtitle="A fogágygyulladás a felnőttkori fogvesztés leggyakoribb oka — de megelőzhető és kezelhető."
        image="/images/hero/service-parodontologia.webp"
        sections={[
          {
            heading: "Mi a parodontitis?",
            text: "A parodontitis (fogágygyulladás) a fogágy — az íny, a gyökérhártya, a gyökércement és az alveoláris csont — krónikus gyulladásos megbetegedése. A kezeletlen gingivitisz (ínygyulladás) progresszálhat parodontitisszé, amely az íny visszahúzódásához, tasakképződéshez, csontpusztuláshoz és végső soron fogvesztéshez vezet. A parodontitis a felnőtt lakosság mintegy 30-40%-át érinti valamilyen mértékben, és szoros összefüggésben áll a szív-érrendszeri betegségekkel, a cukorbetegséggel és más szisztémás megbetegedésekkel."
          },
          {
            heading: "Diagnosztika és kezelés",
            text: "A parodontológiai vizsgálat során parodontális szondával mérjük az íny-tasak mélységét, röntgenfelvétellel értékeljük a csont állapotát, és felmérjük az ínyvérzés mértékét. A kezelés alappillére a nem-sebészi terápia: az úgynevezett mély küretálás (subgingivális debridement) során eltávolítjuk a tasak falán lévő granulációs szövetet és a gyökérfelszínen lerakódott fogkövet, majd simítjuk a gyökérfelszínt (root planing). Ez megteremti a feltételeket a szövetek gyógyulásához és az íny újbóli tapadásához."
          },
          {
            heading: "Fenntartó kezelés és megelőzés",
            text: "A parodontitis krónikus betegség — nem gyógyítható, de kontrollálható. A sikeres kezelés után 3-4 havonta javasolt a parodontológiai kontrollvizit (supportive periodontal therapy), amely professzionális fogtisztítást és a tasak-mélység monitorozását jelenti. Az otthoni szájhigiénia (interdentális kefe, fogselyem, szájöblítő) ugyanolyan fontos, mint a rendelői kezelés. Dohányosok esetében a dohányzás abbahagyása drámaian javítja a kezelés eredményességét."
          },
        ]}
        relatedServices={[
          { title: "Fogkőeltávolítás", href: "/fogkoeltavolitas" },
          { title: "Air-flow kezelés", href: "/air-flow" },
          { title: "Profilaxia", href: "/profilaxia" },
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
        ]}
      />
    </>
  );
}
