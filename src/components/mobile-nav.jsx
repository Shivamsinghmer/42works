import React from "react";
import { X, Menu, ChevronDown, Phone, Layers, Building2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";
import { Portal, PortalBackdrop } from "@/components/ui/portal";
import { Button } from "@/components/ui/button";
import {
  CENTER_LINKS,
  INDUSTRIES_LINKS,
  SERVICE_GROUPS,
} from "@/components/navigation-data";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <div className="md:hidden">
      <Button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Toggle menu"
        className="border-white/70 bg-white/80 text-slate-900 shadow-[0_8px_20px_rgba(79,70,229,0.18)] backdrop-blur-md hover:bg-white md:hidden"
        onClick={() => setOpen(!open)}
        size="icon"
        variant="outline"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="inline-flex"
            >
              <X className="size-5" />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="inline-flex"
            >
              <Menu className="size-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
      {open && (
        <Portal className="top-[3.75rem]" id="mobile-menu">
          <PortalBackdrop />
          <motion.div
            initial={{ opacity: 0, y: -14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className={cn(
              "data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
              "flex-1 min-h-0 w-full overflow-y-auto px-4 pt-2 pb-12"
            )}
            data-slot={open ? "open" : "closed"}
          >
            <div className="mx-auto grid w-full max-w-6xl gap-y-2 rounded-2xl border border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.95),rgba(244,248,255,0.92))] p-3 shadow-[0_26px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl relative">
              <div className="flex items-center justify-between px-2 pb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-800">Menu</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full bg-white/50 text-slate-600 hover:bg-slate-100 hover:text-slate-900" 
                  onClick={closeMenu}
                >
                  <X className="size-4" />
                </Button>
              </div>

              <div className="rounded-lg border border-slate-100 bg-white/90 p-2">
                <p className="flex items-center px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                  <Layers className="mr-1.5 size-3.5" />
                  Services
                </p>
                {SERVICE_GROUPS.map((group) => {
                  const Icon = group.icon;
                  return (
                  <details key={group.label} className="group rounded-md">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-2 py-2 text-sm font-medium text-slate-900 hover:bg-indigo-50/70 [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center">
                        {Icon && <Icon className="mr-2 size-4 text-slate-500" />}
                        {group.label}
                      </span>
                      <ChevronDown className="size-4 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <div className="mt-1 grid gap-y-1 pl-3">
                      {group.services.map((service) => (
                        <a
                          key={service.label}
                          href={service.href || "#"}
                          onClick={closeMenu}
                          className="rounded-md px-2 py-1.5 text-sm text-slate-600 hover:bg-indigo-50/70 hover:text-slate-900"
                        >
                          {service.label}
                        </a>
                      ))}
                    </div>
                  </details>
                  );
                })}
              </div>

              <div className="rounded-lg border border-slate-100 bg-white/90 p-2">
                <p className="flex items-center px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                  <Building2 className="mr-1.5 size-3.5" />
                  Industries
                </p>
                <div className="grid gap-y-1">
                  {INDUSTRIES_LINKS.map((industry) => {
                    const Icon = industry.icon;
                    return (
                    <a
                      key={industry.label}
                      href={industry.href || "#"}
                      onClick={closeMenu}
                      className="flex items-center rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-indigo-50/70 hover:text-slate-900"
                    >
                      {Icon && <Icon className="mr-2 size-4 text-slate-400" />}
                      {industry.label}
                    </a>
                    );
                  })}
                </div>
              </div>

              {CENTER_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                <Button asChild className="justify-start text-slate-700 hover:bg-indigo-50/70 hover:text-slate-900" key={link.label} variant="ghost">
                  <a href={link.href} onClick={closeMenu}>
                    {Icon && <Icon className="mr-1.5 size-4" />}
                    {link.label}
                  </a>
                </Button>
                );
              })}

              <div className="mt-2 flex flex-col gap-2">
              <Button asChild className="w-full bg-gradient-to-r from-indigo-700 via-blue-600 to-teal-500 text-white shadow-[0_12px_30px_rgba(79,70,229,0.35)] transition hover:brightness-110">
                <a href="/#contact" onClick={closeMenu}>
                  <Phone className="mr-1.5 size-4" />
                  Book a Call
                </a>
              </Button>
              </div>
            </div>
          </motion.div>
        </Portal>
      )}
    </div>
  );
}
