// components/ApplicationRealisations.tsx
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Section from "../UI/Section";
import SectionDivider from "../UI/SectionDivider";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";

export default function ApplicationRealisations() {
    const projets = [
        {
            title: "Fitbuilder ",
            description: "MVP - Projet personnel - Application de suivi d'entraînement : programmes personnalisés, suivi des séances, statistiques.",
            image: "/projects/fitbuilder.png",
            url: "https://fitbuilder.romainwirth.fr/",
            stack: "Next.js, TypeScript, MongoDB",
        },
        {
            title: "Waves",
            description: "MVP - Projet personnel - Mini réseau social avec publications, messagerie instantanée, profils.",
            image: "/projects/waves.png",
            url: "https://waves.romainwirth.fr/",
            stack: "React, Firebase",
        },
        {
            title: "Les Randonneurs des Sables",
            description: "Site dynamique avec espace membres, planning des activités et gestion de contenu.",
            image: "/projects/lesrandonneurs.png",
            url: "https://les-randonneurs-des-sables.vercel.app/",
            stack: "Next.js, Strapi",
        },
    ];

    return (
        <Section>
            <Container size="lg">

                <SectionHeader title="Projets réalisés" subtitle="Des applications complètes, développées de A à Z." />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projets.map((projet, index) => (
                        <a
                            key={index}
                            href={projet.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block hover:scale-102 transition-all duration-300 rounded-2xl border border-gray-800 overflow-hidden hover:border-blue-500/50 "
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
                            <div className="p-5">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold text-white">
                                        {projet.title}
                                    </h3>
                                    <ExternalLink size={14} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                                </div>

                                <p className="text-gray-400 text-sm mb-3">
                                    {projet.description}
                                </p>

                                <span className="text-xs text-blue-400">
                                    {projet.stack}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>



            </Container>
            <SectionDivider />
        </Section>
    );
}