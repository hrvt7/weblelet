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
