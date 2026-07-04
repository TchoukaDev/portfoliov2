// components/HomePage/Difference.tsx
import { KeyRound, SlidersHorizontal } from "lucide-react";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";

const points = [
  {
    icon: <KeyRound size={24} />,
    title: "Vous restez 100 % propriétaire",
    description:
      "Le code, le nom de domaine et l'hébergement sont à vous, à votre nom. Je configure et je vous accompagne, mais rien ne vous lie à moi : vous gardez la main sur votre site. ",
  },
  {
    icon: <SlidersHorizontal size={24} />,
    title: "Autonome ou clé en main",
    description:
      "Vous voulez gérer votre site vous-même ? J'intègre un CMS (un peu plus d'investissement au départ) pour modifier facilement vos textes et vos images. Sinon, je m'occupe des modifications pour vous dans le cadre d'un contrat de suivi.",
  },
];

export default function Difference() {
  return (
    <Section alternate={true}>
      <Container size="lg">
        <SectionHeader
          title="Pourquoi travailler avec moi ?"
          subtitle="Pas de dépendance, pas d'abonnement forcé : vous gardez le contrôle et vous choisissez ce qui vous correspond le mieux."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {points.map((point, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-700 bg-gray-900/50 p-6 md:p-8"
            >
              <div className="mb-4 w-fit rounded-xl bg-blue-500/10 p-3 text-blue-400">
                {point.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {point.title}
              </h3>
              <p className="text-sm text-gray-400">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
