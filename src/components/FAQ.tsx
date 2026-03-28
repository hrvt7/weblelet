"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Mennyibe kerül?",
    a: "Az GEO ALAP csomag 0,99 € — komplett GEO audit PDF riporttal, 6 dimenzió, 14 AI robot ellenőrzés, valódi Perplexity mérés. A GEO PRO csomag egyedi árazású, a weboldalad és az igényeid alapján.",
  },
  {
    q: "Mi az a GEO és miért fontos?",
    a: "A GEO (Generative Engine Optimization) azt vizsgálja hogyan jelenik meg a weboldalad az AI keresőkben — ChatGPT, Perplexity, Gemini, Google AI Mode. 2026-ban a keresések 37%-a AI eszközökkel indul, és ez gyorsan nő. Ha a weboldalad nincs felkészítve, a következő generáció nem talál rád.",
  },
  {
    q: "Miben más ez mint a SEMrush vagy Ahrefs?",
    a: "Azok technikai SEO toolok. Mi 6 GEO dimenzióban elemzünk: AI citability, brand authority, tartalom minőség, technikai alapok, strukturált adatok, platform optimalizálás. Ráadásul valódi Perplexity méréssel dolgozunk — nem becsüljük, megmérjük.",
  },
  {
    q: "Mi az a GEO score és hogyan számítják?",
    a: "A GEO score 100 pontos rendszer, Princeton/IIT Delhi KDD '24 kutatás alapján. 6 dimenzió súlyozott átlaga: AI Citability & Láthatóság (25%), Márkaautoritás (20%), Tartalom Minőség & E-E-A-T (20%), Technikai Alapok (15%), Strukturált Adatok (10%), Platform Optimalizálás (10%).",
  },
  {
    q: "Mennyi ideig tart?",
    a: "A GEO ALAP csomag 2 perc alatt elkészül. A GEO PRO csomag 1-3 munkanap, mert mélyebb elemzést — E-E-A-T audit, versenytárs GEO összehasonlítás, multi-platform readiness — is tartalmaz.",
  },
  {
    q: "Mi történik az audit után?",
    a: "Kapsz egy PDF riportot amiben minden megállapítás jelölve van (TÉNY / BECSLÉS / JAVASLAT), prioritási sorrendben. A GEO PRO csomagban ezen felül kész schema markup kódot, llms.txt fájlt és teljes implementációs prioritáslistát is kapsz.",
  },
  {
    q: "Használhatom az ügyfeleimnek is?",
    a: "Igen. Ha ügynökség vagy, vagy ügyfélnek dolgozol, a riportot egyszerűen továbbküldheted — minden megállapítás konkrét, érthető és azonnal használható.",
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
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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
