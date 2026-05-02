"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 120, suffix: "+", label: "AI & Web3 Audits Completed" },
  { value: 4, suffix: "wk", label: "Average MVP Delivery Time" },
  { value: 200, suffix: "+", label: "Enterprise Clients" },
  { value: 30, suffix: "+", label: "Global Locations" },
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#111b37_55%,#172554_100%)] px-6 py-20 md:px-12 md:py-28 lg:px-24">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-4 text-center font-heading text-3xl font-bold text-white md:text-4xl">
            Audit. Build. Scale.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-slate-300">
            We audit AI systems for security and compliance. We audit Web3 protocols for smart contract safety. Then we build production-grade products at record speed.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.14 + index * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center backdrop-blur-sm">
                <div className="mb-2 bg-gradient-to-r from-indigo-300 via-cyan-200 to-teal-200 bg-clip-text font-heading text-4xl font-bold text-transparent md:text-5xl">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-slate-300">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
