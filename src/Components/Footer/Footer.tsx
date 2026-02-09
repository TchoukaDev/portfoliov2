// components/Footer.tsx
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
        <footer className="border-t border-gray-800 bg-gray-950">
            <div className="max-w-5xl mx-auto px-6 py-12">

                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Logo + baseline */}
                    <div className="text-center md:text-left">
                        <p className="text-white font-bold text-lg mb-2">
                            Romain Wirth
                        </p>
                        <p className="text-gray-500 text-sm">
                            Développeur web freelance
                        </p>
                    </div>

                    {/* Liens */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                </div>

                {/* Séparateur */}
                <div className="border-t border-gray-800 mt-10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

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
                                    className="text-gray-500 hover:text-gray-400 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <span className="text-gray-700">|</span>
                            <a
                                href="mailto:contact@romainwirth.fr"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
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