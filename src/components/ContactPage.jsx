"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { Reveal } from "@/components/ui/Reveal";
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

if (typeof window !== "undefined") {
  import("@shadergradient/react");
  import("@react-three/fiber");
  import("@react-three/drei");
  import("@react-spring/three");
}

const COMPANY_SIZES = ["1–10", "11–50", "51–200", "201–500", "500–1000", "1000+"];

function Field({ label, optional, id, type = "text", placeholder, className = "" }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-[12px] font-semibold uppercase tracking-widest text-white/70">
        {label}
        {optional && <span className="ml-1 normal-case font-normal text-white/40">(Optional)</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none backdrop-blur-sm transition focus:border-white/50 focus:bg-white/15 focus:ring-2 focus:ring-white/20"
      />
    </div>
  );
}

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* ── FULL-PAGE SHADER GRADIENT ─────────────────────── */}
      {/* CSS fallback — vivid purple-to-teal */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_30%,#0ea5e9_65%,#14b8a6_100%)]" />

      {/* Shader on top */}
      <div className="absolute inset-0">
        <ShaderGradientCanvas
          importedFiber={{ ...fiber, ...drei, ...reactSpring }}
          style={{ width: "100%", height: "100%", pointerEvents: "none" }}
        >
          <ShaderGradient
            color1="#6d28d9"
            color2="#0ea5e9"
            color3="#10b981"
            type="waterPlane"
            animate="on"
            uSpeed={0.25}
            uDensity={1.4}
            uStrength={3.0}
            cDistance={2.5}
          />
        </ShaderGradientCanvas>
      </div>

      {/* Noise grain overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}
      />

      {/* Dark vignette edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />

      {/* ── HEADER ────────────────────────────────────────── */}
      <div className="absolute left-0 top-0 z-50 w-full px-4 py-3 md:px-8 md:py-4">
        <Header />
      </div>

      {/* ── CONTENT ───────────────────────────────────────── */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-12 pt-28 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_520px] lg:items-center lg:gap-20">

          {/* LEFT ── info */}
          <div className="text-white">
            <Reveal>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Get in touch
              </span>
            </Reveal>

            <Reveal delay={0.07}>
              <h1 className="mb-6 font-heading text-[clamp(2.8rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
                Let's start a<br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-emerald-300 bg-clip-text text-transparent">
                  conversation
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mb-10 max-w-sm text-[1.05rem] leading-relaxed text-white/70">
                Connect with our experts to explore how 42Works can seamlessly integrate and elevate your product experience.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mb-12 text-sm text-white/50">
                Looking for general support?{" "}
                <a href="#" className="font-semibold text-cyan-300 hover:text-white transition-colors">
                  Visit our help center →
                </a>
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-7">
                {[
                  { label: "Email", value: "hello@42works.co", href: "mailto:hello@42works.co" },
                  { label: "Phone", value: "+1 (234) 567-890", href: "tel:+12345678901" },
                  { label: "Offices", value: "USA · Canada · Dubai · India", href: null },
                ].map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">{label}</p>
                    {href ? (
                      <a href={href} className="text-[1rem] font-bold text-cyan-300 hover:text-white transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-[1rem] font-bold text-white">{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT ── form card */}
          <Reveal delay={0.1}>
            <div className="w-full rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_40px_100px_rgba(0,0,0,0.3)] backdrop-blur-2xl md:p-10">
              <h2 className="mb-1 text-xl font-bold text-white">Talk to our team</h2>
              <p className="mb-7 text-[13px] text-white/55">
                Fill out the form and we'll be in touch within 24 hours.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 ring-2 ring-emerald-400/30">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">Message sent!</h3>
                  <p className="text-white/60">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Field id="first-name" label="First name" placeholder="John" />
                    <Field id="last-name" label="Last name" placeholder="Doe" />
                  </div>
                  <Field id="email" label="Work Email" type="email" placeholder="johndoe@example.com" />
                  <Field id="phone" label="Phone" type="tel" placeholder="+1 (555) 123-4567" optional />
                  <div className="grid grid-cols-2 gap-4">
                    <Field id="company-website" label="Company Website" placeholder="https://example.com" />
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company-size" className="text-[12px] font-semibold uppercase tracking-widest text-white/70">
                        Company Size
                      </label>
                      <select
                        id="company-size"
                        className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/80 outline-none backdrop-blur-sm transition focus:border-white/50 focus:ring-2 focus:ring-white/20 appearance-none"
                        style={{ backgroundImage: "none" }}
                      >
                        <option value="" className="bg-slate-800">Select a value</option>
                        {COMPANY_SIZES.map((s) => (
                          <option key={s} className="bg-slate-800">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[12px] font-semibold uppercase tracking-widest text-white/70">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Your message"
                      className="resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none backdrop-blur-sm transition focus:border-white/50 focus:ring-2 focus:ring-white/20"
                    />
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 pt-1 text-[13px] text-white/60">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-cyan-400 rounded"
                    />
                    <span>
                      I agree to the{" "}
                      <a href="#" className="font-semibold text-cyan-300 hover:underline">Privacy Policy.</a>
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={!agreed}
                    className="w-full rounded-xl bg-white py-3.5 text-[15px] font-bold text-slate-900 shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition hover:bg-white/90 hover:shadow-[0_12px_40px_rgba(255,255,255,0.3)] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
}
