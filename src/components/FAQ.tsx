"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿GrowthCore gestiona mis campañas de Meta Ads?",
    a: "No. GrowthCore detecta qué está fallando en tus campañas y te dice exactamente qué hacer. Tú mantienes el control — no necesitas darnos acceso a tu cuenta de Meta Ads.",
  },
  {
    q: "¿Y si el sistema no funciona como esperaba?",
    a: "Si el sistema no opera correctamente al cierre de la implementación, lo extendemos sin costo adicional hasta que funcione. No cobramos tiempo extra de corrección.",
  },
  {
    q: "¿Cuánto tiempo demora la implementación?",
    a: "GrowthCore implementa su parte en días hábiles (setup, integración y pruebas). La activación final depende de Meta: aprobación de cuenta y escalado de límites toman entre 2 y 15 días hábiles sin SLA garantizado. Controlamos nuestro trabajo, no los tiempos de Meta.",
  },
  {
    q: "¿Qué necesito tener antes de empezar?",
    a: "Meta Ads activo o pausado (cualquier presupuesto) y WhatsApp Business. No necesitas web, CRM previo ni conocimientos técnicos. Todo lo demás lo instalamos nosotros.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24" style={{ background: "var(--gc-navy, #0A1022)" }}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block font-semibold text-sm uppercase tracking-widest mb-4"
            style={{ color: "#22C55E" }}
          >
            Preguntas frecuentes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-white"
            style={{ fontSize: "var(--text-xl)", fontFamily: "var(--font-heading)" }}
          >
            Lo que preguntan antes
            <br />
            de implementar.
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left flex items-center justify-between gap-4 rounded-xl px-6 py-5 transition-all duration-200"
                  style={{
                    background: isOpen
                      ? "rgba(34,197,94,0.08)"
                      : "rgba(255,255,255,0.04)",
                    border: isOpen
                      ? "1px solid rgba(34,197,94,0.25)"
                      : "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span
                    className="font-heading font-semibold text-white leading-snug"
                    style={{
                      fontSize: "var(--text-base)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: isOpen
                        ? "rgba(34,197,94,0.2)"
                        : "rgba(255,255,255,0.08)",
                    }}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" style={{ color: "#22C55E" }} />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-white/50" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 py-4 text-sm leading-relaxed rounded-b-xl"
                        style={{
                          color: "rgba(255,255,255,0.62)",
                          background: "rgba(34,197,94,0.04)",
                          borderLeft: "2px solid rgba(34,197,94,0.4)",
                          marginLeft: "0",
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
