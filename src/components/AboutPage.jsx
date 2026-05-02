"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/FooterSection";
import { Reveal } from "@/components/ui/Reveal";
import { LogoCloud } from "@/components/logo-cloud";

// Dynamically import ShaderGradientCanvas to avoid SSR issues
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

import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
import { ExpandableCard } from "@/components/ui/expandable-card";

function ValueCard({ title, desc, icon }) {
  return (
    <div className="group flex h-full flex-col items-center rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(79,70,229,0.12)]">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50/80 text-indigo-600 ring-1 ring-inset ring-indigo-100/50 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
        {icon}
      </div>
      <h4 className="mb-3 font-heading text-xl font-bold text-slate-900">{title}</h4>
      <p className="text-[15px] leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="page-root min-h-screen bg-[#f5f7ff]">
      {/* HEADER */}
      <div className="fixed left-0 top-0 z-50 w-full px-4 py-3 md:px-8 md:py-4">
        <Header />
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#f8fafc] flex flex-col items-center justify-start pb-0 pt-28 md:pt-32">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#e0eaff_0%,#f8fafc_65%)]" />
        <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative z-20 w-full max-w-4xl px-6 text-center pb-48 md:pb-55">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-4 py-2 text-xs font-semibold tracking-widest text-indigo-700 uppercase shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Experience Engineering Company
          </div>
          <Reveal>
            <h1 className="mb-4 font-heading text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-slate-900 md:mb-6">
              42works is a global, <br/> 
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI-native & Web3-ready
              </span>
              <br />
              Experience Engineering Company.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-500 md:mb-10 md:text-xl">
              We specialize in AI audits, Web3 protocol reviews, and fastest-in-class MVP development — helping founders and enterprises ship with confidence.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(79,70,229,0.3)] transition hover:brightness-110">
                Start a Project <span>→</span>
              </a>
              <a href="#who-we-are" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600">
                Learn More
              </a>
            </div>
          </Reveal>
        </div>

        {/* Half-visible ShaderGradient arc sitting at bottom of hero */}
        <div className="absolute bottom-0 left-1/2 z-10 w-full -translate-x-1/2 translate-y-[45%] px-4 md:translate-y-[42%]">
          <div className="relative mx-auto h-[250px] w-full max-w-[1100px] overflow-hidden rounded-t-[1000px] border-t-[8px] border-white shadow-[0_-20px_60px_rgba(30,64,175,0.15)] sm:h-[300px] md:h-[520px] md:border-t-[14px] md:shadow-[0_-30px_100px_rgba(30,64,175,0.18)]">
            {/* CSS fallback — always visible instantly */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-blue-400 to-cyan-400" />
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
            <div className="absolute inset-0 rounded-t-[1000px] shadow-[inset_0_15px_50px_rgba(0,0,0,0.12)] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="who-we-are" className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(99,102,241,0.04)_0%,transparent_55%)]" />
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative mx-auto aspect-square w-full max-w-[480px] overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Who We Are"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-md border border-white/20">
                  <div className="text-2xl font-bold text-white">Since 2016</div>
                  <div className="text-sm text-white/80">Redefining digital experiences</div>
                </div>
              </div>
            </Reveal>
            <div className="relative z-10">
              <Reveal delay={0.05}>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-bold tracking-widest text-indigo-600 uppercase">
                  Who We Are
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mb-6 font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-slate-900">
                  We engineer experiences,{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">not just products</span>
                </h2>
              </Reveal>
              <div className="space-y-5">
                {[
                  "AI audits — LLM pipelines, model governance, agentic systems, and compliance.",
                  "Web3 audits — smart contract security, DeFi protocols, VARA/MiCA, KYT/KYC.",
                  "Fastest MVP delivery — from idea to live product in weeks, not months.",
                ].map((text, i) => (
                  <Reveal key={i} delay={0.2 + i * 0.08}>
                    <div className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all hover:border-indigo-100 hover:bg-indigo-50/50">
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[1.05rem] leading-relaxed text-slate-600">{text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRECISION BANNER */}
      <section className="relative overflow-hidden bg-[#020617] py-28 text-white">
        {/* Background ambient light */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
        
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs font-bold tracking-widest text-teal-400 uppercase">
                <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                Our Approach
              </div>
              <h2 className="mb-8 font-heading text-[clamp(2.5rem,5vw,3.8rem)] font-bold leading-[1.1]">
                Engineering Precision<br />
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">AI Depth, Web3 Breadth</span><br />
                Experience Extraordinary
              </h2>
              <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-400">
                We combine technical excellence with human-centric design to deliver intelligent solutions that outperform expectations and redefine industry standards.
              </p>
              <a href="/#contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-indigo-600 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-indigo-500 hover:shadow-[0_0_40px_rgba(79,70,229,0.4)]">
                <span className="relative z-10 flex items-center gap-2">
                  Start your journey
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.2} className="h-full w-full">
              <div className="group relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-indigo-900/50 to-slate-900/50 p-8 shadow-2xl backdrop-blur-sm lg:aspect-auto lg:h-[500px]">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15),transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                 
                 {/* The En -> Ex / AI graphic from the reference */}
                 <div className="relative z-10 flex flex-col gap-4 text-center font-heading text-[3.5rem] font-bold tracking-widest text-white/5 md:gap-6 md:text-[7rem]">
                   <div className="flex items-center justify-center gap-3 md:gap-6">
                      <span className="transition-colors duration-500 group-hover:text-white/20">En</span>
                      <div className="relative flex items-center justify-center">
                        <div className="h-[2px] w-12 bg-indigo-500/50 md:w-32" />
                        <div className="absolute right-0 h-2 w-2 md:h-3 md:w-3 rounded-full bg-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.8)]" />
                      </div>
                      <span className="transition-colors duration-500 group-hover:text-white/20">Ex</span>
                   </div>
                   <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-left text-[3.5rem] text-transparent opacity-90 drop-shadow-2xl md:text-[6rem] leading-none mt-2">
                     AI + Web3
                   </div>
                 </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="bg-[#f8fafc] py-20 border-y border-slate-200/60">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-10 text-center text-[13px] font-bold tracking-[0.2em] text-slate-400 uppercase">
            Trusted by global leaders
          </p>
          <LogoCloud />
        </div>
      </section>

      {/* POWERING GLOBAL GROWTH */}
      <section className="relative overflow-hidden bg-[#020617] py-24 text-white md:py-32">
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f6_0%,#4c1d95_60%,transparent_100%)]" />
          <ShaderGradientCanvas
            importedFiber={{ ...fiber, ...drei, ...reactSpring }}
            style={{ width: "100%", height: "100%", pointerEvents: "none" }}
          >
            <ShaderGradient
              color1="#3b82f6" color2="#8b5cf6" color3="#10b981"
              type="sphere" animate="on"
              uSpeed={0.1} uDensity={1.5} uStrength={3} cDistance={3.5}
            />
          </ShaderGradientCanvas>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_75%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <Reveal>
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-bold tracking-widest text-indigo-400 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Global Impact
              </div>
              <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold">AI Audit. Web3 Audit. Fastest MVP.</h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-400">Two deep specialties. One mission: ship what matters, securely and fast.</p>
            </div>
          </Reveal>
          <div className="grid gap-px rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-3">
            {[
              { label: "AI & Web3 audits", value: "9k+", icon: "🚀" },
              { label: "Global offices", value: "43+", icon: "🌍" },
              { label: "Professionals", value: "62k+", icon: "👥" },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="group flex flex-col items-center px-8 py-12 text-center transition-colors hover:bg-white/5">
                  <div className="mb-4 text-3xl">{stat.icon}</div>
                  <div className="mb-2 font-heading text-[3.5rem] font-bold leading-none tracking-tight text-white">{stat.value}</div>
                  <div className="text-[15px] font-medium text-slate-400">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal>
            <div className="mb-16 text-center">
              <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-slate-900">Meet Our Leadership</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center w-full">
             {[
               { 
                 name: "Harsimran Singh", 
                 role: "Co-Founder", 
                 edu: "IIT Delhi", 
                 image: "/harsimran.jpeg",
                 oneLiner: "AI Product Leader, 1x Exit Founder, and architect of AI-native B2B SaaS platforms.",
                 fullInfo: "With 15 years scaling B2B SaaS, Harsimran co-founded Grownout (acquired by Peoplestrong) and grew its ML platform to 200k users. Holding 2 patents, he recently launched AIOrders, an LLM-native platform built rapidly using AI-assisted tools. He specializes in end-to-end product strategy, transitioning from classical ML to advanced AI agents, and shipping robust solutions in high-stakes environments."
               },
               { 
                 name: "Akshat Agrawal", 
                 role: "Co-Founder", 
                 edu: "IIT Delhi & US MBA", 
                 image: "/akshat.jpg",
                 oneLiner: "Product Strategy leader and Web3/AI infrastructure builder.",
                 fullInfo: "With an early career exit, Akshat led Product Strategy for Softbank-funded Snapdeal and multiple SaaS platforms before moving to Web3. He builds exchanges, vaults, and RWA platforms, ensures VARA/MiCA compliance, and is a major proponent of Coinbase's x402 micropayments for autonomous AI agents."
               },
               { 
                 name: "Team of Developers", 
                 role: "Engineering & Experience", 
                 edu: "Global Talent",
                 oneLiner: "World-class engineers shipping code that matters.",
                 fullInfo: "Our distributed team of senior developers, AI & Web3 specialists, and experience designers bring diverse expertise to every project. We operate with an agile mindset, focusing on speed, quality, and continuous innovation."
               }
             ].map((person, i) => (
               <Reveal key={person.name} delay={i * 0.05} className="flex h-full w-full">
                 <ExpandableCard 
                   title={person.name} 
                   description={person.role} 
                   badge={person.edu}
                   oneLiner={person.oneLiner}
                   src={person.image || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"} 
                 >
                   <p>{person.fullInfo}</p>
                 </ExpandableCard>
               </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#f8fafc] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal>
            <div className="mb-16 text-center md:text-left">
              <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-slate-900">Our Core Values</h2>
              <p className="mt-4 text-lg text-slate-600 md:max-w-2xl">The principles that guide our work, our culture, and our partnerships.</p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard 
               title="Agility" 
               desc="We adapt quickly to changes and move fast to deliver impactful solutions."
               icon={<svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            />
            <ValueCard 
               title="Partnership" 
               desc="We build long-term relationships based on trust and mutual success."
               icon={<svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
            />
            <ValueCard 
               title="Customer Focus" 
               desc="We put our clients' needs at the center of everything we do."
               icon={<svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
            />
            <ValueCard 
               title="Innovation" 
               desc="We constantly explore new technologies and approaches to stay ahead."
               icon={<svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
            />
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-[#020617] py-24 text-center text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal>
            <h2 className="mb-12 font-heading text-[clamp(2rem,4vw,3rem)] font-bold">Our Locations</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { country: "USA", desc: "North America Hub" },
                { country: "Canada", desc: "Innovation Center" },
                { country: "Dubai", desc: "Middle East HQ" },
                { country: "India", desc: "Global Delivery Center" },
              ].map((loc) => (
                <div key={loc.country} className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md transition-transform hover:-translate-y-1 hover:bg-white/10 text-center">
                   <div className="mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                   </div>
                   <div className="mb-2 text-2xl font-bold text-white">{loc.country}</div>
                   <div className="text-[14px] leading-relaxed text-slate-400">{loc.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ESG & COMPLIANCE */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <Reveal>
            <div className="grid overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:grid-cols-2">
               <div className="flex flex-col justify-center p-12 md:p-16">
                 <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-slate-900">Environmental, Social and Governance</h2>
                 <p className="mb-10 text-lg leading-relaxed text-slate-600">We are committed to building a sustainable future through responsible innovation, inclusivity, and ethical practices.</p>
                 <div>
                   <button className="group inline-flex items-center gap-2 rounded-full bg-indigo-50 px-6 py-3 text-[15px] font-semibold text-indigo-600 transition hover:bg-indigo-100">
                     Read More 
                     <span className="transition-transform group-hover:translate-x-1">→</span>
                   </button>
                 </div>
               </div>
               <div className="relative h-72 bg-slate-200 md:h-auto">
                 <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="ESG" className="h-full w-full object-cover" />
               </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="group relative mt-12 flex flex-col items-center justify-center overflow-hidden rounded-[2.5rem] bg-[radial-gradient(ellipse_at_top,#1e1b4b_0%,#020617_100%)] p-16 text-center text-white shadow-2xl transition-transform hover:-translate-y-1">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay" />
               <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
               
               <h2 className="relative z-10 mb-6 font-heading text-4xl font-bold">Internal Compliance</h2>
               <p className="relative z-10 mb-10 max-w-2xl text-lg leading-relaxed text-slate-300">Rigorous standards and protocols ensuring the highest level of security, transparency, and integrity in everything we engineer.</p>
               <a href="/#compliance" className="relative z-10 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500">
                 Learn More <span>→</span>
               </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <FooterSection />
    </div>
  );
}
