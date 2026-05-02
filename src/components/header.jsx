"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, MessageCircle, Layers, Building2, ArrowRight, ChevronRight } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { CENTER_LINKS, SERVICE_GROUPS, INDUSTRIES_LINKS } from "@/components/navigation-data";

export const navLinks = CENTER_LINKS;

export function Header() {
  const scrolled = useScroll(10);
  const [menuOpen, setMenuOpen] = useState(false);
  const [industriesMenuOpen, setIndustriesMenuOpen] = useState(false);
  const [activeServiceLabel, setActiveServiceLabel] = useState(SERVICE_GROUPS[0].label);
  const [activeIndustryLabel, setActiveIndustryLabel] = useState(INDUSTRIES_LINKS[0].label);

  const activeServiceGroup = useMemo(
    () => SERVICE_GROUPS.find((g) => g.label === activeServiceLabel) ?? SERVICE_GROUPS[0],
    [activeServiceLabel]
  );

  const activeIndustry = useMemo(
    () => INDUSTRIES_LINKS.find((i) => i.label === activeIndustryLabel) ?? INDUSTRIES_LINKS[0],
    [activeIndustryLabel]
  );

  const handleServicesEnter = () => {
    setMenuOpen(true);
    setActiveServiceLabel(SERVICE_GROUPS[0].label);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-6xl rounded-2xl border border-white/60 bg-[linear-gradient(130deg,rgba(255,255,255,0.88),rgba(242,247,255,0.78))] shadow-[0_14px_44px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 ease-out",
        {
          "border-indigo-100/80 bg-[linear-gradient(130deg,rgba(255,255,255,0.95),rgba(241,246,255,0.9))] shadow-[0_18px_50px_rgba(79,70,229,0.16)]": scrolled,
        }
      )}
    >
      <nav className="flex h-[3.75rem] w-full items-center justify-between px-4 md:px-5">
        <motion.a
          className="inline-flex items-center gap-2 rounded-lg p-2 hover:bg-white/70"
          href="/"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
        >
          <span className="bg-gradient-to-r from-indigo-700 to-teal-600 bg-clip-text text-[16px] font-extrabold tracking-tighter text-transparent">
            42Works
          </span>
        </motion.a>
        <div className="hidden items-center gap-1 md:flex">
          <div className="relative" onMouseEnter={handleServicesEnter} onMouseLeave={() => setMenuOpen(false)}>
            <Button size="sm" variant="ghost" className="group text-[14px] font-semibold text-slate-700 transition-colors hover:bg-white hover:text-slate-900">
              <Layers className="mr-1.5 size-3.5" />
              Services
              <ChevronDown className="ml-1 size-3.5 opacity-50 transition-transform duration-200 group-hover:rotate-180" />
            </Button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-0 top-full z-[60] w-[720px] pt-3"
                >
                  <div className="rounded-2xl border border-white/70 bg-[linear-gradient(150deg,rgba(255,255,255,0.95),rgba(243,248,255,0.94))] p-2 shadow-[0_24px_60px_rgba(15,23,42,0.15)] backdrop-blur-xl">
                    <div className="grid grid-cols-[290px_1fr] gap-2">
                      <div className="rounded-lg border border-slate-100 bg-white/75 p-2">
                        {SERVICE_GROUPS.map((group) => {
                          const Icon = group.icon;
                          return (
                          <motion.button
                            key={group.label}
                            type="button"
                            onMouseEnter={() => setActiveServiceLabel(group.label)}
                            whileHover={{ x: 3 }}
                            className={cn(
                              "group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-all",
                              activeServiceLabel === group.label
                                ? "bg-indigo-50/60 text-slate-900 font-medium"
                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                            )}
                          >
                            <span className="flex items-center">
                              {Icon && (
                                <Icon className={cn("mr-3 size-5 transition-colors", activeServiceLabel === group.label ? "text-indigo-600" : "text-slate-400")} />
                              )}
                              <span>{group.label}</span>
                            </span>
                            <ChevronRight className={cn("size-4 transition-all", activeServiceLabel === group.label ? "text-indigo-400 opacity-100" : "text-slate-300 opacity-0 group-hover:opacity-100")} />
                          </motion.button>
                          );
                        })}
                      </div>

                      <div className="rounded-lg border border-slate-100 bg-white/90 p-3">
                        <div className="grid grid-cols-1 gap-1.5">
                          {activeServiceGroup.services.map((service) => (
                            <motion.a
                              key={service.label}
                              href={service.href || "#"}
                              whileHover={{ x: 4 }}
                              className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-indigo-50/70 hover:text-slate-900"
                            >
                              {service.label}
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative" onMouseEnter={() => setIndustriesMenuOpen(true)} onMouseLeave={() => setIndustriesMenuOpen(false)}>
            <Button size="sm" variant="ghost" className="group text-[14px] font-semibold text-slate-700 transition-colors hover:bg-white hover:text-slate-900">
              <Building2 className="mr-1.5 size-3.5" />
              Industries
              <ChevronDown className="ml-1 size-3.5 opacity-50 transition-transform duration-200 group-hover:rotate-180" />
            </Button>

            <AnimatePresence>
              {industriesMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-0 top-full z-[60] w-[680px] pt-3"
                >
                  <div className="rounded-2xl border border-white/70 bg-[linear-gradient(150deg,rgba(255,255,255,0.95),rgba(243,248,255,0.94))] p-2 shadow-[0_24px_60px_rgba(15,23,42,0.15)] backdrop-blur-xl">
                    <div className="grid grid-cols-[280px_1fr] gap-2">
                      {/* Left: list */}
                      <div className="rounded-lg border border-slate-100 bg-white/75 p-2">
                        {INDUSTRIES_LINKS.map((industry) => {
                          const Icon = industry.icon;
                          const isActive = activeIndustryLabel === industry.label;
                          return (
                          <motion.a
                            key={industry.label}
                            href={industry.href || "#"}
                            onMouseEnter={() => setActiveIndustryLabel(industry.label)}
                            whileHover={{ x: 3 }}
                            className={cn(
                              "group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-all",
                              isActive
                                ? "bg-indigo-50/60 text-slate-900 font-medium"
                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                            )}
                          >
                            <span className="flex items-center">
                              {Icon && (
                                <Icon className={cn("mr-3 size-5 transition-colors", isActive ? "text-indigo-600" : "text-slate-400")} />
                              )}
                              <span>{industry.label}</span>
                            </span>
                            <ChevronRight className={cn("size-4 transition-all", isActive ? "text-indigo-400 opacity-100" : "text-slate-300 opacity-0 group-hover:opacity-100")} />
                          </motion.a>
                          );
                        })}
                      </div>
                      {/* Right: preview */}
                      <div className="overflow-hidden rounded-lg border border-slate-100 bg-white/90">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeIndustry.label}
                            initial={{ opacity: 0, x: 8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -8 }}
                            transition={{ duration: 0.18 }}
                            className="flex h-full flex-col"
                          >
                            <div className="h-44 w-full overflow-hidden">
                              <img
                                src={activeIndustry.image}
                                alt={activeIndustry.label}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                              />
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-4">
                              <div>
                                <p className="mb-1.5 text-sm font-bold text-slate-900">{activeIndustry.label}</p>
                                <p className="text-[13px] leading-relaxed text-slate-500">{activeIndustry.desc}</p>
                              </div>
                              <a
                                href={activeIndustry.href || "#"}
                                className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-widest text-indigo-600 hover:text-indigo-800"
                              >
                                Learn More <ArrowRight className="size-3" />
                              </a>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {CENTER_LINKS.map((link) => {
            const Icon = link.icon;
            return (
            <Button
              asChild
              key={link.label}
              size="sm"
              variant="ghost"
            className="text-[14px] font-semibold text-slate-700 hover:bg-white hover:text-slate-900"
            >
              <a href={link.href}>
                {Icon && <Icon className="mr-1.5 size-3.5" />}
                {link.label}
              </a>
            </Button>
            );
          })}
        </div>

        <div className="hidden items-center md:flex">
          <Button
            size="sm"
            asChild
            className="bg-gradient-to-r text-[14px] font-medium from-indigo-700 via-blue-600 to-teal-500 text-white shadow-[0_10px_24px_rgba(79,70,229,0.35)] transition hover:brightness-110 px-3 py-4"
          >
            <a href="/contact">
              <MessageCircle className="mr-1.5 size-3.5" />
              Get in touch
            </a>
          </Button>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
