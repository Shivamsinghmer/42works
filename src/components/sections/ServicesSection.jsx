"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "AI Build & Transformation",
    description: "From smarter builds to self-optimizing systems, our AI-enabled Engineering approach turns complexity into competitive advantage.",
    icon: "⚡",
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Enterprise-ready AI",
    description: "We help you build the foundations — products, platforms, and accelerators that bring AI into the heart of your business.",
    icon: "🏗️",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Agentic Automation",
    description: "From routine workflows to intelligent autonomy, our AI agents manage enterprise tasks end-to-end, turning complexity into opportunity.",
    icon: "🤖",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "AI Incubator",
    description: "Turn AI pilots into real impact. Rapidly validate ideas, prototype solutions, and scale only what works.",
    icon: "🚀",
    color: "from-amber-500 to-orange-600",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="feature-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 md:p-10 transition-all hover:shadow-2xl hover:border-slate-300"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <span className="text-3xl mb-5 block">{service.icon}</span>
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 group-hover:gap-2 transition-all">
                Learn More <span>→</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
