"use client";
// components/Hero.tsx

import Button from "../UI/Button";
import SectionDivider from "../UI/SectionDivider";

// components/Hero.tsx
export default function Hero() {
  return (
    <header className="relative overflow-hidden min-h-[70vh] gap-6 flex flex-col justify-center items-center text-center px-6 py-20">
      {/* Halo étendu (gradient radial large) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      {/* Halo central */}
      <div className="absolute top-16 w-72 h-36 md:w-96 md:h-48 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

      {/* Label + ligne décorative */}
      <div className="flex flex-col items-center mb-6">
        <span className="hero-label !mb-2 block">
          Création de sites internet en Haute-Marne
        </span>
        <span className="bg-blue-500/60 animate-expand-x" />
      </div>

      <h1 className="relative text-4xl md:text-6xl font-bold text-white mb-6">
        Attirez vos futurs clients avec un site web qui met en valeur votre
        expertise
      </h1>

      <p className="relative text-lg md:text-xl text-gray-400 max-w-2xl mb-12">
        Artisan, indépendant ou entreprise, je conçois votre site sur-mesure
        pour développer votre présence en ligne et attirer vos futurs clients.
      </p>

      <Button
        onClick={(e: unknown) => {
          if (e instanceof MouseEvent) {
            e.preventDefault();
          }

          const target = document.getElementById("offre");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }}
        variant="primary"
      >
        Découvrir mon offre ↓
      </Button>
      <SectionDivider />
    </header>
  );
}
