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
            description: "Landing page professionnelle pour une psychologue, conçue pour présenter l'activité, inspirer confiance et faciliter la prise de contact.",
            image: "/projects/clothilde-baudet.png",
            url: "https://clothilde-baudet.fr/",
            stack: "Next.js, Tailwind CSS",
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
        <Section alternate>
            <Container size="md">
                <SectionHeader title="Sites réalisés" subtitle="Des sites livrés, en ligne et utilisés au quotidien." />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projets.map((projet, index) => (
                        <a
                            key={index}
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
                                    sizes="(max-width: 768px) 100vw, 50vw"
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

                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-xs text-blue-400">{projet.stack}</span>
                                    <span className="text-xs px-2 py-0.5 rounded-full whitespace-nowrap bg-blue-500/10 text-blue-400">
                                        Projet client
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
