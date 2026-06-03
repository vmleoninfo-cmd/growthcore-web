# CLAUDE.md — GrowthCore Web

> Sitio web principal de GrowthCore (la agencia/producto de Víctor).
> URL: https://usegrowthcore.com
> Deploy: Coolify en VPS Hetzner (178.105.152.193)

---

## 🎯 Qué es GrowthCore

**GrowthCore** es la marca de agencia de Víctor. Vende el **Smart Ads System** como servicio llave en mano a negocios que corren Meta Ads. El sitio web es la landing de ventas y el punto de entrada de leads.

### Propuesta de valor
- Tracking profesional (Meta Pixel + CAPI + GA4)
- Dashboard de métricas en tiempo real (white-label por cliente)
- CRM propio para gestión de leads
- Bot WhatsApp para atención automática
- Todo implementado en 2-3 días por cliente

### Precio referencia
- Setup: $450.000 CLP
- Mantenimiento: $90.000 CLP/mes

---

## 🛠️ Stack técnico

| Capa | Herramienta |
|---|---|
| Framework | Next.js 15 (App Router) |
| Estilos | Tailwind CSS v4 |
| Componentes | shadcn/ui |
| Lenguaje | TypeScript (strict) |
| Deploy | Docker → Coolify |
| Dominio | usegrowthcore.com (Cloudflare) |

---

## 🚀 Deploy en producción

### URLs
- **Web:** https://usegrowthcore.com
- **CRM vinculado:** https://crm.usegrowthcore.com

### Infraestructura
| Item | Valor |
|---|---|
| VPS | 178.105.152.193 (Hetzner) |
| Panel | Coolify → 178.105.152.193:8000 |
| Coolify login | vmleoninfo@gmail.com / GrowthCore2026! |
| SSH key | `C:\Users\DELL\.ssh\growthcore` |
| SSH | `ssh -i ~/.ssh/growthcore root@178.105.152.193` |
| Docker image | generado por Coolify desde GitHub |

### GitHub
- **Repo:** github.com/victor/growthcore-web (o similar)
- **Branch:** main → auto-deploy en Coolify al hacer push

### Comandos locales
```bash
npm run dev      # http://localhost:3000
npm run build    # Build producción
npm run lint     # ESLint
```

---

## 🎨 Sistema de marca GrowthCore

### Paleta de colores (globals.css)
- **Primario:** Azul eléctrico GrowthCore (#0EA5E9 aprox)
- **Fondo:** Dark (#09090B)
- **Texto:** Zinc-100/200

### Archivos de brand
- `docs/brand/growthcore-brand-manual.md` — manual completo de marca
- `docs/brand/tokens.ts` — design tokens exportables (TypeScript)
- `src/app/globals.css` — variables CSS con paleta GrowthCore

### Logo
- Componente: `src/components/ui/Logo.tsx`
- SVG: Concepto B (G con nodos de red) — simboliza conexiones/datos
- Usado en: Navbar, Footer

---

## 📄 Secciones del sitio (implementadas)

| Sección | Copy principal |
|---|---|
| **Hero** | Problema → resultado (no features primero) |
| **Services** | Resultado primero, luego cómo |
| **Testimonials** | Caso MOVE con métricas reales (CPL, leads, spend) |
| **GrowthCore Brain** | Sección diferenciadora (IA + automatización) |
| **Smart Ads Dashboard** | Score breakdown visible, demo visual |
| **Contact / CTA** | Formulario → webhook CRM + WhatsApp |
| **Onboarding** | Formulario de onboarding → webhook CRM |

---

## 📬 Captación de leads

### ContactForm (`src/components/ContactForm.tsx`)
- Al enviar: POST simultáneo a `/api/leads` (→ CRM webhook) + abre WhatsApp
- Endpoint destino: `POST https://crm.usegrowthcore.com/api/webhook`
- Body: `{ name, email, phone, source: "growthcore_web", message }`

### OnboardingForm (`src/components/OnboardingForm.tsx`)
- Mismo flujo que ContactForm
- Brand tokens de GrowthCore aplicados
- Source: `"growthcore_onboarding"`

### Flujo completo de un lead
```
Visitante → ContactForm → 
  ├─ POST /api/webhook CRM → lead creado en crm.usegrowthcore.com
  └─ WhatsApp abierto con mensaje pre-cargado
```

---

## 🔌 Integraciones

| Integración | Estado |
|---|---|
| CRM (auto-crm) | ✅ conectado vía webhook |
| Make.com Lead Onboarding | ✅ activo (ID: 5088464) |
| WhatsApp CTA | ✅ funcionando |
| Meta Pixel | ✅ cableado (env `NEXT_PUBLIC_META_PIXEL_ID`) — pega el ID y deploy |
| GA4 | ✅ cableado (env `NEXT_PUBLIC_GA4_ID`) — pega el ID y deploy |

### Activos de Meta — GrowthCore (creados 2026-06-01)
| Activo | Valor |
|---|---|
| **Business portfolio** | GrowthCore — business_id `1317921280299273` (independiente de MOVE) |
| **Cuenta publicitaria** | GrowthCore Agency — `act_820432074193831` |
| **Meta Pixel / Dataset** | GrowthCore Web — **`881377761643365`** (CAPI activada) |
| **GA4** | ✅ `G-5NFT5HT351` (propiedad "GrowthCore Web") — cableado en Coolify |
| **Página de Facebook** | ⏳ pendiente (obligatoria para anunciar) |

> Pixel `881377761643365` → pega en Coolify env `NEXT_PUBLIC_META_PIXEL_ID` + redeploy.
> El blueprint de Make (`ops/`) ya usa `act_820432074193831`; falta solo el token de Meta.

### Tracking — cómo activarlo (implementado 2026-05-30)
- **Código:** `src/components/Analytics.tsx` inyecta Pixel + GA4 vía `next/script` (solo si hay IDs).
  `src/lib/analytics.ts` expone `trackLead()` → dispara `fbq('track','Lead')` + GA4 `generate_lead`.
- **Eventos:** `ContactForm` y `OnboardingForm` llaman `trackLead()` al enviar.
- **Activar:** copiar `.env.example` → `.env.local`, pegar `NEXT_PUBLIC_META_PIXEL_ID` y
  `NEXT_PUBLIC_GA4_ID` (Pixel propio de GrowthCore + propiedad GA4 nueva), y redeploy en Coolify.
- Sin IDs la web funciona igual (no inyecta nada).

---

## 📦 Dockerfile

```dockerfile
# Multi-stage build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

`.dockerignore` excluye: `node_modules`, `.next`, `.env*`, `*.md`

---

## 🔄 Cómo replicar para un nuevo cliente

1. Fork del repo
2. Cambiar copy (Hero, Services, Testimonials) con datos del cliente
3. Actualizar `globals.css` con colores del cliente
4. Actualizar `docs/brand/tokens.ts` con tokens del cliente
5. Cambiar número WhatsApp en ContactForm
6. Deploy en Coolify con dominio del cliente
7. Conectar CRM via webhook (cambiar URL en ContactForm)
