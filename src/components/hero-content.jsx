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
    <section className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-4 pb-8 pt-24 md:px-6 md:pb-10 md:pt-20">
      <div
        ref={rootRef}
        className="mx-auto flex w-full max-w-6xl flex-col items-center text-center text-slate-900"
      >
        <motion.div
          data-hero="badge"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-medium shadow-[0_16px_34px_rgba(79,70,229,0.16)] backdrop-blur-md"
        >
          <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-[11px] tracking-[0.12em] text-indigo-700">
            NEW
          </span>
          <span>Introducing 42works</span>
          <span aria-hidden="true">&rarr;</span>
        </motion.div>

        <h1
          data-hero="title"
          className="font-heading max-w-5xl text-balance text-[clamp(2.2rem,8.5vw,5rem)] font-bold leading-[0.98] tracking-tight drop-shadow-[0_8px_28px_rgba(79,70,229,0.18)]"
        >
          <motion.span
            className="block text-slate-900"
            initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          >
            We make
          </motion.span>
          <motion.span
              className="block bg-[linear-gradient(90deg,#4338ca_0%,#0ea5e9_45%,#059669_100%)] bg-clip-text text-transparent drop-shadow-none"
            initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, delay: 0.38, ease: "easeOut" }}
          >
            AI visibility measurable
          </motion.span>
          <motion.span
            className="block text-slate-900"
            initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, delay: 0.56, ease: "easeOut" }}
          >
            for every client
          </motion.span>
        </h1>

        <p
          data-hero="description"
          className="mt-5 max-w-3xl text-pretty text-sm leading-relaxed text-slate-600 md:mt-7 md:text-xl"
        >
          Track how your clients show up across AI platforms, uncover missed
          visibility, and prove impact with data you can actually report.
        </p>

        <div className="pointer-events-auto mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:gap-4">
          <motion.a
            data-hero="cta"
            href="#"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 30 }}
            className="inline-flex items-center gap-2 rounded-xl border border-white/70 bg-white/85 px-5 py-3 text-base font-semibold text-slate-900 shadow-[0_14px_32px_rgba(79,70,229,0.16)] backdrop-blur-sm transition hover:bg-white md:px-6 md:text-lg"
          >
            Book a Call
            <span aria-hidden="true">↗</span>
          </motion.a>
          <motion.a
            data-hero="cta"
            href="#"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 30 }}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-700 via-blue-600 to-teal-500 px-5 py-3 text-base font-semibold text-white shadow-[0_16px_34px_rgba(79,70,229,0.3)] transition hover:brightness-110 md:px-6 md:text-lg"
          >
            Know More
            <span aria-hidden="true">→</span>
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
    </section>
  );
}
