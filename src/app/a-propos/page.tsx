// app/a-propos/page.tsx
import HeroAbout from "@/Components/AboutPage/HeroAbout";
import Background from "@/Components/AboutPage/Background";
import WhyDev from "@/Components/AboutPage/WhyDev";
import SoftSkills from "@/Components/AboutPage/SoftSkills";
import AboutCTA from "@/Components/AboutPage/AboutCTA";

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