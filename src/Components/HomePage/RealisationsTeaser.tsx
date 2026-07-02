// components/HomePage/RealisationsTeaser.tsx
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";
import { projects } from "@/lib/projects";

export default function RealisationsTeaser() {
    const [featured, ...rest] = projects;
    const smalls = rest.slice(0, 2);

    return (
        <Section alternate>
            <Container size="lg">
                <SectionHeader
                    title="Sites réalisés"
                    subtitle="Des sites livrés, en ligne et utilisés au quotidien."
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-2">
                    {/* Grand projet */}
                    <a
                        href={featured.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col overflow-hidden rounded-2xl border border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] md:row-span-2"
                    >
                        <div className="relative min-h-56 flex-1 bg-gray-800">
                            <Image
                                src={featured.image}
                                alt={featured.title}
                                fill
                                className="object-cover"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-2 flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-white">
                                    {featured.title}
                                </h3>
                                <ExternalLink
                                    size={16}
                                    className="text-gray-500 transition-colors group-hover:text-blue-400"
                                />
                            </div>
                            <p className="text-sm text-gray-400">{featured.description}</p>
                            <span className="mt-3 block text-xs text-blue-400">
                                {featured.stack}
                            </span>
                        </div>
                    </a>

                    {/* Deux petits projets */}
                    {smalls.map((projet) => (
                        <a
                            key={projet.id}
                            href={projet.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex overflow-hidden rounded-2xl border border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                        >
                            <div className="relative w-2/5 shrink-0 bg-gray-800">
                                <Image
                                    src={projet.image}
                                    alt={projet.title}
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 40vw, 20vw"
                                />
                            </div>
                            <div className="flex flex-col justify-center p-5">
                                <div className="mb-1 flex items-center gap-2">
                                    <h3 className="text-base font-semibold text-white">
                                        {projet.title}
                                    </h3>
                                    <ExternalLink
                                        size={14}
                                        className="shrink-0 text-gray-500 transition-colors group-hover:text-blue-400"
                                    />
                                </div>
                                <span className="text-xs text-blue-400">{projet.stack}</span>
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
