"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  distance?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  distance = 24,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-40px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const translate =
    direction === "up" ? `translateY(${distance}px)` :
    direction === "down" ? `translateY(-${distance}px)` :
    direction === "left" ? `translateX(${distance}px)` :
    direction === "right" ? `translateX(-${distance}px)` :
    "none";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : translate,
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
