import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Air-flow kezelés Budapesten — homokfúvásos fogtisztítás | Dr. Minta Réka",
  description: "Air-flow fogtisztítás Budapesten: kíméletes homokfúvásos módszer kávé-, tea-, dohányzás-foltokra. Fehérebb fogak fogfehérítés nélkül. Időpont: +36 30 123 4567.",
  alternates: { canonical: "https://weblelet.hu/air-flow" },
};

const procedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Air-flow kezelés",
  alternateName: ["Homokfúvásos fogtisztítás", "EMS Air-flow", "Prémium fogtisztítás"],
  description: "Kíméletes homokfúvásos fogtisztítás finom porsugárral — a biofilm és fogfelszíni elszíneződések eltávolítására.",
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
      name: "Mi a különbség az Air-flow és a hagyományos fogkőeltávolítás között?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fogkőeltávolítás a kemény ásványi lerakódásokat (fogkő) távolítja el ultrahangos készülékkel. Az Air-flow a fogfelszíni elszíneződéseket és a finom biofilmet fújtatja le finom porsugárral — amit az ultrahang nem ér el. A két eljárás kiegészíti egymást, és kombinálva a legjobb eredményt adják.",
      },
    },
    {
      "@type": "Question",
      name: "Fáj-e az Air-flow kezelés?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Az Air-flow a legtöbb páciens számára fájdalommentes és kifejezetten kellemes — sokan 'lebegő érzésről' számolnak be. Érzékeny ínyű pácienseknél enyhe diszkomfort előfordulhat, különösen a kezelés kezdetén. A hidegebb vízsugár szokatlan lehet. A modern glicin-alapú por sokkal finomabb és kíméletesebb a hagyományos szódabikarbónás változatnál.",
      },
    },
    {
      "@type": "Question",
      name: "Károsítja-e az Air-flow a fogzománcot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nem. A modern Air-flow por (különösen a glicin-alapú) olyan finom és vízoldékony, hogy nem koptatja a fogzománcot. Az eljárás kíméletesebb mint a hagyományos polírozás. Klinikai vizsgálatok alapján biztonságosan alkalmazható még érzékeny fogaknál és implantátumok körül is.",
      },
    },
    {
      "@type": "Question",
      name: "Mennyire lesznek fehérebbek a fogak a kezelés után?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Az Air-flow nem fogfehérítő eljárás — a fogak természetes színét állítja vissza az elszíneződések eltávolításával. Általában 1-2 árnyalattal világosabb eredményt ad. Valódi fehérítéshez (4-8 árnyalat) rendelői fogfehérítés szükséges.",
      },
    },
    {
      "@type": "Question",
      name: "Mennyi ideig tart egy Air-flow kezelés?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Önállóan 20-30 perc. Fogkőeltávolítással kombinálva (ajánlott) 45-60 perc. Komplett profilaxis keretében (fogkőeltávolítás + Air-flow + fluoridálás + polírozás) 60-90 perc.",
      },
    },
    {
      "@type": "Question",
      name: "Milyen gyakran javasolt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Általános fenntartás: félévente 1 alkalom. Dohányosoknak, rendszeres kávé-/tea-ivóknak 3-4 havonta javasolt. Implantátum-viselőknek és parodontitisz utáni fenntartó kezelésben 3 havonta.",
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
        title="Air-flow kezelés Budapesten"
        subtitle="Kíméletes homokfúvásos fogtisztítás Dr. Minta Réka rendelőjében — fehérebb fogak, egészségesebb íny, kellemes élmény fogfehérítés nélkül."
        image="/images/hero/service-airflow.webp"
        sections={[
          {
            heading: "Mi az Air-flow kezelés?",
            text: "Az Air-flow egy svájci fejlesztésű (EMS) technológia, amely forradalmasította a professzionális fogtisztítást. A módszer finom por (szódabikarbóna vagy glicin), víz és sűrített levegő keverékét juttatja nagy nyomással a fogfelszínre. A porózus részecskék kíméletesen, de hatékonyan távolítják el a fogfelszíni lerakódásokat, a biofilmet és az elszíneződéseket — olyan területeken is, ahol a hagyományos fogkőeltávolítás korlátozottan hatékony. Fontos megérteni: az Air-flow nem fogfehérítő eljárás — a fogak természetes színét állítja vissza azáltal, hogy eltávolítja a kávé, tea, vörösbor és dohányzás okozta makacs lerakódásokat. Az eredmény: 1-2 árnyalattal világosabb, ragyogóan tiszta fogak, egészségesebb íny, és kellemes, fogpaszta-ízű száj."
          },
          {
            heading: "Kinek javasolt az Air-flow?",
            text: "Az Air-flow különösen hatékony: Dohányosoknak — a nikotin és kátrány okozta makacs barnás-sárgás foltok eltávolítására. Rendszeres kávé-, tea- és vörösbor-fogyasztóknak — a színezett italok által okozott elszíneződések kezelésére. Implantátum-viselőknek — az implantátum körüli területek finom, kíméletes tisztítására (hagyományos eszközök károsíthatják a titán felszínt). Ortodonciai készüléket viselőknek (fogszabályozó) — a bracketek és drótok körüli nehezen tisztítható területek. Parodontitiszben szenvedőknek — a tasakok és subgingivális biofilm finom eltávolítására, a fenntartó kezelés részeként. Esztétikai igényű pácienseknek — különleges alkalmakra (esküvő, fotózás, munkaügyi interjú) ragyogóan tiszta fogak. Érzékeny fogú pácienseknek — kíméletesebb alternatíva a hagyományos polírozásnál."
          },
          {
            heading: "Hogyan működik?",
            text: "Az Air-flow készülék három összetevőt egyesít egyetlen sugárba: 1. Por — finom szemcseméretű, vízoldékony anyag. Kétféle port használunk: Szódabikarbóna (nátrium-bikarbonát) — erősebb por, supragingivális (íny feletti) területek makacs elszíneződéseihez. Glicin-alapú por (EMS Air-Flow Plus) — rendkívül finom, teljesen vízoldékony, biztonságosan használható subgingivális (íny alatti) területen és érzékeny zománcnál is. 2. Víz — hűti a fogat és öblíti a felszínt. 3. Sűrített levegő — a port és a vizet keveri egy céltudatos sugárrá. A sugár a fogfelszínre irányítva finoman lebontja a lerakódásokat anélkül, hogy a zománc szerkezetét megrongálná. Az eredmény azonnal látható — a fogak fényesebbek, világosabbak, érzékelhetően simábbak."
          },
          {
            heading: "Előnyök — miért választja sok páciens?",
            text: "Kíméletesebb mint a hagyományos polírozás — a forgó gumi csésze és paszta által okozott zománckopás kiküszöbölve. Eléri a nehezen megközelíthető területeket — fogközök, barázdák, implantátumok és fogszabályozó körül. Fájdalommentes és kellemes — sok páciens a 'fogaspa-élményként' jellemzi. Gyors — 20-30 perc alatt teljes fogsor tisztítható. Azonnali eredmény — a fogak már a kezelés után 1-2 árnyalattal világosabbnak tűnnek. Biztonságos — klinikai vizsgálatok megerősítik hogy nem károsítja a zománcot. Hatékony — 20x hatékonyabb a biofilm eltávolításában mint a hagyományos polírozás (EMS klinikai adatok). Alkalmas terhes pácienseknek is — a glicin por teljesen biztonságos."
          },
          {
            heading: "Mit távolít el az Air-flow?",
            text: "Fogfelszíni elszíneződések: kávé, tea (különösen fekete tea), vörösbor, cékla, szója, curry, dohány (nikotin és kátrány), klórhexidines szájvíz (klórhexidin barnás színt ad hosszú használatra), gyógyszerek okozta elszíneződések (pl. vas-készítmények). Biofilm (bakteriális réteg): a fogfelszínen kialakuló vékony baktérium-réteg, amelyet az ultrahangos készülék csak részben ér el; a subgingivális (íny alatti) biofilm, amely a parodontitisz kiváltója. Enyhe fogplakk: friss, még nem megkeményedett lerakódás. Amit az Air-flow NEM távolít el: kemény fogkő (calculus) — ez ultrahangos fogkőeltávolítást igényel, belső fogelszíneződés (pl. gyökérkezelés utáni sötétedés, fluorózis) — ezt fogfehérítéssel kezelhetjük."
          },
          {
            heading: "Kombinált kezelések — a legjobb eredményért",
            text: "Az Air-flow önállóan is hatékony, de a legjobb eredményt kombinált kezelésekben nyújtja: 1. Fogkőeltávolítás + Air-flow + polírozás + fluoridálás = Komplett profilaxis. Ez az ideális félévi kontroll. 2. Air-flow + rendelői fogfehérítés = Esztétikai csomag. Az Air-flow előkészíti a fogakat a fehérítésre (eltávolítja a felszíni szennyeződéseket), így a fehérítő gél egyenletesebben tud hatni. 3. Mély küretálás + Air-flow (glicin-alapú) = Parodontitisz-fenntartó kezelés. A glicin por finom, biztonságos a subgingivális tasakokban. 4. Implantátum-tisztítás + Air-flow = Periimplantitisz-megelőzés."
          },
          {
            heading: "A kezelés menete — mire számítson?",
            text: "Érkezés és rövid konzultáció — megbeszéljük a célokat (csak friss tisztítás, vagy elszíneződés-eltávolítás, vagy implantátum-ápolás stb.). Ellenőrzés — megvizsgáljuk van-e kemény fogkő (ha igen, először azt távolítjuk el ultrahangos készülékkel). Por kiválasztása — szódabikarbóna (erősebb) vagy glicin (finomabb) a páciens igényei szerint. Kezelés — a kezelő egy ergonomikus kézidarab segítségével irányítja a sugárt a fogakra. Maszkot / védőszemüveget kap a por védelme érdekében. Öblítés — szájöblítés és a fog felszínének megtisztítása a por maradványaitól. Polírozás (opcionális) — a fogak felszínének további simítása, csökkentve az új lerakódások tapadását. Fluoridos lakk — a zománc megerősítése. Tanácsadás — hogyan tarthatja meg az eredményt. Időtartam: önállóan 20-30 perc, kombinált kezelésben 45-90 perc."
          },
          {
            heading: "Fáj-e? Mi az érzés?",
            text: "Az Air-flow a legtöbb páciens számára kellemes, fájdalommentes élmény. A legjellemzőbb érzések: enyhe nyomás a sugár érintkezési pontján (nem fájdalom), hűvös érzés a víztől, egy enyhe 'fújtató' érzés, finom por íze a szájban (szódabikarbóna kissé sós, glicin semleges). Érzékenység esetén: érzékeny fogú pácienseknél átmeneti hideg-érzékenység előfordulhat, ez a kezelés után néhány órán belül megszűnik; érzékeny ínyű pácienseknél: enyhe ínyvérzés előfordulhat ha ínygyulladás van jelen; a glicin-alapú por ilyen esetekben kíméletesebb alternatíva. Fontos: allergiás reakció rendkívül ritka. Asztmás betegeknek a szódabikarbóna helyett glicin-port használunk (biztonságos). Érzéstelenítésre csak speciális esetekben (súlyos ínygyulladás, subgingivális nyomás-érzékenység) van szükség — általában nem kell."
          },
          {
            heading: "A kezelés után — mire figyeljen?",
            text: "Közvetlenül a kezelés után: a fogak simábbak, fényesebbek, 1-2 árnyalattal világosabbak; az íny frissebb érzésű, enyhe vérzés előfordulhat ha gyulladt volt; a szájban friss érzés. Első 30 perc: kerülje a színezett ételeket és italokat (kávé, tea, vörösbor, cékla, paradicsom, mustár) — a frissen megtisztított zománc ebben az időszakban fokozottan hajlamos az elszíneződésre. Dohányzás szintén kerülendő. Első 2 óra: a fluorid lakk (ha alkalmaztunk) teljes beszívódásához ne igyon savas italt, ne egyen kemény ételt. Első 24 óra: normál étkezés lehetséges, a színezett ételeket is fogyaszthatja. A fehéredési hatás folyamatosan fokozódhat 24-48 óra alatt. Hosszú távon: napi 2x fogmosás, fogselyem, interdentális kefe. 6 hónaponként komplett profilaxis javasolt. Dohányzás abbahagyása a legjobb ajándék a fogainak."
          },
          {
            heading: "Air-flow vs. rendelői fogfehérítés — melyiket válasszam?",
            text: "Air-flow: eltávolítja a fogfelszíni elszíneződéseket (kávé, tea, dohány, vörösbor); visszaállítja a természetes fogszínt; 1-2 árnyalattal világosabb eredmény; 20-30 perc; fájdalommentes; olcsóbb; 3-6 hónapig tart. Rendelői fogfehérítés: megváltoztatja a fog belső színét oxidatív reakcióval; a természetes színnél is világosabb árnyalatot ér el; 4-8 árnyalattal világosabb eredmény; 60-120 perc; átmeneti érzékenység előfordulhat; drágább; 1-3 évig tart. Melyiket válassza? Ha a fogak természetes színükhöz képest sötétebbek az életmód miatt: Air-flow. Ha a természetes színnél is világosabb, 'ragyogó fehér' mosolyra vágyik: rendelői fogfehérítés. Sokan kombinálják: először Air-flow (tiszta felszín), majd rendelői fogfehérítés (még fehérebb eredmény)."
          },
          {
            heading: "Mennyibe kerül?",
            text: "Az Air-flow kezelés magánellátás keretében érhető el — nem TB-támogatott. Az ár függ attól, hogy önállóan vagy kombinált csomag részeként kéri (fogkőeltávolítással együtt kedvezőbb árazás), milyen kiterjedésű tisztítás szükséges, és milyen por típust használunk. Pontos árajánlatot a kezelés előtti konzultáción adunk. Hívjon: +36 30 123 4567."
          },
          {
            heading: "Gyakori kérdések",
            text: "Otthon tudom-e helyettesíteni? Nem — otthoni fogmosással, fehérítő fogkrémmel a biofilm egy részét eltávolíthatjuk, de az Air-flow hatékonyságát nem érheti el. Alkalmas-e terhes nőknek? Igen, a glicin-alapú por teljesen biztonságos. A 2. trimeszter az ideális időszak. Mikor után látom az eredményt? Azonnal, már a kezelés alatt. Tehet-e rosszat? Megfelelően végzett kezelés nem károsít. Ritkán előforduló érzékenység 1-3 nap alatt megszűnik. Miért fontos glicin por implantátumnál? A szódabikarbóna apró mikrokarcolásokat okozhat a titán felszínen, ami később baktériumok tapadását segíti. A glicin por teljesen kíméletes. Van-e helyette más? Klasszikus polírozás gumicsészével és pasztával — ez kevésbé hatékony és enyhén koptatóbb a zománcra."
          },
        ]}
        relatedServices={[
          { title: "Fogkőeltávolítás", href: "/fogkoeltavolitas" },
          { title: "Profilaxia", href: "/profilaxia" },
          { title: "Esztétikai fogászat", href: "/esztetikai-fogaszat" },
          { title: "Parodontológia", href: "/parodontologia" },
        ]}
      />
    </>
  );
}
