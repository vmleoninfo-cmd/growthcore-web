"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  ambient?: boolean;
}

/* ── Data flow nodes (viewBox 400 × 520) ── */
const FLOW_NODES = [
  { id: "meta",      x: 200, y: 60,  label: "META ADS",   status: "Activo",         statusColor: "#94A3B8", r: 11 },
  { id: "core",      x: 200, y: 210, label: "GROWTHCORE", status: "En línea",        statusColor: "#22C55E", r: 22 },
  { id: "crm",       x: 90,  y: 360, label: "CRM IA",     status: "94 leads",        statusColor: "#22C55E", r: 12 },
  { id: "whatsapp",  x: 200, y: 375, label: "WHATSAPP",   status: "< 8 seg",         statusColor: "#22C55E", r: 12 },
  { id: "ventas",    x: 310, y: 360, label: "VENTAS",     status: "CPL ~$500",       statusColor: "#22C55E", r: 12 },
];

const EDGES = [
  { from: 0, to: 1, dur: "7s",  begin: "0s" },
  { from: 1, to: 2, dur: "8s",  begin: "1s" },
  { from: 1, to: 3, dur: "9s",  begin: "2.5s" },
  { from: 1, to: 4, dur: "8s",  begin: "4s" },
];

/* ambient scattered dots */
const AMBIENT_DOTS = Array.from({ length: 20 }, (_, i) => ({
  x: 80 + ((i * 173 + 47) % 1040),
  y: 40 + ((i * 97 + 23) % 500),
  delay: (i * 0.4) % 4,
}));

export default function HeroBackground({ ambient = false }: Props) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (ambient) return;
    const onMove = (e: MouseEvent) => {
      targetRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 14,
        y: (e.clientY / window.innerHeight - 0.5) * 14,
      };
    };
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.055);
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.055);
      setOffset({ x: currentRef.current.x, y: currentRef.current.y });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [ambient]);

  /* ── Ambient mode ── */
  if (ambient) {
    return (
      <svg viewBox="0 0 1200 580" preserveAspectRatio="xMidYMid slice" className="w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id="amb-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22C55E" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={600} cy={290} r="80" fill="url(#amb-glow)" />
        <circle cx={600} cy={290} r="2.5" fill="#22C55E" opacity="0.5" />
        {AMBIENT_DOTS.map((d, i) => (
          <motion.circle key={i} cx={d.x} cy={d.y} r="1"
            fill="#22C55E"
            animate={{ opacity: [0, 0.2, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: d.delay, ease: "easeInOut" }}
          />
        ))}
      </svg>
    );
  }

  /* ── Panel mode: data flow ── */
  const getPath = (a: { x: number; y: number }, b: { x: number; y: number }) =>
    `M ${a.x} ${a.y} L ${b.x} ${b.y}`;

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <motion.div
        className="w-full h-full"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)`, willChange: "transform" }}
      >
        <svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
          <defs>
            {EDGES.map((e, i) => {
              const a = FLOW_NODES[e.from], b = FLOW_NODES[e.to];
              return <path key={i} id={`fp-${i}`} d={getPath(a, b)} />;
            })}

            {/* Core hub glow — large */}
            <radialGradient id="core-glow-lg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22C55E" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#22C55E" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
            </radialGradient>

            {/* Outer ambient glow for background fill */}
            <radialGradient id="scene-glow" cx="50%" cy="43%" r="55%">
              <stop offset="0%" stopColor="#22C55E" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
            </radialGradient>

            {FLOW_NODES.map((n, i) => (
              <radialGradient key={i} id={`ng-${i}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={n.statusColor} stopOpacity="0.35" />
                <stop offset="100%" stopColor={n.statusColor} stopOpacity="0" />
              </radialGradient>
            ))}
          </defs>

          {/* Scene background glow */}
          <rect x="0" y="0" width="400" height="480" fill="url(#scene-glow)" />

          {/* Connection lines — visible */}
          {EDGES.map((e, i) => {
            const a = FLOW_NODES[e.from], b = FLOW_NODES[e.to];
            return (
              <line key={i}
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke="#22C55E" strokeWidth="1.25"
                strokeOpacity="0.38" strokeDasharray="5 9"
              />
            );
          })}

          {/* Traveling signal dots — slow continuous (6-9s linear) */}
          {EDGES.map((e, i) => (
            <circle key={`sig-${i}`} r="3.5" fill="#22C55E" opacity="0.9">
              <animateMotion dur={e.dur} repeatCount="indefinite" begin={e.begin}>
                <mpath href={`#fp-${i}`} />
              </animateMotion>
            </circle>
          ))}

          {/* Second pass — smaller return dots */}
          {EDGES.map((e, i) => (
            <circle key={`ret-${i}`} r="2" fill="#4ADE80" opacity="0.5">
              <animateMotion
                dur={`${parseInt(e.dur) + 2}s`}
                repeatCount="indefinite"
                begin={`${parseFloat(e.begin) + 3}s`}
                keyPoints="1;0" keyTimes="0;1"
              >
                <mpath href={`#fp-${i}`} />
              </animateMotion>
            </circle>
          ))}

          {/* ── CORE node (GrowthCore) — dominant ── */}
          {(() => {
            const core = FLOW_NODES[1];
            return (
              <g>
                {/* Large ambient glow */}
                <circle cx={core.x} cy={core.y} r="80" fill="url(#core-glow-lg)" />

                {/* Slow rotating halo ring 1 — 8s */}
                <motion.circle
                  cx={core.x} cy={core.y} r={core.r + 6}
                  fill="none" stroke="#22C55E" strokeWidth="1"
                  animate={{ r: [core.r + 6, core.r + 36], opacity: [0.45, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 0, ease: "easeOut" }}
                />
                {/* Slow halo ring 2 — offset */}
                <motion.circle
                  cx={core.x} cy={core.y} r={core.r + 6}
                  fill="none" stroke="#22C55E" strokeWidth="0.75"
                  animate={{ r: [core.r + 6, core.r + 36], opacity: [0.22, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 0, delay: 1.5, ease: "easeOut" }}
                />

                {/* Pulse glow every 3s — slow */}
                <motion.circle
                  cx={core.x} cy={core.y} r={core.r + 2}
                  fill="none" stroke="#22C55E" strokeWidth="2"
                  animate={{ r: [core.r + 2, core.r + 20], opacity: [0.6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, ease: "easeOut" }}
                />

                {/* Outer ring */}
                <circle cx={core.x} cy={core.y} r={core.r}
                  fill="#22C55E" fillOpacity="0.1"
                  stroke="#22C55E" strokeWidth="1.5" strokeOpacity="0.65"
                />
                {/* Inner dot */}
                <circle cx={core.x} cy={core.y} r={8} fill="#22C55E" opacity="0.95" />
                <circle cx={core.x} cy={core.y} r={3} fill="#0A1022" opacity="0.8" />

                {/* Label */}
                <text x={core.x} y={core.y - core.r - 12}
                  textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="700"
                  fontFamily="var(--font-heading,'Space Grotesk',sans-serif)" letterSpacing="0.1em"
                >
                  {core.label}
                </text>

                {/* Status badge */}
                <g transform={`translate(${core.x}, ${core.y + core.r + 10})`}>
                  <rect x={-32} y={-8} width={64} height={15} rx={7}
                    fill="#22C55E" fillOpacity="0.15"
                    stroke="#22C55E" strokeOpacity="0.35" strokeWidth="0.75"
                  />
                  <motion.circle cx={-20} cy={0} r={3}
                    fill="#22C55E"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <text x={-12} y={4.5} fill="#22C55E" fontSize="7.5" fontWeight="700"
                    fontFamily="var(--font-body,'DM Sans',sans-serif)" letterSpacing="0.06em"
                  >
                    {core.status}
                  </text>
                </g>
              </g>
            );
          })()}

          {/* ── Other nodes ── */}
          {FLOW_NODES.filter((_, i) => i !== 1).map((node, idx) => {
            const i = idx < 1 ? 0 : idx + 1;
            return (
              <g key={node.id}>
                <circle cx={node.x} cy={node.y} r={node.r * 3.5} fill={`url(#ng-${i})`} />
                <motion.circle cx={node.x} cy={node.y} r={node.r + 3}
                  fill="none" stroke={node.statusColor} strokeWidth="0.75"
                  animate={{ r: [node.r + 3, node.r + 14], opacity: [0.4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2.5, delay: idx * 0.7, ease: "easeOut" }}
                />
                <circle cx={node.x} cy={node.y} r={node.r}
                  fill={node.statusColor} fillOpacity="0.1"
                  stroke={node.statusColor} strokeWidth="1" strokeOpacity="0.45"
                />
                <circle cx={node.x} cy={node.y} r={4.5} fill={node.statusColor} opacity="0.9" />

                <text x={node.x} y={node.y - node.r - 10}
                  textAnchor="middle" fill="#F8FAFC" fontSize="8.5" fontWeight="700"
                  fontFamily="var(--font-heading,'Space Grotesk',sans-serif)" letterSpacing="0.09em"
                  opacity="0.9"
                >
                  {node.label}
                </text>

                <g transform={`translate(${node.x}, ${node.y + node.r + 10})`}>
                  <rect x={-26} y={-7} width={52} height={13} rx={6}
                    fill={node.statusColor} fillOpacity="0.12"
                    stroke={node.statusColor} strokeOpacity="0.25" strokeWidth="0.5"
                  />
                  <motion.circle cx={-15} cy={0} r={2.5}
                    fill={node.statusColor}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.4 }}
                  />
                  <text x={-7} y={4} fill={node.statusColor} fontSize="6.5" fontWeight="600"
                    fontFamily="var(--font-body,'DM Sans',sans-serif)" letterSpacing="0.04em"
                  >
                    {node.status}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
}
