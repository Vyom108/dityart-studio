"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Sparkle from "@/components/decor/Sparkle";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fffdf7] pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-28">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute left-[-8rem] top-24 h-64 w-64 rounded-full bg-[#ffd166]/25 blur-3xl"
      />

      <div
        aria-hidden
        className="absolute right-[-6rem] top-20 h-72 w-72 rounded-full bg-[#ffb300]/15 blur-3xl"
      />

      {/* Decorative sparkles */}
      <Sparkle
        className="absolute left-[5%] top-[31%] hidden sm:block"
        size={18}
        color="#ffd166"
        opacity={0.8}
      />

      <Sparkle
        className="absolute right-[8%] top-[20%] hidden lg:block"
        size={24}
        color="#ffb300"
        opacity={0.65}
      />

      <Sparkle
        className="absolute right-[13%] bottom-[16%] hidden sm:block"
        size={13}
        color="#ffd166"
        opacity={0.7}
        variant="tiny-star"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
        {/* =========================
            MOBILE HERO ARTWORK
            ========================= */}
        <div className="order-1 lg:hidden">
          <HeroArtwork />
        </div>

        {/* =========================
            HERO CONTENT
            ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            ease: EASE,
          }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          {/* Badge */}
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#f1d496] bg-[#fff8e8] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#805500] sm:text-xs lg:mx-0">
            <Sparkles size={14} fill="currentColor" />
            Made with heart in Rajkot
          </p>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-7 text-[#1f1f1f]/70 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
            Personalized gifts, kids stationery, and business details made for
            your people and your story.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-7 lg:justify-start">
            <Link
              href="#products"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1f1f1f] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_25px_rgba(31,31,31,0.16)] transition hover:-translate-y-0.5 hover:bg-[#363636] sm:px-6 sm:text-base"
            >
              Explore products

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/custom-order"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#d7b46c] bg-white px-5 py-3 text-sm font-bold text-[#1f1f1f] transition hover:bg-[#fff8e9] sm:px-6 sm:text-base"
            >
              Share your idea

              <Heart
                size={17}
                fill="#ffb300"
                className="text-[#ffb300]"
              />
            </Link>
          </div>

          {/* Tagline */}
          <p className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[#1f1f1f]/60 sm:mt-7 lg:justify-start">
            <span className="text-[#ffb300]">✦ ✦ ✦</span>

            <span>Tiny Details, Big Feelings.</span>
          </p>
        </motion.div>

        {/* =========================
            DESKTOP HERO ARTWORK
            ========================= */}
        <div className="order-2 hidden lg:block">
          <HeroArtwork />
        </div>
      </div>

      {/* Browse products */}
      <a
        href="#products"
        className="relative mx-auto mt-6 flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#785300] transition hover:text-[#1f1f1f] sm:mt-8"
      >
        <ArrowDown size={14} />
        Browse products
      </a>
    </section>
  );
}

function HeroArtwork() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.75,
        ease: EASE,
        delay: 0.08,
      }}
      className="relative mx-auto h-[17rem] w-full max-w-[37rem] sm:h-[27rem] lg:h-[31rem]"
    >
      {/* Back yellow card */}
      <div
        aria-hidden
        className="absolute inset-x-[8%] inset-y-[10%] rotate-[-3deg] rounded-[2.4rem] bg-[#ffd166]"
      />

      {/* Front orange card */}
      <div
        aria-hidden
        className="absolute inset-x-[12%] inset-y-[13%] rotate-[3deg] rounded-[2.2rem] bg-[#ffb300]"
      />

      {/* Main artwork box */}
      <div className="absolute inset-x-[16%] inset-y-[16%] overflow-hidden rounded-[2rem] bg-[#fff3d6]">
        {/* Girl */}
        <Image
          src="/images/hero/girl-story-cutout.png"
          alt="DityArt Studio girl illustration"
          width={512}
          height={512}
          priority
          sizes="(max-width: 600px) 52vw, 32vw"
          className="absolute -bottom-[10%] -left-[12%] h-[112%] w-auto max-w-none object-contain object-bottom"
        />

        {/* Horizontal logo */}
        <div
          className="
            absolute
            right-[0%]
            top-1/2
            flex
            w-[55%]
            -translate-y-1/2
            items-center
            justify-center
            rounded-2xl
            bg-white/5
            px-2
            py-2
            text-center
            sm:right-[2%]
            sm:w-[58%]
            sm:px-3
            sm:py-3
          "
        >
          <Image
            src="/images/brand/horizontal-logo.png"
            alt="DityArt Studio"
            width={3600}
            height={1800}
            priority
            sizes="(max-width: 600px) 28vw, 15vw"
            className="
              h-auto
              w-full
              max-w-[18rem]
              translate-x-3
              object-contain
              sm:translate-x-4
              lg:max-w-[20rem]
              lg:translate-x-5
            "
          />
        </div>
      </div>

      {/* Artwork sparkles */}
      <Sparkle
        className="absolute left-[10%] top-[18%]"
        size={17}
        color="#ffd166"
        opacity={0.9}
      />

      <Sparkle
        className="absolute left-[18%] bottom-[13%]"
        size={13}
        color="#ffb300"
        opacity={0.75}
        variant="tiny-star"
      />

      <Sparkle
        className="absolute right-[16%] top-[11%]"
        size={22}
        color="#ffb300"
      />

      <Sparkle
        className="absolute right-[8%] top-[37%]"
        size={14}
        color="#ffd166"
        opacity={0.85}
        variant="tiny-star"
      />

      <Sparkle
        className="absolute bottom-[9%] right-[20%]"
        size={18}
        color="#ffb300"
        opacity={0.7}
      />

      <Sparkle
        className="absolute bottom-[15%] left-[13%]"
        size={14}
        color="#ffd166"
      />
    </motion.div>
  );
}