"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedGaugeProps {
  score: number;
  maxScore: number;
}

export default function AnimatedGauge({ score, maxScore }: AnimatedGaugeProps) {
  const [visible, setVisible] = useState(false);
  const [displayScore, setDisplayScore] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const circumference = 2 * Math.PI * 50; // r=50
  const progress = score / maxScore;
  const dashOffset = circumference * (1 - progress);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1600;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * score);
      setDisplayScore(start);
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [visible, score]);

  const strokeColor = score <= 35 ? "#EF4444" : score <= 60 ? "#F59E0B" : "#22C55E";

  return (
    <div ref={ref} className="relative h-36 w-36">
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="#F1F5F9"
          strokeWidth="8"
        />
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke={strokeColor}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={visible ? dashOffset : circumference}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="font-heading text-4xl font-extrabold"
          style={{ color: strokeColor }}
        >
          {displayScore}
        </span>
        <span className="text-xs font-medium text-foreground-muted mt-0.5">
          /100 pont
        </span>
      </div>
    </div>
  );
}
