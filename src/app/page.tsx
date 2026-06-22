import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GrowthCoreBrain from "@/components/GrowthCoreBrain";
import Services from "@/components/Services";
import ForWho from "@/components/ForWho";
import HowItWorks from "@/components/HowItWorks";
import Plans from "@/components/Plans";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import ConditionsSection from "@/components/ConditionsSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GrowthCoreBrain />
      <Services />
      <ForWho />
      <HowItWorks />
      <Plans />
      <Stats />
      <Testimonials />
      <ConditionsSection />
      <FAQ />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  );
}
