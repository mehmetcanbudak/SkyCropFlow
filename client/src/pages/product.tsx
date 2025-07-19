import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { DeliveryModal } from "@/components/delivery-modal";
import type { Product } from "@shared/schema";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["/api/products", slug],
    queryFn: () => fetch(`/api/products/${slug}`).then(res => res.json()),
  });

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast({
        title: "Added to cart",
        description: `${quantity} x ${product.name} added to your cart.`,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link href="/products">
            <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-gray-900">Products</Link>
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
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-xl text-gray-900 mb-6">
                ${(product.price / 100).toFixed(2)}
              </p>
              
              {/* Product Badges */}
              <div className="flex gap-2 mb-6">
                {product.featured && (
                  <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                    Featured
                  </span>
                )}
                {product.isBestseller && (
                  <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                    Bestseller
                  </span>
                )}
                {product.inStock ? (
                  <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                    In Stock
                  </span>
                ) : (
                  <span className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded-full">
                    Out of Stock
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
                <label className="text-sm font-medium text-gray-900">Quantity:</label>
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
                <Link href="/products">
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

            {/* Product Details */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Product Details</h3>
              <dl className="space-y-3">
                <div className="flex">
                  <dt className="text-sm font-medium text-gray-500 w-24">Category:</dt>
                  <dd className="text-sm text-gray-900 capitalize">{product.category}</dd>
                </div>
                <div className="flex">
                  <dt className="text-sm font-medium text-gray-500 w-24">SKU:</dt>
                  <dd className="text-sm text-gray-900">{product.slug.toUpperCase()}</dd>
                </div>
                <div className="flex">
                  <dt className="text-sm font-medium text-gray-500 w-24">Status:</dt>
                  <dd className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}