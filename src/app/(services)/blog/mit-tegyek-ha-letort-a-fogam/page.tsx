import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = {
  title: "Mit tegyek, ha letört a fogam? — Útmutató fogorvostól | Dr. Köteles Renáta",
  description: "Letört fog esetén azonnali útmutató: mit tegyen a helyszínen, hogyan mentheti meg a letört darabot, mikor hívjon fogorvost. Szombathelyen: +36 94 900-887.",
  alternates: { canonical: "https://weblelet.hu/blog/mit-tegyek-ha-letort-a-fogam" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mit tegyek, ha letört a fogam?",
  description: "Részletes útmutató letört fog esetére — elsősegély, azonnali teendők, mikor forduljon fogorvoshoz.",
  author: {
    "@type": "Person",
    name: "Dr. Köteles Renáta",
    jobTitle: "Fogorvos",
  },
  publisher: { "@id": "https://weblelet.hu/#organization" },
  datePublished: "2026-04-14",
  dateModified: "2026-04-14",
  mainEntityOfPage: "https://weblelet.hu/blog/mit-tegyek-ha-letort-a-fogam",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BlogPost
        title="Mit tegyek, ha letört a fogam?"
        subtitle="Fogászati baleset után minden perc számít. Gyakorlati útmutató: hogyan mentheti meg a fogát visszaültetésre, és mikor hívjon fogorvost."
        category="Sürgősségi"
        publishedDate="2026. április 14."
        readTime="5 perc olvasás"
        sections={[
          {
            heading: "Az első 5 perc a legfontosabb",
            text: "Egy fogászati baleset — esés, ütés, sportbaleset, kemény étel — pillanatok alatt megtörténhet. Ilyenkor a páni reakció természetes, de a helyes cselekvés órák helyett perceken múlik. A leggyakoribb esetek: kis darab letörés a fog széléről, nagyobb törés (a pulpáig), fogrepedés, teljes fogkiesés (avulzió). Mindegyik esetben a gyors és helyes reakció határozza meg, hogy a fog megmenthető-e. Olvassa el ezt a cikket lehetőleg MA, hogy felkészült legyen egy esetleges baleset esetén. És mentse el a rendelőnk számát: +36 94 900-887."
          },
          {
            heading: "Ha csak egy kis darab tört le",
            text: "Apró csorbulás a fogszélen gyakran nem fájdalmas, de esztétikailag zavaró lehet. Teendők: \n\n1. Keresse meg a letört darabot, ha megtalálja, tegye el tiszta borítékba vagy zárható zacskóba.\n2. Öblítse ki a száját langyos vízzel, távolítsa el az esetleges szilánkokat.\n3. Vizsgálja meg a száját — nincs-e vérzés, fájdalom?\n4. Ha a fog érzékeny hidegre vagy nyomásra, fedje fogpépes cukorkával vagy méhviasszal az éles szélt.\n5. Foglaljon időpontot 1-2 napon belül: +36 94 900-887.\n\nKezelés: a legtöbb esetben kompozit tömés vagy a letört darab visszaragasztása — gyakran 1 ülésben, fájdalommentesen."
          },
          {
            heading: "Ha nagyobb darab tört le (fájdalom, vérzés, pulpa látszik)",
            text: "Ha a fog mélyen eltört, a pulpa (fogbél) látható lehet sárgás-vörösesnek, és erős fájdalmat érez. Ez sürgős eset. Teendők:\n\n1. Keresse meg a letört darabot, tegye tiszta tejbe vagy sós vízbe (NE tisztítsa meg!). A fog sejtjei így maradnak életben.\n2. Ha az íny vérzik, nyomjon rá steril gézt 10-15 percig — a nyomás csillapítja a vérzést.\n3. Vegyen be fájdalomcsillapítót (ibuprofen 400 mg, paracetamol 500 mg). NE aszpirint — vérzést okozhat.\n4. Kerülje a forró ételt, italt, rágást az érintett oldalon.\n5. HÍVJON azonnal: +36 94 900-887. Rendelési időn kívül: Szombathelyi Fogászati Ügyelet +36 94 313-340 (hétvégén 08:00–14:00), vagy a Markusovszky Kórház sürgősségi osztálya.\n\nKezelés: ha a pulpa érintett, gyökérkezelés + korona szükséges. Minél gyorsabban kerül sor a kezelésre, annál nagyobb az esély a fog megmentésére."
          },
          {
            heading: "Ha a fog teljesen kiesett (avulzió) — minden perc számít!",
            text: "A teljes fogavulzió (a fog teljes kiesése gyökerestől) a legsürgősebb fogászati eset. A fog 30-60 percen belül visszaültethető (replantáció), ha helyesen kezeli. Teendők:\n\n1. NE érintse a fog gyökerét — csak a koronai (látható) részénél fogva nyúljon hozzá.\n2. Ha földes/szennyezett, öblítse le röviden (max 10 másodperc) hideg folyóvíz alatt. NE dörzsölje, NE szárítsa meg!\n3. Ha lehetséges: helyezze vissza a fogat óvatosan a saját helyére, és harapjon rá egy összehajtott steril gézre.\n4. Ha nem tudja visszahelyezni: TEJBE tegye (legjobb, mert a tej pH-ja és tápanyag-tartalma megőrzi a fog sejtjeit), vagy sós oldatba, vagy a saját nyálába (a nyelv alá — csak felnőttnek ajánlott, hogy ne nyelje le).\n5. HÍVJON azonnal: +36 94 900-887. Mondja, hogy teljes fogkiesés történt — soron kívül fogadjuk. Vagy menjen közvetlenül a Fogászati Ügyeletre.\n\nIdőablak: 30 perc → 90% siker esély a visszaültetésre. 60 perc → 50%. 2 óra után → nagyon ritka siker.\n\nTejfog esetén: NE ültesse vissza (ellenjavallt, károsítaná a maradó fog fejlődését). De jöjjön be ellenőrzésre, hogy a baleset nem károsította-e a csíránál lévő maradó fogat."
          },
          {
            heading: "Mit NE tegyen?",
            text: "A leggyakoribb hibák, amelyek csökkentik a fog megmentésének esélyét:\n\n× NE dörzsölje meg a fog gyökerét semmivel (sem ronggyal, sem papírzsebkendővel) — a gyökéren lévő parodontális szál-sejtek nélkül a fog nem nő vissza.\n× NE tegye a fogat vízbe — a sima víz ozmotikus sokkot okoz és elpusztítja a sejteket. TEJ a legjobb!\n× NE vegyen be aszpirint fájdalomcsillapítónak — vérzést okozhat, különösen ha vérző seb van.\n× NE helyezzen jeget közvetlenül a fogra — mélyhűti és károsítja a sejteket.\n× NE késlekedjen! Ne várja meg a 'hivatalos rendelési időt' — teljes fogkiesésnél azonnal cselekedjen.\n× NE tartson egy letört vagy avulzált fogat száraz helyen — 30 perc után a sejtek elpusztulnak.\n× NE próbáljon nyugodt maradni és 'majd holnap foglaljon időpontot' — az idő kritikus."
          },
          {
            heading: "Megelőzés — hogyan csökkentheti a kockázatot?",
            text: "Bár minden balesetet nem lehet megelőzni, néhány egyszerű lépéssel csökkentheti a fogbalesetek esélyét:\n\n• Kontaktsportoknál (foci, kosárlabda, küzdősportok) viseljen szájvédőt. Egyedi, fogorvosi szájvédő a legjobb védelem.\n• Görkorcsolyázás, kerékpározás, sí közben viseljen sisakot (gyermekek is!).\n• Ne rágjon kemény tárgyakat (jégkocka, dióhéj, ceruzahegy, köröm).\n• Ne használja a fogait eszközként (üvegnyitás, csomag szétbontás).\n• Éjszakai fogcsikorgatás (bruxizmus) esetén kérjen egyedi éjszakai fogvédőt — megelőzi a fog elkopását és törését.\n• Rendszeres fogászati kontroll — a gyengült, szuvas fog könnyebben eltörik. A szűrésen kiszűrjük ezeket.\n\nHa mégis baleset történik: tudja a teendőt, és mentse el a számunkat. Az első percek meghatározóak!"
          },
          {
            heading: "Ki fizeti? TB-támogatott az ellátás?",
            text: "A sürgősségi fogászati ellátás TB-támogatott jogosult pácienseknek érvényes TAJ-számmal és személyi igazolvánnyal. Ez magában foglalja a vizsgálatot, a fájdalomcsillapítást, az azonnali beavatkozásokat (pl. fog visszaültetése, ideiglenes ellátás). A végleges kezelés (gyökérkezelés, korona, esetleges fogpótlás) külön időpontban történik, a standard TB-keret szerint.\n\nMagánellátás: ha nincs TB-jogosultsága, vagy gyorsabb/speciális ellátást szeretne, magánellátás keretében is elérhető. Pontos árajánlatot a vizsgálat után adunk.\n\nBiztosítások: ha rendelkezik magánegészségügyi biztosítással vagy lakásbiztosítással baleseti kiterjesztéssel, a költség egy részét visszatérítheti. Érdeklődjön a biztosítójánál."
          },
        ]}
        relatedServices={[
          { title: "Sürgősségi ellátás", href: "/surgossegi-ellatas" },
          { title: "Fogmegtartó kezelések", href: "/fogmegtarto-kezelesek" },
          { title: "Fogpótlás", href: "/fogpotlas" },
        ]}
        relatedPosts={[
          { title: "Éjszakai fogfájás — mit tegyek?", href: "/blog/ejszakai-fogfajas-mit-tegyek" },
          { title: "Mikor kell gyökérkezelés?", href: "/blog/mikor-kell-gyokerkezeles" },
        ]}
      />
    </>
  );
}
