import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle(pool);

// Migration to add 'type' column to articles table
export async function migrateAddArticleTypeColumn(pool: Pool) {
  // Check if column already exists
  const result = await pool.query(
    `SELECT column_name FROM information_schema.columns WHERE table_name='articles' AND column_name='type'`,
  );
  if (result.rows && result.rows.length > 0) {
    console.log("'type' column already exists in 'articles' table.");
    return;
  }
  await pool.query(
    `ALTER TABLE articles ADD COLUMN type TEXT NOT NULL DEFAULT 'blog'`,
  );
  console.log("Added 'type' column to 'articles' table.");
}
