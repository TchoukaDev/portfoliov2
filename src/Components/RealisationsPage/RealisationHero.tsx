// components/realisations/HeroRealisations.tsx
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
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />
        </header>
    );
}