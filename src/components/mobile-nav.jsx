import React from "react";
import { XIcon, MenuIcon } from "lucide-react";
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
              <XIcon className="size-4.5" />
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
              <MenuIcon className="size-4.5" />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
      {open && (
        <Portal className="top-16" id="mobile-menu">
          <PortalBackdrop />
          <motion.div
            initial={{ opacity: 0, y: -14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className={cn(
              "data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
              "size-full overflow-y-auto p-4"
            )}
            data-slot={open ? "open" : "closed"}
          >
            <div className="mx-auto grid w-full max-w-md gap-y-2 rounded-2xl border border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.95),rgba(244,248,255,0.92))] p-3 shadow-[0_26px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl">
              <div className="rounded-lg border border-slate-100 bg-white/90 p-2">
                <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Services
                </p>
                {SERVICE_GROUPS.map((group) => (
                  <details key={group.label} className="rounded-md">
                    <summary className="cursor-pointer list-none rounded-md px-2 py-2 text-sm font-medium text-slate-900 hover:bg-indigo-50/70">
                      {group.label}
                    </summary>
                    <div className="mt-1 grid gap-y-1 pl-3">
                      {group.services.map((service) => (
                        <a
                          key={service}
                          href="#"
                          onClick={closeMenu}
                          className="rounded-md px-2 py-1.5 text-sm text-slate-600 hover:bg-indigo-50/70 hover:text-slate-900"
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  </details>
                ))}
              </div>

              <div className="rounded-lg border border-slate-100 bg-white/90 p-2">
                <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Industries
                </p>
                <div className="grid gap-y-1">
                  {INDUSTRIES_LINKS.map((industry) => (
                    <a
                      key={industry}
                      href="#"
                      onClick={closeMenu}
                      className="rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-indigo-50/70 hover:text-slate-900"
                    >
                      {industry}
                    </a>
                  ))}
                </div>
              </div>

              {CENTER_LINKS.map((link) => (
                <Button asChild className="justify-start text-slate-700 hover:bg-indigo-50/70 hover:text-slate-900" key={link.label} variant="ghost">
                  <a href={link.href} onClick={closeMenu}>{link.label}</a>
                </Button>
              ))}

              <div className="mt-2 flex flex-col gap-2">
              <Button asChild className="w-full bg-gradient-to-r from-indigo-700 via-blue-600 to-teal-500 text-white shadow-[0_12px_30px_rgba(79,70,229,0.35)] transition hover:brightness-110">
                <a href="#book-a-call" onClick={closeMenu}>Book a Call</a>
              </Button>
              </div>
            </div>
          </motion.div>
        </Portal>
      )}
    </div>
  );
}
