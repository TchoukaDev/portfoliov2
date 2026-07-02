import Hero from "@/Components/HomePage/Hero";
import Target from "@/Components/HomePage/Target";
import Benefits from "@/Components/HomePage/Benefits";
import Solutions from "@/Components/HomePage/Solutions";
import RealisationsTeaser from "@/Components/HomePage/RealisationsTeaser";
import Testimonial from "@/Components/HomePage/Testimonial";
import Pricing from "@/Components/HomePage/Pricing";
import Steps from "@/Components/HomePage/Steps";
import ShortAbout from "@/Components/HomePage/ShortAbout";
import FAQ from "@/Components/HomePage/FAQ";
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
      <RealisationsTeaser />
      <Benefits />
      <Testimonial />
      <Solutions />
      <Pricing />
      <Steps />
      <ShortAbout />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
