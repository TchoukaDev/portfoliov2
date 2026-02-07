// components/application/TypesProjets.tsx
import { Monitor, Rocket, Layers } from "lucide-react";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";
import Card from "../UI/Card";

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
                        <Card hover={false}
                            key={index}
                        >
                            <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 w-fit mb-6">
                                {projet.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-3">
                                {projet.title}
                            </h3>

                            <p className="text-gray-400 text-sm">
                                {projet.description}
                            </p>
                        </Card>
                    ))}
                </div>

            </Container>

        </Section>
    );
}