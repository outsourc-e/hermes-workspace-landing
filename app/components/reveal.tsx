"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-block ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
