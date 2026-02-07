// components/ui/Button.tsx
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    asChild?: boolean;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    children,
    variant = "primary",
    asChild = false,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = "inline-block px-8 py-4 font-medium rounded-xl transition-colors text-center cursor-pointer";

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-500 text-white",
        secondary: "bg-gray-800 hover:bg-gray-700 text-gray-300",
    };

    const styles = `${baseStyles} ${variants[variant]} ${className}`;

    const Comp = asChild ? Slot : "button";

    return (
        <Comp className={styles} {...props}>
            {children}
        </Comp>
    );
}