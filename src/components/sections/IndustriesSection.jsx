"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const industries = [
  {
    title: "Banking & Financial Services",
    description:
      "Modernize banking with AI-driven intelligence that transforms risk modeling, fraud detection, and customer engagement into seamless, trusted financial experiences.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80",
  },
  {
    title: "Retail & Consumer Goods",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&q=80",
    description:
      "AI-powered personalization that transforms discovery, browsing, and buying into seamless, revenue-driving experiences.",
  },
  {
    title: "Healthcare & Life Sciences",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80",
    description:
      "Connected solutions powered by AI, automation, and cloud, enhancing patient outcomes and accelerating research at scale.",
  },
  {
    title: "Hi-Tech",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80",
    description:
      "AI-powered engineering that helps leaders invent the next frontier and set new industry standards.",
  },
  {
    title: "Automotive & Manufacturing",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=700&q=80",
    description:
      "AI, cloud, and automation to modernize workflows, optimize supply chains, and deliver superior quality outcomes.",
  },
  {
    title: "Travel and Hospitality",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=80",
    description:
      "Blending operational excellence with exceptional traveler experiences through AI-driven, data-powered solutions.",
  },
];

export function IndustriesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(145deg,#0b1d67_0%,#182b7a_40%,#11316f_100%)] px-6 py-24 md:px-12 md:py-36 lg:px-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.2),transparent_32%),radial-gradient(circle_at_90%_70%,rgba(20,184,166,0.2),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <Reveal>
          <h2 className="font-heading text-[clamp(1.8rem,4.5vw,3.2rem)] font-bold text-white mb-4 leading-tight tracking-tight text-center">
            We Know Your Industry. We Build for It.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-slate-300">
            Technology alone doesn&apos;t solve industry challenges. That&apos;s why we
            lead with domain expertise.
            <br />
            Our teams are built to combine sector expertise with engineering
            precision to deliver industry-native solutions.
          </p>
        </Reveal>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 shadow-[0_26px_80px_rgba(2,6,23,0.35)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={industries[active].image}
                  src={industries[active].image}
                  alt={industries[active].title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b6e]/65 to-transparent" />
            </div>
          </Reveal>

          {/* Right: Industry list */}
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
              {industries.map((industry, i) => (
                <button
                  key={industry.title}
                  onClick={() => setActive(i)}
                  className={`text-left w-full transition-all duration-300 rounded-xl px-5 py-4 group`}
                >
                  {active === i ? (
                    <motion.div
                      layoutId="industry-active"
                      className="rounded-xl border border-cyan-200/30 bg-gradient-to-br from-indigo-950/70 via-indigo-900/60 to-cyan-900/40 p-5 backdrop-blur-sm"
                      transition={{ type: "spring", stiffness: 280, damping: 26 }}
                    >
                      <h3 className="font-heading text-lg font-bold text-white mb-2">
                        {industry.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed mb-3">
                        {industry.description}
                      </p>
                        <span className="nav-link-underline inline-flex items-center gap-1 text-xs font-bold tracking-widest uppercase text-cyan-300">
                          Learn More →
                        </span>
                    </motion.div>
                  ) : (
                    <div className="border-b border-white/10 px-1 py-1 transition-colors hover:border-white/30">
                      <h3 className="font-heading text-base font-semibold text-slate-300 group-hover:text-white transition-colors">
                        {industry.title}
                      </h3>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
