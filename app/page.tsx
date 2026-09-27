import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Idea from "@/components/Idea";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Materials from "@/components/Materials";
import Enquire from "@/components/Enquire";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Idea />
        <Philosophy />
        <Services />
        <Projects />
        <Materials />
        <Enquire />
      </main>
    </>
  );
}
