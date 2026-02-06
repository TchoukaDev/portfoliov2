// components/Offres.tsx
import Link from "next/link";
import { Globe, Code } from "lucide-react";
import SectionDivider from "../UI/SectionDivider";
import Section from "../UI/Section";
import Card from "../UI/Card";
import SectionHeader from "../UI/SectionHeader";
import Container from "../UI/Container";

export default function Services() {
    return (
        <Section id="services">
            <Container size="lg">

                <SectionHeader title="Comment puis-je vous aider ?" subtitle="Deux types de projets, deux approches adaptées." />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* Carte Site Web */}
                    <Card hover>
                        <Link href="/site-web">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                    <Globe size={28} />
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    Site web
                                </h3>
                            </div>

                            <p className="text-gray-400 mb-6">
                                Site vitrine, e-commerce, refonte.
                                Pour les indépendants, artisans et commerces.
                            </p>

                            <ul className="space-y-2 text-sm text-gray-500 mb-8">
                                <li>✓ Un site à votre image</li>
                                <li>✓ Facile à gérer au quotidien</li>
                                <li>✓ Accompagnement de A à Z</li>
                            </ul>

                            <span className="text-blue-400 group-hover:text-blue-300 text-sm font-medium">
                                En savoir plus →
                            </span>
                        </Link>
                    </Card>

                    {/* Carte Application */}
                    <Card hover>
                        <Link href="/application">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                    <Code size={28} />
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    Application sur mesure
                                </h3>
                            </div>

                            <p className="text-gray-400 mb-6">
                                Application web, interface connectée, outil métier.
                                Pour les projets qui sortent du cadre.
                            </p>

                            <ul className="space-y-2 text-sm text-gray-500 mb-8">
                                <li>✓ Technologies modernes</li>
                                <li>✓ Adapté à vos besoins</li>
                                <li>✓ Collaboration technique possible</li>
                            </ul>

                            <span className="text-blue-400 group-hover:text-blue-300 text-sm font-medium">
                                En savoir plus →
                            </span>
                        </Link>
                    </Card>

                </div>
                <SectionDivider />
            </Container>
        </Section>
    );
}