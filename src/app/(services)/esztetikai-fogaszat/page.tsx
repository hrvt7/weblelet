import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Esztétikai fogászat Szombathelyen — fogfehérítés, veneers | Dr. Köteles Renáta",
  description: "Esztétikai fogászat Szombathelyen: rendelői fogfehérítés, kompozit héjak (veneers), esztétikai töméscsere. Természetes eredmény. Időpont: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/esztetikai-fogaszat" },
};

const procedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Esztétikai fogászat",
  alternateName: ["Fogfehérítés", "Kompozit héjak", "Veneers", "Esztétikai töméscsere"],
  description: "Fogfehérítés, kompozit héjak és esztétikai töméscsere a magabiztos mosolyért.",
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
      name: "Mennyi ideig tart a fogfehérítés hatása?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A rendelői fogfehérítés eredménye a szájhigiéniai szokásoktól és az étkezési-ivási szokásoktól függően 1-3 évig tart. Dohányzás, napi kávé, tea és vörösbor fogyasztás rövidíti, a rendszeres fogkőeltávolítás és fehérítő fogkrém hosszabbítja az eredményt. Évente 1 alkalommal 'frissítő' kezelés javasolt.",
      },
    },
    {
      "@type": "Question",
      name: "Károsítja-e a fogfehérítés a fogzománcot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A professzionális rendelői fogfehérítés nem károsítja a fogzománcot. A fehérítő gél a zománc porózus szerkezetébe hatol és feloldja a színezőanyagokat — a zománc szerkezete sértetlen marad. Átmeneti érzékenység a hideg-meleg ingerekre előfordulhat a kezelés után, de ez 1-3 nap alatt megszűnik.",
      },
    },
    {
      "@type": "Question",
      name: "Fehéríthető-e minden fog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A természetes fogakat jól lehet fehéríteni. A fogpótlások (korona, híd, tömés, veneer) NEM fehérednek — ezek az anyagok nem reagálnak a fehérítő gélre. Ha a mosolyövezetben vannak pótlások, a fogfehérítés után színeltérés alakulhat ki. Ebben az esetben érdemes először a természetes fogakat fehéríteni, majd a pótlást az új színhez igazítani.",
      },
    },
    {
      "@type": "Question",
      name: "Mi a különbség a kompozit héj és a porcelán veneer között?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A kompozit héj (direkt veneer) közvetlenül a fogra modellezett kompozit anyag, 1 ülésben elkészül, fogcsiszolás nélkül vagy minimálisan csiszolt foggal, kedvezőbb árú. A porcelán veneer (indirekt veneer) laborban készült kerámia lemezke, 2-3 ülést igényel, a fog minimális csiszolása szükséges, tartósabb és esztétikusabb — különösen a mosolyövezet fogainál.",
      },
    },
    {
      "@type": "Question",
      name: "Mennyibe kerül a rendelői fogfehérítés?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fogfehérítés nem TB-támogatott — magánellátás keretében végezhető. Az ár a választott módszertől (rendelői fehérítés, otthoni egyedi sablon, kombinált) és a kezelés időtartamától függ. Pontos árajánlatot a kezelés előtti konzultáción adunk, amikor felmérjük a fogak jelenlegi színét és meghatározzuk az elérendő árnyalatot.",
      },
    },
    {
      "@type": "Question",
      name: "Káros-e az esztétikai töméscsere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nem, ellenkezőleg: a régi, repedezett vagy szivárgó amalgám tömések cseréje fogszínű kompozitra egészségügyileg és esztétikailag is előnyös. Az amalgám mechanikailag rögzített (alámetszett üreg), a kompozit ragasztható — így kevesebb fogszövet eltávolítása szükséges. A modern kompozitok higanymentesek és teljesen biokompatibilisek.",
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
        title="Esztétikai fogászat Szombathelyen"
        subtitle="Fogfehérítés, kompozit héjak és esztétikai töméscsere Dr. Köteles Renáta rendelőjében. Természetes, ragyogó mosoly — az első benyomás számít."
        image="/images/hero/service-5.webp"
        sections={[
          {
            heading: "Mi az esztétikai fogászat?",
            text: "Az esztétikai fogászat azon beavatkozások gyűjtőneve, amelyek elsődleges célja a mosoly megjelenésének javítása — a fogszín, a forma, a fogközi hézagok és a harapás vizuális harmóniája. Fontos megérteni: az esztétikai fogászat nem csak 'szépészet'. A modern esztétikai megoldások gyakran egyúttal a fog szerkezetének megerősítését is szolgálják (pl. kopott fogak visszaépítése veneerrel), és javítják a funkciót is (pl. korrigált rágásdinamika kompozit ráépítéssel). A beavatkozások többsége minimálinvazív — kevés vagy semmilyen fogcsiszolást nem igényel —, így a természetes fogszövet maximum megőrződik. Célunk, hogy Ön újra szívesen mosolyogjon — fényképen, munka közben, társaságban, szeretteivel."
          },
          {
            heading: "Kinek javasolt az esztétikai fogászat?",
            text: "Esztétikai beavatkozás segíthet, ha fogai elszíneződtek (kávé, tea, dohányzás, vörösbor, antibiotikum-terhelt fejlődés) és szeretné világosabb árnyalatúvá tenni, régi amalgám (ezüstszínű) tömései láthatók a mosolyövezetben, fogai szélén apró csorbulások, repedések találhatók, enyhén ferde foga van, és nem szeretne fogszabályozót, apró résekkel (diasztéma) rendelkezik a fogai között, frontfogai kopottak vagy rövidültek bruxizmus (fogcsikorgatás) miatt, általában úgy érzi, hogy a mosolya nem méltó a személyiségéhez. Az esztétikai fogászat olyanoknak is jó választás, akik különleges alkalomra készülnek (esküvő, munkába állás, fotózás) — a gyors eredmények rövid idő alatt elérhetők."
          },
          {
            heading: "Rendelői fogfehérítés",
            text: "A professzionális rendelői fogfehérítés során magas koncentrációjú (25-40%-os hidrogén-peroxid) fehérítő gélt alkalmazunk a fogakra. A gél behatol a fogzománc porózus szerkezetébe, és oxidatív reakcióval feloldja a színezőanyagokat. A kezelés általában 1-2 alkalommal, ülésenként 60-90 perc alatt valósul meg — ennek során a gélt szakaszosan, 15-20 perces időtartamokra juttatjuk a fogakra, szoros ínyvédelemmel. Az eredmény általában 4-8 árnyalattal világosabb fogakat jelent. Kombinált módszer: rendelői + otthoni egyéni sablon (10-14 napos otthoni viselet) a legtartósabb eredményhez. Gyakori kérdés: a túltehetett hideg-meleg érzékenység 1-3 napig tart, majd teljesen elmúlik. Ellenjavallat: gyökérkezelt fog (alulról sötétedik), amalgám tömés a mosolyövezetben, terhesség és szoptatás."
          },
          {
            heading: "Kompozit héjak (direkt veneers)",
            text: "A kompozit héjak kiváló alternatívát jelentenek a porcelán veneerekkel szemben — különösen fiatalabb páciensek vagy kisebb esztétikai problémák esetén. A beavatkozás lényege: a fog felszínén kompozit anyagot rétegről rétegre felépítve javítjuk a forma, szín és felület problémákat. Előnyök: 1 ülésben elkészül (1-2 óra/fog), minimális vagy nulla fogcsiszolás, kedvezőbb árú, javítható és módosítható (pl. csorbulás esetén kiegészíthető), reverzibilis (eltávolítható). Mire használjuk: csorbult fogszél javítása, enyhén elszíneződött fog egyesítése a szomszédos fogakkal, apró rés (diasztéma) zárása a fogak között, enyhén ferde fog 'egyengetése' esztétikailag, rövidült frontfog visszaépítése. Élettartam: 5-8 év, rendszeres polírozással akár 10 év."
          },
          {
            heading: "Esztétikai töméscsere",
            text: "A mosolyövezetben vagy premoláris fogakban lévő régi amalgám (ezüstszínű) tömések cseréje fogszínű kompozitra több okból is javasolt: a régi amalgám mechanikailag alámetszett üreget igényel — ez sok fogszöveti eltávolítást jelent; az amalgám szélei az évek során elszivároghatnak, baktériumok juthatnak a tömés alá; esztétikailag feltűnő, különösen ha kiterjedt. A kompozit tömés: fogszínű, ragasztható (kevesebb fogszövet kell eltávolítani), biokompatibilis (higanymentes), javítható. A folyamat: helyi érzéstelenítés, a régi amalgám óvatos eltávolítása (szigorú protokoll az esetleges higany-expozíció minimalizálására), az esetleges másodlagos szuvasodás kezelése, kompozit rétegek felvitele és fényrekeményítés, polírozás. 1 tömés cseréje 30-60 perc."
          },
          {
            heading: "Hogyan zajlik az esztétikai kezelés?",
            text: "Konzultáció és fotódokumentáció — áttekintjük a célokat (milyen eredményt szeretne), szintén fontos a reális elvárások kialakítása. Fotókat készítünk a kiindulási állapotról és digitális vizualizációval mutathatjuk a várható eredményt. Fogszín meghatározás — speciális színskálával mérjük a jelenlegi fogszínt és meghatározzuk a célszínt. Kezelési terv — megbeszéljük a lehetőségeket (fogfehérítés, veneer, töméscsere, vagy ezek kombinációja), időtartamot, árat. Kezelés — az egyeztetett protokoll szerint. Otthoni fenntartás — egyedi tanácsadás a hosszú távú eredmény megőrzésére. Kontroll — 1-2 hét múlva ellenőrzés."
          },
          {
            heading: "Fáj-e az esztétikai kezelés?",
            text: "A legtöbb esztétikai beavatkozás fájdalommentes. Fogfehérítés — érzéstelenítés nélkül végezhető, átmeneti érzékenység hideg-melegre természetes (1-3 nap). Kompozit héjak (minimális csiszolás) — érzéstelenítés nélkül vagy minimális helyi érzéstelenítéssel. Esztétikai töméscsere — helyi érzéstelenítéssel fájdalommentes (ugyanúgy mint a szuvasodás kezelése). Porcelán veneer (ha többrétegű fogcsiszolás szükséges) — helyi érzéstelenítéssel fájdalommentes. Ha érzékeny fogai vannak vagy szorong a kezelésektől, kérjük jelezze — személyre szabott protokollt állítunk össze."
          },
          {
            heading: "Mire számítson a kezelés után?",
            text: "Fogfehérítés után: 24-48 órán át tartós hideg-meleg érzékenység természetes, ez 1-3 nap alatt megszűnik; kerülje a színező ételeket és italokat 48 órán át (kávé, tea, vörösbor, mustár, paradicsom, csokoládé) — a fogzománc ekkor fokozottan hajlamos az elszíneződésre; dohányzás lehetőleg ebben az időszakban kerülendő. Kompozit héjak és töméscsere után: közvetlenül terhelhető, normál étkezés lehetséges; az érzéstelenítés hatásának elmúltáig (1-2 óra) ne egyen; 24 órán át kerülje a kemény, ragadós ételeket (rágógumi, toffee). Hosszú távú ápolás: napi kétszeri fogmosás fehérítő hatású fogkrémmel, fogselyem vagy interdentális kefe, évente 1-2 profi fogtisztítás, szívószál használata színezett italoknál."
          },
          {
            heading: "Mennyibe kerül?",
            text: "Az esztétikai fogászat magánellátás keretében érhető el — nem TB-támogatott kezeléskör. Az árazás a választott kezeléstől függ: rendelői fogfehérítés, kombinált módszer (rendelői + otthoni), kompozit héj (fogonként), esztétikai töméscsere (tömésenként). Pontos árajánlatot a konzultáción adunk, amikor felmérjük a fogak állapotát, meghatározzuk a célokat, és kidolgozzuk az egyedi kezelési tervet. Hívjon: +36 94 900-887."
          },
          {
            heading: "Gyakori kérdések",
            text: "Mi a különbség a drogériai és a rendelői fogfehérítés között? A drogériai termékek alacsony koncentrációjúak (max 0,1% hidrogén-peroxid), hatékonyságuk korlátozott. A rendelői fehérítés 25-40% koncentrációjú gélt használ, sokkal erősebb eredménnyel. Tart-e az eredmény örökké? Nem, 1-3 évig természetes fogazati viszonyok mellett. 'Hollywood mosoly' 1 nap alatt? Extrém esztétikai átalakítás (pl. teljes frontfogsor veneerrel) 2-4 héten belül lehetséges. Gyökérkezelt fog miért sötétebb? A gyökérkezelt fog alulról, a pulpakamrából sötétedik. Ezt belső fehérítéssel (intern bleaching) lehet javítani, vagy koronával, veneerrel fedni. Károsít-e a fogfehérítés ha ínybetegségem van? Aktív ínygyulladás esetén NE végezze — először kezelje az ínyproblémát."
          },
        ]}
        relatedServices={[
          { title: "Fogkőeltávolítás", href: "/fogkoeltavolitas" },
          { title: "Air-flow kezelés", href: "/air-flow" },
          { title: "Fogpótlás", href: "/fogpotlas" },
          { title: "Fogmegtartó kezelések", href: "/fogmegtarto-kezelesek" },
        ]}
      />
    </>
  );
}
