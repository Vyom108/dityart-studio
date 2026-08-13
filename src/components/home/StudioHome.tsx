import ContactSection from "@/components/home/ContactSection";
import HomeHero from "@/components/home/HomeHero";
import MotionPreferences from "@/components/home/MotionPreferences";
import Story from "@/components/home/Story";
import Footer from "@/components/layout/Footer";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import HomeProductExplorer from "@/components/home/HomeProductExplorer";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";

export default function StudioHome() {
  return (
    <MotionPreferences>
      <main>
        <HomeHero />
        <HomeProductExplorer />
        <Story />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <FaqSection />
        <ContactSection />
        <Footer />
      </main>
    </MotionPreferences>
  );
}
