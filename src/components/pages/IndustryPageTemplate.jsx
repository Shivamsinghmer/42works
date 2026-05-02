"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/FooterSection";

// ── Scroll reveal ────────────────────────────────────────────────────────────
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

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const initial = {
    up: { opacity: 0, y: 50 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
  }[direction];
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StatCard({ value, label, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="mb-1 bg-gradient-to-r from-indigo-300 via-cyan-200 to-teal-300 bg-clip-text font-heading text-[2.8rem] font-bold text-transparent md:text-[3.8rem] leading-none">
        {value}
      </div>
      <p className="text-sm text-slate-400">{label}</p>
    </motion.div>
  );
}

export default function IndustryPageTemplate({ industry }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative flex h-[100svh] max-h-[100svh] min-h-[100svh] items-center overflow-hidden bg-slate-50">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img src={industry.heroImage} alt="" className="h-full w-full object-cover opacity-[0.12]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_62%_at_8%_28%,rgba(99,102,241,0.18),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_100%_72%,rgba(34,211,238,0.14),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.75),rgba(255,255,255,0.94))]" />
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6  md:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold tracking-widest text-indigo-600 uppercase"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
                {industry.badge}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 font-heading text-[clamp(2.2rem,4.8vw,3.9rem)] font-bold leading-[1.04] tracking-tight text-slate-900"
              >
                {industry.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mb-10 max-w-lg text-lg leading-relaxed text-slate-600"
              >
                {industry.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 py-4 text-base font-bold text-white shadow-[0_14px_28px_rgba(79,70,229,0.28)] transition hover:brightness-110">
                  {industry.cta.primary}
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
                <a href="#solutions" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-8 py-4 text-base font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition hover:bg-white">
                  {industry.cta.secondary}
                </a>
              </motion.div>
            </div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/90 shadow-[0_28px_60px_rgba(15,23,42,0.18)]">
                <img src={industry.heroImage} alt={industry.badge} className="h-[420px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent" />
                {/* Quick-stat pills */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 left-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-white/90 px-5 py-3 text-slate-700 shadow-lg backdrop-blur-md"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-sm font-bold text-slate-900">{industry.stats[0]?.value}</span>
                  <span className="text-xs text-slate-600">{industry.stats[0]?.label}</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── VALUE STATEMENT ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a1628] py-28 text-white md:py-36">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-600/12 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <FadeUp className="mb-16 text-center">
            <p className="mx-auto max-w-3xl text-[clamp(1.2rem,2.5vw,1.65rem)] font-medium leading-relaxed text-slate-300">
              &ldquo;{industry.valueStatement}&rdquo;
            </p>
          </FadeUp>
          <div className="grid gap-6 sm:grid-cols-3">
            {industry.valueCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-indigo-400/30 hover:bg-white/8">
                  <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-indigo-400 to-teal-400" />
                  <h3 className="mb-2 text-lg font-bold text-white">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{card.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ─────────────────────────────────────────────────────── */}
      <section id="solutions" className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeUp className="mb-20 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold tracking-widest text-indigo-600 uppercase">
              Our Solutions
            </div>
            <h2 className="font-heading text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold text-slate-900">
              Built for {industry.badge}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">Specialized services designed for the unique challenges of your industry.</p>
          </FadeUp>

          <div className="space-y-8">
            {industry.solutions.map((sol, i) => {
              const isEven = i % 2 === 0;
              return (
                <FadeIn key={sol.title} delay={i * 0.08} direction={isEven ? "left" : "right"}>
                  <div className={`group flex flex-col gap-0 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition hover:shadow-[0_20px_50px_rgba(79,70,229,0.12)] md:flex-row ${!isEven ? "md:flex-row-reverse" : ""}`}>
                    <div className="relative h-64 shrink-0 overflow-hidden md:h-auto md:w-80">
                      <img src={sol.image} alt={sol.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:bg-gradient-to-r md:from-slate-900/40 md:to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-bold tracking-widest text-white uppercase">{sol.tag}</span>
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
                      <h3 className="mb-4 font-heading text-2xl font-bold text-slate-900 transition group-hover:text-indigo-700 md:text-3xl">{sol.title}</h3>
                      <p className="mb-6 text-base leading-relaxed text-slate-500">{sol.desc}</p>
                      <Link href="/contact" className="inline-flex w-fit items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-700">
                        Learn More
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ─────────────────────────────────────────────────── */}
      <section className="bg-[#f8fafc] py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold tracking-widest text-indigo-600 uppercase">
                Full Scope
              </div>
              <h2 className="mb-6 font-heading text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold text-slate-900 leading-[1.08]">
                What We Offer
              </h2>
              <p className="text-lg leading-relaxed text-slate-500">
                Our complete capability set for {industry.badge.toLowerCase()} — from deep audits to full product development.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {industry.offerings.map((item, i) => (
                <FadeUp key={item} delay={i * 0.04}>
                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 shadow-sm transition hover:border-indigo-200 hover:shadow-md">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#020617] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            {industry.stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ──────────────────────────────────────────────────── */}
      {industry.caseStudies?.length > 0 && (
        <section className="bg-white py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <FadeUp className="mb-20 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold tracking-widest text-indigo-600 uppercase">
                Success Stories
              </div>
              <h2 className="font-heading text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold text-slate-900">Case Studies</h2>
            </FadeUp>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industry.caseStudies.map((cs, i) => (
                <FadeUp key={cs.title} delay={i * 0.1}>
                  <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(79,70,229,0.12)]">
                    <div className="relative h-52 overflow-hidden">
                      <img src={cs.image} alt={cs.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                      <span className="absolute bottom-4 left-4 rounded-full bg-teal-500 px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">{cs.tag}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 font-heading text-lg font-bold text-slate-900 transition group-hover:text-indigo-700">{cs.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-500">{cs.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-700 to-teal-600 py-28 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-white uppercase">
              Let&apos;s Work Together
            </div>
            <h2 className="mb-5 font-heading text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold leading-[1.1]">
              Ready to Transform Your {industry.badge.split(" ")[0]} Business?
            </h2>
            <p className="mb-10 text-lg text-white/80">
              Book a consultation. We&apos;ll scope your needs and outline a custom plan in 48 hours.
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
