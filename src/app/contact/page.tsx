// app/contact/page.tsx
import ContactForm from "@/Components/ContactPage/ContactForm";
import Container from "@/Components/UI/Container";
import Section from "@/Components/UI/Section";

export default function ContactPage() {
    return (
        <main>
            <Section>
                <Container size="md">

                    {/* Hero */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Contactez-moi
                        </h1>
                        <p className="text-gray-400">
                            Une question, un projet ? Écrivez-moi, je vous réponds sous 24 heures.
                        </p>
                    </div>

                    {/* Ton formulaire existant */}
                    <ContactForm />

                    {/* Infos complémentaires */}
                    <div className="mt-16 text-center text-sm text-gray-500">
                        <p>Vous pouvez aussi me contacter directement :</p>
                        <p className="mt-2">
                            <a href="mailto:contact@romainwirth.fr" className="text-blue-400 hover:text-blue-300">
                                contact@romainwirth.fr
                            </a>
                        </p>
                    </div>

                </Container>
            </Section>
        </main>
    );
}