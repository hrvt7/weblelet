import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Általános Szerződési Feltételek — HRVT Studio",
  description: "A HRVT Studio általános szerződési feltételei.",
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
            Hatályos: 2026. május 19-től
          </p>

          <h2 className="text-xl font-bold text-foreground">
            1. Szolgáltató adatai
          </h2>
          <p>
            Név: Horváth Ádám
            <br />
            Székhely: Szombathely
            <br />
            Email: info@hrvtstudio.hu
            <br />
            Tárhelyszolgáltató: Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA
            91789, USA)
          </p>

          <h2 className="text-xl font-bold text-foreground">
            2. A szolgáltatás leírása
          </h2>
          <p>
            A HRVT Studio AI-alapú vizuális tartalom készítési szolgáltatást
            nyújt magyar vállalkozásoknak. A szolgáltatás magában foglalja:
            AI termékfotó készítést, editorial kampányképeket, AI reklámvideókat,
            UGC (User Generated Content) stílusú tartalmakat, brand kampányokat
            és havi content naptár összeállítását. A tartalmak stúdió minőségben,
            havi előfizetéses konstrukcióban kerülnek leszállításra.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            3. Megrendelés és teljesítés
          </h2>
          <p>
            A megrendelés a weboldalon található kapcsolatfelvételi e-mail
            (info@hrvtstudio.hu) útján jön létre. A Szolgáltató a megrendelést
            e-mailben visszaigazolja. Az elkészült tartalmak jellemzően
            3–5 munkanapon belül kerülnek leszállításra a megrendelt csomagtól
            függően. A havi előfizetés a visszaigazolást követő napon lép
            hatályba.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            4. Díjazás és fizetési feltételek
          </h2>
          <p>
            A szolgáltatás díjai csomagtól függően:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Starter csomag: 120 EUR / hó</li>
            <li>Growth csomag: 250 EUR / hó</li>
            <li>Pro csomag: 450 EUR / hó</li>
            <li>Egyedi projektek: egyedi megállapodás alapján</li>
          </ul>
          <p>
            A díjak nettó összegek, amelyekhez az ÁFA törvény szerinti adó
            adódik hozzá. A fizetés a számlán feltüntetett határidőre,
            banki átutalással esedékes.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            5. Szellemi tulajdon
          </h2>
          <p>
            Az elkészült tartalmak (képek, videók, kampányanyagok) a megrendelő
            tulajdonát képezik, és szabadon felhasználhatók kereskedelmi célokra.
            A HRVT Studio által alkalmazott módszertanok, promptok, AI workflow-k
            és szoftverek a Szolgáltató szellemi tulajdonát képezik, és nem
            másolhatók, nem terjeszthetők.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            6. Felelősség korlátozása
          </h2>
          <p>
            A Szolgáltató az általa leszállított tartalmak minőségéért helytáll.
            Nem vállal azonban felelősséget a tartalmak hirdetési platformokon
            elért eredményeiért (konverzió, elérés, értékesítés), mivel ezek
            számos, a Szolgáltatótól független tényezőtől függnek. Az AI-generált
            képek és videók elkészülte előtt a tartalom jóváhagyása a megrendelő
            felelőssége.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            7. Előfizetés felmondása
          </h2>
          <p>
            A havi előfizetés bármikor, indokolás nélkül felmondható a következő
            számlázási időszak kezdete előtt. A már megkezdett időszakra eső díj
            nem kerül visszatérítésre. A felmondási szándékot e-mailben kell
            jelezni az info@hrvtstudio.hu címen.
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
            Panasz esetén kérjük, írjon az info@hrvtstudio.hu e-mail címre. A
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
            érintetteket. A módosítás a közzétételétől számított 15. napon lép
            hatályba.
          </p>

          <p className="text-sm text-foreground-muted/60 pt-4">
            Utolsó frissítés: 2026. május 19.
          </p>
        </div>
      </div>
    </div>
  );
}
