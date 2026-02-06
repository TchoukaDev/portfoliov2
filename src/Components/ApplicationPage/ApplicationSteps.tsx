// components/application/TypesProjets.tsx
import { Monitor, Rocket, Layers } from "lucide-react";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";

export default function ApplicationSteps() {
    const projets = [
        {
            icon: <Monitor size={28} />,
            title: "Applications web",
            description: "Outils métier, tableaux de bord, interfaces d'administration. Des applications pensées pour vos besoins.",
        },
        {
            icon: <Rocket size={28} />,
            title: "MVP & Prototypes",
            description: "Vous avez une idée ? Je développe une première version fonctionnelle pour la tester rapidement.",
        },
        {
            icon: <Layers size={28} />,
            title: "Sites dynamiques",
            description: "Sites avec contenu administrable, espaces membres, fonctionnalités avancées.",
        },
    ];

    return (
        <Section alternate>
            <Container size="lg">

                <SectionHeader title="Ce que je développe" subtitle="Des projets variés, une approche sur mesure." />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projets.map((projet, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl border border-gray-800 bg-gray-900/50"
                        >
                            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-6">
                                {projet.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-3">
                                {projet.title}
                            </h3>

                            <p className="text-gray-400 text-sm">
                                {projet.description}
                            </p>
                        </div>
                    ))}
                </div>

            </Container>

        </Section>
    );
}