"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forYes = [
  "Inviertes —o has invertido— entre $100 y $1.000 USD/mes en Meta Ads",
  "Recibes leads por WhatsApp y algunos se pierden sin seguimiento",
  "Tienes entre 1 y 15 personas en tu equipo",
  "Quieres un sistema que ordene campañas, leads y clientes — no más herramientas sueltas que no se hablan entre sí",
];

const forNo = [
  "Buscas una agencia que defina tu estrategia y gestione tus campañas (somos herramientas + soporte técnico, no un ejecutivo de cuenta)",
  "Aún no vendes ni tienes clientes o leads que gestionar (el sistema ordena lo que ya tienes, no genera demanda desde cero)",
  "Esperas resultados garantizados sin proceso de implementación",
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ForWho() {
  return (
    <section id="para-quien" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Para quién es
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="font-heading font-bold text-foreground mb-4"
            style={{ fontSize: "var(--text-xl)", fontFamily: "var(--font-heading)" }}
          >
            GrowthCore no es para todos.
            <br />
            Es para negocios que ya venden.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
            style={{ fontSize: "var(--text-base)" }}
          >
            No prometemos crecimiento. Instalamos el sistema que ordena tus
            campañas, leads y clientes para que dejes de perder lo que ya tienes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* For you */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-5">
              Es para ti si...
            </p>
            <ul className="space-y-4">
              {forYes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </span>
                  <span className="text-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not for you */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
          >
            <p className="text-destructive font-semibold text-sm uppercase tracking-widest mb-5">
              No es para ti si...
            </p>
            <ul className="space-y-4">
              {forNo.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-destructive/10 border border-destructive/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </span>
                  <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
