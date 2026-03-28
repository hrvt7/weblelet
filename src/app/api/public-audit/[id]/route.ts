import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const STATUS_PROGRESS: Record<string, number> = {
  pending: 5,
  scanning: 20,
  analyzing: 50,
  validating: 72,
  generating: 88,
  completed: 100,
  failed: 100,
};

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  if (!id) {
    return NextResponse.json({ error: "Hiányzó audit ID" }, { status: 400 });
  }

  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: "Szerver konfigurációs hiba" }, { status: 500 });
  }

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

  const { data: audit, error } = await supabase
    .from("audits")
    .select(
      "id, status, pdf_path, geo_score, marketing_score, compliance_score, compliance_grade, error_message"
    )
    .eq("id", id)
    .single();

  if (error || !audit) {
    console.error("Audit fetch error:", JSON.stringify(error));
    return NextResponse.json({ error: "Audit nem található" }, { status: 404 });
  }

  const progress = STATUS_PROGRESS[audit.status] ?? 0;
  let pdfUrl: string | null = null;

  if (audit.status === "completed" && audit.pdf_path) {
    const { data: signedData } = await supabase.storage
      .from("audit-pdfs")
      .createSignedUrl(audit.pdf_path, 3600);
    pdfUrl = signedData?.signedUrl ?? null;
  }

  return NextResponse.json({
    status: audit.status,
    progress,
    pdfUrl,
    geoScore: audit.geo_score,
    marketingScore: audit.marketing_score,
    complianceScore: audit.compliance_score,
    complianceGrade: audit.compliance_grade,
    errorMessage: audit.error_message,
  });
}
