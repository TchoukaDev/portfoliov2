import Container from "@/Components/UI/Container";
import Section from "@/Components/UI/Section";
import SectionHeader from "@/Components/UI/SectionHeader";

// app/politique-confidentialite/page.tsx
export default function PolitiqueConfidentialite() {
    return (
        <main>
            <Section>
                <Container size="md">

                    <SectionHeader title="Politique de confidentialité" />

                    <div className="space-y-10 text-gray-400">

                        {/* Introduction */}
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">
                                Introduction
                            </h2>
                            <p>
                                Cette politique de confidentialité explique comment vos données
                                personnelles sont collectées et utilisées sur ce site.
                            </p>
                        </section>

                        {/* Données collectées */}
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">
                                Données collectées
                            </h2>
                            <p className="mb-4">
                                Les seules données collectées sont celles que vous fournissez
                                volontairement via le formulaire de contact :
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Nom et prénom</li>
                                <li>Numéro de téléphone et/ou adresse email</li>
                                <li>Message</li>
                            </ul>
                        </section>

                        {/* Utilisation */}
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">
                                Utilisation des données
                            </h2>
                            <p>
                                Vos données sont utilisées uniquement pour répondre à votre demande
                                de contact. Elles ne sont ni vendues, ni partagées avec des tiers.
                            </p>
                        </section>

                        {/* Conservation */}
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">
                                Conservation des données
                            </h2>
                            <p>
                                Vos données sont conservées uniquement le temps nécessaire au
                                traitement de votre demande, puis supprimées.
                            </p>
                        </section>

                        {/* Cookies */}
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">
                                Cookies
                            </h2>
                            <p>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Ce site n'utilise pas de cookies de tracking ou de publicité.
                                Seuls des cookies techniques essentiels au fonctionnement du site
                                peuvent être utilisés.
                            </p>
                        </section>

                        {/* Droits */}
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">
                                Vos droits
                            </h2>
                            <p className="mb-4">
                                Conformément au RGPD, vous disposez des droits suivants :
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <li>Droit d'accès à vos données</li>

                                <li>Droit de rectification</li>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <li>Droit à l'effacement</li>
                                <li>Droit à la portabilité</li>
                            </ul>
                            <p className="mt-4">
                                Pour exercer ces droits, contactez-moi à :
                                <a href="mailto:contact@romainwirth.fr" className="text-blue-400 hover:text-blue-300 ml-1">
                                    contact@romainwirth.fr
                                </a>
                            </p>
                        </section>

                        {/* Mise à jour */}
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">
                                Mise à jour
                            </h2>
                            <p>
                                Cette politique peut être mise à jour à tout moment.
                                Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}.
                            </p>
                        </section>

                    </div>
                </Container>
            </Section>
        </main>
    );
}