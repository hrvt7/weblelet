import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató — WebLelet",
  description: "A WebLelet adatvédelmi tájékoztatója.",
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
            A WebLelet (továbbiakban: Szolgáltató) elkötelezett a felhasználók
            személyes adatainak védelme mellett. Jelen adatvédelmi tájékoztató
            ismerteti, hogyan gyűjtjük, használjuk és védjük az Ön adatait.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            1. Adatkezelő
          </h2>
          <p>
            Név: WebLelet
            <br />
            Email: info@weblelet.hu
          </p>

          <h2 className="text-xl font-bold text-foreground">
            2. Gyűjtött adatok
          </h2>
          <p>
            Az audit kérése során az alábbi adatokat gyűjtjük: cégnév, weboldal
            URL, email cím, telefonszám (opcionális), időpont preferencia
            (opcionális).
          </p>

          <h2 className="text-xl font-bold text-foreground">
            3. Adatkezelés célja
          </h2>
          <p>
            Az összegyűjtött adatokat kizárólag az audit szolgáltatás
            teljesítéséhez és a kapcsolatfelvételhez használjuk. Adatait harmadik
            félnek nem adjuk ki.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            4. Adatmegőrzés
          </h2>
          <p>
            A személyes adatokat a szolgáltatás teljesítését követően legfeljebb
            1 évig őrizzük meg, kivéve ha jogszabály hosszabb megőrzést ír elő.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            5. Az Ön jogai
          </h2>
          <p>
            Ön jogosult adataihoz hozzáférni, azok módosítását vagy törlését
            kérni az info@weblelet.hu email címen.
          </p>

          <p className="text-sm text-foreground-muted/60">
            Utolsó frissítés: 2026. március
          </p>
        </div>
      </div>
    </div>
  );
}
