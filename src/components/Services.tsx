"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const services = [
  {
    title: "AI Termékfotó",
    short: "Professzionális termékképek fehér háttéren, több szögből. Webshop és social media ready.",
    detail: "Termékfotózás stúdió, modell és napokat tartó utómunka nélkül. Több szögből, különböző háttéren, különböző hangulatban. Egységes brand-stílusban, kész formátumokban: webshop, Instagram, Facebook, Google Shopping. Az eredmény: tiszta, profi termékfotók 24-72 órán belül.",
    icon: "📷",
  },
  {
    title: "Editorial Kampánykép",
    short: "Modelles, helyszínes, stúdió hangulatú képek. Olyan minőség, amit senki nem néz AI-nak.",
    detail: "Magazinminőségű kampányképek: modell, helyszín, hangulat, fény — minden testreszabva. Olyan editorial-szintű képek, amiket korábban csak nagyköltségvetésű stúdiókban lehetett előállítani. Senki nem nézi AI-nak. A te brand-ed, a te termékeid, professzionális kontextusban.",
    icon: "✨",
  },
  {
    title: "AI Reklámvideó",
    short: "15-30 másodperces social media videók. TikTok, Instagram Reels, Facebook Ads ready.",
    detail: "Rövid, ütős reklámvideók a leggyakoribb formátumokban: 9:16 (Reels, TikTok), 1:1 (Instagram feed), 16:9 (YouTube, Facebook). Termékbemutatók, hangulati videók, dinamikus vágások. Magyar narrációval vagy felirattal. Konvertáló hook-okkal és CTA-val.",
    icon: "🎬",
  },
  {
    title: "UGC Tartalom",
    short: "User Generated Content stílusú videók és képek. Hiteles, konvertáló.",
    detail: `Az UGC (User Generated Content) ma a legjobban konvertáló tartalomtípus. Hétköznapi, hiteles megjelenés, amilyen valódi vásárlóid posztolnák. AI-val olcsóbban és gyorsabban — de ugyanaz a hatás. Termékbemutatók, vélemények, „nálam így működik" stílusú videók.`,
    icon: "📱",
  },
  {
    title: "Brand Kampány",
    short: "Teljes vizuális kampány egységes stílusban. Konzisztens brand identity.",
    detail: "Komplett vizuális kampány: termékfotók + hangulati képek + videók + social posztok — mind egységes stílusban, egységes színvilággal, egységes üzenettel. Brand launch-hoz, szezonális kampányhoz, új termékvonalhoz. A brand identity-d minden egyes touchpoint-on konzisztens marad.",
    icon: "🎨",
  },
  {
    title: "Content Naptár",
    short: "Havi tartalomterv, mikor mit posztolj. Kész szövegekkel és időzítési javaslatokkal.",
    detail: "Nem csak képeket és videókat adunk — komplett havi tartalomtervet készítünk. Mikor mit posztolj, milyen szöveggel, milyen hashtagekkel, melyik platformon. Heti rendszerességgel előre megtervezve. Spórolj órákat a tartalomtervezésen, mi gondolkodunk helyetted.",
    icon: "📅",
  },
];

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.05}>
      <div
        className={`rounded-2xl border overflow-hidden transition-all duration-300 group cursor-pointer h-full ${
          open
            ? "border-primary/40 shadow-lg shadow-primary/10 bg-surface-card"
            : "border-border bg-surface-card hover:border-primary/20 card-hover glow-border"
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="p-5 lg:p-7">
          <div className="flex items-start gap-4">
            <div className={`h-14 w-14 shrink-0 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${
              open ? "bg-primary/20 shadow-inner" : "bg-surface-warm group-hover:bg-primary/10"
            }`}>
              <span>{service.icon}</span>
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
      <div className="absolute inset-0 dot-grid opacity-[0.3] -z-10" />
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
