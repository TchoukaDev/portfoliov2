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


export default function ContactForm() {
  //State
  const [showForm, setShowForm] = useState(true);

  const [serverState, setServerState] = useState<SendMailResponse | null>(null);

  const [isPending, setIsPending] = useState<boolean>(false);


  // React-Hook-Form + Resolver pour Zod
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors: clientErrors, isSubmitting, isSubmitted },
  } = useForm<ContactFormData>({
    resolver: zodResolver(sendMailSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  // Variables
  const firstname = register("firstname");
  const name = register("name");
  const email = register("email");
  const telephone = register("telephone");
  const message = register("message");

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


  useEffect(() => {
    if (serverState?.success) {
      setShowForm(false);
    }
  }, [serverState]);

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
              setShowForm(true); // réaffiche le formulaire
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
          <p className="text-center mb-10 text-gray-300">
            {/* eslint-disable-next-line */}
            Vous avez une question ou souhaitez travailler avec moi? N'hésitez
            pas à me contacter via ce formulaire, je vous répondrai au plus
            vite!
          </p>
          {/* Informations personnelles */}
          <div className="flex flex-col gap-8 items-center w-full">
            {/* Nom de famille */}
            <div className="w-full max-w-[400px] sm:w-fit relative">
              <input
                type="text"
                id="name"
                {...register("name")}
                placeholder=" "
                autoComplete="family-name"
                aria-required="true"
                aria-invalid={clientErrors.name ? "true" : "false"}
                aria-errormessage={clientErrors.name ? "name-error" : undefined}
                className="input peer"
              />
              <Label htmlFor="name">
                Nom*
              </Label>

              {/* Erreur côté client */}
              {clientErrors.name && (
                <p id="name-error" className="formError" role="alert">{clientErrors.name.message}</p>
              )}
              {/* Erreur côté serveur */}
              {serverState?.fieldErrors?.name && !clientErrors.name && (
                <p id="name-error" className="formError" role="alert">{serverState.fieldErrors.name}</p>
              )}
            </div>
            {/* Prénom */}{" "}
            <div className="w-full max-w-[400px] sm:w-fit relative">
              <input
                type="text"
                id="firstname"
                {...register("firstname")}
                placeholder=" "
                autoComplete="given-name"
                aria-required="true"
                className="input peer"
                aria-invalid={clientErrors.firstname ? "true" : "false"}
                aria-errormessage={clientErrors.firstname ? "firstname-error" : undefined}
              />
              <Label htmlFor={"firstname"}>
                Prénom*
              </Label>

              {/* Erreur côté client */}
              {clientErrors.firstname && (
                <p id="firstname-error" className="formError" role="alert">{clientErrors.firstname.message}</p>
              )}
              {/* Erreur côté serveur */}
              {serverState?.fieldErrors?.firstname &&
                !clientErrors.firstname && (
                  <p id="firstname-error" className="formError" role="alert">
                    {serverState.fieldErrors.firstname}
                  </p>
                )}
            </div>
            {/* Adresse email */}
            <div className="w-full max-w-[400px] sm:w-fit relative">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder=" "
                  autoComplete="email"
                  aria-required="true"
                  className="input peer"
                  aria-invalid={clientErrors.email ? "true" : "false"}
                  aria-errormessage={clientErrors.email ? "email-error" : undefined}
                />
                <Label htmlFor={"email"}>
                  Email*
                </Label>
              </div>
              {/* Erreur côté client */}
              {clientErrors.email && (
                <p id="email-error" className="formError" role="alert">{clientErrors.email.message}</p>
              )}
              {/* Erreur côté serveur */}
              {serverState?.fieldErrors?.email && !clientErrors.email && (
                <p id="email-error" className="formError" role="alert">{serverState.fieldErrors.email}</p>
              )}
            </div>
            {/* Téléphone */}
            <div className="w-full max-w-[400px] sm:w-fit relative">
              <input
                {...register("telephone")}
                type="tel"
                id="telephone"
                placeholder=" "
                autoComplete="tel"
                className="input peer"
                aria-invalid={clientErrors.telephone ? "true" : "false"}
                aria-errormessage={clientErrors.telephone ? "telephone-error" : undefined}
              />
              <Label htmlFor={"telephone"}>
                Téléphone
              </Label>

              {/* Erreur côté client */}
              {clientErrors.telephone && (
                <p id="telephone-error" className="formError" role="alert">{clientErrors.telephone.message}</p>
              )}
              {/* Erreur côté serveur */}
              {serverState?.fieldErrors?.telephone &&
                !clientErrors.telephone && (
                  <p id="telephone-error" className="formError" role="alert">
                    {serverState.fieldErrors.telephone}
                  </p>
                )}
            </div>
          </div>
          {/* Choix du mode de contact */}
          <div className="text-center mt-5 mb-2">

            <fieldset aria-required="true" aria-invalid={clientErrors.wayToContact ? "true" : "false"} aria-errormessage={clientErrors.wayToContact ? "wayToContact-error" : undefined} aria-live="polite" >

              <p className="mb-3 text-gray-300">
                <legend>Par quel moyen préférez-vous être recontacté?</legend>
              </p>
              <div className="flex justify-center text-center items-center gap-10 mb-3">
                <div className="flex items-center">
                  <label
                    htmlFor="prefersEmail"
                    className="inline-block align-middle mr-2 text-gray-300"
                  >
                    Email:
                  </label>
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
                </div>
                <div className="flex items-center">
                  <label
                    htmlFor="prefersPhone"
                    className="inline-block align-middle mr-2 text-gray-300"
                  >
                    Téléphone:
                  </label>
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
            </fieldset> </div>
          {/* Message */}
          <div className="w-full max-w-[700px] md:w-fit relative">
            <textarea
              className="input peer  w-fit max-w-full"
              rows={8}
              cols={80}
              id="message"
              {...register("message")}
              placeholder=" "
              aria-required="true"
              aria-invalid={clientErrors.message ? "true" : "false"}
              aria-errormessage={clientErrors.message ? "message-error" : undefined}
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
            <div className="formError" aria-live="polite">{serverState.error}</div>
          )}
        </form>
      </>
    );
}
