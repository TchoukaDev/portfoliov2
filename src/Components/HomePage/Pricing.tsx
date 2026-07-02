// components/HomePage/Pricing.tsx
import { Check } from "lucide-react";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";
import SectionDivider from "../UI/SectionDivider";

const plans = [
    {
        name: "One page",
        price: "900 €",
        from: true,
        description:
            "Une page unique et percutante pour présenter l'essentiel et inciter au contact.",
        features: ["1 page tout-en-un", "Sections : présentation, services, contact"],
    },
    {
        name: "Vitrine 4 pages",
        price: "1 500 €",
        from: true,
        description:
            "Le site classique pour présenter votre activité en détail : accueil, services, à propos, contact…",
        features: ["Jusqu'à 4 pages", "Une page dédiée par thématique"],
    },
    {
        name: "Sur mesure",
        price: "Sur devis",
        from: false,
        description:
            "Pour les projets plus ambitieux : fonctionnalités spécifiques, e-commerce, pages illimitées.",
        features: ["Pages illimitées", "Fonctionnalités sur mesure", "Boutique e-commerce"],
    },
];

export default function Pricing() {
    return (
        <Section>
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
                            <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                            <div className="mt-2 mb-4">
                                {plan.from && (
                                    <span className="block text-xs text-gray-400">À partir de</span>
                                )}
                                <span className="text-2xl font-bold text-blue-400">
                                    {plan.price}
                                </span>
                            </div>
                            <p className="mb-6 text-sm text-gray-400">{plan.description}</p>

                            <ul className="mt-auto space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                        <Check size={16} className="shrink-0 text-blue-400" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-center text-gray-400">
                    Vous ne savez pas quelle formule choisir ? Je vous aide à trouver
                    le format le mieux adapté à votre activité.
                </p>
            </Container>
            <SectionDivider />
        </Section>
    );
}
