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
        className="border-white/20 bg-black/45 text-white hover:bg-white/10 md:hidden"
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
            <div className="mx-auto grid w-full max-w-md gap-y-2 rounded-2xl border border-white/15 bg-black/60 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white/70">
                  Services
                </p>
                {SERVICE_GROUPS.map((group) => (
                  <details key={group.label} className="rounded-md">
                    <summary className="cursor-pointer list-none rounded-md px-2 py-2 text-sm font-medium text-white/90 hover:bg-white/10">
                      {group.label}
                    </summary>
                    <div className="mt-1 grid gap-y-1 pl-3">
                      {group.services.map((service) => (
                        <a
                          key={service}
                          href="#"
                          onClick={closeMenu}
                          className="rounded-md px-2 py-1.5 text-sm text-white/75 hover:bg-white/10 hover:text-white"
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  </details>
                ))}
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white/70">
                  Industries
                </p>
                <div className="grid gap-y-1">
                  {INDUSTRIES_LINKS.map((industry) => (
                    <a
                      key={industry}
                      href="#"
                      onClick={closeMenu}
                      className="rounded-md px-2 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white"
                    >
                      {industry}
                    </a>
                  ))}
                </div>
              </div>

              {CENTER_LINKS.map((link) => (
                <Button asChild className="justify-start text-white/90 hover:bg-white/10 hover:text-white" key={link.label} variant="ghost">
                  <a href={link.href} onClick={closeMenu}>{link.label}</a>
                </Button>
              ))}

              <div className="mt-2 flex flex-col gap-2">
              <Button asChild className="w-full bg-white text-black hover:bg-white/90">
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
