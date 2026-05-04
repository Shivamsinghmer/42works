"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

function IconCircle({ children }) {
  return (
    <div
      className="mb-6 flex items-center justify-center rounded-full border border-white/75 bg-white/90 shadow-[0_12px_30px_rgba(79,70,229,0.16)] backdrop-blur-sm"
      style={{ width: 72, height: 72 }}
    >
      <div
        className="flex items-center justify-center rounded-full bg-indigo-50"
        style={{ width: 52, height: 52 }}
      >
        {children}
      </div>
    </div>
  );
}

const philosophyCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Audit for Opportunity",
    description:
      "We audit your AI and Web3 landscape to surface the highest-value opportunities to build. Compliance is built in — but the real goal is a clear roadmap to business impact.",
    accent: "border-l-teal-400",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Live in 45 Days",
    description:
      "We build and launch AI & Web3 solutions fast. \"Live\" means a PoC, an MVP, or a standalone production feature — whichever delivers the most value for your business.",
    accent: "border-l-indigo-400",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    title: "Platform-Agnostic. No Lock-ins.",
    description:
      "Your strategy comes first. We pick only the tools that fit — a custom LLM pipeline, a DeFi protocol, or a hybrid AI-Web3 product. You own everything we build, always.",
    accent: "border-l-purple-400",
  },
];

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#eef4ff_0%,#e8f1ff_55%,#f7faff_100%)] px-6 py-24 md:px-12 md:py-36 lg:px-24">
      {/* Background orb */}
      <div
        className="pointer-events-none absolute top-0 right-0 translate-x-1/3 -translate-y-1/3"
        aria-hidden="true"
        style={{ width: 600, height: 600 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, #38bdf8 0%, #6366f1 40%, #1d4ed8 70%, transparent 100%)",
            opacity: 0.18,
            filter: "blur(1px)",
          }}
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3"
        aria-hidden="true"
        style={{ width: 500, height: 500 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 60% 60%, #14b8a6 0%, #6366f1 50%, transparent 100%)",
            opacity: 0.12,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="font-heading text-[clamp(2rem,5vw,3.8rem)] font-bold tracking-tight text-slate-900 mb-5 leading-tight">
              Audit for Opportunity.
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">Live in 45 Days.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-slate-600">
              We use audit-led discovery to surface high-impact opportunities, then build the right AI & Web3 solution to go live fast.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-700 via-blue-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(79,70,229,0.3)] transition hover:brightness-110"
            >
              Book an Opportunity Audit
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                →
              </span>
            </motion.a>
          </Reveal>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {philosophyCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.12} className="flex">
              <div
                className={`flex h-full flex-col rounded-2xl border border-white/70 bg-white/80 p-7 shadow-[0_14px_36px_rgba(15,23,42,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(79,70,229,0.2)]`}
              >
                <IconCircle>{card.icon}</IconCircle>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
