// components/a-propos/CTAAbout.tsx
import Link from "next/link";
import Section from "../UI/Section";
import Container from "../UI/Container";
import Button from "../UI/Button";
import SectionHeader from "../UI/SectionHeader";

export default function AboutCTA() {
    return (
        <Section className="text-center">
            <Container size="sm">
                <SectionHeader title="Envie de travailler ensemble ?" subtitle=" Discutons de votre projet. Premier échange gratuit et sans engagement." />

                <Button asChild>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors">
                        Me contacter
                    </Link>
                </Button>
            </Container>
        </Section>
    );
}