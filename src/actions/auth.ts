"use server";

import { signOut } from "@/auth";
import { registerSchema } from "@/lib/zod-schemas";
import { UserService } from "@/services/userService";
import { ActionResponse } from "./types";

/**
 * Action serveur d'inscription.
 *
 * Flux :
 * 1. Extraction et validation des champs via Zod (`registerSchema`)
 * 2. Vérification que l'email correspond à `ADMIN_EMAIL` (accès restreint)
 * 3. Création de l'utilisateur via `userService.registerUser` (hash du mot de passe inclus)
 *
 * Retourne un `ActionResponse` indiquant le succès ou les erreurs (champ par champ
 * pour les erreurs de validation, message générique sinon).
 */
export async function registerAction(formData: FormData): Promise<ActionResponse> {
  const rawData = {
    firstname: formData.get("firstname"),
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const validationResult = registerSchema.safeParse(rawData);

  if (!validationResult.success) {
    // Reformatage des erreurs Zod en un dictionnaire { champ: message }
    const fieldErrors: Record<string, string> = {};
    validationResult.error.issues.forEach((issue) => {
      const fieldName = issue.path[0];
      if (typeof fieldName === "string") {
        fieldErrors[fieldName] = issue.message;
      }
    });
    return { success: false, error: "Veuillez corriger les champs", fieldErrors };
  }

  const { firstname, name, email, password } = validationResult.data;

  // Sécurité : seul l'email défini dans ADMIN_EMAIL peut créer un compte.
  // Le message d'erreur est volontairement vague pour ne pas révéler l'email attendu.
  if (!process.env.ADMIN_EMAIL || email !== process.env.ADMIN_EMAIL) {
    return { success: false, error: "Inscription non autorisée." };
  }

  try {
    await UserService.registerUser({ firstname, name, email, password });
    return { success: true, message: "Compte créé avec succès !" };
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "";
    // Détection d'un doublon d'email (contrainte unique en base)
    if (message.includes("Unique constraint")) {
      return {
        success: false,
        error: "Cet email est déjà utilisé",
        fieldErrors: { email: "Cet email est déjà utilisé" },
      };
    }
    return { success: false, error: "Une erreur est survenue. Veuillez réessayer." };
  }
}

/**
 * Action serveur de déconnexion.
 * Invalide la session JWT et redirige vers `/login`.
 */
export async function logoutAction() {
  await signOut({ redirectTo: "/login" });
}
