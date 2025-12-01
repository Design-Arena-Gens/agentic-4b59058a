import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData().catch(() => null);
  const raw = formData?.get("payload");
  let data: unknown = null;
  try {
    data = raw ? JSON.parse(String(raw)) : await req.json();
  } catch {
    // ignore
  }
  if (!data) {
    return NextResponse.json({ ok: false, error: "No payload received" }, { status: 400 });
  }

  return NextResponse.json({ ok: true, received: data }, { status: 200 });
}

