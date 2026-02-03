// components/ui/Header.tsx
type HeaderProps = {
    title: string;
    subtitle?: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
    return (
        <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-gray-400 max-w-xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}