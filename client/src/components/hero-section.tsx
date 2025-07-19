import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";
import { useTranslation } from 'react-i18next';
import { Link } from "wouter";
import kivircikImg from '@/assets/Kıvırcık.png';
import feslegenImg from '@/assets/Fesleğen.png';
import maydanozImg from '@/assets/Maydanoz.png';
import lolloRossoImg from '@/assets/Lollo Rosso.png';
import reyhanImg from '@/assets/Reyhan.png';
import rokaImg from '@/assets/Roka.png';
import kekikImg from '@/assets/Kekik.png';
import yagliYaprakImg from '@/assets/Yağlı Yaprak.png';
import headerImg from '@/assets/header.png';

export default function HeroSection() {
  const { t } = useTranslation();
  const { data: featuredProducts = [] } = useQuery<Product[]>({
    queryKey: ["/api/products/featured"],
  });

  const { data: allProducts = [] } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const heroProduct = featuredProducts[0];

  // Static product images and names for the homepage carousel
  const staticCarouselProducts = [
    { name: 'Kıvırcık', imageUrl: kivircikImg },
    { name: 'Fesleğen', imageUrl: feslegenImg },
    { name: 'Maydanoz', imageUrl: maydanozImg },
    { name: 'Lollo Rosso', imageUrl: lolloRossoImg },
    { name: 'Reyhan', imageUrl: reyhanImg },
    { name: 'Roka', imageUrl: rokaImg },
    { name: 'Kekik', imageUrl: kekikImg },
    { name: 'Yağlı Yaprak', imageUrl: yagliYaprakImg },
  ];

  return (
    <section className="relative bg-gradient-to-r from-secondary/20 to-primary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-center">
              {t('hero_title1')}<br />
              <span className="text-primary">{t('hero_title2')}</span><br />
              {t('hero_title3')}
            </h1>
            <p className="text-base text-muted-foreground mb-6 text-center">
              {heroProduct?.description || t('hero_description')}
            </p>
            <div className="flex justify-center mt-6">
              <Link href="/shop">
                <Button size="lg" className="text-lg px-8 py-6">
                  {t('shop_now')}
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
              <span className="font-semibold text-lg text-foreground text-center">{product.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
