import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Fogmegtartó kezelések Szombathely — tömés, gyökérkezelés | Dr. Köteles Renáta",
  description: "Fogmegtartó kezelések Szombathelyen: esztétikus kompozit tömések, gyökérkezelés, fogmentés. Modern anyagok, fájdalommentes. TB-támogatott. Időpontfoglalás: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/fogmegtarto-kezelesek" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Fogmegtartó kezelések",
  description: "Kompozit tömések és gyökérkezelések a szuvas vagy sérült fogak megmentéséért.",
  procedureType: "https://health-lifesci.schema.org/TherapeuticProcedure",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        title="Fogmegtartó kezelések"
        subtitle="Célunk minden menthető fog hosszú távú megtartása — korszerű anyagokkal és technikákkal."
        image="/images/service-2-fogmegtarto.webp"
        sections={[
          {
            heading: "Kompozit tömések",
            text: "A szuvasodás eltávolítása után kompozit (fogszínű) anyaggal pótoljuk a hiányzó fogszövetet. A kompozit tömés tartós, esztétikus, és a természetes fogszínhez igazítható — gyakorlatilag láthatatlan. A régi amalgám töméseket is kicseréljük fogszínű anyagra, ha a páciens ezt kéri."
          },
          {
            heading: "Gyökérkezelés",
            text: "Ha a szuvasodás eléri a fogbelet (pulpát), gyökérkezelésre van szükség. A beavatkozás során helyi érzéstelenítésben eltávolítjuk a fertőzött fogbelet, kitisztítjuk és dezinficiáljuk a gyökércsatornákat, majd hermetikusan lezárjuk őket. A gyökérkezelt fogat ezt követően tömjük vagy koronával erősítjük meg a hosszú távú tartósság érdekében."
          },
          {
            heading: "Mikor van szükség fogmegtartó kezelésre?",
            text: "Fogfájás, hideg-meleg érzékenység, az íny duzzanata, vagy a fog elszíneződése mind olyan jelek, amelyek fogmegtartó kezelés szükségességére utalhatnak. Ugyanakkor a szuvasodás kezdeti stádiumában tünetmentes — ezért is fontos a rendszeres szűrővizsgálat. Minél korábban észleljük a problémát, annál kisebb beavatkozással megoldható."
          },
        ]}
        relatedServices={[
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
          { title: "Fogkőeltávolítás", href: "/fogkoeltavolitas" },
          { title: "Fogpótlás", href: "/fogpotlas" },
          { title: "Sürgősségi ellátás", href: "/surgossegi-ellatas" },
        ]}
      />
    </>
  );
}
