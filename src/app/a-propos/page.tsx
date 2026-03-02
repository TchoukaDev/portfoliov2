// app/a-propos/page.tsx
import HeroAbout from "@/Components/AboutPage/HeroAbout";
import Background from "@/Components/AboutPage/Background";
import WhyDev from "@/Components/AboutPage/WhyDev";
import SoftSkills from "@/Components/AboutPage/SoftSkills";
import AboutCTA from "@/Components/AboutPage/AboutCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Ancien cadre de santé devenu développeur web freelance, Romain Wirth met son écoute et sa rigueur au service de vos projets web. Basé en Haute-Marne.",
  keywords: [
    "Romain Wirth",
    "développeur web freelance",
    "parcours",
    "cadre de santé",
    "Haute-Marne",
    "Nogent",
    "freelance",
  ],
};

export default function AProposPage() {
  return (
    <main>

      <HeroAbout />
      <Background />
      <WhyDev />
      <SoftSkills />
      <AboutCTA />

    </main>
  );
}