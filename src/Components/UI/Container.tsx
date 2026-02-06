// components/ui/Container.tsx
type ContainerProps = {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
} & React.HTMLAttributes<HTMLDivElement>;

export default function Container({ children, size = "lg", ...props }: ContainerProps) {
    const sizes = {
        sm: "max-w-2xl",
        md: "max-w-3xl",
        lg: "max-w-7xl",
    };

    return (
        <div className={`${sizes[size]} mx-auto`} {...props}>
            {children}
        </div>
    );
}