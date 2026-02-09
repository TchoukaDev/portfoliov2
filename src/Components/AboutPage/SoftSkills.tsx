// components/a-propos/Apports.tsx
import { Ear, CheckCircle, BookOpen, Shield } from "lucide-react";
import Container from "../UI/Container";
import Section from "../UI/Section";
import SectionHeader from "../UI/SectionHeader";

export default function SoftSkills() {
    const apports = [
        {
            icon: <Ear size={24} />,
            title: "Écoute",
            description: "Je prends le temps de comprendre vos besoins avant de proposer une solution adaptée.",
        },
        {
            icon: <CheckCircle size={24} />,
            title: "Rigueur",
            description: "Je travaille de manière organisée et je respecte les engagements pris.",
        },
        {
            icon: <BookOpen size={24} />,
            title: "Pédagogie",
            description: "J'explique les choses simplement, sans jargon inutile.",
        },
        {
            icon: <Shield size={24} />,
            title: "Fiabilité",
            description: "Je suis disponible, réactif et transparent tout au long du projet.",
        },
    ];

    return (
        <Section className="px-6 py-20 bg-gray-900/30">
            < Container size="md" >

                <SectionHeader title="Ce que j'apporte de mon ancien métier" subtitle="Des qualités développées sur le terrain, que je mets au service de mes clients." />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {apports.map((apport, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 h-fit">
                                {apport.icon}
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-2">
                                    {apport.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {apport.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </Container >
        </Section>
    );
}