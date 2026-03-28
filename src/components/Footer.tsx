export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-surface-card py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Logo + description */}
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
            <p className="text-sm text-foreground-muted max-w-xs text-center md:text-left">
              AI-alapú weboldal audit: GEO optimalizálás és SEO elemzés magyar vállalkozásoknak.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start gap-3 text-sm text-foreground-muted">
            <p className="font-heading font-semibold text-foreground-secondary text-xs uppercase tracking-wider">Navigáció</p>
            <a href="#hogyan-mukodik" className="hover:text-primary transition-colors duration-200">Hogyan működik</a>
            <a href="#mit-vizsgalunk" className="hover:text-primary transition-colors duration-200">Mit vizsgálunk</a>
            <a href="#arazas" className="hover:text-primary transition-colors duration-200">Weboldal audit árak</a>
            <a href="#miert-mi" className="hover:text-primary transition-colors duration-200">Miért a WebLelet</a>
            <a href="#kapcsolat" className="hover:text-primary transition-colors duration-200">Audit indítása</a>
          </div>

          {/* Contact + legal */}
          <div className="flex flex-col items-center md:items-start gap-3 text-sm text-foreground-muted">
            <p className="font-heading font-semibold text-foreground-secondary text-xs uppercase tracking-wider">Kapcsolat</p>
            <a href="mailto:info@weblelet.hu" className="hover:text-primary transition-colors duration-200">
              info@weblelet.hu
            </a>
            <a href="https://www.linkedin.com/company/weblelet" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
              LinkedIn
            </a>
            <a href="/adatvedelem" className="hover:text-primary transition-colors duration-200">
              Adatvédelem
            </a>
            <a href="/aszf" className="hover:text-primary transition-colors duration-200">
              ÁSZF
            </a>
          </div>
        </div>

        {/* SEO text + Impresszum */}
        <div className="mt-10 pt-8 border-t border-border-light text-center text-xs text-foreground-muted leading-relaxed space-y-3">
          <p className="max-w-2xl mx-auto">
            A WebLelet AI-alapú weboldal audit szolgáltatás, amely GEO optimalizálást (Generative Engine Optimization) és SEO elemzést kínál magyar vállalkozásoknak. Mérd meg a weboldalad láthatóságát a ChatGPT-ben, Perplexity-ben, Gemini-ben és a Google-ben.
          </p>
          <div className="space-y-1 pt-2">
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
      </div>
    </footer>
  );
}
