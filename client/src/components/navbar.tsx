import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, User, Search as SearchIcon } from "lucide-react";
import { CartButton } from "@/components/cart-button";
import { useTranslation } from "react-i18next";
import skycropsLogo from "@/assets/skycrops.svg";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [showHeader, setShowHeader] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [location] = useLocation();
  const { t, i18n } = useTranslation();
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // CSS variables for header styling
  const headerStyle: React.CSSProperties = {
    position: "sticky",
    top: 0,
    zIndex: 50,
    // CSS variables for grid and padding
    // These will be overridden by media queries in a style tag below
    // but provide base values for SSR/JS
    // These match the Shopify example
    // Use camelCase for React style keys
    // @ts-ignore
    '--header-padding-block': '1rem',
    '--header-logo-width': '90px',
    background: 'white',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.03)',
  };

  return (
    <>
      <style>{`
        :root {
          --header-is-sticky: 1;
        }
        .custom-header {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          padding: 0 2.5rem;
          min-height: 72px;
          padding-top: 1.6rem;
          padding-bottom: 1.6rem;
          background: white;
          box-shadow: 0 1px 2px 0 rgba(0,0,0,0.03);
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid #e5e7eb;
        }
        .custom-header-logo-nav {
          display: flex;
          align-items: center;
          gap: 3rem;
          min-width: 120px;
        }
        .custom-header-nav {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }
        .custom-header-nav a {
          font-family: 'Univers Next', sans-serif;
          font-size: 12px;
          line-height: 20.4px;
          letter-spacing: 2.16px;
          font-weight: 400;
          text-transform: uppercase;
          color: #1C1C1C;
        }
        .custom-header-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.5rem;
        }
        @media (max-width: 639px) {
          .custom-header {
            padding: 0 1rem;
            min-height: 56px;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          .custom-header-logo-nav {
            gap: 1.5rem;
          }
          .custom-header-nav {
            gap: 1rem;
          }
          .custom-header-actions {
            gap: 0.25rem;
          }
        }
      `}</style>
      {showBanner && (
        <aside className="shopify-section shopify-section-group-header-group shopify-section--announcement-bar announcement-bar-wrapper w-full sticky top-0 left-0 z-[60]" style={{background: 'var(--primary, #334a52)'}}>
          <style>{`
            .announcement-bar {
              width: 100%;
              background: var(--primary, #334a52);
              color: #fff !important;
              text-align: center;
              font-size: 0.625rem;
              font-weight: 600;
              letter-spacing: 0.05em;
              padding-top: 0.75rem;
              padding-bottom: 0.75rem;
              padding-left: 0;
              padding-right: 0;
            }
            @media (min-width: 999px) {
              .announcement-bar {
                font-size: 0.6875rem;
              }
            }
          `}</style>
          <div className="announcement-bar color-scheme color-scheme--scheme-3 flex justify-center items-center">
            <p className="text-white w-full text-center m-0">2500TL VE ÜZERİ ÜCRETSİZ KARGO</p>
          </div>
        </aside>
      )}
      <nav style={{...headerStyle, top: showBanner ? '32px' : '0'}} className="custom-header">
        {/* Logo and Nav (left) */}
        <div className="custom-header-logo-nav">
          {/* Sidebar (hamburger) icon for mobile - top left */}
          <button
            className="flex xl:hidden items-center justify-center mr-2 p-2 rounded hover:bg-gray-100"
            aria-label="Menüyü Aç"
            onClick={() => setShowSidebar(true)}
            style={{ position: 'absolute', left: 0, top: 0, height: '100%' }}
          >
            <Menu className="h-6 w-6" />
          </button>
          {/* Logo: left on md+, centered on mobile, always same size */}
          <h1 className="header__logo m-0 p-0 items-center hidden xl:flex xl:items-center" style={{padding: '0 0.5rem'}}>
            <Link href="/" className="flex items-center">
              <span className="sr-only">Skycrops</span>
              <img
                src={skycropsLogo}
                alt=""
                width={120}
                height={40}
                className="header__logo-image block"
                style={{ width: '120px', height: 'auto', display: 'block' }}
              />
            </Link>
          </h1>
          <h1 className="header__logo m-0 p-0 flex xl:hidden items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" style={{width: '120px', height: '40px'}}>
            <Link href="/" className="flex items-center w-full justify-center">
              <span className="sr-only">Skycrops</span>
              <img
                src={skycropsLogo}
                alt=""
                width={120}
                height={40}
                className="header__logo-image block"
                style={{ width: '120px', height: 'auto', display: 'block' }}
              />
            </Link>
          </h1>
          <nav className="custom-header-nav hidden xl:flex xl:items-center !m-0 !p-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base tracking-widest font-normal transition-colors hover:text-primary ${location === item.href ? "text-primary" : "text-muted-foreground"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        {/* Actions (right) */}
        <div className="custom-header-actions">
          <div className="relative">
            <button
              className="flex items-center gap-1 px-2 py-1 rounded-md bg-white text-foreground hover:bg-gray-50 transition-all text-xs tracking-widest"
              id="lang-menu-btn"
              aria-haspopup="listbox"
              aria-expanded={showLangMenu ? "true" : "false"}
              onClick={() => setShowLangMenu((v: boolean) => !v)}
            >
              {i18n.language === "tr" ? "TÜRKÇE" : "ENGLISH"}
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
                  TÜRKÇE
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setShowLangMenu(false);
                  }}
                  disabled={i18n.language === "en"}
                >
                  ENGLISH
                </button>
              </div>
            )}
          </div>
          {/* User icon button */}
          <Link href="/login" aria-label="Login">
            <Button variant="ghost" size="sm" type="button">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          {/* Search icon button */}
          <Button
            variant="ghost"
            size="sm"
            type="button"
            aria-label="Search"
            onClick={() => setShowSearch((v) => !v)}
          >
            <SearchIcon className="h-5 w-5" />
          </Button>
          <CartButton />
        </div>
      </nav>
      {/* Search bar under header */}
      {showSearch && (
        <div className="w-full bg-white shadow-sm border-b py-4 animate-fade-in flex items-center px-[2.5rem] md:px-[2.5rem] sm:px-[1rem]" style={{zIndex: 49}}>
          <div className="w-full max-w-full flex items-center">
            <label className="flex items-center w-full">
              <SearchIcon className="h-5 w-5 text-gray-400" style={{paddingRight: '0.5rem'}} />
              <input
                type="text"
                placeholder="Ara..."
                className="w-full bg-transparent border-0 focus:ring-0 px-0 py-2 text-base focus:outline-none"
                autoFocus
              />
            </label>
            <button
              className="p-2 rounded-md hover:bg-gray-100 transition-colors ml-0"
              aria-label="Kapat"
              onClick={() => setShowSearch(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
      {/* Sidebar overlay for mobile */}
      {showSidebar && (
        <div className="fixed inset-0 z-50 flex">
          <div className="bg-white w-64 max-w-full h-full shadow-lg p-6 flex flex-col animate-slide-in-left">
            <button
              className="self-end mb-4 p-2 rounded hover:bg-gray-100"
              onClick={() => setShowSidebar(false)}
              aria-label="Menüyü Kapat"
            >
              <X className="h-6 w-6 text-primary" />
            </button>
            {/* Nav links */}
            <nav className="flex flex-col gap-4 mb-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base tracking-widest font-normal transition-colors hover:text-primary ${location === item.href ? "text-primary" : "text-muted-foreground"}`}
                  onClick={() => setShowSidebar(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2">
              {/* Language selector */}
              <div className="flex flex-col gap-2 mb-2">
                <button
                  className={`w-full px-3 py-2 rounded-md bg-white text-center ${i18n.language === "tr" ? "bg-primary text-white" : "text-foreground"}`}
                  onClick={() => i18n.changeLanguage("tr")}
                  disabled={i18n.language === "tr"}
                >
                  TÜRKÇE
                </button>
                <button
                  className={`w-full px-3 py-2 rounded-md bg-white text-center ${i18n.language === "en" ? "bg-primary text-white" : "text-foreground"}`}
                  onClick={() => i18n.changeLanguage("en")}
                  disabled={i18n.language === "en"}
                >
                  ENGLISH
                </button>
              </div>
              {/* Actions */}
              <div className="flex gap-2">
                <Link href="/login" aria-label="Login">
                  <Button variant="ghost" size="sm" type="button">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  type="button"
                  aria-label="Search"
                  onClick={() => {
                    setShowSidebar(false);
                    setShowSearch(true);
                  }}
                >
                  <SearchIcon className="h-5 w-5" />
                </Button>
                <CartButton />
              </div>
            </div>
          </div>
          {/* Overlay background */}
          <div className="flex-1 bg-black/30" onClick={() => setShowSidebar(false)} />
        </div>
      )}
    </>
  );
}
