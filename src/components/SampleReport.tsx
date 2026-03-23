import FadeIn from "./FadeIn";

const features = [
  "Összesített pontszám 0-100 skálán",
  "TOP 3 kritikus probléma kiemelve",
  "Versenytárs összehasonlító táblázat",
  "Konkrét cselekvési terv (heti/havi/negyedéves)",
  "Becsült bevételi hatás forintban",
  "Minden magyarul, közérthetően",
];

export default function SampleReport() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Így néz ki egy WebLelet{" "}
              <span className="text-primary">riport</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Mockup */}
          <FadeIn direction="left">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="rounded-2xl bg-white border border-border shadow-xl p-6">
                {/* PDF header */}
                <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                  <div className="h-8 w-8 rounded bg-danger/10 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold text-foreground">
                    weblelet-riport-2026-03.pdf
                  </div>
                </div>

                {/* Score bars */}
                <div className="space-y-3 mb-4">
                  {[
                    { label: "GEO/SEO", score: 24, color: "bg-danger" },
                    { label: "Marketing", score: 41, color: "bg-accent" },
                    { label: "Sales", score: 52, color: "bg-accent" },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-foreground-muted">{bar.label}</span>
                        <span className="font-bold text-foreground">{bar.score}/100</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${bar.color} rounded-full`}
                          style={{ width: `${bar.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mock table */}
                <div className="border border-border rounded-lg overflow-hidden text-xs">
                  <div className="bg-background-alt px-3 py-2 font-semibold text-foreground border-b border-border">
                    TOP 3 kritikus probléma
                  </div>
                  {[
                    { issue: "Hiányzó schema markup", severity: "Kritikus" },
                    { issue: "Nincs AI keresőoptimalizálás", severity: "Kritikus" },
                    { issue: "Gyenge CTA elhelyezés", severity: "Fontos" },
                  ].map((row) => (
                    <div
                      key={row.issue}
                      className="flex justify-between px-3 py-2 border-b border-border last:border-0"
                    >
                      <span className="text-foreground-muted">{row.issue}</span>
                      <span className={`font-medium ${row.severity === "Kritikus" ? "text-danger" : "text-accent"}`}>
                        {row.severity}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Blurred section */}
                <div className="mt-4 space-y-2 select-none">
                  <div className="h-2.5 w-full rounded bg-gray-100 blur-[2px]" />
                  <div className="h-2.5 w-5/6 rounded bg-gray-100 blur-[2px]" />
                  <div className="h-2.5 w-3/4 rounded bg-gray-100 blur-[2px]" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right - Feature list */}
          <FadeIn direction="right" delay={0.15}>
            <div className="space-y-5">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-4">
                  <div className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-success/10 flex items-center justify-center">
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
                  <span className="text-base text-foreground leading-relaxed">
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
