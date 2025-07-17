import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/newsletter/subscribe", { email });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter. Check your email for a discount code!",
      });
      setEmail("");
      queryClient.invalidateQueries({ queryKey: ["/api/newsletter"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
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
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">GET 20% OFF</h2>
        <p className="text-xl mb-8 opacity-90">
          Your first order + future harvest updates. You can safely unsubscribe anytime.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
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
            {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>

        <p className="text-sm mt-4 opacity-70">
          Here is our{" "}
          <a href="#" className="underline hover:no-underline">
            privacy policy
          </a>
        </p>
      </div>
    </section>
  );
}
