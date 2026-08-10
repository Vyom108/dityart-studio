import ContactSection from "@/components/home/ContactSection";
import CategoryJourney from "@/components/home/CategoryJourney";
import HomeHero from "@/components/home/HomeHero";
import MotionPreferences from "@/components/home/MotionPreferences";
import Story from "@/components/home/Story";
import FloatingConfetti from "@/components/decor/FloatingConfetti";
import Sparkle from "@/components/decor/Sparkle";
import Footer from "@/components/layout/Footer";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";

/**
 * The home page composition:
 *   1. Hero (cluster of three product polaroids + headline + CTAs)
 *   2. CategoryJourney (editorial introduction → three category sections)
 *   3. Story (id="story" — anchors the nav "About" link)
 *   4. Gallery (id="gallery" — anchors the nav "Gallery" link)
 *   5. ContactSection ("Have an idea?" closing CTA)
 *   6. Footer
 *
 * The ambient decoration (fixed sparkles + page-wide paper grain) is
 * sprinkled around the edges to unify the visual language across the
 * whole page without crowding any individual section.
 */
export default function StudioHome() {
  return (
    <MotionPreferences>
      <>
      {/* Ambient fixed sparkles — float across the whole scroll.
          Subtle by design: low opacity, only a few visible at a time. */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <FloatingConfetti
          className="left-[4%] top-[18%]"
          shape="dot"
          color="#ffb300"
          size={6}
          opacity={0.55}
          variant="drift"
          duration={6}
        />
        <FloatingConfetti
          className="right-[6%] top-[36%]"
          shape="plus"
          color="#ffd166"
          size={10}
          opacity={0.45}
          variant="sway"
          duration={7}
          delay={0.6}
        />
        <FloatingConfetti
          className="left-[5%] top-[60%]"
          shape="asterisk"
          color="#e99500"
          size={12}
          opacity={0.4}
          variant="rise"
          duration={6.8}
          delay={1.1}
        />
        <FloatingConfetti
          className="right-[5%] top-[78%]"
          shape="triangle"
          color="#ffd166"
          size={9}
          opacity={0.5}
          variant="drift"
          duration={5.6}
          delay={0.3}
        />
        <Sparkle
          size={14}
          color="#ffb300"
          opacity={0.45}
          variant="tiny-star"
          className="absolute left-[3%] top-[42%]"
        />
        <Sparkle
          size={11}
          color="#ffd166"
          opacity={0.4}
          variant="tiny-star"
          className="absolute right-[4%] top-[56%]"
        />
      </div>

      {/* Page-wide paper grain — unifies the texture */}
      <div
        aria-hidden
        className="paper-grain pointer-events-none fixed inset-0 z-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='280' height='280'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.96 0 0 0 0 0.86 0 0 0 0 0.62 0 0 0 0.22 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          backgroundSize: "280px 280px",
        }}
      />

      <main className="relative z-10">
        <HomeHero />
        <Story />
        <CategoryJourney />
        <WhyChooseUs />
        <HowItWorks />
        <FeaturedProducts />
        <Testimonials />
        <FaqSection />
        <ContactSection />
        <Footer />
      </main>
      </>
    </MotionPreferences>
  );
}


