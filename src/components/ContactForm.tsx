"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const services = [
  "Smart Ads System (Meta Ads)",
  "Agente WhatsApp con IA",
  "CRM con IA",
  "Diseño Web",
  "Todo el sistema completo",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    whatsapp: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola GrowthCore 👋\n\n` +
        `*Nombre:* ${form.name}\n` +
        `*Empresa:* ${form.company || "—"}\n` +
        `*WhatsApp:* ${form.whatsapp}\n` +
        `*Me interesa:* ${form.service}\n` +
        (form.message ? `*Mensaje:* ${form.message}` : "")
    );
    window.open(`https://wa.me/56991098138?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4"
            >
              Empieza hoy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-foreground mb-4 leading-[1.15]"
              style={{ fontSize: "var(--text-xl)", fontFamily: "var(--font-heading)" }}
            >
              ¿Listo para que tu negocio{" "}
              <span className="text-accent">trabaje solo?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-muted-foreground leading-relaxed mb-8"
              style={{ fontSize: "var(--text-base)" }}
            >
              Completa el formulario y te contactamos por WhatsApp en menos de
              24 horas. La demo es gratuita y sin compromiso.
            </motion.p>

            {/* Garantías */}
            <ul className="space-y-3">
              {[
                "Demo de 30 min sin costo",
                "Sin permanencia ni contrato largo",
                "Implementación en menos de 3 semanas",
                "Soporte directo con el equipo",
              ].map((g) => (
                <li key={g} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  {g}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3
                  className="font-heading font-semibold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Se abrió WhatsApp con tu información. Te respondemos en menos
                  de 24 horas.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm text-accent font-medium hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Nombre *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="w-full border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Empresa
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Tu empresa (opcional)"
                      className="w-full border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    WhatsApp *
                  </label>
                  <input
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    required
                    placeholder="+56 9 1234 5678"
                    className="w-full border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    ¿Qué te interesa? *
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  >
                    <option value="" disabled>
                      Selecciona un servicio
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Cuéntanos brevemente tu situación actual..."
                    className="w-full border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Solicitar demo gratis
                </button>

                <p className="text-center text-muted-foreground text-xs">
                  Al enviar, se abrirá WhatsApp con tu información. Sin spam.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
