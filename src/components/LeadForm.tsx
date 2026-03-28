"use client";

import { useState, FormEvent } from "react";
import FadeIn from "./FadeIn";

const inputClass =
  "w-full rounded-xl border border-border bg-surface-card px-5 py-4 text-[0.95rem] text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<"audit" | "pro">("audit");

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "XXXXXXXX";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.set("plan", plan === "audit" ? "AUDIT (0,99 €)" : "PRO (egyedi ár)");

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
    <section id="kapcsolat" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-surface-blue to-blue-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_#DBEAFE_0%,_transparent_70%)] -z-10 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_#EFF6FF_0%,_transparent_70%)] -z-10 opacity-60" />

      <div className="mx-auto max-w-2xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Indítás
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Indítsd el az{" "}
              <span className="text-highlight">auditot</span>
            </h2>
            <p className="mt-4 text-foreground-muted text-lg">
              Add meg a weboldalad URL-jét és küldünk egy komplett diagnózist.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          {submitted ? (
            <div className="rounded-2xl bg-surface-card border border-success/20 p-12 text-center shadow-lg">
              <div className="mx-auto h-18 w-18 rounded-2xl bg-success/10 flex items-center justify-center mb-5">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                Köszönjük!
              </h3>
              <p className="text-foreground-muted text-lg">
                {plan === "audit"
                  ? "Az audit eredményét hamarosan elküldjük emailben."
                  : "Hamarosan jelentkezünk az egyedi árajánlattal."}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-surface-card border border-border shadow-2xl shadow-primary/5 p-8 sm:p-10 space-y-5"
            >
              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-foreground mb-2">
                  Weboldal URL <span className="text-danger">*</span>
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  required
                  className={inputClass}
                  placeholder="https://pelda.hu"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email cím <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={inputClass}
                  placeholder="nev@ceg.hu"
                />
              </div>

              {/* Plan selector */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Csomag
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPlan("audit")}
                    className={`rounded-xl border px-4 py-3.5 text-sm font-semibold text-center transition-all cursor-pointer ${
                      plan === "audit"
                        ? "border-primary bg-primary/5 text-primary ring-2 ring-primary/20"
                        : "border-border text-foreground-muted hover:border-primary/20"
                    }`}
                  >
                    <div className="font-bold">AUDIT</div>
                    <div className="text-xs mt-0.5 opacity-70">0,99 €</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlan("pro")}
                    className={`rounded-xl border px-4 py-3.5 text-sm font-semibold text-center transition-all cursor-pointer ${
                      plan === "pro"
                        ? "border-primary bg-primary/5 text-primary ring-2 ring-primary/20"
                        : "border-border text-foreground-muted hover:border-primary/20"
                    }`}
                  >
                    <div className="font-bold">PRO</div>
                    <div className="text-xs mt-0.5 opacity-70">egyedi ár</div>
                  </button>
                </div>
              </div>

              {/* Message field for PRO */}
              {plan === "pro" && (
                <div>
                  <label htmlFor="notes" className="block text-sm font-semibold text-foreground mb-2">
                    Miben segíthetünk? <span className="text-foreground-muted text-xs font-normal">(opcionális)</span>
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    className={inputClass}
                    placeholder="pl. versenytárs elemzés kell / implementációs segítség / több weboldal audit"
                  />
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full cursor-pointer rounded-2xl bg-accent px-8 py-5 text-[1.05rem] font-bold text-white shadow-xl shadow-accent/25 cta-glow disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                  {loading
                    ? "Küldés..."
                    : plan === "audit"
                      ? "Audit indítása — 0,99 € →"
                      : "Egyedi árajánlat kérése →"}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-foreground-muted pt-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Az adataidat bizalmasan kezeljük. Nem küldünk spamet.</span>
              </div>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
