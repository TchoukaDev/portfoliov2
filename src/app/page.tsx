import Hero from "@/Components/HomePage/Hero";
import Target from "@/Components/HomePage/Target";
import Benefits from "@/Components/HomePage/Benefits";
import Solutions from "@/Components/HomePage/Solutions";
import Difference from "@/Components/HomePage/Difference";
import RealisationsTeaser from "@/Components/HomePage/RealisationsTeaser";
import Testimonial from "@/Components/HomePage/Testimonial";
import Pricing from "@/Components/HomePage/Pricing";
import Steps from "@/Components/HomePage/Steps";
import ShortAbout from "@/Components/HomePage/ShortAbout";
import FAQ from "@/Components/HomePage/FAQ";
import FinalCTA from "@/Components/HomePage/FinalCTA";
import { Metadata } from "next";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de temps faut-il pour créer mon site ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En général de 2 à 6 semaines selon la taille du projet et la rapidité à laquelle vous me transmettez vos contenus (témoignages, photos…).",
      },
    },
    {
      "@type": "Question",
      name: "Pourrai-je modifier mon site moi-même ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous avez le choix. Si vous voulez être autonome, j'intègre un outil qui vous permet de modifier votre contenu facilement. Si vous préférez déléguer, le site est plus léger et moins coûteux, et je m'occupe des mises à jour via un contrat de maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je écrire mes propres textes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ce que vous voulez dire n'est pas toujours ce dont vos visiteurs ont besoin de voir. Écrire pour le web, c'est structurer, convaincre et penser référencement. Je préfère donc m'en occuper pour que le résultat soit plus efficace.",
      },
    },
    {
      "@type": "Question",
      name: "Mon site sera-t-il bien référencé sur Google ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "J'intègre les bonnes pratiques de référencement (SEO) dès la conception pour que vos clients vous trouvent plus facilement dans votre région. Je peux également vous aider à créer votre fiche Google My Business si vous ne l'avez pas déjà.",
      },
    },
    {
      "@type": "Question",
      name: "Assurez-vous la maintenance et les mises à jour ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, je propose un suivi optionnel (sauvegardes, mises à jour, sécurité) pour garder votre site à jour et performant dans le temps.",
      },
    },
    {
      "@type": "Question",
      name: "Travaillez-vous aussi sur des sites existants ou en accompagnement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Je peux reprendre et moderniser un site existant (refonte). Et si vous souhaitez être impliqué dans la création, je propose un mode d'accompagnement durant lequel vous faites, et je vous guide.",
      },
    },
    {
      "@type": "Question",
      name: "Travaillez-vous uniquement en Haute-Marne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Je suis basé à Nogent, mais j'accompagne mes clients partout : en présentiel dans la région (Chaumont, Langres…) ou à distance n'importe où en France.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Romain Wirth — Création de sites web freelance",
  description:
    "Romain Wirth, développeur web freelance en Haute-Marne. Je crée des sites web professionnels pour artisans, indépendants et petites entreprises. WordPress ou sur mesure.",
  keywords: [
    "Romain Wirth",
    "développeur web freelance",
    "création site web",
    "site vitrine",
    "artisan",
    "indépendant",
    "petite entreprise",
    "WordPress",
    "Haute-Marne",
    "Nogent",
    "Chaumont",
    "freelance",
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Target />
      <RealisationsTeaser />
      <Benefits />
      <Testimonial />
      <Solutions />
      <Pricing />
      <Difference />
      <Steps />
      <ShortAbout />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
