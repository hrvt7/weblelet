"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const services = [
  {
    title: "Fogászati szűrővizsgálat",
    href: "/fogaszati-szurovizsgalat",
    short: "Rendszeres kontroll a fogak és az íny állapotának felmérésére.",
    detail: "A félévenkénti szűrővizsgálat során áttekintjük a fogak és az íny állapotát, panoráma- vagy intraorális röntgenfelvételt készíthetünk a rejtett szuvasodások, gyökércsúcsi elváltozások vagy parodontális problémák feltárásához. A vizsgálat kiterjed a nyálkahártya, a nyelv és a szájüreg lágyszöveteinek ellenőrzésére is. A korai felismerés a leghatékonyabb megelőzés — sok fogászati probléma kezdetben teljesen tünetmentes.",
    image: "/images/service-1-szurovizsgalat.webp",
  },
  {
    title: "Profilaxia",
    href: "/profilaxia",
    short: "Megelőző fogászati kezelések a hosszú távú fogegészségért.",
    detail: "A profilaxia (fogászati megelőzés) célja, hogy a szuvasodás és a fogágygyulladás kialakulását megakadályozzuk, mielőtt kezelésre lenne szükség. A profilaktikus kezelés magában foglalja a professzionális fogtisztítást, fluoridos kezelést, barázdazárást és a személyre szabott szájhigiénés tanácsadást. A rendszeres profilaxia csökkenti a fogászati beavatkozások számát és költségét.",
    image: "/images/service-profilaxia.webp",
  },
  {
    title: "Fogmegtartó kezelések",
    href: "/fogmegtarto-kezelesek",
    short: "Tömések és gyökérkezelések korszerű, tartós anyagokkal.",
    detail: "A fogmegtartó fogászat célja a szuvas vagy sérült fogak megmentése eltávolítás helyett. Kompozit (fogszínű) tömésekkel pótoljuk a hiányzó fogszövetet — az anyag tartós, esztétikus, és a természetes fogszínhez igazítható. Előrehaladottabb esetben gyökérkezelést végzünk: eltávolítjuk a fertőzött fogbelet, kitisztítjuk és lezárjuk a gyökércsatornákat, majd a fogat tömjük vagy koronával erősítjük meg. Célunk minden menthető fog hosszú távú megtartása.",
    image: "/images/service-2-fogmegtarto.webp",
  },
  {
    title: "Fogkőeltávolítás",
    href: "/fogkoeltavolitas",
    short: "Ultrahangos fogkő-eltávolítás és polírozás az egészséges ínyért.",
    detail: "A fogkő a nyálban lévő ásványi anyagok és baktériumok lerakódása, amelyet otthoni fogmosással nem lehet eltávolítani. Ultrahangos depurátorral távolítjuk el a supra- és subgingivális fogköveket, majd speciális polírozó pasztával simítjuk a fogfelszínt — ez csökkenti az új lerakódások esélyét. A rendszeres fogkőeltávolítás megelőzi a gingivitiszt és a parodontitiszt.",
    image: "/images/service-3-fogko.webp",
  },
  {
    title: "Air-flow kezelés",
    href: "/air-flow",
    short: "Kíméletes homokfúvásos fogtisztítás és folteltávolítás.",
    detail: "Az Air-flow kezelés során finom szódabikarbóna- vagy glicin-alapú por, víz és sűrített levegő keverékét juttatjuk a fogfelszínre. Ez a módszer kíméletesen eltávolítja a kávé, tea, dohányzás és vörösbor okozta elszíneződéseket, valamint a biofilmet a fogakról és az ínyszél alól. Az Air-flow nem koptatja a fogzománcot és nem irritálja az ínyt — kellemesebb és hatékonyabb, mint a hagyományos polírozás.",
    image: "/images/service-airflow.webp",
  },
  {
    title: "Parodontológia",
    href: "/parodontologia",
    short: "Fogágygyulladás kezelése és megelőzése.",
    detail: "A parodontológia a fogágyat — az ínyt, a gyökérhártyát és az alveoláris csontot — érintő megbetegedések diagnosztikájával és kezelésével foglalkozik. A parodontitis (fogágygyulladás) a felnőttkori fogvesztés leggyakoribb oka, és szoros összefüggésben áll a szív-érrendszeri betegségekkel és a cukorbetegséggel. A kezelés magában foglalja a mély küretálást, a gyökérfelszín simítást és a rendszeres kontrollvizsgálatot.",
    image: "/images/service-parodontologia.webp",
  },
  {
    title: "Fogpótlás",
    href: "/fogpotlas",
    short: "Koronák, hidak és kivehető fogsorok természetes megjelenéssel.",
    detail: "Az elveszett vagy erősen sérült fogak pótlása nemcsak esztétikai, hanem funkcionális kérdés is — a hiányzó fogak megváltoztatják a rágás dinamikáját és a szomszédos fogak helyzetét. Fém-kerámia vagy teljes kerámia koronákkal erősítjük meg a gyengült fogakat, hídpótlással pótoljuk az egy vagy több fogból álló hiányt. Teljes vagy részleges kivehető fogsorokat is készítünk.",
    image: "/images/service-4-fogpotlas.webp",
  },
  {
    title: "Esztétikai fogászat",
    href: "/esztetikai-fogaszat",
    short: "Fogfehérítés, héjak és esztétikai megoldások a mosolyért.",
    detail: "Az esztétikai fogászat célja a mosoly természetes szépségének visszaállítása vagy javítása. Rendelői fogfehérítéssel akár több árnyalattal világosabbá tehetjük a fogakat. Kompozit héjakkal (veneers) javítjuk a repedezett, elszíneződött vagy apró résekkel rendelkező fogak megjelenését. Az esztétikai töméscsere során a régi amalgám töméseket fogszínű kompozitra cseréljük.",
    image: "/images/service-5-esztetikai.webp",
  },
  {
    title: "Fogeltávolítás",
    href: "/fogeltavolitas",
    short: "Kíméletes foghúzás, bölcsességfog eltávolítás érzéstelenítéssel.",
    detail: "A fogeltávolítás az utolsó lehetőség, amelyre akkor kerül sor, ha a fog konzervatív módszerekkel már nem menthető meg. A beavatkozást helyi érzéstelenítéssel végezzük, a modern technikáknak köszönhetően a folyamat kíméletes. Bölcsességfogak eltávolítására is vállalkozunk. A beavatkozás után részletes utógondozási tanácsot adunk.",
    image: "/images/service-6-fogeltavolitas.webp",
  },
  {
    title: "Gyermekfogászat",
    href: "/gyermekfogaszat",
    short: "Barátságos fogászati élmény a legkisebbeknek.",
    detail: "A gyermekfogászatban kiemelt figyelmet fordítunk arra, hogy a gyermek számára az első fogászati élmény pozitív és stresszmentes legyen. Barázdazárással védjük a frissen előtört maradó őrlőfogakat a szuvasodástól, fluoridos kezeléssel erősítjük a fogzománcot. Szülőknek személyre szabott szájhigiénés tanácsadást nyújtunk.",
    image: "/images/service-7-gyermek.webp",
  },
  {
    title: "Sürgősségi ellátás",
    href: "/surgossegi-ellatas",
    short: "Akut fogfájás vagy fogászati baleset esetén mielőbbi ellátás.",
    detail: "Akut fogfájás, eltörött fog, kiesett tömés vagy fogászati trauma esetén mielőbbi ellátást biztosítunk a rendelési időben. A sürgősségi vizsgálat során azonosítjuk a fájdalom okát, szükség esetén röntgenfelvételt készítünk, és elvégezzük az akut beavatkozást.",
    image: "/images/service-8-surgossegi.webp",
  },
];

/* ── Desktop: expandable card ── */
function DesktopCard({ service, index }: { service: typeof services[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.05}>
      <div
        className={`rounded-2xl border bg-surface-card overflow-hidden transition-all duration-300 group cursor-pointer ${
          open ? "border-primary/25 shadow-lg h-[520px]" : "border-border hover:border-primary/15 card-hover h-[120px]"
        }`}
        onClick={() => setOpen(!open)}
      >
        {/* Header — always visible */}
        <div className="p-4 lg:p-5 h-[120px] flex items-center gap-4">
          <div className={`h-14 w-14 shrink-0 rounded-2xl overflow-hidden transition-all duration-300 ${
            open ? "ring-2 ring-primary/30" : "ring-1 ring-border"
          }`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-heading text-[1rem] font-bold text-foreground tracking-[-0.01em] leading-tight">
                {service.title}
              </h3>
              <div className={`shrink-0 h-6 w-6 rounded-md flex items-center justify-center transition-all duration-300 ${
                open ? "bg-primary/10 text-primary rotate-180" : "bg-surface-warm text-foreground-muted"
              }`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-foreground-muted leading-relaxed mt-1 line-clamp-2">{service.short}</p>
          </div>
        </div>

        {/* Expanded content — fixed height */}
        {open && (
          <div className="px-4 lg:px-5 pb-5 h-[400px] flex flex-col">
            <div className="border-t border-border-light pt-4 flex flex-col flex-1">
              <div className="mb-3 rounded-xl overflow-hidden shrink-0 h-[180px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="text-[0.85rem] text-foreground-secondary leading-[1.7] line-clamp-5 flex-1">{service.detail}</p>
              <a
                href={service.href}
                className="inline-flex items-center gap-2 mt-3 rounded-lg bg-primary/8 px-4 py-2.5 text-sm font-bold text-primary hover:bg-primary/15 transition-colors shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                Részletek megtekintése
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

/* ── Mobile: simple card → links to subpage ── */
function MobileCard({ service, index }: { service: typeof services[number]; index: number }) {
  return (
    <FadeIn delay={index * 0.04}>
      <a
        href={service.href}
        className="flex flex-col items-center text-center rounded-xl border border-border bg-surface-card p-3 card-hover group h-[120px] w-full justify-center"
      >
        <div className="h-14 w-14 shrink-0 rounded-xl overflow-hidden ring-1 ring-border group-hover:ring-primary/30 transition-all mb-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <h3 className="font-heading text-[0.7rem] font-bold text-foreground tracking-[-0.01em] leading-tight line-clamp-2">
          {service.title}
        </h3>
      </a>
    </FadeIn>
  );
}

export default function Services() {
  return (
    <section id="szolgaltatasok" className="py-24 sm:py-32 bg-surface-alt relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Szolgáltatások
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Széleskörű{" "}
              <span className="text-highlight">fogászati ellátás</span>
            </h2>
            <p className="mt-4 text-foreground-secondary text-base sm:text-lg leading-relaxed">
              A legmodernebb módszerekkel és anyagokkal dolgozunk.
            </p>
          </div>
        </FadeIn>

        {/* Mobile: grid of small cards linking to subpages — last row centered */}
        <div className="flex flex-wrap justify-center gap-3 sm:hidden">
          {services.map((service, i) => (
            <div key={service.title} className="w-[calc(33.333%-0.5rem)]">
              <MobileCard service={service} index={i} />
            </div>
          ))}
        </div>

        {/* Desktop: expandable 2-col cards — last row centered */}
        <div className="hidden sm:flex sm:flex-wrap sm:justify-center gap-4 lg:gap-5 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <div key={service.title} className="w-[calc(50%-0.625rem)]">
              <DesktopCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
