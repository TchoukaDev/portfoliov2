
import "./globals.css";

import localFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/Components/Navbar/Navbar";
import Container from "@/Components/UI/Container";
import Footer from "@/Components/Footer/Footer";

const raleway = localFont({
  src: [
    {
      path: "./fonts/Raleway-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Raleway-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-raleway",
});

const playfair = localFont({
  src: [
    {
      path: "./fonts/PlayfairDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PlayfairDisplay-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-playfair",
});
export const metadata: Metadata = {
  title: {
    default: "Romain WIRTH | Développeur Web",
    template: "%s | Portfolio de Romain WIRTH",
  },
  description:
    "Portfolio de Romain WIRTH, développeur web. Création de sites web pour artisans, indépendants et petites entreprises. Un site clair, moderne et simple à gérer.",
  // "Portfolio de Romain WIRTH, développeur web spécialisé en React, Next.js et JavaScript moderne. Découvrez mes projets, mes compétences et contactez-moi pour collaborer.",
  keywords: [
    "Romain WIRTH",
    "développeur web",
    "artisan",
    "indépendant",
    "petite entreprise",
    "site vitrine",
    "Haute-Marne",
    "freelance",
    "WordPress",
  ],
  openGraph: {
    title: "Romain WIRTH | Développeur Web",
    description:
      "Romain Wirth, développeur web freelance. Création de sites web pour artisans, indépendants et petites entreprises. Un site clair, moderne et simple à gérer.",
    // "Découvrez mes projets et compétences en développement web moderne avec React et Next.js.",
    url: "https://romainwirth.fr",
    siteName: "Portfolio de Romain WIRTH",
    images: [
      {
        url: "https://romainwirth.fr/og-image.jpg", // ton image d’aperçu
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Romain WIRTH",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Romain Wirth | Développeur Web Front-End",
    description:
      "Portfolio de Romain Wirth, développeur web. Création de sites web pour artisans, indépendants et petites entreprises. Un site clair, moderne et simple à gérer.",
    // "Portfolio de Romain Wirth, développeur web spécialisé en React et Nextjs.",
    creator: "@romainwirth",
    images: ["https://romainwirth.fr/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${raleway.variable} ${playfair.variable}`}>
      <body className="relative flex flex-col justify-center font-raleway min-h-screen cursor-default">

        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
