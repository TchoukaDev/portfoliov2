// components/a-propos/PourquoiDev.tsx
import Section from "../UI/Section";

export default function WhyDev() {
    return (
        <Section className="px-6 py-20">
            < div className="max-w-2xl mx-auto" >

                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
                    Pourquoi ce métier ?
                </h2>

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

            </div >
        </Section>
    );
}