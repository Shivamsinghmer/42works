"use client";

import { Reveal } from "@/components/ui/Reveal";

export function FooterSection() {
  const footerLinks = {
    Services: [
      { name: "AI & Web3 Audit", href: "#audit" },
      { name: "MVP Development", href: "#mvp" },
      { name: "Smart Contracts", href: "#blockchain" },
      { name: "AI Agents & LLMs", href: "#ai" },
      { name: "Cloud & DevOps", href: "#cloud" }
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Careers", href: "#careers" },
      { name: "Resources", href: "#resources" }
    ],
    Industries: [
      { name: "Banking & Finance", href: "#finance" },
      { name: "Retail", href: "#retail" },
      { name: "Healthcare", href: "#healthcare" },
      { name: "Hi-Tech", href: "#hitech" },
      { name: "Automotive", href: "#automotive" },
      { name: "Travel", href: "#travel" }
    ],
  };

  return (
    <footer className="bg-[linear-gradient(155deg,#0f172a_0%,#121f45_45%,#0f2848_100%)] px-6 pb-10 pt-20 text-white md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <Reveal className="col-span-2 md:col-span-1">
            <div>
              <span className="bg-gradient-to-r from-indigo-300 to-cyan-200 bg-clip-text text-xl font-bold tracking-wider text-transparent">42works</span>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                AI & Web3 Audit + Fastest MVP Development for ambitious founders and enterprises.
              </p>
            </div>
          </Reveal>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links], index) => (
            <Reveal key={heading} delay={0.08 + index * 0.08}>
              <div>
                <h4 className="mb-4 text-sm font-semibold text-slate-200">{heading}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-sm text-slate-300/80 transition-colors hover:text-white">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 md:flex-row">
            <p className="text-xs text-slate-300/75">© 2026 42works. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/#terms" className="text-xs text-slate-300/75 transition-colors hover:text-white">Terms & Conditions</a>
              <a href="/#privacy" className="text-xs text-slate-300/75 transition-colors hover:text-white">Privacy Notice</a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
