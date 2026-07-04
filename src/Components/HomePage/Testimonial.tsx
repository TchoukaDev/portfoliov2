import Link from "next/link";
import { Star } from "lucide-react";
import Section from "../UI/Section";
import Button from "../UI/Button";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Romain a créé un site pour notre activité LCMA, ce site est très convivial avec un design attractif, une navigation fluide et agréable et la présentation des différentes pages est claire.\n Romain est à l’écoute pour nos différentes questions. Je le recommande fortement",
    author: "Séverine",
    role: "Club de marche aquatique Les Randonneurs des Sables",
    rating: 5,
  },
  {
    quote:
      "Très satisfaite du travail fourni pour la création de mon site internet. Un développeur professionnel et passionné, de bon conseil et à l'écoute de mes besoins, disponible et très réactif. Le résultat dépasse largement mes attentes.",
    author: "Clothilde Baudet",
    role: "Psychologue clinicienne",
    rating: 5,
  },
  // TODO: placeholders pour tester le carrousel — à remplacer par de vrais témoignages.
  {
    quote:
      "Créer un site web quand on est créative n’est pas toujours évident. On a beaucoup d’idées, beaucoup d’émotions à transmettre et parfois du mal à les structurer.\n\n Romain a su comprendre mon univers, mon activité et ce que je souhaitais transmettre à travers mon site. Il a été à l’écoute du début à la fin, patient, réactif et toujours de bon conseil.\n\n J’ai particulièrement apprécié sa capacité à traduire mes idées en un site qui me ressemble vraiment. Le résultat est professionnel, fluide et fidèle à mon identité.\n\n Aujourd’hui, j’ai un site dont je suis fière et qui reflète parfaitement mon univers artistique.\n\n Merci Romain pour ton professionnalisme, ton implication et la qualité de ton travail. Je recommande ses services à toute personne qui souhaite un site web à son image.",
    author: "Art'Soul Création",
    role: "Artiste",
    rating: 5,
  },
  {
    quote:
      "J'ai fait appel à Romain pour refondre entièrement mon site internet, et honnêtement… je suis bluffée. En quelques jours seulement, il a su cerner mes envies, comprendre la structure que je souhaitais et intégrer ce que j'aimais visuellement — sans que j'aie besoin de tout expliquer dans les détails. Le résultat est à la fois professionnel et fidèle à mon image. Rarement rencontré quelqu'un d'aussi à l'écoute et aussi efficace. Je recommande les yeux fermés!",
    author: "Elodie Griffaton",
    role: "Conseillère en gestion de patrimoine",
    rating: 5,
  },
  {
    quote:
      "Romain est très professionnel, à l'écoute pour que mon site me convienne. J'adore le travail qu'il a fait pour moi, je suis très satisfaite et je recommande les yeux fermés, il saura vous satisfaire grâce à son travail",
    author: "Julie Etienne",
    role: "Assistante administrative",
    rating: 5,
  },
];

// Initiales à partir du nom (ex. "Clothilde Baudet" -> "CB")
function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TestimonialCard({ quote, author, role, rating }: Testimonial) {
  return (
    <li className="flex w-[22rem] shrink-0 flex-col justify-between rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
      <div>
        <div className="mb-4 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < rating ? "fill-blue-400 text-blue-400" : "text-gray-600"
              }
            />
          ))}
        </div>
        <p className="thin-scroll max-h-60 overflow-y-auto overscroll-contain whitespace-pre-line pr-2 italic text-gray-200">
          {quote}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/20 font-semibold text-blue-300">
          {getInitials(author)}
        </div>
        <div>
          <p className="font-medium text-white">{author}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </li>
  );
}

export default function Testimonial() {
  return (
    <Section>
      <h2 className="mb-12 text-center">Ce qu&apos;ils disent</h2>

      {/* Carrousel autodéfilant avec fondu sur les bords */}
      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="flex w-max gap-6 animate-marquee">
          <ul className="flex shrink-0 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </ul>
          <ul className="flex shrink-0 gap-6" aria-hidden="true">
            {testimonials.map((t, i) => (
              <TestimonialCard key={`dup-${i}`} {...t} />
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/contact">Lancez votre projet</Link>
        </Button>
      </div>
    </Section>
  );
}
