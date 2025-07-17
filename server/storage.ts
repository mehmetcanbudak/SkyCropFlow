import { 
  products, categories, articles, newsletters,
  type Product, type InsertProduct,
  type Category, type InsertCategory, 
  type Article, type InsertArticle,
  type Newsletter, type InsertNewsletter
} from "@shared/schema";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  getTopSalesProducts(): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;

  // Categories
  getCategories(): Promise<Category[]>;
  getCategory(id: number): Promise<Category | undefined>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;

  // Articles
  getArticles(): Promise<Article[]>;
  getArticle(id: number): Promise<Article | undefined>;
  getArticleBySlug(slug: string): Promise<Article | undefined>;
  createArticle(article: InsertArticle): Promise<Article>;

  // Newsletter
  subscribeNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscribers(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private categories: Map<number, Category>;
  private articles: Map<number, Article>;
  private newsletters: Map<number, Newsletter>;
  private currentProductId: number;
  private currentCategoryId: number;
  private currentArticleId: number;
  private currentNewsletterId: number;

  constructor() {
    this.products = new Map();
    this.categories = new Map();
    this.articles = new Map();
    this.newsletters = new Map();
    this.currentProductId = 1;
    this.currentCategoryId = 1;
    this.currentArticleId = 1;
    this.currentNewsletterId = 1;
    
    this.seedData();
  }

  private async seedData() {
    // Seed categories
    const categoryData = [
      {
        name: "leafy greens",
        slug: "leafy-greens",
        description: "Fresh lettuce, spinach, and kale varieties that stay alive until consumption",
        color: "primary"
      },
      {
        name: "fresh herbs",
        slug: "fresh-herbs", 
        description: "Aromatic basil, cilantro, and parsley grown in optimal conditions",
        color: "secondary"
      },
      {
        name: "microgreens",
        slug: "microgreens",
        description: "Nutrient-dense young plants perfect for healthy living",
        color: "accent"
      },
      {
        name: "specialty mix",
        slug: "specialty-mix",
        description: "Curated combinations for balanced nutrition and taste",
        color: "primary"
      }
    ];

    for (const cat of categoryData) {
      await this.createCategory(cat);
    }

    // Seed products
    const productData = [
      {
        name: "Living Lettuce #2",
        slug: "living-lettuce-2",
        price: 2500,
        description: "Fresh butterhead lettuce grown in our vertical farming facility. These living vegetables continue growing until consumption, ensuring maximum freshness and nutrition.",
        flavor: "crisp, fresh, mild",
        category: "leafy-greens",
        imageUrl: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isNewArrival: false,
        isBestseller: true,
        featured: true,
        inStock: true
      },
      {
        name: "Fresh Basil #1",
        slug: "fresh-basil-1",
        price: 1800,
        description: "Aromatic sweet basil grown in controlled environment conditions.",
        flavor: "aromatic, sweet, and fresh",
        category: "fresh-herbs",
        imageUrl: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isNewArrival: true,
        isBestseller: false,
        featured: false,
        inStock: true
      },
      {
        name: "Living Kale #3",
        slug: "living-kale-3",
        price: 2200,
        description: "Nutrient-rich kale grown with vertical farming technology.",
        flavor: "earthy, nutritious, crisp",
        category: "leafy-greens",
        imageUrl: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isNewArrival: true,
        isBestseller: false,
        featured: false,
        inStock: true
      },
      {
        name: "Arugula Mix #2",
        slug: "arugula-mix-2",
        price: 2000,
        description: "Peppery arugula blend perfect for salads and garnishes.",
        flavor: "peppery, fresh, vibrant",
        category: "leafy-greens",
        imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isNewArrival: true,
        isBestseller: false,
        featured: false,
        inStock: true
      },
      {
        name: "Baby Spinach #4",
        slug: "baby-spinach-4",
        price: 1900,
        description: "Tender baby spinach leaves with mild flavor.",
        flavor: "mild, tender, nutritious",
        category: "leafy-greens",
        imageUrl: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isNewArrival: true,
        isBestseller: false,
        featured: false,
        inStock: true
      },
      {
        name: "Herb Collection #1",
        slug: "herb-collection-1",
        price: 3500,
        description: "Mixed fresh herbs for cooking - basil, parsley, cilantro.",
        flavor: "Mixed fresh herbs for cooking",
        category: "fresh-herbs",
        imageUrl: "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isNewArrival: false,
        isBestseller: true,
        featured: false,
        inStock: true
      },
      {
        name: "SKYCROPS Mix",
        slug: "skycrops-mix",
        price: 6500,
        originalPrice: 9000,
        description: "Complete vegetable variety pack with seasonal selections.",
        flavor: "Complete vegetable variety pack",
        category: "specialty-mix",
        imageUrl: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isNewArrival: false,
        isBestseller: true,
        featured: false,
        inStock: true
      }
    ];

    for (const prod of productData) {
      await this.createProduct(prod);
    }

    // Seed articles
    const articleData = [
      {
        title: "Wageningen Üniversitesi Dikey Tarım Programı",
        slug: "wageningen-universitesi-dikey-tarim-programi",
        excerpt: "Wageningen University vertical farming program participation and learnings...",
        content: "Our participation in the Wageningen University vertical farming program has provided valuable insights into advanced agricultural technologies and sustainable farming practices.",
        imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        publishedAt: "2025-03-17"
      },
      {
        title: "İl Tarım Müdürlüğü Kadınlar Günü",
        slug: "il-tarim-mudurlugu-kadinlar-gunu",
        excerpt: "Celebrating women in agriculture and sustainable farming initiatives...",
        content: "Recognition from the Provincial Directorate of Agriculture on International Women's Day highlights our commitment to supporting women in agricultural innovation.",
        imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        publishedAt: "2025-03-08"
      },
      {
        title: "Anadolu Ajansı Skycrops'ta",
        slug: "anadolu-ajansi-skycrops-ta",
        excerpt: "Media coverage of our innovative vertical farming technology and processes...",
        content: "Anadolu Agency's visit to our facility showcased our cutting-edge vertical farming technology and sustainable agricultural practices to a wider audience.",
        imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        publishedAt: "2025-03-03"
      }
    ];

    for (const article of articleData) {
      await this.createArticle(article);
    }
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find(p => p.slug === slug);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.category === category);
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.featured);
  }

  async getTopSalesProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.isBestseller);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  // Categories
  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategory(id: number): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find(c => c.slug === slug);
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = this.currentCategoryId++;
    const category: Category = { ...insertCategory, id };
    this.categories.set(id, category);
    return category;
  }

  // Articles
  async getArticles(): Promise<Article[]> {
    return Array.from(this.articles.values());
  }

  async getArticle(id: number): Promise<Article | undefined> {
    return this.articles.get(id);
  }

  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    return Array.from(this.articles.values()).find(a => a.slug === slug);
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = this.currentArticleId++;
    const article: Article = { ...insertArticle, id };
    this.articles.set(id, article);
    return article;
  }

  // Newsletter
  async subscribeNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.currentNewsletterId++;
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id,
      subscribedAt: new Date()
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletterSubscribers(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }
}

export const storage = new MemStorage();
