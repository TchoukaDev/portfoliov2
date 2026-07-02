// components/HomePage/Solutions.tsx
import { Check, KeyRound } from "lucide-react";
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
    title: "Optimisé pour Google",
    description:
      "Structure et performances au service de votre référencement local.",
  },
  {
    title: "Rapide et performant",
    description:
      "Un site léger, conçu sur mesure, qui se charge en un instant.",
  },
  {
    title: "Sécurisé",
    description: "Bonnes pratiques de sécurité et connexion HTTPS.",
  },
  {
    title: "Formation à la prise en main",
    description:
      "Je vous montre comment modifier vos textes et vos images pour faire vivre votre site",
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

        {/* Argument principal : la propriété */}
        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-blue-500/40 bg-blue-500/10 p-6 sm:flex-row sm:items-center">
          <span className="shrink-0 rounded-xl bg-blue-500/20 p-3 text-blue-400">
            <KeyRound size={24} />
          </span>
          <div>
            <h3 className="mb-1 text-lg font-semibold text-white">
              Vous restez 100 % propriétaire
            </h3>
            <p className="text-sm text-gray-300">
              Le code, le nom de domaine et l&apos;hébergement sont à vous, à
              votre nom. Je m&apos;occupe uniquement de la configuration et de
              la maintenance : aucune dépendance, vous gardez la main sur votre
              site.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
