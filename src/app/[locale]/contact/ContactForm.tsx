"use client";

import { useActionState } from "react";
import { useLocale } from "next-intl";
import { submitContact, type ContactState } from "./actions";
import { countries } from "@/lib/countries";
import { getContact } from "@/content/contact";
import { buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const initial: ContactState = { ok: false };

const field =
  "w-full rounded-xl border bg-surface px-4 py-3 text-fg placeholder:text-fg-faint focus-visible:outline-2 focus-visible:outline-primary-hover";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);
  const c = getContact(useLocale());

  if (state.ok) {
    return (
      <div className="flex flex-col items-center rounded-card border border-success/40 bg-success/5 p-10 text-center">
        <span className="text-success">
          <Icon name="verified" className="h-12 w-12" />
        </span>
        <h3 className="mt-4 text-xl font-semibold text-fg">{c.sentTitle}</h3>
        <p className="mt-2 max-w-sm text-sm text-fg-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5" noValidate>
      <Row label={c.fullName} htmlFor="name" error={state.errors?.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={!!state.errors?.name}
          className={cn(field, state.errors?.name ? "border-danger" : "border-edge")}
          placeholder="Jane Doe"
        />
      </Row>

      <Row label={c.email} htmlFor="email" error={state.errors?.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={!!state.errors?.email}
          className={cn(field, state.errors?.email ? "border-danger" : "border-edge")}
          placeholder="you@example.com"
        />
      </Row>

      <Row label={c.country} htmlFor="country" error={state.errors?.country}>
        <select
          id="country"
          name="country"
          required
          defaultValue=""
          aria-invalid={!!state.errors?.country}
          className={cn(field, state.errors?.country ? "border-danger" : "border-edge")}
        >
          <option value="" disabled>
            {c.selectCountry}
          </option>
          {countries.map((c) => (
            <option key={c} value={c} className="bg-surface-2">
              {c}
            </option>
          ))}
        </select>
      </Row>

      <Row label={c.message} htmlFor="message" error={state.errors?.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!state.errors?.message}
          className={cn(field, "resize-y", state.errors?.message ? "border-danger" : "border-edge")}
          placeholder={c.messagePh}
        />
      </Row>

      {state.message && !state.ok && (
        <p className="text-sm text-danger" role="alert">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className={buttonClasses({ variant: "primary", size: "lg", className: "w-full" })}
      >
        {pending ? c.sending : c.submit}
      </button>

      <p className="text-xs text-fg-faint">{c.agree}</p>
    </form>
  );
}

function Row({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-fg-muted">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
