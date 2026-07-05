// components/HomePage/FAQ.tsx
import { ChevronDown } from "lucide-react";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";
import SectionDivider from "../UI/SectionDivider";

const faqs = [
  {
    question: "Combien de temps faut-il pour créer mon site ?",
    answer:
      "En général de 2 à 6 semaines selon la taille du projet et la rapidité à laquelle vous me transmettez vos contenus (témoignages, photos…).",
  },
  {
    question: "Pourrai-je modifier mon site moi-même ?",
    answer:
      "Vous avez le choix. Si vous voulez être autonome, j'intègre un outil qui vous permet de modifier votre contenu facilement. Le desin étant bloqué, vous ne pouvez modifier que le texte et les images, sans rien casser. Si vous préférez déléguer, le site est plus léger et moins coûteux, et je m'occupe des mises à jour via un contrat de maintenance.",
  },
  {
    question: "Puis-je écrire mes propres textes ?",
    answer:
      "Ce que vous voulez dire n'est pas toujours ce dont vos visiteurs ont besoin de voir. Écrire pour le web, c'est structurer, convaincre et penser référencement. Je préfère donc m'en occuper pour que le résultat soit plus efficace.",
  },
  {
    question: "Mon site sera-t-il bien référencé sur Google ?",
    answer:
      "J'intègre les bonnes pratiques de référencement (SEO) dès la conception pour que vos clients vous trouvent plus facilement dans votre région. Je peux également vous aider à créer votre fiche Google My Business si vous ne l'avez pas déjà.",
  },
  {
    question: "Assurez-vous la maintenance et les mises à jour ?",
    answer:
      "Oui, je propose un suivi optionnel (sauvegardes, mises à jour, sécurité) pour garder votre site à jour et performant dans le temps.",
  },
  {
    question:
      "Travaillez-vous aussi sur des sites existants ou en accompagnement ?",
    answer:
      "Oui. Je peux reprendre et moderniser un site existant (refonte). Et si vous souhaitez être impliqué dans la création, je propose un mode d'accompagnement durant lequel vous faites, et je vous guide.",
  },
  {
    question: "Travaillez-vous uniquement en Haute-Marne ?",
    answer:
      "Je suis basé à Nogent, mais j'accompagne mes clients partout : en présentiel dans la région (Chaumont, Langres…) ou à distance n'importe où en France.",
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
