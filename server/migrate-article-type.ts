import { pool, migrateAddArticleTypeColumn } from "./db.ts";

migrateAddArticleTypeColumn(pool).then(() => process.exit(0)); 