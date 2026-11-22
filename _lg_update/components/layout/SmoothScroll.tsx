"use client";

// components/layout/SmoothScroll.tsx
// Buttery inertia scrolling using Lenis (already in your package.json, was unused).
// Disabled automatically when the visitor prefers reduced motion.
// Any inner scroll area (modal, dropdown, drawer) needs the attribute  data-lenis-prevent

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: true, // <a href="#section"> links glide too
    });
    window.__lenis = lenis;

    let frame = requestAnimationFrame(function loop(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
}
