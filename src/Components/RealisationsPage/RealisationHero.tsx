// components/realisations/HeroRealisations.tsx
import SectionDivider from "../UI/SectionDivider";

export default function RealisationHero() {
    return (
        <header className="relative px-6 py-20 text-center">

            {/* Halo étendu (moins marqué que la page d'accueil) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-600/8 blur-3xl rounded-full pointer-events-none" />

            {/* Halo central */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-60 h-28 bg-blue-600/12 blur-3xl rounded-full pointer-events-none" />

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Mes réalisations
            </h1>

            <p className="text-lg text-gray-400 max-w-xl mx-auto">
                Sites vitrines, applications sur mesure :
                {/* eslint-disable-next-line */}
                découvrez les projets que j&apos;ai réalisés.
            </p>
            <SectionDivider />
        </header>
    );
}
