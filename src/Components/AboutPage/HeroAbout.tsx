// components/a-propos/HeroAbout.tsx
import Image from "next/image";

export default function HeroAbout() {
    return (
        <header className="relative px-6 py-20">
            <div className="max-w-3xl mx-auto text-center">

                {/* Photo */}
                <div className="relative w-40 h-40 mx-auto mb-8">
                    <Image
                        src="/assets/images/photopro_blue.png"
                        alt="Romain Wirth"
                        fill
                        className="rounded-full object-cover"
                        priority
                    />
                </div>

                {/* Nom */}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Romain Wirth
                </h1>

                {/* Sous-titre */}
                <p className="text-lg text-blue-400 mb-2">
                    Développeur web freelance
                </p>

                <p className="text-gray-400">
                    Ancien cadre de santé en reconversion
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />
            </div>
        </header>
    );
}