"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function Hero() {
  const [bioOpen, setBioOpen] = useState(false);
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden wave-divider">
      {/* Background image + overlay — mobile-optimized */}
      <div className="absolute inset-0 -z-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-bg.jpg"
          alt="Fogászati implantátum illusztráció — Dr. Köteles Renáta fogorvosi rendelő, Szombathely"
          className="w-full h-full object-cover object-[center_40%] sm:object-[center_30%]"
        />
        {/* Desktop: softer gradient — more background visible */}
        <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-[#FCFAF8]/90 via-[#FCFAF8]/70 to-[#FCFAF8]/25" />
        {/* Mobile: top-to-bottom gradient so image is visible at top, text readable below */}
        <div className="absolute inset-0 sm:hidden bg-gradient-to-b from-[#FCFAF8]/30 via-[#FCFAF8]/70 to-[#FCFAF8]/95" />
        {/* Bottom fade for wave divider */}
        <div className="absolute inset-0 hidden sm:block bg-gradient-to-b from-transparent via-transparent to-[#FCFAF8]/90" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — text */}
          <div className="lg:col-span-7">
            <FadeIn>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Fogorvosi rendelő — Szombathely
              </p>
              <h1
                className="font-heading font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground"
                style={{ fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 3.75rem)" }}
              >
                Fájdalommentes fogászat,{" "}
                <span className="text-highlight">családias légkörben.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="mt-7 text-lg leading-relaxed text-foreground-secondary max-w-[540px]">
                Modern eszközök, gondos odafigyelés, TB-támogatott ellátás. Szombathely, Markusovszky Lajos u. 8.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+3694900887"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-accent px-8 py-4.5 text-[1rem] font-bold text-white shadow-xl shadow-accent/25 cta-glow whitespace-nowrap cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Időpontfoglalás
                </a>
                <a
                  href="#rendelesi-ido"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-primary/20 px-8 py-4.5 text-[1rem] font-bold text-primary hover:bg-primary/5 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Rendelési idő
                </a>
              </div>
            </FadeIn>

          </div>

          {/* Right — doctor card (compact, expandable) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn direction="right" delay={0.2}>
              <div className="relative max-w-[280px]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 transform rotate-2 scale-[1.02] -z-10" />
                <div
                  className={`rounded-3xl bg-surface-card border shadow-2xl shadow-primary/8 overflow-hidden transform lg:rotate-1 hover:rotate-0 transition-all duration-500 cursor-pointer ${
                    bioOpen ? "border-primary/20" : "border-border"
                  }`}
                  onClick={() => setBioOpen(!bioOpen)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/renata.jpg"
                    alt="Dr. Köteles Renáta fogorvos"
                    className="w-full h-auto"
                  />
                  <div className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <h3 className="font-heading font-bold text-foreground text-base">Dr. Köteles Renáta</h3>
                      <div className={`h-5 w-5 rounded-md flex items-center justify-center transition-all duration-300 ${
                        bioOpen ? "bg-primary/10 text-primary rotate-180" : "bg-surface-warm text-foreground-muted"
                      }`}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs text-foreground-muted mt-0.5">Fogorvos — Szombathely</p>
                  </div>

                  {/* Expandable bio */}
                  <div className="service-expand" data-open={bioOpen}>
                    <div>
                      <div className="px-4 pb-4 pt-0">
                        <div className="border-t border-border-light pt-3">
                          <p className="text-xs text-foreground-secondary leading-relaxed">
                            Több éves szakmai tapasztalattal rendelkező fogorvos.
                            Széleskörű fogászati ellátást nyújtok a megelőzéstől
                            a fogpótlásig, a legmodernebb módszerekkel. Számomra
                            fontos, hogy minden páciens nyugodt, családias légkörben
                            kapja meg a számára legjobb kezelést.
                          </p>
                          <a
                            href="tel:+3694900887"
                            className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary/8 text-primary font-bold text-xs py-2.5 mt-3 hover:bg-primary/15 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            +36 94 900-887
                          </a>
                        </div>
                      </div>
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
