import FadeIn from "./FadeIn";

const plans = [
  {
    name: "Ingyenes Lelet",
    price: "0 Ft",
    period: "",
    description: "2 oldalas gyorsjelentés a legfontosabb hibákról",
    features: ["Marketing pontszám", "TOP 3 probléma", "1 fő javaslat"],
    cta: "Kérem ingyen →",
    featured: false,
  },
  {
    name: "Teljes WebLelet",
    price: "49.900 Ft",
    period: "egyszeri",
    description: "10+ oldalas részletes riport + 30 perces konzultáció",
    features: [
      "Minden az ingyen verzióból",
      "GEO/SEO + Marketing + Sales elemzés",
      "Versenytárs összehasonlítás",
      "Cselekvési terv bevételi hatással",
      "30 perc személyes/online konzultáció",
    ],
    cta: "Megrendelem →",
    featured: true,
  },
  {
    name: "Havi WebLelet Pro",
    price: "69.900 Ft",
    period: "/hó",
    description: "Folyamatos monitoring + havi friss riport + tanácsadás",
    features: [
      "Minden a Teljes verzióból",
      "Havi frissített audit",
      "Google Business optimalizáció",
      "Havi 60 perc tanácsadás",
      "Prioritásos email támogatás",
    ],
    cta: "Érdekel →",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="arak" className="py-24 sm:py-32 bg-surface-blue relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Árazás
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Egyszerű, átlátható{" "}
              <span className="text-highlight">árak</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.12}>
              <div
                className={`relative rounded-2xl border p-8 lg:p-9 h-full flex flex-col card-hover ${
                  plan.featured
                    ? "border-primary bg-surface-card shadow-xl shadow-primary/10 ring-2 ring-primary/20"
                    : "border-border bg-surface-card"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-1 text-xs font-bold text-white shadow-md">
                    AJÁNLOTT
                  </div>
                )}

                <div className="mb-7">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 tracking-[-0.01em]">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-extrabold tracking-[-0.03em] text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-foreground-muted font-medium">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3.5 mb-9 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[0.9rem] text-foreground-secondary">
                      <svg
                        className="mt-0.5 shrink-0 text-success"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kapcsolat"
                  className={`block w-full text-center cursor-pointer rounded-xl px-6 py-4 text-sm font-bold transition-all duration-200 ${
                    plan.featured
                      ? "bg-accent text-white shadow-lg shadow-accent/25 cta-glow"
                      : "bg-surface text-foreground border border-border hover:border-primary hover:text-primary hover:shadow-md"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
