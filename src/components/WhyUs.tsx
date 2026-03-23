import FadeIn from "./FadeIn";

const rows = [
  { feature: "Átfutási idő", agency: "5-10 munkanap", weblelet: "48 óra" },
  { feature: "Ár", agency: "200.000 - 600.000 Ft", weblelet: "49.900 Ft" },
  { feature: "AI keresők elemzése", agency: false, weblelet: true },
  { feature: "Személyre szabott", agency: true, weblelet: true },
  { feature: "Cselekvési terv", agency: "Általános javaslat", weblelet: "Konkrét lépések forintban" },
  { feature: "Versenytárs elemzés", agency: "Ritkán", weblelet: true },
];

function Check() {
  return (
    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-success/10">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

function Cross() {
  return (
    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-danger/8">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </span>
  );
}

export default function WhyUs() {
  return (
    <section id="miert-mi" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 dot-grid opacity-[0.2] -z-10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Összehasonlítás
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Miért jobb ez mint egy{" "}
              <span className="text-highlight">hagyományos ügynökség?</span>
            </h2>
          </div>
        </FadeIn>

        {/* Card-based comparison — two side by side */}
        <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Agency card - faded */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface p-7 lg:p-9 h-full opacity-80">
              <div className="text-center mb-7">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gray-100 text-foreground-muted mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground-muted">Marketing ügynökség</h3>
              </div>
              <div className="space-y-4">
                {rows.map((row) => (
                  <div key={row.feature} className="flex items-start justify-between gap-3 py-2 border-b border-border-light last:border-0">
                    <span className="text-sm font-medium text-foreground-muted">{row.feature}</span>
                    <span className="text-sm text-right text-foreground-muted shrink-0">
                      {row.agency === true ? <Check /> : row.agency === false ? <Cross /> : row.agency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* WebLelet card - highlighted */}
          <FadeIn delay={0.2}>
            <div className="rounded-2xl border-2 border-primary bg-surface-card p-7 lg:p-9 h-full shadow-xl shadow-primary/8 relative">
              {/* Recommended badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white shadow-md">
                Ajánlott
              </div>
              <div className="text-center mb-7">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-primary/10 text-primary mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-bold text-primary">WebLelet</h3>
              </div>
              <div className="space-y-4">
                {rows.map((row) => (
                  <div key={row.feature} className="flex items-start justify-between gap-3 py-2 border-b border-border-light last:border-0">
                    <span className="text-sm font-medium text-foreground">{row.feature}</span>
                    <span className="text-sm text-right font-medium text-foreground shrink-0">
                      {row.weblelet === true ? <Check /> : typeof row.weblelet === "string" ? row.weblelet : null}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
