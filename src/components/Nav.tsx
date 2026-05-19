"use client";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <span className="nav__dot"></span>
        HRVT/Studio
      </div>
      <div className="nav__links">
        <a href="#services">Szolg.</a>
        <a href="#why">Miért</a>
        <a href="#pricing">Árak</a>
        <a href="#faq">GYIK</a>
      </div>
      <a href="#contact" className="nav__cta">Demó →</a>
    </nav>
  );
}
