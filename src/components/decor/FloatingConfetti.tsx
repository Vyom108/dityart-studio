"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

import Confetti, { type ConfettiShape } from "./Confetti";

type FloatingConfettiProps = {
  shape?: ConfettiShape;
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  variant?: "drift" | "rise" | "sway";
  duration?: number;
  delay?: number;
  opacity?: number;
};

/**
 * A floating decorative shape. The motion respects prefers-reduced-motion
 * (when set, it falls back to a static render via Confetti).
 */
export default function FloatingConfetti({
  shape = "dot",
  color = "#FFB300",
  size = 10,
  className,
  style,
  variant = "drift",
  duration = 5,
  delay = 0,
  opacity,
}: FloatingConfettiProps) {
  const reduce = useReducedMotion();
  const anim = (() => {
    if (variant === "rise") {
      return {
        y: [0, -8, 0],
        rotate: [0, 4, 0],
      };
    }
    if (variant === "sway") {
      return {
        x: [0, 6, 0],
        y: [0, -4, 0],
        rotate: [0, -6, 0],
      };
    }
    return {
      y: [0, 6, 0],
      rotate: [0, -4, 0],
    };
  })();
  return (
    <motion.div
      className={cn("absolute", className)}
      style={style}
      initial={{ opacity: opacity ?? 1 }}
      animate={reduce ? undefined : anim}
      transition={{
        duration,
        delay,
        ease: "easeInOut",
        repeat: reduce ? 0 : Infinity,
      }}
    >
      <Confetti shape={shape} color={color} size={size} />
    </motion.div>
  );
}
