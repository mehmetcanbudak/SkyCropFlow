import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return `₺ ${price / 100}`;
  };

  if (featured) {
    return (
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">{product.name}</h3>
            <div className="flex items-center gap-4 mb-4">
              <p className="text-xl text-primary font-semibold">
                {formatPrice(product.price)}
              </p>
              {product.originalPrice && (
                <p className="text-lg text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </p>
              )}
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>
            <Button size="lg">Shop now</Button>
          </div>
          <div className="relative">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {(product.isNewArrival || product.isBestseller) && (
          <div className="absolute top-4 right-4">
            {product.isNewArrival && (
              <Badge variant="secondary" className="bg-accent/20 text-primary">
                new harvest
              </Badge>
            )}
            {product.isBestseller && (
              <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                bestseller
              </Badge>
            )}
          </div>
        )}
      </div>
      <div className="p-6">
        <h4 className="font-bold text-lg text-foreground mb-2">{product.name}</h4>
        {product.flavor && (
          <p className="text-sm text-muted-foreground mb-4">Flavor: {product.flavor}</p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-primary">
              {formatPrice(product.price)}
            </p>
            {product.originalPrice && (
              <p className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </p>
            )}
          </div>
          <Button size="sm" variant="outline">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
