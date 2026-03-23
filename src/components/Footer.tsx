export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span className="text-lg font-bold text-foreground">
                Web<span className="text-primary">Lelet</span>
              </span>
            </div>
            <p className="text-sm text-foreground-muted">
              AI-alapú weboldal diagnosztika
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-foreground-muted">
            <a href="mailto:info@weblelet.hu" className="hover:text-primary transition-colors">
              info@weblelet.hu
            </a>
            <a href="/adatvedelem" className="hover:text-primary transition-colors">
              Adatvédelmi tájékoztató
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-foreground-muted">
          &copy; {new Date().getFullYear()} WebLelet. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
}
