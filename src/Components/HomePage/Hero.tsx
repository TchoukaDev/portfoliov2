"use client";
// components/Hero.tsx

import Button from "../UI/Button";
import SectionDivider from "../UI/SectionDivider";

// components/Hero.tsx
export default function Hero() {
    return (
        <header className="relative overflow-hidden min-h-[70vh] flex flex-col justify-center items-center text-center px-6 py-20">

            {/* Halo étendu (gradient radial large) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

            {/* Halo central */}
            <div className="absolute top-16 w-72 h-36 md:w-96 md:h-48 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

            {/* Label + ligne décorative */}
            <div className="flex flex-col items-center mb-6">
                <p className="hero-label !mb-2">
                    Romain Wirth
                </p>
                <span className="bg-blue-500/60 animate-expand-x" />
            </div>

            <h1 className="relative text-4xl md:text-6xl font-bold text-white mb-6">
                Développeur web freelance
            </h1>

            <p className="relative text-lg md:text-xl text-gray-400 max-w-2xl mb-12">
                {/* eslint-disable-next-line */}
                Je crée des sites web professionnels pour les indépendants et petites entreprises, et j&apos;interviens sur des interfaces web pour les besoins techniques spécifiques.
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
