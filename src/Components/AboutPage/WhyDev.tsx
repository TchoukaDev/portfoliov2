// components/a-propos/PourquoiDev.tsx
import Container from "../UI/Container";
import Section from "../UI/Section";
import SectionHeader from "../UI/SectionHeader";

export default function WhyDev() {
    return (
        <Section className="px-6 py-20">
            < Container size="sm" >

                <SectionHeader title="Pourquoi ce métier ?" />

                <div className="space-y-6 text-gray-300">
                    <p>
                        {/* eslint-disable-next-line */}
                        Ce qui m'a attiré dans le développement web,
                        {/* eslint-disable-next-line */}
                        c'est le côté concret : partir de rien et créer
                        quelque chose qui fonctionne, qui est utile.
                    </p>

                    <p>
                        {/* eslint-disable-next-line */}
                        J'aime résoudre des problèmes, comprendre comment
                        les choses marchent, et voir le résultat de mon travail.
                    </p>

                    <p>
                        {/* eslint-disable-next-line */}
                        Chaque projet est différent. C'est ce qui rend ce métier passionnant.
                    </p>
                </div>

            </Container >
        </Section>
    );
}