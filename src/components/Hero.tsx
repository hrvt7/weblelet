"use client";

import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(200,169,110,0.08),transparent)]" />
      <div className="absolute inset-0 dot-grid opacity-[0.2] -z-10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-36 pb-24 w-full">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">
              HRVT Studio — AI Kreatív Tartalom
            </p>
            <h1
              className="font-heading font-extrabold leading-[1.06] tracking-[-0.03em] text-foreground"
              style={{ fontSize: "clamp(2.5rem, 5vw + 0.5rem, 4.5rem)" }}
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
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@hrvtstudio.hu?subject=Ingyenes%20demó%20kérése"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-accent px-8 py-4 text-[1rem] font-bold text-white shadow-xl shadow-accent/25 cta-glow whitespace-nowrap cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                Ingyenes demó kérése
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-2xl border border-border px-8 py-4 text-[1rem] font-bold text-foreground hover:border-primary/40 hover:text-primary transition-all whitespace-nowrap cursor-pointer"
              >
                Portfóliónk
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.36}>
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-foreground-muted">
              {[
                "3–5 napos átfutás",
                "90% költségmegtakarítás",
                "Magyar piaci tapasztalat",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
