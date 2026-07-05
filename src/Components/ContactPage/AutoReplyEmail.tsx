import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Link,
  Tailwind,
} from "@react-email/components";

type AutoReplyEmailProps = {
  firstname: string;
};

export default function AutoReplyEmail({ firstname }: AutoReplyEmailProps) {
  return (
    <Html lang="fr">
      <Head />
      <Tailwind>
        <Body className="bg-slate-100 font-sans m-0 p-0">
          <Container className="mx-auto my-10 max-w-[600px]">
            {/* Header */}
            <Section className="bg-slate-900 rounded-t-2xl px-10 py-8 text-center">
              <Text className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em] m-0 mb-2">
                romainwirth.fr
              </Text>
              <Heading className="text-white text-2xl font-bold m-0 tracking-tight">
                Message bien reçu !
              </Heading>
            </Section>

            {/* Body */}
            <Section className="bg-white px-10 py-8">
              <Text className="text-slate-800 text-base leading-relaxed mt-0">
                Bonjour {firstname},
              </Text>
              <Text className="text-slate-700 text-sm leading-relaxed">
                Merci pour votre message. Je l&apos;ai bien reçu et je vous
                recontacterai dans les plus brefs délais (en général sous 24 à
                48h).
              </Text>
              <Text className="text-slate-700 text-sm leading-relaxed">
                En attendant, n&apos;hésitez pas à consulter mes réalisations
                pour vous faire une idée de mon travail.
              </Text>

              <Hr className="border-slate-100 my-6" />

              <Text className="text-slate-500 text-sm m-0">À très vite,</Text>
              <Text className="text-slate-900 font-semibold text-sm mt-1 mb-0">
                Romain Wirth
              </Text>
              <Link
                href="https://romainwirth.fr"
                className="text-indigo-600 text-sm no-underline"
              >
                romainwirth.fr
              </Link>
            </Section>

            {/* Footer */}
            <Section className="bg-slate-50 rounded-b-2xl px-10 py-5 text-center border-t border-slate-100">
              <Text className="text-xs text-slate-400 m-0">
                Vous recevez cet email car vous avez rempli le formulaire de
                contact sur{" "}
                <Link
                  href="https://romainwirth.fr/contact"
                  className="text-slate-500 no-underline"
                >
                  romainwirth.fr
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
