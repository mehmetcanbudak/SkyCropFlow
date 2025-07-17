import HeroSection from "@/components/hero-section";
import CategorySection from "@/components/category-section";
import ProductCard from "@/components/product-card";
import NewsletterSection from "@/components/newsletter-section";
import SocialSection from "@/components/social-section";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import type { Product, Article } from "@shared/schema";

export default function Home() {
  const { data: featuredProducts = [] } = useQuery<Product[]>({
    queryKey: ["/api/products/featured"],
  });

  const { data: topSalesProducts = [] } = useQuery<Product[]>({
    queryKey: ["/api/products/top-sales"],
  });

  const { data: articles = [] } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  return (
    <div>
      <HeroSection />
      <CategorySection />
      
      {/* Top Sales Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">TOP SALES</h2>
            <Link href="/products" className="text-primary font-medium hover:underline">
              all top sales
            </Link>
          </div>

          {/* Featured Product */}
          {featuredProducts[0] && (
            <ProductCard product={featuredProducts[0]} featured />
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topSalesProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern vertical farming facility"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">philosophy</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Let's make the world healthier together. At Skycrops, we believe it's our responsibility
                to provide fresh, living vegetables while protecting our environment. That's why we're proud
                to introduce our revolutionary vertical farming technology - every time you buy our premium
                vegetables, you help create a more sustainable future!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">taze, sağlıklı</h4>
                  <p className="text-sm text-muted-foreground">Fresh harvest daily</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">pestisit free</h4>
                  <p className="text-sm text-muted-foreground">No chemicals or hormones</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">çevre dostu</h4>
                  <p className="text-sm text-muted-foreground">97% less water usage</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">yaşayan sebzeler</h4>
                  <p className="text-sm text-muted-foreground">Living until consumption</p>
                </div>
              </div>
              <Link href="/about">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                  about us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Preview */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Journal</h2>
            <Link href="/journal" className="text-primary font-medium hover:underline">
              Read all stories
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
              <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{article.publishedAt}</p>
                  <h3 className="font-bold text-lg text-foreground mb-3">{article.title}</h3>
                  <p className="text-muted-foreground text-sm">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <SocialSection />
    </div>
  );
}
