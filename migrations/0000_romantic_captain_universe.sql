CREATE TABLE "articles" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"excerpt" text NOT NULL,
	"content" text NOT NULL,
	"image_url" text NOT NULL,
	"published_at" text NOT NULL,
	"type" text DEFAULT 'blog' NOT NULL,
	CONSTRAINT "articles_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "bundles" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"description" text NOT NULL,
	"price" integer NOT NULL,
	"original_price" integer,
	"image_url" text NOT NULL,
	"products" text[],
	"savings" text,
	"in_stock" boolean DEFAULT true,
	CONSTRAINT "bundles_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"description" text NOT NULL,
	"color" text NOT NULL,
	CONSTRAINT "categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "newsletters" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"subscribed_at" timestamp DEFAULT now(),
	CONSTRAINT "newsletters_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"price" integer NOT NULL,
	"original_price" integer,
	"description" text NOT NULL,
	"flavor" text,
	"category" text NOT NULL,
	"image_url" text NOT NULL,
	"is_new_arrival" boolean DEFAULT false,
	"is_bestseller" boolean DEFAULT false,
	"in_stock" boolean DEFAULT true,
	"featured" boolean DEFAULT false,
	"deleted" boolean DEFAULT false,
	CONSTRAINT "products_slug_unique" UNIQUE("slug")
);
