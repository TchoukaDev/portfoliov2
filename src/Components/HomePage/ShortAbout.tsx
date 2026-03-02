// components/MiniAbout.tsx
import Image from "next/image";
import Link from "next/link";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";

export default function ShortAbout() {
    return (
        <Section>
            <Container size="md">

                <SectionHeader title="Qui suis-je ?" />

                <div className="mx-auto flex flex-col items-center gap-8 text-center">

                    {/* Photo */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden">
                        <Image
                            src="/assets/images/photopro_blue.png"
                            alt="Romain Wirth"
                            fill
                            className="object-cover"
                            loading="lazy"
                            sizes="(max-width: 768px) 128px, 160px"
                        />
                    </div>

                    {/* Texte */}
                    <div>
                        <p className="text-gray-400 mb-6 max-w-xl">
                            Ancien cadre de santé devenu développeur web, j&apos;ai gardé de ce métier l&apos;écoute, la rigueur et le sens du service.
                            Ce sont ces mêmes qualités que j&apos;applique aujourd&apos;hui à chaque projet.
                        </p>

                        <Link
                            href="/a-propos"
                            className="text-blue-400 hover:text-blue-300 text-sm"
                        >
                            En savoir plus sur mon parcours →
                        </Link>
                    </div>

                </div>
            </Container>
        </Section>
    );
}
