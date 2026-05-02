"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "./header";
import { HeroContent } from "./hero-content";
import { GradientBars } from "./ui/GradientBars";
import { FundamentalsSection } from "./sections/FundamentalsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ParallaxGallery } from "./ParallaxGallery";
import { StatsSection } from "./sections/StatsSection";
import { IndustriesSection } from "./sections/IndustriesSection";
import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import { ThoughtLeadershipSection } from "./sections/ThoughtLeadershipSection";
import { FooterSection } from "./sections/FooterSection";
import { Reveal } from "./ui/Reveal";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function CiklumPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".section-heading-line").forEach((line) => {
        gsap.fromTo(
          line,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="page-root overflow-clip">
      {/* ── STICKY HEADER ─────────────────────────────────── */}
      <div className="fixed left-0 top-0 z-50 w-full px-4 py-3 md:px-8 md:py-4">
        <Header />
      </div>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#ecf3ff_0%,#f5f8ff_60%,#f5f7ff_100%)]">
        {/* GradientBars background */}
        <GradientBars
          bars={28}
          colors={["#4f46e5", "#0891b2", "#14b8a6", "transparent"]}
        />

        {/* Soft vignette so content reads clearly */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.08)_0%,rgba(245,248,255,0.36)_56%,rgba(245,248,255,0.68)_100%)]" />

        {/* Top fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-white/35 via-white/5 to-transparent" />
        <div className="pointer-events-none absolute -left-40 top-20 z-10 h-80 w-80 rounded-full bg-indigo-400/24 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 z-10 h-96 w-96 rounded-full bg-cyan-300/24 blur-3xl" />

        <HeroContent />
      </section>

      {/* ── FUNDAMENTALS (Beyond Products + 3 pillars) ────── */}
      <FundamentalsSection />

      {/* ── ENGINEERED FOR EXPERIENCE ─────────────────────── */}
      <ServicesSection />

      {/* ── PARALLAX GALLERY ──────────────────────────────── */}
      <ParallaxGallery />

      {/* ── STATS ─────────────────────────────────────────── */}
      <StatsSection />

      {/* ── INDUSTRIES (dark navy) ────────────────────────── */}
      <IndustriesSection />

      {/* ── SUCCESS STORIES ───────────────────────────────── */}
      <CaseStudiesSection />

      {/* ── THOUGHT LEADERSHIP ────────────────────────────── */}
      <ThoughtLeadershipSection />

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 py-28 md:px-12 md:py-40 lg:px-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08)_0%,transparent_72%)]" />
        <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(240,246,255,0.92))] px-6 py-14 text-center shadow-[0_30px_90px_rgba(79,70,229,0.16)] backdrop-blur-xl md:px-12 md:py-20">
          <Reveal>
            <span className="mb-6 inline-block rounded-full border border-teal-300/70 bg-teal-400/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-[0_8px_20px_rgba(20,184,166,0.3)]">
              Ready to start?
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-6 font-heading text-[clamp(2rem,5vw,4rem)] font-bold leading-tight tracking-tight text-slate-900">
              Whether you&apos;re starting with data modernization
              <br />
              <span className="bg-gradient-to-r from-indigo-700 via-blue-600 to-teal-500 bg-clip-text text-transparent">
                or exploring AI copilots
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mb-12 text-lg text-slate-600 md:text-xl">We&apos;re here to help.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-700 via-blue-600 to-teal-500 px-10 py-4 text-lg font-semibold text-white shadow-[0_16px_50px_rgba(79,70,229,0.35)] transition-all hover:brightness-110"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 26 }}
            >
              Get an AI Audit Today
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">→</span>
            </motion.a>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <FooterSection />
    </div>
  );
}
