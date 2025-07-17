import { useQuery } from "@tanstack/react-query";
import type { Article } from "@shared/schema";

export default function Journal() {
  const { data: articles = [], isLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

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
    <div className="min-h-screen bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">basında biz!</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest news about Skycrops and our innovative vertical farming technology.
          </p>
        </div>

        {/* Articles Grid */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{article.publishedAt}</p>
                  <h2 className="font-bold text-xl text-foreground mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <button className="text-primary font-medium hover:underline">
                    Read more →
                  </button>
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

        {/* Newsletter CTA */}
        <div className="mt-20 bg-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Stay in the loop</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest updates about our vertical farming innovations 
            and sustainable agriculture practices.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}
