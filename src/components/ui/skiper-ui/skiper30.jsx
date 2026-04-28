"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";

const images = [
  "https://i.pinimg.com/webp80/1200x/04/85/7f/04857f68bbd2fd4a2e6cf992ed05b9fb.webp",
  "https://i.pinimg.com/1200x/df/03/93/df0393965c6fdce90e8843efd9a9bc69.jpg",
  "https://i.pinimg.com/webp80/1200x/04/85/7f/04857f68bbd2fd4a2e6cf992ed05b9fb.webp",
  "https://i.pinimg.com/736x/53/4b/48/534b48fda16b264c677f8b36b5879ee3.jpg",
  "https://i.pinimg.com/webp80/1200x/98/9a/ac/989aace7e11705f2939b091e98c5e856.webp",
  "https://i.pinimg.com/1200x/63/3f/8f/633f8f7acddf6b8e76423f6c6ec41142.jpg",
  "https://i.pinimg.com/1200x/4d/82/1f/4d821f287aa9ed8efcd5e4ab4c969498.jpg",
  "https://i.pinimg.com/1200x/da/79/8e/da798e7c66781b480f09e3873742051c.jpg",
  "https://i.pinimg.com/736x/dd/9c/57/dd9c5778db96b57b0e0f5a2975269f86.jpg",
  "https://i.pinimg.com/736x/e9/64/5a/e9645a9e726a1255661caec0bee04ccc.jpg",
  "https://i.pinimg.com/1200x/ab/4a/d5/ab4ad587bd571d117a60cdbdf1e4d1e8.jpg",
  "https://i.pinimg.com/736x/c2/c6/e4/c2c6e48ac35ab719337099363667fc16.jpg",
  "https://i.pinimg.com/736x/61/84/e0/6184e058dc0238345fb4b099344f613a.jpg",
];

const Skiper30 = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="w-full bg-[#eee] text-black">
      <div className="font-geist flex h-screen items-center justify-center gap-2 px-20">
        <h1 className="text-5xl font-bold w-3/4 text-[var(--foregrFound)] tracking-tight text-center"><span className="font-light">Reshaping industries, elevating experiences,</span><br /> powered by world-class product <br/>and platform AI Engineering.</h1>
      </div>

      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-white p-[2vw]"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[6], images[7], images[8]]} y={y4} />
      </div>
      <div className="font-geist relative flex h-screen items-center justify-center gap-2">

      </div>
    </main>
  );
};



const Column = ({ images, y }) => {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-full w-full overflow-hidden">
          <img
            src={`${src}`}
            alt="image"
            className="pointer-events-none object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};

export { Skiper30 };

/**
 * Skiper 30 Parallax_002 — React + framer motion + lenis
 * Inspired by and adapted from https://www.siena.film/films/my-project-x
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 * These animations aren’t associated with the siena.film . They’re independent recreations meant to study interaction design
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
