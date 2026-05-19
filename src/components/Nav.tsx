"use client";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <span className="nav__dot"></span>
        HRVT Studio
      </div>
      <div className="nav__links">
        <a href="#services">Szolgáltatások</a>
        <a href="#why">Miért mi</a>
        <a href="#pricing">Árak</a>
        <a href="#faq">GYIK</a>
      </div>
      <a href="https://www.instagram.com/hrvt.7/" target="_blank" rel="noopener noreferrer" className="nav__ig" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </nav>
  );
}
