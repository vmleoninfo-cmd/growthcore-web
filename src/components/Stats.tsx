"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "+50%", label: "más leads calificados", sublabel: "en los primeros 60 días" },
  { value: "< 3 sem", label: "de implementación", sublabel: "sin tocar código" },
  { value: "4 en 1", label: "herramientas integradas", sublabel: "un solo sistema" },
  { value: "24/7", label: "automatización activa", sublabel: "mientras tú descansas" },
];

export default function Stats() {
  return (
    <section id="resultados" className="py-20 bg-accent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="font-heading font-bold text-primary mb-1"
                style={{ fontSize: "var(--text-xl)", fontFamily: "var(--font-heading)", fontVariantNumeric: "tabular-nums" }}
              >
                {s.value}
              </div>
              <div className="font-semibold text-primary/80 text-sm mb-0.5">{s.label}</div>
              <div className="text-primary/60 text-xs">{s.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
