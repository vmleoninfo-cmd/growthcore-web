# RECORRIDO DEL CLIENTE — GROWTH CORE

**Cliente:** GROWTH CORE
**Sistema:** HAYDE · Evoluciona Inteligente
**Subsistema:** 11 — Sistema Comercial · CAT.15 — Arquitectura de Prestación de Servicio
**Tipo:** Instancia cliente — bases cliente-facing del recorrido de entrega
**Capa:** C6 Comercial — operación de servicio
**Versión:** v1
**Estado:** OK — validado G3 (Sistema de Validación 11) · ratificado por C0 (00) · 2026-06-22
**Fecha:** 2026-06-21
**Marco canónico:** `11_SISTEMA_COMERCIAL/Sistema de Prestacion de Servicio/SISTEMA DE PRESTACION DE SERVICIO HAYDE v1.md` (CAT.15)
**Contexto origen:** `_clientes/GROWTH-CORE/PLAN_BASES_ESTRUCTURALES_2026-06-21.md`
**Documento hermano (frontera, no se repite aquí):** `_clientes/GROWTH-CORE/BASE_SERVICIO_CONDICIONES_RESPONSABILIDADES_DISCLAIMER_v1.md`

> **Variable que alimenta:** `Variable_PRESTACIÓN` (eje A — Recorrido).
> **Componentes canónicos cubiertos:** 1 (Recorrido del cliente por producto), 2 (Protocolo de Adquisición — tramo de entrada), 3 (Onboarding + Datos/Requisitos).
> **Función:** este documento es el lado cliente-facing del recorrido — qué vive el cliente del primer contacto a la operación. La frontera (qué incluye/no incluye, responsabilidades, disclaimer de tiempos) NO se repite aquí: vive en el documento hermano y se referencia.

---

## 0. PROPÓSITO Y LÍMITE

Este documento define **el recorrido que vive el cliente de GROWTH CORE**: cómo entra (Base 7 · Adquisición), qué se le pide para activar cada herramienta (Base 2 · Onboarding) y cómo se ensambla la secuencia completa de pago a operación según el plan contratado (Base 1 · Mapa de Recorrido).

No redefine la frontera del servicio (qué incluye, qué no, hasta dónde responde cada parte, qué depende de Meta): esa verdad está fijada en el documento hermano `BASE_SERVICIO_CONDICIONES_RESPONSABILIDADES_DISCLAIMER_v1.md` y este recorrido **se apoya en ella sin re-garantizarla**. Donde aparece un tiempo externo, se remite al Disclaimer (§4 del hermano) en vez de prometer fecha.

**Principio rector (Cláusula Inmodificable §5):** el recorrido declara con honestidad lo que GROWTH CORE controla (días hábiles) y lo que no (verificación/aprobación de Meta, sin SLA). No se cierra fecha sobre lo que no se controla.

---

## 1. PRODUCTOS Y PLANES (referencia)

Referencia rápida (detalle de alcance en el documento hermano §1).

| Herramienta | Setup | Mensual | Condición |
|---|---|---|---|
| Smart Ads System | $197 | $67/mes | — |
| Agente WhatsApp IA | $247 | $97/mes | Activación final sujeta a Meta (Disclaimer §4) |
| CRM con IA | $147 | $57/mes | — |
| Web Conectada | $397 | $37/mes | Solo con CRM activo |

| Plan | Nombre | Composición |
|---|---|---|
| A | CRM | CRM con IA |
| B | — | Smart Ads + CRM |
| C | Sistema completo | Smart Ads + WhatsApp + CRM |
| D | Full Stack | Las 4 herramientas |

---

## 2. BASE 7 — PROTOCOLO DE ADQUISICIÓN (tramo de entrada · componente canónico 2)

> Cómo un visitante se convierte en cliente que paga. Siete pasos secuenciales con condición de avance en cada uno. Este es el lado cliente-facing; el espejo interno (qué hace el equipo en cada paso) está en `PROCESOS_INTERNOS_GROWTH-CORE_v1.md`.

### Paso 1 — Captación

El lead entra por uno de dos canales hoy activos:

- **Formulario "Diagnóstico gratis"** en la web: nombre, WhatsApp, email, nombre del negocio.
- **Link directo a WhatsApp** desde la web.

**Salida del paso:** un contacto identificado con dato mínimo de contacto y rubro. Nada se promete aún.

### Paso 2 — Calificación ("¿es para ti?")

GROWTH CORE **ordena, conecta y automatiza demanda que ya existe; no la genera desde cero** (frontera primaria del documento hermano §0). Por eso el lead se filtra antes del diagnóstico contra dos señales observables:

| Criterio de calificación | Califica | No califica (aún) |
|---|---|---|
| Ya vende / ya tiene clientes o tráfico | Tiene demanda real que ordenar | Idea sin operación: no hay demanda que automatizar |
| Ya invierte en captación (anuncios) o atiende por WhatsApp manualmente | Hay un proceso que la herramienta optimiza | No corre nada que optimizar |
| Tiene quién ejecute los cambios que la herramienta recomienda | Puede accionar el diagnóstico (Smart Ads) | Espera que GROWTH CORE gestione campañas (eso NO se hace) |

**Regla de avance:** si el lead no tiene demanda existente que ordenar, no es candidato de servicio todavía — se le orienta con honestidad y no se le vende un sistema que no podrá alimentar. Esto protege la frontera "no genera demanda" y evita compromisos sin respaldo.

**Salida del paso:** lead **calificado** (avanza a diagnóstico) o **no calificado** (orientación honesta, sin venta).

### Paso 3 — Diagnóstico gratis (objetivo 24 h hábiles)

Sobre el lead calificado se realiza el diagnóstico gratuito ofrecido en la web. Es una lectura del estado actual del negocio del cliente: dónde se pierde la demanda existente (campañas sin lectura, WhatsApp sin atención sistemática, seguimiento sin CRM, web desconectada).

- **Tiempo objetivo:** entrega del diagnóstico dentro de **24 horas hábiles** desde la calificación. Este es un tramo que GROWTH CORE controla; se compromete en días hábiles.

**Salida del paso:** diagnóstico entregado con identificación de qué herramienta(s) resuelven la fuga detectada → traduce a un plan recomendado (A/B/C/D).

### Paso 4 — Propuesta

Se presenta el plan recomendado: herramientas, setup + mensual, qué resuelve cada una y qué se necesitará del cliente para activarla (anticipo de la Base 2 · Onboarding). La propuesta **se apoya en el documento hermano**: declara alcance e incluye/no incluye por herramienta y la cláusula núcleo de tiempos (Disclaimer §4.3), sin re-garantizar plazos externos.

**Salida del paso:** propuesta entregada con plan, precio y requisitos de activación visibles.

### Paso 5 — Elección de plan

El cliente elige el plan (A/B/C/D) o ajusta la composición dentro de lo permitido por las dependencias:

- **Web Conectada solo se contrata con CRM activo** (condición de producto, no negociable).
- Las demás herramientas pueden contratarse según la fuga diagnosticada.

**Salida del paso:** plan elegido y confirmado.

### Paso 6 — Cobro

Se cobra el **setup** del plan elegido (y se deja establecida la mensualidad recurrente). El cobro del setup es **la condición de avance** al onboarding: sin setup pagado, no inicia activación.

**Salida del paso:** setup pagado · mensualidad recurrente establecida.

### Paso 7 — Inicio (handoff a Onboarding)

Confirmado el pago, el cliente pasa de "comprador" a "cliente en activación": se le entrega el **checklist de onboarding** correspondiente a su plan (Base 2, §3) y arranca la cuenta de días hábiles sobre los tramos que GROWTH CORE controla.

**Salida del paso:** cliente dado de alta · onboarding abierto · recorrido de entrega (Base 1) en marcha.

**Condición de avance global del tramo de entrada:** ningún paso avanza sin cerrar la salida del anterior. Un lead no calificado no recibe diagnóstico; una propuesta sin plan elegido no se cobra; un setup sin pagar no abre onboarding.

---

## 3. BASE 2 — ONBOARDING + DATOS/REQUISITOS POR PRODUCTO (componente canónico 3)

> Qué se le pide al cliente para activar cada herramienta, en qué orden, y con qué condición de avance. Cada requisito de cliente que falta **bloquea** el tramo correspondiente sin que sea incumplimiento de GROWTH CORE (regla de bloqueo, documento hermano §3).

### 3.0 Onboarding base (común a todo plan)

Tras el pago (Paso 6), formulario de alta único:

1. Datos de contacto y facturación.
2. Canal de soporte acordado (por dónde reporta incidencias).
3. Descripción del negocio, servicios/productos y su oferta comercial (insumo transversal: alimenta CRM, WhatsApp y Web).

**Condición de avance:** alta base completa antes de abrir los formularios por herramienta.

### 3.1 CRM con IA — onboarding

| Se le pide al cliente | Para qué | Bloquea si falta |
|---|---|---|
| Cartera / contactos a cargar (formato acordado) | Poblar el pipeline | Estructura base del CRM puede armarse; la operación real espera datos |
| Información de servicios/etapas comerciales | Estructurar etapas y automatizaciones | Diseño de pipeline |
| Definición (con guía) de su proceso de ventas | Mapear automatizaciones al proceso real | Automatizaciones avanzadas |

> GROWTH CORE no migra masivamente ni responde por calidad de datos del cliente (hermano §2.3 / §3 — Datos). Formulario: **Onboarding CRM**.

### 3.2 Smart Ads System — onboarding

| Se le pide al cliente | Para qué | Bloquea si falta |
|---|---|---|
| Conexión a Meta Ads para **lectura/diagnóstico**, SIN ceder acceso total a la cuenta publicitaria | Que la herramienta lea el estado de las campañas | Lectura automatizada de campañas |
| Información de campañas activas (objetivos, oferta, presupuesto declarado) | Contextualizar las recomendaciones | Calidad del diagnóstico |
| Confirmación de quién ejecutará los cambios recomendados | El cliente/su operador ejecuta; GROWTH CORE no gestiona campañas | Accionabilidad del diagnóstico |

> GROWTH CORE **no recibe acceso a la cuenta publicitaria** ni gestiona campañas (hermano §2.1 / §3 — Accesos, Inversión). Formulario: **Onboarding Smart Ads**.

### 3.3 Agente WhatsApp IA — onboarding

| Se le pide al cliente | Para qué | Bloquea si falta |
|---|---|---|
| Número de WhatsApp Business | Provisionar el agente | Instalación del agente |
| Verificación de Negocio en Meta (Business Verification) iniciada/disponible | Habilitar la mensajería | **Activación final** (proceso externo Meta — Disclaimer §4) |
| Guion de ventas / atención y oferta comercial | Redactar plantillas y configurar el agente | Carga de plantillas |
| Aprobación del contenido propuesto de plantillas | Someter plantillas a Meta | Envío a aprobación |

> La **Verificación de Negocio y la aprobación de plantillas son de Meta, sin SLA** (hermano §4). GROWTH CORE compromete el setup en días hábiles; la activación final no se garantiza con fecha. Formulario: **Onboarding WhatsApp**.

### 3.4 Web Conectada — onboarding (solo con CRM activo)

| Se le pide al cliente | Para qué | Bloquea si falta |
|---|---|---|
| Dominio + gestión de DNS (titularidad del cliente) | Apuntar y publicar el sitio | Publicación |
| Contenido (textos, imágenes, marca disponible) | Construir el sitio | Construcción del sitio |
| Briefing del sitio (estructura, objetivo, secciones) | Definir el alcance del build | Inicio del build |
| **CRM con IA activo** | La Web conecta al CRM; sin él no tiene función | **Toda la herramienta** |

> Registro/compra de dominio y DNS los provee el cliente; sin CRM activo la Web no se contrata ni opera (hermano §2.4). Formulario: **Onboarding Web**.

### 3.5 Orden de onboarding cuando hay varias herramientas

1. **Onboarding base** (común).
2. **CRM** primero cuando esté en el plan (es la columna a la que se conectan Web y, si aplica, WhatsApp).
3. **WhatsApp** en paralelo (su cuello de botella es Meta, conviene iniciarlo cuanto antes).
4. **Smart Ads** en paralelo (no depende de los demás).
5. **Web** al final (requiere CRM activo + contenido + dominio).

---

## 4. BASE 1 — MAPA DE RECORRIDO POR PLAN (componente canónico 1)

> Para cada plan, la secuencia **pago → onboarding → activación → operación**, integrando los tiempos que GROWTH CORE controla (días hábiles) y remitiendo al Disclaimer (hermano §4) para los tramos de Meta. **No se cierra fecha sobre lo externo.**

**Convención de tiempos:**
- **[Controlado]** = GROWTH CORE compromete en días hábiles.
- **[Externo · Meta]** = sin SLA garantizado; se remite al Disclaimer §4.3 del hermano, no se da fecha cerrada.

### 4.1 Plan A — CRM

```
Pago setup CRM ($147 + $57/mes)
  → Onboarding base + Onboarding CRM (cartera, servicios, proceso de ventas)
    → [Controlado] Instalación y configuración del CRM en infraestructura GROWTH CORE
    → [Controlado] Estructuración de etapas, pipeline y automatizaciones base
      → Operación: el cliente trabaja su seguimiento sobre el CRM
        → Mantenimiento mensual ($57): soporte técnico sobre el funcionamiento
```
Sin dependencias externas de Meta. Recorrido íntegramente bajo control de GROWTH CORE en su parte técnica; la operación real depende de que el cliente cargue y alimente sus datos.

### 4.2 Plan B — Smart Ads + CRM

```
Pago setup (Smart Ads $197 + CRM $147 + mensuales $67 + $57)
  → Onboarding base + Onboarding CRM + Onboarding Smart Ads (en paralelo)
    → [Controlado] Instalación CRM + estructuración de pipeline
    → [Controlado] Instalación Smart Ads + conexión de lectura a Meta Ads (sin acceso total)
      → [Controlado] Integración Smart Ads ↔ CRM
        → Operación: lectura automatizada de campañas + diagnóstico + seguimiento en CRM
          → El cliente/su operador EJECUTAN los cambios recomendados (no GROWTH CORE)
            → Mantenimiento mensual: soporte técnico de ambas herramientas
```
Sin dependencia de Meta para activar (la lectura de Smart Ads no requiere verificación de negocio). El resultado de las campañas depende de la inversión y oferta del cliente (hermano §2.1).

### 4.3 Plan C — Sistema completo (Smart Ads + WhatsApp + CRM)

```
Pago setup (Smart Ads $197 + WhatsApp $247 + CRM $147 + mensuales)
  → Onboarding base + CRM + Smart Ads + WhatsApp (en paralelo)
    → [Controlado] CRM instalado + pipeline
    → [Controlado] Smart Ads instalado + lectura conectada
    → [Controlado] Agente WhatsApp instalado y configurado + plantillas redactadas
      → [Externo · Meta] Verificación de Negocio (Business Verification) — cuello de botella, sin SLA
      → [Externo · Meta] Aprobación de plantillas — veredicto de Meta, variable
        → [Controlado] Integración WhatsApp ↔ CRM una vez habilitado
          → Operación: agente atiende, CRM ordena el seguimiento, Smart Ads diagnostica campañas
            → Mantenimiento mensual: soporte técnico de las tres herramientas
```
**Honestidad de tiempos:** todo lo marcado [Controlado] se compromete en días hábiles. La **activación final del WhatsApp depende de Meta** (verificación + plantillas + messaging tier), proceso externo sin SLA — se aplica la cláusula núcleo del Disclaimer (hermano §4.3), no una fecha cerrada. Iniciar la verificación de negocio **lo antes posible** (Paso de onboarding 3.3) reduce la espera, pero no la controla GROWTH CORE.

### 4.4 Plan D — Full Stack (las 4 herramientas)

```
Pago setup (las 4: $197 + $247 + $147 + $397 + mensuales)
  → Onboarding base + CRM + Smart Ads + WhatsApp + Web (orden §3.5)
    → [Controlado] CRM primero (columna de conexión)
    → [Controlado] Smart Ads + lectura conectada (paralelo)
    → [Controlado] WhatsApp instalado + plantillas redactadas (paralelo)
      → [Externo · Meta] Verificación de Negocio + aprobación de plantillas (sin SLA)
    → [Controlado] Web Conectada construida sobre CRM activo (requiere dominio/DNS + contenido del cliente)
      → [Controlado] Integraciones: Web ↔ CRM · WhatsApp ↔ CRM · Smart Ads ↔ CRM
        → Operación: ecosistema completo — captación (Web) → atención (WhatsApp) → orden (CRM) → optimización (Smart Ads)
          → Mantenimiento mensual: soporte técnico del ecosistema
```
**Honestidad de tiempos:** la Web depende de que el cliente provea dominio/DNS y contenido (tramos del cliente, no de GROWTH CORE) y de tener el CRM activo. El WhatsApp depende de Meta. Se compromete cada tramo [Controlado] en días hábiles; los tramos [Externo] y los del cliente no se garantizan con fecha. El recorrido completo no se vende como "X semanas cerradas": se declara por tramos con su naturaleza (control propio · cliente · Meta), coherente con el Disclaimer §4.

### 4.5 Lectura del proceso declarado en web vs. esta verdad

La web declara: "Semana 1 diagnóstico · Semanas 2-3 implementación · Desde semana 4 operación". Esta secuencia es **una guía orientativa válida solo para los tramos [Controlado]**. Donde toca Meta (Plan C y D), la "semana 2-3" **no es garantizable** y se sustituye por la cláusula núcleo del Disclaimer. La promesa de "3 semanas" como tiempo cerrado quedó suspendida como `output no autorizado` (hermano §4.4); este recorrido la reemplaza por tramos honestos.

---

## 5. ESTADO Y RUTA DE VALIDACIÓN

```
DOCUMENTO_CONSTRUIDO = {
  ruta: _clientes/GROWTH-CORE/RECORRIDO_CLIENTE_GROWTH-CORE_v1.md,
  sistema: CAT.15 — Arquitectura de Prestación de Servicio (instancia GROWTH-CORE),
  unidades: {
    variable: Variable_PRESTACIÓN (eje A — Recorrido),
    sistema: mecanismo de prestación — componentes 1, 2, 3,
    implementacion: Adquisición (7 pasos) + Onboarding por herramienta + Mapa por plan A/B/C/D con datos reales,
    modificador: secuencia ajustada por plan y por dependencia Meta (sin re-garantizar tiempos externos),
    decision: alimenta GATE_LANZAMIENTO_SERVICIO (eje A) junto con el documento hermano (ejes B y D)
  },
  trazabilidad: ok — CAT.15 v1 § componentes 1/2/3 → PLAN_BASES_ESTRUCTURALES_2026-06-21; remite a BASE_SERVICIO (4/5/7) sin duplicar,
  estado: requiere_validacion
}
```

**Flujo de validación pendiente:**
1. **Sistema de Validación (11)** — Gate G3: coherencia del recorrido con la frontera del documento hermano (sin contradecir alcance ni disclaimer) y trazabilidad a CAT.15.
2. **Arquitecto del Sistema (00)** — ratificación C0.

Este documento cubre el eje A (Recorrido) de `Variable_PRESTACIÓN`. Con el documento hermano (ejes B y D) y los Procesos Internos (eje C), GROWTH CORE completa los cuatro ejes del dispositivo.

---

## Changelog v1

| Versión | Fecha | Origen (agente) | Cambio |
|---|---|---|---|
| v1 | 2026-06-21 | 05-arquitecto-documentos | Construcción inicial del recorrido cliente-facing de GROWTH-CORE: Base 7 (Protocolo de Adquisición — 7 pasos de entrada con condición de avance, calificación contra la frontera "no genera demanda"), Base 2 (Onboarding + datos/requisitos por herramienta CRM/Smart Ads/WhatsApp/Web con regla de bloqueo y orden de ensamble), Base 1 (Mapa de Recorrido pago→onboarding→activación→operación por plan A/B/C/D, marcando tramos [Controlado] en días hábiles vs. [Externo·Meta] sin SLA). Remite al documento hermano BASE_SERVICIO para condiciones/responsabilidades/disclaimer sin duplicarlos. No re-garantiza tiempos de Meta; sustituye la promesa de "3 semanas" por tramos honestos. Estado PC pendiente Validación 11 + ratificación C0. |
