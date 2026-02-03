// app/realisations/page.tsx
import RealisationHero from "@/Components/RealisationsPage/RealisationHero";
import ProjectsGrid from "@/Components/RealisationsPage/ProjectsGrid";
import RealisationCTA from "@/Components/RealisationsPage/RealisationCTA";

export default function RealisationsPage() {
    return (
        <main>
            <RealisationHero />
            <ProjectsGrid />
            <RealisationCTA />
        </main>
    );
}