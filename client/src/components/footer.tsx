import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import skycropsLogo from "@/assets/skycrops.svg";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full max-w-screen overflow-x-hidden bg-card border-t mt-auto box-border">
      <div className="w-full max-w-screen mx-auto px-2 sm:px-4 lg:px-8 pt-3 pb-0 overflow-x-hidden box-border">

        <div className="flex flex-row items-center justify-between gap-2 lg:gap-0 lg:flex-nowrap">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <img src={skycropsLogo} alt="SKYCROPS" className="h-10 w-auto flex-shrink-0" />
          </div>
          {/* Center: Tagline - Hidden on smaller screens, visible on desktop */}
          <div className="hidden xl:flex flex-col items-center justify-center flex-1">
            <p className="text-muted-foreground mb-0 text-xs sm:text-sm whitespace-normal break-words text-center" style={{maxWidth: '260px'}}>{t("footer_tagline")}</p>
          </div>
          {/* Right: 4 sections in a row - scrollable */}
          <div className="flex flex-row items-start justify-end gap-2 sm:gap-4 lg:gap-8 flex-shrink-0 overflow-x-auto scrollbar-hide px-2 max-w-full box-border snap-x snap-mandatory sm:overflow-x-visible sm:snap-none">
            {/* Products */}
            <div className="flex flex-col items-start text-left min-w-[90px] snap-start">
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
            <div className="flex flex-col items-start text-left min-w-[90px] snap-start">
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
 
              </ul>
            </div>
            {/* Contact */}
            <div className="flex flex-col items-start text-left min-w-[90px] snap-start">
              <h4 className="font-semibold mb-1 text-xs sm:text-base">{t("contact")}</h4>
              <ul className="space-y-1 text-muted-foreground text-xs sm:text-sm">
                <li>
                  <a
                    href="tel:+902826854383"
                    className="hover:text-primary transition-colors block py-0.5"
                  >
                    +90 282 685 43 83
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@skycrops.farm"
                    className="hover:text-primary transition-colors block py-0.5"
                  >
                    info@skycrops.farm
                  </a>
                </li>
              </ul>
            </div>
            {/* Address */}
            <div className="flex flex-col items-start text-left min-w-[120px] snap-start">
              <h4 className="font-semibold mb-1 text-xs sm:text-base">Adres</h4>
              <div className="space-y-1 text-muted-foreground text-xs sm:text-sm">
                <div>
                  <a
                    href="https://www.google.com/maps/dir//T%C3%BCrkg%C3%BCc%C3%BC+OSB,+1+OSB,+B%C3%BClent+Ecevit+Blv.+No:13%2F1,+59850+%C3%87orlu%2FTekirda%C4%9F/@41.1388232,27.7732848,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14b4e787281fadc3:0x49edb1edb177e31f!2m2!1d27.8556856!2d41.1388526"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Çorlu 1 OSB<br />
                    Bülent Ecevit Caddesi No:13/1<br />
                    PK: 59860 – Tekirdağ, Türkiye
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-2 pt-2 text-center text-muted-foreground text-xs pb-0 mb-0">
          <p className="pb-0 mb-0">
            &copy; 2025 Skycrops. {t("all_rights_reserved")}{" "}
            <a
              href="https://sartlar.com/gizlilik-politikasi-ornegi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {t("privacy_policy")}
            </a>{" "}
            <a
              href="/attached_assets/gida-guvenligi-sertifikasi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Kalite ve Gıda Güvenliği Politikası
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
