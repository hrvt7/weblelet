"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#hogyan-mukodik", label: "Hogyan működik" },
  { href: "#mit-vizsgalunk", label: "Mit vizsgálunk" },
  { href: "#arazas", label: "Árazás" },
  { href: "#miert-mi", label: "Miért mi" },
  { href: "#kapcsolat", label: "Kapcsolat" },
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
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-md shadow-primary/20">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <span className="text-xl font-heading font-bold tracking-[-0.02em] text-foreground">
              Web<span className="text-primary">Lelet</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.9rem] font-medium text-foreground-muted hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kapcsolat"
              className="inline-flex items-center cursor-pointer rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-accent/20 hover:bg-accent-dark hover:shadow-md hover:shadow-accent/30 transition-all duration-200"
            >
              Audit indítása
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-surface-blue transition-colors"
            aria-label="Menü"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
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
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground-secondary hover:bg-surface-blue hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kapcsolat"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center rounded-xl bg-accent px-5 py-3 mt-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              Audit indítása
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
