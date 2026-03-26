"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Hogyan működik a demo?",
    a: "Megadod a weboldal URL-jét, mi lefuttatjuk a rendszert és elküldjük az eredményt emailben. Utána egyeztetünk egy 30 perces hívást ahol végigmegyünk a riporton.",
  },
  {
    q: "Kinek szól ez a rendszer?",
    a: "Marketing ügynökségeknek akik gyorsabban akarnak auditot csinálni az ügyfeleiknek, és vállalkozásoknak akik szeretnék tudni hol áll a weboldaluk a Google-ben és az AI keresőkben.",
  },
  {
    q: "Mi az a GEO és miért fontos?",
    a: "A GEO (Generative Engine Optimization) azt jelenti hogy a weboldalad hogyan jelenik meg az AI keresőkben — ChatGPT, Perplexity, Gemini. 2026-ban a keresések jelentős része AI keresőkből indul. Ha ott nem jelensz meg, láthatatlan vagy a felhasználók számára.",
  },
  {
    q: "Miben más ez mint egy SEMrush vagy Ahrefs?",
    a: "Azok a toolok technikai SEO-ra fókuszálnak. Mi négy dimenzióban elemzünk: keresőoptimalizálás, marketing, jogi megfelelőség és üzleti potenciál. Ráadásul nem csak hibákat keresünk — kész megoldásokat adunk (strukturált adat kód, llms.txt) és minden megállapítás jelölve van: tény, feltételezés vagy javaslat.",
  },
  {
    q: "Mennyibe kerül?",
    a: "Az árazás az együttműködés formájától függ — egyedi projekt, havi megbízás, vagy rendszeres audit csomag. Az első demo audit ingyenes. Írj a részletekért.",
  },
  {
    q: "Az elemzés kiterjed a magyar jogszabályokra is?",
    a: "Igen. A rendszer 5 jogi keretrendszert vizsgál: GDPR adatvédelem (14 pont), magyar elektronikus kereskedelmi és adatvédelmi törvény (8 pont), akadálymentesség (10 pont), fizetési biztonság (6 pont) és e-mail szabályozás (5 pont). Összesen 43 szempont — és minden hiányosság mellé konkrét javítási javaslatot ad.",
  },
  {
    q: "Használhatom az ügyfeleimnek is?",
    a: "Igen. A rendszer white-label módban is működik — a riport a te céged nevével, logójával és színeivel készül. Az ügyfeled a te termékedet látja.",
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
