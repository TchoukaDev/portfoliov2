// components/site-web/RealisationsVitrines.tsx
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";

export default function WebsiteRealisations() {
    const projets = [
        {
            title: "Clothilde Baudet",
            description:
                "Landing page professionnelle pour une psychologue, conçue pour présenter l’activité, inspirer confiance et faciliter la prise de contact.",
            image: "/projects/clothilde-baudet.png",
            url: "https://clothilde-baudet.fr/",
        },
    ];

    return (
        <Section alternate>
            <Container size="sm">
                <SectionHeader title="Un exemple de site réalisé" subtitle="Un projet conçu pour un professionnel indépendant." />

                {/* Grille centrée */}
                <div className="flex justify-center">
                    <div className="w-full max-w-md">
                        {projets.map((projet, index) => (
                            <a
                                key={index}
                                href={projet.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group hover:scale-102 transition-all duration-300 block rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500/50 "
                            >
                                {/* Image */}
                                <div className="relative h-48 bg-gray-800">
                                    <Image
                                        src={projet.image}
                                        alt={projet.title}
                                        fill
                                        className="object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Contenu */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-white">
                                            {projet.title}
                                        </h3>
                                        <ExternalLink
                                            size={16}
                                            className="text-gray-500 group-hover:text-blue-400 transition-colors"
                                        />
                                    </div>
                                    <p className="text-gray-400 text-sm">
                                        {projet.description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}