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
        className="border-slate-200 bg-white text-slate-900 hover:bg-slate-50 md:hidden"
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
            <div className="mx-auto grid w-full max-w-md gap-y-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_20px_50px_rgba(2,6,23,0.08)] backdrop-blur-xl">
              <div className="rounded-lg border border-slate-100 bg-white p-2">
                <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Services
                </p>
                {SERVICE_GROUPS.map((group) => (
                  <details key={group.label} className="rounded-md">
                    <summary className="cursor-pointer list-none rounded-md px-2 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">
                      {group.label}
                    </summary>
                    <div className="mt-1 grid gap-y-1 pl-3">
                      {group.services.map((service) => (
                        <a
                          key={service}
                          href="#"
                          onClick={closeMenu}
                          className="rounded-md px-2 py-1.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  </details>
                ))}
              </div>

              <div className="rounded-lg border border-slate-100 bg-white p-2">
                <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Industries
                </p>
                <div className="grid gap-y-1">
                  {INDUSTRIES_LINKS.map((industry) => (
                    <a
                      key={industry}
                      href="#"
                      onClick={closeMenu}
                      className="rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    >
                      {industry}
                    </a>
                  ))}
                </div>
              </div>

              {CENTER_LINKS.map((link) => (
                <Button asChild className="justify-start text-slate-600 hover:bg-slate-50 hover:text-slate-900" key={link.label} variant="ghost">
                  <a href={link.href} onClick={closeMenu}>{link.label}</a>
                </Button>
              ))}

              <div className="mt-2 flex flex-col gap-2">
              <Button asChild className="w-full bg-sky-700 text-white hover:bg-sky-800">
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