// components/ui/Card.tsx
type CardProps = {
    children: React.ReactNode;
    hover?: boolean;
};

export default function Card({ children, hover = true }: CardProps) {
    return (
        <div className={`
      p-8 rounded-2xl border border-gray-700
      ${hover ? "hover:border-blue-500/50 hover:scale-102 bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300" : "bg-gray-800/20"}
    `}>
            {children}
        </div>
    );
}