"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Mennyibe kerül?",
    a: "Az AUDIT csomag 0,99 € — komplett diagnózis PDF riporttal, 96 szempont, 4 dimenzió. A PRO csomag egyedi árazású, a weboldalad és az igényeid alapján.",
  },
  {
    q: "Mi az a GEO és miért fontos?",
    a: "A GEO (Generative Engine Optimization) azt vizsgálja hogyan jelenik meg a weboldalad az AI keresőkben — ChatGPT, Perplexity, Gemini, Google AI Mode. 2026-ban a keresések 37%-a AI eszközökkel indul, és ez gyorsan nő. Ha a weboldalad nincs felkészítve, a következő generáció nem talál rád.",
  },
  {
    q: "Miben más ez mint a SEMrush vagy Ahrefs?",
    a: "Azok technikai SEO toolok. Mi 4 dimenzióban elemzünk: keresőoptimalizálás, AI keresők, marketing, jogi megfelelőség. Ráadásul nem csak hibákat keresünk — kész megoldásokat adunk.",
  },
  {
    q: "Az elemzés kiterjed a magyar jogszabályokra?",
    a: "Igen. 5 jogi keretrendszert vizsgálunk: GDPR (14 pont), magyar e-kereskedelmi jog (8 pont), akadálymentesség (10 pont), fizetési biztonság (6 pont), email szabályozás (5 pont) — összesen 43 szempont.",
  },
  {
    q: "Mennyi ideig tart?",
    a: "Az AUDIT csomag 30 másodperc alatt elkészül. A PRO csomag 1-3 munkanap, mert egyedi elemzést és konzultációt tartalmaz.",
  },
  {
    q: "Mi történik az audit után?",
    a: "Kapsz egy PDF riportot amiben minden megállapítás jelölve van (TÉNY / BECSLÉS / JAVASLAT), prioritási sorrendben. A PRO csomagban személyes konzultáción beszéljük meg a teendőket.",
  },
  {
    q: "Használhatom az ügyfeleimnek is?",
    a: "Igen. A rendszer white-label módban is működik — a riport a te céged nevével, logójával és színeivel készül.",
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
