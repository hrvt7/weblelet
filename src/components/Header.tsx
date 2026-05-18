"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#portfolio", label: "Portfólió" },
  { href: "/#szolgaltatasok", label: "Szolgáltatások" },
  { href: "/#arazas", label: "Árak" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1E1100]/95 backdrop-blur-xl border-b border-[#3A2408]/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-[68px] items-center justify-end">
          {/* Hamburger button — only element in header */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Menü"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
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

      {/* Mobile / full menu */}
      {menuOpen && (
        <div className="bg-[#1E1100]/98 backdrop-blur-xl border-t border-[#3A2408]/60">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-5 py-3.5 text-base font-medium text-foreground/70 hover:bg-white/5 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:info@hrvtstudio.hu"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center rounded-xl bg-primary px-5 py-3.5 mt-4 text-sm font-bold text-[#1E1100] hover:bg-primary-dark transition-colors"
            >
              Ingyenes demó kérése
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
