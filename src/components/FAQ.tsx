"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Mennyibe kerül egy weboldal audit?",
    a: "A GEO ALAP csomag 0,99 € — komplett GEO audit PDF riporttal, 6 dimenzió, 14 AI robot ellenőrzés, valódi Perplexity mérés, SEO elemzés. A GEO PRO csomag egyedi árazású, a weboldalad és az igényeid alapján.",
  },
  {
    q: "Mi az a GEO és miért fontos 2026-ban?",
    a: "A GEO (Generative Engine Optimization) azt vizsgálja, hogyan jelenik meg a weboldalad az AI keresőkben — ChatGPT, Perplexity, Gemini, Google AI Mode. 2026-ban a keresések 37%-a AI eszközökkel indul, és ez gyorsan nő. Az AI keresőoptimalizálás nélkül láthatatlan maradsz az új generáció számára.",
  },
  {
    q: "Mi a különbség a SEO és a GEO között?",
    a: "A hagyományos SEO (keresőoptimalizálás) a Google organikus találataira fókuszál. A GEO az AI keresőkre optimalizál — ChatGPT, Perplexity, Gemini. 2026-ban mindkettő kell: a SEO a klasszikus forgalomhoz, a GEO az AI válaszokban való megjelenéshez. A WebLelet mindkettőt méri egy auditban.",
  },
  {
    q: "Hogyan kerülhet be a weboldalam a ChatGPT válaszaiba?",
    a: "A ChatGPT-ben való megjelenéshez kell: GPTBot crawler engedélyezése a robots.txt-ben, llms.txt fájl létrehozása, strukturált adatok (schema markup) beépítése, és E-E-A-T jelek erősítése (szerzői információk, adatok, források). A WebLelet GEO audit pontosan ezeket vizsgálja és konkrét javítási tervet ad.",
  },
  {
    q: "Miért nem találnak rám a Google-ben?",
    a: "A leggyakoribb okok: hiányzó vagy hibás meta címkék (title, description), nincs sitemap.xml, rossz robots.txt beállítás, lassú betöltés, nem mobilbarát design, hiányzó schema markup, gyenge tartalom. A WebLelet SEO audit ezeket mind feltárja és priorizált javítási tervet ad.",
  },
  {
    q: "Miben más ez mint a SEMrush vagy Ahrefs?",
    a: "A SEMrush és Ahrefs hagyományos SEO eszközök. A WebLelet az AI keresőkre is elemez: 6 GEO dimenzió, valódi Perplexity mérés, AI robot hozzáférés vizsgálat, llms.txt ellenőrzés. A klasszikus SEO audit mellett megkapod az AI láthatósági képet is.",
  },
  {
    q: "Mi az a GEO score és hogyan számítják?",
    a: "A GEO score 100 pontos rendszer, Princeton/IIT Delhi KDD '24 kutatás alapján. 6 dimenzió súlyozott átlaga: AI Citability & Láthatóság (25%), Márkaautoritás (20%), Tartalom Minőség & E-E-A-T (20%), Technikai Alapok (15%), Strukturált Adatok (10%), Platform Optimalizálás (10%).",
  },
  {
    q: "Mennyi ideig tart a weboldal elemzés?",
    a: "A GEO ALAP csomag 2 perc alatt elkészül — automatizált AI elemzés. A GEO PRO csomag 1-3 munkanap, mert mélyebb elemzést tartalmaz: E-E-A-T audit, versenytárs GEO összehasonlítás, multi-platform AI readiness vizsgálat.",
  },
  {
    q: "Mi történik az audit után?",
    a: "Kapsz egy részletes PDF riportot amiben minden megállapítás jelölve van (TÉNY / BECSLÉS / JAVASLAT), prioritási sorrendben. A GEO PRO csomagban ezen felül kész schema markup kódot, llms.txt fájlt és teljes implementációs prioritáslistát is kapsz.",
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
