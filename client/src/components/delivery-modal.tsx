import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CalendarDays, Clock, Package, Truck } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@shared/schema";
import { useTranslation } from "react-i18next";

interface DeliveryModalProps {
  product?: Product;
  bundle?: {
    id: string;
    type: string;
    slug: string;
    name: string;
    price: number;
    originalPrice?: number;
    description: string;
    imageUrl: string;
  };
  children: React.ReactNode;
}

export function DeliveryModal({
  product,
  bundle,
  children,
}: DeliveryModalProps) {
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState<string>("one-time");
  const [selectedSchedule, setSelectedSchedule] = useState<string>("standard");
  const [open, setOpen] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const item = product || bundle;
  if (!item) return null;

  const subscriptionPlans = [
    {
      id: "one-time",
      name: t("plan_one_time"),
      description: t("plan_one_time_desc"),
      discount: 0,
      icon: <Package className="h-4 w-4" />,
    },
    {
      id: "weekly",
      name: t("plan_weekly"),
      description: t("plan_weekly_desc"),
      discount: 10,
      icon: <CalendarDays className="h-4 w-4" />,
    },
    {
      id: "twice-weekly",
      name: "Haftada 2 Abonelik",
      description: "Her hafta 2 kez teslimat",
      discount: 15,
      icon: <CalendarDays className="h-4 w-4" />,
    },
    {
      id: "monthly",
      name: t("plan_monthly"),
      description: t("plan_monthly_desc"),
      discount: 15,
      icon: <CalendarDays className="h-4 w-4" />,
    },
  ];

  const deliverySchedules = [
    {
      id: "express",
      name: t("delivery_express"),
      description: t("delivery_express_desc"),
      time: t("delivery_express_time"),
      price: 999, // $9.99
      icon: <Truck className="h-4 w-4" />,
    },
    {
      id: "standard",
      name: t("delivery_standard"),
      description: t("delivery_standard_desc"),
      time: t("delivery_standard_time"),
      price: 299, // $2.99
      icon: <Clock className="h-4 w-4" />,
    },
    {
      id: "scheduled",
      name: t("delivery_scheduled"),
      description: t("delivery_scheduled_desc"),
      time: t("delivery_scheduled_time"),
      price: 0, // Free
      icon: <CalendarDays className="h-4 w-4" />,
    },
  ];

  const calculatePrice = () => {
    const plan = subscriptionPlans.find((p) => p.id === selectedPlan);
    const basePrice = item.price;
    const discount = plan?.discount || 0;
    const discountedPrice = basePrice * (1 - discount / 100);
    return discountedPrice;
  };

  const calculateTotal = () => {
    const itemPrice = calculatePrice();
    const schedule = deliverySchedules.find((s) => s.id === selectedSchedule);
    const deliveryPrice = schedule?.price || 0;
    return itemPrice + deliveryPrice;
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, 1, {
        subscriptionPlan: selectedPlan,
        deliverySchedule: selectedSchedule,
      });
    }

    const plan = subscriptionPlans.find((p) => p.id === selectedPlan);
    const schedule = deliverySchedules.find((s) => s.id === selectedSchedule);

    toast({
      title: "Added to cart",
      description: `${item.name} with ${plan?.name} and ${schedule?.name}`,
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader></DialogHeader>

        <div className="space-y-6">
          {/* Item Summary */}
          <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
            <div className="flex-1">
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-muted-foreground">
                {item.description || product?.description}
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold">
                {Number(calculatePrice() / 100).toLocaleString("tr-TR", {
                  style: "currency",
                  currency: "TRY",
                  minimumFractionDigits: 2,
                })}
              </p>
              {selectedPlan !== "one-time" && (
                <p className="text-xs text-green-600">
                  Save{" "}
                  {
                    subscriptionPlans.find((p) => p.id === selectedPlan)
                      ?.discount
                  }
                  %
                </p>
              )}
            </div>
          </div>

          {/* Subscription Plans */}
          <div>
            <Label className="text-base font-medium">Abonelik</Label>
            <RadioGroup
              value={selectedPlan}
              onValueChange={setSelectedPlan}
              className="mt-3"
            >
              {subscriptionPlans.map((plan) => (
                <div key={plan.id} className="flex items-center space-x-3">
                  <RadioGroupItem value={plan.id} id={plan.id} />
                  <Label htmlFor={plan.id} className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {plan.icon}
                        <div>
                          <p className="font-medium">{plan.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {plan.description}
                          </p>
                        </div>
                      </div>
                      {plan.discount > 0 && (
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800"
                        >
                          -{plan.discount}%
                        </Badge>
                      )}
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Delivery Schedule */}
          <div>
            <Label className="text-base font-medium">Teslimat</Label>
            <RadioGroup
              value={selectedSchedule}
              onValueChange={setSelectedSchedule}
              className="mt-3"
            >
              {deliverySchedules.map((schedule) => (
                <div key={schedule.id} className="flex items-center space-x-3">
                  <RadioGroupItem value={schedule.id} id={schedule.id} />
                  <Label
                    htmlFor={schedule.id}
                    className="flex-1 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {schedule.icon}
                        <div>
                          <p className="font-medium">{schedule.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {schedule.description} • {schedule.time}
                          </p>
                        </div>
                      </div>
                      <p className="font-medium">
                        {schedule.price === 0
                          ? t("free")
                          : Number(schedule.price / 100).toLocaleString(
                              "tr-TR",
                              {
                                style: "currency",
                                currency: "TRY",
                                minimumFractionDigits: 2,
                              },
                            )}
                      </p>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Total */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>{t("total")}</span>
              <span>
                {Number(calculateTotal() / 100).toLocaleString("tr-TR", {
                  style: "currency",
                  currency: "TRY",
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
            {selectedPlan !== "one-time" && (
              <p className="text-sm text-muted-foreground mt-1">
                {t("recurring_plan", { plan: t(`plan_${selectedPlan}`) })}
              </p>
            )}
          </div>

          {/* Action Button */}
          <Button onClick={handleAddToCart} className="w-full" size="lg">
            {t("add_to_cart")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
