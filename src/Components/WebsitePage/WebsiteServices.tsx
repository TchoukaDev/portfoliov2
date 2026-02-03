// components/site-web/Services.tsx
import { Globe, RefreshCcw, HeartHandshake } from "lucide-react";
import Section from "../UI/Section";

export default function WebsiteServices() {
  const services = [
    {
      icon: <Globe size={28} />,
      title: "Création de site",
      description: "Site vitrine pour présenter votre activité ou petit commerce en ligne pour vendre vos produits.",
    },
    {
      icon: <RefreshCcw size={28} />,
      title: "Refonte de site",
      description: "Votre site existe mais il est daté ? Je le modernise pour une meilleure image et une navigation plus claire.",
    },
    {
      icon: <HeartHandshake size={28} />,
      title: "Accompagnement",
      description: "Je vous explique tout simplement. Vous gardez le contrôle de votre site et pouvez le modifier vous-même.",
    },
  ];

  return (
    <Section alternate={true} className="px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
          Ce que je propose
        </h2>

        <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
          Des sites web simples et efficaces, adaptés à vos besoins.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-gray-800 bg-gray-900/50"
            >
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-6">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}