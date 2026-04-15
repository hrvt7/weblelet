import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "TB-támogatott fogorvos Szombathelyen | Dr. Köteles Renáta — NEAK rendelő",
  description: "TB-támogatott fogorvosi ellátás Szombathelyen. NEAK szerződéses rendelő: szűrés, tömés, gyökérkezelés, foghúzás társadalombiztosítás keretében. Időpont: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/tb-tamogatott-fogorvos-szombathely" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalService",
  name: "TB-támogatott fogorvosi ellátás",
  description: "NEAK szerződéses alapellátás: a fogászati alapkezelések társadalombiztosítás keretében, érvényes TAJ-számmal.",
  provider: { "@id": "https://weblelet.hu/#dentist" },
  areaServed: {
    "@type": "City",
    name: "Szombathely",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mi számít TB-támogatott fogászati kezelésnek?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A NEAK által finanszírozott alapellátás: évenkénti szűrővizsgálat, fogkőeltávolítás (évente 1x), tömések (egyszerű és többfelszínes), gyökérkezelés, foghúzás (egyszerű és sebészi esetben részben), alap fogpótlás (kivehető fogsor és egyszerűbb hídpótlások meghatározott életkorban), gyermekfogászati ellátás 0-18 éves korig teljes körűen, sürgősségi ellátás.",
      },
    },
    {
      "@type": "Question",
      name: "Milyen dokumentumokra van szükség?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TB-támogatott ellátáshoz szükséges: érvényes személyi igazolvány (vagy útlevél), TAJ-kártya (a 9 jegyű TAJ-számmal), lakcímkártya. Diákoknak 18-25 év között: diákigazolvány. EU-s biztosítással rendelkezőknek: európai egészségbiztosítási kártya (EHIC) vagy ideiglenes kártya. Ha nincs érvényes biztosítása: a kezelés magánellátás keretében érhető el.",
      },
    },
    {
      "@type": "Question",
      name: "Mi NEM TB-támogatott?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nem támogatott: fogfehérítés és esztétikai beavatkozások, veneer, kompozit héjak, teljes kerámia (cirkon, e.max) fogpótlások, implantátumok, speciális anyagok és kiegészítő profilaktikus kezelések (pl. Air-flow), a rutin TB-szabályozáson túli gyakoribb kontrollok. Ezek magánellátás keretében elérhetők.",
      },
    },
    {
      "@type": "Question",
      name: "Mennyi idő alatt kapok időpontot TB-s ellátáshoz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rutin szűrővizsgálatra általában 1-3 hét várakozási idő. Akut fogfájás vagy sürgősségi eset esetén a rendelési időben soron kívül fogadjuk. Komplexebb beavatkozásokhoz (pl. fogpótlás) hosszabb időpontra egyeztetünk, rendszerint 2-4 hét.",
      },
    },
    {
      "@type": "Question",
      name: "Mi a helyzet ha külföldről érkezem vagy nincs TAJ-számom?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EU-s állampolgároknak érvényes EHIC kártyával az akut és sürgős ellátás elérhető a NEAK szabályok szerint. Tervezett, nem sürgős kezelésekhez külön egyeztetés szükséges. Ha nincs biztosítása (nem EU-s, TAJ-szám nélkül), a kezelés magánellátás keretében végezhető — részletes tájékoztatást adunk az árakról.",
      },
    },
    {
      "@type": "Question",
      name: "Kaphatok-e részleges térítést magán-ellátáshoz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TB-támogatott rendelő vagyunk — az alapellátás keretében a jogosult páciensek térítésmentesen részesülnek ellátásban. A magánellátás (pl. speciális esztétikai kezelés, prémium fogpótlás) külön árazású. Hibrid megközelítés lehetséges: pl. TB-keretben gyökérkezelés + magán kerámia korona. A pontos költségterv a kezelési terv elkészítésekor egyértelműsödik.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicePage
        title="TB-támogatott fogorvos Szombathelyen"
        subtitle="NEAK szerződéses alapellátó rendelő Dr. Köteles Renáta vezetésével. Teljes körű fogászati kezelések társadalombiztosítás keretében — érvényes TAJ-számmal."
        image="/images/hero/service-1.webp"
        sections={[
          {
            heading: "Mit jelent a TB-támogatott (NEAK) fogorvosi ellátás?",
            text: "Magyarországon a NEAK (Nemzeti Egészségbiztosítási Alapkezelő) finanszírozza a társadalombiztosítás keretében elérhető egészségügyi ellátásokat — ebben a fogászati alapellátás is szerepel. A NEAK szerződéses fogorvosi rendelőkben az érvényes TAJ-számmal rendelkező páciensek térítésmentesen (vagy jelentősen csökkentett önrésszel) részesülhetnek alapellátásban. Rendelőnk NEAK szerződéses alapellátó fogorvosi rendelő a szombathelyi Markusovszky Lajos u. 8. szám alatt. A TB-támogatott rendszer célja: minden magyar állampolgárnak — vagyonhelyzettől függetlenül — legyen hozzáférése az alapvető fogászati ellátáshoz. A minőség ugyanaz mint a magánellátásban — ugyanazok a protokollok, ugyanaz a szakorvos, ugyanaz a modern felszerelés."
          },
          {
            heading: "Mit tartalmaz a TB-támogatott ellátás?",
            text: "Az alapellátás keretébe tartozó szolgáltatások: Szűrővizsgálat — évente 1 alkalommal rutin kontroll, szükség esetén röntgenfelvétel (bite-wing, PA). Fogkőeltávolítás — ultrahangos módszerrel, évente 1 alkalommal. Tömések — egyszerű (egyfelszínes) és többfelszínes kompozit tömések (egyes esetekben amalgám tömés is, páciens kérésére). Gyökérkezelés — egygyökerű és többgyökerű fogak endodonciai kezelése. Foghúzás — egyszerű és részben sebészi foghúzás (bölcsességfog, törött gyökér). Sürgősségi ellátás — akut fogfájás, tályog megnyitása, ideiglenes tömés, törött fog kezelése. Fogpótlás — részlegesen: kivehető fogsor meghatározott életkorban és indikációval, egyes hídpótlások. Gyermekfogászati ellátás 0-18 éves korig — teljes körűen támogatott (szűrés, tömés, barázdazárás, fluoridálás, gyökérkezelés, foghúzás, alapvető ortodonciai szűrés). Azon felül jogosultak: terhesek, szoptató anyák (a gyermek 1 éves koráig), HNSZ személyek (háborús érdemek után)."
          },
          {
            heading: "Mi szükséges a TB-támogatott ellátáshoz?",
            text: "Kötelező dokumentumok a rendelőbe érkezéskor: Érvényes személyi igazolvány (vagy útlevél). TAJ-kártya — a 9 jegyű TAJ-szám. Lakcímkártya — bejelentett magyarországi lakcímmel. 18-25 év közötti diákoknak: diákigazolvány. Egyéb tudnivalók: A TAJ-számmal rendelkező biztosított EU-s állampolgárok is jogosultak, bejegyzett TAJ-szám nélkül az EHIC (Európai Egészségbiztosítási Kártya) szükséges. Ha nincs érvényes biztosítása, a kezelés magánellátásként végezhető. A TB-támogatott ellátás nem ad jogot az ellátás gyakoriságának korlátlan kihasználására — a NEAK szabályozza, hogy évente mely kezelésekre jogosult (pl. 1 fogkőeltávolítás / év felnőttnek, de gyermekeknek korlátlan). Egyes komplexebb fogpótlások életkori kritériumokhoz kötöttek."
          },
          {
            heading: "Mire jogosult életkor szerint?",
            text: "Gyermekek (0-18 év): teljes körű fogászati ellátás ingyenesen. Szűrés, tömés, gyökérkezelés, foghúzás, barázdazárás, fluoridálás, ortodonciai szűrés. Fiatal felnőttek (18-25 év diákoknak): az általános felnőtt ellátás + bizonyos további kedvezmények diákigazolvánnyal. Felnőttek (18-65 év): alapellátás — szűrés, fogkőeltávolítás évente 1x, tömés, gyökérkezelés, foghúzás, sürgősségi ellátás. A fogpótlás (kivehető) csak meghatározott indikációval. Idősek (65 év felett): alapellátás minden elemével, plusz bizonyos fogpótlási kedvezmények. Terhesek, szoptató anyák: a gyermek 1 éves koráig teljes körű TB-támogatott ellátás (szűrés + tömés + sürgősségi). Nyugdíjasok és szociálisan rászorulók: az alapellátás, bizonyos kedvezmények."
          },
          {
            heading: "Mi nem támogatott? Miért válassza a magánellátást?",
            text: "Nem TB-támogatott ellátások: Esztétikai fogászat (fogfehérítés, veneers, kompozit héjak, esztétikai töméscsere). Prémium fogpótlások (teljes kerámia korona, cirkon, e.max, implantátum). Specialitások: Air-flow kezelés, rendelői fogfehérítés, speciális mikrobiológiai vizsgálatok. Rutinon túli gyakoribb kezelések (pl. 3 havonta profilaktikus kezelés). Szájsebészet komplex esetei, parodontológiai sebészet. Magánellátás előnyei: gyorsabb időpontok, modern anyagok választási lehetősége, kezelési időtartam rugalmasabb, speciális esztétikai megoldások. Hibrid megközelítés: sok páciens kombinálja — pl. TB-keretben gyökérkezelés + magán kerámia korona, vagy TB-szűrés + magán Air-flow. A keretek és az Ön egyedi igényei alapján közösen kidolgozzuk az optimális tervet."
          },
          {
            heading: "Hogyan zajlik egy TB-támogatott látogatás?",
            text: "Időpont-egyeztetés: telefonon (+36 94 900-887) a rendelési időben. Rutin szűrővizsgálatra 1-3 hét várakozás. Akut problémával soron kívüli fogadás. Érkezés: hozza magával a szükséges dokumentumokat (személyi, TAJ, lakcím). Recepcióra érkezve az adminisztráció rögzíti adatait a NEAK rendszerben. Anamnézis: első alkalommal részletes — allergiák, gyógyszerek, egészségi állapot; később csak frissítés. Vizsgálat és kezelés: a TB-támogatott ellátás ugyanazzal a szakmai minőséggel zajlik mint a magánellátás. Dokumentáció: a kezelés a digitális nyilvántartásba kerül, a NEAK felé automatikusan elszámoljuk. Ön nem fizet a pultnál. Következő időpont: a kezelési tervnek megfelelően egyeztetjük a folytatást."
          },
          {
            heading: "Várakozási idők — reális kép",
            text: "Rutin szűrővizsgálat: 1-3 hét várakozás. Fogkőeltávolítás: 2-3 hét. Tömés (kezdődő szuvasodás esetén, nem fájdalmas): 2-4 hét. Gyökérkezelés (nem fájdalmas kezelés esetén): 3-4 hét — akut fájdalomnál azonnal. Foghúzás nem fájdalmas esetben: 2-4 hét — fájdalmas / akut esetben azonnal. Fogpótlás tervezése: 4-6 hét az első konzultációig. Akut fogfájás, sürgősségi ellátás: rendelési időben ugyanazon a napon, soron kívül. Ez a várakozási rendszer biztosítja, hogy a TB-támogatott pácienseket időben, rangsor szerint tudjuk ellátni. Ha sürgős, de nem életveszélyes problémája van és nem tud várni, a magánellátás gyorsabb alternatíva lehet."
          },
          {
            heading: "Sürgősségi ellátás — mindig TB-támogatott?",
            text: "Igen, a sürgősségi fogászati ellátás teljes körűen TB-támogatott érvényes TAJ-számmal. A sürgősségi ellátás magában foglalja: akut fogfájás diagnózisát és kezelését, tályog megnyitását, fertőzött pulpa eltávolítását (gyökérkezelés megkezdése), ideiglenes tömés kiesett tömés helyére, törött fog ellátását, kiesett fog (avulzió) visszaültetését lehetőség szerint, gyógyszeres kezelés előírását (fájdalomcsillapító, antibiotikum). Rendelési időn belül: hívja a +36 94 900-887 számot, soron kívül fogadjuk. Rendelési időn kívül: Szombathelyen a Fogászati Ügyelet (ugyanazon a címen, Markusovszky u. 8., +36 94 313-340) 08:00–14:00 között hétvégén és ünnepnapokon. Éjszaka / életveszélyes esetben: Markusovszky Kórház sürgősségi osztály, vagy 112."
          },
          {
            heading: "TB + magán — okos kombinációk",
            text: "Sok páciens a TB-támogatott keretet használja az alapellátáshoz, és magánellátást választ bizonyos kiegészítésekhez. Példák: TB-szűrés + magán Air-flow — így félévente egyszer teljes körű professzionális tisztítás. TB-fogkőeltávolítás + magán fluoridos kezelés. TB-gyökérkezelés + magán teljes kerámia korona — a funkcionális alap TB-keretben, az esztétika magánellátásban. TB-egyszerű fogsor + magán speciális rögzítési elemek (pl. implantátumra rögzíthető fogsor). TB-gyerekfogászat + magán esztétikai tömés a mosolyövezetben. Minden esetben egyedileg tervezzük meg a legjobb költséghatékony kombinációt. Ne legyen kérdése — hívjon: +36 94 900-887."
          },
          {
            heading: "Gyakori kérdések TB-támogatott ellátás kapcsán",
            text: "Nem vagyok magyar állampolgár, de itt dolgozom — jogosult vagyok? Igen, ha a munkaadója TAJ-számot rendelt Önhöz és érvényes társadalombiztosítása van, ugyanolyan jogokkal rendelkezik. EU-s állampolgár vagyok, mi szükséges? EHIC kártya (Európai Egészségbiztosítási Kártya) a sürgős és akut ellátáshoz. Tervezett nem-sürgős ellátás: egyéni egyeztetés. Mi van ha elvesztettem a TAJ-kártyámat? Azonnal pótolható az EESZT Lakossági portálon vagy a Kormányablakban — a szám a kártya nélkül is megtalálható, de a kártyát be kell mutatni. Kell-e fizetnem valamit? Az alapellátás térítésmentes. Ha magánellátást kér kiegészítésként, azt külön fizeti. TB-s pácienseknek ugyanolyan szolgáltatást kapok mint a magán pácienseknek? Igen, ugyanaz a szakmai minőség, ugyanazok a protokollok. A különbség a választható kiegészítőkben (pl. prémium anyag, Air-flow, speciális kezelés) van."
          },
          {
            heading: "Foglaljon időpontot",
            text: "Telefon: +36 94 900-887 (rendelési időben). Email: dr.kotelesrenata@gmail.com. Cím: 9700 Szombathely, Markusovszky Lajos u. 8. Új TB-s pácienseket is szívesen fogadunk. Az első látogatáshoz érkezzen 10-15 perccel korábban az adminisztrációért, hozza magával a szükséges dokumentumokat. Kérdése van a jogosultságokról, a támogatott keretekről, vagy a kombinált (TB + magán) lehetőségekről? Hívjon, és részletesen tájékoztatjuk."
          },
        ]}
        relatedServices={[
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
          { title: "Fogpótlás", href: "/fogpotlas" },
          { title: "Fogorvos Szombathely", href: "/fogorvos-szombathely" },
          { title: "Sürgősségi ellátás", href: "/surgossegi-ellatas" },
        ]}
      />
    </>
  );
}
