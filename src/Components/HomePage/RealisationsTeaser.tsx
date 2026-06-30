// components/HomePage/RealisationsTeaser.tsx
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";
import { projects } from "@/lib/projects";

export default function RealisationsTeaser() {
    const featured = projects.slice(0, 3);

    return (
        <Section alternate>
            <Container size="lg">
                <SectionHeader
                    title="Sites réalisés"
                    subtitle="Des sites livrés, en ligne et utilisés au quotidien."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featured.map((projet) => (
                        <a
                            key={projet.id}
                            href={projet.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500/50"
                        >
                            {/* Image */}
                            <div className="relative h-48 bg-gray-800">
                                <Image
                                    src={projet.image}
                                    alt={projet.title}
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            {/* Contenu */}
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-white">
                                            {projet.title}
                                        </h3>
                                        <ExternalLink size={16} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                                    </div>
                                    <p className="text-gray-400 text-sm">
                                        {projet.description}
                                    </p>
                                </div>

                                <span className="text-xs text-blue-400 mt-4">{projet.stack}</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/realisations"
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                        Voir toutes mes réalisations →
                    </Link>
                </div>
            </Container>
        </Section>
    );
}
