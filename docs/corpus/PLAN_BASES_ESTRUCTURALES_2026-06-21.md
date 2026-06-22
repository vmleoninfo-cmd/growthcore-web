# PLAN — Bases estructurales operativas de GROWTH-CORE (pre-lanzamiento)

> Dictamen C0 (Arquitecto del Sistema) + Investigación de tiempos de plataforma. Cliente tratado como individual. Fecha: 2026-06-21.

## La brecha (respuesta a la preocupación de la creadora)

HAYDE **sí nombró** la capa operativa (CLAUDE.md prioridad 3: "flujo captación→pago→onboarding→entrega→mantenimiento"; ACT B3/B4) **pero nunca la elevó a documentos gobernados con gate** — quedó como viñeta diferida que nadie materializó. Se construyó CAT.1-5 (identidad) + web por fuera del sistema, y la capa de servicio se evaporó.

**Es un hueco estructural REAL del sistema:** HAYDE cubre identidad/comunicación/contenido/oferta, pero **no tiene categoría ni agente dueño de la DIMENSIÓN OPERATIVA-DE-SERVICIO** (cómo ingresa el cliente, qué se le exige, hasta dónde responde la empresa, qué la sostiene internamente, qué se promete vs. qué depende de terceros). La creadora tiene razón.

## Los 6 artefactos faltantes

| # | Artefacto | Qué resuelve | Agente constructor | Gate |
|---|---|---|---|---|
| 1 | Mapa de Recorrido del Cliente por producto (A/B/C/D) | Qué pasa del pago al servicio activo en cada plan | Arq. Oferta (17) + Conversión (18) | Validación (11) → Activación (13) |
| 2 | Protocolo de Onboarding + Datos/Requisitos por producto | Qué datos/accesos/requisitos se piden y en qué orden | Arq. Producto (16) + Integrador (06) | Validación (11) |
| 3 | Condiciones de Servicio y Alcance | Qué incluye / qué NO / limitaciones por herramienta | Arq. Oferta (17) · C0 | Arquitecto (00) |
| 4 | Matriz de Responsabilidades cliente ↔ GrowthCore | Hasta dónde responde cada parte | Arq. Producto (16) · C0 | Arquitecto (00) |
| 5 | Procesos Comerciales y Administrativos internos | Qué hace el equipo cuando entra un cliente | Estratega (01) + Integrador (06) | Validación (11) |
| 6 | Disclaimer de Tiempos por Plataforma | Separar lo que controlan de lo que depende de Meta/WhatsApp | Guardián de Voz (10) sobre insumo de 16 | Arquitecto (00) |
| 7 | **Protocolo de Adquisición de Clientes** (captación → calificación → venta → cierre → cobro) | El tramo de ENTRADA del recorrido: cómo llega el lead y cómo se vuelve cliente que paga | Especialista en Conversión (18) + Arq. Oferta (17) | Validación (11) |

> Recorrido completo del cliente = **captación → venta/cobro (Base 7) → onboarding (Base 2) → entrega (Base 1) → mantenimiento (parte en Bases 3 y 5).** Las 6 originales cubrían del pago hacia adelante; la Base 7 cierra el tramo de entrada.

## Orden de construcción (la web se apoya en esto, no al revés)

1. **3 + 4 + 6** (Condiciones/Alcance · Responsabilidades · Disclaimer de tiempos) — la VERDAD del servicio. **Bloquean el lanzamiento.**
2. **2** (Onboarding + datos/requisitos por producto).
3. **1** (Mapa de Recorrido — ensambla 2+3+4 por plan).
4. **5** (Procesos internos — espejo del recorrido).
5. **RECIÉN AQUÍ:** ajuste de la web (consume 1-6: corrige tiempos, declara alcance, unifica oferta).

## Tiempos de plataforma (los que NO controla GrowthCore)

| Proceso | Rango típico 2026 | ¿Depende de Meta? |
|---|---|---|
| **Business Verification** (cuello de botella) | 2-7 días · hasta 5-15 en picos | **SÍ** |
| Aprobación de plantillas WhatsApp | 15 min-24 h · hasta 48-72 h | **SÍ** |
| Messaging tier (250→1.000→…) | escalado no instantáneo | **SÍ** |
| Revisión de anuncios Meta Ads | típico <24 h · hasta 72 h | **SÍ** (se reinicia con cada edición) |
| App Review (si aplica) | días a semanas | **SÍ** |

- **Meta NO publica SLAs garantizados** — solo rangos observados. GrowthCore nunca debe dar fecha cerrada en estos pasos.
- Cláusula honesta sugerida: *"La activación final depende de la verificación de negocio, aprobación de plantillas y escalado de límites de Meta — procesos externos sin SLA garantizado (rango observado 2-15 días hábiles)."*
- **Pendiente:** el Validador de Información (03) debe confirmar los números contra documentación oficial Meta antes de fijarlos en la oferta.

## Mejora del propio HAYDE (para no repetir la brecha)

1. Crear **CAT.11 — Arquitectura de Prestación de Servicio** (hogar canónico de recorrido/onboarding/condiciones/responsabilidades/procesos/disclaimers).
2. Nuevo dispositivo de diagnóstico **Variable_PRESTACIÓN**: mide si el cliente tiene definido cómo entrega lo que vende. Score bajo = bloqueo de lanzamiento.
3. **Gate coercitivo en pipeline-runner:** ningún cliente de servicio lanza sin Condiciones + Alcance + Disclaimer aprobados.
4. Agente dueño: ampliar Arq. de Oferta (17) o crear "Arquitecto de Operación de Servicio".

## Bloqueo de lanzamiento (C0)

La web compromete tiempos ("3 semanas") sin respaldo estructural → `output no autorizado`. **Lanzamiento bloqueado hasta cerrar artefactos 3, 4 y 6.**
