"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import FadeIn from "./FadeIn";
import AnimatedGauge from "./AnimatedGauge";

type AuditStatus = "idle" | "pending" | "scanning" | "analyzing" | "validating" | "generating" | "completed" | "failed";

const STATUS_LABELS: Record<AuditStatus, string> = {
  idle: "",
  pending: "Audit sorba állítva...",
  scanning: "Weboldal beolvasása...",
  analyzing: "AI elemzés folyamatban...",
  validating: "Eredmények validálása...",
  generating: "PDF riport generálása...",
  completed: "Kész!",
  failed: "Hiba történt, próbáld újra.",
};

const STATUS_PROGRESS: Record<AuditStatus, number> = {
  idle: 0,
  pending: 5,
  scanning: 20,
  analyzing: 50,
  validating: 72,
  generating: 88,
  completed: 100,
  failed: 0,
};

export default function Hero() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<AuditStatus>("idle");
  const [auditId, setAuditId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [scores, setScores] = useState<{ geo: number | null; marketing: number | null; compliance: number | null; grade: string | null }>({ geo: null, marketing: null, compliance: null, grade: null });
  const [error, setError] = useState<string | null>(null);
  const [animProgress, setAnimProgress] = useState(0);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
        setProgress(data.progress ?? STATUS_PROGRESS[s] ?? 0);
        if (data.geoScore !== null && data.geoScore !== undefined) {
          setScores({ geo: data.geoScore, marketing: data.marketingScore, compliance: data.complianceScore, grade: data.complianceGrade });
        }
        if (s === "completed") {
          setPdfUrl(data.pdfUrl);
          if (pollRef.current) clearInterval(pollRef.current);
        }
        if (s === "failed") {
          setError("Az audit sikertelen volt. Próbáld újra.");
          if (pollRef.current) clearInterval(pollRef.current);
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
    setScores({ geo: null, marketing: null, compliance: null, grade: null });

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
    setStatus("idle");
    setAuditId(null);
    setProgress(0);
    setAnimProgress(0);
    setPdfUrl(null);
    setError(null);
    setUrl("");
    setScores({ geo: null, marketing: null, compliance: null, grade: null });
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
                Az AI keresők átalakítják a játékszabályokat.{" "}
                <span className="text-highlight">Te hol állsz?</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-7 text-lg leading-relaxed text-foreground-secondary max-w-[540px]">
                A keresések 37%-a ma már AI eszközökkel indul. Ha a weboldalad nincs felkészítve, láthatatlan vagy a következő generáció számára.
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
                      Komplett elemzés 30 mp alatt · SEO + AI + Marketing + Jogi
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

                    {/* Score preview (once analyzing starts) */}
                    {(scores.geo !== null || isDone) && (
                      <div className="mt-5 grid grid-cols-3 gap-3 pt-4 border-t border-border">
                        {[
                          { label: "GEO/SEO", value: scores.geo, color: "#2563eb" },
                          { label: "Marketing", value: scores.marketing, color: "#f59e0b" },
                          { label: "Compliance", value: scores.compliance, color: "#8b5cf6" },
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

                    {/* Download button */}
                    {isDone && pdfUrl && (
                      <a
                        href={pdfUrl}
                        download
                        className="mt-5 flex items-center justify-center gap-2.5 w-full rounded-2xl bg-accent px-6 py-4 text-[1rem] font-bold text-white shadow-xl shadow-accent/25 hover:opacity-90 transition-opacity"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        PDF Riport Letöltése
                      </a>
                    )}

                    {/* Done but no PDF yet (generating) */}
                    {isDone && !pdfUrl && (
                      <p className="mt-4 text-sm text-center text-foreground-muted">
                        PDF generálás befejezés alatt...
                      </p>
                    )}

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
                  {["96 szempont", "4 dimenzió", "5 jogi keretrendszer"].map((badge) => (
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
                      { label: "GEO/SEO", value: "24/100", color: "text-danger", bar: "bg-danger", pct: 24 },
                      { label: "Marketing", value: "41/100", color: "text-accent", bar: "bg-accent", pct: 41 },
                      { label: "Megfelelőség", value: "35/100", color: "text-purple-600", bar: "bg-purple-600", pct: 35 },
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
