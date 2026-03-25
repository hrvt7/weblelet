import FadeIn from "./FadeIn";

export default function Pricing() {
  return (
    <section id="egyuttmukodes" className="py-24 sm:py-32 bg-surface-blue relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Együttműködés
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Hogyan tudunk{" "}
              <span className="text-highlight">együttműködni?</span>
            </h2>
            <p className="mt-6 text-lg text-foreground-secondary leading-relaxed">
              A rendszert jelenleg személyes együttműködés keretében érhetik el
              marketing ügynökségek és vállalkozások. Minden projekt egyedi — az
              árazás az igényekhez igazodik.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#kapcsolat"
                className="inline-flex items-center justify-center cursor-pointer rounded-2xl bg-accent px-9 py-4 text-[1.05rem] font-bold text-white shadow-xl shadow-accent/25 cta-glow"
              >
                Kérek egy demo auditot&ensp;&rarr;
              </a>
              <a
                href="mailto:info@weblelet.hu"
                className="inline-flex items-center justify-center rounded-2xl bg-surface-card border border-border px-9 py-4 text-[1.05rem] font-bold text-foreground hover:border-primary hover:text-primary transition-all"
              >
                info@weblelet.hu
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
