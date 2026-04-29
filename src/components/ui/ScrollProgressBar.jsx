"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9998] origin-left"
      style={{
        scaleX,
        height: "2px",
        background: "linear-gradient(90deg, #6366f1 0%, #14b8a6 100%)",
        transformOrigin: "0%",
        willChange: "transform",
      }}
    />
  );
}
