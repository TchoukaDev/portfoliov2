// app/application/page.tsx

import ApplicationTarget from "@/Components/ApplicationPage/ApplicationTarget";
import ApplicationApproach from "@/Components/ApplicationPage/ApplicationApproach";
import Stack from "@/Components/ApplicationPage/Stack";
import ApplicationRealisations from "@/Components/ApplicationPage/ApplicationRealisations";
import ApplicationCTA from "@/Components/ApplicationPage/ApplicationCTA";
import ApplicationHero from "@/Components/ApplicationPage/ApplicationHero";
import ApplicationSteps from "@/Components/ApplicationPage/ApplicationSteps";

export default function ApplicationPage() {
    return (
        <main>
            <ApplicationHero />
            <ApplicationTarget />
            <ApplicationSteps />
            <ApplicationApproach />
            <Stack />
            <ApplicationRealisations />
            <ApplicationCTA />
        </main>
    );
}