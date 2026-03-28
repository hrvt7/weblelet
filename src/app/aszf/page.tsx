import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Általános Szerződési Feltételek — WebLelet",
  description: "A WebLelet általános szerződési feltételei.",
  alternates: {
    canonical: "https://weblelet.hu/aszf",
  },
};

export default function ASZF() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-10"
        >
          &larr; Vissza a főoldalra
        </Link>

        <h1 className="font-heading text-3xl font-extrabold tracking-[-0.03em] text-foreground mb-8">
          Általános Szerződési Feltételek
        </h1>

        <div className="max-w-none text-foreground-secondary space-y-6 leading-relaxed">
          <p className="text-sm text-foreground-muted/60">
            Hatályos: 2026. március 28-tól
          </p>

          <h2 className="text-xl font-bold text-foreground">
            1. Szolgáltató adatai
          </h2>
          <p>
            Név: Horváth Ádám (WebLelet)
            <br />
            Székhely: 9700 Szombathely
            <br />
            Email: info@weblelet.hu
            <br />
            Tárhelyszolgáltató: Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA
            91789, USA)
          </p>

          <h2 className="text-xl font-bold text-foreground">
            2. A szolgáltatás leírása
          </h2>
          <p>
            A WebLelet AI-alapú weboldal audit szolgáltatást nyújt, amely
            magában foglalja a GEO/SEO elemzést, marketing hatékonyság
            értékelést, jogi compliance ellenőrzést és üzleti potenciál
            felmérést. Az elemzés eredménye PDF formátumú riport.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            3. Megrendelés és teljesítés
          </h2>
          <p>
            A megrendelés a weboldalon található kapcsolati űrlap kitöltésével
            és elküldésével jön létre. A Szolgáltató a megrendelést emailben
            visszaigazolja. Az ingyenes diagnózis 48 órán belül, a teljes
            audit az egyeztetett határidőn belül készül el.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            4. Díjazás és fizetési feltételek
          </h2>
          <p>
            Az ingyenes diagnózis (Szint 1) díjmentes. A teljes audit (Szint
            2) díja egyedi megállapodás alapján kerül meghatározásra. A
            fizetés a számla kiállítását követő 8 napon belül esedékes,
            banki átutalással.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            5. Szellemi tulajdon
          </h2>
          <p>
            Az elkészült audit riport a megrendelő tulajdonát képezi. A
            WebLelet rendszer, módszertan és szoftver a Szolgáltató szellemi
            tulajdona. A megrendelő a riportot szabadon felhasználhatja
            belső célokra, de a rendszert vagy annak részeit nem
            másolhatja, nem terjesztheti.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            6. Felelősség korlátozása
          </h2>
          <p>
            Az audit riport tájékoztató jellegű, nem minősül jogi
            tanácsadásnak. A jogi compliance megállapítások ügyvédi
            felülvizsgálatot nem helyettesítenek. A Szolgáltató nem vállal
            felelősséget a riportban foglalt javaslatok végrehajtásának
            eredményéért.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            7. Elállás és felmondás
          </h2>
          <p>
            A megrendelő az ingyenes diagnózis esetén bármikor, indokolás
            nélkül elállhat. Fizetős szolgáltatás esetén a munka
            megkezdése előtt díjmentesen, azt követően a már teljesített
            munka arányos díjának megfizetése mellett mondható fel.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            8. Adatvédelem
          </h2>
          <p>
            Az adatkezelés részleteit az{" "}
            <Link
              href="/adatvedelem"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Adatvédelmi tájékoztató
            </Link>{" "}
            tartalmazza.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            9. Panaszkezelés és jogérvényesítés
          </h2>
          <p>
            Panasz esetén kérjük, írjon az info@weblelet.hu email címre. A
            Szolgáltató 30 napon belül válaszol. Fogyasztói jogvita esetén a
            lakóhely szerint illetékes békéltető testülethez vagy bírósághoz
            fordulhat.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            10. Egyéb rendelkezések
          </h2>
          <p>
            Jelen ÁSZF-re a magyar jog az irányadó. A Szolgáltató fenntartja a
            jogot az ÁSZF módosítására, amelyről a weboldalon értesíti az
            érintetteket.
          </p>

          <p className="text-sm text-foreground-muted/60 pt-4">
            Utolsó frissítés: 2026. március 28.
          </p>
        </div>
      </div>
    </div>
  );
}
