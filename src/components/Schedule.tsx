import FadeIn from "./FadeIn";

const schedule = [
  { day: "Hétfő", hours: "13:30 – 19:30", prevention: "13:30 – 14:30" },
  { day: "Kedd", hours: "07:30 – 13:30", prevention: "07:30 – 08:30" },
  { day: "Szerda", hours: "13:30 – 19:30", prevention: "13:30 – 14:30" },
  { day: "Csütörtök", hours: "07:30 – 13:30", prevention: "07:30 – 08:30" },
  { day: "Péntek", hours: "Váltakozó*", prevention: "—" },
];

export default function Schedule() {
  return (
    <section id="rendelesi-ido" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 dot-grid opacity-[0.15] -z-10" />

      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14 max-w-xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Rendelési idő
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Mikor{" "}
              <span className="text-highlight">kereshet minket?</span>
            </h2>
            <p className="mt-4 text-foreground-secondary text-lg">
              Budapest, Példa utca 10.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="rounded-2xl border border-border bg-surface-card shadow-lg overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-primary/5 px-6 py-3.5 text-xs font-bold text-primary uppercase tracking-wider border-b border-border">
              <span>Nap</span>
              <span className="text-center">Rendelés</span>
              <span className="text-right">Prevenciós idő</span>
            </div>

            {/* Table rows */}
            {schedule.map((row) => (
              <div
                key={row.day}
                className="grid grid-cols-3 px-6 py-4 border-b border-border-light last:border-0 hover:bg-surface-alt/50 transition-colors"
              >
                <span className="font-heading font-semibold text-foreground text-sm">{row.day}</span>
                <span className="text-center text-sm text-foreground-secondary font-medium">{row.hours}</span>
                <span className="text-right text-sm text-foreground-muted">{row.prevention}</span>
              </div>
            ))}

            {/* Footer note */}
            <div className="px-6 py-4 bg-surface-alt/50 border-t border-border">
              <p className="text-xs text-foreground-muted leading-relaxed">
                * Páros hét: 13:30–19:30 / Páratlan hét: 07:30–13:30
              </p>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.24}>
          <div className="mt-8 space-y-4 text-center">
            <a
              href="tel:+36301234567"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-accent px-8 py-4 text-[1rem] font-bold text-white shadow-lg shadow-accent/20 cta-glow cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Időpontfoglalás: +36 30 123 4567
            </a>
            <p className="text-sm text-foreground-muted">
              A prevenciós időben érkező pácienseket előnyben részesítjük.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
