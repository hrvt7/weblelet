"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Tényleg nem látszik rajta hogy AI?",
    a: "Szolgáltatásunk lényege a stúdió minőség. Képeinket rendszeresen veszik valódi fotónak. Az eredmény számít, nem az eszköz — a végeredmény ugyanolyan profi, mint egy klasszikus stúdiófotózás.",
  },
  {
    q: "Mennyi idő alatt készül el?",
    a: "Általában 3-5 munkanap az átfutás. Sürgős esetben 24-48 óra is megoldható, prémium gyorsítási díjjal. A pontos időt mindig előre egyeztetjük.",
  },
  {
    q: "Milyen iparágaknak ajánljátok?",
    a: "Fashion, fitness, étterem, szépségipar, e-commerce, ingatlan, automotive — bármely vizuális tartalmat igénylő vállalkozásnak. Ha kételkedsz, küldj egy üzenetet és megbeszéljük.",
  },
  {
    q: "Hogyan indulhatunk el?",
    a: "Küldj egy üzenetet az info@hrvtstudio.hu címre, és ingyenesen elkészítünk egy demó képet a termékedről vagy szolgáltatásodról. Csak utána döntesz, hogy mi a következő lépés.",
  },
  {
    q: "Van szerződéses kötelezettség?",
    a: "Nincs. Havi előfizetés, bármikor lemondható — semmi minimum időtartam, semmi rejtett kötelezettség. Ha nem vagy elégedett, simán lemondod a következő hónaptól.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.3] -z-10" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl -z-10" />

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
                className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                  openIndex === i
                    ? "border-primary/30 shadow-lg shadow-primary/10 bg-surface-card"
                    : "border-border bg-surface-card hover:border-primary/15"
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
                      openIndex === i ? "bg-primary/20 text-primary rotate-180" : "bg-surface text-foreground-muted"
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
