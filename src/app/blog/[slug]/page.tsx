import { ArticleRepository } from "@/repositories/articleRepository";
import Section from "@/Components/UI/Section";
import Container from "@/Components/UI/Container";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await ArticleRepository.getArticleBySlug(slug);
  if (!article) return { title: "Article introuvable" };

  return {
    title: article.title,
    description: article.excerpt ?? undefined,
  };
}

export async function generateStaticParams() {
  try {
    const articles = await ArticleRepository.getPublishedArticles();
    return articles.map((a) => ({ slug: a.slug }));
  } catch {
    return [];
  }
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await ArticleRepository.getArticleBySlug(slug);

  if (!article || !article.published) notFound();

  return (
    <main>
      <Section className="opacity-100">
        <Container size="md">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm mb-8 inline-block">
            ← Retour au blog
          </Link>

          <article>
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{article.title}</h1>
              <div className="flex gap-4 text-sm text-gray-400">
                <span>
                  Par {article.author.firstname} {article.author.name}
                </span>
                <span>{new Date(article.createdAt).toLocaleDateString("fr-FR")}</span>
              </div>
            </header>

            {article.excerpt && (
              <p className="text-gray-300 text-lg italic mb-8 border-l-2 border-blue-500 pl-4">
                {article.excerpt}
              </p>
            )}

            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-wrap">
              {article.content}
            </div>
          </article>
        </Container>
      </Section>
    </main>
  );
}
