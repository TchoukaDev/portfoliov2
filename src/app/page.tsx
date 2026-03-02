import Hero from "@/Components/HomePage/Hero";
import Services from "@/Components/HomePage/Services";
import ShortAbout from "@/Components/HomePage/ShortAbout";
import Testimonial from "@/Components/HomePage/Testimonial";
import FinalCTA from "@/Components/HomePage/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Romain Wirth — Développeur web freelance",
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
      <Services />
      <ShortAbout />
      <Testimonial />
      <FinalCTA />
    </main>
  )
}