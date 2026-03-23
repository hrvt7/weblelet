"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Tényleg ingyenes?",
    a: "Igen. Az ingyenes lelet 2 oldalas összefoglalót tartalmaz a legfontosabb problémákról. Semmilyen kötelezettséggel nem jár, és nem kell bankkártya.",
  },
  {
    q: "Honnan tudjátok ezeket a weboldalam alapján?",
    a: "Pontosan azt elemezzük amit a világ — a Google, a ChatGPT, és a potenciális ügyfeleid — látnak rólad. Nem kell jelszó vagy hozzáférés. Kívülről vizsgáljuk az oldalad, ahogy egy új ügyfeled tenné.",
  },
  {
    q: "Mi az a GEO/SEO és miért fontos?",
    a: "A GEO (Generative Engine Optimization) azt jelenti, hogy a weboldal hogyan jelenik meg az AI keresőkben — ChatGPT, Google AI, Perplexity. 2026-ban az emberek egyre többen keresnek AI-val. Ha ott nem jelensz meg, ügyfeleket veszítesz.",
  },
  {
    q: "Mennyivel jobb ez mint ha egy ügynökséget bízok meg?",
    a: "Gyorsabb (48 óra vs. 5-10 nap), olcsóbb (49.900 Ft vs. 200-600.000 Ft), és tartalmazza az AI keresők elemzését is, amit a legtöbb magyar ügynökség nem kínál.",
  },
  {
    q: "Mi történik az audit után?",
    a: "Megkapod a riportot, és ha szeretnéd, 30 percben átbeszéljük személyesen vagy online. Utána te döntöd el mit csinálsz: megcsinálod magad, odaadod a webfejlesztődnek, vagy megbízol minket.",
  },
  {
    q: "Hogyan fizetünk?",
    a: "Az ingyenes lelet díjmentes. A Teljes WebLelet-ért átutalással fizetsz (számla + szállítólevél). Bankkártya hamarosan elérhető.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-background-alt">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Gyakran ismételt{" "}
              <span className="text-primary">kérdések</span>
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="rounded-xl border border-border bg-white overflow-hidden">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-foreground pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`shrink-0 text-foreground-muted transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-foreground-muted leading-relaxed">
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
