import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

/**
 * Table `users` — administrateurs du blog.
 *
 * L'inscription est restreinte à l'adresse définie dans ADMIN_EMAIL,
 * il n'y a donc qu'un seul utilisateur en pratique.
 */
export const users = pgTable("users", {
  /** Identifiant unique généré côté application (UUID v4). */
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  firstname: text("firstname").notNull(),
  name: text("name").notNull(),
  /** Email unique, utilisé comme identifiant de connexion. */
  email: text("email").notNull().unique(),
  /** Mot de passe hashé avec bcrypt (jamais stocké en clair). */
  password: text("password").notNull(),
  /** Indique si l'utilisateur a les droits administrateur. */
  isAdmin: boolean("is_admin").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/**
 * Table `articles` — articles du blog.
 *
 * Un article peut être un brouillon (`published: false`) ou publié.
 * Seuls les articles publiés apparaissent sur `/blog`.
 */
export const articles = pgTable("articles", {
  /** Identifiant unique généré côté application (UUID v4). */
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  /** Slug URL-friendly, unique, généré depuis le titre (ex: "mon-article"). */
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  /** Résumé court affiché sur la liste du blog. Optionnel. */
  excerpt: text("excerpt"),
  /** `false` par défaut : l'article est un brouillon jusqu'à publication explicite. */
  published: boolean("published").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  /**
   * Mis à jour automatiquement par Drizzle à chaque appel à `.update()`.
   * `$defaultFn` fixe la valeur à l'insertion, `$onUpdate` la rafraîchit à chaque modification.
   */
  updatedAt: timestamp("updated_at")
    .notNull()
    .$defaultFn(() => new Date())
    .$onUpdate(() => new Date()),
  /** Clé étrangère vers l'auteur (cascade non configurée : supprimer l'auteur est bloqué). */
  authorId: text("author_id")
    .notNull()
    .references(() => users.id),
});

// --- Relations (utilisées par db.query.* pour les jointures automatiques) ---

/** Un utilisateur peut avoir plusieurs articles. */
export const usersRelations = relations(users, ({ many }) => ({
  articles: many(articles),
}));

/** Chaque article appartient à un seul auteur. */
export const articlesRelations = relations(articles, ({ one }) => ({
  author: one(users, { fields: [articles.authorId], references: [users.id] }),
}));

// --- Types inférés depuis le schéma Drizzle ---
export type User = typeof users.$inferSelect;
export type Article = typeof articles.$inferSelect;
