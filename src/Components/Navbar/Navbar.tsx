// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/site-web", label: "Site web" },
    { href: "/application", label: "Application" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/a-propos", label: "À propos" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Ferme le menu au clic sur un lien
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    // Vérifie si le lien est actif
    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={handleLinkClick}
                        className="text-white font-bold text-lg"
                    >
                        Romain Wirth
                    </Link>

                    {/* Desktop : liens */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm transition-colors ${isActive(link.href)
                                    ? "text-blue-400"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive("/contact")
                                ? "bg-blue-500 text-white"
                                : "bg-blue-600 hover:bg-blue-500 text-white"
                                }`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile : burger */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                </div>
            </div>

            {/* Mobile : menu déroulant avec animation */}
            <div
                className={`
          md:hidden 
          overflow-hidden 
          transition-all 
          duration-300 
          ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
            >
                <div className="bg-gray-950 border-t border-gray-800 px-6 py-4 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className={`block transition-colors ${isActive(link.href)
                                ? "text-blue-400"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={handleLinkClick}
                        className={`block px-4 py-3 text-center font-medium rounded-lg transition-colors ${isActive("/contact")
                            ? "bg-blue-500 text-white"
                            : "bg-blue-600 hover:bg-blue-500 text-white"
                            }`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}