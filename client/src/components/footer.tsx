import { Link } from "wouter";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">SKYCROPS</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Fresh living vegetables from vertical farming technology
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  products
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  top sales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  about us
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-primary transition-colors">
                  journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  contacts
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  privacy policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-muted-foreground text-sm">
              <p>
                Çorlu 1 OSB Bülent Ecevit Caddesi No:13/1<br />
                PK: 59860 Çorlu – Tekirdağ
              </p>
              <p>90 282 685 43 83</p>
              <p>info@skycrops.farm</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Skycrops. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
