// app/realisations/page.tsx
import RealisationHero from "@/Components/RealisationsPage/RealisationHero";
import ProjectsGrid from "@/Components/RealisationsPage/ProjectsGrid";
import RealisationCTA from "@/Components/RealisationsPage/RealisationCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez mes projets web : sites vitrines, applications web et projets personnels. Exemples concrets de réalisations pour artisans et petites entreprises.",
  keywords: [
    "réalisations",
    "projets web",
    "portfolio",
    "Romain WIRTH",
    "sites vitrines",
    "applications web",
    "exemples",
  ],
};

export default function RealisationsPage() {
    return (
        <main>
            <RealisationHero />
            <ProjectsGrid />
            <RealisationCTA />
        </main>
    );
}