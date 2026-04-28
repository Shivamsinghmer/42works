"use client";

import { motion } from "framer-motion";

const industries = [
  {
    title: "Banking & Financial Services",
    description: "AI-driven intelligence that transforms risk modeling, fraud detection, and customer engagement.",
    gradient: "from-blue-600 to-sky-400",
  },
  {
    title: "Retail & Consumer Goods",
    description: "AI-powered personalization that transforms discovery, browsing, and buying into seamless experiences.",
    gradient: "from-rose-500 to-pink-400",
  },
  {
    title: "Healthcare & Life Sciences",
    description: "Connected solutions powered by AI, automation, and cloud, enhancing patient outcomes.",
    gradient: "from-emerald-600 to-teal-400",
  },
  {
    title: "Hi-Tech",
    description: "AI-powered engineering that helps leaders invent the next frontier and set new industry standards.",
    gradient: "from-violet-600 to-purple-400",
  },
  {
    title: "Automotive & Manufacturing",
    description: "AI, cloud, and automation to modernize workflows, optimize supply chains, and deliver superior outcomes.",
    gradient: "from-amber-600 to-yellow-400",
  },
  {
    title: "Travel & Hospitality",
    description: "Blending operational excellence with exceptional traveler experiences through AI-driven solutions.",
    gradient: "from-cyan-600 to-sky-400",
  },
];

export function IndustriesSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="reveal-up text-sm font-semibold text-sky-700 tracking-widest uppercase mb-4">Industries</p>
          <h2 className="reveal-up font-heading text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Where Industry Leads,<br />Technology Enables.
          </h2>
          <p className="reveal-up text-lg text-slate-500 max-w-2xl">
            Technology alone doesn&apos;t solve industry challenges. That&apos;s why we lead with domain expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              className="feature-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:shadow-xl cursor-pointer"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${industry.gradient} mb-5 group-hover:w-20 transition-all duration-500`} />
              <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                {industry.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {industry.description}
              </p>
              <span className="text-sm font-semibold text-sky-700 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
