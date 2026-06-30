import RealisationHero from "@/Components/RealisationsPage/RealisationHero";
import ProjectsGrid from "@/Components/RealisationsPage/ProjectsGrid";
import RealisationCTA from "@/Components/RealisationsPage/RealisationCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Réalisations",
    description:
        "Découvrez les sites web réalisés par Romain Wirth, développeur freelance en Haute-Marne : sites vitrines, sites dynamiques et e-commerce pour artisans, indépendants et commerçants.",
    keywords: [
        "réalisations",
        "portfolio",
        "sites web",
        "site vitrine",
        "e-commerce",
        "WordPress",
        "Next.js",
        "Romain Wirth",
        "Haute-Marne",
        "Nogent",
        "Chaumont",
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
