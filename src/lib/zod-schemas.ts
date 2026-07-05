import { z } from "zod";

// Options de qualification du projet (réutilisées par le formulaire et l'email).
export const projectTypes = [
  "Création de site",
  "Refonte de site existant",
  "Accompagnement à la création",
  "Autre / Je ne sais pas",
] as const;

export const deadlines = [
  "Le plus tôt possible",
  "Dans 1 à 3 mois",
  "Dans 3 à 6 mois",
  "Pas de date précise",
] as const;

export const sendMailSchema = z.object({
  firstname: z
    .string()
    .min(1, "Veuillez saisir votre prénom")
    .max(30, "Votre prénom ne peut pas dépasser 30 caractères"),

  name: z
    .string()
    .min(1, "Veuillez saisir votre nom")
    .max(30, "Votre nom ne peut pas dépasser 30 caractères"),

  email: z.string().email("Veuillez saisir une adresse email valide"),

  // Qualification de la demande en amont
  projectType: z.enum(projectTypes, {
    message: "Veuillez sélectionner un type de projet",
  }),

  activity: z
    .string()
    .max(60, "60 caractères maximum")
    .optional(),

  // Optionnel : la chaîne vide (option par défaut du select) est tolérée.
  deadline: z.enum(deadlines).or(z.literal("")).optional(),

  message: z
    .string()
    .min(1, "Veuillez saisir votre message")
    .max(500, "Votre message ne peut excéder 500 caractères"),
});


export type ContactFormData = z.input<typeof sendMailSchema>;

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