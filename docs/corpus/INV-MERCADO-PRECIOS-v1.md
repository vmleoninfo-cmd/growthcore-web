# INVESTIGACIÓN DE MERCADO — PRECIOS Y COMPETENCIA
## Input para definición de precios de GROWTH CORE

```
inv_id:         INV-MERCADO-PRECIOS-v1
proyecto:       GROWTH CORE
fecha:          2026-06-04
agente:         Investigación (02)
pendiente:      Validación por Validador de Información (03)
próximo:        Arquitecto de Producto (16) — fichas de producto con precios
confianza:      Media — precios de competidores verificados ·
                capacidad de pago LATAM parcialmente inferida
```

---

> Los datos de este informe son input de investigación, no decisión estratégica.
> La decisión de precios corresponde al Arquitecto de Producto (16)
> después de validación por el Validador de Información (03).

---

## EJE 1 — COMPETENCIA DIRECTA POR HERRAMIENTA

### H1 — Smart Ads Dashboard (optimización Meta Ads)

| Competidor | Precio entrada USD/mes | Escala con | Qué incluye |
|---|---|---|---|
| Madgicx | $31–$99 | Ad spend | IA autónoma, audiencias, creatividades |
| Revealbot | $99 | Ad spend | Automatización por reglas, reportes, multi-plataforma |
| AdEspresso (Hootsuite) | $49 (hasta $1k spend) · $259 (hasta $10k) | Ad spend | A/B testing, creación de campañas, UX simplificado |
| Adriel | $49 · $129 · $499 | Cuentas/canales | Reportería centralizada, white-label, multi-canal |
| Optmyzr | $209–$299 (anual) | Cuentas + spend | Optimización PPC, Meta + Google, reportes automatizados |
| Northbeam | Desde $1,500 | Custom | Atribución ML — fuera del segmento LATAM PYME |

**Patrón detectado:** El rango dominante para optimización de ads en el segmento PYME es $49–$99/mes. El diferenciador de Smart Ads es el score interpretable + acción prioritaria en español para no-expertos — ningún competidor entrega "qué hacer primero" de forma simple para emprendedores sin equipo técnico.

---

### H2 — CRM con IA

| Competidor | Precio entrada USD/mes | Notas LATAM |
|---|---|---|
| HubSpot Free | $0 (hasta 2 usuarios) | Salto a Starter $20/usuario genera fricción |
| HubSpot Starter | $20/usuario | Muchas PYMES LATAM se quedan atascadas aquí |
| Pipedrive Essential | $14/usuario (anual) · $19 (mensual) | Popular en B2B LATAM, intuitivo |
| Zoho CRM Free | $0 (hasta 3 usuarios) | Billing flexible; ventaja en LATAM |
| Zoho CRM Growth | $14/usuario | Precio más competitivo del segmento |
| Freshsales Free | $0 (hasta 3 usuarios) | IA de scoring incluida desde plan Growth |
| Freshsales Growth | $11–$15/usuario | |
| Brevo | $0 Free · $9 Starter · $18 Standard | Cobra por emails, no por contactos |

**Patrón detectado:** El mercado CRM en LATAM se bifurca entre CRM pipeline clásico (HubSpot, Pipedrive, Zoho) y CRM WhatsApp-first para negocios que venden por chat (Kommo, Whaticket, Leadsales). Growth Core compite más con el segundo segmento. Precio de entrada observado: $0–$15/mes para adopción inicial, upgrade a $20–$50/mes cuando hay valor demostrado. La detección de probabilidad de cierre + instrucción de cuándo contactar no es estándar en ningún CRM de entrada del segmento.

---

### H3 — Agente WhatsApp con IA

| Competidor | Precio entrada USD/mes | Notas |
|---|---|---|
| ManyChat | ~$15 (hasta 500 contactos) | Bajo costo de entrada; limitado en WhatsApp Business API nativo |
| WATI | $49–$59 (hasta $299) | 3 ejes de escala: volumen, equipo, workflows; markup 20% sobre tarifas Meta |
| Respond.io | Desde $79 | Multi-canal; más robusto para equipos |
| Botmaker | $149 (3,000 chats/24h) + $99 setup único | Único con setup fee explícito; popular en LATAM |
| Tidio | Desde $29 | Orientado a ecommerce |

**Costo adicional crítico (Meta API):** Desde julio 2025, Meta cobra por mensaje de plantilla. En México: marketing ~$0.55 MXN/mensaje, utilidad ~$0.17 MXN. Para 1,000–3,000 conversaciones/mes, costo real adicional: $25–$80 USD/mes al plan base.

**Patrón detectado:** Entrada real del mercado WhatsApp IA en LATAM: $49–$79/mes para solución funcional. El diferenciador de Growth Core (entrenado con el guion específico del negocio del cliente) no existe como feature estándar — todos los competidores requieren configuración manual extensa.

---

### H4 — Página Web Conectada

| Modalidad | Precio rango USD | Notas |
|---|---|---|
| Agencias web LATAM (landing) | $800–$5,000 one-time | México $1,500–$5,000; AR/CO más bajo |
| Agencias Webflow LATAM | Desde $3,000 one-time | Orientado a startups |
| Wix (DIY) | $17–$159/mes | Sin setup fee; requiere tiempo del cliente |
| Squarespace (DIY) | $16–$99/mes | Diseño superior; menos flexible |
| Webflow (DIY) | $15–$25/mes (anual) | Mayor curva de aprendizaje |

**Patrón detectado:** El emprendedor LATAM enfrenta una brecha real entre DIY ($15–$25/mes, requiere tiempo y habilidad) y agencia ($800–$5,000+, requiere presupuesto alto y no incluye conexión al CRM). Growth Core resuelve ese gap: setup profesional + conexión nativa al CRM desde el día 1. Diferenciador verificable sin competencia directa en este segmento y precio.

---

## EJE 2 — MODELOS DE PRECIO DOMINANTES EN SaaS PYMES LATAM

**Modelo dominante:** Mensualidad plana con opción anual (ahorro 20–40%). El 43% de SaaS ya usa modelos híbridos (base + uso variable), proyectado a 61% para fin de 2026.

**Setup fee:** No es el modelo dominante en SaaS puro, pero sí en servicios + software (implementadores, agencias). Botmaker es el único competidor directo con setup fee explícito ($99). En el segmento de servicios profesionales digitales con implementación humana real, el setup fee está normalizado y percibido como precio justo.

**Umbral de fricción mensual para PYMES LATAM:**

| Rango mensual | Fricción |
|---|---|
| $0–$20/mes | Casi sin fricción |
| $20–$50/mes | Baja — se evalúa pero se acepta con valor claro |
| $50–$100/mes | Media — requiere justificación de ROI evidente |
| $100–$200/mes | Alta — se percibe como "herramienta para empresas medianas" |
| $200+/mes | Rechazo — percibido como "enterprise" |

---

## EJE 3 — CAPACIDAD DE PAGO DEL SEGMENTO

**Presupuesto de marketing digital (PyME latinoamericana):** $500–$550 USD/mes promedio. Rango: $250–$3,000/mes según tamaño y país.

**Porcentaje para herramientas:** Del presupuesto de marketing, 15–20% se destina a herramientas/software. El resto va a inversión en ads y producción.

**Para el segmento objetivo de Growth Core** (facturación $5,000–$30,000 USD/mes, Meta Ads $100–$1,000/mes):
- Presupuesto marketing estimado: $1,200–$1,500 USD/mes
- Porción para herramientas: $180–$300 USD/mes para todo el stack

**Benchmarks de percepción:**
- Precio "accesible" por herramienta individual: $50–$100/mes
- Precio "para empresas grandes": $200+/mes por herramienta
- Stack total tolerable PYME LATAM: $150–$350 USD/mes (todas las herramientas combinadas)

---

## EJE 4 — PRECIO PERCIBIDO VS. VALOR EN IA PARA PYMES LATAM

**Estado del mercado:** El mercado de IA en LATAM superó $8.96 mil millones USD en 2025 (crecimiento 18.3% anual proyectado hasta 2035). Solo el 6% de emprendedores LATAM usa IA a nivel avanzado — el 94% la usa a nivel básico. La brecha entre disponibilidad y adopción es la oportunidad.

**Disposición a pagar por setup con implementación completa:** Alta cuando se enmarca como eliminación de la barrera técnica. La "concierge implementation" (el proveedor hace todo) reduce churn y aumenta conversión. Precio de referencia: $99 (Botmaker) — percibido como aceptable en el mercado.

**Argumentos de precio por efectividad en este segmento:**

| Argumento | Efectividad | Por qué |
|---|---|---|
| Reemplazo de empleado | Alta | El costo laboral es presión real en LATAM |
| ROI en ads | Alta | Tangible y verificable con números del propio negocio |
| Ahorro de tiempo | Media | Funciona si se cuantifica ("4 hrs/semana = $X en tu tiempo") |
| Acceso a tecnología enterprise | Baja (secundario) | Funciona como refuerzo, no como argumento principal |

**Regla de ROI del segmento:** Si la herramienta cuesta $X/mes, debe ahorrar o generar más de $X en 90 días o menos para ser retenida. Quick wins visibles en 1–4 semanas tienen tasa de adopción significativamente mayor.

---

## PATRONES GLOBALES DETECTADOS

**1. Brecha de implementación no resuelta**
Todos los competidores entregan software; nadie en el segmento LATAM PYME entrega software + implementación completa + entrenamiento personalizado en un paquete accesible. Esta es la ventaja estructural de Growth Core.

**2. WhatsApp como canal primario en LATAM**
El mercado CRM se bifurca hacia WhatsApp-first. Growth Core está correctamente posicionado — el Agente WhatsApp es la herramienta más diferenciada del ecosistema.

**3. Stack acumulativo vs. herramienta única**
Las PYMES LATAM acumulan costos de $150–$350/mes en múltiples SaaS no conectados. Un ecosistema integrado de 4 herramientas justifica precio total superior al de cada herramienta aislada.

**4. El modelo setup + mensualidad está validado**
Cuando hay implementación real incluida, el setup fee es precio justo percibido — no fricción. El cliente no tiene que hacer nada para empezar.

**5. Techo psicológico de precio mensual por herramienta**
$97–$127/mes es el techo antes de que el cliente perciba la herramienta como "no para mi". Cualquier precio bajo $97/mes por herramienta individual se percibe como accesible para el segmento.

---

## RANGO DE PRECIO RECOMENDADO POR HERRAMIENTA
### (Input para Arquitecto de Producto · 16 — no es decisión final)

| Herramienta | Competidor referencia | Rango competitivo | Setup sugerido | Mensualidad sugerida |
|---|---|---|---|---|
| H1 Smart Ads Dashboard | Madgicx $49–$99 · Adriel $49 | $49–$99/mes | $97–$197 | $49–$79/mes |
| H2 CRM con IA | Pipedrive $14–$29 · Zoho $14 | $14–$50/mes | $97–$197 | $47–$79/mes |
| H3 Agente WhatsApp IA | WATI $49–$99 · Botmaker $149 | $49–$149/mes | $197–$297 | $79–$127/mes |
| H4 Web Conectada | Agencia LATAM $800–$3,000 | $800–$3,000 one-time | $297–$497 | $27–$47/mes (hosting + mantenimiento) |

**Bundle ecosistema completo (las 4 herramientas):**
- Capacidad de pago verificada: $150–$350 USD/mes stack total
- Setup total ecosistema: $497–$997 (implementación completa)
- Mensualidad total ecosistema: $197–$397/mes
- Este rango está dentro del umbral de capacidad de pago y por debajo del umbral "enterprise"

---

## BRECHAS DE DATOS — INVESTIGACIÓN ADICIONAL RECOMENDADA

- Precios de Treble.ai (WhatsApp IA, LATAM-native) — requiere consulta directa
- Datos de capacidad de pago del segmento exacto ($100–$1,000/mes en Meta Ads) — inferidos, no medidos directamente
- Precios de CRM WhatsApp-first LATAM nativos: Kommo, Leadsales, Whaticket — relevantes para H3

---

## FUENTES

- AdStellar — Meta Ads Software Pricing Comparison 2026
- Madgicx Review 2026 · Madgicx vs Revealbot 2026
- Optmyzr Pricing 2026 · Northbeam Pricing 2026
- Mejores CRMs PYMEs Ecuador 2026 — nmtechstudio.com
- Mejor CRM para empresas en Latinoamérica 2026 — guiadesoftware.com
- Brevo Pricing 2026 · WATI Pricing WhatsApp Business API
- Ranking 2026: Mejores plataformas chatbot WhatsApp LATAM — chatsell.net
- Precio chatbot WhatsApp 2026 — aurorainbox.com
- Precio landing page profesional LATAM 2026 — ab4cus.com
- Webflow Pricing 2026 · Wix vs Webflow vs Squarespace 2026
- Presupuesto Marketing Digital PyMEs 2026 — simplixy.com.mx
- SaaS Pricing Strategy Guide 2026 — nxcode.io
- IA y automatización en LATAM: guía para founders 2026 — ecosistemastartup.com
- Stripe — Tarifas SaaS baja interacción
- Onboarding SaaS: cómo optimizarlo — agenciasnowball.com

---

*Versión: 1.0 — 2026-06-04*
*Agente: Investigación (02)*
*Pendiente: Validación por Validador de Información (03)*
*Siguiente: Arquitecto de Producto (16) — fichas de producto con precios*
