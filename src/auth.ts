import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "@/auth.config";
import { loginSchema } from "@/lib/zod-schemas";
import { UserRepository } from "@/repositories/userRepository";

/**
 * Configuration complète de NextAuth, à utiliser uniquement dans le runtime Node.js
 * (server actions, route handlers, server components).
 *
 * Ne jamais importer ce fichier depuis le middleware — utiliser `auth.config.ts`
 * à la place, car ce fichier importe bcryptjs et la base de données, qui sont
 * incompatibles avec le runtime Edge.
 *
 * Exports :
 * - `handlers` → monté sur `/api/auth/[...nextauth]` pour gérer les requêtes OAuth/credentials
 * - `auth`     → récupère la session courante dans les server components et actions
 * - `signIn`   → démarre une session (utilisé dans les formulaires de connexion)
 * - `signOut`  → termine la session (utilisé dans l'action de déconnexion)
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  // On étend la config Edge (strategy JWT, pages, callback authorized)
  ...authConfig,
  providers: [
    Credentials({
      /**
       * Valide les identifiants soumis via le formulaire de connexion.
       * Retourne l'objet User à stocker dans le JWT, ou `null` si les
       * identifiants sont incorrects (sans préciser pourquoi, par sécurité).
       *
       * Étapes :
       * 1. Validation du format des données avec Zod
       * 2. Recherche de l'utilisateur en base par email
       * 3. Comparaison du mot de passe avec le hash bcrypt
       */
      authorize: async (credentials) => {
        const validationResult = loginSchema.safeParse(credentials);
        if (!validationResult.success) return null;

        const { email, password } = validationResult.data;

        const user = await UserRepository.getUserByEmail(email);
        if (!user) return null;
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return null;

        return { id: user.id, email: user.email, name: `${user.firstname} ${user.name}` };
      },
    }),
  ],
  callbacks: {
    /**
     * Persiste l'id dans le token JWT lors de la création de session.
     * `user` n'est présent qu'au moment de la connexion — on le copie
     * dans le token pour le retrouver lors des requêtes suivantes.
     */
    jwt({ token, user }) {
      if (user?.id) token.id = user.id;
      return token;
    },
    /**
     * Expose l'id dans l'objet session accessible côté serveur.
     * Sans ce callback, `session.user.id` serait `undefined` malgré
     * sa présence dans le token JWT.
     */
    session({ session, token }) {
      if (token.id) session.user.id = token.id as string;
      return session;
    },
  },
});
