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
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Data-first, Design-led",
    description:
      "42works helps enterprises go beyond proofs of concept and deploy AI at scale, in real products, real workflows, and real business outcomes.",
    accent: "border-l-teal-400",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    title: "No Lock-ins. Just the Right Tools for the Right Outcomes.",
    description:
      "Your strategy comes first. We&apos;re platform-agnostic, selecting only what fits your needs so you gain lasting freedom and solutions that adapt over time.",
    accent: "border-l-indigo-400",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Success Equals Sustainable Adoption",
    description:
      "Anyone can ship. We make it stick. Building solutions people trust, use, and grow with over time.",
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
              Engineered for Experience.
              <br />
              Built for Impact.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-slate-600">
              Our deep product and experience engineering roots make us uniquely
              equipped to turn ideas into market-shaping, future-ready realities.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-700 via-blue-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(79,70,229,0.3)] transition hover:brightness-110"
            >
              View Services
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                →
              </span>
            </motion.a>
          </Reveal>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {philosophyCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.12}>
              <div
                className={`rounded-2xl border border-white/70 bg-white/80 p-7 shadow-[0_14px_36px_rgba(15,23,42,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(79,70,229,0.2)]`}
              >
                <IconCircle>{card.icon}</IconCircle>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
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
