"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/hero-portrait.jpg"
        alt="HRVT Studio"
        fill
        priority
        quality={92}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Top gradient */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />

      {/* Centered heading */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-24 px-6 text-center">
        <h1
          className="font-heading font-extrabold leading-[1.07] tracking-[-0.03em] text-white drop-shadow-lg"
          style={{ fontSize: "clamp(2rem, 5vw + 0.5rem, 3.5rem)" }}
        >
          Stúdióminőség.<br />
          <span className="text-[#E8A030]">AI sebesség.</span>
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 scroll-bounce">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          Görgess
        </span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
