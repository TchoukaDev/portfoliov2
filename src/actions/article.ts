"use server";

import { auth } from "@/auth";
import { articleSchema } from "@/lib/zod-schemas";
import { ArticleRepository } from "@/repositories/articleRepository";
import { ArticleService } from "@/services/articleService";
import { ActionResponse } from "./types";
import { revalidatePath } from "next/cache";

/**
 * Vérifie qu'une session active existe et retourne l'utilisateur connecté.
 * Lance une erreur si la session est absente, ce qui est capturé par les
 * blocs `try/catch` des actions et retourné comme erreur générique.
 * (Le middleware protège déjà les routes `/admin`, mais cette vérification
 * double la sécurité au niveau des actions elles-mêmes.)
 */
async function requireAuth() {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Non autorisé");
  return session.user;
}

/**
 * Extrait et normalise les champs d'article depuis un `FormData`.
 * La valeur de `published` est transmise sous forme de string `"true"/"false"`
 * par les formulaires HTML et doit être convertie en booléen.
 * La génération du slug (si vide) est déléguée à `ArticleService`.
 */
function parseArticleFormData(formData: FormData) {
  return {
    title: formData.get("title"),
    slug: formData.get("slug"),
    content: formData.get("content"),
    excerpt: formData.get("excerpt") || undefined,
    published: formData.get("published") === "true",
  };
}

/**
 * Convertit un tableau d'issues Zod en dictionnaire `{ champ: message }`,
 * utilisable directement par les composants de formulaire pour afficher
 * les erreurs champ par champ.
 */
function formatZodErrors(issues: { path: PropertyKey[]; message: string }[]) {
  const fieldErrors: Record<string, string> = {};
  issues.forEach((issue) => {
    const fieldName = issue.path[0];
    if (typeof fieldName === "string") fieldErrors[fieldName] = issue.message;
  });
  return fieldErrors;
}

/**
 * Action serveur de création d'un article.
 * Après succès, invalide le cache des pages `/blog` et `/admin/articles`
 * pour que Next.js les regénère avec les données fraîches.
 */
export async function createArticleAction(formData: FormData): Promise<ActionResponse> {
  try {
    const user = await requireAuth();
    const rawData = parseArticleFormData(formData);
    const result = articleSchema.safeParse(rawData);

    if (!result.success) {
      return { success: false, error: "Données invalides", fieldErrors: formatZodErrors(result.error.issues) };
    }

    // L'authorId provient de la session, jamais du formulaire client
    const article = await ArticleService.createArticle(result.data, user.id as string);
    revalidatePath("/blog");
    revalidatePath(`/blog/${article.slug}`);
    revalidatePath("/admin/articles");
    return { success: true, message: "Article créé avec succès" };
  } catch (e) {
    console.error("[createArticleAction]", e);
    return { success: false, error: "Une erreur est survenue" };
  }
}

/**
 * Action serveur de mise à jour d'un article existant.
 * Après succès, invalide le cache des pages concernées.
 */
export async function updateArticleAction(id: string, formData: FormData): Promise<ActionResponse> {
  try {
    await requireAuth();
    const rawData = parseArticleFormData(formData);
    const result = articleSchema.safeParse(rawData);

    if (!result.success) {
      return { success: false, error: "Données invalides", fieldErrors: formatZodErrors(result.error.issues) };
    }

    const article = await ArticleService.updateArticle(id, result.data);
    revalidatePath("/blog");
    revalidatePath(`/blog/${article.slug}`);
    revalidatePath("/admin/articles");
    return { success: true, message: "Article mis à jour" };
  } catch {
    return { success: false, error: "Une erreur est survenue" };
  }
}

/**
 * Action serveur de suppression d'un article.
 * La suppression est définitive — aucune corbeille n'est implémentée.
 * Après succès, invalide le cache des pages concernées.
 */
export async function deleteArticleAction(id: string): Promise<ActionResponse> {
  try {
    await requireAuth();
    const article = await ArticleRepository.getArticleById(id);
    await ArticleService.deleteArticle(id);
    revalidatePath("/blog");
    if (article) revalidatePath(`/blog/${article.slug}`);
    revalidatePath("/admin/articles");
    return { success: true, message: "Article supprimé" };
  } catch {
    return { success: false, error: "Une erreur est survenue" };
  }
}
