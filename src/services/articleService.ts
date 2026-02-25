import { ArticleRepository } from "@/repositories/articleRepository";
import { generateSlug } from "@/lib/slugify";

export class ArticleService {
  /**
   * Crée un article en base.
   * Si le slug est vide, il est généré automatiquement depuis le titre.
   * L'`authorId` provient de la session (jamais du formulaire client).
   */
  static async createArticle(
    data: { title: string; slug: string; content: string; excerpt?: string | null; published: boolean },
    authorId: string
  ) {
    const slug = data.slug || generateSlug(data.title);
    return ArticleRepository.createArticle({ ...data, slug }, authorId);
  }

  /**
   * Met à jour un article existant.
   * Si le slug est vide, il est régénéré depuis le titre.
   */
  static async updateArticle(
    id: string,
    data: { title?: string; slug?: string; content?: string; excerpt?: string | null; published?: boolean }
  ) {
    const slug = data.slug || (data.title ? generateSlug(data.title) : undefined);
    return ArticleRepository.updateArticle(id, { ...data, slug });
  }

  /**
   * Supprime définitivement un article par son identifiant.
   */
  static async deleteArticle(id: string) {
    return ArticleRepository.deleteArticle(id);
  }
}
