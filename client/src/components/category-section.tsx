import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import type { Category } from "@shared/schema";
import { useTranslation } from "react-i18next";

export default function CategorySection() {
  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { t } = useTranslation();

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 hover:bg-primary/20";
      case "secondary":
        return "bg-secondary/10 hover:bg-secondary/20";
      case "accent":
        return "bg-accent/20 hover:bg-accent/30";
      default:
        return "bg-primary/10 hover:bg-primary/20";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Link
            href="/shop"
            className="text-4xl font-bold text-foreground mb-4 text-primary hover:underline cursor-pointer inline-block"
          >
            {t("choose_vegetables")}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/shop?category=${category.slug}`}>
              <div className="group cursor-pointer">
                <div
                  className={`${getColorClasses(category.color)} rounded-2xl p-8 text-center transition-all duration-300 group-hover:scale-105`}
                >
                  <h3 className="font-bold text-xl text-foreground mb-2">
                    {t(`category_${category.slug}_name`)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(`category_${category.slug}_desc`)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
