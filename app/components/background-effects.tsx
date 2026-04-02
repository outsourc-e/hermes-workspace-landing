"use client";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  width: 2 + ((i * 1.5) % 4),
  left: (i * 5.7) % 100,
  top: (i * 8.4) % 100,
  duration: 8 + ((i * 2.2) % 10),
  delay: -(i * 1.2),
  opacity: 0.16 + ((i * 0.03) % 0.28),
}));

export function BackgroundEffects() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(129,140,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(129,140,248,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:radial-gradient(circle_at_center,black_35%,transparent_78%)]" />
      <div className="gradient-orb gradient-orb-a" />
      <div className="gradient-orb gradient-orb-b" />
      <div className="gradient-orb gradient-orb-c" />
      <div
        className="gradient-orb"
        style={{
          top: "48%",
          right: "18%",
          height: "18rem",
          width: "18rem",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.14), transparent 70%)",
          animation: "drift-b 26s ease-in-out infinite reverse",
        }}
      />
      {PARTICLES.map((particle, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-indigo-300/20 will-change-transform motion-reduce:hidden"
          style={{
            width: `${particle.width}px`,
            height: `${particle.width}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animation: `float-particle ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            opacity: particle.opacity,
          }}
        />
      ))}
      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.18; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.42; }
          50% { transform: translateY(-32px) translateX(-5px); opacity: 0.26; }
          75% { transform: translateY(-16px) translateX(14px); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
