import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import NewsletterSection from "@/components/newsletter-section";
import type { Article } from "@shared/schema";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function Journal() {
  const { t } = useTranslation();
  const { data: articles = [], isLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });
  
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const pressArticles = articles.filter(a => a.type === 'press');
  const blogArticles = articles.filter(a => a.type !== 'press');
  const totalPages = Math.ceil(blogArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = blogArticles.slice(startIndex, startIndex + articlesPerPage);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">{t('loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-center">{t('blog')}</h1>
        </div>

        {/* Articles List */}
        {currentArticles.length > 0 ? (
          <div className="space-y-20">
            {currentArticles.map((article, index) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <article className="group cursor-pointer">
                  <div className="border-b border-border pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                      {/* Content */}
                      <div className="lg:col-span-8">
                        <div className="mb-6">
                          <p className="text-sm text-muted-foreground uppercase tracking-wider">
                            {new Date(article.publishedAt).toLocaleDateString(i18n.language, { year: 'numeric', month: 'short', day: 'numeric' })}
                          </p>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                          {article.title}
                        </h2>
                        
                        <p className="text-base text-muted-foreground mb-2">
                          {article.excerpt}
                        </p>
                        
                        <span className="text-primary font-medium hover:underline text-sm">
                          {t('readArticle')}
                        </span>
                      </div>
                      
                      {/* Image */}
                      <div className="lg:col-span-4">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-40 lg:h-56 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">{t('noArticles')}</p>
            <p className="text-muted-foreground">{t('checkBackSoon')}</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-4">
              {currentPage > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  {t('previousPage')}
                </Button>
              )}
              
              <span className="text-muted-foreground">
                {t('page')} {currentPage} {t('of')} {totalPages}
              </span>
              
              {currentPage < totalPages && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  {t('nextPage')}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Basında Biz Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-6 text-center">Basında Biz</h2>
        </div>
        {pressArticles.length > 0 ? (
          <ul className="space-y-8">
            {pressArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <li className="border-b border-border pb-6 group cursor-pointer hover:bg-accent/10 rounded-xl transition">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">{article.title}</h3>
                      <p className="text-base text-muted-foreground mb-2">{article.excerpt}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">{new Date(article.publishedAt).toLocaleDateString(i18n.language, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-lg">Henüz basında bir haberimiz yok.</p>
          </div>
        )}
      </div>

      <NewsletterSection />
    </div>
  );
}
