"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/hero-bg.jpg"
          alt="HRVT Studio hero"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">
              HRVT Studio — AI Kreatív Tartalom
            </p>
            <h1
              className="font-heading font-extrabold leading-[1.06] tracking-[-0.03em] text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw + 0.5rem, 4.5rem)" }}
            >
              Stúdióminőség.{" "}
              <span className="text-highlight">AI sebesség.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="mt-7 text-lg leading-relaxed text-white/80 max-w-[520px]">
              Profi termékfotók és reklámvideók töredékáráért. Hagyományos stúdiófotózás helyett — AI-alapú vizuális tartalom magyar vállalkozásoknak.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@hrvtstudio.hu?subject=Ingyenes%20demó%20kérése"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-accent px-8 py-4 text-[1rem] font-bold text-white shadow-xl shadow-accent/30 cta-glow whitespace-nowrap cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                Ingyenes demó kérése
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/25 px-8 py-4 text-[1rem] font-bold text-white hover:bg-white/10 hover:border-white/40 transition-all whitespace-nowrap cursor-pointer"
              >
                Portfóliónk
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.36}>
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>3-5 napos átfutás</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>90% költségmegtakarítás</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Magyar piaci tapasztalat</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
