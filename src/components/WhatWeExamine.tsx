import FadeIn from "./FadeIn";

const columns = [
  {
    title: "GEO/SEO Elemzés",
    count: "23 szempont",
    color: "text-primary",
    bgColor: "bg-primary/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    items: [
      "AI keresőkben való láthatóság (ChatGPT, Perplexity, Gemini)",
      "Google keresőoptimalizálás",
      "Schema markup és strukturált adatok",
      "Technikai SEO hibák",
      "Tartalom minőség (E-E-A-T)",
    ],
  },
  {
    title: "Marketing Elemzés",
    count: "18 szempont",
    color: "text-accent",
    bgColor: "bg-accent/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    items: [
      "Tartalom és üzenetek hatékonysága",
      "Konverzió optimalizáció (CTA, form, funnel)",
      "Versenytárs összehasonlítás",
      "Brand és bizalomépítés",
      "Növekedési stratégia",
    ],
  },
  {
    title: "Sales Elemzés",
    count: "12 szempont",
    color: "text-success",
    bgColor: "bg-success/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    items: [
      "Döntéshozó azonosítás",
      "Üzleti lehetőség értékelés",
      "Megkeresési stratégia",
      "Lead minősítés",
      "Versenykörnyezet",
    ],
  },
];

export default function WhatWeExamine() {
  return (
    <section className="py-20 sm:py-28 bg-background-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Amit az audit <span className="text-primary">tartalmaz</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {columns.map((col, i) => (
            <FadeIn key={col.title} delay={i * 0.15}>
              <div className="rounded-2xl border border-border bg-white p-8 h-full">
                <div className={`h-12 w-12 rounded-xl ${col.bgColor} ${col.color} flex items-center justify-center mb-4`}>
                  {col.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {col.title}
                </h3>
                <p className={`text-sm font-medium ${col.color} mb-5`}>
                  {col.count}
                </p>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-foreground-muted">
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
