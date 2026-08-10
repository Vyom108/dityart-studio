"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

import FloatingConfetti from "@/components/decor/FloatingConfetti";
import PaperBlob from "@/components/decor/PaperBlob";
import SectionSparkles from "@/components/decor/SectionSparkles";
import Sparkle from "@/components/decor/Sparkle";
import Squiggle from "@/components/decor/Squiggle";
import DoodleArrow from "@/components/decor/DoodleArrow";
import { site } from "@/config/site";

const EASE = [0.22, 1, 0.36, 1] as const;
const SETTLE = [0.16, 0.84, 0.32, 1] as const;

type Stat = { value: string; label: string; accent: string };

const STATS: Stat[] = [
  { value: `${new Date().getFullYear() - site.since}+`, label: "years in the studio", accent: "#ffb300" },
  { value: "1.2k+", label: "creations handcrafted", accent: "#1f1f1f" },
  { value: "5★", label: "average client joy", accent: "#ffb300" },
];

type Photo = {
  src: string;
  alt: string;
  caption: string;
  className: string;
  rotate: number;
  priority?: boolean;
};

const PHOTOS: Photo[] = [
  {
    src: "/images/products/Website Products_20260705_210559_0008.png",
    alt: "DityArt Studio handcrafted creation on the workbench",
    caption: "Made by hand",
    className: "left-[2%] top-[6%] z-20 w-[44%] sm:w-[40%]",
    rotate: -7,
    priority: true,
  },
  {
    src: "/images/products/Website Products_20260705_210559_0005.png",
    alt: "A stack of DityArt Studio personalized keepsakes",
    caption: "Every piece, a story",
    className: "right-[3%] top-[26%] z-30 w-[50%] sm:w-[46%]",
    rotate: 6,
  },
  {
    src: "/images/products/Website Products_20260705_210559_0018.png",
    alt: "DityArt Studio sticker sheet on a desk",
    caption: "Tiny details matter",
    className: "left-[10%] bottom-[4%] z-20 w-[42%] sm:w-[40%]",
    rotate: 4,
  },
];

/**
 * Story — the "About" anchor on the home page.
 *
 * Composition:
 *   1. Atmospheric background (paper blobs + section sparkles + doodles)
 *   2. Kicker chip + hand-underlined headline + body copy (left column)
 *   3. Polaroid photo cluster (right column)
 *   4. Stats row across the bottom
 *   5. Inline "Share your story" CTA
 */
export default function Story() {
  return (
    <section
      id="story"
      className="relative isolate overflow-hidden bg-[#fff8e9] py-24 sm:py-32"
    >
      {/* Atmospheric background */}
      <div aria-hidden className="paper-grain absolute inset-0 opacity-25" />
      <PaperBlob
        color="#ffb300"
        size="h-[30rem] w-[30rem]"
        className="-left-40 -top-32"
        blur={80}
        opacity={0.22}
      />
      <PaperBlob
        color="#ffd166"
        size="h-80 w-80"
        className="-right-24 bottom-20"
        blur={70}
        opacity={0.45}
        shape="oval"
      />
      <PaperBlob
        color="#fff3d6"
        size="h-72 w-72"
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        blur={60}
        opacity={0.5}
      />
      <SectionSparkles seed={11} density="med" palette="amber" />

      {/* Decorative confetti */}
      <FloatingConfetti
        className="left-[7%] top-[18%]"
        shape="plus"
        color="#ffd166"
        size={14}
        opacity={0.6}
        variant="rise"
        duration={6}
      />
      <FloatingConfetti
        className="right-[10%] top-[28%]"
        shape="dot"
        color="#ffb300"
        size={10}
        opacity={0.7}
        variant="drift"
        duration={5.5}
        delay={0.4}
      />
      <FloatingConfetti
        className="left-[14%] bottom-[16%]"
        shape="asterisk"
        color="#e99500"
        size={16}
        opacity={0.45}
        variant="sway"
        duration={7}
        delay={0.9}
      />
      <FloatingConfetti
        className="right-[14%] bottom-[22%]"
        shape="triangle"
        color="#ffd166"
        size={11}
        opacity={0.55}
        variant="rise"
        duration={6.4}
        delay={0.2}
      />

      {/* Doodle accents */}
      <Squiggle
        className="absolute right-[6%] top-[14%] hidden -rotate-[10deg] opacity-60 lg:block"
        color="#dd8d00"
        width={86}
        height={22}
        variant="wave"
      />
      <Squiggle
        className="absolute left-[5%] bottom-[18%] hidden rotate-[6deg] opacity-50 lg:block"
        color="#1f1f1f"
        width={70}
        height={20}
        variant="tilt"
      />
      <DoodleArrow
        className="absolute right-[8%] bottom-[14%] hidden -rotate-[14deg] lg:block"
        color="#a46c00"
        width={90}
        height={60}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        {/* TEXT column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-[#f1d496] bg-[#fffdf7] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#805500] sm:text-xs"
          >
            <Sparkles size={14} fill="currentColor" />
            Our story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: SETTLE, delay: 0.1 }}
            className="mt-6 max-w-xl font-display text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#1f1f1f] sm:text-5xl lg:text-6xl"
          >
            Small studio.
            <br />
            <span className="hand-underline italic">Big love for detail.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-7 text-[#1f1f1f]/70 sm:text-lg sm:leading-8"
          >
            {site.name} began in {site.since} as a tiny desk, a stack of paper and the simple belief that ordinary gifts can feel extraordinary when they&rsquo;re made for a specific person. Today we&rsquo;re a small team of makers, illustrators and stationery lovers in {site.city}, still hand finishing every order.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
            className="mt-4 max-w-lg text-base leading-7 text-[#1f1f1f]/70 sm:text-lg sm:leading-8"
          >
            We work in small batches, check every colour by eye, and keep talking with you on WhatsApp until you have something you love. No mass production and no generic templates. We make each design for your story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.36 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1f1f1f] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_25px_rgba(31,31,31,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#363636] sm:text-base"
            >
              Share your story
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full border border-[#d7b46c] bg-white px-6 py-3.5 text-sm font-bold text-[#1f1f1f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fffdf7] sm:text-base"
            >
              See what we make
              <Heart size={17} fill="#ffb300" className="text-[#ffb300]" />
            </Link>
          </motion.div>
        </div>

        {/* PHOTO cluster — stacked polaroids */}
        <div className="relative mx-auto h-[28rem] w-full max-w-[34rem] sm:h-[32rem] lg:h-[34rem]">
          <div
            aria-hidden
            className="absolute inset-x-[4%] inset-y-[8%] rotate-[-3deg] rounded-[2.4rem] bg-[#ffd166]"
          />
          <div
            aria-hidden
            className="absolute inset-x-[8%] inset-y-[12%] rotate-[3deg] rounded-[2.2rem] border border-[#f0cc71] bg-[#ffb300]"
          />
          <Sparkle className="absolute right-[6%] top-[5%]" size={26} color="#ffb300" />
          <Sparkle className="absolute left-[4%] top-[34%]" size={15} color="#ffd166" />
          <Sparkle
            className="absolute right-[10%] bottom-[8%]"
            size={12}
            color="#e99500"
            opacity={0.8}
            variant="tiny-star"
          />
          <span
            aria-hidden
            className="absolute left-[6%] top-[8%] h-2 w-2 rounded-full bg-[#ffb300]"
          />
          <span
            aria-hidden
            className="absolute right-[12%] bottom-[14%] h-3 w-3 rounded-full bg-[#ffd166]"
            style={{ opacity: 0.7 }}
          />

          {PHOTOS.map((p) => (
            <Polaroid key={p.src} photo={p} />
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="relative mx-auto mt-20 grid max-w-5xl gap-6 px-5 sm:grid-cols-3 lg:px-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: SETTLE, delay: i * 0.1 }}
            className="relative flex flex-col items-center gap-2 rounded-[1.5rem] border border-[#f0e4cc] bg-white/80 px-5 py-6 text-center shadow-[0_12px_30px_rgba(80,52,7,0.08)] backdrop-blur-sm"
          >
            <span
              aria-hidden
              className="absolute -top-2 left-1/2 h-2 w-12 -translate-x-1/2 rounded-full"
              style={{ background: s.accent, opacity: 0.85 }}
            />
            <p
              className="font-display text-3xl font-black tracking-tight sm:text-4xl"
              style={{ color: s.accent }}
            >
              {s.value}
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1f1f1f]/55 sm:text-sm">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------- */
/* Polaroid — one tilted photo card in the cluster                           */
/* ------------------------------------------------------------------------- */
function Polaroid({ photo }: { photo: Photo }) {
  return (
    <motion.div
      className={`absolute ${photo.className}`}
      initial={{ opacity: 0, scale: 0.94, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: EASE }}
      style={{ rotate: photo.rotate }}
    >
      <div className="overflow-hidden rounded-[1.35rem] border-[6px] border-white bg-white p-1 shadow-[0_22px_45px_rgba(66,43,4,0.16)]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[0.85rem]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority={photo.priority}
            sizes="(max-width: 1024px) 44vw, 22vw"
            className="object-cover"
          />
        </div>
      </div>
      <p className="mt-2 text-center font-display text-sm font-bold text-[#1f1f1f] sm:text-base">
        {photo.caption}
      </p>
    </motion.div>
  );
}





