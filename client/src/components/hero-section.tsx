import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import kivircikImg from "@/assets/kivircik.png";
import feslegenImg from "@/assets/feslegen.png";
import maydanozImg from "@/assets/maydanoz.png";
import lolloRossoImg from "@/assets/lollo-rosso.png";
import reyhanImg from "@/assets/reyhan.png";
import rokaImg from "@/assets/roka.png";
import kekikImg from "@/assets/kekik.png";
import yagliYaprakImg from "@/assets/yagli-yaprak.png";
import headerImg from "@/assets/header.png";
import TiltedCard from "@/components/TiltedCard";
import Magnet from "@/components/Magnet";

export default function HeroSection() {
  const { t } = useTranslation();

  // Static product images and names for the homepage carousel
  const staticCarouselProducts = [
    { name: t("product_kivircik_name"), imageUrl: kivircikImg },
    { name: t("product_feslegen_name"), imageUrl: feslegenImg },
    { name: t("product_maydanoz_name"), imageUrl: maydanozImg },
    { name: t("product_lollo_rosso_name"), imageUrl: lolloRossoImg },
    { name: t("product_reyhan_name"), imageUrl: reyhanImg },
    { name: t("product_roka_name"), imageUrl: rokaImg },
    { name: t("product_kekik_name"), imageUrl: kekikImg },
    { name: t("product_yagli_yaprak_name"), imageUrl: yagliYaprakImg },
  ];

  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 md:mb-8 text-left">
              {t("hero_title1")}
              <br />
              <span className="text-primary">{t("hero_title2")}</span>
              <br />
              {t("hero_title3")}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 md:mb-6 text-left leading-relaxed max-w-2xl">
              <span className="font-semibold block mb-2">
                {t("hero_description").split(". ")[0] + (t("hero_description").includes(".") ? "." : "")}
              </span>
              <span className="text-sm sm:text-base text-muted-foreground">
                {t("hero_description").split(". ").slice(1).join(". ")}
              </span>
            </p>
            <div className="flex justify-center mt-4 md:mt-6">
              <Magnet padding={5}>
                <Link href="/shop">
                  <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6">
                    {t("shop_now")}
                  </Button>
                </Link>
              </Magnet>
            </div>
          </div>
          <div className="relative justify-center items-center -mt-48 hidden sm:flex">
            <img
              src={headerImg}
              alt="Skycrops Header"
              className="rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg max-h-[220px] sm:max-h-[300px] md:max-h-[400px] object-cover rotate-[-8deg] translate-y-4 md:translate-y-8"
            />
          </div>
        </div>
      </div>
      {/* Mobile header image below text */}
      <div className="flex sm:hidden justify-center items-center mt-4">
        <img
          src={headerImg}
          alt="Skycrops Header"
          className="rounded-2xl shadow-2xl w-full max-w-xs max-h-[220px] object-cover rotate-[-8deg]"
        />
      </div>
      {/* Vegetables Slider Header */}
      <div className="text-center mb-4 mt-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-4 text-center">
          {t("vegetables_slider_heading", "Sebzeler")}
        </h2>
      </div>
      {/* Product Carousel */}
      <div className="pb-8">
        <div className="flex space-x-4 sm:space-x-6 px-2 sm:px-4 overflow-x-auto scrollbar-hide">
          {staticCarouselProducts.map((product, idx) => (
            <div key={idx} className="flex-shrink-0 flex flex-col items-center">
              <TiltedCard containerHeight="auto" containerWidth="auto" showMobileWarning={false} showTooltip={false}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="rounded-full shadow-sm hover:shadow-lg transition-all duration-300 w-24 h-24 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover border-2 border-gray-100 mb-2 sm:mb-4"
                />
              </TiltedCard>
              <span className="font-semibold text-xs xs:text-sm sm:text-base md:text-lg text-foreground text-center">
                {product.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
