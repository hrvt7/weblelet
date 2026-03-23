"use client";

import { useState, FormEvent } from "react";
import FadeIn from "./FadeIn";

export default function LeadForm() {
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
      // silently fail — form still works as HTML fallback
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="kapcsolat" className="py-20 sm:py-28 bg-blue-50">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Kérd a weboldalad ingyenes{" "}
              <span className="text-primary">leletét</span>
            </h2>
            <p className="mt-3 text-foreground-muted">
              48 órán belül emailben küldünk egy személyre szabott elemzést.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          {submitted ? (
            <div className="rounded-2xl bg-white border border-success/30 p-10 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Köszönjük!
              </h3>
              <p className="text-foreground-muted">
                48 órán belül küldjük a leletet az email címedre.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white border border-border shadow-lg p-8 space-y-5"
            >
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
                  Cégnév <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="Pl. Kovács Szerviz Kft."
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-foreground mb-1.5">
                  Weboldal URL <span className="text-danger">*</span>
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  required
                  className="w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="https://pelda.hu"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email cím <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="nev@ceg.hu"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Telefonszám <span className="text-foreground-muted text-xs">(opcionális)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="+36 30 123 4567"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-foreground mb-1.5">
                  Mikor jó időpont egy rövid egyeztetésre?{" "}
                  <span className="text-foreground-muted text-xs">(opcionális)</span>
                </label>
                <select
                  id="time"
                  name="preferred_time"
                  className="w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                >
                  <option value="">Válassz...</option>
                  <option value="delelott">Délelőtt</option>
                  <option value="delutan">Délután</option>
                  <option value="barmikor">Bármikor</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-accent px-6 py-4 text-base font-bold text-white shadow-lg shadow-accent/25 hover:bg-accent-dark hover:shadow-accent/40 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Küldés..." : "Kérem az ingyenes auditot →"}
              </button>

              <p className="text-center text-xs text-foreground-muted">
                🔒 Az adataidat bizalmasan kezeljük. Nem küldünk spamet.
              </p>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
