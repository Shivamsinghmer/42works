"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/FooterSection";

// ── Animated counter ─────────────────────────────────────────────────────────
function StatCard({ value, label, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  const match = String(value).match(/^([^0-9]*)([0-9.,]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const numberStr = match ? match[2] : "";
  const suffix = match ? match[3] : String(value);
  const target = parseFloat(numberStr.replace(/,/g, "")) || 0;
  const isFloat = numberStr.includes(".");

  useEffect(() => {
    if (!inView || target === 0) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  const displayValue = match && target > 0 ? `${prefix}${isFloat ? count.toFixed(1) : Math.floor(count)}${suffix}` : value;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="text-center"
    >
      <div className="mb-1 bg-gradient-to-r from-indigo-300 via-cyan-200 to-teal-300 bg-clip-text font-heading text-[2.8rem] font-bold text-transparent md:text-[3.8rem] leading-none">
        {displayValue}
      </div>
      <p className="text-sm text-slate-400">{label}</p>
    </motion.div>
  );
}

// ── Scroll reveal wrapper ─────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Icon map ──────────────────────────────────────────────────────────────────
function Icon({ name, className = "h-6 w-6" }) {
  const paths = {
    brain: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
    shield: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    check: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
    lock: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
    chart: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
    search: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z",
  };
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[name] || paths.brain} />
    </svg>
  );
}

// ── Marquee strip ─────────────────────────────────────────────────────────────
function Marquee({ items }) {
  return (
    <div className="relative overflow-hidden bg-indigo-600 py-3">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 text-sm font-semibold tracking-widest text-white/80 uppercase">
            {item} <span className="mx-2 text-teal-300">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
    </div>
  );
}

// ── Main Template ─────────────────────────────────────────────────────────────
export default function ServicePageTemplate({ service }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const marqueeItems = service.capabilities.map((c) => c.title);

  return (
    <div className="bg-white overflow-clip">
      <div className="absolute inset-x-0 top-4 z-50 flex justify-center px-4">
        <Header />
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative flex h-[100svh] items-center overflow-hidden bg-slate-50">
        {/* Parallax BG image */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img src={service.heroImage} alt="" className="h-full w-full object-cover opacity-[0.12]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_15%_20%,rgba(99,102,241,0.18),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_100%_75%,rgba(56,189,248,0.14),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.75),rgba(255,255,255,0.94))]" />
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6  md:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold tracking-widest text-indigo-600 uppercase"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
                {service.badge}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 font-heading text-[clamp(2.2rem,4.8vw,4.1rem)] font-bold leading-[1.02] tracking-tight text-slate-900"
              >
                {service.title.split("\n").map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mb-10 max-w-lg text-lg leading-relaxed text-slate-600"
              >
                {service.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 py-4 text-base font-bold text-white shadow-[0_14px_28px_rgba(79,70,229,0.28)] transition hover:brightness-110">
                  {service.cta.primary}
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
                <a href="#how-we-work" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-8 py-4 text-base font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition hover:bg-white">
                  {service.cta.secondary}
                </a>
              </motion.div>
            </div>

            {/* Right — hero image card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/90 shadow-[0_28px_60px_rgba(15,23,42,0.18)]">
                <img src={service.heroImage} alt={service.badge} className="h-[420px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent" />
                {/* Floating stat pill */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 left-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-white/90 px-5 py-3 text-slate-700 shadow-lg backdrop-blur-md"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-sm font-bold text-slate-900">{service.stats[0].value}</span>
                  <span className="text-xs text-slate-600">{service.stats[0].label}</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────────────── */}
      <Marquee items={marqueeItems} />

      {/* ── CAPABILITIES ─────────────────────────────────────────────────── */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeUp className="mb-20 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold tracking-widest text-indigo-600 uppercase">
              What We Do
            </div>
            <h2 className="font-heading text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold leading-[1.08] text-slate-900">
              Key Capabilities
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Everything you need to audit, secure, and scale your {service.badge.toLowerCase()} systems.
            </p>
          </FadeUp>

          <div className="grid gap-px bg-slate-100 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden">
            {service.capabilities.map((cap, i) => (
              <FadeUp key={cap.title} delay={i * 0.07}>
                <div className="group flex h-full flex-col bg-white p-8 transition hover:bg-indigo-50/40">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon name={cap.icon} />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-bold text-slate-900">{cap.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-slate-500">{cap.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section id="how-we-work" className="relative overflow-hidden bg-[#020617] py-28 text-white md:py-36">
        <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-teal-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <FadeUp className="mb-20 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-xs font-bold tracking-widest text-teal-400 uppercase">
              Our Approach
            </div>
            <h2 className="font-heading text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold">The 42works Way</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">A structured, transparent process that delivers real results — every time.</p>
          </FadeUp>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[28px] top-8 hidden h-[calc(100%-4rem)] w-[2px] bg-gradient-to-b from-indigo-500/60 via-teal-400/40 to-transparent md:block" />
            <div className="space-y-6">
              {service.process.map((step, i) => (
                <FadeUp key={step.step} delay={i * 0.1}>
                  <div className="group flex gap-6 md:gap-10">
                    <div className="relative flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-indigo-400/40 bg-indigo-600/20 font-heading text-lg font-bold text-indigo-300 transition group-hover:border-indigo-400 group-hover:bg-indigo-600/40">
                        {step.step}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-6 flex-1 transition hover:border-indigo-400/30 hover:bg-white/8">
                      <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────────────── */}
      {service.useCases?.length > 0 && (
        <section className="bg-[#f8fafc] py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <FadeUp className="mb-20 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold tracking-widest text-indigo-600 uppercase">
                Real-World Applications
              </div>
              <h2 className="font-heading text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold text-slate-900">See It in Action</h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-500">How 42works delivers results for clients across industries.</p>
            </FadeUp>
            <div className="grid gap-6 md:grid-cols-3">
              {service.useCases.map((uc, i) => (
                <FadeUp key={uc.title} delay={i * 0.1}>
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(15,23,42,0.08)] transition hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(79,70,229,0.15)]">
                    <div className="relative h-56 overflow-hidden">
                      <img src={uc.image} alt={uc.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                      {uc.tag && (
                        <span className="absolute bottom-4 left-4 rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-bold tracking-widest text-white uppercase">{uc.tag}</span>
                      )}
                    </div>
                    <div className="p-7">
                      <h3 className="mb-2 font-heading text-lg font-bold text-slate-900">{uc.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-500">{uc.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="bg-[#020617] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            {service.stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-700 to-teal-600 py-28 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-white uppercase">
              Get Started
            </div>
            <h2 className="mb-5 font-heading text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold leading-[1.1]">
              Ready to Get Started?
            </h2>
            <p className="mb-10 text-lg text-white/80">
              Book a consultation. We&apos;ll scope your needs and outline a custom plan.
            </p>
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-white px-10 py-4 text-base font-bold text-indigo-700 shadow-xl transition hover:bg-indigo-50">
              Book Consultation
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </FadeUp>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
