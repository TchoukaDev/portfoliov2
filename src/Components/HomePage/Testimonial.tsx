import { Quote } from "lucide-react";
import Section from "../UI/Section";
import Container from "../UI/Container";

// components/Testimonial.tsx
export default function Testimonial() {
    return (
        <Section alternate={true} className="text-center max-w-4xl mx-auto">
            <Container size="md">
                <Quote className="text-blue-500 mb-4 -scale-x-100" />
                <p className="text-lg md:text-xl text-gray-300 italic  max-w-2xl mx-auto">

                    Consciencieux, très disponible, toujours à la recherche du meilleur compromis, notre site est devenu très rapidement une référence dans notre spécialité !
                </p>
                <Quote className="text-blue-500 ml-auto mb-8" />
                <div >
                    <p className="text-white font-medium">Alain</p>
                    <p className="text-sm text-gray-500">
                        Club de marche aquatique Les Randonneurs des Sables
                    </p>
                </div>

            </Container>
        </Section>
    );
}