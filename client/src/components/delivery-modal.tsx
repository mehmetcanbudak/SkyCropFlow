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
  // Set 'subscribe' as the default selected tab
  const [subscribeTab, setSubscribeTab] = useState<'subscribe' | 'once'>("subscribe");
  const [selectedFrequency, setSelectedFrequency] = useState<string>("weekly");

  const item = product || bundle;
  if (!item) return null;

  const subscriptionPlans = [
    {
      id: "weekly",
      name: t("plan_weekly"),
      description: t("plan_weekly_desc"),
      discount: 10,
      icon: <CalendarDays className="h-4 w-4" />,
      frequencyLabel: t("every_week"),
    },
    {
      id: "twice-weekly",
      name: "Haftada 2 Abonelik",
      description: "Her hafta 2 kez teslimat",
      discount: 15,
      icon: <CalendarDays className="h-4 w-4" />,
      frequencyLabel: t("twice_a_week"),
    },
    {
      id: "monthly",
      name: t("plan_monthly"),
      description: t("plan_monthly_desc"),
      discount: 15,
      icon: <CalendarDays className="h-4 w-4" />,
      frequencyLabel: t("every_month"),
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

  const getSelectedPlan = () => subscriptionPlans.find((p) => p.id === selectedFrequency);

  const calculatePrice = () => {
    if (subscribeTab === "subscribe") {
      const plan = getSelectedPlan();
      const basePrice = item.price;
      const discount = plan?.discount || 0;
      const discountedPrice = basePrice * (1 - discount / 100);
      return discountedPrice;
    }
    return item.price;
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
        subscriptionPlan: subscribeTab === "subscribe" ? selectedFrequency : "one-time",
        deliverySchedule: selectedSchedule,
      });
    }
    const plan = subscribeTab === "subscribe" ? getSelectedPlan() : null;
    const schedule = deliverySchedules.find((s) => s.id === selectedSchedule);
    toast({
      title: "Added to cart",
      description: `${item.name} with ${subscribeTab === "subscribe" ? plan?.name : t("plan_one_time")} and ${schedule?.name}`,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-3xl p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row w-full min-h-[480px]">
          {/* Left: Product Image Only, Full Cover */}
          <div className="md:w-1/2 w-full h-[400px] md:h-auto flex items-center justify-center bg-muted/40 overflow-hidden">
            {item.imageUrl && (
              <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover rounded-l-2xl" />
            )}
          </div>
          {/* Right: Product Details and Purchase Options */}
          <div className="md:w-1/2 w-full flex flex-col justify-start items-stretch bg-[#f7f6f1]">
            <div className="px-8 pt-8 pb-4">
              <h2 className="text-2xl font-semibold mb-2 text-foreground">{item.name}</h2>
              <p className="text-base text-muted-foreground mb-6">{item.description || product?.description}</p>
            </div>
            <form className="flex flex-col gap-4 px-4">
              {/* Subscribe Radio Card */}
              <label className={`block rounded-lg border transition-all cursor-pointer ${subscribeTab === "subscribe" ? "border-green-700 bg-green-50" : "border-transparent bg-[#f7f6f1]"} p-0`}>  
                <div className="flex items-center justify-between px-6 py-4" onClick={() => setSubscribeTab("subscribe")}>  
                  <div className="flex items-center gap-3">
                    <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${subscribeTab === "subscribe" ? "bg-green-700 border-green-700" : "bg-gray-200 border-gray-300"}`}>
                      {subscribeTab === "subscribe" && <span className="w-3 h-3 bg-white rounded-full block" />}
                    </span>
                    <span className="font-bold text-lg text-green-900">{t("subscribe")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="line-through text-muted-foreground text-base">
                      {Number(item.price / 100).toLocaleString("tr-TR", { style: "currency", currency: "TRY", minimumFractionDigits: 2 })}
                    </span>
                    <span className="font-bold text-lg text-green-900">
                      {Number(calculatePrice() / 100).toLocaleString("tr-TR", { style: "currency", currency: "TRY", minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
                {subscribeTab === "subscribe" && (
                  <div className="px-8 pb-4 animate-fade-in">
                    <ul className="text-green-900 text-sm mb-3 pl-4 list-disc">
                      <li>{t("subscription_benefit_1")}</li>
                      <li>{t("subscription_benefit_2")}</li>
                      <li>{t("subscription_benefit_3")}</li>
                    </ul>
                    <div className="flex flex-col gap-1 mb-2">
                      <label className="text-xs font-medium mb-1">{t("delivery_frequency")}</label>
                      <select className="border rounded-md px-2 py-1 text-sm" value={selectedFrequency} onChange={e => setSelectedFrequency(e.target.value)}>
                        {subscriptionPlans.map(plan => (
                          <option key={plan.id} value={plan.id}>{plan.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </label>
              {/* Buy Once Radio Card */}
              <label className={`block rounded-lg border transition-all cursor-pointer ${subscribeTab === "once" ? "border-green-700 bg-green-100" : "border-transparent bg-[#f7f6f1]"} p-0`}>  
                <div className="flex items-center justify-between px-6 py-4" onClick={() => setSubscribeTab("once")}>  
                  <div className="flex items-center gap-3">
                    <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${subscribeTab === "once" ? "bg-green-700 border-green-700" : "bg-gray-200 border-gray-300"}`}>
                      {subscribeTab === "once" && <span className="w-3 h-3 bg-white rounded-full block" />}
                    </span>
                    <span className="font-bold text-lg text-green-900">{t("buy_once")}</span>
                  </div>
                  <span className="font-bold text-lg text-green-900">
                    {Number(item.price / 100).toLocaleString("tr-TR", { style: "currency", currency: "TRY", minimumFractionDigits: 2 })}
                  </span>
                </div>
              </label>
              {/* Delivery Dropdown */}
              <div className="flex flex-col gap-1 px-2">
                <label className="text-xs font-medium mb-1">{t("delivery")}</label>
                <select className="border rounded-md px-2 py-1 text-sm" value={selectedSchedule} onChange={e => setSelectedSchedule(e.target.value)}>
                  {deliverySchedules.map((schedule) => (
                    <option key={schedule.id} value={schedule.id}>
                      {schedule.name} - {schedule.description} • {schedule.price === 0 ? t("free") : Number(schedule.price / 100).toLocaleString("tr-TR", { style: "currency", currency: "TRY", minimumFractionDigits: 2 })}
                    </option>
                  ))}
                </select>
              </div>
              {/* Total */}
              <div className="flex justify-between items-center text-lg font-semibold border-t pt-4 px-2">
                <span>{t("total")}</span>
                <span>
                  {Number(calculateTotal() / 100).toLocaleString("tr-TR", { style: "currency", currency: "TRY", minimumFractionDigits: 2 })}
                </span>
              </div>
              {subscribeTab === "subscribe" && (
                <p className="text-xs text-muted-foreground mt-1 px-2">
                  {t("recurring_plan", { plan: getSelectedPlan()?.name })}
                </p>
              )}
              {/* Add to basket button */}
              <button type="button" onClick={handleAddToCart} className="w-full mt-2 py-3 rounded-lg bg-green-900 text-white font-semibold text-lg hover:bg-green-800 transition">
                {t("add_to_cart")}
              </button>
              {/* View Full Product Details link */}
              <a href={`/products/${item.slug || product?.slug || ""}`} className="block text-center text-green-900 underline text-sm mt-2 mb-2">
                {t("view_full_product_details", "View Full Product Details")}
              </a>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
