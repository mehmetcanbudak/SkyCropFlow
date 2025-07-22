import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useTranslation } from "react-i18next";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/newsletter/subscribe", { email });
    },
    onSuccess: () => {
      toast({
        title: t("newsletter_success_title"),
        description: t("newsletter_success_description"),
      });
      setEmail("");
      queryClient.invalidateQueries({ queryKey: ["/api/newsletter"] });
    },
    onError: (error: { message?: string }) => {
      toast({
        title: t("newsletter_error_title"),
        description: error.message || t("newsletter_error_description"),
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    subscribeMutation.mutate(email);
  };

  return (
    <section className="py-8 sm:py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2">{t("newsletter_heading")}</h2>
        <p className="text-base sm:text-xl mb-4 sm:mb-8 opacity-90">{t("newsletter_subtitle")}</p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-2 sm:flex-row sm:gap-4">
          <Input
            type="email"
            placeholder={t("newsletter_email_placeholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white text-foreground"
            required
          />
          <Button
            type="submit"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            disabled={subscribeMutation.isPending}
          >
            {subscribeMutation.isPending
              ? t("newsletter_subscribing")
              : t("newsletter_subscribe")}
          </Button>
        </form>

        <p className="text-xs mt-2 opacity-70">
          {t("newsletter_privacy_prefix")}{" "}
          <a href="#" className="underline hover:no-underline">
            {t("privacy_policy")}
          </a>
        </p>
      </div>
    </section>
  );
}
