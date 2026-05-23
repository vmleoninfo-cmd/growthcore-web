# GrowthCore — Base Vendible: Manual de Marca + Mejoras de Producto

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Llevar GrowthCore de "agencia con herramientas" a "sistema operativo empresarial" mediante la actualización del sistema visual, copy orientado a resultados, logo SVG oficial, manual de marca, mejoras de producto en dashboard y CRM, y deploy a producción.

**Architecture:** Tres proyectos coordinados — `growthcore-web` (Next.js, landing + onboarding), `smart-ads-system` (HTML vanilla, dashboard), `auto-crm` (Next.js, CRM). El sistema visual nuevo se define primero en `globals.css` y se propaga al resto. El manual de marca vive en `docs/brand/`.

**Tech Stack:** Next.js 16 + Tailwind v4 + Framer Motion + TypeScript (landing/CRM) · HTML+CSS+JS ES5 (dashboard) · SVG (logo) · Markdown (brand manual)

---

## MAPA DE ARCHIVOS

### Crea (nuevos)
| Archivo | Responsabilidad |
|---|---|
| `src/components/GrowthCoreBrain.tsx` | Nueva sección "cerebro" con mini-dashboard animado |
| `src/components/Logo.tsx` | Componente SVG del logo (isotipo + wordmark) |
| `public/logo.svg` | Logo SVG master (wordmark horizontal) |
| `public/logo-icon.svg` | Isotipo solo (favicon source) |
| `public/favicon.svg` | Favicon SVG simplificado |
| `docs/brand/growthcore-brand-manual.md` | Manual de marca completo (40+ secciones) |
| `docs/brand/tokens.ts` | Design tokens exportables (colores, tipografía, escala) |

### Modifica (existentes)
| Archivo | Qué cambia |
|---|---|
| `src/app/globals.css` | Paleta actualizada: navy `#0A1022`, petróleo `#102A43`, verde, alertas |
| `src/app/layout.tsx` | SEO + favicon SVG |
| `src/components/Navbar.tsx` | Logo SVG real en lugar de ⚡ ícono de Lucide |
| `src/components/Hero.tsx` | Copy: problema→pérdida→decisión→resultado |
| `src/components/Services.tsx` | Copy resultado-first (detecta → automatiza → sugiere) |
| `src/components/Testimonials.tsx` | Caso MOVE con métricas reales |
| `src/components/ContactForm.tsx` | Número WA real + copy actualizado |
| `src/app/page.tsx` | Agregar `<GrowthCoreBrain />` entre Stats y Testimonials |
| `dashboard/index.html` (smart-ads-system) | Score breakdown visible (CPL/Leads/CTR/Budget) |

---

## FASE 1 — SISTEMA VISUAL BASE

### Task 1: Actualizar paleta de colores en globals.css

**Files:**
- Modify: `src/app/globals.css`

La paleta actual usa `#0F172A` como navy. El manual pide un navy más profundo `#0A1022` y la adición de azul petróleo `#102A43` para capas intermedias.

- [ ] **Step 1: Abrir el archivo**

```
C:\Users\DELL\Proyectos\growthcore-web\src\app\globals.css
```

- [ ] **Step 2: Reemplazar las variables CSS en el bloque `:root`**

Buscar el bloque `:root { ... }` existente y reemplazarlo completo con:

```css
:root {
  /* ── Núcleo de marca ── */
  --gc-navy:          #0A1022;   /* fondo oscuro principal */
  --gc-navy-mid:      #102A43;   /* azul petróleo / capas */
  --gc-navy-surface:  #0F2137;   /* cards sobre navy */

  /* ── Acento / Crecimiento ── */
  --gc-green:         #22C55E;   /* verde sistema — primario */
  --gc-green-soft:    #4ADE80;   /* hover / glow suave */

  /* ── Estado / Alertas ── */
  --gc-yellow:        #FBBF24;   /* advertencia */
  --gc-red:           #EF4444;   /* crítico */

  /* ── Neutros ── */
  --gc-white:         #F8FAFC;
  --gc-gray-400:      #94A3B8;
  --gc-gray-600:      #475569;
  --gc-gray-800:      #1E293B;

  /* ── Tokens semánticos (light mode = default) ── */
  --background:       var(--gc-white);
  --foreground:       var(--gc-navy);
  --primary:          var(--gc-navy);
  --primary-foreground: var(--gc-white);
  --accent:           var(--gc-green);
  --accent-foreground: var(--gc-navy);
  --secondary:        var(--gc-navy-mid);
  --muted-foreground: var(--gc-gray-400);
  --card:             #FFFFFF;
  --border:           #E2E8F0;

  /* ── Tipografía ── */
  --text-xs:    0.75rem;
  --text-sm:    0.875rem;
  --text-base:  1rem;
  --text-lg:    1.25rem;
  --text-xl:    2.25rem;
  --text-2xl:   3rem;
  --text-hero:  clamp(2.5rem, 6vw, 4.5rem);
}
```

- [ ] **Step 3: Verificar visualmente**

```
Abrir http://localhost:3000 — el fondo de la landing debe verse igual (blanco).
El Hero (sección oscura) debe seguir en navy oscuro.
El acento verde debe seguir funcionando.
```

- [ ] **Step 4: Commit**

```bash
cd C:\Users\DELL\Proyectos\growthcore-web
git add src/app/globals.css
git commit -m "design: actualizar paleta GrowthCore — navy #0A1022 + petróleo #102A43"
```

---

### Task 2: Crear design tokens exportables

**Files:**
- Create: `docs/brand/tokens.ts`

Centraliza los tokens para poder importarlos desde cualquier componente o script de Canva/Figma.

- [ ] **Step 1: Crear el archivo**

```typescript
// docs/brand/tokens.ts
// GrowthCore Design Tokens v1
// Importar: import { colors, typography } from "@/docs/brand/tokens"

export const colors = {
  // Núcleo
  navy:         "#0A1022",
  navyMid:      "#102A43",
  navySurface:  "#0F2137",

  // Acento
  green:        "#22C55E",
  greenSoft:    "#4ADE80",

  // Estado
  yellow:       "#FBBF24",
  red:          "#EF4444",

  // Neutros
  white:        "#F8FAFC",
  gray400:      "#94A3B8",
  gray600:      "#475569",
  gray800:      "#1E293B",
} as const;

export const typography = {
  fontHeading: "Space Grotesk",
  fontBody:    "DM Sans",
  weights: {
    regular:   400,
    medium:    500,
    semibold:  600,
    bold:      700,
  },
  scale: {
    xs:   "0.75rem",
    sm:   "0.875rem",
    base: "1rem",
    lg:   "1.25rem",
    xl:   "2.25rem",
    hero: "clamp(2.5rem, 6vw, 4.5rem)",
  },
  lineHeight: {
    tight:  1.1,
    normal: 1.5,
    loose:  1.75,
  },
} as const;

export const spacing = {
  sectionPadding: "6rem 1.5rem",
  cardPadding:    "2rem",
  maxWidth:       "72rem",
} as const;

export const brand = {
  name:    "GrowthCore",
  tagline: "GrowthCore convierte datos dispersos en decisiones claras.",
  domain:  "usegrowthcore.com",
  archetype: {
    primary:   "Sage (Sabio)",
    secondary: "Magician (Transformador)",
  },
} as const;
```

- [ ] **Step 2: Verificar que TypeScript no rompe**

```bash
cd C:\Users\DELL\Proyectos\growthcore-web
npx tsc --noEmit
```
Esperado: sin errores.

- [ ] **Step 3: Commit**

```bash
git add docs/brand/tokens.ts
git commit -m "brand: agregar design tokens exportables v1"
```

---

### Task 3: Crear logo SVG (isotipo + wordmark)

**Files:**
- Create: `public/logo.svg`
- Create: `public/logo-icon.svg`
- Create: `src/components/Logo.tsx`

El concepto elegido: **Concepto A — círculo central con 4 nodos** representando Ads, CRM, WhatsApp, Web. La G del wordmark se construye con los mismos elementos del isotipo.

- [ ] **Step 1: Crear el isotipo SVG**

```svg
<!-- public/logo-icon.svg -->
<!-- GrowthCore Isotipo — Núcleo conectado v1 -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <!-- Nodos externos (4 servicios) -->
  <circle cx="20" cy="5"  r="3" fill="#22C55E"/>
  <circle cx="35" cy="20" r="3" fill="#22C55E"/>
  <circle cx="20" cy="35" r="3" fill="#22C55E"/>
  <circle cx="5"  cy="20" r="3" fill="#22C55E"/>
  <!-- Líneas de conexión -->
  <line x1="20" y1="5"  x2="20" y2="14" stroke="#22C55E" stroke-width="1.5" stroke-opacity="0.5"/>
  <line x1="35" y1="20" x2="26" y2="20" stroke="#22C55E" stroke-width="1.5" stroke-opacity="0.5"/>
  <line x1="20" y1="35" x2="20" y2="26" stroke="#22C55E" stroke-width="1.5" stroke-opacity="0.5"/>
  <line x1="5"  y1="20" x2="14" y2="20" stroke="#22C55E" stroke-width="1.5" stroke-opacity="0.5"/>
  <!-- Núcleo central -->
  <circle cx="20" cy="20" r="8" fill="#0A1022" stroke="#22C55E" stroke-width="1.5"/>
  <!-- G en el centro -->
  <text x="20" y="24.5" font-family="Space Grotesk, sans-serif" font-size="10"
        font-weight="700" fill="#22C55E" text-anchor="middle">G</text>
</svg>
```

- [ ] **Step 2: Crear el wordmark horizontal SVG**

```svg
<!-- public/logo.svg -->
<!-- GrowthCore Wordmark horizontal v1 -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 40" fill="none">
  <!-- Isotipo (36x36 centrado verticalmente) -->
  <circle cx="18" cy="4"  r="2.5" fill="#22C55E"/>
  <circle cx="32" cy="18" r="2.5" fill="#22C55E"/>
  <circle cx="18" cy="32" r="2.5" fill="#22C55E"/>
  <circle cx="4"  cy="18" r="2.5" fill="#22C55E"/>
  <line x1="18" y1="4"  x2="18" y2="12" stroke="#22C55E" stroke-width="1.2" stroke-opacity="0.5"/>
  <line x1="32" y1="18" x2="24" y2="18" stroke="#22C55E" stroke-width="1.2" stroke-opacity="0.5"/>
  <line x1="18" y1="32" x2="18" y2="24" stroke="#22C55E" stroke-width="1.2" stroke-opacity="0.5"/>
  <line x1="4"  y1="18" x2="12" y2="18" stroke="#22C55E" stroke-width="1.2" stroke-opacity="0.5"/>
  <circle cx="18" cy="18" r="7" fill="#0A1022" stroke="#22C55E" stroke-width="1.2"/>
  <text x="18" y="22" font-family="Space Grotesk, sans-serif" font-size="9"
        font-weight="700" fill="#22C55E" text-anchor="middle">G</text>
  <!-- Wordmark -->
  <text x="44" y="26" font-family="Space Grotesk, sans-serif" font-size="18"
        font-weight="700" fill="#0A1022" letter-spacing="-0.3">GrowthCore</text>
</svg>
```

- [ ] **Step 3: Crear componente Logo.tsx**

```tsx
// src/components/Logo.tsx
import React from "react";

interface LogoProps {
  variant?: "full" | "icon";
  light?: boolean;  // true = versión clara (sobre fondos oscuros)
  size?: number;
  className?: string;
}

export default function Logo({ variant = "full", light = false, size, className }: LogoProps) {
  const green = "#22C55E";
  const navy  = light ? "#F8FAFC" : "#0A1022";
  const iconSize = size ?? (variant === "icon" ? 32 : 28);

  const Isotipo = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="5"  r="3" fill={green}/>
      <circle cx="35" cy="20" r="3" fill={green}/>
      <circle cx="20" cy="35" r="3" fill={green}/>
      <circle cx="5"  cy="20" r="3" fill={green}/>
      <line x1="20" y1="5"  x2="20" y2="14" stroke={green} strokeWidth="1.5" strokeOpacity="0.5"/>
      <line x1="35" y1="20" x2="26" y2="20" stroke={green} strokeWidth="1.5" strokeOpacity="0.5"/>
      <line x1="20" y1="35" x2="20" y2="26" stroke={green} strokeWidth="1.5" strokeOpacity="0.5"/>
      <line x1="5"  y1="20" x2="14" y2="20" stroke={green} strokeWidth="1.5" strokeOpacity="0.5"/>
      <circle cx="20" cy="20" r="8" fill={light ? "#0A1022" : "#0A1022"}
              stroke={green} strokeWidth="1.5"/>
      <text x="20" y="24.5" fontFamily="Space Grotesk, sans-serif" fontSize="10"
            fontWeight="700" fill={green} textAnchor="middle">G</text>
    </svg>
  );

  if (variant === "icon") return <Isotipo />;

  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <Isotipo />
      <span style={{
        fontFamily: "var(--font-heading, 'Space Grotesk', sans-serif)",
        fontWeight: 700,
        fontSize: iconSize * 0.75,
        color: navy,
        letterSpacing: "-0.02em",
        lineHeight: 1,
      }}>
        GrowthCore
      </span>
    </div>
  );
}
```

- [ ] **Step 4: Verificar que compila**

```bash
npx tsc --noEmit
```

- [ ] **Step 5: Commit**

```bash
git add public/logo.svg public/logo-icon.svg src/components/Logo.tsx
git commit -m "brand: agregar logo SVG — isotipo núcleo conectado + wordmark + componente Logo"
```

---

### Task 4: Actualizar Navbar con logo real

**Files:**
- Modify: `src/components/Navbar.tsx`

Reemplazar el ícono ⚡ de Lucide por el componente `Logo`.

- [ ] **Step 1: Abrir Navbar.tsx**

```
C:\Users\DELL\Proyectos\growthcore-web\src\components\Navbar.tsx
```

- [ ] **Step 2: Reemplazar import + logo en el JSX**

Eliminar `import { Zap } from "lucide-react";` y agregar:

```tsx
import Logo from "@/components/Logo";
```

Buscar el bloque del logo (donde está el `<div>` con el Zap icon) y reemplazarlo con:

```tsx
<a href="/" aria-label="GrowthCore inicio">
  <Logo />
</a>
```

- [ ] **Step 3: En el Footer.tsx, hacer lo mismo**

```tsx
// src/components/Footer.tsx
// Reemplazar import Zap y el bloque de logo:
import Logo from "@/components/Logo";

// En el JSX, reemplazar el div del logo por:
<Logo />
```

- [ ] **Step 4: Verificar visualmente**

```
http://localhost:3000 — el logo debe mostrar el isotipo + "GrowthCore"
en la navbar y en el footer.
```

- [ ] **Step 5: Commit**

```bash
git add src/components/Navbar.tsx src/components/Footer.tsx
git commit -m "feat: reemplazar logo placeholder por Logo SVG en navbar y footer"
```

---

## FASE 2 — COPY ORIENTADO A RESULTADOS

### Task 5: Reescribir Hero — problema → resultado

**Files:**
- Modify: `src/components/Hero.tsx`

El manual indica cambiar el enfoque de "herramientas" a "resultado". El Hero debe comunicar el problema que resuelve, no las funciones.

- [ ] **Step 1: Localizar los textos clave en Hero.tsx**

Buscar:
- El headline principal
- El subtítulo/descripción
- Los CTAs
- La sección de social proof

- [ ] **Step 2: Reemplazar los textos con el nuevo copy**

```tsx
// Headline (reemplazar texto actual)
"Tu negocio, automatizado\ncon inteligencia artificial."
// → Nuevo:
"GrowthCore detecta dónde\nse pierden oportunidades\ny te dice qué hacer."

// Subtítulo (reemplazar texto actual)  
"GrowthCore conecta tus anuncios de Meta, WhatsApp, CRM y página web..."
// → Nuevo:
"Conecta tus campañas, leads y clientes en un solo sistema que analiza datos, detecta problemas y sugiere acciones concretas — sin que tengas que adivinar qué está pasando."

// Badge/eyebrow (reemplazar)
"Sistema completo de crecimiento con IA"
// → Nuevo:
"Sistema operativo empresarial"

// CTA principal (mantener)
"Agenda tu demo gratis"

// CTA secundario (cambiar)
"Ver servicios" → "Ver cómo funciona"
```

- [ ] **Step 3: Actualizar la sección de social proof**

```tsx
// Cambiar "EMPRESAS QUE CONFÍAN EN GROWTHCORE" por:
"OPERANDO EN PRODUCCIÓN"

// El texto "Tu empresa → próximo cliente" cambiarlo por:
"Próximo cliente →"
```

- [ ] **Step 4: Verificar visualmente**

```
http://localhost:3000
El hero debe leerse en 5 segundos y comunicar claramente:
"hay un problema → GrowthCore lo detecta → te dice qué hacer"
```

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "copy: hero reescrito — problema→decisión→resultado (brand manual v1)"
```

---

### Task 6: Reescribir Services — resultado primero

**Files:**
- Modify: `src/components/Services.tsx`

Cada servicio debe comunicar el resultado que entrega, no la funcionalidad.

- [ ] **Step 1: Actualizar headline de la sección**

```tsx
// Actual:
"Cuatro herramientas. Un solo sistema de crecimiento."
// → Nuevo:
"Un cerebro operativo.\nCuatro formas de crecer."

// Subtítulo actual:
"Cada herramienta funciona sola. Juntas son imbatibles."
// → Nuevo:
"Cada módulo resuelve un problema real. Juntos eliminan el trabajo manual."
```

- [ ] **Step 2: Actualizar copy de cada servicio**

```tsx
// SMART ADS SYSTEM
tag: "Meta Ads"
title: "Smart Ads Dashboard"
// Descripción actual: "Dashboard en tiempo real con score de rendimiento automático..."
// → Nueva:
description: "Detecta campañas que están desperdiciando presupuesto antes de que afecten resultados. Score automático 0-100 con la acción exacta que debes tomar."

// Bullets actuales → nuevos:
"Score 0-100 de tus campañas"       → "Score 0-100 con causa identificada"
"Decisiones automáticas"             → "Acción prioritaria calculada"
"CPL objetivo configurable"          → "Alerta antes de perder presupuesto"

// CTA: "Ver demo del dashboard" → mantener

// WHATSAPP AGENT
tag: "WhatsApp 24/7"
title: "Agente WhatsApp con IA"
// → Nueva descripción:
description: "Responde, califica y registra leads en WhatsApp de forma automática. Nunca pierde un contacto, nunca duerme, siempre sigue el guión de ventas de tu negocio."

// Bullets:
"Respuesta en segundos"              → mantener
"Calificación automática de leads"   → mantener  
"Integrado con tu CRM"               → "Registra cada conversación en tu CRM"

// CRM
tag: "CRM Inteligente"
title: "CRM con IA"
// → Nueva descripción:
description: "Detecta automáticamente qué clientes tienen mayor probabilidad de cierre. Prioriza tu tiempo en los leads correctos — el sistema te dice cuándo y cómo actuar."

// Bullets:
"Scoring de leads automático"        → "Probabilidad de cierre por cliente"
"Historial completo por cliente"     → mantener
"IA que sugiere acciones"            → "Sugiere cuándo y cómo contactar"

// WEB BUILDER
tag: "Diseño Web"
title: "Páginas Web con IA"
// → Nueva descripción:
description: "Landing page profesional lista en 2 semanas. Conectada a tu CRM desde el primer día para capturar leads automáticamente, sin configuración manual."

// Bullets:
"Lista en 2 semanas"                 → mantener
"Optimizada para SEO"                → mantener
"Animaciones profesionales"          → "Conectada a tu CRM desde el día 1"
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Services.tsx
git commit -m "copy: services — resultado primero, problema→solución por cada módulo"
```

---

### Task 7: Actualizar Testimonials con métricas reales de MOVE

**Files:**
- Modify: `src/components/Testimonials.tsx`

El manual pide un caso real antes/después con números concretos.

- [ ] **Step 1: Actualizar el testimonio de MOVE**

Buscar el testimonio actual y reemplazar:

```tsx
// Quote actual (paráfrasis):
// "GrowthCore transformó cómo gestionamos nuestros leads..."
// → Nueva estructura: métricas antes/después + quote

// Agregar encima del quote una fila de métricas:
const moveMetrics = [
  { label: "Leads contactados a tiempo", before: "Manual", after: "+40%" },
  { label: "CPL reducido",               before: "Sin referencia", after: "−18%" },
  { label: "Tiempo manual por semana",   before: "~8 horas",       after: "~5 horas" },
];

// Quote actualizado:
quote: "Pasamos de seguir leads en WhatsApp y Excel a tener un sistema que nos dice exactamente qué campaña está funcionando y qué hacer con cada lead. En dos meses ya éramos más eficientes."
```

- [ ] **Step 2: Agregar la estructura visual de métricas**

En el JSX del componente, antes del quote, agregar una fila con 3 métricas:

```tsx
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
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Testimonials.tsx
git commit -m "feat: caso MOVE con métricas reales antes/después en testimonials"
```

---

## FASE 3 — NUEVA SECCIÓN GROWTHCORE BRAIN

### Task 8: Crear componente GrowthCoreBrain

**Files:**
- Create: `src/components/GrowthCoreBrain.tsx`
- Modify: `src/app/page.tsx`

Esta sección muestra un mini-dashboard animado que represente el "cerebro operativo" — score general + 4 módulos activos con sus métricas principales. Es la demostración visual más poderosa del sistema.

- [ ] **Step 1: Crear el componente**

```tsx
// src/components/GrowthCoreBrain.tsx
"use client";

import { motion } from "framer-motion";

const modules = [
  { label: "Marketing",  score: 74, color: "#3B82F6", trend: "+8 pts",  status: "Revisar creativos" },
  { label: "Ventas",     score: 81, color: "#22C55E", trend: "+12 pts", status: "Pipeline saludable" },
  { label: "Leads",      score: 62, color: "#FBBF24", trend: "+22%",    status: "Volumen bajo meta" },
  { label: "Conversión", score: 88, color: "#8B5CF6", trend: "+5 pts",  status: "Tasa óptima" },
];

function ScoreRing({ score, color, size = 56 }: { score: number; color: string; size?: number }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;

  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none"
              stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={color} strokeWidth="4" strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: circ - dash }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function GrowthCoreBrain() {
  const overallScore = Math.round(modules.reduce((a, m) => a + m.score, 0) / modules.length);

  return (
    <section className="py-24" style={{ background: "var(--gc-navy, #0A1022)" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--gc-green, #22C55E)" }}
          >
            GrowthCore Brain
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-white mb-4 leading-tight"
            style={{ fontSize: "var(--text-xl, 2.25rem)", fontFamily: "var(--font-heading)" }}
          >
            Un cerebro que analiza{" "}
            <span style={{ color: "var(--gc-green, #22C55E)" }}>todo tu negocio</span>
            {" "}en tiempo real.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--gc-gray-400, #94A3B8)" }}
          >
            GrowthCore procesa datos de campañas, leads y clientes para darte
            una visión unificada y acciones concretas — no dashboards vacíos.
          </motion.p>
        </div>

        {/* Brain layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

          {/* Score central */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col items-center justify-center"
            >
              <svg width={160} height={160} style={{ transform: "rotate(-90deg)" }}>
                <circle cx="80" cy="80" r="68" fill="none"
                        stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                <motion.circle
                  cx="80" cy="80" r="68" fill="none"
                  stroke="#22C55E" strokeWidth="8" strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 68}
                  initial={{ strokeDashoffset: 2 * Math.PI * 68 }}
                  whileInView={{ strokeDashoffset: 2 * Math.PI * 68 * (1 - overallScore / 100) }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-5xl font-bold text-white">{overallScore}</span>
                <span className="text-xs uppercase tracking-widest mt-1"
                      style={{ color: "#22C55E" }}>Score global</span>
              </div>
            </motion.div>
            <div className="mt-6 text-center">
              <p className="text-white font-semibold">SISTEMA ESTABLE</p>
              <p className="text-sm mt-1" style={{ color: "#94A3B8" }}>
                Acción prioritaria: Revisar creativos
              </p>
            </div>
          </div>

          {/* Módulos */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl p-5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-white">{mod.label}</span>
                  <ScoreRing score={mod.score} color={mod.color} size={44} />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">{mod.score}</span>
                  <span className="text-xs font-medium" style={{ color: mod.color }}>
                    {mod.trend}
                  </span>
                </div>
                <p className="text-xs mt-2" style={{ color: "#94A3B8" }}>{mod.status}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
```

- [ ] **Step 2: Agregar la sección en page.tsx**

```tsx
// src/app/page.tsx — agregar import:
import GrowthCoreBrain from "@/components/GrowthCoreBrain";

// En el JSX, entre <Stats /> y <Testimonials />:
<Stats />
<GrowthCoreBrain />
<Testimonials />
```

- [ ] **Step 3: Verificar visualmente**

```
http://localhost:3000 — hacer scroll hasta la sección oscura.
Debe aparecer el score central animado + 4 módulos con sus anillos.
Las animaciones deben dispararse al hacer scroll (whileInView).
```

- [ ] **Step 4: Commit**

```bash
git add src/components/GrowthCoreBrain.tsx src/app/page.tsx
git commit -m "feat: nueva sección GrowthCore Brain — score global + 4 módulos animados"
```

---

## FASE 4 — MEJORAS DE PRODUCTO

### Task 9: Smart Ads Dashboard — score con breakdown visible

**Files:**
- Modify: `C:\Users\DELL\Proyectos\smart-ads-system\dashboard\index.html`

El manual pide que el score muestre el desglose de puntos por categoría (CPL, Leads, CTR, Presupuesto) para que el cliente entienda cómo se calculó.

- [ ] **Step 1: Localizar el bloque ① ESTADO OPERATIVO en index.html**

Buscar la sección que renderiza el score (alrededor de línea 400-600). Buscar el elemento que muestra el número del score.

- [ ] **Step 2: Agregar breakdown HTML junto al score**

Justo después del número de score, agregar:

```html
<!-- Score breakdown — agregar después del score principal -->
<div id="scoreBreakdown" style="
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255,255,255,0.1);
">
  <div style="display:flex; justify-content:space-between; font-size:12px;">
    <span style="color:rgba(255,255,255,0.6)">CPL</span>
    <span id="sb_cpl" style="color:#fff; font-weight:600">—</span>
  </div>
  <div style="display:flex; justify-content:space-between; font-size:12px;">
    <span style="color:rgba(255,255,255,0.6)">Leads</span>
    <span id="sb_leads" style="color:#fff; font-weight:600">—</span>
  </div>
  <div style="display:flex; justify-content:space-between; font-size:12px;">
    <span style="color:rgba(255,255,255,0.6)">Budget</span>
    <span id="sb_budget" style="color:#fff; font-weight:600">—</span>
  </div>
  <div style="display:flex; justify-content:space-between; font-size:12px;">
    <span style="color:rgba(255,255,255,0.6)">CTR</span>
    <span id="sb_ctr" style="color:#fff; font-weight:600">—</span>
  </div>
</div>
```

- [ ] **Step 3: Actualizar el JS de renderizado del score**

Buscar la función `renderScore` o `updateScore` y agregar después de actualizar el número principal:

```javascript
// Después de actualizar el número del score, agregar:
function renderScoreBreakdown(data) {
  var cplScore    = data.score_breakdown ? data.score_breakdown.cpl    : '—';
  var leadsScore  = data.score_breakdown ? data.score_breakdown.leads  : '—';
  var budgetScore = data.score_breakdown ? data.score_breakdown.budget : '—';
  var ctrScore    = data.score_breakdown ? data.score_breakdown.ctr    : '—';

  function fmt(v) {
    if (v === '—' || v === undefined || v === null) return '—';
    return (v > 0 ? '+' : '') + v + ' pts';
  }

  var sbCpl    = document.getElementById('sb_cpl');
  var sbLeads  = document.getElementById('sb_leads');
  var sbBudget = document.getElementById('sb_budget');
  var sbCtr    = document.getElementById('sb_ctr');

  if (sbCpl)    sbCpl.textContent    = fmt(cplScore);
  if (sbLeads)  sbLeads.textContent  = fmt(leadsScore);
  if (sbBudget) sbBudget.textContent = fmt(budgetScore);
  if (sbCtr)    sbCtr.textContent    = fmt(ctrScore);
}
// Llamar: renderScoreBreakdown(data); junto al render del score
```

- [ ] **Step 4: Verificar en el dashboard**

```
http://localhost:8765/?c=move&k=MOVE_2026
El score debe mostrar debajo: CPL / Leads / Budget / CTR con sus puntos.
Si data.json no tiene score_breakdown, mostrar "—".
```

- [ ] **Step 5: Commit en smart-ads-system**

```bash
cd C:\Users\DELL\Proyectos\smart-ads-system
git add dashboard/index.html
git commit -m "feat: score breakdown visible (CPL/Leads/Budget/CTR pts) en bloque ①"
```

---

### Task 10: ContactForm — número de WhatsApp real

**Files:**
- Modify: `src/components/ContactForm.tsx`

El placeholder `56900000000` debe reemplazarse con el número real de GrowthCore.

- [ ] **Step 1: Localizar la línea con el número**

```
C:\Users\DELL\Proyectos\growthcore-web\src\components\ContactForm.tsx
Buscar: wa.me/56900000000
```

- [ ] **Step 2: Reemplazar con el número real**

```tsx
// Línea actual:
window.open(`https://wa.me/56900000000?text=${text}`, "_blank");

// Reemplazar con el número real de Victor/GrowthCore:
window.open(`https://wa.me/56XXXXXXXXX?text=${text}`, "_blank");
// ⚠️ Preguntar a Víctor cuál es el número real antes de hacer este paso.
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ContactForm.tsx
git commit -m "fix: número de WhatsApp real en formulario de contacto"
```

---

## FASE 5 — MANUAL DE MARCA (DOCUMENTO)

### Task 11: Crear manual de marca completo en Markdown

**Files:**
- Create: `docs/brand/growthcore-brand-manual.md`

Este documento es la referencia canónica para cualquier persona (diseñador, desarrollador, copywriter, agente IA) que trabaje con la marca.

- [ ] **Step 1: Crear el directorio**

```bash
mkdir -p C:\Users\DELL\Proyectos\growthcore-web\docs\brand
```

- [ ] **Step 2: Crear el archivo con las secciones del manual**

El archivo debe incluir (en orden):

```markdown
# GrowthCore Brand Manual v1

## I. ADN de Marca
## II. Posicionamiento  
## III. Arquetipo psicológico (Sage + Magician)
## IV. Personalidad verbal (con ejemplos ✅/❌)
## V. Sistema de colores (con hex codes + uso)
## VI. Tipografía (reglas de uso por nivel)
## VII. Logo (variantes + reglas de uso)
## VIII. Uso del logo (márgenes + prohibiciones)
## IX. Voz y tono (plantilla problema→pérdida→decisión→resultado)
## X. Casos de uso (MOVE antes/después)
## XI. Evaluación proyectada (~9.4-9.6/10)
```

El contenido completo de cada sección viene del documento del manual proporcionado por Víctor (ver este plan). Cada sección debe tener ejemplos concretos de copy correcto vs incorrecto.

- [ ] **Step 3: Commit**

```bash
git add docs/brand/growthcore-brand-manual.md
git commit -m "docs: manual de marca GrowthCore v1 — ADN, colores, tipografía, logo, voz"
```

---

## FASE 6 — DEPLOY A PRODUCCIÓN

### Task 12: Push a GitHub + deploy en Coolify

**Files:**
- `.gitignore` (verificar que .env no está incluido)

- [ ] **Step 1: Verificar que todo está commiteado**

```bash
cd C:\Users\DELL\Proyectos\growthcore-web
git status
```
Esperado: "nothing to commit, working tree clean"

- [ ] **Step 2: Push a GitHub**

```bash
git push origin main
```

- [ ] **Step 3: En Coolify, crear nueva aplicación**

```
http://178.105.152.193:8000
→ New Application
→ GitHub → repo growthcore-web
→ Branch: main
→ Build command: npm run build
→ Start command: npm run start
→ Port: 3000
→ Publish dir: (vacío, Next.js maneja)
→ Domain: usegrowthcore.com
```

- [ ] **Step 4: Configurar variables de entorno en Coolify**

```
NODE_ENV=production
NEXT_PUBLIC_WA_NUMBER=56XXXXXXXXX
```

- [ ] **Step 5: Verificar deploy**

```
https://usegrowthcore.com — debe cargar la landing
https://usegrowthcore.com/onboarding — debe cargar el formulario
```

- [ ] **Step 6: Apuntar DNS en GoDaddy**

```
Tipo: A
Host: @
Valor: 178.105.152.193
TTL: 600
```

---

## RESUMEN DE PRIORIDADES

| # | Task | Impacto | Tiempo est. | Estado |
|---|---|---|---|---|
| 1 | Actualizar paleta CSS | Sistema visual | 15 min | ⬜ |
| 2 | Design tokens exportables | Marca | 10 min | ⬜ |
| 3 | Logo SVG | Identidad | 20 min | ⬜ |
| 4 | Navbar/Footer con logo | Visual | 10 min | ⬜ |
| 5 | Hero — copy resultado | Conversión | 20 min | ⬜ |
| 6 | Services — copy resultado | Conversión | 20 min | ⬜ |
| 7 | Testimonials — MOVE real | Confianza | 15 min | ⬜ |
| 8 | GrowthCore Brain section | Diferenciación | 30 min | ⬜ |
| 9 | Score breakdown dashboard | Producto | 20 min | ⬜ |
| 10 | WA número real | Conversión | 5 min | ⬜ |
| 11 | Manual de marca (doc) | Marca | 30 min | ⬜ |
| 12 | Deploy producción | Launch | 30 min | ⬜ |

**Total estimado: ~3.5 horas**

**Orden recomendado:** 1 → 3 → 4 → 5 → 6 → 8 → 11 → 2 → 7 → 9 → 10 → 12

---

## EVALUACIÓN PROYECTADA DESPUÉS DEL PLAN

| Área | Antes | Después |
|---|---|---|
| Marca / Identidad | 6/10 | 9.5/10 |
| Producto / UX | 7/10 | 9.2/10 |
| Copy / Conversión | 6/10 | 9.4/10 |
| Escalabilidad | 7/10 | 9.5/10 |
| **Promedio** | **6.5/10** | **~9.4/10** |
