"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Pasamos de seguir leads en WhatsApp y Excel a tener un sistema que nos dice exactamente qué campaña está funcionando y qué hacer con cada lead. En dos meses ya éramos más eficientes.",
    author: "Move",
    role: "Empresa de logística de última milla",
    metric: "+40% leads contactados a tiempo",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Resultados reales
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-foreground"
            style={{ fontSize: "var(--text-xl)", fontFamily: "var(--font-heading)" }}
          >
            Lo que dicen nuestros clientes.
          </motion.h2>
        </div>

        <div className="flex justify-center">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl bg-card border border-border rounded-2xl p-10 relative"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-6" />

              {/* Métricas antes/después */}
              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">+40%</p>
                  <p className="text-xs text-muted-foreground mt-1">leads contactados a tiempo</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">−18%</p>
                  <p className="text-xs text-muted-foreground mt-1">costo por lead (CPL)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">−40%</p>
                  <p className="text-xs text-muted-foreground mt-1">tiempo manual semanal</p>
                </div>
              </div>

              <blockquote
                className="text-foreground leading-relaxed mb-8"
                style={{ fontSize: "var(--text-base)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Metric */}
              <div className="bg-accent/10 border border-accent/20 rounded-xl px-4 py-3 mb-6 inline-block">
                <span className="text-accent font-semibold text-sm">{t.metric}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-sm">M</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.author}</div>
                  <div className="text-muted-foreground text-sm">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
