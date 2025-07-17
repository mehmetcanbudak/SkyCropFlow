import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl lg:text-7xl font-bold text-foreground text-center mb-2">journal</h1>
        </div>

        {/* Articles List */}
        {currentArticles.length > 0 ? (
          <div className="space-y-16">
            {currentArticles.map((article, index) => (
              <article key={article.id} className="group cursor-pointer">
                <div className="border-b border-border pb-12">
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">
                      {article.publishedAt}
                    </p>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h2>
                  
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="lg:flex-1">
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <button className="text-primary font-medium hover:underline">
                          Read article
                        </button>
                        <button className="text-primary font-medium hover:underline">
                          Read article
                        </button>
                      </div>
                    </div>
                    
                    <div className="lg:w-80 w-full">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-48 lg:h-60 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </article>
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
