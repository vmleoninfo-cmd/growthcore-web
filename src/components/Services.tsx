"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  MessageCircle,
  Brain,
  Globe,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    tag: "Meta Ads",
    title: "Smart Ads System",
    description:
      "Dashboard en tiempo real con score de rendimiento automático. Sabe exactamente qué campañas escalar, mantener o pausar — sin adivinar.",
    benefits: ["Score 0-100 de tus campañas", "Decisiones automáticas", "CPL objetivo configurable"],
    color: "text-blue-500",
    bg: "bg-blue-50",
    cta: "Ver demo del dashboard",
  },
  {
    icon: MessageCircle,
    tag: "WhatsApp 24/7",
    title: "Agente WhatsApp con IA",
    description:
      "Tu vendedor siempre disponible. Responde, califica y convierte leads en WhatsApp de forma automática con inteligencia artificial personalizada para tu negocio.",
    benefits: ["Respuesta en segundos", "Calificación automática de leads", "Integrado con tu CRM"],
    color: "text-accent",
    bg: "bg-green-50",
    cta: "Ver ejemplo",
  },
  {
    icon: Brain,
    tag: "CRM Inteligente",
    title: "CRM con IA",
    description:
      "Gestión de clientes que piensa por ti. Scoring de leads, seguimiento automático y análisis de comportamiento para nunca perder una oportunidad de venta.",
    benefits: ["Scoring de leads automático", "Historial completo por cliente", "IA que sugiere acciones"],
    color: "text-purple-500",
    bg: "bg-purple-50",
    cta: "Ver el CRM en acción",
  },
  {
    icon: Globe,
    tag: "Diseño Web",
    title: "Páginas Web con IA",
    description:
      "Landing pages profesionales que convierten, construidas con IA en tiempo récord. Optimizadas para Google, responsive y listas para capturar leads desde el día uno.",
    benefits: ["Lista en 2 semanas", "Optimizada para SEO", "Animaciones profesionales"],
    color: "text-orange-500",
    bg: "bg-orange-50",
    cta: "Ver portafolio",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Lo que hacemos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-foreground mb-4"
            style={{ fontSize: "var(--text-xl)", fontFamily: "var(--font-heading)" }}
          >
            Cuatro herramientas.
            <br />
            Un solo sistema de crecimiento.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
            style={{ fontSize: "var(--text-base)" }}
          >
            Cada herramienta funciona sola. Juntas son imbatibles.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={item}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                {/* Tag + Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${s.color}`} />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground border border-border px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className="font-heading font-semibold text-foreground mb-3"
                  style={{ fontSize: "var(--text-lg)", fontFamily: "var(--font-heading)" }}
                >
                  {s.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                  {s.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-accent transition-colors"
                >
                  {s.cta}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
