import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Endpoint de métricas para el dashboard de GrowthCore.
// Espejo del "write-data" de WordPress de MOVE, pero en Next.js.
// - POST (con secret) → guarda el data.json escrito por Make.com.
// - GET → lo sirve para que el dashboard lo lea.
//
// Auth: header "x-metrics-secret" o campo "secret" (JSON o urlencoded),
// comparado contra la env var METRICS_SECRET.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DATA_FILE = path.join(process.cwd(), "data", "metrics.json");
const SECRET = process.env.METRICS_SECRET || "";

function safeParse(s: string): unknown {
  try {
    return JSON.parse(s);
  } catch {
    return s;
  }
}

export async function GET() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return NextResponse.json(JSON.parse(raw), {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    // Aún sin datos (no se ha corrido el sync todavía)
    return NextResponse.json({ updated_at: null, empty: true });
  }
}

export async function POST(req: NextRequest) {
  const ctype = req.headers.get("content-type") || "";
  let secret = req.headers.get("x-metrics-secret") || "";
  let data: unknown = null;

  if (ctype.includes("application/json")) {
    const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
    secret = (body.secret as string) || secret;
    data = body.data ?? body;
  } else {
    // urlencoded / form-data: { secret, data } — igual que el patrón de MOVE
    const form = await req.formData().catch(() => null);
    if (form) {
      secret = (form.get("secret") as string) || secret;
      const d = form.get("data");
      data = typeof d === "string" ? safeParse(d) : d;
    }
  }

  if (!SECRET || secret !== SECRET) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  if (data == null) {
    return NextResponse.json({ ok: false, error: "no data" }, { status: 400 });
  }

  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(data), "utf-8");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "write failed" }, { status: 500 });
  }
}
