import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = {
  title: "Éjszakai fogfájás — mit tegyek? | Dr. Köteles Renáta",
  description: "Miért erősödik a fogfájás éjszaka? Azonnali enyhítő tippek, mikor menjen ügyeletre, mit kerüljön. Szombathely: +36 94 900-887 rendelési időben.",
  alternates: { canonical: "https://weblelet.hu/blog/ejszakai-fogfajas-mit-tegyek" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Éjszakai fogfájás — mit tegyek?",
  description: "Éjszakai fogfájás okai, azonnali enyhítő tippek, mikor szükséges ügyeletre menni.",
  author: { "@type": "Person", name: "Dr. Köteles Renáta", jobTitle: "Fogorvos" },
  publisher: { "@id": "https://weblelet.hu/#organization" },
  datePublished: "2026-04-14",
  dateModified: "2026-04-14",
  mainEntityOfPage: "https://weblelet.hu/blog/ejszakai-fogfajas-mit-tegyek",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BlogPost
        title="Éjszakai fogfájás — mit tegyek?"
        subtitle="Miért erősödik a fogfájás éjszaka? Azonnali enyhítő tippek, mikor menjen ügyeletre, mit kerüljön. Részletes útmutató, amikor a pánik nem segít."
        category="Sürgősségi"
        publishedDate="2026. április 14."
        readTime="5 perc olvasás"
        sections={[
          {
            heading: "Miért fáj jobban éjszaka?",
            text: "Ha valaha éjszaka ébredt lüktető fogfájásra, biztosan ismeri ezt az érzést: a sötétben, a nap aktivitásai nélkül, a fájdalom hatalmasabbnak tűnik. Nincs csak képzelete — valóban erősebb. Három oka van:\n\n1. A fejtartás hatása: fekvő helyzetben a fejben megnő a vérnyomás. Ha a fogbél (pulpa) gyulladt, a lüktetés a fokozott vérnyomás miatt erősebb. Egyes betegek ezért ülve próbálnak aludni — és tényleg csillapodik egy kicsit.\n\n2. Nincs elterelés: nappal a munka, család, tévé, beszélgetés elvonja a figyelmet. Éjszaka minden csöndes — a fájdalom hatalmasabbnak érzékelhető.\n\n3. A kortizol-szint csökken: a test természetes gyulladáscsökkentő hormonja éjszaka alacsonyabb, így a gyulladás szabadabban manifesztálódik.\n\n4. Összeszorított fogak alvás közben: sokan alvás alatt csikorgatják vagy összeszorítják a fogakat (bruxizmus) — ez extra nyomást okoz a gyulladt fogra.\n\nFontos: az éjszakai, spontán lüktető fogfájás általában a pulpitis (fogbélgyulladás) klasszikus jele, ami gyökérkezelést igényel. Ne halogassa a fogorvosi látogatást!"
          },
          {
            heading: "Azonnali teendők — mit tegyen most?",
            text: "Ha éjszaka ébred fogfájásra, az alábbi lépések segíthetnek csillapítani a fájdalmat:\n\n1. Vegyen be fájdalomcsillapítót:\n• Ibuprofen 400 mg (felnőtt) — ez az elsődleges választás fogászati fájdalomnál, mert gyulladáscsökkentő is.\n• Paracetamol 500-1000 mg — kombinálható az ibuprofennel.\n• NE aszpirin (acetilszalicilsav) — vérzést okozhat, különösen ha reggel kezelésre megy.\n• Maximum dózis: ibuprofen 2400 mg/nap, paracetamol 4000 mg/nap felnőttnek.\n\n2. Öblítse ki a száját langyos sós vízzel:\n• 1 dl víz + 1 teáskanál só.\n• 30-60 másodperc öblögetés.\n• Csillapítja a gyulladást, eltávolítja az esetleges ételmaradékot.\n\n3. Emelje fel a fejét:\n• Feküdjön magasabb párnára vagy több párnára.\n• Az emelt fejtartás csökkenti a fejben a vérnyomást, így a lüktetést is.\n\n4. Hideg borogatás a arcra:\n• Jégpakolás ruhába csomagolva (soha ne közvetlenül a bőrre).\n• 15 perc rá, 15 perc pihenés.\n• Csillapítja a gyulladást és fájdalmat.\n\n5. Kerülje:\n• Forró italokat, ételeket (fokozza a gyulladást)\n• Nagyon hideg italokat (ha hideg-érzékeny a fog)\n• Édes ételeket\n• Rágást az érintett oldalon\n\n6. Hívjon minket reggel elsőként:\n• Telefon: +36 94 900-887\n• Jelezze hogy sürgős\n• Soron kívül fogadjuk"
          },
          {
            heading: "Mi okozhatja az éjszakai fogfájást?",
            text: "A leggyakoribb okok:\n\n1. Pulpitis (fogbélgyulladás) — 60-70% esetben:\n• Mély szuvasodás elérte a fogbelet\n• Spontán, lüktető fájdalom\n• Hideg-meleg érzékenység\n• Gyökérkezelés szükséges\n\n2. Akut tályog — 10-15% esetben:\n• Fertőzés a gyökércsúcsnál\n• Lüktető fájdalom + duzzadt íny + rossz szájíz\n• Akár láz is lehet\n• Azonnali ellátást igényel\n\n3. Kiesett tömés vagy törött fog — 10% esetben:\n• A védtelen fogüreg + baktériumok\n• Hideg-meleg ingerekre érzékeny\n• Ideiglenes tömés, majd végleges\n\n4. Bruxizmus (fogcsikorgatás) — 5-10% esetben:\n• Rágóizmok fájdalma ébredéskor\n• Fog- vagy állkapocsízületi fájdalom\n• Éjszakai fogvédő megoldja\n\n5. Sinusitis (arcüreggyulladás) — 2-3% esetben:\n• A felső őrlőfogak gyökerei közel vannak az arcüreghez\n• Nátha, orrfolyás, fejfájás kísér\n• Antibiotikum vagy orvosi kezelés szükséges\n\n6. Pericoronitisz (bölcsességfog körüli gyulladás) — 3-5% esetben:\n• Részlegesen előtört bölcsességfog\n• Duzzadt íny, fájdalom, rossz szájíz\n• Öblögetéssel ideiglenesen csillapítható, de kezelés kell\n\nA pontos ok megállapításához fogorvosi vizsgálat szükséges — ez gyorsan és egyértelműen diagnosztizálható."
          },
          {
            heading: "Mikor menjen ÜGYELETRE? (Ne várjon reggelig!)",
            text: "Rendelési időben (hétfő-péntek) a +36 94 900-887 számot hívja, soron kívül fogadjuk.\n\nÉjszaka vagy hétvégén menjen a Szombathelyi Fogászati Ügyeletre (Markusovszky Lajos u. 8., +36 94 313-340, 08:00–14:00) ha:\n\n• Duzzadt az arca és tovább terjed (nyak, szem környéke)\n• Nyelési nehézsége van\n• Lélegzési nehézsége van\n• 38°C feletti láza van fogászati panasszal\n• A fájdalom nem csillapodik semmiféle fájdalomcsillapítóra\n• Gyermek vagy idős beteg erős fájdalommal\n\nHÍVJA A 112-T vagy menjen a Markusovszky Kórház sürgősségi osztályára ha:\n\n• Súlyos arcduzzanat szembe / nyakra terjed\n• Magas láz (39°C+) hidegrázással\n• Tudatzavar, hányás, erős fejfájás\n• Légzési nehézség\n• Erős, nem csillapuló vérzés\n\nEzek szepszis (vérfertőzés) jelei lehetnek — életveszélyesek, azonnali kórházi kezelést igényelnek.\n\nAz esetek nagy többségében (95%+) NEM szükséges ügyelet — otthoni fájdalomcsillapítóval, langyos sós vizes öblögetéssel kibírja a reggelt. De ha kétséges, inkább menjen — jobb ha kiderül hogy 'nem volt súlyos'."
          },
          {
            heading: "Amit tévedésnek gondolnak — mítoszok",
            text: "Számos tévhit kering az éjszakai fogfájásról:\n\n'Fokhagyma vagy szegfűszeg gyógyítja' — MÍTOSZ\nA szegfűszegolaj (eugenolt tartalmaz) valóban lokálisan kissé csillapíthatja a fájdalmat, de NEM gyógyítja. Az ínyre erős koncentrációban kerülve irritál. Nem helyettesíti a fogorvosi kezelést.\n\n'Majd elmúlik magától' — VESZÉLYES TÉVHIT\nHa a fájdalom spontán csillapodik, az nem jó jel — gyakran azt jelenti, hogy a pulpa elhalt (nekrózis). A baktériumok tovább terjednek, tályogot képezhetnek. Mindenképp menjen fogorvoshoz.\n\n'Aszpirint a fogra kell tenni' — ROSSZ ÖTLET\nAz aszpirin savas, közvetlenül az ínyre helyezve kémiai égést okoz. BEHATNI kell, nem odatenni.\n\n'Egy kis whisky csillapít' — NEM\nAz alkohol átmenetileg érzéketlenítheti az ínyet, de aggravációt okoz (véredények tágulnak). Plus reggel nem tud vezetni a rendelőbe, és a fájdalomcsillapítók sem szedhetők alkohol mellett.\n\n'Ha nem mozog a fog, nem sürgős' — NEM\nEgy mozdulatlan fog is lehet súlyosan fertőzött. A gyulladás a gyökér körül zajlik, nem feltétlenül a fog mobilitását okozza kezdetben.\n\n'Ibuprofen csak akkor, ha már megfájdul' — NEM\nHa tudja hogy fájni fog (pl. reggel a kezelés előtt), vegye be 30-60 perccel korábban. A fájdalmat megelőzni könnyebb, mint kezelni."
          },
          {
            heading: "Megelőzés — hogyan kerülhető el?",
            text: "A legjobb éjszakai fogfájás az, ami soha nem történik meg. Megelőzés:\n\n1. Rendszeres szűrővizsgálat: félévente. A kezdődő szuvasodást tömésre (15-30 perc), a régi tömést megújításra időben fel lehet ismerni — a pulpitis megelőzhető.\n\n2. Azonnali reakció tünetekre:\n• Hideg-meleg érzékenység 2-3 napon át: menjen fogorvoshoz\n• Apró szuvasodás a tükörben: ne halogassa\n• Érzékenység rágáskor: jelezze\n\nA kezdődő tünet 10-20x olcsóbban kezelhető, mint az előrehaladott probléma.\n\n3. Megfelelő otthoni szájhigiéne:\n• Napi 2x fogmosás (2 perc, fluoridos fogkrém)\n• Napi 1x fogselyem\n• Szájvíz (opcionális, kiegészítő)\n\n4. Évente 1x professzionális fogkőeltávolítás: TB-támogatott, megelőzi az ínygyulladást és parodontitiszt.\n\n5. Bruxizmus kezelése: ha éjszaka csikorgat, egyedi fogvédő.\n\n6. Életmód:\n• Kevés cukor (különösen ritka, nem mennyiségi szempont)\n• Dohányzás kerülése\n• Savas italok szívószállal (pl. üdítő)\n\n7. Ne várja az 'igazán megfájjon' fogával — a kezdődő szuvasodást is célszerű kezelni.\n\nFoglaljon időpontot: +36 94 900-887."
          },
        ]}
        relatedServices={[
          { title: "Sürgősségi ellátás", href: "/surgossegi-ellatas" },
          { title: "Fogmegtartó kezelések", href: "/fogmegtarto-kezelesek" },
          { title: "Fogászati szűrővizsgálat", href: "/fogaszati-szurovizsgalat" },
        ]}
        relatedPosts={[
          { title: "Mit tegyek, ha letört a fogam?", href: "/blog/mit-tegyek-ha-letort-a-fogam" },
          { title: "Mikor kell gyökérkezelés?", href: "/blog/mikor-kell-gyokerkezeles" },
        ]}
      />
    </>
  );
}
