// app/application/page.tsx

import ApplicationTarget from "@/Components/ApplicationPage/ApplicationTarget";
import ApplicationApproach from "@/Components/ApplicationPage/ApplicationApproach";
import Stack from "@/Components/ApplicationPage/Stack";
import ApplicationRealisations from "@/Components/ApplicationPage/ApplicationRealisations";
import ApplicationCTA from "@/Components/ApplicationPage/ApplicationCTA";
import ApplicationHero from "@/Components/ApplicationPage/ApplicationHero";
import ApplicationServices from "@/Components/ApplicationPage/ApplicationServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Développement d'application web",
  description:
    "Développement d'applications web modernes et performantes avec React, Next.js et TypeScript. Solutions sur mesure adaptées à vos besoins métier.",
  keywords: [
    "application web",
    "développement web",
    "React",
    "Next.js",
    "TypeScript",
    "sur mesure",
    "Romain WIRTH",
    "développeur fullstack",
  ],
};

export default function ApplicationPage() {
  return (
    <main>
      <ApplicationHero />
      <ApplicationTarget />
      <ApplicationServices />
      <ApplicationApproach />
      <Stack />
      <ApplicationRealisations />
      <ApplicationCTA />
    </main>
  );
}