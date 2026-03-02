// components/application/ApplicationSteps.tsx
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";

export default function ApplicationSteps() {
    const etapes = [
        {
            number: "01",
            title: "On cadre votre besoin",
            description: "Vous m'expliquez votre projet, je pose des questions pour bien comprendre le périmètre, les contraintes et les objectifs.",
            note: "Gratuit et sans engagement",
        },
        {
            number: "02",
            title: "Je vous propose une approche",
            description: "Choix techniques, découpage du projet, estimation du temps. Un devis clair, sans surprise.",
        },
        {
            number: "03",
            title: "On développe ensemble",
            description: "Points d'avancement réguliers. Vous voyez le projet prendre forme et on ajuste au fur et à mesure.",
        },
        {
            number: "04",
            title: "Livraison et suivi",
            description: "Code documenté, déploiement, passation. Je reste disponible pour les questions et évolutions.",
        },
    ];

    return (
        <Section>
            <Container size="sm">

                <SectionHeader title="Comment ça se passe" subtitle="Un projet technique, suivi étape par étape." />

                <div className="space-y-8">
                    {etapes.map((etape, index) => (
                        <div key={index} className="flex gap-6">

                            <div className="text-3xl font-bold text-blue-500/30">
                                {etape.number}
                            </div>

                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {etape.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {etape.description}
                                </p>
                                {etape.note && (
                                    <span className="inline-block mt-2 text-xs text-blue-400">
                                        {etape.note}
                                    </span>
                                )}
                            </div>

                        </div>
                    ))}
                </div>

            </Container>
        </Section>
    );
}
