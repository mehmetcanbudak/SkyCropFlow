import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Product, Category } from "@shared/schema";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const { data: products = [], isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const filteredProducts = products.filter((product) => 
    selectedCategory === "all" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  if (productsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-8">Shop Our Products</h1>
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Category:</span>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.slug}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found for the selected category.</p>
            <Button 
              onClick={() => setSelectedCategory("all")} 
              className="mt-4"
              variant="outline"
            >
              View All Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
