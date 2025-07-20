import HeroSection from "@/components/hero-section";
import NewsletterSection from "@/components/newsletter-section";
import SocialSection from "@/components/social-section";
import { DeliveryModal } from "@/components/delivery-modal";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import type { Article } from "@shared/schema";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import bundle1 from "@/assets/bundle1.png";

export default function Home() {
  const { t } = useTranslation();
  const { data: articles = [] } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  return (
    <div>
      <HeroSection />
      {/* <CategorySection /> */}

      {/* Bundles Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
              {t("bundles_heading")}
            </h2>
            <p className="text-base text-muted-foreground mb-6 text-center">
              {t("bundles_subheading")}
            </p>
          </div>

          {/* Bundle Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 justify-items-center">
            {/* Fresh Greens Bundle */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img
                  src={bundle1}
                  alt={t("bundle_fresh_greens_name")}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: "#B6D2DC", color: "#1e293b" }}
                  >
                    {t("save_percent", { percent: 25 })}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t("bundle_fresh_greens_name")}
                </h3>
                <p className="text-base text-muted-foreground mb-4">
                  {t("bundle_fresh_greens_desc")}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">
                      24,99 TL
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      32,99 TL
                    </span>
                  </div>
                </div>
                <DeliveryModal
                  product={{
                    id: 1001,
                    name: t("bundle_fresh_greens_name"),
                    slug: "taze-yesillikler-paketi",
                    price: 2499,
                    originalPrice: 3299,
                    description: t("bundle_fresh_greens_desc"),
                    imageUrl: bundle1,
                    category: "bundles",
                    inStock: true,
                    featured: true,
                    isBestseller: false,
                    flavor: null,
                    isNewArrival: null,
                  }}
                >
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                    {t("choose_delivery")}
                  </button>
                </DeliveryModal>
              </div>
            </div>

            {/* Garden Mix Bundle */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img
                  src={bundle1}
                  alt={t("bundle_garden_mix_name")}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: "#B6D2DC", color: "#1e293b" }}
                  >
                    {t("save_percent", { percent: 30 })}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t("bundle_garden_mix_name")}
                </h3>
                <p className="text-base text-muted-foreground mb-4">
                  {t("bundle_garden_mix_desc")}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">
                      34,99 TL
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      49,99 TL
                    </span>
                  </div>
                </div>
                <DeliveryModal
                  product={{
                    id: 1002,
                    name: t("bundle_garden_mix_name"),
                    slug: "kucuk-aile-paketi",
                    price: 3999,
                    originalPrice: 5999,
                    description: t("bundle_garden_mix_desc"),
                    imageUrl: bundle1,
                    category: "bundles",
                    inStock: true,
                    featured: false,
                    isBestseller: false,
                    flavor: null,
                    isNewArrival: null,
                  }}
                >
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                    {t("choose_delivery")}
                  </button>
                </DeliveryModal>
              </div>
            </div>

            {/* Family Pack Bundle */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group col-span-2 md:col-span-1 max-w-sm md:max-w-none">
              <div className="relative">
                <img
                  src={bundle1}
                  alt={t("bundle_family_pack_name")}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: "#B6D2DC", color: "#1e293b" }}
                  >
                    {t("save_percent", { percent: 35 })}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t("bundle_family_pack_name")}
                </h3>
                <p className="text-base text-muted-foreground mb-4">
                  {t("bundle_family_pack_desc")}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">
                      59,99 TL
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      89,99 TL
                    </span>
                  </div>
                </div>
                <DeliveryModal
                  product={{
                    id: 1003,
                    name: t("bundle_family_pack_name"),
                    slug: "buyuk-aile-paketi",
                    price: 5999,
                    originalPrice: 8999,
                    description: t("bundle_family_pack_desc"),
                    imageUrl: bundle1,
                    category: "bundles",
                    inStock: true,
                    featured: false,
                    isBestseller: false,
                    flavor: null,
                    isNewArrival: null,
                  }}
                >
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                    {t("choose_delivery")}
                  </button>
                </DeliveryModal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Preview */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
              {t("blog_press_heading")}
            </h2>
            <Link
              href="/blog"
              className="text-primary font-medium hover:underline"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t("read_all_stories")}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    {new Date(article.publishedAt).toLocaleDateString(
                      i18n.language,
                      { year: "numeric", month: "short", day: "numeric" },
                    )}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {article.title}
                  </h3>
                  <p className="text-base text-muted-foreground mb-2">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <SocialSection />
    </div>
  );
}
