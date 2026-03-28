import FadeIn from "./FadeIn";

const plans = [
  {
    name: "AUDIT",
    price: "0,99 €",
    priceNote: "egyszeri díj",
    highlighted: false,
    features: [
      "Komplett diagnózis PDF riportban",
      "96 szempont, 4 dimenzió",
      "SEO + AI keresők + Marketing + Jogi",
      "43 compliance szempont (5 keretrendszer)",
      "Priorizált hibák és azonnali teendők",
      "Megállapítások jelölve: TÉNY / BECSLÉS / JAVASLAT",
    ],
    cta: "Audit indítása",
    ctaHref: "#kapcsolat",
  },
  {
    name: "PRO",
    price: "Személyre szabott",
    priceNote: "a weboldalad alapján",
    highlighted: true,
    features: [
      "Minden ami az AUDIT csomagban",
      "Kész Schema Markup (JSON-LD) kód — csak be kell illeszteni",
      "llms.txt fájl generálás — AI keresőkre optimalizálva",
      "Egyedi stratégia és implementációs terv",
      "Partner adatlap elemzés (forgalom, célok, költségkeret)",
      "30/60/90 napos cselekvési roadmap",
      "Személyes konzultáció (30 perc)",
      "Versenytárs elemzés",
      "Outreach stratégia és sales anyagok",
    ],
    cta: "Egyedi árajánlat kérése",
    ctaHref: "#kapcsolat",
  },
];

function Check({ color }: { color: string }) {
  return (
    <svg className={`shrink-0 mt-0.5 ${color}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="arazas" className="py-24 sm:py-32 bg-surface-blue relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Árazás
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Válaszd ki ami{" "}
              <span className="text-highlight">illik</span>
            </h2>
          </div>
        </FadeIn>

        <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.15}>
              <div
                className={`rounded-2xl p-8 lg:p-9 h-full flex flex-col ${
                  plan.highlighted
                    ? "border-2 border-primary bg-surface-card shadow-xl shadow-primary/8 relative"
                    : "border border-border bg-surface-card"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white shadow-md">
                    Népszerű
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`font-heading text-lg font-bold tracking-[-0.01em] mb-2 ${plan.highlighted ? "text-primary" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-foreground">
                    {plan.price}
                  </div>
                  <p className="text-sm text-foreground-muted mt-1">{plan.priceNote}</p>
                </div>

                <ul className="space-y-3.5 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-[0.9rem] text-foreground-secondary leading-snug">
                      <Check color={plan.highlighted ? "text-primary" : "text-success"} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaHref}
                  className={`block w-full text-center rounded-2xl px-8 py-4 text-[1rem] font-bold transition-all cursor-pointer ${
                    plan.highlighted
                      ? "bg-accent text-white shadow-xl shadow-accent/25 cta-glow"
                      : "bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-xl"
                  }`}
                >
                  {plan.cta}&ensp;&rarr;
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
