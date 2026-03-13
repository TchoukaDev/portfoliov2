
import "./globals.css";

import localFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import { auth } from "@/auth";

export const dmSans = localFont({
  src: [
    {
      path: "./fonts/DMSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/DMSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-dm-sans",
});
const raleway = localFont({
  src: [
    {
      path: "./fonts/Raleway-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-raleway",
});


export const metadata: Metadata = {
  title: {
    default: "Romain Wirth — Développeur web freelance",
    template: "%s | Romain Wirth",
  },
  description:
    "Romain Wirth, développeur web freelance en Haute-Marne. Création de sites web pour artisans, indépendants et petites entreprises. WordPress ou sur mesure, adapté à votre budget.",
  keywords: [
    "Romain Wirth",
    "développeur web freelance",
    "création site web",
    "site vitrine",
    "artisan",
    "indépendant",
    "petite entreprise",
    "WordPress",
    "Haute-Marne",
    "Nogent",
    "Chaumont",
  ],
  openGraph: {
    title: "Romain Wirth — Développeur web freelance",
    description:
      "Romain Wirth, développeur web freelance en Haute-Marne. Création de sites web pour artisans, indépendants et petites entreprises. WordPress ou sur mesure.",
    url: "https://romainwirth.fr",
    siteName: "Romain Wirth — Développeur web freelance",
    images: [
      {
        url: "https://romainwirth.fr/og-image.png", // ton image d’aperçu
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
    images: ["https://romainwirth.fr/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const isAdmin = session?.user?.isAdmin === true;

  return (
    <html lang="fr" className={`${raleway.variable} ${dmSans.variable}`}>
      <body className="relative flex flex-col justify-center font-raleway min-h-screen cursor-default">

        <Navbar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
