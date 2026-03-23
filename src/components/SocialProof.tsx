import FadeIn from "./FadeIn";

const stats = [
  { value: "73%", label: "nincs schema markup" },
  { value: "38/100", label: "átlagos marketing pontszám" },
  { value: "0%", label: "használja az AI keresőoptimalizálást" },
  { value: "~300K Ft/hó", label: "átlagos elveszett bevétel" },
];

export default function SocialProof() {
  return (
    <section className="bg-background-alt border-y border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-sm font-medium text-foreground-muted mb-8">
            Ezeket a problémákat találtuk a vizsgált szombathelyi cégeknél:
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center p-4 rounded-xl bg-white border border-border">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-foreground-muted">
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
