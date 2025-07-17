import { 
  products, categories, articles, newsletters,
  type Product, type InsertProduct,
  type Category, type InsertCategory, 
  type Article, type InsertArticle,
  type Newsletter, type InsertNewsletter
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

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
  updateArticle(id: number, article: Partial<InsertArticle>): Promise<Article>;
  deleteArticle(id: number): Promise<void>;

  // Newsletter
  subscribeNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscribers(): Promise<Newsletter[]>;
  
  // Products management
  updateProduct(id: number, product: Partial<InsertProduct>): Promise<Product>;
  deleteProduct(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product || undefined;
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.slug, slug));
    return product || undefined;
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return await db.select().from(products).where(eq(products.category, category));
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return await db.select().from(products).where(eq(products.featured, true));
  }

  async getTopSalesProducts(): Promise<Product[]> {
    return await db.select().from(products).where(eq(products.isBestseller, true));
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const [product] = await db.insert(products).values(insertProduct).returning();
    return product;
  }

  async updateProduct(id: number, productData: Partial<InsertProduct>): Promise<Product> {
    const [product] = await db.update(products)
      .set(productData)
      .where(eq(products.id, id))
      .returning();
    return product;
  }

  async deleteProduct(id: number): Promise<void> {
    await db.delete(products).where(eq(products.id, id));
  }

  // Categories
  async getCategories(): Promise<Category[]> {
    return await db.select().from(categories);
  }

  async getCategory(id: number): Promise<Category | undefined> {
    const [category] = await db.select().from(categories).where(eq(categories.id, id));
    return category || undefined;
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    const [category] = await db.select().from(categories).where(eq(categories.slug, slug));
    return category || undefined;
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const [category] = await db.insert(categories).values(insertCategory).returning();
    return category;
  }

  // Articles
  async getArticles(): Promise<Article[]> {
    return await db.select().from(articles);
  }

  async getArticle(id: number): Promise<Article | undefined> {
    const [article] = await db.select().from(articles).where(eq(articles.id, id));
    return article || undefined;
  }

  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    const [article] = await db.select().from(articles).where(eq(articles.slug, slug));
    return article || undefined;
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const [article] = await db.insert(articles).values(insertArticle).returning();
    return article;
  }

  async updateArticle(id: number, articleData: Partial<InsertArticle>): Promise<Article> {
    const [article] = await db.update(articles)
      .set(articleData)
      .where(eq(articles.id, id))
      .returning();
    return article;
  }

  async deleteArticle(id: number): Promise<void> {
    await db.delete(articles).where(eq(articles.id, id));
  }

  // Newsletter
  async subscribeNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const [newsletter] = await db.insert(newsletters).values(insertNewsletter).returning();
    return newsletter;
  }

  async getNewsletterSubscribers(): Promise<Newsletter[]> {
    return await db.select().from(newsletters);
  }
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
        title: "Peki Dikey Tarım Nedir?",
        slug: "peki-dikey-tarim-nedir",
        excerpt: "Dikey tarım basitçe bir binada ürün yetiştirmektir diyebiliriz. Üst üste konmuş havuzlar şeklinde ya da yan yana konmuş dikey duvarlar şeklinde olabilir ama en önemli özelliği üretim sürecinin tam kontrollü olmasıdır.",
        content: "Dikey tarım basitçe bir binada ürün yetiştirmektir diyebiliriz. Üst üste konmuş havuzlar şeklinde ya da yan yana konmuş dikey duvarlar şeklinde olabilir ama en en önemli özelliği üretim sürecinin tam kontrollü olmasıdır. Yani dikey tarımda dış hava koşullarına bağlı değiliz. Verimli bir toprak olup olmadığına bağlı değiliz. Çok az su kullanımı, çok az gübre kullanımı onun önemli farklerındandır. Eğer üretim kurallara uygun bir şekilde yapılırsa hiçbir pestisit kullanmadan ürün yetiştirilebilir. Sağlıklı ürün yetiştirmek için verimli toprağa bağlı değildir. Büyük bir arazi alanına ihtiyaç duymaz. Bu da çok fazla arazi alanının olmadığı kentsel alanlarda da yapılabilmesini sağlar. Tüm bunlara bağlı olmamanın ve her şeyin kontrollü olmasının sonucu olarak ne kadar ve hangi kalitede üretim yaptığımız konusunda garanti vermesi diğer yetiştirme yöntemleriyle karşılaştırıldığında bize sunduğu en önemli özelliğidir.",
        imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        publishedAt: "Jul 17, 2025"
      },
      {
        title: "Dikey Tarıma Giriş",
        slug: "dikey-tarima-giris",
        excerpt: "Kontrollü ortam tarımı bugüne kadar seralarda yapılıyordu. Son yıllarda gelişen teknolojiyle beraber dikey tarım adını duymaya başladık. Gıda üretim sistemi konusunda yeni bir vizyon geliştirme zamanı.",
        content: "Kontrollü ortam tarımı bugüne kadar seralarda yapılıyordu. Son yıllarda gelişen teknolojiyle beraber dikey tarım adını duymaya başladık. Dünyanın birçok yerinde iklim değişikliği var, su kıtlığı var. Hâlâ yiyeceklerimizi yetiştirmek için böcek ilacı kullanıyoruz ve bir taraftan da doğal kaynakları tüketiyoruz. Nüfus artıyor ve bu insanların giderek daha fazlası büyük şehirlerde yaşıyor. Tüm bunlara baktığınızda, \"Gıda üretim sistemi konusunda yeni bir vizyon ne olabilir?\" diye sorabilirsiniz. Şöyle bir şey düşünün; güvenli üretim ve güvenli gıdaya erişim mümkün. Yediğinizde kimyasallar olmayacak. İçinde istemediğiniz bakteriler olmayacak. Sağlıklı olacak. Belki daha fazla vitamin veya sağlığımız için iyi olan diğer bileşikler olacak. Elbette yediklerimiz lezzetli de olmalı. Tüm bunları sürdürülebilir bir şekilde üretebilir miyiz? Yerel olarak yetiştirebilir miyiz? Yiyecekleri uçakla taşımak yerine, insanların yaşadığı yerin yakınında yetiştirebilir miyiz? Tüm bu soruları karşılayacak üretim sistemi ne olabilir sorusunun cevabı belki de dikey tarım olabilir. \"Dikey tarım\" tek başına tüm sorunları çözecektir diyemeyiz ancak dikey tarım, bu hedeflerin birçoğunu karşılayan üretim sistemlerinden biridir.",
        imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        publishedAt: "Jul 17, 2025"
      },
      {
        title: "Wageningen Üniversitesi Dikey Tarım Programı",
        slug: "wageningen-universitesi-dikey-tarim-programi",
        excerpt: "Wageningen University ve Araştırma Merkezi (WUR) tarafından düzenlenen Dikey Tarım programına katılan Kurucu Ortağımız Gamze Çapkınoğlu edindiği değerli bilgilerle dikey tarım alanındaki vizyonumuzu derinleştirdi.",
        content: "Our participation in the Wageningen University vertical farming program has provided valuable insights into advanced agricultural technologies and sustainable farming practices.",
        imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        publishedAt: "Mar 17, 2025"
      },
      {
        title: "Anadolu Ajansı Skycrops'ta",
        slug: "anadolu-ajansi-skycrops-ta",
        excerpt: "Tesisimizde bir araya geldiğimiz Anadolu Ajansı ekibi ile Skycrops'un hikayesini ve dikey tarım alanındaki çalışmalarımızı konuştuk. Kendilerine ziyaretleri ve ilgileri için teşekkür ederiz.",
        content: "Anadolu Agency's visit to our facility showcased our cutting-edge vertical farming technology and sustainable agricultural practices to a wider audience.",
        imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        publishedAt: "Mar 3, 2025"
      },
      {
        title: "İl Tarım Müdürlüğü Kadınlar Günü Kutlaması",
        slug: "il-tarim-mudurlugu-kadinlar-gunu",
        excerpt: "Tekirdağ Valiliği İl Tarım ve Orman Müdürlüğü'ne tesisimize verdikleri destek ve 8 Mart Dünya Kadınlar Günü'nü kutlamaları için teşekkür ederiz.",
        content: "Recognition from the Provincial Directorate of Agriculture on International Women's Day highlights our commitment to supporting women in agricultural innovation.",
        imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        publishedAt: "Mar 8, 2025"
      },
      {
        title: "Sustainable Vertical Farming: The Future of Agriculture",
        slug: "sustainable-vertical-farming-future",
        excerpt: "Exploring how vertical farming technology is revolutionizing food production while reducing environmental impact. Our innovative approach to growing fresh vegetables year-round.",
        content: "Vertical farming represents a paradigm shift in agriculture, offering solutions to climate change, water scarcity, and urbanization challenges.",
        imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        publishedAt: "Feb 15, 2025"
      },
      {
        title: "From Seed to Harvest: Our Growing Process",
        slug: "seed-to-harvest-growing-process",
        excerpt: "Take a behind-the-scenes look at how we grow our living vegetables using advanced hydroponic systems, LED lighting, and climate control technology.",
        content: "Our state-of-the-art facility uses the latest in agricultural technology to create optimal growing conditions for our vegetables.",
        imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        publishedAt: "Feb 1, 2025"
      },
      {
        title: "The Science Behind Living Vegetables",
        slug: "science-behind-living-vegetables",
        excerpt: "Understanding the nutritional and freshness benefits of vegetables that continue growing until consumption. Why living vegetables are better for your health.",
        content: "Living vegetables maintain their nutritional value and continue photosynthesis until the moment of consumption, providing superior freshness and taste.",
        imageUrl: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        publishedAt: "Jan 20, 2025"
      },
      {
        title: "Water Conservation in Modern Agriculture",
        slug: "water-conservation-modern-agriculture",
        excerpt: "How our vertical farming system uses 97% less water than traditional farming methods while maintaining optimal plant nutrition and growth.",
        content: "Water conservation is crucial for sustainable agriculture. Our closed-loop hydroponic systems maximize efficiency while minimizing waste.",
        imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        publishedAt: "Jan 5, 2025"
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
    const product: Product = { 
      ...insertProduct, 
      id,
      originalPrice: insertProduct.originalPrice ?? null,
      flavor: insertProduct.flavor ?? null,
      isNewArrival: insertProduct.isNewArrival ?? false,
      isBestseller: insertProduct.isBestseller ?? false,
      inStock: insertProduct.inStock ?? true,
      featured: insertProduct.featured ?? false
    };
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

  async updateArticle(id: number, articleData: Partial<InsertArticle>): Promise<Article> {
    const article = this.articles.get(id);
    if (!article) {
      throw new Error('Article not found');
    }
    const updatedArticle = { ...article, ...articleData };
    this.articles.set(id, updatedArticle);
    return updatedArticle;
  }

  async deleteArticle(id: number): Promise<void> {
    this.articles.delete(id);
  }

  async updateProduct(id: number, productData: Partial<InsertProduct>): Promise<Product> {
    const product = this.products.get(id);
    if (!product) {
      throw new Error('Product not found');
    }
    const updatedProduct = { ...product, ...productData };
    this.products.set(id, updatedProduct);
    return updatedProduct;
  }

  async deleteProduct(id: number): Promise<void> {
    this.products.delete(id);
  }
}

export const storage = new DatabaseStorage();
