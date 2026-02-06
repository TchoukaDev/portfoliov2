// components/realisations/CTARealisations.tsx
import Link from "next/link";
import Section from "../UI/Section";
import Button from "../UI/Button";
import SectionHeader from "../UI/SectionHeader";
import Container from "../UI/Container";

export default function RealisationCTA() {
    return (
        <Section className="text-center ">
            <Container size="sm">
                <SectionHeader title="Votre projet pourrait être le prochain" subtitle="Discutons de ce que je peux créer pour vous." />

                <Button asChild>
                    <Link href="/contact">
                        Me contacter
                    </Link>
                </Button>
            </Container>
        </Section>
    );
}