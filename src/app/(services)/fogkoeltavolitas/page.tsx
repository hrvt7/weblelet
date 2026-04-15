import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Fogkőeltávolítás Szombathelyen — ultrahangos tisztítás | Dr. Köteles Renáta",
  description: "Fogkőeltávolítás Szombathelyen ultrahangos módszerrel. Megelőzi az ínygyulladást és a fogvesztést. TB-támogatott rendelő, fájdalommentes kezelés. Időpont: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/fogkoeltavolitas" },
};

const procedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Fogkőeltávolítás",
  alternateName: ["Ultrahangos fogkőeltávolítás", "Professzionális fogtisztítás", "Depurálás"],
  description: "Ultrahangos fogkőeltávolítás és polírozás az egészséges fogíny és megelőzés érdekében.",
  procedureType: "https://health-lifesci.schema.org/TherapeuticProcedure",
  bodyLocation: "Fogazat és fogíny",
  provider: { "@id": "https://weblelet.hu/#dentist" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Fáj-e a fogkőeltávolítás?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Az ultrahangos fogkőeltávolítás a legtöbb páciens számára fájdalommentes — legfeljebb enyhe vibrációt és időnként kellemetlen érzést okoz a kemény lerakódásoknál. Érzékeny ínyű pácienseknél enyhe diszkomfort előfordulhat, különösen ha korábban nem történt professzionális tisztítás. Súlyos érzékenység esetén felületi érzéstelenítést alkalmazhatunk.",
      },
    },
    {
      "@type": "Question",
      name: "Milyen gyakran kell fogkőeltávolítás?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Általános szabály: évente 1-2 alkalom javasolt. Dohányosok, cukorbetegek, parodontitiszre hajlamosok, terhesek és ortodonciai készüléket viselők esetén 3-4 havonta szükséges lehet. A pontos gyakoriságot egyéni fogazati állapot alapján javasoljuk.",
      },
    },
    {
      "@type": "Question",
      name: "Mennyi ideig tart egy kezelés?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Egy teljes fogkőeltávolítás és polírozás 30-45 percet vesz igénybe. Nagyobb mennyiségű fogkő vagy ínyvérzés esetén 60 percet is igénybe vehet. Air-flow kezeléssel kombinálva 45-60 perc.",
      },
    },
    {
      "@type": "Question",
      name: "Hallottam, hogy kiszedi a tömést — igaz ez?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nem. Az ultrahangos fogkőeltávolító készülék a fogkőre rezonál, nem a fogra vagy tömésre. Megfelelően végzett beavatkozás nem károsítja a zománcot, a töméseket, vagy a koronákat. Az amalgám tömések felszíne kissé kopott lehet, de ez esztétikai és nem funkcionális probléma.",
      },
    },
    {
      "@type": "Question",
      name: "Otthon nem tudom eltávolítani a fogkövet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nem. A fogkő megkeményedett lerakódás, amelyet csak professzionális ultrahangos készülékkel vagy kézi scaler-rel lehet eltávolítani. A fogmosás és fogselyem a plakkot (fogkő előtti állapot) távolítja el — ezzel megakadályozza az új fogkő képződését, de a meglévőt nem oldja fel.",
      },
    },
    {
      "@type": "Question",
      name: "Véreznek az ínyeim fogkőeltávolítás után — normális?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Igen, kisebb ínyvérzés és érzékenység 24-48 órán át normális jelenség, különösen ha rég volt professzionális tisztítás, vagy ha korábban ínygyulladás állt fenn. A tünetek 2-3 nap alatt megszűnnek. Ha a vérzés 1 hét után is fennáll, vagy erős fájdalom társul hozzá, jelezze felénk.",
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
        title="Fogkőeltávolítás Szombathelyen"
        subtitle="Ultrahangos fogkőeltávolítás és polírozás Dr. Köteles Renáta rendelőjében. Megelőzi az ínygyulladást, megvédi a fogakat — az egészséges mosoly alapja."
        image="/images/hero/service-3.webp"
        sections={[
          {
            heading: "Mi az a fogkő?",
            text: "A fogkő (calculus) a fogfelszínen és a fogíny szélén képződő kemény, ásványianyag-tartalmú lerakódás. Kialakulása így zajlik: étkezés után baktériumok telepednek meg a fogfelszínen és puha plakkot képeznek. Ha ezt nem távolítjuk el rendszeres fogmosással, a nyálban lévő kalcium- és foszfát-ionok 24-72 órán belül mineralizálják — a plakk megkeményedik és fogkővé válik. Ettől a pillanattól otthoni fogmosással már nem távolítható el. A fogkő két formája: supragingivális (fogíny fölötti, látható, sárgás-barnás) és subgingivális (fogíny alatti, sötétebb, a szonda tapintja ki). A subgingivális fogkő veszélyesebb — ez okozza leggyakrabban a fogágygyulladást."
          },
          {
            heading: "Miért fontos rendszeresen eltávolítani?",
            text: "A kezeletlen fogkő súlyos egészségügyi következményekkel járhat. Gingivitisz (ínygyulladás) — a fogkő folyamatosan irritálja az ínyt: vörös, duzzadt, vérzik fogmosáskor. Parodontitisz (fogágygyulladás) — kezeletlen gingivitisz, amely a gyökérhártyát, az alveoláris csontot is érinti, tasakokat képez, és hosszú távon fogvesztéshez vezet. Rossz lehelet (halitózis) — a fogkőben megtelepedő baktériumok kellemetlen szagot okoznak. Fogszuvasodás — a fogkő alatt kialakuló baktériumtelep a fogzománcot is megtámadja. Szisztémás betegségekkel való összefüggés — kutatások szerint a kezeletlen parodontitisz növeli a szív-érrendszeri betegségek, cukorbetegség és Alzheimer-kór kockázatát."
          },
          {
            heading: "Kinek javasolt?",
            text: "Fogkőeltávolításra évente 1-2 alkalommal minden páciensnek szüksége van a megelőzés érdekében. Gyakoribb beavatkozásra van szükség, ha Ön dohányzik (a dohány felgyorsítja a fogkő képződést), cukorbeteg (magasabb a fogágygyulladás kockázata), fogszabályozót visel (a bracketek körül nehezebb a tisztítás), terhes (hormonális változások érzékenyebbé teszik az ínyt), parodontitiszre hajlamos, vagy orthodontiai kezelés után van. Konkrét jelek, hogy időszerű a kezelés: látható sárgás-barnás lerakódások a fog alsó harmadán, ínyvérzés fogmosáskor, érzékeny íny, rossz lehelet, csökkenő ínyhatár."
          },
          {
            heading: "Hogyan zajlik a kezelés?",
            text: "Vizsgálat — áttekintjük a fogakat és az ínyt, felmérjük a fogkő mennyiségét és elhelyezkedését, szükség esetén röntgenfelvételt készítünk. Supragingivális fogkőeltávolítás — ultrahangos depurátorral (a készülék gyors vibrációval lebontja a kemény lerakódásokat), vízsugárral folyamatos öblítés, kézi scalerrel az esetleges maradványok eltávolítása. Subgingivális fogkőeltávolítás — az íny alatti lerakódások eltávolítása finomabb ultrahangos heggyel vagy kézi eszközökkel. Polírozás — speciális pasztával és forgó gumicsészével simítjuk a fogfelszínt, ez csökkenti az új lerakódások tapadását. Fluoridos kezelés (opcionális) — a fogzománc megerősítése. Tanácsadás — otthoni szájhigiénés útmutatás a megfelelő fogkefe, fogselyem és öblítőszer kiválasztásához."
          },
          {
            heading: "Mennyi ideig tart?",
            text: "Rutin fogkőeltávolítás és polírozás: 30-45 perc. Nagyobb mennyiségű fogkő vagy kiterjedt ínygyulladás esetén 60 percet is igénybe vehet. Parodontális esetekben mély küretálással kombinált kezelés 60-90 perc. Air-flow kezeléssel kombinálva 45-60 perc — az Air-flow különösen hatékony az elszíneződések és a finom biofilm eltávolítására."
          },
          {
            heading: "Fáj-e?",
            text: "Az ultrahangos fogkőeltávolítás a legtöbb páciens számára fájdalommentes — legfeljebb enyhe vibrációt és időnként bizsergő érzést kelt. Érzékeny ínyű pácienseknél enyhe diszkomfort előfordulhat, különösen ha hosszú idő telt el az utolsó kezelés óta, vagy ha előrehaladott ínygyulladás van jelen. Ezekben az esetekben felületi érzéstelenítő gélt alkalmazhatunk, amely csökkenti az érzékenységet. A hideg vízsugár érzése szokatlan lehet, de nem fájdalmas. Gyermekek és fogási félelmet érző pácienseknél extra odafigyelést biztosítunk — nyugalmat, időt adunk, megmutatjuk a készüléket a kezelés előtt."
          },
          {
            heading: "Mire számítson a kezelés után?",
            text: "Közvetlen hatások: a fogak simábbnak és tisztábbnak érződnek, fehérebb árnyalatúak (különösen ha dohányzás vagy kávé okozta elszíneződések voltak jelen), az íny frissebbnek érződik, a rossz lehelet javul. 24-48 óráig tartó jelenségek: enyhe ínyvérzés (különösen ha ínygyulladás volt jelen), hideg-meleg érzékenység a fogakon, enyhe ínyérzékenység — ezek mind természetesek és gyorsan megszűnnek. Mit kerüljön a kezelés után 24 órán át: erős fűszereket, savas gyümölcsleveket, forró ételeket, dohányzást, alkoholos szájvizet. Mit tegyen: langyos sós vizes öblítés (1 dl víz + 1 teáskanál só) naponta 2-3 alkalommal, puha fogkefe használata, fokozott fogselyem-használat. Hosszú távú előnyök: 3-6 hónap kezelés-mentes időszakot biztosít megfelelő otthoni szájhigiéne mellett."
          },
          {
            heading: "Mennyibe kerül? TB-támogatott?",
            text: "A fogkőeltávolítás a NEAK által támogatott alapellátás része jogosult páciensek számára — évente egy alkalommal térítésmentesen igénybe vehető. Magánellátás esetén a kezelés ára az időtartamtól, a fogkő mennyiségétől, és az esetleges kiegészítő kezelésektől (Air-flow, polírozás, fluoridos kezelés) függ. Pontos árajánlatot a vizsgálat után adunk. Hívjon: +36 94 900-887."
          },
          {
            heading: "Gyakori kérdések",
            text: "Otthon tudom-e eltávolítani? Nem — csak professzionális készülékkel lehetséges. Fogmosás csak a plakkot (puha lerakódás) távolítja el. Elvész-e a fogzománcom a kezelés alatt? Megfelelően végzett ultrahangos kezelés nem károsítja a zománcot. Miért van barnás folt a fogaimon? Kávé, tea, vörösbor, dohány. Ezeket az Air-flow kezelés hatékonyan eltávolítja. Kiszedi-e a tömést? Nem. Miért vérzik az ínyem csak a fogmosáskor? Gingivitisz (ínygyulladás) jele. Rendszeres fogkőeltávolítás és javított otthoni szájhigiéne megszünteti. Mi az különbség a fogkőeltávolítás és az Air-flow között? A fogkőeltávolítás a kemény lerakódásokat távolítja el ultrahanggal. Az Air-flow a fogfelszíni elszíneződéseket és a biofilmet fújtatja le finom porsugárral. Kombinálva a legjobb eredmény."
          },
        ]}
        relatedServices={[
          { title: "Air-flow kezelés", href: "/air-flow" },
          { title: "Parodontológia", href: "/parodontologia" },
          { title: "Profilaxia", href: "/profilaxia" },
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
        ]}
      />
    </>
  );
}
