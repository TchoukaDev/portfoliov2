import Container from "@/Components/UI/Container";
import Section from "@/Components/UI/Section";
import SectionHeader from "@/Components/UI/SectionHeader";

// app/mentions-legales/page.tsx
export default function MentionsLegales() {
    return (
        <main>
            <Section>
                <Container size="md">

                    <SectionHeader title="Mentions légales" />

                    <div className="space-y-10 text-gray-400">

                        {/* Éditeur */}
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">
                                Éditeur du site
                            </h2>
                            <p>Romain Wirth</p>
                            <p>Entrepreneur individuel</p>
                            <p>SIRET : 51336126100029</p>
                            <p>Adresse : 172 Rue du Mal de Lattre de Tassigny, 52800 Nogent</p>
                            <p>Email : contact@romainwirth.fr</p>
                        </section>

                        {/* Hébergeur */}
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">
                                Hébergement
                            </h2>
                            <p>Vercel Inc.</p>
                            <p>440 N Barranca Ave #4133</p>
                            <p>Covina, CA 91723, États-Unis</p>
                            <p>Site : vercel.com</p>
                        </section>

                        {/* Propriété intellectuelle */}
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">
                                Propriété intellectuelle
                            </h2>
                            <p>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                L'ensemble du contenu de ce site (textes, images, code) est la propriété
                                exclusive de Romain Wirth, sauf mention contraire. Toute reproduction,
                                même partielle, est interdite sans autorisation préalable.
                            </p>
                        </section>

                        {/* Responsabilité */}
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">
                                Responsabilité
                            </h2>
                            <p>
                                Les informations présentes sur ce site sont fournies à titre indicatif.
                                Romain Wirth ne saurait être tenu responsable des erreurs ou omissions,
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                ni des dommages résultant de l'utilisation des informations contenues sur ce site.
                            </p>
                        </section>

                        {/* Contact */}
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">
                                Contact
                            </h2>
                            <p>
                                Pour toute question concernant ce site, vous pouvez me contacter à
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                l'adresse : <a href="mailto:contact@romainwirth.fr" className="text-blue-400 hover:text-blue-300">contact@romainwirth.fr</a>
                            </p>
                        </section>

                    </div>

                </Container>
            </Section>
        </main>
    );
}