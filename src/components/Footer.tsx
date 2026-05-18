export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-surface-card py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Logo + description */}
          <div className="flex flex-col items-center md:items-start gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-sm shadow-primary/20">
                <span className="text-white font-heading font-extrabold text-sm tracking-tight">HRVT</span>
              </div>
              <span className="font-heading text-lg font-bold tracking-[-0.02em] text-foreground">
                HRVT Studio
              </span>
            </div>
            <p className="text-sm text-foreground-muted max-w-xs text-center md:text-left">
              AI-alapú vizuális tartalom magyar vállalkozásoknak. Stúdióminőség, AI sebesség, tized annyi pénzért.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start gap-3 text-sm text-foreground-muted">
            <p className="font-heading font-semibold text-foreground-secondary text-xs uppercase tracking-wider">Navigáció</p>
            <a href="#szolgaltatasok" className="hover:text-primary transition-colors duration-200">Szolgáltatások</a>
            <a href="#portfolio" className="hover:text-primary transition-colors duration-200">Portfólió</a>
            <a href="#arazas" className="hover:text-primary transition-colors duration-200">Árak</a>
            <a href="#kapcsolat" className="hover:text-primary transition-colors duration-200">Kapcsolat</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-3 text-sm text-foreground-muted">
            <p className="font-heading font-semibold text-foreground-secondary text-xs uppercase tracking-wider">Elérhetőség</p>
            <a href="mailto:info@hrvtstudio.hu" className="hover:text-primary transition-colors duration-200">
              info@hrvtstudio.hu
            </a>
            <a href="/adatvedelem" className="hover:text-primary transition-colors duration-200">
              Adatvédelmi tájékoztató
            </a>
            <a href="/aszf" className="hover:text-primary transition-colors duration-200">
              ÁSZF
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-border-light text-center text-xs text-foreground-muted leading-relaxed space-y-1">
          <p>
            <strong className="text-foreground-secondary">HRVT Studio</strong> — AI kreatív tartalom
          </p>
          <p>
            &copy; {new Date().getFullYear()} HRVT Studio. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
