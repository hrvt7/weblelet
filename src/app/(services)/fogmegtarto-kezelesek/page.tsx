import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Gyökérkezelés és fogmegtartó kezelések Szombathelyen | Dr. Köteles Renáta",
  description: "Gyökérkezelés, kompozit tömés és fogmentő kezelések Szombathelyen. Fájdalommentes, modern technikákkal. TB-támogatott rendelő. Időpont: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/fogmegtarto-kezelesek" },
};

const procedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Fogmegtartó kezelések",
  alternateName: ["Gyökérkezelés", "Fogtömés", "Kompozit tömés", "Endodoncia"],
  description: "Kompozit tömések és gyökérkezelések a szuvas vagy sérült fogak megmentéséért.",
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
      name: "Fáj-e a gyökérkezelés?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A gyökérkezelés modern érzéstelenítéssel fájdalommentes beavatkozás. Sokan a fájdalomtól kezdve érkeznek — ez pont a gyulladt fogbél tünete —, de az érzéstelenítés után a kezelés alatt semmit nem éreznek. A beavatkozás után 2-3 napig lehet enyhe nyomásérzékenység, ez normális és fájdalomcsillapítóval kezelhető.",
      },
    },
    {
      "@type": "Question",
      name: "Mikor kell gyökérkezelés?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gyökérkezelésre akkor van szükség, ha a szuvasodás vagy egy mély tömés elérte a fogbelet (pulpát), és ott gyulladást okozott. Tünetek: spontán, lüktető fogfájás éjszaka vagy fekvéskor, hideg-meleg érzékenység ami perceken át is kitart, duzzadt íny a fog körül, tályog képződés. Röntgenfelvétel alapján egyértelműen diagnosztizálható.",
      },
    },
    {
      "@type": "Question",
      name: "Mennyi ideig tart egy gyökérkezelés?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Egy egyszerű egygyökerű fog gyökérkezelése 1-2 ülést igényel, ülésenként 45-60 percet. Többgyökerű fogaknál (moláris) 2-3 ülés szükséges, összesen 2-3 héten belül. A végleges tömés vagy korona a gyökérkezelés lezárása után készül.",
      },
    },
    {
      "@type": "Question",
      name: "Mennyi ideig tart egy tömés elkészítése?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Egy egyszerű kompozit tömés elkészítése 30-45 perc egy ülés alatt. Nagyobb kiterjedésű vagy több tömés egyidejű elkészítése 60-90 percet vehet igénybe. A tömés közvetlenül a kezelés után terhelhető — 24 órán belül normál étkezés lehetséges.",
      },
    },
    {
      "@type": "Question",
      name: "Miért jobb a kompozit tömés az amalgámnál?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A kompozit (fogszínű) tömés esztétikusabb — szinte láthatatlanul beleolvad a fogba. Kevesebb fogszövet eltávolítása szükséges (ragasztható, nem kell alámetszett üreg), jobban megóvja a fog eredeti szerkezetét. Nem tartalmaz higanyt, és nem okoz hideg-meleg érzékenységet.",
      },
    },
    {
      "@type": "Question",
      name: "Meddig tart ki egy kompozit tömés?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Egy jól elkészített kompozit tömés 7-10 évig, megfelelő szájhigiéne és rendszeres kontroll mellett akár 15 évig is. Az élettartamot befolyásolja a tömés helye (metsző vagy őrlőfog), a páciens rágási szokásai és az otthoni fogápolás minősége.",
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
        title="Fogmegtartó kezelések Szombathelyen"
        subtitle="Gyökérkezelés, kompozit tömés és fogmentő beavatkozások Dr. Köteles Renáta rendelőjében. Célunk minden menthető fog hosszú távú megtartása — fájdalommentes technikákkal."
        image="/images/hero/service-2.webp"
        sections={[
          {
            heading: "Mi a fogmegtartó fogászat?",
            text: "A fogmegtartó fogászat (konzerváló fogászat) azon eljárások gyűjtőneve, amelyek a sérült vagy szuvas fogakat eltávolítás helyett megmentik és helyreállítják. Két fő területe a tömés (a hiányzó fogszövet pótlása kompozit anyaggal) és a gyökérkezelés (endodoncia — a fog belsejének, a pulpának a kezelése). A modern fogászat első számú célja mindig a saját fog megtartása: egy jól elkészített tömés vagy gyökérkezelt fog évtizedekig szolgálhat, és funkcionálisan jobb minden fogpótlásnál. A természetes fog megőrzése továbbá megőrzi az állcsontot, a rágás természetes dinamikáját, és a mosoly esztétikáját."
          },
          {
            heading: "Kinek javasolt?",
            text: "Fogmegtartó kezelésre szüksége lehet annak, akinek kisebb-nagyobb szuvas területe van egy fogán, spontán fogfájást, nyomásérzékenységet, vagy hosszan tartó hideg-meleg érzékenységet tapasztal, régi tömés töredezik vagy kiesett, letört a fogából egy darab, észrevett elszíneződést a fogán (ez gyakran szuvasodás jele), vagy a szűrővizsgálat során kezdődő szuvasodást találtunk. A korai kezelés kulcsfontosságú: egy kezdődő szuvasodás 30 perces tömés, míg egy elhanyagolt eset gyökérkezelést, koronát, vagy akár foghúzást igényelhet."
          },
          {
            heading: "Kompozit tömés — a szuvasodás kezelése",
            text: "A kompozit (fogszínű) tömés a modern fogászat alapeljárása. Először helyi érzéstelenítésben eltávolítjuk a szuvas, bakteriálisan fertőzött fogszövetet, majd a tiszta üreget speciális ragasztóanyaggal kezeljük, és fényrekeményítő kompozit anyagot helyezünk be rétegről rétegre. A tömést a fog természetes alakjára formázzuk, polírozzuk, majd a rágási felszínt beállítjuk. Az eredmény szinte láthatatlan: a fogszínű anyag tökéletesen illeszkedik a természetes fogszínhez. A régi amalgám (ezüstszínű) tömések cseréje esztétikai és biológiai okokból egyaránt indokolt lehet — különösen a mosolyövezetben."
          },
          {
            heading: "Gyökérkezelés (endodoncia) — amikor a szuvasodás mélyre hatolt",
            text: "Ha a szuvasodás vagy egy régi tömés elérte a fogbelet (pulpát), a fogat csak gyökérkezeléssel lehet megmenteni. A beavatkozás során helyi érzéstelenítésben megnyitjuk a fog koronai részét, speciális tűszerű eszközökkel (endo-fájlok) eltávolítjuk a fertőzött vagy elhalt pulpaszövetet a gyökércsatornákból. A csatornákat alaposan kitisztítjuk, antimikrobiális öblítéssel fertőtlenítjük, majd hermetikusan lezárjuk egy speciális gumiszerű anyaggal (gutta-percha). A gyökérkezelés után a fogat tömjük vagy — ha jelentős fogszövet hiányzik — koronával erősítjük meg. A modern gyökérkezelés 90-95%-ban sikeres, és a kezelt fog akár évtizedekig szolgálhat."
          },
          {
            heading: "Hogyan zajlik a kezelés lépésről lépésre?",
            text: "Vizsgálat és diagnózis — a kezelési terv röntgenfelvétel és klinikai vizsgálat alapján készül. Érzéstelenítés — modern helyi érzéstelenítővel, fájdalommentesen. Előkészítés — a fog izolálása kofferdámmal (gumi izolátor), amely steril munkateret biztosít. Fertőzött szövet eltávolítása — tömésnél a szuvas rész kivétele, gyökérkezelésnél a pulpa eltávolítása és csatornák kitisztítása. Helyreállítás — kompozit tömés vagy gyökércsatorna-tömés. Végleges forma — polírozás, rágási felszín beállítása. Kontroll — 1 hét múlva ellenőrzés, hogy minden rendben van."
          },
          {
            heading: "Fáj-e a kezelés?",
            text: "A modern érzéstelenítőknek köszönhetően a tömés és a gyökérkezelés egyaránt fájdalommentes. Sokan a fogfájástól kezdve érkeznek — ez a gyulladt fogbél tünete —, de az érzéstelenítés hatása alatt a kezelés ideje alatt semmit nem éreznek. A beavatkozás után 2-3 napig enyhe nyomásérzékenység előfordulhat, különösen gyökérkezelés esetén: ez természetes, és szokványos fájdalomcsillapítóval (pl. ibuprofen) kezelhető. Ha a fájdalom 3-4 nap után is fennáll, jelezze felénk. A kezelés előtti félelem természetes — nálunk időt adunk a páciensnek, hogy megértse a folyamatot, és nyugodtan dolgozunk. Sok páciens meglepetten tapasztalja, milyen könnyű és fájdalommentes a beavatkozás."
          },
          {
            heading: "Mire számítson a kezelés után?",
            text: "Tömés után: 1-2 órán belül, amíg az érzéstelenítés hatása tart, kerülje a forró italokat és a rágást az érintett oldalon — az ajak vagy nyelv bekapása akaratlan. Ezt követően normál étkezés lehetséges. Néhány napig érzékenység előfordulhat hideg-meleg ingerekre, ez fokozatosan megszűnik. Gyökérkezelés után: az első 2-3 nap enyhe nyomásérzékenység természetes, ezt követően a kezelt fog fájdalmatlanul rágható. A gyökérkezelt fog 1-3 hónap múlva kap végleges tömést vagy koronát (a kezelés teljes lezárása). Általános tanácsok: rendszeres fogmosás (napi 2x), fogselyem vagy interdentális kefe napi használata, 6 havonta kontroll és profi fogtisztítás."
          },
          {
            heading: "Mennyibe kerül? TB-támogatott?",
            text: "A konzerváló fogászati ellátás — beleértve a töméseket és gyökérkezeléseket — bizonyos keretek között TB-támogatott. A NEAK finanszírozza az alapvető kezeléseket jogosult páciensek számára érvényes TAJ-számmal. A magán fogászati ellátás esetén az ár a kezelés komplexitásától függ: egyszerű egyfelszínes tömés, több felszínes tömés, vagy többgyökerű fog gyökérkezelése eltérő időt és anyagot igényel. Pontos árajánlatot a vizsgálat után tudunk adni, amikor a kezelési terv egyedileg elkészül. Kérjen tájékoztatást: +36 94 900-887."
          },
          {
            heading: "Gyakori kérdések",
            text: "Mikor kell gyökérkezelés? Spontán lüktető fogfájás, hosszan tartó hideg-meleg érzékenység, duzzadt íny vagy tályog esetén. Elveszíthetem-e a fogamat kezeletlen szuvasodástól? Igen, ezért fontos a rendszeres szűrés. Mi van ha nem végeztetem el a gyökérkezelést? A gyulladás tovább terjedhet az állcsontba (tályog), a fog elveszíthető, ritka esetben szisztémás szövődmény is előfordulhat. Miért kell röntgen? A szuvasodás mélysége és a gyökércsatornák anatómiája csak röntgenen látható. Lehet-e egy nap alatt elkészíteni? Egyszerű tömés igen, gyökérkezelés általában 2-3 ülést igényel a biztos gyógyulás érdekében."
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
