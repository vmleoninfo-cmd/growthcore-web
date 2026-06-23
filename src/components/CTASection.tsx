"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { PRECISION, buttonTap } from "@/lib/motion";

export default function CTASection() {
  const whatsappLink =
    "https://wa.me/56991088138?text=Hola%2C%20quiero%20mi%20diagn%C3%B3stico%20gratuito%20de%20GrowthCore";

  return (
    <section id="cta" className="py-24 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(to right, #22C55E 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, #22C55E, transparent)" }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: PRECISION }}
          className="glass-panel rounded-3xl px-10 py-14"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-6">
            Diagnóstico gratuito
          </span>

          <h2
            className="font-heading font-bold text-white mb-5 leading-[1.1]"
            style={{ fontSize: "var(--text-xl)", fontFamily: "var(--font-heading)" }}
          >
            Quiero saber dónde
            <br />
            <span className="text-accent">pierdo leads.</span>
          </h2>

          <p
            className="text-white/60 mb-10 max-w-lg mx-auto leading-relaxed"
            style={{ fontSize: "var(--text-base)" }}
          >
            Responde 5 preguntas sobre tu negocio. En 24 horas te enviamos un
            diagnóstico con las fugas de dinero, leads o clientes más urgentes —
            y qué hacer con cada una. Sin costo, sin compromiso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={buttonTap}
              className="btn-shimmer card-hover-shadow inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent/90 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Quiero mi diagnóstico gratis
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          <p className="text-white/30 text-sm mt-6">
            5 preguntas · Diagnóstico en 24h · Sin costo
          </p>
        </motion.div>
      </div>
    </section>
  );
}
