// components/ApplicationHero.tsx
import Link from "next/link";
import SectionDivider from "../UI/SectionDivider";

export default function ApplicationHero() {
    return (
        <header className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-20">

            {/* Halo étendu (moins marqué que la page d'accueil) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-600/8 blur-3xl rounded-full pointer-events-none" />

            {/* Halo central */}
            <div className="absolute top-16 w-60 h-28 bg-blue-600/12 blur-3xl rounded-full pointer-events-none" />

            {/* Badge */}
            <span className="hero-label">
                Intégration & Interfaces
            </span>

            {/* Titre */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
                Intégration et applications web
            </h1>

            {/* Sous-titre */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
                Développement frontend et applications web adaptées à des besoins techniques clairement définis.
            </p>

            {/* CTA */}
            <Link
                href="/contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors"
            >
                Discuter de votre projet
            </Link>
            <SectionDivider />

        </header>
    );
}
