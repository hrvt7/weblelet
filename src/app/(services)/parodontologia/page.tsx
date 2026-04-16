import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Parodontológia Budapesten — fogágygyulladás kezelés | Dr. Minta Réka",
  description: "Parodontológia Budapesten: fogágygyulladás (parodontitis) diagnosztika és kezelés. Mély küretálás, gyökérfelszín-simítás. TB-támogatott. Időpont: +36 30 123 4567.",
  alternates: { canonical: "https://weblelet.hu/parodontologia" },
};

const procedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Parodontológia",
  alternateName: ["Fogágygyulladás kezelés", "Parodontitis terápia", "Mély küretálás"],
  description: "Fogágygyulladás (parodontitis) diagnosztikája és kezelése: mély küretálás, gyökérfelszín-simítás, rendszeres kontroll.",
  procedureType: "https://health-lifesci.schema.org/TherapeuticProcedure",
  bodyLocation: "Fogágy, íny, alveoláris csont",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Miért vérzik az ínyem fogmosáskor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Az ínyvérzés az ínygyulladás (gingivitisz) legjellemzőbb jele. Oka: a fogkő és plakk folyamatosan irritálja az ínyt, mely kivörösödik, megduzzad, és a legkisebb mechanikai hatásra (fogmosás, fogselyem, kemény étel) vérzik. Ez a probléma jól kezelhető korai szakaszban: professzionális fogkőeltávolítás + javított otthoni szájhigiéne 1-2 hét alatt normalizálja az állapotot.",
      },
    },
    {
      "@type": "Question",
      name: "Mi a különbség a gingivitisz és a parodontitisz között?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A gingivitisz (ínygyulladás) csak az ínyre korlátozódik — vörös, duzzadt, vérzékeny. Teljesen gyógyítható, reverzibilis. A parodontitisz (fogágygyulladás) előrehaladottabb állapot: a gyulladás elérte a gyökérhártyát, a csontot, tasakokat képez a fog és íny között. A csontpusztulás nem reverzibilis, de a folyamat megállítható. Kezeletlen parodontitisz a felnőttkori fogvesztés #1 oka.",
      },
    },
    {
      "@type": "Question",
      name: "Mennyi ideig tart egy parodontológiai kezelés?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Egy teljes alapkezelési sorozat 2-4 ülést igényel, ülésenként 60-90 percet. A kezelés kezdeti hatása 4-6 hét alatt értékelhető (újraellenőrzés). Utána 3-4 havonta fenntartó kezelés javasolt. Súlyos esetekben sebészi parodontológiai beavatkozás is szükséges lehet (pl. íny-plasztika, csontgraft).",
      },
    },
    {
      "@type": "Question",
      name: "Fáj-e a mély küretálás?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A mély küretálás helyi érzéstelenítésben történik, így fájdalommentes. Enyhe vibrációt és időnként bizsergő érzést érezhet. A kezelés utáni 1-3 napban érzékeny íny és enyhe vérzés előfordulhat — ez normális és gyorsan megszűnik. Ha erős fájdalom tart 3 nap után is, jelezze felénk.",
      },
    },
    {
      "@type": "Question",
      name: "Visszanőhet-e az ínyem a parodontitisz kezelése után?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sajnos a visszahúzódott íny önmagától nem nő vissza. A kezelés célja a folyamat megállítása — további visszahúzódás megelőzése. Súlyos esetben sebészi beavatkozással (íny-graft) helyreállítható a visszahúzódott íny. A legfontosabb a megelőzés és az időben történő kezelés.",
      },
    },
    {
      "@type": "Question",
      name: "Összefügg-e a parodontitisz más betegségekkel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Igen. Kutatások szerint a kezeletlen parodontitisz növeli a szív-érrendszeri betegségek, agyi érkatasztrófák, cukorbetegség és Alzheimer-kór kockázatát. Terhesség alatt koraszülés és alacsony súlyú újszülött rizikóját is emeli. Cukorbetegeknél a parodontitisz nehezíti a vércukor szabályozását — kölcsönös rossz hatás.",
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
        title="Parodontológia Budapesten"
        subtitle="Fogágygyulladás (parodontitis) diagnosztika és kezelés Dr. Minta Réka rendelőjében. A felnőttkori fogvesztés #1 oka — megelőzhető és kezelhető."
        image="/images/hero/service-parodontologia.webp"
        sections={[
          {
            heading: "Mi a parodontológia?",
            text: "A parodontológia a fogágy — az íny, a gyökérhártya, a gyökércement és az alveoláris csont (a fog támasztó szövetei) — megbetegedéseivel foglalkozó szakterület. Két fő állapotot különböztetünk meg: gingivitisz (ínygyulladás) a reverzibilis korai stádium, csak az íny érintett; parodontitisz (fogágygyulladás) az előrehaladott forma, amely a fog támasztószerkezetét is érinti, és kezeletlenül fogvesztéshez vezet. A parodontális betegségek a felnőtt lakosság mintegy 30-40%-át érintik valamilyen mértékben, és szoros összefüggésben állnak a szisztémás egészséggel. A parodontológia nemcsak fogmentő szakterület — az általános egészség fenntartásának is egyik pillére."
          },
          {
            heading: "Kinek javasolt a parodontológiai vizsgálat?",
            text: "Parodontológiai kezelésre szüksége lehet, ha ínye fogmosáskor vérzik, ínye vörös, duzzadt, érzékeny, ínye lilás elszíneződésű (krónikus gyulladás jele), visszahúzódó ínyt tapasztal (a fog hosszabbnak látszik), rossz lehelete van, amely fogmosás után sem szűnik meg, fogközök szélesedtek, fogai 'hosszabbnak' látszanak, fogai mozognak, inognak, rossz szájíz, rágásnál a hátsó fogak fájnak. Különösen fokozott a kockázat, ha: Ön dohányos (6-7x nagyobb rizikó), cukorbeteg, szív-érrendszeri betegsége van, családban előfordult parodontitisz, terhes (hormonális hatás), stresszben él. Mindenkinek javasolt évente 1 alkalommal parodontális szűrés — tünetmentes előrehaladott eset is előfordulhat."
          },
          {
            heading: "Diagnosztika — hogyan ismerjük fel?",
            text: "Klinikai vizsgálat — az íny színének, formájának, tapadásának ellenőrzése. Parodontális szondázás — speciális szondával mérjük a fog és íny közötti tasak mélységét. Egészséges: 1-3 mm. Gingivitisz: 3-4 mm. Enyhe parodontitisz: 4-5 mm. Mérsékelt: 5-6 mm. Súlyos: 6 mm felett. Ínyvérzési index — mérjük, hogy a szondázás hány helyen vált ki vérzést. Fogmozgathatóság — a fogak stabilitásának ellenőrzése. Röntgenfelvétel (panoráma + bite-wing) — a csontveszteség mértékének értékelése. Bakteriális tenyésztés (szükség esetén) — agresszív parodontitisz esetén speciális mikrobiológiai vizsgálat. A diagnózis alapján a parodontitisz súlyosságát 4 stádiumba soroljuk, és kezelési tervet állítunk össze."
          },
          {
            heading: "A parodontitisz kezelésének lépései",
            text: "1. lépés — Higiénés fázis (non-sebészi): professzionális fogkőeltávolítás supragingivális szinten; motiváció és szájhigiénés oktatás; otthoni tisztítási technika átadása. 2. lépés — Ok-oki terápia (non-sebészi): mély küretálás — a fogíny alatti (subgingivális) fogkő eltávolítása ultrahangos készülékkel vagy kézi eszközökkel; gyökérfelszín-simítás (root planing) — a megfertőzött gyökércement simítása, hogy az íny újra rátapadhasson a fogra. 3. lépés — Újraértékelés (4-6 hét múlva): csökkentek-e a tasakok? Megszűnt-e az ínyvérzés? 4. lépés — Sebészi beavatkozás (szükség esetén): mélyebb tasakok esetén íny-lebenyezés, csontgraftolás, íny-plasztika. 5. lépés — Fenntartó terápia: életre szóló 3-4 havonta kontroll és tisztítás."
          },
          {
            heading: "Mély küretálás — a kezelés alapja",
            text: "A mély küretálás (subgingivális debridement) a non-sebészi parodontológia alapbeavatkozása. Cél: az íny alatti (subgingivális) fogkő eltávolítása és a gyökérfelszín fertőtlenítése. Menete: helyi érzéstelenítés az érintett területen; ultrahangos készülékkel az íny alatti fogkő lebontása; kézi eszközökkel (curettek) a gyökércement megtisztítása és simítása; öblítés antimikrobiális oldattal. Időtartam: kvadránsonként 45-60 perc (a szájat 4 kvadránsra osztjuk — felső jobb, felső bal, alsó jobb, alsó bal). Teljes kezelés: 2-4 ülés. A mély küretálás után az íny 4-6 hét alatt regenerálódik — csökkennek a tasakok, megszűnik a vérzés, és a gyulladás lecsillapodik."
          },
          {
            heading: "Fáj-e a kezelés?",
            text: "A mély küretálás helyi érzéstelenítésben történik, így fájdalommentes. Az érzéstelenítés hatása alatt nyomást és vibrációt érez, de nem fájdalmat. A kezelés után 1-3 napig enyhe érzékenység, duzzadt íny és enyhe vérzés természetes. Hideg-meleg érzékenység a fogakon 1-2 hétig előfordulhat, különösen ha a fogak gyökerei részben szabaddá váltak. Ezek 2-3 hét alatt normalizálódnak, és a kezelés hatására az összes panasz (vérzés, duzzanat, rossz lehelet) megszűnik. Ha erős fájdalom jelentkezik 3 nap után is, vagy magas láz alakul ki, azonnal jelezze."
          },
          {
            heading: "A kezelés utáni teendők",
            text: "Első 24 óra: enyhe vérzés és duzzanat természetes; kerülje a forró ételeket és italokat; ne dohányozzon (jelentősen lassítja a gyógyulást); ne fogyasszon alkoholt; használjon antimikrobiális szájöblítőt (klórhexidines) naponta 2x, 1 perc átöblítéssel (1 hétig, max 2 hétig). 2-7. nap: fokozott otthoni szájhigiéne — puha fogkefe, fogselyem, interdentális kefe (amit a rendelőben mutatunk); fájdalomcsillapító szükség szerint (ibuprofen); lágy étkezés. Hosszú távon: életre szóló 3-4 havonta fenntartó parodontális kezelés (SPT — Supportive Periodontal Therapy); fogmosás elektromos vagy extra-lágy fogkefével, legalább napi 2x, 2 percig; fogselyem + interdentális kefe napi használat; dohányzás abbahagyása (a parodontitisz #1 rizikófaktora); cukorbeteg pácienseknek: szoros vércukor-kontroll."
          },
          {
            heading: "Parodontitisz és szisztémás egészség",
            text: "A kezeletlen parodontitisz NEM csak fogászati probléma — szoros összefüggésben áll a szisztémás egészséggel. Dokumentált kockázati kapcsolatok: szív-érrendszeri betegségek — a parodontális baktériumok és gyulladásos mediátorok a vérkeringésen keresztül szerepet játszanak az érelmeszesedésben, szívinfarktusban, sztrókban. Cukorbetegség — kölcsönös rossz hatás: a parodontitisz nehezíti a vércukor szabályozást, a cukorbetegség pedig felgyorsítja a parodontitisz előrehaladását. Alzheimer-kór — a P. gingivalis baktérium nyomait találták Alzheimer-kóros agyszövetben. Terhességi komplikációk — parodontitisz növeli a koraszülés, alacsony születési súly, preeklampszia rizikóját. Autoimmun betegségek — reumás artritisz, Crohn-betegség. Tüdőfertőzések — különösen idős páciensekben, aspirációs pneumónia. A parodontitisz kezelése tehát nemcsak a fogait, hanem az egész szervezet egészségét védi."
          },
          {
            heading: "Mennyibe kerül? TB-támogatott?",
            text: "A parodontológiai alapellátás — mely magában foglalja a szűrővizsgálatot, a professzionális fogkőeltávolítást, és alapvető gyökérsimítást — TB-támogatott érvényes TAJ-számmal rendelkező pácienseknek. Komplexebb beavatkozások (teljes mély küretálás, parodontológiai sebészet) részben térítésmentesek, részben magánellátás keretében érhetők el. Pontos árajánlatot a diagnosztikai vizsgálat után adunk. Hívjon: +36 30 123 4567."
          },
          {
            heading: "Gyakori kérdések",
            text: "Ha cukorbeteg vagyok, nehezebben gyógyul? Igen, a magas vércukor késlelteti a gyógyulást és növeli a fertőzés kockázatát — szoros orvosi együttműködés és jó cukorellenőrzés szükséges. Dohányzás abbahagyása után lesz látható javulás? Igen — 6-12 hónap alatt a gyulladás jelentősen csökken, a kezelés hatékonysága javul. Okozhat-e agresszív parodontitiszt fiatal korban? Igen — 15-30 éves korban is előfordul, genetikai és mikrobiális okokból. Gyors diagnózis és kezelés kritikus. Lehet-e elveszíteni az összes fogat? Súlyos, kezeletlen parodontitisz esetén igen — ezért olyan fontos a megelőzés és a korai kezelés. Helyettesítheti-e a fogmosás a professzionális kezelést? Nem — az otthoni szájhigiéne elengedhetetlen, de a meglévő tasakok és subgingivális fogkő csak professzionális kezeléssel távolítható el."
          },
        ]}
        relatedServices={[
          { title: "Fogkőeltávolítás", href: "/fogkoeltavolitas" },
          { title: "Air-flow kezelés", href: "/air-flow" },
          { title: "Profilaxia", href: "/profilaxia" },
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
        ]}
      />
    </>
  );
}
