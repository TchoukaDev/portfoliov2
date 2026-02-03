// components/a-propos/Parcours.tsx
import Section from "../UI/Section";


export default function Background() {
  return (
    <Section className="px-6 py-20 bg-gray-900/30">
      < div className="max-w-2xl mx-auto" >

        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
          Mon parcours
        </h2>

        <div className="space-y-6 text-gray-300">
          <p>4
            {/* eslint-disable-next-line */}
            Pendant plusieurs années, j'ai été cadre de santé en milieu hospitalier.
            {/* eslint-disable-next-line */}
            Un métier exigeant, où j'ai appris à écouter, organiser,
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

      </div >
    </Section>
  );
}