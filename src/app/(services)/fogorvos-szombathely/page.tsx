import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Fogorvos Szombathely — Dr. Köteles Renáta felnőtt fogorvosi rendelő",
  description: "Fogorvos Szombathelyen: TB-támogatott felnőtt fogorvosi rendelő a Markusovszky Lajos u. 8. szám alatt. Teljes körű fogászati ellátás, modern technológia. Időpont: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/fogorvos-szombathely" },
};

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://weblelet.hu/fogorvos-szombathely#dentist",
  name: "Dr. Köteles Renáta — Fogorvos Szombathely",
  description: "Felnőtt fogorvosi rendelő Szombathelyen, NEAK szerződéses alapellátás, teljes körű fogászati kezelések.",
  url: "https://weblelet.hu/fogorvos-szombathely",
  telephone: "+3694900887",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Markusovszky Lajos u. 8.",
    addressLocality: "Szombathely",
    postalCode: "9700",
    addressCountry: "HU",
  },
  areaServed: {
    "@type": "City",
    name: "Szombathely",
  },
  medicalSpecialty: "Dentistry",
  priceRange: "$$",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hol található Szombathelyen Dr. Köteles Renáta rendelője?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A rendelő a 9700 Szombathely, Markusovszky Lajos u. 8. szám alatti Egészségügyi Alapellátó Központban található. A Markusovszky Kórház közvetlen közelében, ingyenes parkolással. Tömegközlekedéssel a 7-es és 10-es buszokkal érhető el.",
      },
    },
    {
      "@type": "Question",
      name: "TB-támogatott fogorvosi rendelő Szombathelyen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Igen, NEAK szerződéses alapellátó fogorvosi rendelő vagyunk. Érvényes TAJ-számmal a szűrővizsgálat, fogkőeltávolítás, tömések, gyökérkezelések, foghúzás, alap fogpótlás ellátás térítésmentesen elérhető.",
      },
    },
    {
      "@type": "Question",
      name: "Milyen szolgáltatások érhetők el a rendelőben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teljes körű fogászati ellátás: szűrővizsgálat, fogkőeltávolítás, Air-flow, profilaxia, fogmegtartó kezelések (tömés, gyökérkezelés), fogpótlás (korona, híd, kivehető fogsor), foghúzás és bölcsességfog eltávolítás, gyermekfogászat, parodontológia (fogágykezelés), esztétikai fogászat (fogfehérítés, veneer), sürgősségi fogászati ellátás.",
      },
    },
    {
      "@type": "Question",
      name: "Milyen rendelési idővel működik?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hétfő és szerda: 13:30–19:30. Kedd és csütörtök: 07:30–13:30. Péntek: váltakozó (páros hét 13:30–19:30, páratlan hét 07:30–13:30). Minden rendelési nap első órájában prevenciós időszak — ilyenkor a szűrővizsgálatra érkezőket előnyben részesítjük.",
      },
    },
    {
      "@type": "Question",
      name: "Hogyan foglaljak időpontot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Időpontot telefonon tudunk egyeztetni: +36 94 900-887. Kérjük a rendelési időben hívjon. Akut fogfájás esetén jelezze telefonon — igyekszünk soron kívül fogadni. Új pácienseket is várunk, csak érvényes TAJ-szám és személyi igazolvány szükséges.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicePage
        title="Fogorvos Szombathelyen — Dr. Köteles Renáta"
        subtitle="Felnőtt fogorvosi rendelő a Markusovszky Lajos u. 8. szám alatt. TB-támogatott, NEAK szerződéses ellátás, teljes körű fogászati kezelések egy helyen."
        image="/images/hero/service-1.webp"
        sections={[
          {
            heading: "Miért válasszon minket fogorvosának Szombathelyen?",
            text: "Dr. Köteles Renáta fogorvosi rendelője a szombathelyi Egészségügyi Alapellátó Központban (Markusovszky Lajos u. 8.) működik. Célunk, hogy a páciensek kellemes, családias légkörben, modern technológiával és személyes odafigyeléssel kapják meg a szükséges ellátást — a rutin szűrővizsgálattól a komplex fogpótlásig. NEAK szerződéses alapellátó rendelő vagyunk: az alapvető kezelések TB-támogatott keretben, magánkezelés formájában is elérhetők. A rendelő könnyen megközelíthető a város bármely pontjáról, ingyenes parkolás, tömegközlekedéssel elérhető. Új pácienseket is várunk — csak TAJ-szám és személyi igazolvány szükséges az első látogatáshoz."
          },
          {
            heading: "Teljes körű fogászati ellátás egy helyen",
            text: "Rendelőnkben a fogászati ellátás teljes spektrumát nyújtjuk, így nincs szüksége több helyre járni: Szűrővizsgálat — félévenkénti kontroll, röntgen, szájüregi daganatszűrés. Profilaxia és Air-flow — professzionális fogtisztítás, fluoridálás, biofilm eltávolítás. Fogkőeltávolítás — ultrahangos módszerrel, fájdalommentesen. Fogmegtartó kezelések — kompozit tömések és gyökérkezelés (endodoncia) a saját fog megmentéséhez. Fogpótlás — korona, híd, kivehető fogsor, kombinált munkák. Foghúzás — egyszerű és sebészi, bölcsességfog eltávolítás. Gyermekfogászat — barátságos ellátás 0-18 éves korig, TB-támogatott. Parodontológia — fogágygyulladás kezelés, mély küretálás. Esztétikai fogászat — fogfehérítés, kompozit héjak (veneer). Sürgősségi ellátás — akut fogfájás, törött fog, kiesett tömés azonnali kezelése."
          },
          {
            heading: "Rendelési idő — 2026-tól",
            text: "Hétfő: 13:30–19:30 (prevenciós idő: 13:30–14:30). Kedd: 07:30–13:30 (prevenciós idő: 07:30–08:30). Szerda: 13:30–19:30 (prevenciós idő: 13:30–14:30). Csütörtök: 07:30–13:30 (prevenciós idő: 07:30–08:30). Péntek: váltakozó — páros héten 13:30–19:30, páratlan héten 07:30–13:30 (prevenciós idő a rendelés első órája). A prevenciós időszakban a szűrővizsgálatra érkező pácienseket előnyben részesítjük. Akut fogfájás esetén a rendelési időben hívjon minket — igyekszünk soron kívül fogadni. Hétvégén és ünnepnapokon a szombathelyi Fogászati Ügyelet (ugyanazon címen, Markusovszky u. 8., tel.: +36 94 313-340) áll rendelkezésre 08:00–14:00 között."
          },
          {
            heading: "TB-támogatott vs. magán ellátás",
            text: "Rendelőnk NEAK szerződéses alapellátó fogorvosi rendelő — ez azt jelenti, hogy az alapvető fogászati ellátás érvényes TAJ-számmal rendelkező pácienseknek TB-támogatott keretben érhető el. TB-támogatott szolgáltatások: évenkénti szűrővizsgálat, fogkőeltávolítás (évente 1x), tömés (egyszerű és többfelszínes), gyökérkezelés, foghúzás (egyszerű és sebészi), alap fogpótlás (részlegesen), gyermekfogászati ellátás 0-18 éves korig (teljes körűen), sürgősségi ellátás. Nem TB-támogatott (magán): esztétikai kezelések (fogfehérítés, kompozit héjak, veneer), kiegészítő profilaktikus kezelések (Air-flow, prémium fluoridálás), speciális anyagú fogpótlások (teljes kerámia, cirkon), magánigény szerinti gyakoribb kontrollok. A pontos jogosultságot és a kezelési lehetőségeket egyedileg beszéljük meg."
          },
          {
            heading: "Modern rendelő, biztonsági protokollok",
            text: "A rendelő modern fogászati eszközökkel és digitális röntgen-berendezéssel van felszerelve. A digitális röntgen jelentősen alacsonyabb sugárdózissal jár, és azonnali képértékelést tesz lehetővé. Higiéniai és sterilizálási standardjaink: minden eszköz autokláv sterilizálás minden használat előtt, egyszer használatos kesztyűk, maszkok, tűk, fecskendők, rendszeres felületi fertőtlenítés, levegőfiltráció. A modern szerszámok mellett a legfontosabb: a páciens komfortja és biztonsága. Időt adunk a kérdéseknek, részletesen elmagyarázzuk a kezelési tervet, lehetőséget adunk a konzultációra, soha nem sürgetünk döntést."
          },
          {
            heading: "Megközelítés — hogyan juthat el a rendelőhöz?",
            text: "Cím: 9700 Szombathely, Markusovszky Lajos u. 8., Egészségügyi Alapellátó Központ. Autóval: a Markusovszky Kórház közvetlen közelében található, ingyenes parkolási lehetőség az épület előtt és környékén (Városligeti sporttelep parkolói). A város bármely pontjáról 5-15 perc alatt elérhető. Tömegközlekedéssel: 7-es és 10-es buszokkal, a 'Markusovszky kórház' megállóig. Megközelítés a város széléről: a belváros felől a Március 15. tér — Bajcsy-Zsilinszky út — Markusovszky Lajos utca útvonalon; a Huszár úti lakótelep felől közvetlen kapcsolat. Kerékpártárolók a központ előtt rendelkezésre állnak. Akadálymentes bejárat az épület főbejáratán keresztül."
          },
          {
            heading: "Kinek ajánljuk rendelőnket?",
            text: "Rendelőnk különösen alkalmas: szombathelyieknek, akik keresnek egy állandó, megbízható fogorvost a város központjához közel; Vas megyei pácienseknek, akik rendszeres fogászati ellátást szeretnének egy jól megközelíthető helyen; családoknak — gyermekfogászat is elérhető, így egy helyen intézhető a család ellátása; TB-s pácienseknek, akik a NEAK támogatott keretben szeretnének teljes körű ellátást; akut problémával küzdő pácienseknek (sürgősségi ellátás rendelési időben); időseknek, akik a rendelő megközelíthetőségét és az alapos, türelmes ellátást értékelik; fogorvosi félelemmel küzdő pácienseknek — családias, nyugodt légkör, időt adunk a bizalomépítésre; terhes anyáknak — a 2. trimeszter ideális időszak a teljes fogászati kontrollra."
          },
          {
            heading: "Első látogatás — mit hozzon magával?",
            text: "Kötelező dokumentumok: személyi igazolvány (vagy útlevél), TAJ-kártya (TB-támogatott ellátáshoz), lakcímkártya, diákigazolvány (18-25 éves korig). Ajánlott hozni: korábbi fogászati dokumentumok (röntgen, kezelési terv), gyógyszerlista (különösen vérhígítók, bifoszfonátok, antihisztaminok, immunszuppresszánsok), allergia-lista (érzéstelenítők, antibiotikumok iránti allergia), az aktuális panaszok és kérdések listája. Az első látogatás kissé hosszabb (30-60 perc): részletes anamnézis, teljes szájvizsgálat, szükség esetén panoráma-röntgen, közösen kidolgozott kezelési terv. Ha csak akut problémával érkezik, rövidebb vizit is lehetséges — az akut beavatkozás után egyeztetjük a következő lépéseket."
          },
          {
            heading: "Szolgáltatásaink részletesen",
            text: "Tekintse meg szolgáltatási oldalainkon a részletes leírásokat, kezelési protokollokat, árazási információkat, gyakori kérdéseket. Minden szolgáltatás saját aloldalon érhető el részletesen: Fogászati szűrővizsgálat — a rendszeres kontroll alapja. Profilaxia — megelőző kezelések. Fogkőeltávolítás — ultrahangos professzionális tisztítás. Air-flow — prémium fogtisztítás. Fogmegtartó kezelések — tömés, gyökérkezelés. Fogpótlás — korona, híd, fogsor. Esztétikai fogászat — fogfehérítés, veneer. Fogeltávolítás — foghúzás, bölcsességfog. Gyermekfogászat — családias ellátás a legkisebbeknek. Parodontológia — fogágygyulladás kezelés. Sürgősségi ellátás — akut fogfájás és baleset."
          },
          {
            heading: "Kapcsolat — foglaljon időpontot",
            text: "Telefon: +36 94 900-887 (rendelési időben hívjon). Email: dr.kotelesrenata@gmail.com. Cím: 9700 Szombathely, Markusovszky Lajos u. 8. Új pácienseket szívesen fogadunk. TB-s és magánellátás egyaránt elérhető. Akut fogfájás esetén jelezze telefonon — soron kívüli ellátást biztosítunk a rendelési időben. Ha kérdése van az ellátás típusairól, költségeiről, vagy az első látogatásról — hívjon nyugodtan, részletesen tájékoztatjuk."
          },
        ]}
        relatedServices={[
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
          { title: "Fogpótlás", href: "/fogpotlas" },
          { title: "Sürgősségi ellátás", href: "/surgossegi-ellatas" },
          { title: "Gyermekfogászat", href: "/gyermekfogaszat" },
        ]}
      />
    </>
  );
}
