import Collection from "@/components/Collection";
import ExperienceSection from "@/components/ExperienceSection";
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
    </>
  )
}
