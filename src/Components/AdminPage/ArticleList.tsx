"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteArticleAction } from "@/actions/article";
import Button from "@/Components/UI/Button";

type Article = {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  createdAt: Date;
  author: { firstname: string; name: string };
};

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer cet article ?")) return;
    setDeletingId(id);
    await deleteArticleAction(id);
    setDeletingId(null);
    router.refresh();
  };

  if (articles.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <p>Aucun article pour l&apos;instant.</p>
        <div className="mt-4">
          <Button asChild>
            <Link href="/admin/articles/new">Créer le premier article</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-gray-400 border-b border-gray-700">
          <tr>
            <th className="py-3 pr-4">Titre</th>
            <th className="py-3 pr-4">Statut</th>
            <th className="py-3 pr-4">Auteur</th>
            <th className="py-3 pr-4">Date</th>
            <th className="py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {articles.map((article) => (
            <tr key={article.id} className="text-gray-300">
              <td className="py-3 pr-4 font-medium text-white">{article.title}</td>
              <td className="py-3 pr-4">
                <span
                  className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                    article.published
                      ? "bg-green-900/40 text-green-400"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {article.published ? "Publié" : "Brouillon"}
                </span>
              </td>
              <td className="py-3 pr-4">
                {article.author.firstname} {article.author.name}
              </td>
              <td className="py-3 pr-4 text-gray-400">
                {new Date(article.createdAt).toLocaleDateString("fr-FR")}
              </td>
              <td className="py-3">
                <div className="flex gap-2">
                  <Link
                    href={`/admin/articles/${article.id}/edit`}
                    className="px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors"
                  >
                    Modifier
                  </Link>
                  <button
                    onClick={() => handleDelete(article.id)}
                    disabled={deletingId === article.id}
                    className="px-3 py-1 text-xs bg-red-900/40 hover:bg-red-900/70 text-red-400 rounded transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {deletingId === article.id ? "..." : "Supprimer"}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
