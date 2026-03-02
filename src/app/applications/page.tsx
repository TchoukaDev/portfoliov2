// app/application/page.tsx

import ApplicationTarget from "@/Components/ApplicationPage/ApplicationTarget";
import ApplicationApproach from "@/Components/ApplicationPage/ApplicationApproach";
import ApplicationSteps from "@/Components/ApplicationPage/ApplicationSteps";
import Stack from "@/Components/ApplicationPage/Stack";
import ApplicationRealisations from "@/Components/ApplicationPage/ApplicationRealisations";
import ApplicationCTA from "@/Components/ApplicationPage/ApplicationCTA";
import ApplicationHero from "@/Components/ApplicationPage/ApplicationHero";
import ApplicationServices from "@/Components/ApplicationPage/ApplicationServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Développement web sur mesure",
  description:
    "Développement d'interfaces web et d'applications sur mesure avec React et Next.js. MVP, sites dynamiques, intégration frontend. Basé en Haute-Marne, disponible à distance.",
  keywords: [
    "développement web sur mesure",
    "application web",
    "interface web",
    "React",
    "Next.js",
    "TypeScript",
    "MVP",
    "CMS headless",
    "développeur frontend",
    "Haute-Marne",
    "Nogent",
    "Romain Wirth",
  ],
};

export default function ApplicationPage() {
  return (
    <main>
      <ApplicationHero />
      <ApplicationTarget />
      <ApplicationServices />
      <ApplicationApproach />
      <ApplicationSteps />
      <Stack />
      <ApplicationRealisations />
      <ApplicationCTA />
    </main>
  );
}