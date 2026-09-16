"use client";

import { useEffect, useRef } from "react";

const VIEW_W = 800;
const VIEW_H = 560;
const CENTER = { x: VIEW_W / 2, y: 268, label: "Laravel", sub: "PHP · APIs · MySQL" };

const SPOKES = [
  { id: "ecommerce", label: "E-commerce", sub: "Orders & catalog", color: "#38bdf8" },
  { id: "fintech", label: "FinTech", sub: "Payment gateways", color: "#5eead4" },
  { id: "insurance", label: "Insurance", sub: "Premium engines", color: "#34d399" },
  { id: "ai", label: "AI Products", sub: "LangGraph & RAG", color: "#a78bfa" },
  { id: "analytics", label: "Analytics", sub: "Events & funnels", color: "#22d3ee" },
  { id: "realtime", label: "Real-time", sub: "WebSockets & chat", color: "#fb7185" },
] as const;

const NODE_W = 140;
const NODE_H = 72;
const CENTER_W = 164;
const CENTER_H = 88;
const CENTER_RX = 22;
const ORBIT_RADIUS = 190;

function polarToCartesian(cx: number, cy: number, radius: number, index: number, total: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    x: Math.round(cx + radius * Math.cos(angle)),
    y: Math.round(cy + radius * Math.sin(angle)),
  };
}

function spokePath(cx: number, cy: number, tx: number, ty: number) {
  const dx = tx - cx;
  const dy = ty - cy;
  const distance = Math.sqrt(dx * dx + dy * dy) || 1;
  const startX = cx + (dx / distance) * (CENTER_W / 2 + 6);
  const startY = cy + (dy / distance) * (CENTER_H / 2 + 6);
  const endX = tx - (dx / distance) * (NODE_W / 2 + 6);
  const endY = ty - (dy / distance) * (NODE_H / 2 + 6);
  return `M ${startX} ${startY} L ${endX} ${endY}`;
}

const DOMAIN_TAGS = SPOKES.map((s) => s.label);

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  const nodes = SPOKES.map((spoke, index) => ({
    ...spoke,
    ...polarToCartesian(CENTER.x, CENTER.y, ORBIT_RADIUS, index, SPOKES.length),
  }));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const onMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      container.style.setProperty("--tilt-x", `${y * -4}deg`);
      container.style.setProperty("--tilt-y", `${x * 5}deg`);
      container.style.setProperty("--glow-x", `${50 + x * 14}%`);
      container.style.setProperty("--glow-y", `${46 + y * 10}%`);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-visual relative w-full min-h-[440px] overflow-hidden rounded-3xl border border-line bg-[#0b0f19] sm:min-h-[500px] lg:min-h-[560px]"
      style={
        {
          "--tilt-x": "0deg",
          "--tilt-y": "0deg",
          "--glow-x": "50%",
          "--glow-y": "46%",
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(245,165,36,0.14), transparent 58%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(36,48,73,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(36,48,73,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(circle at center, black, transparent 82%)",
        }}
      />

      <div className="hero-visual__stage absolute inset-x-0 top-0 bottom-[72px] flex items-center justify-center px-3 pt-12 sm:px-5">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          preserveAspectRatio="xMidYMid meet"
          className="h-full w-full"
          role="img"
          aria-label="Laravel backend across e-commerce, fintech, insurance, AI, analytics, and real-time systems"
          shapeRendering="geometricPrecision"
          textRendering="optimizeLegibility"
        >
          <defs>
            <linearGradient id="spoke-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#f5a524" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>

          {nodes.map((node, index) => {
            const path = spokePath(CENTER.x, CENTER.y, node.x, node.y);
            return (
              <g key={`line-${node.id}`}>
                <path d={path} fill="none" stroke="#243049" strokeWidth="3" strokeLinecap="round" />
                <path
                  d={path}
                  fill="none"
                  stroke="url(#spoke-gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="7 10"
                  className="hero-visual__flow-line"
                  style={{ animationDelay: `${index * 0.25}s` }}
                />
                <circle r="4" fill="#f5a524" className="hero-visual__packet" style={{ animationDelay: `${index * 0.7}s` }}>
                  <animateMotion dur={`${2.8 + index * 0.2}s`} repeatCount="indefinite" path={path} />
                </circle>
              </g>
            );
          })}

          {nodes.map((node, index) => (
            <g key={node.id}>
              <rect
                x={node.x - NODE_W / 2}
                y={node.y - NODE_H / 2}
                width={NODE_W}
                height={NODE_H}
                rx="16"
                fill="#131a2a"
                stroke={node.color}
                strokeWidth="2"
                className="hero-visual__node"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
              <text
                x={node.x}
                y={node.y - 6}
                fill="#ffffff"
                fillOpacity="1"
                fontSize="15"
                fontWeight="600"
                fontFamily="var(--font-space-grotesk), system-ui, sans-serif"
                textAnchor="middle"
              >
                {node.label}
              </text>
              <text
                x={node.x}
                y={node.y + 15}
                fill="#e8ecf4"
                fillOpacity="1"
                fontSize="12"
                fontFamily="var(--font-jetbrains-mono), monospace"
                textAnchor="middle"
              >
                {node.sub}
              </text>
            </g>
          ))}

          <g>
            <rect
              x={CENTER.x - CENTER_W / 2}
              y={CENTER.y - CENTER_H / 2}
              width={CENTER_W}
              height={CENTER_H}
              rx={CENTER_RX}
              fill="#161f33"
              stroke="#f5a524"
              strokeWidth="2.5"
              className="hero-visual__node"
            />
            <text
              x={CENTER.x}
              y={CENTER.y - 4}
              fill="#ffffff"
              fillOpacity="1"
              fontSize="20"
              fontWeight="700"
              fontFamily="var(--font-space-grotesk), system-ui, sans-serif"
              textAnchor="middle"
            >
              {CENTER.label}
            </text>
            <text
              x={CENTER.x}
              y={CENTER.y + 18}
              fill="#f5a524"
              fillOpacity="1"
              fontSize="12"
              fontFamily="var(--font-jetbrains-mono), monospace"
              textAnchor="middle"
            >
              {CENTER.sub}
            </text>
          </g>
        </svg>
      </div>

      <div className="absolute left-4 top-4 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-text backdrop-blur-sm">
        What I build
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-line bg-ink px-4 py-3 backdrop-blur-sm">
        <div className="flex flex-wrap items-center gap-2">
          {DOMAIN_TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs font-medium text-text"
            >
              {tag}
            </span>
          ))}
          <span className="ml-auto hidden text-xs text-signal-2 sm:inline">7+ years production</span>
        </div>
      </div>
    </div>
  );
}
