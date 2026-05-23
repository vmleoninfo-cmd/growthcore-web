"use client";

import { motion } from "framer-motion";

const modules = [
  { label: "Marketing",  score: 74, color: "#3B82F6", trend: "+8 pts",  status: "Revisar creativos" },
  { label: "Ventas",     score: 81, color: "#22C55E", trend: "+12 pts", status: "Pipeline saludable" },
  { label: "Leads",      score: 62, color: "#FBBF24", trend: "+22%",    status: "Volumen bajo meta" },
  { label: "Conversión", score: 88, color: "#8B5CF6", trend: "+5 pts",  status: "Tasa óptima" },
];

function ScoreRing({ score, color, size = 56 }: { score: number; color: string; size?: number }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;

  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none"
              stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={color} strokeWidth="4" strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: circ - dash }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function GrowthCoreBrain() {
  const overallScore = Math.round(modules.reduce((a, m) => a + m.score, 0) / modules.length);

  return (
    <section className="py-24" style={{ background: "var(--gc-navy, #0A1022)" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--gc-green, #22C55E)" }}
          >
            GrowthCore Brain
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-white mb-4 leading-tight"
            style={{ fontSize: "var(--text-xl, 2.25rem)", fontFamily: "var(--font-heading)" }}
          >
            Un cerebro que analiza{" "}
            <span style={{ color: "var(--gc-green, #22C55E)" }}>todo tu negocio</span>
            {" "}en tiempo real.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--gc-gray-400, #94A3B8)" }}
          >
            GrowthCore procesa datos de campañas, leads y clientes para darte
            una visión unificada y acciones concretas — no dashboards vacíos.
          </motion.p>
        </div>

        {/* Brain layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

          {/* Score central */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col items-center justify-center"
            >
              <svg width={160} height={160} style={{ transform: "rotate(-90deg)" }}>
                <circle cx="80" cy="80" r="68" fill="none"
                        stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                <motion.circle
                  cx="80" cy="80" r="68" fill="none"
                  stroke="#22C55E" strokeWidth="8" strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 68}
                  initial={{ strokeDashoffset: 2 * Math.PI * 68 }}
                  whileInView={{ strokeDashoffset: 2 * Math.PI * 68 * (1 - overallScore / 100) }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-5xl font-bold text-white">{overallScore}</span>
                <span className="text-xs uppercase tracking-widest mt-1"
                      style={{ color: "#22C55E" }}>Score global</span>
              </div>
            </motion.div>
            <div className="mt-6 text-center">
              <p className="text-white font-semibold">SISTEMA ESTABLE</p>
              <p className="text-sm mt-1" style={{ color: "#94A3B8" }}>
                Acción prioritaria: Revisar creativos
              </p>
            </div>
          </div>

          {/* Módulos */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl p-5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-white">{mod.label}</span>
                  <ScoreRing score={mod.score} color={mod.color} size={44} />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">{mod.score}</span>
                  <span className="text-xs font-medium" style={{ color: mod.color }}>
                    {mod.trend}
                  </span>
                </div>
                <p className="text-xs mt-2" style={{ color: "#94A3B8" }}>{mod.status}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
