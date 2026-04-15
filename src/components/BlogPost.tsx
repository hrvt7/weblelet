import FadeIn from "./FadeIn";

interface BlogPostProps {
  title: string;
  subtitle: string;
  category: string;
  publishedDate: string;
  readTime: string;
  sections: { heading: string; text: string }[];
  relatedServices: { title: string; href: string }[];
  relatedPosts: { title: string; href: string }[];
}

export default function BlogPost({
  title,
  subtitle,
  category,
  publishedDate,
  readTime,
  sections,
  relatedServices,
  relatedPosts,
}: BlogPostProps) {
  return (
    <>
      {/* Header with pink background (same as service pages) */}
      <div className="sm:hidden">
        <div className="bg-[#e8c8c0]">
          <div className="h-[72px]" />
        </div>
      </div>

      {/* Title area */}
      <section className="bg-surface pt-28 sm:pt-36 pb-8 sm:pb-12">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <a
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary-dark transition-colors mb-5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Vissza a bloghoz
            </a>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                {category}
              </span>
              <span className="text-xs text-foreground-muted">{publishedDate}</span>
              <span className="text-xs text-foreground-muted">·</span>
              <span className="text-xs text-foreground-muted">{readTime}</span>
            </div>

            <h1
              className="font-heading font-extrabold tracking-[-0.03em] text-foreground leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw + 0.5rem, 2.5rem)" }}
            >
              {title}
            </h1>
            <p className="mt-4 text-lg text-foreground-secondary leading-relaxed">{subtitle}</p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, i) => (
              <FadeIn key={section.heading} delay={i * 0.05}>
                <div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground tracking-[-0.02em] mb-3">
                    {section.heading}
                  </h2>
                  <p className="text-foreground-secondary leading-[1.8] text-[0.95rem] whitespace-pre-line">
                    {section.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA */}
          <FadeIn delay={0.3}>
            <div className="mt-12 rounded-2xl bg-primary/5 border border-primary/10 p-6 sm:p-8">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Van fogászati panasza? Forduljon hozzánk bizalommal.
              </h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Dr. Köteles Renáta rendelője — Szombathely, Markusovszky Lajos u. 8. Rendelési időben soron kívüli ellátást is biztosítunk.
              </p>
              <a
                href="tel:+3694900887"
                className="inline-flex items-center gap-2.5 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/20 cta-glow"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +36 94 900-887
              </a>
            </div>
          </FadeIn>

          {/* Related */}
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {relatedServices.length > 0 && (
              <FadeIn delay={0.1}>
                <div className="rounded-2xl border border-border bg-surface-card p-6">
                  <h3 className="font-heading font-bold text-foreground text-sm mb-4">Kapcsolódó szolgáltatások</h3>
                  <div className="space-y-2">
                    {relatedServices.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        className="flex items-center gap-2 text-sm text-foreground-secondary hover:text-primary transition-colors py-1.5"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                        {s.title}
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}
            {relatedPosts.length > 0 && (
              <FadeIn delay={0.2}>
                <div className="rounded-2xl border border-border bg-surface-card p-6">
                  <h3 className="font-heading font-bold text-foreground text-sm mb-4">Hasonló cikkek</h3>
                  <div className="space-y-2">
                    {relatedPosts.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        className="flex items-center gap-2 text-sm text-foreground-secondary hover:text-primary transition-colors py-1.5"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                        {p.title}
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
