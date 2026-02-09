// components/a-propos/HeroAbout.tsx
import Image from "next/image";
import Container from "../UI/Container";

export default function HeroAbout() {
    return (
        <header className="relative px-6 py-20">
            <Container size="md" className="text-center">


                {/* Titre */}
                <h1 className="mb-8">
                    Qui suis-je ?
                </h1>
                {/* Photo */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                    <Image
                        src="/assets/images/photopro_blue.png"
                        alt="Romain Wirth"
                        fill
                        className="rounded-full object-cover"
                        priority
                    />
                </div>


                <p className="text-2xl md:text-3xl font-bold text-white font-heading mb-4">Romain Wirth</p>
                {/* Sous-titre */}
                <p className="text-lg text-blue-400 mb-2">
                    Développeur web freelance
                </p>

                <p className="text-gray-400">
                    Ancien cadre de santé
                </p>

            </Container>
        </header >
    );
}