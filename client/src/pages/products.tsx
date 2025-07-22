import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";
import type { Product, Category } from "@shared/schema";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();
  const [location, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  // Read category from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("all");
    }
  }, [location]);

  const handleCategoryChange = (category: string) => {
    if (category === "all") {
      setLocation("/shop");
    } else {
      setLocation(`/shop?category=${category}`);
    }
  };

  const { data: products = [], isLoading: productsLoading } = useQuery<
    Product[]
  >({
    queryKey: ["/api/products"],
  });

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const productOrder = [
    "kivircik",
    "feslegen",
    "maydanoz",
    "lollo-rosso",
    "reyhan",
    "roka",
    "kekik",
    "yagli-yaprak",
  ];

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory === "all") return true;
      if (selectedCategory === "yesillikler") {
        return (
          product.category === "yesillikler" || product.category === "yesillik"
        );
      }
      return product.category === selectedCategory;
    })
    .sort((a, b) => {
      const indexA = productOrder.indexOf(a.name);
      const indexB = productOrder.indexOf(b.name);
      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

  if (productsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">{t("loading_products")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 sm:pt-32">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-center">
          {t("shop")}
        </h1>
        <div className="flex flex-col md:flex-row">
          {/* Sidebar Filter - responsive */}
          <div className="w-full md:w-64 p-2 sm:p-4 md:p-8 border-b md:border-b-0 md:border-r border-gray-100">
            <div className="mb-4 sm:mb-6">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-between w-full text-left font-medium text-gray-900 uppercase tracking-wider text-xs sm:text-sm"
              >
                {t("product_type")}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            {isFilterOpen && (
              <div className="space-y-2 sm:space-y-3">
                <button
                  onClick={() => handleCategoryChange("all")}
                  className={`block w-full text-left text-sm py-1 transition-colors ${
                    selectedCategory === "all"
                      ? "text-gray-900 font-medium"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {t("all_products")}
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.slug)}
                    className={`block w-full text-left text-sm py-1 transition-colors capitalize ${
                      selectedCategory === category.slug
                        ? "text-gray-900 font-medium"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {category.slug === "paketler"
                      ? "Paketler"
                      : category.slug === "yesillikler"
                        ? "Yeşillikler"
                        : category.slug === "baharatlar"
                          ? "Baharatlar"
                          : category.slug === "fideler"
                            ? "Fideler"
                            : t(`category_${category.slug}`) || category.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1 p-2 sm:p-4 md:p-8">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 md:gap-12">
                {filteredProducts.map((product) => (
                  <TeaflowProductCard
                    key={product.id}
                    product={product}
                    t={t}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 sm:py-24">
                <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6">
                  {t("no_products_found")}
                </p>
                <Button
                  onClick={() => handleCategoryChange("all")}
                  variant="outline"
                  className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                >
                  {t("view_all_products")}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeaflowProductCard({ product, t }: { product: Product, t: (key: string) => string }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group cursor-pointer block">
      {/* Product Image */}
      <div className="aspect-square bg-gray-50 rounded-lg mb-4 sm:mb-6 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-1 sm:space-y-2">
        <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-2 sm:mb-4">
          {product.name}
        </h3>
        <p className="text-xs sm:text-base text-muted-foreground mb-1 sm:mb-2">
          {product.description}
        </p>
        <div className="pt-1 sm:pt-2">
          <span className="text-base sm:text-lg font-medium text-gray-900">
            {Number(product.price / 100).toLocaleString("tr-TR", {
              style: "currency",
              currency: "TRY",
              minimumFractionDigits: 2,
            })}
          </span>
        </div>

        {/* Product Badges */}
        <div className="flex gap-1 sm:gap-2 pt-1 sm:pt-2 flex-wrap">
          {product.featured && (
            <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
              {t("featured")}
            </span>
          )}
          {product.isBestseller && (
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
              {t("bestseller")}
            </span>
          )}
          {!product.inStock && (
            <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">
              {t("out_of_stock")}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
