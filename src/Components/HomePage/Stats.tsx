// components/HomePage/Stats.tsx
import Section from "../UI/Section";
import Container from "../UI/Container";
import SectionDivider from "../UI/SectionDivider";

const stats = [
    { value: "7+", label: "projets livrés" },
    { value: "100 %", label: "clients satisfaits" },
];

export default function Stats() {
    return (
        <Section>
            <Container size="md">
                <div className="grid grid-cols-2 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <p className="text-4xl font-bold text-blue-400">{stat.value}</p>
                            <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </Container>
            <SectionDivider />
        </Section>
    );
}
