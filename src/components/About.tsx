import FadeIn from "./FadeIn";

const benefits = [
  {
    num: "01",
    title: "Stúdió minőség",
    desc: "Olyan képek és videók, amiket senki nem néz AI-nak. Valódi editorial fotózás érzése — magazinminőség, profi kompozíció, hiteles megjelenés.",
  },
  {
    num: "02",
    title: "90% megtakarítás",
    desc: "Hagyományos stúdiófotózás töredékáráért. Ugyanolyan eredmény, tized annyi pénzért — modell, stúdió, post-produkció nélkül.",
  },
  {
    num: "03",
    title: "Gyors átfutás",
    desc: "3-5 munkanap. Nem kell stúdiót foglalni, modellt keresni, napokat utómunkázni. Megrendelés és kész tartalom egy héten belül.",
  },
  {
    num: "04",
    title: "Magyar piac",
    desc: "Magyar vállalkozásoknak tervezett szolgáltatás. Értjük a piacot, az ügyfeleket, a kulturális kontextust.",
  },
];

export default function About() {
  return (
    <section id="rolunk" className="py-24 sm:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/6 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Miért HRVT Studio
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Stúdióminőség.{" "}
              <span className="text-highlight">Tized annyi pénzért.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {benefits.map((benefit, i) => (
            <FadeIn key={benefit.num} delay={i * 0.1}>
              <div className="relative rounded-2xl border border-border/60 bg-surface-card p-5 sm:p-6 lg:p-7 card-hover h-full overflow-hidden group">
                {/* Subtle top gradient line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                {/* Number */}
                <span className="block font-heading text-4xl sm:text-5xl font-extrabold text-primary/20 leading-none mb-4 select-none group-hover:text-primary/30 transition-colors">
                  {benefit.num}
                </span>
                <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-2 tracking-[-0.01em] leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-[0.82rem] sm:text-[0.88rem] text-foreground-secondary leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
