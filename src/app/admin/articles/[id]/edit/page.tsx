import { ArticleRepository } from "@/repositories/articleRepository";
import ArticleForm from "@/Components/AdminPage/ArticleForm";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: "Modifier l'article",
  robots: { index: false },
};

export default async function EditArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = await ArticleRepository.getArticleById(id);

  if (!article) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Modifier l&apos;article</h1>
      <ArticleForm
        mode="edit"
        defaultValues={{
          id: article.id,
          title: article.title,
          slug: article.slug,
          content: article.content,
          excerpt: article.excerpt ?? undefined,
          published: article.published,
        }}
      />
    </div>
  );
}
