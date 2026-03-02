// components/ui/Card.tsx
type HoveredCardProps = {
    children: React.ReactNode;
};

export default function HoveredCard({ children }: HoveredCardProps) {
    return (
        <div className={`
      p-8 rounded-2xl border border-gray-800 bg-gray-900
      hover:border-blue-500/50 hover:-translate-y-1 hover:bg-blue-950/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300
    `}>
            {children}
        </div>
    );
}