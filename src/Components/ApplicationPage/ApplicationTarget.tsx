// components/ApplicationTarget.tsx
import { Check } from "lucide-react";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";

export default function ApplicationTarget() {
    const points = [
        "Vous avez un besoin technique précis et bien défini",
        "Vous souhaitez une landing page ou un site web performant et bien référencé",
        "Vous voulez lancer un MVP pour tester une idée",
        "Vous avez besoin d'une interface connectée à vos données",
        "Vous cherchez un développeur pour renforcer votre équipe",
    ];

    return (
        <Section className="opacity-100">
            <Container size="sm">

                <SectionHeader title="Ce service est pour vous si..." />

                <ul className="space-y-4">
                    {points.map((point, index) => (
                        <li
                            key={index}
                            className="flex items-start gap-4 text-gray-300"
                        >
                            <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mt-1">
                                <Check size={16} />
                            </span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

            </Container>
        </Section>
    );
}