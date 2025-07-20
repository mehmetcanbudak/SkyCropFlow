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
    <section className="relative bg-gradient-to-r from-secondary/20 to-primary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-center">
              {t("hero_title1")}
              <br />
              <span className="text-primary">{t("hero_title2")}</span>
              <br />
              {t("hero_title3")}
            </h1>
            <p className="text-base text-muted-foreground mb-6 text-center">
              {t("hero_description")}
            </p>
            <div className="flex justify-center mt-6">
              <Link href="/shop">
                <Button size="lg" className="text-lg px-8 py-6">
                  {t("shop_now")}
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <img
              src={headerImg}
              alt="Skycrops Header"
              className="rounded-2xl shadow-2xl w-full max-h-[400px] object-cover rotate-[-8deg] translate-y-8"
            />
          </div>
        </div>
      </div>

      {/* Product Carousel */}
      <div className="pb-12">
        <div className="flex space-x-6 px-4 overflow-x-auto scrollbar-hide">
          {staticCarouselProducts.map((product, idx) => (
            <div key={idx} className="flex-shrink-0 flex flex-col items-center">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="rounded-full shadow-lg w-48 h-48 object-cover border-4 border-white mb-4"
              />
              <span className="font-semibold text-lg text-foreground text-center">
                {product.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
