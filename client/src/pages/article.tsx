import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import NewsletterSection from "@/components/newsletter-section";
import SocialSection from "@/components/social-section";
import type { Article } from "@shared/schema";

export default function ArticlePage() {
  const [match, params] = useRoute("/journal/:slug");
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article not found</h1>
          <Link href="/journal" className="text-primary hover:underline">
            Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  const otherArticles = allArticles.filter(a => a.id !== article.id).slice(0, 5);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-12">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/journal" className="hover:text-primary transition-colors">
            Journal
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{article.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center space-x-4 text-muted-foreground">
            <time className="text-sm">{article.publishedAt}</time>
            <span className="text-sm">•</span>
            <span className="text-sm">Skycrops Team</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-80 lg:h-96 object-cover rounded-2xl"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-16">
          <div className="text-xl text-muted-foreground leading-relaxed mb-8">
            {article.excerpt}
          </div>

          <div className="space-y-6 text-foreground leading-relaxed">
            {/* Simulated article content based on the original content */}
            <p>
              {article.content}
            </p>

            <blockquote className="border-l-4 border-primary pl-6 italic text-lg my-8">
              "Sustainability in agriculture is not just about the environment - it's about creating a 
              healthier future for all of us through innovation and dedication."
              <br />
              <span className="text-muted-foreground font-normal">— Skycrops Philosophy</span>
            </blockquote>

            <p>
              Our commitment to sustainable farming practices drives every decision we make. From our 
              water-efficient hydroponic systems to our renewable energy sources, we're constantly 
              working to minimize our environmental impact while maximizing the nutritional value 
              of our vegetables.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              The Future of Agriculture
            </h2>

            <p>
              Vertical farming represents more than just a technological advancement - it's a paradigm 
              shift that addresses the challenges of modern agriculture. By growing indoors, we can 
              control every aspect of the growing environment, ensuring optimal conditions for plant 
              growth while using significantly fewer resources than traditional farming methods.
            </p>

            <p>
              Our facility demonstrates that sustainable agriculture isn't just possible - it's the 
              future. With 97% less water usage, zero pesticides, and year-round production capability, 
              we're proving that innovation and environmental responsibility can go hand in hand.
            </p>
          </div>
        </article>

        {/* Related Articles */}
        <section className="border-t border-border pt-16">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">More articles</h2>
            <Link href="/journal" className="text-primary font-medium hover:underline">
              Read all stories
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((relatedArticle) => (
              <Link key={relatedArticle.id} href={`/journal/${relatedArticle.slug}`}>
                <article className="group cursor-pointer">
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">
                      {relatedArticle.publishedAt}
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

      <NewsletterSection />
      <SocialSection />
    </div>
  );
}