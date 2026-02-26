import type { NextAuthConfig } from "next-auth";

/**
 * Configuration NextAuth allégée, compatible avec le runtime Edge (middleware Next.js).
 *
 * Ce fichier est intentionnellement séparé de `auth.ts` : le middleware Next.js
 * s'exécute dans le runtime Edge (Cloudflare Workers), qui n'accepte pas les
 * modules Node.js natifs comme Prisma ou bcryptjs. En isolant ici uniquement la
 * logique de vérification de session (validation du JWT), on évite de bundler
 * ces dépendances dans le middleware.
 *
 * `auth.ts` étend cette config avec les providers et les imports Node.js.
 */
export const authConfig: NextAuthConfig = {
  providers: [],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  callbacks: {
    /**
     * Appelé par le middleware à chaque requête correspondant au matcher.
     * Le matcher filtre déjà les routes protégées — on vérifie simplement
     * qu'une session active existe.
     */
    authorized({ auth }) {
      return !!auth?.user;
    },
  },
};
