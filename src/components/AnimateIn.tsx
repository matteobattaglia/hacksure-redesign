"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimateIn({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: "var(--duration-enter)",
    transitionTimingFunction: "var(--ease-out)",
    transitionDelay: visible ? `${delay}ms` : "0ms",
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0,0,0) scale(1)" : "translate3d(0,12px,0) scale(0.98)",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
