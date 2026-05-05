"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import dynamic from "next/dynamic";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

const ShaderGradientCanvas = dynamic(
  () => import("@shadergradient/react").then((mod) => mod.ShaderGradientCanvas),
  { ssr: false }
);
const ShaderGradient = dynamic(
  () => import("@shadergradient/react").then((mod) => mod.ShaderGradient),
  { ssr: false }
);

// Eagerly preload the heavy shader bundle on page load (client only)
if (typeof window !== "undefined") {
  import("@shadergradient/react");
  import("@react-three/fiber");
  import("@react-three/drei");
  import("@react-spring/three");
}

function FloatingIcon({ children, className = "", label }) {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-white/90 shadow-[0_14px_35px_rgba(59,130,246,0.25)] backdrop-blur-sm md:h-16 md:w-16">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 md:h-11 md:w-11">
          {children}
        </div>
      </div>
      {label && (
        <span className="rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[11px] font-bold tracking-wide text-indigo-700 shadow-sm backdrop-blur-sm whitespace-nowrap">
          {label}
        </span>
      )}
    </div>
  );
}

function CardIcon({ children }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50/80 text-indigo-600 ring-1 ring-inset ring-indigo-100/50 transition-colors group-hover:bg-indigo-100/80">
      {children}
    </div>
  );
}

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "AI Opportunity Discovery",
    description:
      "We audit your existing digital and software stack — not your AI — to uncover where AI can create the most value. From workflow automation to intelligent products, we map every opportunity before a line of code is written.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
      </svg>
    ),
    title: "Engineered for Experience Built for Impact",
    description:
      "We put experience at the heart of everything we build, with engineering as our core strength and AI & Web3 as accelerants. Every solution is designed to be scalable and resilient.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    title: "Where Industry Leads, Technology Enables",
    description:
      "That's our approach to building future-ready solutions that matter to your business, powered by deep domain expertise and teams that understand your industry.",
  },
];

const highlights = ["AI Audit", "Web3 & Smart Contracts", "Live in 45 days"];
const topBars = [
  "bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500",
  "bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500",
  "bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500",
];

export function FundamentalsSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f4f8ff_0%,#edf4ff_50%,#f7faff_100%)] px-6 md:px-12 lg:px-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(99,102,241,0.16),transparent_34%),radial-gradient(circle_at_88%_8%,rgba(6,182,212,0.15),transparent_36%)]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl py-24 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/80 bg-white/86 px-6 py-10 text-center shadow-[0_30px_90px_rgba(30,64,175,0.18)] backdrop-blur-md md:px-12 md:py-14">
            <span className="mb-6 inline-block rounded-full border border-teal-300/70 bg-teal-400/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-[0_8px_20px_rgba(20,184,166,0.25)]">
              Our Fundamentals
            </span>
            <h2 className="mb-5 font-heading text-[clamp(2rem,5vw,3.8rem)] font-bold leading-[1.06] tracking-tight text-slate-900">
              <span className="bg-gradient-to-r from-indigo-700 via-blue-600 to-teal-500 bg-clip-text text-transparent">
                Beyond Products,
              </span>
              <br />
              Toward Possibilities
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
              We audit your current digital operations to discover where AI can drive real impact —
              then we build it. From workflow automation to intelligent products,
              this isn&apos;t about patching inefficiencies. This is about competitive advantage.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-indigo-100 bg-indigo-50/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-indigo-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-14 h-[18rem] w-full max-w-4xl overflow-hidden rounded-t-[1000px] shadow-[0_35px_90px_rgba(30,64,175,0.35)] md:h-[20rem]">
          {/* CSS fallback — always visible instantly */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600" />
          <div className="absolute inset-0">
            <ShaderGradientCanvas
              importedFiber={{ ...fiber, ...drei, ...reactSpring }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <ShaderGradient
                color1="#3b82f6"
                color2="#06b6d4"
                color3="#4f46e5"
                type="waterPlane"
                animate="on"
                uSpeed={0.2}
                uDensity={1.2}
                uStrength={2.5}
                cDistance={2.8}
              />
            </ShaderGradientCanvas>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1)_0%,transparent_58%)]" />

          <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2 md:top-8">
            <FloatingIcon label="AI & Web3 Powered">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
              </svg>
            </FloatingIcon>
          </div>

          <div className="absolute left-[5%] top-[48%] z-10 md:left-[17%] md:top-[32%]">
            <FloatingIcon label="Experience">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </FloatingIcon>
          </div>

          <div className="absolute right-[5%] top-[48%] z-10 md:right-[17%] md:top-[32%]">
            <FloatingIcon label="Engineering">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
              </svg>
            </FloatingIcon>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-[56%] h-44 w-[72%] -translate-x-1/2 rounded-full bg-cyan-300/22 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-[56%] h-44 w-[72%] -translate-x-1/2 rounded-full border border-white/20" />
        </div>

        <div className="mt-12 grid gap-8 md:mt-14 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white px-6 py-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-200/80 hover:shadow-[0_20px_40px_-12px_rgba(79,70,229,0.15)] md:px-8 md:py-9">
                <div className={`absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${topBars[i]}`} />
                <div className="mb-8 flex items-start justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20">
                    {i + 1}
                  </span>
                  <CardIcon>{pillar.icon}</CardIcon>
                </div>
                <h3 className="mb-4 font-heading text-xl font-bold leading-tight text-slate-900 md:text-[1.35rem]">
                  {pillar.title}
                </h3>
                <p className="mb-8 flex-1 text-[15px] leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
                <div className="mt-auto pt-2">
                  <a
                    href="#"
                    className="nav-link-underline inline-flex items-center gap-1.5 text-[13px] font-bold tracking-wider uppercase text-indigo-600 transition-colors hover:text-indigo-800"
                  >
                    Learn More <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
