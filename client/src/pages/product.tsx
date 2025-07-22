import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { DeliveryModal } from "@/components/delivery-modal";
import type { Product } from "@shared/schema";
import { useTranslation } from "react-i18next";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const { t } = useTranslation();

  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["/api/products", slug],
    queryFn: () => fetch(`/api/products/${slug}`).then((res) => res.json()),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">{t("loading")}</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t("not_found")}
          </h1>
          <Link href="/shop">
            <Button
              variant="outline"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("back_to_products")}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 sm:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            {/* <Link href="/" className="hover:text-gray-900">Home</Link>
            <span>/</span> */}
            <Link href="/shop" className="hover:text-gray-900">
              Ürünler
            </Link>
            <span>/</span>
            <span className="text-gray-900 capitalize">{product.category}</span>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-6 text-center">
                {product.name}
              </h1>
              <p className="text-base text-muted-foreground mb-6 text-center">
                {Number(product.price / 100).toLocaleString("tr-TR", {
                  style: "currency",
                  currency: "TRY",
                  minimumFractionDigits: 2,
                })}
              </p>

              {/* Product Badges */}
              <div className="flex gap-2 mb-6">
                {product.featured && (
                  <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                    {t("featured")}
                  </span>
                )}
                {product.isBestseller && (
                  <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                    {t("bestseller")}
                  </span>
                )}
                {product.inStock ? (
                  <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                    {t("in_stock")}
                  </span>
                ) : (
                  <span className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded-full">
                    {t("out_of_stock")}
                  </span>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-900">
                  Quantity:
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={!product.inStock}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 text-center w-16">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={!product.inStock}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <DeliveryModal product={product}>
                  <Button
                    disabled={!product.inStock}
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white h-12"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Choose Delivery & Add to Cart
                  </Button>
                </DeliveryModal>
                <Link href="/shop">
                  <Button
                    variant="outline"
                    className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white h-12"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
