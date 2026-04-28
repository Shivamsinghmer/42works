"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { Header } from "./header";
import HeroUnicorn from "./HeroUnicorn";
import { HeroContent } from "./hero-content";
import { ParallaxGallery } from "./ParallaxGallery";
import { ServicesSection } from "./sections/ServicesSection";
import { IndustriesSection } from "./sections/IndustriesSection";
import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import { StatsSection } from "./sections/StatsSection";
import { FooterSection } from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger);

export default function CiklumPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text line-by-line reveal
      gsap.utils.toArray(".hero-line").forEach((line, i) => {
        gsap.fromTo(
          line,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.15 * i,
          }
        );
      });

      // Subtitle fade in
      gsap.fromTo(
        ".hero-subtitle",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.8 }
      );

      // Scroll-triggered text reveals — trigger early
      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 97%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Section headings with split-line reveal
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
              start: "top 97%",
              end: "bottom 70%",
              scrub: 1,
            },
          }
        );
      });

      // Feature cards — appear quickly
      gsap.utils.toArray(".feature-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 97%",
              toggleActions: "play none none none",
            },
            delay: i * 0.05,
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="ciklum-page">
      {/* STICKY HEADER */}
      <div className="fixed left-0 top-0 z-50 w-full p-3 md:p-4">
        <Header />
      </div>

      {/* HERO SECTION — Original */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[var(--background)]">
        {/* Instant fallback gradient while Unicorn loads */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-sky-50 via-white to-emerald-50" />
        <HeroUnicorn />

        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(241,251,255,0.4),transparent_60%),linear-gradient(to_bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.95))]" />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-36 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0))]" />

        <HeroContent />
      </section>

      {/* THREE FEATURE CARDS */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-card group rounded-2xl border border-slate-200 bg-slate-50/50 p-8 transition-all hover:shadow-xl hover:border-slate-300 hover:-translate-y-1">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">42works AI Platform</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Built on pre-configured, secure, scalable AI agents designed to transform complex business challenges into production-ready solutions.
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 group-hover:gap-2 transition-all">
              Learn More <span>→</span>
            </span>
          </div>

          <div className="feature-card group rounded-2xl border border-slate-200 bg-slate-50/50 p-8 transition-all hover:shadow-xl hover:border-slate-300 hover:-translate-y-1">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Engineered for Experience</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              We put experience at the heart of everything we build, with engineering as our core strength and AI as an accelerant.
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 group-hover:gap-2 transition-all">
              Learn More <span>→</span>
            </span>
          </div>

          <div className="feature-card group rounded-2xl border border-slate-200 bg-slate-50/50 p-8 transition-all hover:shadow-xl hover:border-slate-300 hover:-translate-y-1">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Industry-led Solutions</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Deep domain expertise and teams that understand your industry, building future-ready solutions that matter to your business.
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-violet-700 group-hover:gap-2 transition-all">
              Learn More <span>→</span>
            </span>
          </div>
        </div>
      </section>

      {/* BIG TEXT REVEAL SECTION */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden pb-3">
            <div className="section-heading-line font-heading text-[clamp(2rem,5.5vw,4.2rem)] font-medium leading-[1.12] tracking-tight text-slate-900">
              Built with Engineering Depth
            </div>
          </div>
          <div className="overflow-hidden pb-3">
            <div className="section-heading-line font-heading text-[clamp(2rem,5.5vw,4.2rem)] font-medium leading-[1.12] tracking-tight text-slate-400">
              and Experience Foresight.
            </div>
          </div>
          <div className="overflow-hidden pb-3">
            <div className="section-heading-line font-heading text-[clamp(2rem,5.5vw,4.2rem)] font-medium leading-[1.12] tracking-tight text-slate-900">
              Your AI journey isn&apos;t
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="section-heading-line font-heading text-[clamp(2rem,5.5vw,4.2rem)] font-medium leading-[1.12] tracking-tight bg-gradient-to-r from-sky-600 to-emerald-500 bg-clip-text text-transparent">
              one-size-fits-all.
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServicesSection />

      {/* PARALLAX GALLERY */}
      <ParallaxGallery />

      {/* STATS */}
      <StatsSection />

      {/* INDUSTRIES */}
      <IndustriesSection />

      {/* CASE STUDIES */}
      <CaseStudiesSection />

      {/* CTA */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal-up font-heading text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Whether you&apos;re starting with data modernization or exploring AI copilots
          </h2>
          <p className="reveal-up text-xl text-slate-500 mb-10">We&apos;re here to help.</p>
          <motion.a
            href="#contact"
            className="reveal-up inline-flex items-center gap-2 rounded-xl bg-sky-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-sky-800"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Let&apos;s Begin Together <span>→</span>
          </motion.a>
        </div>
      </section>

      {/* FOOTER */}
      <FooterSection />
    </div>
  );
}
