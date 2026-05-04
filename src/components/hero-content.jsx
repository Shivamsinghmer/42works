"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "motion/react";
import { LogoCloud } from "@/components/logo-cloud";

export function HeroContent() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        "[data-hero='badge']",
        { y: 24, autoAlpha: 0, scale: 0.94 },
        { y: 0, autoAlpha: 1, scale: 1, duration: 0.65 }
      )
        .fromTo(
          "[data-hero='description']",
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.65 },
          "-=0.15"
        )
        .fromTo(
          "[data-hero='cta']",
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1 },
          "-=0.35"
        )
        .fromTo(
          "[data-hero='logos']",
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6 },
          "-=0.2"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pointer-events-none relative z-20 flex min-h-[100svh] w-full flex-col items-center justify-center px-4 pb-[30vh] pt-28 md:px-6 md:pb-[35vh] md:pt-32">
      <div
        ref={rootRef}
        className="mx-auto flex w-full max-w-5xl flex-col items-center text-center text-slate-900"
      >
        <h1
          data-hero="title"
          className="font-heading max-w-5xl text-balance text-[clamp(2.4rem,8vw,5rem)] font-bold leading-[1.05] tracking-tight drop-shadow-[0_8px_28px_rgba(79,70,229,0.18)]"
        >
          <motion.span
            className="block text-slate-900"
            initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          >
            Find the AI Opportunity.
          </motion.span>
          <motion.span
            className="block bg-[linear-gradient(90deg,#4338ca_0%,#0ea5e9_45%,#059669_100%)] bg-clip-text text-transparent drop-shadow-none"
            initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, delay: 0.38, ease: "easeOut" }}
          >
            Build It. Ship It. Live in 45 Days.
          </motion.span>
        </h1>

        <p
          data-hero="description"
          className="mt-5 max-w-xl text-pretty text-[0.9rem] leading-relaxed text-slate-500 md:mt-7 md:max-w-2xl md:text-lg"
        >
          We audit your business to surface high-value AI opportunities, then build and launch the right AI&nbsp;&&nbsp;Web3 solution — as a PoC, MVP, or production feature.
        </p>



        <div className="pointer-events-auto mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:gap-4">
          {/* Primary CTA */}
          <motion.a
            data-hero="cta"
            href="/contact"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 30 }}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-700 via-blue-600 to-teal-500 px-6 py-3.5 text-base font-bold text-white shadow-[0_16px_34px_rgba(79,70,229,0.35)] transition hover:brightness-110 md:px-8 md:text-lg"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            Get an AI Audit
          </motion.a>
          {/* Secondary CTA */}
          <motion.a
            data-hero="cta"
            href="/contact"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 30 }}
            className="inline-flex items-center gap-2 rounded-xl border border-white/70 bg-white/85 px-6 py-3.5 text-base font-semibold text-slate-900 shadow-[0_14px_32px_rgba(79,70,229,0.14)] backdrop-blur-sm transition hover:bg-white md:px-8 md:text-lg"
          >
            <svg className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            Build My Solution
          </motion.a>
        </div>

        <motion.div
          data-hero="logos"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-5 w-full max-w-5xl rounded-2xl border border-white/75 bg-[rgba(255,255,255,0.86)] px-3 py-2 shadow-[0_12px_30px_rgba(79,70,229,0.14)] backdrop-blur-md md:mt-7 md:px-6"
        >
          <LogoCloud />
        </motion.div>
      </div>
    </div>
  );
}
