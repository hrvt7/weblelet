"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const cases = [
  {
    image: "/images/before-after-1.jpg",
    title: "Fogpótlás — korona és híd",
    desc: "Hiányzó és sérült fogak pótlása esztétikus koronákkal és hídpótlással.",
  },
  {
    image: "/images/before-after-2.jpg",
    title: "Teljes fogsor rehabilitáció",
    desc: "Előrehaladott fogazati problémák komplex kezelése, természetes végeredménnyel.",
  },
  {
    image: "/images/before-after-3.jpg",
    title: "Esztétikai helyreállítás",
    desc: "Elszíneződött és kopott fogak felújítása modern anyagokkal.",
  },
  {
    image: "/images/before-after-4.jpg",
    title: "Komplex fogpótlás",
    desc: "Súlyosan károsodott fogazat teljes rehabilitációja koronákkal.",
  },
];

export default function BeforeAfter() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 dot-grid opacity-[0.1] -z-10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Eredmények
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Előtte –{" "}
              <span className="text-highlight">Utána</span>
            </h2>
            <p className="mt-4 text-foreground-secondary text-base sm:text-lg leading-relaxed">
              Valódi esetek a rendelőnkből. Minden páciens hozzájárulásával.
            </p>
          </div>
        </FadeIn>

        {/* Desktop: 2x2 grid */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {cases.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-surface-card overflow-hidden card-hover group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image}
                  alt={`${c.title} — előtte utána`}
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="font-heading text-base font-bold text-foreground mb-1">
                    {c.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mobile: carousel-style with tabs */}
        <div className="sm:hidden">
          <FadeIn>
            <div className="rounded-2xl border border-border bg-surface-card overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cases[active].image}
                alt={`${cases[active].title} — előtte utána`}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-heading text-sm font-bold text-foreground mb-1">
                  {cases[active].title}
                </h3>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  {cases[active].desc}
                </p>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    active === i ? "w-8 bg-primary" : "w-2.5 bg-border"
                  }`}
                  aria-label={`Eset ${i + 1}`}
                />
              ))}
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="text-center mt-10 sm:mt-12">
            <a
              href="tel:+3694900887"
              className="inline-flex items-center gap-2.5 rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/20 cta-glow"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Kérjen időpontot: +36 94 900-887
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
