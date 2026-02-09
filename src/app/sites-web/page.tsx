// app/site-web/page.tsx
import WebsiteHero from "@/Components/WebsitePage/WebsiteHero";
import WebsiteTarget from "@/Components/WebsitePage/WebsiteTarget";
import WebsiteServices from "@/Components/WebsitePage/WebsiteServices";
import WebsiteSteps from "@/Components/WebsitePage/WebsiteSteps";
import WebsiteRealisations from "@/Components/WebsitePage/WebsiteRealisations";
import WebsiteCTA from "@/Components/WebsitePage/WebsiteCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création de site web",
  description:
    "Création de sites web sur mesure pour artisans, indépendants et petites entreprises. Sites vitrines modernes, rapides et optimisés pour le référencement. WordPress ou sur mesure.",
  keywords: [
    "création site web",
    "site vitrine",
    "artisan",
    "indépendant",
    "petite entreprise",
    "WordPress",
    "site sur mesure",
    "Haute-Marne",
    "Romain WIRTH",
  ],
};

export default function SiteWebPage() {
    return (
        <main>
            <WebsiteHero />
            <WebsiteTarget />
            <WebsiteServices />
            <WebsiteSteps />
            <WebsiteRealisations />
            <WebsiteCTA />
        </main>
    );
}