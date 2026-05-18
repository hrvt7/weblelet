import FadeIn from "./FadeIn";

const categories = [
  { label: "AI Termékfotó", count: "120+" },
  { label: "Editorial Kampány", count: "45+" },
  { label: "Reklámvideó", count: "60+" },
  { label: "UGC Tartalom", count: "80+" },
];

const placeholders = Array.from({ length: 6 });

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 dot-grid opacity-[0.15] -z-10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Portfólió
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Olyan minőség, amit{" "}
              <span className="text-highlight">nem néznek AI-nak</span>
            </h2>
            <p className="mt-4 text-foreground-secondary text-base sm:text-lg leading-relaxed">
              Magyar vállalkozásoknak készített munkáink egy része. A teljes portfólió hamarosan elérhető lesz.
            </p>
          </div>
        </FadeIn>

        {/* Stats row */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <div key={cat.label} className="rounded-2xl border border-border bg-surface-card p-5 text-center">
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-primary">{cat.count}</div>
                <div className="text-xs sm:text-sm text-foreground-muted mt-1">{cat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Placeholder grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {placeholders.map((_, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/8 to-accent/8 border border-border flex items-center justify-center">
                <div className="text-center px-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40 mx-auto mb-2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  <div className="text-xs text-foreground-muted">Portfólió hamarosan</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-foreground-secondary mb-5">
              Szeretnéd látni a brand-edhez illő példát? Küldj egy üzenetet, és ingyenes demót készítünk.
            </p>
            <a
              href="mailto:info@hrvtstudio.hu?subject=Ingyenes%20demó%20kérése"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-accent px-7 py-4 text-[0.95rem] font-bold text-white shadow-xl shadow-accent/25 cta-glow"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              Ingyenes demó kérése
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
