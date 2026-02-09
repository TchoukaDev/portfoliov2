import Hero from "@/Components/HomePage/Hero";
import Services from "@/Components/HomePage/Services";
import ShortAbout from "@/Components/HomePage/ShortAbout";
import Testimonial from "@/Components/HomePage/Testimonial";
import FinalCTA from "@/Components/HomePage/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Romain WIRTH | Développeur Web",
  description:
    "Portfolio de Romain WIRTH, développeur web. Création de sites web pour artisans, indépendants et petites entreprises. Un site clair, moderne et simple à gérer.",
  keywords: [
    "Romain WIRTH",
    "développeur web",
    "artisan",
    "indépendant",
    "petite entreprise",
    "site vitrine",
    "Haute-Marne",
    "freelance",
    "WordPress",
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