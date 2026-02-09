"use client";
// components/Hero.tsx

import Button from "../UI/Button";
import SectionDivider from "../UI/SectionDivider";

// components/Hero.tsx
export default function Hero() {
    return (
        <header className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 py-20">

            {/* Halo lumineux */}
            <div className="absolute top-16 w-72 h-36 md:w-96 md:h-48 bg-blue-600/20 blur-3xl rounded-full" />

            {/* Contenu - "relative" pour être au-dessus du halo */}
            <p className="hero-label">
                Romain Wirth
            </p>

            <h1 className="relative text-4xl md:text-6xl font-bold text-white mb-6">
                Développeur web freelance
            </h1>

            <p className="relative text-lg md:text-xl text-gray-400 max-w-2xl mb-12">
                {/* eslint-disable-next-line */}
                Je crée des sites web professionnels pour les indépendants et petites entreprises, et j'interviens sur des interfaces web  pour les besoins techniques spécifiques.
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
            <SectionDivider />
        </header>
    );
}