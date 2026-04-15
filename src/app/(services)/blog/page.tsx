import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Fogászati blog — tippek, válaszok, tudástár | Dr. Köteles Renáta",
  description: "Fogászati blog Szombathelyi fogorvostól: mit tegyen fogfájás esetén, mikor kell gyökérkezelés, gyermek első fogorvosi látogatása és más hasznos témák.",
  alternates: { canonical: "https://weblelet.hu/blog" },
};

const posts = [
  {
    href: "/blog/mit-tegyek-ha-letort-a-fogam",
    title: "Mit tegyek, ha letört a fogam?",
    excerpt: "Fogászati baleset után minden perc számít. Gyakorlati útmutató: mit tegyen közvetlenül a balesetet követően, hogyan mentheti meg a fogat visszaültetésre, mikor hívjon fogorvost.",
    category: "Sürgősségi",
    readTime: "5 perc olvasás",
    publishedDate: "2026. április 14.",
  },
  {
    href: "/blog/faj-e-a-fogkoeltavolitas",
    title: "Fáj-e a fogkőeltávolítás?",
    excerpt: "A leggyakoribb félelem a professzionális fogtisztítás előtt. Őszinte válasz egy fogorvostól: mi történik a kezelés alatt, mikor érezhet kellemetlenséget, és hogyan tehető kellemesebbé.",
    category: "Megelőzés",
    readTime: "4 perc olvasás",
    publishedDate: "2026. április 14.",
  },
  {
    href: "/blog/mikor-kell-gyokerkezeles",
    title: "Mikor kell gyökérkezelés?",
    excerpt: "A tünetek, amelyek gyökérkezelésre utalnak. Mi történik, ha elhanyagolja, hogyan zajlik a kezelés, és miért menti meg a fogát — részletes útmutató fogorvostól.",
    category: "Fogmegtartás",
    readTime: "6 perc olvasás",
    publishedDate: "2026. április 14.",
  },
  {
    href: "/blog/mikor-vigyem-eloszor-fogorvoshoz-a-gyermekem",
    title: "Mikor vigyem először fogorvoshoz a gyermekem?",
    excerpt: "Szülőknek: mikor az ideális első fogászati látogatás, mit várhat, hogyan készítse fel a gyermeket, és mit tegyen ha fél. Gyakorlati tippek a pozitív első élményhez.",
    category: "Gyermekfogászat",
    readTime: "5 perc olvasás",
    publishedDate: "2026. április 14.",
  },
  {
    href: "/blog/ejszakai-fogfajas-mit-tegyek",
    title: "Éjszakai fogfájás — mit tegyek?",
    excerpt: "Miért erősödik a fogfájás éjszaka? Azonnali enyhítő tippek, mikor menjen ügyeletre, mit kerüljön. Részletes útmutató, amikor a pánik nem segít.",
    category: "Sürgősségi",
    readTime: "5 perc olvasás",
    publishedDate: "2026. április 14.",
  },
];

export default function BlogIndex() {
  return (
    <>
      {/* Mobile pink header spacer */}
      <div className="sm:hidden">
        <div className="bg-[#e8c8c0]">
          <div className="h-[72px]" />
        </div>
      </div>

      <section className="bg-surface pt-28 sm:pt-36 pb-8 sm:pb-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Fogászati blog
            </p>
            <h1
              className="font-heading font-extrabold tracking-[-0.03em] text-foreground leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw + 0.5rem, 3rem)" }}
            >
              Tippek, válaszok, tudástár
            </h1>
            <p className="mt-4 text-lg text-foreground-secondary leading-relaxed max-w-2xl mx-auto">
              Dr. Köteles Renáta cikkei a leggyakoribb fogászati kérdésekről és panaszokról —
              szakmailag pontos, közérthető megfogalmazásban. Ha kérdése van, hívjon: +36 94 900-887.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:gap-6">
            {posts.map((post, i) => (
              <FadeIn key={post.href} delay={i * 0.05}>
                <a
                  href={post.href}
                  className="block rounded-2xl border border-border bg-surface-card p-6 sm:p-7 card-hover group"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-foreground-muted">{post.publishedDate}</span>
                    <span className="text-xs text-foreground-muted">·</span>
                    <span className="text-xs text-foreground-muted">{post.readTime}</span>
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground tracking-[-0.02em] mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[0.95rem] text-foreground-secondary leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Tovább olvasom
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
