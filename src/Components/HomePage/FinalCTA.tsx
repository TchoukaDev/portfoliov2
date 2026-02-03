// components/CTAFinal.tsx
import Link from "next/link";
import Section from "../UI/Section";

export default function FinalCTA() {
    return (
        <Section className="px-6 py-20 text-center">

            < h2 className="text-2xl md:text-3xl font-bold text-white mb-4" >
                Un projet en tête ?
            </h2 >

            <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Discutons-en. Premier échange gratuit et sans engagement.
            </p>

            <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors"
            >
                Me contacter
            </Link>

        </Section>
    );
}