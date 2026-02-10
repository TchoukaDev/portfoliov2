"use client";

import useSectionObserver from "@/hooks/useSectionObserver";

// components/ui/.tsx
type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    alternate?: boolean;
    className?: string;
};

export default function Section({ children, alternate = false, className = "", ...props }: SectionProps) {
    useSectionObserver();
    if (alternate) {
        return (
            <section {...props} className={`
                px-6 py-20 rounded-2xl relative opacity-0 transition-opacity duration-500 w-[calc(100%-10px)] mx-auto
                bg-gray-900/30
                ${className}
            `}> <div className="absolute -inset-[3px] rounded-2xl bg-linear-to-r from-blue-500 via-purple-500 to-cyan-400 bg-size-[200%_200%] gradient-xy -z-10" />
                <div className="absolute inset-0 rounded-2xl bg-gray-900 -z-10"></div>
                <div className="relative">{children}</div>
            </section>
        );
    }
    return (
        <section {...props} className={`
      px-6 py-24 rounded-2xl relative opacity-0 transition-opacity duration-500 w-[calc(100%-10px)] mx-auto
            
      ${className}
    `}>
            {children}
        </section>
    );
}