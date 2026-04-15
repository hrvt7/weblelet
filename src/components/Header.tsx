"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#szolgaltatasok", label: "Szolgáltatások" },
  { href: "/#munkaink", label: "Munkáink" },
  { href: "/#rendelesi-ido", label: "Rendelési idő" },
  { href: "/#rolunk", label: "Rólunk" },
  { href: "/blog", label: "Blog" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-border-light"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/renata.webp"
              alt="Dr. Köteles Renáta"
              className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/20"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-heading font-bold tracking-[-0.02em] text-foreground">
                Dr. Köteles Renáta
              </span>
              <span className="text-xs text-foreground-muted font-medium">Fogorvos</span>
            </div>
          </a>

          {/* Phone — always visible on mobile */}
          <a
            href="tel:+3694900887"
            className="md:hidden flex items-center gap-1.5 text-foreground font-semibold text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Hívás
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.9rem] font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+3694900887"
              className="inline-flex items-center gap-2 cursor-pointer rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/20 hover:bg-primary-dark hover:shadow-md transition-all duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Időpontfoglalás
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-surface-alt transition-colors"
            aria-label="Menü"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h12" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border-light">
          <div className="px-5 py-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground-secondary hover:bg-surface-alt hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+3694900887"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center rounded-xl bg-primary px-5 py-3 mt-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Időpontfoglalás: +36 94 900-887
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
