import Section from "../UI/Section";

// components/site-web/Etapes.tsx
export default function WebsiteSteps() {
  const etapes = [
    {
      number: "01",
      title: "On discute",
      description: "Vous m'expliquez votre activité et vos besoins. Je vous pose des questions pour bien comprendre.",
      note: "Gratuit et sans engagement",
    },
    {
      number: "02",
      title: "Je vous propose une solution",
      description: "Devis clair, sans surprise. Je vous explique ce que je recommande et pourquoi.",
    },
    {
      number: "03",
      title: "Je crée votre site",
      description: "Vous voyez l'avancement régulièrement. On ajuste ensemble si besoin.",
    },
    {
      number: "04",
      title: "Votre site est en ligne",
      description: "Je vous montre comment le modifier. Je reste disponible si vous avez des questions.",
    },
  ];

  return (
    <Section className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
          Comment ça se passe
        </h2>
        
        <p className="text-gray-400 text-center mb-12">
          Un projet simple, étape par étape.
        </p>

        <div className="space-y-8">
          {etapes.map((etape, index) => (
            <div 
              key={index}
              className="flex gap-6"
            >
              {/* Numéro */}
              <div className="text-3xl font-bold text-blue-500/30">
                {etape.number}
              </div>
              
              {/* Contenu */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {etape.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {etape.description}
                </p>
                {etape.note && (
                  <span className="inline-block mt-2 text-xs text-blue-400">
                    {etape.note}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}