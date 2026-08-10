"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * Animated scroll indicator at the bottom of the hero.
 * - Clicks scroll smoothly to #categories (the next section)
 * - All loops are killed when the user prefers reduced motion
 */
export default function ScrollIndicator() {
  const reduce = useReducedMotion();

  const handleClick = () => {
    const target =
      document.getElementById("categories") ??
      document.getElementById("products") ??
      document.getElementById("best-sellers");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: reduce ? 0 : 1, duration: 0.6 }}
      className="group flex flex-col items-center gap-2 text-[#1F1F1F]/55 transition-colors hover:text-[#1F1F1F]/80"
      aria-label="Scroll to next section"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
        Scroll
      </span>
      <div className="relative h-9 w-6 rounded-full border border-[#1F1F1F]/25 transition-colors group-hover:border-[#1F1F1F]/45">
        {!reduce && (
          <motion.span
            className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#1F1F1F]/55"
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </div>
      {!reduce && (
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      )}
    </motion.button>
  );
}
