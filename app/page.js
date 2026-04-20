import Collection from "@/components/Collection";
import ExperienceSection from "@/components/ExperienceSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Collection />

        <section className="bg-surface">
        <ExperienceSection />
        </section>
      </main>
      <footer>
        <FooterSection/>
      </footer>
    </>
  )
}
