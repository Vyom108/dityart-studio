"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type PolaroidCardProps = {
  caption: string;
  image?: ReactNode;          // optional <Image /> or icon
  rotate?: number;            // base rotation in degrees
  phase?: 0 | 1 | 2;          // float animation phase group (0/1/2)
  variant?: "cream" | "amber" | "ink";
  className?: string;
  width?: string;             // tailwind width class e.g. "w-44"
};

// Three coordinated breathing phases — cards in the same group rise together.
const PHASE_DELAY = { 0: 0, 1: 1.6, 2: 3.2 } as const;
const PHASE_DURATION = 5.2;

/**
 * Polaroid-styled product card. Cream stamp + white frame + handwritten caption.
 * - Subtle floating animation (synced by phase group)
 * - Lifts on hover
 */
export default function PolaroidCard({
  caption,
  image,
  rotate = 0,
  phase = 0,
  variant = "cream",
  className,
  width = "w-44",
}: PolaroidCardProps) {
  return (
    <motion.div
      initial={{ y: 0, rotate }}
      animate={{ y: [0, -7, 0], rotate }}
      transition={{
        duration: PHASE_DURATION,
        repeat: Infinity,
        ease: "easeInOut",
        delay: PHASE_DELAY[phase],
      }}
      whileHover={{
        y: -12,
        rotate,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={cn(
        "polaroid relative select-none",
        "will-change-transform",
        width,
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* image area */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl">
        {image ?? <PolaroidPlaceholder variant={variant} />}
      </div>

      {/* handwritten caption */}
      <p
        className={cn(
          "mt-2 text-center font-display text-sm italic text-[#1F1F1F]/80",
          "sm:text-base"
        )}
      >
        {caption}
      </p>
    </motion.div>
  );
}

/**
 * Pretty placeholder when no product image is provided yet.
 * Three variants so the collage reads as curated, not as a grid of identical stamps.
 */
function PolaroidPlaceholder({
  variant = "cream",
}: {
  variant?: "cream" | "amber" | "ink";
}) {
  if (variant === "amber") {
    return (
      <div className="relative h-full w-full bg-[#FFB300]">
        <div className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-white/40" />
        <div className="absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-white/40" />
        <div className="absolute bottom-3 right-3 text-[10px] font-semibold tracking-widest text-white/70">
          NO. 02
        </div>
      </div>
    );
  }
  if (variant === "ink") {
    return (
      <div className="relative h-full w-full bg-[#1F1F1F]">
        <svg
          className="absolute inset-0 m-auto h-1/2 w-1/2 text-white/70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="M21 16l-5-5-9 8" />
        </svg>
        <div className="absolute bottom-3 right-3 text-[10px] font-semibold tracking-widest text-white/60">
          NO. 04
        </div>
      </div>
    );
  }
  // cream (default)
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-[#FFF3D6] via-[#FFF3D6] to-[#FFD166]/35">
      <svg
        className="absolute inset-0 m-auto h-1/2 w-1/2 text-[#1F1F1F]/40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 21l3.6-1 11-11-2.6-2.6-11 11L3 21zM18.7 5.3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0L14 4l3 3 1.7-1.7z" />
      </svg>
      <div className="absolute bottom-3 right-3 text-[10px] font-semibold tracking-widest text-[#1F1F1F]/40">
        NO. 01
      </div>
    </div>
  );
}
