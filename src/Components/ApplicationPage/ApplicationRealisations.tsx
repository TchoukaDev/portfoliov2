// components/ApplicationRealisations.tsx
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Section from "../UI/Section";
import SectionDivider from "../UI/SectionDivider";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";

export default function ApplicationRealisations() {
    const projets = [
        {
            title: "Fitbuilder",
            description: "Application de suivi d'entraînement : programmes personnalisés, suivi des séances et statistiques de progression.",
            image: "/projects/fitbuilder.png",
            url: "https://fitbuilder.romainwirth.fr/",
            stack: "Next.js, TypeScript, MongoDB",
            tag: "Projet personnel",
        },
        {
            title: "Waves",
            description: "Mini réseau social : publications, messagerie instantanée en temps réel et gestion de profils utilisateurs.",
            image: "/projects/waves.png",
            url: "https://waves.romainwirth.fr/",
            stack: "React, Firebase",
            tag: "Projet personnel",
        },
    ];

    return (
        <Section>
            <Container size="lg">

                <SectionHeader title="Projets réalisés" subtitle="Des applications fonctionnelles, développées de A à Z." />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projets.map((projet, index) => (
                        <a
                            key={index}
                            href={projet.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 rounded-2xl border border-gray-800 overflow-hidden hover:border-blue-500/50"
                        >
                            {/* Image */}
                            <div className="relative h-40 bg-gray-800">
                                <Image
                                    src={projet.image}
                                    alt={projet.title}
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />
                            </div>

                            {/* Contenu */}
                            <div className="p-5 flex flex-col flex-1 justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-white">
                                            {projet.title}
                                        </h3>
                                        <ExternalLink size={14} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                                    </div>

                                    <p className="text-gray-400 text-sm mb-3">
                                        {projet.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-xs text-blue-400">{projet.stack}</span>
                                    <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${projet.tag === "Projet client"
                                        ? "bg-blue-500/10 text-blue-400"
                                        : "bg-gray-800 text-gray-500"
                                        }`}>
                                        {projet.tag}
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </Container>
            <SectionDivider />
        </Section>
    );
}
