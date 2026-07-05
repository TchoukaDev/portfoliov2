"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import Section from "../UI/Section";

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
    <div className="flex h-full flex-col justify-between rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
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
    </div>
  );
}

export default function Testimonial() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Défile jusqu'au témoignage `index` en centrant le slide dans la piste.
  // On raisonne en coordonnées écran (getBoundingClientRect) + scrollBy pour
  // ne pas dépendre de l'offsetParent, qui fausse offsetLeft.
  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, testimonials.length - 1));
    const slide = track.children[clamped] as HTMLElement | undefined;
    if (!slide) return;
    const slideRect = slide.getBoundingClientRect();
    const trackRect = track.getBoundingClientRect();
    track.scrollBy({ left: slideRect.left - trackRect.left, behavior: "smooth" });
  }, []);

  // Met à jour l'index actif en fonction de la position de scroll (swipe compris).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const trackLeft = track.getBoundingClientRect().left;
        let nearest = 0;
        let minDist = Infinity;
        Array.from(track.children).forEach((child, i) => {
          const rect = (child as HTMLElement).getBoundingClientRect();
          const dist = Math.abs(rect.left - trackLeft);
          if (dist < minDist) {
            minDist = dist;
            nearest = i;
          }
        });
        setActiveIndex(nearest);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Section>
      <h2 className="mb-12 text-center">Ce qu&apos;ils disent</h2>

      {/* Grand écran : marquee autodéfilant avec fondu sur les bords, pause au survol */}
      <div
        className="hidden overflow-hidden lg:block"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="animate-marquee flex w-max gap-6">
          <ul className="flex shrink-0 gap-6">
            {testimonials.map((t, i) => (
              <li key={i} className="flex w-[22rem] shrink-0">
                <TestimonialCard {...t} />
              </li>
            ))}
          </ul>
          <ul className="flex shrink-0 gap-6" aria-hidden="true">
            {testimonials.map((t, i) => (
              <li key={`dup-${i}`} className="flex w-[22rem] shrink-0">
                <TestimonialCard {...t} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile / tablette : carrousel une carte par vue (swipe + flèches + points) */}
      <div className="lg:hidden">
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Témoignage précédent"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-800 bg-gray-900/50 text-gray-300 transition hover:border-gray-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 sm:flex"
          >
            <ChevronLeft size={20} />
          </button>

          <ul
            ref={trackRef}
            className="no-scrollbar flex flex-1 snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth"
          >
            {testimonials.map((t, i) => (
              <li
                key={i}
                className="flex w-full shrink-0 snap-start justify-center"
              >
                <div className="w-full max-w-2xl">
                  <TestimonialCard {...t} />
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === testimonials.length - 1}
            aria-label="Témoignage suivant"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-800 bg-gray-900/50 text-gray-300 transition hover:border-gray-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 sm:flex"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Points de navigation */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Aller au témoignage ${i + 1}`}
              aria-current={i === activeIndex}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex
                  ? "w-6 bg-blue-400"
                  : "w-2 bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
