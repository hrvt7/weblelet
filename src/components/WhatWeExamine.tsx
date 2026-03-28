import FadeIn from "./FadeIn";

const columns = [
  {
    title: "Keresőoptimalizálás (SEO)",
    count: "23 szempont",
    color: "text-primary",
    bgColor: "bg-primary/8",
    borderAccent: "border-t-primary",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    items: [
      "Megtalálnak a Google-ben? Canonical URL, sitemap, meta adatok, heading struktúra, kép alt textek",
      "Technikai SEO: betöltési sebesség, mobilbarát design, HTTPS, robots.txt",
      "Strukturált adatok (schema markup) elemzése és kész kód generálás",
      "Tartalom minőség és keresési szándék illeszkedés",
    ],
  },
  {
    title: "AI Keresők (GEO)",
    count: "30 szempont",
    color: "text-accent",
    bgColor: "bg-accent/8",
    borderAccent: "border-t-accent",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </svg>
    ),
    items: [
      "Megtalálnak a ChatGPT, Perplexity, Gemini? AI crawler hozzáférés elemzés",
      "AI idézhetőségi pontszám — mennyire hivatkoznak rád az AI válaszokban",
      "llms.txt fájl generálás — hogy az AI keresők pontosan megértsék mit csinálsz",
      "Platform-specifikus readiness: Google AI Mode, Bing Copilot, Claude",
    ],
  },
  {
    title: "Marketing Hatékonyság",
    count: "18 szempont",
    color: "text-success",
    bgColor: "bg-success/8",
    borderAccent: "border-t-success",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    items: [
      "A weboldal eladja a terméket? CTA gombok, értékajánlat, social proof elemzés",
      "Konverziós útvonal vizsgálat — hány kattintás a vásárlásig/kapcsolatfelvételig",
      "Bizalomépítő elemek: vélemények, referenciák, garancia, elérhetőség",
      "Analytics beállítás ellenőrzés — méred egyáltalán ami számít?",
    ],
  },
  {
    title: "Jogi Megfelelőség",
    count: "43 szempont · 5 keretrendszer",
    color: "text-purple-600",
    bgColor: "bg-purple-600/8",
    borderAccent: "border-t-purple-600",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    items: [
      "GDPR adatvédelem (14 pont): sütitájékoztató, adatkezelési szabályzat, érintetti jogok",
      "Magyar e-kereskedelmi jog (8 pont): impresszum, ÁSZF, NAIH, e-kereskedelmi törvény",
      "Akadálymentesség (10 pont): kép alt textek, kontraszt, billentyűzetes kezelés",
      "Fizetési biztonság (6 pont) + Email szabályozás (5 pont)",
    ],
  },
];

export default function WhatWeExamine() {
  return (
    <section id="mit-vizsgalunk" className="py-24 sm:py-32 bg-surface-blue relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Mit vizsgálunk
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              4 dimenzió,{" "}
              <span className="text-highlight">96 szempont</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {columns.map((col, i) => (
            <FadeIn key={col.title} delay={i * 0.15}>
              <div className={`rounded-2xl border border-border border-t-[3px] ${col.borderAccent} bg-surface-card p-8 lg:p-9 h-full card-hover`}>
                <div className={`h-13 w-13 rounded-2xl ${col.bgColor} ${col.color} flex items-center justify-center mb-5`}>
                  {col.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1 tracking-[-0.01em]">
                  {col.title}
                </h3>
                <p className={`text-sm font-semibold ${col.color} mb-6`}>
                  {col.count}
                </p>
                <ul className="space-y-3.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9rem] text-foreground-secondary leading-snug">
                      <svg
                        className={`mt-0.5 shrink-0 ${col.color}`}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
