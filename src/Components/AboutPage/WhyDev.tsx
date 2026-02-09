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
                        Ce qui m’a attiré dans le développement web, c’est son côté concret :
                        partir d’un besoin, construire une solution, et livrer quelque chose de fonctionnel et utile.
                    </p>

                    <p>
                        J’aime comprendre les problématiques, résoudre des problèmes techniques et voir le résultat de mon travail prendre forme.
                    </p>

                    <p>
                        Chaque projet est différent, et c’est ce qui rend ce métier stimulant au quotidien.
                    </p>
                </div>

            </Container >
        </Section>
    );
}