import FadeIn from "./FadeIn";

const steps = [
  {
    num: "01",
    title: "Megadod a weboldal címét",
    description:
      "Kitöltöd az űrlapot a weboldalad URL-jével. Ennyi. Nem kell jelszó, nem kell hozzáférés, nem kell semmit telepíteni.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "AI rendszer elemzi az oldalad 3 dimenzióban",
    description:
      "A mesterséges intelligencia 3 dimenzióban vizsgálja a weboldaladat: Google és AI keresők láthatósága, marketing hatékonyság, és értékesítési potenciál.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Megkapod a személyre szabott riportot",
    description:
      "48 órán belül emailben küldünk egy részletes PDF diagnózist — konkrét problémalistával, címkézett megállapításokkal és azonnali teendőkkel.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="hogyan-mukodik" className="py-24 sm:py-32 relative">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-[0.2] -z-10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Hogyan működik
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              3 lépés a weboldalad{" "}
              <span className="text-highlight">leletéhez</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.15}>
              {/* Staggered offset on md+ */}
              <div className={`${i === 1 ? "md:mt-8" : i === 2 ? "md:mt-16" : ""}`}>
                <div className="relative rounded-2xl border border-border bg-surface-card p-8 lg:p-9 card-hover group">
                  {/* Step number */}
                  <div className="text-xs font-heading font-bold text-primary/40 tracking-wider mb-5">
                    {step.num}
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-primary/8 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 tracking-[-0.01em]">
                    {step.title}
                  </h3>
                  <p className="text-[0.95rem] text-foreground-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
