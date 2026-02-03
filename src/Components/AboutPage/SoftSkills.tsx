// components/a-propos/Apports.tsx
import { Ear, CheckCircle, BookOpen, Shield } from "lucide-react";
import Section from "../UI/Section";

export default function SoftSkills() {
    const apports = [
        {
            icon: <Ear size={24} />,
            title: "Écoute",
            description: "Je prends le temps de comprendre vos besoins avant de proposer une solution.",
        },
        {
            icon: <CheckCircle size={24} />,
            title: "Rigueur",
            description: "Je travaille de manière organisée et je respecte mes engagements.",
        },
        {
            icon: <BookOpen size={24} />,
            title: "Pédagogie",
            description: "Je vous explique les choses simplement, sans jargon technique.",
        },
        {
            icon: <Shield size={24} />,
            title: "Fiabilité",
            description: "Je suis disponible et réactif. Vous savez à qui vous avez affaire.",
        },
    ];

    return (
        <Section className="px-6 py-20 bg-gray-900/30">
            < div className="max-w-3xl mx-auto" >

                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
                    {/* eslint-disable-next-line */}
                    Ce que j'apporte de mon ancien métier
                </h2>

                <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
                    Des qualités développées sur le terrain, que je mets au service de mes clients.
                </p>

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

            </div >
        </Section>
    );
}