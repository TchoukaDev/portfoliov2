// components/ApplicationApproach.tsx
import { MessageSquare, Code, GitBranch, Users } from "lucide-react";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";
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
    <Section>
      < Container size="md" >

        <SectionHeader title="Comment je travaille" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
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

      </Container>
    </Section>
  );
}