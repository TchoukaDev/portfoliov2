// components/ApplicationApproach.tsx
import { MessageSquare, Code, GitBranch, Users } from "lucide-react";
import Section from "../UI/Section";

export default function ApplicationApproach() {
  const points = [
    {
      icon: <MessageSquare size={20} />,
      title: "Communication régulière",
      description: "Points d'avancement fréquents. Vous savez toujours où on en est.",
    },
    {
      icon: <Code size={20} />,
      title: "Code propre et maintenable",
      description: "Un code structuré, documenté, que vous ou un autre dev pourrez reprendre.",
    },
    {
      icon: <GitBranch size={20} />,
      title: "Livraison par étapes",
      description: "Vous voyez le projet avancer. On ajuste au fur et à mesure.",
    },
    {
      icon: <Users size={20} />,
      title: "Collaboration possible",
      description: "Je peux travailler seul ou intégrer une équipe existante.",
    },
  ];

  return (
    <Section className="px-6 py-20">
      < div className="max-w-3xl mx-auto" >

        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
          Comment je travaille
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <div key={index} className="flex gap-4">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 h-fit">
                {point.icon}
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">
                  {point.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div >
    </Section>
  );
}