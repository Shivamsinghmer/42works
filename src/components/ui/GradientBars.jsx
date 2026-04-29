"use client";

import { motion } from "framer-motion";

export function GradientBars({
  bars = 24,
  colors = ["#a855f7", "#14b8a6", "transparent"],
  className = "",
}) {
  const gradientStyle = `linear-gradient(to top, ${colors.join(", ")})`;

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      <div className="flex h-full w-full">
        {Array.from({ length: bars }).map((_, index) => {
          const position = index / (bars - 1);
          const center = 0.5;
          const distance = Math.abs(position - center);
          const scale = 0.3 + 0.8 * Math.pow(distance * 2, 1.3);

          return (
            <motion.div
              key={`bar-${index}`}
              className="flex-1 origin-bottom"
              style={{ background: gradientStyle }}
              animate={{
                scaleY: [scale, scale + 0.15, scale],
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 3.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
                delay: index * 0.45,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
