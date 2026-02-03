// components/MiniAbout.tsx
import Image from "next/image";
import Link from "next/link";
import Section from "../UI/Section";

export default function ShortAbout() {
    return (
        <Section className="px-6 py-20">
            < div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10" >

                {/* Photo */}
                < div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0" >
                    <Image
                        src="/assets/images/photopro_blue.png"
                        alt="Romain Wirth"
                        fill
                        className="rounded-full object-cover"
                    />
                </div >

                {/* Texte */}
                < div className="text-center md:text-left" >
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                        Qui suis-je ?
                    </h2>

                    <p className="text-gray-400 mb-6">
                        {/* eslint-disable-next-line */}
                        Ancien cadre de santé, j'ai choisi le développement web
                        pour créer des outils utiles et concrets. Je mets la même rigueur
                        dans mes projets que dans mon ancien métier.
                    </p>

                    <Link
                        href="/a-propos"
                        className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                        En savoir plus sur mon parcours →
                    </Link>
                </div >

            </div >
        </Section>
    );
}