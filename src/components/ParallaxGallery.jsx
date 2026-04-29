"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

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
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#f2f6ff_55%,#f8fbff_100%)]">
      {/* Text above gallery */}
      <div className="flex h-[60vh] items-center justify-center px-6 md:px-20">
        <Reveal>
          <h2 className="max-w-4xl rounded-[2rem] border border-white/70 bg-white/70 px-6 py-8 text-center font-heading text-4xl font-bold tracking-tight text-slate-900 shadow-[0_20px_60px_rgba(79,70,229,0.12)] backdrop-blur-md md:px-12 md:text-6xl">
            <span className="font-light">Our deep product and experience engineering roots</span>{" "}
            make us uniquely equipped to turn ideas into reality.
          </h2>
        </Reveal>
      </div>

      {/* Parallax gallery */}
      <Reveal delay={0.08}>
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
      </Reveal>

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
        <div key={i} className="relative h-full w-full overflow-hidden rounded-2xl border border-white/50 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
          <img
            src={src}
            alt={`Gallery image ${i + 1}`}
            className="pointer-events-none h-full w-full object-cover transition duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      ))}
    </motion.div>
  );
}
