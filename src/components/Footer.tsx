export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-surface-card py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center shadow-sm shadow-primary/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span className="font-heading text-lg font-bold tracking-[-0.02em] text-foreground">
                Web<span className="text-primary">Lelet</span>
              </span>
            </div>
            <p className="text-sm text-foreground-muted">
              AI-alapú weboldal elemző rendszer
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-sm text-foreground-muted">
            <a
              href="mailto:info@weblelet.hu"
              className="hover:text-primary transition-colors duration-200"
            >
              info@weblelet.hu
            </a>
            <a
              href="https://www.linkedin.com/company/weblelet"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="/adatvedelem"
              className="hover:text-primary transition-colors duration-200"
            >
              Adatvédelem
            </a>
            <a
              href="/aszf"
              className="hover:text-primary transition-colors duration-200"
            >
              ÁSZF
            </a>
          </div>
        </div>

        {/* Impresszum */}
        <div className="mt-10 pt-8 border-t border-border-light text-center text-xs text-foreground-muted leading-relaxed space-y-1">
          <p>
            <strong className="text-foreground-secondary">WebLelet</strong> — Horváth Ádám
          </p>
          <p>
            9700 Szombathely &middot; info@weblelet.hu
          </p>
          <p>
            Tárhelyszolgáltató: Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA)
          </p>
          <p className="pt-2">
            &copy; {new Date().getFullYear()} WebLelet. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
