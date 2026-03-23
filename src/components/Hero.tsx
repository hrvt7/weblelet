import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-amber-50/30 -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-tight tracking-tight text-foreground">
                Megtudod 48 órán belül,{" "}
                <span className="text-primary">
                  miért nem talál rád az ügyfeled
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg text-foreground-muted leading-relaxed max-w-xl">
                AI-alapú weboldal audit magyar vállalkozásoknak. Megmutatjuk hol
                veszíted el a vásárlóidat — és hogyan szerezheted vissza őket.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#kapcsolat"
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-base font-bold text-white shadow-lg shadow-accent/25 hover:bg-accent-dark hover:shadow-accent/40 transition-all"
                >
                  Kérem az ingyenes auditot&ensp;&rarr;
                </a>
              </div>
              <p className="mt-3 text-sm text-foreground-muted">
                Nulla kockázat. Nulla kötelezettség. 48 órán belül megkapod.
              </p>
            </FadeIn>
          </div>

          {/* Right - Report mockup */}
          <FadeIn direction="right" delay={0.2}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl bg-white border border-border shadow-2xl shadow-primary/10 p-6 sm:p-8">
                {/* Mockup header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">
                      WebLelet Riport
                    </div>
                    <div className="text-xs text-foreground-muted">
                      pelda-etterem.hu — 2026. március
                    </div>
                  </div>
                </div>

                {/* Score gauge */}
                <div className="flex items-center justify-center mb-6">
                  <div className="relative h-32 w-32">
                    <svg viewBox="0 0 120 120" className="w-full h-full">
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="#E2E8F0"
                        strokeWidth="10"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="#EF4444"
                        strokeWidth="10"
                        strokeDasharray="314"
                        strokeDashoffset="195"
                        strokeLinecap="round"
                        transform="rotate(-90 60 60)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-extrabold text-danger">
                        38
                      </span>
                      <span className="text-xs text-foreground-muted">
                        /100
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mock items */}
                <div className="space-y-3">
                  {[
                    { label: "GEO/SEO Pontszám", value: "24/100", bad: true },
                    {
                      label: "Marketing Pontszám",
                      value: "41/100",
                      bad: true,
                    },
                    { label: "Sales Pontszám", value: "52/100", bad: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-2 border-b border-border last:border-0"
                    >
                      <span className="text-sm text-foreground-muted">
                        {item.label}
                      </span>
                      <span
                        className={`text-sm font-bold ${item.bad ? "text-danger" : "text-accent"}`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Blurred teaser */}
                <div className="mt-4 space-y-2 select-none">
                  <div className="h-3 w-full rounded bg-gray-100 blur-[2px]" />
                  <div className="h-3 w-4/5 rounded bg-gray-100 blur-[2px]" />
                  <div className="h-3 w-3/5 rounded bg-gray-100 blur-[2px]" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 rounded-xl bg-primary text-white px-4 py-2 text-xs font-bold shadow-lg">
                15 AI agent elemzi
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
