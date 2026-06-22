"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description:
      "Analizamos tu negocio, tus campañas actuales y tu flujo de ventas. Identificamos el cuello de botella más urgente y las herramientas que lo resuelven. El diagnóstico es gratis.",
    duration: "Gratis · 24h hábiles",
  },
  {
    number: "02",
    icon: Settings,
    title: "Implementación",
    description:
      "GrowthCore instala y conecta las herramientas de tu plan. Los tramos técnicos que controlamos los comprometemos en días hábiles. La activación final de WhatsApp depende de procesos de Meta (verificación de cuenta y aprobación de plantillas): proceso externo sin tiempo garantizado.",
    duration: "Días hábiles (GrowthCore) · Meta sin SLA",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Operación",
    description:
      "Tu sistema detecta problemas y entrega la acción exacta cada semana. Recibes un reporte con lo que se detectó, cuánto cuesta ignorarlo y qué hacer primero.",
    duration: "Operación activa",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-primary text-white relative overflow-hidden">
      <Image
        src="/images/eco-action.png"
        alt=""
        aria-hidden
        width={1376}
        height={768}
        className="pointer-events-none absolute right-0 bottom-0 w-[680px] max-w-none opacity-[0.10]"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4"
          >
            El proceso
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-white mb-4"
            style={{ fontSize: "var(--text-xl)", fontFamily: "var(--font-heading)" }}
          >
            De tu operación actual
            <br />
            a un sistema que trabaja por ti.
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px bg-white/10" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl border border-accent/40 bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-white/30 font-heading font-bold text-4xl">
                    {step.number}
                  </span>
                </div>

                <div className="mb-2 flex items-center gap-2">
                  <span className="bg-accent/20 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>

                <h3
                  className="font-heading font-semibold text-white mb-3"
                  style={{ fontSize: "var(--text-lg)", fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
