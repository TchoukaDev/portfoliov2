// components/a-propos/Parcours.tsx
import Container from "../UI/Container";
import Section from "../UI/Section";
import SectionHeader from "../UI/SectionHeader";


export default function Background() {
  return (
    <Section alternate className="max-w-4xl mx-auto">
      < Container size="sm" >

        <SectionHeader title="Mon parcours" />

        <div className="space-y-6 text-gray-300">
          <p>
            {/* eslint-disable-next-line */}
            Pendant plusieurs années, j'ai été cadre de santé en milieu hospitalier. Un métier exigeant, où j'ai appris à écouter, organiser,
            et accompagner des équipes au quotidien.
          </p>

          <p>
            {/* eslint-disable-next-line */}
            En 2025, j'ai décidé de changer de voie.
            {/* eslint-disable-next-line */}
            J'ai suivi une formation intensive en développement web,
            {/* eslint-disable-next-line */}
            puis j'ai continué à apprendre par moi-même, projet après projet.
          </p>

          <p>
            {/* eslint-disable-next-line */}
            Aujourd'hui, je mets cette rigueur et cette capacité d'écoute
            au service de mes clients.
          </p>
        </div>

      </Container >
    </Section>
  );
}