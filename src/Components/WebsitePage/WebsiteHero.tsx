// components/WebsiteHero.tsx
import Link from "next/link";
import SectionDivider from "../UI/SectionDivider";

export default function WebsiteHero() {
    return (
        <header className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-20">


            {/* Halo plus petit et plus transparent */}
            <div className="absolute top-16 w-60 h-28 bg-blue-600/10 blur-3xl rounded-full" />

            {/* Badge */}
            <span className="hero-label">
                Sites web
            </span>

            {/* Titre */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
                Un site web pour votre activité
            </h1>

            {/* Sous-titre */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
                Vous êtes artisan, commerçant, indépendant ?
                Je crée un site qui vous ressemble et qui travaille pour vous.
            </p>

            {/* CTA */}
            <Link
                href="/contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors"
            >
                Demander un devis gratuit
            </Link>
            <SectionDivider />
        </header>
    );
}