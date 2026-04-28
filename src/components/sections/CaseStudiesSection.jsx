"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const caseStudies = [
  {
    title: "Transforming the Mortgage Transfer Process",
    client: "Santander",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80",
    tag: "FinTech",
  },
  {
    title: "Engineering the World's Largest Food Delivery Platform",
    client: "Just Eat",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    tag: "FoodTech",
  },
  {
    title: "50% Reduction in Testing Time Through Automation",
    client: "Seeking Alpha",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tag: "QA & Testing",
  },
  {
    title: "Optimizing Payment Infrastructure",
    client: "Betsson",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tag: "Payments",
  },
  {
    title: "AI-Driven CO₂ Reduction for Smart Shipping",
    client: "Stena Line",
    image: "https://plus.unsplash.com/premium_photo-1733317270278-772ee47c86d7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Sustainability",
  },
];

export function CaseStudiesSection() {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [dragConstraint, setDragConstraint] = useState(0);

  // Calculate drag constraint based on content width
  useEffect(() => {
    const updateConstraint = () => {
      if (scrollContainerRef.current) {
        const scrollWidth = scrollContainerRef.current.scrollWidth;
        const clientWidth = scrollContainerRef.current.offsetWidth;
        setDragConstraint(-(scrollWidth - clientWidth));
      }
    };
    updateConstraint();
    window.addEventListener("resize", updateConstraint);
    return () => window.removeEventListener("resize", updateConstraint);
  }, []);

  // Parallax-driven horizontal movement on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-24 mb-12">
        <div className="max-w-6xl mx-auto">
          <p className="reveal-up text-sm font-semibold text-sky-700 tracking-widest uppercase mb-4">Case Studies</p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="reveal-up font-heading text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-0">
              Behind every product we build<br />is a story of transformation.
            </h2>
            <p className="reveal-up text-sm text-slate-400 flex items-center gap-2">
              <span>←</span> Drag to explore <span>→</span>
            </p>
          </div>
        </div>
      </div>

      {/* Draggable + scroll-parallax container */}
      <div ref={scrollContainerRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div
          className="flex gap-6 pl-6 md:pl-24 pr-24"
          drag="x"
          dragConstraints={{ left: dragConstraint, right: 0 }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          style={{ x: scrollX }}
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.title}
              className="feature-card group flex-shrink-0 w-[340px] md:w-[420px] select-none"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm group-hover:shadow-xl transition-shadow">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-slate-700">
                      {study.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">{study.client}</p>
                  <h3 className="font-heading text-lg font-bold text-slate-900 leading-snug">
                    {study.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
