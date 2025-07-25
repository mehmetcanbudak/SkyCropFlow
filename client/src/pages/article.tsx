import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import NewsletterSection from "@/components/newsletter-section";
import SocialSection from "@/components/social-section";
import type { Article } from "@shared/schema";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import bgPattern from '../assets/bgful.jpg';
import HeroBanner from "@/components/hero-banner";

export default function ArticlePage() {
  const { t } = useTranslation();
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: article, isLoading } = useQuery<Article>({
    queryKey: ["/api/articles", slug],
    enabled: !!slug,
  });

  const { data: allArticles = [] } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  if (isLoading) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">{t("loading")}</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {t("not_found")}
          </h1>
          <Link href="/blog" className="text-primary hover:underline">
            {t("blog")}
          </Link>
        </div>
      </div>
    );
  }

  const otherArticles = allArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 5);

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
      }}
    >
      <HeroBanner title={article.title} visible={true} showText={false} height="small" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-12 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
          <Link href="/" className="hover:text-primary transition-colors">
            {t("home")}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/blog" className="hover:text-primary transition-colors">
            {t("blog")}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{article.title}</span>
        </nav>

        {/* Article Content */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center space-x-4 text-muted-foreground">
              <time className="text-sm font-medium">
                {new Date(article.publishedAt).toLocaleDateString(i18n.language, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
              <span className="text-sm">•</span>
              <span className="text-sm font-medium">Skycrops Team</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-80 lg:h-96 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none mb-16 leading-relaxed">
            <div className="text-xl text-muted-foreground leading-relaxed mb-8">
              {article.excerpt}
            </div>

            <div className="space-y-6 text-foreground leading-relaxed">
              <p>{article.content}</p>
            </div>
          </article>

          {/* Related Articles */}
          <section className="border-t border-border pt-16">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                {t("more_articles")}
              </h2>
              <Link
                href="/blog"
                className="text-primary font-medium hover:underline"
              >
                {t("read_all_stories")}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/blog/${relatedArticle.slug}`}
                >
                  <article className="group cursor-pointer">
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground">
                        {new Date(relatedArticle.publishedAt).toLocaleDateString(
                          i18n.language,
                          { year: "numeric", month: "short", day: "numeric" },
                        )}
                      </p>
                    </div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
                      {relatedArticle.title}
                    </h3>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>

      <NewsletterSection />
      <SocialSection />
    </div>
  );
}
