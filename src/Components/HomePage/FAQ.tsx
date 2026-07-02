// components/HomePage/FAQ.tsx
import { ChevronDown } from "lucide-react";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";
import SectionDivider from "../UI/SectionDivider";

const faqs = [
    {
        question: "Combien coûte la création d'un site web ?",
        answer:
            "Cela dépend de vos besoins : nombre de pages, fonctionnalités, boutique en ligne… Un site vitrine démarre autour de 900 €. Après notre premier échange, vous recevez un devis clair et sans engagement.",
    },
    {
        question: "Combien de temps faut-il pour créer mon site ?",
        answer:
            "En général de 2 à 6 semaines selon la taille du projet et la rapidité à laquelle vous me transmettez vos contenus (textes, photos…).",
    },
    {
        question: "Pourrai-je modifier mon site moi-même ?",
        answer:
            "Oui. Avec WordPress notamment, vous gérez votre contenu au quotidien. Je vous forme à la prise en main et je reste disponible en cas de besoin.",
    },
    {
        question: "Assurez-vous la maintenance et les mises à jour ?",
        answer:
            "Oui, je propose un suivi optionnel (sauvegardes, mises à jour, sécurité) pour garder votre site à jour et performant dans le temps.",
    },
    {
        question: "Mon site sera-t-il bien référencé sur Google ?",
        answer:
            "J'intègre les bonnes pratiques de référencement (SEO) dès la conception pour que vos clients vous trouvent plus facilement dans votre région.",
    },
    {
        question: "Travaillez-vous uniquement en Haute-Marne ?",
        answer:
            "Je suis basé à Nogent, mais j'accompagne mes clients partout : en présentiel dans la région (Chaumont, Langres…) et à distance ailleurs.",
    },
];

export default function FAQ() {
    return (
        <Section>
            <Container size="md">
                <SectionHeader
                    title="Questions fréquentes"
                    subtitle="Vous vous posez sûrement l'une de ces questions."
                />

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group rounded-xl border border-gray-800 bg-gray-900/30 px-5 py-4"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white">
                                {faq.question}
                                <ChevronDown
                                    size={20}
                                    className="shrink-0 text-blue-400 transition-transform duration-300 group-open:rotate-180"
                                />
                            </summary>
                            <p className="mt-3 text-sm text-gray-400">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </Container>
            <SectionDivider />
        </Section>
    );
}
