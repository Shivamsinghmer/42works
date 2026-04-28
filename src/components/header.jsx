"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
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
  const [activeServiceLabel, setActiveServiceLabel] = useState(
    SERVICE_GROUPS[0].label
  );

  const activeServiceGroup = useMemo(
    () =>
      SERVICE_GROUPS.find((group) => group.label === activeServiceLabel) ??
      SERVICE_GROUPS[0],
    [activeServiceLabel]
  );

  const handleServicesEnter = () => {
    setMenuOpen(true);
    setActiveServiceLabel(SERVICE_GROUPS[0].label);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-6xl rounded-2xl border border-slate-200 bg-[rgba(255,255,255,0.6)] backdrop-blur-md transition-all duration-300 ease-out",
        {
          "border-slate-300 bg-white shadow-[0_8px_24px_rgba(2,6,23,0.06)]": scrolled,
        }
      )}
    >
      <nav
        className="flex h-14 w-full items-center justify-between px-4"
      >
        <motion.a
          className="inline-flex items-center gap-2 rounded-md p-2 hover:bg-slate-50"
          href="#"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
        >
          <span className="text-sm font-bold tracking-[0.14em] text-slate-900">
            42works
          </span>
        </motion.a>
        <div className="hidden items-center gap-1 md:flex">
          <div className="relative" onMouseEnter={handleServicesEnter} onMouseLeave={() => setMenuOpen(false)}>
            <Button size="sm" variant="ghost" className="text-xs text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900">
              Services
            </Button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-1/2 top-full z-[60] w-[720px] -translate-x-1/2 pt-3"
                >
                  <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl backdrop-blur-xl">
                    <div className="grid grid-cols-[290px_1fr] gap-2">
                  <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-2">
                    {SERVICE_GROUPS.map((group) => (
                      <motion.button
                        key={group.label}
                        type="button"
                        onMouseEnter={() => setActiveServiceLabel(group.label)}
                        whileHover={{ x: 3 }}
                        className={cn(
                          "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition",
                          activeServiceLabel === group.label
                            ? "bg-white text-slate-900 shadow-sm"
                            : "text-slate-600 hover:bg-white"
                        )}
                      >
                        <span>{group.label}</span>
                        <span aria-hidden="true">&rsaquo;</span>
                      </motion.button>
                    ))}
                  </div>

                  <div className="rounded-lg border border-slate-100 bg-white p-3">
                    <p className="mb-3 text-sm font-semibold text-slate-900">
                      {activeServiceGroup.label}
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {activeServiceGroup.services.map((service) => (
                        <motion.a
                          key={service}
                          href="#"
                          whileHover={{ x: 4 }}
                          className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                        >
                          {service}
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
            <Button size="sm" variant="ghost" className="text-xs text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900">
              Industries
            </Button>

            <AnimatePresence>
              {industriesMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-1/2 top-full z-[60] w-[320px] -translate-x-1/2 pt-3"
                >
                  <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl backdrop-blur-xl">
                    <div className="rounded-lg border border-slate-100 bg-white p-2">
                    {INDUSTRIES_LINKS.map((industry) => (
                      <motion.button
                        key={industry}
                        type="button"
                        whileHover={{ x: 3 }}
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      >
                        {industry}
                      </motion.button>
                    ))}
                  </div>
                </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {CENTER_LINKS.map((link) => (
            <Button
              asChild
              key={link.label}
              size="sm"
              variant="ghost"
              className="text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            >
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </div>

        <div className="hidden items-center md:flex">
          <Button
            size="sm"
              asChild
              className="bg-sky-700 text-white hover:bg-sky-800"
          >
            <a href="#book-a-call">Book a Call</a>
          </Button>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
