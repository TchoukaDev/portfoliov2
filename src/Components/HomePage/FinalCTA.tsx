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
                <SectionHeader title="Un projet en tête ?" subtitle="Discutons-en. Premier échange gratuit et sans engagement." />

                <Button asChild>
                    <Link href="/contact">
                        Me contacter
                    </Link>
                </Button>
            </Container>
        </Section>
    );
}