import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Fogászati szűrővizsgálat Szombathelyen — félévenkénti kontroll | Dr. Köteles Renáta",
  description: "Fogászati szűrővizsgálat Szombathelyen: alapos kontroll, röntgen, szájüreg és íny vizsgálat. TB-támogatott. Félévenkénti megelőzés. Időpont: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/fogaszati-szurovizsgalat" },
};

const procedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Fogászati szűrővizsgálat",
  alternateName: ["Fogászati kontroll", "Fogvizsgálat", "Dental check-up"],
  description: "Félévenkénti fogászati kontroll vizsgálat a fogak és íny állapotának felmérésére, röntgendiagnosztikával.",
  procedureType: "https://health-lifesci.schema.org/DiagnosticProcedure",
  bodyLocation: "Fogazat, íny, szájüreg",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Milyen gyakran kell fogászati szűrővizsgálatra menni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Felnőtteknek félévente (6 havonta) javasolt rutin szűrővizsgálat. Kockázatos csoportokban — dohányosoknál, cukorbetegeknél, parodontitiszre hajlamosoknál, fogszabályozót viselőknél — 3-4 havonta szükséges. Gyermekeknél szintén félévente, a vegyes fogazat időszakában néha gyakrabban. Terhesség alatt az első trimeszter után javasolt egy teljes kontroll.",
      },
    },
    {
      "@type": "Question",
      name: "Mennyi ideig tart egy szűrővizsgálat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Egy alapos szűrővizsgálat 20-30 percet vesz igénybe. Ha fogkőeltávolítás is szükséges, 45-60 perc. Ha röntgenfelvétel készül, további 5-10 perc. Az idő a páciens egyéni helyzetétől függ.",
      },
    },
    {
      "@type": "Question",
      name: "Fáj-e a szűrővizsgálat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nem. A szűrővizsgálat teljesen fájdalommentes — csak vizuális és műszeres ellenőrzést jelent. Szondázásnál, különösen ha ínygyulladás van jelen, enyhe érzékenység előfordulhat. Kezelésre (tömés, fogkőeltávolítás) csak akkor kerül sor, ha szükséges, és akkor is érzéstelenítéssel, fájdalommentesen.",
      },
    },
    {
      "@type": "Question",
      name: "Mi történik ha szuvasodást találnak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kisebb, kezdeti szuvasodás esetén előfordulhat, hogy ugyanazon az alkalmon elkészíthető a tömés (ha az idő megengedi). Nagyobb kiterjedésű szuvasodás vagy ha gyökérkezelés is szükséges, külön időpontot egyeztetünk a kezelésre. A diagnózist mindig részletesen elmagyarázzuk, és közösen döntünk a kezelésről.",
      },
    },
    {
      "@type": "Question",
      name: "Mindig kell röntgenfelvétel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nem — a röntgen csak indokolt esetekben készül: 2-3 évente rutin kontroll röntgen (bite-wing), ha a vizsgálat során gyanús területet találunk (rejtett szuvasodás, csontprobléma), ha fájdalom vagy érzékenység oka nem látható vizuálisan, új páciens első látogatásakor a teljes kép miatt (panoráma). A modern digitális röntgen sugárdózisa rendkívül alacsony.",
      },
    },
    {
      "@type": "Question",
      name: "Mit vegyek magammal a szűrővizsgálatra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Személyi igazolvány, TAJ-kártya (TB-támogatott ellátáshoz), ha van korábbi fogászati dokumentáció (röntgen, korábbi kezelési terv) hozza el, gyógyszerlista (ha rendszeres gyógyszereket szed — főleg vérhígítók, bifoszfonátok, antihisztaminok), lista az aktuális panaszokról és kérdésekről — ne felejtse el azokat elmondani.",
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
        title="Fogászati szűrővizsgálat Szombathelyen"
        subtitle="Félévenkénti kontroll vizsgálat Dr. Köteles Renáta rendelőjében. A fogászati megelőzés alapja — a korai felismerés a leghatékonyabb és legolcsóbb kezelés."
        image="/images/hero/service-1.webp"
        sections={[
          {
            heading: "Miért fontos a rendszeres szűrővizsgálat?",
            text: "A fogászati problémák többsége korai szakaszban tünetmentes — mire fájdalmat érez, a probléma már előrehaladott és komolyabb, drágább kezelést igényel. A fogszuvasodás, ínygyulladás, sőt a szájüregi daganatok első jelei is láthatatlanok a páciens számára, de a képzett szakorvos kiszúrja őket. A rendszeres szűrés gazdasági szempontból is megtérül: egy kezdődő szuvasodás 15 perces tömés (a TB-támogatott kereten belül), míg egy elhanyagolt eset gyökérkezelést + koronát igényel, vagy akár a fog elvesztéséhez vezet. Félévenkénti kontrollal a fogászati kezelések 70-80%-a elkerülhető vagy jelentősen egyszerűbbé tehető. Ez nem csak az Ön pénze — az Ön idejét, kényelmét és hosszú távú egészségét is védi."
          },
          {
            heading: "Mit vizsgálunk a szűrés során?",
            text: "A szűrővizsgálat sokkal több, mint egy gyors 'benéz a szájba' ellenőrzés. Részletes vizsgálati protokollunk: Külső arcüreg — lymphacsomók, állkapocs-izületek, arcizmok vizsgálata (bruxizmus jelei, TMJ-diszfunkció). Szájüreg és nyálkahártya — színváltozás, fekélyek, csomók, leukoplakia (előrákos elváltozások szűrése — ez szó szerint életet menthet). Nyelv és szájfenék — daganatos elváltozások lehetnek itt is, a páciens gyakran észre sem veszi. Íny állapota — színe, tapadása, vérzékenysége. Parodontális szondázás — tasakok mérése a fogak körül. Minden fog ellenőrzése — szuvasodás vizsgálata szondával és vizuálisan, meglévő tömések és pótlások állapota, elszíneződések, kopási jelek, apró csorbulások. Rágás és harapás — a fogak illeszkedése. Fogkő mennyiség — supragingivális és subgingivális. Szükség esetén röntgenfelvétel."
          },
          {
            heading: "Kinek javasolt? Életkor és rizikófaktorok",
            text: "Minden felnőttnek évente legalább 1, ideális esetben 2 alkalommal. Különösen fontos: Terhesség és szoptatás alatt — hormonális változások érzékenyebbé teszik az ínyet. Cukorbetegeknek — emelkedett parodontitisz rizikó. Dohányosoknak — 6-7x nagyobb fogvesztési kockázat. Csontritkulás / bifoszfonát kezelés — különleges figyelem szükséges a foghúzások előtt. Fogszabályozót viselőknek — 3-4 havonta. Immunszuprimált pácienseknek (kemoterápia, szervátültetés) — fokozott fertőzési kockázat. Szív- és érrendszeri betegeknek — egyes szívbillentyű-műtétek után antibiotikum-profilaxis szükséges fogászati kezelés előtt. Gyermekek — félévente, 6 havonta, a tejfogak elhullásának időszakában néha gyakrabban. Idősek — egyedi értékelés a gyógyszerszedés, vérhígítók miatt."
          },
          {
            heading: "Hogyan zajlik a szűrővizsgálat?",
            text: "Érkezés és anamnézis — első alkalommal részletesen, később csak frissítés (gyógyszerek, új egészségügyi állapotok, panaszok). Külső vizsgálat — arc, állkapocs, nyak tapintása. Szájnyílás értékelése. Szájüregi vizsgálat — a fent leírt teljes protokoll. Parodontális vizsgálat — tasakok szondázása. Röntgen (szükség esetén) — digitális intraorális vagy panoráma felvétel. Diagnózis és kezelési terv — a találtakat részletesen elmagyarázzuk, fotódokumentációt készítünk, közösen összeállítjuk a következő lépéseket. Szájhigiénés tanácsadás — egyedi javaslatok a fogmosási technikára, fogselyem, interdentális kefe használatra. Időpont-egyeztetés — ha kezelésre van szükség, foglalunk időpontot."
          },
          {
            heading: "Mennyi ideig tart? Mire számítson?",
            text: "Időtartam: rutin szűrővizsgálat önmagában 20-30 perc, fogkőeltávolítással együtt 45-60 perc, röntgenfelvétellel további 5-10 perc. Első vizit: kissé hosszabb (40-60 perc) a részletes anamnézis és teljes vizsgálat miatt. A vizsgálat fájdalommentes — csak vizuális és műszeres ellenőrzés. Enyhe érzékenység a szondázásnál előfordulhat, különösen ha gingivitisz van jelen. Utána: közvetlenül normál étkezés, munka, sport lehetséges. Nincsenek korlátozások. Ha kezelés is volt (pl. fogkőeltávolítás), 24 órán át kerülje a nagyon fűszeres vagy forró ételeket."
          },
          {
            heading: "Prevenciós időszak Dr. Köteles Renáta rendelőjében",
            text: "Rendelőnkben kiemelt prevenciós időszakot biztosítunk, amikor a szűrővizsgálatra érkező pácienseket előnyben részesítjük. Hétfő és szerda: 13:30–14:30 (a délutáni rendelés kezdete). Kedd és csütörtök: 07:30–08:30 (a délelőtti rendelés kezdete). Péntek: páros héten 13:30–14:30, páratlan héten 07:30–08:30. Ezekben az időszakokban kifejezetten a megelőző ellenőrzésekre koncentrálunk: több időt és figyelmet fordítunk a részletes vizsgálatra, a szájhigiénés tanácsadásra. Kérjük, időpont-egyeztetés céljából hívjon: +36 94 900-887."
          },
          {
            heading: "Mit tehet otthon a fogászati egészségéért?",
            text: "Napi szájhigiéne: fogmosás naponta 2x (reggel és este), 2 perc időtartam, fluoridos fogkrém, puha vagy közepes keménységű fogkefe. Elektromos fogkefe ajánlott — hatékonyabb mint a kézi. Fogselyem napi 1x (különösen este) — a fogközi tisztítás elengedhetetlen. Interdentális kefe (különösen idősebb pácienseknél és fogszabályozó-viselőknél) — a szűkebb fogközöket tisztítja. Szájvíz (fluoridos, klórhexidines csak ideiglenesen) — kiegészítőként, NEM helyettesíti a fogmosást. Étkezés: korlátozott cukorfogyasztás (nem a cukor mennyisége, hanem a gyakorisága számít), savas italok szívószállal, utána víz öblítés, évente 1-2 alkalommal professzionális fogkőeltávolítás. Életmód: dohányzás mellőzése, stresszkezelés (bruxizmus csökkentés), megfelelő D-vitamin és kalcium ellátás."
          },
          {
            heading: "Mennyibe kerül? TB-támogatott?",
            text: "A fogászati szűrővizsgálat és az alapellátás TB-támogatott jogosult pácienseknek. Ez magában foglalja a rutin kontrollt, alapvető röntgenfelvételt, évi egy fogkőeltávolítást, tanácsadást. Magánellátás esetén is elérhető a szolgáltatás — pontos árajánlatot egyedileg tudunk adni. Hívjon: +36 94 900-887. Ha kezelésre van szükség (tömés, gyökérkezelés, stb.), azt külön időpontban végezzük el, és részletesen egyeztetjük Önnel a lehetőségeket."
          },
          {
            heading: "Gyakori kérdések",
            text: "Fájdalommentes a vizsgálat? Igen, teljesen — csak vizuális és műszeres ellenőrzés. Kell-e minden alkalommal röntgen? Nem, csak indokolt esetben. Digitális röntgenünk sugárdózisa nagyon alacsony. Felismerhető-e szájrák a szűrésen? Igen — minden szűrésünk tartalmaz szájüregi daganatszűrést. Évi 1x elég? Rutin esetben félévente javasolt. Évi 1x csak alacsony kockázatú pácienseknek elég. Kihagyhatom, ha nincs fájdalmam? Nem javasolt — a probléma korai szakaszban tünetmentes. A fájdalom már a romlás jele. Mit csináljak otthon a fájdalomnak megelőzéséért? Napi 2x fogmosás, napi 1x fogselyem, félévi szűrés, évi fogkőeltávolítás — ezzel a legtöbb probléma elkerülhető."
          },
        ]}
        relatedServices={[
          { title: "Fogkőeltávolítás", href: "/fogkoeltavolitas" },
          { title: "Profilaxia", href: "/profilaxia" },
          { title: "Fogmegtartó kezelések", href: "/fogmegtarto-kezelesek" },
          { title: "Gyermekfogászat", href: "/gyermekfogaszat" },
        ]}
      />
    </>
  );
}
