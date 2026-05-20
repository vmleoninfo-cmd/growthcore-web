"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
  const whatsappLink =
    "https://wa.me/56900000000?text=Hola%2C%20quiero%20agendar%20una%20demo%20de%20GrowthCore";

  return (
    <section id="contacto" className="py-24 bg-primary relative overflow-hidden">
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
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-6">
            Empieza hoy
          </span>

          <h2
            className="font-heading font-bold text-white mb-6 leading-[1.1]"
            style={{ fontSize: "var(--text-xl)", fontFamily: "var(--font-heading)" }}
          >
            ¿Listo para que tu negocio
            <br />
            <span className="text-accent">trabaje solo?</span>
          </h2>

          <p
            className="text-white/60 mb-10 max-w-lg mx-auto leading-relaxed"
            style={{ fontSize: "var(--text-base)" }}
          >
            Agenda una demo de 30 minutos. Te mostramos exactamente cómo
            funciona el sistema, respondemos tus preguntas y armamos un plan
            personalizado para tu negocio — sin compromiso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent/90 transition-all hover:gap-3 hover:shadow-lg hover:shadow-accent/30"
            >
              <Calendar className="w-5 h-5" />
              Agendar demo gratis
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-white/30 text-sm mt-6">
            Sin tarjeta de crédito · Sin permanencia · Sin complicaciones
          </p>
        </motion.div>
      </div>
    </section>
  );
}
