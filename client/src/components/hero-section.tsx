import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";

export default function HeroSection() {
  const { data: featuredProducts = [] } = useQuery<Product[]>({
    queryKey: ["/api/products/featured"],
  });

  const { data: allProducts = [] } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const heroProduct = featuredProducts[0];

  return (
    <section className="relative bg-gradient-to-r from-secondary/20 to-primary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Fresh with<br />
              <span className="text-primary">Living</span><br />
              Vegetables #1
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {heroProduct?.description || 
                "Discover the complex taste and crisp freshness of our living vegetables - grown with vertical farming technology!"}
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Shop now
            </Button>
          </div>

          <div className="relative">
            <div className="bg-secondary/30 rounded-3xl p-8 transform rotate-3">
              <img
                src={heroProduct?.imageUrl || "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"}
                alt={heroProduct?.name || "Fresh living vegetables"}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Carousel */}
      <div className="pb-12">
        <div className="flex space-x-6 px-4 overflow-x-auto scrollbar-hide">
          {allProducts.slice(0, 6).map((product) => (
            <div key={product.id} className="flex-shrink-0">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="rounded-2xl shadow-lg w-80 h-60 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
