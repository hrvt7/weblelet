import FadeIn from "./FadeIn";

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Nem csak hibákat keresünk",
    desc: "Kész megoldásokat adunk: schema kód, llms.txt, prioritási sorrend. Nem kell kitalálnod mit csinálj — meg van írva.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Bizonyíték-alapú",
    desc: "Minden megállapítás jelölve: TÉNY (amit a kódban látunk), BECSLÉS (amit számolunk) vagy JAVASLAT. Tudod melyikben bízhatsz 100%-ban.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Valódi Perplexity mérés",
    desc: "Nem becsüljük — ténylegesen megkérdezzük a Perplexity AI-t. Látjuk hogy idéz-e, mit mond a weboldaladról, és hogyan pozicionál a versenytársakhoz képest.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </svg>
    ),
    title: "Princeton kutatás alapján",
    desc: "A 6-dimenziós GEO scoring rendszer a Princeton/IIT Delhi KDD '24 kutatásán alapul. Nem vélemény — peer-reviewed tudomány.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "2 perc",
    desc: "Nem kell napokat várni. URL beírás, GEO audit, PDF riport. Ennyi.",
  },
];

export default function WhyUs() {
  return (
    <section id="miert-mi" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 dot-grid opacity-[0.2] -z-10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Miért a WebLelet
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Miért más ez mint egy{" "}
              <span className="text-highlight">hagyományos SEO audit?</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <FadeIn key={reason.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-surface-card p-7 lg:p-8 card-hover group h-full">
                <div className="h-12 w-12 rounded-2xl bg-primary/8 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {reason.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 tracking-[-0.01em]">
                  {reason.title}
                </h3>
                <p className="text-[0.9rem] text-foreground-muted leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
