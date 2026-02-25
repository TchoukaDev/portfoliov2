import ArticleForm from "@/Components/AdminPage/ArticleForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nouvel article",
  robots: { index: false },
};

export default function NewArticlePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Nouvel article</h1>
      <ArticleForm mode="create" />
    </div>
  );
}
