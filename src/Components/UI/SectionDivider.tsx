"use client";
import { useEffect, useRef, useState } from "react";

export default function SectionDivider() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-linear-to-r from-transparent via-blue-500/60 to-transparent transition-[width] duration-700 ease-out ${visible ? "w-full" : "w-0"}`}
        />
    );
}
