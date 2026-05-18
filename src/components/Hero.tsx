"use client";

import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden wave-divider">
      {/* Background gradient — clean, no image */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#FCFAF8] via-[#FCFAF8] to-primary/5" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-transparent via-accent/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — text */}
          <div className="lg:col-span-7">
            <FadeIn>
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                HRVT Studio — AI Kreatív Tartalom
              </p>
              <h1
                className="font-heading font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground"
                style={{ fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 3.75rem)" }}
              >
                Stúdióminőség.{" "}
                <span className="text-highlight">AI sebesség.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="mt-7 text-lg leading-relaxed text-foreground-secondary max-w-[540px]">
                Profi termékfotók és reklámvideók töredékáráért. Hagyományos stúdiófotózás helyett — AI-alapú vizuális tartalom magyar vállalkozásoknak.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:info@hrvtstudio.hu?subject=Ingyenes%20demó%20kérése"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-accent px-8 py-4.5 text-[1rem] font-bold text-white shadow-xl shadow-accent/25 cta-glow whitespace-nowrap cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  Ingyenes demó kérése
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-primary/20 px-8 py-4.5 text-[1rem] font-bold text-primary hover:bg-primary/5 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Portfóliónk
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.36}>
              <div className="mt-10 flex flex-wrap gap-4 text-sm text-foreground-muted">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>3-5 napos átfutás</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>90% költségmegtakarítás</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Magyar piaci tapasztalat</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — visual stats card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn direction="right" delay={0.2}>
              <div className="relative max-w-[360px] w-full">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 transform rotate-2 scale-[1.02] -z-10" />
                <div className="rounded-3xl bg-surface-card border border-border shadow-2xl shadow-primary/8 p-7 transform lg:rotate-1">
                  <div className="space-y-5">
                    <div>
                      <div className="text-xs text-foreground-muted uppercase tracking-wider mb-1">Stúdiófotózás vs. HRVT</div>
                      <div className="text-2xl font-heading font-extrabold text-foreground">90%</div>
                      <div className="text-sm text-foreground-secondary">költségmegtakarítás</div>
                    </div>
                    <div className="h-px bg-border" />
                    <div>
                      <div className="text-xs text-foreground-muted uppercase tracking-wider mb-1">Átlagos átfutás</div>
                      <div className="text-2xl font-heading font-extrabold text-foreground">3-5 nap</div>
                      <div className="text-sm text-foreground-secondary">stúdió helyett</div>
                    </div>
                    <div className="h-px bg-border" />
                    <div>
                      <div className="text-xs text-foreground-muted uppercase tracking-wider mb-1">Kezdő csomag</div>
                      <div className="text-2xl font-heading font-extrabold text-foreground">120€<span className="text-sm font-normal text-foreground-muted">/hó</span></div>
                      <div className="text-sm text-foreground-secondary">8 termékfotó havonta</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
