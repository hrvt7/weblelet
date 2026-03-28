import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL megadása kötelező" }, { status: 400 });
    }

    // Validate URL format
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(url.startsWith("http") ? url : `https://${url}`);
    } catch {
      return NextResponse.json({ error: "Érvénytelen URL formátum" }, { status: 400 });
    }

    const normalizedUrl = parsedUrl.href;
    const domain = parsedUrl.hostname.replace("www.", "");

    // Create audit record via service role (bypasses RLS)
    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    const { data: audit, error } = await supabase
      .from("audits")
      .insert({
        url: normalizedUrl,
        domain,
        status: "pending",
        audit_level: "szint1",
        business_type: "Általános",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select("id")
      .single();

    if (error || !audit) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Adatbázis hiba" }, { status: 500 });
    }

    // Fire-and-forget: trigger run-audit edge function
    const edgeFnUrl = `${SUPABASE_URL}/functions/v1/run-audit`;
    fetch(edgeFnUrl, {
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
    console.error("public-audit POST error:", err);
    return NextResponse.json({ error: "Szerver hiba" }, { status: 500 });
  }
}
