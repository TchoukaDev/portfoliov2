import { z } from "zod";

export const sendMailSchema = z
  .object({
    firstname: z
      .string()
      .min(1, "Veuillez saisir votre prénom")
      .max(30, "votre prénom ne peut pas dépasser 30 caractères"),

    name: z
      .string()
      .min(1, "Veuillez saisir votre nom")
      .max(30, "Votre nom ne peut pas dépasser 30 caractères"),

    email: z.string().email("Veuillez saisir une adresse email valide"),
    telephone: z
      .string()
      .optional()
      .refine(
        (val) => !val ||
          !val.trim() ||
          /^(?:\+33\s*|0)[1-9]\s*[0-9]{2}(\s*[0-9]{2}){3}\s*$/.test(val),
        {
          message: "Veuillez saisir un numéro de téléphone valide",
        },
      ),
    // Regex du téléphone expliqué :
    // ^(?:\+33\s*|0)    → Commence par +33 (indicatif France) OU 0, suivi d'espaces optionnels
    // [1-9]             → Premier chiffre APRÈS le +33/0 : 1-9 (pas 0, normes françaises)
    // \s*[0-9]{2}       → Groupe de 2 chiffres, espaces optionnels avant
    // (\s*[0-9]{2}){3}  → Répète 3 fois : groupe de 2 chiffres avec espaces optionnels
    // \s*$              → Espaces optionnels à la fin, fin de chaîne
    // Total : 10 chiffres après le +33 ou 0
    // Exemples valides : "+33 6 12 34 56 78", "0612345678", "+33612345678", "06 12 34 56 78"
    prefersPhone: z.boolean().optional().default(false),
    // .optional()      → Le champ peut être absent ou undefined
    // .default(false)  → Si absent/undefined, utilise false par défaut
    // Cela garantit que prefersPhone AURA TOUJOURS une valeur : true ou false
    // Sans default(), le type serait boolean | undefined, ce qui causerait des erreurs

    prefersEmail: z.boolean().optional().default(false),
    // Même logique que prefersPhone
    message: z
      .string()
      .min(1, "Veuillez saisir votre message")
      .max(500, "Votre message ne peut excéder 500 caractères"),
  })
  .refine((data) => data.prefersPhone || data.prefersEmail, {
    message: "Veuillez sélectionner un moyen de contact",
    path: ["wayToContact"],
  })
  .refine((data) => !(data.prefersPhone && !data.telephone), {
    message: "Veuillez saisir votre numéro de téléphone",
    path: ["telephone"],
  });


export type ContactFormData = z.input<typeof sendMailSchema> & { wayToContact?: never };