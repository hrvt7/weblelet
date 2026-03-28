import FadeIn from "./FadeIn";

const stats = [
  { value: "37%", desc: "a keresések AI eszközökkel indul", source: "Search Engine Land, 2026" },
  { value: "25%", desc: "keresésben Google AI Overviews jelenik meg", source: "Conductor, 2026" },
  { value: "2 Mrd", desc: "napi lekérdezés a ChatGPT-ben", source: "OpenAI" },
  { value: "4.4x", desc: "értékesebbek az AI keresőkből jövő látogatók", source: "Entail AI" },
  { value: "34.5%", desc: "kattintás csökkenés az AI Overviews alatt", source: "Ahrefs, 2025" },
  { value: "50%", desc: "keresés AI asszisztensből 2028-ra", source: "Gartner" },
];

export default function GeoSection() {
  return (
    <section className="py-24 sm:py-32 bg-surface-blue relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              GEO — Generative Engine Optimization
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Miért nem elég már a{" "}
              <span className="text-highlight">hagyományos SEO?</span>
            </h2>
            <p className="mt-6 text-lg text-foreground-secondary leading-relaxed max-w-2xl mx-auto">
              2026-ban az AI keresők átírják a szabályokat. A ChatGPT, Perplexity,
              Gemini és a Google AI Mode nem ugyanúgy dolgozza fel a weboldalakat
              mint a hagyományos Google kereső.
            </p>
          </div>
        </FadeIn>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-16">
          {stats.map((stat, i) => (
            <FadeIn key={stat.value} delay={i * 0.08}>
              <div className="rounded-2xl border border-border bg-surface-card p-6 lg:p-7 card-hover text-center">
                <div className="font-heading text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-foreground-secondary leading-snug mb-2">
                  {stat.desc}
                </p>
                <p className="text-[11px] text-foreground-muted/60">
                  {stat.source}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.3}>
          <div className="text-center">
            <p className="text-lg text-foreground-secondary mb-6 max-w-2xl mx-auto leading-relaxed">
              A WebLelet nem csak a hagyományos SEO-t vizsgálja — elemzi hogy a
              weboldalad hogyan teljesít az AI keresőkben is: ChatGPT, Perplexity,
              Gemini, Google AI Mode.
            </p>
            <a
              href="#kapcsolat"
              className="inline-flex items-center cursor-pointer rounded-2xl bg-accent px-9 py-4 text-[1.05rem] font-bold text-white shadow-xl shadow-accent/25 cta-glow"
            >
              Nézd meg a weboldalad AI láthatóságát&ensp;&rarr;
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
