export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-surface-card py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Logo + description */}
          <div className="flex flex-col items-center md:items-start gap-2.5">
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/tooth-logo.svg" alt="Fog logó" className="h-8 w-8" />
              <span className="font-heading text-lg font-bold tracking-[-0.02em] text-foreground">
                Dr. Minta Réka
              </span>
            </div>
            <p className="text-sm text-foreground-muted max-w-xs text-center md:text-left">
              Felnőtt fogorvosi rendelő Budapesten. Fájdalommentes fogászat, családias légkörben.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start gap-3 text-sm text-foreground-muted">
            <p className="font-heading font-semibold text-foreground-secondary text-xs uppercase tracking-wider">Navigáció</p>
            <a href="#szolgaltatasok" className="hover:text-primary transition-colors duration-200">Szolgáltatások</a>
            <a href="#rendelesi-ido" className="hover:text-primary transition-colors duration-200">Rendelési idő</a>
            <a href="#rolunk" className="hover:text-primary transition-colors duration-200">Rólunk</a>
            <a href="#kapcsolat" className="hover:text-primary transition-colors duration-200">Kapcsolat</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-3 text-sm text-foreground-muted">
            <p className="font-heading font-semibold text-foreground-secondary text-xs uppercase tracking-wider">Elérhetőségek</p>
            <a href="tel:+36301234567" className="hover:text-primary transition-colors duration-200">
              +36 30 123 4567
            </a>
            <a href="mailto:info@mintarendelo.hu" className="hover:text-primary transition-colors duration-200">
              info@mintarendelo.hu
            </a>
            <span>1234 Budapest, Példa utca 10.</span>
            <a href="/adatvedelem" className="hover:text-primary transition-colors duration-200">
              Adatvédelmi tájékoztató
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-border-light text-center text-xs text-foreground-muted leading-relaxed space-y-1">
          <p>
            <strong className="text-foreground-secondary">Dr. Minta Réka</strong> — Felnőtt fogorvosi rendelő
          </p>
          <p>
            1234 Budapest, Példa utca 10. &middot; +36 30 123 4567
          </p>
          <p className="pt-2">
            &copy; {new Date().getFullYear()} Dr. Minta Réka. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
