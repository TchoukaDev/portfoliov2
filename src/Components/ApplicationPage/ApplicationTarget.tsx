// components/ApplicationTarget.tsx
import { Check } from "lucide-react";
import Section from "../UI/Section";

export default function ApplicationTarget() {
    const points = [
        "Vous avez besoin d'un outil métier spécifique",
        "Vous voulez lancer un MVP pour tester une idée",
        "Vous avez besoin d'une interface connectée à vos données",
        "Votre projet nécessite des fonctionnalités sur mesure",
        "Vous cherchez un développeur pour renforcer votre équipe",
    ];

    return (
        <Section className="px-6 py-20">
            < div className="max-w-3xl mx-auto" >

                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
                    Ce service est pour vous si...
                </h2>

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

            </div >
        </Section>
    );
}