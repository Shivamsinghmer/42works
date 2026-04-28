"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

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
  { value: 4000, suffix: "+", label: "Engineers & Experts" },
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 200, suffix: "+", label: "Enterprise Clients" },
  { value: 30, suffix: "+", label: "Global Locations" },
];

export function StatsSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal-up font-heading text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Data-first, Design-led
        </h2>
        <p className="reveal-up text-slate-400 text-center text-lg max-w-2xl mx-auto mb-16">
          We help enterprises go beyond proofs of concept and deploy AI at scale, in real products, real workflows, and real business outcomes.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal-up text-center">
              <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
