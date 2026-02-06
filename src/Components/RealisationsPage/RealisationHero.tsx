// components/realisations/HeroRealisations.tsx
import SectionDivider from "../UI/SectionDivider";

export default function RealisationHero() {
    return (
        <header className="relative px-6 py-20 text-center">

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Mes réalisations
            </h1>

            <p className="text-lg text-gray-400 max-w-xl mx-auto">
                Sites vitrines, applications sur mesure :
                {/* eslint-disable-next-line */}
                découvrez les projets que j'ai réalisés.
            </p>
            <SectionDivider />
        </header>
    );
}