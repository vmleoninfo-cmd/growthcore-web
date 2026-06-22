# PROCESOS INTERNOS — GROWTH CORE

**Cliente:** GROWTH CORE
**Sistema:** HAYDE · Evoluciona Inteligente
**Subsistema:** 11 — Sistema Comercial · CAT.15 — Arquitectura de Prestación de Servicio
**Tipo:** Instancia cliente — espejo interno del recorrido (no cliente-facing)
**Capa:** C6 Comercial — operación de servicio
**Versión:** v1
**Estado:** OK — validado G3 (Sistema de Validación 11) · ratificado por C0 (00) · 2026-06-22
**Fecha:** 2026-06-21
**Marco canónico:** `11_SISTEMA_COMERCIAL/Sistema de Prestacion de Servicio/SISTEMA DE PRESTACION DE SERVICIO HAYDE v1.md` (CAT.15)
**Contexto origen:** `_clientes/GROWTH-CORE/PLAN_BASES_ESTRUCTURALES_2026-06-21.md`
**Documentos hermanos:** `RECORRIDO_CLIENTE_GROWTH-CORE_v1.md` (lo que vive el cliente) · `BASE_SERVICIO_CONDICIONES_RESPONSABILIDADES_DISCLAIMER_v1.md` (la frontera)

> **Variable que alimenta:** `Variable_PRESTACIÓN` (eje C — Sostén interno).
> **Componente canónico cubierto:** 6 (Procesos comerciales/administrativos internos).
> **Función:** este documento es el **espejo interno** del recorrido cliente-facing. Por cada paso que vive el cliente (Adquisición, Onboarding, Operación), define qué hace el equipo de GROWTH CORE internamente, quién lo hace y qué deja registrado. Hoy la operación es founder-only; la estructura se deja por rol para escalar sin reescribir el proceso.

---

## 0. PROPÓSITO Y LÍMITE

Este documento responde la pregunta del eje C de `Variable_PRESTACIÓN`: **¿existe proceso interno documentado de qué hace el equipo cuando entra un cliente?** Cubre la operación comercial y administrativa interna: recepción de lead, calificación, diagnóstico, cierre, cobro, alta, asignación, instalación/configuración y soporte/mantenimiento.

No es cliente-facing (el cliente no lo ve), no redefine alcance ni tiempos (eso está en los hermanos). Es el manual operativo interno que garantiza que el recorrido prometido **se ejecute igual cada vez**, independiente de quién lo opere.

**Realidad actual:** GROWTH CORE opera **founder-only** (un fundador con alta capacidad técnica). Por eso cada proceso nombra un **rol** (no una persona): hoy todos los roles los ejecuta el fundador, pero el proceso queda escrito para delegarse pieza por pieza al escalar, sin rehacerlo. Esta es la condición de escalabilidad del marco canónico (CAT.15 §4: score ≥4.0 habilita delegación sin el fundador).

---

## 1. ROLES OPERATIVOS (hoy founder-only, estructura para escalar)

| Rol | Responsabilidad | Hoy lo ejecuta |
|---|---|---|
| **Comercial** | Recepción de lead, calificación, diagnóstico, propuesta, cierre | Fundador |
| **Administración** | Cobro, facturación, alta del cliente, registro | Fundador |
| **Técnico (Implementación)** | Instalación, configuración, integración de herramientas | Fundador |
| **Soporte** | Atención de incidencias, mantenimiento mensual | Fundador |

> Primer punto natural de delegación al crecer: separar **Técnico** (instalación) de **Comercial**, porque la instalación es la carga horaria mayor y la más sistematizable.

---

## 2. ESPEJO INTERNO DEL TRAMO DE ENTRADA (Base 7 · Adquisición)

> Por cada paso del Protocolo de Adquisición (RECORRIDO_CLIENTE §2), qué hace el equipo internamente.

| Paso cliente (Base 7) | Acción interna | Rol | Registro que deja |
|---|---|---|---|
| 1 · Captación | Recibe el lead del formulario/WhatsApp; lo registra como contacto nuevo en el CRM propio de GROWTH CORE | Comercial | Ficha de lead (nombre, WhatsApp, email, negocio, canal de entrada, fecha) |
| 2 · Calificación | Evalúa contra los 3 criterios ("ya vende / ya invierte o atiende / tiene quién ejecute"); marca calificado o no calificado | Comercial | Estado del lead: CALIFICADO / NO CALIFICADO + motivo |
| 3 · Diagnóstico (24 h obj.) | Revisa el estado real del negocio del lead; identifica la fuga de demanda; traduce a plan recomendado (A/B/C/D). Inicia el reloj de 24 h hábiles al calificar | Comercial | Diagnóstico documentado + plan recomendado |
| 4 · Propuesta | Arma la propuesta apoyada en el documento hermano (alcance, incluye/no incluye, cláusula de tiempos); la envía | Comercial | Propuesta enviada (plan, precio, requisitos de activación) |
| 5 · Elección de plan | Registra el plan elegido; verifica dependencias (Web solo con CRM) | Comercial | Plan confirmado |
| 6 · Cobro | Genera el cobro del setup + alta de la mensualidad recurrente; confirma pago | Administración | Comprobante de pago de setup + mensualidad activa |
| 7 · Inicio (handoff) | Da de alta al cliente; entrega el checklist de onboarding del plan; abre el expediente del cliente | Administración → Técnico | Expediente de cliente abierto + onboarding asignado |

**Regla interna de avance:** el rol Comercial no escala un lead no calificado a diagnóstico; Administración no abre onboarding sin pago de setup confirmado. El espejo respeta la misma condición de avance que vive el cliente.

---

## 3. ESPEJO INTERNO DEL ONBOARDING (Base 2)

> Por cada herramienta, qué pide internamente el equipo, qué verifica y qué bloquea.

| Herramienta | Acción interna de recolección | Rol | Verificación / bloqueo interno |
|---|---|---|---|
| **Alta base** | Envía formulario de alta; recoge datos de facturación, canal de soporte y descripción del negocio | Administración | No abre formularios por herramienta hasta tener el alta base |
| **CRM** | Solicita cartera/contactos + info de servicios + proceso de ventas; prepara la estructura | Técnico | Si falta cartera: arma estructura base, marca "operación en espera de datos" (no es incumplimiento) |
| **Smart Ads** | Solicita conexión de lectura a Meta Ads (sin acceso total) + info de campañas + confirma quién ejecutará cambios | Técnico | Verifica que NO se pidió acceso a la cuenta publicitaria; si falta conexión de lectura, bloquea diagnóstico |
| **WhatsApp** | Solicita número WhatsApp Business + estado de Business Verification + guion de ventas; redacta plantillas | Técnico | **Inicia la verificación de negocio de Meta cuanto antes** (cuello de botella externo); marca activación como dependiente de Meta |
| **Web** | Verifica CRM activo; solicita dominio/DNS + contenido + briefing | Técnico | Si no hay CRM activo, NO inicia (condición de producto); si falta dominio/contenido, bloquea build |

**Acción interna crítica (WhatsApp):** el equipo debe **disparar la Business Verification y el envío de plantillas a Meta en las primeras horas** del onboarding del Plan C/D, porque es lo único con dependencia externa sin SLA. Cuanto antes entra a la cola de Meta, antes resuelve — pero el tiempo no se controla ni se promete con fecha (Disclaimer hermano §4).

**Orden interno de ejecución cuando hay varias herramientas:** alta base → CRM → (Smart Ads ∥ WhatsApp en paralelo) → Web al final. Coincide con el orden cliente-facing (RECORRIDO §3.5).

---

## 4. ESPEJO INTERNO DE LA OPERACIÓN Y MANTENIMIENTO

> Qué hace el equipo una vez el cliente está activo (mensualidad corriendo).

| Frente | Acción interna recurrente | Rol | Frecuencia |
|---|---|---|---|
| Soporte técnico | Atiende incidencias por el canal acordado; resuelve fallas de funcionamiento de las herramientas | Soporte | A demanda |
| Mantenimiento de infraestructura | Monitorea el servidor (Hetzner) donde se alojan las instancias del cliente; aplica actualizaciones | Técnico | Continuo |
| Salud de integraciones | Verifica que WhatsApp↔CRM, Web↔CRM, Smart Ads↔CRM sigan conectados | Técnico | Periódico |
| Cobro recurrente | Verifica el pago de la mensualidad; gestiona impagos/suspensiones según política | Administración | Mensual |
| Seguimiento de cuenta | Confirma que el cliente esté usando el sistema; detecta riesgo de baja (sin convertirse en agencia/ejecutivo de cuenta) | Comercial | Periódico |

**Frontera interna (recordatorio operativo):** Soporte es **técnico, no ejecutivo de cuenta ni agencia** (hermano §3). El equipo NO gestiona campañas, NO ejecuta cambios en Meta Ads del cliente, NO crea su demanda. Si una incidencia pide eso, se reorienta como fuera de alcance.

---

## 5. PROCESOS ADMINISTRATIVOS TRANSVERSALES

| Proceso | Qué hace internamente | Rol | Soporte |
|---|---|---|---|
| Expediente de cliente | Un registro único por cliente: lead → plan → pagos → herramientas activas → estado de onboarding → incidencias | Administración | CRM propio de GROWTH CORE |
| Facturación | Emisión de comprobantes de setup y mensualidad | Administración | — |
| Registro de estado por herramienta | Estado de cada herramienta (en onboarding / activa / en espera de cliente / en espera de Meta) | Técnico | Expediente |
| Trazabilidad de dependencias Meta | Bitácora de cuándo se inició cada verificación/plantilla y su estado (para honestidad de comunicación con el cliente) | Técnico | Expediente |

> El **registro de estado por herramienta** es lo que permite que el cliente reciba comunicación honesta ("tu verificación de negocio está en cola de Meta desde el día X, sin fecha garantizada") en vez de promesas vacías. Es el sostén interno del Disclaimer.

---

## 6. ESTADO Y RUTA DE VALIDACIÓN

```
DOCUMENTO_CONSTRUIDO = {
  ruta: _clientes/GROWTH-CORE/PROCESOS_INTERNOS_GROWTH-CORE_v1.md,
  sistema: CAT.15 — Arquitectura de Prestación de Servicio (instancia GROWTH-CORE),
  unidades: {
    variable: Variable_PRESTACIÓN (eje C — Sostén interno),
    sistema: mecanismo de prestación — componente 6 (procesos internos),
    implementacion: espejo interno por paso (adquisición/onboarding/operación) + roles + registros con datos reales,
    modificador: roles founder-only hoy, estructura por rol para delegar al escalar,
    decision: alimenta GATE_LANZAMIENTO_SERVICIO (eje C) junto con hermanos (A: recorrido, B/D: frontera)
  },
  trazabilidad: ok — CAT.15 v1 § componente 6 → PLAN_BASES_ESTRUCTURALES_2026-06-21; espejo directo de RECORRIDO_CLIENTE; respeta frontera de BASE_SERVICIO,
  estado: requiere_validacion
}
```

**Flujo de validación pendiente:**
1. **Sistema de Validación (11)** — Gate G3: el espejo interno cubre cada paso del recorrido cliente-facing sin contradecir la frontera; trazabilidad a CAT.15 componente 6.
2. **Arquitecto del Sistema (00)** — ratificación C0.

Con este documento, GROWTH CORE cubre el **eje C** de `Variable_PRESTACIÓN`. Sumado a los hermanos (A — Recorrido, B y D — Frontera/Honestidad), los cuatro ejes del dispositivo quedan instanciados y el `GATE_LANZAMIENTO_SERVICIO` puede evaluarse completo.

---

## Changelog v1

| Versión | Fecha | Origen (agente) | Cambio |
|---|---|---|---|
| v1 | 2026-06-21 | 05-arquitecto-documentos | Construcción inicial del espejo interno de GROWTH-CORE (componente canónico 6 de CAT.15, eje C — Sostén interno de Variable_PRESTACIÓN). Define roles operativos (Comercial/Administración/Técnico/Soporte, founder-only hoy con estructura para delegar), espejo interno paso a paso del tramo de entrada (Base 7), del onboarding por herramienta (Base 2) y de la operación/mantenimiento, más procesos administrativos transversales (expediente, facturación, registro de estado por herramienta, bitácora de dependencias Meta). Respeta la frontera "soporte técnico no agencia" y el Disclaimer sin duplicarlos. Estado PC pendiente Validación 11 + ratificación C0. |
