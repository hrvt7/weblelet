"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const services = [
  {
    title: "Fogászati szűrővizsgálat",
    short: "Rendszeres kontroll a fogak és az íny állapotának felmérésére.",
    detail: "A félévenkénti szűrővizsgálat során áttekintjük a fogak és az íny állapotát, panoráma- vagy intraorális röntgenfelvételt készíthetünk a rejtett szuvasodások, gyökércsúcsi elváltozások vagy parodontális problémák feltárásához. A vizsgálat kiterjed a nyálkahártya, a nyelv és a szájüreg lágyszöveteinek ellenőrzésére is. A korai felismerés a leghatékonyabb megelőzés — sok fogászati probléma kezdetben teljesen tünetmentes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Fogmegtartó kezelések",
    short: "Tömések és gyökérkezelések korszerű, tartós anyagokkal.",
    detail: "A fogmegtartó fogászat célja a szuvas vagy sérült fogak megmentése eltávolítás helyett. Kompozit (fogszínű) tömésekkel pótoljuk a hiányzó fogszövetet — az anyag tartós, esztétikus, és a természetes fogszínhez igazítható. Előrehaladottabb esetben gyökérkezelést végzünk: eltávolítjuk a fertőzött fogbelet, kitisztítjuk és lezárjuk a gyökércsatornákat, majd a fogat tömjük vagy koronával erősítjük meg. Célunk minden menthető fog hosszú távú megtartása.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    title: "Fogkőeltávolítás és tisztítás",
    short: "Ultrahangos fogkő-eltávolítás és polírozás az egészséges ínyért.",
    detail: "A fogkő a nyálban lévő ásványi anyagok és baktériumok lerakódása, amelyet otthoni fogmosással nem lehet eltávolítani. Ultrahangos depurátorral távolítjuk el a supra- és subgingivális fogköveket, majd speciális polírozó pasztával simítjuk a fogfelszínt — ez csökkenti az új lerakódások esélyét. A rendszeres fogkőeltávolítás megelőzi a gingivitiszt (ínygyulladást) és a parodontitiszt (fogágygyulladást), amelyek kezelés nélkül fogvesztéshez vezethetnek.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Fogpótlás",
    short: "Koronák, hidak és kivehető fogsorok természetes megjelenéssel.",
    detail: "Az elveszett vagy erősen sérült fogak pótlása nemcsak esztétikai, hanem funkcionális kérdés is — a hiányzó fogak megváltoztatják a rágás dinamikáját és a szomszédos fogak helyzetét. Fém-kerámia vagy teljes kerámia koronákkal erősítjük meg a gyengült fogakat, hídpótlással pótoljuk az egy vagy több fogból álló hiányt, ahol a szomszédos fogak horgonyként szolgálnak. Teljes vagy részleges kivehető fogsorokat is készítünk, amelyek a természetes fogsor megjelenését és funkcióját hűen visszaadják.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "Esztétikai fogászat",
    short: "Fogfehérítés és esztétikai megoldások a magabiztos mosolyért.",
    detail: "Az esztétikai fogászat célja a mosoly természetes szépségének visszaállítása vagy javítása. Rendelői fogfehérítéssel akár több árnyalattal világosabbá tehetjük a fogakat — a kezelés biztonságos, az érzékenység átmeneti. Kompozit héjakkal (veneers) javítjuk a repedezett, elszíneződött vagy apró résekkel rendelkező fogak megjelenését. Az esztétikai töméscsere során a régi amalgám töméseket fogszínű kompozitra cseréljük, amely szinte láthatatlanul illeszkedik a foghoz.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Fogeltávolítás",
    short: "Kíméletes foghúzás, bölcsességfog eltávolítás érzéstelenítéssel.",
    detail: "A fogeltávolítás az utolsó lehetőség, amelyre akkor kerül sor, ha a fog konzervatív módszerekkel már nem menthető meg — pl. előrehaladott szuvasodás, törött gyökér, vagy súlyos parodontális érintettség esetén. A beavatkozást helyi érzéstelenítéssel végezzük, a modern technikáknak köszönhetően a folyamat kíméletes. Bölcsességfogak eltávolítására is vállalkozunk, amennyiben azok félreállnak, nyomást gyakorolnak a szomszédos fogakra, vagy visszatérő gyulladást okoznak. A beavatkozás után részletes utógondozási tanácsot adunk a gyors és szövődménymentes gyógyulás érdekében.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Gyermekfogászat",
    short: "Barátságos fogászati élmény a legkisebbeknek.",
    detail: "A gyermekfogászatban kiemelt figyelmet fordítunk arra, hogy a gyermek számára az első fogászati élmény pozitív és stresszmentes legyen — ez megalapozza a felnőttkori fogorvos-páciens kapcsolatot. A tejfogak állapota közvetlenül befolyásolja a maradó fogak fejlődését, ezért a szuvasodás korai kezelése elengedhetetlen. Barázdazárással (fissura-záró lakkozás) védjük a frissen előtört maradó őrlőfogakat a szuvasodástól, fluoridos kezeléssel pedig erősítjük a fogzománcot. Szülőknek személyre szabott szájhigiénés tanácsadást nyújtunk.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <circle cx="12" cy="12" r="10" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Sürgősségi ellátás",
    short: "Akut fogfájás vagy fogászati baleset esetén mielőbbi ellátás.",
    detail: "Akut fogfájás, eltörött fog, kiesett tömés vagy fogászati trauma esetén mielőbbi ellátást biztosítunk a rendelési időben. A sürgősségi vizsgálat során azonosítjuk a fájdalom okát, szükség esetén röntgenfelvételt készítünk, és elvégezzük az akut beavatkozást — legyen az ideiglenes tömés, gyökérkezelés megkezdése, tályog megnyitása vagy a fájdalom csillapítása. Amennyiben a végleges kezelés több ülést igényel, tervet készítünk és soron kívüli időpontot biztosítunk a folytatáshoz.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.06}>
      <div
        className={`rounded-2xl border bg-surface-card overflow-hidden transition-all duration-300 group cursor-pointer ${
          open ? "border-primary/25 shadow-lg" : "border-border hover:border-primary/15 card-hover"
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className={`h-12 w-12 shrink-0 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                open ? "bg-primary text-white" : "bg-primary/8 text-primary group-hover:bg-primary group-hover:text-white"
              }`}>
                {service.icon}
              </div>
              <div>
                <h3 className="font-heading text-[1.05rem] font-bold text-foreground tracking-[-0.01em]">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed mt-1.5">
                  {service.short}
                </p>
              </div>
            </div>
            <div className={`shrink-0 h-7 w-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
              open ? "bg-primary/10 text-primary rotate-180" : "bg-surface-warm text-foreground-muted"
            }`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>

        <div className="service-expand" data-open={open}>
          <div>
            <div className="px-7 pb-7 pt-0">
              <div className="border-t border-border-light pt-5 ml-16">
                <p className="text-[0.9rem] text-foreground-secondary leading-[1.75]">
                  {service.detail}
                </p>
                <a
                  href="tel:+3694900887"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Időpontfoglalás: +36 94 900-887
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Services() {
  return (
    <section id="szolgaltatasok" className="py-24 sm:py-32 bg-surface-alt relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Szolgáltatások
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Széleskörű{" "}
              <span className="text-highlight">fogászati ellátás</span>
            </h2>
            <p className="mt-4 text-foreground-secondary text-lg leading-relaxed">
              A legmodernebb módszerekkel és anyagokkal dolgozunk. Kattintson egy szolgáltatásra a részletes leírásért.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
