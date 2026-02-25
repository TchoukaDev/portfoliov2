import { ArticleRepository } from "@/repositories/articleRepository";
import ArticleList from "@/Components/AdminPage/ArticleList";
import Button from "@/Components/UI/Button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestion des articles",
  robots: { index: false },
};

export default async function AdminArticlesPage() {
  const articles = await ArticleRepository.getAllArticles();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white">Articles</h1>
        <Button asChild>
          <Link href="/admin/articles/new">Nouvel article</Link>
        </Button>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
}
