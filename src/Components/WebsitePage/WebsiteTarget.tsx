// components/site-web/PourQui.tsx
import { Check } from "lucide-react";
import Section from "../UI/Section";

export default function WebsiteTarget() {
  const points = [
    "Vous n'avez pas encore de site web",
    "Votre site actuel est vieillissant ou mal adapté",
    "Vous voulez être trouvé sur Google",
    "Vous voulez présenter votre activité clairement",
    "Vous voulez que vos clients puissent vous contacter facilement",
  ];

  return (
    <Section className="opacity-100">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
          Vous êtes au bon endroit si...
        </h2>

        <ul className="space-y-4">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-gray-300"
            >
              <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mt-1">
                <Check size={16} />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

      </div>
    </Section>
  );
}