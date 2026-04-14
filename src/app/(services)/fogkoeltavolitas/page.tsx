import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Fogkőeltávolítás Szombathely — ultrahangos tisztítás | Dr. Köteles Renáta",
  description: "Ultrahangos fogkőeltávolítás és fogpolírozás Szombathelyen. Megelőzi az ínygyulladást és a fogágygyulladást. TB-támogatott. Időpontfoglalás: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/fogkoeltavolitas" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Fogkőeltávolítás és tisztítás",
  description: "Ultrahangos fogkő-eltávolítás és polírozás az egészséges ínyért és fogakért.",
  procedureType: "https://health-lifesci.schema.org/TherapeuticProcedure",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        title="Fogkőeltávolítás és tisztítás"
        subtitle="Az egészséges fogíny alapja a rendszeres professzionális tisztítás."
        image="/images/hero/service-3.webp"
        sections={[
          {
            heading: "Mi az a fogkő?",
            text: "A fogkő (calculus) a nyálban lévő ásványi anyagok és baktériumok által képzett lerakódás a fogfelszínen és a fogíny szélén. Otthoni fogmosással nem távolítható el, és folyamatos irritációt okoz az ínyen. Ha nem kezeljük, gingivitiszt (ínygyulladást) okoz, ami kezelés nélkül parodontitisszé (fogágygyulladás) súlyosbodhat — ez a felnőttkori fogvesztés leggyakoribb oka."
          },
          {
            heading: "A kezelés menete",
            text: "Ultrahangos depurátorral távolítjuk el a fogköveket — mind a fogíny feletti (supragingivális), mind az alatti (subgingivális) lerakódásokat. Az ultrahangos rezgés hatékonyan bontja le a fogkövet anélkül, hogy károsítaná a fogzománcot. Ezt követően speciális polírozó pasztával simítjuk a fogfelszínt, amely csökkenti az új lerakódások kialakulásának esélyét."
          },
          {
            heading: "Milyen gyakran szükséges?",
            text: "Általánosságban évente 1-2 alkalommal javasolt a professzionális fogkőeltávolítás, de egyéni igények szerint ennél gyakrabban is szükséges lehet — például dohányosok, cukorbetegek vagy parodontális érintettségű páciensek esetében. A kezelés TB-támogatott, és a szűrővizsgálattal együtt is elvégezhető."
          },
        ]}
        relatedServices={[
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
          { title: "Esztétikai fogászat", href: "/esztetikai-fogaszat" },
          { title: "Fogmegtartó kezelések", href: "/fogmegtarto-kezelesek" },
          { title: "Gyermekfogászat", href: "/gyermekfogaszat" },
        ]}
      />
    </>
  );
}
