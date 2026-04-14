"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const services = [
  {
    title: "Fogászati szűrővizsgálat",
    href: "/fogaszati-szurovizsgalat",
    short: "Rendszeres kontroll a fogak és az íny állapotának felmérésére.",
    detail: "A félévenkénti szűrővizsgálat során áttekintjük a fogak és az íny állapotát, panoráma- vagy intraorális röntgenfelvételt készíthetünk a rejtett szuvasodások, gyökércsúcsi elváltozások vagy parodontális problémák feltárásához. A vizsgálat kiterjed a nyálkahártya, a nyelv és a szájüreg lágyszöveteinek ellenőrzésére is. A korai felismerés a leghatékonyabb megelőzés — sok fogászati probléma kezdetben teljesen tünetmentes.",
    image: "/images/service-1-szurovizsgalat.jpg",
  },
  {
    title: "Fogmegtartó kezelések",
    href: "/fogmegtarto-kezelesek",
    short: "Tömések és gyökérkezelések korszerű, tartós anyagokkal.",
    detail: "A fogmegtartó fogászat célja a szuvas vagy sérült fogak megmentése eltávolítás helyett. Kompozit (fogszínű) tömésekkel pótoljuk a hiányzó fogszövetet — az anyag tartós, esztétikus, és a természetes fogszínhez igazítható. Előrehaladottabb esetben gyökérkezelést végzünk: eltávolítjuk a fertőzött fogbelet, kitisztítjuk és lezárjuk a gyökércsatornákat, majd a fogat tömjük vagy koronával erősítjük meg. Célunk minden menthető fog hosszú távú megtartása.",
    image: "/images/service-2-fogmegtarto.jpg",
  },
  {
    title: "Fogkőeltávolítás és tisztítás",
    href: "/fogkoeltavolitas",
    short: "Ultrahangos fogkő-eltávolítás és polírozás az egészséges ínyért.",
    detail: "A fogkő a nyálban lévő ásványi anyagok és baktériumok lerakódása, amelyet otthoni fogmosással nem lehet eltávolítani. Ultrahangos depurátorral távolítjuk el a supra- és subgingivális fogköveket, majd speciális polírozó pasztával simítjuk a fogfelszínt — ez csökkenti az új lerakódások esélyét. A rendszeres fogkőeltávolítás megelőzi a gingivitiszt (ínygyulladást) és a parodontitiszt (fogágygyulladást), amelyek kezelés nélkül fogvesztéshez vezethetnek.",
    image: "/images/service-3-fogko.jpg",
  },
  {
    title: "Fogpótlás",
    href: "/fogpotlas",
    short: "Koronák, hidak és kivehető fogsorok természetes megjelenéssel.",
    detail: "Az elveszett vagy erősen sérült fogak pótlása nemcsak esztétikai, hanem funkcionális kérdés is — a hiányzó fogak megváltoztatják a rágás dinamikáját és a szomszédos fogak helyzetét. Fém-kerámia vagy teljes kerámia koronákkal erősítjük meg a gyengült fogakat, hídpótlással pótoljuk az egy vagy több fogból álló hiányt, ahol a szomszédos fogak horgonyként szolgálnak. Teljes vagy részleges kivehető fogsorokat is készítünk, amelyek a természetes fogsor megjelenését és funkcióját hűen visszaadják.",
    image: "/images/service-4-fogpotlas.jpg",
  },
  {
    title: "Esztétikai fogászat",
    href: "/esztetikai-fogaszat",
    short: "Fogfehérítés és esztétikai megoldások a magabiztos mosolyért.",
    detail: "Az esztétikai fogászat célja a mosoly természetes szépségének visszaállítása vagy javítása. Rendelői fogfehérítéssel akár több árnyalattal világosabbá tehetjük a fogakat — a kezelés biztonságos, az érzékenység átmeneti. Kompozit héjakkal (veneers) javítjuk a repedezett, elszíneződött vagy apró résekkel rendelkező fogak megjelenését. Az esztétikai töméscsere során a régi amalgám töméseket fogszínű kompozitra cseréljük, amely szinte láthatatlanul illeszkedik a foghoz.",
    image: "/images/service-5-esztetikai.jpg",
  },
  {
    title: "Fogeltávolítás",
    href: "/fogeltavolitas",
    short: "Kíméletes foghúzás, bölcsességfog eltávolítás érzéstelenítéssel.",
    detail: "A fogeltávolítás az utolsó lehetőség, amelyre akkor kerül sor, ha a fog konzervatív módszerekkel már nem menthető meg — pl. előrehaladott szuvasodás, törött gyökér, vagy súlyos parodontális érintettség esetén. A beavatkozást helyi érzéstelenítéssel végezzük, a modern technikáknak köszönhetően a folyamat kíméletes. Bölcsességfogak eltávolítására is vállalkozunk, amennyiben azok félreállnak, nyomást gyakorolnak a szomszédos fogakra, vagy visszatérő gyulladást okoznak. A beavatkozás után részletes utógondozási tanácsot adunk a gyors és szövődménymentes gyógyulás érdekében.",
    image: "/images/service-6-fogeltavolitas.jpg",
  },
  {
    title: "Gyermekfogászat",
    href: "/gyermekfogaszat",
    short: "Barátságos fogászati élmény a legkisebbeknek.",
    detail: "A gyermekfogászatban kiemelt figyelmet fordítunk arra, hogy a gyermek számára az első fogászati élmény pozitív és stresszmentes legyen — ez megalapozza a felnőttkori fogorvos-páciens kapcsolatot. A tejfogak állapota közvetlenül befolyásolja a maradó fogak fejlődését, ezért a szuvasodás korai kezelése elengedhetetlen. Barázdazárással (fissura-záró lakkozás) védjük a frissen előtört maradó őrlőfogakat a szuvasodástól, fluoridos kezeléssel pedig erősítjük a fogzománcot. Szülőknek személyre szabott szájhigiénés tanácsadást nyújtunk.",
    image: "/images/service-7-gyermek.jpg",
  },
  {
    title: "Sürgősségi ellátás",
    href: "/surgossegi-ellatas",
    short: "Akut fogfájás vagy fogászati baleset esetén mielőbbi ellátás.",
    detail: "Akut fogfájás, eltörött fog, kiesett tömés vagy fogászati trauma esetén mielőbbi ellátást biztosítunk a rendelési időben. A sürgősségi vizsgálat során azonosítjuk a fájdalom okát, szükség esetén röntgenfelvételt készítünk, és elvégezzük az akut beavatkozást — legyen az ideiglenes tömés, gyökérkezelés megkezdése, tályog megnyitása vagy a fájdalom csillapítása. Amennyiben a végleges kezelés több ülést igényel, tervet készítünk és soron kívüli időpontot biztosítunk a folytatáshoz.",
    image: "/images/service-8-surgossegi.jpg",
  },
];

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.06}>
      <div
        className={`rounded-xl sm:rounded-2xl border bg-surface-card overflow-hidden transition-all duration-300 group cursor-pointer ${
          open ? "border-primary/25 shadow-lg col-span-2" : "border-border hover:border-primary/15 card-hover h-[130px] sm:h-[140px]"
        }`}
        onClick={() => setOpen(!open)}
      >
        {/* Collapsed view */}
        <div className="p-3 sm:p-5 lg:p-7">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
            {/* Thumbnail */}
            <div className={`h-14 w-14 sm:h-14 sm:w-14 shrink-0 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
              open ? "ring-2 ring-primary/30" : "ring-1 ring-border"
            }`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover" loading="lazy"
              />
            </div>
            <div className="flex-1 min-w-0 text-center sm:text-left">
              <div className="flex items-start justify-between gap-1">
                <h3 className="font-heading text-[0.8rem] sm:text-[1.05rem] font-bold text-foreground tracking-[-0.01em] leading-tight">
                  {service.title}
                </h3>
                <div className={`hidden sm:flex shrink-0 h-7 w-7 rounded-lg items-center justify-center transition-all duration-300 ${
                  open ? "bg-primary/10 text-primary rotate-180" : "bg-surface-warm text-foreground-muted"
                }`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
              <p className="hidden sm:block text-xs sm:text-sm text-foreground-muted leading-relaxed mt-1">
                {service.short}
              </p>
            </div>
          </div>
        </div>

        {/* Expanded detail — spans full width */}
        <div className="service-expand" data-open={open}>
          <div>
            <div className="px-4 sm:px-7 pb-5 sm:pb-6 pt-0">
              <div className="border-t border-border-light pt-4 sm:pt-5">
                <div className="mb-4 sm:mb-5 rounded-lg sm:rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-36 sm:h-56 object-cover" loading="lazy"
                  />
                </div>
                <p className="text-xs sm:text-[0.9rem] text-foreground-secondary leading-relaxed sm:leading-[1.75]">
                  {service.detail}
                </p>
                <a
                  href={service.href}
                  className="inline-flex items-center gap-2 mt-3 sm:mt-4 rounded-lg bg-primary/8 px-4 py-2.5 text-xs sm:text-sm font-bold text-primary hover:bg-primary/15 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Részletek megtekintése
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
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

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
