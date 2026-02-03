// app/contact/page.tsx
// import ContactForm from "@/components/ContactForm/ContactForm";

export default function ContactPage() {
    return (
        <main className="px-6 py-20">
            <div className="max-w-2xl mx-auto">

                {/* Hero */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Contactez-moi
                    </h1>
                    <p className="text-gray-400">
                        Une question, un projet ? Écrivez-moi, je vous réponds rapidement.
                    </p>
                </div>

                {/* Ton formulaire existant */}
                {/* <ContactForm /> */}

                {/* Infos complémentaires */}
                <div className="mt-16 text-center text-sm text-gray-500">
                    <p>Vous pouvez aussi me contacter directement :</p>
                    <p className="mt-2">
                        <a href="mailto:contact@romainwirth.fr" className="text-blue-400 hover:text-blue-300">
                            contact@romainwirth.fr
                        </a>
                    </p>
                </div>

            </div>
        </main>
    );
}