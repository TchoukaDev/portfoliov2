"use client";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
    value: number;
    duration?: number; // ms
};

/**
 * Compteur animé de 0 à `value`, déclenché lorsqu'il entre dans le viewport.
 * Respecte prefers-reduced-motion (saut immédiat à la valeur finale).
 */
export default function Counter({ value, duration = 1500 }: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const startedRef = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        const effectiveDuration = prefersReduced ? 0 : duration;

        const animate = () => {
            if (startedRef.current) return;
            startedRef.current = true;

            const start = performance.now();
            const tick = (now: number) => {
                const progress =
                    effectiveDuration === 0
                        ? 1
                        : Math.min((now - start) / effectiveDuration, 1);
                const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
                setCount(Math.round(eased * value));
                if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animate();
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [value, duration]);

    return <span ref={ref}>{count}</span>;
}
