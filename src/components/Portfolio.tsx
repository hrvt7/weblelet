import Image from "next/image";
import FadeIn from "./FadeIn";

const categories = [
  { label: "AI Termékfotó", count: "120+" },
  { label: "Editorial Kampány", count: "45+" },
  { label: "Reklámvideó", count: "60+" },
  { label: "UGC Tartalom", count: "80+" },
];

const images = [
  { src: "/portfolio/portfolio-1.jpg", alt: "AI editorial kampánykép — HRVT Studio" },
  { src: "/portfolio/portfolio-2.jpg", alt: "AI modell kampánykép — HRVT Studio" },
  { src: "/portfolio/portfolio-3.jpg", alt: "AI fashion editorial — HRVT Studio" },
  { src: "/portfolio/portfolio-4.jpg", alt: "AI portré kampánykép — HRVT Studio" },
  { src: "/portfolio/portfolio-5.jpg", alt: "AI editorial fotó — HRVT Studio" },
];

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
              Magyar vállalkozásoknak készített munkáink egy része.
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

        {/* Image grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-surface-warm group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                />
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
