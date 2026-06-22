"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { PRECISION, cardHover, buttonTap } from "@/lib/motion";

const EASE = PRECISION;

/* ─── Mini visual panels ─────────────────────────────── */

function ScorePanel() {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const score = 82;
  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <p className="text-white/30 text-xs uppercase tracking-widest mb-5">
        Score semanal · Smart Ads
      </p>
      <div className="flex items-center gap-5 mb-5">
        <div className="relative flex-shrink-0">
          <svg width={72} height={72} style={{ transform: "rotate(-90deg)" }}>
            <circle cx={36} cy={36} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={5} />
            <motion.circle
              cx={36} cy={36} r={r} fill="none"
              stroke="#22C55E" strokeWidth={5} strokeLinecap="round"
              strokeDasharray={circ}
              initial={{ strokeDashoffset: circ }}
              whileInView={{ strokeDashoffset: circ * (1 - score / 100) }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: EASE }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">{score}</span>
          </div>
        </div>
        <div>
          <div className="text-white font-semibold text-sm mb-1">Estable</div>
          <div className="text-white/40 text-xs">Sin alertas críticas</div>
        </div>
      </div>
      <div
        className="rounded-xl px-4 py-3"
        style={{ background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.2)" }}
      >
        <p className="text-yellow-400 text-xs font-semibold mb-1">⚠ Alerta detectada</p>
        <p className="text-white/55 text-xs">Campaña &ldquo;Express&rdquo; — frecuencia &gt; 3.8</p>
        <p className="text-white/35 text-xs mt-1">→ Ampliar audiencia geográfica hoy</p>
      </div>
    </div>
  );
}

function WhatsAppPanel() {
  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
        Agente activo · 24/7
      </p>
      <div className="space-y-2.5 mb-4">
        <div className="flex justify-end">
          <div
            className="text-white/60 text-xs px-3 py-2 rounded-xl rounded-tr-sm max-w-[78%]"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            Hola, ¿tienen servicio para empresas?
          </div>
        </div>
        <div className="flex justify-start">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
            className="text-white/80 text-xs px-3 py-2 rounded-xl rounded-tl-sm max-w-[82%]"
            style={{
              background: "rgba(34,197,94,0.12)",
              border: "1px solid rgba(34,197,94,0.2)",
            }}
          >
            ¡Hola! Soy el asistente de MOVE. Te ayudo ahora 👋
          </motion.div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
        <span className="text-accent text-xs font-semibold">Respondido en 8 seg</span>
        <span className="text-white/25 text-xs ml-1">· Lead: Alta prioridad</span>
      </div>
    </div>
  );
}

function CRMPanel() {
  const contacts = [
    { name: "Carlos M.", prob: 87, action: "Llamar hoy" },
    { name: "Laura P.", prob: 74, action: "Seguimiento" },
    { name: "Diego R.", prob: 61, action: "Propuesta" },
  ];
  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
        Esta semana · Prioridad detectada
      </p>
      {contacts.map((c, i) => (
        <div
          key={i}
          className="flex items-center gap-3 py-2.5"
          style={{ borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white/60 text-xs font-semibold flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            {c.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-white/80 text-xs font-medium">{c.name}</span>
              <span className="text-accent text-xs font-semibold">{c.prob}%</span>
            </div>
            <div
              className="h-1 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: `${c.prob}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.15, ease: EASE }}
                style={{ opacity: 0.65 }}
              />
            </div>
          </div>
          <span className="text-white/30 text-xs whitespace-nowrap">{c.action}</span>
        </div>
      ))}
    </div>
  );
}

function WebPanel() {
  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
        Web conectada · CRM integrado
      </p>
      {/* Mini landing mockup */}
      <div
        className="rounded-xl p-4 mb-4"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="h-2 w-20 rounded-full mb-2" style={{ background: "rgba(34,197,94,0.3)" }} />
        <div className="h-1.5 w-32 rounded-full mb-1.5" style={{ background: "rgba(255,255,255,0.08)" }} />
        <div className="h-1.5 w-24 rounded-full mb-4" style={{ background: "rgba(255,255,255,0.06)" }} />
        <div
          className="h-7 w-28 rounded-lg flex items-center justify-center"
          style={{
            background: "rgba(34,197,94,0.15)",
            border: "1px solid rgba(34,197,94,0.3)",
          }}
        >
          <div className="h-1.5 w-14 rounded-full" style={{ background: "rgba(34,197,94,0.5)" }} />
        </div>
      </div>
      {/* Live notification */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
        className="flex items-center gap-2 rounded-lg px-3 py-2.5"
        style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
        <span className="text-accent text-xs font-semibold">Lead registrado en CRM</span>
        <span className="text-white/25 text-xs ml-auto">ahora</span>
      </motion.div>
    </div>
  );
}

/* ─── Services data ──────────────────────────────────── */

const services = [
  {
    number: "01",
    tag: "Detección de campañas",
    title: "Smart Ads Dashboard",
    description:
      "Problema: inviertes en Meta Ads pero no sabes si está funcionando hasta que ya perdiste dinero. El dashboard procesa tus campañas cada 24 horas, calcula un score 0–100 por campaña y te entrega cada lunes una sola instrucción — qué ajustar, por qué, y qué pasa si no lo haces.",
    benefits: [
      "Score por campaña (0–100) con causa identificada",
      "Alerta inmediata si una campaña cae >20% en 48h",
      "Acción concreta cada semana — no solo métricas",
    ],
    cta: "Ver planes",
    reverse: false,
    Visual: ScorePanel,
  },
  {
    number: "02",
    tag: "Atención de leads 24/7",
    title: "Agente WhatsApp con IA",
    description:
      "Problema: un lead sin respuesta en los primeros 5 minutos pierde probabilidad de cierre. El agente, entrenado con el guion de tu negocio, responde en segundos, califica el lead y lo registra en el CRM — antes de que estés disponible.",
    benefits: [
      "Respuesta en segundos, 24/7 — incluso cuando no estás",
      "Califica según tus criterios antes de transferirte",
      "Registra cada conversación automáticamente en el CRM",
    ],
    cta: "Ver planes",
    reverse: true,
    Visual: WhatsAppPanel,
  },
  {
    number: "03",
    tag: "Seguimiento inteligente",
    title: "CRM con IA",
    description:
      "Problema: tienes contactos en WhatsApp, Excel y notas del teléfono, pero sin sistema que diga quién tiene mayor probabilidad de comprar hoy. El CRM ordena tu cartera y te entrega cada semana los 3–5 contactos a priorizar, cuándo contactarlos y qué decirles.",
    benefits: [
      "Probabilidad de cierre por contacto, actualizada semanalmente",
      "Top 3–5 prioridades + cuándo + qué decir cada semana",
      "Es la infraestructura base — todas las demás se conectan aquí",
    ],
    cta: "Ver planes",
    reverse: false,
    Visual: CRMPanel,
  },
  {
    number: "04",
    tag: "Captación conectada",
    title: "Web Conectada",
    description:
      "Problema: no tienes web, o tienes una que no captura leads automáticamente. Cada formulario completado entra directamente al CRM — sin copiar datos a mano. Solo disponible para clientes con CRM activo: sin CRM, la web no tiene función.",
    benefits: [
      "Cada formulario crea un contacto automático en el CRM",
      "Lista para publicar en 14 días hábiles desde el briefing",
      "Solo disponible con CRM activo (condición de producto)",
    ],
    cta: "Ver planes",
    reverse: true,
    Visual: WebPanel,
  },
];

/* ─── Component ──────────────────────────────────────── */

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24"
      style={{ background: "var(--gc-navy, #0A1022)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block font-semibold text-sm uppercase tracking-widest mb-4"
            style={{ color: "#22C55E" }}
          >
            El ecosistema
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="font-heading font-bold text-white mb-4"
            style={{ fontSize: "var(--text-xl)", fontFamily: "var(--font-heading)" }}
          >
            Un ecosistema operativo.
            <br />
            Cuatro áreas de tu negocio, conectadas.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)", fontSize: "var(--text-base)" }}
          >
            Cada herramienta automatiza un área —campañas, leads, clientes y
            web— conectadas en un solo sistema: la campaña se optimiza, el lead
            entra al CRM, el agente de WhatsApp lo atiende y la web alimenta todo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <Image
              src="/images/eco-flow.png"
              alt="Flujo del ecosistema GrowthCore: campaña, CRM, agente de WhatsApp y web conectados"
              width={1376}
              height={768}
              className="w-full h-auto rounded-2xl border border-white/10"
              priority={false}
            />
          </motion.div>
        </div>

        {/* Alternating rows with vertical connector */}
        <div className="relative">
          {/* Vertical green connector line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(34,197,94,0.15) 15%, rgba(34,197,94,0.15) 85%, transparent 100%)" }}
          />

        <div className="space-y-14">
          {services.map((s, i) => {
            const Visual = s.Visual;
            return (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, ease: EASE }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  s.reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Content */}
                <div>
                  {/* Large decorative number */}
                  <div className="relative">
                    <span
                      className="absolute -top-8 -left-2 font-heading font-bold leading-none select-none"
                      style={{
                        fontSize: "7rem",
                        color: "rgba(255,255,255,0.04)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {s.number}
                    </span>
                  </div>

                  {/* Tag */}
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-2.5 py-1 rounded-full"
                    style={{
                      color: "#22C55E",
                      background: "rgba(34,197,94,0.1)",
                      border: "1px solid rgba(34,197,94,0.2)",
                    }}
                  >
                    {s.tag}
                  </span>

                  <h3
                    className="font-heading font-bold text-white mb-4"
                    style={{
                      fontSize: "var(--text-lg)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {s.title}
                  </h3>

                  <p
                    className="leading-relaxed mb-6"
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "var(--text-base)",
                    }}
                  >
                    {s.description}
                  </p>

                  <ul className="space-y-2.5 mb-7">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm">
                        <Check
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: "#22C55E" }}
                        />
                        <span style={{ color: "rgba(255,255,255,0.7)" }}>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="#planes"
                    whileTap={buttonTap}
                    className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all"
                    style={{
                      color: "#22C55E",
                      background: "rgba(34,197,94,0.08)",
                      border: "1px solid rgba(34,197,94,0.2)",
                    }}
                  >
                    {s.cta}
                  </motion.a>
                </div>

                {/* Visual panel */}
                <motion.div whileHover={cardHover}>
                  <Visual />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        </div>{/* /relative connector wrapper */}
      </div>
    </section>
  );
}
