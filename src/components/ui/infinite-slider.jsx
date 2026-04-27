"use client";

import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 80,
  speedOnHover,
  reverse = false,
  className,
}) {
  const [hovered, setHovered] = useState(false);

  const activeSpeed = hovered && speedOnHover ? speedOnHover : speed;

  const animationDuration = useMemo(() => {
    // Approximate duration from a virtual distance for smooth marquee motion.
    const distance = 2400;
    const safeSpeed = Math.max(10, activeSpeed);
    return `${Math.max(10, Math.round(distance / safeSpeed))}s`;
  }, [activeSpeed]);

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "infinite-slider-track flex w-max",
          reverse && "infinite-slider-reverse"
        )}
        style={{
          gap: `${gap}px`,
          animationDuration,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
