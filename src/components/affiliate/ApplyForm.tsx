"use client";

import { useActionState } from "react";
import { applyPartner, type ApplyState, type ApplyField } from "@/app/[locale]/(landing)/affiliate-program/actions";
import { buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export type ApplyCopy = {
  title: string;
  sub: string;
  name: string;
  email: string;
  contact: string;
  contactHint: string;
  traffic: string;
  trafficHint: string;
  program: string;
  programIb: string;
  programAffiliate: string;
  message: string;
  submit: string;
  sending: string;
  successTitle: string;
  successBody: string;
  successSteps: [string, string, string];
  errorHint: string;
  errors: Record<ApplyField, string>;
};

const input =
  "w-full rounded-xl border border-edge bg-surface px-4 py-2.5 text-base text-fg placeholder:text-fg-faint focus-visible:outline-2 focus-visible:outline-primary-hover";

export function ApplyForm({ copy }: { copy: ApplyCopy }) {
  const [state, action, pending] = useActionState<ApplyState, FormData>(applyPartner, { ok: false });

  if (state.ok) {
    const first = state.name?.trim().split(/\s+/)[0];
    return (
      <div className="rounded-card border border-edge bg-surface-2/70 p-8 text-center" role="status" aria-live="polite">
        <span className="pop mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(180deg,#4f55a3,#2f6bd6)] text-white shadow-[0_0_40px_-8px_rgba(47,107,214,.9)]">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path className="check-draw" d="M5 12.5l4.5 4.5L19 7" />
          </svg>
        </span>
        <h3 className="rise mt-5 text-2xl font-semibold text-fg" style={{ animationDelay: ".35s" }}>
          {copy.successTitle}{first ? `, ${first}` : ""}
        </h3>
        <p className="rise mt-2 text-sm text-fg-muted" style={{ animationDelay: ".5s" }}>{copy.successBody}</p>
        <ol className="mx-auto mt-7 max-w-sm space-y-3 text-start">
          {copy.successSteps.map((s, i) => (
            <li key={s} className="rise flex items-center gap-3" style={{ animationDelay: `${0.75 + i * 0.3}s` }}>
              <span className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold", i === 0 ? "bg-success/20 text-success" : i === 1 ? "bg-[#2f6bd6]/15 text-[#2f6bd6]" : "border border-edge bg-surface text-fg-muted")}>
                {i === 0 ? <Icon name="check" className="h-4 w-4" /> : i + 1}
              </span>
              <span className="text-sm text-fg">{s}</span>
              {i === 1 && <span className="ms-auto h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#2f6bd6]" aria-hidden />}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  const err = (f: ApplyField) => (state.errors?.[f] ? copy.errors[f] : null);
  // Plain render helper (not a component) so React keeps the inputs mounted between renders.
  const field = ({ f, label, hint, children }: { f: ApplyField; label: string; hint?: string; children: React.ReactNode }) => (
    <label key={f} className={cn("block", err(f) && "[&_input]:border-red-400 [&_textarea]:border-red-400")}>
      <span className="mb-1.5 block text-sm font-medium text-fg-muted">{label}</span>
      {children}
      {err(f) ? <span className="mt-1 block text-xs text-red-400">{err(f)}</span> : hint ? <span className="mt-1 block text-xs text-fg-faint">{hint}</span> : null}
    </label>
  );

  return (
    <form action={action} noValidate className="rounded-card border border-edge bg-surface-2/70 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {field({ f: "name", label: copy.name, children: <input name="name" className={input} autoComplete="name" /> })}
        {field({ f: "email", label: copy.email, children: <input name="email" type="email" className={input} autoComplete="email" /> })}
        {field({ f: "contact", label: copy.contact, hint: copy.contactHint, children: <input name="contact" className={input} /> })}
        {field({ f: "traffic", label: copy.traffic, hint: copy.trafficHint, children: <input name="traffic" className={input} /> })}
      </div>
      <fieldset className="mt-5">
        <legend className="mb-2 block text-sm font-medium text-fg-muted">{copy.program}</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {([["ib", copy.programIb], ["affiliate", copy.programAffiliate]] as const).map(([v, l]) => (
            <label key={v} className={cn("flex cursor-pointer items-center gap-3 rounded-xl border border-edge bg-surface px-4 py-3 text-sm text-fg has-[:checked]:border-primary-hover has-[:checked]:bg-primary/10")}>
              <input type="radio" name="program" value={v} className="accent-[#42478b]" />
              {l}
            </label>
          ))}
        </div>
        {err("program") && <span className="mt-1 block text-xs text-red-400">{err("program")}</span>}
      </fieldset>
      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-medium text-fg-muted">{copy.message}</span>
        <textarea name="message" rows={3} className={input} />
      </label>
      {state.submitted && !state.ok && <p className="mt-4 text-sm text-red-400">{copy.errorHint}</p>}
      <button type="submit" disabled={pending} className={buttonClasses({ variant: "primary", size: "lg", className: "mt-6 w-full sm:w-auto" })}>
        {pending ? copy.sending : copy.submit}
      </button>
    </form>
  );
}
