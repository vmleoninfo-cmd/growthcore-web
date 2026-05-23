"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(to right, #22C55E 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #22C55E, transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 px-4 py-1.5 rounded-full text-sm mb-8"
        >
          <TrendingUp className="w-3.5 h-3.5 text-accent" />
          Sistema operativo empresarial
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white font-heading font-bold leading-[1.1] tracking-tight mb-6"
          style={{
            fontSize: "var(--text-2xl)",
            fontFamily: "var(--font-heading)",
          }}
        >
          GrowthCore detecta dónde{" "}
          <span className="text-accent">se pierden oportunidades</span>
          <br />
          y te dice qué hacer.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "var(--text-base)" }}
        >
          Conecta tus campañas, leads y clientes en un solo sistema que analiza datos, detecta problemas y sugiere acciones concretas — sin que tengas que adivinar qué está pasando.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all hover:gap-3"
          >
            Agenda tu demo gratis
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-6 py-3 rounded-lg font-medium transition-all"
          >
            Ver cómo funciona
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-white/10"
        >
          <p className="text-white/40 text-sm mb-6 uppercase tracking-widest font-medium">
            OPERANDO EN PRODUCCIÓN
          </p>
          <div className="flex items-center justify-center gap-10 flex-wrap">
            <div className="text-white/60 font-heading font-semibold text-lg tracking-tight">
              MOVE
              <span className="block text-xs font-normal text-white/30 tracking-normal">
                Logística última milla
              </span>
            </div>
            <div className="text-white/30 font-heading font-semibold text-lg tracking-tight">
              Próximo cliente →
              <span className="block text-xs font-normal text-white/20 tracking-normal">
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
