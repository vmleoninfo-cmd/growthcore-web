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
    title: "Smart Ads Dashboard",
    description:
      "Detecta campañas que están desperdiciando presupuesto antes de que afecten resultados. Score automático 0-100 con la acción exacta que debes tomar.",
    benefits: ["Score 0-100 con causa identificada", "Acción prioritaria calculada", "Alerta antes de perder presupuesto"],
    color: "text-accent",
    bg: "bg-accent/10",
    cta: "Ver demo del dashboard",
  },
  {
    icon: MessageCircle,
    tag: "WhatsApp 24/7",
    title: "Agente WhatsApp con IA",
    description:
      "Responde, califica y registra leads en WhatsApp de forma automática. Nunca pierde un contacto, nunca duerme, siempre sigue el guión de ventas de tu negocio.",
    benefits: ["Respuesta en segundos", "Calificación automática de leads", "Registra cada conversación en tu CRM"],
    color: "text-accent",
    bg: "bg-accent/10",
    cta: "Ver ejemplo",
  },
  {
    icon: Brain,
    tag: "CRM Inteligente",
    title: "CRM con IA",
    description:
      "Detecta automáticamente qué clientes tienen mayor probabilidad de cierre. Prioriza tu tiempo en los leads correctos — el sistema te dice cuándo y cómo actuar.",
    benefits: ["Probabilidad de cierre por cliente", "Historial completo por cliente", "Identifica cuándo y cómo contactar"],
    color: "text-[#0A1022]",
    bg: "bg-[#0A1022]/8",
    cta: "Ver el CRM en acción",
  },
  {
    icon: Globe,
    tag: "Diseño Web",
    title: "Páginas Web con IA",
    description:
      "Landing page profesional lista en 2 semanas. Conectada a tu CRM desde el primer día para capturar leads automáticamente, sin configuración manual.",
    benefits: ["Lista en 2 semanas", "Optimizada para conversión", "Conectada a tu CRM desde el día 1"],
    color: "text-[#0A1022]",
    bg: "bg-[#0A1022]/8",
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
            Un cerebro operativo.
            <br />
            Cuatro formas de crecer.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
            style={{ fontSize: "var(--text-base)" }}
          >
            Cada módulo resuelve un problema real. Juntos eliminan el trabajo manual.
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
