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
    <section id="kapcsolat" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50/50 via-white to-teal-50/30" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14 max-w-xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Kapcsolat
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Keressen{" "}
              <span className="text-highlight">bizalommal!</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — contact info + map */}
          <FadeIn direction="left">
            <div className="space-y-6">
              {/* Contact details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/8 flex items-center justify-center text-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">Cím</p>
                    <p className="text-foreground-secondary text-sm">9700 Szombathely, Markusovszky Lajos u. 8.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/8 flex items-center justify-center text-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">Telefon</p>
                    <a href="tel:+3694900887" className="text-primary font-semibold text-sm hover:underline">
                      +36 94 900-887
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/8 flex items-center justify-center text-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">Email</p>
                    <a href="mailto:dr.kotelesrenata@gmail.com" className="text-primary text-sm hover:underline">
                      dr.kotelesrenata@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=47.2389614,16.6183989&z=17&hl=hu&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Köteles Renáta fogorvosi rendelő — térkép"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right — contact form */}
          <FadeIn direction="right" delay={0.15}>
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
                  Üzenetét megkaptuk, hamarosan jelentkezünk.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-surface-card border border-border shadow-xl p-8 sm:p-10 space-y-5"
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  Írjon nekünk
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
                    placeholder="Teljes név"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Telefon <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className={inputClass}
                    placeholder="+36 30 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Üzenet <span className="text-foreground-muted text-xs font-normal">(opcionális)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={inputClass}
                    placeholder="Miben segíthetünk?"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full cursor-pointer rounded-2xl bg-accent px-8 py-4.5 text-[1.05rem] font-bold text-white shadow-xl shadow-accent/25 cta-glow disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Küldés..." : "Üzenet küldése"}
                  </button>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
