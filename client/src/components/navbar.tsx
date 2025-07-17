import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Leaf, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/products", label: "shop" },
    { href: "/about", label: "about us" },
    { href: "/journal", label: "journal" },
    { href: "/contact", label: "contacts" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl text-foreground">SKYCROPS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <ShoppingCart className="h-4 w-4 mr-2" />
              <span>0</span>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <ShoppingCart className="h-4 w-4 mr-2" />
                <span>Cart (0)</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
