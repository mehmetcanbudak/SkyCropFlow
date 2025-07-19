import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  price: integer("price").notNull(), // price in cents
  originalPrice: integer("original_price"), // for sale items
  description: text("description").notNull(),
  flavor: text("flavor"),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
  isNewArrival: boolean("is_new_arrival").default(false),
  isBestseller: boolean("is_bestseller").default(false),
  inStock: boolean("in_stock").default(true),
  featured: boolean("featured").default(false),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  color: text("color").notNull(), // for styling
});

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url").notNull(),
  publishedAt: text("published_at").notNull(), // ISO date string
});

export const newsletters = pgTable("newsletters", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribedAt: timestamp("subscribed_at").defaultNow(),
});

export const bundles = pgTable("bundles", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  price: integer("price").notNull(), // price in cents
  originalPrice: integer("original_price"),
  imageUrl: text("image_url").notNull(),
  products: text("products").array(), // array of product IDs or names
  savings: text("savings"), // e.g., "Save 20%"
  inStock: boolean("in_stock").default(true),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export const insertCategorySchema = createInsertSchema(categories).omit({
  id: true,
});

export const insertArticleSchema = createInsertSchema(articles).omit({
  id: true,
});

export const insertNewsletterSchema = createInsertSchema(newsletters).omit({
  id: true,
  subscribedAt: true,
});

export const insertBundleSchema = createInsertSchema(bundles).omit({
  id: true,
});

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;

export type Category = typeof categories.$inferSelect;
export type InsertCategory = z.infer<typeof insertCategorySchema>;

export type Article = typeof articles.$inferSelect;
export type InsertArticle = z.infer<typeof insertArticleSchema>;

export type Newsletter = typeof newsletters.$inferSelect;
export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;

export type Bundle = typeof bundles.$inferSelect;
export type InsertBundle = z.infer<typeof insertBundleSchema>;
