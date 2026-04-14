import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Gyermekfogászat Szombathely — barázdazárás, fluoridos kezelés | Dr. Köteles Renáta",
  description: "Gyermekfogászat Szombathelyen: barátságos légkör, barázdazárás, fluoridos kezelés, szájhigiénés tanácsadás. TB-támogatott gyermek fogászati ellátás. Időpontfoglalás: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/gyermekfogaszat" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Gyermekfogászat",
  description: "Gyermekfogászati ellátás: barázdazárás, fluoridos kezelés, szájhigiénés tanácsadás barátságos légkörben.",
  procedureType: "https://health-lifesci.schema.org/TherapeuticProcedure",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        title="Gyermekfogászat"
        subtitle="Barátságos fogászati élmény a legkisebbeknek — mert az első benyomás meghatározó."
        image="/images/service-7-gyermek.jpg"
        sections={[
          {
            heading: "Az első fogászati élmény",
            text: "A gyermekfogászatban kiemelt figyelmet fordítunk arra, hogy a gyermek számára az első fogászati élmény pozitív és stresszmentes legyen. Ez megalapozza a felnőttkori fogorvos-páciens kapcsolatot. Barátságos, türelmes hozzáállással ismertetjük meg a gyermekeket a fogászati eszközökkel és a kezelés menetével."
          },
          {
            heading: "Barázdazárás és fluoridos kezelés",
            text: "A frissen előtört maradó őrlőfogak rágófelszínén mély barázdák (fissurák) vannak, amelyekben könnyen megtapad az étel és a baktérium. A barázdazárás (fissura-záró lakkozás) egy vékony védőréteget képez a fogfelszínen, amely megakadályozza a szuvasodás kialakulását. A fluoridos kezelés erősíti a fogzománcot és növeli annak ellenálló képességét a savhatásokkal szemben."
          },
          {
            heading: "Szájhigiénés tanácsadás szülőknek",
            text: "A gyermekek fogápolási szokásai kialakításában a szülők szerepe meghatározó. Személyre szabott tanácsadást nyújtunk a kornak megfelelő fogkefe és fogkrém kiválasztásáról, a helyes fogmosási technikáról, és az étkezési szokások fogakra gyakorolt hatásáról. A tejfogak állapota közvetlenül befolyásolja a maradó fogak fejlődését — a szuvasodás korai kezelése elengedhetetlen."
          },
        ]}
        relatedServices={[
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
          { title: "Fogmegtartó kezelések", href: "/fogmegtarto-kezelesek" },
          { title: "Fogkőeltávolítás", href: "/fogkoeltavolitas" },
          { title: "Sürgősségi ellátás", href: "/surgossegi-ellatas" },
        ]}
      />
    </>
  );
}
