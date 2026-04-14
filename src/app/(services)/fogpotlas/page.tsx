import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Fogpótlás Szombathely — korona, híd, fogsor | Dr. Köteles Renáta",
  description: "Fogpótlás Szombathelyen: koronák, hidak, kivehető fogsorok természetes megjelenéssel. Fém-kerámia és teljes kerámia megoldások. TB-támogatott. Időpontfoglalás: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/fogpotlas" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Fogpótlás",
  description: "Koronák, hidak és kivehető fogsorok készítése az elveszett fogak pótlására.",
  procedureType: "https://health-lifesci.schema.org/TherapeuticProcedure",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        title="Fogpótlás"
        subtitle="Az elveszett fogak pótlása nemcsak esztétikai — hanem egészségügyi kérdés is."
        image="/images/hero/service-4.webp"
        sections={[
          {
            heading: "Miért fontos a fogpótlás?",
            text: "A hiányzó fogak megváltoztatják a rágás dinamikáját, a szomszédos fogak elkezdhetnek dőlni az üres hely felé, az ellenoldali fog pedig kikúszhat a helyéről. Hosszú távon az állkapocs ízületi problémák és további fogvesztés kockázata is nő. A mielőbbi pótlás megőrzi a fogsor integritását és a rágófunkciót."
          },
          {
            heading: "Koronák és hidak",
            text: "A fog alakú koronákkal (sapkákkal) erősítjük meg a gyengült, gyökérkezelt vagy erősen sérült fogakat. Fém-kerámia és teljes kerámia koronákat egyaránt készítünk — a teljes kerámia a legesztétikusabb megoldás, különösen a mosolyövezet fogainál. Hídpótlással pótoljuk az egy vagy több fogból álló hiányt, ahol a szomszédos fogak horgonyként (pillérként) szolgálnak."
          },
          {
            heading: "Kivehető fogsorok",
            text: "Teljes vagy részleges kivehető fogsorokat is készítünk azoknál a pácienseknél, akiknél a rögzített megoldás nem lehetséges. A modern fogsorok természetesen néznek ki, kényelmesek és a rágófunkciót jól visszaadják. A fogsor készítése több lépésben történik: lenyomatvétel, próbák, végül az elkészült fogsor behelyezése és beállítása."
          },
        ]}
        relatedServices={[
          { title: "Esztétikai fogászat", href: "/esztetikai-fogaszat" },
          { title: "Fogmegtartó kezelések", href: "/fogmegtarto-kezelesek" },
          { title: "Fogeltávolítás", href: "/fogeltavolitas" },
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
        ]}
      />
    </>
  );
}
