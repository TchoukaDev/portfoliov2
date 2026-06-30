"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { sendMail, SendMailResponse } from "@/actions/sendMail";
import {
  sendMailSchema,
  ContactFormData,
  projectTypes,
  deadlines,
} from "@/lib/zod-schemas";
import Button from "../UI/Button";
import Label from "../UI/Label";

// Champ texte avec label flottant (même rendu que le reste du site)
const inputClass =
  "peer block w-full rounded-xl border border-gray-800 bg-gray-900/50 px-4 pt-5 md:pt-7 pb-2 font-semibold text-gray-300 placeholder-transparent outline-blue-500";
// Selects : le label reste relevé (un select a toujours une valeur)
const selectClass =
  "peer block w-full rounded-xl border border-gray-800 bg-gray-900/50 px-4 pt-5 md:pt-7 pb-2 font-semibold text-gray-300 outline-blue-500";
const staticLabelClass =
  "pointer-events-none absolute left-3 top-1 text-xs text-gray-500 transition-all peer-focus:text-blue-500!";
const errorClass = "formError text-left";

export default function ContactForm() {
  const [serverState, setServerState] = useState<SendMailResponse | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  const showForm = !serverState?.success;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: clientErrors, isSubmitting, isSubmitted },
  } = useForm<ContactFormData>({
    resolver: zodResolver(sendMailSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  // Envoi du formulaire au serveur
  const onSubmit = async (data: ContactFormData) => {
    setIsPending(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) formData.append(key, String(value));
    });

    const result = await sendMail(null, formData);

    setServerState({
      success: result.success,
      message: result.message,
      fieldErrors: result.fieldErrors || {},
      error: result.error || undefined,
    });
    setIsPending(false);
  };

  // Focus sur le premier champ en erreur après soumission
  useEffect(() => {
    if (isSubmitted && Object.keys(clientErrors).length > 0) {
      const firstErrorField = Object.keys(clientErrors)[0];
      const element = document.getElementById(firstErrorField);
      element?.focus();
    }
  }, [clientErrors, isSubmitted]);

  // Message d'erreur (client prioritaire, sinon serveur)
  const fieldError = (field: keyof ContactFormData) =>
    clientErrors[field]?.message || serverState?.fieldErrors?.[field];

  // Si succès, afficher uniquement le message et le bouton
  if (serverState?.success && !showForm) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-gray-800 bg-gray-900/40 p-8 text-center">
        <p className="formSuccess mb-6">{serverState.message}</p>
        <div className="mx-auto block w-fit">
          <Button
            aria-label="Nouveau message"
            type="button"
            onClick={() => {
              reset();
              setServerState(null);
            }}
          >
            Nouveau message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      method="POST"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mx-auto flex max-w-xl flex-col gap-6 rounded-2xl border border-gray-800 bg-gray-900/40 p-6 md:p-8"
    >
      {/* Prénom + Nom */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="relative">
          <input
            type="text"
            id="firstname"
            autoComplete="given-name"
            placeholder=" "
            className={inputClass}
            aria-invalid={fieldError("firstname") ? "true" : "false"}
            {...register("firstname")}
          />
          <Label htmlFor="firstname">Prénom*</Label>
          {fieldError("firstname") && (
            <p className={errorClass} role="alert">{fieldError("firstname")}</p>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            id="name"
            autoComplete="family-name"
            placeholder=" "
            className={inputClass}
            aria-invalid={fieldError("name") ? "true" : "false"}
            {...register("name")}
          />
          <Label htmlFor="name">Nom*</Label>
          {fieldError("name") && (
            <p className={errorClass} role="alert">{fieldError("name")}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="relative">
        <input
          type="email"
          id="email"
          autoComplete="email"
          placeholder=" "
          className={inputClass}
          aria-invalid={fieldError("email") ? "true" : "false"}
          {...register("email")}
        />
        <Label htmlFor="email">Email*</Label>
        {fieldError("email") && (
          <p className={errorClass} role="alert">{fieldError("email")}</p>
        )}
      </div>

      {/* Type de projet + Échéance */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="relative">
          <select
            id="projectType"
            className={selectClass}
            defaultValue=""
            aria-invalid={fieldError("projectType") ? "true" : "false"}
            {...register("projectType")}
          >
            <option value="" className="bg-gray-900 text-gray-300">
              Sélectionnez…
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type} className="bg-gray-900 text-gray-200">
                {type}
              </option>
            ))}
          </select>
          <label htmlFor="projectType" className={staticLabelClass}>
            Type de projet*
          </label>
          {fieldError("projectType") && (
            <p className={errorClass} role="alert">{fieldError("projectType")}</p>
          )}
        </div>

        <div className="relative">
          <select
            id="deadline"
            className={selectClass}
            defaultValue=""
            {...register("deadline")}
          >
            <option value="" className="bg-gray-900 text-gray-300">
              Non précisée
            </option>
            {deadlines.map((d) => (
              <option key={d} value={d} className="bg-gray-900 text-gray-200">
                {d}
              </option>
            ))}
          </select>
          <label htmlFor="deadline" className={staticLabelClass}>
            Échéance souhaitée
          </label>
        </div>
      </div>

      {/* Type d'activité */}
      <div className="relative">
        <input
          type="text"
          id="activity"
          placeholder=" "
          className={inputClass}
          aria-invalid={fieldError("activity") ? "true" : "false"}
          {...register("activity")}
        />
        <Label htmlFor="activity">Votre activité (artisan, commerçant…)</Label>
        {fieldError("activity") && (
          <p className={errorClass} role="alert">{fieldError("activity")}</p>
        )}
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          id="message"
          rows={6}
          placeholder=" "
          className={`${inputClass} resize-y`}
          aria-invalid={fieldError("message") ? "true" : "false"}
          {...register("message")}
        />
        <Label htmlFor="message">Votre message*</Label>
        {fieldError("message") && (
          <p className={errorClass} role="alert">{fieldError("message")}</p>
        )}
      </div>

      {/* Bouton d'envoi */}
      <Button
        disabled={isSubmitting || isPending}
        type="submit"
        aria-label="Envoyer le message"
        className="w-full"
      >
        {isSubmitting || isPending ? (
          <span className="flex items-center justify-center gap-2">
            Envoi en cours…
            <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-transparent" />
          </span>
        ) : (
          "Envoyer"
        )}
      </Button>

      {/* Erreur serveur générale */}
      {serverState?.error && !serverState?.fieldErrors && (
        <div className="formError" role="alert">{serverState.error}</div>
      )}
    </form>
  );
}
