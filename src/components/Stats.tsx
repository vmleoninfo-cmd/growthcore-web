"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { PRECISION, staggerContainer, fadeUp } from "@/lib/motion";

const STATS = [
  {
    target: 2000, prefix: "$", suffix: "",
    label: "costo por lead (CLP)",
    context: "MOVE · Meta Ads, en producción",
    trend: "down",
  },
  {
    target: null, display: "En vivo",
    label: "dashboard de campañas",
    context: "Detección semanal de campañas",
    trend: null,
  },
  {
    target: null, display: "24/7",
    label: "monitoreo activo",
    context: "Sin que tú lo estés revisando",
    trend: null,
  },
  {
    target: null, display: "Diario",
    label: "sync de métricas",
    context: "Datos actualizados cada día",
    trend: null,
  },
];

function CounterValue({
  target, prefix, suffix, display, active,
}: {
  target: number | null; prefix: string; suffix: string; display?: string; active: boolean;
}) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active || target === null) return;
    const duration = 1200;
    const startTime = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
      else setDone(true);
    };
    requestAnimationFrame(tick);
  }, [active, target]);

  const text = target !== null ? `${prefix}${count.toLocaleString("es-CL")}${suffix}` : (display ?? "—");

  return (
    <motion.span
      animate={done ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 0.35, ease: PRECISION }}
      style={{ fontVariantNumeric: "tabular-nums", display: "inline-block" }}
    >
      {text}
    </motion.span>
  );
}

function StatCard({ stat, delay }: { stat: typeof STATS[number]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div ref={ref} variants={fadeUp} className="text-center flex flex-col items-center">
      <div
        className="font-heading font-bold mb-1.5 text-accent"
        style={{ fontSize: "var(--text-xl)", fontFamily: "var(--font-heading)" }}
      >
        <CounterValue
          target={stat.target as number | null}
          prefix={stat.prefix ?? ""}
          suffix={stat.suffix ?? ""}
          display={stat.display}
          active={inView}
        />
      </div>

      {stat.trend && (
        <div className="flex items-center justify-center gap-1 mb-1">
          {stat.trend === "up"
            ? <TrendingUp className="w-3.5 h-3.5 text-accent" />
            : <TrendingDown className="w-3.5 h-3.5 text-accent" />}
        </div>
      )}

      <div className="font-semibold text-sm mb-1 text-foreground">{stat.label}</div>
      <div className="text-xs text-muted-foreground leading-relaxed max-w-[140px]">{stat.context}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="resultados" className="py-20 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: PRECISION }}
          className="text-center mb-12"
        >
          <p className="font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-1">
            Resultados verificados
          </p>
          <p className="text-foreground font-heading font-semibold text-sm">
            MOVE — Logística última milla
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} delay={i * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
