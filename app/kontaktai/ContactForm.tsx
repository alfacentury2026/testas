"use client";

import { useState, type FormEvent } from "react";

type ContactField = "name" | "phone" | "email" | "message";
type ContactErrors = Partial<Record<ContactField, string>>;
type SubmissionState = "idle" | "submitting" | "success" | "error";

const fieldClassName =
  "w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-500";

function validateForm(formData: FormData): ContactErrors {
  const errors: ContactErrors = {};
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name) errors.name = "Įveskite savo vardą.";
  if (!phone) errors.phone = "Įveskite telefono numerį.";
  if (!email) {
    errors.email = "Įveskite el. pašto adresą.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Įveskite galiojantį el. pašto adresą.";
  }
  if (!message) errors.message = "Įveskite žinutę.";

  return errors;
}

export default function ContactForm({
  collection,
}: {
  collection: string;
}) {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");

  function clearError(field: ContactField) {
    setErrors((currentErrors) => {
      if (!currentErrors[field]) return currentErrors;
      const nextErrors = { ...currentErrors };
      delete nextErrors[field];
      return nextErrors;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionState === "submitting") return;

    const form = event.currentTarget;
    const validationErrors = validateForm(new FormData(form));
    setErrors(validationErrors);
    setSubmissionState("idle");

    if (Object.keys(validationErrors).length > 0) return;

    setSubmissionState("submitting");
    try {
      // Development placeholder: submission is simulated and no data is sent.
      await new Promise<void>((resolve) => window.setTimeout(resolve, 500));
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  }

  if (submissionState === "success") {
    return (
      <p className="mt-8 text-sm leading-6 text-stone-700" role="status">
        Ačiū! Jūsų užklausa gauta. Netrukus su jumis susisieksime.
      </p>
    );
  }

  return (
    <form className="mt-8 space-y-6" noValidate onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          Vardas
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          onChange={() => clearError("name")}
          className={fieldClassName}
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-sm text-red-700" role="alert">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          Telefono numeris
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          onChange={() => clearError("phone")}
          className={fieldClassName}
        />
        {errors.phone && (
          <p
            id="phone-error"
            className="mt-2 text-sm text-red-700"
            role="alert"
          >
            {errors.phone}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          El. paštas
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          onChange={() => clearError("email")}
          className={fieldClassName}
        />
        {errors.email && (
          <p
            id="email-error"
            className="mt-2 text-sm text-red-700"
            role="alert"
          >
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="kolekcija"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          Domina kolekcija
        </label>
        <input
          id="kolekcija"
          name="kolekcija"
          type="text"
          defaultValue={collection}
          className={fieldClassName}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          Žinutė
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={() => clearError("message")}
          className={`${fieldClassName} resize-y`}
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-2 text-sm text-red-700"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>
      {submissionState === "error" && (
        <p className="text-sm text-red-700" role="alert">
          Nepavyko išsiųsti užklausos. Bandykite dar kartą.
        </p>
      )}
      <button
        type="submit"
        disabled={submissionState === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-md bg-black px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submissionState === "submitting" ? "Siunčiama..." : "Siųsti užklausą"}
      </button>
    </form>
  );
}
