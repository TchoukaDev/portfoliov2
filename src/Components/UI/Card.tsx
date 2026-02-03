// components/ui/Card.tsx
type CardProps = {
    children: React.ReactNode;
    hover?: boolean;
};

export default function Card({ children, hover = true }: CardProps) {
    return (
        <div className={`
      p-8 rounded-2xl border border-gray-800 bg-gray-900/50
      ${hover ? "hover:border-blue-500/50 hover:scale-102 hover:bg-gray-900 transition-all duration-300" : ""}
    `}>
            {children}
        </div>
    );
}