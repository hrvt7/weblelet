import FadeIn from "./FadeIn";

const benefits = [
  {
    title: "Stúdió minőség",
    desc: "Olyan képek és videók, amiket senki nem néz AI-nak. Valódi editorial fotózás érzése — magazinminőség, profi kompozíció, hiteles megjelenés.",
    icon: "✨",
  },
  {
    title: "90% költségmegtakarítás",
    desc: "Hagyományos stúdiófotózás töredékáráért. Ugyanolyan eredmény, tized annyi pénzért — modell, stúdió, post-produkció nélkül.",
    icon: "💰",
  },
  {
    title: "Gyors átfutás",
    desc: "3-5 munkanap. Nem kell stúdiót foglalni, modellt keresni, fotóst várni, napokat utómunkázni. Megrendelés és kész tartalom egy héten belül.",
    icon: "⚡",
  },
  {
    title: "Magyar piac",
    desc: "Magyar vállalkozásoknak tervezett szolgáltatás. Értjük a piacot, az ügyfeleket, a kulturális kontextust — és magyarul kommunikálunk.",
    icon: "🇭🇺",
  },
];

export default function About() {
  return (
    <section id="rolunk" className="py-24 sm:py-32 bg-surface-alt relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Miért HRVT Studio
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Stúdióminőség.{" "}
              <span className="text-highlight">Tized annyi pénzért.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground-secondary leading-relaxed max-w-xl mx-auto">
              A HRVT Studio AI-alapú vizuális tartalom-szolgáltatás. Profi termékfotók, kampányképek és reklámvideók — gyorsabban, olcsóbban, ugyanolyan minőségben mint a klasszikus stúdiók.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {benefits.map((benefit, i) => (
            <FadeIn key={benefit.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-surface-card p-6 lg:p-7 card-hover group h-full">
                <div className="h-14 w-14 rounded-2xl bg-primary/8 flex items-center justify-center text-2xl mb-4 group-hover:bg-primary/15 transition-colors">
                  <span>{benefit.icon}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 tracking-[-0.01em]">
                  {benefit.title}
                </h3>
                <p className="text-[0.9rem] text-foreground-secondary leading-relaxed">
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
