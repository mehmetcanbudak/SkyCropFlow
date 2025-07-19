import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import type { Product, Category } from "@shared/schema";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const { data: products = [], isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const filteredProducts = products.filter((product) => 
    selectedCategory === "all" || product.category === selectedCategory
  );

  if (productsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex">
          {/* Sidebar Filter */}
          <div className="w-64 p-8 border-r border-gray-100">
            <div className="mb-6">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-between w-full text-left font-medium text-gray-900 uppercase tracking-wider text-sm"
              >
                Product Type
                <ChevronDown 
                  className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} 
                />
              </button>
            </div>
            
            {isFilterOpen && (
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`block w-full text-left text-sm py-1 transition-colors ${
                    selectedCategory === "all" 
                      ? "text-gray-900 font-medium" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  All Products
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`block w-full text-left text-sm py-1 transition-colors capitalize ${
                      selectedCategory === category.slug 
                        ? "text-gray-900 font-medium" 
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {filteredProducts.map((product) => (
                  <TeaflowProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="text-gray-600 text-lg mb-6">No products found for the selected category.</p>
                <Button 
                  onClick={() => setSelectedCategory("all")} 
                  variant="outline"
                  className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                >
                  View All Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeaflowProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group cursor-pointer block">
      {/* Product Image */}
      <div className="aspect-square bg-gray-50 rounded-lg mb-6 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {product.description}
        </p>
        <div className="pt-2">
          <span className="text-lg font-medium text-gray-900">
            ${(product.price / 100).toFixed(2)}
          </span>
        </div>
        
        {/* Product Badges */}
        <div className="flex gap-2 pt-2">
          {product.featured && (
            <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
              Featured
            </span>
          )}
          {product.isBestseller && (
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
              Bestseller
            </span>
          )}
          {!product.inStock && (
            <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">
              Out of Stock
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
