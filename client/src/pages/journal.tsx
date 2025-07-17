import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import NewsletterSection from "@/components/newsletter-section";
import type { Article } from "@shared/schema";

export default function Journal() {
  const { data: articles = [], isLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });
  
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + articlesPerPage);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-6xl lg:text-7xl font-bold text-foreground text-center mb-2">journal</h1>
        </div>

        {/* Articles List */}
        {currentArticles.length > 0 ? (
          <div className="space-y-20">
            {currentArticles.map((article, index) => (
              <Link key={article.id} href={`/journal/${article.slug}`}>
                <article className="group cursor-pointer">
                  <div className="border-b border-border pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                      {/* Content */}
                      <div className="lg:col-span-8">
                        <div className="mb-6">
                          <p className="text-sm text-muted-foreground uppercase tracking-wider">
                            {article.publishedAt}
                          </p>
                        </div>
                        
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 group-hover:text-primary transition-colors leading-tight">
                          {article.title}
                        </h2>
                        
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                          {article.excerpt}
                        </p>
                        
                        <span className="text-primary font-medium hover:underline text-base">
                          Read article
                        </span>
                      </div>
                      
                      {/* Image */}
                      <div className="lg:col-span-4">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-64 lg:h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
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
            <p className="text-muted-foreground text-lg">No articles available at the moment.</p>
            <p className="text-muted-foreground">Check back soon for updates!</p>
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
                  Previous page
                </Button>
              )}
              
              <span className="text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              
              {currentPage < totalPages && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next page
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      <NewsletterSection />
    </div>
  );
}
