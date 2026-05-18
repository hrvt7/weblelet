import FadeIn from "./FadeIn";

const tiers = [
  {
    name: "STARTER",
    price: "120",
    period: "/hó",
    badge: null,
    description: "Ideális: éttermek, szalonok, kiskereskedők",
    features: [
      "8 db AI termékfotó",
      "Social media ready formátumok",
      "3 munkanapos átfutás",
      "Email támogatás",
    ],
    cta: "Demó kérése",
  },
  {
    name: "GROWTH",
    price: "250",
    period: "/hó",
    badge: "Legnépszerűbb",
    description: "Ideális: aktív social media jelenlétű vállalkozások",
    features: [
      "20 db AI kép",
      "2 db 15mp reklámvideó",
      "Havi content naptár",
      "Facebook/Instagram Ads ready",
      "Prioritás támogatás",
    ],
    cta: "Demó kérése",
  },
  {
    name: "PRO",
    price: "450",
    period: "/hó",
    badge: null,
    description: "Ideális: skálázódó brand-ek, e-commerce",
    features: [
      "Korlátlan kép",
      "2 db teljes kampányvideó/hó",
      "Art direction konzultáció",
      "Dedikált account manager",
      "Telefonos support",
    ],
    cta: "Demó kérése",
  },
];

export default function Pricing() {
  return (
    <section id="arazas" className="py-24 sm:py-32 relative bg-surface-alt overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.3] -z-10" />
      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Árak
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Havi előfizetés.{" "}
              <span className="text-highlight">Bármikor lemondható.</span>
            </h2>
            <p className="mt-4 text-foreground-secondary text-base sm:text-lg leading-relaxed">
              Nincs hosszú távú szerződés, nincs rejtett költség. Válaszd ki, ami legjobban illik hozzád.
            </p>
          </div>
        </FadeIn>

        {/* Pricing tiers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl border p-6 lg:p-7 h-full flex flex-col transition-all duration-300 ${
                  tier.badge
                    ? "border-primary bg-surface-card shadow-2xl shadow-primary/15 scale-[1.02]"
                    : "border-border bg-surface-card hover:border-primary/30 card-hover"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-bold text-[#0C0A09] shadow-lg shadow-primary/30">
                    {tier.badge}
                  </div>
                )}

                <div className="mb-5">
                  <div className="text-xs font-bold text-foreground-muted uppercase tracking-wider mb-3">
                    {tier.name}
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="font-heading text-4xl sm:text-5xl font-extrabold text-foreground">{tier.price}€</span>
                    <span className="text-foreground-muted text-base">{tier.period}</span>
                  </div>
                  <p className="text-sm text-foreground-muted">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-foreground-secondary">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0 mt-0.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:info@hrvtstudio.hu?subject=${encodeURIComponent(tier.name + ' csomag — érdeklődés')}`}
                  className={`block text-center rounded-xl px-5 py-3.5 text-sm font-bold transition-all ${
                    tier.badge
                      ? "bg-primary text-[#0C0A09] shadow-lg shadow-primary/25 hover:bg-primary-dark"
                      : "bg-primary/15 text-primary hover:bg-primary/25"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Custom project */}
        <FadeIn delay={0.3}>
          <div className="mt-12 max-w-3xl mx-auto rounded-2xl border-2 border-dashed border-primary/20 bg-surface-card p-7 sm:p-9 text-center">
            <div className="text-xs font-bold text-foreground-muted uppercase tracking-wider mb-3">
              Egyedi projektek
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              Árajánlat kérésre
            </h3>
            <p className="text-foreground-secondary mb-5 max-w-xl mx-auto">
              Teljes kampányok, cinematic teaserek, brand launch videók. Egyedi igények, egyedi költségvetés.
            </p>
            <a
              href="mailto:info@hrvtstudio.hu?subject=Egyedi%20projekt%20—%20árajánlat"
              className="inline-flex items-center gap-2 rounded-xl bg-primary/15 px-6 py-3 text-sm font-bold text-primary hover:bg-primary/25 transition-colors"
            >
              Árajánlat kérése
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
