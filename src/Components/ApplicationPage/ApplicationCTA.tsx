// components/ApplicationCTA.tsx
import Link from "next/link";
import Section from "../UI/Section";
import SectionHeader from "../UI/SectionHeader";
import Container from "../UI/Container";

export default function ApplicationCTA() {
    return (
        <Section className="text-center">
            <Container size="md">

                <SectionHeader title="Un projet en tête ?" subtitle="Discutons-en. Je vous dirai si je peux vous aider et comment." />

                <div>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors"
                    >
                        Démarrer mon projet
                    </Link>
                    <p className="text-xs text-gray-500 mt-3">Réponse sous 48h</p>
                </div>

            </Container>
        </Section>
    );
}
