import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import NewsletterSection from "@/components/newsletter-section";
import type { Article } from "@shared/schema";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import bgPattern from '../assets/bgful.jpg';
import bgImage from '../assets/bgtopprod.jpg';
import HeroBanner from "@/components/hero-banner";

export default function Journal() {
  const { t } = useTranslation();
  const { data: articles = [], isLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const pressArticles = articles.filter((a) => a.type === "press");
  const blogArticles = articles.filter((a) => a.type !== "press");
  const totalPages = Math.ceil(blogArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = blogArticles.slice(
    startIndex,
    startIndex + articlesPerPage,
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">{t("loading")}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex-1 flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
      }}
    >
      <HeroBanner title={t("blog")} visible={true} showText={false} height="small" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
        </div>

        {/* Articles List */}
        {currentArticles.length > 0 ? (
          <div className="space-y-20 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            {currentArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <article className="group cursor-pointer">
                  <div className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      {/* Image - Above on mobile, right on desktop */}
                      <div className="lg:col-span-4 flex items-center order-1 lg:order-2 mt-6 lg:mt-0">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-24 lg:h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-md"
                        />
                      </div>

                      {/* Content - Below on mobile, left on desktop */}
                      <div className="lg:col-span-8 order-2 lg:order-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-medium">
                          {new Date(article.publishedAt).toLocaleDateString(
                            i18n.language,
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            },
                          )}
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                          {article.title}
                        </h2>

                        <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                          {article.excerpt}
                        </p>

                        <div className="text-right">
                          <span className="text-primary font-semibold hover:underline text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                            {t("readArticle")}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <p className="text-muted-foreground text-lg">{t("noArticles")}</p>
            <p className="text-muted-foreground">{t("checkBackSoon")}</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              {currentPage > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="hover:bg-primary hover:text-white transition-colors"
                >
                  {t("previousPage")}
                </Button>
              )}

              <span className="text-muted-foreground font-medium">
                {t("page")} {currentPage} {t("of")} {totalPages}
              </span>

              {currentPage < totalPages && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="hover:bg-primary hover:text-white transition-colors"
                >
                  {t("nextPage")}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Basında Biz Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
            Basında Biz
          </h2>
        </div>
        {pressArticles.length > 0 ? (
          <ul className="space-y-6 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            {pressArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <li className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0 group cursor-pointer hover:bg-gray-50 rounded-xl transition-all duration-200 p-4 -m-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-base text-muted-foreground mb-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0 whitespace-nowrap font-medium bg-gray-100 px-3 py-1 rounded-full">
                      {new Date(article.publishedAt).toLocaleDateString(
                        i18n.language,
                        { year: "numeric", month: "short", day: "numeric" },
                      )}
                    </span>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <p className="text-muted-foreground text-lg">
              Henüz basında bir haberimiz yok.
            </p>
          </div>
        )}
      </div>

      <NewsletterSection />
    </div>
  );
}
