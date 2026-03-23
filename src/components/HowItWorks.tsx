import FadeIn from "./FadeIn";

const steps = [
  {
    num: "1",
    title: "Megadod a weboldal címét",
    description:
      "Kitöltöd az űrlapot a weboldalad URL-jével. Ennyi. Nem kell jelszó, nem kell hozzáférés, nem kell semmit telepíteni.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    num: "2",
    title: "15 AI agent elemzi az oldalad",
    description:
      "A mesterséges intelligencia 3 dimenzióban vizsgálja a weboldaladat: Google és AI keresők láthatósága, marketing hatékonyság, és értékesítési potenciál.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </svg>
    ),
  },
  {
    num: "3",
    title: "Megkapod a személyre szabott riportot",
    description:
      "48 órán belül emailben küldünk egy 10+ oldalas PDF riportot — konkrét pontszámokkal, problémalistával és cselekvési tervvel.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="hogyan-mukodik" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              3 lépés a weboldalad{" "}
              <span className="text-primary">leletéhez</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.15}>
              <div className="relative rounded-2xl border border-border bg-white p-8 hover:shadow-lg hover:border-primary/20 transition-all group">
                <div className="absolute -top-4 left-8 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                  {step.num}
                </div>
                <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
