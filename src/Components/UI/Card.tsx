// components/ui/Card.tsx
type CardProps = {
    children: React.ReactNode;
    hover?: boolean;
};

export default function Card({ children, hover = true }: CardProps) {
    return (
        <div className={`
      p-8 rounded-2xl border border-gray-700
      ${hover ? "hover:border-blue-500/50 hover:scale-102 bg-blue-900/20 hover:bg-blue-900/40 transition-all duration-300" : "bg-blue-400/10"}
    `}>
            {children}
        </div>
    );
}