"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const caseStudies = [
  {
    title: "Transforming the Mortgage Transfer Process for Santander",
    client: "Santander",
    logo: "Santander",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    logoColor: "#EC0000",
  },
  {
    title: "Engineering the World's largest Food Delivery Platform",
    client: "Just Eat",
    logo: "JUST EAT",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&q=80",
    logoColor: "#FF8000",
  },
  {
    title: "Achieved 50% Reduction in Testing Time Through Automation Testing...",
    client: "Seeking Alpha",
    logo: "Seeking Alpha",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    logoColor: "#1a1a2e",
  },
  {
    title: "Optimizing Payment Infrastructure at Scale",
    client: "Betsson",
    logo: "Betsson",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    logoColor: "#0066cc",
  },
  {
    title: "AI-Driven CO₂ Reduction for Smart Shipping",
    client: "Stena Line",
    logo: "Stena Line",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
    logoColor: "#003087",
  },
];

export function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragConstraint, setDragConstraint] = useState(0);
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (trackRef.current && containerRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const containerWidth = containerRef.current.offsetWidth;
        setDragConstraint(-(trackWidth - containerWidth));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(caseStudies.length - 1, i + 1));

  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_48%,#f8fbff_100%)] px-6 py-24 md:px-12 md:py-36 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Reveal>
            <span className="mb-6 inline-block rounded-full border border-teal-300/70 bg-teal-400/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-[0_8px_20px_rgba(20,184,166,0.25)]">
              Success Stories
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-[clamp(1.8rem,4.5vw,3.5rem)] font-bold tracking-tight text-slate-900 mb-4 leading-tight">
              Where Ideas Become Impact
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-slate-600">
              Behind every product we build is a story of transformation. From
              reimagining customer experiences to reinventing industries, these
              are the moments where ambition became impact.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-700 via-blue-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(79,70,229,0.3)] transition hover:brightness-110"
            >
              View All
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                →
              </span>
            </motion.a>
          </Reveal>
        </div>

        {/* Cards row with prev/next arrows */}
        <Reveal delay={0.2}>
          <div className="relative">
            {/* Prev arrow */}
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-500 shadow-[0_10px_28px_rgba(79,70,229,0.18)] transition-all hover:border-indigo-200 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Previous"
            >
              ←
            </button>

            {/* Cards container */}
            <div ref={containerRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
              <motion.div
                ref={trackRef}
                className="flex gap-5"
                drag="x"
                dragConstraints={{ left: dragConstraint, right: 0 }}
                dragElastic={0.08}
                animate={{ x: activeIndex * -300 }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
              >
                {caseStudies.map((study) => (
                  <motion.div
                    key={study.title}
                    className="flex-shrink-0 w-[280px] md:w-[300px]"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 280, damping: 24 }}
                  >
                    <div className="group overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_22px_60px_rgba(79,70,229,0.2)]">
                      {/* Image with logo overlay */}
                      <div className="relative h-48 overflow-hidden bg-slate-200">
                        <img
                          src={study.image}
                          alt={study.title}
                          loading="lazy"
                          className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                        />
                        {/* Logo overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                          <span
                            className="text-lg font-black tracking-tight drop-shadow-lg"
                            style={{ color: study.logoColor, textShadow: "0 0 12px rgba(255,255,255,0.8)" }}
                          >
                            {study.logo}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="font-heading text-sm font-bold text-slate-900 leading-snug mb-4">
                          {study.title}
                        </h3>
                        <a
                          href="#"
                          className="nav-link-underline inline-flex items-center gap-1 text-xs font-bold tracking-widest uppercase text-indigo-700 hover:text-indigo-900 transition-colors"
                        >
                          Learn More →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              disabled={activeIndex >= caseStudies.length - 3}
              className="absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-500 shadow-[0_10px_28px_rgba(79,70,229,0.18)] transition-all hover:border-indigo-200 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
