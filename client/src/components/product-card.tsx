import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "wouter";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@shared/schema";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({
  product,
  featured = false,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const { t } = useTranslation();

  const formatPrice = (price: number) => {
    return `$${(price / 100).toFixed(2)}`;
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast({
      title: "Added to cart",
      description: `${product.name} added to your cart.`,
    });
  };

  if (featured) {
    return (
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-8 md:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4">
              <p className="text-lg md:text-xl text-primary font-semibold">
                {formatPrice(product.price)}
              </p>
              {product.originalPrice && (
                <p className="text-base md:text-lg text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </p>
              )}
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-8 leading-relaxed">
              {product.description}
            </p>
            <div className="flex gap-2 md:gap-4">
              <Link href={`/products/${product.slug}`}>
                <Button size="lg">{t("view_details")}</Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {t("add_to_cart")}
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 xs:h-56 sm:h-64 md:h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/products/${product.slug}`} className="block">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow h-full flex flex-col">
        {/* Product Image Container - Fixed Aspect Ratio */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Badges */}
          {(product.isNewArrival || product.isBestseller) && (
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
              {product.isNewArrival && (
                <Badge
                  variant="secondary"
                  className="bg-accent/20 text-primary"
                >
                  new harvest
                </Badge>
              )}
              {product.isBestseller && (
                <Badge
                  variant="secondary"
                  className="bg-secondary/20 text-secondary"
                >
                  bestseller
                </Badge>
              )}
            </div>
          )}
        </div>
        
        {/* Product Info - Consistent Height */}
        <div className="p-4 sm:p-6 flex flex-col flex-1">
          {/* Product Title */}
          <h4 className="font-bold text-base sm:text-lg text-foreground mb-1 sm:mb-2 line-clamp-2">
            {product.name}
          </h4>
          
          {/* Flavor Info */}
          {product.flavor && (
            <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4">
              Flavor: {product.flavor}
            </p>
          )}
          
          {/* Price and Action Section - Pushed to Bottom */}
          <div className="mt-auto pt-2 sm:pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 sm:gap-2">
                <p className="text-lg sm:text-xl font-bold text-primary">
                  {formatPrice(product.price)}
                </p>
                {product.originalPrice && (
                  <p className="text-xs sm:text-sm text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </p>
                )}
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-3 w-3 mr-1" />
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
