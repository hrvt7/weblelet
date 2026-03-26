import FadeIn from "./FadeIn";
import AnimatedGauge from "./AnimatedGauge";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-44 lg:pb-36 overflow-hidden wave-divider">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 -z-20 bg-[#FAFBFC]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_#DBEAFE_0%,_transparent_70%)] -z-10 opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,_#FEF3C7_0%,_transparent_70%)] -z-10 opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_#EFF6FF_0%,_transparent_60%)] -z-10 opacity-50" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 -z-10 dot-grid opacity-[0.35]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left - Text (5 cols) */}
          <div className="lg:col-span-5">
            <FadeIn>
              <h1
                className="font-heading font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground"
                style={{ fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 3.75rem)" }}
              >
                Weboldal audit rendszer ami{" "}
                <span className="text-highlight">
                  10x gyorsabb mint a kézi munka
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-7 text-lg leading-relaxed text-foreground-secondary max-w-[540px]">
                13 AI agent elemzi párhuzamosan a weboldalakat — GEO, SEO,
                marketing, jogi compliance és üzleti potenciál dimenzióban. A
                rendszer 15 perc alatt produkálja amit egy csapat hetekig csinálna.
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="mt-9">
                <a
                  href="#kapcsolat"
                  className="inline-flex items-center cursor-pointer justify-center rounded-2xl bg-accent px-9 py-4.5 text-[1.05rem] font-bold text-white shadow-xl shadow-accent/25 cta-glow"
                >
                  Beszéljünk&ensp;&rarr;
                </a>
              </div>
              <p className="mt-4 text-sm text-foreground-muted">
                Kérd a demo auditot a te oldaladra vagy az ügyfeled oldalára
              </p>
            </FadeIn>

          </div>

          {/* Right - Report mockup (7 cols, larger) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <FadeIn direction="right" delay={0.2}>
              <div className="relative lg:-mr-12 xl:-mr-20">
                {/* Shadow layer for depth */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 transform rotate-2 scale-[1.02] -z-10" />

                <div className="rounded-2xl bg-surface-card border border-border shadow-2xl shadow-primary/8 p-7 sm:p-9 max-w-lg transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                  {/* Mockup header */}
                  <div className="flex items-center gap-3 mb-7">
                    <div className="h-11 w-11 rounded-xl bg-primary/8 flex items-center justify-center">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth="1.8"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-heading font-bold text-foreground">
                        WebLelet Diagnózis
                      </div>
                      <div className="text-xs text-foreground-muted">
                        pelda-etterem.hu — 2026. március
                      </div>
                    </div>
                  </div>

                  {/* Animated Score gauge */}
                  <div className="flex items-center justify-center mb-7">
                    <AnimatedGauge score={38} maxScore={100} />
                  </div>

                  {/* Score breakdown */}
                  <div className="space-y-3.5">
                    {[
                      { label: "GEO/SEO Pontszám", value: "24/100", color: "text-danger", bar: "bg-danger", pct: 24 },
                      { label: "Marketing Pontszám", value: "41/100", color: "text-accent", bar: "bg-accent", pct: 41 },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-medium text-foreground-muted">{item.label}</span>
                          <span className={`text-xs font-bold ${item.color}`}>{item.value}</span>
                        </div>
                        <div className="h-1.5 bg-border-light rounded-full overflow-hidden">
                          <div className={`h-full ${item.bar} rounded-full`} style={{ width: `${item.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Blurred teaser */}
                  <div className="mt-5 space-y-2 select-none">
                    <div className="h-2.5 w-full rounded bg-border-light blur-[2px]" />
                    <div className="h-2.5 w-4/5 rounded bg-border-light blur-[2px]" />
                    <div className="h-2.5 w-3/5 rounded bg-border-light blur-[2px]" />
                  </div>
                </div>

                {/* Floating badge with pulse */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 rounded-2xl bg-primary text-white px-5 py-2.5 text-xs font-bold shadow-xl pulse-badge">
                  96 szempont, 4 dimenzió
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-16">
          <div className="scroll-bounce">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
