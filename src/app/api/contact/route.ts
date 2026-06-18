import { NextRequest, NextResponse } from "next/server";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

function sanitize(value: unknown, maxLength = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Troppe richieste. Riprova tra un'ora." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.honeypot) {
    return NextResponse.json({ success: true });
  }

  const name = sanitize(body.name, 100);
  const company = sanitize(body.company, 200);
  const email = sanitize(body.email, 254);
  const phone = sanitize(body.phone, 30);
  const need = sanitize(body.need, 80);
  const message = sanitize(body.message, 2000);

  if (!name || !company || !email || !phone) {
    return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email non valida" }, { status: 400 });
  }

  // TODO: integrare con CRM / email service in produzione
  console.info("[CONTACT LEAD]", {
    timestamp: new Date().toISOString(),
    name,
    company,
    email: email.replace(/(.{2}).*(@.*)/, "$1***$2"),
    phone: phone.replace(/\d(?=\d{4})/g, "*"),
    need,
    hasMessage: !!message,
    ip: ip.replace(/\d+$/, "xxx"),
  });

  return NextResponse.json({ success: true });
}
