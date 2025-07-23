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
    <div className="flex-1 flex flex-col">
      <HeroSection />
      {/* <CategorySection /> */}

      {/* Bundles Section */}
      <section className="py-8 bg-muted/50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-center">
              {t("bundles_heading")}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 text-center">
              {t("bundles_subheading")}
            </p>
          </div>

          {/* Bundle Cards */}
          <div className="flex flex-row overflow-x-auto gap-4 md:grid md:grid-cols-3 md:gap-8 scrollbar-hide snap-x snap-mandatory pl-4 pr-4 md:pl-0 md:pr-0">
            {/* Fresh Greens Bundle */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 w-64 min-w-[14rem] max-w-[309px] flex-shrink-0 flex flex-col h-full mr-4 last:mr-0 snap-center md:w-full md:min-w-0 md:max-w-[309px] md:overflow-hidden">
              {/* Image Container - Fixed Aspect Ratio */}
              <div className="relative aspect-[2/1] overflow-hidden">
                <img
                  src={bundle1}
                  alt={t("bundle_fresh_greens_name")}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 max-w-[309px] max-h-[309px]"
                />
                <div className="absolute top-2 right-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "#B6D2DC", color: "#1e293b" }}
                  >
                    {t("save_percent", { percent: 25 })}
                  </span>
                </div>
              </div>
              
              {/* Content Container - Consistent Height */}
              <div className="flex flex-col flex-1 p-3 sm:p-4">
                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                  {t("bundle_fresh_greens_name")}
                </h3>
                <p className="text-base text-muted-foreground mb-2 line-clamp-3">
                  {t("bundle_fresh_greens_desc")}
                </p>
                
                {/* Price and Action Section - Pushed to Bottom */}
                <div className="mt-auto pt-2">
                  <div className="flex items-center justify-end gap-2 mb-2">
                    <span className="text-lg font-bold text-primary">
                      24,99 TL
                    </span>
                    <span className="text-xs text-muted-foreground line-through">
                      32,99 TL
                    </span>
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
                    <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      {t("choose_delivery")}
                    </button>
                  </DeliveryModal>
                </div>
              </div>
            </div>

            {/* Garden Mix Bundle */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 w-64 min-w-[14rem] max-w-[309px] flex-shrink-0 flex flex-col h-full mr-4 last:mr-0 snap-center md:w-full md:min-w-0 md:max-w-[309px] md:overflow-hidden">
              {/* Image Container - Fixed Aspect Ratio */}
              <div className="relative aspect-[2/1] overflow-hidden">
                <img
                  src={bundle1}
                  alt={t("bundle_garden_mix_name")}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 max-w-[309px] max-h-[309px]"
                />
                <div className="absolute top-2 right-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "#B6D2DC", color: "#1e293b" }}
                  >
                    {t("save_percent", { percent: 30 })}
                  </span>
                </div>
              </div>
              
              {/* Content Container - Consistent Height */}
              <div className="flex flex-col flex-1 p-3 sm:p-4">
                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                  {t("bundle_garden_mix_name")}
                </h3>
                <p className="text-base text-muted-foreground mb-2 line-clamp-3">
                  {t("bundle_garden_mix_desc")}
                </p>
                
                {/* Price and Action Section - Pushed to Bottom */}
                <div className="mt-auto pt-2">
                  <div className="flex items-center justify-end gap-2 mb-2">
                    <span className="text-lg font-bold text-primary">
                      34,99 TL
                    </span>
                    <span className="text-xs text-muted-foreground line-through">
                      49,99 TL
                    </span>
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
                    <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      {t("choose_delivery")}
                    </button>
                  </DeliveryModal>
                </div>
              </div>
            </div>

            {/* Family Pack Bundle */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 w-64 min-w-[14rem] max-w-[309px] flex-shrink-0 flex flex-col h-full mr-4 last:mr-0 snap-center md:w-full md:min-w-0 md:max-w-[309px] md:overflow-hidden">
              {/* Image Container - Fixed Aspect Ratio */}
              <div className="relative aspect-[2/1] overflow-hidden">
                <img
                  src={bundle1}
                  alt={t("bundle_family_pack_name")}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 max-w-[309px] max-h-[309px]"
                />
                <div className="absolute top-2 right-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "#B6D2DC", color: "#1e293b" }}
                  >
                    {t("save_percent", { percent: 35 })}
                  </span>
                </div>
              </div>
              
              {/* Content Container - Consistent Height */}
              <div className="flex flex-col flex-1 p-3 sm:p-4">
                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                  {t("bundle_family_pack_name")}
                </h3>
                <p className="text-base text-muted-foreground mb-2 line-clamp-3">
                  {t("bundle_family_pack_desc")}
                </p>
                
                {/* Price and Action Section - Pushed to Bottom */}
                <div className="mt-auto pt-2">
                  <div className="flex items-center justify-end gap-2 mb-2">
                    <span className="text-lg font-bold text-primary">
                      59,99 TL
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      89,99 TL
                    </span>
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
                    <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      {t("choose_delivery")}
                    </button>
                  </DeliveryModal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Preview */}
      <section className="py-8 bg-muted/50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-center">
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

          <div className="flex flex-row overflow-x-auto gap-4 scrollbar-hide snap-x snap-mandatory pl-4 pr-4">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 w-64 min-w-[14rem] max-w-xs flex-shrink-0 mr-4 last:mr-0 snap-center"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <article>
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-28 xs:h-32 sm:h-36 object-cover rounded-t-xl"
                  />
                  <div className="p-3 sm:p-4">
                    <p className="text-xs text-muted-foreground mb-1">
                      {new Date(article.publishedAt).toLocaleDateString(
                        i18n.language,
                        { year: 'numeric', month: 'short', day: 'numeric' },
                      )}
                    </p>
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-1 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <SocialSection />
    
    </div>
  );
}
