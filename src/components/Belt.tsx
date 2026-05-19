const ITEMS = ["Termékfotó", "Editorial", "Reklámvideó", "UGC", "Brand kampány", "Content naptár"];

export default function Belt() {
  return (
    <section className="belt" aria-hidden="true">
      <div className="marquee">
        <div className="marquee__track">
          {ITEMS.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="marquee__track" aria-hidden="true">
          {ITEMS.map((t) => (
            <span key={`dup-${t}`}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
