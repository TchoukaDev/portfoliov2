import Section from "@/Components/UI/Section";
import Container from "@/Components/UI/Container";
import RegisterForm from "@/Components/AuthPage/RegisterForm";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inscription",
  robots: { index: false },
};

export default function RegisterPage() {
  return (
    <main>
      <Section className="opacity-100">
        <Container size="md">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">Créer un compte</h1>
            <p className="text-gray-400">Accès réservé à l&apos;administrateur</p>
          </div>
          <RegisterForm />
          <p className="text-center text-gray-400 text-sm mt-6">
            Déjà un compte ?{" "}
            <Link href="/login" className="text-blue-400 hover:text-blue-300">
              Se connecter
            </Link>
          </p>
        </Container>
      </Section>
    </main>
  );
}
