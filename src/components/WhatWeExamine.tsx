import FadeIn from "./FadeIn";

const columns = [
  {
    title: "GEO/SEO Elemzés",
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
      "AI keresőkben való láthatóság (ChatGPT, Perplexity, Gemini)",
      "Google keresőoptimalizálás",
      "Schema markup és strukturált adatok",
      "Technikai hibák feltárása",
      "Tartalom minőség és hitelesség (E-E-A-T)",
      "Kész megoldás: schema kód amit a fejlesztőd beilleszthet",
    ],
  },
  {
    title: "Marketing Elemzés",
    count: "18 szempont",
    color: "text-accent",
    bgColor: "bg-accent/8",
    borderAccent: "border-t-accent",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    items: [
      "Tartalom és üzenetek hatékonysága",
      "Konverzió optimalizáció (hívásra ösztönzés, űrlapok)",
      "Versenytárs összehasonlítás",
      "Brand és bizalomépítés",
      "Növekedési stratégia",
    ],
  },
  {
    title: "Üzleti Potenciál",
    count: "12 szempont — Teljes WebLelet csomagban",
    color: "text-success",
    bgColor: "bg-success/8",
    borderAccent: "border-t-success",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    items: [
      "Döntéshozók elérhetősége",
      "Üzleti lehetőség értékelés",
      "Versenykörnyezet elemzés",
      "Megkeresési stratégia",
    ],
  },
];

export default function WhatWeExamine() {
  return (
    <section className="py-24 sm:py-32 bg-surface-blue relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Részletes elemzés
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Amit az audit <span className="text-highlight">tartalmaz</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
