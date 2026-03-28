"use client";

import { useState, FormEvent } from "react";
import FadeIn from "./FadeIn";
import AnimatedGauge from "./AnimatedGauge";

export default function Hero() {
  const [url, setUrl] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;
    const el = document.getElementById("kapcsolat");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Pre-fill the URL field in the contact form
      setTimeout(() => {
        const urlInput = document.getElementById("website") as HTMLInputElement | null;
        if (urlInput) urlInput.value = url;
      }, 400);
    }
  }

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
          {/* Left - Text + URL input (6 cols) */}
          <div className="lg:col-span-6">
            <FadeIn>
              <h1
                className="font-heading font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground"
                style={{ fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 3.75rem)" }}
              >
                Az AI keresők átalakítják a játékszabályokat.{" "}
                <span className="text-highlight">
                  Te hol állsz?
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-7 text-lg leading-relaxed text-foreground-secondary max-w-[540px]">
                A keresések 37%-a ma már AI eszközökkel indul. Ha a weboldalad
                nincs felkészítve, láthatatlan vagy a következő generáció
                számára.
              </p>
            </FadeIn>

            {/* URL Input */}
            <FadeIn delay={0.24}>
              <form onSubmit={handleSubmit} className="mt-9">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground-muted">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </div>
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="Add meg a weboldalad URL-jét..."
                      className="w-full rounded-2xl border border-border bg-white pl-12 pr-5 py-4.5 text-[1rem] text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary shadow-lg shadow-primary/5 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-2xl bg-accent px-8 py-4.5 text-[1rem] font-bold text-white shadow-xl shadow-accent/25 cta-glow whitespace-nowrap cursor-pointer"
                  >
                    Audit indítása&ensp;&rarr;
                  </button>
                </div>
                <p className="mt-3 text-sm text-foreground-muted">
                  Komplett elemzés 30 mp alatt &middot; SEO + AI + Marketing + Jogi
                </p>
              </form>
            </FadeIn>

            {/* Badge */}
            <FadeIn delay={0.36}>
              <div className="mt-6 flex flex-wrap gap-3">
                {["96 szempont", "4 dimenzió", "5 jogi keretrendszer"].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full bg-primary/6 border border-primary/10 px-4 py-1.5 text-xs font-semibold text-primary"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right - Report mockup (6 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <FadeIn direction="right" delay={0.2}>
              <div className="relative lg:-mr-8 xl:-mr-16">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 transform rotate-2 scale-[1.02] -z-10" />

                <div className="rounded-2xl bg-surface-card border border-border shadow-2xl shadow-primary/8 p-7 sm:p-9 max-w-lg transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                  {/* Mockup header */}
                  <div className="flex items-center gap-3 mb-7">
                    <div className="h-11 w-11 rounded-xl bg-primary/8 flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8">
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
                      { label: "GEO/SEO", value: "24/100", color: "text-danger", bar: "bg-danger", pct: 24 },
                      { label: "Marketing", value: "41/100", color: "text-accent", bar: "bg-accent", pct: 41 },
                      { label: "Megfelelőség", value: "35/100", color: "text-purple-600", bar: "bg-purple-600", pct: 35 },
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

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 rounded-2xl bg-primary text-white px-5 py-2.5 text-xs font-bold shadow-xl pulse-badge">
                  0,99 € &middot; Komplett diagnózis
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-16">
          <div className="scroll-bounce">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
