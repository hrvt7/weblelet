"use client";

import { useState, FormEvent } from "react";
import FadeIn from "./FadeIn";

const inputClass =
  "w-full rounded-xl border border-border bg-surface-card px-5 py-4 text-[0.95rem] text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "XXXXXXXX";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="kapcsolat" className="py-24 sm:py-32 relative overflow-hidden bg-surface-alt">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Kapcsolat
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Ingyenes demó{" "}
              <span className="text-highlight">kérése</span>
            </h2>
            <p className="mt-4 text-foreground-secondary text-base sm:text-lg leading-relaxed">
              Küldj egy üzenetet egy képpel a termékedről, és ingyen elkészítjük az első AI képet. Megtekinted az eredményt — csak utána döntesz.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {/* Left — info */}
          <FadeIn direction="left">
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl bg-surface-card border border-border p-6 lg:p-7">
                <div className="flex items-start gap-3 mb-5">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/8 flex items-center justify-center text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm mb-0.5">Email</p>
                    <a href="mailto:info@hrvtstudio.hu" className="text-primary text-sm font-medium hover:underline">
                      info@hrvtstudio.hu
                    </a>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-foreground-secondary">
                  <div className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Válasz 24 órán belül</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Ingyenes első demó</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Magyar nyelvű ügyfélszolgálat</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6 lg:p-7">
                <p className="text-sm font-semibold text-foreground mb-2">💡 Tipp</p>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  Az ingyenes demóhoz küldj egy meglévő termékfotót (akár telefonnal készült is megfelel), és írd le, milyen stílust képzelsz el. Egy munkanapon belül megkapod az AI-val elkészített verziót.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn direction="right" delay={0.15}>
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-2xl bg-surface-card border border-success/20 p-12 text-center shadow-lg h-full flex flex-col items-center justify-center">
                  <div className="mx-auto h-18 w-18 rounded-2xl bg-success/10 flex items-center justify-center mb-5">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                    Köszönjük!
                  </h3>
                  <p className="text-foreground-muted text-lg">
                    Üzeneted megkaptuk, 24 órán belül jelentkezünk a demóval.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl bg-surface-card border border-border shadow-xl p-8 sm:p-10 space-y-5"
                >
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Írj nekünk
                  </h3>

                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Név <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={inputClass}
                      placeholder="Teljes név vagy cégnév"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={inputClass}
                      placeholder="email@cegnev.hu"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                      Cég / weboldal <span className="text-foreground-muted text-xs font-normal">(opcionális)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className={inputClass}
                      placeholder="cegnev.hu"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Üzenet
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={inputClass}
                      placeholder="Milyen tartalomra van szükséged? Milyen termék/szolgáltatás? Milyen stílust képzelsz el?"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full cursor-pointer rounded-2xl bg-accent px-8 py-4.5 text-[1.05rem] font-bold text-white shadow-xl shadow-accent/25 cta-glow disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? "Küldés..." : "Ingyenes demó kérése"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
