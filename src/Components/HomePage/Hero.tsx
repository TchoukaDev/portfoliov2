"use client";
// components/Hero.tsx

import Button from "../UI/Button";

// components/Hero.tsx
export default function Hero() {
    return (
        <header className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 py-20">

            {/* Halo lumineux */}
            <div className="absolute top-16 w-72 h-36 md:w-96 md:h-48 bg-blue-600/20 blur-3xl rounded-full" />

            {/* Contenu - "relative" pour être au-dessus du halo */}
            <p className="relative text-blue-400 text-sm tracking-widest uppercase mb-4">
                Romain Wirth
            </p>

            <h1 className="relative text-4xl md:text-6xl font-bold text-white mb-6">
                Développeur web freelance
            </h1>

            <p className="relative text-lg md:text-xl text-gray-400 max-w-2xl mb-12">
                Je crée des sites web et des applications sur mesure
                pour les indépendants et les entreprises.
            </p>

            <p className="relative text-sm text-blue-300 mb-8">
                📍 Disponible dès mars 2026
            </p>

            <Button

                onClick={(e: unknown) => {
                    if (e instanceof MouseEvent) {
                        e.preventDefault();
                    }

                    const services = document.getElementById("services");
                    if (services) {
                        services.scrollIntoView({ behavior: "smooth" });
                    }
                }}
                variant="primary"

            >
                Découvrir mes services ↓
            </Button>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />
        </header>
    );
}