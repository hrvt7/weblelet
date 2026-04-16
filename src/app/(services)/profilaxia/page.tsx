import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Profilaxia Budapesten — fogászati megelőzés | Dr. Minta Réka",
  description: "Fogászati profilaxia Budapesten: megelőző kezelések, fluoridálás, barázdazárás, professzionális fogtisztítás. TB-támogatott. Időpont: +36 30 123 4567.",
  alternates: { canonical: "https://weblelet.hu/profilaxia" },
};

const procedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Profilaxia",
  alternateName: ["Fogászati megelőzés", "Prevenció", "Professzionális fogtisztítás"],
  description: "Fogászati megelőző kezelések: professzionális fogtisztítás, fluoridálás, barázdazárás, szájhigiénés tanácsadás.",
  procedureType: "https://health-lifesci.schema.org/PreventativeProcedure",
  bodyLocation: "Fogazat és íny",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mi a különbség a profilaxia és a fogkőeltávolítás között?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fogkőeltávolítás a profilaxia egyik eleme — a kemény lerakódások eltávolítása. A profilaxia átfogóbb fogalom: tartalmazza a fogkőeltávolítást, polírozást, fluoridálást, szájhigiénés tanácsadást, és gyermekeknél a barázdazárást. A cél: a meglévő problémák kezelése és az új problémák megelőzése.",
      },
    },
    {
      "@type": "Question",
      name: "Milyen gyakran javasolt a profilaxia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Általános szabály: évente 1-2 alkalommal. Magas kockázatú páciensek (dohányosok, cukorbetegek, parodontitiszre hajlamosok, fogszabályozó-viselők, terhesek) esetén 3-4 havonta. Gyermekeknél félévente. A pontos gyakoriságot egyénileg javasoljuk.",
      },
    },
    {
      "@type": "Question",
      name: "Fáj-e a profilaxia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nem. A professzionális fogtisztítás, fluoridálás és barázdazárás fájdalommentes kezelések. Érzékeny ínyű pácienseknél enyhe kellemetlenség előfordulhat, de ez nem fájdalom. Érzéstelenítés általában nem szükséges.",
      },
    },
    {
      "@type": "Question",
      name: "Mit tartalmaz egy komplett profilaktikus kezelés?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1) Szűrővizsgálat és szondázás. 2) Ultrahangos fogkőeltávolítás (supra- és subgingivális). 3) Polírozás speciális pasztával. 4) Air-flow kezelés a finom biofilm és elszíneződések eltávolítására. 5) Fluoridos lakk alkalmazása. 6) Szájhigiénés tanácsadás egyedileg. Gyermekeknél kiegészítés: 7) Barázdazárás az őrlőfogakon.",
      },
    },
    {
      "@type": "Question",
      name: "TB-támogatott a profilaxia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bizonyos elemek TB-támogatottak: évente 1 alkalommal fogkőeltávolítás, gyermekeknél teljes körű barázdazárás (maradó őrlőfogakon), fluoridálás. Egyéb kiegészítők (Air-flow, gyakoribb professzionális tisztítás) magánellátás keretében érhetők el.",
      },
    },
    {
      "@type": "Question",
      name: "Mennyibe kerül a magán profilaxia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A profilaxia árát befolyásolja a kezelés tartalma (csak fogkőeltávolítás, vagy teljes csomag Air-flow-val és fluoridálással), a rendelői idő és az egyéni szükségletek. Pontos árajánlatot a kezelés előtti konzultáción adunk. Hívjon: +36 30 123 4567.",
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
        title="Profilaxia Budapesten"
        subtitle="Fogászati megelőző kezelések Dr. Minta Réka rendelőjében. A megelőzés a legjobb és legolcsóbb kezelés — a rendszeres profilaxia megőrzi fogai egészségét évtizedekre."
        image="/images/hero/service-profilaxia.webp"
        sections={[
          {
            heading: "Mi az a fogászati profilaxia?",
            text: "A profilaxia (a görög 'prophylaxis' szóból: 'megelőzés') a fogászati megelőző kezelések gyűjtőneve. Azon eljárások összessége, amelyek a szuvasodás, az ínygyulladás, a parodontitisz és egyéb szájüregi betegségek kialakulását megakadályozzák vagy lassítják. A rendelői profilaxia kiegészíti — de semmiképp nem helyettesíti — az otthoni szájápolást: professzionális eszközökkel távolítjuk el a fogkefével el nem érhető lerakódásokat, és személyre szabott tanácsot adunk a hatékony otthoni ápoláshoz. A profilaxia gazdasági szempontból is megtérül: egy félévenkénti kontroll és tisztítás költsége töredéke annak, amit egy gyökérkezelés, korona vagy fogpótlás igényel. A megelőzés tehát nem luxus — hanem a fogászati egészség leghatékonyabb és legolcsóbb útja."
          },
          {
            heading: "Miért fontos a rendszeres profilaxia?",
            text: "A napi fogmosás — bármilyen alapos is — nem képes elérni minden szájüregi területet. A fogközök, az íny alatti régió, a hátsó őrlőfogak barázdái mind olyan helyek, ahol plakk és baktérium halmozódik fel, majd fogkővé keményedik. Ha ezt nem távolítjuk el rendszeresen: kialakul a gingivitisz (ínygyulladás) — vérzékeny, duzzadt íny; ha ez nem kezelődik, parodontitisszé súlyosbodik — tasakképződés, csontpusztulás, végső soron fogvesztés; a fogak szuvasodnak — tömésre, gyökérkezelésre, vagy fogpótlásra lehet szükség; szájgombás fertőzések, aftás fekélyek gyakoribbak lehetnek; rossz lehelet (halitózis) alakul ki; szisztémás kockázatok nőnek — a szájüregi baktériumok szerepet játszanak szív-érrendszeri betegségekben, cukorbetegség szabályozási problémákban, Alzheimer-kór kockázatában, terhességi komplikációkban."
          },
          {
            heading: "Kinek javasolt?",
            text: "A profilaxia mindenkinek javasolt, kortól és fogazat állapottól függetlenül. Különösen fontos: gyermekeknek és fiataloknak — a maradó fogak védelme, barázdazárás, fluoridálás; terheseknek — a terhesség alatti hormonális változások fokozzák az ínyvérzés rizikóját, ezért a 2. trimeszter ideális időpont egy teljes profilaxisra; cukorbetegeknek — fokozott parodontitisz kockázat; dohányosoknak — 6-7x nagyobb fogágyi betegség kockázat; parodontitisz után — életre szóló 3-4 havonta támogató kezelés (SPT); fogszabályozót viselőknek — a bracketek körül halmozódik fel a plakk; idős pácienseknek — csökkenő nyáltermelés, xerostomia fokozott kockázat; kemoterápiás kezelés alatt álló pácienseknek — erősen legyengült immunrendszer mellett. De még teljesen egészséges fogazatú páciensnek is évente 1-2 alkalommal javasolt a professzionális kontroll."
          },
          {
            heading: "A profilaktikus kezelések elemei",
            text: "1. Klinikai szűrővizsgálat: fogak, íny, szájüregi lágyszövetek ellenőrzése, szükség esetén röntgenfelvétel. 2. Parodontális szondázás: tasakok mélységének mérése a fogak körül — az esetleges ínygyulladás vagy parodontitisz korai felismerése. 3. Ultrahangos fogkőeltávolítás: supra- és subgingivális lerakódások eltávolítása vízsugaras ultrahangos készülékkel. 4. Kézi scalerrel finomítás: az ultrahang által el nem ért finomabb területek tisztítása. 5. Air-flow kezelés: finom szódabikarbóna vagy glicin por + víz sugárral a fogfelszíni biofilm és elszíneződések (kávé, tea, dohány) eltávolítása. 6. Polírozás: speciális pasztával és forgó gumi csészével simítjuk a fogfelszínt — ez csökkenti az új lerakódások tapadását. 7. Fluoridos lakk alkalmazása: magas koncentrációjú fluorid lakk (5%) a fogzománc megerősítésére, 4-6 hónapos védelem. 8. Gyermekeknél: barázdazárás (fissura-záró lakkozás) az őrlőfogak rágófelszínén — 10-15 éves védelem a szuvasodás ellen. 9. Szájhigiénés tanácsadás: egyedi útmutatás fogkefe típus, fogselyem, interdentális kefe, szájöblítő használatra."
          },
          {
            heading: "Air-flow — a prémium tisztítás",
            text: "Az Air-flow egy svájci fejlesztésű (EMS) eljárás, amely finom por (szódabikarbóna vagy glicin), víz és sűrített levegő keverékét juttatja a fogfelszínre. A módszer rendkívül kíméletes és hatékony — nem koptatja a zománcot, mégis eltávolítja a makacs elszíneződéseket és a finom biofilmet, amelyet az ultrahangos készülék nem ér el. Különösen hasznos: dohányzás, kávé, tea, vörösbor okozta elszíneződések eltávolítására, ortodonciai készülékek (fogszabályozó) tisztítására, implantátumok körüli területek ápolására, parodontális tasakok tisztítására, esztétikai igényű pácienseknél. A kezelés után a fogak azonnal 1-2 árnyalattal világosabbnak tűnnek, még fogfehérítés nélkül is."
          },
          {
            heading: "Fluoridálás — a zománc megerősítése",
            text: "A fluorid ásványi anyag, amely beépül a fogzománc kristályszerkezetébe és erősebbé, ellenállóbbá teszi a savakkal szemben. A napi fogkrém 1450 ppm fluoridot tartalmaz, ez az alapvető védelem. A rendelői fluoridálás magasabb koncentrációjú (22 500 ppm) lakk, amelyet közvetlenül a fogakra alkalmazunk — ennek hatása 4-6 hónapig tart. Kiknek különösen javasolt? Gyermekek és serdülők (fejlődő fogazat, szuvasodásra hajlamos időszak), frissen előtört maradó fogak (a korai védelem kritikus), magas szuvasodási kockázatú páciensek (gyakori szuvasodás az előéletben), ortodonciai készülék-viselők, xerostomia (szájszárazság), kemoterápiás pácienseknek, idős páciensek visszahúzódó ínnyel (a szabaddá vált gyökércement szuvasodás-érzékeny)."
          },
          {
            heading: "Gyermekprofilaxia — a jövő fogazata",
            text: "A gyermekkori profilaxia rendkívül hatékony — életre szóló fogászati egészséget alapozhat meg. Kulcselemek: 1. Rendszeres szűrővizsgálat — félévente, a maradó fogak előtörésének idején akár gyakrabban. 2. Fluoridos lakk — 3 havonta a szuvasodás-érzékeny periódusokban. 3. Barázdazárás (fissura-záró lakkozás) — a 6 éves és 12 éves őrlőfogak rágófelszínén lévő mély barázdák védelme; 10-15 éves védelmet biztosít; fájdalommentes, 10-15 perces beavatkozás. 4. Szájhigiénés oktatás — életkornak megfelelő módszerekkel (játékos módon). 5. Étkezési tanácsadás — a szülőknek a cukorfogyasztás, cumisüveg-szokások, szoptatás utáni szájhigiéne kapcsán. 6. Ortodonciai szűrés — a korai harapási rendellenességek időben észlelhetők. Gyermek-profilaxis TB-támogatott 0-18 éves korig."
          },
          {
            heading: "Hogyan zajlik egy profilaktikus látogatás?",
            text: "Érkezés és rövid anamnézis — frissítjük az egészségügyi adatokat, gyógyszerszedést. Klinikai vizsgálat — fogak, íny, szájüreg ellenőrzése. Parodontális szondázás — tasakok mérése. Fogkőeltávolítás — ultrahangos + kézi eszközök. Polírozás — a simább fogfelszínért. Air-flow kezelés (csomagtól függően) — finom tisztítás. Fluoridos lakk alkalmazása — a zománc védelme. Szájhigiénés tanácsadás — egyedi útmutatás. Következő időpont ajánlása. Időtartam: 30-60 perc csomagtól függően. A kezelés fájdalommentes. Utána azonnal normál étkezés lehetséges, csak 30 percig kerülje a forró és színezett italokat a fluorid-lakk miatt."
          },
          {
            heading: "Mi a különbség a rutin fogkőeltávolítás és a komplett profilaxis között?",
            text: "Rutin fogkőeltávolítás: csak a kemény lerakódások eltávolítása ultrahanggal + polírozás. Időtartam: 30-45 perc. TB-támogatott évente 1x. Komplett profilaxis: a fent leírt teljes csomag — fogkőeltávolítás + Air-flow + fluoridálás + tanácsadás + (gyermekeknél) barázdazárás. Időtartam: 60-90 perc. Részben TB-támogatott, részben magánellátás. A komplett profilaxis különösen ajánlott évente 1 alkalommal, míg a rutin fogkőeltávolítás 6 hónaponként is. Sok páciensnek a legjobb kombináció: évente 1 komplett profilaxis + 1 rutin fogkőeltávolítás = félévenkénti fogászati ellenőrzés."
          },
          {
            heading: "Mennyibe kerül? TB-támogatott?",
            text: "A profilaxis egyes elemei TB-támogatottak jogosult pácienseknek: évente 1 fogkőeltávolítás, gyermekek komplett profilaxisa 0-18 éves korig, fluoridos lakk gyermekeknek. Magánellátás keretében a komplett felnőtt profilaxis (Air-flow, prémium fluoridálás, részletes konzultáció) külön elérhető. Az árakat egyedileg tudjuk megadni a kezelési tervnek megfelelően. Hívjon: +36 30 123 4567."
          },
          {
            heading: "Gyakori kérdések",
            text: "Otthon nem tudom helyettesíteni? Nem — a fogmosás a plakkot távolítja el, de a fogkövet nem. A profilaxis szükséges kiegészítő. Elég-e évente 1 alkalommal? Rutin esetben igen; kockázati csoportokban 6 hónaponként vagy gyakrabban. Szabad-e fogat mosni utána? Igen, de 30 percig várjon a fluorid-lakk hatása miatt. Miért olcsóbb mint egy tömés? Mert megelőz — és a megelőzés mindig olcsóbb a kezelésnél. Egy tömés csak akkor szükséges, ha már kialakult a probléma. Kell-e érzéstelenítés? Rutin esetben nem — a profilaxis fájdalommentes. Súlyosan érzékeny íny esetén felületi érzéstelenítő gél alkalmazható. Milyen fogkrémet használjak otthon? Fluoridos (legalább 1450 ppm), SLS-mentes (az íny kímélésére), ha érzékeny fogai vannak: sensitive fogkrém (pl. kálium-nitrátos). Részletes tanácsot egyedileg adunk."
          },
        ]}
        relatedServices={[
          { title: "Fogkőeltávolítás", href: "/fogkoeltavolitas" },
          { title: "Air-flow kezelés", href: "/air-flow" },
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
          { title: "Gyermekfogászat", href: "/gyermekfogaszat" },
        ]}
      />
    </>
  );
}
