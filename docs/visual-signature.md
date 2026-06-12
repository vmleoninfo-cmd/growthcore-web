# Visual Signature — GrowthCore

> **Versión:** V1.0
> **Fecha:** 2026-06-12
> **Sistema:** Web Builder Visual Excellence V2

---

## Archetype

**Future Systems**

## Archetype Rationale

GrowthCore es un sistema operativo de negocio — no una agencia tradicional. El arquetipo Future Systems comunica infraestructura inteligente, precisión técnica y crecimiento medible. Evita el estilo aspiracional vacío. El sitio debe sentirse como entrar a un panel de control de alto rendimiento, no a una landing de marketing.

---

## Reference Analysis Summary

Referencias dominantes para GrowthCore: Linear (precisión técnica, dark, motion controlado), Vercel (autoridad técnica, grid limpio, copy directo), Ramp (finanzas/datos, confianza operativa). El diferencial es el verde de crecimiento sobre navy profundo — ninguna referencia tiene exactamente esta combinación. Lo que se evita: fondos degradados genéricos cyan-purple, card grids repetitivos, headlines aspiracionales sin datos.

---

## Visual DNA

| Dimensión | Valor | Razón |
|---|---|---|
| **Primary Shape Language** | Geometric | Logo basado en nodos conectados, líneas precisas |
| **Visual Rhythm** | Balanced | Densidad media — datos visibles sin saturar |
| **Contrast Level** | High | Navy `#0A1022` vs Verde `#22C55E` — contraste extremo intencional |
| **Energy Level** | Dynamic | Crecimiento activo, no contemplativo |
| **Depth Style** | Layered | Superficies `#0F2137` sobre `#0A1022`, cards flotantes |
| **Texture System** | None | Clean tech — sin ruido, sin paper, sin grain |

---

## Palette

| Token | Hex | Uso |
|---|---|---|
| Background | `#0A1022` | Fondo principal (navy profundo) |
| Surface | `#0F2137` | Cards, panels, sections secundarias |
| Surface2 | `#102A43` | Hover states, borders activos |
| Primary | `#22C55E` | Acento de crecimiento — CTAs, badges, highlights |
| Primary Soft | `#4ADE80` | Estados hover del acento |
| Text | `#F8FAFC` | Texto principal sobre dark |
| Muted | `#94A3B8` | Texto secundario, subtítulos |
| Border | `#1E293B` | Separadores, bordes de cards |
| Warning | `#FBBF24` | Alertas, badges de atención |
| Danger | `#EF4444` | Errores, estados críticos |

---

## Typography

| Rol | Fuente | Peso | Uso |
|---|---|---|---|
| **Headlines** | Space Grotesk | 700/600 | H1, H2, H3 — técnico sin ser frío |
| **Body** | DM Sans | 400/500 | Párrafos, labels, UI text |
| **Accent / Data** | Space Grotesk | 500 | Métricas, números, badges |

Fuentes cargadas via `next/font/google` con `display: "swap"`.

---

## Motion Archetype

**Precision**

| Parámetro | Valor |
|---|---|
| Type | Precision |
| Speed | Fast (200–350ms) |
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` — deceleration sharp |
| Scroll Behavior | Elements fade + slide up `y: 20 → 0`, `opacity: 0 → 1` |
| Hover Behavior | Scale sutil `1.0 → 1.02`, border-color transition 150ms |
| Avoid | Bounces, elastic, slow luxury fades, rotaciones decorativas |
| Reduced Motion | `prefers-reduced-motion` desactiva todas las animaciones |

---

## Asset Complexity Level

**Level 2 — Standard**

- Hero background SVG: patrón geométrico de nodos/conexiones (referencia al logo)
- OG image 1200×630: navy + verde, logo centrado, tagline
- Favicon: isotype SVG del logo (ya existe en `brand-growthcore.json`)
- No requiere dividers animados ni assets adicionales por sección

---

## Section Signatures

### Hero Signature
- Layout: Asimétrico — texto izquierda (60%), visual derecha (40%)
- Visual: mockup del dashboard score o animación de métricas en tiempo real
- H1: máximo 6 palabras, problema → resultado
- CTA primario: verde `#22C55E`, texto navy
- CTA secundario: ghost border verde
- Background: patrón SVG de nodos sobre `#0A1022`

### Services Signature
- Layout: grid 2×2 o lista con íconos Lucide
- Cada card: surface `#0F2137`, border `#1E293B`, badge de resultado en verde
- No card grids genéricos con icon + title + text repetido
- Mostrar resultado antes que descripción

### Social Proof / Testimonials Signature
- Caso MOVE con métricas reales (CPL, leads, spend)
- Layout: quote grande + métricas en grid pequeño
- Fuente del quote: DM Sans 500
- Fondo: surface2 `#102A43` para diferenciar de hero

### CTA Signature
- Fondo: contraste — puede usar verde `#22C55E` con texto navy
- Copy: directo, sin "agenda una llamada" genérico
- Garantías visibles: lista con CheckCircle Lucide

### Footer Signature
- Fondo: `#0A1022` (mismo que background)
- Border top: `#1E293B`
- Logo isotype + links + "Built with Claude Web Builder by Tododeia"
- Minimal — sin bloques de copy innecesarios

---

## Interactive Component Recommendation

| Componente | Razón |
|---|---|
| **Animated Stats Counter** | "500+ leads gestionados", "3 días de implementación" — refuerza prueba social con impacto visual |

---

## AI Slop Prevention Notes

- **Evitar:** Hero con degradado cyan-purple, cards con ícono genérico + título + texto × 3, fondo vacío negro sin textura
- **Evitar:** Copy con "revolucionario", "innovador", "de vanguardia", "potenciar"
- **Evitar:** Animaciones de typing efecto en headlines
- **Usar:** Datos reales con números concretos, frases cortas + pausas, asimetría en layouts

---

## Visual Differentiation Strategy

Lo que GrowthCore debe poseer visualmente:
- **Navy profundo + verde eléctrico** — combinación única en el mercado latinoamericano de agencias
- **Estética de panel de control** — el sitio se siente como el producto que vende
- **Copy orientado a datos** — cada claim tiene un número o mecanismo detrás
- **Logo de nodos** — motivo geométrico que puede aparecer como textura de fondo en hero

---

## Visual Quality Score Target

| Criterio | Peso | Target |
|---|---|---|
| Originality | 25pts | ≥22 |
| Consistency | 20pts | ≥18 |
| Legibility | 15pts | ≥13 |
| Conversion | 20pts | ≥18 |
| Branding | 20pts | ≥18 |
| **Total** | **100pts** | **≥89/100** |

Mínimo para entregar: **85/100**. Target GrowthCore: **89+/100**.
