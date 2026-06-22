"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Image from "next/image";
import { PRECISION, fadeUp, fadeIn, staggerContainer, buttonTap } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Ambient background layer */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <HeroBackground ambient />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">

          {/* ── Columna izquierda ── */}
          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start"
          >
            {/* Badge — contraste mejorado */}
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 bg-accent/12 border border-accent/30 text-white/90 px-4 py-1.5 rounded-full text-sm mb-7"
            >
              <TrendingUp className="w-3.5 h-3.5 text-accent" />
              Ecosistema operativo con IA · Campañas · Leads · Clientes · Web
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-white font-heading font-bold leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: "var(--text-2xl)", fontFamily: "var(--font-heading)" }}
            >
              GrowthCore detecta dónde{" "}
              <span className="text-accent">se pierden oportunidades</span>
              {" "}y te dice qué hacer.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-white/65 max-w-lg mb-9 leading-relaxed"
              style={{ fontSize: "var(--text-base)" }}
            >
              Para negocios que ya venden y pierden leads entre campañas, WhatsApp y clientes.
              Detecta qué campaña está fallando, qué lead merece seguimiento y cuándo actuar
              — sin tener que adivinar.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <motion.a
                href="#cta"
                whileTap={buttonTap}
                className="btn-shimmer inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Quiero mi diagnóstico gratis
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#servicios"
                whileTap={buttonTap}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white border border-white/25 hover:border-white/50 px-6 py-3 rounded-lg font-medium transition-all"
              >
                Ver el ecosistema
              </motion.a>
            </motion.div>

            {/* Social proof — mini case study card */}
            <motion.div
              variants={fadeIn}
              className="mt-10 pt-8 border-t border-white/10 w-full"
            >
              {/* Label */}
              <div className="flex items-center gap-2 mb-4">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-white/55 text-xs uppercase tracking-widest font-medium">
                  Cliente activo
                </span>
              </div>

              {/* Card */}
              <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 max-w-md">
                {/* Client header */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-white/90 font-heading font-semibold text-sm">MOVE</p>
                    <p className="text-white/50 text-xs mt-0.5">Logística última milla · Chile</p>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent/15 border border-accent/25 text-accent font-semibold">
                    Activo
                  </span>
                </div>

                {/* Quote */}
                <p className="text-white/65 text-xs leading-relaxed mb-4 italic border-l-2 border-accent/30 pl-3">
                  "Pasamos de seguir leads en Excel a un sistema que nos avisa qué campaña falla y qué lead atender hoy."
                </p>

                {/* Metrics */}
                <div className="flex gap-5 pt-3 border-t border-white/8">
                  <div>
                    <p className="text-accent font-heading font-bold text-base">$2.000</p>
                    <p className="text-white/50 text-xs mt-0.5">CLP por lead</p>
                  </div>
                  <div>
                    <p className="text-accent font-heading font-bold text-base">En vivo</p>
                    <p className="text-white/50 text-xs mt-0.5">dashboard de campañas</p>
                  </div>
                  <div>
                    <p className="text-accent font-heading font-bold text-base">24/7</p>
                    <p className="text-white/50 text-xs mt-0.5">monitoreo activo</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Columna derecha — panel visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: PRECISION }}
            className="hidden lg:block"
          >
            <div className="glass-panel rounded-2xl overflow-hidden aspect-[3/4] relative">
              <Image src="/images/eco-nodes.png" alt="" aria-hidden fill priority className="object-cover opacity-90" />
              <div className="absolute inset-0 opacity-50"><HeroBackground /></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
