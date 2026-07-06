"use server";
import ContactEmail from "@/Components/ContactPage/ContactEmail";
import AutoReplyEmail from "@/Components/ContactPage/AutoReplyEmail";
import { sendMailSchema } from "@/lib/zod-schemas";
import { render } from "@react-email/render";
import { Resend } from "resend";

export interface SendMailResponse {
  success: boolean;
  message?: string;
  fieldErrors?: Record<string, string>;
  error?: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (
  prevState: SendMailResponse | null,
  formData: FormData,
): Promise<SendMailResponse> => {
  const standardError = "Veuillez corriger les champs dans le formulaire";

  try {
    if (!process.env.RESEND_API_KEY || !process.env.EMAIL_TO) {
      console.error("Erreur : RESEND_API_KEY ou EMAIL_TO non définis");
      return {
        success: false,
        error: "Erreur de configuration serveur. Veuillez réessayer plus tard.",
      };
    }

    // Honeypot : les bots remplissent ce champ, les humains non
    const honeypot = formData.get("website");
    if (honeypot) {
      // On simule un succès pour ne pas alerter le bot
      return {
        success: true,
        message:
          "Votre message a été envoyé avec succès ! Je reviens vers vous au plus vite.",
      };
    }

    // Time check : un humain met au moins 3 secondes à remplir le formulaire
    const formStartTime = Number(formData.get("_t"));
    if (formStartTime && Date.now() - formStartTime < 3000) {
      return {
        success: true,
        message:
          "Votre message a été envoyé avec succès ! Je reviens vers vous au plus vite.",
      };
    }

    const rawData = {
      firstname: formData.get("firstname"),
      name: formData.get("name"),
      email: formData.get("email"),
      projectType: formData.get("projectType"),
      activity: formData.get("activity") || undefined,
      deadline: formData.get("deadline") || undefined,
      message: formData.get("message"),
    };

    const validationResult = sendMailSchema.safeParse(rawData);

    if (validationResult.error) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((issue) => {
        const fieldName = issue.path[0];
        fieldErrors[typeof fieldName === "string" ? fieldName : ""] =
          issue.message;
      });
      return { success: false, error: standardError, fieldErrors };
    }

    const validatedData = validationResult.data;

    const [notifHtml, replyHtml] = await Promise.all([
      render(ContactEmail({ ...validatedData })),
      render(
        AutoReplyEmail({
          firstname: validatedData.firstname,
          name: validatedData.name,
        }),
      ),
    ]);

    const [notifResult, replyResult] = await Promise.all([
      resend.emails.send({
        from: "Formulaire de Contact <contact@romainwirth.fr>",
        to: [process.env.EMAIL_TO],
        replyTo: validatedData.email,
        subject: `Nouveau message de ${validatedData.firstname} ${validatedData.name}`,
        html: notifHtml,
      }),
      resend.emails.send({
        from: "Romain Wirth <contact@romainwirth.fr>",
        to: [validatedData.email],
        subject: "J'ai bien reçu votre message",
        html: replyHtml,
      }),
    ]);

    if (notifResult.error || replyResult.error) {
      console.error(
        "Erreur lors de l'envoi des emails:",
        notifResult.error,
        replyResult.error,
      );
      return {
        success: false,
        error: "Impossible d'envoyer l'email. Veuillez réessayer plus tard.",
      };
    }

    return {
      success: true,
      message:
        "Votre message a été envoyé avec succès ! Je reviens vers vous au plus vite.",
    };
  } catch (e) {
    console.error(e);
    return {
      success: false,
      error:
        "Une erreur est survenue côté serveur. Veuillez réessayer plus tard.",
    };
  }
};
