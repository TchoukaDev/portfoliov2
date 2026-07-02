// components/HomePage/Benefits.tsx
import { Search, ShieldCheck, MousePointerClick, Clock } from "lucide-react";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";

const benefits = [
    {
        icon: <Search size={24} />,
        title: "Visible sur Google",
        description:
            "Vos clients vous trouvent quand ils recherchent vos services dans votre région.",
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Une image professionnelle",
        description:
            "Un site soigné inspire confiance et crédibilise votre activité dès le premier regard.",
    },
    {
        icon: <MousePointerClick size={24} />,
        title: "Contact facilité",
        description:
            "Formulaire, téléphone, itinéraire : vos prospects vous joignent en un clic.",
    },
    {
        icon: <Clock size={24} />,
        title: "Disponible 24h/24",
        description:
            "Votre site présente votre activité et travaille pour vous, même la nuit et le week-end.",
    },
];

export default function Benefits() {
    return (
        <Section>
            <Container size="lg">
                <SectionHeader
                    title="Ce qu'un site web vous apporte"
                    subtitle="Bien plus qu'une carte de visite : un véritable outil pour développer votre activité."
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-gray-800 bg-gray-900/30 p-6"
                        >
                            <div className="mb-4 w-fit rounded-xl bg-blue-500/10 p-3 text-blue-400">
                                {benefit.icon}
                            </div>
                            <h3 className="mb-2 text-base font-semibold text-white">
                                {benefit.title}
                            </h3>
                            <p className="text-sm text-gray-400">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
