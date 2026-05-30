"use client";

import { useState, useEffect, useRef, ChangeEvent, DragEvent, FormEvent } from "react";
import { trackLead } from "../lib/analytics";

// ── Constants ──────────────────────────────────────────────────────────────
const STORAGE_KEY = "smart-ads-onboarding-v2";
const MAKE_WEBHOOK = "https://hook.us2.make.com/n0p1382qkbq3qaqiwhkr1n5g45epuec5";
const CRM_URL = "https://crm.usegrowthcore.com/api/contacts";

// GrowthCore brand colors
const NAVY = "#0A1022";
const GREEN = "#22C55E";

// ── Types ──────────────────────────────────────────────────────────────────
type Logo = { dataUrl: string; name: string; sizeKb: string } | null;

interface FormState {
  brand_name: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  color_primary: string;
  color_secondary: string;
  service_ads: boolean;
  service_crm: boolean;
  service_whatsapp: boolean;
  service_web: boolean;
  fb_ad_account: string;
  fb_budget: string;
  fb_cpl: string;
  fb_goal: string;
  crm_current: string;
  crm_volume: string;
  crm_sources: string;
  wa_number: string;
  wa_api: string;
  wa_queries: string;
  wa_crm_integration: string;
  web_domain_owned: string;
  web_domain_url: string;
  web_type: string;
  web_description: string;
  web_pages: string[];
  accept_terms: boolean;
}

const DEFAULTS: FormState = {
  brand_name: "", contact_name: "", contact_email: "", contact_phone: "",
  color_primary: NAVY, color_secondary: GREEN,
  service_ads: false, service_crm: false, service_whatsapp: false, service_web: false,
  fb_ad_account: "", fb_budget: "", fb_cpl: "", fb_goal: "",
  crm_current: "", crm_volume: "", crm_sources: "",
  wa_number: "", wa_api: "", wa_queries: "", wa_crm_integration: "",
  web_domain_owned: "", web_domain_url: "", web_type: "", web_description: "",
  web_pages: [],
  accept_terms: false,
};

// ── Helpers ────────────────────────────────────────────────────────────────
function formatCLP(val: string): string {
  const digits = val.replace(/[^\d]/g, "");
  if (!digits) return "";
  return "$ " + Number(digits).toLocaleString("es-CL");
}

// ── Style helpers ──────────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: "100%", background: "#fff", border: "1px solid #cfcfd5",
  borderRadius: 6, padding: "10px 12px", fontSize: 13.5, color: "#333",
  fontFamily: "inherit", outline: "none", transition: "border-color 0.15s, box-shadow 0.15s",
  boxSizing: "border-box",
};

const monoStyle: React.CSSProperties = {
  ...inputStyle,
  fontFamily: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace",
  fontSize: 12.5,
};

const labelStyle: React.CSSProperties = {
  fontSize: 12, fontWeight: 600, color: NAVY,
  letterSpacing: "0.02em", display: "flex", alignItems: "center", gap: 6,
};

const hintStyle: React.CSSProperties = {
  fontSize: 11.5, color: "#808080", lineHeight: 1.45, marginTop: -2,
};

// ── Small helpers ──────────────────────────────────────────────────────────
function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label style={labelStyle}>
      {children}
      {required && <span style={{ color: GREEN, fontWeight: 700 }}>*</span>}
    </label>
  );
}

function Hint({ children }: { children: React.ReactNode }) {
  return <p style={hintStyle}>{children}</p>;
}

function SectionHeader({ number, title, sub, accent }: {
  number: string; title: string; sub: string; accent?: boolean;
}) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: accent ? GREEN : NAVY,
          color: "#fff", display: "grid", placeItems: "center",
          fontSize: 14, fontWeight: 700, letterSpacing: "0.02em", flexShrink: 0,
        }}>
          {number}
        </div>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: NAVY, margin: 0 }}>{title}</h2>
      </div>
      <p style={{ fontSize: 13, color: "#808080", margin: "0 0 22px 50px", lineHeight: 1.5 }}>{sub}</p>
    </>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function OnboardingForm() {
  const [form, setForm] = useState<FormState>(DEFAULTS);
  const [logo, setLogo] = useState<Logo>(null);
  const [dragging, setDragging] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
  const [toast, setToast] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);
  const ready = useRef(false);

  // ── Toast ────────────────────────────────────────────────────────────────
  function showToast(msg: string) {
    setToast(msg);
    setToastVisible(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastVisible(false), 2800);
  }

  // ── Load on mount ────────────────────────────────────────────────────────
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        const { __logo, ...formData } = data;
        setForm({ ...DEFAULTS, ...formData });
        if (__logo?.dataUrl) {
          setLogo({ dataUrl: __logo.dataUrl, name: "Logo guardado", sizeKb: "—" });
        }
        setSaveStatus("saved");
      }
    } catch {}
    ready.current = true;
  }, []);

  // ── Auto-save ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!ready.current) return;
    setSaveStatus("saving");
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...form, __logo: logo }));
        setSaveStatus("saved");
      } catch { setSaveStatus("idle"); }
    }, 400);
  }, [form, logo]);

  // ── Field helpers ─────────────────────────────────────────────────────────
  function setField<K extends keyof FormState>(key: K, val: FormState[K]) {
    setForm(prev => ({ ...prev, [key]: val }));
  }

  function handleInput(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setField(name as keyof FormState, value as never);
  }

  function handleCLP(name: keyof FormState) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setField(name, formatCLP(e.target.value) as never);
    };
  }

  function handleColorText(name: keyof FormState) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      let v = e.target.value.trim();
      if (v && v[0] !== "#") v = "#" + v;
      setField(name, v.toUpperCase().slice(0, 7) as never);
    };
  }

  function toggleWebPage(page: string) {
    setForm(prev => {
      const pages = prev.web_pages.includes(page)
        ? prev.web_pages.filter(p => p !== page)
        : [...prev.web_pages, page];
      return { ...prev, web_pages: pages };
    });
  }

  // ── Logo handling ─────────────────────────────────────────────────────────
  function handleLogoFile(file: File) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setLogo({ dataUrl, name: file.name, sizeKb: (file.size / 1024).toFixed(1) });
    };
    reader.readAsDataURL(file);
  }

  function handleLogoDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleLogoFile(file);
  }

  // ── Progress ──────────────────────────────────────────────────────────────
  const required = [form.brand_name, form.contact_name, form.contact_email];
  const filled = required.filter(Boolean).length + (form.accept_terms ? 1 : 0);
  const total = required.length + 1;
  const pct = total ? Math.round((filled / total) * 100) : 0;

  // ── Reset ─────────────────────────────────────────────────────────────────
  function handleReset() {
    if (!confirm("¿Borrar toda la información del formulario? Esta acción no se puede deshacer.")) return;
    localStorage.removeItem(STORAGE_KEY);
    setForm(DEFAULTS);
    setLogo(null);
    setSaveStatus("idle");
    showToast("Formulario limpiado");
  }

  // ── Submit ────────────────────────────────────────────────────────────────
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!form.brand_name || !form.contact_name || !form.contact_email) {
      showToast("Completa los campos obligatorios");
      return;
    }
    if (!form.service_ads && !form.service_crm && !form.service_whatsapp && !form.service_web) {
      showToast("Selecciona al menos un servicio");
      return;
    }
    if (!form.accept_terms) {
      showToast("Debes aceptar los términos para continuar");
      return;
    }

    const selectedServices = [
      form.service_ads && "Smart Ads",
      form.service_crm && "CRM",
      form.service_whatsapp && "WhatsApp Bot",
      form.service_web && "Web Builder",
    ].filter(Boolean).join(", ");

    showToast("Enviando… un momento");

    // Tracking de conversión (Meta Pixel + GA4)
    trackLead({ content_name: "onboarding_form" });

    const payload = { ...form, __logo: logo };

    // POST a Make.com
    fetch(MAKE_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});

    // POST al CRM
    fetch(CRM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.contact_name,
        email: form.contact_email,
        phone: form.contact_phone,
        company: form.brand_name,
        source: "formulario",
        temperature: "warm",
        notes: "Servicios: " + selectedServices,
      }),
    })
      .then(() => showToast("¡Recibido! Te contactamos en menos de 24 h"))
      .catch(() => showToast("¡Recibido! Te contactamos en menos de 24 h"));
  }

  // ── Section divider style ──────────────────────────────────────────────────
  const sectionStyle: React.CSSProperties = {
    padding: "32px 48px 28px",
    borderBottom: "1px solid #e2e2e6",
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "18px 20px",
  };

  const fieldStyle: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 6 };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div style={{
      maxWidth: 720, margin: "0 auto", background: "#fff",
      borderRadius: 8, boxShadow: "0 1px 0 rgba(0,0,0,0.04), 0 24px 56px -20px rgba(15,23,42,0.22)",
      overflow: "hidden", fontFamily: "var(--font-body, 'DM Sans', system-ui, sans-serif)",
    }}>

      {/* ── Header ── */}
      <header style={{ background: NAVY, color: "#fff", padding: "36px 48px 32px" }}>
        {/* GrowthCore logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#22C55E" fillOpacity="0.15"/>
            <circle cx="16" cy="9" r="2.5" fill="#22C55E"/>
            <circle cx="25" cy="16" r="2.5" fill="#22C55E"/>
            <circle cx="16" cy="23" r="2.5" fill="#22C55E"/>
            <circle cx="7" cy="16" r="2.5" fill="#22C55E"/>
            <path d="M16 11.5v9M18.5 9h5M22.5 18.5l-4.5 2.5M9.5 18.5l4.5 2.5M9.5 13.5l4.5-2.5" stroke="#22C55E" strokeWidth="1.2" strokeOpacity="0.5"/>
            <text x="16" y="20" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="13" fill="#22C55E">G</text>
          </svg>
          <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em",
            fontFamily: "var(--font-heading, 'Space Grotesk', sans-serif)", color: "#fff" }}>
            GrowthCore
          </span>
        </div>
        <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.55)", fontWeight: 500, marginBottom: 14 }}>
          Smart Ads System
        </p>
        <h1 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.1, margin: "0 0 10px",
          letterSpacing: "-0.01em", fontFamily: "var(--font-heading, 'Space Grotesk', sans-serif)" }}>
          Activa tus servicios inteligentes
        </h1>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.55 }}>
          Completa este formulario una sola vez. Selecciona los servicios que necesitas
          y te guiamos con la información exacta para cada uno.
        </p>
      </header>

      {/* ── Progress ── */}
      <div style={{ padding: "14px 48px", background: "#efefef",
        borderBottom: "1px solid #e2e2e6", display: "flex",
        alignItems: "center", gap: 14, fontSize: 12, color: "#555560" }}>
        <span>Progreso</span>
        <div style={{ flex: 1, height: 6, background: "#e2e2e6", borderRadius: 3, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${pct}%`, background: NAVY,
            borderRadius: 3, transition: "width 0.25s ease" }} />
        </div>
        <span style={{ fontVariantNumeric: "tabular-nums", color: NAVY, fontWeight: 600 }}>
          {filled} / {total}
        </span>
      </div>

      <form onSubmit={handleSubmit} autoComplete="off">

        {/* ── PASO 1: Información básica ── */}
        <section style={{ ...sectionStyle }}>
          <SectionHeader
            number="01"
            title="Información básica"
            sub="Datos de tu negocio y marca visual."
            accent
          />
          <div style={gridStyle}>

            <div style={fieldStyle}>
              <FieldLabel required>Nombre del negocio</FieldLabel>
              <input style={inputStyle} name="brand_name" value={form.brand_name}
                onChange={handleInput} placeholder="Ej. Move24" />
            </div>

            <div style={fieldStyle}>
              <FieldLabel required>Nombre del contacto</FieldLabel>
              <input style={inputStyle} name="contact_name" value={form.contact_name}
                onChange={handleInput} placeholder="Tu nombre completo" />
            </div>

            <div style={fieldStyle}>
              <FieldLabel required>Email de contacto</FieldLabel>
              <input style={inputStyle} name="contact_email" type="email" value={form.contact_email}
                onChange={handleInput} placeholder="contacto@tumarca.com" />
            </div>

            <div style={fieldStyle}>
              <FieldLabel>Teléfono</FieldLabel>
              <input style={inputStyle} name="contact_phone" type="tel" value={form.contact_phone}
                onChange={handleInput} placeholder="+56 9 1234 5678" />
            </div>

            {/* Logo upload */}
            <div style={{ ...fieldStyle, gridColumn: "1 / -1" }}>
              <FieldLabel>Logo PNG o SVG</FieldLabel>
              <Hint>Preferentemente con fondo transparente. Máximo 5 MB.</Hint>
              {logo ? (
                <div style={{
                  border: `1px solid ${NAVY}`, borderRadius: 8, padding: "14px 18px",
                  display: "flex", alignItems: "center", gap: 14, background: "#fff",
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 6, background: "#efefef",
                    display: "grid", placeItems: "center", overflow: "hidden", flexShrink: 0,
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.dataUrl} alt="logo preview" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{logo.name}</div>
                    <div style={{ fontSize: 11, color: "#808080", marginTop: 2 }}>{logo.sizeKb !== "—" ? `${logo.sizeKb} KB` : "Restaurado"}</div>
                  </div>
                  <button type="button" onClick={() => setLogo(null)} style={{
                    background: "none", border: "1px solid #cfcfd5", color: "#555560",
                    fontSize: 11, fontWeight: 600, padding: "6px 12px", borderRadius: 6,
                    cursor: "pointer", letterSpacing: "0.04em", textTransform: "uppercase",
                  }}>
                    Quitar
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => logoInputRef.current?.click()}
                  onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={handleLogoDrop}
                  style={{
                    border: `1.5px dashed ${dragging ? GREEN : "#cfcfd5"}`,
                    borderRadius: 8, padding: "22px 18px", textAlign: "center",
                    background: dragging ? "#f0fff4" : "#fafafa", cursor: "pointer",
                    transition: "border-color 0.15s, background 0.15s",
                  }}
                >
                  <p style={{ fontSize: 13, color: NAVY, fontWeight: 600, marginBottom: 4 }}>
                    Arrastra el archivo aquí o haz clic para subir
                  </p>
                  <p style={{ fontSize: 11.5, color: "#808080" }}>PNG, SVG o JPG</p>
                  <input
                    ref={logoInputRef}
                    type="file"
                    accept="image/png,image/svg+xml,image/jpeg"
                    style={{ display: "none" }}
                    onChange={(e) => { const f = e.target.files?.[0]; if (f) handleLogoFile(f); }}
                  />
                </div>
              )}
            </div>

            {/* Color pickers */}
            <div style={fieldStyle}>
              <FieldLabel>Color principal (HEX)</FieldLabel>
              <div style={{ display: "flex", alignItems: "stretch", gap: 8 }}>
                <input
                  style={{ ...monoStyle, flex: 1, textTransform: "uppercase" }}
                  name="color_primary" value={form.color_primary}
                  onChange={handleColorText("color_primary")}
                  placeholder="#0F172A" maxLength={7}
                />
                <input type="color" value={form.color_primary.length === 7 ? form.color_primary.toLowerCase() : "#0f172a"}
                  onChange={(e) => setField("color_primary", e.target.value.toUpperCase())}
                  style={{ width: 44, padding: 0, border: "1px solid #cfcfd5", borderRadius: 6, cursor: "pointer" }}
                />
              </div>
            </div>

            <div style={fieldStyle}>
              <FieldLabel>Color secundario (HEX)</FieldLabel>
              <div style={{ display: "flex", alignItems: "stretch", gap: 8 }}>
                <input
                  style={{ ...monoStyle, flex: 1, textTransform: "uppercase" }}
                  name="color_secondary" value={form.color_secondary}
                  onChange={handleColorText("color_secondary")}
                  placeholder="#22C55E" maxLength={7}
                />
                <input type="color" value={form.color_secondary.length === 7 ? form.color_secondary.toLowerCase() : "#22c55e"}
                  onChange={(e) => setField("color_secondary", e.target.value.toUpperCase())}
                  style={{ width: 44, padding: 0, border: "1px solid #cfcfd5", borderRadius: 6, cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── PASO 2: Selección de servicios ── */}
        <section style={sectionStyle}>
          <SectionHeader
            number="02"
            title="Selecciona tus servicios"
            sub="Elige uno o varios. Cada servicio activado desbloquea su sección de configuración."
          />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              { key: "service_ads" as const, emoji: "📊", name: "Smart Ads Dashboard", desc: "Seguimiento y análisis de tus campañas de Meta Ads en tiempo real" },
              { key: "service_crm" as const, emoji: "📁", name: "Smart CRM", desc: "Gestión de leads, pipeline de ventas y seguimiento de clientes" },
              { key: "service_whatsapp" as const, emoji: "🤖", name: "Smart WhatsApp Agent", desc: "Agente de IA disponible 24/7 que responde consultas por WhatsApp" },
              { key: "service_web" as const, emoji: "🌐", name: "Smart Web Builder", desc: "Generador de sitio web profesional conectado a tu marca" },
            ].map(({ key, emoji, name, desc }) => {
              const selected = form[key];
              return (
                <div
                  key={key}
                  onClick={() => setField(key, !selected as never)}
                  style={{
                    border: `2px solid ${selected ? NAVY : "#e2e2e6"}`,
                    borderRadius: 10, padding: "18px 16px", cursor: "pointer",
                    background: selected ? "#f0f0f8" : "#fff",
                    boxShadow: selected ? `0 0 0 3px rgba(15,23,42,0.08)` : "none",
                    transition: "all 0.15s", userSelect: "none", position: "relative",
                  }}
                >
                  {/* Checkbox indicator */}
                  <div style={{
                    position: "absolute", top: 12, right: 12,
                    width: 20, height: 20, borderRadius: 5,
                    border: `2px solid ${selected ? NAVY : "#cfcfd5"}`,
                    background: selected ? NAVY : "#fff",
                    display: "grid", placeItems: "center", transition: "all 0.15s",
                  }}>
                    {selected && (
                      <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M1 3.5L3.5 6L9 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span style={{ fontSize: 26, marginBottom: 10, display: "block" }}>{emoji}</span>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 5 }}>{name}</div>
                  <div style={{ fontSize: 12, color: "#808080", lineHeight: 1.45 }}>{desc}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Smart Ads Dashboard (conditional) ── */}
        {form.service_ads && (
          <section style={{ ...sectionStyle, borderTop: `3px solid ${NAVY}` }}>
            <SectionHeader number="📊" title="Smart Ads Dashboard"
              sub="Datos de tu cuenta publicitaria de Meta y objetivos de campaña." />
            <div style={gridStyle}>
              <div style={{ ...fieldStyle, gridColumn: "1 / -1" }}>
                <FieldLabel>Meta Ad Account ID</FieldLabel>
                <Hint>business.facebook.com → Configuración del negocio → Cuentas publicitarias → número que empieza con act_</Hint>
                <input style={monoStyle} name="fb_ad_account" value={form.fb_ad_account}
                  onChange={handleInput} placeholder="act_1234567890" />
              </div>
              <div style={fieldStyle}>
                <FieldLabel>Presupuesto mensual (CLP)</FieldLabel>
                <input style={monoStyle} name="fb_budget" value={form.fb_budget}
                  onChange={handleCLP("fb_budget")} inputMode="numeric" placeholder="$ 500.000" />
              </div>
              <div style={fieldStyle}>
                <FieldLabel>CPL objetivo (CLP)</FieldLabel>
                <input style={monoStyle} name="fb_cpl" value={form.fb_cpl}
                  onChange={handleCLP("fb_cpl")} inputMode="numeric" placeholder="$ 3.500" />
              </div>
              <div style={{ ...fieldStyle, gridColumn: "1 / -1" }}>
                <FieldLabel>Meta de leads / ventas</FieldLabel>
                <input style={inputStyle} name="fb_goal" value={form.fb_goal}
                  onChange={handleInput} placeholder="Ej. 80 leads / mes" />
              </div>
            </div>
          </section>
        )}

        {/* ── Smart CRM (conditional) ── */}
        {form.service_crm && (
          <section style={{ ...sectionStyle, borderTop: `3px solid ${NAVY}` }}>
            <SectionHeader number="📁" title="Smart CRM"
              sub="Cómo gestionas tus clientes hoy y cuál es tu volumen de trabajo." />
            <div style={gridStyle}>
              <div style={fieldStyle}>
                <FieldLabel>Cómo gestionas clientes hoy</FieldLabel>
                <select style={inputStyle} name="crm_current" value={form.crm_current} onChange={handleInput}>
                  <option value="">Selecciona una opción...</option>
                  <option value="excel">Excel / Planillas</option>
                  <option value="otro_crm">Otro CRM</option>
                  <option value="sin_sistema">No tengo sistema</option>
                  <option value="whatsapp_manual">WhatsApp manual</option>
                </select>
              </div>
              <div style={fieldStyle}>
                <FieldLabel>Volumen de leads por mes</FieldLabel>
                <select style={inputStyle} name="crm_volume" value={form.crm_volume} onChange={handleInput}>
                  <option value="">Selecciona una opción...</option>
                  <option value="menos_50">Menos de 50</option>
                  <option value="50_200">50–200</option>
                  <option value="200_500">200–500</option>
                  <option value="mas_500">Más de 500</option>
                </select>
              </div>
              <div style={{ ...fieldStyle, gridColumn: "1 / -1" }}>
                <FieldLabel>Fuentes principales de leads</FieldLabel>
                <Hint>De dónde vienen tus clientes: redes sociales, referidos, Google, etc.</Hint>
                <textarea style={{ ...inputStyle, resize: "vertical", minHeight: 72 }}
                  name="crm_sources" value={form.crm_sources} onChange={handleInput}
                  placeholder="Ej. Meta Ads, referidos de clientes, Instagram orgánico..." />
              </div>
            </div>
          </section>
        )}

        {/* ── Smart WhatsApp Agent (conditional) ── */}
        {form.service_whatsapp && (
          <section style={{ ...sectionStyle, borderTop: `3px solid ${NAVY}` }}>
            <SectionHeader number="🤖" title="Smart WhatsApp Agent"
              sub="Datos de tu número de WhatsApp y tipo de consultas que recibirás." />
            <div style={gridStyle}>
              <div style={{ ...fieldStyle, gridColumn: "1 / -1" }}>
                <FieldLabel>Número WhatsApp Business</FieldLabel>
                <input style={inputStyle} name="wa_number" type="tel" value={form.wa_number}
                  onChange={handleInput} placeholder="+56 9 1234 5678" />
              </div>
              <div style={{ ...fieldStyle, gridColumn: "1 / -1" }}>
                <FieldLabel>¿Tienes WhatsApp Business API?</FieldLabel>
                <RadioRow name="wa_api" value={form.wa_api}
                  onChange={(v) => setField("wa_api", v)}
                  options={[{ value: "si", label: "Sí" }, { value: "no", label: "No" }, { value: "no_se", label: "No sé" }]} />
              </div>
              <div style={{ ...fieldStyle, gridColumn: "1 / -1" }}>
                <FieldLabel>Principales tipos de consultas</FieldLabel>
                <Hint>Qué preguntan normalmente tus clientes por WhatsApp.</Hint>
                <textarea style={{ ...inputStyle, resize: "vertical", minHeight: 72 }}
                  name="wa_queries" value={form.wa_queries} onChange={handleInput}
                  placeholder="Ej. Precio del servicio, disponibilidad, cómo hacer un pedido..." />
              </div>
              <div style={{ ...fieldStyle, gridColumn: "1 / -1" }}>
                <FieldLabel>Integrar con CRM</FieldLabel>
                <RadioRow name="wa_crm_integration" value={form.wa_crm_integration}
                  onChange={(v) => setField("wa_crm_integration", v)}
                  options={[{ value: "si", label: "Sí, quiero integración" }, { value: "no", label: "No por ahora" }]} />
              </div>
            </div>
          </section>
        )}

        {/* ── Smart Web Builder (conditional) ── */}
        {form.service_web && (
          <section style={{ ...sectionStyle, borderTop: `3px solid ${NAVY}` }}>
            <SectionHeader number="🌐" title="Smart Web Builder"
              sub="Información para construir tu sitio web profesional." />
            <div style={gridStyle}>
              <div style={{ ...fieldStyle, gridColumn: "1 / -1" }}>
                <FieldLabel>¿Tienes dominio propio?</FieldLabel>
                <RadioRow name="web_domain_owned" value={form.web_domain_owned}
                  onChange={(v) => setField("web_domain_owned", v)}
                  options={[{ value: "si", label: "Sí, tengo dominio" }, { value: "no", label: "No, necesito uno" }]} />
              </div>
              <div style={fieldStyle}>
                <FieldLabel>Dominio (si tienes)</FieldLabel>
                <input style={inputStyle} name="web_domain_url" value={form.web_domain_url}
                  onChange={handleInput} placeholder="www.tumarca.com" />
              </div>
              <div style={fieldStyle}>
                <FieldLabel>Tipo de sitio web</FieldLabel>
                <select style={inputStyle} name="web_type" value={form.web_type} onChange={handleInput}>
                  <option value="">Selecciona una opción...</option>
                  <option value="landing">Landing page</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="portfolio">Portafolio</option>
                  <option value="corporativo">Sitio corporativo</option>
                </select>
              </div>
              <div style={{ ...fieldStyle, gridColumn: "1 / -1" }}>
                <FieldLabel>Descripción del negocio</FieldLabel>
                <Hint>Qué hace tu empresa, a quién va dirigida, qué te diferencia.</Hint>
                <textarea style={{ ...inputStyle, resize: "vertical", minHeight: 72 }}
                  name="web_description" value={form.web_description} onChange={handleInput}
                  placeholder="Ej. Empresa de logística de última milla en Santiago, especializada en entregas express..." />
              </div>
              <div style={{ ...fieldStyle, gridColumn: "1 / -1" }}>
                <FieldLabel>Páginas que necesita</FieldLabel>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
                  {["Inicio", "Nosotros", "Servicios", "Blog", "Contacto", "Tienda"].map((page) => {
                    const val = page.toLowerCase();
                    const active = form.web_pages.includes(val);
                    return (
                      <button key={val} type="button" onClick={() => toggleWebPage(val)} style={{
                        display: "flex", alignItems: "center", gap: 6, padding: "7px 14px",
                        border: `1px solid ${active ? NAVY : "#cfcfd5"}`,
                        borderRadius: 6, background: active ? NAVY : "#fff",
                        color: active ? "#fff" : "#555560", fontSize: 13, fontWeight: 500,
                        cursor: "pointer", transition: "all 0.15s",
                      }}>
                        {page}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Terms ── */}
        <div style={{ padding: "28px 48px 24px", background: "#fafafa", borderTop: "1px solid #e2e2e6" }}>
          <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer" }}
            onClick={() => setField("accept_terms", !form.accept_terms)}>
            <div style={{
              width: 20, height: 20, border: `2px solid ${form.accept_terms ? NAVY : "#cfcfd5"}`,
              borderRadius: 5, background: form.accept_terms ? NAVY : "#fff",
              flexShrink: 0, marginTop: 1, display: "grid", placeItems: "center", transition: "all 0.15s",
            }}>
              {form.accept_terms && (
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                  <path d="M1 3.5L3.5 6L9 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span style={{ fontSize: 13, color: "#555560", lineHeight: 1.5 }}>
              Confirmo que la información proporcionada es correcta y autorizo a GrowthCore
              a utilizarla para configurar los servicios contratados.
            </span>
          </label>
        </div>

        {/* ── Footer ── */}
        <div style={{
          padding: "20px 48px 28px", background: "#fafafa", borderTop: "1px solid #e2e2e6",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: 16, flexWrap: "wrap",
        }}>
          <div style={{ fontSize: 11.5, color: "#808080", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: saveStatus === "saved" ? "#2f7d4f" : "#cfcfd5",
              display: "inline-block",
            }} />
            {saveStatus === "saved" ? "Guardado en este navegador" :
             saveStatus === "saving" ? "Guardando..." : "Sin cambios"}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button type="button" onClick={handleReset} style={{
              fontFamily: "inherit", fontSize: 13, fontWeight: 600,
              padding: "11px 18px", borderRadius: 6, border: "1px solid #cfcfd5",
              background: "#fff", color: NAVY, cursor: "pointer", letterSpacing: "0.02em",
              transition: "border-color 0.15s",
            }}>
              Limpiar todo
            </button>
            <button type="submit" style={{
              fontFamily: "inherit", fontSize: 14, fontWeight: 600,
              padding: "13px 28px", borderRadius: 6, border: "none",
              background: GREEN, color: NAVY, cursor: "pointer", letterSpacing: "0.02em",
              transition: "background 0.15s",
            }}>
              Activar mis servicios
            </button>
          </div>
        </div>
      </form>

      {/* ── Toast ── */}
      <div style={{
        position: "fixed", bottom: 28, left: "50%",
        transform: `translateX(-50%) translateY(${toastVisible ? 0 : 20}px)`,
        background: NAVY, color: "#fff", padding: "12px 22px",
        borderRadius: 8, fontSize: 13, fontWeight: 500,
        boxShadow: "0 12px 40px -10px rgba(15,23,42,0.5)",
        opacity: toastVisible ? 1 : 0, pointerEvents: "none",
        transition: "opacity 0.2s, transform 0.2s", zIndex: 100,
      }}>
        {toast}
      </div>
    </div>
  );
}

// ── RadioRow subcomponent ─────────────────────────────────────────────────
function RadioRow({
  name, value, onChange, options,
}: {
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      {options.map((opt) => {
        const checked = value === opt.value;
        return (
          <label key={opt.value} onClick={() => onChange(opt.value)} style={{
            flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
            gap: 8, padding: "9px 14px",
            border: `1px solid ${checked ? NAVY : "#cfcfd5"}`,
            borderRadius: 6, background: checked ? NAVY : "#fff",
            fontSize: 13, color: checked ? "#fff" : "#555560",
            cursor: "pointer", fontWeight: 500, transition: "all 0.15s",
          }}>
            <span style={{
              width: 12, height: 12, border: `1.5px solid ${checked ? "#fff" : "#cfcfd5"}`,
              borderRadius: "50%", flexShrink: 0,
              background: checked ? "#fff" : "transparent",
            }} />
            <input type="radio" name={name} value={opt.value} checked={checked}
              onChange={() => onChange(opt.value)} style={{ display: "none" }} />
            {opt.label}
          </label>
        );
      })}
    </div>
  );
}
