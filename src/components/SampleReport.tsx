import FadeIn from "./FadeIn";

const features = [
  "18 oldalas PDF riport, 3 blokkban (Audit → Ajánlat → Operatív)",
  "Laikus összefoglaló az elején — informatikus nélkül is érthető",
  "Technikai melléklet amit a fejlesztőnek adhatsz",
  "Finding címkézés: 🔴 Tény / 🟡 Feltételezés / 🟢 Javaslat",
  "Kész megoldások csatolva (schema kód, llms.txt)",
  "Üzleti hatás értékelés (🟢 alacsony / 🟡 közepes / 🔴 magas)",
  "White-label: a te logód, a te céged neve, a te színeid",
];

export default function SampleReport() {
  return (
    <section className="py-24 sm:py-32 bg-surface-warm relative">
      <div className="absolute inset-0 dot-grid opacity-[0.15] -z-10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Minta riport
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Minta: amit a rendszer{" "}
              <span className="text-highlight">produkál</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left - Mockup */}
          <FadeIn direction="left">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Background shadow card */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 transform rotate-1 scale-[1.01] -z-10" />

              <div className="rounded-2xl bg-surface-card border border-border shadow-xl p-7">
                {/* PDF header */}
                <div className="flex items-center gap-3 pb-4 border-b border-border-light mb-5">
                  <div className="h-9 w-9 rounded-xl bg-danger/8 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="1.8">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-heading font-bold text-foreground">
                      weblelet-riport-2026-03.pdf
                    </div>
                    <div className="text-[11px] text-foreground-muted">
                      10 oldal &middot; Személyre szabott elemzés
                    </div>
                  </div>
                </div>

                {/* Score bars */}
                <div className="space-y-3.5 mb-5">
                  {[
                    { label: "GEO/SEO", score: 24, color: "bg-danger" },
                    { label: "Marketing", score: 41, color: "bg-accent" },
                    { label: "Sales", score: 52, color: "bg-amber-500" },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="font-medium text-foreground-muted">{bar.label}</span>
                        <span className="font-bold text-foreground">{bar.score}/100</span>
                      </div>
                      <div className="h-2 bg-border-light rounded-full overflow-hidden">
                        <div
                          className={`h-full ${bar.color} rounded-full`}
                          style={{ width: `${bar.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mock table */}
                <div className="border border-border-light rounded-xl overflow-hidden text-xs">
                  <div className="bg-surface px-4 py-2.5 font-heading font-bold text-foreground border-b border-border-light">
                    TOP 3 kritikus probléma
                  </div>
                  {[
                    { issue: "Hiányzó schema markup", severity: "Kritikus" },
                    { issue: "Nincs AI keresőoptimalizálás", severity: "Kritikus" },
                    { issue: "Gyenge CTA elhelyezés", severity: "Fontos" },
                  ].map((row) => (
                    <div
                      key={row.issue}
                      className="flex justify-between px-4 py-2.5 border-b border-border-light last:border-0"
                    >
                      <span className="text-foreground-secondary">{row.issue}</span>
                      <span
                        className={`font-semibold rounded-full px-2 py-0.5 text-[10px] ${
                          row.severity === "Kritikus"
                            ? "text-danger bg-danger/8"
                            : "text-accent bg-accent/8"
                        }`}
                      >
                        {row.severity}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Blurred section */}
                <div className="mt-5 space-y-2 select-none">
                  <div className="h-2.5 w-full rounded bg-border-light blur-[2px]" />
                  <div className="h-2.5 w-5/6 rounded bg-border-light blur-[2px]" />
                  <div className="h-2.5 w-3/4 rounded bg-border-light blur-[2px]" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right - Feature list */}
          <FadeIn direction="right" delay={0.15}>
            <div className="space-y-6">
              {features.map((feature, i) => (
                <div key={feature} className="flex items-start gap-4 group">
                  <div className="mt-0.5 h-7 w-7 shrink-0 rounded-xl bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#22C55E"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[1.05rem] text-foreground-secondary leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
