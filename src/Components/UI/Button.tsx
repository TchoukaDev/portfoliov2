// components/ui/Button.tsx

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    onClick?: (e: unknown) => void;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
};

export default function Button({ onClick, children, variant = "primary", ...props }: ButtonProps) {
    const baseStyles = "inline-block px-8 py-4 font-medium rounded-xl transition-colors cursor-pointer";

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-500 text-white",
        secondary: "bg-gray-800 hover:bg-gray-700 text-gray-300",
    };

    const className = `${baseStyles} ${variants[variant]}`;


    return <button onClick={onClick} {...props} className={className}>{children}</button>;
}