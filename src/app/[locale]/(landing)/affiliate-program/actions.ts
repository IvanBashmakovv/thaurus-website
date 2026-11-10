"use server";

import { z } from "zod";

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

/**
 * Forward an application to the spreadsheet webhook (APPLICATIONS_WEBHOOK_URL,
 * a Google Apps Script web app that appends a row). Never blocks the user on a
 * webhook failure: the error is logged and the submission still succeeds.
 */
async function forward(data: z.infer<typeof schema>) {
  const url = process.env.APPLICATIONS_WEBHOOK_URL;
  if (!url) {
    console.warn("[apply] APPLICATIONS_WEBHOOK_URL is not set; application not stored", data.email);
    return;
  }
  const payload = {
    secret: process.env.APPLICATIONS_WEBHOOK_SECRET ?? "",
    submittedAt: new Date().toISOString(),
    program: data.program === "ib" ? "IB Partners (revenue share)" : "Affiliates (CPA)",
    name: data.name,
    email: data.email,
    // Leading apostrophe: Sheets would otherwise parse "+234…" as a formula (#ERROR!).
    contact: "'" + data.contact,
    traffic: data.traffic,
    message: data.message ?? "",
  };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
      signal: AbortSignal.timeout(15_000),
    });
    if (!res.ok) console.error("[apply] webhook answered", res.status);
  } catch (err) {
    console.error("[apply] webhook failed", err);
  }
}

/** Partner application. Validates server-side; error flags are keyed by field so the
 *  client renders localized messages. TODO(ivan): forward to CRM / email endpoint. */
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
  await forward(parsed.data);
  return { ok: true, submitted: true, name: parsed.data.name };
}
