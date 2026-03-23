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
    <section id="arak" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Egyszerű, átlátható{" "}
              <span className="text-primary">árak</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl border p-8 h-full flex flex-col ${
                  plan.featured
                    ? "border-primary bg-white shadow-xl shadow-primary/10 ring-2 ring-primary"
                    : "border-border bg-white"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
                    ⭐ AJÁNLOTT
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-foreground-muted">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-foreground-muted">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
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
                  className={`block w-full text-center rounded-xl px-6 py-3.5 text-sm font-bold transition-all ${
                    plan.featured
                      ? "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-dark"
                      : "bg-background-alt text-foreground border border-border hover:border-primary hover:text-primary"
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
