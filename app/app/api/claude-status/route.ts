import { NextResponse } from "next/server";
import { claudeInstalled, resolveClaudeBin } from "@/lib/claude";

// Required by `output: "export"` in next.config.ts: GET handlers must be static.
// Dev server evaluates it per cold request; static export bakes it at build time.
export const dynamic = "force-static";

export async function GET() {
  const installed = claudeInstalled();
  return NextResponse.json({
    installed,
    path: installed ? resolveClaudeBin() : null,
  });
}
