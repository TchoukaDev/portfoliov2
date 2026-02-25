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

// --- Inscription ---
export const registerSchema = z
  .object({
    firstname: z.string().min(1, "Prénom requis").max(30),
    name: z.string().min(1, "Nom requis").max(30),
    email: z.string().email("Email invalide"),
    password: z.string().min(8, "Minimum 8 caractères"),
    confirmPassword: z.string().min(1, "Confirmation requise"),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

// --- Connexion ---
export const loginSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(1, "Mot de passe requis"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// --- Article ---
export const articleSchema = z.object({
  title: z.string().min(1, "Titre requis").max(200),
  slug: z.string().min(1, "Slug requis").max(200),
  content: z.string().min(1, "Contenu requis"),
  excerpt: z.string().max(500).optional(),
  published: z.boolean(),
});

export type ArticleFormData = z.infer<typeof articleSchema>;