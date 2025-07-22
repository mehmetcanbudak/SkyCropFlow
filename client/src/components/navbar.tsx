import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { CartButton } from "@/components/cart-button";
import { useTranslation } from "react-i18next";
import skycropsLogo from "@/assets/skycrops.svg";

export default function Navbar() {
  const [showHeader, setShowHeader] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [location] = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/shop", label: t("shop") },
    { href: "/about", label: t("about_us") },
    { href: "/uretim", label: "Üretim" },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ];

  // Minimal menu button at top left when header is hidden
  if (!showHeader) {
    return (
      <>
        <button
          className="fixed top-4 left-4 z-50 bg-white/80 rounded-full p-2 shadow-md border border-gray-200 hover:bg-white transition-all"
          onClick={() => setShowMenu(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-primary" />
        </button>
        {showMenu && (
          <div className="fixed inset-0 z-50 flex">
            <div className="bg-white min-w-[160px] max-w-[200px] h-full shadow-lg p-6 flex flex-col">
              <button
                className="self-end mb-4"
                onClick={() => setShowMenu(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-primary" />
              </button>
              {/* Nav links */}
              <nav className="flex flex-col gap-4 mb-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-medium hover:text-primary transition-colors ${location === item.href ? "text-primary" : "text-muted-foreground"}`}
                    onClick={() => setShowMenu(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2">
                {/* Language selector stacked above cart */}
                <div className="flex flex-col gap-2 mb-2">
                  <button
                    className={`w-full px-3 py-2 rounded-md border text-center ${i18n.language === "tr" ? "bg-primary text-white" : "bg-white text-foreground"}`}
                    onClick={() => i18n.changeLanguage("tr")}
                    disabled={i18n.language === "tr"}
                  >
                    TR
                  </button>
                  <button
                    className={`w-full px-3 py-2 rounded-md border text-center ${i18n.language === "en" ? "bg-primary text-white" : "bg-white text-foreground"}`}
                    onClick={() => i18n.changeLanguage("en")}
                    disabled={i18n.language === "en"}
                  >
                    EN
                  </button>
                </div>
                <CartButton />
              </div>
            </div>
            <div className="flex-1" onClick={() => setShowMenu(false)} />
          </div>
        )}
      </>
    );
  }

  // Full header when at the top
  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 w-full justify-between">
          {/* Logo on the left */}
          <div className="flex-shrink-0 flex items-center min-w-[120px]">
            <Link href="/" className="flex items-center space-x-2">
              <img src={skycropsLogo} alt="SKYCROPS" className="h-10 w-auto" />
            </Link>
          </div>
          {/* Hamburger for mobile */}
          <div className="flex md:hidden">
            <button
              className="p-2 rounded-md border bg-white text-primary hover:bg-gray-50"
              onClick={() => setShowMenu(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          {/* Centered nav links (hidden on mobile) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  
                  className={`text-sm font-medium transition-colors hover:text-primary ${location === item.href ? "text-primary" : "text-muted-foreground"}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Right: language selector and cart (stacked on mobile) */}
          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <button
                className="flex items-center gap-1 px-3 py-2 rounded-md border bg-white text-foreground hover:bg-gray-50 transition-all"
                id="lang-menu-btn"
                aria-haspopup="listbox"
                aria-expanded={showLangMenu ? "true" : "false"}
                onClick={() => setShowLangMenu((v: boolean) => !v)}
              >
                {i18n.language === "tr" ? "TR" : "EN"}
                <ChevronDown className="h-4 w-4" />
              </button>
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow z-10">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      i18n.changeLanguage("tr");
                      setShowLangMenu(false);
                    }}
                    disabled={i18n.language === "tr"}
                  >
                    TR
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      i18n.changeLanguage("en");
                      setShowLangMenu(false);
                    }}
                    disabled={i18n.language === "en"}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
            <CartButton />
          </div>
          {/* Mobile menu overlay */}
          {showMenu && (
            <div className="fixed inset-0 z-50 flex md:hidden">
              <div className="bg-white min-w-[180px] max-w-[240px] h-full shadow-lg p-6 flex flex-col">
                <button
                  className="self-end mb-4"
                  onClick={() => setShowMenu(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-primary" />
                </button>
                {/* Nav links */}
                <nav className="flex flex-col gap-4 mb-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium hover:text-primary transition-colors ${location === item.href ? "text-primary" : "text-muted-foreground"}`}
                      onClick={() => setShowMenu(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-2">
                  {/* Language selector stacked above cart */}
                  <div className="flex flex-col gap-2 mb-2">
                    <button
                      className={`w-full px-3 py-2 rounded-md border text-center ${i18n.language === "tr" ? "bg-primary text-white" : "bg-white text-foreground"}`}
                      onClick={() => i18n.changeLanguage("tr")}
                      disabled={i18n.language === "tr"}
                    >
                      TR
                    </button>
                    <button
                      className={`w-full px-3 py-2 rounded-md border text-center ${i18n.language === "en" ? "bg-primary text-white" : "bg-white text-foreground"}`}
                      onClick={() => i18n.changeLanguage("en")}
                      disabled={i18n.language === "en"}
                    >
                      EN
                    </button>
                  </div>
                  <CartButton />
                </div>
              </div>
              <div className="flex-1" onClick={() => setShowMenu(false)} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
