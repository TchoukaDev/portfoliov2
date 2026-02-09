"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMailSchema } from "@/lib/zod-schemas";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import Label from "../UI/Label";
import { sendMail } from "@/actions/sendMail";
import { SendMailResponse } from "@/actions/sendMail";
import { ContactFormData } from "@/lib/zod-schemas";
import Button from "../UI/Button";
import Input from "./Input";


export default function ContactForm() {
  //State


  const [serverState, setServerState] = useState<SendMailResponse | null>(null);

  const [isPending, setIsPending] = useState<boolean>(false);

  const showForm = !serverState?.success


  // React-Hook-Form + Resolver pour Zod
  const {
    register,
    handleSubmit,
    trigger, control,
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
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    const result = await sendMail(null, formData);

    setServerState({
      success: result.success,
      message: result.message,
      fieldErrors: result.fieldErrors || {},
      error: result.error || undefined,
    });
    setIsPending(false);
  };

  // Dans le useEffect ou après validation échouée :
  useEffect(() => {
    if (isSubmitted && Object.keys(clientErrors).length > 0) {
      // Focus sur le premier champ en erreur
      const firstErrorField = Object.keys(clientErrors)[0];
      const element = document.getElementById(firstErrorField);
      element?.focus();
    }
  }, [clientErrors, isSubmitted]);



  // Si succès, afficher uniquement le message et le bouton
  if (serverState?.success && !showForm) {
    return (
      <div>
        <p className="formSuccess mb-6 text-center">{serverState.message}</p>
        <div className="block mx-auto w-fit">
          <Button
            aria-label="Nouveau message"
            type="button"
            onClick={() => {
              reset(); // vide les champs
              setServerState(null);
            }}
          >
            Nouveau message
          </Button>
        </div>
      </div>
    );
  }

  if (showForm)
    return (
      <>
        <form
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto flex flex-col gap-6 items-center-"
        >

          {/* Informations personnelles */}
          <div className="flex flex-col gap-8 items-center w-full">
            {/* Nom de famille */}

            <Input
              type="text"
              name="name"
              label="Nom*"
              autoComplete="family-name"
              register={register}
              serverState={serverState}
              control={control}
            />

            {/* Prénom */}{" "}
            <Input
              type="text"
              name="firstname"
              label="Prénom*"
              autoComplete="given-name"
              register={register}
              serverState={serverState}
              control={control}
            />
            {/* Adresse email */}
            <Input
              type="email"
              name="email"
              label="Email*"
              autoComplete="email"
              register={register}
              serverState={serverState}
              control={control}
            />
            {/* Téléphone */}
            <Input
              type="tel"
              name="telephone"
              label="Téléphone"
              autoComplete="tel"
              register={register}
              serverState={serverState}
              control={control}
            />

          </div>
          {/* Choix du mode de contact */}
          <div className="text-center mt-5 mb-2">

            <fieldset aria-describedby={clientErrors.wayToContact ? "wayToContact-error" : undefined}  >

              <p className="mb-3 text-gray-400">
                <legend>Par quel moyen préférez-vous être recontacté?*</legend>
              </p>
              <div className="flex justify-center text-center items-center gap-10 mb-3">
                <div className="flex items-center">

                  <input
                    type="checkbox"
                    {...register("prefersEmail", {
                      onChange: () => {
                        // ✅ Trigger seulement si déjà soumis
                        if (isSubmitted) {
                          trigger("wayToContact");
                        }
                      },
                    })}
                    id="prefersEmail"
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="prefersEmail"
                    className="inline-block align-middle ml-2 text-gray-400"
                  >
                    Email
                  </label>
                </div>
                <div className="flex items-center">

                  <input
                    type="checkbox"
                    className="cursor-pointer"

                    {...register("prefersPhone", {
                      onChange: () => {
                        // ✅ Trigger seulement si déjà soumis
                        if (isSubmitted) {
                          trigger("wayToContact");
                          trigger("telephone");
                        }
                      },
                    })}
                    id="prefersPhone"
                  />
                  <label
                    htmlFor="prefersPhone"
                    className="inline-block align-middle ml-2 text-gray-400"
                  >
                    Téléphone
                  </label>
                </div>
              </div>

              {clientErrors?.wayToContact && (
                <p id="wayToContact-error" className="formError" role="alert">{clientErrors.wayToContact.message}</p>
              )}
              {serverState?.fieldErrors?.wayToContact &&
                !clientErrors.wayToContact && (
                  <p id="wayToContact-error" className="formError" role="alert">
                    {serverState.fieldErrors.wayToContact}
                  </p>
                )}
            </fieldset>
          </div>



          {/* Message */}
          <div className="w-full max-w-[700px] md:w-fit relative">
            <textarea
              className="input peer  w-fit max-w-full"
              rows={8}
              cols={80}
              id="message"
              {...register("message")}
              placeholder=" "
              aria-invalid={clientErrors.message ? "true" : "false"}
              aria-describedby={clientErrors.message ? "message-error" : undefined}
            />
            <Label htmlFor="message">
              Écrivez votre message*
            </Label>
            {/* Erreur client */}
            {clientErrors?.message && (
              <p id="message-error" className="formError" role="alert">{clientErrors.message.message}</p>
            )}
            {/* Erreur serveur */}
            {serverState?.fieldErrors?.message && !clientErrors.message && (
              <p id="message-error" className="formError" role="alert">{serverState?.fieldErrors.message}</p>
            )}
          </div>
          {/* Bouton d'envoi */}{" "}
          <div className="block min-w-[150px] mx-auto">
            <Button disabled={isSubmitting || isSubmitting} type="submit" aria-label="Envoyer le message">
              {isSubmitting || isPending ? (
                <span className="flex items-center text-sand justify-center gap-2">
                  Envoi en cours... <ClipLoader size={20} color="#f3f4f6" />
                </span>
              ) : (
                "Envoyer"
              )}
            </Button>
          </div>
          {/* Erreur serveur générale */}
          {serverState?.error && !serverState?.fieldErrors && (
            <div className="formError" role="alert">{serverState.error}</div>
          )}
        </form >
      </>
    );
}
