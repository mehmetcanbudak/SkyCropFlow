import { ShoppingCart, X, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

export function CartButton({ iconColor }: { iconColor?: string } = {}) {
  const {
    items,
    getTotalItems,
    getTotalPrice,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: t("cart_empty_title"),
        description: t("cart_empty_description"),
        variant: "destructive",
      });
      return;
    }

    toast({
      title: t("checkout_not_implemented_title"),
      description: t("checkout_not_implemented_description"),
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <ShoppingCart className={`h-5 w-5 ${iconColor ?? ''}`} />
          {getTotalItems() > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:w-96">
        <SheetHeader>
          <SheetTitle>{t("shopping_cart")}</SheetTitle>
          <SheetDescription>
            {getTotalItems() === 0
              ? t("cart_empty")
              : t("cart_items", { count: getTotalItems() })}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">{t("cart_empty")}</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center space-x-3 p-3 border rounded-lg"
                  >
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {Number(item.product.price / 100).toLocaleString(
                          "tr-TR",
                          {
                            style: "currency",
                            currency: "TRY",
                            minimumFractionDigits: 2,
                          },
                        )}
                      </p>
                      <div className="flex items-center mt-2 space-x-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-red-500"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>{t("total")}</span>
                  <span>
                    {Number(getTotalPrice() / 100).toLocaleString("tr-TR", {
                      style: "currency",
                      currency: "TRY",
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>

                <div className="space-y-2">
                  <Button onClick={handleCheckout} className="w-full">
                    {t("checkout")}
                  </Button>
                  <Button
                    onClick={clearCart}
                    variant="outline"
                    className="w-full"
                  >
                    {t("clear_cart")}
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
