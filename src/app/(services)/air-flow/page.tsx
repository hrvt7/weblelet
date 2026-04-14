import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Air-flow kezelés Szombathely — kíméletes fogtisztítás | Dr. Köteles Renáta",
  description: "Air-flow homokfúvásos fogtisztítás Szombathelyen: kávé, tea, dohányzás okozta foltok eltávolítása. Kíméletes, fájdalommentes, nem koptatja a zománcot. Időpontfoglalás: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/air-flow" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Air-flow kezelés",
  description: "Kíméletes homokfúvásos fogtisztítás a fogfelszíni elszíneződések és biofilm eltávolítására.",
  procedureType: "https://health-lifesci.schema.org/TherapeuticProcedure",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        title="Air-flow kezelés"
        subtitle="Kíméletes homokfúvásos fogtisztítás — fehérebb fogak, egészségesebb íny, kellemes élmény."
        image="/images/service-airflow.webp"
        sections={[
          {
            heading: "Hogyan működik az Air-flow?",
            text: "Az Air-flow egy svájci fejlesztésű (EMS) technológia, amely finom szódabikarbóna- vagy glicin-alapú por, víz és sűrített levegő keverékét juttatja nagy nyomással a fogfelszínre. A porózus részecskék kíméletesen, de hatékonyan távolítják el a fogfelszíni lerakódásokat, a biofilmet és az elszíneződéseket. A kezelés nem koptatja a fogzománcot, nem irritálja az ínyt, és a páciensek számára kellemes — sokan a hagyományos polírozásnál komfortosabbnak tartják."
          },
          {
            heading: "Mire alkalmas?",
            text: "Az Air-flow kezelés ideális a kávé, tea, vörösbor és dohányzás okozta felszíni elszíneződések eltávolítására. A fogak visszanyerik természetes fehér árnyalatukat fogfehérítés nélkül. Ezen felül hatékonyan távolítja el a szupragingivális és szubgingivális biofilmet — a baktériumréteget, amely az ínygyulladás és a szuvasodás kiindulópontja. Implantátumok és ortodonciai készülékek (fogszabályozó) körüli nehezen elérhető területek tisztítására is kiváló."
          },
          {
            heading: "A kezelés menete és időtartama",
            text: "Az Air-flow kezelés általában 20-30 percet vesz igénybe, és a fogkőeltávolítással kombinálva végezhető a legjobb eredmény érdekében. A kezelés előtt a fogorvos felméri a fogak és az íny állapotát. Az Air-flow kezelés után a fogak simábbak, tisztábbak és világosabbak lesznek. Az eredmény tartóssága az egyéni szájhigiéniai szokásoktól és az étkezési-ivási szokásoktól függ — általában 3-6 hónapig tart."
          },
        ]}
        relatedServices={[
          { title: "Fogkőeltávolítás", href: "/fogkoeltavolitas" },
          { title: "Profilaxia", href: "/profilaxia" },
          { title: "Esztétikai fogászat", href: "/esztetikai-fogaszat" },
          { title: "Parodontológia", href: "/parodontologia" },
        ]}
      />
    </>
  );
}
