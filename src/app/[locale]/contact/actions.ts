"use server";

import { z } from "zod";
import { countries } from "@/lib/countries";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  country: z
    .string()
    .refine((v) => (countries as readonly string[]).includes(v), {
      message: "Please select your country of residence.",
    }),
  message: z
    .string()
    .trim()
    .min(10, "Please add a few details (at least 10 characters)."),
});

export type ContactState = {
  ok: boolean;
  message?: string;
  errors?: Partial<Record<"name" | "email" | "country" | "message", string>>;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const data = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    country: String(formData.get("country") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    const errors: ContactState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof NonNullable<ContactState["errors"]>;
      if (!errors[key]) errors[key] = issue.message;
    }
    return { ok: false, errors, message: "Please fix the highlighted fields." };
  }

  // TODO(ivan): forward to the CRM / email endpoint once provided.
  // e.g. await fetch(process.env.CONTACT_ENDPOINT, { method: "POST", body: ... })

  return {
    ok: true,
    message:
      "Thanks — we’ve received your message and will get back to you within 24 hours.",
  };
}
