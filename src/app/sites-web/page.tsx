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
    "Création de sites web professionnels pour artisans, indépendants et commerçants en Haute-Marne. WordPress ou sur mesure, adapté à votre budget. Premier échange gratuit.",
  keywords: [
    "création site web",
    "site vitrine",
    "refonte site web",
    "artisan",
    "indépendant",
    "commerçant",
    "petite entreprise",
    "WordPress",
    "sur mesure",
    "Haute-Marne",
    "Nogent",
    "Chaumont",
    "Romain Wirth",
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