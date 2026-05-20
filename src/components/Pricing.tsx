const CARDS = [
  {
    idx: 0,
    tag: "01 / 03",
    name: "Képek",
    desc: "AI termékfotók, editorial kampányképek, trainer sheetek. Webshop, social media, hirdetés ready.",
  },
  {
    idx: 1,
    tag: "02 / 03",
    name: "Videók",
    desc: "15–30mp reklámvideók, UGC tartalom, cinematic teasers. TikTok, Reels, Facebook Ads ready.",
    variant: "featured" as const,
  },
  {
    idx: 2,
    tag: "03 / 03",
    name: "Kampány",
    desc: "Teljes vizuális kampány — képek + videók egységes stílusban. Havi együttműködés vagy egyszeri projekt.",
    variant: "featured-2" as const,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing__head">
        <div className="eyebrow">
          <span className="dot"></span>Árak
        </div>
        <h2>
          Minden projekt <span className="amber">egyedi</span>.
        </h2>
        <p className="pricing__sub">
          Nincs fix csomag — felmérjük, mire van szükséged, és ahhoz szabjuk az árat.
          Az első demókép ingyenes.
        </p>
      </div>

      <div className="pricing__stack">
        {CARDS.map((c) => (
          <article
            key={c.idx}
            className={`tier${c.variant ? " " + c.variant : ""}`}
            style={{ ["--idx" as string]: c.idx }}
          >
            <div className="tier__left">
              <div className="tier__tag">{c.tag}</div>
              <h3 className="tier__name">{c.name}</h3>
              <p className="tier__desc">{c.desc}</p>
            </div>
            <div className="tier__right">
              <div className="tier__cta">
                <a
                  href="mailto:info@hrvtstudio.hu?subject=Érdeklődés%20-%20"
                  className={`cta${!c.variant ? " cta--ghost" : ""}`}
                >
                  Demó kérése <span className="cta__arrow">→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
