"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import HeroPill from "@/components/hero/HeroPill";
import HeroHeading from "@/components/hero/HeroHeading";
import HeroTrustRow from "@/components/hero/HeroTrustRow";
import PrimaryButton from "@/components/hero/PrimaryButton";
import SecondaryButton from "@/components/hero/SecondaryButton";
import HeroBackground from "@/components/hero/HeroBackground";
import PaperTexture from "@/components/hero/PaperTexture";
import HeroCollage from "@/components/hero/HeroCollage";
import ScrollIndicator from "@/components/hero/ScrollIndicator";

const WHATSAPP_NUMBER = "919081913600";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DityArt%20Studio!%20I%27d%20like%20to%20customize%20something.`;

// Cubic-out easing as a readonly tuple — what framer-motion 12's `Variants` expects.
const EASE = [0.22, 1, 0.36, 1] as const;

// Shared base transitions used inline across the hero.
const baseTransition = { duration: 0.6, ease: EASE };
const collageTransition = { duration: 0.7, ease: EASE, delay: 0.18 };

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#FFFDF7] pb-24 pt-28 sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-40"
    >
      <HeroBackground />
      <PaperTexture />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[40%_60%] lg:gap-16">
          {/* LEFT */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...baseTransition, delay: 0 }}
            >
              <HeroPill>Rajkot&rsquo;s Creative Studio</HeroPill>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...baseTransition, delay: 0.06 }}
              className="mt-7"
            >
              <HeroHeading />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...baseTransition, delay: 0.12 }}
              className="mt-7 max-w-[52ch] text-[15px] leading-7 text-[#1F1F1F]/75 sm:text-[17px] sm:leading-8 lg:text-lg lg:leading-[1.7]"
            >
              From handcrafted gifts and personalized keepsakes to creative
              branding, we transform your ideas into beautiful creations made
              with love.
            </motion.p>

           <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...baseTransition, delay: 0.18 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <PrimaryButton>Explore Collection</PrimaryButton>
              <SecondaryButton href={WHATSAPP_HREF}>
                Customize on WhatsApp
              </SecondaryButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...baseTransition, delay: 0.24 }}
            >
              <HeroTrustRow />
            </motion.div>
          </div>

          {/* RIGHT — collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={collageTransition}
            className="relative z-10"
          >
            <HeroCollage />
          </motion.div>
        </div>

        {/* bottom scroll indicator */}
        <div className="flex justify-center">
          <ScrollIndicator />
        </div>
      </Container>
    </section>
  );
}
