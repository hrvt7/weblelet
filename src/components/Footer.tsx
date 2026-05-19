export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__big">
        HRVT<span className="amb">/</span>
        <span className="ital">studio</span>
      </h2>
      <div className="footer__row">
        <div className="footer__col">
          <h4>Stúdió</h4>
          <a href="#services">Szolgáltatások</a>
          <a href="#why">Miért</a>
          <a href="#pricing">Árak</a>
        </div>
        <div className="footer__col">
          <h4>Társaság</h4>
          <a href="#faq">GYIK</a>
          <a href="mailto:info@hrvtstudio.hu">Kapcsolat</a>
          <a href="#services">Portfólió</a>
        </div>
        <div className="footer__col">
          <h4>Jog</h4>
          <a href="/adatvedelem">Adatvédelem</a>
          <a href="/aszf">ÁSZF</a>
        </div>
        <div className="footer__col">
          <h4>Egyéb</h4>
          <a href="#contact">Ingyenes demó</a>
          <a href="mailto:info@hrvtstudio.hu">Email</a>
        </div>
      </div>
    </footer>
  );
}
