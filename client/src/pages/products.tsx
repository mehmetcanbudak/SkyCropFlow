import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";
import type { Product, Category } from "@shared/schema";
import { useTranslation } from "react-i18next";
import { BREAKPOINTS } from "@/lib/breakpoints";
import HeroBanner from "@/components/hero-banner";

export default function Products() {
  const { t } = useTranslation();
  const [location, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Set filter open by default on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= BREAKPOINTS.lg) { // Desktop breakpoint
        setIsFilterOpen(true);
      } else {
        setIsFilterOpen(false);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className="flex-1 flex flex-col min-h-screen">
      <HeroBanner title="Tüm Ürünler" visible={true} />

      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-8" style={{
        marginLeft: "0px",
        marginRight: "0px",
        paddingBottom: "32px",
        paddingTop: "0px"
      }}>
        <div className="collection-toolbar border-b border-gray-200">
          <div className="collection-toolbar__button-list flex items-center justify-between px-8">
            <div className="collection-toolbar__layout-switch-list flex items-center gap-1">
              <div className="sm:hidden flex items-center gap-1">
                {/* Mobile layout icons removed */}
              </div>
              <div className="sm-max:hidden flex items-center gap-1">
                <button type="button" className="collection-toolbar__button p-1 hover:bg-gray-100 rounded" aria-label="Switch to larger product images">
                  <svg role="presentation" width="16" viewBox="0 0 18 18" fill="none">
                    <path fill="currentColor" d="M0 0h8v8H0zM0 10h8v8H0zM10 0h8v8h-8zM10 10h8v8h-8z"></path>
                  </svg>
                </button>
                <button type="button" className="collection-toolbar__button p-1 hover:bg-gray-100 rounded" aria-label="Switch to smaller product images">
                  <svg role="presentation" width="16" viewBox="0 0 18 18" fill="none">
                    <path fill="currentColor" d="M0 0h4v4H0zM0 7h4v4H0zM0 14h4v4H0zM7 0h4v4H7zM7 7h4v4H7zM7 14h4v4H7zM14 0h4v4h-4zM14 7h4v4h-4zM14 14h4v4h-4z"></path>
                  </svg>
                </button>
                <button type="button" className="collection-toolbar__button p-1 hover:bg-gray-100 rounded bg-gray-100" aria-label="Switch to compact product images">
                  <svg role="presentation" width="16" viewBox="0 0 18 18" fill="none">
                    <path fill="currentColor" d="M0 0h18v2H0zm0 4h18v2H0zm0 4h18v2H0zm0 4h18v2H0zm0 4h18v2H0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <p className="collection-toolbar__products-count text-sm text-gray-600 hidden sm:block">
              {filteredProducts.length} ürün
            </p>
            <div className="flex items-center gap-4">
              <div className="collection-toolbar__button-container">
                <button type="button" className="collection-toolbar__button heading text-xxs px-3 py-1 hover:bg-gray-50 flex items-center gap-1">
                  <span className="sm:hidden">Sırala</span>
                  <span className="hidden sm:inline">Şuna göre sırala:</span>
                  <svg aria-hidden="true" focusable="false" fill="none" width="10" className="icon icon-chevron-down" viewBox="0 0 10 10">
                    <path d="m1 3 4 4 4-4" stroke="currentColor" strokeLinecap="square"></path>
                  </svg>
                </button>
              </div>
              <div className="collection-toolbar__button-container sm:hidden">
                <button 
                  type="button" 
                  className="collection-toolbar__button heading text-xxs px-3 py-1 hover:bg-gray-50 flex items-center gap-1"
                  onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                >
                  <span>Filtre</span>
                  <svg aria-hidden="true" focusable="false" fill="none" width="10" className="icon icon-chevron-down" viewBox="0 0 10 10" style={{ transform: isMobileFilterOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                    <path d="m1 3 4 4 4-4" stroke="currentColor" strokeLinecap="square"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Dropdown */}
        {isMobileFilterOpen && (
          <div className="sm:hidden border-b border-gray-200 bg-white">
            <div className="p-4">
              <div className="mb-4">
                <h3 className="font-medium text-gray-900 uppercase tracking-wider text-xs mb-3">Ürün Türü</h3>
              </div>
              <div className="space-y-2">
                <button className="block w-full text-left text-sm py-2 px-3 transition-colors text-gray-900 font-medium bg-gray-50 rounded">
                  Tüm Ürünler
                </button>
                <button className="block w-full text-left text-sm py-2 px-3 transition-colors capitalize text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded">
                  Paketler
                </button>
                <button className="block w-full text-left text-sm py-2 px-3 transition-colors capitalize text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded">
                  Yeşillikler
                </button>
                <button className="block w-full text-left text-sm py-2 px-3 transition-colors capitalize text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded">
                  Baharatlar
                </button>
                <button className="block w-full text-left text-sm py-2 px-3 transition-colors capitalize text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded">
                  Fideler
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row">
          <div className="hidden sm:block w-full sm:w-64 p-2 sm:p-4 lg:p-8 border-b sm:border-b-0 sm:border-r border-gray-100 sm:sticky sm:top-20 sm:h-fit sm:self-start">
            <div className="mb-4 sm:mb-6">
              <button className="flex items-center justify-between w-full text-left font-medium text-gray-900 uppercase tracking-wider text-xs sm:text-sm">
                Ürün Türü
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 transition-transform rotate-180">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <button className="block w-full text-left text-sm py-1 transition-colors text-gray-900 font-medium">
                Tüm Ürünler
              </button>
              <button className="block w-full text-left text-sm py-1 transition-colors capitalize text-gray-600 hover:text-gray-900">
                Paketler
              </button>
              <button className="block w-full text-left text-sm py-1 transition-colors capitalize text-gray-600 hover:text-gray-900">
                Yeşillikler
              </button>
              <button className="block w-full text-left text-sm py-1 transition-colors capitalize text-gray-600 hover:text-gray-900">
                Baharatlar
              </button>
              <button className="block w-full text-left text-sm py-1 transition-colors capitalize text-gray-600 hover:text-gray-900">
                Fideler
              </button>
            </div>
          </div>

          <div className="flex-1 p-2 sm:p-4 lg:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="h-full group">
                  <TeaflowProductCard
                    product={product}
                    t={t}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeaflowProductCard({ product, t }: { product: Product, t: (key: string) => string }) {
  return (
    <div className="product-card">
      <div className="product-card__figure">
        <Link href={`/shop/${product.slug}`} className="product-card__media">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-card__image product-card__image--primary aspect-square w-full h-full object-cover"
          />
        </Link>
        
        {/* Product Badges */}
        <div className="product-card__badges">
          {product.isBestseller && (
            <span className="product-badge product-badge--bestseller">
              Çok Satan
            </span>
          )}
        </div>
        
        {/* Stock Status Badge - Bottom Left */}
        {product.inStock && (
          <div className="product-card__stock-badge">
            <span className="product-badge product-badge--instock">
              Stokta Var
            </span>
          </div>
        )}
        
        {/* Quick Add Button */}
        <button
          type="button"
          className="product-card__quick-add-button absolute top-2 right-2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Quick add to cart"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            fill="none"
            width="12"
            className="icon icon-plus"
            viewBox="0 0 12 12"
          >
            <path
              d="M6 0v12M0 6h12"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      <div className="product-card__info">
        <div className="v-stack justify-items-center gap-2">
          <div className="v-stack justify-items-center gap-1">
            <Link
              href={`/shop/${product.slug}`}
              className="product-title text-center font-medium text-gray-900 hover:text-primary transition-colors"
            >
              {product.name}
            </Link>
            
            <div className="price-list text-center">
              <span className="text-sm text-gray-600">
                {Number(product.price / 100).toLocaleString("tr-TR", {
                  style: "currency",
                  currency: "TRY",
                  minimumFractionDigits: 2,
                })}
                'den başlayan
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
