// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { logoutAction } from "@/actions/auth";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/sites-web", label: "Sites web" },
    { href: "/applications", label: "Applications" },
    { href: "/a-propos", label: "À propos" },
];

export default function Navbar({ isLoggedIn, isAdmin }: { isLoggedIn: boolean; isAdmin: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);
    const handleLinkClick = () => setIsOpen(false);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
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

                    {/* Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm transition-all duration-300 border-b-2 ${isActive(link.href)
                                    ? "text-blue-400 border-blue-500"
                                    : "text-gray-400 hover:text-white border-transparent"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {isLoggedIn && (
                            <>
                                <div className="w-px h-4 bg-gray-700" aria-hidden="true" />
                                {isAdmin && (
                                    <Link
                                        href="/admin"
                                        className="text-sm text-gray-400 hover:text-white transition-colors border border-gray-700 hover:border-gray-500 rounded-lg px-3 py-1.5"
                                    >
                                        Admin
                                    </Link>
                                )}
                                <form action={logoutAction}>
                                    <button
                                        type="submit"
                                        className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                                    >
                                        Déconnexion
                                    </button>
                                </form>
                            </>
                        )}

                        <Link
                            href="/contact"
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive("/contact")
                                ? "bg-blue-500 text-white border border-gray-300"
                                : "bg-blue-600 hover:bg-blue-500 text-white"
                                }`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Burger (mobile) */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                </div>
            </div>

            {/* Menu mobile déroulant */}
            <div
                className={`
                    md:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <div className="bg-gray-950 border-t border-gray-800 px-6 py-4 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className={`block transition-all duration-300 border-b-2 ${isActive(link.href)
                                ? "text-blue-400 border-blue-500"
                                : "text-gray-400 hover:text-white border-transparent"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {isLoggedIn && (
                        <div className="border-t border-gray-800 pt-4 space-y-4">
                            {isAdmin && (
                                <Link
                                    href="/admin"
                                    onClick={handleLinkClick}
                                    className="block text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    Espace admin
                                </Link>
                            )}
                            <form action={logoutAction}>
                                <button
                                    type="submit"
                                    onClick={handleLinkClick}
                                    className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Déconnexion
                                </button>
                            </form>
                        </div>
                    )}

                    <Link
                        href="/contact"
                        onClick={handleLinkClick}
                        className={`block px-4 py-3 text-center font-medium rounded-lg transition-colors ${isActive("/contact")
                            ? "bg-blue-500 text-white"
                            : "bg-blue-600 hover:bg-blue-500 text-white border border-gray-300"
                            }`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
