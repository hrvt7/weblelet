"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    const WORDS = ["HRVT", "AI", "STUDIO", "EDITORIAL", "KAMPÁNY", "90%", "3 NAP", "BUDAPEST", "✨"];

    type Drop = { x: number; y: number; word: string; size: number; speed: number; alpha: number; amber: boolean };
    let drops: Drop[] = [];

    function spawn(): Drop {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        word: WORDS[Math.floor(Math.random() * WORDS.length)],
        size: 30 + Math.random() * 90,
        speed: 0.18 + Math.random() * 0.55,
        alpha: 0.04 + Math.random() * 0.18,
        amber: Math.random() < 0.16,
      };
    }

    function resize() {
      if (!canvas || !ctx) return;
      const parent = canvas.parentElement;
      if (!parent) return;
      W = parent.clientWidth;
      H = parent.clientHeight;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(DPR, DPR);
      drops = Array.from({ length: 26 }, () => spawn());
    }

    let raf = 0;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      for (const d of drops) {
        ctx.save();
        ctx.translate(d.x, d.y);
        ctx.font = `800 ${d.size}px Bricolage Grotesque, sans-serif`;
        ctx.fillStyle = d.amber
          ? `rgba(212, 134, 10, ${d.alpha * 1.5})`
          : `rgba(244, 236, 220, ${d.alpha})`;
        ctx.fillText(d.word, 0, 0);
        ctx.restore();
        d.y -= d.speed;
        if (d.y < -d.size * 1.2) {
          d.y = H + 60;
          d.x = Math.random() * W;
          d.word = WORDS[Math.floor(Math.random() * WORDS.length)];
        }
      }
      raf = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="hero">
      <canvas ref={canvasRef}></canvas>
      <div className="hero__vignette"></div>

      <div className="hero__content">
        <h1>
          <span className="line"><span>STÚDIÓ-</span></span>
          <span className="line"><span>MINŐSÉG.</span></span>
          <span className="line"><span><span className="amber">AI</span> SEBESSÉG.</span></span>
        </h1>
        <p className="hero__lede">
          Profi termékfotók, editorial kampányképek és reklámvideók AI-al — 3–5 nap alatt, töredékáron.{" "}
          <strong>Senki nem nézi AI-nak.</strong>
        </p>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-text">Görgess</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </header>
  );
}
