import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import skycropsLogo from "@/assets/skycrops.svg";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 sm:flex-wrap">
          {/* Left: Logo and tagline */}
          <div className="flex flex-row items-center gap-2 min-w-0 max-w-full sm:max-w-[420px] flex-shrink">
            <img src={skycropsLogo} alt="SKYCROPS" className="h-8 w-auto flex-shrink-0" />
            <p className="text-muted-foreground mb-0 text-xs sm:text-sm whitespace-normal break-words" style={{maxWidth: '260px'}}>{t("footer_tagline")}</p>
          </div>
          {/* Right: 3 sections in a row */}
          <div className="flex flex-row items-start justify-end gap-4 sm:gap-8 flex-1 min-w-[250px]">
            {/* Products */}
            <div className="flex flex-col items-start text-left min-w-[90px]">
              <h4 className="font-semibold mb-1 text-xs sm:text-base">{t("products")}</h4>
              <ul className="space-y-1 text-muted-foreground text-xs sm:text-sm">
                <li>
                  <Link
                    href="/shop"
                    className="hover:text-primary transition-colors block py-0.5"
                  >
                    {t("all_products_footer")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop?category=paketler"
                    className="hover:text-primary transition-colors block py-0.5"
                  >
                    {t("bundles_footer")}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Company */}
            <div className="flex flex-col items-start text-left min-w-[90px]">
              <h4 className="font-semibold mb-1 text-xs sm:text-base">{t("company")}</h4>
              <ul className="space-y-1 text-muted-foreground text-xs sm:text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-primary transition-colors block py-0.5"
                  >
                    {t("about_us")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-primary transition-colors block py-0.5"
                  >
                    {t("blog")}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://sartlar.com/gizlilik-politikasi-ornegi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors block py-0.5"
                  >
                    {t("privacy_policy")}
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact */}
            <div className="flex flex-col items-start text-left min-w-[120px]">
              <h4 className="font-semibold mb-1 text-xs sm:text-base">{t("contact")}</h4>
              <div className="space-y-1 text-muted-foreground text-xs sm:text-sm">
                <p>{t("footer_address")}</p>
                <p>{t("footer_phone")}</p>
                <p>{t("footer_email")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-2 pt-2 text-center text-muted-foreground text-xs sm:text-sm">
          <p>&copy; 2025 Skycrops. {t("all_rights_reserved")}</p>
        </div>
      </div>
    </footer>
  );
}
