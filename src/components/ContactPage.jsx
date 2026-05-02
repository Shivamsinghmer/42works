"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/header";
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

function Field({ label, optional, id, type = "text", placeholder, className = "", textarea = false }) {
  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-[13px] text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 backdrop-blur-sm";
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={id} className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
        {label}
        {optional && <span className="ml-1 normal-case font-normal text-slate-400">(Optional)</span>}
      </label>
      {textarea ? (
        <textarea id={id} rows={3} placeholder={placeholder} className={`${inputClass} resize-none`} />
      ) : (
        <input id={id} type={type} placeholder={placeholder} className={inputClass} />
      )}
    </div>
  );
}

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">

      {/* ── SHADER GRADIENT BACKGROUND ──── */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100" />
      <div className="fixed inset-0">
        <ShaderGradientCanvas
          importedFiber={{ ...fiber, ...drei, ...reactSpring }}
          style={{ width: "100%", height: "100%", pointerEvents: "none" }}
        >
          <ShaderGradient
            color1="#c7d2fe"
            color2="#bae6fd"
            color3="#a7f3d0"
            type="waterPlane"
            animate="on"
            uSpeed={0.18}
            uDensity={1.1}
            uStrength={2.2}
            cDistance={3.0}
          />
        </ShaderGradientCanvas>
      </div>
      {/* Soft white radial to keep center readable */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.5)_0%,transparent_70%)]" />

      {/* ── HEADER ──────────────────────────────────────── */}
      <div className="relative z-50 w-full px-4 py-3 md:px-8 md:py-4">
        <Header />
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-10 md:px-8">
        <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[1fr_480px] lg:items-center">

          {/* LEFT — contact info (full on desktop, compact strip on mobile) */}
          <div>
            {/* Desktop full version */}
            <div className="hidden md:block">
              <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-500">
                Contact
              </span>
              <h1 className="mb-4 font-heading text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-slate-900">
                Let&apos;s start a<br />conversation
              </h1>
              <p className="mb-5 max-w-xs text-[0.95rem] leading-relaxed text-slate-600">
                Connect with our experts to explore how 42Works can seamlessly integrate and elevate your product experience.
              </p>
              <p className="mb-8 text-[13px] text-slate-500">
                Looking for general support?{" "}
                <a href="#" className="font-semibold text-indigo-600 underline underline-offset-2 hover:text-indigo-800">
                  Visit our help center
                </a>
              </p>
              <div className="space-y-5">
                {[
                  { label: "Email", value: "hello@42works.co", href: "mailto:hello@42works.co" },
                  { label: "Phone", value: "+1 (234) 567-890", href: "tel:+12345678901" },
                  { label: "Offices", value: "USA · Canada · Dubai · India", href: null },
                ].map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p>
                    {href ? (
                      <a href={href} className="text-[0.95rem] font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-[0.95rem] font-bold text-slate-800">{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile compact version — shows above the form */}
            <div className="md:hidden mb-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-500">Contact</span>
              <h1 className="mt-1 mb-3 text-[1.8rem] font-bold leading-tight tracking-tight text-slate-900">
                Let&apos;s start a conversation
              </h1>
              <p className="mb-4 text-[0.88rem] leading-relaxed text-slate-600">
                Connect with our experts to explore how 42Works can seamlessly integrate and elevate your product experience.
              </p>
              {/* Info chips */}
              <div className="flex flex-col gap-3">
                {[
                  { label: "Email", value: "hello@42works.co", href: "mailto:hello@42works.co", icon: (
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  )},
                  { label: "Phone", value: "+1 (234) 567-890", href: "tel:+12345678901", icon: (
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  )},
                  { label: "Offices", value: "USA · Canada · Dubai · India", href: null, icon: (
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  )},
                ].map(({ label, value, href, icon }) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-white/80 bg-white/70 px-4 py-3 backdrop-blur-sm shadow-sm">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{label}</p>
                      {href ? (
                        <a href={href} className="text-[0.82rem] font-bold text-indigo-600">{value}</a>
                      ) : (
                        <p className="text-[0.82rem] font-bold text-slate-800">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — form card */}
          <div className="w-full rounded-2xl border border-white/80 bg-white/75 p-5 shadow-[0_20px_60px_rgba(79,70,229,0.12)] backdrop-blur-xl sm:p-7">
            <h2 className="mb-0.5 text-base font-bold text-slate-900">Talk to our team</h2>
            <p className="mb-5 text-[12px] text-slate-500">Fill out the form and we&apos;ll be in touch within 24 hours.</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 ring-2 ring-indigo-100">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-1 text-lg font-bold text-slate-900">Message sent!</h3>
                <p className="text-sm text-slate-500">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Field id="first-name" label="First name" placeholder="John" />
                  <Field id="last-name" label="Last name" placeholder="Doe" />
                </div>
                <Field id="email" label="Work Email" type="email" placeholder="johndoe@example.com" />
                <Field id="phone" label="Phone" type="tel" placeholder="+1 (555) 123-4567" optional />
                <div className="grid grid-cols-2 gap-3">
                  <Field id="company-website" label="Company Website" placeholder="https://example.com" />
                  <div className="flex flex-col gap-1">
                    <label htmlFor="company-size" className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                      Company Size
                    </label>
                    <select
                      id="company-size"
                      className="w-full rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-[13px] text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 backdrop-blur-sm"
                    >
                      <option value="">Select a value</option>
                      {COMPANY_SIZES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <Field id="message" label="How can we help?" placeholder="Your message" textarea />

                <label className="flex cursor-pointer items-start gap-2.5 pt-1 text-[12px] text-slate-600">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-indigo-600 rounded"
                  />
                  <span>
                    I agree to the{" "}
                    <a href="#" className="font-semibold text-indigo-600 hover:underline">Privacy Policy.</a>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!agreed}
                  className="w-full rounded-lg bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500 py-3 text-[14px] font-bold text-white shadow-[0_8px_24px_rgba(79,70,229,0.28)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Submit
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
