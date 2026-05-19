type WhyItem = {
  idx: number;
  num: string;
  title: string;
  desc?: string;
  img: string;
  feature?: boolean;
};

const ITEMS: WhyItem[] = [
  {
    idx: 0,
    num: "— 01",
    title: "90%",
    desc: "Költségmegtakarítás a hagyományos stúdiófotózáshoz képest. Ugyanolyan eredmény, tized annyi pénzért.",
    img: "/why/why-01.png",
    feature: true,
  },
  {
    idx: 1,
    num: "— 02",
    title: "3–5 nap",
    desc: "Átfutás megrendeléstől a kész tartalomig. Sürgős esetben 24–48 óra is megoldható.",
    img: "/why/why-02.png",
  },
  {
    idx: 2,
    num: "— 03",
    title: "Stúdió\nminőség",
    desc: "Olyan képek és videók, amiket senki nem néz AI-nak. Magazinminőség, profi kompozíció, hiteles megjelenés.",
    img: "/portfolio/portfolio-7.jpg",
  },
  {
    idx: 3,
    num: "— 04",
    title: "Magyar piac",
    desc: "Magyar vállalkozásoknak szabva. Értjük a piacot, az ügyfeleket, a kulturális kontextust.",
    img: "/why/why-03.png",
  },
  {
    idx: 4,
    num: "— 05",
    title: "Senki nem\nnézi AI-nak.",
    desc: "Az eredmény számít, nem az eszköz. Képeinket rendszeresen veszik valódi fotónak.",
    img: "/why/why-04.png",
  },
  {
    idx: 5,
    num: "— 06",
    title: "Cancel anytime",
    desc: "Havi előfizetés, bármikor lemondható. Semmi minimum időtartam, semmi rejtett kötelezettség. Próbáld ki egy hónapra, és döntsd el utána.",
    img: "/why/why-05.png",
  },
];

export default function Why() {
  return (
    <section id="why" className="bento">
      <div className="bento__head">
        <div className="eyebrow">
          <span className="dot"></span>Miért HRVT
        </div>
        <h2>
          Stúdió <span className="strike-l">drága</span>.
          <br />
          <span className="amber">Tized</span> annyi pénzért.
        </h2>
        <div className="bento__hint">↓ Görgess — egymásra csúsznak</div>
      </div>

      <div className="bento__stack">
        {ITEMS.map((it) => (
          <div
            key={it.idx}
            className={`bx${it.feature ? " bx--feature" : ""}`}
            style={{ ["--idx" as string]: it.idx }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="bx__bg" src={it.img} alt="" />
            <div className="bx__num">{it.num}</div>
            <div>
              <h3>
                {it.title.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </h3>
              {it.desc && <p>{it.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
