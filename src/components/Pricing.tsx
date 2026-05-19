type Tier = {
  idx: number;
  tag: string;
  name: string;
  price: string;
  desc: string;
  features: { k: string; v: string }[];
  variant?: "featured" | "featured-2";
  ctaGhost?: boolean;
};

const TIERS: Tier[] = [
  {
    idx: 0,
    tag: "01 / 03 — Belépő",
    name: "Starter",
    price: "120€",
    desc: "Ideális: éttermek, szalonok, kiskereskedők — heti egy poszt, havi 8 termékfotó.",
    features: [
      { k: "AI termékfotó", v: "8 db / hó" },
      { k: "Formátumok", v: "1:1 · 4:5 · 9:16" },
      { k: "Átfutás", v: "3 munkanap" },
      { k: "Támogatás", v: "Email" },
    ],
    ctaGhost: true,
  },
  {
    idx: 1,
    tag: "02 / 03 — Legnépszerűbb",
    name: "Growth",
    price: "250€",
    desc: "Aktív social media jelenlétű vállalkozások — heti több poszt + havi reklámvideók.",
    features: [
      { k: "AI kép", v: "20 db / hó" },
      { k: "Reklámvideó", v: "2 × 15mp / hó" },
      { k: "Content naptár", v: "Havi" },
      { k: "Ads ready", v: "FB · IG" },
      { k: "Támogatás", v: "Prioritás" },
    ],
    variant: "featured",
  },
  {
    idx: 2,
    tag: "03 / 03 — Skálázódó",
    name: "Pro",
    price: "450€",
    desc: "Skálázódó brandek és e-commerce — korlátlan kép és teljes kampányvideók.",
    features: [
      { k: "AI kép", v: "Korlátlan" },
      { k: "Kampányvideó", v: "2 db / hó" },
      { k: "Art-direction", v: "Konzultáció" },
      { k: "Account manager", v: "Dedikált" },
      { k: "Támogatás", v: "Telefonos" },
    ],
    variant: "featured-2",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing__head">
        <div className="eyebrow">
          <span className="dot"></span>Árak · havi előfizetés
        </div>
        <h2>
          Válassz <span className="amber">csomagot</span>.
        </h2>
        <div className="pricing__hint">↓ Görgess — egymásra csúsznak</div>
      </div>

      <div className="pricing__stack">
        {TIERS.map((t) => (
          <article
            key={t.idx}
            className={`tier${t.variant ? " " + t.variant : ""}`}
            style={{ ["--idx" as string]: t.idx }}
          >
            <div className="tier__left">
              <div className="tier__tag">{t.tag}</div>
              <h3 className="tier__name">{t.name}</h3>
              <div className="tier__price">
                <span className="num">{t.price}</span>
                <span className="per">/ hó</span>
              </div>
              <p className="tier__desc">{t.desc}</p>
            </div>
            <div className="tier__right">
              <ul className="tier__features">
                {t.features.map((f) => (
                  <li key={f.k}>
                    {f.k} <b>{f.v}</b>
                  </li>
                ))}
              </ul>
              <div className="tier__cta">
                <a
                  href="#contact"
                  className={`cta${t.ctaGhost ? " cta--ghost" : ""}`}
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
