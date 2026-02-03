// components/ui/Container.tsx
type ContainerProps = {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
};

export default function Container({ children, size = "lg" }: ContainerProps) {
    const sizes = {
        sm: "max-w-2xl",
        md: "max-w-3xl",
        lg: "max-w-6xl",
    };

    return (
        <div className={`${sizes[size]} mx-auto`}>
            {children}
        </div>
    );
}