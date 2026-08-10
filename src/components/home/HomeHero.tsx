"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type MouseEvent } from "react";
import { ArrowDown, ArrowRight, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import SectionSparkles from "@/components/decor/SectionSparkles";
import DoodleArrow from "@/components/decor/DoodleArrow";
import FloatingConfetti from "@/components/decor/FloatingConfetti";
import Sparkle from "@/components/decor/Sparkle";
import Squiggle from "@/components/decor/Squiggle";

const EASE = [0.22, 1, 0.36, 1] as const;
const SETTLE = [0.16, 0.84, 0.32, 1] as const;

type ProductMomentProps = {
  alt: string;
  className: string;
  label: string;
  rotate: number;
  src: string;
  priority?: boolean;
};

function ProductMoment({ alt, className, label, rotate, src, priority = false }: ProductMomentProps) {
  // Cursor-tilt: when the user hovers, the polaroid tilts slightly toward the cursor.
  const wrapRef = useRef<HTMLDivElement | null>(null);
  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const dy = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--tilt-x", `${dy * -4}deg`);
    el.style.setProperty("--tilt-y", `${dx * 6}deg`);
  }
  function onLeave() {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", `0deg`);
    el.style.setProperty("--tilt-y", `0deg`);
  }

  return (
    <motion.div
      ref={wrapRef}
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.92, y: 22 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      whileHover={{ y: -10 }}
      style={{
        rotate,
        // CSS variables drive a subtle cursor tilt while hovered.
        transform: `rotate(var(--tilt-z, ${rotate}deg)) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))`,
        transition: "transform 280ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="overflow-hidden rounded-[1.45rem] border-[7px] border-white bg-[#fff3d6] shadow-[0_22px_45px_rgba(66,43,4,0.16)] transition-shadow duration-300 hover:shadow-[0_30px_60px_rgba(66,43,4,0.22)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            preload={priority}
            sizes={priority ? "(max-width: 1024px) 88vw, 40vw" : "(max-width: 640px) 44vw, 20vw"}
            className="object-cover"
          />
        </div>
      </div>
      <p className="mt-2 text-center font-display text-sm font-bold text-[#1f1f1f] sm:text-base">{label}</p>
    </motion.div>
  );
}

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fffdf7] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24">
      {/* Atmospheric background */}
      <div aria-hidden className="absolute left-[-10rem] top-28 h-72 w-72 rounded-full bg-[#ffd166]/30 blur-3xl" />
      <div aria-hidden className="absolute right-[-9rem] top-12 h-96 w-96 rounded-full bg-[#ffb300]/20 blur-3xl" />
      <div aria-hidden className="paper-grain absolute inset-0 opacity-20" />
      <SectionSparkles seed={3} density="med" palette="amber" />

      {/* Existing sparkles, kept */}
      <motion.div className="absolute left-[5%] top-[30%] hidden sm:block" animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}><Sparkle size={21} color="#ffd166" /></motion.div>
      <motion.div className="absolute left-[10%] top-[68%] hidden lg:block" animate={{ y: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}><Sparkle size={15} color="#ffb300" /></motion.div>
      <motion.div className="absolute right-[7%] top-[18%] hidden lg:block" animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}><Sparkle size={34} color="#ffb300" /></motion.div>
      <motion.div className="absolute right-[12%] top-[59%] hidden sm:block" animate={{ y: [0, 7, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}><Sparkle size={18} color="#ffd166" /></motion.div>
      <span aria-hidden className="absolute left-[19%] top-[18%] hidden h-2 w-2 rounded-full bg-[#ffb300]/50 lg:block" />
      <span aria-hidden className="absolute right-[22%] top-[76%] hidden h-3 w-3 rounded-full bg-[#ffd166] lg:block" />

      {/* New floating confetti */}
      <FloatingConfetti className="left-[42%] top-[12%]" shape="plus" color="#ffd166" size={12} opacity={0.7} variant="rise" duration={6.4} delay={0.2} />
      <FloatingConfetti className="right-[36%] top-[64%]" shape="asterisk" color="#ffb300" size={14} opacity={0.55} variant="sway" duration={7.2} delay={0.8} />
      <FloatingConfetti className="left-[28%] bottom-[8%]" shape="triangle" color="#e99500" size={10} opacity={0.6} variant="drift" duration={5.6} delay={0.4} />
      <FloatingConfetti className="right-[24%] bottom-[10%]" shape="diamond" color="#ffb300" size={9} opacity={0.65} variant="rise" duration={6.0} delay={1.1} />

      {/* Doodle arrows for that handcrafted feel */}
      <DoodleArrow className="absolute left-[3%] bottom-[18%] hidden -rotate-[12deg] lg:block" color="#a46c00" width={100} height={66} />
      <Squiggle className="absolute right-[3%] top-[40%] hidden opacity-60 lg:block" color="#dd8d00" width={70} height={20} variant="tilt" />
      <Squiggle className="absolute left-[18%] top-[10%] hidden opacity-50 lg:block" color="#1f1f1f" width={60} height={16} variant="loop" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.81fr_1.19fr] lg:gap-12 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="relative z-10 pt-5 lg:pt-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#f1d496] bg-[#fff8e8] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#805500] sm:text-xs">
            <Sparkles size={14} fill="currentColor" /> Made with heart in Rajkot
          </p>
          <h1 className="mt-6 max-w-xl font-display text-[3.15rem] font-black leading-[0.94] tracking-[-0.06em] text-[#1f1f1f] sm:text-6xl lg:text-[4.35rem]">
            Where Creativity,
            <br />
            <span className="relative inline-block text-[#e99500]">
              <HandUnderline>Meets Craftmanship</HandUnderline>
            </span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-[#1f1f1f]/70 sm:text-lg sm:leading-8">
            Personalized gifts, memory keepsakes, sticker stories, and creative
            details made to feel unmistakably yours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary href="#category-atlas">Explore creations</CtaPrimary>
            <CtaSecondary href="/#contact">Share your idea</CtaSecondary>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#1f1f1f]/60">
            <span className="flex text-[#ffb300]">✦ ✦ ✦</span>
            Where Creativity Meets Craftsmanship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.12 }}
          className="relative mx-auto h-[27rem] w-full max-w-[43rem] sm:h-[34rem] lg:h-[38rem] lg:max-w-none"
        >
          <div aria-hidden className="absolute inset-x-[5%] inset-y-[7%] rotate-[-3deg] rounded-[2.6rem] bg-[#ffd166]" />
          <div aria-hidden className="absolute inset-x-[9%] inset-y-[10%] rotate-[3deg] rounded-[2.4rem] border border-[#f0cc71] bg-[#ffb300]" />
          <div aria-hidden className="absolute inset-x-[13%] inset-y-[14%] rounded-[2.2rem] bg-[#fff3d6] shadow-[0_22px_45px_rgba(104,70,11,0.12)]" />
          <span aria-hidden className="absolute left-[17%] top-[20%] h-[58%] w-[68%] rounded-[45%] bg-[#ffe68f]" />
          <Sparkle className="absolute left-[18%] top-[13%]" size={25} color="#ffb300" />
          <Sparkle className="absolute right-[18%] top-[17%]" size={17} color="#ffd166" />
          <Sparkle className="absolute bottom-[19%] right-[16%]" size={21} color="#ffb300" />
          <Sparkle className="absolute bottom-[28%] left-[13%]" size={14} color="#ffd166" />
          <Sparkle className="absolute right-[28%] top-[40%]" size={10} color="#ffb300" opacity={0.7} variant="tiny-star" />
          <Sparkle className="absolute left-[24%] top-[44%]" size={9} color="#e99500" opacity={0.7} variant="tiny-star" />
          <ProductMoment
            src="/images/products/Website Products_20260705_210559_0001.png"
            alt="DityArt Studio custom sticker collection"
            label="Sticker stories"
            priority
            rotate={-8}
            className="left-[1%] top-[18%] z-20 w-[38%] sm:left-[3%]"
          />
          <ProductMoment
            src="/images/products/Website Products_20260705_210558_0000.png"
            alt="DityArt Studio personalized wallet card"
            label="Personalized gifts"
            rotate={3}
            className="left-[27%] top-[10%] z-30 w-[52%]"
          />
          <ProductMoment
            src="/images/products/Website Products_20260705_210559_0003.png"
            alt="DityArt Studio polaroid photo keepsake"
            label="Photo memories"
            rotate={8}
            className="right-[1%] bottom-[17%] z-20 w-[38%] sm:right-[3%]"
          />
          <DoodleArrow
            color="#1f1f1f"
            className="absolute left-[5%] top-[61%] z-10 hidden rotate-[9deg] sm:block"
          />
          <DoodleArrow
            color="#1f1f1f"
            flip
            className="absolute right-[5%] top-[6%] z-10 hidden -rotate-[22deg] sm:block"
          />
          <div className="absolute bottom-[6%] left-[13%] z-40 flex items-center gap-2 rounded-2xl border border-[#f1d496] bg-[#fffdf7] px-3 py-2 shadow-[0_12px_24px_rgba(80,52,7,0.12)]">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#ffb300] text-[#1f1f1f]">
              <Sparkles size={16} />
            </span>
            <span className="text-[11px] font-bold leading-tight text-[#1f1f1f]">
              Customized
              <br />
              with love
            </span>
          </div>
        </motion.div>
      </div>
      <a
        href="#category-atlas"
        className="relative mx-auto mt-2 flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#785300] transition hover:text-[#1f1f1f]"
      >
        <ArrowDown size={14} /> Explore our three creative worlds
      </a>
    </section>
  );
}

/* ------------------------------------------------------------------------- */
/* HandUnderline — animates a soft amber underline drawing in from left      */
/* ------------------------------------------------------------------------- */
function HandUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span>{children}</span>
      <motion.span
        aria-hidden
        className="absolute -bottom-1 left-1 h-2 w-[93%] origin-left rotate-[-2deg] rounded-full bg-[#ffd166]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: SETTLE, delay: 0.7 }}
      />
    </span>
  );
}

/* ------------------------------------------------------------------------- */
/* CtaPrimary — ink pill that pulses a soft amber glow ring on mount         */
/* ------------------------------------------------------------------------- */
function CtaPrimary({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center gap-2 rounded-full bg-[#1f1f1f] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_25px_rgba(31,31,31,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#363636] sm:text-base"
    >
      <motion.span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(255,179,0,0.45), transparent)" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 0.6, 0], scale: [0.9, 1.25, 1.45] }}
        transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
      />
      {children}
      <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

function CtaSecondary({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-full border border-[#d7b46c] bg-white px-6 py-3.5 text-sm font-bold text-[#1f1f1f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff8e9] sm:text-base"
    >
      {children}
      <Heart size={17} fill="#ffb300" className="text-[#ffb300]" />
    </Link>
  );
}




