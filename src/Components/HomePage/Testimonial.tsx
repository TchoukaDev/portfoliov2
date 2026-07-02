import Link from "next/link";
import { Star } from "lucide-react";
import Section from "../UI/Section";
import Container from "../UI/Container";
import Button from "../UI/Button";

const testimonials = [
    {
        quote: "Consciencieux, très disponible, toujours à la recherche du meilleur compromis, notre site est devenu très rapidement une référence dans notre spécialité !",
        author: "Alain",
        role: "Club de marche aquatique Les Randonneurs des Sables",
        rating: 5,
    },
    {
        quote: "Très satisfaite du travail fourni pour la création de mon site internet. Un développeur professionnel et passionné, de bon conseil et à l'écoute de mes besoins, disponible et très réactif. Le résultat dépasse largement mes attentes.",
        author: "Clothilde Baudet",
        role: "Psychologue clinicienne",
        rating: 5,
    },
    // TODO: ajouter ici tes nouveaux témoignages au même format :
    // { quote: "", author: "", role: "", rating: 5 },
];

// Initiales à partir du nom (ex. "Clothilde Baudet" -> "CB")
function getInitials(name: string) {
    return name
        .split(" ")
        .map((word) => word[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

export default function Testimonial() {
    return (
        <Section alternate={true}>
            <Container size="lg">
                <h2 className="mb-12 text-center">Ce qu&apos;ils disent</h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between rounded-2xl border border-gray-800 bg-gray-900/50 p-8"
                        >
                            <div>
                                <div className="mb-4 flex gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={
                                                i < t.rating
                                                    ? "fill-blue-400 text-blue-400"
                                                    : "text-gray-600"
                                            }
                                        />
                                    ))}
                                </div>
                                <p className="italic text-gray-200">{t.quote}</p>
                            </div>

                            <div className="mt-6 flex items-center gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/20 font-semibold text-blue-300">
                                    {getInitials(t.author)}
                                </div>
                                <div>
                                    <p className="font-medium text-white">{t.author}</p>
                                    <p className="text-sm text-gray-400">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button asChild>
                        <Link href="/contact">Lancez votre projet</Link>
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
