"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import FadeIn from "./FadeIn";
import AnimatedGauge from "./AnimatedGauge";

type AuditStatus = "idle" | "pending" | "scanning" | "analyzing" | "validating" | "generating" | "completed" | "failed";

const STATUS_LABELS: Record<AuditStatus, string> = {
  idle: "",
  pending: "Audit indítása...",
  scanning: "Weboldal beolvasása...",
  analyzing: "AI elemzés — kb. 60–90 mp...",
  validating: "Eredmények ellenőrzése...",
  generating: "PDF riport generálása...",
  completed: "Kész!",
  failed: "Hiba történt, próbáld újra.",
};

const STATUS_PROGRESS: Record<AuditStatus, number> = {
  idle: 0,
  pending: 8,
  scanning: 22,
  analyzing: 35,   // crawl starts here, crawls up to 72
  validating: 74,
  generating: 87,
  completed: 100,
  failed: 0,
};

export default function Hero() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<AuditStatus>("idle");
  const [auditId, setAuditId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [scores, setScores] = useState<{ geo: number | null; seo: number | null; citability: number | null }>({ geo: null, seo: null, citability: null });
  const [error, setError] = useState<string | null>(null);
  const [animProgress, setAnimProgress] = useState(0);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const crawlRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Smooth progress animation
  useEffect(() => {
    if (progress === 0) { setAnimProgress(0); return; }
    const target = progress;
    const step = () => {
      setAnimProgress((prev) => {
        const diff = target - prev;
        if (Math.abs(diff) < 0.5) return target;
        return prev + diff * 0.12;
      });
    };
    const t = setInterval(step, 40);
    return () => clearInterval(t);
  }, [progress]);

  // Crawl progress slowly during long phases so it never looks frozen
  useEffect(() => {
    if (crawlRef.current) clearInterval(crawlRef.current);
    if (status === "analyzing") {
      // Crawl from current position toward 73% over ~90s
      crawlRef.current = setInterval(() => {
        setProgress(prev => prev < 73 ? prev + 0.3 : prev);
      }, 1000);
    } else if (status === "generating") {
      // Crawl from current position toward 96% over ~20s
      crawlRef.current = setInterval(() => {
        setProgress(prev => prev < 96 ? prev + 0.5 : prev);
      }, 1000);
    }
    return () => { if (crawlRef.current) clearInterval(crawlRef.current); };
  }, [status]);

  // Status polling
  useEffect(() => {
    if (!auditId) return;
    pollRef.current = setInterval(async () => {
      try {
        const res = await fetch(`/api/public-audit/${auditId}`);
        if (!res.ok) return;
        const data = await res.json();
        const s = data.status as AuditStatus;
        setStatus(s);
        // Never decrease progress — only advance forward
        const newProg = data.progress ?? STATUS_PROGRESS[s] ?? 0;
        setProgress(prev => Math.max(prev, newProg));
        if (data.geoScore !== null && data.geoScore !== undefined) {
          setScores({ geo: data.geoScore, seo: data.seoScore, citability: data.aiCitabilityScore });
        }
        if (s === "completed") {
          setPdfUrl(data.pdfUrl);
          if (pollRef.current) clearInterval(pollRef.current);
          if (crawlRef.current) clearInterval(crawlRef.current);
        }
        if (s === "failed") {
          setError("Az audit sikertelen volt. Próbáld újra.");
          if (pollRef.current) clearInterval(pollRef.current);
          if (crawlRef.current) clearInterval(crawlRef.current);
        }
      } catch { /* silent */ }
    }, 2500);
    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, [auditId]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed) return;

    setError(null);
    setStatus("pending");
    setProgress(5);
    setPdfUrl(null);
    setScores({ geo: null, seo: null, citability: null });

    try {
      const res = await fetch("/api/public-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: trimmed }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Szerver hiba");
      setAuditId(data.auditId);
      setStatus("scanning");
      setProgress(20);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Ismeretlen hiba");
      setStatus("failed");
    }
  }

  function reset() {
    if (pollRef.current) clearInterval(pollRef.current);
    if (crawlRef.current) clearInterval(crawlRef.current);
    setStatus("idle");
    setAuditId(null);
    setProgress(0);
    setAnimProgress(0);
    setPdfUrl(null);
    setError(null);
    setUrl("");
    setScores({ geo: null, seo: null, citability: null });
  }

  const isRunning = status !== "idle" && status !== "completed" && status !== "failed";
  const isDone = status === "completed";
  const isFailed = status === "failed";

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-44 lg:pb-36 overflow-hidden wave-divider">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 -z-20 bg-[#FAFBFC]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_#DBEAFE_0%,_transparent_70%)] -z-10 opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,_#FEF3C7_0%,_transparent_70%)] -z-10 opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_#EFF6FF_0%,_transparent_60%)] -z-10 opacity-50" />
      <div className="absolute inset-0 -z-10 dot-grid opacity-[0.35]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left — text + input */}
          <div className="lg:col-span-6">
            <FadeIn>
              <h1
                className="font-heading font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground"
                style={{ fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 3.75rem)" }}
              >
                Megtalál a ChatGPT?{" "}
                <span className="text-highlight">Weboldal audit, 2 perc.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-7 text-lg leading-relaxed text-foreground-secondary max-w-[540px]">
                AI keresőoptimalizálás mérhetően: valódi Perplexity mérés, 14 AI robot ellenőrzés, 6 GEO dimenzió + SEO elemzés. Megtudod, megtalálnak-e az AI keresők — és mit javíts.
              </p>
            </FadeIn>

            {/* URL form or progress */}
            <FadeIn delay={0.24}>
              <div className="mt-9">
                {!isRunning && !isDone && !isFailed && (
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground-muted">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                        </div>
                        <input
                          type="url"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          placeholder="Add meg a weboldalad URL-jét..."
                          className="w-full rounded-2xl border border-border bg-white pl-12 pr-5 py-4.5 text-[1rem] text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary shadow-lg shadow-primary/5 transition-all"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="rounded-2xl bg-accent px-8 py-4.5 text-[1rem] font-bold text-white shadow-xl shadow-accent/25 cta-glow whitespace-nowrap cursor-pointer"
                      >
                        Audit indítása&ensp;&rarr;
                      </button>
                    </div>
                    <p className="mt-3 text-sm text-foreground-muted">
                      Weboldal audit 2 perc alatt · ChatGPT · Perplexity · Google AI · Gemini · SEO
                    </p>
                  </form>
                )}

                {/* Progress state */}
                {(isRunning || isDone || isFailed) && (
                  <div className="rounded-2xl border border-border bg-white shadow-lg shadow-primary/5 p-6">
                    {/* URL label */}
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationPlayState: isDone ? "paused" : "running" }} />
                      <span className="text-sm font-medium text-foreground truncate">{url}</span>
                    </div>

                    {/* Progress bar */}
                    <div className="mb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-foreground-muted">
                          {isFailed ? "❌ " : ""}{STATUS_LABELS[status]}
                        </span>
                        <span className="text-sm font-bold text-primary">{Math.round(animProgress)}%</span>
                      </div>
                      <div className="h-2.5 bg-border-light rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${animProgress}%`,
                            background: isDone
                              ? "linear-gradient(90deg, #10b981, #059669)"
                              : isFailed
                              ? "#ef4444"
                              : "linear-gradient(90deg, #2563eb, #3b82f6)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Steps indicator */}
                    {!isDone && !isFailed && (
                      <div className="flex gap-1.5 mt-4">
                        {(["scanning", "analyzing", "validating", "generating"] as AuditStatus[]).map((s) => {
                          const prog = STATUS_PROGRESS[s];
                          const current = STATUS_PROGRESS[status];
                          const done = current > prog;
                          const active = status === s;
                          return (
                            <div key={s} className="flex-1 h-1 rounded-full transition-all duration-500"
                              style={{ background: done ? "#2563eb" : active ? "#93c5fd" : "#e2e8f0" }} />
                          );
                        })}
                      </div>
                    )}

                    {/* Score preview during analysis (compact) */}
                    {!isDone && scores.geo !== null && (
                      <div className="mt-5 grid grid-cols-3 gap-3 pt-4 border-t border-border">
                        {[
                          { label: "GEO Score", value: scores.geo, color: "#2563eb" },
                          { label: "SEO Score", value: scores.seo, color: "#3b82f6" },
                          { label: "AI Citability", value: scores.citability, color: "#10b981" },
                        ].map((item) => (
                          <div key={item.label} className="text-center">
                            <p className="text-xs text-foreground-muted mb-0.5">{item.label}</p>
                            <p className="text-lg font-bold" style={{ color: item.color }}>
                              {item.value !== null ? item.value : "–"}
                              {item.value !== null && <span className="text-xs font-normal text-foreground-muted">/100</span>}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Full visual results panel when done */}
                    {isDone && scores.geo !== null && (() => {
                      const g = scores.geo ?? 0;
                      const geoColor = g >= 70 ? "#10b981" : g >= 45 ? "#f59e0b" : "#ef4444";
                      const geoLabel = g >= 70 ? "Jó GEO láthatóság" : g >= 45 ? "Fejlesztendő" : "Gyenge láthatóság";
                      const geoBg = g >= 70 ? "#d1fae5" : g >= 45 ? "#fef3c7" : "#fee2e2";
                      return (
                        <div className="mt-5 pt-5 border-t border-border">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold text-green-600 flex items-center gap-1.5">
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                              GEO Audit kész
                            </span>
                            <span className="text-xs text-foreground-muted truncate max-w-[150px]">
                              {url.replace(/^https?:\/\//, "").split("/")[0]}
                            </span>
                          </div>

                          {/* Big GEO score */}
                          <div className="text-center mb-5">
                            <div className="inline-flex flex-col items-center">
                              <span
                                className="font-heading font-extrabold leading-none"
                                style={{ fontSize: "4rem", color: geoColor }}
                              >
                                {g}
                              </span>
                              <span className="text-xs text-foreground-muted mt-1">/100 pont · GEO Score</span>
                              <span
                                className="mt-2 inline-block text-xs font-bold px-3 py-1 rounded-full"
                                style={{ background: geoBg, color: geoColor }}
                              >
                                {geoLabel}
                              </span>
                            </div>
                          </div>

                          {/* Score bars */}
                          <div className="space-y-3 mb-5">
                            {[
                              { label: "SEO Score", value: scores.seo, color: "#3b82f6" },
                              { label: "AI Citability", value: scores.citability, color: "#10b981" },
                            ].map((item) => (
                              <div key={item.label}>
                                <div className="flex justify-between text-xs mb-1.5">
                                  <span className="text-foreground-secondary font-medium">{item.label}</span>
                                  <span className="font-bold" style={{ color: item.color }}>
                                    {item.value ?? "–"}/100
                                  </span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                  <div
                                    className="h-full rounded-full transition-all duration-1000"
                                    style={{ width: `${item.value ?? 0}%`, background: item.color }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* PDF download */}
                          {pdfUrl ? (
                            <a
                              href={pdfUrl}
                              download
                              className="flex items-center justify-center gap-2.5 w-full rounded-2xl bg-primary px-6 py-3.5 text-[0.95rem] font-bold text-white shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
                            >
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                              </svg>
                              Részletes GEO Riport letöltése
                            </a>
                          ) : (
                            <div className="flex items-center justify-center gap-2 py-3 text-sm text-foreground-muted">
                              <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                              PDF generálás folyamatban...
                            </div>
                          )}
                        </div>
                      );
                    })()}
                                        {/* Error */}
                    {isFailed && error && (
                      <p className="mt-3 text-sm text-red-500">{error}</p>
                    )}

                    {/* Reset */}
                    <button
                      onClick={reset}
                      className="mt-4 w-full text-sm text-foreground-muted hover:text-foreground transition-colors"
                    >
                      ← Új URL megadása
                    </button>
                  </div>
                )}
              </div>
            </FadeIn>

            {/* Badges */}
            {status === "idle" && (
              <FadeIn delay={0.36}>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["14 AI robot ellenőrzés", "6 GEO dimenzió + SEO", "Valódi Perplexity mérés"].map((badge) => (
                    <span key={badge} className="inline-flex items-center rounded-full bg-primary/6 border border-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                      {badge}
                    </span>
                  ))}
                </div>
              </FadeIn>
            )}
          </div>

          {/* Right — report mockup */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <FadeIn direction="right" delay={0.2}>
              <div className="relative lg:-mr-8 xl:-mr-16">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 transform rotate-2 scale-[1.02] -z-10" />
                <div className="rounded-2xl bg-surface-card border border-border shadow-2xl shadow-primary/8 p-7 sm:p-9 max-w-lg transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="h-11 w-11 rounded-xl bg-primary/8 flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-heading font-bold text-foreground">WebLelet Diagnózis</div>
                      <div className="text-xs text-foreground-muted">pelda-etterem.hu — 2026. március</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mb-7">
                    <AnimatedGauge score={38} maxScore={100} />
                  </div>
                  <div className="space-y-3.5">
                    {[
                      { label: "GEO Score", value: "38/100", color: "text-danger", bar: "bg-danger", pct: 38 },
                      { label: "SEO Score", value: "52/100", color: "text-accent", bar: "bg-accent", pct: 52 },
                      { label: "AI Citability", value: "24/100", color: "text-purple-600", bar: "bg-purple-600", pct: 24 },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-medium text-foreground-muted">{item.label}</span>
                          <span className={`text-xs font-bold ${item.color}`}>{item.value}</span>
                        </div>
                        <div className="h-1.5 bg-border-light rounded-full overflow-hidden">
                          <div className={`h-full ${item.bar} rounded-full`} style={{ width: `${item.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 space-y-2 select-none">
                    <div className="h-2.5 w-full rounded bg-border-light blur-[2px]" />
                    <div className="h-2.5 w-4/5 rounded bg-border-light blur-[2px]" />
                    <div className="h-2.5 w-3/5 rounded bg-border-light blur-[2px]" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 rounded-2xl bg-primary text-white px-5 py-2.5 text-xs font-bold shadow-xl pulse-badge">
                  0,99 € · Komplett diagnózis
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="hidden lg:flex justify-center mt-16">
          <div className="scroll-bounce">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
