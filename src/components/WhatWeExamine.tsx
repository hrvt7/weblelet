import FadeIn from "./FadeIn";

const columns = [
  {
    title: "AI Idézhetőség & Láthatóság",
    count: "25% súlyozás",
    color: "text-primary",
    bgColor: "bg-primary/8",
    borderAccent: "border-t-primary",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    items: [
      "14 AI crawler hozzáférés: GPTBot, PerplexityBot, ClaudeBot, Google-Extended és még 10 más",
      "llms.txt & llms-full.txt jelenlét — az AI keresők útmutatója az oldaladhoz",
      "Passzus minőség: optimális 134–167 szavas szakaszok a könnyű AI idézéshez",
      "FAQ és strukturált kérdés-válasz tartalom — amit az AI szeret idézni",
    ],
  },
  {
    title: "Márkaautoritás",
    count: "20% súlyozás",
    color: "text-amber-500",
    bgColor: "bg-amber-500/8",
    borderAccent: "border-t-amber-500",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    items: [
      "Szerzői jelzések: megnevezett szerző, publikálási dátum — amit az AI forrásnak fogad el",
      "Adatok és statisztikák jelenléte — az AI pontosan ezt idézi hivatkozásként",
      "Entity sűrűség: cégek, személyek, helyek és fogalmak konkrétan megnevezve",
      "Perplexity valós láthatóság mérés — ténylegesen idéz-e ma a Perplexity?",
    ],
  },
  {
    title: "Tartalom Minőség & E-E-A-T",
    count: "20% súlyozás",
    color: "text-green-600",
    bgColor: "bg-green-600/8",
    borderAccent: "border-t-green-600",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    items: [
      "Meta leírás, H1 minőség, kép alt szövegek és html lang attribútum vizsgálat",
      "Experience, Expertise, Authoritativeness, Trustworthiness jelek azonosítása",
      "Tartalom frissesség: van-e publikálási dátum és friss tartalom az oldalon?",
      "Keresési szándék illeszkedés — a tartalom megválaszolja-e a kérdéseket?",
    ],
  },
  {
    title: "Technikai Alapok",
    count: "15% súlyozás",
    color: "text-blue-600",
    bgColor: "bg-blue-600/8",
    borderAccent: "border-t-blue-600",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: [
      "HTTPS biztonság, canonical URL, sitemap.xml és robots.txt helyesség",
      "Mobilbarát design és alapvető betöltési sebesség ellenőrzés",
      "Viewport meta és technikai on-page alapok vizsgálata",
      "Crawler hozzáférhetőség — nem blokkolja-e a szerver az AI robotokat?",
    ],
  },
  {
    title: "Strukturált Adatok",
    count: "10% súlyozás",
    color: "text-purple-600",
    bgColor: "bg-purple-600/8",
    borderAccent: "border-t-purple-600",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
    items: [
      "Schema markup típusok: Organization, FAQPage, Article, LocalBusiness",
      "JSON-LD implementáció teljessége és hibamentessége",
      "Open Graph és Twitter Card meta adatok meglétének vizsgálata",
      "Rich result jogosultság: megjelenhetsz-e kiemelt találatként?",
    ],
  },
  {
    title: "Platform Optimalizálás",
    count: "10% súlyozás",
    color: "text-indigo-600",
    bgColor: "bg-indigo-600/8",
    borderAccent: "border-t-indigo-600",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    items: [
      "ChatGPT readiness: tartalom struktúra, idézhetőség, entitás jelek megléte",
      "Perplexity: valódi lekérdezéseknél forrásként szerepel-e az oldalad?",
      "Google AI Overviews: schema és E-E-A-T jelek megfelelősége",
      "Gemini & Bing Copilot: platform-specifikus optimalizálási lehetőségek",
    ],
  },
];

export default function WhatWeExamine() {
  return (
    <section id="mit-vizsgalunk" className="py-24 sm:py-32 bg-surface-blue relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Mit mérünk
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              6 GEO dimenzió,{" "}
              <span className="text-highlight">100 pontos score</span>
            </h2>
            <p className="mt-4 text-foreground-secondary text-lg">
              Princeton kutatás alapján — a GEO pontszám megmutatja, mennyire idéznek az AI keresők.
            </p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {columns.map((col, i) => (
            <FadeIn key={col.title} delay={i * 0.1}>
              <div className={`rounded-2xl border border-border border-t-[3px] ${col.borderAccent} bg-surface-card p-8 lg:p-9 h-full card-hover`}>
                <div className={`h-13 w-13 rounded-2xl ${col.bgColor} ${col.color} flex items-center justify-center mb-5`}>
                  {col.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1 tracking-[-0.01em]">
                  {col.title}
                </h3>
                <p className={`text-sm font-semibold ${col.color} mb-6`}>
                  {col.count}
                </p>
                <ul className="space-y-3.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9rem] text-foreground-secondary leading-snug">
                      <svg
                        className={`mt-0.5 shrink-0 ${col.color}`}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
