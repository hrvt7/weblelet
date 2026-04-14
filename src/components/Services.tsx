import FadeIn from "./FadeIn";

const services = [
  {
    title: "Fogászati szűrővizsgálat",
    desc: "Rendszeres kontroll a fogak és az íny állapotának felmérésére. A korai felismerés a leghatékonyabb megelőzés.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Fogmegtartó kezelések",
    desc: "Esztétikus tömések és gyökérkezelések korszerű, tartós anyagokkal. Célunk minden fog megmentése.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    title: "Fogkőeltávolítás és tisztítás",
    desc: "Ultrahangos fogkő-eltávolítás és polírozás az egészséges fogínyért és a ragyogó mosolyért.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Fogpótlás",
    desc: "Koronák, hidak és kivehető fogsorok természetes megjelenéssel. Az elveszett fogak pótlása a rágás és az esztétika érdekében.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    title: "Esztétikai fogászat",
    desc: "Fogfehérítés és esztétikai megoldások a magabiztos mosolyért. Mert az első benyomás a mosolynál kezdődik.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Fogeltávolítás",
    desc: "Kíméletes foghúzás, bölcsességfog eltávolítás megfelelő érzéstelenítéssel és utógondozási tanácsadással.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Gyermekfogászat",
    desc: "Játékos, barátságos fogászati élmény a legkisebbeknek. Barázdazárás és fluoridos kezelés a megelőzésért.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <circle cx="12" cy="12" r="10" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Sürgősségi ellátás",
    desc: "Akut fogfájás, eltörött fog vagy egyéb sürgős fogászati probléma esetén mielőbbi ellátás.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="szolgaltatasok" className="py-24 sm:py-32 bg-surface-alt relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Szolgáltatások
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Széleskörű{" "}
              <span className="text-highlight">fogászati ellátás</span>
            </h2>
            <p className="mt-4 text-foreground-secondary text-lg">
              A legmodernebb módszerekkel, családias légkörben.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-border bg-surface-card p-7 h-full card-hover group">
                <div className="h-12 w-12 rounded-2xl bg-primary/8 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading text-[1.05rem] font-bold text-foreground mb-2 tracking-[-0.01em]">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
