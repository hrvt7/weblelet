import Image from "next/image";
import FadeIn from "./FadeIn";

const images = [
  { src: "/portfolio/portfolio-1.jpg", alt: "AI editorial kampánykép — HRVT Studio" },
  { src: "/portfolio/portfolio-2.jpg", alt: "AI modell kampánykép — HRVT Studio" },
  { src: "/portfolio/portfolio-3.jpg", alt: "AI fashion editorial — HRVT Studio" },
  { src: "/portfolio/portfolio-4.jpg", alt: "AI portré kampánykép — HRVT Studio" },
  { src: "/portfolio/portfolio-5.jpg", alt: "AI editorial fotó — HRVT Studio" },
  { src: "/portfolio/portfolio-6.jpg", alt: "AI kampányfotó — HRVT Studio" },
  { src: "/portfolio/portfolio-7.jpg", alt: "AI kampánykép — HRVT Studio" },
  { src: "/portfolio/portfolio-8.jpg", alt: "AI editorial — HRVT Studio" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-20 relative bg-surface-alt">
      <div className="absolute inset-0 dot-grid opacity-[0.2] -z-10" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {images.map((img, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
