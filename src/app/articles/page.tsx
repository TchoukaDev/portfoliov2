import { ArticleRepository } from "@/repositories/articleRepository";
import Pagination from "@/Components/UI/Pagination";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  robots: { index: false },
};

const LIMIT = 10;

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function ArticlesPage({ searchParams }: PageProps) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);

  const { items: articles, total } = await ArticleRepository.getPublishedArticlesPaginated(page, LIMIT);
  const totalPages = Math.ceil(total / LIMIT);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Articles publiés</h1>
        <p className="text-gray-400 text-sm mt-1">{total} article{total > 1 ? "s" : ""}</p>
      </div>

      {articles.length === 0 ? (
        <p className="text-gray-400">Aucun article publié pour l&apos;instant.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="block p-6 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="text-lg font-semibold text-white">{article.title}</h2>
                <span className="text-xs text-gray-500 whitespace-nowrap mt-1">
                  {new Date(article.createdAt).toLocaleDateString("fr-FR")}
                </span>
              </div>
              {article.excerpt && (
                <p className="text-gray-400 text-sm line-clamp-2">{article.excerpt}</p>
              )}
              <p className="text-xs text-gray-500 mt-3">
                {article.author.firstname} {article.author.name}
              </p>
            </Link>
          ))}
        </div>
      )}

      <Pagination page={page} totalPages={totalPages} basePath="/articles" />
    </div>
  );
}
