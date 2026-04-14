import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Profilaxia Szombathely — fogászati megelőzés | Dr. Köteles Renáta",
  description: "Fogászati profilaxia Szombathelyen: professzionális fogtisztítás, fluoridos kezelés, barázdazárás, szájhigiénés tanácsadás. Megelőzés a legjobb kezelés. Időpontfoglalás: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/profilaxia" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Profilaxia — fogászati megelőzés",
  description: "Professzionális fogászati megelőzés: fogtisztítás, fluoridos kezelés, barázdazárás és szájhigiénés tanácsadás.",
  procedureType: "https://health-lifesci.schema.org/TherapeuticProcedure",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        title="Profilaxia"
        subtitle="A megelőzés a legjobb és legolcsóbb kezelés. A rendszeres profilaxia megőrzi fogai egészségét évtizedekre."
        image="/images/service-profilaxia.webp"
        sections={[
          {
            heading: "Mi az a fogászati profilaxia?",
            text: "A profilaxia a fogászati megelőzés összefoglaló neve — mindazon eljárások és szokások, amelyek a szuvasodás, az ínygyulladás és a fogágygyulladás kialakulását megakadályozzák. A rendelői profilaxia kiegészíti az otthoni szájápolást: professzionális eszközökkel távolítjuk el a fogkefével el nem érhető lerakódásokat, és személyre szabott tanácsot adunk a hatékony otthoni ápoláshoz."
          },
          {
            heading: "Profilaktikus kezelések",
            text: "A professzionális fogtisztítás (fogkőeltávolítás + polírozás) az alapja a megelőzésnek. Ezen felül fluoridos lakkal erősítjük a fogzománcot, csökkentve a savhatások károsító hatását. Gyermekek és fiatalok esetében barázdazárást (fissura-záró lakkozást) alkalmazunk az őrlőfogak rágófelszínén, ahol a szuvasodás leggyakrabban kiindul. Az Air-flow kezelés a biofilm és az enyhe elszíneződések kíméletes eltávolítására szolgál."
          },
          {
            heading: "Milyen gyakran szükséges?",
            text: "Általánosságban félévente javasolt a profilaktikus vizit, de egyéni kockázati tényezők (dohányzás, cukorbetegség, parodontális hajlam, terhesség) esetén 3-4 havonta is indokolt lehet. A rendszeres profilaxia hosszú távon kevesebb fogászati beavatkozást és alacsonyabb költségeket jelent — a megelőzés mindig olcsóbb, mint a kezelés."
          },
        ]}
        relatedServices={[
          { title: "Fogkőeltávolítás", href: "/fogkoeltavolitas" },
          { title: "Air-flow kezelés", href: "/air-flow" },
          { title: "Gyermekfogászat", href: "/gyermekfogaszat" },
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
        ]}
      />
    </>
  );
}
