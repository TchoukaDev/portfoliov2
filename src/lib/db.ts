import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@/db/schema";

type DrizzleDb = NodePgDatabase<typeof schema>;

/**
 * Singleton global utilisé pour conserver l'instance de la base de données
 * entre les rechargements à chaud (hot-reload) en développement.
 *
 * En dev, Next.js recharge les modules à chaque modification, ce qui créerait
 * une nouvelle connexion pool à chaque fois. En stockant l'instance sur `globalThis`,
 * elle survit aux rechargements et on évite d'épuiser les connexions PostgreSQL.
 *
 * En production, ce mécanisme est sans effet car les modules ne sont chargés qu'une fois.
 */
const globalForDb = globalThis as unknown as { db: DrizzleDb };

/**
 * Crée une nouvelle instance Drizzle connectée à PostgreSQL via un pool de connexions.
 * Le schéma est passé à Drizzle pour activer les requêtes relationnelles (`db.query.*`).
 */
function createDb(): DrizzleDb {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
  return drizzle(pool, { schema });
}

export const db = globalForDb.db ?? createDb();

// En développement : on attache l'instance au global pour la réutiliser après un hot-reload
if (process.env.NODE_ENV !== "production") globalForDb.db = db;
