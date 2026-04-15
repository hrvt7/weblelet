import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Fogpótlás Szombathelyen — korona, híd, fogsor | Dr. Köteles Renáta",
  description: "Fogpótlás Szombathelyen: koronák, hidak, kivehető fogsorok. Fém-kerámia és teljes kerámia megoldások. TB-támogatott keretben és magánellátásban is. Időpont: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/fogpotlas" },
};

const procedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Fogpótlás",
  alternateName: ["Korona", "Híd", "Kivehető fogsor"],
  description: "Koronák, hidak és kivehető fogsorok készítése az elveszett vagy sérült fogak pótlására.",
  procedureType: "https://health-lifesci.schema.org/TherapeuticProcedure",
  bodyLocation: "Fogazat",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mennyi ideig tart egy fogpótlás elkészítése?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Egy korona vagy híd elkészítése általában 2-3 ülést igényel, 2-3 hét alatt: első alkalommal a fogakat előkészítjük és lenyomatot veszünk, majd a fogtechnikai labor elkészíti a pótlást, végül behelyezzük. Kivehető fogsor esetén 3-5 alkalom szükséges, összesen 3-6 hét alatt.",
      },
    },
    {
      "@type": "Question",
      name: "Fáj-e a fogpótlás készítése?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fogcsiszolás és lenyomatvétel helyi érzéstelenítésben történik, így a beavatkozás fájdalommentes. A próbák és a behelyezés már nem igényelnek érzéstelenítést. Átmeneti érzékenység a kezelés után néhány napig előfordulhat, de ez természetes.",
      },
    },
    {
      "@type": "Question",
      name: "TB-támogatott a fogpótlás Szombathelyen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A NEAK bizonyos keretek között támogatja a teljes és részleges kivehető fogsort, valamint egyes korona- és hídpótlásokat. A támogatás mértéke a páciens életkorától, egészségi állapotától és a pótlás típusától függ. A pontos jogosultságot a vizsgálat során tudjuk meghatározni.",
      },
    },
    {
      "@type": "Question",
      name: "Mennyi ideig tart ki egy fogpótlás?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fém-kerámia koronák és hidak 10-15 évig, a teljes kerámia pótlások akár 15-20 évig is eltarthatnak megfelelő szájhigiéne és rendszeres kontroll mellett. A kivehető fogsorok élettartama általában 5-10 év, de a fogmeder változása miatt időnkénti alábélelés szükséges.",
      },
    },
    {
      "@type": "Question",
      name: "Mi a különbség a fém-kerámia és a teljes kerámia korona között?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fém-kerámia korona belseje fémvázas, külseje porcelán — tartós és kedvezőbb árú megoldás. A teljes kerámia korona (cirkon vagy e.max) teljes egészében kerámiából készül, ezért természetesebb, áttetszőbb megjelenést ad — különösen a mosolyövezetben előnyös. Mindkettő biokompatibilis.",
      },
    },
    {
      "@type": "Question",
      name: "Hogyan kell ápolni a fogpótlást?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A rögzített fogpótlásokat (korona, híd) ugyanúgy kell tisztítani mint a természetes fogakat: napi kétszeri fogmosás, fogselyem vagy interdentális kefe a híd alá. A kivehető fogsort étkezés után leöblítjük, este fogkefével és speciális fogsor tisztító tablettával ápoljuk. Évente 1-2 alkalommal javasolt a kontrollvizsgálat.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicePage
        title="Fogpótlás Szombathelyen"
        subtitle="Korona, híd és kivehető fogsor Dr. Köteles Renáta rendelőjében. Modern anyagok, természetes megjelenés, TB-támogatott és magán ellátás egyaránt."
        image="/images/hero/service-4.webp"
        sections={[
          {
            heading: "Mi az a fogpótlás?",
            text: "A fogpótlás minden olyan fogászati beavatkozás gyűjtőneve, amely a hiányzó, sérült vagy erősen károsodott fogakat helyettesíti. A pótlások két nagy csoportba sorolhatók: a rögzített pótlások (korona, híd) véglegesen a szájüregben maradnak, míg a kivehető fogsorok naponta levehetők tisztítás és pihenés céljából. A korszerű fogpótlások természetes megjelenésűek, strapabírók, és teljes értékű rágófunkciót biztosítanak — a páciensek többsége a kezelés után észre sem veszi, hogy pótolt fogakat visel."
          },
          {
            heading: "Kinek javasolt a fogpótlás?",
            text: "Fogpótlásra szüksége lehet annak, akinek egy vagy több foga hiányzik, töröttsége vagy mély szuvasodása miatt egy foga jelentősen sérült, gyökérkezelt foga gyengült és megerősítést igényel, vagy esztétikai okokból szeretné elszíneződött, kopott fogait felújítani. A hiányzó fog pótlása nemcsak esztétikai kérdés: a hiány megváltoztatja a rágás dinamikáját, a szomszédos fogak az üres hely felé dőlnek, az ellenoldali fog kikúszhat — mindez hosszú távon állkapocs-ízületi problémákhoz és további fogvesztéshez vezet."
          },
          {
            heading: "A fogpótlás típusai",
            text: "Korona (fogkorona): egyetlen sérült fogat borító sapka, amelyet fém-kerámia vagy teljes kerámia (cirkon, e.max) anyagból készítünk. A fém-kerámia tartós és gazdaságos, a teljes kerámia a legesztétikusabb. Híd: több fogból álló pótlás, ahol a hiányzó fog helyére egy függő fog-elem kerül, két oldalt pedig a szomszédos fogakra helyezett koronák rögzítik. Így egy vagy több hiányzó fog egyszerre pótolható. Kivehető fogsor: teljes fogsor (ha minden fog hiányzik) vagy részleges fogsor (ha egy-két fog megmaradt) — szájpadlásra vagy kapcsokra rögzítve. Kombinált munkák: a kivehető és rögzített elemek ötvözése komplexebb esetekben."
          },
          {
            heading: "Hogyan zajlik a fogpótlás készítése?",
            text: "Első látogatás — konzultáció és vizsgálat: áttekintjük a szájüreget, szükség szerint röntgenfelvételt készítünk, és közösen kiválasztjuk a legjobb megoldást. Előkészítés — a pótlandó fog vagy fogak csiszolása helyi érzéstelenítésben, lenyomatvétel, ideiglenes korona behelyezése. Fogtechnikai labormunka — a pontos modell alapján a labor 1-2 hét alatt elkészíti a végleges pótlást. Próbák — szükség szerint 1-2 alkalommal felpróbáljuk a pótlást, hogy az illeszkedés és szín tökéletes legyen. Behelyezés — a végleges ragasztás és finombeállítás. Kontroll — 1-2 hét múlva ellenőrzés."
          },
          {
            heading: "Fáj-e a fogpótlás készítése?",
            text: "A fogpótlás készítése modern érzéstelenítési technikákkal gyakorlatilag fájdalommentes. A fogak csiszolása és a lenyomatvétel helyi érzéstelenítésben történik, így a beavatkozás során semmilyen kellemetlenséget nem érez. A felpróbálások és a végleges behelyezés fájdalommentes, érzéstelenítést nem igényelnek. A kezelés után néhány napig előfordulhat enyhe érzékenység a hideg-meleg ingerekre — ez normális, és általában 1-2 hét alatt megszűnik. Amennyiben a pótlás magasabbnak érződik rágáskor, egy rövid finombeállítás azonnal megoldja."
          },
          {
            heading: "Mennyi ideig tart?",
            text: "Egyszerű korona vagy 3 tagú híd készítése: 2-3 ülés, összesen 2-3 hét. Nagyobb kiterjedésű hídpótlás (5-6 fog): 3-4 ülés, 3-4 hét. Kivehető teljes vagy részleges fogsor: 3-5 ülés, 4-6 hét. Komplex kombinált munka (pl. teljes felső-alsó rehabilitáció): 6-10 hét, egyedi tervezéssel. Az időtartamot befolyásolja a fogtechnikai labor terhelése, a próbák közötti pihentetési idő, valamint a páciens egyéni gyógyulási tempója. Sürgős esetben ideiglenes pótlás azonnal biztosítható."
          },
          {
            heading: "Mire számítson a kezelés után?",
            text: "Az első napokban enyhe érzékenység és szokatlan érzés természetes — a nyelv és a száj néhány nap alatt hozzászokik az új pótláshoz. Ideiglenes korona viselésekor kerülje a ragadós ételeket (rágógumi, toffee), és puha ételeket fogyasszon. A végleges pótlás után 24 óráig ne rágjon az érintett oldalon, hogy a ragasztó tökéletesen kösse meg. Ezt követően teljes értékű étkezés lehetséges. Kivehető fogsor esetén a szoktatási időszak 1-2 hét: ez alatt a nyelv és az ajkak fokozatosan alkalmazkodnak. Az első hetekben a beszéd szokatlan lehet — rendszeres gyakorlással (hangos felolvasás) gyorsan normalizálódik."
          },
          {
            heading: "Mennyibe kerül? TB-támogatott a fogpótlás?",
            text: "A NEAK (Nemzeti Egészségbiztosítási Alapkezelő) bizonyos keretek között támogatja a fogpótlást — különösen a teljes és részleges kivehető fogsorokat, valamint egyes egyszerű koronákat és hidakat, meghatározott életkorban és egészségügyi indikációval. Rendelőnk NEAK szerződéses alapellátó rendelőként a TB-támogatott kezeléseket elérhetővé teszi jogosult páciensek számára. A magán fogpótlás ára a választott anyagtól (fém-kerámia, cirkon, e.max), a pótlás kiterjedésétől és a fogtechnikai labor költségeitől függ. Pontos árajánlatot a vizsgálat után tudunk adni, amikor a kezelési terv egyedileg kidolgozásra kerül. Kérjen tájékoztatást: +36 94 900-887."
          },
          {
            heading: "Gyakori kérdések",
            text: "Hány év után kell cserélni? A fém-kerámia 10-15 év, teljes kerámia 15-20 év, kivehető fogsor 5-10 év megfelelő ápolás mellett. Lehet-e rágni implantátum vagy pótlás után? Igen, rögzített pótlással szinte azonnal teljes értékű rágás lehetséges. Mi történik ha letörik a korona? Hívjon minket — a legtöbb esetben a korona javítható vagy gyorsan új készíthető. Kivehetem a fogsort éjszakára? Igen, ez javasolt — pihenés, tisztítás és a fogmeder levegőzése érdekében. Bekerülnek-e ételek a híd alá? Helyes szájhigiéne (interdentális kefe, fogselyem) mellett nem. Elrozsdálnak-e a fogpótlások? Nem, a modern fogászati anyagok (kerámia, cirkon, nemes fémek) korrózióállók és biokompatibilisek."
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
