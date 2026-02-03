// components/ui/.tsx
type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    alternate?: boolean;
    className?: string;
};

export default function Section({ children, alternate = false, className = "", ...props }: SectionProps) {
    return (
        <section {...props} className={`
      px-6 py-20 rounded relative
      ${alternate ? "bg-gray-900/30 shadow-sm shadow-gray-900" : ""}
      ${className}
    `}>
            {children}
        </section>
    );
}