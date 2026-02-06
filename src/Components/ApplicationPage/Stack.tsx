// components/application/Technologies.tsx
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiPostgresql,
    SiMongodb,
    SiFirebase,
    SiStrapi,
    SiGit,
    SiVercel
} from "react-icons/si";
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionHeader from "../UI/SectionHeader";

export default function Stack() {
    const stacks = [
        {
            category: "Frontend",
            techs: [
                { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
                { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },
            ],
        },
        {
            category: "Backend & BDD",
            techs: [
                { icon: <SiPostgresql className="text-[#4169E1]" />, name: "PostgreSQL" },
                { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
                { icon: <SiFirebase className="text-[#FFCA28]" />, name: "Firebase" },
            ],
        },
        {
            category: "Outils",
            techs: [
                { icon: <SiStrapi className="text-[#4945FF]" />, name: "Strapi" },
                { icon: <SiGit className="text-[#F05032]" />, name: "Git" },
                { icon: <SiVercel />, name: "Vercel" },
            ],
        },
    ];

    return (
        <Section alternate className="max-w-4xl mx-auto">
            <Container size="md">

                <SectionHeader title="Technologies utilisées" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {stacks.map((stack, index) => (
                        <div key={index}>
                            <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                                {stack.category}
                            </h3>
                            <div className="space-y-3">
                                {stack.techs.map((tech, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 text-gray-300"
                                    >
                                        <span className="text-xl">{tech.icon}</span>
                                        <span>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </Container>
        </Section>
    );
}