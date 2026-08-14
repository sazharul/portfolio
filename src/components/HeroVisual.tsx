"use client";

import { useEffect, useRef } from "react";

const NODES = [
  { id: "visitor", label: "Visitor", x: 72, color: "#38bdf8" },
  { id: "session", label: "Session", x: 182, color: "#5eead4" },
  { id: "event", label: "Event", x: 292, color: "#38bdf8" },
  { id: "analytics", label: "Analytics", x: 402, color: "#f5a524" },
] as const;

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const onMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      container.style.setProperty("--tilt-x", `${y * -6}deg`);
      container.style.setProperty("--tilt-y", `${x * 8}deg`);
      container.style.setProperty("--glow-x", `${50 + x * 18}%`);
      container.style.setProperty("--glow-y", `${42 + y * 14}%`);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-visual relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-line bg-[#0b0f19]"
      style={
        {
          "--tilt-x": "0deg",
          "--tilt-y": "0deg",
          "--glow-x": "50%",
          "--glow-y": "42%",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(56,189,248,0.18), transparent 55%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(36,48,73,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(36,48,73,0.45) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(circle at center, black, transparent 78%)",
        }}
      />

      <div className="hero-visual__stage absolute inset-0 flex items-center justify-center p-6 sm:p-8">
        <svg
          viewBox="0 0 480 260"
          className="h-full w-full max-h-[320px]"
          role="img"
          aria-label="Event pipeline: visitor to session to event to analytics"
        >
          <defs>
            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#5eead4" />
              <stop offset="100%" stopColor="#f5a524" />
            </linearGradient>
            <filter id="node-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {NODES.slice(0, -1).map((node, index) => {
            const next = NODES[index + 1];
            const startX = node.x + 88;
            const endX = next.x;
            const midX = (startX + endX) / 2;
            const path = `M ${startX} 132 Q ${midX} 92 ${endX} 132`;

            return (
              <g key={`${node.id}-${next.id}`}>
                <path d={path} fill="none" stroke="rgba(36,48,73,0.9)" strokeWidth="10" strokeLinecap="round" />
                <path
                  d={path}
                  fill="none"
                  stroke="url(#flow-gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6 10"
                  className="hero-visual__flow-line"
                  style={{ animationDelay: `${index * 0.35}s` }}
                />
                <circle r="4" fill="#38bdf8" className="hero-visual__packet" style={{ animationDelay: `${index * 0.9}s` }}>
                  <animateMotion dur={`${2.8 + index * 0.2}s`} repeatCount="indefinite" path={path} />
                </circle>
              </g>
            );
          })}

          {NODES.map((node, index) => (
            <g key={node.id} filter="url(#node-glow)">
              <rect
                x={node.x}
                y="104"
                width="88"
                height="56"
                rx="14"
                fill="#131a2a"
                stroke={node.color}
                strokeOpacity="0.55"
                className="hero-visual__node"
                style={{ animationDelay: `${index * 0.15}s` }}
              />
              <rect x={node.x + 10} y="114" width="68" height="8" rx="4" fill={node.color} opacity="0.22" />
              <text
                x={node.x + 44}
                y="141"
                fill="#e8ecf4"
                fontSize="12"
                fontFamily="var(--font-jetbrains-mono), monospace"
                textAnchor="middle"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="absolute left-4 top-4 rounded-full border border-line/80 bg-surface/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted backdrop-blur">
        Live pipeline
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 font-mono text-[11px] text-muted">
        <span>visitor → session → event → analytics</span>
        <span className="hidden sm:inline text-signal-2">streaming</span>
      </div>
    </div>
  );
}
