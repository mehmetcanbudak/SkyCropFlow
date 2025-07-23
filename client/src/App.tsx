import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/hooks/use-cart";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Products from "@/pages/products";
import About from "@/pages/about";
import Journal from "@/pages/journal";
import Article from "@/pages/article";
import Contact from "@/pages/contact";
import Admin from "@/pages/admin";
import Product from "@/pages/product";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";
import Uretim from "@/pages/uretim";

function Router() {
  const [location] = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/shop" component={Products} />
            <Route path="/shop/:slug" component={Product} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Journal} />
            <Route path="/blog/:slug" component={Article} />
            <Route path="/contact" component={Contact} />
            <Route path="/admin" component={Admin} />
            <Route path="/uretim" component={Uretim} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <Router />
          <Toaster />
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
