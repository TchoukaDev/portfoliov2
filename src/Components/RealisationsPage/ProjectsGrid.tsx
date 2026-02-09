// components/realisations/ProjectsGrid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SectionDivider from "../UI/SectionDivider";
import Section from "../UI/Section";
import Container from "../UI/Container";

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
    stack: string;
    category: "vitrine" | "application";
};

const projects: Project[] = [
    {
        id: 1,
        title: "Clothilde Baudet",
        description: "Site vitrine pour une psychologue. Design clair et apaisant pour présenter son activité.",
        image: "/projects/clothilde-baudet.png",
        url: "https://clothilde-baudet.fr/",
        stack: "WordPress",
        category: "vitrine",
    },
    {
        id: 2,
        title: "FlowerPower",
        description: "Site vitrine de démonstration avec boutique en ligne : catalogue produits, panier, paiement.",
        image: "/projects/flowerpower.png",
        url: "https://flowerpower.romainwirth.fr/",
        stack: "WordPress",
        category: "vitrine",
    },
    {
        id: 3,
        title: "Les Randonneurs des Sables",
        description: "Site dynamique pour un club de marche aquatique : actualités, planning des séances, informations pratiques.",
        image: "/projects/lesrandonneurs.png",
        url: "https://les-randonneurs-des-sables.vercel.app/",
        stack: "Next.js, Strapi",
        category: "application",
    },
    {
        id: 4,
        title: "Waves",
        description: "MVP de réseau social : inscription, publications, messagerie instantanée, profils.",
        image: "/projects/waves.png",
        url: "https://waves.romainwirth.fr/",
        stack: "React, Firebase",
        category: "application",
    },
    {
        id: 5,
        title: "Fitbuilder",
        description: "Application de suivi d'entraînement : programmes personnalisés, réalisation et suivi des séances, statistiques.",
        image: "/projects/fitbuilder.png",
        url: "https://fitbuilder.romainwirth.fr/",
        stack: "Next.js, TypeScript, MongoDB",
        category: "application",
    },
];

type Filter = "tous" | "vitrine" | "application";

export default function ProjectsGrid() {
    const [filter, setFilter] = useState<Filter>("tous");

    const filteredProjects =
        filter === "tous"
            ? projects
            : projects.filter((p) => p.category === filter);

    const filters: { label: string; value: Filter }[] = [
        { label: "Tous", value: "tous" },
        { label: "Sites vitrines", value: "vitrine" },
        { label: "Applications", value: "application" },
    ];

    return (
        <Section >
            <Container size="lg">

                {/* Filtres */}
                < div className="flex justify-center gap-4 mb-12" >
                    {
                        filters.map((f) => (
                            <button
                                key={f.value}
                                onClick={() => setFilter(f.value)}
                                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${filter === f.value
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-800 text-gray-400 hover:bg-gray-700 cursor-pointer"
                                    }`}
                            >
                                {f.label}
                            </button>
                        ))
                    }
                </div >

                {/* Grille */}
                < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
                    {
                        filteredProjects.map((project) => (
                            <a
                                key={project.id}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block rounded-2xl border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-102"
                            >
                                {/* Image */}
                                <div className="relative h-48 bg-gray-800">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Contenu */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-lg font-semibold text-white">
                                            {project.title}
                                        </h3>
                                        <ExternalLink
                                            size={16}
                                            className="text-gray-500 group-hover:text-blue-400 transition-colors"
                                        />
                                    </div>

                                    <p className="text-gray-300 text-sm mb-4">
                                        {project.description}
                                    </p>

                                    <span className="text-xs text-blue-400">
                                        {project.stack}
                                    </span>
                                </div>
                            </a>
                        ))
                    }
                </div >

                {/* Message si aucun projet */}
                {
                    filteredProjects.length === 0 && (
                        <p className="text-center text-gray-500">
                            Aucun projet dans cette catégorie pour le moment.
                        </p>
                    )
                }

            </Container >
            <SectionDivider />
        </Section>
    );
}