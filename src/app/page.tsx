import Hero from "@/Components/HomePage/Hero";
import Services from "@/Components/HomePage/Services";
import ShortAbout from "@/Components/HomePage/ShortAbout";
import Testimonial from "@/Components/HomePage/Testimonial";
import FinalCTA from "@/Components/HomePage/FinalCTA";

export default function Home() {

  return (
    <main>
      <Hero />
      <Services />
      <ShortAbout />
      <Testimonial />
      <FinalCTA />
    </main>
  )
}