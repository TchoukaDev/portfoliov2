"use client";
import { useEffect } from "react";

export default function useSectionObserver() {
    useEffect(() => {
        const sections = document.querySelectorAll("section");

        // Garde : si pas de sections, on sort
        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in");
                        // Optionnel : arrêter d'observer une fois animé
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // 0.1 souvent plus fiable que 0
                rootMargin: "0px 0px 50px 0px" // Optionnel: déclencher un peu avant
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);
}