// components/realisations/ProjectsGrid.tsx
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SectionDivider from "../UI/SectionDivider";
import Section from "../UI/Section";
import Container from "../UI/Container";
import { projects } from "@/lib/projects";

export default function ProjectsGrid() {
    return (
        <Section className="opacity-100">
            <Container size="lg">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
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
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                    ))}
                </div>

            </Container>
            <SectionDivider />
        </Section>
    );
}
