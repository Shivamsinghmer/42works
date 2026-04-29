"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const articles = [
  {
    title: "Enterprise AI Automation: A Practical Guide to GenAI, AI Agents and Intelligent Workflows",
    tag: "AI & Automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&q=80",
    featured: true,
  },
  {
    title: "How AI Agents Are Rewiring Corporate DNA in Healthcare",
    tag: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
  },
  {
    title: "Legacy Modernization: Architecture, AI, Cloud, ROI & Roadmaps",
    tag: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
  },
  {
    title: "AI Powered Insights in Retail: Enabling Smarter, Faster Decision-Making",
    tag: "Retail",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80",
  },
];

export function ThoughtLeadershipSection() {
  const [featured, ...rest] = articles;

  return (
    <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#eff5ff_52%,#f8fbff_100%)] px-6 py-24 md:px-12 md:py-36 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <Reveal>
              <span className="mb-4 inline-block rounded-full border border-teal-300/70 bg-teal-400/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-[0_8px_20px_rgba(20,184,166,0.25)]">
                Thought Leadership
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-tight text-slate-900 leading-tight">
                Perspectives That Matter
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-700 via-blue-600 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(79,70,229,0.3)] transition hover:brightness-110"
            >
              View All
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-xs">
                →
              </span>
            </motion.a>
          </Reveal>
        </div>

        {/* 2-column grid: featured + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
          {/* Featured article */}
          <Reveal>
            <motion.a
              href="#"
              className="group relative block h-full min-h-[320px] cursor-pointer overflow-hidden rounded-2xl border border-white/70 shadow-[0_18px_50px_rgba(15,23,42,0.14)]"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

              {/* Floating tags (AI icons watermark) */}
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="rounded-lg bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-semibold text-indigo-700">
                  AI
                </span>
                <span className="rounded-lg bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-semibold text-teal-700">
                  GenAI
                </span>
              </div>

              {/* Content bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl font-bold text-white leading-snug mb-3">
                  {featured.title}
                </h3>
                <span className="nav-link-underline inline-flex items-center gap-1 text-xs font-bold tracking-widest uppercase text-teal-400">
                  Learn More →
                </span>
              </div>
            </motion.a>
          </Reveal>

          {/* Sidebar: 3 smaller articles */}
          <div className="flex flex-col gap-4">
            {rest.map((article, i) => (
              <Reveal key={article.title} delay={i * 0.1}>
                <motion.a
                  href="#"
                  className="group flex gap-4 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-indigo-100 hover:shadow-[0_16px_42px_rgba(79,70,229,0.16)]"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                  <div className="flex-shrink-0 w-24 h-20 rounded-xl overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-between py-0.5">
                    <h3 className="font-heading text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <span className="nav-link-underline inline-flex items-center gap-1 text-xs font-bold tracking-widest uppercase text-indigo-700 mt-2">
                      Learn More →
                    </span>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
