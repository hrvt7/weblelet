import FadeIn from "./FadeIn";

const stats = [
  { value: "73%", label: "nincs schema markup", accent: "text-danger" },
  { value: "38/100", label: "átlagos marketing pontszám", accent: "text-accent" },
  { value: "0%", label: "használja az AI keresőoptimalizálást", accent: "text-danger" },
  { value: "~300K Ft", label: "havonta elveszett bevétel", accent: "text-primary" },
];

export default function SocialProof() {
  return (
    <section className="relative bg-surface-card border-y border-border-light py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-sm font-medium text-foreground-muted mb-10 tracking-wide uppercase">
            Ezeket a problémákat találtuk a vizsgált magyar cégeknél
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
