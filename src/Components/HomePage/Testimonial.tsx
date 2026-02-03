import Section from "../UI/Section";

// components/Testimonial.tsx
export default function Testimonial() {
    return (
        <Section alternate={true} className="px-6 py-20">
            <div className="max-w-2xl mx-auto text-center">

                <p className="text-lg md:text-xl text-gray-300 italic mb-8">
                    {/* eslint-disable-next-line */}
                    "Consciencieux, très disponible, toujours à la recherche du meilleur compromis,
                    {/* eslint-disable-next-line */}
                    notre site est devenu très rapidement une référence dans notre spécialité !"
                </p>

                <div>
                    <p className="text-white font-medium">Alain</p>
                    <p className="text-sm text-gray-500">
                        Club de marche aquatique Les Randonneurs des Sables
                    </p>
                </div>

            </div>
        </Section>
    );
}