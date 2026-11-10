"use client";

import { z } from "zod";

/**
 * Partner application, browser side. The static site has no server, so the
 * form validates here and POSTs JSON to /apply.php, which validates again and
 * forwards the application to the spreadsheet webhook (the webhook address and
 * secret live only in the PHP config outside the web root).
 */
const schema = z.object({
  name: z.string().trim().min(2, "name"),
  email: z.string().trim().email("email"),
  contact: z.string().trim().min(3, "contact"),
  traffic: z.string().trim().min(3, "traffic"),
  program: z.enum(["ib", "affiliate"], { message: "program" }),
  message: z.string().trim().max(2000).optional(),
});

export type ApplyField = "name" | "email" | "contact" | "traffic" | "program";
export type ApplyState = { ok: boolean; errors?: Partial<Record<ApplyField, true>>; submitted?: boolean; name?: string };

/** Same state machine as the former server action: errors keyed by field, then success. */
export async function applyPartner(_prev: ApplyState, formData: FormData): Promise<ApplyState> {
  const parsed = schema.safeParse({
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    contact: String(formData.get("contact") ?? ""),
    traffic: String(formData.get("traffic") ?? ""),
    program: String(formData.get("program") ?? ""),
    message: String(formData.get("message") ?? ""),
  });
  if (!parsed.success) {
    const errors: ApplyState["errors"] = {};
    for (const issue of parsed.error.issues) errors[issue.path[0] as ApplyField] = true;
    return { ok: false, errors, submitted: true };
  }
  // Never block the applicant on a delivery problem: the PHP side logs it.
  try {
    const res = await fetch("/apply.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
      signal: AbortSignal.timeout(20_000),
    });
    if (!res.ok) console.error("[apply] /apply.php answered", res.status);
  } catch (err) {
    console.error("[apply] /apply.php failed", err);
  }
  return { ok: true, submitted: true, name: parsed.data.name };
}
