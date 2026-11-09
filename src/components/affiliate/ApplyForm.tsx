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
  errorHint: string;
  errors: Record<ApplyField, string>;
};

const input =
  "w-full rounded-xl border border-edge bg-surface px-4 py-2.5 text-base text-fg placeholder:text-fg-faint focus-visible:outline-2 focus-visible:outline-primary-hover";

export function ApplyForm({ copy }: { copy: ApplyCopy }) {
  const [state, action, pending] = useActionState<ApplyState, FormData>(applyPartner, { ok: false });

  if (state.ok) {
    return (
      <div className="rounded-card border border-edge bg-surface-2/70 p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success/20 text-success">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-xl font-semibold text-fg">{copy.successTitle}</h3>
        <p className="mt-2 text-sm text-fg-muted">{copy.successBody}</p>
      </div>
    );
  }

  const err = (f: ApplyField) => (state.errors?.[f] ? copy.errors[f] : null);
  const Field = ({ f, label, hint, children }: { f: ApplyField; label: string; hint?: string; children: React.ReactNode }) => (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-fg-muted">{label}</span>
      {children}
      {err(f) ? <span className="mt-1 block text-xs text-red-400">{err(f)}</span> : hint ? <span className="mt-1 block text-xs text-fg-faint">{hint}</span> : null}
    </label>
  );

  return (
    <form action={action} noValidate className="rounded-card border border-edge bg-surface-2/70 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field f="name" label={copy.name}><input name="name" className={input} autoComplete="name" /></Field>
        <Field f="email" label={copy.email}><input name="email" type="email" className={input} autoComplete="email" /></Field>
        <Field f="contact" label={copy.contact} hint={copy.contactHint}><input name="contact" className={input} /></Field>
        <Field f="traffic" label={copy.traffic} hint={copy.trafficHint}><input name="traffic" className={input} /></Field>
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
