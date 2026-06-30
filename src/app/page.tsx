import Hero from "@/Components/HomePage/Hero";
import Target from "@/Components/HomePage/Target";
import Solutions from "@/Components/HomePage/Solutions";
import Steps from "@/Components/HomePage/Steps";
import RealisationsTeaser from "@/Components/HomePage/RealisationsTeaser";
import Testimonial from "@/Components/HomePage/Testimonial";
import ShortAbout from "@/Components/HomePage/ShortAbout";
import FinalCTA from "@/Components/HomePage/FinalCTA";
import { Metadata } from "next";

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
      <Hero />
      <Target />
      <Solutions />
      <Steps />
      <RealisationsTeaser />
      <Testimonial />
      <ShortAbout />
      <FinalCTA />
    </main>
  );
}
