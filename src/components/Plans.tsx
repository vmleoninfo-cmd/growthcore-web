"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Clock, ShieldCheck, X } from "lucide-react";
import { PRECISION, staggerContainer, fadeUp, cardHover, buttonTap } from "@/lib/motion";

const plans = [
  {
    id: "A",
    label: "Opción A",
    title: "CRM con IA",
    problem:
      "Para quien recibe leads por WhatsApp y los pierde entre chats y un Excel que nadie actualiza. El CRM ordena tu cartera y te dice a quién contactar primero.",
    tools: ["CRM con IA"],
    setupPrice: "$147 USD",
    monthlyPrice: "$57 USD",
    cta: "Empezar con CRM",
    recommended: false,
  },
  {
    id: "B",
    label: "Opción B",
    title: "Smart Ads + CRM",
    problem:
      "Para quien invierte en Meta Ads y quiere saber qué campaña rinde y a qué lead contactar. Smart Ads detecta el gasto que sangra y el CRM prioriza el seguimiento — conectados, comparten los mismos datos.",
    tools: ["Smart Ads System", "CRM con IA"],
    setupPrice: "$297 USD",
    monthlyPrice: "$107 USD",
    cta: "Empezar con Opción B",
    recommended: false,
  },
  {
    id: "C",
    label: "Opción C — Recomendada",
    title: "Sistema completo",
    problem:
      "El flujo completo conectado: Smart Ads optimiza la campaña, el agente atiende cada lead y el CRM prioriza a quién cerrar. Sin intervención manual. (Ideal si ya tienes web.)",
    tools: ["Smart Ads System", "Agente WhatsApp con IA", "CRM con IA"],
    setupPrice: "$497 USD",
    monthlyPrice: "$197 USD",
    cta: "Activar sistema completo",
    recommended: true,
  },
  {
    id: "D",
    label: "Opción D",
    title: "Full Stack",
    problem:
      "El ecosistema completo: las 3 herramientas + tu web profesional conectada al CRM, sin contratar un diseñador aparte.",
    tools: ["Smart Ads System", "Agente WhatsApp con IA", "CRM con IA", "Web Conectada"],
    setupPrice: "$797 USD",
    monthlyPrice: "$227 USD",
    cta: "Empezar con Full Stack",
    recommended: false,
  },
];

export default function Plans() {
  return (
    <section id="planes" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4"
          >
            ¿Por dónde empezar?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-foreground mb-4"
            style={{ fontSize: "var(--text-xl)", fontFamily: "var(--font-heading)" }}
          >
            Elige según el problema
            <br />
            más urgente de tu negocio.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
            style={{ fontSize: "var(--text-base)" }}
          >
            Cada opción es un sistema que instalamos, conectamos y dejamos
            operando por ti. Tú no configuras nada — los tiempos de puesta en
            marcha varían según la herramienta.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              whileHover={cardHover}
              className={`card-hover-shadow relative rounded-2xl border p-8 flex flex-col cursor-default ${
                plan.recommended
                  ? "border-accent/50 glass-panel shadow-lg shadow-accent/10"
                  : "border-border bg-card"
              }`}
            >
              {/* Recommended badge */}
              {plan.recommended && (
                <div className="absolute -top-3.5 left-8">
                  <span className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase">
                    <Star className="w-3 h-3" />
                    Más contratado
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  {plan.label}
                </span>
                <h3
                  className="font-heading font-bold text-foreground mt-1 mb-3"
                  style={{ fontSize: "var(--text-lg)", fontFamily: "var(--font-heading)" }}
                >
                  {plan.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {plan.problem}
                </p>
              </div>

              {/* Tools */}
              <ul className="space-y-2 mb-6 flex-1">
                {plan.tools.map((tool) => (
                  <li key={tool} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {tool}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="border-t border-border pt-5 mb-5">
                <div className="flex items-end gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Pago único</p>
                    <p className="font-heading font-bold text-foreground text-2xl">
                      {plan.setupPrice}
                    </p>
                  </div>
                  <div className="text-muted-foreground mb-1">+</div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Mensual</p>
                    <p className="font-heading font-bold text-accent text-2xl">
                      {plan.monthlyPrice}
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantees — solo plan recomendado */}
              {plan.recommended && (
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-5">
                  {[
                    { icon: ShieldCheck, text: "Sin permanencia mínima" },
                    { icon: X, text: "Cancelación simple" },
                    { icon: Clock, text: "Setup en días hábiles" },
                  ].map(({ icon: Icon, text }) => (
                    <span key={text} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Icon className="w-3 h-3 text-accent flex-shrink-0" />
                      {text}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA */}
              <motion.a
                href="#contacto"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("gc:selectPlan", {
                      detail: {
                        title: plan.title,
                        tag: `Opción ${plan.id} · ${plan.setupPrice} setup / ${plan.monthlyPrice} mes`,
                      },
                    })
                  )
                }
                whileTap={buttonTap}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-colors ${
                  plan.recommended
                    ? "btn-shimmer bg-accent text-accent-foreground hover:bg-accent/90"
                    : "border border-border text-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-muted-foreground text-sm mt-10"
        >
          No gestionamos tus campañas ni tu estrategia. Instalamos el sistema que ordena tus campañas, leads y clientes — y te dice qué hacer.
        </motion.p>
      </div>
    </section>
  );
}
