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
  Row,
  Column,
  Tailwind,
} from "@react-email/components";
import { ContactFormData } from "@/lib/zod-schemas";

export default function ContactEmail({
  firstname,
  name,
  email,
  telephone,
  prefersPhone,
  prefersEmail,
  message,
}: ContactFormData) {
  const date = new Date().toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

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
                Nouveau message de contact
              </Heading>
            </Section>

            {/* Body */}
            <Section className="bg-white px-10 py-8">

              {/* Coordonnées */}
              <Text className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mt-0 mb-4">
                Coordonnées
              </Text>

              <Row className="mb-3">
                <Column className="w-[120px]">
                  <Text className="text-xs text-slate-400 font-medium m-0 uppercase tracking-wide">Nom</Text>
                </Column>
                <Column>
                  <Text className="text-sm text-slate-900 font-semibold m-0">
                    {firstname} {name}
                  </Text>
                </Column>
              </Row>

              <Row className="mb-3">
                <Column className="w-[120px]">
                  <Text className="text-xs text-slate-400 font-medium m-0 uppercase tracking-wide">Email</Text>
                </Column>
                <Column>
                  <Link href={`mailto:${email}`} className="text-sm text-indigo-600 font-medium no-underline">
                    {email}
                  </Link>
                </Column>
              </Row>

              {telephone && (
                <Row className="mb-3">
                  <Column className="w-[120px]">
                    <Text className="text-xs text-slate-400 font-medium m-0 uppercase tracking-wide">Téléphone</Text>
                  </Column>
                  <Column>
                    <Link href={`tel:${telephone}`} className="text-sm text-indigo-600 font-medium no-underline">
                      {telephone}
                    </Link>
                  </Column>
                </Row>
              )}

              <Hr className="border-slate-100 my-6" />

              {/* Préférences de contact */}
              <Text className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mt-0 mb-4">
                Préférence de contact
              </Text>

              <Row>
                <Column className="w-[50%] pr-2">
                  {prefersPhone ? (
                    <Section className="bg-emerald-50 rounded-xl px-4 py-3 text-center">
                      <Text className="text-sm font-semibold text-emerald-700 m-0">
                        ✓ Téléphone
                      </Text>
                    </Section>
                  ) : (
                    <Section className="bg-slate-50 rounded-xl px-4 py-3 text-center">
                      <Text className="text-sm font-semibold text-slate-300 m-0">
                        ✗ Téléphone
                      </Text>
                    </Section>
                  )}
                </Column>
                <Column className="w-[50%] pl-2">
                  {prefersEmail ? (
                    <Section className="bg-emerald-50 rounded-xl px-4 py-3 text-center">
                      <Text className="text-sm font-semibold text-emerald-700 m-0">
                        ✓ Email
                      </Text>
                    </Section>
                  ) : (
                    <Section className="bg-slate-50 rounded-xl px-4 py-3 text-center">
                      <Text className="text-sm font-semibold text-slate-300 m-0">
                        ✗ Email
                      </Text>
                    </Section>
                  )}
                </Column>
              </Row>

              <Hr className="border-slate-100 my-6" />

              {/* Message */}
              <Text className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mt-0 mb-4">
                Message
              </Text>

              <Section className="bg-slate-50 rounded-xl px-6 py-5 border-l-4 border-indigo-500">
                <Text className="text-sm text-slate-700 leading-relaxed m-0 whitespace-pre-wrap">
                  {message}
                </Text>
              </Section>

            </Section>

            {/* Footer */}
            <Section className="bg-slate-50 rounded-b-2xl px-10 py-5 text-center border-t border-slate-100">
              <Text className="text-xs text-slate-400 m-0">
                Envoyé le{" "}
                <span className="text-slate-600 font-semibold">{date}</span>
                {" "}— formulaire de contact
              </Text>
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
