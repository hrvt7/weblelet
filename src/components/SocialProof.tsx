import FadeIn from "./FadeIn";

const stats = [
  { value: "53", label: "szempont — GEO/SEO + Marketing + Üzleti potenciál", accent: "text-primary" },
  { value: "48 óra", label: "alatt megkapod a személyre szabott diagnózist", accent: "text-accent" },
  { value: "Kész kód", label: "nem csak hibákat keresünk — kész megoldásokat is kapsz", accent: "text-success" },
  { value: "0 Ft", label: "az első diagnózis ingyenes, kötelezettség nélkül", accent: "text-primary" },
];

export default function SocialProof() {
  return (
    <section className="relative bg-surface-card border-y border-border-light py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-sm font-medium text-foreground-muted mb-10 tracking-wide uppercase">
            Amit a diagnózis ad
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center p-5 sm:p-6 rounded-2xl bg-surface border border-border-light card-hover">
                <div
                  className={`font-heading text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] ${stat.accent}`}
                >
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-foreground-muted leading-snug">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
