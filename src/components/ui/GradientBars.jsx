"use client";

export function GradientBars({
  bars = 24,
  colors = ["#4f46e5", "#0891b2", "#14b8a6", "transparent"],
  className = "",
}) {
  const gradientStyle = `linear-gradient(to top, ${colors.join(", ")})`;

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      <style>{`
        @keyframes gradientBarPulse {
          0%, 100% { transform: scaleY(var(--scale-base)); opacity: 0.82; }
          50% { transform: scaleY(var(--scale-peak)); opacity: 1; }
        }
      `}</style>
      <div className="flex h-full w-full">
        {Array.from({ length: bars }).map((_, index) => {
          const position = index / (bars - 1);
          const center = 0.5;
          const distance = Math.abs(position - center);
          const scaleBase = 0.3 + 0.8 * Math.pow(distance * 2, 1.3);
          const scalePeak = scaleBase + 0.15;
          const delay = (index * 0.45) % 3.5;

          return (
            <div
              key={`bar-${index}`}
              className="flex-1 origin-bottom will-change-transform"
              style={{
                background: gradientStyle,
                "--scale-base": scaleBase,
                "--scale-peak": scalePeak,
                animation: `gradientBarPulse 3.5s ease-in-out ${delay}s infinite`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
