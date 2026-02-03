// app/site-web/page.tsx
import WebsiteHero from "@/Components/WebsitePage/WebsiteHero";
import WebsiteTarget from "@/Components/WebsitePage/WebsiteTarget";
import WebsiteServices from "@/Components/WebsitePage/WebsiteServices";
import WebsiteSteps from "@/Components/WebsitePage/WebsiteSteps";
import WebsiteRealisations from "@/Components/WebsitePage/WebsiteRealisations";
import WebsiteCTA from "@/Components/WebsitePage/WebsiteCTA";

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