import HeroSection from "@/components/hero-section";
import CategorySection from "@/components/category-section";
import ProductCard from "@/components/product-card";
import NewsletterSection from "@/components/newsletter-section";
import SocialSection from "@/components/social-section";
import { DeliveryModal } from "@/components/delivery-modal";
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
      
      {/* Bundles Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">VEGETABLE BUNDLES</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Curated collections of our freshest vegetables, perfectly paired for your healthy lifestyle
            </p>
          </div>

          {/* Bundle Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fresh Greens Bundle */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1622312347509-ab50b0f75e30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Fresh Greens Bundle"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Save 25%
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Fresh Greens Bundle</h3>
                <p className="text-muted-foreground mb-4">Living lettuce, spinach, and arugula</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">$24.99</span>
                    <span className="text-lg text-muted-foreground line-through">$32.99</span>
                  </div>
                </div>
                <DeliveryModal 
                  bundle={{
                    name: "Fresh Greens Bundle",
                    price: 2499,
                    originalPrice: 3299,
                    description: "Living lettuce, spinach, and arugula"
                  }}
                >
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                    Choose Delivery
                  </button>
                </DeliveryModal>
              </div>
            </div>

            {/* Garden Mix Bundle */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Garden Mix Bundle"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Save 30%
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Garden Mix Bundle</h3>
                <p className="text-muted-foreground mb-4">Herbs, microgreens, and leafy vegetables</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">$34.99</span>
                    <span className="text-lg text-muted-foreground line-through">$49.99</span>
                  </div>
                </div>
                <DeliveryModal 
                  bundle={{
                    name: "Garden Mix Bundle",
                    price: 3499,
                    originalPrice: 4999,
                    description: "Herbs, microgreens, and leafy vegetables"
                  }}
                >
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                    Choose Delivery
                  </button>
                </DeliveryModal>
              </div>
            </div>

            {/* Family Pack Bundle */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Family Pack Bundle"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Save 35%
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Family Pack Bundle</h3>
                <p className="text-muted-foreground mb-4">Complete variety for the whole family</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">$59.99</span>
                    <span className="text-lg text-muted-foreground line-through">$89.99</span>
                  </div>
                </div>
                <DeliveryModal 
                  bundle={{
                    name: "Family Pack Bundle",
                    price: 5999,
                    originalPrice: 8999,
                    description: "Complete variety for the whole family"
                  }}
                >
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                    Choose Delivery
                  </button>
                </DeliveryModal>
              </div>
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
