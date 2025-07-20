import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type {
  Article,
  Product,
  InsertArticle,
  InsertProduct,
} from "@shared/schema";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

interface ArticleFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
  type: string;
}

interface ProductFormData {
  name: string;
  slug: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  featured: boolean;
  isBestseller: boolean;
  inStock: boolean;
}

export default function AdminPage() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Queries
  const { data: articles = [] } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  // Article mutations
  const createArticleMutation = useMutation({
    mutationFn: (data: InsertArticle) =>
      apiRequest("POST", "/api/admin/articles", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/articles"] });
      toast({ title: t("article_created_successfully") });
      setEditingArticle(null);
    },
    onError: () => {
      toast({ title: t("failed_to_create_article"), variant: "destructive" });
    },
  });

  const updateArticleMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<InsertArticle> }) =>
      apiRequest("PUT", `/api/admin/articles/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/articles"] });
      toast({ title: t("article_updated_successfully") });
      setEditingArticle(null);
    },
    onError: () => {
      toast({ title: t("failed_to_update_article"), variant: "destructive" });
    },
  });

  const deleteArticleMutation = useMutation({
    mutationFn: (id: number) =>
      apiRequest("DELETE", `/api/admin/articles/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/articles"] });
      toast({ title: t("article_deleted_successfully") });
    },
    onError: () => {
      toast({ title: t("failed_to_delete_article"), variant: "destructive" });
    },
  });

  // Product mutations
  const createProductMutation = useMutation({
    mutationFn: (data: InsertProduct) =>
      apiRequest("POST", "/api/admin/products", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      toast({ title: t("product_created_successfully") });
      setEditingProduct(null);
    },
    onError: () => {
      toast({ title: t("failed_to_create_product"), variant: "destructive" });
    },
  });

  const updateProductMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<InsertProduct> }) =>
      apiRequest("PUT", `/api/admin/products/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      toast({ title: t("product_updated_successfully") });
      setEditingProduct(null);
    },
    onError: () => {
      toast({ title: t("failed_to_update_product"), variant: "destructive" });
    },
  });

  const deleteProductMutation = useMutation({
    mutationFn: (id: number) =>
      apiRequest("DELETE", `/api/admin/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      toast({ title: t("product_deleted_successfully") });
    },
    onError: () => {
      toast({ title: t("failed_to_delete_product"), variant: "destructive" });
    },
  });

  const handleArticleSubmit = (formData: ArticleFormData) => {
    if (editingArticle && editingArticle.id != null) {
      updateArticleMutation.mutate({
        id: editingArticle.id,
        data: formData,
      });
    } else {
      createArticleMutation.mutate(formData);
    }
  };

  const handleProductSubmit = (formData: ProductFormData) => {
    if (editingProduct && editingProduct.id != null) {
      updateProductMutation.mutate({
        id: editingProduct.id,
        data: formData,
      });
    } else {
      createProductMutation.mutate(formData);
    }
  };

  return (
    <div className="container mx-auto p-6 pt-32">
      <h1 className="text-3xl font-bold mb-6">{t("admin_panel_title")}</h1>

      <Tabs defaultValue="articles" className="space-y-6">
        <TabsList>
          <TabsTrigger value="articles">{t("articles_tab")}</TabsTrigger>
          <TabsTrigger value="products">{t("products_tab")}</TabsTrigger>
        </TabsList>

        <TabsContent value="articles" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">
              {t("manage_articles_title")}
            </h2>
            <Button
              onClick={() =>
                setEditingArticle({
                  title: "",
                  slug: "",
                  excerpt: "",
                  content: "",
                  imageUrl: "",
                  publishedAt: new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }),
                  type: "blog",
                } as Article)
              }
            >
              <Plus className="h-4 w-4 mr-2" />
              {t("new_article_button")}
            </Button>
          </div>

          {editingArticle && (
            <ArticleForm
              article={editingArticle.id ? editingArticle : null}
              onSubmit={handleArticleSubmit}
              onCancel={() => setEditingArticle(null)}
              isLoading={
                createArticleMutation.isPending ||
                updateArticleMutation.isPending
              }
            />
          )}

          <div className="grid gap-4">
            {articles.map((article) => (
              <Card key={article.id}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {article.title}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingArticle(article)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Bu yazıyı silmek istediğinize emin misiniz?",
                            )
                          ) {
                            deleteArticleMutation.mutate(article.id);
                          }
                        }}
                        disabled={deleteArticleMutation.isPending}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t("published_date")}: {article.publishedAt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">
              {t("manage_products_title")}
            </h2>
            <Button
              onClick={() =>
                setEditingProduct({
                  name: "",
                  slug: "",
                  price: 0,
                  description: "",
                  category: "",
                  imageUrl: "",
                  originalPrice: null,
                  flavor: null,
                  isNewArrival: null,
                  isBestseller: null,
                  inStock: null,
                  featured: null,
                } as Product)
              }
            >
              <Plus className="h-4 w-4 mr-2" />
              {t("new_product_button")}
            </Button>
          </div>

          {editingProduct && (
            <ProductForm
              product={editingProduct.id ? editingProduct : null}
              onSubmit={handleProductSubmit}
              onCancel={() => setEditingProduct(null)}
              isLoading={
                createProductMutation.isPending ||
                updateProductMutation.isPending
              }
            />
          )}

          <div className="grid gap-4">
            {products.map((product) => (
              <Card key={product.id}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {product.name}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingProduct(product)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Bu ürünü silmek istediğinize emin misiniz?",
                            )
                          ) {
                            deleteProductMutation.mutate(product.id);
                          }
                        }}
                        disabled={deleteProductMutation.isPending}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t("price")}: ${(product.price / 100).toFixed(2)} |{" "}
                    {t("category")}: {product.category}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ArticleForm({
  article,
  onSubmit,
  onCancel,
  isLoading,
}: {
  article: Article | null;
  onSubmit: (data: ArticleFormData) => void;
  onCancel: () => void;
  isLoading: boolean;
}) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ArticleFormData>({
    title: article?.title || "",
    slug: article?.slug || "",
    excerpt: article?.excerpt || "",
    content: article?.content || "",
    imageUrl: article?.imageUrl || "",
    publishedAt:
      article?.publishedAt ||
      new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    type: article?.type || "blog",
  });
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const form = new FormData();
    form.append("file", file);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      setFormData((prev) => ({ ...prev, imageUrl: data.url }));
    } catch {
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, type: formData.type as "blog" | "press" });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {article?.id
            ? t("edit_article_title")
            : t("create_new_article_title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("title_label")}
              </label>
              <Input
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("slug_label")}
              </label>
              <Input
                value={formData.slug}
                onChange={(e) =>
                  setFormData({ ...formData, slug: e.target.value })
                }
                required
              />
            </div>
          </div>
          {/* Post Type Selector */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Gönderi Türü
            </label>
            <select
              className="w-full border rounded px-3 py-2"
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <option value="blog">Blog Post</option>
              <option value="press">Basında Biz</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              {t("excerpt_label")}
            </label>
            <Textarea
              value={formData.excerpt}
              onChange={(e) =>
                setFormData({ ...formData, excerpt: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              {t("content_label")}
            </label>
            <Textarea
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              className="min-h-32"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("image_url_label")}
              </label>
              <Input
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
                required
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="mt-2"
              />
              {uploading && <div>{t("uploading_text") || "Uploading..."}</div>}
              {formData.imageUrl && (
                <img
                  src={formData.imageUrl}
                  alt="Preview"
                  className="mt-2 max-h-32"
                />
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("published_date_label")}
              </label>
              <Input
                value={formData.publishedAt}
                onChange={(e) =>
                  setFormData({ ...formData, publishedAt: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button type="submit" disabled={isLoading}>
              {isLoading
                ? t("saving_text")
                : article?.id
                  ? t("update_button")
                  : t("create_button")}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              {t("cancel_button")}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function ProductForm({
  product,
  onSubmit,
  onCancel,
  isLoading,
}: {
  product: Product | null;
  onSubmit: (data: ProductFormData) => void;
  onCancel: () => void;
  isLoading: boolean;
}) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ProductFormData>({
    name: product?.name || "",
    slug: product?.slug || "",
    price: product?.price || 0,
    description: product?.description || "",
    category: product?.category || "",
    imageUrl: product?.imageUrl || "",
    featured: product?.featured || false,
    isBestseller: product?.isBestseller || false,
    inStock: product?.inStock ?? true,
  });
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const form = new FormData();
    form.append("file", file);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      setFormData((prev) => ({ ...prev, imageUrl: data.url }));
    } catch {
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {product?.id
            ? t("edit_product_title")
            : t("create_new_product_title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("name_label")}
              </label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("slug_label")}
              </label>
              <Input
                value={formData.slug}
                onChange={(e) =>
                  setFormData({ ...formData, slug: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("price_label")}
              </label>
              <Input
                type="number"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: parseInt(e.target.value) })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("category_label")}
              </label>
              <Input
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              {t("description_label")}
            </label>
            <Textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              {t("image_url_label")}
            </label>
            <Input
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
              required
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="mt-2"
            />
            {uploading && <div>{t("uploading_text") || "Uploading..."}</div>}
            {formData.imageUrl && (
              <img
                src={formData.imageUrl}
                alt="Preview"
                className="mt-2 max-h-32"
              />
            )}
          </div>

          <div className="flex gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) =>
                  setFormData({ ...formData, featured: e.target.checked })
                }
              />
              <span>{t("featured_label")}</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.isBestseller}
                onChange={(e) =>
                  setFormData({ ...formData, isBestseller: e.target.checked })
                }
              />
              <span>{t("bestseller_label")}</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.inStock}
                onChange={(e) =>
                  setFormData({ ...formData, inStock: e.target.checked })
                }
              />
              <span>{t("in_stock_label")}</span>
            </label>
          </div>

          <div className="flex gap-2">
            <Button type="submit" disabled={isLoading}>
              {isLoading
                ? t("saving_text")
                : product?.id
                  ? t("update_button")
                  : t("create_button")}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              {t("cancel_button")}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
