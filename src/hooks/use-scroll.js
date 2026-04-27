"use client";

import { useEffect, useState } from "react";

export function useScroll(downThreshold, upThreshold) {
  const [scrolled, setScrolled] = useState(false);
  const scrollUpThreshold = upThreshold ?? downThreshold / 2;

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      // Hysteresis prevents rapid toggling around a single threshold.
      setScrolled((prev) => {
        if (prev) {
          return y > scrollUpThreshold;
        }
        return y > downThreshold;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [downThreshold, scrollUpThreshold]);

  return scrolled;
}
