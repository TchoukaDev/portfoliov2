// components/a-propos/Parcours.tsx
import Container from "../UI/Container";
import Section from "../UI/Section";
import SectionHeader from "../UI/SectionHeader";


export default function Background() {
  return (
    <Section alternate className="max-w-4xl mx-auto opacity-100">
      < Container size="sm" >

        <SectionHeader title="Mon parcours" />

        <div className="space-y-6 text-gray-300">
          <p>

            Pendant plusieurs années, j’ai travaillé comme cadre de santé en milieu hospitalier.
            Un métier exigeant, où j’ai appris à écouter, organiser et accompagner des équipes dans des contextes complexes et contraints.
          </p>

          <p>
            En 2025, j’ai choisi d’orienter mon parcours vers le développement web.
            Après une formation initiale, j’ai poursuivi mon apprentissage de manière autonome, en réalisant des projets concrets et en production.
          </p>

          <p>
            Aujourd’hui, je mets cette rigueur, cette capacité d’analyse et cette qualité d’écoute au service de mes clients.
          </p>
        </div>

      </Container >
    </Section>
  );
}