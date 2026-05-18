"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const services = [
  {
    title: "AI Termékfotó",
    short: "Professzionális termékképek fehér háttéren, több szögből. Webshop és social media ready.",
    detail: "Termékfotózás stúdió, modell és napokat tartó utómunka nélkül. Több szögből, különböző háttéren, különböző hangulatban. Egységes brand-stílusban, kész formátumokban: webshop, Instagram, Facebook, Google Shopping. Az eredmény: tiszta, profi termékfotók 24-72 órán belül.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/>
        <circle cx="12" cy="13" r="3"/>
      </svg>
    ),
  },
  {
    title: "Editorial Kampánykép",
    short: "Modelles, helyszínes, stúdió hangulatú képek. Olyan minőség, amit senki nem néz AI-nak.",
    detail: "Magazinminőségű kampányképek: modell, helyszín, hangulat, fény — minden testreszabva. Olyan editorial-szintű képek, amiket korábban csak nagyköltségvetésű stúdiókban lehetett előállítani. Senki nem nézi AI-nak. A te brand-ed, a te termékeid, professzionális kontextusban.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: "AI Reklámvideó",
    short: "15-30 másodperces social media videók. TikTok, Instagram Reels, Facebook Ads ready.",
    detail: "Rövid, ütős reklámvideók a leggyakoribb formátumokban: 9:16 (Reels, TikTok), 1:1 (Instagram feed), 16:9 (YouTube, Facebook). Termékbemutatók, hangulati videók, dinamikus vágások. Magyar narrációval vagy felirattal. Konvertáló hook-okkal és CTA-val.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    title: "UGC Tartalom",
    short: "User Generated Content stílusú videók és képek. Hiteles, konvertáló.",
    detail: `Az UGC (User Generated Content) ma a legjobban konvertáló tartalomtípus. Hétköznapi, hiteles megjelenés, amilyen valódi vásárlóid posztolnák. AI-val olcsóbban és gyorsabban — de ugyanaz a hatás. Termékbemutatók, vélemények, „nálam így működik" stílusú videók.`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: "Brand Kampány",
    short: "Teljes vizuális kampány egységes stílusban. Konzisztens brand identity.",
    detail: "Komplett vizuális kampány: termékfotók + hangulati képek + videók + social posztok — mind egységes stílusban, egységes színvilággal, egységes üzenettel. Brand launch-hoz, szezonális kampányhoz, új termékvonalhoz. A brand identity-d minden egyes touchpoint-on konzisztens marad.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5"/>
        <circle cx="17.5" cy="10.5" r="2.5"/>
        <circle cx="8.5" cy="7.5" r="2.5"/>
        <circle cx="6.5" cy="12.5" r="2.5"/>
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
  },
  {
    title: "Content Naptár",
    short: "Havi tartalomterv, mikor mit posztolj. Kész szövegekkel és időzítési javaslatokkal.",
    detail: "Nem csak képeket és videókat adunk — komplett havi tartalomtervet készítünk. Mikor mit posztolj, milyen szöveggel, milyen hashtagekkel, melyik platformon. Heti rendszerességgel előre megtervezve. Spórolj órákat a tartalomtervezésen, mi gondolkodunk helyetted.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
];

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.06}>
      <div
        className={`rounded-2xl border overflow-hidden transition-all duration-300 group cursor-pointer h-full ${
          open
            ? "border-primary/40 shadow-lg shadow-primary/10 bg-surface-card"
            : "border-border bg-surface-card hover:border-primary/25 card-hover"
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="p-5 lg:p-7">
          <div className="flex items-start gap-4">
            <div className={`h-12 w-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 ${
              open ? "bg-primary/20 text-primary" : "bg-surface-warm text-foreground-muted group-hover:text-primary group-hover:bg-primary/10"
            }`}>
              {service.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-heading text-[1.05rem] font-bold text-foreground tracking-[-0.01em] leading-tight">
                  {service.title}
                </h3>
                <div className={`shrink-0 h-6 w-6 rounded-md flex items-center justify-center transition-all duration-300 ${
                  open ? "bg-primary/20 text-primary rotate-180" : "bg-surface-warm text-foreground-muted"
                }`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-foreground-muted leading-relaxed mt-1.5">
                {service.short}
              </p>
            </div>
          </div>
        </div>

        {open && (
          <div className="px-5 lg:px-7 pb-6">
            <div className="border-t border-border pt-5">
              <p className="text-[0.9rem] text-foreground-secondary leading-[1.75]">
                {service.detail}
              </p>
              <a
                href="mailto:info@hrvtstudio.hu?subject=Érdeklődés%20-%20"
                className="inline-flex items-center gap-2 mt-4 rounded-lg bg-primary/15 px-4 py-2.5 text-sm font-bold text-primary hover:bg-primary/25 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Demó kérése
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </FadeIn>
  );
}

export default function Services() {
  return (
    <section id="szolgaltatasok" className="py-24 sm:py-32 bg-surface-alt relative">
      <div className="absolute inset-0 dot-grid opacity-[0.25] -z-10" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Szolgáltatások
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              AI-alapú vizuális{" "}
              <span className="text-highlight">tartalom készítés</span>
            </h2>
            <p className="mt-4 text-foreground-secondary text-base sm:text-lg leading-relaxed">
              Profi termékfotók, reklámvideók és komplett kampányok — stúdió minőségben, töredékáron.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
