// components/CTAFinal.tsx
import Link from "next/link";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";
import Button from "../UI/Button";

export default function FinalCTA() {
    return (
        <Section className="text-center">
            <Container size="md">
                <SectionHeader title="Un projet en tête ?" subtitle="Premier échange gratuit et sans engagement." />

                <div>
                    <Button asChild>
                        <Link href="/contact">
                            Démarrer mon projet
                        </Link>
                    </Button>
                    <p className="text-xs text-gray-500 mt-3">Réponse sous 48h</p>
                </div>
            </Container>
        </Section>
    );
}
