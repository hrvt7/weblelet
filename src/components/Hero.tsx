import FadeIn from "./FadeIn";

const quickInfo = [
  { icon: "shield", label: "TB-támogatott ellátás" },
  { icon: "clock", label: "Hétfő – Péntek" },
  { icon: "phone", label: "+36 94 900-887" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden wave-divider">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 -z-20 bg-white" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_#CCFBF1_0%,_transparent_70%)] -z-10 opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,_#F0FDFA_0%,_transparent_70%)] -z-10 opacity-60" />
      <div className="absolute inset-0 -z-10 dot-grid opacity-[0.2]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — text */}
          <div className="lg:col-span-7">
            <FadeIn>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Fogorvosi rendelő — Szombathely
              </p>
              <h1
                className="font-heading font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground"
                style={{ fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 3.75rem)" }}
              >
                Fájdalommentes fogászat,{" "}
                <span className="text-highlight">családias légkörben.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="mt-7 text-lg leading-relaxed text-foreground-secondary max-w-[540px]">
                Modern eszközök, gondos odafigyelés, TB-támogatott ellátás. Szombathely, Markusovszky Lajos u. 8.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+3694900887"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-primary px-8 py-4.5 text-[1rem] font-bold text-white shadow-xl shadow-primary/20 cta-glow whitespace-nowrap cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Időpontfoglalás
                </a>
                <a
                  href="#rendelesi-ido"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-primary/20 px-8 py-4.5 text-[1rem] font-bold text-primary hover:bg-primary/5 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Rendelési idő
                </a>
              </div>
            </FadeIn>

            {/* Quick info badges */}
            <FadeIn delay={0.36}>
              <div className="mt-8 flex flex-wrap gap-3">
                {quickInfo.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full bg-primary/6 border border-primary/10 px-4 py-2 text-xs font-semibold text-primary"
                  >
                    {item.icon === "phone" ? (
                      <a href="tel:+3694900887" className="hover:underline">{item.label}</a>
                    ) : (
                      item.label
                    )}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right — schedule card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 transform rotate-2 scale-[1.02] -z-10" />
                <div className="rounded-2xl bg-surface-card border border-border shadow-2xl shadow-primary/8 p-7 sm:p-8 max-w-sm transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-11 w-11 rounded-xl bg-primary/8 flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-heading font-bold text-foreground">Rendelési idő</div>
                      <div className="text-xs text-foreground-muted">Hétfő – Péntek</div>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-sm">
                    {[
                      { day: "Hétfő", time: "13:30 – 19:30" },
                      { day: "Kedd", time: "07:30 – 13:30" },
                      { day: "Szerda", time: "13:30 – 19:30" },
                      { day: "Csütörtök", time: "07:30 – 13:30" },
                      { day: "Péntek", time: "Váltakozó" },
                    ].map((row) => (
                      <div key={row.day} className="flex justify-between items-center py-1.5 border-b border-border-light last:border-0">
                        <span className="text-foreground-secondary font-medium">{row.day}</span>
                        <span className="font-bold text-foreground">{row.time}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-border">
                    <a
                      href="tel:+3694900887"
                      className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary/8 text-primary font-bold text-sm py-3 hover:bg-primary/15 transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      +36 94 900-887
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
