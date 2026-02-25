import { ArticleRepository } from "@/repositories/articleRepository";
import Section from "@/Components/UI/Section";
import Container from "@/Components/UI/Container";
import Card from "@/Components/UI/Card";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles et conseils de Romain WIRTH, développeur web.",
};

export default async function BlogPage() {
  const articles = await ArticleRepository.getPublishedArticles();

  return (
    <main>
      <Section className="opacity-100">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Blog</h1>
            <p className="text-gray-400">Articles et conseils sur le développement web</p>
          </div>

          {articles.length === 0 ? (
            <p className="text-center text-gray-400">Aucun article publié pour l&apos;instant.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link key={article.id} href={`/blog/${article.slug}`}>
                  <Card>
                    <h2 className="text-lg font-semibold text-white mb-2">{article.title}</h2>
                    {article.excerpt && (
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    )}
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>
                        {article.author.firstname} {article.author.name}
                      </span>
                      <span>{new Date(article.createdAt).toLocaleDateString("fr-FR")}</span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}
