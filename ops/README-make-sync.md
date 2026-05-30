# GrowthCore Analytics Sync — Make.com

Escenario que jala métricas de Meta Ads y las escribe en el dashboard de GrowthCore.
Clonado del "MOVE Analytics Sync", adaptado a Next.js (`/api/metrics`) y a conversión web (`lead`).

## Arquitectura

```
6× HTTP GET → Meta Graph API (cuenta, anuncios, diario, campañas, plataformas)
   → 1× HTTP POST → https://usegrowthcore.com/api/metrics  (guarda data.json)
```

Corre 1×/día a las 09:00 (Chile).

## Prerrequisitos (lo que debes tener antes)

1. **GrowthCore corriendo Meta Ads** — sin inversión activa el dashboard sale vacío.
2. **Ad account ID** de GrowthCore (`act_…`) — asignado al portfolio GrowthCore en tu BM.
3. **Token de Meta** de larga duración con permiso `ads_read` para ese ad account
   (Graph API Explorer → System User token recomendado).
4. **METRICS_SECRET** definido en Coolify (env de growthcore-web). Inventa uno fuerte.

## Cómo importar (en tu cuenta Make nueva — vmleoninfo)

1. Make → **Create a new scenario** → menú **⋯** → **Import Blueprint**.
2. Sube `growthcore-analytics-sync.blueprint.json`.
3. Reemplaza los placeholders (Make te deja editar cada módulo HTTP):
   | Placeholder | Reemplazar por |
   |---|---|
   | `act_YOUR_GROWTHCORE_AD_ACCOUNT` | tu ad account real (en las 6 URLs) |
   | `YOUR_META_ACCESS_TOKEN` | tu token de Meta (en las 6 URLs) |
   | `YOUR_METRICS_SECRET` | el mismo valor que pusiste en `METRICS_SECRET` de Coolify |
4. Activa el escenario y corre **Run once** para probar.
5. Verifica: `GET https://usegrowthcore.com/api/metrics` debe devolver el JSON con datos.

## Notas

- La conversión usa `action_type = 'lead'` (evento Pixel web). Si más adelante mides
  conversiones server-side (CAPI) con otro nombre, ajústalo en el módulo POST.
- **Seguridad:** el token va en las URLs del escenario (privado en Make). No lo subas a git.
- Persistencia: `/api/metrics` guarda en `data/metrics.json`. En Coolify, **monta un volumen**
  en `/app/data` para que sobreviva a redeploys (si no, se repuebla en el próximo sync).
- Este blueprint es **reutilizable**: para un cliente nuevo, duplica y cambia ad account + token + URL.
