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
    title: "Clothilde Baudet",
    description:
      "Site vitrine pour une psychologue. Design clair et apaisant pour présenter son activité et faciliter la prise de contact.",
    image: "/projects/clothilde-baudet.png",
    url: "https://clothilde-baudet.fr/",
    stack: "WordPress",
  },
  {
    id: 2,
    title: "Les Randonneurs des Sables",
    description:
      "Site dynamique pour un club de marche aquatique : actualités, planning des séances et informations pratiques.",
    image: "/projects/lesrandonneurs.png",
    url: "https://les-randonneurs-des-sables.vercel.app/",
    stack: "Next.js, Strapi",
  },
  {
    id: 3,
    title: "FlowerPower",
    description:
      "Site vitrine de démonstration avec boutique en ligne : catalogue produits, panier et paiement.",
    image: "/projects/flowerpower.png",
    url: "https://flowerpower.romainwirth.fr/",
    stack: "WordPress",
  },
  // TODO: ajouter ici tes nouveaux projets en suivant le même format.
  // {
  //   id: 4,
  //   title: "",
  //   description: "",
  //   image: "/projects/.png",
  //   url: "",
  //   stack: "",
  // },
];
