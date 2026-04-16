import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Foghúzás és fogeltávolítás Budapesten — bölcsességfog | Dr. Minta Réka",
  description: "Foghúzás, bölcsességfog eltávolítás Budapesten. Kíméletes, fájdalommentes helyi érzéstelenítéssel. TB-támogatott rendelő. Időpont: +36 30 123 4567.",
  alternates: { canonical: "https://weblelet.hu/fogeltavolitas" },
};

const procedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Foghúzás",
  alternateName: ["Fogeltávolítás", "Extrakció", "Bölcsességfog eltávolítás"],
  description: "Kíméletes foghúzás és bölcsességfog eltávolítás helyi érzéstelenítéssel.",
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
      name: "Fáj-e a foghúzás?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Helyi érzéstelenítés mellett a foghúzás fájdalommentes — csak nyomás és mozgás érzetet érez. Az érzéstelenítés beadása enyhe csípést okoz, de ezt követően a beavatkozás alatt nem érzékel fájdalmat. A kezelés után 1-3 napig enyhe nyomásérzékenység és duzzanat normális, ez fájdalomcsillapítóval kezelhető.",
      },
    },
    {
      "@type": "Question",
      name: "Mennyi ideig tart egy foghúzás?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Egy egyszerű foghúzás (mobil fog, meglazult gyökér) 10-15 percet vesz igénybe. Sebészi kihúzás (pl. mélyen eltörött gyökér, bölcsességfog) 30-60 percet. A teljes rendelői idő (érkezés, érzéstelenítés, beavatkozás, vérzéscsillapítás) 30-90 perc.",
      },
    },
    {
      "@type": "Question",
      name: "Mennyi idő a gyógyulás foghúzás után?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A lágyszövetek 7-10 nap alatt gyógyulnak, a csontos gyógyulás 3-6 hónapot vesz igénybe. Az első 24 óra kritikus — ekkor képződik a vérrög, amely megindítja a gyógyulást. Az első héten kerülni kell a kemény ételeket, a szívást (szívószál, cigaretta), és a forró italokat.",
      },
    },
    {
      "@type": "Question",
      name: "Mikor kell eltávolítani a bölcsességfogat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eltávolítás javasolt, ha a bölcsességfog félreáll vagy csak részlegesen tört elő, visszatérő gyulladást okoz (pericoronitisz), nyomja a szomszédos fogakat, nem tisztítható rendesen (szuvasodik), ciszta vagy más elváltozás alakul ki körülötte. Minden bölcsességfogat nem szükséges eltávolítani — ha egyenesen áll és tisztítható, megtartható.",
      },
    },
    {
      "@type": "Question",
      name: "Mit ehetek foghúzás után?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Az első 24 órában hideg, puha ételek: joghurt, fagylalt, hideg levesek, pürék, főtt tészta. Kerülje a forró, fűszeres, kemény, ragadós, apró magvakat tartalmazó ételeket. Szívószálat NE használjon (a vérrög kiszívhatja a sebből). Dohányzás és alkohol 48-72 órán át kerülendő.",
      },
    },
    {
      "@type": "Question",
      name: "Mikor kell aggódnom gyógyulás közben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hívjon minket, ha: 24 óra után is erős a fájdalom (esetleg 'száraz fog'), erős vérzés 30 perc nyomás után sem csillapodik, magas láz (38°C felett) alakul ki, a duzzanat 48 óra után tovább nő, rossz íz/szag a sebből, zsibbadás nem múlik 24 órán belül. A normál fájdalom, enyhe vérzés 24-48 óráig és 2-3 napig tartó duzzanat normális.",
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
        title="Foghúzás és fogeltávolítás Budapesten"
        subtitle="Kíméletes foghúzás, bölcsességfog eltávolítás Dr. Minta Réka rendelőjében. Helyi érzéstelenítés, gondos utógondozás, részletes útmutató a gyors gyógyuláshoz."
        image="/images/hero/service-6.webp"
        sections={[
          {
            heading: "Mi a foghúzás?",
            text: "A foghúzás (extrakció) az a fogászati beavatkozás, amelynek során egy fogat az alveoláris csontból és az ínyből eltávolítunk. Kétféle formája van: egyszerű foghúzás — amikor a fog látható, elérhető, és speciális fogó segítségével kiemelhető (pl. meglazult gyökér, szuvas maradvány); sebészi foghúzás — amikor a fog a csontban rejtőzik, eltörött vagy félreáll, és ínymetszés, esetleg csonteltávolítás szükséges (pl. bölcsességfog, mély gyökértörés). A modern fogászatban a foghúzás az utolsó lehetőség — először mindig megvizsgáljuk, hogy a fogat gyökérkezeléssel, koronával vagy más módon meg lehet-e menteni. Ha azonban az eltávolítás elkerülhetetlen, kíméletesen, fájdalommentesen és a szomszédos szövetek maximális védelmével végezzük."
          },
          {
            heading: "Mikor szükséges foghúzás?",
            text: "Foghúzásra az alábbi esetekben lehet szükség: mély szuvasodás, amely elérte a gyökérvégi területet, és a fog gyökérkezeléssel sem menthető, mélyen eltörött gyökér (gyakran traumás baleset után), súlyos parodontális érintettség, amikor a foggyökér támasztó csontja elveszett (a fog mobilis, 'inog'), ismétlődő tályogok és gyulladások a fog körül, ortodonciai (fogszabályozási) szükséglet — helyhiány esetén egy vagy több fog eltávolítása szükséges a többi fog rendezéséhez, félreálló vagy részlegesen előtört bölcsességfog, amely gyulladást, nyomást vagy szuvasodást okoz, tejfogak amelyek nem hullottak ki természetes úton és akadályozzák a maradó fog előtörését. Minden esetben előzetesen röntgenfelvétel alapján döntünk, és megbeszéljük a páciensre a foghiány pótlási lehetőségeit (hídpótlás, kivehető fogsor, implantátum)."
          },
          {
            heading: "Bölcsességfog eltávolítás",
            text: "A bölcsességfogak (harmadik nagyőrlők) 18-25 éves kor között törnek elő — az állcsont egyes esetekben nem biztosít elegendő helyet számukra. Ennek következtében gyakran félreállnak, vízszintesen vagy oldalra fordulva nyomást gyakorolnak a szomszédos fogakra, vagy csak részlegesen törnek elő (pericoronitisz — a fogat részben borító íny alatti gyulladás). Mikor szükséges eltávolítani: ha visszatérő gyulladást okoznak, ha nyomják és károsítják a szomszédos fogakat, ha szuvasodnak (a részlegesen előtört bölcsességfog nem tisztítható rendesen), ha ciszta vagy más elváltozás alakul ki körülötte, vagy megelőzési célból, ha a röntgen alapján ezek a problémák várhatók. Nem minden bölcsességfogat kell eltávolítani: ha egyenesen állnak, tisztíthatók és nem okoznak problémát, megtartásuk indokolt. A döntést mindig egyedileg hozzuk meg, panoráma-röntgen alapján."
          },
          {
            heading: "Hogyan zajlik a foghúzás?",
            text: "Konzultáció és tervezés — klinikai vizsgálat, röntgenfelvétel (egyszerű PA felvétel vagy panoráma), kezelési terv megbeszélése, érdeklődés a páciens gyógyszerszedéséről és egészségi állapotáról (vérhígítók, cukorbetegség, csontritkulás kezelése befolyásolhatja a tervet). Érzéstelenítés — helyi érzéstelenítő befecskendezése az érintett terület köré. 3-5 perc alatt teljes érzéstelenség alakul ki. Foghúzás — egyszerű esetben fogóval a fog kimozdítása és eltávolítása (általában 5-10 perc); sebészi esetben ínylebenyezés, szükség esetén csonteltávolítás, a fog részekre bontása és kiemelése (20-40 perc). Seb ellátása — esetleges szikla-éles csonteltávolítás simításához, sebvarrás (ha szükséges), vérrög képződésének megindítása. Útmutató és vérzéscsillapítás — steril géz tamponok, 30-45 perc harapás a vérzés csillapítására. A teljes rendelői idő: 30-90 perc."
          },
          {
            heading: "Fáj-e a foghúzás?",
            text: "A páciensek leggyakoribb félelme — de meg kell nyugtatni: a modern érzéstelenítés mellett a foghúzás fájdalommentes. Az érzéstelenítés beadása enyhe csípést okoz (pár másodperc), majd 3-5 perc alatt teljes érzéstelenség alakul ki. A beavatkozás alatt csak nyomást és mozgást érez — NEM fájdalmat. Ez érzés szokatlan, de nem kellemetlen. Ha bármikor érzi, hogy az érzéstelenítés nem elegendő, azonnal jelezze — további adagot adunk. A kezelés után 2-3 óra múlva, az érzéstelenítés elmúltával, enyhe-közepes nyomásérzékenység jelentkezik: ez 1-3 napig tart, és szokványos fájdalomcsillapítóval (ibuprofen 400 mg, paracetamol 500 mg) jól kezelhető. Bölcsességfog sebészi eltávolítása után a gyógyulás kissé hosszabb lehet: 3-7 napig duzzanat és enyhe fájdalom normális. Aszpirint ne szedjen — vérzést okozhat a sebben."
          },
          {
            heading: "Mit kell tenni a kezelés után? (Utógondozás)",
            text: "Az első 24 óra kritikus — ekkor alakul ki a vérrög, amely megindítja a gyógyulást. Fontos tudnivalók: Nyomja rá a tampont 30-45 percig — a nyomás a vérzést csillapítja. Ne köpködjön, ne öblítsen erőteljesen 24 órán át — a vérrög kimoshatja. NE használjon szívószálat 24-48 órán át — a szívás kihúzhatja a vérrögöt ('száraz fog' veszély). Étkezés: az érzéstelenítés elmúltáig (1-2 óra) ne egyen — az ajak vagy nyelv bekapása akaratlan. Ezt követően 24 órán át hideg, puha ételek: joghurt, fagylalt, hideg levesek, főtt tészta. Duzzanat csillapítása: hideg borogatás az arcra (nem közvetlenül a bőrre — ruhán át) az első 24 órában, 15-20 perces periódusokban. Fogmosás: az érintett területet 24 órán át kerülje a kefélést. Enyhe szájöblögetés 24 óra után langyos sós vízzel (naponta 2-3 alkalommal). Dohányzás és alkohol 48-72 órán át kerülendő — lassítja a gyógyulást. Testmozgás: 24-48 órán át kerülje a megerőltető fizikai aktivitást. Gyógyszer: fájdalomcsillapító szükség szerint; antibiotikumot csak akkor, ha felírunk."
          },
          {
            heading: "Mikor kell aggódnom? (Szövődmények jelei)",
            text: "Hívjon minket azonnal, ha az alábbi tüneteket tapasztalja: 24 óra után is erős, lüktető fájdalom, amely fájdalomcsillapítóval nem enyhül (esetleg 'száraz fog' — alveolitisz; a vérrög kimosódott, a csont védtelen), erős vérzés 30 perc folyamatos nyomás után sem csillapodik, magas láz (38°C felett) a beavatkozás után, duzzanat, amely 48 óra után tovább nő (fertőzés jele), rossz íz vagy szag a sebből 3 nap után is, zsibbadás (az ajakban, nyelvben, állban) amely 24 órán belül nem múlik el (ritkán idegkompresszió), nyelési vagy légzési nehézség. A normális tünetek — enyhe fájdalom 1-3 napig, enyhe vérzés 24-48 órán át, duzzanat 2-3 napig, kis véralvadékok a sebben — nem igényelnek azonnali beavatkozást."
          },
          {
            heading: "A hiány pótlása — mit tegyen a foghúzás után?",
            text: "A foghúzás önmagában nem a végpont — a hiányzó fog pótlása fontos a hosszú távú egészség miatt. Miért fontos? A hiányzó fog helyét a szomszédos fogak kitölteni próbálják: az oldalfogak dőlni kezdenek, az ellenoldali fog kikúszhat a helyéről. Hosszú távon ez hibás harapást, rágási zavart és további fogvesztést okozhat. Pótlási lehetőségek: Hídpótlás — a szomszédos fogakra helyezett koronák tartják a hiányzó fog pótlását. Kivehető részleges fogsor — gazdaságos, több fogra is alkalmas megoldás. Implantátum (nálunk külön szolgáltatás — kérdezze!) — a legtermészetesebb megoldás, önálló gyökérrel. A pótlás időzítése: 2-4 hónap csontos gyógyulás után, amikor a foghely megfelelően feltöltődött. Azonnali pótlás csak speciális esetekben indokolt. Konzultáljon velünk a foghúzás előtt is — közösen megtervezzük a pótlást."
          },
          {
            heading: "Mennyibe kerül a foghúzás? TB-támogatott?",
            text: "A foghúzás TB-támogatott alapellátás érvényes TAJ-számmal rendelkező pácienseknek. Az egyszerű foghúzás (beleértve a röntgent, érzéstelenítést, beavatkozást és alap utógondozást) térítésmentes. Sebészi foghúzás, bölcsességfog eltávolítás és komplex esetek a páciens egészségügyi indokoltságától és a rendelő keretétől függően térítésmentesen vagy részleges térítéssel elérhetők. Magánellátás esetén a kezelés ára a beavatkozás komplexitásától függ. Pontos tájékoztatást a vizsgálat után adunk. Hívjon: +36 30 123 4567."
          },
          {
            heading: "Gyakori kérdések",
            text: "Lehet-e egyszerre több fogat húzni? Igen, egyeztetés után egy ülésben 2-4 fog húzása is lehetséges — különösen szomszédos fogak esetén. Miért kell röntgen? A gyökerek hosszát, alakját, idegcsatornák és üregek közelségét csak röntgenen látjuk. Vérhígítót szedek — lehet foghúzás? Igen, de előzetes konzultáció és gyakran háziorvosi egyeztetés szükséges. Kaphatok nyugtatót? Súlyos szorongás esetén orvosi konzultáció után, felügyelt körülmények között — ez nem szokványos alapellátás. Kell-e kísérő? Helyi érzéstelenítés esetén nem szükséges, de sebészi beavatkozás után ajánlott."
          },
        ]}
        relatedServices={[
          { title: "Fogpótlás", href: "/fogpotlas" },
          { title: "Sürgősségi ellátás", href: "/surgossegi-ellatas" },
          { title: "Fogmegtartó kezelések", href: "/fogmegtarto-kezelesek" },
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
        ]}
      />
    </>
  );
}
