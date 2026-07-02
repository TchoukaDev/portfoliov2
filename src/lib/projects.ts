// Source unique des projets affichés sur la home (teaser) et la page /realisations.

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  stack: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Artsoul - Justine",
    description:
      "Site one page avec galerie intégrée pour une artiste émotionnelle, peintre et dessinatrice",
    image: "/projects/artsoul.png",
    url: "https://artsoulcrea.fr/",
    stack: "Astro",
  },
  {
    id: 2,
    title: "Alexandra Gerstel",
    description:
      "Site multipage pour une assistante de gestion spécialisée dans la santé et le BTP dans le secteur de Bandol (Var)",
    image: "/projects/ag-ag.png",
    url: "https://ag-ag.fr/",
    stack: "Astro, DecapCMS",
  },
  {
    id: 3,
    title: "ELG-Avenir",
    description:
      "Site multipage pour Elodie GRIFFATON, conseillère en gestion de patrimoine en Seine-Marne (77) ",
    image: "/projects/elg-avenir.png",
    url: "https://elg-avenir.fr/",
    stack: "WordPress",
  },
  {
    id: 4,
    title: "Julie Etienne",
    description:
      "Site one page pour assistante administrative indépendante spécialisée dans le domaine de la restauration à Sélestat, en Alsace",
    image: "/projects/je-admin-pro.png",
    url: "https://je-admin-pro.fr/",
    stack: "Astro",
  },

  {
    id: 5,
    title: "Jenn Campagna",
    description:
      "Site one page pour une thérapeute psycho-émotionnelle pour femmes, enfants et adolescents autour de Poissy (78) ",
    image: "/projects/jenn-campagna.png",
    url: "https://jenncampagna.fr/",
    stack: "WordPress",
  },
  {
    id: 6,
    title: "Les Randonneurs des Sables",
    description:
      "Site dynamique pour un club de marche aquatique : actualités, planning des séances et informations pratiques.",
    image: "/projects/lesrandonneurs.png",
    url: "https://www.marcheaquatique-lesrandonneursdessables.fr/",
    stack: "Next.js, Strapi",
  },
  {
    id: 7,
    title: "Clothilde Baudet",
    description:
      "Site vitrine pour une psychologue clinicienne. Design clair et apaisant pour présenter son activité et faciliter la prise de contact.",
    image: "/projects/clothilde-baudet.png",
    url: "https://clothilde-baudet.fr/",
    stack: "WordPress",
  },
];
