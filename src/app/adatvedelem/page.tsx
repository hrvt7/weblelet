import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató — HRVT Studio",
  description: "A HRVT Studio adatvédelmi tájékoztatója.",
  alternates: {
    canonical: "https://weblelet.hu/adatvedelem",
  },
};

export default function Adatvedelem() {
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
          Adatvédelmi tájékoztató
        </h1>

        <div className="max-w-none text-foreground-secondary space-y-6 leading-relaxed">
          <p>
            A HRVT Studio (továbbiakban: Szolgáltató, Adatkezelő) elkötelezett a
            felhasználók személyes adatainak védelme mellett. Jelen tájékoztató
            az EU 2016/679 számú általános adatvédelmi rendelete (GDPR) és a
            magyar 2011. évi CXII. törvény (Infotv.) alapján készült.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            1. Adatkezelő adatai
          </h2>
          <p>
            Név: Horváth Ádám
            <br />
            Székhely: Szombathely
            <br />
            Email: info@hrvtstudio.hu
          </p>

          <h2 className="text-xl font-bold text-foreground">
            2. Az adatkezelés jogalapja
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Kapcsolatfelvétel (e-mail):</strong> az érintett
              hozzájárulása (GDPR 6. cikk (1) bek. a) pont)
            </li>
            <li>
              <strong>Szolgáltatás teljesítése:</strong> szerződés teljesítése
              (GDPR 6. cikk (1) bek. b) pont)
            </li>
            <li>
              <strong>Weboldal-analitika (Vercel Analytics):</strong> jogos
              érdek (GDPR 6. cikk (1) bek. f) pont) — cookie-mentes, személyes
              adatot nem gyűjt, IP-cím nem tárolódik
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground">
            3. Gyűjtött adatok
          </h2>
          <p>
            Kapcsolatfelvétel során (e-mail útján) az alábbi adatok kerülhetnek
            megadásra: név, email cím, cégnév, weboldal URL (opcionális),
            a megkeresés tartalma. Ezeket az adatokat kizárólag a kapcsolatfelvétel
            megválaszolásához és a szolgáltatás teljesítéséhez használjuk.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            4. Adatkezelés célja
          </h2>
          <p>
            Az összegyűjtött adatokat kizárólag az előfizetéses tartalom
            szolgáltatás teljesítéséhez és az ügyféllel való kommunikációhoz
            használjuk. Adatait harmadik félnek nem adjuk ki, kivéve a jelen
            tájékoztatóban felsorolt adatfeldolgozókat.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            5. Sütik (cookie-k)
          </h2>
          <p>
            A weblelet.hu weboldal <strong>nem alkalmaz</strong> harmadik féltől
            származó tracking cookie-t vagy Google Analytics sütit. A weboldal
            látogatottságát a Vercel Analytics szolgáltatás méri, amely
            cookie-mentes technológiát alkalmaz — IP-cím, eszközazonosító vagy
            személyes adat nem kerül tárolásra.
          </p>
          <p>
            Egyetlen első féltől származó adat kerül mentésre a böngészőben:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-surface-card text-foreground">
                  <th className="text-left p-3 border-b border-border font-semibold">Adat neve</th>
                  <th className="text-left p-3 border-b border-border font-semibold">Hol tárolódik</th>
                  <th className="text-left p-3 border-b border-border font-semibold">Cél</th>
                  <th className="text-left p-3 border-b border-border font-semibold">Típus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3">hrvt-cookie-consent</td>
                  <td className="p-3">localStorage (böngésző)</td>
                  <td className="p-3">Tájékoztató megjelenítés állapota</td>
                  <td className="p-3">Szükséges, nem süti</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground">
            6. Adatfeldolgozók
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA
              91789, USA) — tárhelyszolgáltatás és cookie-mentes weboldal-analitika
              (Vercel Analytics, Speed Insights). Adatvédelmi szabályzat:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                vercel.com/legal/privacy-policy
              </a>
            </li>
            <li>
              <strong>Google LLC</strong> — Gmail levelezés útján érkező
              kapcsolatfelvételek esetén a Google adatfeldolgozónak minősül.
              Adatvédelmi szabályzat:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                policies.google.com/privacy
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground">
            7. Adatmegőrzés
          </h2>
          <p>
            A kapcsolatfelvételi e-maileket és az ügyfélkommunikációt a
            szolgáltatás megszűnésétől számított 1 évig őrizzük meg, kivéve ha
            jogszabály (pl. számviteli törvény) hosszabb megőrzést ír elő.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            8. Az Ön jogai (GDPR 15–22. cikk)
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Hozzáférési jog — tájékoztatás kérése a kezelt adatokról</li>
            <li>Helyesbítéshez való jog — pontatlan adatok javítása</li>
            <li>
              Törléshez való jog (&quot;elfeledtetés&quot;) — adatok törlésének kérése
            </li>
            <li>
              Adathordozhatósághoz való jog — adatok géppel olvasható formátumban
            </li>
            <li>Tiltakozáshoz való jog — adatkezelés elleni tiltakozás</li>
          </ul>
          <p>
            Jogait az info@hrvtstudio.hu email címen gyakorolhatja. 30 napon
            belül válaszolunk.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            9. Jogorvoslati lehetőségek
          </h2>
          <p>
            Amennyiben úgy ítéli meg, hogy adatainak kezelése sérti a GDPR-t
            vagy az Infotv.-t, panaszt nyújthat be:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>
                Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)
              </strong>
              <br />
              Cím: 1055 Budapest, Falk Miksa utca 9–11.
              <br />
              Telefon: +36 (1) 391-1400
              <br />
              Email: ugyfelszolgalat@naih.hu
              <br />
              Weboldal:{" "}
              <a
                href="https://naih.hu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                naih.hu
              </a>
            </li>
            <li>
              Bírósághoz fordulhat a lakóhelye vagy tartózkodási helye szerint
              illetékes törvényszéknél.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground">
            10. Tájékoztató módosítása
          </h2>
          <p>
            A Szolgáltató fenntartja a jogot jelen tájékoztató módosítására. A
            módosítás időpontját és tartalmát a weboldalon közzétesszük.
          </p>

          <p className="text-sm text-foreground-muted/60 pt-4">
            Utolsó frissítés: 2026. május 19.
          </p>
        </div>
      </div>
    </div>
  );
}
