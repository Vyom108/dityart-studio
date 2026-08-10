"use client";

import { motion } from "framer-motion";
import PolaroidCard from "./PolaroidCard";
import DoodleArrow from "./DoodleArrow";
import Sparkle from "./Sparkle";

/**
 * The right-side floating collage.
 * - 6 polaroid cards floating around a center DityArt logo
 * - 2 doodle arrows
 * - girl illustration slot
 * - scattered sparkles
 *
 * Sizing/positioning is absolute within a fixed-aspect frame.
 * On mobile it collapses to a 2-column grid (handled by parent).
 */
export default function HeroCollage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* cream stamp behind the center */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, #FFD166 0%, #FFD166 60%, #FFF3D6 75%, transparent 78%)",
          filter: "blur(0.3px)",
        }}
      />

      {/* Center logo stamp */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-[0_20px_60px_rgba(255,179,0,0.30)] ring-1 ring-[#FFD166]/40 sm:h-32 sm:w-32">
          <div className="text-center leading-tight">
            <div className="font-display text-[15px] font-bold tracking-tight text-[#1F1F1F] sm:text-[17px]">
              DITY<span className="text-[#FFB300]">A</span>RT
            </div>
            <div className="font-body text-[8px] font-semibold tracking-[0.18em] text-[#1F1F1F]/60 sm:text-[9px]">
              STUDIO
            </div>
            <div className="mx-auto mt-1 h-[2px] w-6 rounded-full bg-[#FFB300]" />
            <div className="mt-1 font-display text-[8px] italic text-[#1F1F1F]/55 sm:text-[9px]">
              since 2019
            </div>
          </div>
        </div>
      </motion.div>

      {/* Doodle arrows pointing inward */}
      <DoodleArrow
        className="absolute left-[2%] top-[6%] hidden sm:block"
        color="#1F1F1F"
      />
      <DoodleArrow
        className="absolute bottom-[6%] right-[2%] hidden sm:block"
        flip
        color="#1F1F1F"
      />

      {/* 6 floating polaroid cards — phase-grouped so they breathe in pairs */}
      <div className="absolute left-[2%] top-[2%] sm:left-[3%] sm:top-[3%]">
        <PolaroidCard caption="Wallet Card" rotate={-8} phase={0} variant="cream" width="w-36 sm:w-40" />
      </div>

      <div className="absolute right-[2%] top-[5%] sm:right-[3%] sm:top-[6%]">
        <PolaroidCard caption="Fridge Magnet" rotate={6} phase={0} variant="amber" width="w-36 sm:w-40" />
      </div>

      <div className="absolute left-[1%] bottom-[14%] sm:left-[2%] sm:bottom-[10%]">
        <PolaroidCard caption="Custom Stickers" rotate={5} phase={1} variant="cream" width="w-36 sm:w-40" />
      </div>

      <div className="absolute right-[1%] bottom-[10%] sm:right-[2%] sm:bottom-[8%]">
        <PolaroidCard caption="Polaroid Photos" rotate={-5} phase={1} variant="ink" width="w-36 sm:w-40" />
      </div>

      <div className="absolute left-[18%] bottom-[1%] sm:left-[20%] sm:bottom-[2%]">
        <PolaroidCard caption="Gift Box" rotate={-3} phase={2} variant="amber" width="w-32 sm:w-36" />
      </div>

      <div className="absolute right-[18%] top-[28%] sm:right-[20%] sm:top-[32%]">
        <PolaroidCard caption="Custom Calendar" rotate={4} phase={2} variant="cream" width="w-32 sm:w-36" />
      </div>

      {/* Girl illustration slot — top-right, soft cream blob */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.4 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -right-2 top-[40%] hidden h-24 w-24 sm:block"
      >
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#FFF3D6] shadow-[0_10px_30px_rgba(255,179,0,0.20)] ring-1 ring-[#FFD166]/40">
          <svg
            width="44"
            height="44"
            viewBox="0 0 48 48"
            fill="none"
            className="text-[#1F1F1F]/55"
            aria-hidden
          >
            <circle cx="24" cy="18" r="8" fill="currentColor" opacity="0.85" />
            <path
              d="M8 42c0-8 7-14 16-14s16 6 16 14"
              fill="currentColor"
              opacity="0.85"
            />
          </svg>
        </div>
      </motion.div>

      {/* extra sparkles inside the collage */}
      <Sparkle
        size={14}
        color="#FFB300"
        className="absolute left-[44%] top-[8%]"
      />
      <Sparkle
        size={10}
        color="#FFD166"
        className="absolute left-[10%] top-[40%]"
      />
      <Sparkle
        size={12}
        color="#FFB300"
        className="absolute right-[8%] top-[48%]"
      />
      <Sparkle
        size={8}
        color="#FFD166"
        className="absolute bottom-[20%] left-[42%]"
      />
    </div>
  );
}
