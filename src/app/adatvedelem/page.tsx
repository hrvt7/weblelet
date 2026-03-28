import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató — WebLelet",
  description: "A WebLelet adatvédelmi tájékoztatója.",
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
            A WebLelet (továbbiakban: Szolgáltató, Adatkezelő) elkötelezett a
            felhasználók személyes adatainak védelme mellett. Jelen tájékoztató
            az EU 2016/679 számú általános adatvédelmi rendelete (GDPR) és a
            magyar 2011. évi CXII. törvény (Infotv.) alapján készült.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            1. Adatkezelő adatai
          </h2>
          <p>
            Név: Horváth Ádám (WebLelet)
            <br />
            Székhely: 9700 Szombathely
            <br />
            Email: info@weblelet.hu
          </p>

          <h2 className="text-xl font-bold text-foreground">
            2. Az adatkezelés jogalapja
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Kapcsolatfelvételi űrlap:</strong> az érintett
              hozzájárulása (GDPR 6. cikk (1) bek. a) pont)
            </li>
            <li>
              <strong>Szolgáltatás teljesítése:</strong> szerződés teljesítése
              (GDPR 6. cikk (1) bek. b) pont)
            </li>
            <li>
              <strong>Analitikai sütik (Google Analytics):</strong> az érintett
              előzetes hozzájárulása (GDPR 6. cikk (1) bek. a) pont) — a
              mérés kizárólag a cookie consent elfogadása után indul el
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground">
            3. Gyűjtött adatok
          </h2>
          <p>
            Az audit kérése során az alábbi adatokat gyűjtjük: cégnév, weboldal
            URL, email cím, telefonszám (opcionális), időpont preferencia
            (opcionális).
          </p>

          <h2 className="text-xl font-bold text-foreground">
            4. Adatkezelés célja
          </h2>
          <p>
            Az összegyűjtött adatokat kizárólag az audit szolgáltatás
            teljesítéséhez és a kapcsolatfelvételhez használjuk. Adatait
            harmadik félnek nem adjuk ki, kivéve a jelen tájékoztatóban
            felsorolt adatfeldolgozókat.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            5. Sütik (cookie-k)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border-light rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-surface-card text-foreground">
                  <th className="text-left p-3 border-b border-border-light font-semibold">
                    Süti neve
                  </th>
                  <th className="text-left p-3 border-b border-border-light font-semibold">
                    Szolgáltató
                  </th>
                  <th className="text-left p-3 border-b border-border-light font-semibold">
                    Cél
                  </th>
                  <th className="text-left p-3 border-b border-border-light font-semibold">
                    Lejárat
                  </th>
                  <th className="text-left p-3 border-b border-border-light font-semibold">
                    Típus
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-border-light">
                    weblelet-cookie-consent
                  </td>
                  <td className="p-3 border-b border-border-light">
                    WebLelet (first-party)
                  </td>
                  <td className="p-3 border-b border-border-light">
                    Cookie hozzájárulás tárolása
                  </td>
                  <td className="p-3 border-b border-border-light">
                    Állandó (localStorage)
                  </td>
                  <td className="p-3 border-b border-border-light">
                    Szükséges
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-border-light">
                    _ga, _ga_*
                  </td>
                  <td className="p-3 border-b border-border-light">
                    Google LLC
                  </td>
                  <td className="p-3 border-b border-border-light">
                    Látogatottság mérés (Google Analytics 4, ID:
                    G-0Z0X4D2K2J)
                  </td>
                  <td className="p-3 border-b border-border-light">2 év</td>
                  <td className="p-3 border-b border-border-light">
                    Analitikai — csak hozzájárulás után
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground">
            6. Harmadik fél adatfeldolgozók
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google LLC</strong> (1600 Amphitheatre Parkway, Mountain
              View, CA 94043, USA) — Google Analytics 4 analitika. Adatvédelmi
              szabályzat:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                policies.google.com/privacy
              </a>
            </li>
            <li>
              <strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA
              91789, USA) — tárhelyszolgáltatás és analitika (Vercel Analytics,
              Speed Insights)
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground">
            7. Adatmegőrzés
          </h2>
          <p>
            A személyes adatokat a szolgáltatás teljesítését követően legfeljebb
            1 évig őrizzük meg, kivéve ha jogszabály (pl. számviteli törvény)
            hosszabb megőrzést ír elő. Az analitikai adatokat a Google 14
            hónapig tárolja.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            8. Az Ön jogai (GDPR 15–22. cikk)
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Hozzáférési jog — tájékoztatás kérése a kezelt adatokról</li>
            <li>Helyesbítéshez való jog — pontatlan adatok javítása</li>
            <li>
              Törléshez való jog (&quot;elfeledtetés&quot;) — adatok törlésének
              kérése
            </li>
            <li>
              Adathordozhatósághoz való jog — adatok géppel olvasható formátumban
            </li>
            <li>Tiltakozáshoz való jog — adatkezelés elleni tiltakozás</li>
            <li>
              Hozzájárulás visszavonása — bármikor, a cookie consent banneren
              keresztül vagy emailben
            </li>
          </ul>
          <p>
            Jogait az info@weblelet.hu email címen gyakorolhatja. 30 napon belül
            válaszolunk.
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
            módosítás időpontját az alábbiakban jelöljük.
          </p>

          <p className="text-sm text-foreground-muted/60 pt-4">
            Utolsó frissítés: 2026. március 28.
          </p>
        </div>
      </div>
    </div>
  );
}
