// components/site-web/RealisationsVitrines.tsx
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Section from "../UI/Section";

export default function WebsiteRealisations() {
    const projets = [
        {
            title: "Clothilde Baudet",
            description: "Site vitrine pour une psychologue. Design clair et apaisant.",
            image: "/projects/clothilde-baudet.png",
            url: "https://clothilde-baudet.fr/",
        },
        {
            title: "FlowerPower",
            description: "Site vitrine avec boutique en ligne pour une fleuriste.",
            image: "/projects/flowerpower.png",
            url: "https://flowerpower.romainwirth.fr/",
        },
    ];

    return (
        <Section alternate={true} className="px-6 py-20">
            <div className="max-w-4xl mx-auto">

                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
                    Quelques réalisations
                </h2>

                <p className="text-gray-400 text-center mb-12">
                    Des sites créés pour des clients comme vous.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projets.map((projet, index) => (
                        <a
                            key={index}
                            href={projet.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block rounded-2xl border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-colors"
                        >
                            {/* Image */}
                            <div className="relative h-48 bg-gray-800">
                                <Image
                                    src={projet.image}
                                    alt={projet.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Contenu */}
                            <div className="p-6">
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
                        </a>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/realisations"
                        className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                        Voir tous mes projets →
                    </Link>
                </div>

            </div>
        </Section>
    );
}