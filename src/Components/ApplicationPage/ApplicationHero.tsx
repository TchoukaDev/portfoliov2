// components/ApplicationHero.tsx
import Link from "next/link";

export default function ApplicationHero() {
    return (
        <header className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-20">


            {/* Halo plus petit et plus transparent */}
            <div className="absolute top-16 w-60 h-28 bg-blue-600/10 blur-3xl rounded-full" />

            {/* Badge */}
            <span className="relative text-blue-400 text-sm tracking-widest uppercase mb-6">
                Développement sur mesure
            </span>

            {/* Titre */}
            <h1 className="relative text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
                Applications web sur mesure
            </h1>

            {/* Sous-titre */}
            <p className="relative text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
                Vous avez un projet qui ne rentre pas dans une case ?
                Je développe des applications adaptées à vos besoins.
            </p>

            {/* CTA */}
            <Link
                href="/contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors"
            >
                Discuter de votre projet
            </Link>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />
        </header>
    );
}