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
export type ApplyState = { ok: boolean; errors?: Partial<Record<ApplyField, true>>; submitted?: boolean };

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
  // TODO(ivan): await fetch(process.env.PARTNER_APPLY_ENDPOINT, { method: "POST", body: JSON.stringify(parsed.data) })
  return { ok: true, submitted: true };
}
