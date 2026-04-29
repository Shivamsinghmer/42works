"use client";

import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (prefersReducedMotion || !hasFinePointer) {
      return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const dot = document.createElement("div");

    canvas.setAttribute("aria-hidden", "true");
    Object.assign(canvas.style, {
      position: "fixed",
      inset: "0",
      zIndex: "9997",
      pointerEvents: "none",
      opacity: "1",
    });

    dot.setAttribute("aria-hidden", "true");
    Object.assign(dot.style, {
      position: "fixed",
      left: "0",
      top: "0",
      width: "12px",
      height: "12px",
      marginLeft: "-6px",
      marginTop: "-6px",
      borderRadius: "999px",
      pointerEvents: "none",
      zIndex: "9998",
      background: "linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)",
      boxShadow: "0 0 18px rgba(34,211,238,0.55)",
    });

    document.body.appendChild(canvas);
    document.body.appendChild(dot);
    document.body.classList.add("splash-cursor-active");

    const pointer = {
      x: -1000,
      y: -1000,
      lastX: -1000,
      lastY: -1000,
      moved: false,
    };
    const particles = [];
    const maxParticles = 72;
    const colors = [
      [99, 102, 241],
      [56, 189, 248],
      [20, 184, 166],
    ];

    let rafId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (x, y, dx, dy, burst = false) => {
      const count = burst ? 6 : 3;

      for (let i = 0; i < count; i += 1) {
        if (particles.length > maxParticles) {
          particles.shift();
        }

        const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.1;
        const speed = burst
          ? Math.random() * 2.8 + 1.5
          : Math.random() * 2 + 0.9;
        const size = burst
          ? Math.random() * 26 + 18
          : Math.random() * 20 + 12;
        const rgb = colors[Math.floor(Math.random() * colors.length)];

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (burst ? 0.55 : 0.35),
          life: 1,
          decay: burst ? 0.012 : 0.017,
          size,
          rgb,
        });
      }
    };

    const onMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.moved = true;
      dot.style.left = `${event.clientX}px`;
      dot.style.top = `${event.clientY}px`;
    };

    const onDown = () => {
      spawn(
        pointer.x,
        pointer.y,
        pointer.x - pointer.lastX,
        pointer.y - pointer.lastY,
        true
      );
    };

    const drawParticle = (p) => {
      const alpha = Math.max(p.life, 0);
      const outerRadius = p.size;

      const gradient = ctx.createRadialGradient(
        p.x,
        p.y,
        0,
        p.x,
        p.y,
        outerRadius
      );
      gradient.addColorStop(
        0,
        `rgba(${p.rgb[0]}, ${p.rgb[1]}, ${p.rgb[2]}, ${alpha * 0.78})`
      );
      gradient.addColorStop(
        0.55,
        `rgba(${p.rgb[0]}, ${p.rgb[1]}, ${p.rgb[2]}, ${alpha * 0.3})`
      );
      gradient.addColorStop(1, `rgba(${p.rgb[0]}, ${p.rgb[1]}, ${p.rgb[2]}, 0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(p.x, p.y, outerRadius, 0, Math.PI * 2);
      ctx.fill();
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      if (pointer.moved) {
        if (pointer.lastX < 0 || pointer.lastY < 0) {
          pointer.lastX = pointer.x;
          pointer.lastY = pointer.y;
        }
        const dx = pointer.x - pointer.lastX;
        const dy = pointer.y - pointer.lastY;
        if (Math.hypot(dx, dy) > 0.8) {
          spawn(pointer.x, pointer.y, dx, dy, false);
        }
        pointer.lastX = pointer.x;
        pointer.lastY = pointer.y;
      }

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy = p.vy * 0.985 + 0.024;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        drawParticle(p);
      }

      rafId = window.requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.body.classList.remove("splash-cursor-active");
      canvas.remove();
      dot.remove();
    };
  }, []);

  return null;
}
