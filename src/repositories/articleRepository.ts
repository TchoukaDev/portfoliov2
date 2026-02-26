import { db } from "@/lib/db";
import { articles } from "@/db/schema";
import { eq, desc, count } from "drizzle-orm";

export class ArticleRepository {
  /**
   * Récupère tous les articles publiés, triés du plus récent au plus ancien.
   * Inclut le prénom et le nom de l'auteur (jointure automatique via les relations Drizzle).
   * Utilisé sur la page publique `/blog`.
   */
  static async getPublishedArticles() {
    return db.query.articles.findMany({
      where: eq(articles.published, true),
      orderBy: [desc(articles.createdAt)],
      with: { author: { columns: { firstname: true, name: true } } },
    });
  }

  /**
   * Récupère une page d'articles publiés avec le total pour la pagination.
   * Utilisé sur `/articles`.
   */
  static async getPublishedArticlesPaginated(page: number, limit: number) {
    const offset = (page - 1) * limit;
    const [items, [{ total }]] = await Promise.all([
      db.query.articles.findMany({
        where: eq(articles.published, true),
        orderBy: [desc(articles.createdAt)],
        with: { author: { columns: { firstname: true, name: true } } },
        limit,
        offset,
      }),
      db.select({ total: count() }).from(articles).where(eq(articles.published, true)),
    ]);
    return { items, total: Number(total) };
  }

  /**
   * Récupère tous les articles (publiés et brouillons), triés du plus récent au plus ancien.
   * Réservé au back-office `/admin/articles`.
   */
  static async getAllArticles() {
    return db.query.articles.findMany({
      orderBy: [desc(articles.createdAt)],
      with: { author: { columns: { firstname: true, name: true } } },
    });
  }

  /**
   * Récupère un article par son slug.
   * Retourne `null` si aucun article ne correspond.
   * Utilisé sur la page `/blog/[slug]`.
   */
  static async getArticleBySlug(slug: string) {
    return (
      (await db.query.articles.findFirst({
        where: eq(articles.slug, slug),
        with: { author: { columns: { firstname: true, name: true } } },
      })) ?? null
    );
  }

  /**
   * Récupère un article par son identifiant unique.
   * Retourne `null` si aucun article ne correspond.
   * Utilisé dans le formulaire d'édition `/admin/articles/[id]/edit`.
   */
  static async getArticleById(id: string) {
    return (
      (await db.query.articles.findFirst({
        where: eq(articles.id, id),
      })) ?? null
    );
  }

  /**
   * Insère un nouvel article en base et retourne la ligne créée.
   * L'`authorId` est passé séparément du reste des données pour forcer
   * sa provenance depuis la session (jamais depuis le formulaire client).
   */
  static async createArticle(
    data: {
      title: string;
      slug: string;
      content: string;
      excerpt?: string | null;
      published: boolean;
    },
    authorId: string
  ) {
    const result = await db.insert(articles).values({ ...data, authorId }).returning();
    return result[0];
  }

  /**
   * Met à jour les champs fournis d'un article existant.
   * `updatedAt` est forcé à `new Date()` pour garantir sa mise à jour,
   * en complément du `$onUpdate` du schéma Drizzle.
   */
  static async updateArticle(
    id: string,
    data: {
      title?: string;
      slug?: string;
      content?: string;
      excerpt?: string | null;
      published?: boolean;
    }
  ) {
    const result = await db
      .update(articles)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(articles.id, id))
      .returning();
    return result[0];
  }

  /**
   * Supprime définitivement un article par son identifiant.
   */
  static async deleteArticle(id: string) {
    await db.delete(articles).where(eq(articles.id, id));
  }
}
