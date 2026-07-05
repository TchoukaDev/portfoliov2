// components/HomePage/Pricing.tsx
import { Check } from "lucide-react";
import Link from "next/link";
import Button from "../UI/Button";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";

const plans = [
  {
    name: "One page",
    label: "Idéal pour démarrer en ligne",
    price: "890 €",
    from: true,
    description:
      "Une page unique et percutante pour présenter l'essentiel et inciter au contact.",
    features: [
      "1 page tout-en-un",
      "8 à 10 sections",
      "Moyen de contact intégré (formulaire ou autre)",
    ],
  },
  {
    name: "Vitrine 4 pages",
    label: "Pour asseoir sa crédibilité",
    price: "1 490 €",
    from: true,
    description: "Le site classique pour présenter votre activité en détail",
    features: [
      "Jusqu'à 4 pages",
      "Accueil, à propos, services, contact",
      "Meilleur potentiel de référencement",
    ],
  },
  {
    name: "Sur mesure",
    label: "Pour les projets ambitieux",
    price: "Sur devis",
    from: false,
    description:
      "Pour les projets plus ambitieux nécessitant des fonctionnalités spécifiques ou davantage de contenu",
    features: [
      "Pages illimitées",
      "Galerie photo, espace membre",
      "Boutique e-commerce, blog",
    ],
  },
];

export default function Pricing() {
  return (
    <Section id="offres" className="scroll-mt-24">
      <Container size="lg">
        <SectionHeader
          title="Une offre adaptée à votre projet"
          subtitle="Trois formules pour démarrer, toutes conçues sur mesure. Vous recevez un devis gratuit et personnalisé après notre premier échange."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-gray-800 bg-gray-900/30 p-8"
            >
              <span className="mb-4 inline-block self-start rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                {plan.label}
              </span>
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <div className="mt-2 mb-4">
                {plan.from && (
                  <span className="block text-xs text-gray-400">
                    À partir de
                  </span>
                )}
                <span className="text-2xl font-bold text-blue-400">
                  {plan.price}
                </span>
              </div>
              <p className="mb-6 text-sm text-gray-400">{plan.description}</p>

              <ul className="mt-auto space-y-2">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <Check size={16} className="shrink-0 text-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Button asChild>
            <Link href="/contact">Demander mon devis</Link>
          </Button>
          <p className="text-sm text-gray-500">
            Vous ne savez pas quelle formule choisir ? Je vous aide à trouver le
            format le mieux adapté à votre activité.
          </p>
        </div>
      </Container>
    </Section>
  );
}
