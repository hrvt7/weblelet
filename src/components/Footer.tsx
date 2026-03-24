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
              AI-alapú weboldal diagnosztika
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
              Adatvédelmi tájékoztató
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border-light text-center text-xs text-foreground-muted">
          &copy; {new Date().getFullYear()} WebLelet. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
}
