import { Quote } from "lucide-react";
import Section from "../UI/Section";
import Container from "../UI/Container";

const testimonials = [
    {
        quote: "Consciencieux, très disponible, toujours à la recherche du meilleur compromis, notre site est devenu très rapidement une référence dans notre spécialité !",
        author: "Alain",
        role: "Club de marche aquatique Les Randonneurs des Sables",
    },
    {
        quote: "Très satisfaite du travail fourni pour la création de mon site internet. Un développeur professionnel et passionné, de bon conseil et à l'écoute de mes besoins, disponible et très réactif. Le résultat dépasse largement mes attentes.",
        author: "Clothilde Baudet",
        role: "Psychologue clinicienne",
    },
];

// components/Testimonial.tsx
export default function Testimonial() {
    return (
        <Section alternate={true}>
            <Container size="lg">
                <h2 className="text-center mb-12">Ce qu&apos;ils disent</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="flex flex-col justify-between p-8 rounded-2xl bg-gray-900/50 border border-gray-800">
                            <div>
                                <Quote className="text-blue-500 mb-4 -scale-x-100" />
                                <p className="text-gray-200 italic">
                                    {t.quote}
                                </p>
                            </div>

                            <div>
                                <div className="w-8 h-px bg-blue-500/30 mb-4 mt-6" />
                                <p className="text-white font-medium">{t.author}</p>
                                <p className="text-sm text-gray-400">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
