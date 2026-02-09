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
    "Découvrez le parcours de Romain WIRTH, développeur web freelance passionné. Mon approche, mes compétences et ma vision du développement web moderne.",
  keywords: [
    "à propos",
    "Romain WIRTH",
    "parcours",
    "compétences",
    "développeur web",
    "freelance",
    "Haute-Marne",
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