import { db } from "@/lib/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export class UserRepository {
  /**
   * Recherche un utilisateur par son adresse email.
   * Retourne `null` si aucun utilisateur n'est trouvé (au lieu de `undefined`),
   * pour faciliter les vérifications côté appelant.
   */
  static async getUserByEmail(email: string) {
    const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
    return result[0] ?? null;
  }

  /**
   * Insère un nouvel utilisateur en base et retourne la ligne créée.
   * Le mot de passe doit être hashé **avant** d'appeler cette méthode
   * (c'est la responsabilité de `UserService.registerUser`).
   */
  static async createUser(data: {
    firstname: string;
    name: string;
    email: string;
    password: string;
  }) {
    const result = await db.insert(users).values(data).returning();
    return result[0];
  }
}
