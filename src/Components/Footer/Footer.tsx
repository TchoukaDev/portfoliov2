// components/Footer.tsx
import { MapPin } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/sites-web", label: "Sites web" },
    { href: "/applications", label: "Applications" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
];

const legalLinks = [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Politique de confidentialité" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer role="contentinfo" className="border-t border-gray-800 bg-gray-950">
            <div className="max-w-5xl mx-auto px-6 py-12">

                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Logo + baseline */}
                    <div className="text-center md:text-left">
                        <p className="text-white font-bold text-lg mb-2">
                            Romain Wirth
                        </p>
                        <p className="text-gray-400 text-sm mb-2">
                            Développeur web freelance
                        </p>
                        <p className="flex items-center justify-left text-gray-400 text-sm"><MapPin className="w-4 h-4 mr-2" />Nogent, Haute-Marne</p>
                    </div>

                    {/* Liens */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-300 hover:text-white text-sm transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                </div>

                {/* Séparateur */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

                        {/* Copyright */}
                        <p>
                            © {currentYear} Romain Wirth. Tous droits réservés.
                        </p>

                        {/* Liens légaux + Contact */}
                        <div className="flex flex-wrap justify-center items-center gap-4">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-400 hover:text-gray-300 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <span className="text-gray-700">|</span>
                            <a
                                href="mailto:contact@romainwirth.fr"
                                className="text-gray-300 hover:text-blue-400 transition-colors"
                            >
                                contact@romainwirth.fr
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
}