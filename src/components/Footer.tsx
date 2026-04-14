export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-surface-card py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Logo + description */}
          <div className="flex flex-col items-center md:items-start gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center shadow-sm shadow-primary/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C10 2 8 3.5 7 6C6 8.5 6 11 7 13C8.5 16 10 18 10 22" />
                  <path d="M12 2C14 2 16 3.5 17 6C18 8.5 18 11 17 13C15.5 16 14 18 14 22" />
                </svg>
              </div>
              <span className="font-heading text-lg font-bold tracking-[-0.02em] text-foreground">
                Dr. Köteles Renáta
              </span>
            </div>
            <p className="text-sm text-foreground-muted max-w-xs text-center md:text-left">
              Felnőtt fogorvosi rendelő Szombathelyen. Fájdalommentes fogászat, családias légkörben.
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
            <a href="tel:+3694900887" className="hover:text-primary transition-colors duration-200">
              +36 94 900-887
            </a>
            <a href="mailto:dr.renatalarissza@yahoo.com" className="hover:text-primary transition-colors duration-200">
              dr.renatalarissza@yahoo.com
            </a>
            <span>9700 Szombathely, Markusovszky Lajos u. 8.</span>
            <a href="/adatvedelem" className="hover:text-primary transition-colors duration-200">
              Adatvédelmi tájékoztató
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-border-light text-center text-xs text-foreground-muted leading-relaxed space-y-1">
          <p>
            <strong className="text-foreground-secondary">Dr. Köteles Renáta</strong> — Felnőtt fogorvosi rendelő
          </p>
          <p>
            9700 Szombathely, Markusovszky Lajos u. 8. &middot; +36 94 900-887
          </p>
          <p className="pt-2">
            &copy; {new Date().getFullYear()} Dr. Köteles Renáta. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
