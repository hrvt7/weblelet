import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Sürgősségi fogorvos Szombathelyen — akut fogfájás ellátás | Dr. Köteles Renáta",
  description: "Sürgősségi fogászati ellátás Szombathelyen: akut fogfájás, törött fog, kiesett tömés azonnali kezelése. Hívjon: +36 94 900-887. Hétfő–péntek.",
  alternates: { canonical: "https://weblelet.hu/surgossegi-ellatas" },
};

const procedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Sürgősségi fogászati ellátás",
  alternateName: ["Akut fogászati ellátás", "Fogfájás kezelés"],
  description: "Akut fogfájás, eltörött fog, kiesett tömés vagy fogászati trauma azonnali kezelése.",
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
      name: "Mit tegyek éjszakai fogfájás esetén?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Éjszakai fogfájásnál első lépésként vegyen be szokásos fájdalomcsillapítót (ibuprofen 400 mg vagy paracetamol 500 mg). Öblítse a száját langyos sós vízzel (1 dl víz + 1 teáskanál só). Kerülje a meleg italokat és ételeket, hidegeket is csak ha javulást okoz. Feküdjön magasabb párnára — a fej emelkedett helyzete csökkentheti a nyomás-érzetet. Reggel elsőként hívjon minket: +36 94 900-887.",
      },
    },
    {
      "@type": "Question",
      name: "Mit tegyek, ha letörött a fogam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keresse meg a letört darabot, és tegye tiszta tejbe, sós vízbe vagy nyálba — ne tisztítsa meg! A fog sejtjei így maradnak életben. Ha az íny vérzik, nyomja rá steril gézt 10-15 percig. Vegye be fájdalomcsillapítót ha szükséges. Hívjon azonnal: +36 94 900-887 — a teljesen kiesett fogat 30-60 percen belül vissza lehet ültetni (replantáció).",
      },
    },
    {
      "@type": "Question",
      name: "Kiesett a tömésem — sürgős?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nem életveszélyes, de 1-2 napon belül kezelni kell. A védelem nélküli fog gyorsan érzékennyé válik hideg-melegre, és a nyitott üregbe étel-baktérium juthat. Ideiglenes megoldás: gyógyszertári ideiglenes tömőanyag (Cavit, Coltosol) vagy paraffinviasz. Kerülje az érintett oldalt étkezéskor. Hívjon a következő munkanapon időpontért.",
      },
    },
    {
      "@type": "Question",
      name: "Mi az a fogászati tályog — veszélyes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fogászati tályog egy gennyes fertőzés, amely lüktető, erős fogfájással, duzzadt arccal, rossz szájízzel és esetleg lázzal jár. Igen, komoly lehet — kezeletlen állapotban a fertőzés az állcsontba, nyaki területekre, sőt a szisztémás keringésbe is terjedhet. Ha arcduzzanatot, nyelési nehézséget vagy 38°C feletti lázat tapasztal, azonnal menjen sürgősségi ellátásra (éjszaka / hétvégén kórházi ügyelet).",
      },
    },
    {
      "@type": "Question",
      name: "Hova menjek hétvégén vagy éjszaka fogfájással?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A rendelő nyitvatartási időn kívül (hétvége, ünnepnap) a szombathelyi Fogászati Ügyeletet (Markusovszky u. 8., +36 94 313-340) keresse fel 08:00–14:00 között. Éjszaka vagy életveszélyes állapot (súlyos duzzanat, magas láz, légzési nehézség) esetén a Markusovszky Kórház sürgősségi osztályára kell menni, vagy hívni a 112-t.",
      },
    },
    {
      "@type": "Question",
      name: "Mennyibe kerül a sürgősségi kezelés?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A sürgősségi alapellátás (fájdalomcsillapítás, tályog megnyitása, ideiglenes tömés) jogosult TB-s pácienseknek térítésmentes. A végleges kezelés (gyökérkezelés, korona, stb.) külön időpontban, a standard árazás szerint történik. Pontos tájékoztatást a vizsgálat után tudunk adni.",
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
        title="Sürgősségi fogorvos Szombathelyen"
        subtitle="Akut fogfájás, törött fog, kiesett tömés? Rendelési időben azonnali ellátást biztosítunk. Hívjon: +36 94 900-887 — Dr. Köteles Renáta rendelője."
        image="/images/hero/service-8.webp"
        sections={[
          {
            heading: "Mikor beszélünk sürgősségről?",
            text: "Sürgősségi fogászati ellátásra van szüksége, ha spontán, erős, lüktető fogfájás jelentkezik — különösen ha éjszaka vagy fekvéskor erősödik, ha a fog eltört vagy megrepedt (akár ütés, akár rágás közben), ha tömés vagy korona kiesett, és a fogüreg védtelenül maradt, ha a fog teljesen kiesett (sportbaleset, esés), ha duzzadt arc vagy íny tályogképződésre utal, ha a foghúzás utáni seb több órán át erősen vérzik, ha gyökérkezelés vagy tömés után erős fájdalom jelentkezik. Ezekben az esetekben az azonnali beavatkozás nemcsak a fájdalom csillapítása miatt fontos: a késlekedés súlyosbíthatja a fertőzést, és a fog megmentésének esélyét is csökkentheti."
          },
          {
            heading: "Mit tegyen a rendelő hívása előtt?",
            text: "Akut fogfájás esetén: vegyen be szokásos fájdalomcsillapítót (ibuprofen, paracetamol — kerülje az aszpirint, mert vérzést okozhat), öblítse a száját langyos sós vízzel, kerülje a forró ételt és italt. Eltörött fognál: keresse meg a letört darabot, tegye tiszta tejbe vagy sós vízbe — ne tisztítsa meg! Ha az íny vérzik, nyomjon rá steril gézt 10-15 percig. Kiesett fog (teljes fogavulzió): a fog gyökerét NE érintse — a koronai részénél fogva nyúljon hozzá, öblítse le röviden hideg folyóvíz alatt (ne dörzsölje!), és tegye tejbe, sós vízbe, vagy legjobb esetben a saját szájába (a nyelv alá) — 30-60 percen belül vissza lehet ültetni. Tályognál: ne melegítse — a meleg felgyorsítja a gyulladást. Jeges borogatás csillapíthatja a fájdalmat."
          },
          {
            heading: "Hogyan zajlik a sürgősségi ellátás?",
            text: "Első kontakt (telefon) — röviden leírja a panaszt, időpontot egyeztetünk (rendelési időben igyekszünk soron kívül fogadni). Érkezés és gyors vizsgálat — klinikai vizsgálat, szükség esetén célzott röntgenfelvétel a fájdalom okának azonosítására. Akut beavatkozás — a fájdalom csillapítása és a probléma kezelése: ideiglenes tömés kiesett tömés helyére, tályog megnyitása és drénezés, gyökérkezelés megkezdése (a fertőzött pulpa eltávolítása), törött fog stabilizálása, gyógyszeres kezelés (antibiotikum gyulladás esetén, fájdalomcsillapító). Kezelési terv — a végleges ellátás tervezése (pl. gyökérkezelés befejezése, korona, fogpótlás). Kontroll — 3-7 nap múlva ellenőrzés."
          },
          {
            heading: "A leggyakoribb sürgősségi esetek",
            text: "Akut pulpitisz (fogbél-gyulladás): lüktető, spontán fogfájás, gyakran éjszaka erősödik. Ok: mély szuvasodás elérte a pulpát. Kezelés: gyökérkezelés megkezdése, a fertőzött pulpa eltávolítása azonnali fájdalom-enyhülést hoz. Tályog (apikális vagy parodontális): duzzadt íny vagy arc, lüktető fájdalom, rossz szájíz, esetleg láz. Ok: baktériális fertőzés. Kezelés: tályog megnyitása és drénezés, antibiotikum. Kiesett tömés: védtelen fogüreg. Kezelés: ideiglenes tömés, később végleges. Letört fog: esztétikai és funkcionális probléma. Kezelés: kompozit ragasztás (ha csak zománc tört), gyökérkezelés + korona (ha mély), a fogpótlás szervezése (ha súlyos). Kiesett fog (avulzió): teljes fogkiesés traumás hatásra. Kezelés: replantáció 30-60 percen belül, rögzítés."
          },
          {
            heading: "Fáj-e a sürgősségi kezelés?",
            text: "Ez a páciensek egyik legnagyobb félelme — de meg kell nyugtatnunk: a modern érzéstelenítés mellett a sürgősségi beavatkozások fájdalommentesen végezhetők. A rendelőben való érkezéskor gyakran azért érezhet fájdalmat, mert a fogbél már gyulladt — az első lépés mindig a megbízható érzéstelenítés. Egyes esetekben (súlyos tályog, erősen savas környezet) az érzéstelenítő lassabban hat — ilyenkor magasabb adagot vagy speciális blokkolást alkalmazunk. A kezelés után 2-3 napig enyhe nyomásérzékenység természetes, fájdalomcsillapítóval (ibuprofen) kezelhető. A kezelés általában azonnali, drámai fájdalom-enyhülést hoz: sok páciens meglepetten tapasztalja, milyen gyorsan megszűnik a fogfájás."
          },
          {
            heading: "Mikor kell azonnal kórházi ügyeletre vagy mentőt hívni?",
            text: "Bár a legtöbb fogászati probléma várhat a rendelési idő kezdetéig, vannak esetek, amikor azonnali orvosi ellátás szükséges: súlyos arcduzzanat, amely a nyakra vagy szem körüli területre terjed (a fertőzés szisztémás szövődménye), nyelési vagy légzési nehézség, 38,5°C feletti láz fogászati panasz mellett, erős vérzés, amely 20-30 perc nyomás alatt sem áll el, tudatzavar, hányás, erős fejfájás a fogpanasz mellett. Ezekben az esetekben hívja a 112-t vagy menjen a Markusovszky Kórház sürgősségi osztályára. Éjszaka / hétvégén a szombathelyi Fogászati Ügyelet: Markusovszky u. 8., +36 94 313-340, 08:00–14:00."
          },
          {
            heading: "Hogyan előzhetők meg a sürgősségi helyzetek?",
            text: "Rendszeres szűrővizsgálat — félévente kontroll, szuvasodás korai kezelése megelőzi a gyökérkezelést és tályogokat. Megfelelő szájhigiéne — napi 2x fogmosás, fogselyem, évente 1-2x professzionális fogkő­eltávolítás. Azonnali beavatkozás — ha fájdalom vagy érzékenység jelentkezik, ne halogassa. A kisebb problémák gyorsabban és olcsóbban kezelhetők. Szájvédő használata sportnál — kontaktsportok, görkorcsolyázás, kerékpározás esetén jelentősen csökkenti a fogtörés kockázatát. Kemény tárgyak kerülése — ne harapjon jégkockát, dióhéjat, ceruzahegyet. Bruxizmus (fogcsikorgatás) — éjszakai fogvédő nyilvánvaló éjszakai csikorgatásnál."
          },
          {
            heading: "Mennyibe kerül a sürgősségi ellátás?",
            text: "A sürgősségi alapellátás — beleértve a fájdalomcsillapítást, tályog megnyitását, ideiglenes tömést — TB-támogatott jogosult páciensek számára érvényes TAJ-számmal és személyi igazolvánnyal. A végleges kezelés (gyökérkezelés befejezése, végleges tömés, korona, fogpótlás) külön időpontban történik, a kezelés típusától függő árazással. Magánellátás esetén a sürgősségi vizsgálat és az azonnali beavatkozás költségét egyedileg tudjuk meghatározni. Hívjon: +36 94 900-887."
          },
          {
            heading: "Gyakori kérdések",
            text: "Miért fáj jobban éjszaka? Fekvő helyzetben a fejben megnő a vérnyomás, ami növeli a gyulladt pulpa nyomását — ezért erősödik a lüktetés. Miért nem segít a fájdalomcsillapító? Ha a pulpa erősen gyulladt, a fájdalomcsillapító csak részben hatásos — gyökérkezelés szükséges. Fogászati tályognál antibiotikum elég? Nem — az antibiotikum csökkenti a gyulladást, de az ok (fertőzött pulpa) kezelése nélkül visszatér a probléma. Mindig gyökérkezelés vagy foghúzás szükséges. Kiesett fog visszaültethető? Ha 30-60 percen belül nedves környezetben (tej, sós víz, nyál) tartjuk, jó eséllyel visszaültethető — minél előbb, annál jobb esély."
          },
        ]}
        relatedServices={[
          { title: "Fogmegtartó kezelések", href: "/fogmegtarto-kezelesek" },
          { title: "Fogeltávolítás", href: "/fogeltavolitas" },
          { title: "Fogpótlás", href: "/fogpotlas" },
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
        ]}
      />
    </>
  );
}
