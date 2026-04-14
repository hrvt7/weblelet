import FadeIn from "./FadeIn";

const benefits = [
  {
    title: "Családias légkör",
    desc: "Nálunk nem kell a fogorvostól félni. Barátságos, nyugodt környezetben dolgozunk.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Modern eszközök",
    desc: "Korszerű anyagok és digitális technológia a pontos diagnózisért és tartós eredményért.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Fájdalommentes kezelés",
    desc: "Megfelelő érzéstelenítéssel a kezelések kényelmesen, fájdalom nélkül zajlanak.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "TB-támogatott ellátás",
    desc: "NEAK szerződéses rendelő — az alapellátás társadalombiztosítás keretében igénybe vehető.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="rolunk" className="py-24 sm:py-32 bg-surface-alt relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Rólunk
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Miért{" "}
              <span className="text-highlight">válasszon minket?</span>
            </h2>
            <p className="mt-6 text-lg text-foreground-secondary leading-relaxed max-w-xl mx-auto">
              Fogászatunk elsődleges célja pácienseink gyors és fájdalommentes kezelése, kellemes, családias légkörben.
            </p>
            <p className="mt-4 text-foreground-muted leading-relaxed max-w-xl mx-auto">
              Rendelőnk a szombathelyi Markusovszky Lajos utcai orvosi központban működik, könnyen megközelíthető helyen. Modern eszközökkel és korszerű módszerekkel dolgozunk, miközben pácienseink igényeit nagyfokú odafigyeléssel követjük.
            </p>
            <div className="mt-8 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/kreatikar-teeth-3597679.jpg"
                alt="Modern fogpótlás és implantátum illusztráció"
                className="rounded-2xl shadow-lg max-w-md w-full border border-border"
              />
            </div>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <FadeIn key={benefit.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-surface-card p-7 lg:p-8 card-hover group h-full">
                <div className="h-12 w-12 rounded-2xl bg-primary/8 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 tracking-[-0.01em]">
                  {benefit.title}
                </h3>
                <p className="text-[0.9rem] text-foreground-muted leading-relaxed">
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
