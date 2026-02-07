// components/ui/Card.tsx
type HoveredCardProps = {
    children: React.ReactNode;
};

export default function HoveredCard({ children }: HoveredCardProps) {
    return (
        <div className={`
      p-8 rounded-2xl border border-gray-800 bg-gray-900/50
      hover:border-blue-500/50 hover:scale-102 hover:bg-gray-900 transition-all duration-300
    `}>
            {children}
        </div>
    );
}