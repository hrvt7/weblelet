import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

function normalizeUrl(raw: string): string {
  let u = raw.trim();
  if (!/^https?:\/\//i.test(u)) u = "https://" + u;
  try {
    const parsed = new URL(u);
    return parsed.origin + parsed.pathname.replace(/\/$/, "");
  } catch {
    return u;
  }
}

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "Hiányzó URL" }, { status: 400 });
    }

    const normalizedUrl = normalizeUrl(url);

    if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
      console.error("Missing Supabase env vars");
      return NextResponse.json({ error: "Szerver konfigurációs hiba" }, { status: 500 });
    }

    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    const { data: audit, error } = await supabase
      .from("audits")
      .insert({
        url: normalizedUrl,
        status: "pending",
        audit_level: "szint1",
      })
      .select("id")
      .single();

    if (error || !audit) {
      console.error("Supabase insert error:", JSON.stringify(error));
      return NextResponse.json({ error: "Adatbázis hiba" }, { status: 500 });
    }

    // Fire-and-forget: trigger edge function
    fetch(`${SUPABASE_URL}/functions/v1/run-audit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      },
      body: JSON.stringify({
        auditId: audit.id,
        url: normalizedUrl,
        audit_level: "szint1",
        business_type: "Általános",
      }),
    }).catch((err) => console.error("Edge function trigger error:", err));

    return NextResponse.json({ auditId: audit.id });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Szerver hiba" }, { status: 500 });
  }
}
