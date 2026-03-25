"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Tényleg ingyenes az első diagnózis?",
    a: "Igen. Az 5 oldalas diagnózist ingyen elkészítjük és emailben elküldjük. Nincs apróbetűs rész, nincs rejtett költség.",
  },
  {
    q: "Mit tudok kezdeni a diagnózissal?",
    a: "A diagnózisban minden probléma mellett le van írva: ki csinálja meg (a fejlesztőd vagy mi), mennyi idő, mennyibe kerül. Ha van webfejlesztőd, odaadod neki a technikai mellékletet — minden le van benne írva. Ha nincs, mi is meg tudjuk csinálni.",
  },
  {
    q: "Honnan tudjátok ezeket a weboldalam alapján?",
    a: "A rendszer a weboldal forráskódját, a keresőmotorok és AI keresők viselkedését, valamint a nyilvánosan elérhető adatokat (Google értékelések, versenytársak) elemzi. Nem kell jelszó és nem férünk hozzá belső adatokhoz.",
  },
  {
    q: "Mi az a GEO és miért fontos?",
    a: "A GEO (Generative Engine Optimization) azt jelenti, hogy a weboldalad hogyan jelenik meg az AI keresőkben — amikor valaki megkérdezi a ChatGPT-t vagy a Google AI-t. 2025-ben ez már ugyanolyan fontos mint a hagyományos Google keresés.",
  },
  {
    q: "Mennyivel jobb ez mint egy ingyenes online SEO checker?",
    a: "Az ingyenes checkerek (pl. HubSpot Website Grader) 10-15 technikai szempontot vizsgálnak. Mi 53 szempontot nézünk 3 dimenzióban, és nem csak hibákat keresünk — kész megoldásokat is adunk (kódot, fájlokat) amit a fejlesztőd azonnal használhat.",
  },
  {
    q: "Mi történik az ingyenes diagnózis után?",
    a: "Semmi, hacsak nem szeretnéd a teljes elemzést. Ha igen, kitöltesz egy rövid adatlapot (forgalom, célok, büdzsé) és mi elkészítjük a 18 oldalas részletes riportot + 30 perc konzultációt tartunk ahol végigmegyünk az eredményeken.",
  },
  {
    q: "Hogyan fizethetek?",
    a: "Banki átutalással, a diagnózis elkészülte után. Számlát küldünk emailben.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-surface-warm relative">
      <div className="absolute inset-0 dot-grid opacity-[0.15] -z-10" />

      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14 max-w-xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              GYIK
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Gyakran ismételt{" "}
              <span className="text-highlight">kérdések</span>
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div
                className={`rounded-2xl border bg-surface-card overflow-hidden transition-all duration-200 ${
                  openIndex === i ? "border-primary/20 shadow-md" : "border-border hover:border-primary/10"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="flex w-full items-center justify-between px-7 py-5 text-left cursor-pointer"
                >
                  <span className="font-heading text-[1.05rem] font-semibold text-foreground pr-4 tracking-[-0.01em]">
                    {faq.q}
                  </span>
                  <div
                    className={`shrink-0 h-7 w-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
                      openIndex === i ? "bg-primary/10 text-primary rotate-180" : "bg-surface text-foreground-muted"
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>
                {openIndex === i && (
                  <div className="px-7 pb-6">
                    <p className="text-[0.95rem] text-foreground-secondary leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
