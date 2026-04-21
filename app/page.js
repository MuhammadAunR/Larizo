import AboutSection from "@/components/AboutSection";
import Collection from "@/components/Collection";
import ExperienceSection from "@/components/ExperienceSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <header>
        <HeroSection />
      </header>

      <main>
        <Collection />
        <section className="bg-surface">
          <ExperienceSection />
        </section>
        <AboutSection />
      </main>
      
      <footer>
        <FooterSection />
      </footer>
    </>
  )
}
