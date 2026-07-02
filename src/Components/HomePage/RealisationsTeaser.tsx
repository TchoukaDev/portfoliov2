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
                    title="Quelques réalisations"
                    subtitle="Des sites livrés, en ligne et utilisés au quotidien."
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {featured.map((projet) => (
                        <a
                            key={projet.id}
                            href={projet.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                        >
                            <div className="relative aspect-[16/10] w-full bg-gray-800">
                                <Image
                                    src={projet.image}
                                    alt={projet.title}
                                    fill
                                    className="object-cover object-top"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            <div className="flex flex-1 flex-col p-6">
                                <div className="mb-2 flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-white">
                                        {projet.title}
                                    </h3>
                                    <ExternalLink
                                        size={16}
                                        className="shrink-0 text-gray-500 transition-colors group-hover:text-blue-400"
                                    />
                                </div>
                                <p className="text-sm text-gray-400">{projet.description}</p>
                                <span className="mt-3 block text-xs text-blue-400">
                                    {projet.stack}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/realisations"
                        className="text-sm font-medium text-blue-400 hover:text-blue-300"
                    >
                        Voir toutes mes réalisations →
                    </Link>
                </div>
            </Container>
        </Section>
    );
}
