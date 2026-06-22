# FICHAS DE PRODUCTO — GROWTH CORE
## Redefinición estructural de las 4 herramientas del ecosistema

```
doc_id:         FICHAS-PRODUCTO-v1
proyecto:       GROWTH CORE
fecha:          2026-06-04
agente:         Arquitecto de Producto (16)
dependencias:   CAT1 · CAT2 · CAT3 · CAT4 · INV-MERCADO-PRECIOS-v1
decisión:       H4 Web solo para clientes del ecosistema (Opción 2 aprobada)
validado_por:   Sistema de Validación (11)
estado:         APROBADO — base para Arquitecto de Oferta (17)
```

---

> Cada ficha describe la herramienta desde el problema que resuelve,
> no desde lo que conecta ni desde sus funciones técnicas.
> Esta es la diferencia entre comunicación de sistema y comunicación de humo.

---

## FICHA H1 — SMART ADS DASHBOARD

### Problema que resuelve

El emprendedor invierte en Meta Ads pero no sabe si está funcionando hasta que ya perdió dinero. No hay señal de alerta temprana. Para cuando nota que una campaña falló, el presupuesto ya se gastó.

El problema específico: las campañas se deterioran gradualmente — CTR cae, costos suben, conversiones bajan — y sin un sistema de detección activa, el emprendedor lo descubre semanas después durante la revisión manual.

### Para quién exactamente

**Señales de que este cliente necesita Smart Ads:**
- Invierte entre $100 y $2,000 USD/mes en Meta Ads (Facebook + Instagram)
- Revisa las métricas de manera reactiva — cuando algo ya falló
- No tiene equipo de marketing que monitoree las campañas a diario
- Ha tenido meses donde la inversión no generó resultados visibles sin entender por qué
- No puede interpretar CTR, ROAS, CPM con fluidez — necesita que alguien le diga qué hacer

### Qué detecta y cómo funciona

Smart Ads procesa las métricas de todas las campañas activas de Meta Ads cada 24 horas. Calcula un **score 0–100** por campaña basado en rendimiento, tendencia y comparación con parámetros del tipo de negocio. Cuando el score cae por debajo del umbral configurado, genera una alerta con:

1. La causa específica del deterioro
2. La acción concreta que debe tomarse esa semana
3. El impacto estimado si no se actúa

El resultado llega al emprendedor cada lunes en un **informe de máximo 250 palabras** — legible en 3 minutos, con una sola acción prioritaria.

### Entregables

```
✓ Dashboard instalado en servidor de Growth Core — acceso con usuario y clave
✓ Conexión con la cuenta de Meta Ads del cliente (Growth Core hace la conexión)
✓ Informe semanal cada lunes antes de las 9am:
    · Score global de la semana (número + clasificación)
    · Análisis de cada campaña activa
    · Alerta si alguna campaña bajó de umbral
    · Acción prioritaria de la semana
    · Tendencia: mejoró / empeoró / estable + causa identificada
✓ Alerta inmediata (email) si una campaña cae más del 20% en 48 horas
```

### Proceso de implementación

```
Día 1:    Growth Core conecta la cuenta de Meta Ads del cliente
Día 2–3:  Calibración del dashboard y configuración de umbrales por tipo de negocio
Día 5:    Primer informe de estado generado (baseline)
Semana 2: Alertas activas · el cliente recibe su primer informe semanal real
```

### Precios

| | Valor | Justificación |
|---|---|---|
| **Setup** | **$197** | Conexión + calibración + configuración de umbrales por tipo de negocio |
| **Mensualidad** | **$67/mes** | Monitoreo diario + informe semanal + alertas automáticas + mantenimiento |

**Argumento de valor:** Si el cliente tiene $500/mes en Meta Ads y el sistema detecta que el 15% se desperdicia en clics de baja calidad ($75/mes), Smart Ads se paga solo en el primer mes. El informe semanal reemplaza 2–3 horas de revisión manual.

### Lo que NO incluye (aclaración obligatoria)

```
✗ Gestión de campañas — Smart Ads monitorea, no administra
✗ Creación de anuncios o creatividades
✗ La inversión publicitaria — ese dinero va directamente a Meta, no a Growth Core
✗ Estrategia de campañas — el sistema ejecuta detección, no planning
✗ Campañas de Google Ads, TikTok Ads u otras plataformas
```

### Diferenciación frente al mercado

| vs. Madgicx / Adriel ($49–$99/mes) | Smart Ads entrega la acción específica en español para no-expertos. Los competidores entregan dashboards con métricas que el emprendedor debe interpretar solo |
|---|---|
| vs. Revisión manual del emprendedor | Detección diaria automática vs. revisión semanal reactiva |
| vs. Agencia de marketing | Sin contrato de gestión, sin porcentaje de inversión, sin dependencia externa |

---

## FICHA H2 — CRM CON IA

### Problema que resuelve

El emprendedor tiene contactos guardados en WhatsApp, en Excel, en notas del teléfono — pero no tiene un sistema que le diga quién tiene mayor probabilidad de comprar hoy, cuándo llamar y qué decir. El seguimiento depende de la memoria, no de un sistema.

Resultado: los clientes que estaban listos para comprar se enfrían porque nadie los contactó a tiempo. Los leads que entraron la semana pasada se pierden entre conversaciones. La retención queda al azar.

### Para quién exactamente

**Señales de que este cliente necesita el CRM:**
- Tiene clientes activos y prospectos pero no hace seguimiento sistemático
- Su "CRM actual" es WhatsApp, Excel o ninguno
- Ha perdido ventas porque olvidó contactar a alguien a tiempo
- No sabe cuáles de sus prospectos actuales tienen mayor probabilidad de cierre esta semana
- Recibe leads por formulario web o WhatsApp y los registra manualmente (o no los registra)

### Qué detecta y cómo funciona

El CRM registra todos los clientes y prospectos con su historial completo. La IA analiza el historial de interacciones, el tiempo transcurrido desde el último contacto, el tipo de negocio y el comportamiento del prospecto para calcular una **probabilidad de cierre** actualizada semanalmente.

Cada semana el sistema entrega al emprendedor:
- Los 3–5 contactos que priorizar esa semana
- Cuándo contactarlos (día y hora recomendada según su patrón)
- Qué decirles (contexto del historial + sugerencia de mensaje)

### Entregables

```
✓ CRM configurado en servidor de Growth Core con usuario y clave
✓ Campos específicos del tipo de negocio del cliente (no configuración genérica)
✓ Conexión con al menos un canal de entrada de leads:
    · Formulario web → CRM automático (si tiene o está contratando H4)
    · Web existente del cliente → CRM automático (si aplica — ver nota de compatibilidad)
    · Agente WhatsApp → CRM automático (si tiene o está contratando H3)
✓ Reporte semanal de prioridades: top 3–5 contactos + cuándo + qué decir
✓ Panel de historial completo por cliente accesible en cualquier momento
```

**Nota de compatibilidad — conexión de web existente al CRM:**
Si el cliente ya tiene un sitio web activo, Growth Core puede conectar el formulario de contacto al CRM durante el onboarding. Condiciones:
- Compatible con: WordPress, Wix, Webflow, Squarespace, Shopify (formularios nativos)
- Requiere: acceso de administrador al sitio web del cliente
- Tiempo estimado: 1–2 días adicionales al proceso de implementación estándar
- Si la plataforma no está en la lista, se evalúa caso a caso antes del cierre

### Proceso de implementación

```
Día 1:    Cliente completa formulario de conexión segura (datos del negocio)
Día 2–4:  Growth Core configura el CRM con los campos del tipo de negocio
Día 5:    Migración de contactos existentes si el cliente los tiene en Excel/lista
Día 6–7:  Testing y validación de conexiones (web y/o WhatsApp si aplica)
Semana 2: Primer reporte de prioridades activo
```

### Precios

| | Valor | Justificación |
|---|---|---|
| **Setup** | **$147** | Configuración específica + migración de contactos + conexión de canales |
| **Mensualidad** | **$57/mes** | Hosting en servidor Growth Core + mantenimiento + actualización del modelo de IA |

**Argumento de valor:** Si el cliente cierra 1 venta adicional por mes porque el sistema le dijo cuándo y cómo contactar a ese prospecto que estaba listo, el CRM se paga con la primera venta recuperada.

### Lo que NO incluye

```
✗ Gestión de conversaciones con clientes — el emprendedor hace el contacto
✗ Responder en nombre del negocio — eso es función del Agente WhatsApp (H3)
✗ Integración con CRMs externos (Salesforce, HubSpot) — reemplaza, no se conecta a ellos
✗ Campañas de email marketing masivo
```

### Diferenciación frente al mercado

| vs. HubSpot / Pipedrive ($14–$29/usuario) | El CRM de Growth Core viene implementado y configurado para el negocio específico. HubSpot y Pipedrive requieren que el cliente configure todo solo y aprenda la herramienta |
|---|---|
| vs. WhatsApp como "CRM" | Historial estructurado + probabilidad de cierre + instrucción de cuándo actuar — vs. mensajes sin orden ni priorización |
| vs. CRMs WhatsApp-first (Kommo, Leadsales) | Integración nativa con Smart Ads y Agente WhatsApp · el ecosistema completo comparte datos |

---

## FICHA H3 — AGENTE WHATSAPP CON IA

### Problema que resuelve

Un lead que no recibe respuesta en los primeros 5 minutos tiene probabilidad de cierre significativamente menor. El emprendedor no puede estar disponible 24/7 para atender el primer contacto. El resultado: leads que costaron dinero en publicidad se pierden porque nadie respondió a tiempo, o se respondió pero sin el guion correcto.

El problema no es la falta de disposición — es que el primer contacto requiere velocidad y consistencia que una persona sola no puede garantizar.

### Para quién exactamente

**Señales de que este cliente necesita el Agente WhatsApp:**
- Recibe o podría recibir leads por WhatsApp y no siempre responde en los primeros minutos
- Ha perdido prospectos porque tardó en responder
- Tiene un guion de ventas mental pero no lo aplica de forma consistente en cada conversación
- Invierte en publicidad que lleva tráfico a WhatsApp
- Ya tiene o está contratando el CRM de Growth Core

**Requisito obligatorio:** El cliente debe tener o estar contratando el CRM (H2). El agente sin CRM no registra leads — pierde su función central.

### Qué hace y cómo funciona

El Agente WhatsApp con IA es un agente conversacional (no un bot con opciones de menú) entrenado con el guion de ventas específico del negocio del cliente. Cuando llega un mensaje:

1. **Responde en segundos** — con el tono y el guion del negocio
2. **Califica el lead** — según los criterios definidos en el onboarding
3. **Registra la conversación** en el CRM automáticamente
4. **Transfiere al emprendedor** cuando el lead está calificado y listo para el siguiente paso

El agente no reemplaza al emprendedor en el cierre — lo libera para que solo intervenga cuando el lead ya está calificado y tiene interés real.

### Entregables

```
✓ Agente instalado y conectado al WhatsApp Business del cliente
✓ Entrenamiento con el guion de ventas del negocio (Growth Core lo construye en el onboarding)
✓ Criterios de calificación definidos para el tipo de negocio
✓ Conexión automática con el CRM de Growth Core
✓ Definición de límites del agente: qué conversaciones maneja autónomamente
  y en qué punto transfiere al emprendedor — documentado en el proceso de onboarding
✓ Primera semana de monitoreo activo + ajustes incluidos
```

### Proceso de implementación

```
Día 1:    Sesión de intake: guion de ventas + criterios de calificación + casos típicos
Día 2–5:  Entrenamiento y configuración del agente
Día 6–7:  Fase de prueba con escenarios reales simulados
Día 8:    Agente activo en producción
Semana 2: Monitoreo de primeras conversaciones reales + ajuste de respuestas
```

### Precios

| | Valor | Justificación |
|---|---|---|
| **Setup** | **$247** | Entrenamiento personalizado + configuración + conexión + fase de prueba |
| **Mensualidad** | **$97/mes** | Operación + monitoreo + reentrenamiento cuando cambia el guion |

**Costo adicional transparente — Meta API:**
Meta cobra por mensajes de plantilla enviados. Estimado para 500–2,000 conversaciones/mes: $15–$50 USD/mes adicionales (cobrados directamente por Meta, no por Growth Core). Este costo se informa antes del cierre — no es sorpresa.

**Argumento de valor:** Si el agente atiende 30 leads/mes que antes no recibían respuesta a tiempo, y el 10% cierra ($X de venta promedio del negocio), el cálculo de ROI es directo y verificable desde el primer mes.

### Lo que NO incluye

```
✗ Conversaciones complejas de cierre — el agente califica, el emprendedor cierra
✗ Asesoría legal, médica o de cualquier área regulada
✗ El costo de la API de WhatsApp Business (cobrado directamente por Meta)
✗ La cuenta de WhatsApp Business API (Growth Core ayuda a activarla, pero la cuenta es del cliente)
✗ Integración con WhatsApp de otras empresas o CRMs externos
```

### Diferenciación frente al mercado

| vs. ManyChat / WATI ($49–$99) | ManyChat y WATI entregan la herramienta — el cliente la configura solo. Growth Core entrega el agente entrenado con el guion del negocio específico |
|---|---|
| vs. Bots con menú de opciones | Conversación abierta con contexto del negocio vs. flujos rígidos que el lead abandona |
| vs. Empleado de atención al cliente | 24/7 · respuesta en segundos · costo fijo · sin días libres · responde aunque estés en otra reunión |

---

## FICHA H4 — WEB CONECTADA

### Decisión estructural (Opción 2 — aprobada)

> La Web Conectada **solo está disponible para clientes que ya tienen o están contratando el CRM de Growth Core (H2).**
> No es un servicio de diseño web independiente.
> Un cliente que solo quiere un sitio web no es cliente de Growth Core.

### Problema que resuelve

El emprendedor no tiene presencia web, o tiene un sitio que no captura leads automáticamente, o tiene un formulario de contacto que no está conectado a ningún sistema. Cada lead que llega por la web se pierde o se registra manualmente.

El problema específico: una web sin conexión al CRM es una herramienta de visibilidad que no alimenta el sistema. Los datos de quién visitó, quién completó el formulario, qué preguntó — desaparecen o quedan en un email que nadie sistematiza.

### Para quién exactamente

**Señales de que este cliente necesita la Web Conectada:**
- No tiene sitio web o tiene uno que no convierte leads en contactos registrados
- Su formulario de contacto llega a un email que revisa cuando puede
- Ya tiene o está contratando el CRM de Growth Core
- Necesita presencia web profesional pero no quiere pasar semanas con un diseñador y luego descubrir que no conecta con nada

**Requisito obligatorio:** El cliente debe tener o estar contratando el CRM (H2). Sin CRM no hay Web Conectada.

### Qué hace y cómo funciona

Landing page profesional diseñada, construida y publicada por Growth Core en 14 días hábiles. Conectada al CRM desde el primer día: cada formulario completado crea automáticamente un registro en el CRM con los datos del prospecto y la fecha de contacto. El emprendedor no toca configuraciones — recibe la web activa y el CRM ya registrando leads.

### Entregables

```
✓ Landing page profesional — 1 página optimizada para conversión
✓ Formulario de contacto conectado automáticamente al CRM de Growth Core
✓ Hosting incluido en la mensualidad
✓ Configuración del dominio del cliente (el cliente aporta el dominio)
✓ 1 ronda de ajustes incluida antes de publicación
✓ Técnico SEO básico (títulos, meta descripciones, velocidad)
✓ Responsive — adaptada a móvil y escritorio
```

### Proceso de implementación

```
Día 1:    Sesión de briefing (identidad del negocio · objetivos · CTA · referencias)
Día 2–7:  Diseño y desarrollo por Growth Core
Día 8–10: Revisión del cliente + ronda de ajustes
Día 11–13: Conexión y prueba con el CRM
Día 14:   Publicación y validación en vivo
```

### Precios

| | Valor | Justificación |
|---|---|---|
| **Setup** | **$397** | Diseño + desarrollo + integración CRM + configuración dominio |
| **Mensualidad** | **$37/mes** | Hosting + mantenimiento + conexión activa al CRM |

**Argumento de valor:** Una agencia web en LATAM cobra $800–$5,000 por una landing page que no está conectada al CRM. Growth Core entrega la web + conexión al sistema en 14 días hábiles a $397 de setup.

### Lo que NO incluye

```
✗ E-commerce o catálogo de productos
✗ Blog o sistema de gestión de contenido (CMS)
✗ Más de 1 página (landing multipage es cotización aparte)
✗ SEO de posicionamiento y generación de tráfico orgánico
✗ Integración con redes sociales o pixel de conversión (Meta Pixel se configura aparte)
✗ Diseño de logotipo o identidad visual (debe ser aportada por el cliente)
```

### Diferenciación frente al mercado

| vs. DIY (Wix, Squarespace $17–$25/mes) | El cliente no configura nada — Growth Core construye y conecta todo |
|---|---|
| vs. Agencias web LATAM ($800–$5,000) | Precio accesible + conexión nativa al CRM desde el día 1 + parte del ecosistema |
| vs. Landing page sin ecosistema | Cada lead capturado entra automáticamente al CRM y activa el seguimiento del sistema |

---

## PRECIOS INDIVIDUALES — RESUMEN

| Herramienta | Setup | Mensualidad | Requisito |
|---|---|---|---|
| H1 Smart Ads Dashboard | $197 | $67/mes | Meta Ads activo |
| H2 CRM con IA | $147 | $57/mes | Ninguno (es la entrada al ecosistema) |
| H3 Agente WhatsApp con IA | $247 | $97/mes | CRM (H2) obligatorio |
| H4 Web Conectada | $397 | $37/mes | CRM (H2) obligatorio |

---

## BUNDLES DEL ECOSISTEMA

### BUNDLE CORE STARTER — CRM + Smart Ads
*Para el emprendedor que quiere saber si sus campañas están funcionando y tener el sistema de seguimiento.*

| | Precio | vs. Individual |
|---|---|---|
| Setup | **$297** | Ahorra $47 vs. separados ($344) |
| Mensualidad | **$107/mes** | Ahorra $17/mes vs. separados ($124) |

### BUNDLE CORE GROWTH — CRM + Smart Ads + Agente WhatsApp
*Para el emprendedor que ya invierte en publicidad y recibe leads por WhatsApp.*

| | Precio | vs. Individual |
|---|---|---|
| Setup | **$497** | Ahorra $94 vs. separados ($591) |
| Mensualidad | **$197/mes** | Ahorra $24/mes vs. separados ($221) |

### BUNDLE CORE FULL — Las 4 herramientas
*El ecosistema completo: campañas detectadas + leads atendidos + clientes priorizados + web conectada.*

| | Precio | vs. Individual |
|---|---|---|
| Setup | **$797** | Ahorra $191 vs. separados ($988) |
| Mensualidad | **$227/mes** | Ahorra $31/mes vs. separados ($258) |

**Nota sobre los bundles:**
El ahorro no es el argumento central de los bundles. El argumento es la integración: las 4 herramientas conectadas generan más valor que la suma de las partes. Un lead captado por el Agente WhatsApp entra al CRM y el Smart Ads identifica qué campaña generó ese lead. La web conectada cierra el círculo. Eso no ocurre si se contratan herramientas separadas de diferentes proveedores.

---

## ESCALERA DE ENTRADA AL ECOSISTEMA

```
ENTRADA RECOMENDADA: H2 — CRM con IA ($147 setup · $57/mes)
  ↓
  Razón: Es la herramienta que conecta las demás.
         Sin CRM, el Agente WhatsApp no registra leads.
         Sin CRM, la Web Conectada no captura en el sistema.
         El CRM es la infraestructura base del ecosistema.

SEGUNDA HERRAMIENTA SEGÚN PERFIL:
  · Si invierte en Meta Ads → agregar H1 Smart Ads ($197 setup)
  · Si recibe leads por WhatsApp → agregar H3 Agente WhatsApp ($247 setup)
  · Si no tiene web conectada → agregar H4 Web Conectada ($397 setup)

ECOSISTEMA COMPLETO → Bundle Core Full
  Cuando el cliente tiene las primeras 2 herramientas activas y
  el sistema está demostrando valor → proponer el bundle completo
```

---

*Versión: 1.0 — 2026-06-04*
*Agente: Arquitecto de Producto (16)*
*Validado por: Sistema de Validación (11)*
*Siguiente: Arquitecto de Oferta (17) — escalera de valor y propuesta comercial*
