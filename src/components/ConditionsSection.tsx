"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Clock } from "lucide-react";

const committed = [
  "Setup e integración técnica completa",
  "Informe semanal Smart Ads Dashboard",
  "Soporte técnico nivel 1 y 2",
  "Mantenimiento y monitoreo 24/7",
  "Actualizaciones del sistema incluidas",
];

const notIncluded = [
  "Presupuesto de anuncios (lo administra el cliente)",
  "Aprobaciones Meta: 2–15 días hábiles sin SLA",
  "Número WhatsApp Business (lo provee el cliente)",
  "Decisiones estratégicas de negocio",
  "Gestión de campañas ni creativos publicitarios",
];

export default function ConditionsSection() {
  return (
    <section id="condiciones" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Transparencia
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-foreground mb-4"
            style={{ fontSize: "var(--text-xl)", fontFamily: "var(--font-heading)" }}
          >
            Qué incluye
            <br />
            y qué no.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
            style={{ fontSize: "var(--text-base)" }}
          >
            GrowthCore es un proveedor de herramientas integradas con soporte técnico.
            No somos una agencia que gestiona tu pauta.
          </motion.p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* GrowthCore compromete */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </div>
              <h3
                className="font-heading font-semibold text-foreground"
                style={{ fontSize: "var(--text-lg)", fontFamily: "var(--font-heading)" }}
              >
                GrowthCore compromete
              </h3>
            </div>
            <ul className="space-y-3">
              {committed.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Fuera de nuestro control */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                <XCircle className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3
                className="font-heading font-semibold text-foreground"
                style={{ fontSize: "var(--text-lg)", fontFamily: "var(--font-heading)" }}
              >
                Fuera de nuestro control
              </h3>
            </div>
            <ul className="space-y-3">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <XCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Meta timing clause */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4"
        >
          <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Clock className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm mb-1">Sobre los tiempos de activación</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              GrowthCore implementa su parte en días hábiles. La activación final depende de procesos de Meta
              (aprobación de cuenta Business Manager, escalado de límites de mensajería): proceso externo,
              sin SLA garantizado. Rango observado: 2–15 días hábiles.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
