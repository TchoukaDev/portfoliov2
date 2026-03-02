"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { articleSchema, ArticleFormData } from "@/lib/zod-schemas";
import { createArticleAction, updateArticleAction } from "@/actions/article";
import { generateSlug } from "@/lib/slugify";
import { ActionResponse } from "@/actions/types";
import FormInput from "@/Components/UI/FormInput";
import Button from "@/Components/UI/Button";
import Label from "@/Components/UI/Label";

/** Données d'un article existant passées au formulaire en mode édition. */
type ArticleDefaults = {
  id?: string;
  title?: string;
  slug?: string;
  content?: string;
  excerpt?: string;
  published?: boolean;
};

/**
 * @param defaultValues - Valeurs pré-remplies en mode édition. Absent en mode création.
 * @param mode          - `"create"` pour un nouvel article, `"edit"` pour modifier un existant.
 */
interface ArticleFormProps {
  defaultValues?: ArticleDefaults;
  mode: "create" | "edit";
}

/**
 * Formulaire de création et d'édition d'article pour le back-office.
 *
 * Fonctionne en deux modes contrôlés par la prop `mode` :
 * - `"create"` → appelle `createArticleAction`
 * - `"edit"`   → appelle `updateArticleAction` avec l'id de `defaultValues`
 *
 * La validation est effectuée côté client par React Hook Form + Zod (`articleSchema`),
 * puis confirmée côté serveur dans la server action. Les erreurs champ par champ
 * retournées par le serveur sont affichées via `serverState.fieldErrors`.
 *
 * Après un succès, le composant redirige vers `/admin/articles` et rafraîchit
 * le cache Next.js pour que la liste reflète les dernières données.
 */
export default function ArticleForm({ defaultValues, mode }: ArticleFormProps) {
  const router = useRouter();
  const [serverState, setServerState] = useState<ActionResponse | null>(null);
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<ArticleFormData>({
    resolver: zodResolver(articleSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      title: defaultValues?.title ?? "",
      slug: defaultValues?.slug ?? "",
      content: defaultValues?.content ?? "",
      excerpt: defaultValues?.excerpt ?? "",
      published: defaultValues?.published ?? false,
    },
  });

  /**
   * Génère et injecte un slug depuis la valeur courante du champ titre.
   * Utilise `getValues` (lecture ponctuelle) plutôt que `watch` pour éviter
   * les re-renders à chaque frappe.
   */
  const handleGenerateSlug = () => {
    setValue("slug", generateSlug(getValues("title") ?? ""), { shouldValidate: true });
  };

  /**
   * Soumet le formulaire validé vers la server action correspondante au mode.
   * Les données sont converties en `FormData` car les server actions Next.js
   * attendent ce format (compatible avec la progressive enhancement HTML).
   */
  const onSubmit = async (data: ArticleFormData) => {
    setIsPending(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined) formData.append(key, String(value));
    });

    const result =
      mode === "edit" && defaultValues?.id
        ? await updateArticleAction(defaultValues.id, formData)
        : await createArticleAction(formData);

    setServerState(result);
    setIsPending(false);

    if (result.success) {
      router.push("/admin/articles");
      router.refresh();
    }
  };

  return (
    <form
      method="POST"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6"
    >
      <FormInput
        name="title"
        label="Titre*"
        register={register}
        error={errors.title?.message}
        serverError={serverState?.fieldErrors?.title}
      />

      <div className="flex gap-2 items-end">
        <div className="flex-1">
          <FormInput
            name="slug"
            label="Slug*"
            register={register}
            error={errors.slug?.message}
            serverError={serverState?.fieldErrors?.slug}
          />
        </div>
        <button
          type="button"
          onClick={handleGenerateSlug}
          className="px-3 py-2 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors mb-1 cursor-pointer"
        >
          Générer
        </button>
      </div>

      <div className="w-full relative">
        <textarea
          id="content"
          {...register("content")}
          placeholder=" "
          rows={12}
          className="input peer w-full"
          aria-invalid={errors.content ? "true" : "false"}
          aria-describedby={errors.content ? "content-error" : undefined}
        />
        <Label htmlFor="content">Contenu*</Label>
        {errors.content && (
          <p id="content-error" className="formError" role="alert">
            {errors.content.message}
          </p>
        )}
      </div>

      <div className="w-full relative">
        <textarea
          id="excerpt"
          {...register("excerpt")}
          placeholder=" "
          rows={3}
          className="input peer w-full"
          aria-describedby={errors.excerpt ? "excerpt-error" : undefined}
        />
        <Label htmlFor="excerpt">Extrait (optionnel)</Label>
        {errors.excerpt && (
          <p id="excerpt-error" className="formError" role="alert">
            {errors.excerpt.message}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="published"
          {...register("published")}
          className="cursor-pointer w-5 h-5"
        />
        <label htmlFor="published" className="text-gray-400 cursor-pointer">
          Publier l&apos;article
        </label>
      </div>

      {serverState?.error && (
        <p className="formError" role="alert">{serverState.error}</p>
      )}

      <div className="flex gap-3">
        <Button type="submit" disabled={isSubmitting || isPending}>
          {isSubmitting || isPending ? (
            <span className="flex items-center gap-2">
              Enregistrement...{" "}
              <span className="inline-block w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
            </span>
          ) : mode === "edit" ? (
            "Mettre à jour"
          ) : (
            "Créer l'article"
          )}
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => router.push("/admin/articles")}
        >
          Annuler
        </Button>
      </div>
    </form>
  );
}
