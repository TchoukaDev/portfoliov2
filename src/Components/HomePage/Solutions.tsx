// components/HomePage/Solutions.tsx
import { Check } from "lucide-react";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";

const inclusions = [
  {
    title: "Design unique à votre image",
    description:
      "Une identité visuelle qui vous ressemble, pensée pour votre activité.",
  },
  {
    title: "100 % responsive",
    description:
      "Parfaitement adapté à l'ordinateur, la tablette et le mobile.",
  },
  {
    title: "Référencement naturel",
    description:
      "Structure du site et métadonnées pensées pour Google et le référencement local",
  },
  {
    title: "Rapide performant et sécurisé",
    description:
      "Un site léger, conçu sur mesure, qui se charge en un instant avec des pratiques de sécurité respectées.",
  },
  {
    title: "Des textes travaillés",
    description:
      "À partir des informations que vous me donnez, je rédige les textes pour les rendre ciblés et impactants. Je propose et vous validez.",
  },
  {
    title: "Formation à la prise en main",
    description:
      "Je vous montre comment modifier vos textes et vos images pour faire vivre votre site.",
  },
];

export default function Solutions() {
  return (
    <Section alternate={true}>
      <Container size="lg">
        <SectionHeader
          title="Un site 100 % sur mesure"
          subtitle="Pas de template générique : votre site est conçu sur mesure, avec des technologies modernes, pour être rapide, bien référencé et évoluer avec votre activité."
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {inclusions.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="mt-1 shrink-0 rounded-full bg-blue-500/20 p-1 text-blue-400">
                <Check size={16} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
