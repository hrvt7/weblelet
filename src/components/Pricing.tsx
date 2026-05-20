const CARDS = [
  {
    title: "Képek",
    desc: "AI termékfotók, editorial kampányképek, trainer sheetek. Webshop, social media, hirdetés ready.",
  },
  {
    title: "Videók",
    desc: "15–30mp reklámvideók, UGC tartalom, cinematic teasers. TikTok, Reels, Facebook Ads ready.",
  },
  {
    title: "Kampány",
    desc: "Teljes vizuális kampány — képek + videók egységes stílusban. Havi együttműködés vagy egyszeri projekt.",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing__head">
        <h2>
          Minden projekt <span className="amber">egyedi</span>.
        </h2>
        <p className="pricing__sub">
          Nincs fix csomag — felmérjük, mire van szükséged, és ahhoz szabjuk az árat.
          Az első demókép ingyenes.
        </p>
      </div>

      <div className="pricing__cards">
        {CARDS.map((c) => (
          <div key={c.title} className="pricing__card">
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="pricing__cta">
        <a href="mailto:info@hrvtstudio.hu?subject=Ingyenes%20demó%20és%20árajánlat" className="cta">
          Kérj ingyenes demót és egyedi árajánlatot <span className="cta__arrow">→</span>
        </a>
      </div>
    </section>
  );
}
