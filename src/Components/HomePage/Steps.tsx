import Link from "next/link";
import Button from "../UI/Button";
import Section from "../UI/Section";
import SectionDivider from "../UI/SectionDivider";

// components/HomePage/Steps.tsx
export default function Steps() {
  const etapes = [
    {
      number: "01",
      title: "On discute",
      description:
        "Vous m'expliquez votre activité et vos besoins. Je vous pose des questions pour bien comprendre.",
      note: "Gratuit et sans engagement",
    },
    {
      number: "02",
      title: "Je vous propose une solution",
      description:
        "Je propose un devis clair et sans surprise, adapté à vos besoins identifiés. Je vous explique chaque choix sans jargon technique",
    },
    {
      number: "03",
      title: "Je crée votre site",
      description:
        "À la réception des images et contenus éventuels, je construits votre site et vous partage régulièrement l'avancement.",
    },
    {
      number: "04",
      title: "Mise en ligne",
      description:
        "Une fois le contenu du site validé, je mets en ligne le site sur votre hébergement. Je vous accompagne pour le choix de plateforme si nécessaire",
    },
    {
      number: "05",
      title: "Formation et suivi",
      description:
        "Je vous forme à l'utilisation du site (si vous souhaitez être autonome), sinon je m'assure du bon fonctionnement du site et des modifications de contenu que vous me transmettez",
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
            <div key={index} className="flex gap-6">
              {/* Numéro */}
              <div className="text-3xl font-bold text-blue-500/30">
                {etape.number}
              </div>

              {/* Contenu */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {etape.title}
                </h3>
                <p className="text-gray-400 text-sm">{etape.description}</p>
                {etape.note && (
                  <span className="inline-block mt-2 text-xs text-blue-400">
                    {etape.note}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/contact">Lancer mon projet maintenant</Link>
          </Button>
        </div>
      </div>
      <SectionDivider />
    </Section>
  );
}
