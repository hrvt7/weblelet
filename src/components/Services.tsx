type ServiceItem = {
  idx: number;
  title: string;
  desc: string;
  pills: string[];
  img: string;
};

const SERVICES: ServiceItem[] = [
  {
    idx: 0,
    title: "AI termék-\nfotó",
    desc: "Professzionális termékképek fehér háttéren, több szögből. Egységes brand-stílusban, kész formátumokban: webshop, Instagram, Facebook, Google Shopping.",
    pills: ["Webshop ready", "Multi-angle", "24–72h"],
    img: "/portfolio/portfolio-2.jpg",
  },
  {
    idx: 1,
    title: "Editorial\nkampány",
    desc: "Modelles, helyszínes, stúdió hangulatú képek. Magazinminőségű kampányképek, amiket senki nem néz AI-nak.",
    pills: ["Magazin szint", "Mood-based", "Hi-fi"],
    img: "/portfolio/portfolio-4.jpg",
  },
  {
    idx: 2,
    title: "AI reklám-\nvideó",
    desc: "15–30 másodperces social media videók. TikTok, Reels, Facebook Ads ready, magyar narrációval vagy felirattal.",
    pills: ["9:16", "1:1", "16:9"],
    img: "/portfolio/portfolio-1.jpg",
  },
  {
    idx: 3,
    title: "UGC\ntartalom",
    desc: "Hétköznapi, hiteles UGC stílusú videók és képek. AI-val olcsóbban és gyorsabban — ugyanaz a konverzió.",
    pills: ["Authentic", "High-CR", "Mobile-first"],
    img: "/portfolio/portfolio-3.jpg",
  },
  {
    idx: 4,
    title: "Brand\nkampány",
    desc: "Komplett vizuális kampány egységes stílusban: képek, videók, posztok — minden touchpointon konzisztens identity.",
    pills: ["Full system", "Art-direction"],
    img: "/portfolio/portfolio-6.jpg",
  },
  {
    idx: 5,
    title: "Content\nnaptár",
    desc: "Havi tartalomterv: mikor, mit, milyen szöveggel posztolj. Heti rendszerességgel előre megtervezve.",
    pills: ["Heti", "Havi", "Multi-platform"],
    img: "/portfolio/portfolio-5.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__head">
        <h2>
          Mit <span className="amber">csinálunk</span>
          <br />
          helyetted.
        </h2>
        <p>
          Hat csomag, ami lefedi mindazt, amit egy magyar brandnek vizuálisan elő kell állítania —
          webshopra, social mediára, hirdetésekre.
        </p>
      </div>

      <div className="stack">
        {SERVICES.map((s) => (
          <article
            key={s.idx}
            className="stack__card"
            style={{ ["--idx" as string]: s.idx }}
          >
            <div className="stack__bg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt="" />
            </div>
            <div className="stack__inner">
              <div>
                <h3 className="stack__title">
                  {s.title.split("\n").map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </h3>
                <p className="stack__desc">{s.desc}</p>
                <div className="stack__pills">
                  {s.pills.map((p) => (
                    <span key={p}>{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="stack__hint">↓ Görgess — egymásra csúsznak</div>
    </section>
  );
}
