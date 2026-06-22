# BASE DE SERVICIO — Condiciones/Alcance · Responsabilidades · Disclaimer

**Cliente:** GROWTH CORE
**Sistema:** HAYDE · Evoluciona Inteligente
**Subsistema:** 11 — Sistema Comercial · CAT.15 — Arquitectura de Prestación de Servicio
**Tipo:** Instancia cliente — primeras 3 bases que desbloquean el `GATE_LANZAMIENTO_SERVICIO`
**Capa:** C6 Comercial — operación de servicio
**Versión:** v1
**Estado:** OK — validado G3 (Sistema de Validación 11) + Validador (03) · ratificado por C0 (00) · 2026-06-22
**Fecha:** 2026-06-21
**Marco canónico:** `11_SISTEMA_COMERCIAL/Sistema de Prestacion de Servicio/SISTEMA DE PRESTACION DE SERVICIO HAYDE v1.md` (CAT.15, OK)
**Contexto origen:** `_clientes/GROWTH-CORE/PLAN_BASES_ESTRUCTURALES_2026-06-21.md`

> **Variable que alimenta:** `Variable_PRESTACIÓN` (ejes B — Frontera, y D — Honestidad externa).
> **Componentes canónicos cubiertos:** 4 (Condiciones de Servicio y Alcance), 5 (Matriz de Responsabilidades), 7 (Disclaimer de dependencias externas).
> **Función:** estos tres artefactos son los que el `GATE_LANZAMIENTO_SERVICIO` exige aprobados por C0 antes de permitir cualquier manifestación pública (web, campaña, oferta). Sin ellos → `LANZAMIENTO_BLOQUEADO`.

---

## 0. PROPÓSITO Y LÍMITE DE ESTE DOCUMENTO

Este documento define la **frontera de lo que GROWTH CORE entrega**: qué incluye el servicio, qué no, hasta dónde responde cada parte, y qué tiempos dependen de terceros que GROWTH CORE no controla.

No define precio (eso es del Arquitecto de Producto/Oferta), no vende (eso es Conversión), no describe el recorrido completo del cliente (eso es la Base 1, posterior). Define exclusivamente **la verdad operativa del servicio** sobre la que la web y la oferta deben apoyarse — no al revés.

**Principio rector (heredado de Cláusula Inmodificable §5):** GROWTH CORE no promete lo que no controla. Declara con honestidad estructural lo que es externo. Un tiempo cerrado sobre un proceso de Meta es `output no autorizado`.

### Definición de naturaleza del negocio (frontera primaria)

GROWTH CORE es **herramientas digitales + soporte técnico de instalación, configuración e integración**. **No es** agencia de marketing, **no es** ejecutivo de cuenta, **no es** gestor de campañas, **no es** generador de demanda.

GROWTH CORE **ordena, conecta y automatiza la demanda que ya existe** en el negocio del cliente. No crea demanda desde cero. Toda condición, responsabilidad y disclaimer de este documento deriva de esta frontera primaria.

---

## 1. PRODUCTOS Y PLANES (referencia)

**4 herramientas:**

| Herramienta | Setup | Mensual | Condición |
|---|---|---|---|
| Smart Ads System | $197 | $67/mes | — |
| Agente WhatsApp IA | $247 | $97/mes | — |
| CRM con IA | $147 | $57/mes | — |
| Web Conectada | $397 | $37/mes | **Solo disponible con CRM activo** |

**4 planes:**

| Plan | Nombre | Composición |
|---|---|---|
| A | CRM | CRM con IA |
| B | — | Smart Ads + CRM |
| C | Sistema completo | Smart Ads + WhatsApp + CRM |
| D | Full Stack | Las 4 herramientas |

---

## 2. COMPONENTE 4 — CONDICIONES DE SERVICIO Y ALCANCE (por herramienta)

> La frontera de lo prometido. Lo que aquí **no** aparece como incluido, **no** forma parte del servicio.

### 2.1 Smart Ads System — $197 setup + $67/mes

**INCLUYE:**
- Instalación y configuración de la herramienta de detección y diagnóstico de campañas.
- Lectura automatizada del estado de las campañas existentes del cliente.
- Reportes y recomendaciones accionables: qué optimizar, qué pausar, qué ajustar.
- Soporte técnico sobre el funcionamiento de la herramienta.

**NO INCLUYE:**
- **Gestión, creación ni edición de campañas de Meta Ads.** GROWTH CORE detecta y dice qué hacer; **el cliente o su operador ejecutan los cambios.**
- Acceso de GROWTH CORE a la cuenta publicitaria de Meta del cliente — **el cliente NO entrega ese acceso.**
- Inversión publicitaria (presupuesto de anuncios).
- Diseño creativo de anuncios, copy publicitario ni definición de oferta.
- Generación de demanda nueva: la herramienta optimiza lo que ya corre, no inventa tráfico.

**LIMITACIONES:**
- El resultado de las campañas **depende de la inversión, la oferta y el producto del cliente**, no de la herramienta.
- La herramienta funciona sobre campañas activas existentes; no sustituye una estrategia publicitaria ausente.

### 2.2 Agente WhatsApp IA — $247 setup + $97/mes

**INCLUYE:**
- Instalación y configuración del agente de IA sobre WhatsApp Business.
- Redacción y carga de plantillas de mensaje (sujetas a aprobación de Meta — ver §4).
- Conexión del agente con el flujo de atención y, si aplica, con el CRM.
- Soporte técnico sobre el funcionamiento del agente.

**NO INCLUYE:**
- La cuenta de WhatsApp Business — **la provee el cliente** (número y verificación de negocio asociada).
- La aprobación de plantillas por parte de Meta (proceso externo — ver §4).
- El escalado de límites de mensajería (messaging tier) — depende de Meta.
- Contenido comercial de las conversaciones más allá de las plantillas configuradas.

**LIMITACIONES:**
- La activación efectiva depende de la **Verificación de Negocio de Meta** y de la **aprobación de plantillas** — ambos procesos externos sin SLA (ver §4).

### 2.3 CRM con IA — $147 setup + $57/mes

**INCLUYE:**
- Instalación y configuración del CRM con motor de IA en infraestructura GROWTH CORE.
- Estructuración de etapas, pipeline y automatizaciones base.
- Integración con las demás herramientas contratadas (WhatsApp, Web, Smart Ads).
- Soporte técnico sobre el funcionamiento del CRM.

**NO INCLUYE:**
- Carga, limpieza ni migración masiva de la base de datos histórica del cliente (salvo acuerdo aparte).
- Definición de la estrategia comercial o del proceso de ventas del cliente.
- Garantía sobre la calidad de los datos que el cliente ingresa.

**LIMITACIONES:**
- El CRM ordena y automatiza el seguimiento; **no genera los leads** que lo alimentan.

### 2.4 Web Conectada — $397 setup + $37/mes — **solo con CRM activo**

**INCLUYE:**
- Construcción de sitio web conectado al CRM (formularios y captación enlazados al pipeline).
- Configuración técnica de la conexión datos web ↔ CRM.
- Soporte técnico sobre el funcionamiento del sitio.

**NO INCLUYE:**
- Disponibilidad sin CRM: **esta herramienta no se contrata ni opera de forma aislada; requiere CRM con IA activo.**
- Registro/compra del dominio y la gestión de DNS (los provee el cliente — ver §3).
- Redacción de contenido editorial extenso, fotografía o branding (sujeto a CAT.1-5 del cliente).
- Posicionamiento SEO orgánico garantizado.

**LIMITACIONES:**
- Sin CRM activo, la Web Conectada **no tiene función**: su valor es la conexión, no el sitio aislado.

---

## 3. COMPONENTE 5 — MATRIZ DE RESPONSABILIDADES (cliente ↔ GROWTH CORE)

> Hasta dónde responde cada parte. El incumplimiento de un lado bloquea el avance del otro.

| Área | Provee / Responde el CLIENTE | Provee / Responde GROWTH CORE | Frontera explícita |
|---|---|---|---|
| Accesos | Accesos a sus plataformas (Meta Business, WhatsApp Business, hosting si aplica), salvo la cuenta publicitaria de Meta Ads | Instalación, configuración y conexión técnica con los accesos provistos | **GROWTH CORE NO recibe acceso a la cuenta de anuncios de Meta del cliente** |
| Inversión publicitaria | Define y paga el presupuesto de anuncios | Provee la herramienta que diagnostica y recomienda sobre ese gasto | **El resultado de las campañas depende de la inversión y la oferta del cliente, no de GROWTH CORE** |
| WhatsApp | Provee el número de WhatsApp Business y la cuenta verificable | Instala y configura el agente IA; redacta y envía plantillas a aprobación | La **aprobación de plantillas y la verificación** son de Meta, no de ninguna de las dos partes |
| Contenido | Provee su contenido comercial, oferta, materiales de marca | Estructura, integra y automatiza ese contenido en las herramientas | GROWTH CORE no crea la estrategia ni la oferta comercial del cliente |
| Dominio / DNS | Provee y gestiona dominio y registros DNS | Construye la Web Conectada y configura la conexión al CRM | La titularidad del dominio es del cliente |
| Datos | Provee y es responsable de la calidad/veracidad de sus datos | Estructura el CRM y las automatizaciones sobre esos datos | GROWTH CORE no responde por datos erróneos o incompletos ingresados por el cliente |
| Plantillas WhatsApp | Aprueba el contenido propuesto de las plantillas | Redacta las plantillas y las somete a Meta | El **veredicto** de la plantilla es de Meta |
| Soporte | Reporta incidencias por los canales acordados | Provee soporte técnico sobre el funcionamiento de las herramientas | GROWTH CORE es **soporte técnico, no ejecutivo de cuenta ni agencia** |
| Generación de demanda | Tiene la demanda/tráfico existente a ordenar | Ordena, conecta y automatiza la demanda existente | **GROWTH CORE no genera demanda desde cero** |

**Regla de bloqueo:** si el cliente no provee un acceso, dato o requisito necesario (columna izquierda), GROWTH CORE no puede completar la parte correspondiente (columna derecha), y ese tramo del servicio queda en espera sin que ello constituya incumplimiento de GROWTH CORE.

---

## 4. COMPONENTE 7 — DISCLAIMER DE DEPENDENCIAS EXTERNAS (tiempos)

> Separación explícita entre lo que GROWTH CORE controla y lo que depende de Meta/WhatsApp. **Números pendientes de confirmación por el Validador de Información (03) contra documentación oficial Meta antes de publicarse.**

### 4.1 Lo que GROWTH CORE controla (compromete en días)

- Instalación y configuración de cada herramienta.
- Integración y conexión entre herramientas contratadas.
- Redacción de plantillas y envío a aprobación.
- Construcción de la Web Conectada al CRM.

Estos son los tramos sobre los que GROWTH CORE **sí puede comprometer un plazo**, expresado en días hábiles.

### 4.2 Lo que NO controla GROWTH CORE (depende de Meta/WhatsApp — sin SLA)

| Proceso externo | Rango observado — sin SLA oficial (validado por 03) | Naturaleza |
|---|---|---|
| Verificación de Negocio de Meta | 2–15 días hábiles · **cuello de botella, sin SLA** | Bloquea activación de WhatsApp y/o anuncios |
| Aprobación de plantillas de WhatsApp | minutos – 72 h (típico < 24 h) | Veredicto de Meta, variable |
| Escalado de messaging tier (250 → 1.000 → …) | No instantáneo, progresivo | Lo decide Meta según volumen/calidad; sujeto a cambios |
| Revisión de anuncios de Meta Ads | la mayoría < 24 h · hasta 72 h, **se reinicia con cada edición** | Cada cambio reabre la revisión |
| App Review de Meta (puesta en producción de permisos avanzados) | sin SLA — días a semanas | Requerido para operar la integración Cloud API en producción |

### 4.3 Cláusula núcleo (obligatoria en toda manifestación pública)

> **GROWTH CORE compromete su parte — setup técnico e integración, medible en días hábiles. La activación final depende de procesos de verificación, aprobación de plantillas y escalado de límites de Meta: procesos externos, sin SLA garantizado (rango observado 2–15 días hábiles).**

### 4.4 Corrección de promesa actual

La web vigente compromete **"3 semanas"** como tiempo de entrega. Eso es `output no autorizado`: mezcla el tramo que GROWTH CORE controla (días) con tramos externos que no controla (verificación Meta sin SLA), produciendo un compromiso sin respaldo. **Esa promesa queda suspendida** y se sustituye por la cláusula núcleo §4.3.

> **Validación 03 (2026-06-21):** Meta **no publica SLA** para ninguno de estos procesos — la ausencia de número oficial *confirma* la premisa de no garantizar. Todos los tiempos van como *rango observado, sin garantía*, nunca como compromiso. Se añadió **App Review** (faltaba). Los rangos de messaging tier y revisión de anuncios se mantienen genéricos (no se publican fechas/cifras específicas sin cita oficial). El tooling no permitió leer las páginas JS de Meta; si alguna cifra se quisiera publicar como dato, requiere copiar el texto oficial manualmente.

---

## 5. ESTADO Y RUTA DE VALIDACIÓN

```
DOCUMENTO_CONSTRUIDO = {
  ruta: _clientes/GROWTH-CORE/BASE_SERVICIO_CONDICIONES_RESPONSABILIDADES_DISCLAIMER_v1.md,
  sistema: CAT.15 — Arquitectura de Prestación de Servicio (instancia GROWTH-CORE),
  unidades: {
    variable: Variable_PRESTACIÓN (ejes B-Frontera, D-Honestidad externa),
    sistema: mecanismo de prestación — componentes 4, 5, 7,
    implementacion: condiciones por herramienta + matriz + disclaimer instanciados con datos reales,
    modificador: contenido ajustado por herramienta y plan (A/B/C/D) y por dependencia Meta/WhatsApp,
    decision: alimenta GATE_LANZAMIENTO_SERVICIO (requiere aprobación C0)
  },
  trazabilidad: ok — CAT.15 v1 § componentes 4/5/7 → PLAN_BASES_ESTRUCTURALES_2026-06-21,
  estado: requiere_integrador / requiere_validacion
}
```

**Flujo de validación pendiente:**
1. **Validador de Información (03)** — confirma los números de Meta/WhatsApp de §4 contra documentación oficial.
2. **Sistema de Validación (11)** — Gate G3: verifica presencia y coherencia de componentes 4, 5 y 7.
3. **Arquitecto del Sistema (00)** — ratificación C0; sin ella → `LANZAMIENTO_BLOQUEADO`.

Al aprobarse los tres, el `GATE_LANZAMIENTO_SERVICIO` recibe sus tres artículos exigidos y habilita el ajuste de la web (que consume este documento, no lo precede).

---

## Changelog v1

| Versión | Fecha | Origen (agente) | Cambio |
|---|---|---|---|
| v1 | 2026-06-21 | 05-arquitecto-documentos | Construcción inicial de la instancia GROWTH-CORE de las 3 bases que desbloquean el `GATE_LANZAMIENTO_SERVICIO` (componentes canónicos 4, 5, 7 de CAT.15). Condiciones/Alcance por las 4 herramientas con datos reales del sitio (no gestión de Meta Ads, sin acceso a cuenta publicitaria, Web solo con CRM, soporte técnico no agencia, no genera demanda); Matriz de Responsabilidades cliente↔GROWTH CORE con fronteras explícitas; Disclaimer de dependencias externas que separa lo controlado (días) de lo externo (Meta/WhatsApp sin SLA) y suspende la promesa de "3 semanas" como output no autorizado. Estado PC pendiente Validador 03 (números Meta) + Validación 11 + ratificación C0. |
