"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "/#szolgaltatasok", label: "Szolgáltatások" },
  { href: "/#portfolio", label: "Portfólió" },
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
          ? "bg-[#0C0A09]/92 backdrop-blur-xl shadow-[0_1px_0_rgba(200,169,110,0.1)] border-b border-[#2A2418]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-11 w-11 rounded-xl overflow-hidden border border-primary/20 shadow-sm shadow-primary/10 shrink-0">
              <Image
                src="/logo-icon.jpg"
                alt="HRVT Studio logo"
                width={44}
                height={44}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-heading font-bold tracking-[-0.02em] text-white">
                HRVT Studio
              </span>
              <span className="text-xs text-white/40 font-medium">AI Kreatív Tartalom</span>
            </div>
          </a>

          {/* Email — mobile */}
          <a
            href="mailto:info@hrvtstudio.hu"
            className="md:hidden flex items-center gap-1.5 text-white/80 font-semibold text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            Demó
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.9rem] font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:info@hrvtstudio.hu"
              className="inline-flex items-center gap-2 cursor-pointer rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-[#0C0A09] shadow-sm shadow-primary/20 hover:bg-primary-dark transition-all duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              Ingyenes demó
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
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
        <div className="md:hidden bg-[#0C0A09]/98 backdrop-blur-xl border-t border-[#2A2418]">
          <div className="px-5 py-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-white/70 hover:bg-white/5 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:info@hrvtstudio.hu"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center rounded-xl bg-primary px-5 py-3 mt-3 text-sm font-semibold text-[#0C0A09] hover:bg-primary-dark transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              Ingyenes demó kérése
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
