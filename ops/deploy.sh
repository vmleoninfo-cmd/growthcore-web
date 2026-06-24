#!/usr/bin/env bash
# ───────────────────────────────────────────────────────────────
# Deploy de un solo comando: growthcore-web → Coolify (app 2)
#
#   Uso:  bash ops/deploy.sh        (desde la raíz del repo)
#
# Hace: push (master+main) → dispara el build en Coolify por SSH
#       → espera hasta que la versión nueva esté live.
#
# No contiene secretos: usa la llave SSH local ~/.ssh/growthcore.
#
# NOTA: este paso manual existe porque la fuente del repo en Coolify
# es "Public GitHub" (sin GitHub App), así que el push NO dispara
# auto-deploy. Para automatizarlo, ver INFRAESTRUCTURA.md §Coolify
# (agregar webhook manual de GitHub).
# ───────────────────────────────────────────────────────────────
set -euo pipefail

VPS="root@178.105.152.193"
KEY="${HOME}/.ssh/growthcore"
DOMAIN="https://usegrowthcore.com"

echo "→ 1/3  push a origin (master + main)…"
git push origin HEAD:master
git push origin HEAD:main

echo "→ 2/3  disparando build en Coolify (app 2)…"
ssh -o StrictHostKeyChecking=accept-new -i "$KEY" "$VPS" 'bash -s' <<'REMOTE'
cat > /tmp/deploy.php <<'PHP'
$app = App\Models\Application::find(2);
$u = (string) Illuminate\Support\Str::uuid();
queue_application_deployment(application: $app, deployment_uuid: $u, force_rebuild: true, is_api: true, no_questions_asked: true);
echo 'OK uuid=' . $u;
PHP
docker cp /tmp/deploy.php coolify:/tmp/deploy.php >/dev/null 2>&1
docker exec coolify php /var/www/html/artisan tinker --execute="$(cat /tmp/deploy.php)" 2>&1 | grep -E 'OK uuid=' || echo 'WARN: no se confirmó el uuid'
REMOTE

echo "→ 3/3  esperando a que el build esté live (hasta ~10 min)…"
for i in $(seq 1 24); do
  code=$(curl -sS -o /dev/null -w "%{http_code}" --max-time 12 "${DOMAIN}/sitemap.xml?cb=${i}${RANDOM}" 2>/dev/null || true)
  if [ "$code" = "200" ]; then echo "✓ deploy LIVE (intento $i)"; exit 0; fi
  echo "  build en progreso (HTTP $code)…"
  sleep 25
done
echo "⚠ timeout (~10 min) — revisar estado/logs en el panel de Coolify"
exit 1
