// components/HomePage/ReassuranceBar.tsx
import { MessagesSquare, Clock, MapPin } from "lucide-react";
import Container from "../UI/Container";

const items = [
    { icon: <MessagesSquare size={18} />, label: "Premier échange gratuit" },
    { icon: <Clock size={18} />, label: "Réponse sous 48h" },
    { icon: <MapPin size={18} />, label: "Basé en Haute-Marne" },
];

export default function ReassuranceBar() {
    return (
        <div className="border-y border-gray-800 bg-gray-900/30">
            <Container size="lg">
                <ul className="flex flex-col items-center justify-center gap-4 px-6 py-4 text-sm text-gray-300 sm:flex-row sm:gap-10">
                    {items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <span className="text-blue-400">{item.icon}</span>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    );
}
