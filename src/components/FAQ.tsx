"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Kell-e előre időpontot foglalni?",
    a: "Igen, kérjük hívjon a +36 30 123 4567 telefonszámon. A prevenciós időben érkező pácienseket előnyben részesítjük.",
  },
  {
    q: "TB-támogatott a rendelés?",
    a: "Igen, rendelőnk NEAK szerződéssel működik. Az alapellátás társadalombiztosítás keretében igénybe vehető.",
  },
  {
    q: "Milyen gyakran kell szűrővizsgálatra járni?",
    a: "Félévente javasolt a fogászati kontroll. A korai felismerés a leghatékonyabb megelőzés — sok probléma tünetmentes kezdetben.",
  },
  {
    q: "Fáj a kezelés?",
    a: "Modern érzéstelenítési módszerekkel dolgozunk, a legtöbb kezelés fájdalommentesen elvégezhető. Kérje bátran az érzéstelenítést.",
  },
  {
    q: "Gyermekeket is fogadnak?",
    a: "Igen, gyermekfogászati ellátást is nyújtunk. Barátságos, játékos környezetben ismerkedhetnek meg a fogászattal.",
  },
  {
    q: "Mi a teendő sürgős fogfájás esetén?",
    a: "Hívjon a rendelési időben a +36 30 123 4567 számon, és igyekszünk mielőbb ellátni.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-surface-alt relative">
      <div className="absolute inset-0 dot-grid opacity-[0.12] -z-10" />

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
