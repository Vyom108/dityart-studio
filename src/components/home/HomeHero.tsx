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
      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}
      <div
        aria-hidden
        className="absolute left-[-8rem] top-24 h-64 w-64 rounded-full bg-[#ffd166]/25 blur-3xl"
      />

      <div
        aria-hidden
        className="absolute right-[-6rem] top-20 h-72 w-72 rounded-full bg-[#ffb300]/15 blur-3xl"
      />

      <div
        aria-hidden
        className="absolute left-1/2 top-[45%] h-72 w-72 -translate-x-1/2 rounded-full bg-[#ffd166]/10 blur-3xl"
      />

      {/* =========================================================
          PAGE DECORATIVE SPARKLES
      ========================================================= */}

      {/* Existing sparkle */}
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

      {/* Extra sparkle 1 */}
      <motion.div
        aria-hidden
        className="absolute left-[11%] top-[17%] hidden sm:block"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 8, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkle
          size={13}
          color="#ffb300"
          opacity={0.7}
          variant="tiny-star"
        />
      </motion.div>

      {/* Extra sparkle 2 */}
      <motion.div
        aria-hidden
        className="absolute left-[18%] top-[46%] hidden lg:block"
        animate={{
          y: [0, 7, 0],
          rotate: [0, -10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <Sparkle size={16} color="#ffd166" opacity={0.7} />
      </motion.div>

      {/* Extra sparkle 3 */}
      <motion.div
        aria-hidden
        className="absolute right-[18%] top-[34%] hidden sm:block"
        animate={{
          y: [0, -6, 0],
          rotate: [0, 12, 0],
          opacity: [0.35, 0.85, 0.35],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.1,
        }}
      >
        <Sparkle
          size={12}
          color="#ffb300"
          opacity={0.65}
          variant="tiny-star"
        />
      </motion.div>

      {/* Extra sparkle 4 */}
      <motion.div
        aria-hidden
        className="absolute right-[5%] top-[53%] hidden lg:block"
        animate={{
          y: [0, 9, 0],
          rotate: [0, -8, 0],
          opacity: [0.3, 0.75, 0.3],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      >
        <Sparkle size={18} color="#ffd166" opacity={0.65} />
      </motion.div>

      {/* Extra sparkle 5 */}
      <motion.div
        aria-hidden
        className="absolute left-[7%] bottom-[27%] hidden lg:block"
        animate={{
          y: [0, -7, 0],
          rotate: [0, 10, 0],
          opacity: [0.25, 0.7, 0.25],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.4,
        }}
      >
        <Sparkle
          size={14}
          color="#ffb300"
          opacity={0.55}
          variant="tiny-star"
        />
      </motion.div>

      {/* Extra sparkle 6 */}
      <motion.div
        aria-hidden
        className="absolute right-[10%] bottom-[25%] hidden sm:block"
        animate={{
          y: [0, 6, 0],
          rotate: [0, -12, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.9,
        }}
      >
        <Sparkle
          size={13}
          color="#ffd166"
          opacity={0.65}
        />
      </motion.div>

      {/* Extra sparkle 7 */}
      <motion.div
        aria-hidden
        className="absolute left-[25%] top-[12%] hidden lg:block"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.8, 0.25],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.7,
        }}
      >
        <Sparkles
          size={14}
          fill="currentColor"
          className="text-[#ffd166]"
        />
      </motion.div>

      {/* Extra sparkle 8 */}
      <motion.div
        aria-hidden
        className="absolute right-[25%] top-[14%] hidden lg:block"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.75, 0.25],
        }}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        <Sparkles
          size={12}
          fill="currentColor"
          className="text-[#ffb300]"
        />
      </motion.div>

      {/* Extra sparkle 9 */}
      <motion.div
        aria-hidden
        className="absolute left-[14%] bottom-[18%] hidden sm:block"
        animate={{
          y: [0, -5, 0],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Sparkle
          size={11}
          color="#ffd166"
          opacity={0.6}
          variant="tiny-star"
        />
      </motion.div>

      {/* Extra sparkle 10 */}
      <motion.div
        aria-hidden
        className="absolute right-[30%] bottom-[17%] hidden lg:block"
        animate={{
          y: [0, 7, 0],
          rotate: [0, 15, 0],
          opacity: [0.25, 0.7, 0.25],
        }}
        transition={{
          duration: 4.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      >
        <Sparkle
          size={13}
          color="#ffb300"
          opacity={0.55}
        />
      </motion.div>

      {/* =========================================================
          HERO WRAPPER

          MOBILE:
          Artwork
          ↓
          Content

          DESKTOP:
          Artwork centered
          ↓
          Content centered
      ========================================================= */}
      <div
        className="
          relative
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          gap-8
          px-5
          sm:gap-10
          lg:gap-5
          lg:px-8
        "
      >
        {/* =========================================================
            HERO ARTWORK
        ========================================================= */}
        <div className="order-1 w-full">
          <HeroArtwork />
        </div>

        {/* =========================================================
            HERO CONTENT
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            ease: EASE,
          }}
          className="
            order-2
            mx-auto
            w-full
            max-w-3xl
            text-center
          "
        >
          {/* Badge */}
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#f1d496] bg-[#fff8e8] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#805500] sm:text-xs">
            <Sparkles size={14} fill="currentColor" />
            Made with heart in Rajkot
          </p>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-7 text-[#1f1f1f]/70 sm:mt-6 sm:text-lg sm:leading-8">
            Personalized gifts, kids stationery, and business details made for
            your people and your story.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-7">
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
          <p className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[#1f1f1f]/60 sm:mt-7">
            <span className="text-[#ffb300]">✦ ✦ ✦</span>

            <span>Tiny Details, Big Feelings.</span>
          </p>
        </motion.div>
      </div>

      {/* =========================================================
          BROWSE PRODUCTS
      ========================================================= */}
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

      {/* =========================================================
          ARTWORK SPARKLES
      ========================================================= */}

      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [0, 8, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[18%]"
      >
        <Sparkle
          size={17}
          color="#ffd166"
          opacity={0.9}
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 5, 0],
          rotate: [0, -10, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
        className="absolute left-[18%] bottom-[13%]"
      >
        <Sparkle
          size={13}
          color="#ffb300"
          opacity={0.75}
          variant="tiny-star"
        />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          rotate: [0, 12, 0],
          opacity: [0.45, 1, 0.45],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.9,
        }}
        className="absolute right-[16%] top-[11%]"
      >
        <Sparkle
          size={22}
          color="#ffb300"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [0, -8, 0],
          opacity: [0.4, 0.85, 0.4],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.3,
        }}
        className="absolute right-[8%] top-[37%]"
      >
        <Sparkle
          size={14}
          color="#ffd166"
          opacity={0.85}
          variant="tiny-star"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 6, 0],
          rotate: [0, 10, 0],
          opacity: [0.35, 0.8, 0.35],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
        className="absolute bottom-[9%] right-[20%]"
      >
        <Sparkle
          size={18}
          color="#ffb300"
          opacity={0.7}
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -5, 0],
          opacity: [0.35, 0.8, 0.35],
        }}
        transition={{
          duration: 3.7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.6,
        }}
        className="absolute bottom-[15%] left-[13%]"
      >
        <Sparkle
          size={14}
          color="#ffd166"
        />
      </motion.div>

      {/* Extra artwork sparkle */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.8, 0.25],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute left-[27%] top-[8%]"
      >
        <Sparkles
          size={12}
          fill="currentColor"
          className="text-[#ffd166]"
        />
      </motion.div>

      {/* Extra artwork sparkle */}
      <motion.div
        animate={{
          y: [0, 5, 0],
          rotate: [0, -12, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.1,
        }}
        className="absolute right-[27%] bottom-[6%]"
      >
        <Sparkle
          size={11}
          color="#ffb300"
          opacity={0.65}
          variant="tiny-star"
        />
      </motion.div>
    </motion.div>
  );
}