import Section from "@/Components/UI/Section";
import Container from "@/Components/UI/Container";
import LoginForm from "@/Components/AuthPage/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connexion",
  robots: { index: false },
};

export default function LoginPage() {
  return (
    <main>
      <Section className="opacity-100">
        <Container size="md">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">Connexion</h1>
            <p className="text-gray-400">Accès à l&apos;espace d&apos;administration</p>
          </div>
          <LoginForm />
        </Container>
      </Section>
    </main>
  );
}
