const FAQS = [
  {
    q: "Tényleg nem látszik rajta hogy AI?",
    a: "Szolgáltatásunk lényege a stúdió minőség. Képeinket rendszeresen veszik valódi fotónak. Az eredmény számít, nem az eszköz — a végeredmény ugyanolyan profi, mint egy klasszikus stúdiófotózás.",
  },
  {
    q: "Mennyi idő alatt készül el?",
    a: "Általában 3–5 munkanap az átfutás. Sürgős esetben 24–48 óra is megoldható, prémium gyorsítási díjjal.",
  },
  {
    q: "Milyen iparágaknak?",
    a: "Fashion, fitness, étterem, szépségipar, e-commerce, ingatlan, automotive — bármely vizuális tartalmat igénylő vállalkozásnak.",
  },
  {
    q: "Hogyan indulhatunk el?",
    a: "Küldj egy üzenetet az info@hrvtstudio.hu címre, és ingyenesen elkészítünk egy demó képet a termékedről. Csak utána döntesz.",
  },
  {
    q: "Van szerződéses kötelezettség?",
    a: "Nincs. Havi előfizetés, bármikor lemondható — semmi minimum időtartam, semmi rejtett kötelezettség.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="faq__head">
        <h2>
          Pár
          <br />
          <span className="amber">kérdés</span>.
        </h2>
        <p>Gyakran kérdezik. Ha más is felmerül, küldj egy emailt — 24 órán belül válaszolunk.</p>
      </div>
      {FAQS.map((f, i) => (
        <details key={i} className="bigq" open={i === 0}>
          <summary>
            <span className="qnum">{String(i + 1).padStart(2, "0")}</span>
            <span className="qtext">{f.q}</span>
            <span className="qplus">+</span>
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </section>
  );
}
