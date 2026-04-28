"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
];

export function ParallaxGallery() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="bg-white">
      {/* Text above gallery */}
      <div className="flex h-[60vh] items-center justify-center px-6 md:px-20">
        <h2 className="reveal-up font-heading text-4xl md:text-6xl font-bold text-slate-900 tracking-tight text-center max-w-4xl">
          <span className="font-light">Our deep product and experience engineering roots</span>{" "}
          make us uniquely equipped to turn ideas into reality.
        </h2>
      </div>

      {/* Parallax gallery */}
      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden p-[2vw]"
      >
        <Column
          images={[images[0], images[1], images[2]]}
          y={y1}
          topOffset="-45%"
        />
        <Column
          images={[images[3], images[4], images[5]]}
          y={y2}
          topOffset="-95%"
        />
        <Column
          images={[images[6], images[7], images[8]]}
          y={y3}
          topOffset="-45%"
        />
        <Column
          images={[images[9], images[10], images[11]]}
          y={y4}
          topOffset="-75%"
        />
      </div>

      {/* Spacer after gallery */}
      <div className="h-[30vh]" />
    </section>
  );
}

function Column({ images, y, topOffset }) {
  return (
    <motion.div
      className="relative flex h-full w-1/4 min-w-[200px] flex-col gap-[2vw]"
      style={{ y, top: topOffset }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="relative h-full w-full overflow-hidden rounded-xl"
        >
          <img
            src={src}
            alt={`Gallery image ${i + 1}`}
            className="pointer-events-none h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </motion.div>
  );
}
