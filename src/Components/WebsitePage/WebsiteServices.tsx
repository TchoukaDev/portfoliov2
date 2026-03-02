// components/site-web/Services.tsx
import { Layers, Zap } from "lucide-react";
import Section from "../UI/Section";
import Card from "../UI/Card";
import SectionHeader from "../UI/SectionHeader";
import Container from "../UI/Container";

export default function WebsiteServices() {
  const solutions = [
    {
      icon: <Layers size={28} />,
      title: "WordPress",
      badge: "Simple & accessible",
      description: "Idéal si vous voulez gérer votre contenu vous-même au quotidien. Solution éprouvée, rapide à mettre en place, adaptée aux budgets serrés.",
      points: [
        "Prise en main facile",
        "Budget maîtrisé",
        "Mise en ligne rapide",
      ],
    },
    {
      icon: <Zap size={28} />,
      title: "Sur mesure",
      badge: "Performant & évolutif",
      description: "Pour un site rapide, bien référencé et pensé pour évoluer avec votre activité. Conçu avec des technologies modernes, sans les contraintes d'un CMS générique.",
      points: [
        "Performances et SEO optimisés",
        "Design entièrement personnalisé",
        "Évolutif selon vos besoins",
      ],
    },
  ];

  return (
    <Section alternate={true}>
      <Container size="md">

        <SectionHeader
          title="Quelle solution pour votre site ?"
          subtitle="Je vous conseille l'approche la mieux adaptée à votre projet et votre budget."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card hover={false} key={index}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{solution.title}</h3>
                  <span className="text-xs text-blue-400">{solution.badge}</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-4">
                {solution.description}
              </p>

              <ul className="space-y-1">
                {solution.points.map((point, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                    <span className="text-blue-500">✓</span> {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

      </Container>
    </Section>
  );
}
