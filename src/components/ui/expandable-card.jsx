"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ExpandableCard({
  title,
  src,
  description,
  badge,
  oneLiner,
  children,
  className,
  classNameExpanded,
  ...props
}) {
  const [active, setActive] = React.useState(false);
  const id = React.useId();

  return (
    <div 
      className="relative flex w-full max-w-[400px] flex-col items-center"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[100] grid place-items-center pointer-events-none sm:mt-8 px-4">
            <motion.div
              layoutId={`card-${title}-${id}`}
              data-lenis-prevent="true"
              className={cn(
                "w-full max-w-[550px] max-h-[85vh] flex flex-col overflow-y-auto overflow-x-hidden sm:rounded-[2rem] bg-white shadow-2xl relative pointer-events-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
                classNameExpanded,
              )}
              {...props}
            >
              <motion.div layoutId={`image-${title}-${id}`}>
                <div className="relative h-[250px] sm:h-[320px] w-full overflow-hidden shrink-0 bg-slate-100">
                  <img
                    src={src}
                    alt={title}
                    className="h-full w-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-90" />
                  {badge && (
                    <motion.div layoutId={`badge-${title}-${id}`} className="absolute bottom-5 left-6 rounded-full bg-slate-900/60 px-3 py-1 text-[11px] font-bold tracking-widest text-white backdrop-blur-md uppercase shadow-sm">
                      {badge}
                    </motion.div>
                  )}
                </div>
              </motion.div>
              <div className="relative p-6 flex flex-col gap-2">
                <div>
                  <motion.p
                    layoutId={`description-${description}-${id}`}
                    className="mb-1 text-[12px] font-bold tracking-widest text-indigo-600 uppercase"
                  >
                    {description}
                  </motion.p>
                  <motion.h3
                    layoutId={`title-${title}-${id}`}
                    className="text-[1.5rem] font-bold text-slate-900 leading-tight"
                  >
                    {title}
                  </motion.h3>
                  {oneLiner && (
                    <motion.div
                      layoutId={`oneLiner-${title}-${id}`}
                      className="mt-2 text-[15px] font-semibold leading-relaxed text-slate-800"
                    >
                      {oneLiner}
                    </motion.div>
                  )}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.1 }}
                  className="mt-2 flex flex-col gap-3 pb-2 text-[14px] leading-relaxed text-slate-600"
                >
                  {children}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        layoutId={`card-${title}-${id}`}
        className={cn(
          "group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(79,70,229,0.12)]",
          className,
        )}
      >
        <motion.div layoutId={`image-${title}-${id}`} className="relative h-[240px] w-full overflow-hidden shrink-0 bg-slate-100">
          <img
            src={src}
            alt={title}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 opacity-80" />
          {badge && (
            <motion.div layoutId={`badge-${title}-${id}`} className="absolute bottom-4 left-4 rounded-full bg-slate-900/60 px-3 py-1 text-[10px] font-bold tracking-widest text-white backdrop-blur-md uppercase shadow-sm">
              {badge}
            </motion.div>
          )}
        </motion.div>
        
        <div className="flex flex-col p-6 text-left flex-1">
          <motion.p
            layoutId={`description-${description}-${id}`}
            className="mb-1 text-[11px] font-bold tracking-widest text-indigo-500 uppercase"
          >
            {description}
          </motion.p>
          <motion.h3
            layoutId={`title-${title}-${id}`}
            className="font-heading text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600 leading-tight"
          >
            {title}
          </motion.h3>
          {oneLiner && (
            <motion.div
               layoutId={`oneLiner-${title}-${id}`}
               className="mt-3 text-[14px] font-medium leading-relaxed text-slate-600"
            >
              {oneLiner}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
