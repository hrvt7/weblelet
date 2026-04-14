import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Fogászati szűrővizsgálat Szombathely — Dr. Köteles Renáta",
  description: "Félévenkénti fogászati szűrővizsgálat Szombathelyen. Röntgen, szájüregi vizsgálat, korai felismerés. TB-támogatott, NEAK szerződéses rendelő. Időpontfoglalás: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/fogaszati-szurovizsgalat" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Fogászati szűrővizsgálat",
  description: "Félévenkénti fogászati kontroll vizsgálat a fogak és az íny állapotának felmérésére, röntgendiagnosztikával.",
  procedureType: "https://health-lifesci.schema.org/DiagnosticProcedure",
  howPerformed: "Vizuális vizsgálat, szonda, intraorális röntgen",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        title="Fogászati szűrővizsgálat"
        subtitle="A félévenkénti kontroll a fogászati megelőzés alapja. A korai felismerés a leghatékonyabb — és legolcsóbb — kezelés."
        image="/images/hero/service-1.webp"
        sections={[
          {
            heading: "Miért fontos a rendszeres kontroll?",
            text: "A fogszuvasodás és a fogágygyulladás (parodontitis) az első hónapokban teljesen tünetmentes. Mire fájdalmat érez, a probléma már előrehaladott — és a kezelés összetettebb, időigényesebb. A félévenkénti szűrővizsgálat lehetővé teszi, hogy a problémákat a legkorábbi stádiumban ismerjük fel, amikor még egyszerű beavatkozással megoldhatók."
          },
          {
            heading: "Mit vizsgálunk?",
            text: "A szűrővizsgálat során áttekintjük a fogak és az íny állapotát, ellenőrizzük a meglévő tömések és pótlások stabilitását, szükség esetén panoráma- vagy intraorális röntgenfelvételt készítünk. A vizsgálat kiterjed a nyálkahártya, a nyelv és a szájüreg lágyszöveteinek ellenőrzésére is. Amennyiben eltérést találunk, személyre szabott kezelési tervet készítünk."
          },
          {
            heading: "Prevenciós időszak",
            text: "Rendelőnkben kiemelt prevenciós időszakot biztosítunk (hétfő/szerda 13:30–14:30, kedd/csütörtök 07:30–08:30), amikor a szűrővizsgálatra érkező pácienseket előnyben részesítjük. A vizsgálat TB-támogatott — társadalombiztosítással rendelkező páciensek számára térítésmentes."
          },
        ]}
        relatedServices={[
          { title: "Fogkőeltávolítás", href: "/fogkoeltavolitas" },
          { title: "Fogmegtartó kezelések", href: "/fogmegtarto-kezelesek" },
          { title: "Gyermekfogászat", href: "/gyermekfogaszat" },
          { title: "Esztétikai fogászat", href: "/esztetikai-fogaszat" },
        ]}
      />
    </>
  );
}
