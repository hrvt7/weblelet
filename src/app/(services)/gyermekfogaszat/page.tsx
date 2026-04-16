import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Gyermekfogászat Budapesten — barátságos ellátás | Dr. Minta Réka",
  description: "Gyermekfogászat Budapesten: barátságos környezet, barázdazárás, fluoridos kezelés, tejfog-ellátás. TB-támogatott. Időpont: +36 30 123 4567.",
  alternates: { canonical: "https://weblelet.hu/gyermekfogaszat" },
};

const procedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Gyermekfogászat",
  alternateName: ["Gyerekfogászat", "Tejfog kezelés", "Barázdazárás", "Fluoridálás"],
  description: "Gyermekek fogászati ellátása: szűrővizsgálat, barázdazárás, fluoridos kezelés, tejfog-tömés barátságos környezetben.",
  procedureType: "https://health-lifesci.schema.org/TherapeuticProcedure",
  bodyLocation: "Gyermekfogazat",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mikor vigyem először a gyermekemet fogorvoshoz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Az első fogászati látogatás ideális időpontja 1 éves kor körül, legkésőbb az első tejfog előtörése után 6 hónapon belül. Ekkor még nincs szükség kezelésre — a cél, hogy a gyermek megismerje a rendelőt, ellenőrizzük a fogak fejlődését, és szülői tanácsadást kapjon a helyes fogápolásról.",
      },
    },
    {
      "@type": "Question",
      name: "Kell-e tömni a tejfogat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Igen, mindenképpen! Bár a tejfog később kihullik, ha szuvasodik és kezelés nélkül marad, fájdalmat, fertőzést és a maradó fog fejlődési zavarait okozhatja. A korai tejfog-vesztés miatt a szomszédos fogak elmozdulhatnak, a maradó fog helye beszűkülhet, ami később ortodonciai kezelést tehet szükségessé.",
      },
    },
    {
      "@type": "Question",
      name: "Mi a barázdazárás és kinek ajánlott?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A barázdazárás (fissura-záró lakkozás) egy vékony, átlátszó védőréteg, amelyet az őrlőfogak rágófelszínén lévő mély barázdákba helyezünk. Megakadályozza, hogy az étel- és baktériummaradékok megtapadjanak és szuvasodást okozzanak. Ajánlott 6-14 éves kor között, a maradó őrlőfogak előtörése után (6 éves és 12 éves molárisok), 10-15 percet vesz igénybe, fájdalommentes.",
      },
    },
    {
      "@type": "Question",
      name: "Fél a gyermekem a fogorvostól — mit tehetek?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Otthon készítse elő pozitívan: ne használjon ijesztő szavakat ('fúró', 'fájni fog', 'szúrnak'). Inkább meséljen kalandos élményről: 'megszámlálják a fogakat'. Első látogatás ismerkedés legyen, kezelés nélkül. Játékbabával vagy meséskönyvvel gyakorolja otthon a fogorvosi helyzetet. A rendelőben barátságos, nyugodt légkört biztosítunk — türelmesen mutatjuk meg az eszközöket a kezelés előtt.",
      },
    },
    {
      "@type": "Question",
      name: "Mikor kezdjem a gyerek fogmosását?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Az első tejfog előtörésétől (4-6 hónapos kortól) kezdve tiszta nedves gézzel vagy ujjra húzható lágy fogkefével tisztítsuk. 2 éves kortól gyerekfogkefe + borsónyi mennyiségű gyerekfogkrém (alacsony fluoridtartalommal). 6 éves korig szülői felügyelet / segítség szükséges — a gyerek kézügyessége ekkorra elég a teljes tisztításhoz. 6 éves kortól felnőtt fogkrém mennyiség és önálló fogmosás, heti 1-2x ellenőrzéssel.",
      },
    },
    {
      "@type": "Question",
      name: "Milyen gyakran menjen a gyerek fogorvoshoz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Általános szabály: félévente, 6 hónaponként. Kockázatos esetben (szuvasodás hajlam, fogszabályozó viselése, vegyes fogazat időszakában) 3-4 havonta. Rendszeres szűréssel és megelőzéssel a gyermek fogai egész életére egészségesek maradhatnak.",
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
        title="Gyermekfogászat Budapesten"
        subtitle="Barátságos fogászati ellátás a legkisebbeknek Dr. Minta Réka rendelőjében. Barázdazárás, fluoridos kezelés, tejfog-ellátás — az első élmény meghatározó."
        image="/images/hero/service-7.webp"
        sections={[
          {
            heading: "Miért fontos a gyermekfogászat?",
            text: "A gyermekkori fogápolás meghatározza a felnőttkori fogegészséget — és a fogorvossal való kapcsolatot egész életre. Bár a tejfogak fejlett állapotban kihullanak, szerepük kulcsfontosságú: biztosítják a helyes rágást (ami a beszédfejlődést és a megfelelő táplálkozást támogatja), megőrzik a helyet a maradó fogak számára (korai tejfog-vesztés helyhiányt okoz), alakítják az állcsont fejlődését és a harapás formáját, megakadályozzák a korai szuvasodás terjedését a maradó fogakra. A pozitív első fogorvosi élmény pedig a felnőttkori fogorvos-páciens kapcsolat alapja: egy kedves, türelmes ellátás után a gyerek bizalommal tér vissza, felnőttként sem fél a fogorvostól. Ezért nálunk kiemelt figyelmet fordítunk arra, hogy a gyermek számára az első látogatás kellemes legyen."
          },
          {
            heading: "Mikor vigye először fogorvoshoz?",
            text: "Az első látogatás ideális időpontja 1 éves kor körül, legkésőbb az első tejfog előtörése után 6 hónapon belül. Ebben a korban még nincs szükség kezelésre — az első alkalom célja: megismerje a rendelőt és a fogorvos nyugodt hangját, ellenőrizzük a fogak és állcsont fejlődését, szülői tanácsadás a helyes fogápolásról, étkezési szokásokról, a fluoridpótlás szükségességéről. Ezt követően félévenkénti szűrővizsgálat javasolt. A rendszeres szűrések során időben észlelhetjük a kezdődő problémákat, amelyek korai szakaszban egyszerű beavatkozással megoldhatók."
          },
          {
            heading: "Milyen kezelések érhetők el a gyermekfogászaton?",
            text: "Szűrővizsgálat és tanácsadás — a fogak állapotának ellenőrzése, harapás vizsgálata, szájhigiénés tanácsadás szülőnek és gyereknek. Tejfog-tömés — a szuvas tejfogak kompozit tömése (a tejfog-szuvasodás nem 'majd kinövi' — kezelés nélkül fájdalmat és fertőzést okoz). Barázdazárás (fissura-záró lakkozás) — vékony védőréteg a frissen előtört maradó őrlőfogak rágófelszínén, a szuvasodás megelőzésére (6 éves és 12 éves molárisok). Fluoridos kezelés — magas koncentrációjú fluorid lakk a fogzománc megerősítésére. Tejfog-eltávolítás — ha a tejfog nem hullik ki természetes úton és akadályozza a maradó fog előtörését, vagy ha súlyosan szuvas és fertőzött. Gyökérkezelés tejfogon — speciális, a tejfog méreteihez igazított beavatkozás (pulpotomia), amely megmenti a fogat, és megőrzi a helyet a maradó fog számára. Harapási rendellenesség szűrése — korai jelek észlelése és ortodonciai konzultáció szervezése szükség esetén."
          },
          {
            heading: "Hogyan zajlik egy gyerek látogatás?",
            text: "Ismerkedés — leültetjük a gyereket a rendelői székbe (ha kisebb, szülő ölében is lehet), megmutatjuk a vizsgáló eszközöket, és megengedjük, hogy ő is fogja, vizsgálja. Vizsgálat — játékosan 'elszámoljuk' a fogakat, ellenőrizzük a gyerek ínyét és harapását. Tanácsadás — a szülőnek személyre szabott útmutatás a helyes fogmosásról, fogselyemről, étkezési szokásokról. Kezelés (ha szükséges) — csak akkor, ha a gyerek ráérett és kész rá. Soha nem erőltetjük. Jutalom — a látogatás végén apró figyelmesség, ami pozitív emléket hagy. Fontos: mi a pozitív élményt helyezzük előtérbe. Soha nem ijesztgetjük a gyereket, nem használunk fenyegetést vagy nyomást. Ha egy kezelés ma nem megy, lesz alkalom másik alkalommal. A cél: a gyerek szeresse a fogorvosi látogatásokat."
          },
          {
            heading: "Fáj-e a kezelés?",
            text: "A gyermekfogászati kezelések többsége fájdalommentes. Barázdazárás, fluoridos kezelés, egyszerű vizsgálat — egyáltalán nem fáj. Tejfog-tömés — helyi érzéstelenítéssel fájdalommentes. A gyerekek gyakran félnek az 'injekciótól', ezért felületi érzéstelenítő gélt használunk előzőleg, így maga az érzéstelenítés is kellemesebb. A nyomás és vibráció érzetét elmagyarázzuk a gyereknek előre — ez csökkenti a félelmet. Gyökérkezelés tejfogon és tejfog-eltávolítás — szintén érzéstelenítéssel, fájdalommentesen. Kényelmi szempontok: rövid kezelések (10-30 perc), gyakori szünetek igény szerint, kedvenc mesék vagy zene hallgatása engedélyezett."
          },
          {
            heading: "Otthoni fogápolás életkor szerint",
            text: "0-6 hónap (fogelőtörés előtt) — nedves gézzel töröljük az ínyt minden etetés után. Ez megelőzi a baktériumok megtelepedését és hozzászoktatja a babát a szájápoláshoz. 6 hónap-2 év (első tejfogak) — nedves gézzel vagy ujjra húzható lágy fogkefével tisztítsuk a fogakat naponta kétszer, fogkrém nélkül vagy rizsszem mennyiségű fluoridos gyerekfogkrémmel. 2-3 év (több tejfog) — kis, lágy gyerekfogkefe, borsónyi mennyiségű gyerekfogkrém. A fogmosást szülő végzi vagy felügyeli. 3-6 év — a gyerek elkezdi segíteni a fogmosást, de a szülő utánamossa — a kézügyesség még nem elegendő. 6-8 év (vegyes fogazat, első maradó őrlőfogak) — önálló fogmosás szülői ellenőrzéssel, heti 1-2x szülői fogmosás (különösen a hátsó fogaknál). 8 év felett — önálló fogmosás, kéthetente szülői ellenőrzés. Fogselyem használat tanítása. Fontos: az elektromos fogkefe 3-4 éves kortól használható, hatékonyabb lehet. Cukros italok (gyümölcslé, édes tea, szörp) korlátozása, különösen lefekvés előtt."
          },
          {
            heading: "Mennyibe kerül? TB-támogatott?",
            text: "A gyermekfogászati ellátás 0-18 éves korig teljes körűen TB-támogatott Magyarországon. Ez magában foglalja a szűrővizsgálatot, tejfog és maradó fog kezeléseket, barázdazárást, fluoridos kezelést, foghúzást. Diákigazolvánnyal 18-25 éves korig is részlegesen érvényes. Magánellátás esetén az árazás egyedi, a kezelés típusától függ. Hívjon tájékoztatásért: +36 30 123 4567."
          },
          {
            heading: "Gyakori szülői kérdések",
            text: "A baba lefekvés előtt cumisüvegből iszik — miért baj? A cumisüveg szájban tartásával az ital (akár anyatej) sokáig érintkezik a fogakkal — ez 'cumisüveg-karrieszt' okoz (a metszőfogak súlyos szuvasodása). Javaslat: 1 éves kor után ne legyen cumisüveg lefekvéskor. Szopizik a gyerek / hüvelykujjat szív — befolyásolja a fogakat? 3-4 éves korig nem probléma. Ha 5-6 éves korban is fennáll, befolyásolhatja a harapást és a maradó fogak helyzetét. Fogszabályozó szükséges? A legtöbb gyermeknek 10-14 éves kor között derül ki: rendszeres szűréssel időben észlelhető. Fluorid tabletta szükséges? A magyar ivóvíz fluorid tartalma elegendő. Fluorid tabletta csak orvosi indikációra. Mit tegyek ha a gyerek kitöri a fogát? Ha teljes fogkiesés (avulzió), keresse meg a fogat, tegye tejbe, és jöjjön 30-60 percen belül — a fog visszaültethető. Tejfog eltörés esetén is azonnal jöjjön!"
          },
        ]}
        relatedServices={[
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
          { title: "Profilaxia", href: "/profilaxia" },
          { title: "Fogmegtartó kezelések", href: "/fogmegtarto-kezelesek" },
          { title: "Sürgősségi ellátás", href: "/surgossegi-ellatas" },
        ]}
      />
    </>
  );
}
