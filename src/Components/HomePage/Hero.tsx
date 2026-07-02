// components/Hero.tsx

import Link from "next/link";
import { MessagesSquare, Clock } from "lucide-react";
import Button from "../UI/Button";
import SectionDivider from "../UI/SectionDivider";
import Counter from "../UI/Counter";

const stats = [
  { value: 7, suffix: "+", label: "projets livrés" },
  { value: 100, suffix: " %", label: "clients satisfaits" },
];

const reassurance = [
  { icon: <MessagesSquare size={14} />, label: "Premier échange gratuit" },
  { icon: <Clock size={14} />, label: "Réponse sous 48h" },
];

export default function Hero() {
  return (
    <header className="relative overflow-hidden  gap-6 md:gap-12 flex flex-col justify-center items-center text-center px-6 py-20">
      {/* Halo étendu (gradient radial large) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      {/* Halo central */}
      <div className="absolute top-16 w-72 h-36 md:w-96 md:h-48 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

      {/* Label + ligne décorative */}
      <div className="flex flex-col items-center mb-6 md:mb-0">
        <span className="hero-label !mb-2 block">
          Création de sites internet en Haute-Marne
        </span>
        <span className="bg-blue-500/60 animate-expand-x" />
      </div>

      <h1 className="relative text-4xl md:text-6xl font-bold text-white mb-6 md:mb-0">
        <span className="bg-linear-to-r from-white to-blue-400 bg-clip-text text-transparent">
          Attirez
        </span>{" "}
        vos futurs clients avec un site web qui{" "}
        <span className="bg-linear-to-r from-white to-blue-400 bg-clip-text text-transparent">
          met en valeur
        </span>{" "}
        votre expertise
      </h1>

      <p className="relative text-lg md:text-xl text-gray-400 max-w-2xl mb-6 md:mb-0">
        Artisan, indépendant ou entreprise, je conçois votre site sur-mesure
        pour développer votre présence en ligne et attirer vos futurs clients.
      </p>

      {/* Chiffres clés */}
      <div className="relative flex items-center justify-center gap-10">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-3xl font-bold text-blue-400">
              <Counter value={stat.value} />
              {stat.suffix}
            </p>
            <p className="text-xs text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA + réassurance discrète */}
      <div className="relative flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild variant="primary">
            <Link href="/contact">Demander un devis gratuit</Link>
          </Button>
          <Button asChild variant="outline">
            <a href="#offres">Voir mes offres</a>
          </Button>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
          {reassurance.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <SectionDivider />
    </header>
  );
}
